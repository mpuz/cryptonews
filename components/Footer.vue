<template >
    <div :class="{ 'bg-dark': colorMode === 'dark', 'bg-light': colorMode === 'light', 'bg-sepia': colorMode === 'sepia' }"
        class="border-top d-flex bg-dark text-light align-items-center px-3 py-2">
        <strong class="mr-auto mt-3 mb-3">
            <a href="https://t.me/sababadev" target="_blank">
                Contact Telegram: @sababadev
            </a>
        </strong>
        <!-- <b-button class="mr-1 rounded" size="sm" @click="hide">Close</b-button> -->



        <a href="https://github.com/mpuz/cryptonews">
            Project Github
        </a>
    </div>
</template>




<script >
export default {
    data() {
        return {
            colors: ["system", "light", "dark", "sepia"],
        };
    },
    computed: {
        colorMode() {
            return this.$nuxt.$colorMode.preference
        },
        width() {
            return window.innerWidth;
        },
    },

    async mounted() {

    },

};
</script>

<style scoped>
.border-top {
    border-top: 1px solid #58ce8757 !important;
}

.bg-dark {
    background-color: #001021 !important;
}

.bg-sepia {
    background-color: #eae0c9 !important;
}

.bg-light {
    background-color: aliceblue !important;
}
</style>