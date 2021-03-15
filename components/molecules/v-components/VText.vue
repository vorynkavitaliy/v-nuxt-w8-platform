<template>
    <p
        v-if="tag === 'p'"
        class="text"
        :class="[
            size === 'xxs'
                ? 'text-xxs'
                : size === 'xs'
                ? 'text-xs'
                : size === 's'
                ? 'text-s'
                : size === 'ms'
                ? 'text-ms'
                : size === 'm'
                ? 'text-m'
                : size === 'l'
                ? 'text-l'
                : size === 'ml'
                ? 'text-ml'
                : size === 'xl'
                ? 'text-xl'
                : '',
            weight,
        ]"
    >
        <slot></slot>
    </p>

    <span
        v-else-if="tag === 'span'"
        class="text"
        :class="[
            size === 'xxs'
                ? 'text-xxs'
                : size === 'xs'
                ? 'text-xs'
                : size === 's'
                ? 'text-s'
                : size === 'ms'
                ? 'text-ms'
                : size === 'm'
                ? 'text-m'
                : size === 'l'
                ? 'text-l'
                : size === 'ml'
                ? 'text-ml'
                : size === 'xl'
                ? 'text-xl'
                : '',
            weight,
        ]"
    >
        <slot></slot>
    </span>

    <li
        v-else-if="tag === 'li'"
        class="text"
        :class="[
            size === 'xxs'
                ? 'text-xxs'
                : size === 'xs'
                ? 'text-xs'
                : size === 's'
                ? 'text-s'
                : size === 'ms'
                ? 'text-ms'
                : size === 'm'
                ? 'text-m'
                : size === 'l'
                ? 'text-l'
                : size === 'ml'
                ? 'text-ml'
                : size === 'xl'
                ? 'text-xl'
                : '',
            weight,
        ]"
    >
        <slot></slot>
    </li>

    <i
        v-else-if="tag === 'i'"
        class="text"
        :class="[
            size === 'xxs'
                ? 'text-xxs'
                : size === 'xs'
                ? 'text-xs'
                : size === 's'
                ? 'text-s'
                : size === 'ms'
                ? 'text-ms'
                : size === 'm'
                ? 'text-m'
                : size === 'l'
                ? 'text-l'
                : size === 'ml'
                ? 'text-ml'
                : size === 'xl'
                ? 'text-xl'
                : '',
            weight,
        ]"
    >
        <slot></slot>
    </i>

    <h2
        v-else-if="tag === 'h2'"
        class="text"
        :class="[
            size === 'xxs'
                ? 'text-xxs'
                : size === 'xs'
                ? 'text-xs'
                : size === 's'
                ? 'text-s'
                : size === 'ms'
                ? 'text-ms'
                : size === 'm'
                ? 'text-m'
                : size === 'l'
                ? 'text-l'
                : size === 'ml'
                ? 'text-ml'
                : size === 'xl'
                ? 'text-xl'
                : '',
            weight,
        ]"
    >
        <slot></slot>
    </h2>

    <h3
        v-else-if="tag === 'h3'"
        class="text"
        :class="[
            size === 'xxs'
                ? 'text-xxs'
                : size === 'xs'
                ? 'text-xs'
                : size === 's'
                ? 'text-s'
                : size === 'ms'
                ? 'text-ms'
                : size === 'm'
                ? 'text-m'
                : size === 'l'
                ? 'text-l'
                : size === 'ml'
                ? 'text-ml'
                : size === 'xl'
                ? 'text-xl'
                : '',
            weight,
        ]"
    >
        <slot></slot>
    </h3>

    <h4
        v-else-if="tag === 'h4'"
        class="text"
        :class="[
            size === 'xxs'
                ? 'text-xxs'
                : size === 'xs'
                ? 'text-xs'
                : size === 's'
                ? 'text-s'
                : size === 'ms'
                ? 'text-ms'
                : size === 'm'
                ? 'text-m'
                : size === 'l'
                ? 'text-l'
                : size === 'ml'
                ? 'text-ml'
                : size === 'xl'
                ? 'text-xl'
                : '',
            weight,
        ]"
    >
        <slot></slot>
    </h4>

    <h5
        v-else-if="tag === 'h5'"
        class="text"
        :class="[
            size === 'xxs'
                ? 'text-xxs'
                : size === 'xs'
                ? 'text-xs'
                : size === 's'
                ? 'text-s'
                : size === 'ms'
                ? 'text-ms'
                : size === 'm'
                ? 'text-m'
                : size === 'l'
                ? 'text-l'
                : size === 'ml'
                ? 'text-ml'
                : size === 'xl'
                ? 'text-xl'
                : '',
            weight,
        ]"
    >
        <slot></slot>
    </h5>

    <h6
        v-else-if="tag === 'h6'"
        class="text"
        :class="[
            size === 'xxs'
                ? 'text-xxs'
                : size === 'xs'
                ? 'text-xs'
                : size === 's'
                ? 'text-s'
                : size === 'ms'
                ? 'text-ms'
                : size === 'm'
                ? 'text-m'
                : size === 'l'
                ? 'text-l'
                : size === 'ml'
                ? 'text-ml'
                : size === 'xl'
                ? 'text-xl'
                : '',
            weight,
        ]"
    >
        <slot></slot>
    </h6>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            require: true,
        },

        weight: {
            type: String,
            default: '',
        },

        size: {
            type: String,
            default: '',
        },
    },
}
</script>
