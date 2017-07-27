var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');

    Stamplay.init("blogitangularjs");

    localStorage.removeItem('127.0.0.1-jwt');

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

app.controller('LoginCtrl',function($scope){

    $scope.login = function(){

        Stamplay.User.currentUser()
        .then(function(res){
            console.log("Logged in " + res);
            if(res.user){
              $timeout(function(){
                $location.path( "/viewBlogs" )
                });
            }
            else{
                //proceed with login
            }
        },
        function(error){
            console.log(error);
        });
    }
});

app.controller('myCtrl',function($scope){


});