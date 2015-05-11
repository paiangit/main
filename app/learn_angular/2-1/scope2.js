var myModule = angular.module('myModule',[]);
myModule.controller('EventController',['$scope',
	function($scope){
		$scope.count = 0;
		$scope.$on('MyEvent',function(){
			$scope.count++;
		});		
	}
]);