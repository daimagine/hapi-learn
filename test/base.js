var Hapi 	= require('hapi');
var Lab		= require('lab');

var server	= require('./../server');

// Lab experiment tools
var expect		= Lab.expect;
var describe	= Lab.experiment;
var it			= Lab.test;


describe('server', function() {
	it('calls /', function(done) {
		server.inject({ method: 'GET', url: '/' }, function(res){
			// code
			expect(res.statusCode).to.equal(200);
			// headers
			expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
			
			done();
		});
	});
	
	it('calls a missing page', function(done) {
		server.inject({ method: 'GET', url: '/mishfjsiadfhj' }, function(res){
			// code
			expect(res.statusCode).to.equal(404);
			// headers
			expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
			done();
		});
	});
});