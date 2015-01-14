define(["ng", "./directives/layout.directive", "./directives/layoutColumn.directive", "./controllers/LayoutVM", "./services/layoutSrvc"], 
function(ng, LayoutDirective, LayoutColumnDirective, LayoutVM, LayoutSrvc){
	var module=ng.module("mui.widgets.common.layout", []);
	module.directive("layout", LayoutDirective);
	module.directive("layoutColumn", LayoutColumnDirective);
	module.controller("LayoutVM", LayoutVM);	
	module.service("LayoutSrv", LayoutSrvc);
	return module;
});