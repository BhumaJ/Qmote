/**
 * Created by Bhuma on 04-Feb-16.
 */
app.controller('discover', function ($scope, $http , $state) {


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

    $scope.loginData = {};

    $scope.doLogin = function (user) {

        console.log(user.name)
        console.log(user.addresses[0])
        console.log(user.port)
        var ip = user.addresses[0];
        var port = user.port;

        window.base_url = 'http://' + ip + ':' + port;
        ping_url = '/jsonrpc?request={"jsonrpc":"2.0","method":"JSONRPC.Ping"}&callback=JSON_CALLBACK';
        $http.jsonp(window.base_url + ping_url)
            .success(function (data, status) {
                connected = true;
                errCon = false;
                alert("success")
                $state.go('app.remote');
            })
            .error(function (data, status) {
                connected = false;
                errCon = true;
                bouton = "Connect";
                alert("Error " + status);
                console.log(window.base_url);
            });
    };

})