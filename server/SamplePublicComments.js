Meteor.startup(function () {
	Goals.remove({});
	Goals.insert({
      user_id: '0',
      screen_name: 'FakeTwitterUser1',
      profile_image_url: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_1_normal.png',
      text: 'Lorem ipsum dolor sit amet.',
      type: 'Retweets',
      number: 5000,
      createdAt: new Date(),
      private: false 
    });

    Goals.insert({
      user_id: '0',
      screen_name: 'FakeTwitterUser2',
      profile_image_url: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_2_normal.png',
      text: 'Aenean eget lacus molestie, finibus.',
      type: 'Favorites',
      number: 4,
      createdAt: new Date(),
      private: false 
    });

    	Goals.insert({
      user_id: '0',
      screen_name: 'FakeTwitterUser3',
      profile_image_url: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png',
      text: 'Quisque dictum accumsan efficitur. Proin.',
      type: 'Followers',
      number: 800,
      createdAt: new Date(),
      private: false 
    });
    
    	Goals.insert({
      user_id: '0',
      screen_name: 'FakeTwitterUser4',
      profile_image_url: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_4_normal.png',
      text: 'Aenean id fermentum enim, et.',
      type: 'Retweets',
      number: 50,
      createdAt: new Date(),
      private: false 
    });

   	Goals.insert({
      user_id: '0',
      screen_name: 'FakeTwitterUser5',
      profile_image_url: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png',
      text: 'Morbi pharetra lacus quis auctor.',
      type: 'TweetsCount',
      number: 1,
      createdAt: new Date(),
      private: false 
    });

   	Goals.insert({
      user_id: '0',
      screen_name: 'FakeTwitterUser6',
      profile_image_url: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_6_normal.png',
      text: 'Donec dapibus finibus tellus sed.',
      type: 'Retweets',
      number: 9000,
      createdAt: new Date(),
      private: false 
    });
	// code to run on server at start
});
