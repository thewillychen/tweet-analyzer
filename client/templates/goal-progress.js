userId = "17919972";

Meteor.call('loadGoals', userId, function(err, result){
	console.log("loading goals");
	Session.set('goals', result);
});

Template.goalProgress.helpers({
	'goals': function(){
		return Session.get('goals');
	}
}); 
