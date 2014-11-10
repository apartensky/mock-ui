define(["ng", "./AnnotationSet"], function(ng, AnnotationSet){
	 return function($q){
		var that = {};
		
		//private
		var makeapromise=function(value){
			var deferred = $q.defer();
	        deferred.resolve(value);
	        return deferred.promise;
		};
		var breakapromise=function(value){
			var deferred = $q.defer();
	        deferred.reject("dashboard not found:"+value);
	        return deferred.promise;
		};
		
		
		//private
		var annotations=[];
		function _init(){	
			
			for(var i=0;i<10;i++){
				annotations.push(new AnnotationSet(
						{meta: {
								name: "name"+i,
								description: "just a '"+i+"'",
								numberOfSamples: i*10
							},
							data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
						}
					));
			}
			console.debug("AnnotationSetRepository.init", annotations.length);
		}
		
		//public
		that.getAll=function(){			
			return $q.when(annotations);
		};		
		that.get=function(name){
			var results = annotations.filter(function(ann) {
				  return ann.name() === name;
			});			
			
			
			return results? makeapromise(results[0]) : breakapromise(name); // or null
		};
		
		//construct		
		_init();		
		return that;
	 };
});