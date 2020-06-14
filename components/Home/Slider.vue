<template>
  <!-- Start Slider Area -->
  <div class="intro-area intro-area-4 ">
    <div class="main-overly"></div>
    <div class="intro-carousel">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <div class="intro-content">
            <div class="slider-images">
              <img src="img/slider/s1.jpg" alt="">
            </div>
            <div class="slider-content">
              <div class="display-table">
                <div class="display-table-cell">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <!-- layer 1 -->
                        <div class="layer-1">
                          <h1 class="title2">Cleanhome <span class="color">success</span> in every projects</h1>
                        </div>
                        <!-- layer 2 -->
                        <div class="layer-2 ">
                          <p>A Cleaning company services is provides professional services.</p>
                        </div>
                        <!-- layer 3 -->
                        <div class="layer-3">
                          <a href="#" class="ready-btn left-btn" >Our Services</a>
                          <a href="order-from.html" class="ready-btn right-btn" >Book now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="intro-content">
            <div class="slider-images">
              <img src="img/slider/s2.jpg" alt="">
            </div>
            <div class="slider-content">
              <div class="display-table">
                <div class="display-table-cell">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 col-sm-12">
                        <!-- layer 1 -->
                        <div class="layer-1">
                          <h1 class="title2"><span class="color">Cleanhome</span> company is provides services</h1>
                        </div>
                        <!-- layer 2 -->
                        <div class="layer-2 ">
                          <p>A Cleaning company services is provides professional services.</p>
                        </div>
                        <!-- layer 3 -->
                        <div class="layer-3">
                          <a href="#" class="ready-btn left-btn" >Our Services</a>
                          <a href="#" class="ready-btn right-btn" >Contact us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
    export default {
        name: "Slider",
      components: {
        Swiper,
        SwiperSlide
      },
      directives: {
        swiper: directive
      },
      data() {
        return {
          swiperOptions: {
            slidesPerView : 1,
            loop: true,
            speed: 2000,
            spaceBetween : 20,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false
            },



            // Responsive breakpoints
            breakpoints: {
              1024:{
                slidesPerView : 1
              },
              768:{
                slidesPerView : 1
              },
              640:{
                slidesPerView : 1
              },
              320:{
                slidesPerView : 1
              }
            }
          }
        }
      },
    }
</script>

<style scoped>

</style>
