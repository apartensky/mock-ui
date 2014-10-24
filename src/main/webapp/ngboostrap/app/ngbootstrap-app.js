define(["ng", "nguirouter", "uibootstrap",        
        "app/domain/domain.module",
        "app/views/views.module"], function(ng){
	"use strict";
	return ng.module("ngbootstrap-app", ["ui.bootstrap", 
	                                     "ui.router", 
	                                     "mui.domain",
	                                     "mui.views",
	                                     "mui.mainmenu"
	                                     ])
	.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise("/home");
		
		$stateProvider.state("home", {
			url: "/home",
			templateUrl: "app/views/home/templates/home.tpl.html"				
		})
		.state("dashboard", {
			url: "/dashboard/:annotationSet",
			templateUrl: "app/views/dashboard/templates/dashboard.tpl.html",
			controller: "DashboardCtrl",
			resolve: {				
				DashboardRepository: "DashboardRepository",
				dashboard: ["$stateParams", "DashboardRepository", function($stateParams, DashboardRepository){
					console.debug("resolving....", $stateParams);
					var dashboard = DashboardRepository.exists($stateParams.annotationSet.meta.getName());
					console.debug("exists", $stateParams.id, dashboard);
					if(!dashboard){
						dashboard = DashboardRepository.create($stateParams.annotationSet);
					}
					console.debug("resolve", dashboard);
					return dashboard;
				}]
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