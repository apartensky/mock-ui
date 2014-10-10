requirejs(['home/controllers/home.controller']);
define(['require', 'ng' /*, 'app'*/], function(require, ng, app){
	console.debug("init home.module");	
	var module = ng.module('home', []);	
//	app.requires.push(module.name);	
	return module;
});
