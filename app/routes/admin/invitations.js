import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel() {
		this.get('session').fetch()
	},

	model() {
		return this.store.findAll('invitation');
	},

	actions: {

		deleteInvitation(invitation) {
			let confirmation = confirm('Are you sure?');

			if (confirmation) {
				invitation.destroyRecord();
			}
		}
	}

});
