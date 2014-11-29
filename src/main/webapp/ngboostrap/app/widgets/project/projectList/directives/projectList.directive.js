define(["ng"], function(ng){
	return function($scope, $attr, $elem){
		return {
			scope: {},
			restrict: "AE",
//			template: "<div>project list</div>",
			templateUrl: "app/widgets/project/projectList/templates/projectList.tpl.html",
			controller: "ProjectListVM",
			controllerAs: "ProjectListVM"
		}
	}
});
