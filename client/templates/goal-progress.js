Template.goalProgress.helpers({
	'goals': function(){
		var twitAccount = Session.get('twitAccount');
		console.log(Goals.findOne());
		return Goals.find();
	}
}); 

Template.goalProgress.events({
	"click .delete": function(){
		Meteor.call('removeGoal', this._id);
	}
})
