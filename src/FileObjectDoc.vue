<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>File Object</h1>
                    <p class="indi-long-form-text__p--intro">
                        A File Object represents the presence of a file on the screen to users.
                    </p>
                </div>

            </div>


            <div class="indi-jump-menu__section js-jump-menu-object" id="overview">
                <div class="indi-long-form-text">
                    <h2>Overview</h2>
                    <p> File Objects give users an efficient view of a file’s info - name, type, and size. You can use a File Object to represent a downloadable file or an uploaded file. Pair with the appropriate file icon from the <a href="../visual-language/icons.html">Icon library</a> (XLS, PDF, PPT, DOC, or CVS).</p>
                </div>
            </div>

            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div class="indi-long-form-text">
                    <h2>Design and Implementation</h2>

                    <p>
                        The File Object expect four properties
                        <ul>
                            <li>
                                title
                            </li>
                            <li>
                                file_name
                            </li>
                            <li>
                                file_size
                            </li>
                            <li>
                                file_extension
                            </li>
                        </ul>
                    </p>


                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">

                            </dt>
                            <dd class="indi-html-example__code">
                                <div class="indi-code-snippet">
                                    <div id="indi-code-snippet--39399" class="indi-code-snippet__source">
                                        <pre class="indi-code-snippet__pre">
                                            <code class="language-html">
&lt;FileObject  title="file-pdf" file_name="customersnapcard"
file_extension=".pdf" file_size="134k"&gt; &lt;/FileObject&gt;

                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>



                <div class="indi-jump-menu__section js-jump-menu-object" id="use-guidelines">
                    <div class="indi-long-form-text">
                        <h2>Use Guidelines</h2>
                        <h3>Use When</h3>
                        <ul>
                            <li>
                                You use the File Upload component.
                            </li>
                            <li>
                                Listing downloadable files.
                            </li>
                        </ul>
                        <h3>Don’t Use When</h3>
                        <ul>
                            <li>
                                Using Long Form Text.
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
    import Footer from "./Footer";
    export default {
        name: "FileObjectDoc",
        components: {Footer}
    }
</script>

<style scoped>

</style>