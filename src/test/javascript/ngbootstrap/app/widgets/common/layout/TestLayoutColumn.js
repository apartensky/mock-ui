define(["ng", "appjs", "jasmineJquery"], function(ng, app){
	describe("Test Layout Column Directive", function(){
		//modules		
		beforeEach(module(app.name));		
				
		//components		
		var elm, scope, $compile;		
		
		beforeEach(inject(function(_$rootScope_, _$compile_){
			$compile=_$compile_;
			
			scope=_$rootScope_;
			scope.hi="hi";
			elm = $compile(
					"<layout-row>" +
						"<div layout-column class='aaa' id='1'>" +					
						"	<div class=\"btn btn-info btn-xs\" ng-click=\"layoutColumn.toggle()\">\n" + 
						"  		<i class=\"fa fa-arrow-left\"></i>\n" + 
						"	</div>" +
						"	<div class=\"btn btn-info btn-xs\" ng-click=\"layoutColumn.toggle()\">\n" + 
						"  		<i class=\"fa fa-arrow-left\"></i>\n" + 
						"	</div>" +
						"</div>" +
						"<div layout-column class='bbb' id='2'>" +
						"	<div class=\"btn btn-info btn-xs\" ng-click=\"layoutColumn.toggle()\">\n" + 
						"  		<i class=\"fa fa-arrow-left\"></i>\n" + 
						"	</div>" +
						"	<div class=\"btn btn-info btn-xs\" ng-click=\"layoutColumn.toggle()\">\n" + 
						"  		<i class=\"fa fa-arrow-left\"></i>\n" + 
						"	</div>" +
						"</div>" +
					"</layout-row>")(scope);			
			scope.$digest();
			
						
		}));
		
		it("should find the layout-column", function(){			
			console.debug("elm", elm);
			
			var column = elm.children("div[layout-column]:first");			
			console.debug("layout-column", column);
			expect(column).toHaveClass("aaa");

			var layoutColumn = column.scope().layoutColumn; 
			spyOn(layoutColumn, 'hide');
			spyOn(layoutColumn, 'toggle').andCallThrough();
			
			var btn = column.children(".btn");
			console.debug("btn", btn);
			btn.click()
//			expect(layoutColumn.hide).toHaveBeenCalled();
			expect(layoutColumn.toggle).toHaveBeenCalled();
		});
		
		
	});
});