define(["./ServerStorageMixin"], function(ServerStorageMixin){		
	return function(){
		function DashboardStorage(){
			this.data=[];		
		};
		ServerStorageMixin.call(DashboardStorage.prototype, function(){return this.annotationSet.meta.name}, function(id){this.annotationSet.meta.name=id;});
		return new DashboardStorage();	
	}
});