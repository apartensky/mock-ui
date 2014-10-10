define(['ng', 'app', './controllers/home.controller'], function(ng, app, HomeController){		
	var module = ng.module('home', [])
	.controller("HomeController", HomeController);	
	
	app.requires.push(module.name);
});