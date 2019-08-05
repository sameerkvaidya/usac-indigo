<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>Data Tables</h1>
                    <p class="indi-long-form-text__p--intro">
                        Data tables display data points in rows and columns.
                    </p>
                </div>

            </div>


            <div class="indi-jump-menu__section js-jump-menu-object" id="overview">
                <div class="indi-long-form-text">
                    <h2>Overview</h2>
                    <p>Data tables organize complex data for the user. Users can then use the tables to manipulate, filter, and compare data to meet their needs.</p>
                    <p>Data tables will vary in size, depending on the amount of data they need to show. But using the same design ensures consistency across all USAC products.</p>
                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div class="indi-long-form-text">
                    <h2>Design and Implementation</h2>
                    <h3>Data Table Properties</h3>
                    <p>Sortable table expects following data properties from client.</p>
                    <ul>
                        <li>columns
                            <p>columns is an array containing properties like
                            <ul>
                                <li>title - this is name of column and is required</li>
                                <li>field - is data element name is required</li>
                                <li>sortable - boolean to indicate whether the column is sortable.</li>
                            </ul>
                            e.g. columns: [
                            {title: 'User ID', field: 'uid', sortable: true},
                            {title: 'Username', field: 'name', sortable : true}
                            ]
                            </p>
                        </li>
                        <li>
                            data
                            <p>This is an object array containing data to be rendered.</p>
                            <p>e.g.  const data = [{uid: 1212, name: 'sameer', age: 35, email: 'svaidya@usac.org', country: 'USA'},
                                {uid: 1213, name: 'david', age: 36, email: 'svaidya@usac.org', country: 'Mexico'}</p>
                        </li>
                        <li>
                            total
                            <p>total number of records</p>
                        </li>
                        <li>
                            query
                            <p>e.g. query: {"limit": 10, "offset": 0, "sort": "", "order": "" }</p>

                        </li>
                    </ul>




                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">

                            </dt>
                            <dd class="indi-html-example__code">
                                <div class="indi-code-snippet">
                                    <div id="indi-code-snippet--39399" class="indi-code-snippet__source">
                                        <pre class="indi-code-snippet__pre">
                                            <code class="language-html">
&lt;TableSortable v-bind="$data" @loadData="loadData" :steps=getSteps&gt;
&lt;/TableSortable&gt;
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>


            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="use-guidelines">
                <div class="indi-long-form-text">
                    <h2>Use Guidelines</h2>
                    <h3>Use When</h3>
                    <ul>
                        <li>Displaying large amounts of data in a tabular way.</li>
                        <li>Organizing and comparing multiple data points.</li>
                    </ul>
                    <h3>Don’t Use When</h3>
                    <ul>
                        <li>The number of columns exceeds the space on the page.</li>
                        <li>You can display the data in any other way using charts, graphs, or other data visualizations.</li>
                    </ul>
                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="editorial">
                <div class="indi-long-form-text">
                    <h2>Editorial</h2>
                    <ul>
                        <li>Avoid lengthy column headers.</li>
                        <li>Introduce a data table with a clear introduction or instructions.</li>
                        <li>Links and icons can live in cells.</li>
                        <li>Don’t put buttons in a cell.</li>
                        <li>Present data in a human, readable format. Do not display underscores, symbols, or characters that are meant for the computer to read.</li>
                    </ul>
                </div>
            </div>


            <Footer></Footer>



        </div>
    </div>

</template>

<script>
    import Footer from "./Footer";
    export default {
        name: "DataTableDoc",
        components: {Footer}
    }
</script>

<style scoped>

</style>