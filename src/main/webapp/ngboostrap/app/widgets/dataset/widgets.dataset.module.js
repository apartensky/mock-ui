define(["ng", "./datasetList/widgets.datasetlist.module", 
        "./datasetLabel/widgets.datasetLabel.module"], 
function(ng){	
	var module = ng.module("mui.widgets.dataset", ["mui.widgets.datasetlist", 
	                                               "mui.widgets.datasetlabel"
	                                               ]);			
	return module;
});