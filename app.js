var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider){

    Stamplay.init("blogit");

    $routeProvider
        .when('/',{
            templateUrl : 'templates/home.html'
        })

        .when('/login',{
            templateUrl : 'templates/login.html'
        })
})

app.controller('myCtrl', function($scope){

    $scope.firstname = "Vaibhav";
    $scope.lastname = "Bhat";
});