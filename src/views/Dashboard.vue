<template>
  <div>
    <nav-header />
    <main class="main">
        <home-page/>
        <about-page/>
        <skills-page/>
        <qualification-page/>
        <services-page/>
        <portfolio-page />
        <section class="project section">
          <div class="project__bg">
            <div class="project__container container__page grid__page">
              <div class="project__data">
                <h2 class="project__title">Do you have a new project in mind?</h2>
                <span class="project__subtitle">Contact me now and get a 10% discount on your new project. </span>
                <a href="#contactme" class="button button--flex button--white">
                  Contact me
                  <i class="uil uil-message project__icon button__icon"></i>
                </a>
              </div>

              <img src="@/assets/img/perfil.png" class="project__img" alt="">
            </div>
          </div>
        </section>
        <testimonial-page />
        <contactme-page/>
    </main>
    <nav-footer/>
    <a href="#" class="scrollup" id="scroll-up">
      <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  mounted(){
    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
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
    margin-bottom: var(--mb-1-5);
  }
  .project__subtitle{
    margin-bottom: var(--mb-2-5);
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

  .scrollup{
    position: fixed;
    right: 1rem;
    bottom: -20%;
    background-color: var(--first-color);
    opacity: .8;
    padding: 0 .3rem;
    border-radius: .4rem;
    z-index: var(--z-tooltip);
    transition: .4s;
  }
  .scrollup:hover{
    background-color: var(--first-color-alt);
  }
  .scrollup__icon{
    font-size: 1.5rem;
    color: #fff;
  }
  .show-scroll {
    bottom: 5rem;
  }
</style>