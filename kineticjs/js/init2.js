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

      var rect2 = new Kinetic.Rect({
        x: 50,
        y: 50,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'orange',
        strokeWidth: 4,
        rotation:toRadian(45),
        offset:{x:50,y:25},
        draggable:true
      });

      var circle = new Kinetic.Circle({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: 70,
        fill: 'red',
        stroke: 'green',
        strokeWidth: 4,
        draggable:true
      });

      var wedge = new Kinetic.Wedge({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: 70,
        angleDeg: 60,
        fill: 'red',
        stroke: 'blue',
        strokeWidth: 4,
        rotationDeg: -120
      });

      var redLine = new Kinetic.Line({
        points: [73, 70, 340, 23, 450, 60, 500, 20],
        stroke: 'red',
        strokeWidth: 15,
        lineCap: 'round',
        lineJoin: 'round'
      });

      var poly = new Kinetic.Polygon({
        points: [73, 192, 73, 160, 340, 23, 500, 109, 499, 139, 342, 93],
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 5
      });


      var simpleText = new Kinetic.Text({
        x: stage.getWidth() / 2,
        y: 15,
        text: 'Simple Text',
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'green'
      });



      // add the shape to the layer
      layer.add(rect);
      layer.add(rect2);
      layer.add(circle);
      layer.add(wedge);
      layer.add(redLine);
      layer.add(poly);
      layer.add(simpleText);



      // add the layer to the stage
      stage.add(layer);



















/////////////////////////////////////////////////////////////////

      // var stage = new Kinetic.Stage({
      //   container: 'container',
      //   width: stageAncho,
      //   height: stageAlto
      // });
      // var layer = new Kinetic.Layer();
      // var animations = {
      //   idle: [{
      //     x: 2,
      //     y: 2,
      //     width: 70,
      //     height: 119
      //   }, {
      //     x: 71,
      //     y: 2,
      //     width: 74,
      //     height: 119
      //   }, {
      //     x: 146,
      //     y: 2,
      //     width: 81,
      //     height: 119
      //   }, {
      //     x: 226,
      //     y: 2,
      //     width: 76,
      //     height: 119
      //   }],
      //   punch: [{
      //     x: 2,
      //     y: 138,
      //     width: 74,
      //     height: 122
      //   }, {
      //     x: 76,
      //     y: 138,
      //     width: 84,
      //     height: 122
      //   }, {
      //     x: 346,
      //     y: 138,
      //     width: 120,
      //     height: 122
      //   }]
      // };

      // var imageObj = new Image();
      // imageObj.onload = function() {
      //   var blob = new Kinetic.Sprite({
      //     x: 250,
      //     y: 40,
      //     image: imageObj,
      //     animation: 'idle',
      //     animations: animations,
      //     frameRate: 7,
      //     index: 0
      //   });

      //   // add the shape to the layer
      //   layer.add(blob);

      //   // add the layer to the stage
      //   stage.add(layer);

      //   // start sprite animation
      //   blob.start();

      //   // resume transition
      //   document.getElementById('punch').addEventListener('click', function() {
      //     blob.setAnimation('punch');

      //     blob.afterFrame(2, function() {
      //       blob.setAnimation('idle');
      //     });
      //   }, false);
      // };
      // imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/blob-sprite.png';











	function toDegres(r)
	{
		return (r*180)/Math.PI
	}
	function toRadian(s)
	{
		return (s*Math.PI)/180
	}


});







