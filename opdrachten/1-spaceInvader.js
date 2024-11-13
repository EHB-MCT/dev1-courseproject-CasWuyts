let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

signature();

function signature(){
    context.fillRect(50,50,300,300);
    context.fillStyle = '#0EFFF8';
    context.fillRect(75,75,50,50);
    context.fillRect(275,75,50,50);
    context.fillRect(75,225,250,50);
    context.fillRect(125,175,50,50);
    context.fillRect(225,175,50,50);
}