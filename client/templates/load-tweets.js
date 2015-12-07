Template.loadTweets.events({
  'click .loadUserTweets': function () {
    var username = 'EternaLEnVy1991';
    console.log('Loading tweets');
    Meteor.call('loadUserTweets', username);
  }
});