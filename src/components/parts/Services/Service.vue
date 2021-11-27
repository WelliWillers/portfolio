<template>
    <div>
        <div class="services__content">
            <div>
                <i :class="[service.icon, 'services__icon']"></i>
                <h3 class="services__title">{{service.title}}</h3>
            </div>

            <span @click="showModal" class="button button--flex button--small button--link services__button">
                view more 
                <i class="uil uil-arrow-right button__icon"></i>
            </span>

        </div>
        
        <div v-click-outside="nameOfCustomEventToCall" :class="['services__modal', {show__modal: modalIsOpen}]">
            <div class="services__modal-content">
                <h4 class="services__modal-title">{{service.title}}</h4>
                <i @click="closeModal" class="uil uil-times services__modal-close"></i>

                <ul class="services__modal-services grid__page">
                    <li v-for="item in service.services" :key="item.index" class="services__service">
                        <i class="uil uil-check-circle services__modal-icon"></i>
                        <p>{{item}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "services-page",
    data(){
        return {
            modalIsOpen: false,
        }
    },
    props: {
        service: {}
    },
    methods: {
        showModal(){
            this.modalIsOpen = !this.modalIsOpen;
        },
        closeModal(){
            this.modalIsOpen = false
        },
        nameOfCustomEventToCall(){
            this.modalIsOpen = false
        }
    },
    mounted() {
        this.$srTop.reveal('.services__content', { interval: 200 });
    }
}
</script>

<style>
    .services__content {
        position: relative;
        background-color: var(--container-color);
        padding: 1.5rem .5rem 1.25rem 1.5rem;
        border-radius: .5rem;
        box-shadow: 0 2px 4px rgba(0,0,0,.15);
        transition: .3s;
    }
    .services__content:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,.35);
    }
    .services__icon {
        display: block;
        font-size: 2.5rem;
        color: var(--first-color);
        margin-bottom: var(--mb-1);
    }
    .services__title{
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-1);
        font-weight: var(--font-medium);
    }
    .services__button{
        cursor: pointer;
        font-size: var(--small-font-size);

    }
    .services__button:hover .button__icon {
        transform: translateX(.25rem);
    }
    .services__modal{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        z-index: var(--z-modal);
        transition: .3s;
        opacity: 0;
        visibility: hidden;
    }
    .show__modal {
        opacity: 1;
        visibility: visible;
    }
    .services__modal-content{
        position: relative;
        max-width: 500px;
        min-width: 280px;
        background-color: var(--container-color);
        padding: 1.5rem;
        border-radius: .5rem;
    }
    .services__modal-title{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-1-5);
        max-width: 90%;
    }
    .services__modal-close{
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--first-color);
    }
    .services__modal-services{
        padding: 0;
        row-gap: 1rem;
    }
    .services__service{
        display: flex;
    }
    .services__modal-icon{
        color: var(--first-color);
        margin-right: var(--mb-0-75);
    }
</style>