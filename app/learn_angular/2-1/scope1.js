var myModule = angular.module('myModule',[]);
myModule.controller('GreetCtrl',['$scope','$rootScope',
	function GreetCtrl($scope,$rootScope){
		$scope.name = 'World';
		$rootScope.department = 'Angular';
	}
]);

myModule.controller('ListCtrl',['$scope',
	function($scope){
		$scope.names = ['Igor','Misko','Vojta'];
	}
]);
