<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>Modal</h1>
                    <p class="indi-long-form-text__p--intro">
                        Modal windows take over a page to call the user’s attention to some content or to force them to take an action.
                    </p>
                </div>

            </div>


            <div class="indi-jump-menu__section js-jump-menu-object" id="overview">
                <div class="indi-long-form-text">
                    <h2>Overview</h2>
                    <p>This element overlays the page with a new window (or modal) and disables the main page. Users must interact with the modal window before they can return to the main page.</p>
                    <p>These modal guidelines are designed to ensure consistency across all USAC products.</p>
                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div class="indi-long-form-text">
                    <h2>Design and Implementation</h2>

                    <p>Use modal windows to do one of the following two things:</p>
                    <ol>
                        <li data-index="1."><strong>Command user awareness.</strong> For example, making sure the user’s session does not time out on them.</li>
                        <li data-index="2."><strong>Notify users of emergency actions.</strong> For example, warning users that they are about to delete a file, or are about to exit an application without saving. The modal should ask, “Are you sure you want to proceed?”</li>
                    </ol>
                    <p>The modal design includes the following:</p>
                    <ul>
                        <li>
                            <strong>Modal Title:</strong> A short, succinct, and clear introduction to what the user needs to know.
                        </li>

                        <li>
                            <strong>Message:</strong> A deeper explanation of what action the user needs to take.
                        </li>

                        <li>
                            <strong>Close Option:</strong> The user can close the modal by
                            <ol>
                                <li data-index="1."> Clicking a tertiary button.</li>
                                <li data-index="2."> Clicking the close
                                    icon in the upper right corner.</li>
                                <li data-index="3."> Clicking outside of the modal anywhere on the page.</li>
                            </ol>
                        </li>

                        <li>
                            <strong>Continue Forward Option: </strong>The user can continue forward by clicking the primary button.
                        </li>
                    </ul>
                    <p>Modal placement:</p>
                    <ul>
                        <li>Modals appear in front of a page and "take over" by covering the page in a translucent gray.</li>
                        <li>Modals should be placed in the 100px from the top and horizontally  centered on the page to command the most attention.</li>
                    </ul>


                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                   <Modal body="Body for Modal" title="Sample Modal"
                                          label="Launch Sample Modal">

                                       <p>This is example of HTML passed to Modal</p>
                                       <a href="http://usac.org">USAC Website link</a>


                                   </Modal>
                            </dt>
                            <dd class="indi-html-example__code">
                                <div class="indi-code-snippet">
                                    <div id="indi-code-snippet--39399" class="indi-code-snippet__source">
                                        <pre class="indi-code-snippet__pre">
                                            <code class="language-html">
&lt;Modal body="Body for Modal" title="Title"
label="Label For Button to launch Modal" @onContinue="customFunction" &gt;
&lt;p> your html template you can pass to modal to be displayed instead of just text ...
&lt;/Modal&gt;

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
                        <li>Alerting users of an error.</li>
                        <li>Warning users of potentially harmful situations.</li>
                        <li>Reminding users to do something before moving on.</li>
                        <li>Informing users of important information.</li>
                    </ul>
                    <h3>Don’t Use When</h3>
                    <ul>
                        <li>The page can communicate this action. Before choosing to use the modal, ask, “Does the user need to be taken off the page for this?”</li>
                        <li>The action can be explained using a <a href="../components/notifications.html">Notification or Alert.</a></li>
                    </ul>
                </div>
            </div>



        <Footer></Footer>



        </div>
    </div>

</template>

<script>
    import Modal from './components/Modal'
    export default {
        name: "ModalDoc",
        components:{Modal}
    }
</script>

<style scoped>

</style>