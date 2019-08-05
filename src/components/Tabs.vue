<template>
    <div class="indi-tab">
        <div class="indi-tab__wrapper">
            <ul class="indi-tab__table">

                <li class="indi-tab__cell" v-for="(tab, index) in fields" >
                    <button class="indi-tab__label " v-bind:id="tab.id" v-bind:aria-controls="tab.id"
                    @click="activate(index)" v-bind:class="getClass(index)">{{tab.label}}</button>
                </li>

            </ul>
        </div>
        <slot>
            <ul class="indi-tab__content-list" >
                <li v-for="(tab, index) in fields"  class="indi-tab__content-item" v-bind:class="tab.class">

                    <div class="indi-long-form-text">
                        <h2>{{tab.label}}</h2>

                        <p>{{tab.content}}</p>
                    </div>

                </li>

            </ul>
        </slot>

    </div>
</template>

<script>
    import CodeTemplate from "./CodeTemplate";
    export default {
        name: "Tabs",
        components: {CodeTemplate},
        data: ()=> ({
            fields: []
        }),
        props:['tabs'],
        methods:{
            activate(i){
                // reset all tabs
                this.fields.forEach(function(t){
                    t.class = ' '
                    t.active = false;
                })

                //activate the right ones
                this.fields[i].active = true;
                this.fields[i].class = ' indi-tab__content-item--active';

            },
            getClass(i){
                if(this.fields[i].active === true)
                    return ' indi-tab__label--active';
                else
                    return '';
            }

        },
        created(){
            //copy to local var
            this.fields = this.tabs;
            this.fields.forEach(function(t){
                if(t.active == true){
                    t.class = ' indi-tab__content-item--active'
                }else{
                    t.class = '';
                }
            })
        }
    }
</script>

<style scoped lang="scss">

    @import '../assets/styles/indi.scss';
    // $indi-tab-box-shadow: rgba(0, 0, 0, .06);

    .indi-tab {
        margin: $indi-space-stack-l;
        overflow: auto;
    }

    .indi-tab__wrapper {
        border-bottom: 4px solid $indi-color-neutral-93;
        display: inline-table;
        margin: $indi-space-stack-l;
        width: 100%;
    }

    .indi-tab__table {
        display: table;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .indi-tab__cell {
        display: table-cell;
        vertical-align: middle;
    }

    .indi-tab__label {
        background-color: transparent;
        border: 0;
        color: $indi-color-interactive-default;
        cursor: pointer;
        display: inline-block;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-heading-level-5-l;
        font-style: normal;
        font-weight: $indi-font-weight-bold;
        letter-spacing: normal;
        line-height: 25px;
        margin: 0;
        overflow: visible;
        padding: $indi-space-m $indi-space-l $indi-space-m $indi-space-m;
        position: relative;
        text-align: left;
        text-decoration: none;
        white-space: nowrap;

        &:after {
            background-color: transparent;
            bottom: -4px;
            box-sizing: border-box;
            content: '';
            height: 4px;
            left: 0;
            position: absolute;
            width: calc(100% - 16px);
        }

        &.indi-tab__label--active:after {
            background-color: $indi-color-interactive-active-border-color;
        }

        &:focus {
            outline: none;
        }

        &:hover {
            color: $indi-color-interactive-hover;
        }

        &.indi-tab__label--active {
            color: $indi-color-neutral-25;
            cursor: default;
        }
    }

    .indi-tab__content-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .indi-tab__content-item {
        display: none;
        width: 100%;
    }

    .indi-tab__content-item--active {
        display: inline-table;
    }

</style>