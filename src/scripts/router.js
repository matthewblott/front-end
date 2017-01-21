module.exports = () => {

  var riot = require('riot');

  riot.route.base('/');

  riot.route((collection, id, action) => {

  });

  riot.route((name) => {
    var message = `route called : ${name}`;
    console.log(message);
  });



  riot.route.start(true);

  console.log('router invoked!!');

}