
FlowRouter.route('/results', {
	action: function(){
		BlazeLayout.render("mainLayout", {content:"results"});
	}
});

FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("mainLayout", {content:"main"});
	}
});

FlowRouter.route('/content', {
	action: function() {
		BlazeLayout.render("mainLayout", {content:"content"});
	}
});