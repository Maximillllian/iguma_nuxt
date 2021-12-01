<template>
    <div class="overflow-container">
        <TheHeader />
        <Nuxt />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from "~/components/TheHeader"
import TheFooter from "~/components/TheFooter"

export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style>
    .overflow-container {
        overflow-x: hidden;
    }
</style>