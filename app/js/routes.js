APP.config(function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: 'templates/home.html', controller: 'homeCtrl'}).
		when('/tweet/:id', {templateUrl: 'templates/tweet.html', controller: 'tweetCtrl'}).
		otherwise({redirectTo: '/'});
});