Meteor.methods({
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