module.exports = () => {

  route('/about', (name) => {
    console.log('about link was invoked')
  });

  route.start();
  
}