define([], function(){
	"use strict";
	var AnnotationSetMeta = function(promise){
		
		//init
		var that={};
		var _data = {};	
		
		promise.then(function(data){
			_data=data;
		});
		
		//public
		that.getName=function(){
			return _data.name;
		};
		that.getDescription=function(){
			return _data.description;
		};
		that.getNumberOfSamples=function(){
			return _data.numberOfSamples;
		};
		return that;
	};
	return AnnotationSetMeta;
});