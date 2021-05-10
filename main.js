
canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=90;
backgroundimage="mars.jpg";
roverimage="rover.png";
roverx=10;
rovery=10;
function add()
{
    background_image_tag=new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=backgroundimage;
   
    rover_image_tag=new Image();
    rover_image_tag.onload=uploadRover;
    rover_image_tag.src=roverimage;
}
function uploadBackground()
{
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function uploadRover()
{
    ctx.drawImage(rover_image_tag,roverx,rovery,roverwidth,roverheight);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
    if(keypressed=='37')
    {
       left();
        console.log("left");
    }
    if(keypressed=='39')
    {
       right();
        console.log("right");
    }
}
function up(){
    if(rovery>=0){
        rovery=rovery-10;
        console.log("when up arrow is pressed, x="+roverx+"|y=" +rovery);
        uploadBackground();
        uploadRover();

    }
}
function down(){
    if(rovery<=500){
        rovery=rovery+10;
        console.log("when up arrow is pressed, x="+roverx+"|y=" +rovery);
        uploadBackground();
        uploadRover();

    }
}
function left(){
    if(roverx>=0){
        roverx=roverx-10;
        console.log("when up arrow is pressed, x="+roverx+"|y=" +rovery);
        uploadBackground();
        uploadRover();

    }
}
function right(){
    if(roverx<=700){
        roverx=roverx+10;
        console.log("when up arrow is pressed, x="+roverx+"|y=" +rovery);
        uploadBackground();
        uploadRover();

    }
}