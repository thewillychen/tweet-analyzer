Template.dailyRate.onCreated(function(){
	Meteor.call('getTweetsByHour', function(err, result){
		Session.set('hourlyStats', result);
	});
});

Template.hourlyStats.helpers({
	'hourlyCounts': function(){
		var hourlyCounts = Session.get('hourlyStats');
		if(hourlyCounts == null)
			return null;
		hourResults = new Mongo.Collection(null);
		
		for (i = 0; i <hourlyCounts.length; ++i){
			hourResults.insert({hour: hourlyCounts[i]._id.hour, count: hourlyCounts[i].count});
		}		
		return hourResults.find({}, {sort: {hour:1}});
	},
	'showChart': function(){
        return Session.get('showChart');
    },
});

Template.hourlyStats.events({
	'click .getHourlyStats': function(){
		Meteor.call('getTweetsByHour', function(err, result){
			Session.set('hourlyStats', result);
		});
		Session.set('showChart', true);
	}
});

