define(["q"], function(q){
	var Facet = function(spec){
		var self=this;
		var _raw;		
		//resolve
		q.when(spec).then(function(){
			_raw=spec;
		});
		
		//public
		self.getType=function(){
			return _raw.type;
		};
		//public
		self.getType=function(){
			return _raw.type;
		};
	};
	return Facet;
});