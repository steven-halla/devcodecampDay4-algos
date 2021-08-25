// function reverseString(string) {
//  let array = [];
//  let length = string.length -1;
//
//  for (let i = length; i >= 0; i--) {
//  array.push(string[i]);
//  }
//  console.log(array.join(''));
// }
//
// reverseString("hello");

// function capitalString(string){
//   let array = string.split(" ");
//   let newArray = [];
//
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
//   }
//   return newArray.join(" ");
// }
// console.log(capitalString("hatsune miku"));
//
// capitalString("hatsune miku");

// function stringCompression (string) {
//   if (string.length == 0) {
//     console.log("Please enter a valid string");
//     return;
//   }
//   let output = "";
//   let count = 0;
//   for (var i = 0; i < string.length; i++) {
//     count++;
//     if (string[i] != string[i + 1]) {
//       output += string[i] + count;
//       count = 0;
//     }
//   }
//   console.log(output);
// }
//
// stringCompression("aaabbaaccddd");

function isPalindrome(string) {
 const length = string.length;

 for ( let i = 0; i < length / 2; i++) {
   if (string[i] !== string[length - 1 - i]) {
     console.log("String is not a palindrome");

   }else {
     console.log("it is a string");

   }

 }
 console.log(string);
}

isPalindrome("none");
