userId = '17919972';
Meteor.subscribe('topFavorites');
Meteor.subscribe('topRetweets');
Session.set('userId', userId);
Session.set('twitAccount', userId);
Session.set('limit', 3);
Meteor.call("loadGoals", Session.get('userId'), function(err, result){
	console.log("client fn called");
	Session.set('goals', result);
});	
//  Session.setDefault('counter', 0);