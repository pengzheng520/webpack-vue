<template>
<div class="xm-mobile-toast" :class="show || 'xm-mobile-toast-hidden'">
    <div class="xm-mobile-toast-mask"></div>
    <div class="xm-mobile-toast-container">
        <i class="icon-success xm-mobile-toast-icon"></i>
        <p class="xm-mobile-toast-content">{{text}}</p>
    </div>
</div>
</template>
<script>
export default {
    computed: {
        show() {
            return this.$store.state.successToast.show;
        },
        text() {
            return this.$store.state.successToast.text;
        }
    }
}
</script>
<style lang="sass">@import "../../sass/components/toast.scss";</style>
