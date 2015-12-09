Template.goalDropdown.helpers({
	'goalTypes': function(){
		Meteor.call('getGoalTypes', function(err, result){
			Session.set('goalTypes', result);
		});
		return Session.get('goalTypes');	
	}
})

Template.goalDropdown.events({
  'click .goalType': function(event) {
    event.preventDefault();
    var selected = $(event.target).text();
    Session.set('selectedGoal', selected);
  }
});

Template.goalForm.events({
	'submit .new-goal': function(event){
		// TODO: error checking and the likes
		event.preventDefault();

		// Get values
		var goalNumber = event.target.goalNumber.value;
		var goalType = Session.get('selectedGoal');

		// Insert task
	    Meteor.call('addGoal', Session.get('userId'), goalNumber, goalType);

	    // Clear form. TODO: set/clear dropdown
	    event.target.goalNumber.value = "";
	}
});