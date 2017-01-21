var self = this;

module.exports = (component) => {

  require('./router')();

  component.message = 'component message';

  console.log('navbar invoked!!');

  // this won't work
  // self.messenger('blah blah blah');

}

// methods need to be placed after the anonymous function
module.exports.messenger = (message) => {
  console.log(message);
}

module.exports.select = (e) => {

  var riot = require('riot');
  var mounted;

  if(e.target.innerText === 'People') {

    var people = require('../tags/people.html');

    riot.mount(people, { caption: 'People' });

    var view = document.querySelector('view');

    mounted = riot.mount(view, people, { caption: 'More People' });

    console.log();

  }
  else if(e.target.innerText !== 'People') {
    console.log(mounted);
  }

}