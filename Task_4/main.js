//Task 4.1
//#1
let time = {
  hours:18,
  minutes:23,
  seconds:59,

  show_time(){
    console.log(Date_time.toLocaleTimeString('Uk'));
  },
  //#2
  add_one_seconds(){
    Date_time.setSeconds(Date_time.getSeconds()+1)
    this.show_time();
  },
  //#3
  subtract_one_seconds(){
    Date_time.setSeconds(Date_time.getSeconds()-1)
    this.show_time();
  }
};
const Date_time = new Date( );
Date_time.setHours(time.hours,time.minutes,time.seconds);
time.show_time(); //display time
time.add_one_seconds(); // add one second
time.subtract_one_seconds(); // subtract one second
//#4
const current_time = new Date();
document.write(`${current_time.getHours() < 10 ? '0' + current_time.getHours() : current_time.getHours()}:${current_time.getMinutes() < 10 ? '0' + current_time.getMinutes() : current_time.getMinutes()}:${current_time.getSeconds() < 10 ? '0' + current_time.getSeconds() : current_time.getSeconds()}`);


//Task 4.2

distance = prompt("Enter distance in kilometers:")
let car = {
  manufacturer:"Chevrolet",
  model:"Impala",
  year_of_manufacture: 1967,
  average_speed: 90,
  //#1
  show_info_car(){
    console.log(`Manufacturer: ${this.manufacturer}\nModel: ${this.model}\nYear: ${this.year_of_manufacture}\nAvg. Speed: ${this.average_speed} km\h`);
  },
  //#2
  show_time_to_cover(){
    const time = distance  / this.average_speed;
    const hours = Math.floor(time);
    const minutes = Math.floor((time - hours) * 60);
    const breaks = Math.floor(hours / 4);
    const totalHours = hours + breaks;
    console.log(`Time to cover ${distance} kilometers: ${totalHours} hours, ${minutes} minutes`);
  }
};
car.show_info_car();
car.show_time_to_cover();