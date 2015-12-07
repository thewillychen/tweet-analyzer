function createUserMentionsArray(userMentions){
  var mentionsStrArray = [];
  for(var i = 0; i < userMentions.length; i++){
    mentionsStrArray.push(userMentions[i].id_str);
  }
  return mentionsStrArray;
}

Meteor.methods({
  'loadUserTweets': function(username){
    //Tweets._ensureIndex({'tweet_id':1}, {unique: 1}); //unique indexes
    //TwitUsers._ensureIndex({'user_id':1}, {unique: 1});

    var Twit = Meteor.npmRequire('twit');
    //var user =Meteor.users.findOne().services.twitter;
    //console.log(Meteor.users.findOne().services.twitter);

    //load consumer key and secret through a twitter.json file in private folder
    var conf = JSON.parse(Assets.getText('twitter.json'));
    var T = new Twit({
      consumer_key: conf.consumer.key, // API key
      consumer_secret: conf.consumer.secret, // API secret
      app_only_auth: true
    });

    //Search usertimeline tweets
    var options = { screen_name: username, count: 200, include_rts: true};

    T.get('statuses/user_timeline', options, Meteor.bindEnvironment(function(err, tweets, response){
      for (var i = 0; i < tweets.length ; i++) {
        //users data:
        var userId = tweets[i].user.id_str;
        var userName = tweets[i].user.name;
        var userScreenName = tweets[i].user.screen_name;
        var profileImg = tweets[i].user.profile_image_url;

        //Tweet data:
        var tweetId = tweets[i].id_str;
        var userText = tweets[i].text;
        var tweetDate = tweets[i].created_at;
        var retweetOfStatus = tweets[i].retweeted_status;
        var retweetCount = tweets[i].retweet_count;
        var favoriteCount = tweets[i].favorite_count;
        var geoLocation = tweets[i].coordinates;
        var placeObj = tweets[i].place;
        var language = tweets[i].lang;
        var userMentions = createUserMentionsArray(tweets[i].entities.user_mentions); //Currently not working


        //retweet info
        var retweetedUser = tweets[i].in_reply_to_user_id_str;
        var retweetedStatus = tweets[i].in_reply_to_status_id_str;
        var retweetedUserScreenName = tweets[i].in_reply_to_screen_name;


        console.log(userScreenName + "(" + userName + ")" + " said " + userText + " at " + tweetDate);
        console.log("=======================================");
        //Insert into Tweets collection
        Tweets.insert({
          tweet_id: tweetId, //set primary key _id as tweetId - also
          user_id: userId, //primary key in User collection, referenced through this id
          user_screen: userScreenName, //This field might be unnecessary in Tweets
          text: userText,
          date: new Date(tweetDate),
          retweeted_status: retweetOfStatus,
          retweet_count: retweetCount,
          favorite_count: favoriteCount,
          coordinates: geoLocation,
          place: placeObj,
          lang: language,
          user_mentions: userMentions,
          in_reply_to_user_id_str: retweetedUser,
          in_reply_to_status_id_str: retweetedStatus,
          in_reply_to_screen_name: retweetedUserScreenName
        });

        //Insert into TwitUsers collection - might need to store more info
        if(TwitUsers.find({user_id: userId}).count() == 0){  //Really ugly since it's doing a find each time currently
          TwitUsers.insert({
            user_id: userId,
            name: userName,
            screen_name: userScreenName,
            profile_img_url: profileImg
          });
        }
      }
      console.log('done');
    }));
  }
});
