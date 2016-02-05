/**
 * Created by Bhuma on 04-Feb-16.
 */
app.controller('Discover', function ($scope, $http) {

    $scope.scanAuto = function () {
        var temp_users = {};
        cordova.plugins.zeroconf.watch('_http._tcp.local.', function (result) {
            var action = result.action;
            var service = result.service;
            $scope.users = [];
            if (action == 'added') {
                temp_users[service.name] = service;
            } else {
                delete temp_users[service.name];
            }

            for (var i in temp_users) {
                $scope.users.push(temp_users[i]);
            }
        });
    }

})