var mongoose = require('mongoose')

mongoose.Promise = global.Promise

var RateSchema = new mongoose.Schema({
	user_id : {type: String, required: [true, "Anonymous users cannot rate cakes."]},
	value : {type: Number, min: 1, max: 5, required: [true, "A rating cannot be submitted without a rating!"]},
	comment : {type: String, default: ""}
})

var CakeSchema = new mongoose.Schema({
	baker: {type: String, required: true},
	title: {type: String, required: [true, "Cake must have a title."]},
	description: {type: String, default : ""},
	url: {type: String, required: [true, "Cake must have a picture"]},
	rating: {type: Number, default: 5},
	ratings: [RateSchema],
	created_at: {type: Date, default: Date.now()},
	updated_at: {type: Date, default: Date.now()}
})

CakeSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

CakeSchema.post('findOneAndUpdate', function(doc){
	let change = false;
	let sum = 0;
	for(let rating of doc.ratings){
		console.log(sum)
		sum += rating.value
		change = true;
	}
	if(change){
		doc.rating = sum/doc.ratings.length
		doc.save()
	} 
})



mongoose.model('Cake', CakeSchema)