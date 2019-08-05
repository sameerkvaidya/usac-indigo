
import Vue from "vue";

import BreadCrumbs from './BreadCrumbs.vue';
import DatePicker from './DatePicker.vue';
import FieldSet from './FieldSet.vue';
import FileObject from './FileObject.vue';
import Modal from './Modal.vue';
import Loader from './Loader.vue';
import ProgressBar from './ProgressBar.vue';
import TableSortable from './table/TableSortable.vue';


const Components = {
    BreadCrumbs, DatePicker, FieldSet, FileObject, Modal, Loader, ProgressBar, TableSortable
};


Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;


