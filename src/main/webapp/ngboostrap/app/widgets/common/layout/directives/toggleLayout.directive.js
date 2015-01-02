define(["ng"], function(ng){
	var ToggleLayoutDirective = function(){
		return {
			restrict: "EA",
			scope: {
				toggleLayout: "@"
			},						
//			template: "<button class='navbar-toggle' ng-click='toggle()'>" +
//					"<span class='icon-bar'></span><span class='icon-bar'></span><span class='icon-bar'></span>" +
//				    "</button>",
			template: "<button ng-click='toggle()'>"
//				+ "<span class='glyphicon glyphicon-list' aria-hidden='true'></span>"
				+ "<i class=\"fa fa-bars\"></i>"
				+ "</button>",
//			compile: function(tElm,tAttrs){
//			return function(scope, elem, attr){
//				var exp = $parse('layoutSrvc.toggle(direction)');
//				elem.bind('click', function(){
//					console.debug("CLIK!!! toggle 2");
//					exp(scope, {layoutSrvc: layoutSrvc, direction: scope.toggleLayout});
//				});			
//			}
//		}
			link: function(scope, elem, attr){
				scope.test=function(){
					console.debug("CLIK!!! toggle 1");
					layoutSrvc.toggle(attr.toggleLayout);
				}
//				elem.bind('click', function(){
//					console.debug("CLIK!!! toggle ");
//					layoutSrvc.toggle(attr.toggleLayout);
//				});			
			}
		};
	};
	ToggleLayoutDirective.$inject=[];
	return ToggleLayoutDirective;
});