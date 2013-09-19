APP.controller('tweetCtrl', function($scope, $routeParams, firebaseFactory) {
	var ref = firebaseFactory.instance('https://angular-tweets.firebaseio.com/tweets');

	$scope.tweetIndex = $routeParams.id;

	firebaseFactory.angularFireInit(ref, $scope, 'tweets');
});