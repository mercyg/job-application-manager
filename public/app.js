var app = angular.module("JobApp", ["ngRoute", "Auth", "googlechart"]);

app.config(function($routeProvider){
    $routeProvider
      .when("/", {
          templateUrl: "components/home/home.html"
      })
       .when("/application",{
          templateUrl: "components/application/application.html",
          controller: "ApplicationController"
       })
       .when("/addApplication", {
          templateUrl: "components/application/addApplication.html",
          controller: "AddController"
       })

})
