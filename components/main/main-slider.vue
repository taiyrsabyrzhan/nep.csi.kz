<template>
    <section id="mainSlider">
        <div class="swiper-container main_block_slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide main_slider">
                    <div class="main_slider_left">
                        {{ main_page }}
                        <h1>Итоги новой экономической политики</h1>
                        <p>
                            Сложившиеся обстоятельства говорят о необходимости
                            реализовать Новую экономическую политику, которая
                            должна предполагать существенный рост экономики и
                            доходов населения, справедливое распределение
                            доходов, рост квалификации рабочей силы,
                            производительности труда и в целом человеческого
                            капитала страны.
                        </p>
                        <a href="/"
                            >Программа НЭП
                            <img
                                :src="
                                    require('@/assets/img/static/arrow_right.svg')
                                "
                                alt=""
                        /></a>
                    </div>
                    <div class="main_slider_right">
                        <div class="main_slider_right_top">
                            <div class="main_slider_right_top_img">
                                <img
                                    :src="
                                        require('@/assets/img/main/main_slider_1.svg')
                                    "
                                    alt=""
                                />
                            </div>
                            <div class="main_slider_right_top_pagination">
                                <p>План развития экономики до 2030 года:</p>
                                <div
                                    class="
                                        main_slider_right_top_pagination_title
                                    "
                                >
                                    <div class="title"><span>25</span> млн</div>
                                    <p>
                                        увеличение численности населения
                                        Казахстана
                                    </p>
                                </div>
                                <div class="controls_swiper">
                                    <div class="swiper-pagination"></div>
                                    <div class="swiper-button-next">
                                        <svg
                                            width="41"
                                            height="18"
                                            viewBox="0 0 41 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M39.2471 8.99993L30.6675 1.37363L31.3318 0.626221L40.7523 8.99993L31.3318 17.3736L30.6675 16.6262L39.2471 8.99993Z"
                                                fill="#4DC7F2"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M40 8.5L0 8.5L0 9.5L40 9.5V8.5Z"
                                                fill="#4DC7F2"
                                            />
                                        </svg>
                                    </div>
                                    <div class="swiper-button-prev">
                                        <svg
                                            width="41"
                                            height="18"
                                            viewBox="0 0 41 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 1L1 9L10 17"
                                                stroke="white"
                                            />
                                            <path
                                                d="M41 9L0.999999 9"
                                                stroke="white"
                                                stroke-miterlimit="16"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="main_slider_video" @click="openVideo">
                            <img
                                :src="
                                    require('@/assets/img/main/main_slider_2.jpg')
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img
                        :src="require('@/assets/img/main/main_slider_2.jpg')"
                        alt=""
                    />
                </div>
                <div class="swiper-slide">
                    <img
                        :src="require('@/assets/img/main/main_slider_2.jpg')"
                        alt=""
                    />
                </div>
                <div class="swiper-slide">
                    <img
                        :src="require('@/assets/img/main/main_slider_2.jpg')"
                        alt=""
                    />
                </div>
                <div class="swiper-slide">
                    <img
                        :src="require('@/assets/img/main/main_slider_2.jpg')"
                        alt=""
                    />
                </div>
            </div>
        </div>

        <!-- Modal video -->
        <div data-video-modal v-show="modalStatus" class="modal_background">
            <div data-video-close class="modal_close" @click="closeVideo">
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.368164 14.8496L15.2174 0.000367224L16.6316 1.41458L1.78238 16.2638L0.368164 14.8496Z"
                        fill="white"
                    />
                    <path
                        d="M1.41406 0L16.2633 14.8492L14.8491 16.2635L-0.000151038 1.41421L1.41406 0Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div class="modal_body">
                <img
                    :src="require('@/assets/img/main/main_slider_2.jpg')"
                    alt=""
                />
                <!-- <video class="modal_video" controls="controls" poster="/img/speakers/trailer_1_poster.jpg">
            <source src="/video/trailer/trailer_1.mp4" type='video/ogg; codecs="theora, vorbis"'>
            <source src="/video/trailer/trailer_1.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
            <source src="/video/trailer/trailer_1.mp4" type='video/webm; codecs="vp8, vorbis"'>
            Тег video не поддерживается вашим браузером. 
        </video> -->
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Pagination, Navigation]);

import { mapState } from "vuex";

export default {
    components: {},
    data() {
        return {
            modalStatus: false,
        };
    },
    mounted() {
        new Swiper(".main_block_slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            allowTouchMove: false,
            pagination: {
                el: ".main_slider .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".main_slider .swiper-button-next",
                prevEl: ".main_slider .swiper-button-prev",
            },
        });
    },
    methods: {
        openVideo() {
            this.modalStatus = true;
        },
        closeVideo() {
            this.modalStatus = false;
        },
    },
    computed: {
        ...mapState("page", ["main_page"]),
    },
};
</script>

