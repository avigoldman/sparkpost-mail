Package.describe({
  name: 'agoldman:sparkpost-mail',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Send emails using Sparkpost as the SMTP server',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/avrahamgoldman/sparkpost-mail.git',
  // By default, Meteor will default to using README.md for documentation.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
   api.use('email','server');
  api.mainModule('sparkpost-mail.js', 'server');
});