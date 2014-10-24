define([], function(){
	var DashboardMenuDirective = function(modConfig, DashbaordRepository){
		return {
			scope: {},
			restrict: "EA",
			replace: true,
			controller: "DashboardMenuCtrl",			
			templateUrl: modConfig.path+"/directives/dashboardMenu.tpl.html"
		};
	};
	console.debug("DashboardMenuDirective", DashboardMenuDirective);
	return DashboardMenuDirective;
});