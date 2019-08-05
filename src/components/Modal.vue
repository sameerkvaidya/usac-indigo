<template>

    <div>
        <button class="indi-button indi-button--primary indi-button--small indi-modal-target" @click="openModal">{{ label }}</button>

        <div class="indi-modal" v-bind:class="getClass()">
            <div class="indi-modal__content">
                <div class="indi-modal__header">
                    <div class="indi-modal__close" aria-label="Close Modal">
                        <svg class="indi-icon" aria-labelledby="title">
                            <title>close</title>
                            <use xlink:href="./indi_icons.svg#close"></use>
                        </svg>
                    </div>
                    <div>{{ title }}
                        <span class="indi-header__help-text"> </span>
                        <span class="indi-header__help-icon"> </span>
                    </div>
                </div>

                <div class="indi-modal__body"> {{body}}<slot></slot> </div>
                <div class="indi-modal__footer">
                    <button class="indi-button indi-button--tertiary" type=button @click="closeModal"> Cancel </button>
                    <button class="indi-button indi-button--primary" type=button @click="onContinue"> Continue </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Modal",
        props: ['label', 'body', 'title'],
        methods: {
            openModal(){

                this.modalClass = "indi-modal--is-open";
            },
            getClass(){
                return this.modalClass;
            },
            closeModal(){
                this.modalClass = "";
            },
            onContinue(){
                this.modalClass = "";
                this.$emit('onContinue');
            }
        },
        data: () => ({
            modalClass: '',

        })
    }
</script>

<style scoped lang="scss">

    @import '../assets/styles/indi.scss';
    $indi-space-modal-padding: 48px;
    $indi-font-size-xl: 28px;
    $indi-space-inset-squish-xl: 16px 48px 16px 48px;
    $indi-modal-background-color: rgba($indi-color-neutral-25, .59);
    $indi-modal-box-shadow: $indi-space-inline-left-xs rgba(0, 0, 0, .06);
    $indi-modal-help-icon-margin: 10px;

    .indi-modal {
        background-color: $indi-modal-background-color;
        display: none;
        height: 100%;
        left: 0;
        overflow: auto;
        padding-top: 100px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: $indi-z-index-modal;

    &.indi-modal--is-open {
         display: block;
     }
    }

    .indi-modal__content {
        background-color: $indi-color-neutral-97;
        border-radius: $indi-border-radius;
        margin: auto;
        opacity: 1;
        overflow: auto;
        padding: 0;
        position: relative;
        width: 584px;

    .indi-modal--wide & {
        width: 790px;
    }
    }

    .indi-modal__close {
        padding: 0;
        position: absolute;
        right: $indi-space-default;
        top: $indi-space-default;

    &:hover {
         cursor: pointer;
         text-decoration: none;
     }
    }

    .indi-header__help-text {
        color: $indi-color-interactive-default;
        fill: $indi-color-interactive-default;
        float: right;
        font-size: $indi-font-size-default;
    }

    .indi-header__help-icon {
        fill: $indi-color-interactive-default;
        float: right;
        margin-right: $indi-modal-help-icon-margin;
    }

    .indi-modal__header {
        background-color: $indi-color-neutral-100;
        border-radius: $indi-border-radius $indi-border-radius 0 0;
        box-shadow: $indi-modal-box-shadow;
        color: $indi-color-neutral-15;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-xl;
        font-style: normal;
        font-weight: normal;
        line-height: $indi-font-line-height-heading-level-4-l;
        padding: $indi-space-modal-padding;
    }

    .indi-modal__body {
        color: $indi-color-neutral-25;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-form-input;
        line-height: 24px;
        padding: $indi-space-inset-squish-xl;
        text-align: left;
    }

    .indi-modal__footer {
        padding: 0 $indi-space-modal-padding $indi-space-modal-padding;
        text-align: right;
    }
    $indi-color-white-opacity: rgba($indi-color-neutral-100, .2); //secondary hover backgroundcolor

    .indi-button {
        background: $indi-background-color-default;
        border: 1px solid $indi-color-interactive-default;
        border-radius: $indi-border-radius;
        color: $indi-color-interactive-default;
        cursor: pointer;
        display: inline-block;
        fill: $indi-color-interactive-default;
        font: $indi-font-size-l $indi-font-family-sans-serif;
        font-stretch: normal;
        font-style: normal;
        font-weight: $indi-font-weight-bold;
        letter-spacing: 1px;
        line-height: $indi-font-size-l;
        margin: 0;
        padding: $indi-space-inset-squish-l;
        text-align: center;
        text-decoration: none;
        user-select: none;

        &.indi-button--on-dark {
            background: transparent;
            border-color: $indi-color-neutral-100;
            color: $indi-color-neutral-100;

            &.indi-button--hover,
            &:hover {
                background: $indi-color-white-opacity;
                border-color: $indi-color-neutral-100;
                color: $indi-color-neutral-100;
            }
        }

        &.indi-button--hover,
        &:hover {
            border-color: $indi-color-neutral-50;
            color: $indi-color-neutral-50;
            fill: $indi-color-neutral-50;
        }

        &.indi-button--disabled,
        &:disabled {
            background: $indi-background-color-default;
            border-color: $indi-text-color-disabled;
            color: $indi-text-color-disabled;
            cursor: not-allowed;
            letter-spacing: .6px;
        }

        &:focus {
            outline: none;
        }

        & + & {
            margin: $indi-space-inline-right-l;
        }

        .indi-long-form-text + &:not(:last-child) {
            margin-bottom: $indi-space-l;
        }
    }

    .indi-button--primary {
        background: $indi-color-interactive-default;
        border-color: $indi-color-interactive-default;
        color: $indi-color-neutral-100;
        fill: $indi-color-neutral-100;

        &.indi-button--on-dark {
            background: $indi-color-neutral-100;
            color: $indi-color-interactive-default;

            &.indi-button--hover,
            &:hover {
                background: $indi-color-blue-93;
                border-color: $indi-color-blue-93;
                color: $indi-color-interactive-hover;
            }
        }

        &.indi-button--hover,
        &:hover {
            background: $indi-color-blue-61;
            border-color: $indi-color-blue-61;
            color: $indi-color-neutral-100;
            fill: $indi-color-neutral-100;
        }

        &.indi-button--disabled,
        &:disabled {
            background: $indi-color-neutral-93;
            border-color: $indi-color-neutral-93;
            color: $indi-color-neutral-62;
            cursor: not-allowed;
            letter-spacing: .6px;
        }
    }

    .indi-button--small {
        font-size: $indi-font-size-default;
        line-height: $indi-font-size-default;
        padding: $indi-space-inset-squish-default;

        &+&,
        &+.indi-button--tertiary {
            margin: $indi-space-inline-right-m;
        }
    }

    .indi-button--tertiary {
        background-color: transparent;
        border: 0;
        color: $indi-color-interactive-default;
        font-size: $indi-font-size-default;
        font-weight: normal;
        letter-spacing: normal;
        line-height: 23px;
        padding: 0;
        text-align: left;

        &.indi-button--hover,
        &:hover {
            color: $indi-color-interactive-hover;
        }
    }

    .indi-button__icon {
        position: absolute;
        vertical-align: middle;
    }

    .indi-button__icon-text {
        padding-left: $indi-space-l;
    }

</style>