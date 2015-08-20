(function() {
    'use strict';

    angular
        .module('blocks.router')
        .provider('RouteHelper', routerHelperProvider)


    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {

        var config = {
            docTitle: 'getTodo',
            resolveAlways: {}
        };


        this.$get = RouteHelper;

        RouteHelper.$inject = ['$state', '$rootScope'];

        function RouteHelper($state, $rootScope) {
            var handlingStateChangeError = false;
            var stateCounts = {
                errors: 0,
                changes: 0
            };


            var service = {
                configureStates: configureStates,
            };

            init();

            return service;

            function init() {
                updateDocTitle();
            }

            function configureStates(states, otherwisePath) {
                states.forEach(function(state) {
                    angular.extend(state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                $urlRouterProvider.otherwise('/');
            }

            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {
                        stateCounts.changes++;
                        handlingStateChangeError = false;
                        var title = config.docTitle + ' ' + (toState.title || '');
                        $rootScope.title = title; 
                    }
                );
            }

        }

    }



})();
