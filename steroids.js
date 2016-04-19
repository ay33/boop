if (Meteor.isClient) {
  // counter starts at 0
	var items = [
		{
			name: "Bone Health",
			link: "bone",
			icon: "/bone.png",
			content: "osteoporosis :("
		},
		{
			name: "Cardiovascular", 
			link:"cardio",
			icon: "/heart.png",
			content: "asdfjsakldfjlsa"
		},
		{
			name: "Endocrine", 
			link: "endocrine",
			content: "diabetes"
		},
		{
			name: "Infections", 
			link: "infection",
			content: "lots of infections"
		},
		{
			name:	"Gastrointestinal", 
			link: "gastro",
			content:"GI"
		},
		{
			name: "Mood and Psych",
			link: "psych",
			content:"mania"
		},
		{
			name: "Myopathy",
			link: "myopathy",
			content: "muscle weakness..."
		},
		{
			name: "Ocular",
			link: "ocular",
			content: "cataracts..."
		},
		{
			name: "Vaccinations",
			link: "vaccines",
			content: "vaccines..."
		}
	];
	
	var formParams= [
	{
		 label: "Choose glucocorticoid:",
		 group: "glucocorticoids",
		options: [
		{ 
			id: "prednisone",
			name: "Prednisone"
		},
		{
			id: "prednisolone",
			name: "Prednisolone"
		},
		{
			id: "hydrocortisone",
			name: "Hydrocortisone"
		},
		{
			id: "methylpred",
			name: "Methylprednisolone"
		}]		
	},
	{
		label: "Age:",
		group: "age",
		options:
		[{
			id: "under65",
			name: "Under 65 yo"
		},
		{
			id: "over65",
			name: "Over 65 yo"
		}]		
	},
	{
		label: "Gender:",
		group: "gender",
		options:
		[{
			id: "male",
			name: "Male"
		},
		{
			id: "female",
			name: "Female"
		}]
	}
	];
	
	Template.main.helpers({
		'form': function(){
			return formParams
		}
	});
	
	Template.results.helpers({
		'items': function(){
			return items
		}
	});
	
	Template.main.events({
		'submit form': function(event){
			event.preventDefault()
			FlowRouter.go('/results')
			
		}
	});

	// Template.results.events({
	// 	'click li': function(event){
	// 		event.preventDefault()
	// 		FlowRouter.go('/content')}
	// });
	    }

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
	  // $(document).ready(function(){
 // 	      $('.collapsible').collapsible({
 // 	        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	      // });
	    });
}
