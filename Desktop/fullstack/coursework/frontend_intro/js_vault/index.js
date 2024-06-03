//First, I need to create an alert for the message of the important vault combo.
alert(
  "You have received this message because you have been chosen to\
 open an important vault. Here is the screen combination: "
);
/* The three combination codes need to be declared in constant variables 
since we are not changing the combo. The combos must be presented in equations for
added security. 
*/
const firstCombo = 2 * 5; //10
const secondCombo = 60 - 20; //40
const thirdCombo = 27 + 12; //39
// The three variables are presented in another alert using concatenation via temperate literal
alert(`${firstCombo} ${secondCombo} ${thirdCombo}`);
