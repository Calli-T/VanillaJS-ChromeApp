const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad() {
    console.log("finished loading");
}

function getRandom(){
    const number = Math.floor(Math.random() * 5);
    return number;
}//랜덤하게 뽑아온다

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `img/landscape${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.classList.add('bgImg');
    image.addEventListener("loadend", handleImgLoad)
}//이미지 소스를 가져와서 body에 자식element로 넣어준다

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();