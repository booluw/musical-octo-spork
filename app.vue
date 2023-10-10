<script lang="ts" setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const router = useRoute();
let jumbo: any;
let links: any;
let videoSection: any;
let video: any;

const menuToggler = ref(false);


onMounted(() => {
  if (process.client) {
    jumbo = document.getElementById("jumbo");
    links = document.querySelectorAll(".link-text");
    videoSection = document.getElementById("videoSection");
    video = document.getElementById("video");
  }
  gsap.to(video, {
    scrollTrigger: {
      trigger: videoSection,
      pin: true,
      start: "clamp(top 80px)",
      end: "clamp(bottom -500px)",
      scrub: 1,
      onEnter: () => video.play(),
      onEnterBack: () => video.play(),
      onLeave: () => video.pause(),
      onLeaveBack: () => video.pause(),
    },
    width: "90%",
    backgroundColor: "red",
  });
})

const mouseEnter = function (e: Event) {
  jumbo.addEventListener("mousemove", mouseMove, false);
};

const mouseLeave = function (e: Event) {
  jumbo.removeEventListener("mousemove", mouseMove);
};

const mouseMove = function (event: any) {
  let windowWidth = jumbo.clientWidth;
  let windowHeight = jumbo.clientHeight;

  let mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  let mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

  jumbo.style.background = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #001731, #09090A)`;
};

watch(router, () => {
  menuToggler.value = false;
});

watch(menuToggler, () => {
  const tl = gsap.timeline({ defaults: { duration: 0.5 } });
  if (menuToggler.value) {
    tl.to(".curtain", { translateY: 0 });
    tl.to(".mobile-nav", { translateY: 0 }, 0.2);
    tl.to(".menuToggler", { rotate: 90 }, 0.1);
    gsap.utils.toArray(".link-text").forEach((link: any, i) => {
      tl.from(
        link,
        {
          opacity: 0,
          y: "5px",
          ease: "circ.inOut",
          delay: i * 0.09,
        },
        0.6
      );
    });
  } else {
    tl.to(".mobile-nav", { translateY: "100%" });
    tl.to(".menuToggler", { rotate: 0 }, 0.1);
    tl.to(".curtain", { translateY: "100%" }, 0.2);
  }
});
</script>
<template>
  <section>
    <header class="bg-white px-10 flex items-stretch justify-between z-50">
      <nuxt-link to="/">
        <img src="/How-To-Transact-Logo.png" class="h-[100px] w-auto" />
      </nuxt-link>
      <div class="hidden md:min-w-[75vw] md:flex justify-between">
        <nav class="flex gap-1">
          <nuxt-link
            to="/"
            class="h-full px-4 flex items-center justify-center hover:bg-secondary font-bold font-heading uppercase"
            >home</nuxt-link
          >
          <nuxt-link
            to="#about-us"
            class="h-full px-4 flex items-center justify-center hover:bg-secondary font-bold font-heading uppercase"
            >About us</nuxt-link
          >
          <nuxt-link
            to="#what-we-do"
            class="h-full px-4 flex items-center justify-center hover:bg-secondary font-bold font-heading uppercase"
            >what we do</nuxt-link
          >
          <nuxt-link
            to="#register"
            class="h-full px-3 flex items-center justify-center hover:bg-secondary font-bold font-heading uppercase"
            >register</nuxt-link
          >
          <nuxt-link
            to="#elite-300"
            class="h-full px-4 flex items-center justify-center hover:bg-secondary font-bold font-heading uppercase"
            >elite 300</nuxt-link
          >
          <nuxt-link
            to="#testimonials"
            class="h-full px-4 flex items-center justify-center hover:bg-secondary font-bold font-heading uppercase"
            >testimonials</nuxt-link
          >
          <nuxt-link
            to="#contact-us"
            class="h-full px-4 flex items-center justify-center hover:bg-secondary font-bold font-heading uppercase"
            >contact us</nuxt-link
          >
        </nav>
        <a
          href="https://courses.howtotransact.com/login"
          target="_blank"
          class="flex justify-center items-center bg-secondary rounded-md font-bold uppercase px-10 py-5 my-5"
          >Log in</a
        >
      </div>
      <div
        class="py-7 flex md:hidden items-center justify-between gap-2 menuToggler"
        @click="menuToggler = !menuToggler"
      >
        <div class="h-1/3 pl-1 rounded-lg bg-secondary"></div>
        <div class="h-2/3 pl-1 rounded-lg bg-secondary"></div>
        <div class="h-1/4 pl-1 rounded-lg bg-secondary"></div>
      </div>
      <div
        class="md:hidden fixed top-24 right-0 bottom-0 left-0 bg-secondary curtain"
        style="transform: translateY(100%)"
      />
      <div
        class="md:hidden flex flex-col justify-between fixed top-24 right-0 bottom-0 left-0 z-40 bg-primary-900 p-10 mobile-nav"
        style="transform: translateY(100%)"
      >
        <nav class="flex flex-col gap-5">
          <nuxt-link
            to="/"
            class="h-full p-3 link-text flex items-center justify-center text-white font-bold font-heading uppercase"
            >home</nuxt-link
          >
          <nuxt-link
            to="#about-us"
            class="h-full p-3 link-text flex items-center justify-center text-white font-bold font-heading uppercase"
            >About us</nuxt-link
          >
          <nuxt-link
            to="#what-we-do"
            class="h-full p-3 link-text flex items-center justify-center text-white font-bold font-heading uppercase"
            >what we do</nuxt-link
          >
          <nuxt-link
            to="#register"
            class="h-full p-3 link-text flex items-center justify-center text-white font-bold font-heading uppercase"
            >register</nuxt-link
          >
          <nuxt-link
            to="#elite-300"
            class="h-full p-3 link-text flex items-center justify-center text-white font-bold font-heading uppercase"
            >elite 300</nuxt-link
          >
          <nuxt-link
            to="#testimonials"
            class="h-full p-3 link-text flex items-center justify-center text-white font-bold font-heading uppercase"
            >testimonials</nuxt-link
          >
          <nuxt-link
            to="#contact-us"
            class="h-full p-3 link-text flex items-center justify-center text-white font-bold font-heading uppercase"
            >contact us</nuxt-link
          >
        </nav>
        <a
          href="https://courses.howtotransact.com/login"
          target="_blank"
          class="link-text flex justify-center items-center bg-secondary rounded-md font-bold uppercase px-10 py-5 my-5"
          >Log in</a
        >
      </div>
    </header>
    <section
      id="jumbo"
      ref="jumbo"
      class="jumbotron min-h-screen flex flex-col md:flex-row items-center px-10 py-16 md:py-0 gap-14 md:gap-0"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      @mousemove="mouseMove"
    >
      <div class="md:w-2/3 text-white">
        <h2 class="uppercase font-semibold text-secondary text-2xl">
          htt by: your final academy
        </h2>
        <h1 class="uppercase font-heading text-white text-7xl font-bold">
          Forex trader
        </h1>
        <div class="mt-14">
          <p class="text-gray-400 opacity-75 text-4xl md:w-1/2">
            "Ambition is the first step towards success"
          </p>
          <a
            href=""
            class="capitalize inline-flex items-center gap-3 hover:gap-5 transition-all mt-8 py-4 px-10 bg-secondary text-black font-semibold rounded"
          >
            get started

            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2911 1.00441C11.5255 0.770072 11.8433 0.638428 12.1748 0.638428C12.5063 0.638428 12.8241 0.770072 13.0586 1.00441L20.5586 8.50441C20.7929 8.73882 20.9245 9.05671 20.9245 9.38816C20.9245 9.71962 20.7929 10.0375 20.5586 10.2719L13.0586 17.7719C12.8228 17.9996 12.507 18.1256 12.1793 18.1228C11.8516 18.1199 11.538 17.9884 11.3063 17.7567C11.0745 17.5249 10.9431 17.2114 10.9402 16.8837C10.9374 16.5559 11.0634 16.2402 11.2911 16.0044L16.6573 10.6382H2.1748C1.84328 10.6382 1.52534 10.5065 1.29092 10.272C1.0565 10.0376 0.924805 9.71968 0.924805 9.38816C0.924805 9.05664 1.0565 8.7387 1.29092 8.50428C1.52534 8.26986 1.84328 8.13816 2.1748 8.13816H16.6573L11.2911 2.77191C11.0567 2.5375 10.9251 2.21962 10.9251 1.88816C10.9251 1.55671 11.0567 1.23882 11.2911 1.00441Z"
                fill="#18181B"
              />
            </svg>
          </a>
        </div>
      </div>
      <img
        src="/How-To-Transact-White-Logo.png"
        class="md:w-1/3 h-auto opacity-50"
      />
    </section>
    <section
      id="movingTextSection"
      class="p-10 flex flex-col md:flex-row justify-between gap-10"
    >
      <div class="py-5 md:w-1/4 moving-box">
        <h2 class="font-bold font-heading text-4xl text-primary-600 uppercase">
          Los angeles,
        </h2>
        <p class="font-semibold text-secondary text-xl">California, USA</p>
      </div>

      <div class="py-5 md:w-1/4 moving-box">
        <h2 class="font-bold font-heading text-4xl text-primary-600 uppercase">
          VANCOUVER,
        </h2>
        <p class="font-semibold text-secondary text-xl">CANADA, BC</p>
      </div>

      <div class="py-5 md:w-1/4 moving-box">
        <h2 class="font-bold font-heading text-4xl text-primary-600 uppercase">
          MEXICO CITY,
        </h2>
        <p class="font-semibold text-secondary text-xl">MX, D.F., MEXICO</p>
      </div>

      <div class="py-5 md:w-1/4 moving-box">
        <h2 class="font-bold font-heading text-4xl text-primary-600 uppercase">
          LONDON,
        </h2>
        <p class="font-semibold text-secondary text-xl">UK</p>
      </div>
    </section>
    <section
      id="videoSection"
      class="flex justify-center items-center relative px-8 md:px-0"
    >
      <video
        loop
        id="video"
        :src="'/vids/BestForexAcademy.mov'"
        class="rounded-xl md:rounded-3xl w-full md:w-3/4 h-auto md:mx-10"
      />
    </section>
    <section
      class="bg-white flex items-center md:gap-16 flex-col md:flex-row mt-20 py-32 px-10"
    >
      <img src="" class="md:w-1/3 bg-primary-900 rounded-3xl" />
      <div class="md:w-2/3 flex gap-5 items-start">
        <svg
          class="h-auto w-32"
          viewBox="0 0 250 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 168L62.2146 0H116.438L80.4795 168H0ZM133.562 168L195.776 0H250L214.041 168H133.562Z"
            fill="#F5A524"
          />
        </svg>
        <div class="md:w-2/3">
          <p class="font-semibold text-black text-2xl my-5">
            For the first time ever... Master sales Guru Devon Lee is sharing
            his secrets and easily applicable sales techniques to guide you to
            personal success...
          </p>
          <h2
            class="font-heading border-l-4 border-secondary pl-3 text-xl text-gray-500"
          >
            howtotransact.com
          </h2>
        </div>
      </div>
    </section>
    <section class="min-h-screen py-12">
      <h2 class="font-heading text-black text-5xl md:sticky top-10 z-10 px-10 pb-10 md:px-20 md:pb-10">What we do</h2>
      <div class="md:sticky top-28 z-10 bg-white px-10 pt-5 pb-28 md:py-10 md:p-20 md:pb-32 rounded-t-[40px] md:rounded-none">
        <div class="w-full h-full rounded-[50px] mt-10">
          <p class="text-black text-xl">
            We offer the ultimate selling course you’ll need for conducting global
            transactions in any industry. our focus is on cultivating second
            nature selling skills. at htt, we offer more than just a selling
            course. we focus on multiple industries to ensure that “how to
            transact” is relevant to your job, team, business, or company.
            <br /><br />
            Upon completing the course, not only will we help you uncover the
            seller within you, but we also provide full access to partner with
            salesforce, granting you the opportunity to sell some of the most
            exclusive products and services in the world. we don’t just help you
            discover the sales beast in you; we guide you after graduation and
            give you the opportunity to partner with us.
            <br /><br />
            No more finishing courses and feeling stuck because you didn’t have a
            team to support you. we believe in nurturing our students’ potential,
            which is why we also provide leads for your success.
            <br /><br />
            HTT, we won’t make the mistake of training you without giving you
            opportunities to put your skills into action. we will point you in the
            direction of success and fuel your journey by offering the resources
            you need. complete your course, pass the test, and gain access to
            opportunities that ai can’t access. we at htt won’t give up on humans!
          </p>
        </div>
      </div>
      <div class="md:sticky top-28 z-10 bg-primary-900 px-10 pt-5 pb-28 md:py-10 md:p-20 md:pb-32 rounded-b-[40px] md:rounded-none">
        <div class="w-full h-full rounded-[50px] mt-5">
          <p class="text-gray-100 text-xl">
            We offer the ultimate selling course you’ll need for conducting global
            transactions in any industry. our focus is on cultivating second
            nature selling skills. at htt, we offer more than just a selling
            course. we focus on multiple industries to ensure that “how to
            transact” is relevant to your job, team, business, or company.
            <br /><br />
            Upon completing the course, not only will we help you uncover the
            seller within you, but we also provide full access to partner with
            salesforce, granting you the opportunity to sell some of the most
            exclusive products and services in the world. we don’t just help you
            discover the sales beast in you; we guide you after graduation and
            give you the opportunity to partner with us.
            <br /><br />
            No more finishing courses and feeling stuck because you didn’t have a
            team to support you. we believe in nurturing our students’ potential,
            which is why we also provide leads for your success.
            <br /><br />
            HTT, we won’t make the mistake of training you without giving you
            opportunities to put your skills into action. we will point you in the
            direction of success and fuel your journey by offering the resources
            you need. complete your course, pass the test, and gain access to
            opportunities that ai can’t access. we at htt won’t give up on humans!
          </p>
        </div>
      </div>
    </section>
    <section class="h-screen">
      Hello World
    </section>
  </section>
</template>

<style>
.jumbotron {
  /*Fallback if gradeints don't work */
  background: #09090a;
  /*Linear gradient... */
  background: radial-gradient(at left, #001731, #09090a);
}

.moving-box:not(:last-of-type) {
  border-inline-end: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
