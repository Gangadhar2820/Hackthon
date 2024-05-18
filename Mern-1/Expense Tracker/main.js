const categoryEle = document.getElementById("category");
const amountEle = document.getElementById("amount");
const dateEle = document.getElementById("date");
const form = document.querySelector("form");
const expenseListEle = document.querySelector("table");

let listIndex = 0;

form.onsubmit = (event) => {
  let category = categoryEle.value;
  let amount = amountEle.value;
  let date = dateEle.value;

  let newEle = document.createElement("tr");
  newEle.innerHTML = `<td><strong id=c${listIndex}>${category}</strong></td>
  <td><strong id=a${listIndex}>${amount}</strong></td>
  <td><strong id=d${listIndex}>${date}</strong></td>
  <td><button class="edit" rid = ${listIndex}>Edit</button></td><td><button class="delete">Delete</button></td>`;
  listIndex++;

  expenseListEle.appendChild(newEle);

  let deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((btn) => {
    btn.onclick = (e) => {
      let parent = btn.parentElement;
      parent.parentElement.remove();
    };
  });

  let editBtns = document.querySelectorAll(".edit");
  editBtns.forEach((btn) => {
    btn.onclick = () => {
      let ind = btn.getAttribute("rid");
      let tempCatVal = document.getElementById(`c${ind}`).innerText;
      let tempAmtVal = document.getElementById(`a${ind}`).innerText;
      let tempDateVal = document.getElementById(`d${ind}`).innerText;
      categoryEle.value = tempCatVal;
      amountEle.value = tempAmtVal;
      dateEle.value = tempDateVal;
      let parent = btn.parentElement;
      parent.parentElement.remove();
    };
  });

  event.preventDefault();
};
