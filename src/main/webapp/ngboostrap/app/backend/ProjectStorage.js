define(["./ServerStorageMixin"], function(ServerStorageMixin){		
	return function(){
		function ProjectStorage(){
			this.data=[];		
		};
		ServerStorageMixin.call(ProjectStorage.prototype);
		return new ProjectStorage();	
	}
});