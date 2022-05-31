<template>
    <section class="qualification section">
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
                        <div class="qualification__left">
                            <h3 class="qualification__title">E.E.E.M.Santa Clara do Sul</h3>
                            <span class="qualification__subtitle">Santa Clara do Sul - RS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2006 - 2017
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
                            <h3 class="qualification__title">Computação + Departamento pessoal - Ensino</h3>
                            <span class="qualification__subtitle">Lajeado - RS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2015A - 2016B
                            </div>
                        </div>
                    </div>


                    <!-- qualificação 1 -->
                    <div class="qualification__data">
                        <div class="qualification__left">
                            <h3 class="qualification__title">Designer - Ensino</h3>
                            <span class="qualification__subtitle">Lajedo - RS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2016B - 2017A
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
                            <h3 class="qualification__title">Curso de inglês - Yázigi</h3>
                            <span class="qualification__subtitle">Brasil - Lajedo</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2016A - 2017A
                            </div>
                        </div>
                    </div>

                    <!-- qualificação 2 -->
                    <div class="qualification__data">
                        <div class="qualification__left">
                            <h3 class="qualification__title">Desenvolvimento web - Ensino</h3>
                            <span class="qualification__subtitle">Lajeado - RS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2017A - 2017B
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
                            <h3 class="qualification__title">Arquitetura e Urbanismo - UNIVATES</h3>
                            <span class="qualification__subtitle">Lajeado - RS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2018A - 2021A
                            </div>
                        </div>
                    </div>

                    <!-- qualificação 3 -->
                    <div class="qualification__data">
                        <div class="qualification__left">
                            <h3 class="qualification__title">Ignite - ReactJs</h3>
                            <span class="qualification__subtitle">Rocketseat</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2021B - In progress
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
                        <div class="qualification__left">
                            <h3 class="qualification__title">IM Brasil Agência</h3>
                            <span class="qualification__subtitle">Web design, Videomaker and Designer</span><br>
                            <span class="qualification__subtitle">Santa Clara do SUl - RS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                01/04/2016 - 17/06/2018 <br/> <small>(2 years and 2 months)</small>
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
                            <h3 class="qualification__title">Liquidworks Soluções em TI LTDA</h3>
                            <span class="qualification__subtitle">Junior developer</span><br>
                            <span class="qualification__subtitle">Lajeado - RS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                17/06/2018 - 12/01/2021 <br/> <small>(2 years and 6 months)</small>
                            </div>
                        </div>
                    </div>

                    <!-- qualificação 3 -->
                    <div class="qualification__data">
                        <div class="qualification__left">
                            <h3 class="qualification__title">Acemóbil Comércio e Serviços LTDA</h3>
                            <span class="qualification__subtitle">Auxiliar de conferencia</span><br>
                            <span class="qualification__subtitle">Lajeado - RS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                13/01/2021 - 28/06/2021 <br/> <small>(6 months)</small>
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
                            <span class="qualification__line"></span>
                        </div>
                        <div>
                            <h3 class="qualification__title">Liquidworks Soluções em TI LTDA</h3>
                            <span class="qualification__subtitle">Full developer</span><br>
                            <span class="qualification__subtitle">Lajeado - RS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                01/07/2021 - 13/06/2022 <br/> <small>(11 months)</small>
                            </div>
                        </div>
                    </div>

                     <!-- qualificação 5 -->
                    <div class="qualification__data">
                        <div class="qualification__left">
                            <h3 class="qualification__title">LightHouse</h3>
                            <span class="qualification__subtitle">Front-End developer - React.Js</span><br>
                            <span class="qualification__subtitle">Porto Alegre - RS</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                13/06/2022 - In Progress
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "qualification-page",
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

            console.log(process.env.AUTH_EMAIL)
        }
    },
    mounted() {
        this.$srTop.reveal('.qualification__calendar', { delay: 100 });
        this.$srTop.reveal('.qualification__subtitle', { delay: 200 });
        this.$srTop.reveal('.qualification__title', { delay: 300 });
        this.$srTop.reveal('.qualification__rounder', { delay: 400 });
        this.$srTop.reveal('.qualification__line', { delay: 500 });

    }
}
</script>

<style>
    .qualification__tabs{
        width: 100%;
        display: flex;
        gap: 1rem;
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
    .qualification__left {
        text-align: right;
    }
    .qualification__icon{
        font-size: 1.8rem;
        margin-right: var(--mb-0-25);
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
    .qualification__subtitle {
        display: inline-block;
        font-size: var(--small-font-size);
    }
    .qualification__calendar {
        font-size: .7rem;
        color: var(--text-color-light);
        margin-bottom: var(--mb-1);
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