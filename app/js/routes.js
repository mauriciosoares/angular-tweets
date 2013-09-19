NGT.config(function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: 'templates/home.html', controller: 'homeCtrl'}).
		otherwise({redirectTo: '/'});
});