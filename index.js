// Adding array
const items = [
  {
    id: 1,
    product: "TV Stand",
    createDate: new Date(),
  },
];

// Original Loop

items.forEach((item) => {
  console.log(item);
  document.getElementById("list").innerHTML += `
  <div class="item" id="listing"><input class="chb checkboxes"  type="checkbox"  ><label for="add_info">${item.product}</label></div>
  `;
});

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
}
