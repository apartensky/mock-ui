define(["ng", "appjs", "app/utils/utils", "ngmocks", "ngresource"], function(ng){
	describe("Test ProjectResourceRepository", function(){
		var $timeout, $resource, Backend, Endpoint, RootStorage, ProjectResourceRepository;
		var testData;
		beforeEach(module("ngMock"));
		beforeEach(module("ngResource"));
		beforeEach(module("mui.domain"));
		beforeEach(module("mui.storageMock"));		
		
		beforeEach(inject(function(_$httpBackend_, _EndpointConfig_
				, _RootStorage_, _ProjectResourceRepository_, _$timeout_){
			_EndpointConfig_();
			$httpBackend=_$httpBackend_;								
			$timeout=_$timeout_;
			ProjectResourceRepository=_ProjectResourceRepository_;
			
			RootStorage=_RootStorage_;
			testData={
					datasource: [
									{
										id: 1,
										name: "tcga",
										description: '1'
									},
									{
										id: 2,
										name: "geods",
										description: '2'
									},
									{
										id: 3,
										name: "user",
										description: '3'
									}
								],
					project: [
									{
										id: 0,
										name: "project1",
										analyses: [] 								
									},
									{	
										id: 1,
										name: "project1",
										analyses: [] 								
									}
								]
				};
			RootStorage.setData(testData);
		}));
		
		beforeEach(function(){
			this.addMatchers({
			      toEqualData: function(expected) {
			        return ng.equals(this.actual, expected);
			      }
			    });
		});
		
		it("should return list", function(){
			ProjectResourceRepository.getAll().$promise.then(function(response){
				expect(response).toEqualData(RootStorage.data.project);
			});
			$httpBackend.flush();
		});
		
		it("should return a project", function(){
			ProjectResourceRepository.get(0).$promise.then(function(response){
				expect(response).toEqualData(RootStorage.data.project[0]);
			});			
			$httpBackend.flush();
		});
		
		it("should update a project via the 'class' method", function(){
			var updated = {	
					id: 1,
					name: "project1+",
					analyses: [] 								
				};
			ProjectResourceRepository.put(updated).$promise.then(function(response){
				//make sure returned the updated object
				expect(response).toEqualData(updated);
				//make sure the datasource is updated				
				expect(response).toEqualData(RootStorage.data.project[1]);
				
				
			});			
			$httpBackend.flush();

			ProjectResourceRepository.get(1).$promise.then(function(response){
				expect(response).toEqualData(updated);
			});							
			$httpBackend.flush();
			
		});

		it("should update a project via the 'instance' method", function(){
			var updated = {	
					id: 1,
					name: "newName",
					analyses: [] 								
				};
			
			var toUpdate = ProjectResourceRepository.get(1);
			toUpdate.$promise.then(function(response){
				expect(response).toEqualData(testData.project[1]);
			});					
			$httpBackend.flush();
			
			toUpdate.name="newName";
			toUpdate.$update()
			.$promise.then(function(response){
				//make sure returned the updated object
				expect(response).toEqualData(updated);
				//make sure the datasource is updated				
				expect(response).toEqualData(RootStorage.data.project[1]);				
			});			
			$httpBackend.flush();
			
			ProjectResourceRepository.get(1).$promise.then(function(response){
				expect(response).toEqualData(updated);
			});							
			
			$httpBackend.flush();
			
		});
		
		
		it("should add a new project", function(){
			var toAdd= {note: "added", analyses: []};			
			var added={note: 'added', analyses: [], id: 2, name: "Untitled 2"};
			
			ProjectResourceRepository.put(toAdd).$promise.then(function(response){
				//make sure returned the updated object
				expect(response).toEqualData(added);
				//make sure the datasource is updated				
				expect(response).toEqualData(RootStorage.data.project[2]);
				
				
			});			
			$httpBackend.flush();

			ProjectResourceRepository.get(2).$promise.then(function(response){
				expect(response).toEqualData(added);
			});							
//			$httpBackend.flush();
			
		});
	});
});