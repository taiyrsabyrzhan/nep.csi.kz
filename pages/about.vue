<template>
    <div class="container">
        <!-- {{ data }} -->
        <AboutText />
        <AboutCharts />
        <AboutGallery />
    </div>
</template>

<script>
import AboutText from "@/components/about/about-text";
import AboutCharts from "@/components/about/about-charts";
import AboutGallery from "@/components/about/about-gallery";
import { mapState } from "vuex";

export default {
    name: "AboutPage",
    components: {
        AboutText,
        AboutCharts,
        AboutGallery,
    },
    computed: {
        ...mapState("page", ["data"]),
    },
};
</script>