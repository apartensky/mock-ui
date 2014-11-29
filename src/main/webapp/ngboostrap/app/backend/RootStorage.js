define(["./NestedArrayStorageMixin"], function(NestedStorageMixin){		
	return function(){

		var data={
			datasource: [
				{
					name: "tcga",
					description: '1'
				},
				{
					name: "geods",
					description: '2'
				},
				{
					name: "user",
					description: '3'
				}
			],
			dashboard: [],
			project: [{
				id: 1,
				name: "project1"
			},
			{
				id: 2,
				name: "project2"
			}],
			annotations: []
		};
		
		for(var i=0;i<10;i++){
			var dummy={
					meta: {
						id: "name"+i*10,
						name: "name"+i*10,
						description: "just a '"+i+"'",
						numberOfSamples: i*10
					},
					data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
				}
//			data.project[dummy.meta.name]=dummy;
			data.annotations.push(dummy);
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
		
		NestedStorageMixin.call(RootStorage.prototype, {
			getId: function(obj){return obj.id;}, 
			setId: function(id){
				this.id=id;
				}			
			});
		return new RootStorage(schema, data);
	}
});