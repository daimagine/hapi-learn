/**
 * Dependencies
 */
var Hapi 	= require('hapi'),
	config	= require('./server/config/settings');
	
// create server instance
var server	= module.exports = Hapi.createServer(
					config.host,
					config.port,
					config.hapi.options
				);
				
// bootstrap hapi server plugins
require('./server/config/plugins')(server);

// build routes
var routes	= require('./server/config/routes')(server);
// add route to server
server.route(routes);

// start the server
server.start(function() {
	// log to console
	console.log('Server start at : ' + server.info.uri);
});