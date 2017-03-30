describe('yoApplicationApp', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080/app/#!/goals');
  });

  it('should display a list goals', function() {
    var rows = element.all(by.repeater('item in newItems')).count();
    expect(rows).toBe(7);
  });

  it('should display a filtered list goals', function() {
    element(by.model('searchTerm')).sendKeys("Remco");
    var rows = element.all(by.repeater('item in newItems')).count();
    expect(rows).toBe(3);
  });

});
