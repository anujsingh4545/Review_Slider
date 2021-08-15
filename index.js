const reviews =[
    {
    img: "first.jpg",
    name: "Taylor Swaf",
    profession: "WEB DESIGNER",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis assumenda excepturi eos asperiores ipsa, quos unde tenetur exercitationem explicabo vel illo magnam, totam voluptatum veritatis voluptate optio iste. Voluptatem tempore quasi aliquam accusantium. Dolorum facere, corporis nulla aspernatur minus et, maxime voluptatum, in consectetur saepe sequi explicabo adipisci sint.",
    },
    {
        img: "second.jpg",
    name: "Sants Latina",
    profession: "WEB DEVLOPER",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur, quod dolores itaque recusandae nemo delectus blanditiis quos ratione a nesciunt id cum, error tempora animi! Sapiente, voluptatum ab facilis animi velit corrupti ratione, natus, iusto magni sint suscipit. Cupiditate aut nostrum ea officia dolores eligendi sed nulla, assumenda dolorum?",
    },
    {
        img: "third.jpg",
    name: "Harley Illen",
    profession: "SOFTWARE TESTER",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur, quod dolores itaque recusandae nemo delectus blanditiis quos ratione a nesciunt id cum, error tempora animi! Sapiente, voluptatum ab facilis animi velit corrupti ratione, natus, iusto magni sint suscipit. Cupiditate aut nostrum ea officia dolores eligendi sed nulla, assumenda dolorum?  asit ifwwsac d,ddk .",
    },
    {
        img: "four.jpg",
    name: "Xani Alexander",
    profession: "ANDROID DEVLOPER",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur, quod dolores itaque recusandae nemo delectus blanditiis quos ratione a nesciunt id cum, error tempora animi! Sapiente, voluptatum ab facilis animi velit corrupti ratione, natus, iusto magni sint suscipit. Cupiditate aut nostrum ea officia dolores eligendi sed nulla, assumenda.",
    }
]

let index =1;
let image = document.querySelector(".image");
let names = document.querySelector(".name");
let profession = document.querySelector(".profession");
let info = document.querySelector(".info");

let left = document.querySelector(".bi-chevron-left");
let right = document.querySelector(".bi-chevron-right");
let surprise = document.querySelector(".random");

window.addEventListener("DOMContentLoaded", function(){
    showdata(index)
})

function showdata(person){
    const item = reviews[index];
    image.src = item.img;
    names.textContent = item.name;
    profession.textContent=item.profession;
    info.textContent=item.text;
}

right.addEventListener("click",function(){
    index++;
    if(index >reviews.length-1){
        index=0;
    }
    showdata(index);
})

left.addEventListener("click",function(){
    index--;
    if(index < 0){
        index=3;
    }
    showdata(index);
})

surprise.addEventListener("click",function(){
    index = Math.floor(Math.random() * reviews.length );
    showdata(index);

})