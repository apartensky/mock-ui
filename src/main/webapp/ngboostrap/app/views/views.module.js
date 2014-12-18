define(["ng", "nguirouter",
        "./root/views.root.module",
        "./home/home.module", 
        "./dashboard/dashboard.module",
        "./project/views.project.module",
        "./import/views.import.module",
        "./dataset/views.dataset.module"], 
function(ng, ngrouter, home, dashboard, project, importMod, datasetMod){
	var module = ng.module("mui.views", ["ui.router",
	                                     "mui.views.root",
	                                     "mui.views.home",
	                                     "mui.views.dashboard",
	                                     "mui.views.project",
	                                     "mui.views.import",
	                                     datasetMod.name]);
	return module;
});