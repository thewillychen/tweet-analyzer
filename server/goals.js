Meteor.methods({
  'getGoalTypes': function(){
    var goals = JSON.parse(Assets.getText('goal-types.json')).goals;
    return goals;
  },

  'addGoal': function(userId, goalNumber, goalType) {
    Goals.insert({
      user_id: userId,
      type: goalType,
      number: goalNumber,
      createdAt: new Date() 
    });
  },

  'loadGoals': function(userId) {
    console.log("server fn called");
    return Goals.find({user_id: userId}, {sort: {createdAt: -1}});
  }
});