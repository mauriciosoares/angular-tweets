NGT.controller('homeCtrl', function($scope, angularFire) {
	var ref = new Firebase('https://angular-tweets.firebaseio.com/tweets');

	$scope.tweets = [];

	$scope.saveTweet = function() {
		if($scope.newTweet !== '' && $scope.newTweet !== undefined) {
			$scope.tweets.push({
				user: 'mauriciosoares',
				tweet: $scope.newTweet
			});

			$scope.newTweet = '';
		}
	};

	angularFire(ref, $scope, 'tweets');
});