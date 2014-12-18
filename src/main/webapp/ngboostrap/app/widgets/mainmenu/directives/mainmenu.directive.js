define([], function(){
	var MenuDirective = function(SideMenuSrv){
		return {			
			restrict: "AE",
			replace: true,
			templateUrl: "app/widgets/mainmenu/directives/mainmenu.tpl.html", 
			link: function(scope, elm, attrs, ctrl){
				console.debug("MainMenu Link: ", scope.$state, scope.$state.current.name === "root.project");
				scope.hasSidePanel = scope.$state.current.name === "root.project";
				scope.settings={
					sidemenu: {
						shrink: false
					}
				};
				scope.$watch("settings.sidemenu.shrink", SideMenuSrv.toggle);
			}
		};
	};
	MenuDirective.$inject=["SideMenuSrv"];
	return MenuDirective;
});