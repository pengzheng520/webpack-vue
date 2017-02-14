/**
 * Created by shenchangmin on 2016/11/8.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        PATH: '/m',
        AJAXURL: '/api',
        /**
         * [player 单条声音播放器]
         * @type {Object}
         */
        player: {
            show: false,
            duration: 0,
            title: '播放器',
            src: ''
        },
        /**
         * [confirm 确认框]
         * @type {Object}
         */
        confirm: {
            show: false,
            bodyText: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            ensure() {}
        },
        /**
         * [dialog 弹出框]
         * @type {Object}
         */
        dialog: {
            show: false,
            text: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
        },
        /**
         * [loadingToast 加载中]
         * @type {Object}
         */
        loadingToast: {
            show: false,
            operateText: '数据加载中'
        },
        /**
         * [successToast 成功提示]
         * @type {Object}
         */
        successToast: {
            show: false,
            text: '操作成功'
        },
        /**
         * [actionSheet 滑动列表]
         * @type {Object}
         */
        actionSheet: {
            show: false,
            list: [],
            callback: ''
        },
        allPeople: {
            alreadyIdList: []
        },
        taskObject: {
            value: {}
        }
    },
    actions,
    mutations,
    getters
});

export default store;
