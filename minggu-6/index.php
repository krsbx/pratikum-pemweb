<?php
  $ROMANS = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  $VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  

  function intToRoman($value){
    $results = '';
    
    for ($index = 0; $index < $value; $index++) {
      while ($value >= $GLOBALS['VALUES'][$index]) {
        $results = $results . $GLOBALS['ROMANS'][$index];
        $value -= $GLOBALS['VALUES'][$index];
      }
    }

    return $results;
  }

  echo '58 <br/>';
  echo intToRoman(58) . '<br /><br />';
  echo '1994 <br/>';
  echo intToRoman(1994) . '<br /><br />';
  echo '119 . 140 . 150 <br/>';
  echo intToRoman(119) . ' . ' . intToRoman(140) . ' . ' . intToRoman(150) . '<br />';
?>
