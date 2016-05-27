// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See sparkpost-mail-tests.js for an example of importing.

export var Sparkpost = {
	config: function(options) {
		
	},
	send: function(options) {
		Email.send(options);
	}
};
