/**
 * Created by georgeallen on 29/02/2016.
 */
angular.module('portfolio').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'client/home/home.html',
                controllerAs: 'ctlr',
                controller: 'HomeController'
            })
            .state('blog', {
                url: '/blog'
            });
        $urlRouterProvider.otherwise("/home");
    })
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (error === 'AUTH_REQUIRED') {
                $state.go('home');
            }
        });
    });