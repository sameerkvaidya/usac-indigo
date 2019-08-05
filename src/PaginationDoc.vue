<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>Pagination
                        <span class="indi-badge indi-badge--error">Work In Progress</span>
                        <button class="indi-tooltip indi-tooltip--right">
                        <span class="indi-tooltip__content">This component is still in development. Although the current state is in the library, it’s not vetted and therefore should be used with caution.</span>
                            <svg class="indi-icon" aria-labelledby="title">
                                    <title>help</title>
                                    <use xlink:href="./indi_icons.svg#help">
                                    </use></svg>
                        </button>
                    </h1>
                    <p class="indi-long-form-text__p--intro">
                        Pagination provides users with a quick and flexible way of navigating through long lists or pages of content.
                    </p>
                </div>

            </div>


            <div class="indi-jump-menu__section js-jump-menu-object" id="overview">
                <div class="indi-long-form-text">
                    <h2>Overview</h2>
                    <p>Pagination is a user interface pattern that divides content into separate pages. It prevents pages from becoming too long and overwhelming. It’s handy because users are likely to look for what they want close to the top of a page, but may still need to find something lower down in the content.</p>
                    <p>These pagination guidelines are designed to ensure consistency across all USAC products.</p>
                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div>
                    <h2>Design and Placement</h2>
                    <p>Display the pagination component at the bottom of a list or content area when it is long enough that it needs to be broken up. </p>
                    <p>If it is a list (for example, a data table), pagination allows users to choose how many items they will see on each page. Users can choose to see 25, 50, 75, or 100 records per page.</p>
                    <p>Users can navigate through the pages by using the next and back arrows or by entering a page number of their choice.</p>
                    <h3>Sample</h3>
                    <p>In the sample below, the user is on the “Enroll Subscriber” page, which lives inside the NLAD section of the site.</p>

                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <Pagination total=10 :query="{limit: 10, offset: 0, sort: '', order: '' }"></Pagination>
                            </dt>

                        </dl>
                    </div>

                </div>


            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="use-guidelines">
                <div class="indi-long-form-text">
                    <h2>User Guidelines</h2>
                    <h3>Use When</h3>
                    <ul>
                        <li>You are at least two levels down in the sitemap. Breadcrumbs are for interior pages only.</li>
                    </ul>
                    <h3>Don't Use When</h3>
                    <ul>
                        <li>On the homepage or program landing pages.</li>
                    </ul>
                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="editorial">
                <div class="indi-long-form-text">
                    <h2>Editorial</h2>
                    <ul>
                        <li>Breadcrumbs should have the same name as the title of the pages they represent. If necessary, though, you can appropriately shorten a breadcrumb if the page title is too long for a breadcrumb thread.</li>
                    </ul>
                </div>
            </div>


            <Footer></Footer>



        </div>
    </div>
</template>

<script>
    import Pagination from "./components/Pagination";
    export default {
        name: "PaginationDoc",
        components: {Pagination},
        methods:{
            getCrumbs(){
                return [{title: 'USAC Home', link: 'http://usac.org'}, {title: 'HUBB', link: 'http://netflix.com'}, {title: 'Home'}]
            }
        }
    }
</script>

<style scoped>

</style>