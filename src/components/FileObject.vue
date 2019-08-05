<template>

    <span class="indi-file-object">
        <span class="indi-file-object__grid">
            <span class="indi-file-object__cell indi-file-object__cell--icon">
                <svg class="indi-icon indi-icon--medium indi-icon--valign-middle indi-file-object__icon" aria-labelledby="title">
                    <title>{{ title }}</title>
                    <use xlink:href="./indi_icons.svg#file-pdf"></use>
                </svg>
            </span>
            <span class="indi-file-object__cell indi-file-object__cell--label" title="customersnapcard"> {{ file_name }} </span>
            <span class="indi-file-object__cell indi-file-object__cell--file-type"> {{ file_extension }} </span>
            <span class="indi-file-object__cell indi-file-object__cell--file-size"> ( {{ file_size }} ) </span>
        </span>
    </span>
</template>

<script>
    export default {
        name: "FileObject",
        props: ['title', 'file_name', 'file_extension', 'file_size']
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/indi.scss';

    .indi-file-object {
        @include paragraph();
        display: inline-block;
    }

    .indi-file-object--link {
        @include link();

        &:hover {

            .indi-file-object__icon {
                fill: $indi-color-interactive-hover;
            }

            .indi-file-object__cell--file-size {
                color: $indi-color-interactive-hover;
            }
        }
    }

    .indi-file-object__grid {
        align-items: center;
        display: flex;
    }

    .indi-file-object__cell--icon {
        padding: $indi-space-inline-left-xs;

        &:last-child {
            padding-right: 0;
        }
    }

    .indi-file-object__cell--label {
        font-weight: $indi-font-weight-bold;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        @media(min-width: $indi-breakpoints-tablet-portrait) {
            max-width: 210px;
        }
    }

    .indi-file-object__cell--file-type {
        font-weight: $indi-font-weight-bold;
        padding: $indi-space-inline-left-xs;
        white-space: nowrap;

        &:last-child {
            padding-right: 0;
        }
    }

    .indi-file-object__cell--file-size {
        color: $indi-color-neutral-50;
        text-transform: uppercase;

        .indi-file-object--link & {
            color: $indi-color-interactive-default;
        }
    }

    .indi-file-object__icon {
        fill: $indi-color-neutral-50;

        .indi-file-object--link & {
            fill: $indi-color-interactive-default;
        }
    }


</style>