(function() {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state'];

    function LoginController($state) {
        var vm = this;
        vm.logging = false;
        vm.pageClass = 'page-fade';

    }

})();
