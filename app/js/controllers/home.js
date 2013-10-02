APP.controller('homeCtrl', function($scope, firebaseFactory, angularFireAuth) {
	var ref = firebaseFactory.instance('https://angular-tweets.firebaseio.com/tweets');

    angularFireAuth.initialize(ref, {scope: $scope, name: "user"});

    $scope.login = function() {
        angularFireAuth.login("facebook");
    };
    $scope.logout = function() {
        angularFireAuth.logout();
    };

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