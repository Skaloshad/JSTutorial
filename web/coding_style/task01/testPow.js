describe("pow", function() {

  describe("возводит x в степень n", function() {

    function makeTest(x) {
      var expected = x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });
  
  describe("любое число кроме 0 при возведении в 0 степень дает 1", function() {
    function makeTest(x){
      it("При возведении " + x + " в 0 степень результат: 1", function(){
        assert.equal(pow(x, 0), 1);
      });
    }
    
    for (var x = -5; x <= 5; x++) {
      if (x == 0) continue;
      makeTest(x);
    }
  });

  it("при возведении в отрицательную степень результат NaN", function() {
    assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
  });

  it("при возведении в дробную степень результат NaN", function() {
    assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) не NaN");
  });
  
  it("при возведении 0 в 0 степень результат NaN", function() {
    assert(isNaN(pow(0, 0)), 'pow(0, 0) не NaN');
  });
  
  

});