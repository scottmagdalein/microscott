Meteor.Router.add({
	'/': 'postsList'
	'/posts/:id': {
		to: 'postPage',
		and: function(id) { Session.set('currentPostId', id); }
	}
});