var app = angular.module('myApp', ["ui.router"]);

app.run(function($rootScope){

    Stamplay.User.connectUser()
        .then(function(res){
            if(res.user)
                {
                    $rootScope.loggedIn = true;
                    console.log($rootScope.loggedIn);
                }
            else
                {
                    $rootScope.loggedIn = false;
                    console.log($rootScope.loggedIn);
                }
        }, function(err)
            {
                console.log("An error occured while getting current user!");
            });
})

app.config(function($stateProvider, $urlRouterProvider){

    $locationProvider.hashPrefix('');

    Stamplay.init("blogitangularjs");

    localStorage.removeItem('127.0.0.1-jwt');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })
        .state('login', {
            url : '/login',
            templateUrl : 'templates/login.html',
            controller : 'LoginCtrl'
        })
        .state('signup', {
            url : '/signup',
            templateUrl : 'templates/signup.html',
            controller : 'SignupCtrl'
        })
        .state('myblogs' , {
            url : '/myblogs',
            templateUrl : '/myblogs.html',
            controller : 'MyBlogCtrl'
        })

        $urlRouterProvider.otherwise("/");
});

app.controller('MyBlogCtrl',function($scope){


})
