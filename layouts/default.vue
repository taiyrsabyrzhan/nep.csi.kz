<template>
    <div class="body" :class="route">
        <div class="antifooter">
            <AppHeader />
            <Nuxt />
        </div>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from "@/layouts/header";
import AppFooter from "@/layouts/footer";

export default {
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            route: this.$route.name,
        };
    },
    beforeCreate() {
        this.$store.dispatch("page/fetchData");
    },
    //  async created() {
    //     await this.$store.dispatch("page/fetchData");
    // },
};
</script>