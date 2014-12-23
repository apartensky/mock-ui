define(["ng"], function(ng){
	var PanelDirective = function PanelDirective(PanelSrv){
		
		return {			
			restrict: "E",
			transclude: true,
			template: "<div ng-class='{shrink: settings.panel.shrink}' ng-mouseleave='shrink($event)' ng-mouseenter=\'open($event)\' ng-transclude><div/>",
			controller: "PanelVM",
			link: function(scope, elem, attr){
				scope.hello="hiiiiii";
				scope.closed=false;
				scope.test=function($event){					
					scope.closed=!scope.closed;
					console.debug("test", elem, $event, scope.closed);
				};
				
				scope.shrink=function($event){
//					console.debug("shrink!", angular.element(elem).find("accorion"));					
					if(PanelSrv.isShrink()){
						angular.element($event.target).closest('#panel-container').addClass("shrink");						
						var openPanels=angular.element(elem).find(".panel-collapse.in");
//						console.debug("WILL collapse", openPanels);
						if(openPanels.length>0){
							openPanels.scope().isOpen=false;							
						}
					}
				};
				
				scope.open=function($event){
					angular.element($event.target).parent().parent().toggleClass("open");
					
					var targetPanel = angular.element($event.target).closest('.panel').find('.panel-collapse');
					if(PanelSrv.isShrink()){
//						console.debug("SHIRNK - OPEN!", elem, $event.target, targetPanel);
//						targetPanel.scope().isOpen=true;											
						angular.element($event.target).closest('#panel-container').removeClass("shrink");
					}
				};
//				webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionend 
				angular.element(elem).on("transitionend", function($event){							
//					console.debug("Trans ENDED", $event);
//					targetPanel.scope().isOpen=true;							
//					angular.element(elem).unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
				});	
				
			}
		};
	};	
	
	PanelDirective.$inject=["PanelSrv"];
	return PanelDirective;
});