<template lang="pug">
    footer.footer#footer
        .container
            a(href="https://github.com/Ellanskii", target="_blank", rel="nofollow")
                |©&nbsp;
                i.mdi.mdi-github-circle
                | Ellanskii, {{ copyrightYear }}
</template>

<script>
export default {

    data() {
        return {

        }
    },

    computed: {
        copyrightYear: function () {
            let mdate = new Date();
            return mdate.getFullYear()
        }
    },
}
</script>

<style>

</style>
