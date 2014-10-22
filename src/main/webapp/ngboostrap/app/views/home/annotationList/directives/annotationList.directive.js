define(["ng"], function(ng){
	var AnnotationListDirective = ["AnnotationSetRepository", function(AnnotationSetRepository){
		return {
			scope: {},
			restrict: "AE",
//			template:"<div>Annotation List</div>",
			templateUrl:"app/views/home/annotationList/directives/annotationList.tpl.html",
			link: function(scope, attr, elems, ctrl){
				console.debug("link AnnotationListDirective");
				scope.vm={
						all: AnnotationSetRepository.getAll()				
				};
			}
		};
	}];
	return AnnotationListDirective;
});