<template>

                  <div class="indi-row">

                      <div class="indi-long-form-text">
                          <h1>Available Components </h1>
                          <p class="indi-long-form-text__p--intro">
                              Following components are available in the bundle.
                          </p>
                      </div>



                      <DatePicker></DatePicker>

                      <Tabs :tabs="getTabs">
                      </Tabs>



                      <FieldSet title="Sample Field Set" :fields=fields
                                @on-update="somethingUpdated" :data=fieldData ></FieldSet>

                      <Modal title="Review Your Form" label="Review">
                          <FieldSet  :fields=fieldsModal
                                    @on-update="somethingUpdated" :data=fieldData ></FieldSet>

                      </Modal>

                      <div class="indi-jump-menu__section js-jump-menu-object" id="overview">
                          <div class="indi-long-form-text">
                              <h2>Usage</h2>
                              <p>
                                  To know more about how to use these components refer to the links on left.
                              </p>
                          </div>
                      </div>

                      <div class="indi-long-form-text">
                          <h3>Inline Loader</h3>
                      </div>

                      <Loader :type=getLoaderType()></Loader>

                      <div class="indi-long-form-text">
                          <h3>Overlay Loader</h3>
                      </div>

                      <Button class="indi-button indi-button--primary indi-button--small" v-on:keyup.esc="hideLoader"
                              @click.prevent="showLoader">Show Overlay Loader
                      </Button>

                      <div class="indi-long-form-text">
                          <h3>Breadcrumbs</h3>
                      </div>

                      <BreadCrumbs :crumbs=getCrumbs></BreadCrumbs>

                      <div class="indi-long-form-text">
                          <h3>Progressbar</h3>
                      </div>

                      <ProgressBar :steps=getSteps></ProgressBar>

                      <div class="indi-long-form-text">
                          <h3>File Object</h3>
                      </div>

                      <FileObject title="file-pdf" file_name="customersnapcard" file_extension=".pdf" file_size="134k"></FileObject>

                      <div class="indi-long-form-text">
                          <h3>File Upload</h3>
                      </div>

                      <FileUpload title="file-pdf" file_name="customersnapcard" file_extension=".pdf" file_size="134k" file_progress="55"></FileUpload>


                      <div class="indi-long-form-text">
                          <h3>Modal</h3>
                      </div>

                      <Modal body=" Starting a new Form 460 revision will cause your current draft Form 460 to be deleted."
                      label="Click to Open Modal" title="Form 460" @onContinue="doCreateNewForm"></Modal>

                      <div class="indi-long-form-text">
                          <h3>Data Table</h3>
                      </div>


                      <TableSortable v-bind="$data" @loadData="loadData"></TableSortable>

                  </div>
</template>

<script>


import TableSortable from "./components/table/TableSortable";
import orderBy from 'lodash/orderBy';
import BreadCrumbs from "./components/BreadCrumbs";
import ProgressBar from "./components/ProgressBar";
import Modal from "./components/Modal";
import FileObject from "./components/FileObject";
import Loader from "./components/Loader";
import FileUpload from "./components/form/FileUpload"
import FieldSet from "./components/FieldSet";
import TextArea from "./components/form/TextArea";
import Tabs from "./components/Tabs";
import CodeTemplate from "./components/CodeTemplate";
import DatePicker from "./components/DatePicker";

var _query = {"limit": 10, "offset": 0, "sort": "", "order": "" };



export default {
  name: 'app',
  components: {
      DatePicker,
      CodeTemplate,
      Tabs,
      TextArea,
      FieldSet,
      Loader,
      FileObject,
      FileUpload,
      Modal,
      ProgressBar,
      BreadCrumbs,
      TableSortable
  },

  data: () => ({
    columns: [
        {title: 'User ID', field: 'uid', sortable: true},
        {title: 'Username', field: 'name', sortable : true},
        {title: 'Age', field: 'age', sortable: true},
        {title: 'Email', field: 'email'},
        {title: 'Country', field: 'country'}
    ],
    data: sortData(getData(), _query),
    total: 16,
    query: _query,
    paginated: true,
    inlineLoader: true,
    fields: fields,
    fieldsModal: fieldsModal,
    fieldData: getFieldData()
  }),
  computed: {
      getCrumbs(){
          return [{title: 'USAC Home', link: 'http://usac.org'}, {title: 'HUBB', link: 'http://netflix.com'}, {title: 'Home'}]
      },
      getSteps(){
          return [  {title: 'Carrier Information', link: '', status: 'complete'},
                    {title: 'User Signature', link: '', status: 'complete'},
                    {title: 'Review', link: '', status: 'current'},
                    {title: '509 Certification', link: '', status: 'incomplete'}]
      },
      getTabs(){
          return [
              {label: 'Tab One', id:'tab_one', content: 'This is content from Tab One', active: false},
              {label: 'Tab Two', id:'tab_two', content: 'This is content from Tab Two', active: true,
              code: '<Input  label="First Name"\n' +
                  '    field=\'fname\' value="sameer" error_message="",\n' +
                  '    help_txt="As it appears on Passport", disabled=false on-update="doSometing" >\n' +
                  '</FieldSet>'}
          ]
      },getCodeData(){
          return [
              {label: 'Vue', id:'tab_one',code: '<HTML>', active: false},
              {label: 'HTML', id:'tab_two', content: 'This is content from Tab Two', active: true,
                  code: '<Input  label="First Name"\n' +
                      '    field=\'fname\' value="sameer" error_message="",\n' +
                      '    help_txt="As it appears on Passport", disabled=false on-update="doSometing" >\n' +
                      '</FieldSet>'}
          ]
      }


  },
  methods: {
      loadData(q){
          console.log('in load data:'+JSON.stringify(q));
          this.data = sortData(this.data, q);

      },
      doCreateNewForm(){
          console.log("creating new form");
      },

      getLoaderType(){
          if(this.inlineLoader){
              return "inline";
          }else{
              return "overlay";
          }
      },
      showLoader(){
          this.inlineLoader = false;
      },
      hideLoader(){
          this.inlineLoader = true;
      }
      ,

      /**
       * This function is called when field view emits on-update
       * This is example of how to handle event when it can be triggered by multiple components within fieldset
       * @param field
       */
      somethingUpdated(field){
          console.log('in app vue:'+JSON.stringify(field));

          let index = this.fields.findIndex(f => f.field == field.field_name);

          if(field.field_name === 'zip' ){
              if(field.value.length != 5)
                  this.$set(this.fields[index], 'error_message', 'Zip Code must be 5 digits only');
              else
                  this.$set(this.fields[index], 'error_message', '');
          }

          if(field.field_name === 'main_btn'){
              console.log('in button');

              if(this.fieldData.tnc === false){
                  alert('Please agree to T & C first.');
              }else{
                  alert('Ok Done.'+JSON.stringify(this.fieldData));
              }
          }

          if(this.fieldData.fname !== 'sameer'){
              this.$set(this.fields[this.fields.findIndex(f => f.field == 'fname')], 'error_message', 'Name does not match')
          }else{
              this.$set(this.fields[this.fields.findIndex(f => f.field == 'fname')], 'error_message', '')
          }


          if(this.fieldData.futureNotifications === 'Yes'){
              this.$set(this.fields[this.fields.findIndex(f => f.field == 'notificationtype')], 'hidden', false);
          }else{
              this.$set(this.fields[this.fields.findIndex(f => f.field == 'notificationtype')], 'hidden', true);
          }

          console.log(JSON.stringify(this.fields));

      },
      txtarea(field){
          console.log('in txtarea:'+JSON.stringify(field));
      }

  }


}


let getData = function(){
    const data = [{uid: 1212, name: 'sameer', age: 35, email: 'svaidya@usac.org', country: 'USA'},
        {uid: 1213, name: 'david', age: 36, email: 'svaidya@usac.org', country: 'Mexico'},
        {uid: 1214, name: 'vijay', age: 38, email: 'svaidya@usac.org', country: 'Canada'},
        {uid: 1215, name: 'zzz', age: 39, email: 'svaidya@usac.org', country: 'Germany'},
        {uid: 1213, name: 'abi', age: 30, email: 'svaidya@usac.org', country: 'Mexico'},
        {uid: 1214, name: 'dan', age: 44, email: 'svaidya@usac.org', country: 'Canada'},
        {uid: 1215, name: 'ameer', age: 45, email: 'svaidya@usac.org', country: 'Germany'},
        {uid: 1216, name: 'meer', age: 55, email: 'svaidya@usac.org', country: 'Mexico'},
        {uid: 1217, name: 'xyz', age: 32, email: 'svaidya@usac.org', country: 'Canada'},
        {uid: 1218, name: 'abc', age: 38, email: 'svaidya@usac.org', country: 'Germany'},
        {uid: 1219, name: 'sameer', age: 22, email: 'svaidya@usac.org', country: 'Mexico'},
        {uid: 1221, name: 'aj', age: 23, email: 'svaidya@usac.org', country: 'Canada'},
        {uid: 1222, name: 'mj', age: 24, email: 'svaidya@usac.org', country: 'Germany'},
        {uid: 1223, name: 'dj', age: 25, email: 'svaidya@usac.org', country: 'Mexico'},
        {uid: 1224, name: 'cj', age: 26, email: 'svaidya@usac.org', country: 'Canada'},
        {uid: 1225, name: 'ml', age: 27, email: 'svaidya@usac.org', country: 'Germany'}

    ];


    return data;
}

let sortData = function(data, query){
  var d = orderBy(getData(), query.sort, query.order);
  d= d.splice(query.offset, query.offset+ query.limit);

  return d;
}

let fields = [
    {field: 'fname', label: 'First Name', col:'1-2',  field_type: 'input', help_txt: 'As it appears on passport'},
    {field: 'lname', label: 'Last Name', col:'1-2', value: 'Vaidya' },
    {field: 'city', label: 'City', col:'1-3'},
    {field: 'zip', label: 'Zip', col:'1-3'},
    {field: 'state', label: 'State', col:'1-3'},
    {field: 'futureNotifications', label: 'Do you want to stay updated?', field_type:'radio', col:'1-1', options: ['Yes', 'No']},
    {field: 'notificationtype', label: 'Choose how you want to be notified?', field_type:'select', col:'1-1',
        options: ['Select one from below','Email', 'Text'], hidden: false},
    {field: 'tnc', label: 'I agree', col:'1-1', field_type: 'checkbox'},
    {field: 'main_btn', label: 'Submit', type: 'primary', field_type:'button', col:'1-1'}


]

let fieldsModal = [
    {field: 'fname', label: 'First Name', col:'1-2',  field_type: 'input', help_txt: 'As it appears on passport', disabled: 'true'},
    {field: 'lname', label: 'Last Name', col:'1-2', value: 'Vaidya', disabled: 'true' },
    {field: 'futureNotifications', label: 'Updated?',  col:'1-3', options: ['Yes', 'No'], disabled: 'true'},
    {field: 'notificationtype', label: 'Notified by',  col:'1-3', disabled: 'true'},
    {field: 'tnc', label: 'I agree', col:'1-3', disabled: 'true'}
];


let getFieldData = function(){
    let fd = {fname:'sameer', mname:'K', lname:'vaidya',
        address1:'', address2:'', city:'', zip:'', state:'', tnc: true, futureNotifications: 'Yes', notificationtype:''};
    return fd;
}

</script>

<style scoped lang="scss">
    @import 'assets/styles/indi.scss';
    $indi-input-inset-color: rgba($indi-text-color-primary-default, .15);
    $indi-input-radio-inset-color: rgba($indi-text-color-primary-default, .2);
    $indi-input-icon-size: 24px;
    $indi-input-indent-size: $indi-input-icon-size + 12px;
    $indi-space-inset-form-input: 11px $indi-space-m;
    $indi-percentage-indicator-bar-size: 16px;

    .indi-form {
        margin: $indi-space-stack-l;
    }

    .indi-form__fieldset {
        background-color: $indi-background-color-light;
        border-color: $indi-color-accent-32;
        border-style: solid;
        border-width: 4px 0 0;
        margin: $indi-space-stack-l;
        padding: $indi-space-inset-l;
    }

    .indi-form__fieldset-title {
        margin: $indi-space-stack-m;
    }

    .indi-form__fieldset-legend {
        @include heading-level-3();
        padding: 0;
    }

    .indi-form__help-text {
        color: $indi-color-neutral-50;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-s;
        font-weight: $indi-font-weight-light;
        line-height: 18px;
        margin: $indi-space-stack-s;
    }

    .indi-form__input {
        background-color: $indi-color-neutral-100;
        border: 1px solid $indi-color-neutral-62;
        border-radius: $indi-border-radius;
        box-sizing: border-box;
        color: $indi-text-color-primary-default;
        display: block;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-form-input;
        font-weight: $indi-font-weight-light;
        line-height: $indi-font-line-height-l;
        margin: $indi-space-stack-xs;
        padding: $indi-space-inset-form-input;
        width: 100%;

        &:last-child {
            margin: 0;
        }

        &:focus,
        &.indi-form__input--has-focus {
            background-color: $indi-color-blue-93;
            border-color: $indi-color-interactive-default;
            box-shadow: inset $indi-space-xxs $indi-space-xxs 0 $indi-input-inset-color;
            outline: none;
        }

        &.indi-form__input--disabled,
        &:disabled {
            background-color: $indi-background-color-disabled;
            border-color: $indi-border-color-disabled;
            color: $indi-text-color-disabled;
            cursor: not-allowed;
        }

        &::placeholder {
            color: $indi-color-neutral-62;
        }
    }

    .indi-form__input--file {
        display: none;
    }

    .indi-form__input--light-background {
        background-color: $indi-background-color-disabled;
        border-color: $indi-border-color-disabled;
    }

    .indi-form__label {
        @include heading-level-5();
        display: block;
        margin: $indi-space-stack-s;
    }

    .indi-form__label-required-indicator {
        display: none;
    }

    .indi-form__label-optional-indicator {
        color: $indi-color-neutral-62;
    }

    .indi-form__select {
        border-radius: $indi-border-radius;
        box-sizing: border-box;
        display: block;
        height: 52px;
        margin: $indi-space-stack-s;
        position: relative;
        width: 100%;
    }

    .indi-form__select--disabled {
        cursor: not-allowed;
    }

    .indi-form__select-open-icon {
        fill: $indi-color-interactive-default;
        pointer-events: none;
        position: absolute;
        right: $indi-space-m;
        top: $indi-space-m;
        width: $indi-space-m;

        .indi-form__select--disabled & {
            fill: $indi-border-color-disabled;
        }
    }

    .indi-form__select-input {
        appearance: none;
        background-color: $indi-color-neutral-100;
        border: 1px solid $indi-color-neutral-62;
        border-radius: $indi-border-radius;
        color: $indi-text-color-primary-default;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-form-input;
        font-weight: $indi-font-weight-light;
        height: 100%;
        line-height: $indi-font-line-height-l;
        padding: $indi-space-inset-form-input;
        padding-right: 40px;
        width: 100%;

        .indi-form__select--light-background & {
            background-color: $indi-background-color-disabled;
            border-color: $indi-border-color-disabled;
        }

        &:focus {
            background-color: $indi-color-blue-93;
            border-color: $indi-color-interactive-default;
            box-shadow: inset $indi-space-xxs $indi-space-xxs 0 $indi-input-inset-color;
            outline: none;
        }

        .indi-form__select--disabled &,
        &:disabled {
            background-color: $indi-background-color-disabled;
            border-color: $indi-border-color-disabled;
            color: $indi-text-color-disabled;
            pointer-events: none;
        }

        &::-ms-expand {
            display: none;
        }
    }

    @mixin input-notification-maker($notification, $color) {
        .indi-form__input--has-#{$notification} {
            border-color: $color;
            border-width: 2px;
            box-shadow: 0 0 $indi-space-s $indi-shadow-color;

            &:focus {
                border-color: $color;
            }

            .indi-form__select-input {
                border-color: $color;
                border-width: 2px;
            }
        }
    }

    @include input-notification-maker('error', $indi-color-notification-alert-light);

    .indi-form__radio-button-group {
        border: 0;
        margin: $indi-space-stack-s;
        padding: 0;
    }

    .indi-form__radio-button-group-label {
        @include heading-level-5();
        display: block;
        margin: $indi-space-stack-s;
    }

    .indi-form__radio-button {
        color: $indi-text-color-primary-default;
        cursor: pointer;
        display: inline-block;
        padding: 10px $indi-space-l 0 $indi-input-indent-size;
        position: relative;
        text-indent: -$indi-input-indent-size;

        .indi-form__radio-button-group--stacked & {
            display: block;
            margin: $indi-space-stack-s;
            padding-right: 0;
            padding-top: 0;
        }
    }

    .indi-form__radio-button-text {
        @include paragraph();
        vertical-align: middle;

        .indi-form__radio-button--disabled & {
            color: $indi-text-color-disabled;
            cursor: not-allowed;
        }
    }

    .indi-form__radio-button-input {
        opacity: 0;
        position: absolute;
    }

    .indi-form__radio-button-icon {
        background-color: $indi-color-neutral-100;
        border: 1px solid $indi-color-neutral-62;
        border-radius: 50%;
        box-shadow: inset $indi-space-xxs $indi-space-xxs 0 $indi-color-neutral-93;
        box-sizing: border-box;
        display: inline-block;
        height: $indi-input-icon-size;
        margin: $indi-space-inline-left-s;
        overflow: hidden;
        position: relative;
        transform: translate3d(0, 0, 0);
        transition: background-color .3s;
        vertical-align: middle;
        width: $indi-input-icon-size;

        .indi-form__radio-button--disabled & {
            background-color: $indi-background-color-disabled;
            border-color: $indi-border-color-disabled;
            box-shadow: none;
            cursor: not-allowed;
        }

        .indi-form__radio-button-input:checked + & {
            border-color: $indi-color-interactive-default;
        }

        &::after {
            background-color: $indi-color-blue-61;
            border-radius: 50%;
            box-shadow: inset ($indi-space-xxs + 2) ($indi-space-xxs + 2) 0 $indi-input-radio-inset-color;
            content: '';
            display: block;
            height: ($indi-input-icon-size + 2);
            left: -2px;
            opacity: 0;
            position: absolute;
            top: -2px;
            transform: scale(.1);
            transform-origin: center;
            transition: opacity $indi-speed-transition-default, transform $indi-speed-transition-default;
            width: ($indi-input-icon-size + 2);

            .indi-form__radio-button-input:checked + & {
                opacity: 1;
                transform: scale(1);
            }
        }
    }

    .indi-form__checkbox-group {
        border: 0;
        margin: $indi-space-stack-s;
        padding: 0;
    }

    .indi-form__checkbox-group-label {
        @include heading-level-5();
        display: block;
        margin: $indi-space-stack-s;
    }

    .indi-form__checkbox {
        color: $indi-text-color-primary-default;
        cursor: pointer;
        display: inline-block;
        padding: 10px $indi-space-l 0 $indi-input-indent-size;
        position: relative;
        text-indent: -$indi-input-indent-size;

        .indi-form__checkbox-group--stacked & {
            display: block;
            margin: $indi-space-stack-m;
            padding-right: 0;
            padding-top: 0;
        }
    }

    .indi-form__checkbox-text {
        @include paragraph();
        vertical-align: middle;

        .indi-form__checkbox--disabled & {
            color: $indi-text-color-disabled;
            cursor: not-allowed;
        }
    }

    .indi-form__checkbox-input {
        opacity: 0;
        position: absolute;
    }

    .indi-form__checkbox-icon {
        background-color: $indi-color-neutral-100;
        border: 1px solid $indi-color-neutral-62;
        box-sizing: border-box;
        display: inline-block;
        height: $indi-input-icon-size;
        margin: $indi-space-inline-left-s;
        position: relative;
        transform: translate3d(0, 0, 0);
        transition: background-color .3s;
        vertical-align: middle;
        width: $indi-input-icon-size;

        .indi-form__checkbox--disabled & {
            background-color: $indi-background-color-disabled;
            border-color: $indi-border-color-disabled;
            cursor: not-allowed;
        }

        &::after {
            border: 2px solid $indi-color-interactive-default;
            border-left: 0;
            border-radius: 1px;
            border-top: 0;
            content: '';
            display: block;
            height: 18px;
            left: 8px;
            opacity: 0;
            position: absolute;
            top: 0;
            transform: scale(.1) rotate(35deg);
            transform-origin: center;
            transition: opacity $indi-speed-transition-default, transform $indi-speed-transition-default;
            width: 5px;

            .indi-form__checkbox-input:checked + & {
                opacity: 1;
                transform: scale(1) rotate(35deg);
            }
        }
    }

    .indi-form__input-notification {
        color: $indi-text-color-primary-default;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-default;
        line-height: $indi-font-line-height-default;
    }

    .indi-form__input-notification--has-error {
        color: $indi-text-color-alert-default;
    }

    .indi-form__horizontal-line {
        border: 1px solid $indi-color-neutral-74;
        border-bottom: 0;
        border-left: 0;
        border-right: 0;
        margin: $indi-space-stack-m;
        width: 100%;

        .indi-form__input-row & {
            margin: $indi-space-inset-m;
            width: calc(100% - #{$indi-space-l});
        }
    }

    .indi-form__input-group {
        margin: $indi-space-stack-l;
        width: 100%;

        &:last-child {
            margin-bottom: $indi-space-default;
        }
    }

    .indi-form__input-row {
        align-items: stretch;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 0;

        @media(min-width: $indi-breakpoints-tablet-portrait) {

            .indi-form__fieldset &,
            .indi-modal__body & {
                margin: 0 (-$indi-space-m);
            }

            .indi-form__input-group {
                margin: $indi-space-inset-m;
                width: auto;
            }

            .indi-form__input-group--1-4 {
                width: calc(25% - #{$indi-space-l});
            }

            .indi-form__input-group--1-2 {
                width: calc(50% - #{$indi-space-l});
            }

            .indi-form__input-group--3-4 {
                width: calc(75% - #{$indi-space-l});
            }

            .indi-form__input-group--1-1 {
                width: calc(100% - #{$indi-space-l});
            }

            .indi-form__input-group--1-3 {
                width: calc(33.33333% - #{$indi-space-l});
            }

            .indi-form__input-group--2-3 {
                width: calc(66.66667% - #{$indi-space-l});
            }

            .indi-form__input-group--offset-1-4 {
                padding-right: 25%;
            }

            .indi-form__input-group--offset-1-2 {
                padding-right: 50%;
            }

            .indi-form__input-group--offset-3-4 {
                padding-right: 75%;
            }

            .indi-form__input-group--offset-1-3 {
                padding-right: 33.33333%;
            }

            .indi-form__input-group--offset-2-3 {
                padding-right: 66.66667%;
            }
        }

        .indi-form__input-group--text-align-right {
            text-align: right;
        }
    }

    .indi-form__input--has-icon {
        position: relative;
    }

    .indi-form__input-icon {
        pointer-events: none;
        position: absolute;
        right: $indi-space-default;
        top: $indi-space-default;
    }

    .indi-form__datepicker {
        background-color: $indi-color-neutral-100;
        border: 1px solid $indi-color-neutral-74;
        box-shadow: 0 4px 0 0 $indi-shadow-datepicker-color;
        box-sizing: border-box;
        display: none;
        font-family: 'Source Sans Pro';
        height: auto;
        position: absolute;
        top: 52px;
        width: 100%;
        z-index: $indi-z-index-datepicker;

        &.indi-form__datepicker--is-open {
            display: block;
        }

        @media screen and (min-width: $indi-breakpoints-mobile-portrait) {
            width: 300px;
        }
    }

    .indi-form__datepicker-head {
        background-color: $indi-color-blue-48;
        color: $indi-color-neutral-100;
        padding: 12px;
        position: relative;
        text-align: center;

        .indi-form__datepicker-head-month-year {
            text-align: center;
        }

        .indi-form__datepicker-head-previous {
            fill: $indi-color-neutral-100;
            left: 1em;
            position: absolute;
        }

        .indi-form__datepicker-head-next {
            fill: $indi-color-neutral-100;
            position: absolute;
            right: 1em;
        }
    }

    .indi-form__datepicker-calender {
        border-collapse: collapse;
        font-size: $indi-font-size-default;
        width: 100%;

        thead {
            background-color: $indi-color-neutral-97;
            color: $indi-color-neutral-25;
            font-size: $indi-font-size-default;
            font-weight: $indi-font-weight-bold;
            line-height: $indi-font-line-height-body;

            td {
                padding: $indi-space-s;
                text-align: center;
            }
        }

        tbody {

            td {

                padding: 0;

                button {
                    background: none;
                    border: 0;
                    color: $indi-color-neutral-25;
                    font-family: 'Source Sans Pro';
                    font-size: $indi-font-size-default;
                    padding: $indi-space-s;
                    width: 100%;

                    &:focus {
                        outline: 0;
                    }

                    &.indi-form__datepicker-previous-month-dates,
                    &.indi-form__datepicker-next-month-dates {
                        color: $indi-color-neutral-74;
                    }

                    &:hover {
                        color: $indi-color-blue-48;
                        cursor: pointer;
                    }


                    &.indi-form__datepicker-previously-selected-date {
                        background-color: $indi-color-neutral-50;
                        color: $indi-color-neutral-100;
                    }
                }
            }
        }
    }

    .indi-form__file-upload {
        @include paragraph();
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        margin: 0 (-$indi-space-xs) $indi-space-default;

        @media(min-width: $indi-breakpoints-tablet-portrait) {
            flex-wrap: nowrap;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    .indi-form__file-upload-cell {
        padding: 0 $indi-space-xs;
    }

    .indi-form__file-upload-cell--file {

        @media(min-width: $indi-breakpoints-tablet-portrait) {
            order: 1;
            width: 320px;
        }
    }

    .indi-form__file-upload-cell--percentage {
        flex-grow: 1;
        margin: $indi-space-stack-s;
        width: 100%;

        @media(min-width: $indi-breakpoints-tablet-portrait) {
            margin: 0;
            order: 2;
            width: auto;
        }
    }

    .indi-form__file-upload-cell--action {
        order: 3;
    }

    .indi-form__file-upload-action {
        @include button-reset();
        fill: $indi-color-interactive-default;

        &:hover {
            fill: $indi-color-interactive-hover;
        }
    }

    @keyframes stripedbackground {
        0% {
            background-position: 0 0;
        }

        100% {
            background-position: -$indi-space-l 0;
        }
    }

    .indi-form__percentage-indicator {
        background-color: $indi-color-neutral-100;
        border: 1px solid $indi-color-neutral-100;
        height: $indi-percentage-indicator-bar-size;
        line-height: $indi-font-size-l;
        margin-right: 50px;
        outline: $indi-border-hairline-default;
        position: relative;

        &:after {
            color: $indi-text-color-primary-default;
            content: attr(aria-valuenow)'%';
            display: inline-block;
            font-family: $indi-font-family-sans-serif;
            font-size: $indi-font-size-l;
            font-weight: $indi-font-weight-bold;
            line-height: $indi-font-size-l;
            position: absolute;
            right: -50px;
            text-align: center;
            top: -1px;
            vertical-align: middle;
            width: 45px;
        }
    }

    .indi-form__percentage-indicator--striped {
        margin-right: 0;

        &:after {
            display: none;
        }
    }

    .indi-form__percentage-indicator-bar {
        background-color: $indi-color-blue-61;
        display: inline-block;
        height: $indi-percentage-indicator-bar-size;

        .indi-form__percentage-indicator--striped & {
            animation: stripedbackground .85s infinite linear;
            background-color: $indi-color-blue-75;
            background-image:
                    linear-gradient(
                                    45deg,
                                    $indi-color-blue-61 25%,
                                    $indi-color-blue-75 25%,
                                    $indi-color-blue-75 50%,
                                    $indi-color-blue-61 50%,
                                    $indi-color-blue-61 75%,
                                    $indi-color-blue-75 75%,
                                    $indi-color-blue-75);
            background-size: $indi-space-l $indi-space-l;
            width: 100%;
        }
    }

</style>
