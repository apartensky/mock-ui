define(["q", "./AnnotationSetMeta"], function($q, AnnotationSetMeta){
	function AnnotationSet(promise){
		var self=this;
		//resolve
		var _raw={};		
		promise.then(function(raw){
			_raw=raw;
			if($q){
				self.meta=AnnotationSetMeta($q.when(raw.meta));
			}else{
				self.meta=raw.meta;
			}
			self.data=raw.data;
		});		
	};
	return AnnotationSet;
});