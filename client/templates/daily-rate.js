Template.dailyRate.helpers({
	'tweetRate': function(){
		if(Session.get('dailyRate') == null)
			return null;
		else
			return Session.get('dailyRate').toFixed(3);
	}
});

Template.dailyRate.onCreated(function(){
	Meteor.call('getTweetRate', function(err, result){
		Session.set('dailyRate', result);
	//	console.log(Session.get('dailyRate'));
	});		
	return Session.get('dailyRate');
});