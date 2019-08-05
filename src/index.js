// Import all our components here to export
import ButtonComponent from './components/ButtonComponent.vue';
import BreadCrumbs from './components/BreadCrumbs.vue';
import CheckBox from './components/form/CheckBox.vue';
import FieldSet from "./components/FieldSet.vue";
import FileObject from './components/FileObject.vue';
import Input from "./components/form/Input.vue";
import Label from './components/form/Label.vue';
import Loader from './components/Loader.vue';
import Modal from './components/Modal.vue';
import ProgressBar from './components/ProgressBar.vue';
import RadioGroup from './components/form/RadioGroup.vue';
import Select from './components/form/Select.vue';
import TextArea from './components/form/TextArea.vue';
import TableSortable from './components/table/TableSortable.vue';
import 'babel-polyfill'

// install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    //register our components
    Vue.component('ButtonComponent', ButtonComponent);
    Vue.component('BreadCrumbs', BreadCrumbs);
    Vue.component('CheckBox', CheckBox);
    Vue.component('FieldSet', FieldSet);
    Vue.component('FileObject', FileObject );
    Vue.component('Input', Input);
    Vue.component('Label', Label);
    Vue.component('Loader',Loader );
    Vue.component('Modal', Modal );
    Vue.component('ProgressBar', ProgressBar);
    Vue.component('RadioGroup', RadioGroup);
    Vue.component('Select', Select);
    Vue.component('TableSortable', TableSortable);
    Vue.component('TextArea', TextArea);
}

// Create module definition for Vue.use()
const plugin = {
    install,
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export our component
export {ButtonComponent, BreadCrumbs, CheckBox,
        FieldSet, FileObject, Input,
        Label, Loader, Modal,
        ProgressBar,  RadioGroup,
        Select, TableSortable,  TextArea};