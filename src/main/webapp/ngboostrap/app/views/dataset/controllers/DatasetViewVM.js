define(["ng"], function(ng){
	var DatasetViewVM=function DatasetViewVM(dataset){
		this.dataset=dataset;
//		this.annotations=annotations;
	};
	DatasetViewVM.$inject=["dataset"];
	return DatasetViewVM;
});