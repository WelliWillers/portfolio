<template>
  <div>
    <nav-header />

    <main class="main">
        <!--==================== HOME ====================-->
        <home-page/>

        <!--==================== ABOUT ====================-->
        <section class="about section" id="about">

        </section>

        <!--==================== SKILLS ====================-->
        <section class="skills section" id="skills">

        </section>

        <!--==================== QUALIFICATION ====================-->
        <section class="qualification section">

        </section>

        <!--==================== SERVICES ====================-->
        <section class="services section" id="services">

        </section>

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

export default {
  components: {
    'home-page': Home
  }
}
</script>
