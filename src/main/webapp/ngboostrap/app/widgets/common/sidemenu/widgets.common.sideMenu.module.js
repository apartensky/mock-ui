define(["ng", "./directives/sidemenu.directive", "./controllers/SideMenuVM", "./services/sidemenuSrvc"], 
function(ng, SidemenuDirective, SideMenuVM, SideMenuSrvc){
	var module=ng.module("mui.widgets.common.sideMenu", []);
	module.directive("sidemenu", SidemenuDirective);	
	module.controller("SideMenuVM", SideMenuVM);	
	module.service("SideMenuSrv", SideMenuSrvc);
	return module;
});