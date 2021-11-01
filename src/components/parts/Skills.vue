<template>
    <section class="skills section" id="skills">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle">My technical level</span>

        <div class="skills__container container grid">
            <!-- skill 1 -->
            <div class="skills__content">
                <div class="skills__header">
                    <i class="uil uil-brackets-curly skills__icon"></i>

                    <div>
                        <h1 class="skills__title">FrontEnd dev</h1>
                        <span class="skills__subtitle">More than 4 years</span>
                    </div>

                    <i class="uil uil-angle-down skills__arrow"></i>
                </div>

                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills_title">
                            <h3 class="skills__name">HTML</h3>
                            <span class="skills__number">90%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__html"></span>
                        </div>
                    </div>

                    <div class="skills__data">
                        <div class="skills_title">
                            <h3 class="skills__name">CSS</h3>
                            <span class="skills__number">90%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__css"></span>
                        </div>
                    </div>

                    <div class="skills__data">
                        <div class="skills_title">
                            <h3 class="skills__name">REACT</h3>
                            <span class="skills__number">90%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__react"></span>
                        </div>
                    </div>
                    
                    <div class="skills__data">
                        <div class="skills_title">
                            <h3 class="skills__name">VUE</h3>
                            <span class="skills__number">90%</span>
                        </div>
                        <div class="skills__bar">
                            <span class="skills__percentage skills__vue"></span>
                        </div>
                    </div>
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
    .skills__img{
        width: 200px;
        border-radius: .5rem;
        justify-self: center;
        align-self: center;
    }
    .skills__description{
        text-align: center;
        margin-bottom: var(--mb-2-5);
    }
    .skills__info{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2-5);
    }
    .skills__info-title {
        font-size: var(--h2-font-size);
        font-weight: var(--font-semi-bold);
        color: var(--title-color);
    }
    .skills__info-title, .skills__info-name {
        display: block;
        text-align: center;
    }
    .skills__info-name{
        font-size:var(--smaller-font-size);
    }
    .skills__buttons{
        display: flex;
        justify-content: center;
    }
    .skills__icon{
        font-size: 1.5rem;
        margin-left: .5rem;
    }
</style>