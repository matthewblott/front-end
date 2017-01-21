riot.tag2('hello-form', '<form onsubmit="{sayHello}"> <input type="text" name="greet"> <button>Say Hello</button> </form> <hello-world show="{this.greeting}" greet="{this.greeting}"></hello-world>', '', '', function(opts) {
    this.sayHello = function(){
      this.greeting = this.greet.value
      this.greet.value = ''
    }.bind(this)

    console.log('x')

});

riot.tag2('hello-world', '<h5>hello {opts.greet}</h5>', '', '', function(opts) {
});
