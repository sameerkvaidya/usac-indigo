<template>
    <fieldset class="indi-form__radio-button-group" role="radiogroup" v-bind:class="getClass()"  v-if="hidden !== true">
        <legend class="indi-form__radio-button-group-label"> {{ label }} </legend>

        <template v-for="option in options">
            <label class="indi-form__radio-button" v-bind:for="mergeStr(option, field)">
                <input v-bind:id="mergeStr(option, field)" v-bind:name="mergeStr(option, field)" v-bind:value="option"
                       type="radio" class="indi-form__radio-button-input" v-model="localValue" v-bind:class="getClass()"
                       @change="update(field, $event)" />
                <span class="indi-form__radio-button-icon"></span>
                <span class="indi-form__radio-button-text "> {{option}} </span>
            </label>
        </template>


    </fieldset>
</template>

<script>
    import BaseField from './BaseField.vue';
    export default {
        name: "RadioGroup",
        extends: BaseField,
        props:['options', 'stacked'],
        data: ()=>({localValue: ''}),
        methods:{
            getClass(){
                if(this.stacked && this.stacked == 'true'){
                    return ' indi-form__radio-button-group--stacked';
                }
                else{
                    return '';
                }
            },
            mergeStr(str1, str2){
                return str1 + str2;
            },


        },
        created(){
            this.localValue = this.value;
        }

    }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/indi.scss';

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