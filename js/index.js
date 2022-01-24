let a, b, c;

a = 3;
b = 5;

let output = '';
output += 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c; \n';
output += '-----------------\n';
output += 'a + b = ' + (a + b) + '\n';
output += 'a - b = ' + (a - b) + '\n';
output += 'a * b = ' + (a * b) + '\n';
output += 'a / b = ' + (a / b) + '\n';
output += 'a % b = ' + (a % b) + '\n';
output += '(a += b) : ' + (a += b) + '\n';
output += '(a -= b) : ' + (a -= b) + '\n';
output += '(a *= b) : ' + (a *= b) + '\n';
output += '(a /= b): ' + (a /= b) + '\n';
output += '(a %= b) : ' + (a %= b) + '\n';
output += '(a == b) : ' + (a == b) + '\n';
output += '(a != b) : ' + (a != b) + '\n';
output += '(a > b) : ' + (a > b) + '\n';
output += '(a < b) : ' + (a < b) + '\n';
output += '(!a && !c) : ' + (!a && !c) + '\n';
output += '(!a || !c ) : ' + (!a || !c ) + '\n';


output += '---------Task 2----------\n';

// task 2

let first_name = 'Yuqi';
let last_name = 'Li';
let email = 'li000763@algonquinlive.com';



output += `"My name is ${first_name} ${last_name}. You can contact me at ${email}."`;


alert(output);



