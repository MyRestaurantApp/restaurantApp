
angular.module("MyApp", ["ngRoute", "ngStorage", "ui.bootstrap"])
.config(function ($routeProvider) {
    $routeProvider
        .when("/family", {
            templateUrl: 'components/angularRoutes/family/familyHome.html',
            controller: 'familyController'
        })
        .when("/green", {
            templateUrl: 'components/angularRoutes/green/greenHome.html',
            controller: 'greenController'
        })
        .when("/greener", {
            templateUrl: 'components/angularRoutes/greener/greenerHome.html',
            controller: 'greenerController'
        })
        .when("/unicorn", {
            templateUrl: 'components/angularRoutes/unicorn/unicornHome.html',
            controller: 'unicornController'
        })
        .when("/delivery", {
            templateUrl: 'components/angularRoutes/delivery/deliveryHome.html',
            controller: 'deliveryController'
        })
        .when("/recipes", {
            templateUrl: 'components/angularRoutes/recipes/recipeHome.html',
            controller: 'recipesController'
        })
        .otherwise({
            redirectTo: './family'
        });
});