<template>
    <div id="app" class="app">
        <Header />
        <main class="app-main">
            <Nuxt />
            <Footer />
        </main>
    </div>
</template>

<script>
import Header from '~/components/modules/Header.vue'
import Footer from '~/components/modules/Footer.vue'
export default {
    components: { Header, Footer },
}
</script>
<style lang="sass" scoped>
.app-main
    width: 100%

    +screen($dw-msd)
        width: calc( 100% - 110px )
        margin-left: auto

    +screen($dw-ld)
        width: 100%
        margin-left: 0
</style>
