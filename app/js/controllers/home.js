NGT.controller('homeCtrl', function($scope, angularFire) {
	var ref = new Firebase('https://angular-tweets.firebaseio.com/tweets');

	$scope.tweets = [];

	$scope.saveTweet = function() {
		if($scope.newTweetMessage !== '' && $scope.newTweetMessage !== undefined) {
			$scope.tweets.push({
				id: $scope.tweets.length,
				user: $scope.newTweetUser,
				tweet: $scope.newTweetMessage
			});

			$scope.newTweetMessage = '';
		}
	};

	angularFire(ref, $scope, 'tweets');
});