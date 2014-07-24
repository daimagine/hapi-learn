/**
 * Base controller
 */
 var Boom = require('boom');
 
 module.exports = {
	index: function(request, reply) {
		reply({
			statusCode: 200,
			message: 'Hello, world!'
		});
	},
    missing: function(request, reply){
		reply(Boom.notFound());
    }
 };