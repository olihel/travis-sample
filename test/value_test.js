// require the sample module
var lib = require('../lib');

// test case
exports.testValue = function(test){
    test.expect(1);
    test.ok(lib.getTestValue(), 'value is true');
    test.done();
};