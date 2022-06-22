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
  <div class="item" id="id1"><input class="checkboxes"  type="checkbox" onclick="scratch()" >${item.product}</div>
  `;
});
// Scratch listing
function scratch() {
  let chb = document.getElementsByClassName("item");

  if(chb.checked) {
  document.getElementById('id1').style.textDecoration = 'line-through'
}
}

// Add Function
function add() {
  NewItem = document.getElementById("add_info").value;
  items.push(NewItem);
  document.getElementById("list").innerHTML += `
  <div class="item" id="id1"><input class="checkboxes" type="checkbox" onclick"scratch()">${NewItem}</div>
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




// function func() {
//   let chb = document.getElementsByClassName("chb");

//   if(chb.checked)
//   {
//     document.getElementById("line").style.color = "red";
//   } 
// }



// function Search() {
//   GetDetails = document.getElementById("Get").value;
//   console.log(array.indexOf("1"));
// }
