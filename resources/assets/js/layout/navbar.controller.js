(function(){
	'use strict';
	
	angular
        .module('app.layout')
        .controller('NavbarController',NavbarController);

    NavbarController.inject = ['$state'];

    function NavbarController($state){
    	var vm = this;
    }
	
})();