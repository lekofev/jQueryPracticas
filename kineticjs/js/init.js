/**
*
* @fileoverview Libreria con funciones de utilidad
* @author Nombre_programador
* @date Fecha_inicio
* @version 1.0
*/

$(document).ready(function(){

  var stageAncho=780;
  var stageAlto=460;
  var nave;


  var touchX;
  var touchY;

  var velocidadNave=1;
  var direccionX;
  var direccionY;


  var stage = new Kinetic.Stage({
    container: 'container',
    width: stageAncho,
    height: stageAlto
  });

  var layer = new Kinetic.Layer();


  var rect = new Kinetic.Rect({
    x: 239,
    y: 75,
    width: 100,
    height: 50,
    fill: 'green',
    stroke: 'orange',
    strokeWidth: 4
  });


  var imageObj = new Image();
  imageObj.src = 'images/sprite.png';

  imageObj.onload = function() {    
    nave = new Kinetic.Image({
      x: stage.getWidth()/2,
      y: stage.getHeight()/2,
      image: imageObj,
      crop:{x:0, y:0, width:30, height:30},
      width:30,
      height:30,
      offset: {x:15, y:15}
    });
  
    init();

  };

  var mov=0;
  function init()
  {
    

    layer.add(nave); 


    var anim = new Kinetic.Animation(function(frame) {
      // console.log(touchX, touchY)
      mov++
      // rect.setX(mov);
      // // nave.setX(mov);
      // nave.setRotation(mov)
      // console.log(nave)
      // nave.attrs.x(mov)
      // nave.attrs.rotation=toDegres(rotar);
      
      // nave.attrs.rotation=mov;
      moverNave()

    }, layer);
    anim.start();



  }


  stage.on('touchstart', function(e) {
    var touchPos = stage.getTouchPosition();
    touchX = touchPos.x;
    touchY = touchPos.y;
  });

  function moverNave()
  {

    // nave.setRotation(mov)
    if(touchX && touchY)
    {
     var rotarR=getRadianes(touchY, nave.getY(), touchX, nave.getX())
     
      nave.setRotationDeg(toDegres(rotarR))

      direccionX=getSin(rotarR)*velocidadNave; 
      direccionY=getCos(rotarR)*velocidadNave;

      // console.log(velocidadNave, direccionX, direccionY)

      nave.setX(nave.getX()+direccionX);
      nave.setY(nave.getY()+direccionY);
      // console.log(nave.getX()+direccionX)

    }

  }





  function getRadianes(posicionFinalY, posicionInicialY, posicionFinalX, posicionInicialX)
  {
    return Math.atan2(posicionFinalY -posicionInicialY, posicionFinalX -posicionInicialX)
  }
  function toDegres(r)
  {
    return (r*180)/Math.PI
  }
  function toRadian(s)
  {
    return (s*Math.PI)/180
  }

  function getSin(r)
  {
    return Math.sin(r)
  }
  function getCos(r)
  {
    return Math.cos(r)
  }


  // var amplitude = 150;
  // var period = 2000;
  // in ms
  // var centerX = stage.getWidth() / 2;  


  layer.add(rect);
  stage.add(layer);








});







