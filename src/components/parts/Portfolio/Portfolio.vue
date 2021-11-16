<template>
    <section class="portfolio section" id="portfolio">
        <h2 class="section__title">Portfolio</h2>
        <span class="section__subtitle">My Recent works</span>

        <div class="portfolio__container container__page grid__page">
            
            <div class="portfolio__nav">
                <span class="portfolio__item" data-filter="all">All</span>
                <span class="portfolio__item" data-filter=".web">Web</span>
                <span class="portfolio__item" data-filter=".uiux">Ui/Ux</span>
                <span class="portfolio__item" data-filter=".app">App</span>
            </div>
            
            <div class="portfolio__grid-projects">
                <project-item v-for="project in projects" :key="project.id" :project="project"/>
            </div>

        </div>
        <!-- ,
    "projeto-12": {
        "id": 12,
        "img": "./img/caparekpay.png",
        "title": "Figma",
        "subtitle": "App RekPay",
        "description": "Application developed for the company I work for.",
        "category": "uiux",
        "link": "https://www.liquidworks.com.br/"
    },
    "projeto-01": {
        "id": 1,
        "img": "./img/capafidem.png",
        "title": "Vue JS and Figma",
        "subtitle": "Fidem banc",
        "description": "Application created and developed for the company I work for.",
        "category": "web uiux",
        "link": "https://www.liquidworks.com.br/"
    } -->
    </section>
</template>

<script>
import mixitup from 'mixitup';

import projects from './projects.json'
import Project from './Project'

export default {
    name: "portfolio-page",
    components: {
        'project-item': Project
    },
    data(){
        return {
            projects
        }
    },
    mounted() {
        var containerEl = document.querySelector('.portfolio__container');
        mixitup(containerEl);
    }
}
</script>

<style>
    .portfolio__nav{
        text-align: center;
        margin-bottom: var(--mb-2);
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .portfolio__item{
        cursor: pointer;
    }
    .portfolio__item:hover{
        color: var(--first-color);
    }

    .portfolio__grid-projects {
        display: grid;
        gap: 1.5rem;
    }
    
</style>