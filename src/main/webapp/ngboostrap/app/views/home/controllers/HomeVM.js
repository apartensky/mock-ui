define(["ng"], function(ng){
	return function HomeVM (ProjectRepository){
		this.projectName="aaa";
		this.createProject=function(){
			console.debug("in createProject");
			ProjectRepository.put({name: this.projectName});
		};
	}
});