<template>
<div>
    <transition name="mask-fade">
        <div class="xm-mobile-action-sheet-mask" v-if="show" @click="hidden"></div>
    </transition>
    <div class="xm-mobile-action-sheet-container" :class="show?'body-show':''">
        <div class="xm-mobile-action-sheet-list">
            <div v-for="item in list" @click="selectType(item)">
                {{item.name}}
            </div>
        </div>
        <div class="xm-mobile-action-sheet-cancel" @click="hidden">取消</div>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        hidden() {
            this.$store.commit('HIDDEN_ACTION_SHEET');
        },
        selectType(item) {
            const cb = this.$store.state.actionSheet.callback;
            if (typeof cb === 'function') {
                cb(item);
            } else {
                this.$store.commit('SHOW_REMIND_DIALOG');
            }
            this.$store.commit('HIDDEN_ACTION_SHEET');
        }
    },
    computed: {
        show() {
            return this.$store.state.actionSheet.show;
        },
        list() {
            return this.$store.state.actionSheet.list;
        }
    }
}
</script>
<style lang="sass">@import "../../sass/components/actionSheet.scss";</style>
