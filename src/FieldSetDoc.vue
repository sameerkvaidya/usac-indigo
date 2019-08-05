<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>Field Set

                    </h1>
                    <p class="indi-long-form-text__p--intro">
                        Field set lets you group components with minimum configuration. Take a look at the <router-link to="forms">Fields</router-link> for details on fields that can be used in the fieldset.

                    </p>
                </div>

            </div>




            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div class="indi-long-form-text">
                    <h3>Sample</h3>
                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <FieldSet  title="User Contact Information"
                                :fields=fields @on-update="somethingUpdated" :data=fieldData>
                                </FieldSet>
                            </dt>
                            <dd class="indi-html-example__code">
                                <div class="indi-code-snippet">
                                    <div id="indi-code-snippet--39399" class="indi-code-snippet__source">
                                        <pre class="indi-code-snippet__pre">
                                            <code class="language-html">
&lt;FieldSet  title="User Contact Information"
:fields=fields @on-update="somethingUpdated" :data=fieldData&gt;
&lt;/FieldSet&gt;

let fields = [
{field: 'fname',
    label: 'First Name',
    col:'1-2',
    field_type: 'input',
    help_txt: 'As it appears on passport'},

]

let fieldData = {fname:'sameer', mname:'K', lname:'vaidya',
        address1:'', address2:'', city:'', zip:'', state:'', tnc: true};

                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>

                </div>


            </div>



            <Footer></Footer>



        </div>
    </div>
</template>

<script>
    import FieldSet from './components/FieldSet.vue';
    export default {
        name: "FieldSetDoc",
        components:{FieldSet},
        data: () => ({
            fields: fields,
            fieldData: getFieldData()
        }),
        methods:{
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

            }
        }
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
        {field: 'main_btn', label: 'Submit', type: 'primary', field_type:'button', col:'1-1'},
        {field: 'modalone', label: 'Review', title: 'Review your form', html:'<p>Submit form to review confirmation</p>', field_type: 'modal'}


    ]

    let getFieldData = function(){
        let fd = {fname:'sameer', mname:'K', lname:'vaidya',
            address1:'', address2:'', city:'', zip:'', state:'', tnc: true, futureNotifications: 'Yes'};
        return fd;
    }
</script>

<style scoped>

</style>