function test() {
  console.log('inside test()');
  return 'return value';
}

exports = module.exports = test;

exports.dog = 'dog2';
