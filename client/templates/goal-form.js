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
		var goalText = event.target.goalText.value;
		var goalNumber = event.target.goalNumber.value;
		var goalType = Session.get('selectedGoal');

		var profile = Meteor.user().services.twitter.profile_image_url;
		var screenName = Meteor.user().services.twitter.screenName;
		var twitId = Meteor.user().services.twitter.id;

		// Insert task
	    Meteor.call('addGoal', Meteor.userId(), screenName, profile,goalText, goalNumber, goalType);

	    // Clear form. TODO: set/clear dropdown
	    event.target.goalNumber.value = "";
	}
});