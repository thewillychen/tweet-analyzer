userId = '17919972';
Meteor.subscribe('topFavorites');
Meteor.subscribe('topRetweets');
Session.set('twitAccount', userId);
Session.set('limit', 3);	
//  Session.setDefault('counter', 0);