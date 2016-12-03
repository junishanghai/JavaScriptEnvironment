let angModule = require('./module');

angModule.angApp.factory("DemoFactory", function() {

    let factory = {};

    factory.demo = function (responseBody) {
        return 'Demo Factory';
    };

    return factory;
});

angModule.angApp.factory("HttpResponseFactory", ["$http", "$log", function ($http, $log) {
    let factory = {};

    factory.httpGet = function(endpoint, successFunc, errorFunc) {
        $http({
            method: "GET",
            url: endpoint
        }).then(function (response) {
            $log.debug(response);
            successFunc(response);
        }, function (response) {
            $log.debug(response);
            errorFunc(response);
        });
    };

    return factory;
}]);
