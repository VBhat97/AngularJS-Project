var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');

    Stamplay.init("blogit");

    $routeProvider
        .when('/',{
            templateUrl : 'templates/home.html',
            controller : "HomeCtrl"
        })

        .when('/login',{
            templateUrl : 'templates/login.html',
            controller : "LoginCtrl"
        })

        .when('/signup',{
            templateUrl : 'templates/signup.html',
            controller : "SignupCtrl"
        })
})

app.controller('SignupCtrl',function(){


});

app.controller('HomeCtrl',function(){


});

app.controller('LoginCtrl',function(){


});

app.controller('myCtrl',function($scope){


});