//1.
var total = sumArr(1, 2, 3, 4, 5, 6, 7, 8, 9);

function sumArr (a, b, c, d, e, f, g, h, i) {
	return a + b + c + d + e + f + g + h + i;
}
console.log(total);

//2.
function yell (str) {
	console.log(str + '!');
}
yell('i like turtles');

//3.
function max(num1, num2) {
	if (num1 > num2) {
		return num1; }
			else {
				return num2;
			}
		}

max(1, 10);

//4. 
function longest(string) {

var str = string.split("Jack Sparrow");
var longestWord= 0;
var word = 0;

	for (var i = 0; i <= str.length; i++) {
        if (longestWord < str[i].length) {
            longestWord = str[i].length;
            word = str[i];
        }
    }
    return word;

//5.
function isVowel() {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

//6.
function reverseString (a) {
  var b = '';
  for (var i = a.length - 1; i >= 0; i--)
    b += a[i];
  return o;
}

//7.
function adopt (gender, neutered, color) {
	if (gender + "female" + neutered + 'white' || 'tan');
	return true;
}
	{else if (gender + 'male' + neutered != 'white');
	return true;
}

	else if (color + 'black');
	{
	else (false)
	}


