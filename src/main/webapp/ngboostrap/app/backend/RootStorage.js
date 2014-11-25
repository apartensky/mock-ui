define(["./NestedStorageMixin"], function(NestedStorageMixin){		
	return function(){

		var data={
			datasource: {
				"tcga": {
					name: "1",
					description: '1'
				},
				"geods": {
					name: "2",
					description: '2'
				},
				"user": {
					name: "3",
					description: '3'
				}
			},
			dashboard: {},
			project: {},
			annotations: {}
		};
		
		for(var i=0;i<10;i++){
			var dummy={
					meta: {
						name: "name"+i*10,
						description: "just a '"+i+"'",
						numberOfSamples: i*10
					},
					data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
				}
//			data.project[dummy.meta.name]=dummy;
			data.annotations[dummy.meta.name]=dummy;
		}
		
		var schema={
			datasource: {
				dataset: {}
			},
			project: {
				analysis: {					
					result: {},					
				},
				history: null
			},
			dashboard: {},
			annotations: {}
		};
			
		function RootStorage(schema, data){
			this.schema=schema;
			this.data=data;
		};
		
		NestedStorageMixin.call(RootStorage.prototype);
		return new RootStorage(schema, data);
	}
});