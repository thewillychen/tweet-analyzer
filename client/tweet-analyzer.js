userId = '17919972';
Meteor.subscribe('topFavorites');
Meteor.subscribe('topRetweets');
Meteor.subscribe('userGoals');
Session.set('userId', userId);
Session.set('twitAccount', userId);
Session.set('limit', 3);