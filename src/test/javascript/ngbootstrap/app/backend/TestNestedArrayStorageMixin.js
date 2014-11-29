define(["ng", "lodash", "app/backend/NestedArrayStorageMixin"], function(ng, _, StorageMixin){
//	console.debug("StorageMixin Test init", ng, StorageMixin);
	describe("StorageMixin Test", function(){
		
		function testData(){
			return {
					datasources: [
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
					projects: [
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
		};
		
		var SomeServerStorage;
		function SomeServerStorageClass(){
			this.data=testData();
		};
		StorageMixin.call(SomeServerStorageClass.prototype, {
			getId: function(obj){return obj.id},
			setId: function(id){this.id=id}
		});
		
		beforeEach(function(){
			SomeServerStorage=new SomeServerStorageClass(); 			
		});
		
		it("should return the single element by the http request", function(){
			expect(SomeServerStorage.httpRequest("GET", "api/datasources/1")).toEqual(testData().datasources[0]);
		});
		
		it("should return an array by the http request", function(){
			expect(SomeServerStorage.httpRequest("GET", "api/datasources")).toEqual([{
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
					}]);
		});
		
		it("should add an objects with given id", function(){
			var added={name: "testId", description: '3+', note: 'updated'};
			expect(SomeServerStorage.httpRequest("PUT", "api/datasources/testId", added)).toEqual(added);
//			expect(SomeServerStorage.httpRequest("GET", "api/datasources/testId")).toEqual(added);
		});
		
		it("should add an object with new generated id", function(){
			var toAdd={description: '4', note: 'added'};
			var added={id: 4, description: '4', note: 'added'};
			expect(SomeServerStorage.httpRequest("POST", "api/datasources", toAdd)).toEqual(added);
			expect(SomeServerStorage.httpRequest("GET", "api/datasources/"+added.id)).toEqual(added);
		});
		
		it("should update an objects", function(){
			//make sure object is clean before update
			expect(SomeServerStorage.httpRequest("GET", "api/datasources/1")).toEqual({
				id: 1,
				name: "tcga",
				description: '1'
			});
			//now update
			var updated={id: 1, name: "tcga", description: '1+', note: 'updated'};
			expect(SomeServerStorage.httpRequest("PUT", "api/datasources/1", updated)).toEqual(updated);
			//make sure get updated object back
			expect(SomeServerStorage.httpRequest("GET", "api/datasources/1")).toEqual(updated);
		});
		
		it("should delete object", function(){
			expect(SomeServerStorage.httpRequest("DELETE", "api/datasources/1")).toEqual({
				id: 1,
				name: "tcga",
				description: '1'
			});
			expect(SomeServerStorage.httpRequest("GET", "api/datasources")).toEqual([{
				id: 2,
				name: "geods",
				description: '2'
			},
			{
				id: 3,
				name: "user",
				description: '3'
			}]);
		});
		
		it("should return url regex's for GET, PUT, and POST mapping", function(){
			console.log("***registerRoute", SomeServerStorage.registerRoute("datasource/:name"));
//			console.log("***registerRoute2", SomeServerStorage.registerRoute("project/:name/analysis/:name/result/:name"));
			console.log("***registerRoute2", SomeServerStorage.registerRoute("project/:name"));
			
		});
		
//		it("should return the maximum id+1", function(){
//			console.debug("SomeServerStorage.newId", SomeServerStorage.newId());
//			expect(SomeServerStorage.newId()).toEqual(4);			
//		});
//		
//		it("should add object to the array with the id 10", function(){
//			var newObj={description: '10', note: 'added'};			
//			expect(SomeServerStorage.add(newObj, 10)).toEqual({description: '10', note: 'added', id: 10});
//			var result = [{
//				id: 1,
//				description: '1'
//			},
//			{
//				id: 2,
//				description: '2'
//			},
//			{
//				id: 3,
//				description: '3'
//			},
//			{
//				id: 10,
//				description: '10',
//				note: 'added'
//			}];
//			expect(SomeServerStorage.getAll()).toEqual(result);
//		});
//		
//		it("should add object to the array with the next id", function(){
//			var newObj={description: 'some id', note: 'added'};
//			expect(SomeServerStorage.add(newObj)).toEqual({description: 'some id', note: 'added', id: 4});
//		});
//		
//		
//		it("should try to delete a nonexistant object, returns undefined", function(){
//			var toBeDeleted = SomeServerStorage.findById(2); 
//			expect(SomeServerStorage.deleteById(11)).toBe(undefined);
//		});
	});
});