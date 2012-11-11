var Discuss = angular.module('discuss', 
                             ['discuss']);

Discuss.config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider,
              $locationProvider) {
        var route = $routeProvider,
            locationProvider = $locationProvider;
        
        route.when('/', {
            templateUrl: '/partials/discuss/index',
            controller: index
        });

        route.otherwise('/');

        locationProvider.html5Mode(true);
    }
]);
