userId = '17919972';

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
	'submit form': function(event){
		// TODO: error checking and the likes
		event.preventDefault();

		// Get values
		var goalNumber = event.target.goalNumber.value;
		var goalType = Session.get('selectedGoal');
	    
		// Insert task
	    Meteor.call("addGoal", userId, goalNumber, goalType);

	    // TODO: clear form
	}
});