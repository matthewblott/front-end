(() => {

  var utils = require('./utils');
  var name = utils.getName();
  
  console.log(name + ' was returned from the getName func');

  require('./header.html');
  require('./main.html');
  require('./footer.html');

  riot.mount('header', { title: 'app 1' });
  riot.mount('main');
  riot.mount('footer');

})();