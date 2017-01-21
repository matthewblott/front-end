var riot = require('riot')
// var helloWorld = require('../tags/hello-world.tag');
// var helloForm = require('../tags/hello-form.tag');

var helloWorld = require('../tags/hello-world.html');
var helloForm = require('../tags/hello-form.html');

var math = require('./math');

var result = math.add(1, 2);

console.log(result);

riot.mount(helloWorld, {greet: 'Joe'});
riot.mount(helloForm);

riot.mount('*');
