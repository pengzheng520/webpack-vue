/**
 * Created by shenchangmin on 2016/10/25.
 */
import Vue from 'vue';
import App from '../views/App.vue';
import {router, PAGE_TITLE} from './router';
import store from './store';


/**
 * [初始化]
 * @type {Vue}
 */
const app = new Vue({
    router,
    store,
    ...App
});

export {app, router};
