const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input"), // 요소안에 부모에 속한 첫 번째 요소를 가져온다
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));//stringfy함수로 object를 string화 한다
}

function filterFn(todo) {
    return toDo.id === 1;
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);//파싱함수
        parsedToDos.forEach(function(toDo){ //forEach함수는 array에게 함수를 인자로 받아 원소에게 한 번씩 실행시킨다
            paintToDo(toDo.text);
        });
    }
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });//filter함수에 함수를 삽입하여 지우려는 li의 아이디가 아닌 모든것을 리턴한다
    
    toDos = cleanToDos; //filter로 거른 array를 원래 array에 넣고
    saveToDos();//저장한다
}

function paintToDo(text){
    const li = document.createElement("li");//tag생성가능
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);//이 함수는 부모를 인자에 받으며, 해당 요소를 부모에 자식요소로 삽입한다.
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
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