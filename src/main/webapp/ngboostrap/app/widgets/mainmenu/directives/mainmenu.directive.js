define([], function(){
	var MenuDirective = [function(){
		return {
			scope: {},
			restrict: "AE",
			replace: true,
			templateUrl: "app/widgets/mainmenu/directives/mainmenu.tpl.html", 
			link: function(scope, elm, attrs, ctrl){
				
			}
		};
	}];
	console.debug("MenuDirective", MenuDirective);
	return MenuDirective;
});