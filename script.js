const slides = [
    {
        img:"./img/h1.png",
        text:"Extreme simplicity defines elegance, comfort, and timeless hotel luxury",
       
    },
    {
        img:"./img/h2.jpg",
        text:"Nature whispers peace through green landscapes and open skies",
   
    },
    {
        img:"./img/h3.jpg",
        text:"Pure nature, calm air, greenery, and peaceful natural beauty.",
     
    },
    {
        img:"./img/h4.jpg",
        text:"Nature’s beauty flows with silence, greenery, and fresh air",
   
    },
];

let index = 0;

const img = document.getElementById("slideImg");
const text = document.getElementById("text");
const author = document.getElementById("author");

function render(){
    img.style.opacity = 0;
    setTimeout(()=>{
        img.src = slides[index].img;
        text.textContent = slides[index].text;
        author.textContent = slides[index].author;
        img.style.opacity = 1;
        img.style.transform = "scale(1.05)";
    },200);
}

function next(){
    index = (index + 1) % slides.length;
    render();
}

function prev(){
    index = (index - 1 + slides.length) % slides.length;
    render();
}

document.getElementById("next").onclick = next;
document.getElementById("prev").onclick = prev;

document.getElementById("slider").addEventListener("wheel",e=>{
    e.preventDefault();
    e.deltaY > 0 ? next() : prev();
});

render();
