var  expect = chai.expect

describe('Hello world spec', () => {

  before((done) => {

    riot.compile(() => {
      var html = document.createElement('hello');
      
      document.body.appendChild(html);
      
      tag = riot.mount('*')[0];

      done();

    });

  }); 

  it('mounts a hello tag', () => {
    expect(tag).to.exist;
    expect(tag.isMounted).to.be.true;
  });

  it('has a name property ', () => {
    expect(tag.name).to.exist;
  });

  it('mounts a hello tag with a setted name', () => {
    
    tag = riot.mount('hello', {name: 'Matt'})[0];
    
    expect(tag.name).to.be.eq('Matt');

  });

  it('prints <h1>Hello {name}</h1> ', () => {

    tag = riot.mount('hello', {name: 'Matt'})[0];
    
    var tagText = document.querySelector('hello > h1').textContent;
    
    expect(tagText).to.be.eq('Hello Matt');

  });

  it('transform name to uppercase', () => {
    
    tag = riot.mount('hello', {name: 'Matt'})[0];
    tag.uppercase();
    
    expect(tag.name).to.be.eq('MATT');

  });

});