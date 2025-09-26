function addTask() {
  let todoData = document.getElementById("todo_input"); //input field hai
  let todoValue = todoData.value; // input field ke andar ki value
  // console.log(todoValue);

  if (todoValue.trim() === "") {
    alert("Please Enter Your Tasks");
    return;
  }

  let listItem = document.createElement("li"); //making li through js
  let listData = document.createTextNode(todoValue); // li ke andar ka data

  listItem.appendChild(listData); // li ka data li ke tag mein append kardiya

  let todo_list = document.getElementById("todo_list");
  todo_list.appendChild(listItem); // ul ke andar li append kar diya

  todoData.value = "";

  deleteButton = document.createElement("button");
  deleteBtnText = document.createTextNode("Delete");

  deleteButton.appendChild(deleteBtnText);
  listItem.appendChild(deleteButton);
  deleteButton.setAttribute("class", "deletebtn");
  //   todo_list.removeChild(listItem);
  // };

  deleteButton.addEventListener("click", function () {
    todo_list.removeChild(listItem);
  });

  let editBtn = document.createElement("button");
  editBtn.setAttribute("class", "editBtn");
  let editBtnText = document.createTextNode("Edit");
  // console.log(listItem.childNodes[0].nodeValue);
  editBtn.addEventListener("click", function () {
    let updateText = prompt(
      "Update Your Task:",
      listItem.childNodes[0].nodeValue
    );
    if (updateText !== null && updateText.trim() !== "") {
      //edit prompt mein cancel karne par ul ke li value delete ho rhi thi is liye condition lagai hai
      listItem.childNodes[0].nodeValue = updateText;
    }
  });
  editBtn.appendChild(editBtnText);
  listItem.appendChild(editBtn);
}
