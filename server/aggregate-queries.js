userId = '17919972';
Meteor.methods({
	'getTweetsByHour': function(){
	var pipeline = [
		// {$match: {user_id: userId}},
		{$group:{
			_id:{ null}, //hour:{$hour: '$date'}},
			// averageLength: {$avg: '$this.text.length'},
			count: {$sum: 1}
		 }
		}
	];
	var result = Tweets.aggregate(pipeline);
	console.log(results);
	return result;		
	}
});