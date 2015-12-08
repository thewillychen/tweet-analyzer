Template.dailyRate.helpers({
	'tweetRate': function(){
		Meteor.call('getTweetRate', function(err, result){
			Session.set('dailyRate', result);
		});		
		return Session.get('dailyRate');
	}
});