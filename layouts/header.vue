<template>
    <header>
        <div class="container">
            <div class="header">
                <div class="header_hamburger">
                    <div class="mobile_menu" @click="openMobileMenu">
                        <div class="bar1"></div>
                        <!-- <div class="bar2"></div> -->
                        <div class="bar3"></div>
                    </div>
                    <div class="header_menu_text">
                        Меню
                    </div>
                </div>
                <div class="header_logo">
                    <nuxt-link to="/">
                        <img src="@/assets/img/static/logo.svg" alt="logo" />
                    </nuxt-link>
                </div>
                <div class="header_language">
                    <div :class="langActive ? 'header_language_wrapper active' : 'header_language_wrapper'" @click="openLanguage">
                        <ul>
                            <li>{{ $t('select_lang') }}</li>
                            <li><nuxt-link :to="switchLocalePath('ru')" @click.native="refreshPage">Рус</nuxt-link></li>
                            <li><nuxt-link :to="switchLocalePath('kz')" @click.native="refreshPage">Қаз</nuxt-link></li>
                            <li><nuxt-link :to="switchLocalePath('en')" @click.native="refreshPage">Eng</nuxt-link></li>
                        </ul>
                        <img :src="langActive ? require('@/assets/img/static/arrow_top.svg') : require('@/assets/img/static/arrow_bottom.svg')" alt="">
                    </div>
                </div>
            </div>
            <div class="header_menu">
                <a href="/">
                    <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57958 8.3737L0 0.747409L0.664364 0L10.0848 8.3737L0.664364 16.7474L0 16L8.57958 8.3737Z" fill="#4DC7F2"/>
                    </svg>
                    Главная
                </a>
                <a href="/situation">
                    <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57958 8.3737L0 0.747409L0.664364 0L10.0848 8.3737L0.664364 16.7474L0 16L8.57958 8.3737Z" fill="#4DC7F2"/>
                    </svg>
                    Ситуация в мире и Казахстане
                </a>
                <a href="/">
                    <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57958 8.3737L0 0.747409L0.664364 0L10.0848 8.3737L0.664364 16.7474L0 16L8.57958 8.3737Z" fill="#4DC7F2"/>
                    </svg>
                    Детское развитие
                </a>
                <a href="/contacts">
                    <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57958 8.3737L0 0.747409L0.664364 0L10.0848 8.3737L0.664364 16.7474L0 16L8.57958 8.3737Z" fill="#4DC7F2"/>
                    </svg>
                    Контакты
                </a>
                <a href="/about">
                    <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57958 8.3737L0 0.747409L0.664364 0L10.0848 8.3737L0.664364 16.7474L0 16L8.57958 8.3737Z" fill="#4DC7F2"/>
                    </svg>
                    О проекте
                </a>
                <a href="/">
                    <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57958 8.3737L0 0.747409L0.664364 0L10.0848 8.3737L0.664364 16.7474L0 16L8.57958 8.3737Z" fill="#4DC7F2"/>
                    </svg>
                    Проект НЭП
                </a>
                <a href="/">
                    <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57958 8.3737L0 0.747409L0.664364 0L10.0848 8.3737L0.664364 16.7474L0 16L8.57958 8.3737Z" fill="#4DC7F2"/>
                    </svg>
                    Прогнозы и выводы
                </a>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                langActive: false,
            }
        },
        methods: {
            refreshPage() {
                window.location.reload(true)
            },
            openMobileMenu() {
                const mobileMenu = document.querySelector('.mobile_menu');
                const menu = document.querySelector('header');
                mobileMenu.classList.toggle('active');
                menu.classList.toggle('active');
            },
            openLanguage() {
                this.langActive = !this.langActive;
            }
        }
    };
</script>