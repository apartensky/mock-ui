define(["ng",        
        "nguirouter", "uibootstrap",        
        "app/domain/domain.module",
        "app/views/views.module",
        "app/components/components.module"        
        ], function(ng){
	"use strict";
	return ng.module("ngbootstrap-app", ["ui.bootstrap", 
	                                     "ui.router", 
	                                     "mui.domain",
	                                     "mui.views",
	                                     "mui.components"
	                                     ])
	.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise("/home");
		
		$stateProvider.state("home", {
			url: "/home",
			templateUrl: "app/views/home/templates/home.tpl.html"				
		})		
		.state("about", {
			url: "/about",
			templateUrl: "app/views/about/templates/about.tpl.html"
		})
		.state("contact", {
			url: "/contact",
			templateUrl: "app/views/contact/templates/contact.tpl.html"
		});
	}]);
});