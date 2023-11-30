import 'babel-polyfill'
import 'whatwg-fetch'

const testsContext = require.context("./components", true, /\**.spec.js?$/);
testsContext.keys().forEach(testsContext);

console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);