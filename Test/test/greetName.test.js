describe('The greet function', function() {

  it('should greet name in English', function() {
    assert.equal('Hello, Mponeng', myFunction('Mponeng'));
  });

  it('should greet name in isiXhosa', function() {
    assert.equal('Molweni,Mponeng', myFunction('Mponeng'));
  });

  it('should greet name in Sotho', function(){
    assert.equal('Dumela,Mponeng', myFunction('Mponeng'));
  });
});
