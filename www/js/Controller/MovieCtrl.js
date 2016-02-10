/**
 * Created by BhumaJ on 08-Feb-16.
 */

app.controller('MovieCtrl', function($scope, $http , $stateParams, $location, $ionicLoading, Loader){

    $scope.movie_label = $stateParams.movieLabel;
    $scope.showMovies = function() {
        Loader.getMovies(function(data) {
            $scope.movies = data.result.movies;
            $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.playMovie  = function(file) {
        method = "Player.Open";
        params = '{"item":{"file":"' + encodeURIComponent(file) + '"}}';

        param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
        complete_url = window.base_url + param_url;

        $http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
            .success(function(data, status, headers, config) {
            })
            .error(function(data, status, headers, config) {
                alert("Cannot play this movie");
            });
    };

    $scope.Math = window.Math;
    $scope.toHours = function(duration) {
        var hours = Math.floor(duration/3600);
        var minutes = Math.floor((duration - (hours*3600))/60);

        if (minutes < 10) {
            minutes = "0" + minutes ;
        }
        var time = hours + 'h ' + minutes + 'm';

        return time;
    };

    $scope.getThumbnail = function(thumbnailUri) {

        thumbnailUri = thumbnailUri.replace("image://","");
        var thumbnailUriDecoded = decodeURIComponent(thumbnailUri);

        var thumbnail_length = thumbnailUriDecoded.length;
        if( thumbnailUriDecoded.substring(thumbnail_length - 1, thumbnail_length) == "/") {
            return thumbnailUriDecoded.substring(0, thumbnail_length - 1);
        }else{
            return thumbnailUriDecoded;
        }
    };

});