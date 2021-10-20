console.log("Dom");
const body = document.querySelector("body")
const listTitle = document.createElement("h1")
listTitle.innerHTML = "Todo List";

body.append(listTitle);

const ullist = document.createElement('ul')
ullist.id = "mylist"
body.append(ullist)


let toDos = ["wake up", "eat breakfast", "code"];


const renderlist = () => {
    ullist.innerHTML=""
    for (let index = 0; index < toDos.length; index++) {
        const newitem = document.createElement("li")
        

        newitem.innerHTML = toDos[index]
        ullist.append(newitem)
        

    }
}


renderlist();



//create input , button

const newInput = document.createElement("input")
body.append(newInput)

const addBtn = document.createElement("button")
addBtn.innerText="add to list"
body.append(addBtn)



////////

const addToList = () => {
console.log(newInput.value);
toDos.push(newInput.value)
renderlist()
}
addBtn.addEventListener("click", addToList)

///dele
const li1 = document.querySelectorAll("li");
  li1.forEach((element) => {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    element.append(deleteButton);
  });
  const deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons.forEach((element) => {
    element.addEventListener("click", deleteListItem);
  });

////update   

li1.forEach((element) => {
    const updateButton = document.createElement("button");
    updateButton.innerHTML = "update";
    element.append(updateButton);
  });
  const updateButtons = document.querySelectorAll(".updateButton");
  updateButtons.forEach((element) => {
    element.addEventListener("click", updateListItem);
  });
const updlist = (i)=>{
    let update = prompt ("please enter ur update", "")
    elementOfListt[i]= update;
    renderlist();
}
