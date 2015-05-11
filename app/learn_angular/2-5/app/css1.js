var myCSSModule = angular.module('myCSSModule',[]);
myCSSModule.controller('CSSCtrl',['$scope',
	function($scope){
		$scope.color = 'red';
		$scope.setGreen = function(){
			$scope.color = 'green';
		};
	}
]);