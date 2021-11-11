<template>
    <section class="services section" id="services">
        <h2 class="section__title">Services</h2>
        <span class="section__subtitle">What i offer</span>
        
        <div class="services__container container__page grid__page">
            
            <service-item v-for="ser in services" :key="ser.id" :service="ser" />

        </div>
    </section>
</template>

<script>
import services from "./services.json"
import Service from "./Service"

export default {
    name: "services-page",
    components: {
        'service-item': Service
    },
    data(){
        return {
            services
        }
    }
}
</script>

<style>
    .services__container{
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
    }
    
</style>