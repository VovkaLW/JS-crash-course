//Task_3.1
//#1
let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr);

//#2
for (let i = 0; i < arr.length; i++) {
    console.log(`[${i+1}] - ${arr[i]}`);
  }





//#5
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 7 === 0) {
        if(arr[i]!=0){
        number = i;
        text= `Yes, array have number that is a multiple of 7. This is a number:${number+1}`;
        break;
        }
    }
    else{
        text=`No, array haven't number that is a multiple of 7`;
    }
  }
  console.log(text);

//#6
arr.splice(0, 3);
console.log(arr);

//#7
let countEven = arr.filter(num => num % 2 === 0).length;
console.log(`The array contains ${countEven} even numbers.`);

//#8
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        text_2 = `Yes, array has a duplicate`;
      }
      else{
        text_2 = `No, array hasn't a duplicate`;
      }
    }
  }
  
  console.log(text_2);

//#3
arr.sort((a, b) => b - a);
console.log(arr);

//#4
for (let i = Math.floor(arr.length/2); i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log(arr);

//Task_3.2
//#1
const str = prompt();
const spaceCount = str.split(" ").length - 1;
console.log(`The number of spaces in the sentence:`+spaceCount);
//#2
console.log(`Changed sentence: `+str.charAt(0).toUpperCase() + str.slice(1));
//#3
console.log(`Word count:`+str.split(" ").length);
//#4
const words = str.split(" ");
let abbreviation = "";

for (let i = 0; i < words.length; i++) {
  abbreviation += words[i][0].toUpperCase();
}
console.log(`Abbreviation: `+abbreviation);
//#5
const reversedStr = str.split("").reverse().join("")
  if (str.split(" ").join("").toLowerCase() === reversedStr.split(" ").join("").toLowerCase()){
    console.log("This sentence is a palindrome");
  }
  else{
    console.log(`This sentence isn't a palindrome`);
  }
//#6
const url = "https://career.softserveinc.com/uk-ua/technology/course"
const urlObj = new URL(url);
const protocol = urlObj.protocol;
const domain = urlObj.hostname;
const path = urlObj.pathname;
console.log("protocol:", protocol);
console.log("domain:", domain);
console.log("path:", path);