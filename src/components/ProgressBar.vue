<template>
    <div class="indi-progress-bar">
        <ul class="indi-progress-bar__list">
            <li v-for="step in steps" class="indi-progress-bar__item "
                v-bind:class="getClass(step.status)">
                <a v-bind:href="step.link" class="indi-progress-bar__label">
                    <span class="indi-progress-bar__circle"></span>
                    <span class="indi-progress-bar__text">{{ step.title }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props: ['steps'],
        methods: {
            getClass(status){
                if(status === 'complete')
                    return 'indi-progress-bar__item--is-complete'
                else if(status === 'incomplete')
                    return 'indi-progress-bar__item--is-incomplete'
                else if(status === 'current')
                    return 'indi-progress-bar__item--is-current'
                else return ''

            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/indi.scss';

    $indi-space-progress-bar-circle: 24px;

    .indi-progress-bar {
        margin: $indi-space-stack-l;
        width: 100%;
    }

    .indi-progress-bar__list {
        display: table;
        margin: 0;
        padding: 0;
        table-layout: fixed;
        width: 100%;
    }

    .indi-progress-bar__item {
        color: $indi-color-neutral-50;
        display: table-cell;
        font-family: 'Source Sans Pro';
        font-size: $indi-font-size-default;
        font-weight: normal;
        list-style-type: none;
        padding: 0 $indi-space-s;
        position: relative;
        text-align: center;
        vertical-align: top;

        &::after {
            background-color: $indi-color-neutral-74;
            content: '';
            height: 3px;
            left: -50%;
            position: absolute;
            top: 13px;
            width: 100%;
            z-index: -1;
        }

        &:first-child:after {
            content: none;
        }
    }

    .indi-progress-bar__circle {
        background-color: $indi-background-color-default;
        border: 3px solid $indi-color-blue-48;
        border-radius: 50%;
        display: block;
        height: $indi-space-progress-bar-circle;
        line-height: $indi-space-progress-bar-circle;
        margin: 0 auto $indi-space-default;
        text-align: center;
        width: $indi-space-progress-bar-circle;
    }

    .indi-progress-bar__item--is-current {
        color: $indi-color-neutral-25;
        font-weight: $indi-font-weight-bold;

        .indi-progress-bar__circle {
            background-color: $indi-background-color-default;
            border-color: $indi-color-green-37;
            color: $indi-color-neutral-100;
        }

        .indi-progress-bar__label {

            &:hover {
                color: $indi-color-neutral-15;
            }
        }
    }

    .indi-progress-bar__item--is-complete {
        color: $indi-color-blue-61;

        .indi-progress-bar__circle {
            background-color: $indi-color-blue-61;
            color: $indi-color-blue-48;
        }
    }

    .indi-progress-bar__item--is-incomplete {
        color: $indi-color-blue-61;

        .indi-progress-bar__circle {
            color: $indi-color-blue-48;

            &:before {
                content: '!';
                font-size: $indi-font-line-height-body;
            }
        }
    }

    .indi-progress-bar__label {
        color: inherit;
        display: inline;
        text-decoration: none;

        &:hover {
            color: $indi-color-blue-42;
        }
    }

</style>