// Boolean-1
let a = prompt('son kiriting');
let natija = (a % 2 === 0) ? "A soni juft" : "A soni toq";
console.log(natija);

// Boolean-2
// let a = prompt('a sonini kiritng')
// let b = prompt('b sonini kiritng')
// if (a >= 0 || b < -2) {
//     console.log("Jumla rost");
// }else{
//     console.log("jummla yonlgon")
// }

// Boolean-3
// let a = prompt('a ga son kiriting:')
// let b = prompt('b ga son kiriting:')
// let c = prompt('c ga son kiriting:')
// if ((a > b && c < b) || (a < b && c > b)) {
//     console.log("b son a va c sonini o'rtasida");
// } else {
//     console.log("b son a va c sonini o'rtasida emas");

// }

// Boolean-4
// let a = prompt('a ga son kiritng:')
// let b = prompt('b ga son kiritng:')
// if (a % 2 !== 0 && b % 2 !== 0) {
//     console.log(" a va b son toq")
// } else {
//     console.log(" a yoki b soni juft ")
// }

// Boolean-5
// let a = prompt('a ga son kiritng:')
// let b = prompt('b ga son kiritng:')
// if (a % 2 !== 0 || b % 2 !== 0) {
//     console.log(' a yoki b toq ');
// } else {
//     console.log('ikkalasiham juft')
// }

// Boolean-6
// let a = prompt('a ga son kiritng:')
// let b = prompt('b ga son kiritng:')
// if ((a % 2 !== 0 && b % 2 == 0) || (a % 2 == 0 && b % 2 !== 0)) {

//     console.log(' a yoki b soni toq');
// } else {
//     console.log(' ikkalasiha toq yoki  juft')
// }

// Boolean-7
// let a = prompt('a ga son kiritng:');
// let b = prompt('b ga son kiritng:');
// let c = prompt('c ga son kiritng:');
// if (a > 0 ||  b < 0 || c > 0) { 
//     console.log('a , b va c soni manfiy');

// }else{
//     console.log('a yoki b yoki c musbat')
// }

// Boolen-8

// function isOnlyOnePositive(A, B, C) {
//     const positiveCount = (A > 0 ? 1 : 0) + (B > 0 ? 1 : 0) + (C > 0 ? 1 : 0);
//     return positiveCount === 1;
// } 
// let a = prompt('a ga son bering')
// let b = prompt('b ga son bering')
// let c = prompt('c ga son bering');

// if (isOnlyOnePositive(a, b, c)) {
//     console.log("A, B, C sonlaridan faqat bittasi musbat son.");
// } else {
//     console.log("A, B, C sonlaridan faqat bittasi musbat emas.");
// }


// Boolen-9
// function areTwoPositive(A, B, C) {
//     const positiveCount = (A > 0 ? 1 : 0) + (B > 0 ? 1 : 0) + (C > 0 ? 1 : 0);
//     return positiveCount === 2;
// }
// let  a = prompt('a ga son bering')
// let  b = prompt('b ga son bering')
// let   c= prompt('c ga son bering')

// if (areTwoPositive(a, b, c)) {
//     console.log("A, B, C sonlardan faqat ikkitasi musbat son.");
// } else {
//     console.log("A, B, C sonlardan faqat ikkitasi musbat emas.");
// }

// Boolen-10
// function isTwoDigitEven(num) {
//     return num >= 10 && num < 100 && num % 2 === 0;
// }

// const number = 42; 

// if (isTwoDigitEven(number)) {
//     console.log("Berilgan son ikki xonali juft son.");
// } else {
//     console.log("Berilgan son ikki xonali juft son emas.");
// }

// Boolen-11
// function isThreeDigitOdd(num) {
//     return num >= 100 && num < 1000 && num % 2 !== 0;
// }

// let  number = promp('ikki honali son bering:'); 

// if (isThreeDigitOdd(number)) {
//     console.log("Berilgan son uch xonali toq.");
// } else {
//     console.log("Berilgan son uch xonali toq emas.");
// }

// Boolen-12 ( Ishlap biladim )

// Boolen-13
// function isIncreasingNumber(number) {
//     let a = Math.floor(number / 100);
//     let b = Math.floor((number % 100) / 10);
//     let c = number % 10;


//     if (a < b && b < c) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let number = prompt('3Xonali son kiriting;');
// if (isIncreasingNumber(number)) {
//     console.log("Sonning raqamlari ketma-ket o'suvchi.");
// } else {
//     console.log("Sonning raqamlari ketma-ket o'suvchi emas.");
// }


// Boolean-15
// function isPalindrome(number) {
//     let a = Math.floor(number / 100);
//     let b = Math.floor((number % 100) / 10);
//     let c = number % 10;

//     if (a === c) {
//         return true;
//     } else {
//         return false;
//     }
// }


// let number = prompt('3Xonali son kiriting;');

// if (isPalindrome(number)) {
//     console.log("Son chapdan va o'ngdan o'qilganda bir xil.");
// } else {
//     console.log("Son chapdan va o'ngdan o'qilganda bir xil emas.");
// }

// Darsda ko'riladigan masalalar
// 1
// let a = prompt('a ga qiymat bering:');
// let b = prompt('b ga qiymat bering:');
// let y = -(b/2) *(a**2 +b**2)
// console.log(y);

// 2
// let a = prompt('a ga qiymat bering:');
// let b = prompt('b ga qiymat bering:');
// let c = prompt('c ga qiymat bering:');
// let d = prompt('d ga qiymat bering:');
// let y = ((a + b) / (c + d)) **2 + b  ** 2;
// console.log(y);

// 3
// let a = prompt('a ga qiymat bering: ');
// let b = prompt('b ga qiymat bering: ');
// let d = prompt('a ga adaraja bering: ');
// let c = prompt('c ga qiymat bering: ');
// const y = 2 * (a ** d + (4 * c ** 2) / 3);
// console.log(y);

// 4
// let  a = prompt('a ga qiymat bering: ');
// let  b = prompt('b ga qiymat bering: ');
// let  c = prompt('c ga qiymat bering: ');
// let  d = prompt('d ga qiymat bering: ');
// const y = 1/a**2 * (b/10)**3 *  (c+d)**2;
// console.log(y);

// 5 
// let a = prompt('a ga qiymat bering: ');
// let b = prompt('b ga qiymat bering: ');
// let c = prompt('c ga qiymat bering: ');
// let d = prompt('d ga qiymat bering: ');
// const y = (a / b - 1 / c / d-1)**2;
// console.log(y);

// 6
// let a = prompt('a ga qiymat bering: ');
// let b = prompt('b ga qiymat bering: ');
// let c = prompt('c ga qiymat bering: ');
// let d = prompt('d ga qiymat bering: ');
// const y = a + b / c + (d / a + c);
// console.log(y);

// 7
// let a = prompt('a ga qiymat bering: ');
// let b = prompt('b ga qiymat bering: ');
// let c = prompt('c ga qiymat bering: ');
// let d = prompt('d ga qiymat bering: ');
// const y = Math.sqrt((a + b + c) ** 2 + (a - b - c) ** 2);
// console.log(y);

// 8 
// let a = prompt('a ga qiymat bering: ');
// let b = prompt('b ga qiymat bering: ');
// let c = prompt('c ga qiymat bering: ');
// let d = prompt('d ga qiymat bering: ');
// const y = (a ** 2 + b ** 2 + c ** 2) / (a * b * c);
// console.log(y);

// 9 
// let a = prompt('a ga qiymat bering: ');
// let b = prompt('b ga qiymat bering: ');
// let c = prompt('c ga qiymat bering: ');
// let d = prompt('d ga qiymat bering: ');
// const y = a * (d ** 3 / 3) + b * (c ** 2 / c);
// console.log(y);

// 10
// let  a = prompt('a ga qiymat bering: ');
// let  b = prompt('b ga qiymat bering: ');
// let  c = prompt('c ga qiymat bering: ');
// let  d = prompt('d ga qiymat bering: ');
