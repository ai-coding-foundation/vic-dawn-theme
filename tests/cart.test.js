const { strictEqual } = require('assert');
require('../assets/logger.js');
let err;
console.error = (e) => {
  err = e;
};
Logger.error('boom');
strictEqual(err, 'boom');
