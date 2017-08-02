import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({

	firebase: Ember.inject.service(),

actions:{

		open: function(authentication){
			var authorizationCode = authentication.authorizationCode;
			return new Ember.RSVP.Promise(function(resolve, reject){
				Ember.$.ajax({
					url: 'api/session',
					data: { 'firebase': authorizationCode },
					dataType: 'json',
					success: Ember.run.bind(null, resolve),
					error: Ember.run.bind(null, reject)
				});
			}).then(function(user){
				return {
	      			currentUser: user
	      		};
	  		});
		}
	}
});
