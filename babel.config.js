/* eslint-env node */
module.exports = function(api) {
  // https://babeljs.io/docs/en/config-files#apicache
  // JS configs are great because they can compute a config on the fly, but the downside there is that it makes
  // caching harder. Babel wants to avoid re-executing the config function every time a file is compiled, because
  // then it would also need to re-execute any plugin and preset functions referenced in that config.
  const environment = api.env(); // Will be production, test or development (process.env.NODE_ENV)
  api.cache.using(() => environment);

  const isTest = api.env('test');

  // Tests run in a node environment
  const targets = isTest ? { node: 'current' } : undefined;

  // Tests need to run with transpiled modules, webpack handles module transpilation for the browser
  const modules = isTest ? 'commonjs' : false;

  return {
    presets: [
      ['@babel/preset-env', { targets, modules }],
      '@babel/preset-react',
    ],
  };
};
