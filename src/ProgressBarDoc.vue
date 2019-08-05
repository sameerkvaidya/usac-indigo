<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>Progress Bar </h1>
                    <p class="indi-long-form-text__p--intro">
                        A progress bar shows a user how far along they are in a process.
                    </p>
                </div>

            </div>


            <div class="indi-jump-menu__section js-jump-menu-object" id="overview">
                <div class="indi-long-form-text">
                    <h2>Overview</h2>
                    <p>Users benefit from seeing the end-to-end process they need to complete. A progress bar gives that visual clue along with helpful grouping of  help users track their progress through a linear process, showing them what they’ve completed and how far they have to go. It also acts as navigation.</p>

                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div class="indi-long-form-text">
                    <h2>Design and Placement</h2>
                    <p> The progress bar should be used for in-app experiences. You can restrict the user from jumping around the progress bar or allow them to go to previous and future steps without completing the current one. For example, Use a  <code class="indi-doc-code">&lt;div&gt;</code> element with <code class="indi-doc-code">“indi-progress-bar__label”</code> class instead of a link to restrict the user from clicking on a step.</p>
                    <p> The steps(items) in progress bar is implemented using list items in an unordered list.</p>
                    <p>
                        When a user clicks on any other step, you should add <code class="indi-doc-code">“indi-progressbar_item-is-current”</code>  modifier class to that step using javascript. This will show the green circle indicating to the user which step they’re on.
                    </p>
                    <h3>Sample</h3>
                    <p>In the sample code below steps is array each step has property of status, link and title</p>

                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <ProgressBar :steps=getSteps()></ProgressBar>
                            </dt>
                            <dd class="indi-html-example__code">
                                <div class="indi-code-snippet">
                                    <div id="indi-code-snippet--39399" class="indi-code-snippet__source">
                                        <pre class="indi-code-snippet__pre">
                                            <code class="language-html">
&lt;ProgressBar :steps=getSteps&gt;&lt;/ProgressBar&gt;
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
                        <li>
                            Taking a user through a multistep process.
                        </li>
                        <li>
                            Designing in-app processes such as filling out a form or making a payment.
                        </li>
                    </ul>
                    <h3>Don’t Use When</h3>
                    <ul>
                        <li>
                            There are two or fewer steps.
                        </li>
                        <li>
                            It’s not a cohesive process. Use navigation instead.
                        </li>
                    </ul>
                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="editorial">
                <div class="indi-long-form-text">
                    <h2>Editorial</h2>
                    <ul>
                        <li>
                            Keep labels short and descriptive.
                        </li>
                        <li>
                            Generally use noun phrases.
                        </li>
                    </ul>
                </div>
            </div>

            <footer></footer>




        </div>
    </div>

</template>

<script>
    import Footer from "./Footer";
    import ProgressBar from './components/ProgressBar';
    export default {
        name: "ProgressBarDoc",
        components: {Footer, ProgressBar},
        methods:{
            getSteps(){
                return [  {title: 'Carrier Information', link: '', status: 'complete'},
                    {title: 'User Signature', link: '', status: 'complete'},
                    {title: 'Review', link: '', status: 'current'},
                    {title: '509 Certification', link: '', status: 'incomplete'}]
            }
        }
    }
</script>

<style scoped>

</style>