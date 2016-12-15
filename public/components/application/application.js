var app = angular.module("JobApp");

app.service("ApplicationService", ["$http", function($http){
      this.getApplication = function(){
         return $http.get("/api/application")
          .then(function(response){
             return response.data;
          }, function(response){
             console.log("Error" + response.data + " : " + response.statusText)
          })
       }

       this.countOnSite = function(){
          return $http.get("/api/application/onsitecount")
            .then(function(response){
               return response.data;
            })
       }

      this.countChallenge =  function(){
          return $http.get("/api/application/codingchallege")
              .then(function(response){
                  return response.data;
              })
      }

      this.countTechnical = function(){
          return $http.get("/api/application/technical")
            .then(function(response){
                return response.data;
            })
      }

      this.applied = function(){
           return $http.get("/api/application/applied")
              .then(function(response){
                   return response.data;
              })
      }
}]);

app.controller("ApplicationController", ["$scope", "ApplicationService",function($scope, ApplicationService){
         (function getApplication(){
             ApplicationService.getApplication()
                .then(function(application){
                    $scope.application = application
                })
         })();



         $scope.myChartObject = {};

    $scope.myChartObject.type = "BarChart";
 (function getOnSite(){
   ApplicationService.countOnSite()
       .then(function(response){
           $scope.count = response.count;
          $scope.onsite[1].v = $scope.count

       })
 })();


 (function getChallege(){
   ApplicationService.countChallenge()
       .then(function(response){
           $scope.count = response.count;
          $scope.codingchallege[1].v = $scope.count

       })
 })();

 (function getTechnical(){
   ApplicationService.countTechnical()
       .then(function(response){
           $scope.count = response.count;
          $scope.technicalinterview[1].v = $scope.count

       })
 })();

    (function getApplied(){
      ApplicationService.applied()
          .then(function(response){
            $scope.count = response.count;
            $scope.applied[1].v = $scope.count;
          })
    })();


    $scope.applied = [
      {v: "Applied"},
      {v: $scope.count}
    ]

    $scope.onsite = [
        {v: "Onsite"},
        {v: $scope.count}
    ];
    $scope.codingchallege = [
      {v: "CodingChallege"},
      {v: $scope.count}
    ];

    $scope.technicalinterview = [
      {v: "Technical Interview"},
      {v: $scope.count}
    ]



    $scope.myChartObject.data = {

      "cols": [
        {id: "t", label: "Topping", type: "string"},
        {id: "s", label: "", type: "number"}
    ], "rows": [
        {c: $scope.applied},
        {c: $scope.onsite},
        {c: $scope.codingchallege},
        {c: $scope.technicalinterview},

    ]};

    $scope.myChartObject.options = {
        'title': 'My Application Status'
    };


}]);
