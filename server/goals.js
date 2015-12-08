Meteor.methods({
  'getGoalTypes': function(){
    var goals = JSON.parse(Assets.getText('goal-types.json')).goals;
    return goals;
  },

  'addGoal': function(userId, goalNumber, goalType) {
    console.log("inserting yo");
    Goals.insert({
      user_id: userId,
      type: goalType,
      number: goalNumber,
      createdAt: new Date() 
    });
  },
  'loadGoals': function(userId) {

    
  },
  'getProgress': function(userId, goalTypes) {

  }
});