<template>
    <div class="indi-form__input-group" v-if="hidden !== true"  ref="select-ref">
        <label class="indi-form__label">{{label}}</label>
        <div class="indi-form__select" v-bind:class="getClass()">
            <select class="indi-form__select-input"  @input="update(field, $event)" v-bind:class="getClass()">
                <template v-for="o in options">
                    <option class="indi-form__select-option" :value="o">{{o}}</option>
                </template>
            </select>
            <svg class="indi-icon indi-form__select-open-icon" aria-labelledby="title">
                <title>caret-down</title>
                <use xlink:href="./indi_icons.svg#caret-down"/>
            </svg>
        </div>
    </div>

</template>

<script>
    import BaseField from './BaseField.vue';
    export default {
        name: "Select",
        extends: BaseField,
        props: ['options']
    }
</script>

<style scoped>

</style>