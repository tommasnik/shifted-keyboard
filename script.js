

  function convert(input) {
    var pravaRuka = 'yuiopúhjklůnm,.ýáíé=YUIOP/HJKL"NM?:ÝÁÍÉ%';
    var poPosunu =  'tyuiopghjklbnm,žýáíéTYUIOPGHJKLBNM?ŽÝÁÍÉ';

    var result = '';
    for (var i = 0; i < input.length; i++) {
      var charAt = input.charAt(i);
      var index = pravaRuka.indexOf(charAt);
      result += index >= 0 ? poPosunu.charAt(index) : charAt;
    }

    return result;
  }

  console.log('Testing converting text:');

  console.log(convert('Testing converting text'));
