var app = angular.module('myApp', ["ui.router"]);

app.run(function($rootScope){
    Stamplay.User.currentUser()
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
    }, function(err){
        console.log("An error occured while getting the user");
    });

});

app.config(function($routeProvider, $urlRouterProvider){

    $locationProvider.hashPrefix('');

    Stamplay.init("blogitangularjs");

    localStorage.removeItem('127.0.0.1-jwt');

    $stateProvider
        .state('home', {
            url : "/home",
            templateUrl : "templates/home.html",
            controller : 'HomeCtrl'
        })

        .state('login', {
            url : "/home",
            templateUrl : "templates/home.html",
            controller : 'LoginCtrl'
        } )

        .state('signup', {
            url : "/signup",
            templateUrl : "templates/signup.html",
            controller : 'SignupCtrl'
        })

        .state('myblogs', {
            url : "/myblogs",
            templateUrl : "templates/myblogs.html",
            controller : 'MyblogsCtrl'
        });

        urlRouterProvider.otherwise("/");
})

app.controller('MyblogsCtrl', function($scope){

});

app.controller('SignupCtrl',function($scope){

    $scope.newUser = {};
    $scope.signup = function(){
        if($scope.newUser.firstName && $scope.newUser.lastName && $scope.newUser.email && $scope.newUser.password && $scope.newUser.confirmpassword)
            {
                console.log("All fields are valid");
                if ($scope.newUser.password == $scope.newUser.confirmpassword)
                    {
                        console.log("All Good lets sign up!");
                        Stamplay.User.signup($scope.newUser)
                        .then(function(response){
                            console.log(response);
                        },function(error){
                            console.log(error);
                        });
                    }
                else
                    {
                        console.log("Passwords do not match");
                    }
            }
        else
            {
                console.log("Some fields are invalid");
            }
    }
});

app.controller('HomeCtrl',function(){


});

app.controller('LoginCtrl',function($scope,$state,$rootScope,$timeout){

    $scope.login = function(){

        Stamplay.User.currentUser()
        .then(function(res){
            console.log("Logged in " + res);
            if(res.user){
              $rootScope.loggedIn = true ;
              $rootScope.displayName = res.user.firstName + "." + res.user.lastName ;
              $timeout(function(){
                $state.go( "/viewBlogs" )
                });
            }
            else{
                //proceed with login
                Stamplay.User.login($scope.user)
                .then(function(res){
                    console.log(res);
                    $rootScope.loggedIn = true;
                    $rootScope.displayName = res.user.firstName+ "." + res.user.lastName;
                    $timeout(function(){
                        $state.go("/viewblogs");
                    });
                }, function(err){
                    console.log(err);
                    $rootScope.loggedIn = false;
                })
            }
        },
        function(error){
            console.log(error);
        });
    }
});

app.controller('myCtrl',function($scope){


});