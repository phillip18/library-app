import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel() {
		this.get('session').fetch()
	},

	model() {
		return this.store.findAll('contact');
	},

	actions: {

		deleteContact(contact) {
			let confirmation = confirm('Are you sure?');

			if (confirmation) {
				contact.destroyRecord();
			}
		}
	}
});
