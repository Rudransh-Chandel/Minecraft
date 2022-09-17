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