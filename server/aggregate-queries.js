userId = '17919972';
Meteor.methods({
	'getTweetsByHour': function(){
	var pipeline = [{$group:{_id: {hour: {$hour: '$date'}}, count: {$sum: 1}}}];
	var hourlyCounts = Tweets.aggregate(pipeline);
	return hourlyCounts;		
	}
});