/**
 * Dependencies
 */
 var requireDir		= require('require-directory');
 
 module.exports = function(server) {
	// bootstrap controllers, load automatically
	var controller = requireDir(module, './server/controllers');
	
	var cacheExpiry = 10 * 1000;
 
	// hapi route table
	var routeTable = [
		{
			method	: 'GET',
			path	: '/',
			config	: {
				handler	 : controller.base.index,
				cache: {
					expiresIn: cacheExpiry
				}
			}
		},
        {
            method: 'GET',
            path: '/{path*}',
			config	: {
				handler	 : controller.base.missing,
				cache: {
					expiresIn: cacheExpiry
				}
			}
        }
	];
	return routeTable;
 };