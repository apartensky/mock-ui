define(["ng", "./AnnotationSetMeta"], function(ng, AnnotationSetMeta){
	 return function($q){
		var that = {};
		
		//private
		var metas=[];
		function _init(){			
			for(var i=0;i<10;i++){
				metas.push(AnnotationSetMeta(
					$q.when({
						name: "name"+i,
						description: "just a '"+i+"'",
						numberOfSamples: i*10
						})
					));
			}
		}
		
		//public
		that.getAll=function(){
			console.debug("metas", metas);
			return metas;
		};
		
		//construct		
		_init();		
		return that;
	 };
});