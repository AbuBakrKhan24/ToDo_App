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
  <div class="item" id="listing"><input class="chb checkboxes"  type="checkbox"  ><label for="add_info">${item.product}</label><i class="fa-solid fa-trash-can"></i></div>
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
