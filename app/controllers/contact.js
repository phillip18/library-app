import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress: '',
	textMessage: '',

	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isValidMessage: Ember.computed.gte('textMessage.length', 5),
	isValidForm: Ember.computed.and('isValidEmail','isValidMessage'),

	isDisabled: Ember.computed.not('isValidForm'),

	actions: {

		saveInvitation() {
			alert(`Saving the message from: ${this.get('emailAddress')}, with text: ${this.get('textMessage')}`);
			this.set('responseMessage', `We got your message and we’ll get in touch soon...`);
			this.set('emailAddress', '');
			this.set('textMessage', '');
		}
	}

});

