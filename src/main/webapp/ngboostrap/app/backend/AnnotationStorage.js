define(["./ServerStorageMixin"], function(ServerStorageMixin){	
	
	return function(){
		//mock data
		var data=[];
		for(var i=0;i<10;i++){
			data.push(
					{
						meta: {
							name: "name"+i*10,
							description: "just a '"+i+"'",
							numberOfSamples: i*10
						},
						data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
					}				
				);
		}	
		
		//create
		var AnnotationStorage = {
				data: data
		};	
		ServerStorageMixin.call(AnnotationStorage, 
				function(){return this.meta.name;}, 
				function(id){this.meta.name=id;});
		return AnnotationStorage;
	};
});