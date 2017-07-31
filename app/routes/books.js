import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel() {
		this.get('session').fetch()
	},

	model() {
		return this.store.findAll('book');
	}

});
