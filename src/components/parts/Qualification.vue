<template>
    <section class="qualification section" id="qualification">
        <h2 class="section__title">Qualification</h2>
        <span class="section__subtitle">My history</span>

        <div class="qualification__container container__page">
            <div class="qualification__tabs">
                <div :class="['qualification__button', 'button--flex', {qualification__active:education}]" @click.prevent="category">
                    <i class="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
                <div :class="['qualification__button', 'button--flex', {qualification__active:work}]" @click.prevent="category">
                    <i class="uil uil-briefcase-alt qualification__icon"></i>
                    Work
                </div>
            </div>


            <div class="qualification__sections">
                <div class="qualification__content" v-if="education">

                    <!-- qualificação 1 -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">computer Engineering</h3>
                            <span class="qualification__subtitle">Brasil - Univates</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2009 - 2015
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>

                    <!-- qualificação 2 -->
                    <div class="qualification__data">
                        <div></div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                        <div>
                            <h3 class="qualification__title">computer Engineering</h3>
                            <span class="qualification__subtitle">Brasil - Univates</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2009 - 2015
                            </div>
                        </div>
                    </div>

                    <!-- qualificação 3 -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">computer Engineering</h3>
                            <span class="qualification__subtitle">Brasil - Univates</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2009 - 2015
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                        </div>
                    </div>
                </div>


                <div class="qualification__content" v-if="work">

                    <!-- qualificação 1 -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">computer awdwadaw</h3>
                            <span class="qualification__subtitle">Brasil - Univates</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2009 - 2015
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>

                    <!-- qualificação 2 -->
                    <div class="qualification__data">
                        <div></div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                        <div>
                            <h3 class="qualification__title">computer Engineering</h3>
                            <span class="qualification__subtitle">Brasil - Univates</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2009 - 2015
                            </div>
                        </div>
                    </div>

                    <!-- qualificação 3 -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">computer Engineering</h3>
                            <span class="qualification__subtitle">Brasil - Univates</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2009 - 2015
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                    
                    <!-- qualificação 4 -->
                    <div class="qualification__data">
                        <div></div>
                        <div>
                            <span class="qualification__rounder"></span>
                        </div>
                        <div>
                            <h3 class="qualification__title">computer Engineering</h3>
                            <span class="qualification__subtitle">Brasil - Univates</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2009 - 2015
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "home-page",
    data(){
        return {
            education: true,
            work: false,
        }
    },
    methods: {
        category(){
            this.education = !this.education;
            this.work = !this.work;
        }
    }
}
</script>

<style>
    .qualification__tabs{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2);
    }
    .qualification__button{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        cursor: pointer;
    }
    .qualification__button:hover,
    .qualification__active{
        color: var(--first-color);
    }
    .qualification__icon{
        font-size: 1.8rem;
        margin-right: var(--mb0-25);
    }
    .qualification__data{
        display: grid;
        grid-template-columns: 1fr max-content 1fr;
        column-gap: 1.5rem;
    }
    .qualification__title{
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
    }
    .qualification__subtitle{
        display: inline-block;
        font-size: var(--small-font-size);
    }
    .qualification__calendar{
        font-size: var(--small-font-size);
        color: var(--text-color-light);
    }
    .qualification__rounder{
        display: inline-block;
        width: 13px;
        height: 13px;
        background-color: var(--first-color);
        border-radius: 50%;
    }
    .qualification__line{
        display: block;
        width: 1px;
        height: 100%;
        background-color: var(--first-color);
        transform: translate(6px, -7px);
    }
</style>