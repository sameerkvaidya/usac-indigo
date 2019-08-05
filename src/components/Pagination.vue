<template>
    <div class="indi-col-xs-10">
        <div class="indi-pagination">
            <div class="indi-pagination__results-label">Displaying {{query.limit}} of {{total}} records</div>
            <div class="indi-pagination__controls">
                <div class="indi-pagination__controls-cell">
                    <span class="indi-pagination__label">Show</span>
                    <div class="indi-pagination__select">
                        <select aria-label="Page Limit" class="indi-pagination__select-input" id="pagelimit" name="pagelimit" @input="updatePageLimit($event)">
                            <option :value="10">10</option>
                            <option :value="20">20</option>
                            <option :value="50">50</option>
                            <option :value="100">100</option>
                        </select>
                        <svg class="indi-icon indi-pagination__select-open-icon" aria-labelledby="title">
                            <title>caret-down</title>
                            <use xlink:href="./indi_icons.svg#caret-down"></use>
                        </svg>
                    </div>
                    <span class="indi-pagination__label">records/page</span>
                </div>
                <div class="indi-pagination__controls-cell indi-pagination__controls-cell--nav">
                    <ul class="indi-pagination__nav">
                        <li class="indi-pagination__nav-cell">

                            <template>
                                <a href="#" aria-label="Previous Page"
                                   class="indi-pagination__nav-button indi-pagination__nav-button--previous"
                                @click.prevent="goPrev">
                                    <svg class="indi-icon indi-pagination__nav-icon" aria-labelledby="title">
                                        <title>caret-left</title>
                                        <use xlink:href="./indi_icons.svg#caret-left"></use>
                                    </svg>
                                </a>
                            </template>
                        </li>
                        <li class="indi-pagination__nav-cell">

                            <template>
                                <input aria-label="Page Number" class="indi-pagination__nav-input"
                                       id="pagenumber" name="pagenumber" type="number" :value="currentPage" @input="handlePageChange"/>
                            </template>
                        </li>

                        <li class="indi-pagination__nav-cell">
                            <template>
                                <a href="#" aria-label="Next Page"
                                   class="indi-pagination__nav-button indi-pagination__nav-button--next"
                                @click.prevent="goNext">
                                <svg class="indi-icon indi-pagination__nav-icon" aria-labelledby="title">
                                    <title>caret-right</title>
                                    <use xlink:href="./indi_icons.svg#caret-right"></use>
                                </svg>
                                </a>
                            </template>
                        </li>
                    </ul>
                    <span> of {{ pages }} pages </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Pagination",
        props: ['query', 'total'],
        data: () => ({
            pageNumber: 1,
            totalPages: 0
        }),
        computed: {
            pages(){
                this.totalPages = Math.ceil(this.total / this.query.limit);
                return this.totalPages
            },
            currentPage(){
                this.pageNumber = Math.ceil((this.query.offset+1) / this.query.limit)
                return this.pageNumber
            }
        },
        methods:{
            handlePageChange(event){
                this.pageNumber = event.target.value;
                if(validatePgaeNumber(this.pageNumber, this.totalPages)){
                    this.query.offset = this.query.limit * (this.pageNumber-1)
                    this.$emit("sortTable");
                }
            },
            goNext(){
                this.pageNumber++;
                if(validatePgaeNumber(this.pageNumber, this.totalPages)){
                    this.query.offset = this.query.limit * (this.pageNumber-1)
                    this.$emit("sortTable");
                }
            },
            goPrev(){
                this.pageNumber--;
                if(validatePgaeNumber(this.pageNumber, this.totalPages)) {
                    this.query.offset = this.query.limit * (this.pageNumber - 1)
                    this.$emit("sortTable");
                }
            },
            updatePageLimit(e){
                console.log('updatePageLimit:'+e.target.value)
                this.query.limit = e.target.value
                this.$emit("sortTable");
            }
        }

    }

    var validatePgaeNumber = function(pageN, total){
        if(isNaN(pageN) || pageN > total || pageN < 1) {
            return false;
        }else {return true;}

    }
</script>

<style scoped lang="scss">

    @import '../assets/styles/indi.scss';

    .indi-pagination {
        margin: $indi-space-stack-l;
    }

    .indi-pagination__message {
    @include heading-level-3()
    margin: $indi-space-stack-default;
    }

    .indi-pagination__results {
        padding-bottom: $indi-space-m;
    }

    .indi-pagination__results-label {
        color: $indi-text-color-primary-default;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-default;
        font-weight: $indi-font-weight-normal;
        line-height: 1;
        margin: $indi-space-stack-l;
    }

    .indi-pagination__controls {
        color: $indi-text-color-primary-default;
        display: table;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-default;
        font-weight: $indi-font-weight-normal;
        line-height: 1;
        table-layout: fixed;
        width: 100%;
    }

    .indi-pagination__controls-cell {
        display: table-cell;
        vertical-align: middle;
    }

    .indi-pagination__controls-cell--nav {
        text-align: right;
    }

    .indi-pagination__label {
        margin: $indi-space-inline-left-s;
    }

    .indi-pagination__select {
        border-radius: $indi-border-radius;
        box-sizing: border-box;
        display: inline-block;
        margin: $indi-space-inline-left-s;
        position: relative;
    }

    .indi-pagination__select--disabled {
        color: $indi-color-neutral-74;
        cursor: not-allowed;
    }

    .indi-pagination__select-input {
        appearance: none;
        background-color: $indi-color-neutral-100;
        border: $indi-border-hairline-default;
        border-radius: $indi-border-radius;
        color: $indi-text-color-primary-default;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-default;
        font-weight: $indi-font-weight-normal;
        height: 100%;
        line-height: 1;
        padding: $indi-space-inset-s;
        padding-right: 32px;
        width: 100%;

    &:focus {
         background-color: $indi-color-blue-93;
         border-color: $indi-color-interactive-default;
         box-shadow: inset $indi-space-xxs $indi-space-xxs 0s;
         outline: none;
     }

    &::-ms-expand {
         display: none;
     }

    .indi-pagination__select--disabled & {
        color: $indi-color-neutral-74;
        cursor: not-allowed;
    }
    }

    .indi-pagination__select-open-icon {
        fill: $indi-color-interactive-default;
        pointer-events: none;
        position: absolute;
        right: 8px;
        top: 8px;
        width: 16px;

    .indi-pagination__select--disabled & {
        fill: $indi-color-neutral-74;
    }
    }

    .indi-pagination__nav {
        display: inline-block;
        letter-spacing: -.31em;
        list-style: none;
        margin: $indi-space-inline-left-s;
        padding: 0;
        vertical-align: middle;
    }

    .indi-pagination__nav-cell {
        display: inline-block;
        letter-spacing: normal;
        vertical-align: middle;
    }

    .indi-pagination__nav-input {
        background-color: $indi-color-neutral-100;
        border: $indi-border-hairline-default;
        box-sizing: border-box;
        color: $indi-text-color-primary-default;
        display: block;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-default;
        font-weight: $indi-font-weight-bold;
        line-height: $indi-font-line-height-default;
        padding: $indi-space-xs 0;
        position: relative;
        text-align: center;
        width: 40px;
        z-index: 1;

    &:focus {
         background-color: $indi-color-blue-93;
         border-color: $indi-color-interactive-default;
         box-shadow: inset $indi-space-xxs $indi-space-xxs 0 ;
         outline: none;
     }

    &.indi-pagination__nav-input--disabled,
    &:disabled {
         color: $indi-color-neutral-74;
         cursor: not-allowed;

    &:hover {
         background-color: $indi-color-neutral-100;
     }
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
         appearance: none;
         margin: 0;
     }
    }

    .indi-pagination__nav-button {
    @include button-reset();
        border: $indi-border-hairline-default;
        border-radius: $indi-border-radius;
        display: inline-block;
        fill: $indi-color-interactive-default;
        font-size: 0;
        line-height: 0;
        padding: $indi-space-inset-s;

    &:hover {
         background-color: $indi-color-blue-93;
         fill: $indi-color-interactive-hover;
     }

    &:focus {
         background-color: $indi-color-blue-93;
         outline: none;
     }

    &.indi-pagination__nav-button--disabled,
    &:disabled {
         cursor: not-allowed;
         fill: $indi-color-neutral-74;

    &:hover {
         background-color: inherit;
     }
    }
    }

    .indi-pagination__nav-button--previous {
        border-bottom-right-radius: 0;
        border-right: 0;
        border-top-right-radius: 0;
    }

    .indi-pagination__nav-button--next {
        border-bottom-left-radius: 0;
        border-left: 0;
        border-top-left-radius: 0;
    }

    .indi-pagination__nav-icon {
        height: 16px;
    }

</style>