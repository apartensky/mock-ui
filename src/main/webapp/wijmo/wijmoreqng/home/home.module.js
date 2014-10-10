define(['ng', './controllers/home.controller'], function(ng, HomeController){		
	return ng.module('home', [])
	.controller("HomeController", HomeController);
});