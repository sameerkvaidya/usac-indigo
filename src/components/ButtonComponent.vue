<template>
    <button @click.prevent="update" class="indi-button" v-bind:class="getClass()"  v-if="hidden !== true">{{ label }}</button>
</template>

<script>

    const primary = ' indi-button--primary';
    const tertiary = ' indi-button--tertiary';
    const disabled_class = ' indi-button--disabled';
    const small_class = ' indi-button--small';
    const dark_class = ' indi-button--on-dark';
    export default {
        name: "ButtonComponent",
        props: ['label', 'type', 'disabled', 'small', 'dark', 'field_name', 'hidden'],
        methods: {
            update(){
                this.$emit('on-update', {field_name: this.field_name})
            },
            getClass(){
               let cls = '';

               if(this.type){
                   if(this.type.toLowerCase() == 'primary'){
                       cls = primary;
                   }
                   if(this.type.toLowerCase() == 'tertiary'){
                       cls += tertiary;
                   }
               }
               if(this.disabled){
                   cls += disabled_class;
               }
                if(this.small){
                    cls += small_class;
                }
                if(this.dark){
                    cls += dark_class;
                }

               return cls;
            }
        }

    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/indi.scss';

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