<template>
    <footer class="footer">
        <div class="footer__bg">
            <div class="footer__container container__page grid__page">
                <div>
                    <h1 class="footer__title">Alexa</h1>
                    <span class="footer__subtitle">FrontEnd developer</span>
                </div>

                <ul class="footer__links">
                    <li>
                        <a href="#services" class="footer__link">Services</a>
                    </li>
                    <li>
                        <a href="#about" class="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contactme" class="footer__link">Contact</a>
                    </li>
                </ul>

                <div class="footer__socials">
                    <a href="#" class="footer__social">
                        <i class="uil uil-whatsapp-alt"></i>
                    </a>
                    <a href="#" class="footer__social">
                        <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="#" class="footer__social">
                        <i class="uil uil-facebook"></i>
                    </a>
                    <a href="#" class="footer__social">
                        <i class="uil uil-instagram-alt"></i>
                    </a>
                    <a href="#" class="footer__social">
                        <i class="uil uil-skype"></i>
                    </a>
                    <a href="#" class="footer__social">
                        <i class="uil uil-telegram"></i>
                    </a>
                </div>
            </div>
            <p class="footer__copy">
                &#169; Wellington Willers. All rights reserved.
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "nav-footer",
}
</script>

<style>
    .footer{
        padding: 0;
        text-align: center;
    }
    .footer__bg{
        background-color: var(--first-color-second );
        padding: 2rem 0 3rem;
    }
    .footer__container{
        row-gap: 3.5rem;
    }
    .footer__title,
    .footer__subtitle,
    .footer__link,
    .footer__social{
        color: #fff;
    }
    .footer__title{
        font-size: var(--h1-font-size);
        margin-bottom: var(--mb-0-25);
    }
    .footer__subtitle{
        font-size: var(--small-font-size);
    }
    .footer__links{
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
    }
    .footer__link:hover{
        color: var(--first-color-lighter);
    }
    .footer__copy{
        font-size: var(--smaller-font-size);
        text-align: center;
        color: var(--text-color-lighter);
        margin-top: var(--mb-3);
    }
    .footer__socials {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .footer__social{
        font-size: 1.25rem;
        margin-bottom: var(--mb-1-5);
    }
    .footer__social:hover{
        color: var(--first-color-lighter);
    }
</style>