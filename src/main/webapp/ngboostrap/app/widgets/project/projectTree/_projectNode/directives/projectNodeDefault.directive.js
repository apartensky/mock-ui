define([], function(){
	var ProjectNodeDefaultDirective = function ProjectNodeDefaultDirective (){
		return {
			restrict: "AE",
			scope: {
				node: "="
			},			
			templateUrl: "app/widgets/project/projectTree/_projectNode/templates/projectNodeDefault.bootstrapTree.tpl.html"
		}
	} 
	ProjectNodeDefaultDirective.$inject=[];
	return ProjectNodeDefaultDirective;
});