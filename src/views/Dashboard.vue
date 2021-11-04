<template>
  <div>
    <nav-header />

    <main class="main">
        <!--==================== HOME ====================-->
        <home-page/>

        <!--==================== ABOUT ====================-->
        <about-page/>

        <!--==================== SKILLS ====================-->
        <skills-page/>

        <!--==================== QUALIFICATION ====================-->
        <qualification-page/>

        <!--==================== SERVICES ====================-->
        <services-page/>

        <!--==================== PORTFOLIO ====================-->
        <section class="portfolio section" id="portfolio">

        </section>

        <!--==================== PROJECT IN MIND ====================-->
        <section class="project section">

        </section>

        <!--==================== TESTIMONIAL ====================-->
        <section class="testimonial section">

        </section>

        <!--==================== CONTACT ME ====================-->
        <section class="contact section" id="contact">

        </section>
    </main>
    

  </div>
</template>

<script>
import Home from '@/components/parts/Home';
import About from '@/components/parts/About';
import Skills from '@/components/parts/Skills/Skills';
import Qualification from '@/components/parts/Qualification.vue';
import Services from '@/components/parts/Services/Services.vue';

export default {
  components: {
    'home-page': Home,
    'about-page': About,
    'skills-page': Skills,
    'qualification-page': Qualification,
    'services-page': Services,
  }
}
</script>
