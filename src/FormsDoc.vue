<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>Forms
                    </h1>

                    <p class="indi-long-form-text__p--intro">
                        Electronic forms efficiently and conveniently collect and transfer user data.
                    </p>
                </div>

                <div class="indi-long-form-text">
                    <h2>Design and Implementation</h2>
                    <h3>Form components share following Properties</h3>
                    <ul>
                        <li>'field_type'
                            <p>Required, type of field it can be one fo the following.
                                <ul>
                                <li>
                                    button
                                </li>
                                <li>
                                    checkbox
                                </li>
                                <li>
                                    datepicker
                                </li>
                                <li>
                                    fileupload
                                </li>
                                <li>
                                    fileobject
                                </li>
                                <li>
                                    input
                                </li>
                                <li>
                                    label
                                </li>
                                <li>
                                    radio
                                </li>
                                <li>
                                    select
                                </li>
                                <li>
                                    textarea
                                </li>
                                </ul>


                            </p>
                        </li>
                        <li>'field'
                            <p>Required, this is name of the data element </p>
                        </li>
                        <li>'label'
                        <p>this is displayed if object has label</p>
                        </li>
                        <li>'value'</li>
                        <li>'error_message'</li>
                        <li>'help_txt'</li>
                        <li>'disabled'</li>
                    </ul>

                    <h3>Form components support <strong>on-update</strong> event</h3>
                    <p>In following code snippet for Input component on-update would trigger function <strong>doSometing</strong>.
                        This function will receive two arguments as field_name and value.
                    </p>

                    <p>   These components are used in Fieldset. <router-link to="/fieldset" class="indi-side-nav__label
                         indi-side-nav__label--link js-behavior-side-nav-link">
                            Refer to Fieldset
                        </router-link>
                    </p>

                </div>

            </div>
        </div>

        <div class="indi-col-xs-10">
            <div class="indi-jump-menu__section js-jump-menu-object" id="text-input">
                <div class="indi-long-form-text">
                    <h2>Text Input</h2>
                    <p>
                        Basic text inputs allow users to type words into a field. Use them in search boxes and form fields that require the user to enter free-text that is only a few words long or would fit on one line.
                    </p>
                </div>

            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div>
                    <h3>Sample</h3>
                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <Input  label="First Name" ref="inputref"
                                        field='fname' value="sameer" help_txt="As it appears on Passport">
                                </Input>
                            </dt>
                            <dd class="indi-html-example__code">
                                <CodeTemplate :codetabs="getInputTabs()"></CodeTemplate>
                            </dd>
                        </dl>
                    </div>

                </div>


            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="text-area">
                <div class="indi-long-form-text">
                    <h2>Text Area</h2>
                    <p>
                        Text areas allow users to type sentences or paragraphs into a field. Use them when the user needs to input a lot of text to answer a form question.
                    </p>
                </div>
            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div>
                    <h3>Sample</h3>
                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <TextArea  label="First Name" ref="textarearef"
                                        field='txtArea'
                                           value="Example of sample TextArea..."
                                           disabled="true">
                                </TextArea>
                            </dt>
                            <dd class="indi-html-example__code">
                                <CodeTemplate :codetabs="getTextAreaTabs()"></CodeTemplate>
                            </dd>
                        </dl>
                    </div>

                </div>


            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="date-picker">
                <div class="indi-long-form-text">
                    <h2>Date Picker
                        <span class="indi-badge indi-badge--error">Work In Progress</span>
                        <button class="indi-tooltip indi-tooltip--right">
                            <span class="indi-tooltip__content">This component is still in development. Although the current state is in the library, it’s not vetted and therefore should be used with caution.</span>
                            <svg class="indi-icon" aria-labelledby="title">
                                <title>help</title>
                                <use xlink:href="./indi_icons.svg#help">
                                </use></svg>
                        </button>
                    </h2>
                    <p>
                        The date (calendar) picker allows users to easily and quickly select a date from a calendar.
                    </p>
                </div>
            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="radio-button">
                <div class="indi-long-form-text">
                    <h2>Radio Button</h2>
                    <p>
                        Use radio buttons when the user has to <strong>choose one</strong> option. For example, if the user can choose “yes” <strong>OR</strong> “no.”
                    </p>
                </div>
            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div>
                    <h3>Sample</h3>
                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <RadioGroup field="rdgrp" label="Select one of the following"
                                            :options=options() ref="radiogroupref"
                                            value="Windows" stacked=false
                                ></RadioGroup>
                                <RadioGroup field="rdgrp1" label="(Stacked)Select one of the following"
                                            :options=options()
                                            value="MacOS" stacked=true
                                ></RadioGroup>
                            </dt>
                            <dd class="indi-html-example__code">
                                <CodeTemplate :codetabs="getRadioButtonTabs()"></CodeTemplate>
                            </dd>
                        </dl>
                    </div>

                </div>


            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="check-box">
                <div class="indi-long-form-text">
                    <h2>check Box</h2>
                    <p>
                        Use checkboxes whenever the user has the option to select <strong>more than one</strong> answer. Or, you can use one check box alone to have users accept or note certain things such as acknowledging a certification.                    </p>
                </div>
            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div>
                    <h3>Sample</h3>
                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <CheckBox field="tnc" ref="checkboxref"
                                          label="Terms & Conditions" value="true"></CheckBox>
                            </dt>
                            <dd class="indi-html-example__code">
                                <CodeTemplate :codetabs="getCheckBoxTabs()"></CodeTemplate>
                            </dd>
                        </dl>
                    </div>

                </div>


            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="select-drop-down">
                <div class="indi-long-form-text">
                    <h2>Select/Drop Down</h2>
                    <p>
                        Use the select element to present a menu of options with a single selection.
                    </p>
                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div>
                    <h3>Sample</h3>
                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <Select  label="Select preferred operating system"
                                           field='slct'
                                           :options=options()
                                            @on-update="printIt"
                                         ref="selectref"
                                           >
                                </Select>
                            </dt>
                            <dd class="indi-html-example__code">
                                <CodeTemplate :codetabs="getSelectTabs()"></CodeTemplate>
                            </dd>
                        </dl>
                    </div>

                </div>


            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="file-input">
                <div class="indi-long-form-text">
                    <h2>File Input</h2>
                    <p>
                        Use the <code class="indi-doc-code">indi-form__input--file</code> class on file input elements to hide them. File inputs should then be triggered via Javascript by a Primary, Secondary, or Tertiary button component.
                    </p>
                </div>

            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="file-upload">
                <div class="indi-long-form-text">
                    <h2>File Upload</h2>
                    <p>
                        File upload will require following properties:
                        <ul>
                            <li>title</li>
                            <li>file_name</li>
                            <li>file_extension<li>
                            <li>file_size</li>
                            <li>file_progress</li>
                        </ul>

                    </p>

                </div>

            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div>
                    <h3>Sample</h3>
                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <FileUpload ref="fileuploadref"
                                title="file-pdf" file_name="customersnapcard" file_extension=".pdf" file_size="134k" file_progress="55"></FileUpload>

                            </dt>
                            <dd class="indi-html-example__code">
                                <CodeTemplate :codetabs="getFileUploadTabs()"></CodeTemplate>
                            </dd>
                        </dl>
                    </div>

                </div>


            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="label">
                <div class="indi-long-form-text">
                    <h2>Label</h2>
                    <p>
                        Use labels to accompany virtually all form elements and place them above the associated input field. This ensures the layout of elements will scale on smaller screen resolutions.
                    </p>
                </div>
            </div>
            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div>
                    <h3>Sample</h3>
                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <Label label="Primary Address" ref="labelref"></Label>

                            </dt>
                            <dd class="indi-html-example__code">
                               <CodeTemplate :codetabs="getLabelTabs()"></CodeTemplate>

                            </dd>
                        </dl>
                    </div>

                </div>


            </div>


        </div>


        <!-- Left Nav-->
        <div class="indi-col-xs-2">


            <ul class="indi-jump-menu indi-jump-menu--is-fixed">

                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link indi-jump-menu__link--is-active js-behavior-jump-link" href="#" v-scroll-to="'#overview'">
                        <span class="indi-jump-menu__label">overview</span>
                    </a>
                </li>

                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link js-behavior-jump-link" href="#" v-scroll-to="'#text-input'">
                        <span class="indi-jump-menu__label">text input</span>
                    </a>
                </li>


                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link js-behavior-jump-link" href="#" v-scroll-to="'#text-area'">
                        <span class="indi-jump-menu__label">text area</span>
                    </a>
                </li>

                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link js-behavior-jump-link" href="#" v-scroll-to="'#date-picker'">
                        <span class="indi-jump-menu__label">date picker</span>
                    </a>
                </li>

                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link js-behavior-jump-link" href="#" v-scroll-to="'#radio-button'">
                        <span class="indi-jump-menu__label">radio button</span>
                    </a>
                </li>

                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link js-behavior-jump-link" href="#" v-scroll-to="'#check-box'">
                        <span class="indi-jump-menu__label">checkbox</span>
                    </a>
                </li>

                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link js-behavior-jump-link" href="#" v-scroll-to="'#select-drop-down'">
                        <span class="indi-jump-menu__label">select/drop down</span>
                    </a>
                </li>

                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link js-behavior-jump-link" href="#" v-scroll-to="'#file-input'">
                        <span class="indi-jump-menu__label">file input</span>
                    </a>
                </li>

                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link js-behavior-jump-link" href="#" v-scroll-to="'#file-upload'">
                        <span class="indi-jump-menu__label">file upload</span>
                    </a>
                </li>

                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link js-behavior-jump-link" href="#" v-scroll-to="'#label'">
                        <span class="indi-jump-menu__label">label</span>

                    </a>

                </li>


                <li class="indi-jump-menu__item">
                    <a class="indi-jump-menu__link js-behavior-sink-page-link" href="#">
                        <span class="indi-jump-menu__label">Sink Page</span>
                        <svg class="indi-icon indi-icon--xsmall indi-icon--valign-middle" aria-labelledby="title">
                            <title>external-link</title>
                            <use xlink:href="./indi_icons.svg#external-link"></use>
                        </svg>
                    </a>
                </li>

            </ul>


        </div>



    </div>


</template>

<script>
    import Input from './components/form/Input.vue';
    import CheckBox from "./components/form/CheckBox";
    import FileUpload from "./components/form/FileUpload";
    import TextArea from "./components/form/TextArea";
    import Select from "./components/form/Select";
    import Label from "./components/form/Label";
    import RadioGroup from "./components/form/RadioGroup";
    import OuterHtml from "./components/OuterHtml";
    import Tabs from "./components/Tabs";
    import CodeTemplate from "./components/CodeTemplate";

    export default {
        name: "FormsDoc",
        data: ()=> ({
            selectHTML: '',
            inputHTML:'',

        }),
        components:{
            CodeTemplate,
            Tabs,
            OuterHtml,
            RadioGroup,
            Label,
            Select,
            TextArea,
            FileUpload,
            CheckBox,
            Input
        }, methods:{
            options(){
                return ['Windows', 'Linux', 'MacOS'];
            },
            printIt(field){
                console.log(JSON.stringify(field));
            },
            getInputTabs(){
                return [
                    {label: 'VUE', id: 'vue_input', active: true,
                        code: '<Input  label="First Name"\n' +
                            '    field=\'fname\' value="sameer" error_message="",\n' +
                            '    help_txt="As it appears on Passport", disabled=false on-update="doSometing" >\n' +
                            '</FieldSet>'},
                    {label: 'HTML', id: 'html_input', active: false,
                        ref: 'inputref' }
                ]
            },
            getTextAreaTabs(){
                return [
                    {label: 'VUE', id: 'vue_textarea', active: true,
                        code: '<TextArea  label="Text Area "\n' +
                            '    field=\'txtArea\' value="Example of sample TextArea" ,\n' +
                            '    disabled=true on-update="doSometing" >\n' +
                            '</FieldSet>'},
                    {label: 'HTML', id: 'html_textarea', active: false,
                        ref: 'textarearef' }
                ]
            },
            getRadioButtonTabs(){
                return [
                    {label: 'VUE', code: '<RadioGroup  field="rdgrp" label="Select one of the following"\n' +
                            '    :selections=options()\n' +
                            '    value="Windows" stacked="true" &gt;\n' +
                            '</RadioGroup>;', id:'vue_radio', active: true},
                    {label: 'HTML', ref:'radiogroupref', id:'html_radio', active: false}
                ]
            },
            getCheckBoxTabs(){
                return [
                    {label: 'VUE', code: '<CheckBox  label="Terms and Conditions"\n' +
                            '    field=\'tnc\' value=value error_message="",\n' +
                            '    on-update="doSometing" >\n' +
                            '</CheckBox>', id:'vue__checkbox', active: true},
                    {label: 'HTML', ref:'checkboxref', id:'html_checkbox', active: false}
                ]
            },
            getSelectTabs(){
                return [
                    {label: 'VUE', code: '<Select  label="Select preferred operating system"\n' +
                            'field=\'slct\'\n' +
                            ':options=options()\n' +
                            '@on-update="printIt"\n' +
                            'ref="selectref"></Select>', id:'vue_select', active: true},
                    {label: 'HTML', ref:'selectref', id:'html_select', active: false}
                ]
            },
            getFileUploadTabs(){
                return [
                    {label: 'Vue', code: '<FileUpload ref="fileuploadref" title="file-pdf"\n' +
                            'file_name="customersnapcard" file_extension=".pdf"\n' +
                            'file_size="134k" file_progress="55">\n' +
                            '</FileUpload>', id:'vue-fileupload', active: true},
                    {label: 'HTML', ref:'fileuploadref', id:'html_fileupload', active: false}
                ]
            },
            getLabelTabs(){
                return [
                    {label: 'Vue', code:'<Label ref="labelref" label="Primary Address" >\n' +
                            '</Label>', id:'vue-label', active: true},
                    {label: 'HTML', ref:'labelref', id:'html_label', active: false}
                ]
            }

        },
        mounted(){
            this.selectHTML = this.$refs.selectref.$el.outerHTML;
            this.inputHTML = this.$refs.inputref.$el.outerHTML;

        }
    }
</script>

<style scoped lang="scss">

</style>