define([], function(){
	var MenuDirective = [function(){
		return {			
			restrict: "AE",
			replace: true,
			templateUrl: "app/widgets/mainmenu/directives/mainmenu.tpl.html", 
			link: function(scope, elm, attrs, ctrl){
				console.debug("MainMenu Link: ", scope.$state, scope.$state.current.name === "root.project");
				scope.hasSidePanel = scope.$state.current.name === "root.project";
			}
		};
	}];
	console.debug("MenuDirective", MenuDirective);
	return MenuDirective;
});