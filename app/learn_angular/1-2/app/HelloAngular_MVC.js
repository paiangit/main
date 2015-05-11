var myModule = angular.module('HelloAngular', []);
myModule.controller('helloAngular',['$scope',
	function HelloAngular($scope) {
		$scope.greeting = {
			text:'Hello'
		};
	}
])
.directive('hello',function(){
	return {
		restrict: 'E',
		template: '<div>Hi, everyone!</div>',
		replace: true
	};
});