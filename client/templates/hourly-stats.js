Template.hourlyStats.helpers({
	'hourlyCounts': function(){
		var hourlyCounts = Session.get('hourlyStats');
		hourResults = new Mongo.Collection(null);
		
		for (i = 0; i <hourlyCounts.length; ++i){
			//console.log(hourlyCounts[i].count);
			// console.log(hourlyCounts[i]._id.hour);

			hourResults.insert({hour: hourlyCounts[i]._id.hour, count: hourlyCounts[i].count});
			// console.log(hourResults.findOne({hour: hourlyCounts[i]._id.hour}));
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
			Session.set('showChart', true);
		});
		// console.log(Session.get('hourlyStats'));
	}
});

