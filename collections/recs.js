Recs = new orion.collection('recs', {
	singularName: 'rec',
	pluralName: 'recs',
	link: {
		title: 'Recs'
	},
	tabular: {
		columns: [
			{
				data: "category",
				title: "Category"
			},{
				data: "name",
				title: "Name"
			},{
				data: "content",
				title: "Content"
			}
		]
	}
});

Meteor.methods({
	'recs.insert'(category,name,criteria,content) {
		Recs.insert({
		'category':category,
			'name':name,
			'criteria':criteria,
			'content': content
	})
}
})


Recs.attachSchema(new SimpleSchema({
	category: {
		type: String,
		optional: false,
		label: 'Category'
	},
	name: {
		type: String,
		optional: false,
		label: 'Name'
	},
	criteria: {
		type: String,
		optional: true,
		label: "Criteria"
	},
	content: orion.attribute('summernote', {
		label: "Content"
	}),
}));


