<template>
    <div class="indi-breadcrumb">
        <ul class="indi-breadcrumb__list">
            <li v-for="(c, index) in crumbs" class="indi-breadcrumb__item">
                <a v-bind:href="c.link" v-if="index < crumbs.length-1"> {{ c.title }} </a>
                <template v-else>{{c.title}}</template>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BreadCrumbs",
        props: ['crumbs']
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/indi.scss';

    .indi-breadcrumb {
        color: $indi-color-neutral-15;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-default;
        line-height: 23px;
        margin: $indi-space-stack-l;
    }

    .indi-breadcrumb__list {
        padding: 0;
    }

    .indi-breadcrumb__item {
        display: inline;

        a {
            color: $indi-color-neutral-50;
            text-decoration: none;

            &:hover {
                color: $indi-color-interactive-hover;
            }
        }

        & + &:before {
            color: $indi-color-neutral-50;
            content: '|';
            padding: 0 $indi-space-s $indi-space-s;
        }
    }


</style>