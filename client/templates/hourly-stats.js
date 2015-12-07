Template.hourlyStats.events({
	'click .getHourlyStats': function(){
		console.log('Hourly Stats');
		Meteor.call('getTweetsByHour', function(err, result){
			Session.set('hourlyStats', result);
		});
	}
});