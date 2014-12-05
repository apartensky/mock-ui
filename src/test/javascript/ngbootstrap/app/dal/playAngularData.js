define(["ng", "appjs", "ngmocks", "angularData"], function(ng){
	describe("Playing with angular-data", function(){
		var $httpBackend; 
		
		beforeEach(module("ngMock"));
		beforeEach(module("mui.storageMock"));
		beforeEach(module("angular-data.DS"));
		
		beforeEach(inject(function( _$httpBackend_, _EndpointConfig_, _RootStorage_, _DS_){
					
			$httpBackend=_$httpBackend_;
			DS=_DS_;
			
			_EndpointConfig_();	
			
			
		}));
		
		it("should create a simple workspace", function(){
			
			var Project = DS.defineResource({
				name: 'project',
				baseUrl: 'api',
				endpoint: '/project',
				idAttribute: "id",					
				relations: [{
			        hasMany: {
			            'dataset': {
			                localField: 'dataset',
			                foreignKey: 'projectId'
			            }
			        }
			    }]
			});
						
			var Dataset = DS.defineResource({
				name: "dataset",
				idAttribute: "id",
				relations: [{
					belongsTo: {
						project: {
							parent: true,
							localField: "project",
							localKey: "projectId"
						}
					}
				}]
				
			});
			var project1, dataset1;
			Project.find(1).then(function(data){
				project1=data;
				expect(project1.name).toBe("project1");
				
				console.debug("project1", data);
			});
			
			Dataset.find(1).then(function(data){
				dataset1=data;
				expect(dataset1.name).toBe("dataset 1");				
				console.debug("datast 1", dataset1, project1.dataset);
			});
			
//			DS.linkAll("project").then(function(){
//				console.debug("dataset1.project", dataset1.project);
//			});
			
			$httpBackend.expectGET("api/project/1");
//			$httpBackend.expectGET("api/project/1/dataset/1");
			$httpBackend.flush(2);
			
			
		});
		
	});
});