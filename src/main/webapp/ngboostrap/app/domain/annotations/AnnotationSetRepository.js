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
		}
		
		//public
		that.getAll=function(){
			return annotations;
		};
		
		//construct		
		_init();		
		return that;
	 };
});