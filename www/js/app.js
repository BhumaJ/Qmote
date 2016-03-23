// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function ($ionicPlatform, $rootScope) {
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

        $rootScope.$on('$stateChangeSuccess ',
            function (event, toState, toParams, fromState, fromParams) {
                console.log("Success--------------")
                console.log(JSON.stringify(fromState))
                console.log(JSON.stringify(toState));
                console.log(JSON.stringify(fromParams))
                console.log(JSON.stringify(toParams))

            });
        $rootScope.$on('$stateNotFound',
            function (event, toState, toParams, fromState, fromParams) {
                console.log("not found--------------")
                console.log(JSON.stringify(fromState))
                console.log(JSON.stringify(toState));
                console.log(JSON.stringify(fromParams))
                console.log(JSON.stringify(toParams))
            })

        $rootScope.$on('$stateChangeError',
            function (event, toState, toParams, fromState, fromParams, error) {
                event.preventDefault()
                console.log("Error----------------")
                console.log(JSON.stringify(fromState))
                console.log(JSON.stringify(toState));
                console.log(JSON.stringify(fromParams))
                console.log(JSON.stringify(toParams))
                console.log(JSON.stringify(error))
            })
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.views.maxCache(0);

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
                        templateUrl: 'views/TVshows/tvshows.html',
                        controller: 'TVShowsCtrl'
                    }
                }
            })
            .state('app.tvshows-detail', {
                url: '/tvshows-detail/:seriesLabel/:seriesId',
                views: {
                    'menuContent': {
                        templateUrl: "views/TVshows/tvshowsdetail.html",
                        controller: 'TVShowsCtrl'
                    }
                }
            })
            .state('app.tvshows-season-detail', {
                url: '/tvshows-season-detail/:seriesId/:seasonId',
                views: {
                    'menuContent': {
                        templateUrl: "views/TVshows/season-detail.html",
                        controller: 'TVShowsCtrl'
                    }
                }
            })

            .state('app.tvshow-episode-detail', {
                url: '/tvshow-episode-detail/:episodeLabel/:episodeId',
                views: {
                    'menuContent': {
                        templateUrl: "views/TVshows/episode-detail.html",
                        controller: 'TVShowsCtrl'
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

            .state('app.music', {
                url: '/music',
                views: {
                    'menuContent': {
                        templateUrl: "views/Music/music.html"
                    }
                }
            })


            .state('app.music.music-artist', {
                url: '/artist',
                views: {
                    'tab-artist': {
                        templateUrl: 'views/Music/music-artist.html',
                        controller: 'MusicCtrl'
                    }
                }
            })

            .state('app.music.music-artist-album', {
                url: '/album/:Label/:passId/:uId',
                views: {
                    'tab-album': {
                        templateUrl: 'views/Music/music-album.html',
                        controller: 'MusicCtrl'
                    }
                }
            })

            .state('app.music.music-album', {
                url: '/album',
                views: {
                    'tab-album': {
                        templateUrl: 'views/Music/music-album.html',
                        controller: 'MusicCtrl'
                    }
                }
            })

            .state('app.music.music-song', {
                url: '/song/:albumLabel/:albumId',
                views: {
                    'tab-album': {
                        templateUrl: 'views/Music/music-song.html',
                        controller: 'MusicCtrl'
                    }
                }
            })
            .state('app.music.music-genre', {
                url: '/genre',
                views: {
                    'tab-genre': {
                        templateUrl: 'views/Music/music-genre.html',
                        controller: 'MusicCtrl'
                    }
                }
            })

            .state('app.file', {
                url: "/file",
                views: {
                    'menuContent': {
                        templateUrl: 'views/Files/files.html'
                    }
                }
            })
            .state('app.file.file-music', {
                url: '/file-music',
                views: {
                    'file-tab-music': {
                        templateUrl: 'views/Files/files-music.html',
                        controller: "FilesCtrl"
                    }
                }
            })
            .state('app.file.file-music-list', {
                url: '/file-music-list/:sourceFileLabel',
                views: {
                    'file-tab-music': {
                        templateUrl: 'views/Files/files-music-list.html',
                        controller: "FilesCtrl"
                    }
                }
            })
            .state('app.file.file-video', {
                url: '/video',
                views: {
                    'file-tab-video': {
                        templateUrl: 'views/Files/files-video.html',
                        controller: "FilesCtrl"
                    }
                }
            })
            .state('app.file.file-picture', {
                url: '/picture',
                views: {
                    'file-tab-picture': {
                        templateUrl: 'views/Files/files-picture.html',
                        controller: "FilesCtrl"
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/remote');
    });
