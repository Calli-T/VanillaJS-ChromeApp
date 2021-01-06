const clockContainer = document.querySelector(".js-clock"),
        clockTitle = document.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);//이함수는 함수를 받고 시간간격을 ms로 받아 시간간격마다 실행시킨다
}

init();


























/*const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    //if(currentClass !== CLICKED_CLASS){
    if(title.classList.contains(CLICKED_CLASS)) {
        //title.className = CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS);
    } else{
        //title.className = "";
        title.classList.remove(CLICKED_CLASS);
    }
}
//classList에 add나 remove로 class추가 제거 가능, 포함 확인은 contains로


function init(){
    title.addEventListener("click", handleClick);
}
init();*/

//이벤트 리스트 명세는 다음사이트에 있다
//  https://developer.mozilla.org/ko/docs/Web/Events

/*const title = document.querySelector("#title");
let isRed = false;

function clickEvent(){
    if(isRed){
        title.style.color = "blue";
        isRed = false;
    } else{
        title.style.color = "red";
        isRed = true;
    }
}

function resizeEvent(){
    title.style.color = "wheat";
}

window.addEventListener("click", clickEvent);
window.addEventListener("resize", resizeEvent);
//웹사이트의 발생하는 사건들은 input, click등등 이벤트라고 한다
//EventLister를 통해 이벤트의 동작시점에 사용될 함수를 지정할 수 있다.*/

//2.2~2-3
/*let title = document.getElementById("title");
title.innerHTML = "Hi! From JS";
title.style.color="wheat";
document.title = `Testing js`;
//document object는 HTML문서를 가져와서 객체로 만들어준다. (html과 xml은 브라우저 안에서 dom트리로 표현된다)
//document의 getElementById함수는 HTML의 id를 보고 각 태그를 지정해서 가져온다
//.innerHTML함수는 HTML안에 글을넣어준다
//style도 객체이며 수정가능하다
//각 요소는 많은 객체들을 포함한다
//document객체의 get~함수로 각 요소들을 특정할 할 수 있다

title = document.querySelector("#title");
title.style.fontSize = ("100px");
//querySelector는 css와 비슷하게 id나 class, 요소명을 가져오며 첫 번째것을 가져온다
//html과 css는 JS로 수정가능함*/

/*const calculator = {
    plus: function(a, b) {
        return a+b;
    }
}

console.log(calculator.plus(5,5));*/


/*function getText(name, job, lv){
    return `Name: ${name}, job: ${job}, level: ${lv}`;
}
console.log(getText("Dynast's Descendant", "AB", 251));
console.log(getText("UGSDK", "Bishop", 235));
console.log(getText());*/


/*function greeting(name){
    console.log(`Hello ${name}`);
}
greeting("dynast");*/
//String은 백틱(``)사이에 넣고 그 안에 변수는${변수명}의 형태로 삽입한다

/*function greeting(potato) {
    console.log(potato + "Lv")
}

greeting(251);*/

/*const mInfo = {
    Lv:251,
    NickName:"Dynast",
    Server:"Rebute 2",
    job:["Bishop", "AngelicBuster"],
    favFood:[{name: "Kimchi", isfatty:true},
            {name: "Cheese burger", isfatty:true}]
};
//alert(mInfo);
//console.log(mInfo);
//console.log(mInfo.job[0], mInfo.favFood[1].isfatty);
console.log(console.log);*/

/*let some = "zeroday";
const dayOfWeeks = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun", some];
alert(dayOfWeeks);
alert(dayOfWeeks[7]);*/

//const는 변경불가능, let은 변경가능 var는 옛날 변수

//alert('How to use JS');

/*let a = 224;
let b = 4;
a = a-b;

console.log(b, a);*/