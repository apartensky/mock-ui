define(["ng", "nguirouter",
        "./root/views.root.module",
        "./home/home.module", 
        "./dashboard/dashboard.module",
        "./project/views.project.module",
        "./import/views.import.module",
        "./dataset/views.dataset.module",
        "./issues/views.issues.module"], 
function(ng, ngrouter, root, home, dashboard, project, importMod, datasetMod, issuesMod){
	var module = ng.module("mui.views", ["ui.router",
	                                     "mui.views.root",
	                                     "mui.views.home",
	                                     "mui.views.dashboard",
	                                     "mui.views.project",
	                                     "mui.views.import",
	                                     datasetMod.name,
	                                     issuesMod.name]);	
	return module;
});