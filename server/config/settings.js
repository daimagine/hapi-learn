/**
 * Dependencies
 */
 var path		= require('path'),
	 rootPath	= path.normalize(__dirname + '/../..');
	 
// default configuration
module.exports = {
	root: rootPath,
	host: process.env.HOST || 'localhost',
	port: parseInt(process.env.PORT, 10) || 3000,
	
	// hapi configuration
	hapi: {
		//todo
	}
};