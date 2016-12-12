var app = angular.module("JobApp", ["ngRoute", "Auth"]);

app.config(function($routeProvider){
    $routeProvider
      .when("/", {
          templateUrl: "components/home/home.html"

      })
       .when("/application",{
          templateUrl: "components/application/application.html",
          controller: "AppController"
       })

})
