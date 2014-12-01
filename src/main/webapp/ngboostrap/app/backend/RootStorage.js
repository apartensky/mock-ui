define(["lodash", "./NestedArrayStorageMixin"], function(_, NestedStorageMixin){
	return (function(){
		function CreateDummy(prefix, i, customFields){
			var dummy= {
				id: i,
				name: prefix+" "+i,
				description: "this item is "+i*10				
			};
			if(customFields)
				_.merge(dummy, customFields);
			return dummy;
		};
		function CreateDummyCollection(prefix, customFields){
			var dummys=[];
			for(var i=0;i<10;i++){
				var dummy=CreateDummy(prefix, i)
				dummys.push(dummy);
			}
			return dummys;
		};
		function AttachDummyCollection(parent, collectionName, customFields){
			_.map(parent, function(cur){
				cur[collectionName]=CreateDummyCollection(cur.name);
			});
			
		};
		
		return function(RootStorageSchema){
	
			var data={
				datasource: [
					{
						id: 1,
						name: "TCGA",
						description: '1',
						dataset: []
					},
					{
						id: 2,
						name: "Geods",
						description: '2',
						dataset: []
					},				
					{
						id: 3,
						name: "Google Drive",
						description: '3',
						dataset: []
					}
				],
				dashboard: [{
					annotationSet: {
						meta: {
							id: 1,
							name: "name1",
							description: "just a '1'",
							numberOfSamples: 1
						},
						data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
					}
				}],
				project: [{
					id: 1,
					name: "project1"
				},
				{
					id: 2,
					name: "project2"
				}],
				annotations: [],
				dataset: [{
						id: 1,
						name: "dataset 1"
					},
					{
						id: 2,
						name: "dataset 2"
					}]
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
				data.annotations.push(dummy);
			}
			
			//presets
			AttachDummyCollection(data.datasource, "dataset"
					, {
					annotations: [
						{ 
							name: "row annotations", 
							data: []
						},
						{ 
							name: "column annotations", 
							data: []
						}
					]
				}
			);
			
			//preset annotations
			
			//dataset annotations
			data.dataset[1].annotations=
					[{
						id: 1,
						name: data.dataset[1].name+" column annotations",
						data:[]
					}, 
					{
						id: 2,
						name: data.dataset[1].name+" row annotations", 
						data:[]
					}];
			
			AttachDummyCollection(data.dataset[1].annotations[0].data, "clinical attribute");
			AttachDummyCollection(data.dataset[1].annotations[1].data, "gene attribute");
			
			console.debug("***********",data);
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
			return new RootStorage(RootStorageSchema, data);
		}
	}());
});