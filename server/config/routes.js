require('./mongoose')
var Cake = require('../controllers/cakes')
var User = require('../controllers/users')

module.exports = function(app){

	app.get('/cakes', function(req, res){
		Cake.getAll(req, res)
	})

	app.get('/cakes/:id', function(req, res){
		Cake.getOne(req, res)
	})

	app.post('/cakes/login', function(req, res){
		User.login(req, res);
	})

	app.post('/cakes/register', function(req, res){
		User.register(req, res);
	})

	app.post('/cakes', function(req, res){
		Cake.add(req, res)
	})

	app.put('/cakes/:id', function(req, res){
		Cake.update(req, res)
	})

	app.delete('/cakes/:id', function(req, res){
		Cake.delete(req, res)
	})

}