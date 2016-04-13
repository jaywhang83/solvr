import Ember from 'ember';

export default Ember.Component.extend({
  gmaps: Ember.inject.service('gmaps'),
  isSelected: false,
  actions: {
    showForm(){
      this.get('isSelected')? this.set('isSelected', false): this.set('isSelected', true);
    },
    submitForm(){
      var self = this;
      var random = Math.floor(Math.random() * 100) +1;
      var location = this.get('location')? this.get('location'): 'location' + random;
      this.get('gmaps').geocodeAddress(location).then(function(result){
        var latlng = JSON.stringify(result);
        var params = {
          user: 'user' + random,
          title: self.get('title')? self.get('title'): 'title' + random,
          location: location,
          latlng: latlng,
          reward: self.get('reward')? self.get('reward'): random,
          description: self.get('description')? self.get('description'): 'description' + random,
          isOpen: true,
          date: new Date()
        };

        self.sendAction('sendPost', params);
      });
    }
  }
});
