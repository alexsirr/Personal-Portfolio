var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function($stateProvider) {
    $stateProvider.state("home", {
        url: "/",
        templateUrl: "templates/landing.html",
        controller: "HomeController"
    }).state("about", {
        url: "/about",
        templateUrl: "templates/about.html",
        controller: "AboutController"
    }).state("contact", {
        url: "/contact",
        templateUrl: "templates/contact.html",
        controller: "ContactController"
    });
});

// Home page controller
myApp.controller("HomeController", function($scope, $http) {
	$http.get('./data/data.json').success(function(data) {
		$scope.data = data;
	});
})
// About page controller
.controller("AboutController", function($scope) {
    
})
// Conact controller
.controller("ContactController", function($scope) {

})
