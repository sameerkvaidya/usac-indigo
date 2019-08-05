<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>Breadcrumbs</h1>
                    <p class="indi-long-form-text__p--intro">
                        Breadcrumbs help users understand where they are in a website.
                    </p>
                </div>

            </div>


            <div class="indi-jump-menu__section js-jump-menu-object" id="overview">
                <div class="indi-long-form-text">
                    <h2>Overview</h2>
                    <p>Proper way finding builds trust with users and helps guide them through a site. You can use ides a system of breadcrumbs that allows users to more easily navigate through the sitemap.</p>
                    <p>The breadcrumb pattern is designed to ensure consistency across all USAC products.</p>

                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div class="indi-long-form-text">
                    <h2>Design and Placement</h2>
                    <p>Use breadcrumbs near the top of a web page to show the path from the home page to the current page.</p>
                    <p>The title of every page on the way to the current page should be light gray and clickable, allowing users to easily return to the higher level pages when needed.</p>
                    <p>The title of the current page should be the last item of the breadcrumb navigation. To differentiate it, it should be semibold and not clickable.</p>
                    <h3>Sample</h3>
                    <p>In the sample below, the user is on the “Enroll Subscriber” page, which lives inside the NLAD section of the site.</p>

                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                   <BreadCrumbs :crumbs=getCrumbs></BreadCrumbs>
                            </dt>
                            <dd class="indi-html-example__code">
                                <div class="indi-code-snippet">
                                    <div id="indi-code-snippet--39399" class="indi-code-snippet__source">
                                        <pre class="indi-code-snippet__pre">
                                            <code class="language-html">
&lt;BreadCrumbs :crumbs=getCrumbs&gt;&lt;/BreadCrumbs&gt;
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
    import BreadCrumbs from "./components/BreadCrumbs";

    export default {
        name: "BreadCrumbsDoc",
        components:{
            BreadCrumbs
        },
        computed: {
            getCrumbs() {
                return [{title: 'USAC Home', link: 'http://usac.org'}, {
                    title: 'HUBB',
                    link: 'http://netflix.com'
                }, {title: 'Home'}]
            }
        }
    }
</script>

<style scoped>

</style>