APP.factory('firebaseFactory', function(angularFire) {
	return {
		instance: function(url) {
			return new Firebase(url);
		},
		angularFireInit: function(ref, scope, location) {
			angularFire(ref, scope, location);
		}
	};
});