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
        <ul class="indi-tab__content-list" >
            <li v-for="(tab, index) in fields"  class="indi-tab__content-item" v-bind:class="tab.class">

                <div class="indi-code-snippet">
                    <div id="indi-code-snippet--39399" class="indi-code-snippet__source">
                        <pre class="indi-code-snippet__pre">
                            <code class="language-html" v-if="tab.code">
{{tab.code}}
                            </code>
                            <code class="language-html" v-if="tab.ref">
{{getHtml(tab.ref)}}
                            </code>

                        </pre>
                    </div>
                </div>
            </li>
        </ul>

    </div>




</template>

<script>
    export default {
        name: "CodeTemplate",
        props:['codetabs'],
        data: ()=> ({
            fields: []
        }),
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
            },
            getHtml(ref){
                var str =this.$parent.$refs[ref].$el.outerHTML;
                str = stringFormat(str);
                return str;
            }

        },
        created(){
            //copy to local var
            console.log('in created:fields:'+JSON.stringify(this.codetabs));

            this.fields = this.codetabs;
            this.fields.forEach(function(t){
                if(t.active == true){
                    t.class = ' indi-tab__content-item--active'
                }else{
                    t.class = '';
                }
            })
        }
    }

    let stringFormat = function(str){
        let lngth = 75;
        if(str.length > lngth){
            let temp = '';
            for(var x=0; x < (str.length/lngth); x++)
                temp = temp+ str.substring(x*lngth,x*lngth+lngth)+'\n';
            return temp;
        }

        return str;

    }

</script>

<style scoped lang="scss">
    @import '../assets/styles/indi.scss';
    .indi-code-snippet {
        font-family: $indi-font-family-sans-serif;
    }

    .indi-code-snippet--inline-block {
        display: inline-block;
    }

    .indi-code-snippet__actions {
        background-color: $indi-color-neutral-97;
        min-height: 40px;
        position: relative;
    }

    .indi-code-snippet__label {
        left: $indi-space-m;
        position: absolute;
        text-transform: uppercase;
        top: 10px;
    }

    .indi-code-snippet__copy {
        color: $indi-text-color-link-default;
        position: absolute;
        right: $indi-space-m;
        text-decoration: none;
        top: 10px;

        &:hover {
            color: $indi-color-interactive-hover;

            .indi-icon {
                fill: $indi-color-interactive-hover;
            }
        }

        .indi-icon {
            fill: $indi-text-color-link-default;
            vertical-align: middle;
        }
    }

    @keyframes showcopiedmessage {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    .indi-code-snippet__copied-response {
        background-color: $indi-color-neutral-15;
        border-radius: $indi-border-radius;
        color: $indi-color-neutral-100;
        left: 45px;
        opacity: 0;
        padding: $indi-space-inset-squish-s;
        position: absolute;
        top: calc(100% + 6px);

        .indi-code-snippet__copy--clicked & {
            animation: .3s showcopiedmessage 3s forwards;
            opacity: 1;
        }

        &::after {
            border-bottom: 6px solid $indi-color-neutral-15;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            content: '';
            display: block;
            left: calc(50% - 6px);
            position: absolute;
            top: -6px;
        }
    }

    .indi-code-snippet__source {
        border-radius: 2px;
        font-size: $indi-font-size-s;
        overflow: hidden;
    }

    .indi-code-snippet__pre {

        &[class*='language'] {
            margin: 0;
            padding: $indi-space-inset-m;
        }
    }
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