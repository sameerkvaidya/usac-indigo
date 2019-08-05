import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import BreadCrumbsDoc from './BreadCrumbsDoc.vue'
import DataTableDoc from './DataTableDoc.vue'
import ModalDoc from './ModalDoc.vue'
import ProgressBarDoc from './ProgressBarDoc.vue'
import FileObjectDoc from './FileObjectDoc.vue'
import GettingStartedDoc from './GettingStartedDoc.vue'
import PaginationDoc from './PaginationDoc.vue'
import LoaderDoc from './LoaderDoc.vue'
import ButtonDoc from './ButtonDoc.vue'
import FileUploadDoc from './FileUploadDoc.vue'
import FormsDoc from './FormsDoc.vue'
import FieldSetDoc from './FieldSetDoc.vue'
import VueScrollTo from "vue-scrollto";
import 'babel-polyfill'
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -100,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

const routes = [
    { path: '/', component: App },
    { path: '/started', component: GettingStartedDoc },
    { path: '/breadcrumbs', component: BreadCrumbsDoc },
    { path: '/datatable', component: DataTableDoc },
    { path: '/progressbar', component: ProgressBarDoc },
    { path: '/fileobject', component: FileObjectDoc },
    { path: '/modal', component: ModalDoc },
    { path: '/pagination', component: PaginationDoc},
    { path: '/loader', component: LoaderDoc},
    { path: '/button', component: ButtonDoc},
    { path: '/fileupload', component: FileUploadDoc},
    { path: '/forms', component: FormsDoc},
    { path: '/fieldset', component: FieldSetDoc}

]

const router = new VueRouter({
    routes
})


new Vue({
    router,
    render: h => h(Home)
}).$mount('#app')
