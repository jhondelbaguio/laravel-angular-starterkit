(function(){
	'use strict';
	
	var core = angular.module('app.core');

	core.config(configure);

	configure.$inject = ['$interpolateProvider','laddaProvider'];

	function configure($interpolateProvider,laddaProvider){
		configureLadda();
		configureInterpolator();

		function configureLadda(){
			laddaProvider.setOption({
      			style: 'expand-right'
    		});
		}

		function configureInterpolator(){
			$interpolateProvider.startSymbol('[[');
			$interpolateProvider.endSymbol(']]');
		}


	}
})();