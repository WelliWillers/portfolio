<template>
    <section class="contact section" id="contactme">
        <h2 class="section__title">Contact me</h2>
        <span class="section__subtitle">Or clear your doubts</span>

        <div class="contact__container container__page grid__page">
            <div>
                <div class="contact__information">
                    <i class="uil uil-phone contact__icon"></i>

                    <div>
                        <h3 class="contact__title">Call me</h3>
                        <span class="contact__subtitle"><a href="tell:51992618520">+55 (51) 99261-8520</a></span>
                    </div>
                </div>
                <div class="contact__information">
                    <i class="uil uil-envelope contact__icon"></i>

                    <div>
                        <h3 class="contact__title">Email</h3>
                        <span class="contact__subtitle"><a href="mailto:Wellington.willers@gmail.com">Wellington.willers@gmail.com</a></span>
                    </div>
                </div>
                <div class="contact__information">
                    <i class="uil uil-map-marker contact__icon"></i>

                    <div>
                        <h3 class="contact__title">Location</h3>
                        <span class="contact__subtitle"><a href="https://www.google.com/maps?q=lajeado&um=1&ie=UTF-8&sa=X&sqi=2&ved=2ahUKEwjHxcm5iZv0AhUCZt4KHbRmBPUQ_AUoAXoECAEQAw" target="_blank">Brazil, Lajeado - RS</a></span>
                    </div>
                </div>
            </div>

            <form action="" class="contact__form grid__page">
                <div class="contact__inputs grid__page">
                    <div class="contact__content">
                        <label for="" class="contact__label">Name</label>
                        <input type="text" class="contact__input">
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">Email</label>
                        <input type="email" class="contact__input">
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">Project</label>
                        <input type="text" class="contact__input">
                    </div>
                    <div class="contact__content">
                        <label for="" class="contact__label">Message</label>
                        <textarea name="" class="contact__input" id="" cols="0" rows="7"></textarea>
                    </div>

                    <div>
                        <a href="#0" class="button button--flex">
                            Send Message
                            <i class="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </div>
            </form>
        </div>

    </section>
</template>

<script>
export default {
    name: "contactme-page",
    mounted() {
        this.$srTop.reveal('.contact__icon', { delay: 100 });
        this.$srTop.reveal('.contact__title', { delay: 200 });
        this.$srTop.reveal('.contact__subtitle', { delay: 300 });
        this.$srTop.reveal('.contact__content', { interval: 100 });
    }
}
</script>

<style>
    .contact__container{
        row-gap: 3rem;
    }
    .contact__information{
        display: flex;
        margin-bottom: var(--mb-2);
        align-items: center;
        gap: 1rem;
    }
    .contact__icon{
        font-size: 2rem;
        color: var(--first-color);
        margin-bottom: var(--mb-0-75);
    }
    .contact__title{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
    }
    .contact__subtitle{
        font-size: var(--small-font-size);
        color: var(--text-color-light);
    }
    .contact__content{
        background-color: var(--input-color);
        border-radius: .5rem;
        padding: .75rem 1rem .25rem;

    }
    .contact__label{
        font-size: var(--small-font-size);
        color: var(--title-color);
    }
    .contact__input{
        width: 100%;background-color: var(--input-color);
        color: var(--text-color);
        font-family: var(--body-font-family);
        font-size: var(--normal-font-size);
        border: none;
        outline: none;
        padding: .75rem 1rem .25rem 0;
    }
</style>