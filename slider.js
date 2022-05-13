const memList = [
    {
        img: "images/1.jpg",
        text: 'Решил проверить глаза. А они оба разные!'
    },
    {
        img: "images/2.jpg",
        text: 'Люди не могут использовать тебя, если ты бесполезен'
    },
    {
        img: "images/3.jpg",
        text: 'Когда вместо обещанной зарплаты получил 100р'
    },
    {
        img: "images/4.jpg",
        text: 'Душ не баня! Помыл яйца - ДОСВИДАНИЯ'
    },
]

let pictures = document.getElementById("pictures");
let text = document.getElementById("mem");
let dots = document.querySelector(".slider-dots");
let prev = memList[0].img;
let next = '';
let prev_text = memList[0].text;
let next_text = '';

function movesImage(next_pictures, next_content){
    pictures.style.opacity = 0;
    pictures.style.transition = `opacity ${1000}ms`;

    text.style.opacity = 0;
    text.style.transition = `opacity ${1000}ms`;
    setTimeout(()=>{
        pictures.style.opacity = 1;
        text.style.opacity = 1;
        if (pictures.style.opacity == 1) {
            pictures.src = next_pictures;
            prev = next_pictures;
        }
        if (text.style.opacity == 1) {
            text.innerText = next_content;
            prev_text = next_content;
        }
    }, 500);
}

function init(){
    for (let i=0; i<4; i++){
        let dot = document.createElement('span');
        dot.classList.add("slider-dots-item");
        dot.innerText = `${i}`
        dots.append(dot);
        if (i == 0) dot.classList.add("active");
    }
}

function viewContent(number){
    if (prev == memList[number].img) {
        pictures.src = memList[number].img;
        text.innerText = memList[number].text;
    } else {
        next = memList[number].img
        next_text = memList[number].text
        movesImage(next,next_text);
    }
}

init()


let dots_items = document.querySelectorAll(".slider-dots-item");

dots_items.forEach(e => e.addEventListener("click", ()=>{
    viewContent(e.textContent);
    dots_items.forEach(el => el.classList.remove("active"));
    e.classList.add("active");
}))