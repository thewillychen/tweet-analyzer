Template.loadTweets.events({
  'click .loadUserTweets': function () {
    var username = 'taylorswift13';
    console.log('Loading tweets');
    Meteor.call('loadUserTweets', username);
  }
});