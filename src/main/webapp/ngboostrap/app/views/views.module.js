define(["ng", "nguirouter", 
        "./home/home.module", 
        "./dashboard/dashboard.module",
        "./project/views.project.module"], 
function(ng){
	var module = ng.module("mui.views", ["ui.router",
	                                     "mui.views.home",
	                                     "mui.views.dashboard",
	                                     "mui.views.project"]);
	return module;
});