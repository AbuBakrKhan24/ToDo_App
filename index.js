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
  <div class="item"><input class="checkboxes" type="checkbox">${item.product}</div>
    `;
});
// Add Function
function add() {
  NewItem = document.getElementById("add_info").value;
  items.push(NewItem);
  document.getElementById("list").innerHTML += `
  <div class="item"><input class="checkboxes" type="checkbox">${NewItem}</div>
    `;
  console.log(items);
}

function Search() {
  let input = document.getElementById("Input").value;

  if (items.indexOf(parseInt(input)) != -1) {
    alert(input);
    return;
  }
  alert("Value not found");
}

function scratch() {
  document.querySelector(".item").getElementsByClassName.textdecoration =
    "line-through";
}

// function Search() {
//   GetDetails = document.getElementById("Get").value;
//   console.log(array.indexOf("1"));
// }
