// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See sparkpost-mail-tests.js for an example of importing.

export var Sparkpost = {
	config: function(options) {
		var defaultOptions = {
			host: 'smtp.sparkpostmail.com',
			port: '587',
			username: 'SMTP_Injection',
			password: null
		};

		if (Array.isArray(options)) {
			// merge options with default options
			for (var key in options) {
		        if (options.hasOwnProperty(key))
		        	defaultOptions[key] = options[key];
		    }
		}
		else {
			defaultOptions.password = options;
		}
	},
	send: function(options) {
		Email.send(options);
	}
};
