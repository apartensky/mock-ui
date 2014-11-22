define([], function(){
	
	return function($httpBackend, AnnotationStorage, DashboardStorage, ProjectStorage){
		return function(){
			try{
				$httpBackend.when("GET", /app\//).passThrough();
				$httpBackend.when("GET", /vendor\//).passThrough();
			}catch(e){
				console.log("Cannot define passThrough endpoints. Are you using the right version of $httpBackend service?" +
						"For unit testing use the ngMocks module, for backendless development use ngMocksE2E");
			}
			
		    $httpBackend.whenGET('api/annotations').respond(function(method, url, data) {
		        var data = AnnotationStorage.getAll();
		        return [200, data, {}];
		    });	    
		    
		    $httpBackend.whenGET('api/dashboard').respond(function(method, url, data) {
		    	var respnose = DashboardStorage.getAll();
		        return [200, respnose, {}];
		    });	    
		    $httpBackend.whenPUT('api/dashboard').respond(function(method, url, data) {
		        var response = DashboardStorage.put(JSON.parse(data));
		        return [200, response, {}];
		    });
		    
		    
		    //Dataset
		    $httpBackend.whenGET('api/dataset').respond(function(method, url, data) {
		        var data = AnnotationStorage.getAll();
		        return [200, data, {}];
		    });	    
		    	    
		    //Project
		    var projectRootUrl="^api\/project";
		    var regexProjectUrl = new RegExp(projectRootUrl+"$");
		    
		    $httpBackend.whenGET(regexProjectUrl).respond(function(method, url, data) {
		    	var respnose = ProjectStorage.getAll();
		        return [200, respnose, {}];
		    });	    
		    $httpBackend.whenPUT(regexProjectUrl).respond(function(method, url, data) {
		        var response = ProjectStorage.put(JSON.parse(data));
		        return [200, response, {}];
		    });
		    var regexProjectGetUrl =new RegExp(projectRootUrl+"\\/\\w+");	    
		    $httpBackend.whenGET(regexProjectGetUrl).respond(function(method, url, data) {
		    	var id = url.split('/')[3];
		    	var respnose = ProjectStorage.findById(id);
		        return [200, respnose, {}];
		    });
		    
		    //Project->Data
		    var projectDatasetRootUrl = regexProjectGetUrl.source+"\\/dataset"
		    var regexProjectDatasetUrl = new RegExp(projectDatasetRootUrl+"$");
		    $httpBackend.whenGET(regexProjectDatasetUrl).respond(function(method, url, data) {
		    	var projectId = url.split('/')[3];	
		    	var respnose = ProjectStorage.findById(projectId).datasets.getAll();
		        return [200, respnose, {}];
		    });	    
		    $httpBackend.whenPUT(regexProjectDatasetUrl).respond(function(method, url, data) {
		    	var projectId = url.split('/')[3];
		    	var respnose = ProjectStorage.findById(projectId).datasets.put(JSON.parse(data));	    	
		        return [200, response, {}];
		    });
		    var regexDatasetProjectGetUrl =new RegExp(projectDatasetRootUrl+"\\/\\w+");	    
		    $httpBackend.whenGET(regexDatasetProjectGetUrl).respond(function(method, url, data) {
		    	var projectId = url.split('/')[3];
		    	var id=url.split('/')[5];
		    	var respnose = ProjectStorage.findById(projectId).datasets.findById(id);
		        return [200, respnose, {}];
		    });		    
		}
	};
});