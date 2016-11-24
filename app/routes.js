'use strict';
var app = angular.module("myApp", ['ngRoute']).config(function($routeProvider, $locationProvider) {  

	$routeProvider.when('/home', {
		templateUrl : 'views/home.html',
		controller   : "HomeCtrl" 
	}).when('/about_us', {
		templateUrl : 'views/about_us.html', 
		controller   : "AboutUsCtrl"
	}).when('/career', {
		templateUrl : 'views/career.html',
		controller   : "CareerCtrl" 
	}).when('/products', {
		templateUrl : 'views/products.html',
		controller   : "ProductsCtrl" 
	}).when('/index', {
		templateUrl : 'views/angular_concepts.html',
		controller   : "HomeCtrl" 
	}).otherwise('/', {
		templateUrl : 'views/home.html',
		controller   : "HomeCtrl"
	});    
	 
	
});