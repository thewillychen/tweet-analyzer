userId = '17919972';
Meteor.subscribe('topFavorites');
Meteor.subscribe('topRetweets');
Meteor.subscribe('userGoals');
Session.set('userId', userId);
Session.set('twitAccount', userId);
Session.set('limit', 3);

//Session.set('goals', Goals.find({user_id: userId}, {sort: {createdAt: -1}}));
// Meteor.call('loadGoals', Session.get('userId'), function(err, result){
// 	console.log(err);
// 	console.log(result);
// 	Session.set('goals', result);
// });	
//  Session.setDefault('counter', 0);