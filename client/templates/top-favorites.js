Template.topFavorites.helpers({
	'favoriteTweet': function(){
		var twitAccount = Session.get('twitAccount');
		return Tweets.find({}, {sort: {favorite_count: -1}, limit: Session.get('limit')});
	}
});

Template.mostFavorited.events({ //Maybe add some clicking on tweet functionality?

});