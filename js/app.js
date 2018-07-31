var myapp = angular.module("loginApp" , ["ngRoute","firebase"]);

myapp.config(["$routeProvider" , "$locationProvider" , function($routeProvider , $locationProvider){
    $routeProvider.when("/login" , {
        title:"login",
        templateUrl : "views/login.html",
        controller : "registerCtr"
    }).
    when("/register" , {
        title:"register",
        templateUrl : "views/register.html",
        controller : "registerCtr"
    }).
    when("/success" , {
        title:"success",
        templateUrl : "views/success.html",
        controller : "SuccessCtr"
    }).
    when("/home" , {
        title:"welcome to login application ",
        templateUrl : "views/home.html"
        // controller : "homeCtr"
    }).
    when("/about" , {
        title:"about",
        templateUrl : "views/about.html",
        // controller : "SuccessCtr"
    }).
    when("/contact" , {
        title:"contact",
        templateUrl : "views/contact.html",
        // controller : "SuccessCtr"
    }).otherwise({
        redirectTo:"/login"
    });

}])