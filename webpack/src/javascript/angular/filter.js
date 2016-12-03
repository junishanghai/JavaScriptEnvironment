let angModule = require('./module');

angModule.angApp.filter('customFilter', ['$filter', function ($filter) {
   return function (num) {
       if (num != null) {
           if (num >= 0) {
               return $filter('number')(num);
           }
       }
       return "-";
   }
}]);
