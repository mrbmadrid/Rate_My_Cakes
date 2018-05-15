var mongoose = require('mongoose')
var Cake = mongoose.model('User')

module.exports = {
	getAll : function(req, res){
		Cake.find({}, function(err, cakes){
			if(err){
				console.log(err)
			}else{
				res.json({cakes: cakes})
			}
		})
	},

	getOne : function(req, res){
		Cake.find({_id : req.params.id}, function(err, cake){
			if(err){
				console.log(err)
			}else{
				res.json({cake: cake})
			}
		})
	},

	add : function(req, res){
		console.log(req)
		var cake = new Cake({baker: req.body.name, title : req.body.title, description : req.body.description})
		cake.save(function(err){
			if(err){
				console.log(err)
				res.json({success : false})
			}else{
				res.json({success : true})
			}
		})
	},

	rate : function(req, res){
		Cake.update({_id : req.params.id}, {$set : {$push : {ratings : {user_id: req.session.id, }}}}, function(err){
			if(err){
				console.log(err)
				res.json({success:false})
			}else{
				res.json({success : true})
			}
		})
	},

	update : function(req, res){
		Cake.update({_id : req.params.id}, {$set : {$push : {ratings : {user_id: req.session.id, rate: req.body.rate, comment: req.body.comment}}}}, function(err){
			if(err){
				console.log(err)
				res.json({success:false})
			}else{
				res.json({success : true})
			}
		})
	},

	delete : function(req, res){
		Cake.remove({_id:req.params.id}, function(err){
			if(err){
				console.log(err)
				res.json({success:false})
			}else{
				res.json({success : true})
			}
		})
	}
}