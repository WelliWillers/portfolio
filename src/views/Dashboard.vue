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
        <portfolio-page />

        <!--==================== PROJECT IN MIND ====================-->
        <section class="project section">
          <div class="project__bg">
            <div class="project__container container__page grid__page">
              <div class="project__data">
                <h2 class="project__title">You have a new project in mind?</h2>
                <span class="project__subtitle">Contact me now and get a 10% discount on your new project. </span>
                <a href="#contactme" class="button button--flex button--white">
                  Contact me
                  <i class="uil uil-message project__icon button__icon"></i>
                </a>
              </div>

              <img src="/img/project.png" class="project__img" alt="">
            </div>
          </div>
        </section>

        <!--==================== TESTIMONIAL ====================-->
        <testimonial-page />

        <!--==================== CONTACT ME ====================-->
        <section class="contact section" id="contactme">

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
import Portfolio from '@/components/parts/Portfolio/Portfolio.vue';
import Testimonial from '@/components/parts/Testimonial.vue';

export default {
  components: {
    'home-page': Home,
    'about-page': About,
    'skills-page': Skills,
    'qualification-page': Qualification,
    'services-page': Services,
    'portfolio-page': Portfolio,
    'testimonial-page': Testimonial,
  }
}
</script>

<style>
  .project {
    text-align: center;
  }
  .project__bg{
    background-color: var(--first-color-second);
    padding: 3rem 3rem 0 3rem;
  }
  .project__data{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .project__title{
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-0-75);
  }
  .project__subtitle{
    margin-bottom: var(--mb-1-5);
    color: var(--first-color-lighter)
  }
  .project__title,
  .project__subtitle{
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-0-75);
  }
  .project__img{
    width: 232px;
    justify-self: center;
  }
</style>