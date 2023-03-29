// Task 2.1
//#1
const number = +prompt("Enter number  from 0 to 9:");
switch (number) {
    case 0: console.log(")"); break;
    case 1: console.log("!"); break;
    case 2: console.log("@"); break;
    case 3: console.log("#"); break;
    case 4: console.log("$"); break;
    case 5: console.log("%"); break;
    case 6: console.log("^"); break;
    case 7: console.log("&"); break;
    case 8: console.log("*"); break;
    case 9: console.log("("); break;
}

//#2
const year = +prompt("Enter a year: ");
console.log( (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)? `${year} is a leap year.` : `${year} is not a leap year.`);

//#3
// prompt user for date input
let day = +prompt("Enter the number day: ");
let month = +prompt("Enter the number month: ");
let year_1 = +prompt("Enter the year: ");

// validate input
if (isNaN(day) || isNaN(month) || isNaN(year_1)) {
  console.log("Invalid input");
} else {
  // check if year is a leap year
  let leap_year = (year_1 % 4 == 0 && year_1 % 100 != 0) || year_1 % 400 == 0;

  // determine the number of days in the current month
  let days_in_month;
  if (month == 2) {
    days_in_mount = leap_year ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    days_in_month = 30;
  } else {
    days_in_month = 31;
  }

  // check if input date is valid
  if (day < 1 || day > days_in_month || month < 1 || month > 12) {
    console.log("Invalid date");
  } else {
    // increment the day, month and year
    day++;
    if (day > days_in_month) {
      day = 1;
      month++;
    }
    if (month > 12) {
      month = 1;
      year_1++;
      leap_year = (year_1 % 4 == 0 && year_1 % 100 != 0) || year_1 % 400 == 0;
    }

    // output the next date
    console.log(`Next date: ${day}/${month}/${year_1}`);
  }
}

//Task 2.2
//#1
let start_number =+prompt("Enter the start number: ");
let end_number =+prompt("Enter the end number: ");
for (var sum_number = 0;start_number<=end_number;start_number++){
   sum_number +=start_number;     
} 
console.log("Sum of numbers "+sum_number);
//#2
let number_1 =+prompt("Enter number: ");
let i=0;
while (Math.abs(number_1)>1){
    number_1=number_1/10;
    i++;
} 
console.log("Digits in number "+i);

//#3

let input_numbers,positive_numbers=0,negative_numbers=0,even_numbers=0,odd_numbers=0,zeros=0;
for(let i=0; i<10;i++ ){
input_numbers=+prompt(`Enter number #${i+1}: `);
if (input_numbers>0){
    positive_numbers++;
}
else if (input_numbers<0){
    negative_numbers++;
}
else if (input_numbers == 0){
    zeros++;
}
if (input_numbers % 2 ){
    even_numbers++;
}
else {
    if (input_numbers != 0){
    odd_numbers++;
    }
}
}
console.log(`Positive numbers: ${positive_numbers} \nNegative numbers: ${negative_numbers}\nZeros: ${zeros} \nEven numbers: ${even_numbers} \nOdd number: ${odd_numbers}`);
//#4
let weekdays=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let i_1=0;
do{
    if(i_1>6){
        i_1=0;
    }
    var result = confirm(`${weekdays[i_1]}. Do you want to see the next day?`);
    if(result==true){
        alert(`It's your choice: ${weekdays[i_1]}`);
        break;
    }
    i_1++;
}while(result==false)
//commens