/**
 * Create by $END$ on
 */

var Cont = function() {
  var name = 'li';

  return {
    getName: function() {
      return name;
    }
  };
}

var c1 = Cont();

console.log(c1.getName());
