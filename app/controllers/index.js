// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  userName: '',
  password: '',
  rememberMeBox: '',
  submitButton: '',

  emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  emailNotValid: Ember.computed.not('emailIsValid'),

  passwordIsValid: Ember.computed.match('password', /^.+@.+\..+$/),
  passwordNotValid: Ember.computed.not('passwordIsValid'),

  isDisabled: Ember.computed.or('emailNotValid', 'passwordNotValid'),

  actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }

});
