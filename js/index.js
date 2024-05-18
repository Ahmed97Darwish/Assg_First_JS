// //  ===============> 1
// var element = prompt("Inter The Number: ");
// console.log(element);
// // window.alert("The Number Is: " + element);




// //  ===============> 2
// var element = prompt("Inter The Number: ");
// if (element % 3 == 0 && element % 4 == 0) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }




// //  ===============> 3
// var num1 = +prompt("Inter The First Number: ");
// var num2 = +prompt("Inter The Second Number: ");

// if (num1 > num2) {
//     console.log("The Biggest Number Is: " + num1);
// } else {
//     console.log("The Biggest Number Is: " + num2);
// }




// //  ===============> 4
// var num1 = +prompt("Inter The First Number: ");

// if (num1 < 0) {
//     console.log("The Biggest Number Is Negative.");
// } else {
//     console.log("The Biggest Number Is Positive.");
// }
// }




// //  ===============> 5
// var num1 = prompt("Inter The First Number: ");
// var num2 = prompt("Inter The Second Number: ");
// var num3 = prompt("Inter The Third Number: ");

// if (num1 > num2 && num1 > num3) {
//     console.log("The Biggest Number Is Number1: " + num1);

//     if (num2 > num3) {
//         console.log("The Min Number Is Number3: " + num3);
//     } else {
//         console.log("The Min Number Is Number2: " + num2);
//     }

// } else if (num2 > num1 && num2 > num3) {

//     console.log("The Biggest Number Is Number2: " + num2);
    
//     if (num1 > num3) {
//         console.log("The Min Number Is Number3: " + num3);
//     } else {
//         console.log("The Min Number Is Number1: " + num1);
//     }

    
// } else {
//     console.log("The Biggest Number Is Number3: " + num3);

//     if (num1 > num2) {
//         console.log("The Min Number Is Number2: " + num2);
//     } else {
//         console.log("The Min Number Is Number1: " + num1);
//     }
// }





// ===============> 6
var num = prompt("Inter The Number: ");

if (num % 2 === 0) {
    console.log("The Number Is Even");
} else {
    console.log("The Number Is Odd");
}





// // ===============> 8
// var char = prompt("Inter The Element: ");

// if (char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U") {
//     console.log("The Element Is Vowel");
// } else {
//     console.log("The Element Is Not Vowel");
// }





// // ===============> 9
// var num = prompt("Inter The Number: ");

// for (var i = 1; i <= num; i++) {
//     console.log(i);
// }





// // ===============> 10
// var num = +prompt("Inter The Number: ");
// res = 0;

// for (var i = 1; i <= 12; i++) {
//     res += num;

//     console.log(res);
// }




// // ===============> 11
// var num = +prompt("Inter The Number: ");

// for (var i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }




// // ===============> 12
// var num1 = +prompt("Inter The Number: ");
// var num2 = +prompt("Inter The Power: ");
// var res = 1;

// for (var i = 1; i <= num2; i++) {
//     res *= num1;
// }
// console.log(res);




// ===============> 12
// var num1 = +prompt("Inter The Number1: ");
// var num2 = +prompt("Inter The Number2: ");
// var num3 = +prompt("Inter The Number3: ");
// var num4 = +prompt("Inter The Number4: ");
// var num5 = +prompt("Inter The Number5: ");

// var res = 0;
// var avr = 0;
// var per = 0;

// res = num1 + num2 + num3 + num4 + num5;
// avr = res / 5;
// per = (avr / 100) * 100;

// console.log("The Total Numbers Is: " + res);
// console.log("The Average Numbers Is: " + avr);
// console.log("The Percentage Numbers Is: " + per);




// // ===============> 13
// var num = +prompt("Inter The Number of Month: ");

// if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) {
//     console.log("The Numbers of Days are: 31 day");
// } else if (num == 4 || num == 6 || num == 9 || num == 11) {
//     console.log("The Numbers of Days are: 30 day");
// } else if (num == 2) {
//     console.log("The Numbers of Days are: 28 day");
// } else {
//     console.log("Enter A Valid Number (1:12)");
// }




// // ===============> 14
// var physics         = +prompt("Inter Marks For Physics: ");
// var chemistry       = +prompt("Inter Marks For Chemistry: ");
// var biology         = +prompt("Inter Marks For Biology: ");
// var mathematics     = +prompt("Inter Marks For Mathematics: ");
// var computer        = +prompt("Inter Marks For Computer: ");

// var totalMarks = physics + chemistry + biology + mathematics + computer;
// var perMarks = (totalMarks / 500) * 100;

// if (perMarks > 90) {
//     console.log("The Percentage is: " + perMarks + "% And Your Gard Is 'A'");
// } else if (perMarks > 80) {
//     console.log("The Percentage is: " + perMarks + "% And Your Gard Is 'B'");
// } else if (perMarks > 70) {
//     console.log("The Percentage is: " + perMarks + "% And Your Gard Is 'C'");
// } else if (perMarks > 60) {
//     console.log("The Percentage is: " + perMarks + "% And Your Gard Is 'D'");
// } else if (perMarks > 40) {
//     console.log("The Percentage is: " + perMarks + "% And Your Gard Is 'E'");
// } else {
//     console.log("The Percentage is: " + perMarks + "% And Your Gard Is 'F'");
// }







// //  ===============> 15
// var monthName = prompt("inter the Month Name: ");
// // console.log(alphabetChar);

// switch (monthName) {
//     case "Jan":
//     case "march":
//     case "May":
//     case "July":
//     case "August":
//     case "October":
//     case "December":
//         console.log(The Numbers of Days are: 31 days);
//         break;

//     case "Feb":
//         console.log(The Numbers of Days are: 28 or 29 days);
//         break;

//     case "April":
//     case "June":
//     case "September":
//     case "November":
//         console.log(The Numbers of Days are: 30 days);
//         break;
            
//     default:
//         console.log("Enter a Valid Month")
//         break;
// }




// //  ===============> 16
// var alphabetChar = prompt("inter the alphabet char");
// // console.log(alphabetChar);

// switch (alphabetChar) {
//     case "a":
//     case "A":
//     case "e":
//     case "E":
//     case "i":
//     case "I":
//     case "o":
//     case "O":
//     case "u":
//     case "U":
//         console.log("The "  + alphabetChar + " Char is Vowel ");
//         break;

//     default:
//         console.log("The "  + alphabetChar + " Char is Consonant ")
//         break;
// }




// //  ===============> 17
// var num1 = prompt("inter the number 1");
// var num2 = prompt("inter the number 2");
// // console.log(num1);

// switch (num1 > num2) {
//     case true:
//         console.log("The Number 1 Is Max: " + num1);
//         break;

//     case false:
//         console.log("The Number 2 Is Max: " + num2);
//         break;

//     default:
//         console.log("Enter a Valid Number")
//         break;
// }






//  ===============> 18
// var num1 = prompt("inter the number");
// // console.log(num1);

// switch (num1 % 2) {
//     case 0:
//         console.log("The Number Is Even");
//         break;

//     case 1:
//         console.log("The Number Is Odd");
//         break;

//     default:
//         console.log("Enter a Valid Number")
//         break;
// }






// //  ===============> 19
// var num = prompt("inter the number");
// var num = prompt("inter the number");
// var num = prompt("inter the number");
// // console.log(num1);

// switch (true) {
//     case num > 0:
//         console.log("The Number Is Positive");
//         break;

//     case num == 0:
//         console.log("The Number Equal Zero");
//         break;

//     case num < 0:
//         console.log("The Number Is Negative");
//         break;

//     default:
//         console.log("Enter a Valid Number")
//         break;
// }






// //  ===============> 20
// var num1 = prompt("inter the First number");
// var num2 = prompt("inter the Second number");
// var sign = prompt("inter the sign");

// switch (sign) {
//     case "+":
//         console.log(num1 + num2);
//         break;

//     case "-":
//         console.log(num1 - num2);
//         break;

//     case "*":
//         console.log(num1 * num2);
//         break;

//     case "/":
//         console.log(num1 / num2);
//         break;

//     case "%":
//         console.log(num1 % num2);
//         break;

//     default:
//         console.log("Enter A Valid Number");
//         break;
// }