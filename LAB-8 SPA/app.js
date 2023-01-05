var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Travel Reservation Software is online Travel Booking Software that configures travel data for hotels, flights, package, tour, and car-rental services in Travel Reservation System to provide flights, hotels, tour booking for customers';
});

app.controller('BlogController', function($scope) {
  $scope.message = 'Travel Reservation Software provides inventory and rate in real-time data to customer. Also it allow to book hotels in different geographical locations';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'I created  this customized Travel Reservation Software for travel agent which give adaptable reservation and inventory management for flights, hotels, cars in real time';
});
