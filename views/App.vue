<template>
<div>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <confirm-dialog @confirm="confirm"></confirm-dialog>
    <x-m-dialog></x-m-dialog>
    <loading-toast></loading-toast>
    <success-toast></success-toast>
    <action-sheet></action-sheet>
</div>
</template>
<script>
import XMDialog from './components/Dialog.vue';
import ConfirmDialog from './components/ConfirmDialog.vue';
import LoadingToast from './components/LoadingToast.vue';
import SuccessToast from './components/SuccessToast.vue';
import ActionSheet from './components/ActionSheet.vue';
export default {
    components: {
        ConfirmDialog,
        XMDialog,
        LoadingToast,
        SuccessToast,
        ActionSheet
    },
    methods: {
        confirm() {
            this.$store.commit('CONFIRM_ENSURE');
        }
    }
}
</script>
<style lang="sass">@import "../sass/_reset.scss";
@import "../src/libs/swiper-3.3.1.min.css";
</style>
