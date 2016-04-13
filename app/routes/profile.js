import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    console.log(params);
    return this.store.query('user', {
      orderBy: 'email',
      equalTo: 'session.currentUser.email'
    });
  }
});

// export default Ember.Route.extend({
//   model(params){
//     console.log("params", params);
//     return Ember.RSVP.hash({
//       user: this.store.query('profile', {
//         orderBy: 'email',
//         equalTo: params.email
//       }).then(function(results){
//         console.log(results);
//    return results.get('firstObject');
//  })
//     });
//   }
// });
