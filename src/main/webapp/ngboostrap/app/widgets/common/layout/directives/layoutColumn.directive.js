define(["ng"], function(ng){
	var LayoutColumnDirective = function($rootScope){
		
		return {
			restrict: "A",			
//			scope: true,
//			scope: {},
			link: function(scope, elem, attrs){
				
				var isClosed=false;
				
				scope.layoutColumn={
					hide: function(){
						console.debug("HIDE", elem);
						isClosed=true;
					},
					show: function(){
						isClosed=true;
					},
					toggle: function(position){
//						isClosed=!isClosed;
//						if(isClosed){
//							$rootScope.$broadcast("ui:layoutColumn:hidden", {position: attrs.layoutColumn});
//						}else{
//							$rootScope.$broadcast("ui:layoutColumn:shown", {position: attrs.layoutColumn});
//						}		
						console.debug("layoutColumn.toggle", attrs.layoutColumn, isClosed);
						$rootScope.$broadcast("ui:layoutColumn:toggle", {position: attrs.layoutColumn});						
					},
					isClosed: function(){
						console.debug("layoutColumn.isClosed", attrs.layoutColumn, isClosed);
						return isClosed;
					}
				};
				
				scope.$on("ui:layoutColumn:toggle", function(event, args){					
//					if(args.position===attrs.layoutColumn){
//						scope.layoutColumn.toggle();
						isClosed=!isClosed;
						console.debug("ui:layoutColumn:toggle", isClosed);
//						isClosed=false;
//					}
				});
			}
		};
	};
	
	LayoutColumnDirective.$inject=["$rootScope"]
	return LayoutColumnDirective;  
});