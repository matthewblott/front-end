riot.tag2('hello-form', '<form onsubmit="{submit}"> <input ref="greet"> <button>Say Hello!</button> </form> <hello-world show="{this.greeting}" greet="{this.greeting}"></hello-world>', '', '', function(opts) {

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