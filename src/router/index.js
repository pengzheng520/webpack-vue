/**
 * Created by shenchangmin on 2016/10/25.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './../store';
import Index from '../../views/Index.vue';

Vue.use(VueRouter);

const base = store.state.PATH;
const router = new VueRouter({
    base,
    mode: 'history',
    routes: [
        /**
         * 首页
         */
        {
            name: 'index',
            path: '/',
            component: Index
        }
    ]
});
/**
 * [PAGE_TITLE 页面title]
 * @type {Object}
 */
const PAGE_TITLE = {

};
export {router, PAGE_TITLE};
