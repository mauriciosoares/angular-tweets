APP.controller('homeCtrl', function($scope, firebaseFactory) {
	var ref = firebaseFactory.instance('https://angular-tweets.firebaseio.com/tweets');

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

	firebaseFactory.angularFireInit(ref, $scope, 'tweets');
});