var bookStoreCtrls = angular.module('bookStoreCtrls',[]);
bookStoreCtrls.controller('HelloCtrl',['$scope',
	function($scope){
		$scope.greeting = {
			text:'Hello'
		};
		$scope.pageClass = 'hello';
	}
]);
bookStoreCtrls.controller('BookListCtrl',['$scope',
	function($scope){
		$scope.books = [
			{title:'《Ext江湖》',author:'大漠穷秋'},
			{title:'《ActionScript游戏设计基础》',author:'大漠穷秋'},
			{title:'《用AngularJS开发下一代WEB应用》',author:'大漠穷秋'}
		];
		$scope.pageClass = 'list';
	}
]);

