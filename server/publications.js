userId = '237097346'
Meteor.publish('userTweets', function(){
	// console.log(this.userId) Replace hardcoded userid with the actual login'd in user's
	return Tweets.find({user_id: userId});
});