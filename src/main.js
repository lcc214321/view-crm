import './set-public-path'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import singleSpaVue from 'single-spa-vue';
/**
 * @description 实际打包时应该不引入mock
 */
if (process.env.NODE_ENV !== 'production') require('@/mock')
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 应用iview组件
 */
Vue.use(iView);
/**
 * @description Single-SPA 应用注册
 */
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        router,
        render: (h) => h(App)
    },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
