describe('pow', function(){
    
    it('Возводит 2 в 3 степень', function (){
        assert.equal( pow(2,3) , 8);
    });
    
    it('Возводит 3 в 4 степень', function (){
        assert.equal( pow(3,4) , 81);
    });
    
    describe('Возводит x в степень n', function(){
        function makeTest(x){
            var exepted = x * x * x;
            it('При возведении ' + x + ' в степень 3 возвращает ' + exepted, function(){
                assert.equal( pow(x, 3) , exepted);
            });
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });
    
    it('При возведении в отрицательную степень результат NaN', function(){
        assert( isNaN( pow(2, -1)), 'pow(2, -1) не NaN');
    });
    
    it('При возведении в дробную степень результат NaN', function(){
        assert( isNaN( pow(2, 1.5)), 'pow(2, 1.5) не NaN');
    });
    
    describe("любое число, кроме нуля, в степени 0 равно 1", function() {

        function makeTest(x) {
          it("при возведении " + x + " в степень 0 результат: 1", function() {
            assert.equal(pow(x, 0), 1);
          });
        }

        for (var x = -5; x <= 5; x += 2) {
          makeTest(x);
        }

    });

    it("ноль в нулевой степени даёт NaN", function() {
      assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
    });
  
});