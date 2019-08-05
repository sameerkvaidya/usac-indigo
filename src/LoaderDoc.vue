<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>Loader</h1>
                    <p class="indi-long-form-text__p--intro">
                        Loaders limit user stress by letting them know the system/application received the information and is working.
                    </p>
                </div>

            </div>


            <div class="indi-jump-menu__section js-jump-menu-object" id="overview">
                <div class="indi-long-form-text">
                    <h2>Overview</h2>
                    <p>
                        Knowing the system/application hasn’t stalled or frozen, helps build user trust and confidence by letting them know that system/application is working properly.
                    </p>
                    <p>These loader guidelines are designed to ensure consistency across all USAC products.</p>
                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div class="indi-long-form-text">
                    <h2>Design and Implementation</h2>

                    <p>Loader is of one of the two types </p>
                    <ol>
                        <li data-index="1."><strong>inline</strong></li>
                        <li data-index="2."><strong>overlay</strong></li>
                    </ol>


                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <Loader type="inline"></Loader>
                            </dt>
                            <dd class="indi-html-example__code">
                                <div class="indi-code-snippet">
                                    <div id="indi-code-snippet--39399" class="indi-code-snippet__source">
                                        <pre class="indi-code-snippet__pre">
                                            <code class="language-html">
&lt;Loader type="inline" &gt;&lt;/Loader&gt;

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
                    <h3>Use when</h3>
                    <ul>
                        <li>
                            The system/application reaction time is long and takes more than one second but less than ten seconds to load the information.
                        </li>
                    </ul>
                    <h3>Don’t Use When</h3>
                    <ul>
                        <li>
                            The system/application reaction time is immediate or takes less than one second to load the information.
                        </li>
                        <li>
                            The system/application will take longer than ten seconds to load (when loading large amounts of data for example). In this case, use a percent-done progress indicator.
                        </li>
                    </ul>
                </div>
            </div>



            <Footer></Footer>



        </div>
    </div>
</template>

<script>
    import Loader from './components/Loader'
    export default {
        name: "LoaderDoc",
        components:{Loader}
    }
</script>

<style scoped>

</style>