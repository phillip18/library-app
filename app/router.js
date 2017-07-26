import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
<<<<<<< b3e2d5430d7785f9123888dba5401468714044bc
  this.route('contact');
=======
>>>>>>> Lesson 1 - Creating a index and about pages among the navbar in the application.hbs
});

export default Router;
