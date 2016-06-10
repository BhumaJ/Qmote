app.factory('Loader', function ($http, $ionicLoading) {
    var loader = {};

    // loader for MoviesCtrl
    loader.getMovies = function (callback) {
        method = "VideoLibrary.GetMovies";
        params = '{"limits":{"start":0,"end":9999},"properties":["art","rating","thumbnail","playcount","file","year","genre","plot","runtime"],"sort": {"order":"ascending","method":"label","ignorearticle":true}},"id":"libMovies"';

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + ', "id" : 1}';
        complete_url = window.base_url + param_url;

        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching movies");
            });
    };

    // loaders for TVShowsCtrl
    loader.getSeries = function (callback) {
        method = "VideoLibrary.GetTVShows";
        params = '{"limits": { "start" : 0, "end": 100}, "properties": ["art", "genre", "plot", "title", "originaltitle", "year", "rating", "thumbnail", "playcount", "file","season"], "sort": { "order": "ascending", "method": "label" }}, "id": "libTvShows"';

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;

        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching TV shows");
            });
    };

    loader.getSeasons = function (tvshowid, callback) {
        method = "VideoLibrary.GetSeasons";
        if (tvshowid === undefined)
            params = '{"limits": { "start" : 0, "end": 100}, "properties": ["season","showtitle","thumbnail","episode","tvshowid"], "sort": { "order": "ascending", "method": "label" }}, "id": "libTvShows"';
        else
            params = '{"tvshowid":' + tvshowid + ',"limits": { "start" : 0, "end": 100}, "properties": ["season","showtitle","thumbnail","episode","tvshowid"], "sort": { "order": "ascending", "method": "label" }}, "id": "libTvShows"';

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;

        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching seasons");
            });
    };

    loader.getEpisodes = function (tvshowid, seasonid, callback) {
        method = "VideoLibrary.GetEpisodes";
        if (tvshowid === undefined || seasonid === undefined)
            params = '{"limits": { "start" : 0, "end": 100}, "properties": ["title","runtime","season","episode","tvshowid","file"], "sort": { "order": "ascending", "method": "label" } }, "id": "libTvShows"';
        else
            params = '{"tvshowid":' + tvshowid + ',"season":' + seasonid + ',"limits": { "start" : 0, "end": 100}, "properties": ["title","runtime","season","episode","tvshowid","file"], "sort": { "order": "ascending", "method": "label" } }, "id": "libTvShows"';

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;

        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching episodes");
            });
    };

    loader.getEpisodeDetails = function (episodeid, callback) {
        method = "VideoLibrary.GetEpisodeDetails";
        params = '{"episodeid":' + episodeid + ', "properties": ["title","runtime","rating","plot","season","episode","tvshowid","file","showtitle","thumbnail","fanart"]}, "id": "libTvShows"';

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;

        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching this episode");
            });
    };

    // loaders for MusicCtrl
    loader.getArtists = function (callback) {
        method = "AudioLibrary.GetArtists";
        params = '{"properties":["style","description","born","yearsactive","died","thumbnail","genre","fanart"],"limits":{"start":1,"end":2000}},"id":"libMusic"';

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;
        console.log(complete_url)
        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching artists");
            });
    };

    loader.getAddons = function (callback) {
        method = "Addons.GetAddons";
        params = '{"properties":["name", "author", "summary", "version", "fanart", "thumbnail"], "type" : "xbmc.python.pluginsource" }';

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + ', "id" : 1}';
        complete_url = window.base_url + param_url;
        console.log(complete_url)
        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching addons");

            })
    }

    loader.openAddons = function (addonid, callback) {
        method = "Addons.ExecuteAddon";
        params = '{"addonid":"' + addonid + '"},"id":1}';
        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                callback(data);
            })
            .error(function (data, status, headers, config) {
                alert("Unable to open Addon");
            });
    };


    loader.getAlbums = function (passID, uID, callback) {
        method = "AudioLibrary.GetAlbums";
        console.log("passId: " + passID)
        console.log("uID: " + uID);
        if (uID == 1) {
            params = '{"limits":{"start":0,"end":9999},"properties":["playcount","artist","genre","rating","thumbnail","year","mood","style"],"sort":{"order":"ascending","method":"album","ignorearticle":true},"filter":{"artistid":' + passID + '}},"id":"libAlbums"}';
        }
        else if (uID == 2) {
            params = '{"limits":{"start":0,"end":9999},"properties":["playcount","artist","genre","rating","thumbnail","year","mood","style"],"sort":{"order":"ascending","method":"album","ignorearticle":true},"filter":{"genreid":' + passID + '}},"id":"libAlbums"}';
        } else {
            params = '{"limits":{"start":0,"end":9999},"properties":["playcount","artist","genre","rating","thumbnail","year","mood","style"],"sort":{"order":"ascending","method":"album","ignorearticle":true}},"id":"libAlbums"}';
        }

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;
        console.log(complete_url)
        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching albums");
            });
    };

    loader.getSongs = function (albumid, callback) {
        method = "AudioLibrary.GetSongs";
        if (albumid === 0)
            params = '{"limits":{"start":0,"end":9999},"properties":["file","artist","duration","album","albumid","track","playcount"],"sort":{"order":"ascending","method":"track","ignorearticle":true},"filter":{"albumid":"0"}},"id":"libSongs"}';
        else
            params = '{"limits":{"start":0,"end":9999},"properties":["file","artist","duration","album","albumid","track","playcount"],"sort":{"order":"ascending","method":"track","ignorearticle":true},"filter":{"albumid":' + albumid + '}},"id":"libSongs"}';


        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;
        console.log(complete_url)
        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching songs");
            });
    };

    loader.getGenre = function (callback) {
        method = "AudioLibrary.GetGenres";
        params = '{"sort": { "order": "ascending", "method": "album", "ignorearticle": true }}, "id": "libAlbums"}';
        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;
        console.log(complete_url);
        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching songs");
            });
    }

    loader.getSongDetails = function (songid, callback) {
        method = "AudioLibrary.GetSongDetails";
        params = '{"songid":' + songid + ', "properties": ["title","artist","genre","duration","album","thumbnail","file","albumid"]}, "id": "libSongs"';

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;

        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching this song");
            });
    };

    loader.getAllFiles = function (id, callback) {
        method = "Files.GetSources";
        if (id == 0) {
            params = '{"media":"music"}';
        } else if (id == 1) {
            params = '{"media":"video"}';
        } else {
            params = '{"media":"pictures"}';
        }

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","id":"1","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;
        console.log(complete_url);

        $ionicLoading.show();
        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function (data, status, headers, config) {
                $ionicLoading.hide();
                callback(data);
            })
            .error(function (data, status, headers, config) {
                $ionicLoading.hide();
                alert("Error fetching files");
            });

    }

    return loader;
});