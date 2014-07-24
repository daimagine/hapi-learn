/**
 * Plugins configurations
 */
module.exports = function(server){
	// 'Good' configuration
	var goodOptions = {
		subscribers: {
			console: ['request', 'log', 'error'],
			'logs/aero-hapi.log': ['request', 'log', 'error']
		}
	};
	
	server.pack.register([
		{
			plugin: require('good'),
			options: goodOptions
		}
	], function(err) {
		if (err) throw err;
	});
};