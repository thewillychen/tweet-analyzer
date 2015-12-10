Meteor.methods({
  'getGoalTypes': function(){
    var goals = JSON.parse(Assets.getText('goal-types.json')).goals;
    return goals;
  },
  'addGoal': function(userId, screenName, profilePic, goalText, goalNumber, goalType) {
    Goals.insert({
      user_id: userId,
      screen_name: screenName,
      profile_image_url: profilePic,
      text: goalText,
      type: goalType,
      number: goalNumber,
      createdAt: new Date(),
      private: false 
    });
  },
  'removeGoal': function(goalId){
    Goals.remove({_id: goalId});
  },
  'setPrivate': function(goalId, setPrivacy){
    Goals.update(goalId, {$set: {private: setPrivacy}});
  },

  'getProgress': function(userId, goalTypes) {
    //Make api calls to twitter
  }
});