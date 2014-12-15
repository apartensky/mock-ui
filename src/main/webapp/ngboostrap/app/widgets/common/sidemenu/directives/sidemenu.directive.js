define(["ng"], function(ng){
	var SideMenuDirective = function SideMenuDirective(){
		
		return {			
			restrict: "E",
			transclude: true,
			template: "<div ng-transclude><div/>",
			controller: "SideMenuVM",
			link: function(scope, elem, attr){
				scope.hello="hiiiiii";
				scope.closed=false;
				scope.test=function($event){					
					scope.closed=!scope.closed;
					console.debug("test", elem, $event, scope.closed);
				};
				scope.open=function($event){
					console.debug("OPEN!", $event);
					
					angular.element($event.target).parent().parent().toggleClass("open");
				};
			}
		};
		
	};	
	return SideMenuDirective;
});