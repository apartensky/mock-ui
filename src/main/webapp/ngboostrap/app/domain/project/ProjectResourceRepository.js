define(["ng", "lodash"], function(ng, _){
	return function ProjectResourceRepository($resource){
		var root="api";
		var projectRoot=root+"/project";
		var projectEntity=projectRoot+"/:projectId"
		var projects=[];
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
			updateSource=this;
			return source.put(updateSource
					, function(project){
				_.map(projects, function(cur){
					if(cur.id===project.id)
						if(cur!==updateSource)
							_.extend(cur, project);
				});
			}
			);
		}
		function _getAll(response){
			while(projects.length>0){
				projects.pop();
			}
			_.map(response, function(item){
				projects.push(item);
			})
			console.log("Project.getAll success", projects);
		}
		
		return {
			getAll: function(){
				source.getAll(_getAll, function(response){
					console.error("Project.getAll failed", response);
				});
				return projects;
			},
			get: function(id){
				var exists = _.filter(projects, function(project){
					return project.id==id;
				});
				if(exists.length>0)
					return exists[0];
				
				return source.get({projectId: id});
			},
			put: function(project){	
					if(!project.id){
						var newProject = source.save(project);
						projects.push(newProject);
						return newProject;
					}else{						
						return source.put(project, function(response){
							_.map(projects, function(cur){
								if(cur.id===project.id)
									cur.name=project.name;
							});
						});
					}
					
			}
		}
	};
});