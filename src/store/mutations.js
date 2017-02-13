/**
 * Created by shenchangmin on 2016/11/8.
 */
import Vue from 'vue';
import store from './index';

const mutations = {
    /**
   * [SHOW_CONFIRM 显示确认框]
   * @param {[type]}   state    [description]
   * @param {[type]}   bodyText [提示文字]
   * @param {Function} callback [确认操作后的回调函数]
   */
    SHOW_CONFIRM: (state, {bodyText, callback}) => {
        Vue.set(state.confirm, 'show', true);
        Vue.set(state.confirm, 'bodyText', bodyText);
        Vue.set(state.confirm, 'ensure', callback);
    },
    /**
     * [CONFIRM_ENSURE 确认操作]
     * @param {[type]} state [description]
     */
    CONFIRM_ENSURE: state => {
        Vue.set(state.confirm, 'show', false);
        const callback = state.confirm.ensure;
        if (typeof callback === 'function') {
            callback();
        }
    },
    /**
     * [SHOW_REMIND_DIALOG 显示提示框]
     * @param {[type]} state [description]
     * @param {[type]} msg   [提示框内容]
     */
    SHOW_REMIND_DIALOG: (state, msg) => {
        const text = msg || '系统错误';
        Vue.set(state.dialog, 'show', true);
        Vue.set(state.dialog, 'text', text);
    },
    /**
     * [SHOW_LOADING_TOAST 显示loading]
     * @param {[type]} state [description]
     */
    SHOW_LOADING_TOAST: state => {
        Vue.set(state.loadingToast, 'show', true);
    },
    /**
     * [HIDE_LOADING_TOAST 隐藏loading]
     * @param {[type]} state [description]
     */
    HIDE_LOADING_TOAST: state => {
        Vue.set(state.loadingToast, 'show', false);
    },
    /**
     * [SHOW_SUCCESS_TOAST 显示操作成功]
     * @param {[type]} state [description]
     * @param {[type]} msg   [操作成功文字提示]
     */
    SHOW_SUCCESS_TOAST: (state, msg) => {
        Vue.set(state.successToast, 'show', true);
        Vue.set(state.successToast, 'text', msg);
    },
    /**
     * [HIDE_SUCCESS_TOAST 隐藏操作成功]
     * @param {[type]} state [description]
     */
    HIDE_SUCCESS_TOAST: state => {
        Vue.set(state.successToast, 'show', false);
    },
    ADD_ALREADY_READ: (state, id) => {
        console.log(id);
    },
    /**
     * [SHOW_ACTION_SHEET 显示滑动列表]
     * @param {[type]}   state [description]
     * @param {[type]}   arr   [列表数组]
     * @param {Function} cb    [回调函数]
     */
    SHOW_ACTION_SHEET: (state, {arr, cb}) => {
        if (arr.length > 0) {
            Vue.set(state.actionSheet, 'show', true);
            Vue.set(state.actionSheet, 'list', arr);
            Vue.set(state.actionSheet, 'callback', cb);
        } else {
            store.commit('SHOW_REMIND_DIALOG', '稍后再试');
        }
    },
    /**
     * [HIDDEN_ACTION_SHEET 隐藏]
     * @param {[type]} state [description]
     */
    HIDDEN_ACTION_SHEET: state => {
        Vue.set(state.actionSheet, 'show', false);
    },
    /**
     * [SHOW_PLAYER 显示播放器]
     * @param {[type]} state [description]
     */
    SHOW_PLAYER: (state, {duration, title, src}) => {
        Vue.set(state.player, 'show', true);
        Vue.set(state.player, 'duration', duration);
        Vue.set(state.player, 'title', title);
        Vue.set(state.player, 'src', src);
    },
    /**
     * [HIDDEN_PLAYER 隐藏播放器]
     * @param {[type]} state [description]
     */
    HIDDEN_PLAYER: (state) => {
        Vue.set(state.player, 'show', false);
    },
    /**
     * [HAS_NEW_MESSAGE 修改消息状态]
     * @param {[type]} state [description]
     * @param {[type]} url   [消息图片的URL]
     */
    HAS_NEW_MESSAGE: (state, url) => {
        Vue.set(state, 'MESSAGE_IMG_URL', url);
    }
};
export default mutations;
