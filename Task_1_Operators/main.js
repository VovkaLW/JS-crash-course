//#1
const birth_year = prompt("Enter your birth year:");
const current_year = new Date().getFullYear(); //get today year
const age = current_year-birth_year;
alert("Your age "+age);

//#2
let radius  = prompt("Enter radius of a circle:");
let area_circle = Math.PI*radius**2; //area formula
alert("Area circle: "+area_circle.toFixed(2)); //round the value

//#3
let distance  = prompt("Enter distance in km between two cities:");
let time  = prompt("Enter amount of time (in hours) they have to reach their destination:");
let speed = distance/time; //speed formula
alert("Speed need for travel: "+speed.toFixed()+" km/hour");

//#4
const usd_to_eur_rate = 0.93; //euro exchange rate
const dollars = prompt("Enter amount in dollars:");
const euros = dollars * usd_to_eur_rate;
alert(`$${dollars} is equivalent to €${euros.toFixed(2)}`);

//5
const file_size = 820; //file size
const gb_to_mb = 1024; //GB to MB
const flash_drive_capacity = prompt("Enter the capacity of the flash drive in GB:");
const num_files = Math.floor((flash_drive_capacity * gb_to_mb) / file_size); //rounds the argument to the nearest smaller integer
alert(`You can store ${num_files} files of size ${file_size} MB on your flash drive with a capacity of ${flash_drive_capacity} GB.`);
