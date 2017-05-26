describe('The greet function', function() {

  it('should greet Mponeng in English', function() {

    var greet = greetName('Mponeng', 'English')
    assert.equal(('Hello Mponeng'), greet);
  });

  it('should greet Mponeng in isiXhosa', function(){

  var greet = greetName('Mponeng', 'isiXhosa')
  assert.equal(('Molo Mponeng'), greet)
});

  it('should greet Mponeng in Sotho', function(){

    var greet = greetName('Mponeng', 'Sotho')
    assert.equal(('Dumela Mponeng'), greet)
  })
});
