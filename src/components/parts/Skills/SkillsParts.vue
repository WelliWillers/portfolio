<template>
    <div 
        :class="['skills__content', {skills__open: isVisible}]" 
        @click="toggleSkill"
    >
        <div class="skills__header">
            <i :class="[skill.icon, 'skills__icon'] "></i>

            <div>
                <h1 class="skills__title">{{skill.name}}</h1>
                <span class="skills__subtitle">{{skill.description}}</span>
            </div>

            <i class="uil uil-angle-down skills__arrow"></i>
        </div>

        <div class="skills__list grid_page">
            <div v-for="item in skill.percents" :key="item.name" class="py-2">
                <div class="skills__titles">
                    <h3 class="skills__name">{{item.name}}</h3>
                    <span class="skills__number">{{item.porcent}}%</span>
                </div>
                <b-progress animated>
                    <b-progress-bar :variant="item.variant" :value="item.porcent" :label="`${((item.porcent) * 1)}%`"></b-progress-bar>
                </b-progress>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
        }
    },
    props: {
        skill: {}
    },
    methods: {
        toggleSkill(){
            this.isVisible = !this.isVisible;
        }
    }
    
}
</script>

<style>
    .skills__header{
        display: flex;
        align-items: center;
        margin-bottom: var(--mb-2);
        cursor: pointer;
    }
    .skills__icon{
        margin-right: var(--mb-0-75);
    }
    .skills__icon,
    .skills__arrow{
        font-size: 2rem;color: var(--first-color);
    }
    .skills__arrow {
        margin-left: auto;
        transition: .4s;
    }
    .skills__list {
        row-gap: 1.5rem;
        padding-left: 2.7rem;
        height: 0;
        overflow: hidden;
    }
    .skills__titles {
        display: flex;
        justify-content: space-between; 
        margin-bottom: var(--mb-0-5);
    }
    .skills__name{
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
    }
    .skills__bar{
        background-color: var(--first-color-lighter);
    }
    .skills__percentage{
        display: block;
        background-color: var(--first-color)
    }
    .skills__open .skills__list {
        height: auto;
        overflow: auto;
        transition: .3s;
    }
    .skills__open .skills__arrow {
        transform: rotate(-180deg);
    }
</style>