var canvas = new fabric.Canvas("myCanvas");

var player_object="";
var blockImage_object="";

playerX = 10;
playerY= 10;

blockImage_Height = 30;
blockImage_Width = 30;

function player_update()
{
fabric.Image.fromURL("player.png" , function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:playerY,
        left:playerX
    });

canvas.add(player_object);

});}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        blockImage_object = Img;
    
        blockImage_object.scaleToWidth(blockImage_Width);
        blockImage_object.scaleToHeight(blockImage_Height);
        blockImage_object.set({
            top:playerY,
            left:playerX
        });
    
    canvas.add(blockImage_object);
    
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown (e)
{
keyPressed = e.keyCode;
if(e.shiftKey==true && keyPressed =='80')
{
    blockImage_Height = blockImage_Height+10;
    blockImage_Width = blockImage_Width+10;
    document.getElementById("currentHeight").innerHTML = blockImage_Height;
    document.getElementById("currentWidth").innerHTML = blockImage_Width;
}
if(e.shiftKey==true && keyPressed =='77')
{
    blockImage_Height = blockImage_Height-10;
    blockImage_Width = blockImage_Width-10;
    document.getElementById("currentHeight").innerHTML = blockImage_Height;
    document.getElementById("currentWidth").innerHTML = blockImage_Width;
}
if(keyPressed=='37')
{
    left();
}
if(keyPressed=='39')
{
    right();
}
if(keyPressed=='38')
{
    up();
}
if(keyPressed=='40')
{
    down();
}
if(keyPressed=='87')
{
    new_image('wall.jpg');
}
if(keyPressed=='71')
{
    new_image('ground.png');
}
if(keyPressed=='76')
{
    new_image('light_green.png');
}
if(keyPressed=='84')
{
    new_image('trunk.jpg');
}
if(keyPressed=='82')
{
    new_image('roof.jpg');
}
if(keyPressed=='89')
{
    new_image('yellow_wall.png');
}
if(keyPressed=='68')
{
    new_image('dark_green.png');
}
if(keyPressed=='85')
{
    new_image('unique.png');
}
if(keyPressed=='67')
{
    new_image('cloud.jpg');
}
}

function up()
{
    if(playerY>=0)
    {
        playerY = playerY - blockImage_Height;
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(playerY<=550)
    {
        playerY = playerY + blockImage_Height;
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(playerX<=950)
    {
        playerX = playerX + blockImage_Width;
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(playerX>=0)
    {
        playerX = playerX - blockImage_Width;
        canvas.remove(player_object);
        player_update();
    }
}