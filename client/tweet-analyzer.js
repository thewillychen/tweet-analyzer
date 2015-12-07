if (Meteor.isClient) {
  // counter starts at 0
//  Session.setDefault('counter', 0);


  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });

  Template.loadTweets.events({
    'click .loadUserTweets': function () {
      var username = 'EternaLEnVy1991';
      console.log('Loading tweets');
      Meteor.call('loadUserTweets', username);
    }
  });
}
