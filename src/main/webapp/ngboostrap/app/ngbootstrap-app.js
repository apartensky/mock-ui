define(["ng", "nguirouter", "uibootstrap",        
        "app/domain/domain.module",
        "app/views/views.module",
        "app/components/components.module"], function(ng){
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
		.state("dashboard", {
			url: "/dashboard/:spec",
			templateUrl: "app/views/dashboard/templates/dashboard.tpl.html",
			controller: "DashboardCtrl",
			resolve: {				
				DashboardRepository: "DashboardRepository",
				dashboard: ["$stateParams", "DashboardRepository", function($stateParams, DashboardRepository){
					console.debug("resolving....", $stateParams);
					var dashboard;
					if($stateParams.spec.annotationSet){
						dashboard = DashboardRepository.exists($stateParams.spec.annotationSet.meta.getName());
						if(!dashboard){
							dashboard = DashboardRepository.create($stateParams.spec.annotationSet);
						}
					}else if($stateParams.spec.dashboardName){
						dashboard = DashboardRepository.exists($stateParams.spec.dashboardName);
					}
					
					if(!dashboard){
						console.error("Cannot resolve dashboard from spec", spec);
					}
						
					console.debug("exists", $stateParams, dashboard);									
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