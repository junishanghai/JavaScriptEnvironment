let angModule = require('./module');
require('./config');
require('./factory');
require('./filter');

angModule.billApp.controller("webpackTestCtrl", ['$scope', 'DemoFactory', 'HttpResponseFactory', function($scope, DemoFactory, HttpResponseFactory) {
    $scope.init = function() {

    };

}]);
