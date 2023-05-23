//Task 7.1
const cars = []; // Array cars
const table_Body = document.querySelector('#product-list tbody');
  
//function for transformation table to array
for (let i = 0; i < table_Body.rows.length; i++) {
  const row = table_Body.rows[i];
  const car = {
    id: row.cells[0].textContent,
    model: row.cells[1].textContent,
    year: row.cells[2].textContent,
    price: row.cells[3].textContent,
    color: row.cells[4].textContent,
    status: row.cells[5].textContent,
    body_type: row.cells[6].textContent,
    date_buy: row.cells[7].textContent,
  };
  cars.push(car);
}


function add_cars_to_list(car){
  table_Body.innerHTML += `<th scope="row">${car.id}</th>
                            <td>${car.model}</td>
                            <td>${car.year}</td>
                            <td>${car.price}$</td>
                            <td>${car.color}</td>
                            <td>${car.status}</td>
                            <td>${car.body_type}</td>
                            <td>${car.date_buy}</td>`;
}
function get_cars_in_list(){
  const Model_input = document.getElementById(`Model_input`);
  const Year_input = document.getElementById(`Year_input`);
  const Price_input = document.getElementById(`Price_input`);
  const Color_input = document.getElementById(`Color_input`);
  const Status_input = document.getElementById(`Status_input`);
  const Body_type_input = document.getElementById(`Body_type_input`);
  const Date_buy_input = document.getElementById(`Date_buy_input`);
  if ( //Task 7.3 #2
    Model_input.value === '' ||
    Year_input.value === '' ||
    Price_input.value === '' ||
    Color_input.value === '' ||
    Status_input.value === ''||
    Body_type_input.value ===''||
    Date_buy_input.value ===''
  ) {
    return null;
  }
  return{
      id: cars.length+1,
      model: Model_input.value,
      year: Year_input.value,
      price: Price_input.value,
      color: Color_input.value,
      status: Status_input.value,
      body_type: Body_type_input.value,
      date_buy: Date_buy_input.value
  };
}
const addBtn = document.getElementById('add-car-btn');

addBtn.onclick = () => {
  const new_car = get_cars_in_list();
  if (new_car===null){//Task 7.3 #2
    alert(`Fill in all fields`);
  }
  else{
  cars.push(new_car);
  add_cars_to_list(new_car);
  console.log(cars);
  }
}

//Task 7.2
function search_cars(query) {
  const normalized_query = query.toLowerCase();
  return cars.filter((car) => {
    const normalized_model = car.model.toLowerCase();
    return normalized_model.includes(normalized_query);
  });
}
function change_list(cars){
  table_Body.innerHTML = '';
  for (const car of cars) {
    table_Body.innerHTML += `<tr>
      <th scope="row">${car.id}</th>
      <td>${car.model}</td>
      <td>${car.year}</td>
      <td>${car.price}$</td>
      <td>${car.color}</td>
      <td>${car.status}</td>
      <td>${car.body_type}</td>
      <td>${car.date_buy}</td>
    </tr>`;
  }
}
//Task 7.3 #3
const current_time = new Date();
var month = current_time.getMonth()+1;
document.getElementById('Date_buy_input').value = `${current_time.getUTCDate() < 10 ? '0' + current_time.getUTCDate() : current_time.getUTCDate()}.${month < 10 ? '0' + month : month}.${current_time.getUTCFullYear()}`

const search_in_list = document.getElementById('search_in_list');
search_in_list.oninput = () => {
  DataList_Checker();
  const query = document.getElementById('search_in_list').value.trim();
  if (query) {
    const search_results = search_cars(query);//filtered list
    change_list(search_results);
  } else {
    change_list(cars);
  }
};
//Task 7.3
//#1 
const clearBtn = document.getElementById('clear-all-btn');

clearBtn.onclick = () => {
  table_Body.innerHTML = '';
  cars.splice(0);
}



//#4
function DataList_Checker(){
const options = [];
for (i=0; i < cars.length;i++) {
    const check_input = document.getElementById('search_in_list').value.trim().length;
    if (check_input >= 2){
    const datalist = document.getElementById("myDatalist");
    options[i] = cars[i].model;
    const optionsHTML = options.map((option) => `<option value="${option}">`);
    datalist.innerHTML = optionsHTML.join("");
  }else
  document.getElementById('myDatalist').innerHTML = ''
}
}


