const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    
    .scripts(['resources/ventic/js/dashboard/analytics.js',
              'resources/ventic/js/dashboard/dashboard-1.js',
              'resources/ventic/js/plugins-init/bs-daterange-picker-init.js',
              'resources/ventic/js/plugins-init/clock-picker-init.js',
              'resources/ventic/js/plugins-init/datatables.init.js',
              'resources/ventic/js/plugins-init/fullcalendar-init.js',
              'resources/ventic/js/plugins-init/jquery-asColorPicker.init.js',
              'resources/ventic/js/plugins-init/material-date-picker-init.js',
              'resources/ventic/js/plugins-init/nestable-init.js',
              'resources/ventic/js/plugins-init/nouislider-init.js',
              'resources/ventic/js/plugins-init/pickadate-init.js',
              'resources/ventic/js/plugins-init/piety-init.js',
              'resources/ventic/js/plugins-init/select2-init.js',
              'resources/ventic/js/plugins-init/sparkline-init.js',
              'resources/ventic/js/plugins-init/sweetalert.init.js',
              'resources/ventic/js/plugins-init/toastr-init.js',
              'resources/ventic/js/plugins-init/widgets-script-init.js',
              'resources/ventic/js/custom.min.js',
              'resources/ventic/js/demo.js',
              'resources/ventic/js/deznav-init.js',
              'resources/ventic/js/styleSwitcher.js',
              'resources/ventic/vendor/apexchart/apexchart.js',
              'resources/ventic/vendor/bootstrap-daterangepicker/daterangepicker.js',
              'resources/ventic/vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',
              'resources/ventic/vendor/bootstrap-datetimepicker/js/moment.js',
              'resources/ventic/vendor/bootstrap-material-datetimepicker/js/botstrap-material-datetimepicker.js',
              'resources/ventic/vendor/bootstrap-select/dist/js/bootstrap-select.min.js',
              'resources/ventic/vendor/chart.js/Chart.bundle.min.js',
              'resources/ventic/vendor/chartist/js/chartist.min.js',
              'resources/ventic/vendor/chartist-plugin-tooltips/js/chartist-plugin-tooltip.min.js',
              'resources/ventic/vendor/ckeditor/ckeditor.js',
              'resources/ventic/vendor/clockpicker/js/bootstrap-clockpicker.min.js',
              'resources/ventic/vendor/datatables/js/jquery.dataTables.min.js',
              'resources/ventic/vendor/dropzone/dist/dropzone.js',
              'resources/ventic/vendor/flot/jquery.flot.js',
              'resources/ventic/vendor/flot/jquery.flot.pie.js',
              'resources/ventic/vendor/flot/jquery.flot.resize.js',
              'resources/ventic/vendor/flot-spline/jquery.spline.min.js',
              'resources/ventic/vendor/fullcalendar/js/main.min.js',
              'resources/ventic/vendor/global/global.min.js',
              'resources/ventic/vendor/jquery-asColor/jquery-asColor.min.js',
              'resources/ventic/vendor/jquery-asColorPicker/js/jquery-asColorPicker.min.js',
              'resources/ventic/vendor/jquery-asGradient/jquery-asGradient.min.js',
              'resources/ventic/vendor/jquery-nice-select/js/jquery.nice-select.min.js',
              'resources/ventic/vendor/jquery-smartwizard/dist/js/jquery.smartWizard.js',
              'resources/ventic/vendor/jquery-sparkline/jquery.sparkline.min.js',
              'resources/ventic/vendor/jquery-steps/build/jquery.steps.min.js',
              'resources/ventic/vendor/jquery-validation/jquery.validate.min.js',
              'resources/ventic/vendor/lightgallery/js/lightgallery-all.min.js',
              'resources/ventic/vendor/moment/moment.min.js',
              'resources/ventic/vendor/nestable2/js/jquery.nestable.min.js',
              'resources/ventic/vendor/nouislider/nouislider.min.js',
              'resources/ventic/vendor/peity/jquery.peity.min.js',
              'resources/ventic/vendor/pickadate/picker.date.js',
              'resources/ventic/vendor/pickadate/picker.js',
              'resources/ventic/vendor/pickadate/picker.time.js',
              'resources/ventic/vendor/select2/js/select2.full.min.js',
              'resources/ventic/vendor/sweetalert2/dist/sweetalert.min.js',
              'resources/ventic/vendor/toastr/js/toastr.min.js',
              'resources/ventic/vendor/wnumb/wNumb.js',
              
    ],'public/js/ventic.js')
    .styles([
        'resources/ventic/css/style.css',
        'resources/ventic/vendor/animate/animate.min.css',
        'resources/ventic/vendor/aos.min.css',
        'resources/ventic/vendor/bootstrap-daterangepicker/daterangepicker.css',
        'resources/ventic/vendor/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',
        'resources/ventic/vendor/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css',
        'resources/ventic/vendor/bootstrap-select/dist/css/bootstrap-select.min.css',
        'resources/ventic/vendor/chartist/css/chartist.min.css',
        'resources/ventic/vendor/clockpicker/css/bootstrap-clockpicker.min.css',
        'resources/ventic/vendor/datatables/css/jquery.dataTables.min.css',
        'resources/ventic/vendor/dropzone/dist/dropzone.css',
        'resources/ventic/vendor/fullcalendar/css/main.min.css',
        'resources/ventic/vendor/jquery-asColorPicker/css/asColorPicker.min.css',
        'resources/ventic/vendor/jquery-nice-select/css/nice-select.css',
        'resources/ventic/vendor/jquery-smartwizard/dist/css/smart_wizard.min.css',
        'resources/ventic/vendor/lightgallery/css/lightgallery.min.css',
        'resources/ventic/vendor/metismenu/css/metisMenu.min.css',
        'resources/ventic/vendor/nestable2/css/jquery.nestable.min.css',
        'resources/ventic/vendor/nouislider/nouislider.min.css',
        'resources/ventic/vendor/perfect-scrollbar/css/perfect-scrollbar.css',
        'resources/ventic/vendor/pickadate/themes/default.css',
        'resources/ventic/vendor/pickadate/themes/default.date.css',
        'resources/ventic/vendor/select2/css/select2.min.css',
        'resources/ventic/vendor/sweetalert2/dist/sweetalert2.min.css',
        'resources/ventic/vendor/toastr/css/toastr.min.css',
        

    ],'public/css/ventic.css');
