riot.tag2('blah', '<div> <h5>message : {opts.message}</h5> </div>', '', '', function(opts) {
});
riot.tag2('hello-form', '<form onsubmit="{submit}"> <input ref="greet"> <button>Say Hello!!!</button> </form> <hello-world show="{this.greeting}" greet="{this.greeting}"></hello-world>', 'hello-form *,[data-is="hello-form"] *{ color:blue; }', '', function(opts) {

    this.mixin('mixinName');

    (() => {
      console.log('es6 functions are recognised');
    })();

    console.log('some line was called ..');

    (function() {
      console.log('es5 functions are recognised');
    })();

    this.on('mount', () => {
      console.log('mounted')
    })

    this.submit = function(e) {
      e.preventDefault()
      this.greeting = this.refs.greet.value;
      this.refs.greet.value = '';
    }.bind(this)

});
riot.tag2('hello-world', '<h5>hello {opts.greet}</h5>', '', '', function(opts) {

    this.on('update', () => {
      console.log('hello-world updated')
    })

});
// can't put a script tag here for mixins

  var OptsMixin = {
    init: function() {
      this.on('updated', function() { console.log('Updated!') })
    },

    getOpts: function() {
      return this.opts
    },

    setOpts: function(opts, update) {
      this.opts = opts
      if (!update) this.update()
      return this
    }
  }

riot.tag2('navbar', '<span>{message}</span> <ul onclick="{select}"> <li> <a href="#">Home</a> </li> <li> <a href="#">People</a> </li> <li> <a href="#">New Person</a> </li> <li> <a href="#" onclick="{click}">Get</a> </li> </ul>', 'navbar ul,[data-is="navbar"] ul{ list-style: none; margin: 0; padding: 0; } navbar li,[data-is="navbar"] li{ display: inline; } navbar a,[data-is="navbar"] a{ text-decoration: none; } navbar a:hover,[data-is="navbar"] a:hover{ text-decoration: underline; }', '', function(opts) {

    riot.mixin('mixinName', OptsMixin);

    this.mixin(OptsMixin);

    this.click = function() {

      var message = '';

      console.log(message);

    }.bind(this);

});
riot.tag2('people', '<h1>People</h1> <ul> <li each="{p in opts.people}">{p.first} {p.last}</li> </ul>', '', '', function(opts) {

    this.on('mount', () => {
      console.log('people mount event fired');
      opts.callback(this);
    });

    this.on('data_loaded', (people) => {
      opts.people = people;
      this.update();
    });

});