define(["./ServerStorageMixin"], function(ServerStorageMixin){		
	return function(DatasetStorage, AnalysisStorage, DashboardStorage){
		function ProjectStorage(DatasetStorage, AnalysisStorage, DashboardStorage){
			this.data=[];		
		};
		ServerStorageMixin.call(ProjectStorage.prototype);
		var projectRepo = new ProjectStorage();
		projectRepo.datasets = DatasetStorage;
		projectRepo.analyses = AnalysisStorage;
		projectRepo.dashboards = DashboardStorage;
		return projectRepo;
	}
});