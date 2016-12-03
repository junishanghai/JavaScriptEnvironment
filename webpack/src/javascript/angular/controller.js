let angModule = require('./module');
require('./config');
require('./factory');
require('./filter');

angModule.angApp.controller("webpackEnvironmentCtrl", ['$scope', "$log", 'DemoFactory', 'HttpResponseFactory', function($scope, $log, DemoFactory, HttpResponseFactory) {
    $scope.init = function() {
        $log.debug('Webpack Environment!!!!!!!!!!!');
        $scope.demo = DemoFactory.demo();
    };

}]);
