// localStorage.removeItem('records');
// Adding array
let items = JSON.parse(localStorage.getItem("Stored_Info"))
  ? JSON.parse(localStorage.getItem("Stored_Info"))
  : [
      {
        id: 1,
        product: "TV Stand",
        createDate: new Date(),
      },
    ];

// Original Loop
function showItems(items) {
  document.querySelector("#list").innerHTML = "";
  items.forEach((item) => {
    console.log(item);
    document.getElementById("list").innerHTML += `
  <div class="item" id="listing"><input class="chb checkboxes"  type="checkbox"><label for="add_info">${item.product}</label><i onclick="deleteTask(id)" class="fa-solid fa-trash-can"></i><i onclick="editTask(id)" class="fa-solid fa-pen-to-square"></i></div>
  `;
  });
}
showItems(items);

// Add Function
function add() {
  NewItem = {
    id: items.length + 1,
    product: document.getElementById("add_info").value,
    createDate: new Date(),
  };
  items.push(NewItem);
  document.getElementById("list").innerHTML += `
  <div class="item" id="listing"><input class="chb checkboxes " type="checkbox"><label for="add_info">${NewItem.product}</label></div>
  `;

  console.log(items);
  localStorage.setItem("Stored_Info", JSON.stringify(items));
  showItems(items);
}

// Delete function (this does not work)
// function deleteTask(id) {
//   const id = items.indexOf(name); 
//   items = items.filter(item => item.id !== id);
//   console.log(items);
//   localStorage.setItem("Stored_Info", JSON.stringify(items));
//   showItems(items);
// }

// this sort of work
function deleteTask(){
  const id = items.indexOf(name); 
  const removeTask = items.splice(id,  1);
  localStorage.setItem("Stored_Info", JSON.stringify(items));
  showItems(items);
  
}

// Edit function
function editTask(product) {
  const newTask = prompt("What would you like to change the task to?")
  const task = items.find((item) => item.product === product);
  items.product = NewItem;
  localStorage.setItem("Stored_Info", JSON.stringify(items));
  showItems(items);
}

// Sort Function
function sortName() {
  items.sort((a, b) => {
    if (a.titletoLowerCase() < b.title.titletoLowerCase()) {
      return -1;
    }
    if (a.titletoLowerCase() < b.title.titletoLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (!asc) items.reverse();
  asc = !asc;
  showItems(items);
}

