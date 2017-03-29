describe('yoApplicationApp', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080/app/#!/players');
  });

  it('should display a list of players', function() {
    var rows = element.all(by.repeater('player1 in playerList')).count();
    expect(rows).toBe(2);
  });

//this is not working rip
  it('should add a player', function() {

    element(by.model('newPlayer.name')).sendKeys("Dominic");
    element(by.model('newPlayer.email')).sendKeys("DominicJ@test.hhs.nl");
    element(by.model('newPlayer.age')).sendKeys(23);

    element(by.css('button#form-submit')).click();

    var rows = element.all(by.repeater('player1 in playerList')).count();
    expect(rows).toBe(3);
  });

});
