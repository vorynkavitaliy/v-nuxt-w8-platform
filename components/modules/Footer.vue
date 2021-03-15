<template>
    <v-container>
        <div class="morph-bg p-2 radius-2">
            <header class="footer-header">
                <ul
                    class="location-list flex-container space-between-ld align-center"
                >
                    <li
                        v-for="location of locationArray"
                        :key="location.city"
                        class="location-item flex-container align-center mh-ld-1"
                    >
                        <span class="marker mr-1"></span>

                        <div class="text">
                            <v-text tag="h5" weight="bold-value">
                                {{ location.city }}
                            </v-text>
                            <v-text
                                tag="span"
                                size="xs"
                                weight="regular-value"
                                class="grey-2"
                            >
                                {{ location.address }}
                            </v-text>

                            <nuxt-link
                                class="link text text-s regular-value mt-1"
                                to="#"
                            >
                                Побудувати маршрут
                            </nuxt-link>
                        </div>
                    </li>
                </ul>
            </header>

            <div class="ph-1 pv-1 pv-ld-4">
                <v-text tag="p" size="s" weight="medium" class="center">
                    &copy;ТОВ "Глобал Інтер Трейдінг". This site is protected by
                    reCAPTCHA and the Google Privacy Policy and Terms of Service
                    apply.
                </v-text>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            locationArray: [
                { city: 'Київ', address: 'вул. Паньківська, 27/78', href: '#' },
                {
                    city: 'Львів',
                    address: 'вул. Академіка Андрія Сахарова, 43',
                    href: '#',
                },
                {
                    city: 'Харьків',
                    address: 'вул. Гімназійна набережна, 4',
                    href: '#',
                },
                {
                    city: 'Одеса',
                    address: 'Французьки бульвар, 54/23',
                    href: '#',
                },
                {
                    city: 'Дніпро',
                    address: 'пр-т, Олександра Поля, 100',
                    href: '#',
                },
            ],
        }
    },
}
</script>

<style lang="sass" scoped>
.link
    display: block

.location
    &-list
        flex-wrap: wrap

        +screen($dw-ld)
            flex-wrap: nowrap

    &-item
        transition: all 0.2s ease
        padding: rem(15px) rem(10px)
        width: $col-12

        +screen($dw-msd)
            width: $col-6

        +screen($dw-lmd)
            width: $col-4

        +screen($dw-ld)
            width: auto
</style>
