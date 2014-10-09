define(['ng', 'ng-ui-router', 'wijmo-ng', './home/controllers/HomeCtrl'], function(ng){
	var appRoot="/wijmo/wijmoreqng";
	return ng.module('wijmoreqng-app', ['ui.router', 'wijmo', function(){}])
	.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/home");
		$stateProvider.state("home", {
			url: "/home",
			templateUrl: appRoot+"/home/templates/home.tpl.html",
			controller: 'MyController'
		});
	}])
	.controller("MyController", 
	function ($scope) {
            $scope.val = 50;
            $scope.min = 0;
            $scope.max = 100;
            $scope.report = {"ItemsWithKitQuantity":{"Items":[{"Id":"15","Code":"70","Sku":"testSku2","Description":"test product 2tstsrt lrt-lrt -lsrt nsh tnsuh insoetuh inseouthinseuothisneouh ineuoh ieunothi onshti oes\nh nh \nh\n-h \nh","Cost":"$35.50","ReorderQuantity":0,"AvailableQuantity":5,"QuantityOnHand":13,"PendingQuantity":8,"Attributes":[],"TotalSalePrice":"$0.00","TotalCost":"$0.00","AveragePrice":"$0.00","Profit":"$0.00","AverageProfit":"$0.00","Markup":0,"IsKit":false},{"Id":"17","Code":"34","Sku":"testSku4","Description":"test product 4","Cost":"$55.50","ReorderQuantity":0,"AvailableQuantity":86,"QuantityOnHand":100,"PendingQuantity":14,"Attributes":[],"TotalSalePrice":"$0.00","TotalCost":"$0.00","AveragePrice":"$0.00","Profit":"$0.00","AverageProfit":"$0.00","Markup":0,"IsKit":false}],"Errors":[],"TotalPrice":"$0.00","TotalProfit":"$0.00","TotalCost":"$0.00","AverageMarkup":0},"ItemsWithKitSku":{"Items":[],"Errors":[],"TotalPrice":"$0.00","TotalProfit":"$0.00","TotalCost":"$0.00","AverageMarkup":0}};
            
            $scope.setData = function()
            {
            	$scope.gridWithKitQuantityData = $scope.report.ItemsWithKitQuantity.Items;
            };
        });       
});