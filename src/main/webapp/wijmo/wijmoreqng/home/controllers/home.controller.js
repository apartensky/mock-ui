define(['ng'], function(ng){
	console.debug("init home.controller");
	
	return ['$scope', function ($scope) {
        
		//Person class
        function Person(data) {
            this.ID = data.ID;
            this.Company = data.Company;
            this.Name = data.Name;
            this.Sales = data.Sales;
        };		
		$scope.list = [
          new Person({ ID: "ANATR", Company: "Ana Trujillo Emparedados y helados", Name: "Ana Trujillo", Sales: 8900 }),
          new Person({ ID: "ANTON", Company: "Antonio Moreno Taqueria", Name: "Antonio Moreno", Sales: 4500 }),
          new Person({ ID: "AROUT", Company: "Around the Horn", Name: "Thomas Hardy", Sales: 7600 }),
          new Person({ ID: "BERGS", Company: "Berglunds snabbkop", Name: "Christina Berglund", Sales: 3200 }),
          new Person({ ID: "BLONP", Company: "Blondel père et fils", Name: "Frédérique Citeaux", Sales: 4100 }),
          new Person({ ID: "BOLID", Company: "Bólido Comidas preparadas", Name: "Martín Sommer", Sales: 3000 }),
          new Person({ ID: "DUMON", Company: "Du monde entier", Name: "Janine Labrune", Sales: 4710 }),
          new Person({ ID: "EASTC", Company: "Eastern Connection", Name: "Ann Devon", Sales: 2900 }),
          new Person({ ID: "ERNSH", Company: "Ernst Handel", Name: "Roland Mendel", Sales: 7020 }),
          new Person({ ID: "FISSA", Company: "Familia Arquibaldo", Name: "Salchichas", Sales: 4280 }),
          new Person({ ID: "BONAP", Company: "Bon app", Name: "Pedro Afonso", Sales: 1900 })
        ];
		
		$scope.nodes1 = [
         {
             text: "Data node 1",
             expanded: true,
             selected: true,
             nodes: [{
                 text: 'Folder 1.1',
                 nodes: [{
                     text: 'File 1.1.1'
                 }, {
                     text: 'File 1.1.2'
                 }]
             }, {
                 text: 'File 1.2'
             }]
         }];
		
		$scope.initSplitterOffset=ng.element("body").width()*0.25;
//		ng.element("#grid").resize();
		
		$scope.gridOptions={
				pageSize: 4
		}
		
		$scope.gridLoaded=function (e) {	        
	        console.debug("gridLoaded - grid: ", ng.element("#grid"), ng.element("#grid").width());
//	        ng.element("#grid").wijgrid().setSize(ng.element("#grid").width(). ng.element("#grid").height());
	        console.debug("gridLoaded - splitter",ng.element("#splitter").width());
	    }
		$scope.splitterLoaded=function (e) {	        
	        console.debug("splitterLoaded - grid: ", ng.element("#grid"), ng.element("#grid").width());
//	        ng.element("#grid").wijgrid().setSize(ng.element("#grid").width(). ng.element("#grid").height());
	        
	        console.debug("splitterLoaded - tree",ng.element("#tree").width());
//	        $scope.initSplitterOffset=ng.element("#tree").width();
	        
	        console.debug("splitterLoaded - splitter",ng.element("#splitter").width());
	        ng.element("#splitter").wijsplitter('refresh', true, true);
	        
	        	        
	    }		
		$scope.treeLoaded=function(e){
			console.debug("treeLoaded - grid: ", ng.element("#grid"), ng.element("#grid").width());
//	        ng.element("#grid").wijgrid().setSize(ng.element("#grid").width(). ng.element("#grid").height());
	        console.debug("treeLoaded - splitter",ng.element("#splitter").width());
	        ng.element("#splitter").wijsplitter('refresh', true, true);
	        
	        console.debug("treeLoaded - tree",ng.element("#tree").width());
	        
	        $scope.initSplitterOffset=ng.element("#tree").width();
	        
		}
		function log(name, clazz, id){
			console.debug(name+":", "id:", id, clazz+"");
		}
		$scope.debugClick=function(){
			console.debug("click - grid: ", ng.element("#grid"), ng.element("#grid").width());
//	        ng.element("#grid").wijgrid().setSize(ng.element("#grid").width(). ng.element("#grid").height());
	        console.debug("click - splitter",ng.element("#splitter"), ng.element("#splitter").width());
	        ng.element("#splitter").wijsplitter('refresh', true, true);
	        
	        $.each($.ui, function(name, clazz) {
	        	log(name, clazz, "jqui" + name);
	        });
		}
     }];
	
     
	
});