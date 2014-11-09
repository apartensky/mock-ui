define(["ng", "./AnnotationSet"], function(ng, AnnotationSet){
	 return function($q){
		var that = {};
		
		//private
		var annotations=[];
		function _init(){	
			
			for(var i=0;i<10;i++){
				annotations.push(new AnnotationSet(
					$q.when({meta: {
								name: "name"+i,
								description: "just a '"+i+"'",
								numberOfSamples: i*10
							},
							data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
						})
					));
			}
			console.debug("AnnotationSetRepository.init", annotations.length);
		}
		
		//public
		that.getAll=function(){
			return annotations;
		};		
		that.get=function(name){
			var results = annotations.filter(function(ann) {
				  return ann.name() === name;
			});			
			return results? results[0] : undefined; // or null
		};
		
		//construct		
		_init();		
		return that;
	 };
});