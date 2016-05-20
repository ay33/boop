if (Meteor.isClient) {
	
	
	

	
	var items = [
		{
			name: "Bone Health",
			link: "bone",
			icon: "/bone.png",
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
	// {
	// 	label: "Gender:",
	// 	group: "gender",
	// 	options:
	// 	[{
	// 		id: "male",
	// 		name: "Male"
	// 	},
	// 	{
	// 		id: "female",
	// 		name: "Female"
	// 	}]
	// }
	];
	
	Template.main.helpers({
		'form': function(){
			return formParams
		}
	});
	
	Template.results.helpers({
		'items': function(){
			return items},
		
		'content': function(){
			//get query parameters
			var params = {
				age: FlowRouter.getQueryParam("age"),
				gender: FlowRouter.getQueryParam("gender"),
				duration: FlowRouter.getQueryParam("duration"),
				dose: FlowRouter.getQueryParam("dose")
			}
		
			//loop throgh items and select the ones that apply
			
			var content = _.chain(RecsList)
			   .filter(function(RecsList){ return RecsList.include})
				// .map(function(recs){ return [{name: recs.name, title: recs.category, content: recs.content }]})
			   .value()
			return content
			}
				});
					
 
			
			
	// 		//return true if criteria match any criteria for the item (change criteria)
	// 			return _.some(item.criteria, function(crit){
	// 				return meetsCriteria(crit, params);
	//
	// 			})
	// 		})
	//
	//
	// 		return items
	// 	}
	// });

	Template.main.events({
		'submit form': function(event){
			event.preventDefault();
			
			//get values of inputs
			var age = event.target.age.value;
			var d = event.target.dose.value;
			var duration = event.target.duration.value;
			var steroid = $('#glucocorticoids label.active input').val();
			var gender= $('#gender label.active input').val();
			
			//calculate/normalize data 
			if (steroid = "hydrocortisone") {
				var dose= d/4;
			} else if (steroid ="methylpred") {
				var dose = d * 5/4;
			} else {
				var dose=d;
			};
	
			var queryParams = {
				age: age,
				gender: gender,
				duration: duration,
				dose: dose
			}
			
			//pass data in as queryParams
			
			FlowRouter.go('/results', {}, queryParams);
			
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
