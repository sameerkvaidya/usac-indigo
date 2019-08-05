<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>Getting Started with Indigo Components</h1>
                    <p class="indi-long-form-text__p--intro">

                    </p>
                </div>

            </div>

            <div class="indi-col-xs-10">

                <div class="indi-jump-menu__section js-jump-menu-object" id="overview">
                    <div class="indi-long-form-text">
                        <h2>Overview</h2>
                        <p>The Indigo Design System includes the resources to create user interfaces consistent with the USAC design principles, visual language, and best practices. <strong>Rather than focusing on pixels, developers can focus on application logic, while designers can focus on user experience, interactions, and flows.</strong></p>
                    </div>
                </div>

                <div class="indi-jump-menu__section js-jump-menu-object" id="for-developers">
                    <div class="indi-long-form-text">
                        <h2>For Developers</h2>
                        <p>Developers can get started by downloading usac-components.bundle.js</p>
                        <ul>
                            <li>
                                <strong>Download and Usage</strong>
                                <p>The <a href="usac-components.bundle.js">usac-components.bundle.js</a></p>
                                <ul>
                                    <li>How to use components in your project
                                        <ol>
                                            <li data-index="1.">Copy the <code class="indi-doc-code">usac-components.bundle.js</code> file to your project.</li>
                                            <li data-index="2.">Add a <code class="indi-doc-code">&lt;script src="usac-components.bundle.js"&gt</code> </li>
                                            <li data-index="3."> Refer to the <a href="">Icons</a> page for information on how to use icons.</li>
                                        </ol>
                                    </li>

                                    <li>How to initialize components
                                        <ol>
                                            <li data-index="1.">
                                                Register imported components globally <code class="indi-doc-code">Vue.component('ProgressBar', window.ProgressBar);</code> .
                                            </li>
                                            <li data-index="2.">
                                                Use the component in Vue managed DOM <code class="indi-doc-code">&lt;ProgressBar :steps=getSteps &gt;&lt;/ProgressBar&gt;</code>
                                            </li>
                                        </ol>
                                    </li>
                                </ul>
                                <p><strong>Be sure to read Vuejs documentation at <a href="https://vuejs.org/">Vuejs</a></strong></p>
                            </li>

                        </ul>
                    </div>
                </div>
                <Footer></Footer>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "GettingStartedDoc"
    }
</script>

<style scoped>

</style>