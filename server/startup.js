Meteor.startup(function () {
	// code to run on server at startup

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
    var options = { screen_name: 'godinthischilis', count: 2};

    T.get('statuses/user_timeline', options, Meteor.bindEnvironment(function(err, tweets, response){
        for (var i = 0; i < tweets.length ; i++) {
             var userName = tweets[i].user.name;
             var userScreenName = tweets[i].user.screen_name;
             var userText = tweets[i].text;
             var tweetDate = tweets[i].created_at;
             var profileImg = tweets[i].user.profile_image_url;

            console.log(userScreenName + "(" + userName + ")" + " said " + userText + " at " + tweetDate);
            console.log("=======================================");
            Tweets.insert({user: userName, userscreen: userScreenName, tweet: userText, picture: profileImg, date: tweetDate});


            // console.log(tweet[i].text);
            // Tweets.insert(tweet[i].text);
            // console.log("Tweet parsed \n");

            // console.log(Tweets.findOne());
        }
        console.log('done');
    }));

  });
