var riot = require('riot');

var navbar = require('../tags/navbar.html');

riot.mount(navbar, { someProperty: 'some value' });

  // var self = this;

  // riot.route(function(id) {
  //   console.log('The list of fruits');
  //   self.update()
  // });


  // riot.route.start(true)


// require('./router')();

console.log(new Date(new Date()).toISOString());
