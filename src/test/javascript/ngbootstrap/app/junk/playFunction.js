define([], function(){
	describe("Playing with functions", function(){
	
		var Factory;
		beforeEach(function(){
			Factory = function(){
				function Class1(val){
					this.prop=val;
				};
				Class1.getInstance=function(val){
					console.log("Oh, I'm so class");
//					var class1 = Object.createObject(val)
					return new Class1(val);
				};
				
				Class1.prototype.protoMethod=function(){
					console.log("Very prototypically");
					return this.prop;
				}
				
				return Class1;
			}
		});
		
		it("should make everything clear about functions as factories", function(){			
			var Class1a = Factory();
			var instance1a=Class1a.getInstance(1);
			expect(instance1a.prop).toBe(1);
			expect(instance1a.protoMethod()).toBe(1);
			
			var Class1b = Factory();
			var instance1b=Class1b.getInstance(2);
			expect(instance1b.prop).toBe(2);
			expect(instance1b.protoMethod()).toBe(2);			
			
			//fails: each call to the Factory() returns a new instance of the factory function ...
//			expect(Class1a).toEqual(Class1b);
//			expect(Class1a).toBe(Class1b);
			//... (with it's own prototype)
//			expect(Class1a.prototype).toEqual(Class1b.prototype);
			//fails
//			expect(Class1a.prototype).toBe(Class1b.prototype);
			
			//.... so we can customize the prototypes as we like
			Class1a.prototype.newProtoMethod=function(){
				return "Class1A custom proto method"
			}
			//make sure new method can be called by the first instance object
			expect(instance1a.newProtoMethod()).toBe("Class1A custom proto method");
			//the second instance does not get the method yet
			expect(function(){instance1b.newProtoMethod();}).toThrow("undefined is not a function");
			
			//add method to the second class
			Class1b.prototype.newProtoMethod=function(){
				return "Class1B custom proto method"
			}
			//make sure the second instance now works
			expect(instance1b.newProtoMethod()).toBe("Class1B custom proto method");
			//make sure the first instance is unaffected
			expect(instance1a.newProtoMethod()).toBe("Class1A custom proto method");
			
			//reinitializing the function will reset the prototype (obviously)
			Class1a = Factory();
			instance1a=Class1a.getInstance(3);
			expect(function(){instance1a.newProtoMethod();}).toThrow("undefined is not a function");
		});
		
		
		
	});
	
});