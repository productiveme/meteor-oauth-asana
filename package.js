Package.describe({
  name: 'juto:oauth-asana',
  version: '0.0.1',
  summary: 'OAuth handler for asana',
  git: 'https://github.com/jutoapp/meteor-oauth-asana',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('accounts-ui', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.export('Asana');

  api.addFiles(
    ['asana_configure.html', 'asana_configure.js'],
    'client');

  api.addFiles('asana_server.js', 'server');
  api.addFiles('asana_client.js', 'client');
});
