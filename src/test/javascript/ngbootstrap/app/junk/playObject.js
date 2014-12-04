define(["lodash"], function(_){
	describe("Playing with objects", function(){
			
		
		
		it("should make everything clear about the objects", function(){
			
			var superClass = {	
					value: 0,
					superMethod: function(){
						return this.value;
					}
			};
			
			//Created a superclass with values
			expect(superClass.superMethod()).toBe(0);
			
			var subClass = Object.create(superClass);
			_.extend(subClass, {			
				subMethod: function(){
					return this.value;
				}
			});
			
			expect(subClass.superMethod()).toBe(0);
			expect(subClass.subMethod()).toBe(0);
			
			//the new value overrides the one in superclass
			subClass.value=1;
			expect(subClass.superMethod()).toBe(1);
			expect(subClass.subMethod()).toBe(1);
			
			//the superclass still accesses its own value
			expect(superClass.superMethod()).toBe(0);	
			
			
		});
		
	});
})