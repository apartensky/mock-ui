define(["q", "./AnnotationSetMeta"], function($q, AnnotationSetMeta){
	function AnnotationSet(raw){
		var self=this;
		var _raw=raw;		
		
		//public properties
		self.meta=AnnotationSetMeta(raw.meta);			
		self.data=raw.data;
		self.name=self.meta.getName;
		
	};
	return AnnotationSet;
});