/**
 * Base controller
 */
 var Boom = require('boom');
 
 module.exports = {
	index: function(request, reply) {
		reply({
			statusCode: 200,
			message: 'Aero Hapi'
		});
	},
    missing: function(request, reply){
		reply(Boom.notFound());
    }
 }