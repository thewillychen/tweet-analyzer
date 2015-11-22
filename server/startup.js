Meteor.startup(function () {
	// code to run on server at startup

    var Twit = Meteor.npmRequire('twit');
    var user =Meteor.users.findOne().services.twitter;
    console.log(Meteor.users.findOne().services.twitter);
    var T = new Twit({
        consumer_key:         process.env.CONSUMERKEY, // API key
        consumer_secret:      process.env.CONSUMERSECRET, // API secret
        app_only_auth:         true
    });

    //  search twitter for all tweets containing the word 'banana'
    //  since Nov. 11, 2011
    T.get('search/tweets',
        {
            q: 'banana since:2011-11-11',
            count: 10
        },
        function(err, data, response) {
            console.log(data);
        }
    );

  });
