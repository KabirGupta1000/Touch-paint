var canvas = document.getElementById("My_first_canvas");
var ctx = canvas.getContext("2d");
var colour = "red";
ctx.beginPath();
ctx.strokeStyle= colour;
ctx.lineWidth= 2;
ctx.arc(300,400,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",My_mouse_down);
function My_mouse_down(e)
{
    console.log("mousedown function");
    var mouse_x = e.clientX - canvas.offsetLeft;
    var mouse_y = e.clientY - canvas.offsetTop;
    console.log(mouse_x+ ", "+mouse_y); 
    circle(mouse_x , mouse_y);
} 
function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle= "green";
    ctx.lineWidth= 2;
    ctx.arc(mouse_x, mouse_y,40,0,2*Math.PI);
    ctx.stroke();  
}