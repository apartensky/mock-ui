define(["ng", "nguirouter", "uibootstrap",        
        "app/domain/domain.module",
        "app/views/views.module"], function(ng){
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
			url: "/dashboard/:id",
			templateUrl: "app/views/dashboard/templates/dashboard.tpl.html",
			controller: "DashboardCtrl",
			resolve: {
				DashboardRepository: "DashboardRepository",
				"dashboard": function($stateParams, DashboardRepository){
					console.debug("resolving....", DashboardRepository);
//					var dashboard = DashboardRepository.exists($stateParams.id);
//					console.debug("exists", $stateParams.id, dashboard);
//					if(!dashboard){
						dashboard = DashboardRepository.create($stateParams.id);
//					}
					console.debug("resolve", dashboard);
					return dashboard;
				}
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