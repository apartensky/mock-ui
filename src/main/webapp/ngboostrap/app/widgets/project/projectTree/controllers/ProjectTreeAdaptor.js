define(["lodash", "app/utils/utils"], function(_,utils){
	var ProjectTreeAdaptor = function ProjectTreeAdaptor(ProjectTreeSchema){
		
		return function(project){
			var tree={name: project.name, nodes:[]};				
			
			var tree=utils.buildNodeTree(project, ProjectTreeSchema);
			console.debug("ProjectTREE", tree);
			return tree;
		};
	}
	
	ProjectTreeAdaptor.$inject=["ProjectTreeSchema"];
	return ProjectTreeAdaptor;
});