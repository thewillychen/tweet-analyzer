var goals = JSON.parse(Assets.getText('goal-types.json')).goals;
Meteor.methods({
	'getGoalTypes': function(){
		return goals;
	}
});