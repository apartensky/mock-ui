define(["q"], function(q){
	"use strict";
	var Dashboard = function(spec){
		var self=this;
		
		//resolve
		var _raw;
		console.debug("Before q", _raw);
		spec.then(function(raw){
			console.debug("Dashbaord raw", raw);
			_raw=raw;			
		});
		
		//public
		self.getFacets=function(){
			return _raw.facets;
		};		
		self.getName=function(){
			return _raw.annotationSet.meta.getName();
		};		
	};
	return Dashboard;
});