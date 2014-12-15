define(["ng", "./directives/sidemenu.directive", "./controllers/SideMenuVM"], 
function(ng, SidemenuDirective, SideMenuVM){
	var module=ng.module("mui.widgets.common.sideMenu", []);
	module.directive("sidemenu", SidemenuDirective);	
	module.controller("SideMenuVM", SideMenuVM);	
	return module;
});