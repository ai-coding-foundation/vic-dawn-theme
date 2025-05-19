const { strictEqual } = require('assert');
require('../assets/logger.js');
let message;
console.info = (msg) => {
  message = msg;
};
Logger.info('test');
strictEqual(message, 'test');
