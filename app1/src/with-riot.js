module.exports.mount = () => {

  require('./simple.html');

  riot.mount('simple', { greet: 'Freddy' });

}