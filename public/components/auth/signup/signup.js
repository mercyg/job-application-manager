var app = angular.module("Auth");

app.controller("SignupController", ["$scope", "$location", "UserService", function($scope, $location, UserService) {
    $scope.passwordMessage = "";
    $scope.submitForm = function(isValid) {
        if ($scope.userForm.$valid) {
            alert("Sign up completed")
        }
    }
    $scope.signup = function(user) {
        if ($scope.user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Password do not match";
        } else {
            console.log(user);
            UserService.signup(user)
                .then(function(response) {
                    $location.path("/login");
                }, function(response) {
                    alert("There was a problem" + response.data.message);
                })
        }
    }

}])
