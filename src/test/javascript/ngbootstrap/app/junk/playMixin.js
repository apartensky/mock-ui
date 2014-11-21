define([], function(){
	
	describe("Play Mixin", function(){
		//Mixin with custom spec
		var Mixin, CachedModule, ModuleA, Module2;
		beforeEach(function(){
			Mixin = function (spec){
				var x=spec.x;
			    this.getX=function getX(){
			        return x;
			    }
			    this.getData=function(){
			    	return this.data;
			    }
			};	
			
			//object created using the 'ModuleA' paturn with cached function
			CachedModule = function CachedModule(a){
			    function getVal(){
			        return a;
			    };
			    return {
			    	getVal: getVal
			    }
			}
			
			//object created using non-cached function
			ModuleA = function(a){
				this.getVal=function(){
					return a;
				};
			}
			
			ModuleB = function(a){
				this.getVal=function(){
					return a;
				};
			}
						
		});
		
		it("should decorate prototype of a plain ModuleA pattern", function(){
			Mixin.call(ModuleA.prototype, {x: "mixin1"});
			var moduleA = new ModuleA("mod");
			
			expect(moduleA.getVal()).toEqual("mod");
			expect(moduleA.getX()).toEqual("mixin1");
		});
		
		it("should fail to decorate prototype of a CachedModule pattern", function(){
			Mixin.call(CachedModule.prototype, {x: "mixin1"});
			var cachedModule = new CachedModule("cached");
			
			expect(cachedModule.getVal()).toEqual("cached");
	//		expect(cachedModule.getX()).toEqual("mixin1");
			expect(function(){cachedModule.getX()}).toThrow(new Error("undefined is not a function"));
		});
		
		it("should decorate the CachedModule object directly", function(){		
			var cachedModule = new CachedModule("cached");
			Mixin.call(cachedModule, {x: "mixined onto object instance"});
			
			expect(cachedModule.getVal()).toEqual("cached");
			expect(cachedModule.getX()).toEqual("mixined onto object instance");
		});
		
		it("should make sure parameterized mixins don't conflict", function(){
			//parameterize Mixin for ModuleA
			Mixin.call(ModuleA.prototype, {x: "mixin1"});
			var moduleA = new ModuleA("A");
			expect(moduleA.getVal()).toEqual("A");
			expect(moduleA.getX()).toEqual("mixin1");
	
			//parameterize Mixin for ModuleB
			Mixin.call(ModuleB.prototype, {x: "mixin2"});
			var moduleB = new ModuleB("B");
			expect(moduleB.getVal()).toEqual("B");
			expect(moduleB.getX()).toEqual("mixin2");
			//make sure ModuleA is not affected
			expect(moduleA.getVal()).toEqual("A");
			expect(moduleA.getX()).toEqual("mixin1");
		});
		
		
	});

	describe("Playing with mixins+data", function(){
		var ModuleNoData = function(){					
		};
		var ModuleWithData = function(){
			this.data="initialized in module";
			this.getData=function(){
				return this.data;
			}
		};
		var MixinNoData = function(){			
			this.getData=function(){
				return this.data;
			}
		};		
		var MixinWithData = function(){
			this.data="initialized in mixin";
			this.getData=function(){
				return this.data;
			}
		};
		
				
		it("should decorate module's prototype with a getter to the module's state", function(){
			
			MixinNoData.call(ModuleWithData.prototype);
			var moduleWithData = new ModuleWithData();
			expect(moduleWithData.getData()).toEqual("initialized in module");
						
		});
		
		it("should decorate module's prototype with a getter and state", function(){			
			MixinWithData.call(ModuleNoData.prototype);
			var module = new ModuleNoData();
			expect(module.getData()).toEqual("initialized in mixin");
			
			
			
			MixinWithData.call(ModuleNoData.prototype);
			var module2 = new ModuleNoData();
			expect(module2.getData()).toEqual("initialized in mixin");
		});
	})
});