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
      createdAt: new Date() 
    });
  },
  'removeGoal': function(goalId){
    Goals.remove({_id: goalId});
  },

  'getProgress': function(userId, goalTypes) {
    //Make api calls to twitter
  }
});