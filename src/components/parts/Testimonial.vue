<template>
    <section class="testimonial section">
        <h2 class="section__title">Testimonials</h2>
        <span class="section__subtitle">My client saying</span>

        <div class=" testimonial__container container__page grid__page">

            <el-carousel trigger="click">
                
                <el-carousel-item height="200px">
                    <div class="testimonial__content">
                        <div class="testimonial__data">
                            <div class="testimonial__header">
                                <img src="/img/testimonial2.jpg" alt="" class="testimonial__img">
                                <div>
                                    <h3 class="testimonial__name">Matheo</h3>
                                    <span class="testimonial__client">Client</span>
                                </div>
                            </div>
                            <div>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                            </div>
                        </div>

                        <p class="testimonial__description">
                            jad hasgfh gsagvf gtvwsujy yasgf usayi fgyhsagbf yi syssvyua yvasyufg yuisad 
                            sgyhsg yiegf7 whedcfgv wf7 gwdf uweg gewgesugsg ubht uwuo
                        </p>
                    </div>
                </el-carousel-item>
                <el-carousel-item height="200px">
                    <div class="testimonial__content">
                        <div class="testimonial__data">
                            <div class="testimonial__header">
                                <img src="/img/testimonial1.jpg" alt="" class="testimonial__img">
                                <div>
                                    <h3 class="testimonial__name">Maria Grasieli</h3>
                                    <span class="testimonial__client">Client</span>
                                </div>
                            </div>
                            <div>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                                <i class="uil uil-star testimonial__icon-star"></i>
                            </div>
                        </div>

                        <p class="testimonial__description">
                            jad hasgfh gsagvf gtvwsujy yasgf usayi fgyhsagbf yi syssvyua yvasyufg yuisad 
                            sgyhsg yiegf7 whedcfgv wf7 gwdf uweg gewgesugsg ubht uwuo
                        </p>
                    </div>
                </el-carousel-item>

            </el-carousel>

            <div>

            </div>



        </div>  
    </section>
</template>

<script>
export default {
    name: "testimonial-page",
}
</script>

<style>
    .testimonial__content{
        padding: 0 2rem;
    }
    .testimonial__data,
    .testimonial__header{
        display: flex;
    }
    .testimonial__data{
        justify-content: space-between;
        margin-bottom: var(--mb-1);
    }
    .testimonial__img{
        width: 60px; height: 60px;
        border-radius: 50%;
        margin-right: var(--mb-0-75);
    }
    .testimonial__name{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
    }   
    .testimonial__client{
        font-size: var(-small-font-size);
        color: var(--text-color-light);
    }
    .testimonial__icon-star{
        color: var(--first-color); 
    }
    .testimonial__description{
        text-align: center;
        margin-bottom: var(--mb-2-5);
    }
</style>
