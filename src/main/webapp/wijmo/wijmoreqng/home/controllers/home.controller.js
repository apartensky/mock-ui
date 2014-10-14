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

     }];
     
	
});