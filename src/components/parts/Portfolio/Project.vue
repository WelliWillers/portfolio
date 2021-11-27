<template>
    <div :class="['portfolio__content', 'mix', `${project.category}`]">
        <a :href="project.link"><img :src="project.img" alt="portfolio img"></a>
        <div class="portfolio__data">
            <span class="portfolio__subtitle">{{project.title}}</span>
            <a :href="project.link"><h2 class="portfolio__title">{{project.subtitle}}</h2></a>
            <p>{{project.description}}</p>

            <a :href="project.link" target="_blanck" class="button button--flex">
                {{project.buttomText}}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-item',
    props: {
        project: {}
    }, mounted(){
        this.$srTop.reveal('.portfolio__content', { delay: 100 });
    }
}
</script>

<style>
    .portfolio__content{
        background-color: var(--container-color);
        border-radius: .5rem;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(174, 190, 205, .3);
    }
    .portfolio__content:hover{
        box-shadow: 0 8px 12px rgba(174, 190, 205, .4);
    }
    .portfolio__img {
        width: 100%;
        transition: .3s;
    }
    .portfolio__content:hover .portfolio__img {
        transform: scale(1.02);
    }
    .portfolio__data{
        padding: 2.5rem
    }
    .portfolio__subtitle{
        font-size: var(--small-font-size);
        color: var(--font-color-light);
        margin-bottom: var(--mb-2) 0;
    }
    .portfolio__title{
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-1);
        font-weight: var(--font-medium);
    }
</style>