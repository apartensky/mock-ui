define(["lodash"], function(_){
	
	return function($httpBackend, RootStorage, Endpoint){
		return function(){
			try{
				$httpBackend.when("GET", /app\//).passThrough();
				$httpBackend.when("GET", /vendor\//).passThrough();
			}catch(e){
				console.log("Cannot define passThrough endpoints. Are you using the right version of $httpBackend service?" +
						"For unit testing use the ngMocks module, for backendless development use ngMocksE2E");
			}
			
//			processRequest=function(method, url, data){
//				return [200, RootStorage.httpRequest(method, url, data), {}];
//			}			
			
//			RootStorage.registerRoute("annotations/:name", processRequest, $httpBackend);
//			RootStorage.registerRoute("dashboard/:name", processRequest, $httpBackend);
//			RootStorage.registerRoute("project/:name/analysis/:name", processRequest, $httpBackend);
//			RootStorage.registerRoute("datasource/:name/dataset/:name", processRequest, $httpBackend);
			
			Endpoint.parseSchema(RootStorage.schema);
			
		}
	};
});