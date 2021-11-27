<template>
    <section class="home section" id="home">
        <div class="home__container container__page grid__page">
            <div class="home__content grid__page">
                <div class="home__social">
                    <a href="https://api.whatsapp.com/send?phone=5551992618520&text=Hi%2C%20what's%20up%3F" target="_blank" class="home__social-icon">
                        <i class="uil uil-whatsapp-alt"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/wellington-willers-24302b199/" target="_blank" class="home__social-icon">
                        <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/wellington.willers" target="_blank" class="home__social-icon">
                        <i class="uil uil-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/wellington_willers/" target="_blank" class="home__social-icon">
                        <i class="uil uil-instagram-alt"></i>
                    </a>
                    <a href="https://msng.link/o/?@WelliWillers=tg" target="_blank" class="home__social-icon">
                        <i class="uil uil-telegram"></i>
                    </a>
                </div>

                <div class="home__img">
                    <svg class="home__blob" viewBox="0 0 200 187">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            <image class="home__blob-img" x="0" y="0" xlink:href="../../assets/img/perfil.png"/>
                        </g>
                    </svg>
  
                </div>


                <div class="home__data">
                    <h1 class="home__title">Hi, I'am Wellington</h1>
                    <h3 class="home__subtitle">FrontEnd Development</h3>
                    <p class="home__description">Right now I'm focused on learning vue js for front end and also learning more about Node js to work with backend in future projects.</p>
                    
                </div>
            </div>

            <div class="home__scroll">
                <a href="#contactme" class="button button--flex">
                    Contact Me
                    <i class="uil uil-message button__icon"></i>
                </a>
                <a href="#about" class="home__scroll-button button--flex">
                    <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                    <span class="home__scroll-name">Scroll Down</span>
                    <i class="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "home-page",
    mounted() {
        this.$srTop.reveal('.home__img', { delay: 100 });
        this.$srTop.reveal('.home__title', { delay: 200 });
        this.$srTop.reveal('.home__subtitle', { delay: 300 });
        this.$srTop.reveal('.home__description', { delay: 400 });
        this.$srTop.reveal('.home__social-icon', { interval: 100 });
        this.$srTop.reveal('.button--flex', { delay: 100 });
    }
}
</script>

<style>
    .home__container{
        gap: 1rem;
    }
    .home__content{
        grid-template-columns: .5fr 3fr;
        padding-top: 1.5rem;
        align-items: center;
    }
    .home__social{
        display: grid;
        grid-template-columns: max-content;
        row-gap: 1rem;
    }
    .home__social-icon {
        font-size: 1.25rem;
        color: var(--first-color);
    }
    .home__social-icon:hover{
        color: var(--first-color-alt);
    }
    .home__blob{
        width: 200px;
        fill: var(--first-color);
    }
    .home__blob-img{
        width: 200px !important;
    }
    .home__data{
        grid-column: 1/3;
    }
    .home__title{
        font-size: var(--big-font-size);
    }
    .home__subtitle{
        font-size: var(--h3-font-size);
        color: var(--text-color); 
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-0-75);
    }
    .home__description{
        margin-bottom: var(--mb-2);
    }

    .home__scroll{
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .home__scroll-button{
        color: var(--first-color);
        transition: .3s;
    }
    .home__scroll-button:hover{
        transform: translateY(.25rem);
    }
    .home__scroll-mouse{
        font-size: 2rem;
    }
    .home__scroll-name{
        font-size: var(--small-font-size);
        color: var(--title-color); 
        font-weight: var(--font-medium);
    }
    .home__scroll-arrow {
        font-size: 1.2rem;
    }

    


</style>