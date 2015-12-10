Template.goalProgress.helpers({
	'goals': function(){
		var twitAccount = Session.get('twitAccount');
		//console.log(Meteor.userId());
		return Goals.find({user_id: Meteor.userId()});
	},
	'isOwner': function(){
		return this.user_id == Meteor.userId();
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

Template.publicGoals.helpers({
	'publicGoals': function(){
		console.log(Goals.find({private: false}).count());
		return Goals.find({private: false});
	}	
});
