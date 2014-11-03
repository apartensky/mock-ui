define(["ng",
        "app/resolvers/DashboardResolver",
        "nguirouter", "uibootstrap",        
        "app/domain/domain.module",
        "app/views/views.module",
        "app/components/components.module",
        "app/resolvers/resolvers.module"
        ], function(ng, DashboardResolver){
	"use strict";
	return ng.module("ngbootstrap-app", ["ui.bootstrap", 
	                                     "ui.router", 
	                                     "mui.domain",
	                                     "mui.views",
	                                     "mui.components",
	                                     "mui.resolvers"
	                                     ])
	.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise("/home");
		
		$stateProvider.state("home", {
			url: "/home",
			templateUrl: "app/views/home/templates/home.tpl.html"				
		})
		.state("dashboard", {
			url: "/dashboard/:spec",
			templateUrl: "app/views/dashboard/templates/dashboard.tpl.html",
			controller: "DashboardCtrl",
			resolve: {				
				dashboard: DashboardResolver
//				dashboard: ["DashboardResolver", function(DashboardResolver){
//					return DashboardResolver.resolve();
//				}]
			}
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