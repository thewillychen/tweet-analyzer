Template.loadFollowers.events({
  'click .loadUserFollowers': function () {
    var username = 'taylorswift13';
    console.log('Loading followers');
    Meteor.call('loadUserFollowers', username);
  }
});