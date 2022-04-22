const inputTodo = document.querySelector(".form__input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

let todoArray = [];
let id;

const getItensBD = () => JSON.parse(localStorage.getItem("dbfunc")) ?? [];
const setItensBD = () =>
  localStorage.setItem("dbfunc", JSON.stringify(todoArray));

const loadTodo = () => {
  todoArray = getItensBD();
  ul.innerHTML = "";
  todoArray.forEach((todo, index) => {
    insertTodo(todo, index);
  });
};

const insertTodo = (todo, index) => {
  let li = document.createElement("li");

  li.innerHTML = `
  ${todo}<span><i onclick="deleteItem(${index})" class="bx bxs-trash"></i></span>
  `;
  ul.appendChild(li);
};

const deleteItem = (index) => {
  todoArray.splice(index, 1);
  setItensBD();
  loadTodo();
};

const clearInput = () => (inputTodo.value = "");

const pressEnterInput = () =>
  document.addEventListener("keyup", (event) => {
    if (inputTodo.value === "") {
      return alert("Preencha o campo");
    } else if (event.keyCode === 13) {
      let todo = inputTodo.value;
      todoArray.push(todo);
      setItensBD();
      loadTodo();
      clearInput();
    }
  });

const clickButton = () =>
  button.addEventListener("click", () => {
    if (inputTodo.value === "") {
      return alert("Preencha o campo");
    } else {
      let todo = inputTodo.value;
      todoArray.push(todo);
      setItensBD();
      loadTodo();
      clearInput();
    }
  });

loadTodo();
clickButton();
pressEnterInput();
