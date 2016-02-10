// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            /*if (window.cordova && window.cordova.plugins.Keyboard) {
             cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
             cordova.plugins.Keyboard.disableScroll(true);

             } */
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'views/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.remote', {
                url: '/remote',
                views: {
                    'menuContent': {
                        templateUrl: 'views/remote.html',
                        controller: 'RemoteCtrl'
                    }
                }
            })

            .state('app.movies', {
                url: '/movies',
                views: {
                    'menuContent': {
                        templateUrl: 'views/Movies/movies.html',
                        controller: 'MovieCtrl'
                    }
                }
            })
            .state('app.movies-details', {
                url: "/movies/:movieLabel",
                views: {
                    'menuContent': {
                        templateUrl: "views/Movies/movie-detail.html",
                        controller: 'MovieCtrl'
                    }
                }
            })

            .state('app.tvshows', {
                url: '/tvshows',
                views: {
                    'menuContent': {
                        templateUrl: 'views/TVshows/tvshows.html'
                    }
                }
            })
            .state('app.music', {
                url: '/music',
                views: {
                    'menuContent': {
                        templateUrl: 'views/Music/music.html',
                        controller: 'MusicCtrl'
                    }
                }
            })
            .state('app.setting', {
                url: '/setting',
                views: {
                    'menuContent': {
                        templateUrl: 'views/setting.html'
                    }
                }
            })
            .state('app.addons', {
                url: '/addons',
                views: {
                    'menuContent': {
                        templateUrl: 'views/addons.html'
                    }
                }
            })
            .state('app.discover', {
                url: '/discover',
                views: {
                    'menuContent': {
                        templateUrl: 'views/discover.html',
                        controller: 'discover'
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/remote');
    });
