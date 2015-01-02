define(["ng", "./directives/layout.directive", "./controllers/LayoutVM", "./services/layoutSrvc"], 
function(ng, LayoutDirective, LayoutVM, LayoutSrvc){
	var module=ng.module("mui.widgets.common.sideMenu", []);
	module.directive("layout", LayoutDirective);	
	module.controller("LayoutVM", LayoutVM);	
	module.service("LayoutSrv", LayoutSrvc);
	return module;
});