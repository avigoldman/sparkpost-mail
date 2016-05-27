Package.describe({
  name: 'agoldman:sparkpost-mail',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
   api.use('email','server');
  api.mainModule('sparkpost-mail.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('agoldman:sparkpost-mail');
  api.mainModule('sparkpost-mail-tests.js');
});
