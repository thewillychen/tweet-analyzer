userId = '17919972';
Meteor.subscribe('topFavorites');
Meteor.subscribe('topRetweets');
Meteor.subscribe('userGoals');
Meteor.subscribe('publicGoals');
Meteor.subscribe('userData');
Session.set('userId', userId);
Session.set('twitAccount', userId);
Session.set('limit', 3);