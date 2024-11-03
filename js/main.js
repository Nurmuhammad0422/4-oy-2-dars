// 1-rasm
// 1-misol
let num1 = parseInt(prompt("1-sonni kiriting:"));
let num2 = parseInt(prompt("2-sonni kiriting:"));
let num3 = parseInt(prompt("3-sonni kiriting:"));

let average = Math.round(num1 + num2 + num3) / 3;
console.log("O'rtacha:", average);
// 2-misol
let threeDigitNumber = prompt("Uch xonali son kiriting:");
let firstDigit = parseInt(threeDigitNumber.charAt(0));

if (firstDigit % 2 === 0) {
  console.log("Birinchi raqam juft.");
}
else if(firstDigit % 1 === 0){
  console.log("Birinchi raqam toq.");
}
// 3-misol
let score = parseFloat(prompt("Ball kiriting (0 dan 150 gacha):"));
let maxScore = 150;

if (score > maxScore) {
    console.log("Siz adashtingiz.");
}
else {
    let percentage = (score / maxScore) * 100;
    console.log("Ballning foizi:", Math.round(percentage) + "%");
}
// 4-misol
let start = parseInt(prompt("Boshlang'ich sonni kiriting (kamida 5):"));
let end = parseInt(prompt("Oxirgi sonni kiriting (ko'pi bilan 20):"));

if (start < 5 || end > 20) {
    console.log("Sonlar 5 dan katta va 20 dan kichik bo'lishi kerak.");
} else {
    console.log("5 dan 20 gacha bo'lgan juft sonlar:");
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
// 5-misol
let strArray = prompt("Array elementlarini vergul bilan ajratib kiriting (masalan: salom,dunyo,hello):").split(',');

if (strArray.includes("salom")) {
    alert("salom");
}
else {
    alert("Kechirasiz biz sizga yordam bera olmaymiz.");
}
// 6-misol
let mixedArray = [123, "hello", true, "world", false];
let booleanIndex = mixedArray.findIndex((value) => typeof value === "boolean");

console.log("Birinchi boolean qiymat indeksi:", booleanIndex);
// 7-misol
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenSum = 0;
let oddSum = 0;

numArray.forEach((num) => {
  if (num % 2 === 0) {
    evenSum += num;
  } else {
    oddSum += num;
  }
});

console.log("Juft sonlar yig'indisi:", evenSum);
console.log("Toq sonlar yig'indisi:", oddSum);
// 8-misol
let numA = parseFloat(prompt("1-sonni kiriting:"));
let numB = parseFloat(prompt("2-sonni kiriting:"));
let operation = prompt("Amalni kiriting (+, -, *, /):");

switch (operation) {
    case "+":
        console.log("Natija:", numA + numB);
        break;
    case "-":
        console.log("Natija:", numA - numB);
        break;
    case "*":
        console.log("Natija:", numA * numB);
        break;
    case "/":
        console.log("Natija:", numA / numB);
        break;
    default:
        console.log("Noto'g'ri amal kiritildi.");
}
// 9-misol
let numbers = prompt("Array elementlarini vergul bilan ajratib kiriting (masalan: -3,5,-2,8,-7):")
    .split(',')
    .map(Number);

let resultArray = numbers.map(num => {
    return num < 0 ? -num : num;
});

console.log("Musbat qilingan array:", resultArray);

// 2-rasm
// 1-misol
let arr = [1,2,3,4,5,6,7,8,9,10]
let result = arr[0] + arr[arr.length - 1]
console.log(result);
// 2-misol
let number = [55,44,3,2,4,6,6,7]
let maxNum = number[0]
for (let num of number){
    if (num > maxNum) {
        maxNum = num
    }
}
// 3-misol
let arr3 =[10, 22,344,2,1,3,23,2,4,]
for (let i2 = 0; i2 < arr3.length; i2++) {
    arr3[i2] = arr3[i2] + 1
}
console.log(arr3);
// 4-misol
let a = prompt("Son kiriting") - 0
for (let i3 = 1; i3 < a.length; i3++) {
    if(a %i3 == 0){
        console.log(i);
    }
}
// 5-misol
let a1 = [1,2,3]
let b1 = [3,2,4]
for (let i4 = 0; i4 < a1.length; i4++) {
    for (let j = 0; j < b1.length; j++) {
        if(a(i4) == b[j]){}
    }
}
