define(["ng", "./controllers/DashboardCtrl", "app/domain/dashboard/dashboard.module", "nguirouter"], function(ng, DashboardCtrl){
	var module = ng.module("mui.views.dashboard", ["ui.router", "mui.dashboard"]);
	module.controller("DashboardCtrl", ["$scope", "$stateParams", "dashboard", DashboardCtrl]);
	return module;
});