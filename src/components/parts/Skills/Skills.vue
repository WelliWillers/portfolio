<template>
    <section class="skills section" id="skills">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle">My technical level</span>

        <div class="skills__container container__page grid__page">
            <div 
                v-for="skill in skills" 
                :key="skill.id"
            >
                <skills-parts :skill="skill"/>
            </div>
        </div>
    </section>
</template>

<script>
import skills from './skills.json'
import SkillsParts from './SkillsParts'

export default {
    name: "about-page",
    components: {
        SkillsParts
    },
    data(){
        return {
            skills,
        }
    }
}
</script>

<style>
    .section__title{
        font-size: var(--h3-font-size);
    }
    .section__subtitle{
        font-size: var(--small-font-size);
        color: var(--text-color-light);
    }
    .skills__container{
        row-gap: 0;
    }
    .skills__content {
        margin-bottom: var(--mb-2);
    }
</style>