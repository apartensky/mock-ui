define(["ng", "nguirouter", "./home/home.module", "./dashboard/dashboard.module"], 
function(ng){
	var module = ng.module("mui.views", ["ui.router","mui.views.home","mui.views.dashboard"]);
	return module;
});