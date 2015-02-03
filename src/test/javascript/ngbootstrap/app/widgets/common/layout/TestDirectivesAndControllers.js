define(["ng", "ngmocks", "jasmineJquery"], function(ng){
	describe("Test Directives and Conrollers", function(){
		
		var counter=10;
		//module under test
		var mod = ng.module("ModUnderTest", [])
		.controller("OuterVM", function OuterVM($scope){			
			this.id=counter++;				
			console.debug("OuterVM", this.id);
		})
		.controller("InnerVM", function InnerVM($scope){						
			this.id=counter++;				
			console.debug("InnerVM", this.id);
			
			this.doClick=function(){
				console.debug("doing stuff", this.id);
			};
		})
		.directive("outer", function(){			
			return {								
				restrict: "AE",
				controller: "OuterVM",
				controllerAs: "OuterVM",
				link: function(scope, elm, attrs, controllers){
					console.debug("outer.link", scope, elm, attrs, controllers);
				}
			};
		})
		.directive("inner", function(){
			return {
				scope: true,
				restrict: "AE",
				controller: "InnerVM",
				controllerAs: "InnerVM",
				require: ["^outer"],
				link: function(scope, elm, attrs, controllers){		
					console.debug("inner.link", controllers, attrs.id);
				}
			};
		}).directive("innerNoScope", function(){
			return {
				restrict: "AE",
				controller: "InnerVM",
				controllerAs: "InnerVM",
				link: function(scope, elm, attrs, controllers){		
					console.debug("inner.link", controllers, attrs.id);
				}
			};
		});
		
		//modules		
		beforeEach(module(mod.name));		
				
		//components		
		var elm, scope, $compile;		
		beforeEach(inject(function(_$rootScope_, _$compile_){
			$compile=_$compile_;			
			scope=_$rootScope_;
			elm = $compile(domOneOuterOneInner)(scope);			
			console.debug("elm", elm);			
			scope.$digest();						
		}));
		
		function checkInner(selector, css){
			var inner = elm.children(selector, css);			
			console.debug("inner", inner);
			expect(inner).toHaveClass(css);
			return inner;
		}
		
		function clickButton(inner){
			var InnerVM = inner.scope().InnerVM; 
			spyOn(InnerVM, 'doClick').andCallThrough();			
			var btn = inner.children("btn");
			console.debug("btn", btn);
			btn.click();
			expect(InnerVM.doClick).toHaveBeenCalled();
		}
		
		
		var domOneOuterOneInner = 
			"<div outer> {{OuterVM.id}}" +
				"<div inner class='aaa' id='1'>" +					
				"	<btn ng-click=\"InnerVM.doClick()\"></btn>" +
				"</div>" +
			"</div>";				
		it("One Outer One Inner", function(){
//			elm = $compile(domOneOuterOneInner)(scope);			
//			console.debug("elm", elm);
//			scope.$digest();
			var inner = elm.children("div[inner]:first");			
			console.debug("inner", inner);
			expect(inner).toHaveClass("aaa");

			var InnerVM = inner.scope().InnerVM; 
			spyOn(InnerVM, 'doClick').andCallThrough();
			
			var btn = inner.children("btn");
			console.debug("btn", btn);
			btn.click();
			expect(InnerVM.doClick).toHaveBeenCalled();
		});
		
		var domOneOuterTwoInner = 
			"<div outer>" +
				"<div inner class='aaa' id='1'>" +					
				"	<btn ng-click=\"InnerVM.doClick()\"></btn>" +
				"</div>" +
				"<div inner class='bbb' id='2'>" +					
				"	<btn ng-click=\"InnerVM.doClick()\"></btn>" +
				"</div>" +
			"</div>";
		it("One Outer Two Inner", function(){
			elm = $compile(domOneOuterTwoInner)(scope);
			console.debug("elm", elm);

			var inner2 = checkInner("div[inner]:last", "bbb");						
			var inner1 = checkInner("div[inner]:first", "aaa");			
			clickButton(inner1);						
			clickButton(inner2);
			
			var InnerVM1 = inner1.scope().InnerVM;
			var InnerVM2 = inner2.scope().InnerVM;
			expect(InnerVM1).not.toBe(InnerVM2);
			
			function x(){
				this.rand=1;
			}
			expect(new x()).not.toBe(new x());
			expect(new x()).toEqual(new x());
		});
		
		var domOneOuterTwoInnerNOSCOPE = 
			"<div outer>" +
				"<div inner-no-scope class='aaa' id='1'>" +					
				"	<btn ng-click=\"InnerVM.doClick()\"></btn>" +
				"</div>" +
				"<div inner-no-scope class='bbb' id='2'>" +					
				"	<btn ng-click=\"InnerVM.doClick()\"></btn>" +
				"</div>" +
			"</div>";
		
		it("One Outer Two Inner-No-Scope", function(){
			elm = $compile(domOneOuterTwoInnerNOSCOPE)(scope);
			console.debug("elm", elm);

			var inner2 = checkInner("div[inner-no-scope]:last", "bbb");									
			var inner1 = checkInner("div[inner-no-scope]:first", "aaa");
			var InnerVM1 = inner1.scope().InnerVM;
			var InnerVM2 = inner2.scope().InnerVM;
			//the two controllers/VMs will be the same object
			expect(InnerVM1).toBe(InnerVM2);

			//when directives have no scope, they use parent scope
			//therefore, the last directive to be linked overrides 
			//the controller instance specified in the "ControllerAs"
			clickButton(inner1);
			//cannot call clickButton on inner2 because
			//we cannot register two spies on the same object.method
			//clickButton(inner2);			
		});	
	});
});