var myCSSModule = angular.module('myCSSModule',[]);
myCSSModule.controller('DeathrayMenuCtrl',['$scope',
	function($scope){
		$scope.menuState = {show:false};
		$scope.toggleMenu = function(){
			$scope.menuState.show = !$scope.menuState.show;
		};
	}
]);