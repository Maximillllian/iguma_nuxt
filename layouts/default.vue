<template>
    <div>
        <HeaderSite />
        <Nuxt />
        <FooterSite />
    </div>
</template>

<script>
import HeaderSite from "~/components/HeaderSite"
import FooterSite from "~/components/FooterSite"
export default {
    components: {
        HeaderSite,
        FooterSite
    }
}
</script>