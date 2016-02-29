/**
 * Created by georgeallen on 29/02/2016.
 */
angular.module('portfolio').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: 'client/home/home.html',
                        controllerAs: 'ctlr',
                        controller: 'HomeController',
                    },
                    'title@home': {
                        templateUrl: 'client/home/title/title.html',
                    },
                    'about@home': {
                        templateUrl: 'client/home/about/about.html',
                    },
                    'whatIKnow@home': {
                        templateUrl: 'client/home/whatIKnow/whatIKnow.html',
                    },
                    'experience@home': {
                        templateUrl: 'client/home/experience/experience.html',
                    },
                    'contact@home': {
                        templateUrl: 'client/home/contact/contact.html',
                    }
                }
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