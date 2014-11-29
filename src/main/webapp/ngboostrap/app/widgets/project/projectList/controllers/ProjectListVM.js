define([], function(){
	return function(ProjectRepository, Navigator, $modal, $scope){
		var self=this;
		var projects=[];
		
		ProjectRepository.getAll().then(function(data){
			projects=data;
		});
		
		this.getProjectList=function(){
			return projects;
		};
		
		this.openProject=function(project){
			//navigate to project
			Navigator.openProject(project);
		};
		
		this.newProject=function(){
			Navigator.openProject({});
		};
		
		this.updateProject=function(project, newName){
			project.name=newName;
			console.log("updating project .. ",project);
			ProjectRepository.put(project).then(function(data){
				console.log("updated project",data);
			});
		};
		
		this.editListItem=function(project){			
			var modal=$modal.open({
				template: "<div><input type='text' ng-model='RenameProjectCtrl.newName'></div><div><a ng-click='RenameProjectCtrl.ok()'>OK</a> <a ng-click='RenameProjectCtrl.cancel()'>Cancel</a></div>",
				windowClass: "modal-vertical-centered",
				resolve: {
					project: function () {
						return project;
					}
			    },
			    controllerAs: "RenameProjectCtrl",
				controller: function($scope, $modalInstance, project){
					this.newName=project.name;
					this.project=project;
					this.ok=function(){
						$modalInstance.close(this.newName);
					}
					this.cancel=function(){
						$modalInstance.dismiss("cancel");
					}
				}
			});
			
			modal.result.then(function(msg){
				self.updateProject(project, msg);
			}, function(msg){
				//cancel - do nothing
			})
		}
		
	};	
});