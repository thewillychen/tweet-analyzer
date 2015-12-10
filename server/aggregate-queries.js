userId = '17919972';
Meteor.methods({
	'getTweetsByHour': function(){
		//var UserTweets = Tweets.find({user_id: userId});
		var pipeline = [{$group:{_id: {hour: {$hour: '$date'}}, count: {$sum: 1}}}];
		var hourlyCounts = Tweets.aggregate(pipeline);
		return hourlyCounts;		
	},
	'getTweetRate': function(){
		var currentDay = moment();
		var old = Tweets.findOne({user_id: userId},{sort: {date: 1}, limit: 1}).date;
		var oldestTweet = moment(old);
		var days = currentDay.diff(oldestTweet, 'days');
		return Tweets.find().count()/days;
	},


});