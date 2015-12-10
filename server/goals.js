Meteor.methods({
  'getGoalTypes': function(){
    var goals = JSON.parse(Assets.getText('goal-types.json')).goals;
    return goals;
  },

  'addGoal': function(userId, goalText, goalNumber, goalType) {
    Goals.insert({
      user_id: userId,
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