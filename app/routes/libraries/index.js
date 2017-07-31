import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.get('session').fetch()
  },
  
  model() {
    return this.store.findAll('library');
  },

  actions: {

    deleteLibrary(library) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        library.destroyRecord();
      }
    }
  }
});