userId = '17919972';
returnLimit = 3;
Meteor.publish('topFavorites', function(){
	// console.log(this.userId) Replace hardcoded userid with the actual login'd in user's
	return Tweets.find({user_id: userId}, {sort: {favorite_count: -1}, limit: returnLimit});
	//return Tweets.find({user_id: userId});
});

Meteor.publish('topRetweets', function(){
	return Tweets.find({user_id: userId, retweeted_status: null}, {sort: {retweet_count: -1}, limit: returnLimit});
});

Meteor.publish('userGoals', function(){
	return Goals.find({user_id: this.userId}, {sort: {createdAt: -1}, limit: 10});
});

Meteor.publish('publicGoals', function(){
	return Goals.find({private: false}, {limit: 10});
});

Meteor.publish('userData', function(){
	if(this.userId){
		return Meteor.users.find({_id: this.userId},
        {fields: {'services.twitter.profile_image_url': 1, 'services.twitter.id': 1, 'services.twitter.screenName': 1}});
	}
});