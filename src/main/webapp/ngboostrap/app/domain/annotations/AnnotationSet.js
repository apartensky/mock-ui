define(["q", "./AnnotationSetMeta"], function($q, AnnotationSetMeta){
	function AnnotationSet(promise){
		var self=this;
		//public properties
		self.meta=undefined;
		self.name=undefined;
		self.data=undefined;
		
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
			self.name=self.meta.getName;
		});		
		
	};
	return AnnotationSet;
});