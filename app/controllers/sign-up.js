import Ember from 'ember';

export default Ember.Controller.extend({
  signUp: false,
  firebase: Ember.inject.service(),
  gmaps: Ember.inject.service('gmaps'),
  actions: {
    signUp(){
      let controller = this;
      var location = this.get('gmaps').geocodeAddress(this.get('address'));
      location.then(function(result){
        var params = {
          email: controller.get('email') || '',
          firstName: controller.get('firstName') || '',
          lastName: controller.get('lastName') || '',
          address: controller.get('address') || '',
          phoneNumber: controller.get('phoneNumber') || '',
          skills: controller.get('skills') || '',
          latlng: JSON.stringify(result)
        }
        var newUser = controller.store.createRecord('user', params);
        params.password = controller.get('password' || '');
        newUser.save();
        controller.get('firebase').createUser(params, (error, data) => {
          if(error) {
            console.log(error);
          } else {
            controller.set('email', null);
            controller.set('password', null);
            controller.transitionToRoute('sign-in');
          }
      });
      })
    }
  }
});
