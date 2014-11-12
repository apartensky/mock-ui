define ([ 'ng' , 'underscore'], function (angular, _) {
    
  describe ("hello", function () {
      
    it ("should say hello", function () {
      expect ("hello").toBe ("hello");
      expect (_.min([5,10,13])).toBe(5);
    });
    
  });
  
});