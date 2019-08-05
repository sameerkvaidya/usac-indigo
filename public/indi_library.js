/* indigo_design_system v1.2.0 */
 /*global $*/

 // var indi = indi || {};
 // var projectNamespace = projectNamespace || 'indi';

 // indi.Button = function() {
 //     'use strict';
 //     var set_event_listeners = function() {
 //         $("body").on("click", `.${projectNamespace}-button`, function(e){
 //             e.preventDefault();
 //             $(this).text("CLICKED!");
 //         });
 //     };

 //     var initialize = function initialize() {
 //         set_event_listeners();
 //     };

 //     var public_vars = {
 //         'initialize': initialize
 //     };

 //     return public_vars;
 // }();
 // $(document).ready(function(){
 //     'use strict';
 //     indi.Button.initialize();
 // });

/*global $*/

var DataTable = function() {
    'use strict';

    $('.indi-data-table__column-heading--sort-link').click(function(){
      var $target = $(this).closest('.indi-data-table');
        if ($(this).hasClass('indi-data-table__column-heading--sort-link-is-active')) {
            $(this).toggleClass('indi-data-table__column-heading--sort-link-is-descending');
        } else {
            $target.find('.indi-data-table__column-heading--sort-link').removeClass('indi-data-table__column-heading--sort-link-is-active');
            $(this).addClass('indi-data-table__column-heading--sort-link-is-active');
        }
    });
};

$(document).ready(function(){
    'use strict';
    DataTable = new DataTable();
});

/*global $*/

var Form = function() {    'use strict';

    $('.js-behavior-trigger-form-input-file').click(function(){
      $(this).prev('.js-object-form-input-file').trigger('click');
    });

    $(document).on('click', '.js-behavior-remove-file-upload', function(){
      var $target = $(this).closest('.js-object-file-upload');

      $target.fadeOut(function(){
        $(this).remove();
      });
    });

    //Demo behaviors for pages/form-file-upload.html

    function simulateFileUpload($el){
        var $percentageBar = $el.find('.indi-form__percentage-indicator-bar');
        var $percentageAmount = $el.find('.indi-form__percentage-indicator');
        var $cellPercentage = $el.find('.indi-form__file-upload-cell--percentage');
        var $cellFile = $el.find('.indi-form__file-upload-cell:nth-child(2)');

        $el.addClass('indi-file-upload-simulation-running');
        $percentageBar.css({'width': '0%'});
        $cellPercentage.show();
        $cellFile.addClass('indi-form__file-upload-cell--file');

        $percentageBar.animate({'width': '100%'}, {
            'duration': 20000,
            'progress': function(animation, progress) {
               $percentageAmount.attr('aria-valuenow', Math.round(progress * 100));
            },
            'complete': function() {
                $cellPercentage.hide();
                $cellFile.removeClass('indi-form__file-upload-cell--file');
                $el.removeClass('indi-file-upload-simulation-running');
                if ($('.indi-file-upload-simulation-running').length === 0) {
                    $('.js-object-file-upload-message').addClass('indi-doc-display-none');
                    $('.js-object-file-upload-demo-submit').removeClass('indi-button--disabled').prop("disabled", false);
                }
            }
        });
    }

    $('.js-behavior-form-input-file-demo').on('change', function(){
        var fileName = $('.js-object-form-input-file').val().split('\\').pop().replace(/\..+$/, '');
        var $masterItem = $('.js-object-file-upload-item-master');
        var $clonedItem = $masterItem.clone().addClass('js-object-file-upload-item-clone js-behavior-file-upload-demo-reset').removeClass('js-object-file-upload-item-master indi-doc-display-none');
        $clonedItem.find('.indi-file-object__cell--label').text(fileName).attr('title', fileName);
        $clonedItem.appendTo('.js-object-file-upload-list');
        simulateFileUpload($clonedItem);
        $('#file-upload-example-form')[0].reset();
        $('.js-object-trigger-form-input-file').text("Upload another file.").removeClass('indi-button--primary').addClass('indi-button--tertiary');
        $('.js-object-file-upload-cell').removeClass('indi-doc-display-none');
        $('.js-object-file-upload-message').removeClass('indi-doc-display-none');
        $('.js-object-file-upload-demo-submit').addClass('indi-button--disabled').prop("disabled", true);
    });

    $(document).on('click', '.js-behavior-file-upload-demo-reset .js-behavior-remove-file-upload', function(){
        setTimeout(function(){
            if ($('.js-object-file-upload-item-clone').length >= 1 && $('.indi-file-upload-simulation-running').length === 0) {
                $('.js-object-file-upload-message').addClass('indi-doc-display-none');
                $('.js-object-file-upload-demo-submit').removeClass('indi-button--disabled').prop("disabled", false);
            }

            if ($('.js-object-file-upload-item-clone').length === 0) {
                $('.js-object-trigger-form-input-file').text("Choose File").removeClass('indi-button--tertiary').addClass('indi-button--primary');
                $('.js-object-file-upload-cell').addClass('indi-doc-display-none');
                $('.js-object-file-upload-message').addClass('indi-doc-display-none');
                $('.js-object-file-upload-demo-submit').addClass('indi-button--disabled').prop("disabled", true);
            }
        }, 550);
    });
};

var datepicker = function() {
    'use strict';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              $('.js-object-datepicker').attr("readonly", "true");
            }
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $(".js-object-datepicker").on("click touchstart", function() {
        // $("body").addClass("indi-form__datepicker-no-scroll");
        var id = $(this).attr("id");
        var currentdate;
        if (this.value !== '' && isValidDate(this.value)) {
            currentdate = new Date(this.value);
        } else {
            currentdate = new Date();
        }
        buildCalendar(currentdate, id);
        $(this).siblings(".indi-form__datepicker").addClass("indi-form__datepicker--is-open");
    });

    $(".js-object-datepicker").keyup(function() {
        if (isValidDate(this.value)) {
            var id = $(this).attr("id");
            buildCalendar(new Date($(this).val()), id);
            $(this).siblings(".indi-form__datepicker").addClass("indi-form__datepicker--is-open");
        }
    });

    $(document).on('click touchstart', function() {
        $(".indi-form__datepicker").removeClass("indi-form__datepicker--is-open");
        $(".js-object-datepicker").blur();
    });

    $(".js-object-datepicker, .indi-form__datepicker-calender > thead, .indi-form__datepicker-head").on('click  touchstart', function(e) {
       $("#" + $(".js-object-datepicker").attr("id")).focus();
        e.stopPropagation();
        e.preventDefault();
    });

    function buildCalendar(date, id) {
        $(".month").html(months[date.getMonth()]);
        $(".year").html(date.getFullYear());
        var tbody = $(".indi-form__datepicker-calender>tbody ").html("");
        var firstdayofmonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        var lastdayofmonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        var numDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        var lastdateofpreviousmonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        var lastmonth = new Date(date.getFullYear(), date.getMonth() - 1);
        var nextmonth = new Date(date.getFullYear(), date.getMonth() + 1);

        // date from previous and current month
        for (var i = 0, dt = 1; dt <= numDaysInMonth; i++) {
            if (i % 7 === 0) {
                tbody += "</tr><tr>";
            }
            if (i >= firstdayofmonth) {
                if (dt === parseInt($("#" + id).val().split("/")[1], 10) && $(".month").html() === months[$("#" + id).val().split("/")[0] - 1] && $(".year").html() === $("#" + id).val().split("/")[2]) {
                    tbody += "<td><button class ='js-behavior-set-current-month-dates indi-form__datepicker-previously-selected-date' aria-label=" + (date.getMonth() + 1) + "/" + dt + "/" + date.getFullYear() + ">" + dt + "</button></td>";
                } else {
                    tbody += "<td><button class='js-behavior-set-current-month-dates' aria-label=" + (date.getMonth() + 1) + "/" + dt + "/" + date.getFullYear() + ">" + dt + "</button></td>";
                }
                dt++;
            } else {
                tbody += "<td><button class='indi-form__datepicker-previous-month-dates' aria-label=" + (lastmonth.getMonth() + 1) + "/" + (lastdateofpreviousmonth - (firstdayofmonth - (i + 1))) + "/" + lastmonth.getFullYear() + ">" + (lastdateofpreviousmonth - (firstdayofmonth - (i + 1))) + "</button></td>";
            }
        }
        // dates from next month
        for (var j = 1; j <= (6 - lastdayofmonth); j++) {
            tbody += "<td><button class='indi-form__datepicker-next-month-dates' aria-label=" + (nextmonth.getMonth() + 1) + "/" + j + "/" + nextmonth.getFullYear() + ">" + j + "</button></td>";
        }

        $(".indi-form__datepicker-calender>tbody").html(tbody);

        function selectDate(event) {
            var day = $(this).html();
            var newdate = new Date($(".year").html(), months.indexOf($(".month").html()) + event.data.monthchange, day);
            $("#" + id).val('');
            $("#" + id).val((newdate.getMonth() + 1) + "/" + newdate.getDate() + "/" + newdate.getFullYear());
            $("#" + id).blur();
        }
        $(".indi-form__datepicker-calender>tbody td button.js-behavior-set-current-month-dates").on('click touchstart', { 'monthchange': 0 }, selectDate);
        $(".indi-form__datepicker-calender>tbody td button.indi-form__datepicker-previous-month-dates").on('click touchstart', { 'monthchange': -1 }, selectDate);
        $(".indi-form__datepicker-calender>tbody td button.indi-form__datepicker-next-month-dates").on('click touchstart', { 'monthchange': 1 }, selectDate);
    }
    //navigation for months
    $(".indi-form__datepicker-head-previous").on('click touchstart', function() {
        var id = $(this).parents(".indi-form__datepicker").siblings(".js-object-datepicker").attr("id");
        var date = new Date($(".year").html(), months.indexOf($(".month").html()) - 1);
        buildCalendar(date, id);
    });

    $(".indi-form__datepicker-head-next").on('click touchstart', function() {
        var id = $(this).parents(".indi-form__datepicker").siblings(".js-object-datepicker").attr("id");
        var date = new Date($(".year").html(), months.indexOf($(".month").html()) + 1);
        buildCalendar(date, id);
    });

    function isValidDate(dateString) {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
            return false;
        }

        var parts = dateString.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);

        if (year < 1000 || year > 3000 || month === 0 || month > 12) {
            return false;
        }

        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
            monthLength[1] = 29;
        }

        return day > 0 && day <= monthLength[month - 1];
    }
};

$(document).ready(function(){
    'use strict';
    Form = new Form();
    datepicker();
    validations();
});

var validations = function(){
    'use strict';
$(".js-behavior-validate-email").focusout(function(){
    validateEmail($(this));
});

$(".js-behavior-validate-phone").focusout(function(){
    validatePhoneNo($(this));
});

function validateEmail(target) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    if (pattern.test(target.val()) || target.val().length === 0) {
        target.siblings(".indi-form__input-notification--has-error").addClass("indi-doc-display-none");
        target.removeClass("indi-form__input--has-error");
    } else {
        target.addClass("indi-form__input--has-error");
        target.siblings(".indi-form__input-notification--has-error").html("Please Enter valid email");
        target.siblings(".indi-form__input-notification--has-error").removeClass("indi-doc-display-none");
    }
}

function validatePhoneNo(target){
    var pattern = new RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);
    if (pattern.test(target.val()) || target.val().length === 0) {
        target.siblings(".indi-form__input-notification--has-error").addClass("indi-doc-display-none");
        target.removeClass("indi-form__input--has-error");
    } else {
        target.addClass("indi-form__input--has-error");
        target.siblings(".indi-form__input-notification--has-error").html("Phone number is invalid");
        target.siblings(".indi-form__input-notification--has-error").removeClass("indi-doc-display-none");
    }
}
};

/*global $*/

var Loader = function() {
    'use strict';

    $('.js-behavior-launch-loader-doc-example').click(function(){
        $('.js-object-loader-doc-example').addClass('indi-loader--overlay');
    });

    $('.js-object-loader-doc-example').click(function(){
        $(this).removeClass('indi-loader--overlay');
    });
};

$(document).ready(function(){
    'use strict';
    Loader = new Loader();
});

/*global $*/
$(document).ready(function() {
        'use strict';
        $(".indi-modal-target").click(function() {
            $(this).next().addClass("indi-modal--is-open");
        });
        $('.indi-modal__close, .indi-button--tertiary').on('click', function() {
            $(".indi-modal").removeClass("indi-modal--is-open");
        });
        $(document).click(function(event) {
            if ($(event.target).is(".indi-modal")) {
                $(".indi-modal").removeClass("indi-modal--is-open");
            }
        });
        $(document).keyup(function(e) {
            if (e.keyCode === 27) {
                $(".indi-modal").removeClass("indi-modal--is-open");
            }
        });
});

/*global $*/

var SideNav = function() {
    'use strict';

    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    $('.js-behavior-side-nav-link').click(function(e){
        var currentScrollPos = $('.indi-doc-layout-frames__frame--left').scrollTop();
        var newLocation = $(this).attr('href');

        if (currentScrollPos > 0){
            e.preventDefault();
            window.location = newLocation + '?navpos=' + currentScrollPos;
        }
    });

    var currentPathname = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);

    $('.js-behavior-side-nav-link').each(function(i){
        var thisLink = $(this).attr('href').substr($(this).attr('href').lastIndexOf('/') + 1);
        var navScrollPos = getParameterByName('navpos');
        var viewportHeight = $(window).height();
        var thisOffset = $(this).offset();
        if (thisLink === currentPathname) {
            $(this).addClass('indi-side-nav__label--link-is-active');

            if (navScrollPos) {
              $('.indi-doc-layout-frames__frame--left').animate({
                  'scrollTop': navScrollPos
              }, 1);
            } else if (thisOffset.top >= viewportHeight){
              $('.indi-doc-layout-frames__frame--left').animate({
                  'scrollTop': thisOffset.top - viewportHeight / 2
              }, 1);
            }
        } else if (currentPathname === "creating-forms.html") {
            $('.indi-side-nav__label:contains("Forms")').addClass('indi-side-nav__label--link-is-active'); //Hack for Forms doc page tab.
        }
    });
};

$(document).ready(function(){
    'use strict';
    SideNav = new SideNav();
});

/*global $*/
$(document).ready(function() {
    'use strict';
    $('body').on('click', 'button.indi-tab__label', function(event) {
        $(this).closest('.indi-tab').find('.indi-tab__content-item').removeClass("indi-tab__content-item--active");
        $("#" + event.target.id + "-content").addClass("indi-tab__content-item--active");
        $(this).closest('.indi-tab').find('.indi-tab__label').removeClass("indi-tab__label--active");
        $(this).addClass("indi-tab__label--active");
    });
});
