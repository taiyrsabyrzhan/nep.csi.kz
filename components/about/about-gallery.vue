<template>
  <section class='about_gallery'>        
    <h2>Галерея фотографий</h2>

    <div class="swiper-container about_gallery_slider">
      <div class="swiper-wrapper">
        
        <div class="swiper-slide gallery_slider">
          <img :src="require('@/assets/img/main/main_slider_2.jpg')" alt="">
        </div>
        <div class="swiper-slide gallery_slider">
          <img :src="require('@/assets/img/main/main_slider_2.jpg')" alt="">
        </div>
        <div class="swiper-slide gallery_slider">
          <img :src="require('@/assets/img/main/main_slider_2.jpg')" alt="">
        </div>

      </div>
    </div>
      
    <div class="controls_swiper">
      <div class="swiper-button-next">
        <svg width="41" height="18" viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M39.2471 8.99993L30.6675 1.37363L31.3318 0.626221L40.7523 8.99993L31.3318 17.3736L30.6675 16.6262L39.2471 8.99993Z" fill="#4DC7F2"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M40 8.5L0 8.5L0 9.5L40 9.5V8.5Z" fill="#4DC7F2"/>
        </svg>
      </div>
      <div class="swiper-button-prev">
        <svg width="41" height="18" viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1L1 9L10 17" stroke="white"/>
          <path d="M41 9L0.999999 9" stroke="white" stroke-miterlimit="16"/>
        </svg>
      </div>
    </div>

  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Pagination, Navigation]);

export default {  
  components: {},
  data() {
    return {
      
    }
  },
  mounted() {
    new Swiper(".about_gallery_slider", {
      slidesPerView: 2,
      spaceBetween: 50,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".about_gallery .swiper-button-next",
        prevEl: ".about_gallery .swiper-button-prev",
      },
    });
  },
};
</script>