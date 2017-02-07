(() => {

  var utils = require('./utils');

  var name = utils.getName();

  console.log(name + ' was returned from the getName func');

  var riot = require('riot');

  require('./with-riot').mount();

})();