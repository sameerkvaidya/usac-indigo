<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>Button</h1>
                    <p class="indi-long-form-text__p--intro">Buttons help communicate important actions throughout the user’s experience.</p>
                </div>

            </div>


            <div class="indi-jump-menu__section js-jump-menu-object" id="overview">
                <div class="indi-long-form-text">
                    <h2>Overview</h2>
                    <p>This button library has three types of buttons – primary, secondary, and tertiary. Use the button that matches the priority of the action(s) you need to communicate. This helps the user visually distinguish between actions.</p>
                    <p>The buttons are designed to ensure consistency across all USAC products.</p>
                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div class="indi-long-form-text">
                    <h2>Primary</h2>
                    <p>Use primary buttons for the <strong>highest-priority action</strong> that the user must do to complete the task. Primary buttons should only be used <strong>once per page,</strong> though an additional primary button can appear within modals, popovers, or alerts when needed to signal critical actions.</p>
                    <p>Only use the on-dark-background variation when the button is placed on dark backgrounds (e.g., on popovers or modal dialogs).</p>

                    <h2>Secondary</h2>
                    <p>Use secondary buttons for most non-primary actions throughout an interface such as back, reset, adding or creating an object, or other non-critical actions. See examples below.</p>

                    <h2>Tertiary</h2>
                    <p>Tertiary
                        Use tertiary buttons when there are 3 or more possible actions on the page and there’s clearly a prioritization of those actions (primary, secondary, and tertiary). Tertiary buttons are most often used to create a clear hierarchy of priority and importance of actions.

                        Also use tertiary buttons within rows of data tables. (Do not use small primary or secondary buttons).</p>

                    <h2>Small</h2>

                    <p>Use small buttons in settings with limited space, like toolbars, filters, and advanced search components (often placed above data tables).</p>

                    <h3>Sample</h3>

                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <ButtonComponent label="secondary"></ButtonComponent>
                                <ButtonComponent label="primary" type="primary"></ButtonComponent>
                                <ButtonComponent label="tertiary" type="tertiary"></ButtonComponent>
                                <ButtonComponent label="secondary-disabled" :disabled="true"></ButtonComponent>
                                <ButtonComponent label="secondary-small" :small="true"></ButtonComponent>
                                <ButtonComponent label="secondary-dark" :dark="true"></ButtonComponent>
                            </dt>
                            <dd class="indi-html-example__code">
                                <div class="indi-code-snippet">
                                    <div id="indi-code-snippet--39399" class="indi-code-snippet__source">
                                        <pre class="indi-code-snippet__pre">
                                            <code class="language-html">
&lt;ButtonComponent :type="primary" :small="true"
:disabled="true" :dark="true"
field_name="btn_sample" &gt;
&lt;/Button&gt;
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
                    <h3>How to use this component</h3>
                    <p>Use following properties to get desired behavior</p>
                    <ul>
                        <li>type: optional by default it is secondary. It can be primary or tertiary</li>
                        <li>disabled: boolean optional </li>
                        <li>small: boolean optional</li>
                        <li>dark: boolean otional for dark theme</li>
                    </ul>

                    <h3>Use When</h3>
                    <ul>
                        <li>Signifying important actions on a page.</li>
                        <li>Confirming or submitting information entered into a form.</li>
                        <li>Cancelling an action.</li>
                        <li>Resetting a form or dataset.</li>
                        <li>Closing a container or section.</li>
                        <li>Opening a popover menu.</li>
                        <li>Moving forward or backward through a workflow or form.</li>
                        <li>Creating an object within a group.</li>
                    </ul>
                    <h3>Don't Use When</h3>
                    <ul>
                        <li>Displaying a collection of links to sections. Use <a href="../components/long-form-text.html">link</a> instead.</li>
                        <li>Linking to an external site. Use <a href="../components/long-form-text.html">link</a> instead.</li>
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
    import ButtonComponent from "./components/ButtonComponent";
    export default {
        name: "ButtonDoc",
        components: {ButtonComponent}
    }
</script>

<style scoped>

</style>