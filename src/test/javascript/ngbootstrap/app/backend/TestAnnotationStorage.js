define(["app/backend/AnnotationStorage"], function(AnnotationStorageFactory){	
	describe("AnnotationStorage Test", function(){
		var AnnotationStorage;
		AnnotationStorage = AnnotationStorageFactory();
		beforeEach(function(){			
			
		});
		
		it("should find the element by id", function(){
// 	       expect (_.min([5,10,13])).toBe(5);
			console.debug("AnnotationStorage", AnnotationStorage);
			expect(AnnotationStorage.findById("name20").meta.name).toEqual("name20");
		});
	});
});