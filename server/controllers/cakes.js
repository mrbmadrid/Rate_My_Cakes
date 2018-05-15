var mongoose = require('mongoose')
var Cake = mongoose.model('Cake')

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
		var cake = new Cake({baker: req.body._id, title : req.body.cake.title, description : req.body.cake.description, url: req.body.cake.url, ratings : []})
		cake.save(function(err){
			if(err){
				res.json({success : false})
			}else{
				res.json({success : true})
			}
		})
	},

	rate : function(req, res){
		Cake.update({_id : req.params.id}, {$set : {$push : {ratings : {user_id: req.session.id, }}}}, function(err){
			if(err){
				res.json({success:false})
			}else{
				res.json({success : true})
			}
		})
	},

	update : function(req, res){
		Cake.findOneAndUpdate({_id : req.params.id}, {$push : {ratings : {user_id: req.body.user_id, value: req.body.rate, comment: req.body.comment}}}, function(err){
			if(err){
				res.json({success:false})
			}else{

				res.json({success : true})
			}
		})
	},


	delete : function(req, res){
		Cake.remove({_id:req.params.id}, function(err){
			if(err){
				res.json({success:false})
			}else{
				res.json({success : true})
			}
		})
	}
}