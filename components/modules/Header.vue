<template>
    <header class="header pv-1 pv-ld-3">
        <v-container>
            <v-layout flex between acenter class="row column-msd row-ld">
                <nuxt-link to="/" class="logo">
                    <img src="/logo.svg" alt="w8-shipping" />
                </nuxt-link>

                <navbar />

                <form class="form mh-ld-5" @submit.prevent="onSearch">
                    <v-layout flex between class="search-container">
                        <input type="text" class="text text-s regular-value" />

                        <button type="submit">
                            <v-icon icon="loop" />
                        </button>
                    </v-layout>
                </form>

                <button class="cabinet-button icon">
                    <span class="favicon btn-light mr-ld-2">
                        <v-icon :icon="'user'" />
                    </span>
                    <span class="text text-m bold-value"> Мій кабінет </span>
                </button>

                <div class="language">
                    <ul class="language-list flex-container">
                        <li class="language-item active">
                            <span
                                class="language-link text text-s uppercase bold-value"
                                >UA</span
                            >
                        </li>

                        <li class="language-item">
                            <span
                                class="language-link text text-s uppercase bold-value"
                                >RU</span
                            >
                        </li>
                    </ul>
                </div>
            </v-layout>
        </v-container>
    </header>
</template>

<script>
import Navbar from '../molecules/Navbar.vue'
export default {
    name: 'Header',
    components: { Navbar },
    methods: {
        onSearch() {
            console.log('Search')
        },
    },
}
</script>

<style lang="sass" scoped>
.header
    background: linear-gradient(317.85deg, #FAFAFA -11.18%, #F1F1F1 114.83%)
    box-shadow: -3px -3px 8px #FFFFFF, 2px 2px 6px rgba(174, 174, 192, 0.4), inset 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.09), inset -1.5px -1.5px 1.5px #FFFFFF
    height: 100%
    overflow: auto
    +method(position, static, fixed, fixed, static)

    +screen($dw-ld)
        height: auto
        width: 100%

    .container, .flex-container
        height: 100%

        +screen($dw-ld)
            height: auto

.logo
    order: -1
    width: 24%
    max-width: 115px

    +screen($dw-msd)
        max-width: 90px
        width: auto
        margin-bottom: 20px

    +screen($dw-ld)
        order: 0
        width: auto
        max-width: auto
        margin-bottom: 0

.form
    +screen($dw-msd)
        margin-top: auto
        margin-bottom: 20px

    +screen($dw-ld)
        margin: 0
        flex-grow: 1
        max-width: 19.64vw

    .search-container
        position: relative
        overflow: hidden
        padding: rem(2px, $dw-ld)
        background: linear-gradient(317.85deg, #FAFAFA -11.18%, #F1F1F1 114.83%)
        box-shadow: -3px -3px 8px #FFFFFF, 2px 2px 6px rgba(174, 174, 192, 0.4)
        border-radius: rem(5px, $dw-ld)
        height: 100%

        input
            flex-grow: 1
            padding: rem(9px, $dw-ld)
            margin-right: rem(2px, $dw-ld)
            border-radius: rem(5px, $dw-ld)

            display: none
            +screen($dw-ld)
                display: block

            &:focus, &.focus
                background: linear-gradient(91.36deg, #F2F3F8 1.21%, #F4F5FB 104.27%)
                box-shadow: inset -1.5px -1.5px 1.5px #FFFFFF, inset 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.09)

        button
            height: rem(36px, $dw-ld)
            width: rem(36px, $dw-ld)
            border-radius: rem(7px, $dw-ld)
            display: flex
            align-items: center
            justify-content: center
            background: linear-gradient(317.85deg, #FFFFFF -11.18%, #F1F1F1 114.83%)
            border-radius: rem(5px, $dw-ld)

            svg
                width: 50%

            &:active
                background: #F9F9F9
                box-shadow: inset -1.5px -1.5px 1.5px #FFFFFF, inset 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.09)

.language
    position: relative
    cursor: pointer
    margin: auto
    order: -1

    +screen($dw-msd)
        order: 0
        margin: auto 0 20px

    +screen($dw-ld)
        margin: 0

    &-list
        padding: rem(2px, $dw-ld)
        background: linear-gradient(317.85deg, #FAFAFA -11.18%, #F1F1F1 114.83%)
        box-shadow: -3px -3px 8px #FFFFFF, 2px 2px 6px rgba(174, 174, 192, 0.4)
        border-radius: rem(5px, $dw-ld)

    &-link
        padding: rem(10px, $dw-ld)
        color: rgba(82, 82, 82, 0.35)
        border-radius: rem(7px, $dw-ld)
        display: block

    &-item
        &.active, &:active
            .language-link
                color: $pink
                background: #F2F3F8
                box-shadow: inset -1.5px -1.5px 1.5px #FFFFFF, inset 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.09)

.cabinet-button
    color: #3E3E3E
    margin-left: rem(14px)

    +screen($dw-msd)
        margin-left: 0
        margin-bottom: 20px

    +screen($dw-ld)
        margin-bottom: 0

    .text
        display: none

        +screen($dw-ld)
            display: block

    .favicon
        height: rem(36px, $dw-ld)
        width: rem(36px, $dw-ld)
        border-radius: rem(7px, $dw-ld)

        svg
            width: 50%
</style>
