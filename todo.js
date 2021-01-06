const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input"), // 요소안에 부모에 속한 첫 번째 요소를 가져온다
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';


function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
    
    }
}

function paintToDo(text){
    const li = document.createElement("li");//tag생성가능
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);//이 함수는 부모를 인자에 받으며, 해당 요소를 부모에 자식요소로 삽입한다.
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}


init();