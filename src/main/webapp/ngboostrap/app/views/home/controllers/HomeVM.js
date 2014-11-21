define(["ng"], function(ng){
	return function HomeVM (ProjectRepository){
		var self=this;
		this.projectName="aaa";
		this.selectedProject={name: "[none]"};
		this.createProject=function(){
			console.debug("in createProject");
			ProjectRepository.put({name: self.projectName});
		};
		this.showProject=function(){
			ProjectRepository.get(this.projectName).then(function(data){
				console.debug("showProject before", self.selectedProject, data);
				self.selectedProject=data;
				console.debug("showProject after", self.selectedProject, data);
			});
		};
	}
});