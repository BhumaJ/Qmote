/**
 * Created by Admin on 08-Feb-16.
 */

app.controller('RemoteCtrl' , function($scope, $http , Sounder, Manager , Requester){

    $scope.request = function (input) {
        console.log("input " + input)
        switch (input) {

            case "fullscreen" :
                Requester.requestGUI(input);
                break;
            case "shutdown" :
                Requester.requestApplication(input, 0);
                break;
            case "mute" :
                Requester.requestApplication(input, 0);
                break;
            case "unmute" :
                Requester.requestApplication(input, 0);
                break;
            case "volumeUp" :
                Requester.requestApplication(input, $scope.volume);
                break;
            case "volumeDown" :
                Requester.requestApplication(input, $scope.volume);
                break;
            default :
                Requester.requestInput(input);
                break;
        }
    };

    $scope.requestMute = function () {
        method = "Application.SetMute";
        params = '{"mute":"toggle"}';
        Requester.sendRequest($http, method, params);
    };

});