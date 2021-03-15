import Vue from 'vue'
import VIcon from '../components/molecules/v-components/VIcon.vue'
import VContainer from '../components/molecules/v-components/VContainer.vue'
import VLayout from '../components/molecules/v-components/VLayout.vue'
import VText from '../components/molecules/v-components/VText.vue'

const components = { VIcon, VContainer, VLayout, VText }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})
