import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress: '',
	textMessage: '',

	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isValidMessage: Ember.computed.gte('textMessage.length', 5),
	isValidForm: Ember.computed.and('isValidEmail','isValidMessage'),

	isDisabled: Ember.computed.not('isValidForm'),

	actions: {

		sendMessage() {
			const email = this.get('emailAddress');
			const message = this.get('textMessage');

						const newMessage = this.store.createRecord('contact', { 
							email: email,
							message: message
						});
						
						newMessage.save().then(() => {
								this.set('responseMessage', `We got your message and we’ll get in touch soon.`);
						});
				}
		}});

