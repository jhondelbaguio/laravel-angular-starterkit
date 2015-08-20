var elixir = require('laravel-elixir');

var parent_path = 'vendor/bower_components/';

var path = {
    'angular':  parent_path + 'angular/',
    'route':    parent_path + 'angular-ui-router/release/',
    'font':     parent_path + 'font-awesome/',
    'storage':  parent_path + 'a0-angular-storage/dist/',
    'jwt':      parent_path + 'angular-jwt/dist/',
    'ui_bstrp': parent_path + 'angular-bootstrap/',
    'animate':  parent_path + 'angular-animate/',
    'ladda':    parent_path + 'ladda/dist/',
    'ngLadda':  parent_path + 'angular-ladda/dist/',
    'toaster':  parent_path + 'angularjs-toaster/',
    'base': 'resources/assets/',
}


elixir(function(mix) {

    mix.scripts([
        path.angular  + 'angular.min.js',
    	path.route    + 'angular-ui-router.min.js',
    	path.jwt      + 'angular-jwt.min.js',
    	path.storage  + 'angular-storage.min.js',
    	path.ui_bstrp + 'ui-bootstrap-tpls.min.js',
    	path.animate  + 'angular-animate.min.js',
        path.ladda    + 'spin.min.js',
    	path.ladda    + 'ladda.min.js',
    	path.ngLadda  + 'angular-ladda.min.js',
    	path.toaster  + 'toaster.min.js',

    	path.base + 'js/**/*module*.js',
    	path.base + 'js/**/*.js'
    ], 'public/js/main.js', './');

    mix.sass([
        'app.scss'
    ], 'public/css/app.css');

    mix.styles([
        path.base + 'css/animate.min.css',
        path.font + 'css/font-awesome.min.css',
        path.ladda + 'ladda-themeless.min.css',
        path.toaster + 'toaster.min.css'
    ], 'public/css/main.css', './');

    mix.copy(path.font + 'fonts/**', 'public/fonts');
});
