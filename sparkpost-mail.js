// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See sparkpost-mail-tests.js for an example of importing.

export var Sparkpost = {
	_options: {
		// required to send
		host: 'smtp.sparkpostmail.com',
		port: '587',
		username: 'SMTP_Injection',
		password: null,

		// optional to make sending easier
		from: null,
		subject: null,
		headers: null
	},

	config: function(options) {
		if (Array.isArray(options)) {
			// merge options with default options
			for (var key in options) {
		        if (options.hasOwnProperty(key))
		        	this._options[key] = options[key];
		    }
		}
		else {
			this._options.password = options;
		}

		if (this._options.password.trim().length === 0 || this._options.password === null)
			throw new Meteor.Error('password-required', 'Password(api key) required to send email');

		process.env.MAIL_URL = 'smtp://' + this._options.username + ':' + this._options.password + '@' + this._options.host + ':' + this._options.port + '/';
	},

	send: function(options) {
		options.from = options.from || this._options.from;
		options.subject = options.subject || this._options.subject;
		options.headers = options.headers || this._options.headers;

		Email.send(options);
	}
};
