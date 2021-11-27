<template>
    <section class="about section" id="about">
        <h2 class="section__title">About Me</h2>
        <span class="section__subtitle">My introduction</span>

        <div class="about__container container__page grid__page">
            <img src="@/assets/img/perfil-2.png" alt="" class="about__img">

            <div class="about__data">
                <p class="about__description">
                    Wellington Willers, I'm 22 years old and working as a junior developer at a company 
                    in the region where I live, I studied architecture for a while, but programming is the 
                    area with which I most identify.
                    In the portfolio below you will see many of my individual projects based on what I 
                    learned during some of my courses and also my skills.
                </p>

                <div class="about__info">
                    <div>
                        <span class="about__info-title">17+</span>
                        <span class="about__info-name">Projects in <br> FrontEnd</span>
                    </div>
                    <div>
                        <span class="about__info-title">03</span>
                        <span class="about__info-name">Projects in <br> BackEnd</span>
                    </div>
                    <div>
                        <span class="about__info-title">04</span>
                        <span class="about__info-name">Projects in <br> Apps</span>
                    </div>
                </div>

                <!-- <div class="about__buttons">
                    <a href="@/assets/pdf/Welli-Cv.pdf" download="" class="button button--flex">
                        Download CV <i class="uil uil-file-download-alt about__icon"></i>
                    </a>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "about-page",
    mounted() {
        this.$srTop.reveal('.about__img', { delay: 300 });
        this.$srTop.reveal('.about__description', { delay: 400 });
        this.$srTop.reveal('.section__subtitle', { interval: 100 });
    }
}
</script>

<style>
    .about__img{
        width: 300px;
        border-radius: .5rem;
        justify-self: center;
        align-self: center;
    }
    .about__description {
        text-align: center;
        margin-bottom: var(--mb-2-5);
    }
    .about__info{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2-5);
    }
    .about__info-title {
        font-size: var(--h2-font-size);
        font-weight: var(--font-semi-bold);
        color: var(--title-color);
    }
    .about__info-title, .about__info-name {
        display: block;
        text-align: center;
    }
    .about__info-name{
        font-size:var(--smaller-font-size);
    }
    .about__buttons{
        display: flex;
        justify-content: center;
    }
    .about__icon{
        font-size: 1.5rem;
        margin-left: .5rem;
    }
</style>