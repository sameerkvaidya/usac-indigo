<template>
    <div class="indi-loader" v-bind:class="getClass()" aria-label="Loading">
        <ul class="indi-loader__motif">
            <li class="indi-loader__motif-item indi-loader__motif-item--1"></li>
            <li class="indi-loader__motif-item indi-loader__motif-item--2"></li>
            <li class="indi-loader__motif-item indi-loader__motif-item--3"></li>
            <li class="indi-loader__motif-item indi-loader__motif-item--4"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Loader",
        props: ['type'],
        methods:{
            getClass(){
                if(this.type && this.type === 'inline') {
                    return 'indi-loader--inline';
                }else{
                    return 'indi-loader--overlay';
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/indi.scss';

    $loader-bkg-color: rgba($indi-color-neutral-100, .9);
    $loader-motif-height: 75px;
    $loader-motif-width: 165px;
    $loader-animation-speed: 1000ms;

    .indi-loader {
        background-color: $loader-bkg-color;
        box-sizing: border-box;
        cursor: wait;
        display: none;
        padding: $indi-space-inset-xl;
        position: relative;
    }

    .indi-loader--overlay {
        display: block;
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: $indi-z-index-loader;
    }

    .indi-loader--inline {
        display: block;
    }

    .indi-loader__motif {
        height: $loader-motif-height;
        left: calc(50% - (#{$loader-motif-width}/2));
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        top: calc(50% - (#{$loader-motif-height}/2));
        width: $loader-motif-width;
    }

    @keyframes loaderscalefade {
        0% {
            opacity: .5;
            transform: scale(1);
        }

        5% {
            opacity: 1;
            transform: scale(1.3);
        }

        20% {
            opacity: .5;
            transform: scale(1);
        }
    }

    .indi-loader__motif-item {
        animation: loaderscalefade $loader-animation-speed linear infinite;
        background-repeat: no-repeat;
        opacity: .6;
        position: absolute;
    }

    .indi-loader__motif-item--1 {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSI1NzQgNTYuNSA0NCA0NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyA1NzQgNTYuNSA0NCA0NCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMyI+DQoJPHBvbHlnb24gZmlsbD0iIzAwNEFENCIgcG9pbnRzPSI2MTYuNjg0LDk2LjU2NSA1NzUuMTc2LDk4Ljk4MiA1NzUuMTc2LDYyLjYwNCA2MTYuNjg0LDU4LjA3OCAJIi8+DQo8L2c+DQo8L3N2Zz4NCg==');
        height: 44px;
        left: 0;
        position: absolute;
        top: 6px;
        width: 44px;
    }

    .indi-loader__motif-item--2 {
        animation-delay: ($loader-animation-speed/4);
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjBweCIgaGVpZ2h0PSI1NHB4IiB2aWV3Qm94PSI2MDMuNzUgNzEgNjAgNTQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgNjAzLjc1IDcxIDYwIDU0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJMYXllcl8yIj4NCgk8cG9seWdvbiBmaWxsPSIjMDA0QUQ0IiBwb2ludHM9IjY2MS4zODksMTIyLjc3OSA2MDYuMzA3LDEyMy4zMTggNjA2LjEyNiw3Ni41MDQgNjYxLjc1LDcyLjE2IAkiLz4NCjwvZz4NCjwvc3ZnPg0K');
        height: 54px;
        left: 30px;
        top: 22px;
        width: 60px;
    }

    .indi-loader__motif-item--3 {
        animation-delay: ($loader-animation-speed/3);
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNDJweCIgaGVpZ2h0PSI0NXB4IiB2aWV3Qm94PSI2NTEgNTAuMjI5IDQyIDQ1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDY1MSA1MC4yMjkgNDIgNDUiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzQiPg0KCTxwb2x5Z29uIGZpbGw9IiMwMDRBRDQiIHBvaW50cz0iNjkxLjY3MSw5MS4yIDY1Myw5My43MzQgNjUzLDU1LjM2MiA2OTEuMDcxLDUxLjEzOSAJIi8+DQo8L2c+DQo8L3N2Zz4NCg==');
        height: 45px;
        left: 77px;
        top: 0;
        width: 42px;
    }

    .indi-loader__motif-item--4 {
        animation-delay: ($loader-animation-speed/2);
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjBweCIgaGVpZ2h0PSI0MnB4IiB2aWV3Qm94PSIwIDAgNjAgNDIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYwIDQyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJMYXllcl81XzFfIj4NCgk8cG9seWdvbiBmaWxsPSIjMDA0QUQ0IiBwb2ludHM9IjU4LjY1MiwzOC42NzIgMS4zNDgsMzkuOTk2IDEuMzQ4LDUuNjEzIDU4LjY1MiwxLjM5MSAJIi8+DQo8L2c+DQo8L3N2Zz4NCg==');
        height: 42px;
        left: 105px;
        top: 24px;
        width: 60px;
    }

</style>