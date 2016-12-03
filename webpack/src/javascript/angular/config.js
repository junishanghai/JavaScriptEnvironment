let angModule = require('./module');

angModule.angApp.config(["$httpProvider", "$routeProvider", "$logProvider", function($httpProvider, $routeProvider, $logProvider) {
    let $cookies;
    angular.injector(["ngCookies"]).invoke(["$cookies", function(_$cookies_) {
        $cookies = _$cookies_;
    }]);

    // $log.debug の表示設定
    $logProvider.debugEnabled(false);

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json;charset=utf-8";

    $httpProvider.interceptors.push(function ($q, $log) {
        return {
            "request":  function(config) {
                $log.debug("on request true", config);
                return config;
            },
            "requestError": function(rejection) {
                $log.debug("on request error", rejection);
                return $q.reject(rejection);
            }
        };
    });
}]);
