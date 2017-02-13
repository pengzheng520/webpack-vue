<template>
<div class="xm-mobile-dialog" :class="dialog.show || 'xm-mobile-dialog-hidden'">
    <div class="xm-mobile-mask"></div>
    <div class="xm-mobile-dialog-container">
        <div class="xm-mobile-dialog-body">{{dialog.text}}</div>
        <div class="xm-mobile-dialog-footer">
            <button class="xm-mobile-dialog-btn xm-mobile-dialog-btn-primary" @click="copyThat()">知道了</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        copyThat() {
            this.$store.state.dialog.show = false;
        }
    },
    computed: {
        dialog() {
            return this.$store.state.dialog;
        }
    }
}
</script>
<style lang="sass">@import "../../sass/components/dialog.scss";</style>
