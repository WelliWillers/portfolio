<template>
    <section class="about section" id="about">
        <h2 class="section__title">About Me</h2>
        <span class="section__subtitle">My introduction</span>

        <div class="about__container container__page grid__page">
            <img src="@/assets/img/about.jpg" alt="" class="about__img">

            <div class="about__data">
                <p class="about__description">
                    First I will introduce myself. My name is Wellington Willers I'm 22 years old and I work in the junior developer business in a small company in the region where 
                    I live, a while ago I studied architecture but programming is the area that fills my heart, since then I've been studying ReactJs and NextJs to one day enter this job market.<br><br>
                    In the repositories below you will see many of my studies, individual and many projects developed during Ignite, offered by Rocketseat company.
                </p>

                <div class="about__info">
                    <div>
                        <span class="about__info-title">08+</span>
                        <span class="about__info-name">anos <br> experiência</span>
                    </div>
                    <div>
                        <span class="about__info-title">08+</span>
                        <span class="about__info-name">anos <br> experiência</span>
                    </div>
                    <div>
                        <span class="about__info-title">08+</span>
                        <span class="about__info-name">anos <br> experiência</span>
                    </div>
                </div>

                <div class="about__buttons">
                    <a href="@/assets/pdf/Alexa-Cv.pdf" download="" class="button button--flex">
                        Download CV <i class="uil uil-file-download-alt about__icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "about-page"
}
</script>

<style>
    .about__img{
        width: 200px;
        border-radius: .5rem;
        justify-self: center;
        align-self: center;
    }
    .about__description{
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