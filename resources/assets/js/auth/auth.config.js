(function() {
    'use strict';

    angular
        .module('app.auth')
        .run(routeConfig);

    routeConfig.$inject = ['RouteHelper'];

    function routeConfig(RouteHelper) {
        RouteHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
                state: 'index',
                config: {
                    url: '/',
                    templateUrl: 'views/pages/auth/login.php',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();
