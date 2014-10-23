define(["ng", "app/components/mainmenu/mainmenu.module", "./annotationList/annotationList.module"], function(ng){
	var module = ng.module("mui.views.home", ["mui.annotationList"]);
	return module;
});