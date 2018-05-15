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

mongoose.model('Cake', CakeSchema)