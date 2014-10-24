define(["ng", "./controllers/DashboardMenuCtrl", "./directives/dashboardmenu.directive", "app/domain/dashboard/dashboard.module"],
function(ng, DashboardMenuCtrl, DashboardMenuDirective){	
	var module = ng.module("mui.components.dashboard", ["ui.router", "mui.dashboard"]);
	
	var modConfigName=module.name+".config";
	module.constant(modConfigName, {
		path: "app/components/dashboardmenu"
	})
	.controller("DashboardMenuCtrl", ["$scope", "DashboardRepository", DashboardMenuCtrl])
	.directive("dashboardMenu", [modConfigName, DashboardMenuDirective]);
	return module;
});