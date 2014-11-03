define([], function(){
	"use strict";
	var Dashboard = function(promise){
		var self=this;
		
		//unwrap
		var _data;		
		console.debug("promise", promise);
		promise.then(function(raw){
			console.debug("Dashbaord raw", raw);
			_data=raw;			
		});
		
		//public
		self.getFacets=function(){
			return _data.facets;
		};		
		self.getName=function(){
			return _data.annotationSet.meta.getName();
		};		
	};
	return Dashboard;
});