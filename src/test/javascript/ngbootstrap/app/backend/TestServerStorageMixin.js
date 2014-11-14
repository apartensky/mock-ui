define(["ng", "underscore", "app/backend/ServerStorageMixin"], function(ng, _, ServerStorageMixin){
	console.debug("ServerStorageMixin Test init", ng, ServerStorageMixin);
	describe("ServerStorageMixin Test", function(){
		
		function testData(){
			return [{
					id: 1,
					description: '1'
				},
				{
					id: 2,
					description: '2'
				},
				{
					id: 3,
					description: '3'
				}];
		};
		
		var SomeServerStorage;
		beforeEach(function(){
			SomeServerStorage={
				data: testData()
			};
			ServerStorageMixin.call(SomeServerStorage);
		});
		
		it("should find the element by id", function(){
// 	       expect (_.min([5,10,13])).toBe(5);
			console.debug("SomeServerStorage", SomeServerStorage);
			expect(SomeServerStorage.findById(2)).toEqual({id: 2, description: '2'});
		});
		
		it("should return all objects", function(){
			expect(SomeServerStorage.getAll()).toEqual(testData());
		});
		
		it("should update an objects", function(){
			var updated={id: 3, description: '3+', note: 'updated'};
			expect(SomeServerStorage.put(updated)).toEqual(updated);
		});
		
		it("should add object to the array", function(){
			var added={id: 4, description: '3+', note: 'added'};
			expect(SomeServerStorage.put(added)).toBe(added);
			expect(SomeServerStorage.findById(added.id)).toBe(added);
		});
		
		it("should return the maximum id+1", function(){
			console.debug("SomeServerStorage.newId", SomeServerStorage.newId());
			expect(SomeServerStorage.newId()).toEqual(4);			
		});
		
		it("should add object to the array with the id 10", function(){
			var newObj={description: '10', note: 'added'};			
			expect(SomeServerStorage.add(newObj, 10)).toEqual({description: '10', note: 'added', id: 10});
			var result = [{
				id: 1,
				description: '1'
			},
			{
				id: 2,
				description: '2'
			},
			{
				id: 3,
				description: '3'
			},
			{
				id: 10,
				description: '10',
				note: 'added'
			}];
			expect(SomeServerStorage.getAll()).toEqual(result);
		});
		
		it("should add object to the array with the next id", function(){
			var newObj={description: 'some id', note: 'added'};
			expect(SomeServerStorage.add(newObj)).toEqual({description: 'some id', note: 'added', id: 4});
		});
		
		it("should delete object", function(){
			var toBeDeleted = SomeServerStorage.findById(2); 
			expect(SomeServerStorage.deleteById(2)).toBe(toBeDeleted);
		});
		
		it("should try to delete a nonexistant object, returns undefined", function(){
			var toBeDeleted = SomeServerStorage.findById(2); 
			expect(SomeServerStorage.deleteById(11)).toBe(undefined);
		});
	});
});