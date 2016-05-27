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

	},
	send: function(options) {
		Email.send(options);
	}
};
