userId = '17919972';
Meteor.methods({
	'getTweetsByHour': function(){
		//var UserTweets = Tweets.find({user_id: userId});
		var pipeline = [{$group:{_id: {hour: {$hour: '$date'}}, count: {$sum: 1}}}];
		var hourlyCounts = Tweets.aggregate(pipeline);
		return hourlyCounts;		
	},
	'getTweetRate': function(){
		oldestTweet = Tweets.findOne({user_id: userId},{sort: {date: 1}, limit: 1}).date;
		var currentDate = new Date();
		console.log(oldestTweet);
		console.log(currentDate);
		var diff = Math.abs(currentDate - oldestTweet);
		var days = new Date(diff);
		console.log(days);
		return days;
	}

});