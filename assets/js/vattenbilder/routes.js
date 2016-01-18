(function() {

    'use strict';

    angular
        .module('vattenbilder')
        .config(function($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/');
  

        $stateProvider

            .state('landing', {
                url: '/',
                templateUrl: 'landing.html'
            })
        
        });

}());