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
                url: '/blog',
                templateUrl: 'client/blog/blog.html',
                controllerAs: 'ctlr',
                controller: 'BlogController'
            })
            .state('data', {
                url: '/data',
                templateUrl: 'client/data/dataDashboard/dataDashboard.html',
                controllerAs: 'ctlr',
                controller: 'DataDashboardController',
                resolve: {
                    currentUser: ($q) => {
                        if (Meteor.userId() == null) {
                            return $q.reject('AUTH_REQUIRED');
                        }
                        else {
                            return $q.resolve();
                        }
                    }
                }
            })
            .state('dataTable', {
                url: '/data/table?entity?',
                templateUrl: 'client/data/dataTable/dataTable.html',
                controllerAs: 'ctlr',
                controller: 'DataTableController',
                resolve: {
                    currentUser: ($q) => {
                        if (Meteor.userId() == null) {
                            return $q.reject('AUTH_REQUIRED');
                        }
                        else {
                            return $q.resolve();
                        }
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'client/login/login.html',
                controllerAs: 'ctlr',
                controller: 'LoginController'
            });
        $urlRouterProvider.otherwise("/home");
    })
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (error === 'AUTH_REQUIRED') {
                $state.go('login');
            }
        });
    });