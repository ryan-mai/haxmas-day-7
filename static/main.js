const header = document.getElementById("header");

const date = document.querySelector('#header #date');

const formatDate = new Intl.DateTimeFormat('en', {
    dateStyle: "full"
});
// const day = actualDate.getDate();
const actualDate = formatDate.format(new Date());
// const year = actualDate.getFullYear();

const ornaments = [
    "ornaments/ornament_1.svg",
    "ornaments/ornament_2.svg",
    "ornaments/ornament_3.svg",
    "ornaments/ornament_4.svg",
    "ornaments/ornament_5.svg",
    "ornaments/ornament_6.svg",
    "ornaments/ornament_7.svg",
    "ornaments/ornament_8.svg",
    "ornaments/ornament_9.svg",
    "ornaments/ornament_10.svg",
    "ornaments/ornament_11.svg",
    "ornaments/ornament_12.svg"
];

const decorations = document.getElementById("decor");
document.addEventListener('DOMContentLoaded', () => {
    date.innerHTML = `${actualDate}`;
    const now = new Date();
    const month = now.getMonth() + 1;
    const days = now.getDate();

    if (month == 12) {
        let daysTill = Math.max(0, 25 - days);
        const treeWidth = treeSvg.offsetWidth;
        for (let i = 0; i < daysTill; i++) {
            const randOrnament = ornaments[Math.floor(Math.random() * 12)];
            decorations.innerHTML += `<img src="./assets/${randOrnament}" class="ornament" id="ornament${i}">`;
            
            const ornament = document.getElementById("ornament" + i);   
            ornament.style.position = "absolute";
            ornament.style.left = (Math.random() * (treeWidth - 60)) + "px";  
            ornament.style.top = (Math.random() * 500) + "px";
            ornament.style.marginLeft = (Math.random()*10+4)+"px";  
            ornament.style.marginTop = (Math.random()*2+3)+"px"; 
        }
    }
});

const container = document.getElementById("container");
const treeDiv = document.getElementById("tree");
const treeSvg = document.getElementById("tree-svg");

treeDiv.addEventListener("mouseenter", () => {
    console.log("A")
    treeSvg.style.filter = "drop-shadow(0px 0px 105px rgba(244,240,187,0.9))";
    treeSvg.style.cursor = "pointer";
});

treeDiv.addEventListener("mouseleave", () => {
    treeSvg.style.filter = "none";
    treeSvg.style.cursor = "default";
});