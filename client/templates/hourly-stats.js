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
		console.log('counts');
		for (i = 0; i <hourlyCounts.length; ++i){
			//console.log(hourlyCounts[i].count);
			//console.log(hourlyCounts[i]._id.hour);

			hourResults.insert({hour: hourlyCounts[i]._id.hour, count: hourlyCounts[i].count});
			//console.log(hourResults.findOne({hour: hourlyCounts[i]._id.hour}));
		}		
		return hourResults.find({}, {sort: {hour:1}});
	}
});

Template.hourlyStats.events({
	'click .getHourlyStats': function(){
		//console.log('Hourly Stats');
		Meteor.call('getTweetsByHour', function(err, result){
			Session.set('hourlyStats', result);
		});
		//console.log(Session.get('hourlyStats'));
	}
});