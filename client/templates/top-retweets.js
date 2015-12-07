Template.topRetweets.helpers({
	'retweetedTweet': function(){
		var twitAccount = Session.get('twitAccount');
		//User's own top retweeted statuses. Not a retweet of another status
		return Tweets.find({user_id: twitAccount, retweeted_status: null}, {sort: {retweet_count: -1}, limit: Session.get('limit')});
	}
});

Template.topRetweets.events({ //Maybe add some clicking on tweet functionality?

});