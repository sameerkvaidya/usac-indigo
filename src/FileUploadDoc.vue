<template>
    <div class="indi-row">
        <div class="indi-col-xs-10">
            <div class="indi-doc-layout__heading">

                <div class="indi-long-form-text">
                    <h1>File Upload

                    </h1>
                    <p class="indi-long-form-text__p--intro"></p>
                </div>

            </div>


            <div class="indi-jump-menu__section js-jump-menu-object" id="design-and-placement">
                <div class="indi-long-form-text">

                    <h3>Sample</h3>

                    <div class="indi-html-example">
                        <dl class="indi-html-example__pair">
                            <dt class="indi-html-example__component">
                                <FileUpload title="file-pdf" file_name="customersnapcard" file_extension=".pdf" file_size="134k" file_progress="55"></FileUpload>

                            </dt>
                            <dd class="indi-html-example__code">
                                <div class="indi-code-snippet">
                                    <div id="indi-code-snippet--39399" class="indi-code-snippet__source">
                                        <pre class="indi-code-snippet__pre">
                                            <code class="language-html">
&lt;FileUpload  title="file-pdf"
file_name="customersnapcard" file_extension=".pdf"
file_size="134k" file_progress="55"&gt;
&lt;/FileUpload&gt;
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>

                </div>


            </div>



            <Footer></Footer>



        </div>
    </div>
</template>

<script>
    import FileUpload from './components/form/FileUpload';
    export default {
        name: "FileUploadDoc",
        components:{
            FileUpload
        }
    }
</script>

<style scoped>

</style>