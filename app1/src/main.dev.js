(() => {

  var utils = require('./utils');
  var name = utils.getName();
  
  console.log(name + ' was returned from the getName func');

  require('./routing')();

  require('./footer.tag.html');
  require('./header.tag.html');
  require('./main.tag.html');
  require('./todos.tag.html');



  riot.mount('header', { title: 'app 1' });
  //riot.mount('main');
  riot.mount('footer');

  function callback(tag) {

    var req = new XMLHttpRequest();

    req.open('GET', 'src/todos.json', true);
    
    req.onload = () => {

      if(req.status === 200){
        var data = JSON.parse(req.responseText);

        tag.trigger('data_loaded', data.todos);

      };

    };
    
    req.send();

  }

  riot.mount('todos', { callback: callback });

})();