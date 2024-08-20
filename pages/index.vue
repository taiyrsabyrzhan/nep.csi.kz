<template>
    <div class="container">
        <MainSlider />
        <MainTable />
        <MainProgram />
    </div>
</template>

<script>
import MainSlider from "@/components/main/main-slider";
import MainTable from "@/components/main/main-table";
import MainProgram from "@/components/main/main-program";

export default {
    name: "IndexPage",
    components: {
        MainSlider,
        MainTable,
        MainProgram,
    },
};
</script>
