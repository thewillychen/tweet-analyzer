Template.topFavorites.helpers({
	'favoriteTweet': function(){
		var twitAccount = Session.get('twitAccount');
		return Tweets.find({user_id: twitAccount}, {sort: {favorite_count: -1}, limit: Session.get('limit')});
	}
});

Template.topFavorites.events({ //Maybe add some clicking on tweet functionality?

});