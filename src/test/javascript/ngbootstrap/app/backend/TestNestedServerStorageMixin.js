define(["ng", "lodash", "app/backend/NestedStorageMixin"], function(ng, _, NestedStorageMixin){
	console.debug("NestedStorageMixin Test init", ng, NestedStorageMixin);
	describe("NestedStorageMixin Test", function(){
		
		function testData(){
			return {
					datasources: {
						"tcga": {
							name: "1",
							description: '1'
						},
						"geods": {
							name: "2",
							description: '2'
						},
						"user": {
							name: "3",
							description: '3'
						}
					},
					projects: {
						"project1": {
							analyses: {
								
							}
						},
						"project2": {
							analyses: {
								
							}
						}
					}
			};
		};
		
		var SomeServerStorage;
		function SomeServerStorageClass(){
			this.data=testData();
		};
		NestedStorageMixin.call(SomeServerStorageClass.prototype);
		
		beforeEach(function(){
			SomeServerStorage=new SomeServerStorageClass(); 			
		});
		
		function urlToObj(url, data){
			var objPath = Array.isArray(url) ? url : url.split("/");   
			
			return _.reduce(objPath, function(result, prop){				
				return result[prop];
			}, data);
		}
		
		it("should return the nested object pointed to by the url", function(){
			var data = testData();
			expect(urlToObj("datasources/tcga", data)).toBe(data.datasources.tcga);
			expect(urlToObj("datasources", data)).toBe(data.datasources);
			
		});
		
		it("should return the single element by the http request", function(){
			expect(SomeServerStorage.httpRequest("GET", "datasources/tcga")).toEqual(testData().datasources.tcga);
		});
		
		it("should return an array by the http request", function(){
			expect(SomeServerStorage.httpRequest("GET", "datasources")).toEqual([{
						name: "1",
						description: '1'
					},
					{
						name: "2",
						description: '2'
					},
					{
						name: "3",
						description: '3'
					}]);
		});
		
		it("should add an objects with given id", function(){
			var added={id: 3, description: '3+', note: 'updated'};
			expect(SomeServerStorage.httpRequest("PUT", "datasources/testId", added)).toEqual(added);
			expect(SomeServerStorage.httpRequest("GET", "datasources/testId")).toEqual(added);
		});
		
		it("should add an object with new generated id", function(){
			var toAdd={description: '4', note: 'added'};
			var added={name: "id0", description: '4', note: 'added'};
			expect(SomeServerStorage.httpRequest("POST", "datasources", toAdd)).toEqual(added);
			expect(SomeServerStorage.httpRequest("GET", "datasources/"+added.name)).toEqual(added);
		});
		
		it("should update an objects", function(){
			//make sure object is clean before update
			expect(SomeServerStorage.httpRequest("GET", "datasources/tcga")).toEqual({
				name: "1",
				description: '1'
			});
			//now update
			var updated={name: 1, description: '1+', note: 'updated'};
			expect(SomeServerStorage.httpRequest("PUT", "datasources/tcga", updated)).toEqual(updated);
			//make sure get updated object back
			expect(SomeServerStorage.httpRequest("GET", "datasources/tcga")).toEqual(updated);
		});
		
		it("should delete object", function(){
			expect(SomeServerStorage.httpRequest("DELETE", "datasources/tcga")).toEqual({
				name: "1",
				description: '1'
			});
			expect(SomeServerStorage.httpRequest("GET", "datasources")).toEqual([{
				name: "2",
				description: '2'
			},
			{
				name: "3",
				description: '3'
			}]);
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