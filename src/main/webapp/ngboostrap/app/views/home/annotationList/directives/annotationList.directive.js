define(["ng"], function(ng){
	var AnnotationListDirective = 
		["AnnotationSetRepository",
		 "DashboardRepository",
		 function(AnnotationSetRepository, DashboardRepository){
			
		return {
			scope: {},
			restrict: "AE",
//			template:"<div>Annotation List</div>",
			templateUrl:"app/views/home/annotationList/directives/annotationListTable.tpl.html",
			link: function(scope, attr, elems, ctrl){
				console.debug("link AnnotationListDirective");
				scope.vm={
						all: AnnotationSetRepository.getAll(),
						dashs: DashboardRepository.getAll(),
						addDash: function(ann){
							DashboardRepository.create(ann);
							console.debug("DashboardRepository.getAll()", DashboardRepository.getAll());
						}
				};
			}
		};
	}];
	return AnnotationListDirective;
});