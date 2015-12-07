Meteor.publish('userTweets', function(){
	// console.log(this.userId) Replace hardcoded userid with the actual login'd in user's
	var userId = '237097346'
	return Tweets.find({user_id: userId});
});