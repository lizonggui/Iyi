var app=angular.module("app",["ui.router","appointmentModule","remindModule","interactionModule","mineModule"]);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("appointment");
	$stateProvider
	.state("appointment",{
		url:"/appointment",  //匹配的是hash值
		templateUrl:"view/appointment.html",
		controller:"appointmentctrl"
	})
	.state("remind",{
		url:"/remind",
		templateUrl:"view/remind.html",
		controller:"remindctrl"
	})
	.state("interaction",{
		url:"/interaction",
		templateUrl:"view/interaction.html",
		controller:"interactionctrl"
	})
	.state("mine",{
		url:"/mine",
		templateUrl:"view/mine.html",
		controller:"minectrl"
	})
})