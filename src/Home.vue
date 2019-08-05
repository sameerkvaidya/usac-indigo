<template>

    <div class="indi-doc-layout-container">
        <div class="indi-doc-layout-frames__frame indi-doc-layout-frames__frame--left">
            <ul class="indi-side-nav">
                <li class="indi-side-nav__item">
                    <router-link to="/" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        Home
                    </router-link>
                </li>
                <li class="indi-side-nav__item">
                    <router-link to="/started" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        Getting Started
                    </router-link>
                </li>

            </ul>

            <ul class="indi-side-nav">
                <li class="indi-side-nav__item">
                    <router-link to="/forms" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        Forms
                    </router-link>
                </li>
                <li class="indi-side-nav__item">
                    <router-link to="/fieldset" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        Fieldset
                    </router-link>
                </li>

            </ul>
            <ul class="indi-side-nav">
                <li class="indi-side-nav__item">
                    <router-link to="/forms" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        Layouts --coming soon
                    </router-link>
                </li>

            </ul>
            <ul class="indi-side-nav">
                <li class="indi-side-nav__item">
                <span class="indi-side-nav__label indi-side-nav__label--heading">
                        Components
                </span>
                </li>
                <li class="indi-side-nav__item">
                    <router-link to="/button" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        Button
                    </router-link>
                </li>
                <li class="indi-side-nav__item">
                <router-link to="/breadcrumbs" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                    Breadcrumbs
                </router-link>
                </li>
                <li class="indi-side-nav__item">
                    <router-link to="/datatable" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        DataTable
                    </router-link>
                </li>
                <li class="indi-side-nav__item">
                    <router-link to="/fileobject" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        File Object
                    </router-link>
                </li>
                <li class="indi-side-nav__item">
                    <router-link to="/loader" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        Loader
                    </router-link>
                </li>
                <li class="indi-side-nav__item">
                    <router-link to="/modal" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        Modal
                    </router-link>
                </li>
                <li class="indi-side-nav__item">
                    <router-link to="/pagination" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        Pagination
                    </router-link>
                </li>
                <li class="indi-side-nav__item">
                    <router-link to="/progressbar" class="indi-side-nav__label
                     indi-side-nav__label--link js-behavior-side-nav-link">
                        Progressbar
                    </router-link>
                </li>
            </ul>



        </div>

        <div class="indi-doc-layout-frames__frame indi-doc-layout-frames__frame--body">
            <router-view></router-view>
        </div>
        <!-- built files will be auto injected -->


    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="scss">
    @import 'assets/styles/indi.scss';

</style>