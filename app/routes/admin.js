import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel(){
		let session = this.get('session');
		if(!session.get('isAuthenticated')){
			this.transitionTo('login');
		}
	},

	actions: {
		login: function() {
			var controller = this.get('controller');
			var email = controller.get('userEmail');
			var password = controller.get('userPassword');
			this.get('session').open('firebase', {
				provider: 'password',
				email: email,
				password: password
			}).then(function() {
				this.transitionTo('index');
			}.bind(this));
		},

		logout: function() {
			this.get('session').close().then(function() {
				this.transitionTo('index');}.bind(this));
		}
	}
});