riot.tag2('contact-list', '<h1>Contacts</h1> <ul> <li each="{p, i in opts.people}"><span>{i + 1}</span> {p.first} {p.last}</li> </ul> <ul> <li each="{opts.people}">{first} {last}</li> </ul> <input id="count">', '', '', function(opts) {

    this.on('mount', () => {

      var message = `Riot mount event fired`;

      console.log(message);
      opts.callback(this);
    });

    this.on('data_loaded', (peeps) => {
      opts.people = peeps;

      count.value = opts.people.length;

      this.update();
    });

});
riot.tag2('hello-form', '<form onsubmit="{sayHello}"> <input type="text" name="greet"> <button>Say Hello</button> </form> <hello-world show="{this.greeting}" greet="{this.greeting}"></hello-world>', '', '', function(opts) {

    this.sayHello = function() {
      this.greeting = this.greet.value;
      this.greet.value = '';
    }.bind(this)

});
riot.tag2('hello-world', '<h5>Hello {opts.greet}</h5>', '', '', function(opts) {
});
riot.tag2('sample-output', '<h1>Hello again from RiotJS!</h1>', '', '', function(opts) {
});