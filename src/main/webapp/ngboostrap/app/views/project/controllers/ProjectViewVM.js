define(["ng"], function(ng){
	return function ProjectViewVM($scope, $stateParams, project){
		var project=project;
		console.debug("projectViewVM: ", project);
		this.getProjectName=function(){
			return project.name;
		};
		this.getProject=function(){
			return project;
		};
		
		this.toggelColumn=function(){
			
		};
		
		this.tree = {
			folders : [ {
				name : 'Folder 1',
				files : [ {
					name : 'File 1.jpg'
				}, {
					name : 'File 2.png'
				} ],
				folders : [ {
					name : 'Subfolder 1',
					files : [ {
						name : 'Subfile 1'
					} ]
				}, {
					name : 'Subfolder 2'
				}, {
					name : 'Subfolder 3'
				} ]
			}, {
				name : 'Folder 2'
			} ]
		};
		
		this.options = {
			onNodeSelect: function (node, breadcrums) {
				$scope.breadcrums = breadcrums;
			}
		}
	};
});