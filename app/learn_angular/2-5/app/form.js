var userInfoModule = angular.module('userInfoModule',[]);
userInfoModule.controller('userInfoCtrl',['$scope',
	function($scope){
		$scope.userInfo = {
			email:'25344528@qq.com',
			password:'25344528',
			autoLogin:true
		};
		$scope.getFormData = function(){
			console.log($scope.userInfo);
		};
		$scope.setFormData = function(){
			$scope.userInfo = {
				email:'damoqiongqiu@qq.com',
				password:'12345678',
				autoLogin:false
			};
		};
		$scope.resetForm = function(){
			$scope.userInfo = {
				email:'25344528@qq.com',
				password:'25344528',
				autoLogin:true
			};
		};
	}
]);