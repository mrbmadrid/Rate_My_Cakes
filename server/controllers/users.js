var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
	register : function(req, res){
		let user = new User({f_name: req.body.f_name, l_name: req.body.l_name, email: req.body.email, password: req.body.password})
		user.save(function(err){
			if(err){
				let errors = []
				let messages = err['message'].split(", ")
				for(let i in messages){
					let temp = messages[i].split(": ")
					errors.push(temp[temp.length-1])
				}
				res.json({success: false, errors})
			}else{
				res.json({success: true, user: {_id: user._id, f_name: user.f_name}})
			}
		})
	},

	login : function(req, res){
		User.findOne({email: req.body.email}, function(err, user){
			if(err){
				let errors = []
				let messages = err['message'].split(", ")
				for(let i in messages){
					let temp = messages[i].split(": ")
					errors.push(temp[temp.length-1])
				}
				res.json({success: false, errors})
			}else if(user){
				res.json({success: true, user : {_id: user._id, f_name: user.f_name}})
			}else{
				res.json({success: false, errors:["Failed to log in."]});
			}
		})
	}
}