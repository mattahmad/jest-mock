//singleFunction.js

function proxy(data, callback) {
    return callback(data);
  }
  
  module.exports = proxy;