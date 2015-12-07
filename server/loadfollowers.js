userId = '17919972';

Meteor.methods({
  'loadFollowers': function(username) {
    //Tweets._ensureIndex({'tweet_id':1}, {unique: 1}); //unique indexes
    //TwitUsers._ensureIndex({'user_id':1}, {unique: 1});

    var Twit = Meteor.npmRequire('twit');
    //var user =Meteor.users.findOne().services.twitter;
    //console.log(Meteor.users.findOne().services.twitter);

    //load consumer key and secret through a twitter.json file in private folder
    var conf = JSON.parse(Assets.getText('twitter.json'));
    var T = new Twit({
      consumer_key: conf.consumer.key,
      consumer_secret: conf.consumer.secret,
      access_token: conf.access_token.key,
      access_token_secret: conf.access_token.secret
    });

    //Search usertimeline tweets
    var options = {user_id: username};

    T.get('followers/list', options, Meteor.bindEnvironment(function(err, users, response){
      for (var i = 0; i < users.length ; i++) {

        console.log(users[i].screen_name);
        console.log("=======================================");
        // //Insert into Tweets collection
        // Tweets.insert({
        //   tweet_id: tweetId, //set primary key _id as tweetId - also
        //   user_id: userId, //primary key in User collection, referenced through this id
        //   user_screen: userScreenName, //This field might be unnecessary in Tweets
        //   text: userText,
        //   date: new Date(tweetDate),
        //   retweeted_status: retweetOfStatus,
        //   retweet_count: retweetCount,
        //   favorite_count: favoriteCount,
        //   coordinates: geoLocation,
        //   place: placeObj,
        //   lang: language,
        //   user_mentions: userMentions,
        //   in_reply_to_user_id_str: retweetedUser,
        //   in_reply_to_status_id_str: retweetedStatus,
        //   in_reply_to_screen_name: retweetedUserScreenName
        // });

        // //Insert into TwitUsers collection - might need to store more info
        // if(TwitUsers.find({user_id: userId}).count() == 0){  //Really ugly since it's doing a find each time currently
        //   TwitUsers.insert({
        //     user_id: userId,
        //     name: userName,
        //     screen_name: userScreenName,
        //     profile_img_url: profileImg
        //   });
        // }
      }
      console.log('done');
    }));
  }
});
