<template>
<div class="xm-mobile-dialog" :class="show || 'xm-mobile-dialog-hidden'">
    <div class="xm-mobile-mask"></div>
    <div class="xm-mobile-dialog-container">
        <div class="xm-mobile-dialog-head">
            <strong>温馨提示</strong>
        </div>
        <div class="xm-mobile-dialog-body">{{bodyText}}</div>
        <div class="xm-mobile-dialog-footer">
            <button class="xm-mobile-dialog-btn xm-mobile-dialog-btn-cancel" @click="cancel()">取消</button>
            <button class="xm-mobile-dialog-btn xm-mobile-dialog-btn-primary" @click="ensure()">确定</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        cancel() {
            this.$store.state.confirm.show = false;
        },
        ensure() {
            this.$emit('confirm');
        }
    },
    computed: {
        show() {
            return this.$store.state.confirm.show;
        },
        bodyText() {
            return this.$store.state.confirm.bodyText;
        }
    }
}
</script>
