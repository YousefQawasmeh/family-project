var app = angular.module("myApp", []);
app.directive("registrationForm", function() {
    return {
        templateUrl: 'components/registration-components.html'
    };
});