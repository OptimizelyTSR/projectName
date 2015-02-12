/** 
* Main AngularJS Web Application 
*/ 
var app = angular.module('onboardingWebApp', [ 'ngRoute' ]); 


/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

  // Home
    .when("/", {templateUrl: "partials/kingsLanding.html", controller: "PageCtrl"})
    
  // Pages
    .when("/winterfell", {templateUrl: "partials/winterfell.html", controller: "PageCtrl"})
    .when("/essos", {templateUrl: "partials/essos.html", controller: "PageCtrl"})
  
  //Item pages
    .when("/items", {templateUrl: "item_pages/kings_landing_items.html", controller: "PageCtrl"})
    .when("/winterfell/items", {templateUrl: "item_pages/winterfell_items.html", controller: "PageCtrl"})
    .when("/essos/items", {templateUrl: "item_pages/essos_items.html", controller: "PageCtrl"})

  // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all Category Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
  
  
});