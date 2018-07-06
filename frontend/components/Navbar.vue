<template lang="pug">
    nav.navbar(role="navigation")
        .navbar-brand
            a.navbar-burger(@click="isActive = !isActive", :class="{ 'is-active': isActive }")
                span
                span
                span
        .navbar-menu(:class="{ 'is-active': isActive }")
            .navbar-end
                nuxt-link(
                    v-for="(link, key) in navbarEnd",
                    :key="key",
                    :to="link.href",
                    @click.native="isActive = !isActive"
                ).navbar-item {{ link.anchor }}
</template>

<script>
export default {
    props: {
        navbarStart: Array,
        navbarEnd: Array
    },

    data() {
        return {
            isActive: false
        }
    }
}
</script>

<style>
    .navbar-burger span {
        height: 2px;
    }
    .navbar-burger span:nth-child(2) {
        top: calc(50% - 1.1px);
    }
</style>
