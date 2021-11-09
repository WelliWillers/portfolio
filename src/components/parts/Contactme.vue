<template>
    <section class="contact section" id="contactme">
        <h2 class="section__title">Contact me</h2>
        <span class="section__subtitle">My client saying</span>

        <div class="contact__container container__page grid__page">
            <div>
                <div class="contact__information">
                    <i class="uil uil-phone contact__icon"></i>

                    <div>
                        <h3 class="contact__title">Call me</h3>
                        <span class="contact__subtitle">+55 (51) 99261-8520</span>
                    </div>
                </div>
                <div class="contact__information">
                    <i class="uil uil-envelope contact__icon"></i>

                    <div>
                        <h3 class="contact__title">Email</h3>
                        <span class="contact__subtitle">Wellington.willers@gmail.com</span>
                    </div>
                </div>
                <div class="contact__information">
                    <i class="uil uil-map-marker contact__icon"></i>

                    <div>
                        <h3 class="contact__title">Location</h3>
                        <span class="contact__subtitle">Rua Dr. José Edgar Ramos, Lajeado - RS</span>
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
    name: "contactme-page"
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