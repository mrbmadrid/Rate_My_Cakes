var mongoose = require('mongoose')

mongoose.Promise = global.Promise

var UserSchema = new mongoose.Schema({
	f_name: {type: String, required: [true, "First name is required."]},
	l_name: {type: String, required: [true, "Last name is required."]},
	email: {type: String, required: [true, "Email is required."], unique: true},
	password: {type: String, required: [true, "Password is required."]},
	registered_at: {type: Date, default: Date.now()},
	last_log_in: {type: Date, default: Date.now()}
})
UserSchema.pre('save', function(next) {
  this.last_log_in = Date.now();
 	//backend validation
  next();
});

mongoose.model('User', UserSchema)