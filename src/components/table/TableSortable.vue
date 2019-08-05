<template>
    <div>

        <div class="indi-row">
            <div class="indi-data-table">
                <table class="indi-data-table__table">

                    <thead>
                    <th scope="col" v-for="(col, idx) in columns" :key="col.title || idx">
                        <button v-if="col.sortable" class="indi-data-table__column-heading indi-data-table__column-heading--sort-link" @click.prevent="handleClick( col.field )">
                            <span class="indi-data-table__column-heading-label"> {{ col.title }}</span>
                        </button>
                        <span v-else class="indi-data-table__column-heading-label"> {{ col.title }}</span>
                    </th>
                    </thead>

                    <tbody v-if="data.length">
                    <tr v-for="item in data">

                        <td v-for="col in columns" :class="col.tdClass" :style="col.tdStyle">
                            {{ item[col.field] }}
                            <template v-if="col.type">
                                <button class="indi-button--small" @click.prevent="show(item[columns[0].field])">Approve</button>
                            </template>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <template v-if="paginated">
            <Pagination :query="query" :total="total" @sortTable="sortTable"></Pagination>
        </template>

    </div>

</template>

<script>

    import props from "../_mixins/props";
    import Pagination from "../Pagination.vue";

    export default {
        name: "TableSortable",
        components: {Pagination},
        mixins: [props],
        data: () => ({
            order: '',
            pageNumber: 1,
            totalPages: 0
        }),
        methods: {
            sortTable(){
                this.$emit('loadData', this.query);
            },
            handleClick(field){
                const { query, order } = this
                query.sort = field
                query.order = this.order = order === 'desc' ? 'asc' : 'desc'
                query.offset =0;
                this.$emit('loadData', this.query);
            },

            handlePageChange(event){
                this.pageNumber = event.target.value;
                if(validatePgaeNumber(this.pageNumber, this.totalPages)){
                    this.query.offset = this.query.limit * (this.pageNumber-1)
                    this.$emit('loadData', this.query);
                }
            },
            goNext(){
                this.pageNumber++;
                if(validatePgaeNumber(this.pageNumber, this.totalPages)){
                    this.query.offset = this.query.limit * (this.pageNumber-1)
                    this.$emit('loadData', this.query);
                }
            },
            goPrev(){
                this.pageNumber--;
                if(validatePgaeNumber(this.pageNumber, this.totalPages)) {
                    this.query.offset = this.query.limit * (this.pageNumber - 1)
                    this.$emit('loadData', this.query);
                }
            },
            updatePageLimit(e){
                this.query.limit = e.target.value
                this.query.offset = 0;
                this.$emit('loadData', this.query);
            }
        },
        computed: {
            propsToChildren(){
                return { ...this.$props};
            },

            pages(){
                this.totalPages = Math.ceil(this.total / this.query.limit);
                return this.totalPages
            },
            currentPage(){
                this.pageNumber = Math.ceil((this.query.offset+1) / this.query.limit)
                return this.pageNumber
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
    @import '../../assets/styles/indi.scss';

    .indi-data-table {
        border-bottom: 1px solid $indi-color-neutral-74;
        margin: $indi-space-stack-l;
        overflow-y: auto;
    }

    .indi-data-table__table {
        border-collapse: collapse;
        color: $indi-text-color-primary-default;
        display: table;
        font-family: $indi-font-family-sans-serif;
        font-size: $indi-font-size-default;
        font-weight: $indi-font-weight-normal;
        line-height: $indi-font-line-height-body;
        text-align: left;
        width: 100%;

        thead {
            color: $indi-color-neutral-25;
        }

        tr {
            display: table-row;

            &:nth-child(odd) {

                td {
                    background-color: $indi-color-neutral-97;
                }
            }
        }

        td {
            border-right: 1px solid $indi-color-neutral-100;
            display: table-cell;
            padding: $indi-space-inset-m;

            &:last-child {
                border-right: 0;
            }
        }

        th {
            border-bottom: 1px solid $indi-color-neutral-74;
            border-right: 0;
            border-top: 1px solid $indi-color-neutral-74;
            display: table-cell;
            font-weight: $indi-font-weight-bold;
            line-height: 1;
            padding: 0;
            vertical-align: bottom;
        }
    }

    .indi-data-table__column-heading {
        box-sizing: border-box;
        display: block;
        padding: $indi-space-inset-m;
        transition: border $indi-speed-transition-default ease-out;
    }

    .indi-data-table__column-heading--sort-link {
        @include button-reset();
        border-bottom: 4px solid transparent;
        padding: $indi-space-inset-m;
        padding-bottom: 12px;
        width: 100%;
    }

    .indi-data-table__column-heading--sort-link-is-active {
        border-bottom-color: $indi-color-interactive-active-border-color;
        color: $indi-color-interactive-hover;
    }

    .indi-data-table__column-heading-label {
        display: inline-block;
        padding-right: $indi-space-m;
        position: relative;

        .indi-data-table__column-heading--sort-link-is-active & {

            &:after {
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: $indi-space-s solid $indi-color-interactive-hover;
                content: '';
                display: block;
                position: absolute;
                right: 0;
                top: calc(50% - 5px);
                transform-origin: center;
                transition: transform .2s linear;
                vertical-align: middle;
            }
        }

        .indi-data-table__column-heading--sort-link-is-descending & {

            &:after {
                transform: rotate(180deg);
            }
        }
    }

    .indi-data-table__action-list {
        display: table;
        line-height: 1;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .indi-data-table__action-item {
        border-right: 1px solid $indi-color-interactive-default;
        display: table-cell;
        letter-spacing: normal;
        padding: 0 $indi-space-s;

        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            border-right: 0;
            padding-right: 0;
        }

        &:only-child {
            border-right: 0;
            padding: 0;
        }
    }

    .indi-data-table__action {
        @include button-reset();
        fill: $indi-color-interactive-default;

        &:hover {
            fill: $indi-color-interactive-hover;
        }
    }






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