Template.goalProgress.helpers({

	'goals': function(){
		var twitAccount = Session.get('twitAccount');
		//console.log(Meteor.userId());
		return Goals.find();
	},
	'publicGoals': function(){
		return Goals.find({user_id: {$ne: userId}});
	},
	'isOwner': function(){
		return this.user_id == Session.get('userId');
	}
}); 

Template.goalProgress.events({
	"click .delete": function(){
		Meteor.call('removeGoal', this._id);
	},
	"click .toggle-private": function(){
		Meteor.call('setPrivate', this._id, ! this.private);
	}
});
