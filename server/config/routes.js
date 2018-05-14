require('./mongoose')
var Cakes = require('../controllers/cakes')

module.exports = function(app){

	app.get('/cakes', function(req, res){
		Task.getAll(req, res)
	})

	app.get('/cakes/:id', function(req, res){
		Task.getOne(req, res)
	})

	app.post('/cakes', function(req, res){
		console.log(req)
		Task.add(req, res)
	})

	app.put('/cakes/rate/:id', function(req, res){
		Task.rate(req, res)
	})

	app.put('/cakes/:id', function(req, res){
		Task.update(req, res)
	})

	app.delete('/cakes/:id', function(req, res){
		Task.delete(req, res)
	})

}