define(["ng", "nguirouter", "uibootstrap", 
        "app/views/home/home.module",
        "app/domain/domain.module"], function(ng){
	return ng.module("ngbootstrap-app", ["ui.bootstrap", 
	                                     "ui.router", 
	                                     "mui.domain",
	                                     "mui.mainmenu",
	                                     "mui.home"])
	.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise("/home");
		
		$stateProvider.state("home", {
			url: "/home",
			templateUrl: "app/views/home/templates/home.tpl.html"				
		})
		$stateProvider.state("dashboard", {
			url: "/dashboard",
			templateUrl: "app/views/dashboard/templates/dashboard.tpl.html"				
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