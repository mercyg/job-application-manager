var app = angular.module("JobApp");

app.service("ProfileService", ["$http", function($http) {
    this.getProfile = function() {
        return $http.get("/api/profile")
            .then(function(response) {
                return response.data
            })
    }

    this.updateProfile = function(userId, input) {
        return $http.put("/api/profile", userId, input)
            .then(function(response) {
                return response.data;
            })
    }

}])


app.controller("ProfileController", ["$scope", "ProfileService", function($scope, ProfileService) {
    $scope.edit = true;
    (function getProfile() {
        ProfileService.getProfile()
            .then(function(response) {
                $scope.profile = response;
            })
    })();

    $scope.editProfile = function(input) {
        var userId = $scope.profile._id
        ProfileService.updateProfile(input, userId)
            .then(function(response) {
                $scope.update = response
            })
    }


}])
