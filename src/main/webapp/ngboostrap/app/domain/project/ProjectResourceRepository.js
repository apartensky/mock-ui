define(["ng"], function(ng){
	return function ProjectResourceRepository($resource){
		var root="api";
		var projectRoot=root+"/project";
		var projectEntity=projectRoot+"/:projectId"
		var source = $resource(projectEntity, {projectId: "@id"},				
				{
					getAll: {
						url: projectRoot,
						method: "GET",
						isArray: true
					},
					put: {
						url: projectEntity,
						method: "PUT"
					}
				});
		
		source.prototype.$update=function(){
			return source.put(this);
		}
		
		return {
			getAll: function(){
				return source.getAll();
			},
			get: function(id){
				return source.get({projectId: id});
			},
			put: function(project){	
					if(!project.id)
						return source.save(project);
					else
						return source.put(project);
					
			}
		}
	};
});