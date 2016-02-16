app.controller('TVShowsCtrl', function($scope, $http, $location, $stateParams, $ionicLoading, $sce, Loader) {

	$scope.series_id = $stateParams.seriesId;
	$scope.series_label = $stateParams.seriesLabel;

	$scope.season_id = $stateParams.seasonId;

	$scope.episode_id = $stateParams.episodeId;
	$scope.episode_label = $stateParams.episodeLabel;

	$scope.showSeries = function() {
		Loader.getSeries(function(data) {
			$scope.tvshows = data.result.tvshows;
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	$scope.showSeasons = function(tvshowid) {
		Loader.getSeasons(tvshowid, function(data) {
			$scope.seasons = data.result.seasons;
            for(var i = 0, len = $scope.seasons.length; i < len; i++){

                console.log("/tab/tvshows-season-detail/"+ $scope.seasons[i].tvshowid + "/" + $scope.seasons[i].season);
            }
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	$scope.showEpisodes = function(tvshowid, seasonid) {
		Loader.getEpisodes(tvshowid, seasonid, function(data) {
			$scope.episodes = data.result.episodes;
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	// Get episode details
	$scope.showEpisodeDetails = function(episodeid) {
		Loader.getEpisodeDetails(episodeid, function(data) {
			$scope.episodedetails = data.result.episodedetails;
			$scope.getStreamInfo($scope.episodedetails.file);
		});
	};

	$scope.getStreamInfo = function(file) {
		var episodePath = encodeURIComponent(file);
		var streamUrl = window.base_url + '/vfs/' + episodePath;

		$scope.config = {
			sources: [{
				src: $sce.trustAsResourceUrl(streamUrl),
				type: "video/mp4"
			}],
			theme: "lib/videogular-themes-default/videogular.min.css"
		};

		return $scope.config;
	};

	$scope.playEpisode = function(file) {
		method = "Player.Open";
        file = file.replace(/\\/g, "/");
		params = '{"item":{"file":"' + file + '"}}';

		param_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"' + method + '", "params":' + params + '}';
		complete_url = window.base_url + param_url;
        console.log("%%%%%%%%%%%%%%%%%%%%%%");
        console.log(complete_url);
		$http.jsonp(complete_url, {params: {callback: 'JSON_CALLBACK', format: 'json'}})
		.success(function(data, status, headers, config) {

		})
		.error(function(data, status, headers, config) {
			alert("Cannot play this episode");
		});
	};

	// Show search input on top of list
	// ngClick on search button
	$scope.showSearch = false;
	$scope.searchBox = function() {
		$scope.showSearch = !$scope.showSearch;
	};

	// Convert episodedetails.runtime to minutes
	$scope.Math = window.Math;
	$scope.toMinutes = function(duration) {
		var minutes = Math.floor((duration/60));

		var time = minutes + ' minutes';
		return time;
	};

	// Get thumbnail for the tv show list
	$scope.getThumbnailSeries = function(thumbnailUri) {

        return window.base_url + '/image/' + encodeURIComponent(thumbnailUri);


	};

	// Get thumbnail for a season
	$scope.getThumbnailSeason = function(thumbnailUri) {
		thumbnailUri = thumbnailUri.replace("image://","").replace("jpg/","jpg");
		var thumbnailUriDecoded = decodeURIComponent(thumbnailUri);

		return thumbnailUriDecoded;
	};
});
