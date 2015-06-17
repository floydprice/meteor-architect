Package.describe({
  name: 'floydprice:meteor-architect',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/floydprice/meteor-architect',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('meteor-architect.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('floydprice:meteor-architect');
  api.addFiles('meteor-architect-tests.js');
});
