<template>
<div class="xm-mobile-toast" :class="show || 'xm-mobile-toast-hidden'">
    <div class="xm-mobile-toast-mask"></div>
    <div class="xm-mobile-toast-container">
        <div class="xm-mobile-toast-loading">
            <div v-for="(item,index) in new Array(12)" class="xm-mobile-toast-loading-single" :class="`xm-mobile-toast-loading-single-${index}`"></div>
        </div>
        <p class="xm-mobile-toast-content xm-mobile-toast-loading-content">{{operateText}}</p>
    </div>
</div>
</template>
<script>
export default {
    computed: {
        show() {
            return this.$store.state.loadingToast.show;
        },
        operateText() {
            return this.$store.state.loadingToast.operateText;
        }
    }
}
</script>
