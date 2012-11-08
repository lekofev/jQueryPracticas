/**
 * jPageFlip
 *
 * @url		    : http://jpageflip.just-page.de
 * @author    : Erik Stelzer
 * @version	  : 0.9.1
 *
 * Copyright 2010, Erik Stelzer
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php 
**/


(function($){
    $.jPageFlip = function(el, options){
      
      $.jPageFlip.defaultOptions = {
        pageAnimation : true,
        animationSpeed : 10,
        animationDynamic : 10,
        cornerSize : 50,
        showCorner : false,
        cornerColor : '#ffffff',
        cornerAlpha : 0.3,
        left : 0,
        top : 0,
        startPage : 1,
        shadowWidth : 15,
        shadowOpacity : 0.3,
        flipOnClick : true,
        width: 0,
        height: 0
      };
  
      var base = this;
          
      base.$el = $(el);
      base.el = el;
      
      // ****************************************************************************** 
      // Variablen deklarieren und initialisieren
      // ******************************************************************************
      base.$el.data("jPageFlip", base);
      var ctx = new Object();
      var ctx2 = new Object();
      var contentX;
      var contentY;   
      var iWidth;
      var iHeight;
      var innerMx;
      var innerMy;
      var outerMx;
      var outerMy;
      var outerRadius; //äußerer Kreis   
      var mouseAbsX;
      var mouseAbsY;
      var mouseRelCenterX = 0;
      var mouseRelCenterY = 0;
      var newPosX = innerMx + mouseRelCenterX;
      var newPosY = mouseRelCenterY;
      var is_mouseDown = false;
      var degHelp = Math.PI/180;
      var CX;
      var CY;
      var MCX = 0;
      var MCY = 0;
      var r1x = 0;
      var r1y = 0;
      var r2x = 0;
      var r2y = 0;
      var T1C = 0;
      var T1X = 0;
      var T1Y = 0;
      var T2X = 0;
      var T2Y = 0;
      var T1YRel = 0;
      var CLeftCX = 0;
      var T2CX = 0;
      var T2CY = 0;
      var angleClip = 0;
      var angleImage = 0;
      var isFlipped = false;
      var actPage; //aktuelle Seite
      var flipDirection = 0;
      var takePage;
      var dropPage;
      var z = 0;
      var dynamicHelp = 0;
      var tabCorner = false;
      var angleCXMCY = 0;
      var angleT1XT1Y = 0;
      var isMouseInCorner = false;
      var gradient = new Object();
      var flipImage = new Array();
      var imgFlipFrontRight = new Image();
      var imgFlipBackRight  = new Image();
      var imgFlipFrontLeft  = new Image();
      var imgFlipBackLeft   = new Image();
      var interval;
      var video = new Object();;
      var _timer;
      
      // ****************************************************************************** 
      // Bilder laden
      // ******************************************************************************
      base.getImages = function() {
        var i = 0;
        var h;
        //flipImage[0] = new Image();
        //flipImage[0]['src'] = 'images/clearpixel.gif';
        $.each(base.$el.find('.jPageFlip'), function(i) {
          
          // ToDo: später ausführen. probleme beim laden in chrome
          // testen !!!!!
          $(this).css('display','none'); //alle Bilder auf der Zeichenfläche ausblenden"
          
          
          
          if (this.nodeName == 'IMG')
            flipImage[i] = new Image();
          else if (this.nodeName == 'VIDEO')
            flipImage[i] = new Object();
          flipImage[i]["src"] = this.src;
          flipImage[i] = this;
        });
        flipImage[flipImage.length] = new Image();
        flipImage[flipImage.length-1]['src'] = 'images/clearpixel.gif';
        
        var help1 = 0;
        var help2 = 0;

        imgFlipBackLeft   = flipImage[actPage-1];
        imgFlipFrontLeft   = flipImage[actPage-1];
        imgFlipFrontRight  = flipImage[actPage];
        imgFlipBackRight   = flipImage[actPage+1];
        iHeight = base.options.height;
        iWidth = base.options.width;
        //base.preloadImage();
        base.initializeContent();
            
        // Hilfszuweisung für Preload (ansonsten wird möglicherweise beim ersten Aufruf kein Bild angezeigt)
        flipImage[actPage-1].src = imgFlipFrontLeft.src;
        flipImage[actPage].src = imgFlipFrontRight.src;
          
      } 
      
      // ****************************************************************************** 
      // Image-Preload
      // ******************************************************************************
      var help1 = 0;
      var help2 = 0;
      var t1;
      base.preloadImage = function() {
        window.clearTimeout(t1);
        flipImage[actPage-1].onload = function() {
            // Breite und Höhe auslesen
            help2 = 1;
        }
        
        flipImage[actPage].onload = function() {
          // Breite und Höhe auslesen
          help1 = 1;

        }
        iHeight = flipImage[actPage-1].height;
        iWidth = flipImage[actPage-1].width;
        if ((iHeight == 0) || (iWidth == 0) || (help1 == 0) || (help2 == 0)) {
          t1 = window.setTimeout(function() {base.preloadImage()}, 10);
        }
        //else
          base.initializeContent();
      }
       
      // ****************************************************************************** 
      // Seite initialisieren
      // ****************************************************************************** 
      base.init = function(){
        // Optionsparameter initialisieren 
        base.options = $.extend({},$.jPageFlip.defaultOptions, options);
        // Canvas-Position festlegen
        contentX = base.options.left;
        contentY = base.options.top;
        // Startseite festlegen
        actPage = base.options.startPage;
        // Bilder laden
        base.getImages();
        // Sanfter Seitenwechsel (derzeit) immer
        base.options.pageAnimation = true;
      }
        
     base.initializeContent = function() {
      innerMx = iWidth + contentX;
      innerMy = iHeight;
      outerMx = innerMx;
      outerMy = innerMy - iHeight;
      outerRadius = Math.sqrt(iWidth * iWidth + iHeight * iHeight); //äußerer Kreis
      $(base.el).children().remove(); // Arbeitsfläche säubern (Fix the Firefox-Problem by Reload (F5))
      $(base.el).css({'position':'relative','width':2*iWidth,'height':iHeight});
      
      // Canvas-Container
      $(base.el).prepend('<div id="canvascontainer" style="position:absolute;z-index: 10;">');
      $(base.el).prepend('<div id="canvascontainer2" style="position:absolute;z-index: 8;">');
      $('#canvascontainer').append('<canvas id="canvasPageFlip" width="'+3*iWidth+'" height="'+2*iHeight+'" style="background-color: none;">');
      $('#canvascontainer2').append('<canvas id="canvasPageFlip2" width="'+3*iWidth+'" height="'+2*iHeight+'" style="background-color: none;">');
      
      //statische Bilder
      $(base.el).append('<div id="pageBackgroundLeft">');
      $(base.el).append('<div id="pageBackgroundRight">');
      $(base.el).append('<div id="pageBackgroundLeft2">');
      $(base.el).append('<div id="pageBackgroundRight2">'); 
      $('#pageBackgroundLeft').css({'left': (innerMx - iWidth) + 'px','top': contentY + 'px', 'position':'absolute', 'z-index': '5', 'width': iWidth, 'height': iHeight, 'background': 'none'});
      $('#pageBackgroundRight').css({'left':innerMx + 'px','top':contentY + 'px', 'position':'absolute', 'z-index': '5', 'width': iWidth, 'height': iHeight, 'background': 'none'});
      $('#pageBackgroundLeft2').css({'left': (innerMx - iWidth) + 'px','top': contentY + 'px', 'position':'absolute', 'z-index': '4', 'width': iWidth, 'height': iHeight, 'background': 'none'});
      $('#pageBackgroundRight2').css({'left':innerMx + 'px','top':contentY + 'px', 'position':'absolute', 'z-index': '4', 'width': iWidth, 'height': iHeight, 'background': 'none'});
      // Startbilder setzen
      if (flipImage[actPage-1])
        $('#pageBackgroundLeft').html('<img src="' + flipImage[actPage-1].src + '">');      
      if (flipImage[actPage])
        $('#pageBackgroundRight').html('<img src="' + flipImage[actPage].src + '">');  
      if (flipImage[actPage-2])
        $('#pageBackgroundLeft2').html('<img src="' + flipImage[actPage-2].src + '">');
      if (flipImage[actPage+1])
        $('#pageBackgroundRight2').html('<img src="' + flipImage[actPage+1].src + '">');    
      
      // initialisiere Canvas
      ctx = document.getElementById('canvasPageFlip').getContext('2d');       
      ctx2 = document.getElementById('canvasPageFlip2').getContext('2d');
      
      
      // Ecken
      if (base.options.showCorner)
        base.drawCorners();
      // Schatten
      base.drawShadowsBack();
            // Events
        $(base.el).bind({mousemove: function(event) {base.mouseMove(event)}});
        $(base.el).bind({mousedown: function(event) {base._mouseDown(event)}});
        $(base.el).bind({mouseup: function(event) {base._mouseUp(event)}});
        $(base.el).bind({mouseleave: function(event) {$(base.el).css('cursor','auto');}});

     }

      // ****************************************************************************** 
      // Absolute Mausposition
      // ******************************************************************************
      base.mouseMove = function(e) {
        // absolute Mausposition
        mouseAbsX = e.pageX-$(base.el).offset().left;
        mouseAbsY = e.pageY-$(base.el).offset().top;
        // Überprüfen, ob Maus sich in einer Ecke (unten) befindet
        base.isMouseInCorner();
        // Mausposition berechnen
        base.calcRelMousePos();
        if (is_mouseDown)
          base.pageFlip();
      }

      // ****************************************************************************** 
      // Relative Mausposition
      // ******************************************************************************     
      base.calcRelMousePos = function() {
        mouseRelCenterX  = mouseAbsX - innerMx;
        mouseRelCenterY  = mouseAbsY - innerMy - contentY;
      }
      
      // ******************************************************************************
      // Maustaste gedrückt und Status "gedrückt" gespeichert
      // ******************************************************************************
  
      base._mouseDown = function(e) {
        base.isMouseInCorner();
        if (mouseRelCenterX > 0)
          takePage = 1;
        if (mouseRelCenterX < 0)
          takePage = -1;
        if (base.checkFirstAndLastPage()) {
          if (base.calculateActImages()) {
            is_mouseDown = true;
          }
        }
      } 


      // ******************************************************************************
      // Maustaste losgelassen
      // ******************************************************************************
      base._mouseUp = function(e) {
        $(base.el).css('cursor','auto');
        if (is_mouseDown)  {
          is_mouseDown = false;
          if (mouseRelCenterX >= 0) {
            var angle_clx = Math.atan((mouseRelCenterY) / Math.abs(CX-contentX-2*iWidth));
            if (base.options.pageAnimation) {
              if (base.options.flipOnClick) {
                base.isMouseInCorner();
                  if (isMouseInCorner) {
                    if (takePage == 1)
                      dropPage = -1;
                    if (takePage == -1)
                      dropPage = 1;
                    angle_clx = -0.04; // Winkel (flach) festlegen, da Winkel des Bildes in Ecke "unvórhersehbar"
                  }
                  else
                    dropPage = 1;
                }
                else {
                  dropPage = 1;
                }
              base.animateFlipping(angle_clx);
            }
            else {
              if (base.options.flipOnClick) {
                base.isMouseInCorner();
                if (isMouseInCorner) {
                  mouseRelCenterX = -iWidth;
                  dropPage = -1;
                }
                else {
                  mouseRelCenterX = iWidth;
                  dropPage = 1;
                }
              }
              else {
                mouseRelCenterX = iWidth;
                dropPage = 1;
              }
              mouseRelCenterY = 0;
            }
          }
          else { // mouseRelCenterX < 0
            var angle_clx = Math.atan((mouseRelCenterY) / (CX-contentX));
            if (base.options.pageAnimation) {
              if (base.options.flipOnClick) {
                base.isMouseInCorner();
                  if (isMouseInCorner) {
                    if (takePage == -1)
                      dropPage = 1;
                    if (takePage == 1)
                      dropPage = -1;
                    angle_clx = -0.04;  // Winkel (flach) festlegen, da Winkel des Bildes in Ecke "unvórhersehbar"
                  }
                  else
                    dropPage = -1;
                }
                else {
                  dropPage = -1;
                }
              base.animateFlipping(angle_clx);
            }
            else {
              if (base.options.flipOnClick) {
                base.isMouseInCorner();
                  if (isMouseInCorner) {
                    mouseRelCenterX = iWidth;
                    dropPage = 1;
                  }
                  else {
                    mouseRelCenterX = -iWidth;
                    dropPage = -1;
                  }
                }
              else {
                mouseRelCenterX = -iWidth;
                dropPage = -1;
              }
              mouseRelCenterY = 0;
            }
          }
          //isMouseInCorner = false;
          base.pageFlip();
          // Relative Mausposition neu berechnen
          mouseRelCenterX  = mouseAbsX - innerMx;
          mouseRelCenterY  = mouseAbsY - innerMy - contentY;
          // Prüfen, ob die Seite umgeschlagen wurde und aktuelle Seite berechnen
          if (!base.options.pageAnimation)
            base.calculatePage();
          // Ecken zeichnen
          if (base.options.showCorner)
            base.drawCorners();
        }
      }
      
      
      // ******************************************************************************
      // 
      // ******************************************************************************
      base.pageFlipIsActive = function(status) {
        window.clearTimeout(_timer);
        if (status) {
          //base.pageFlip();
          _timer = window.setTimeout(function() {base.pageFlipIsActive(true)},10);
        }
        else
          window.clearTimeout(_timer);
      }
      
      
      // ******************************************************************************
      // Aktuelle Bilder berechnen
      // ******************************************************************************
      base.calculateActImages = function() {
        var htmlText = '';
        if (isMouseInCorner) {
          if (takePage == 1) {
            if (flipImage[actPage-1]) {
              if (flipImage[actPage-1].nodeName == 'IMG') {
                $('#pageBackgroundLeft').html('<img src="' + flipImage[actPage-1].src + '">');
              }
              else if (flipImage[actPage-1].nodeName == 'VIDEO') {
                $('#pageBackgroundLeft').html(base.drawVideo(actPage-1));
              }
            }
            if (flipImage[actPage+2]) { // ende buch
              if (flipImage[actPage+2].nodeName == 'IMG') {
                $('#pageBackgroundRight').html('<img src="' + flipImage[actPage+2].src + '">');
              }
              else if (flipImage[actPage+2].nodeName == 'VIDEO') {
                $('#pageBackgroundRight').html(base.drawVideo(actPage+2));
              }
            }
            if (flipImage[actPage+4]) { // ende buch
              if (flipImage[actPage+4].nodeName == 'IMG') {
                $('#pageBackgroundRight2').html('<img src="' + flipImage[actPage+4].src + '">');
              }
               else if (flipImage[actPage+4].nodeName == 'VIDEO') {
                $('#pageBackgroundRight2').html(base.drawVideo(actPage+4));
              }
            }
            if (flipImage[actPage-3]) {
              if (flipImage[actPage-3].nodeName == 'IMG') {
                $('#pageBackgroundLeft2').html('<img src="' + flipImage[actPage-3].src + '">');
              }
              else if (flipImage[actPage-3].nodeName == 'VIDEO') {
                $('#pageBackgroundLeft2').html(base.drawVideo(actPage-3));
              }
            }
            imgFlipFrontRight = flipImage[actPage];
            imgFlipBackRight = flipImage[actPage+1];

          }
          if (takePage == -1) {
            if (flipImage[actPage]) {
              if (flipImage[actPage].nodeName == 'IMG') {
                $('#pageBackgroundRight').html('<img src="' + flipImage[actPage].src + '">');
              }
              else if (flipImage[actPage].nodeName == 'VIDEO') {
                $('#pageBackgroundRight').html(base.drawVideo(actPage));
              }
            }
            if (flipImage[actPage-3]) { // start buch
              if (flipImage[actPage-3].nodeName == 'IMG')
                $('#pageBackgroundLeft').html('<img src="' + flipImage[actPage-3].src + '">');
              else if (flipImage[actPage-3].nodeName == 'VIDEO') {
                $('#pageBackgroundLeft').html(base.drawVideo(actPage-3));
              }
            }
            if (flipImage[actPage+2]) { // start buch
              if (flipImage[actPage+2].nodeName == 'IMG') {
                $('#pageBackgroundRight2').html('<img src="' + flipImage[actPage+2].src + '">');
              }
              else if (flipImage[actPage+2].nodeName == 'VIDEO') {
                $('#pageBackgroundRight2').html(base.drawVideo(actPage+2));
              }
            }
            if (flipImage[actPage-5]) { // start buch
              if (flipImage[actPage-5].nodeName == 'IMG') {
                $('#pageBackgroundLeft2').html('<img src="' + flipImage[actPage-5].src + '">');
              }
              else if (flipImage[actPage-5].nodeName == 'VIDEO') {
                $('#pageBackgroundLeft2').html(base.drawVideo(actPage-5));
              }
            }
            imgFlipBackLeft = flipImage[actPage-2];
            imgFlipFrontLeft = flipImage[actPage-1];
          }
          base.pageFlip();
          return true;
        }
      }
      
      // ******************************************************************************
      // Video zeichnen
      // ******************************************************************************
      base.drawVideo = function(page) {
        htmlText = '<video width="'+iWidth+'" height="'+iHeight+'" autoplay autobuffer loop="true">';
        htmlText = htmlText + '<source src="' + flipImage[page].currentSrc + '" type="video/ogg" />';
        htmlText = htmlText + '<source src="' + flipImage[page].currentSrc + '" type="video/mp4" />';
        htmlText = htmlText + 'This browser is not compatible with HTML 5';
        htmlText = htmlText + '</video>';
        return htmlText;
      }
      
      // ******************************************************************************
      // ******************************************************************************
      // Seitenwechsel berechnen
      // ******************************************************************************
      // ******************************************************************************
      base.pageFlip = function() {
        //Strecke Mittelpunkt Innenkreis - Punkt C
        MC = Math.sqrt(Math.pow(mouseRelCenterX, 2) + Math.pow(mouseRelCenterY, 2));
        //Strecke Mittelpunkt Aussenkreis - Punkt C
        SC = Math.sqrt(Math.pow(mouseRelCenterX, 2) + Math.pow(iHeight + mouseRelCenterY, 2));
        
        // ******************************************************************************    
        // Maus befindet sich innerhalb Innenkreis
        // ******************************************************************************
        if ((MC <= iWidth)) {
          CX = innerMx + mouseRelCenterX;                 // Absolutposition X
          CY = iHeight + contentY + mouseRelCenterY;      // Absolutposition Y
        }
      
      
        // ******************************************************************************  
        // Maus befindet sich außerhalb Innenkreis
        // ******************************************************************************
        if (MC > iWidth) {
          MCX = iWidth * (Math.cos(Math.atan(mouseRelCenterY / mouseRelCenterX)));
          MCY = iWidth * Math.abs((Math.sin(Math.atan(mouseRelCenterY / mouseRelCenterX))));
          if (mouseRelCenterX < 0)
            MCX = MCX * -1;
          if (mouseRelCenterY < 0)
            MCY = MCY * -1;  
          CX = MCX + innerMx;
          CY = MCY + iHeight + contentY;
  
        }
        
        
        // ******************************************************************************   
        // Maus befindet sich außerhalb Außenkreis
        // ******************************************************************************
        angleCXMCY = Math.atan((Math.abs(CX - innerMx)) / (CY - contentY)) / degHelp;
        r2x = Math.sin(angleCXMCY * degHelp) * outerRadius;
        if (mouseRelCenterX < 0)
          r2x = r2x * -1;
        r2y = Math.cos(angleCXMCY * degHelp) * outerRadius;
        // Berechnung für Corner
        if ((SC > outerRadius) && (mouseRelCenterY > 0)) {
          CX = innerMx + r2x;
          CY = r2y + contentY;
        }
        
  
        // ******************************************************************************
        // Bildkante T1-T2 (t1xt1y_t2xt2y)
        // ******************************************************************************
        T1Y = (contentY + iHeight + CY) / 2;
        if (takePage == 1) {
          T1X = (innerMx + iWidth + CX) / 2;
          T1C = Math.sqrt(Math.pow(innerMx + iWidth - T1X, 2) + Math.pow(contentY + iHeight - T1Y, 2)); // Abstand T1-C
          angleT1XT1Y = Math.atan((contentY + iHeight - CY) / (innerMx + iWidth - CX));
        }
        else if (takePage == -1) {
          T1X = (innerMx - iWidth + CX) / 2;
          T1C = Math.sqrt(Math.pow(innerMx - iWidth - T1X, 2) + Math.pow(contentY + iHeight - T1Y, 2)); // Abstand T1-C
          angleT1XT1Y = Math.atan((contentY + iHeight - CY) / (innerMx - iWidth - CX));
        }
        if (!angleT1XT1Y)
          angleT1XT1Y = 0;
        // T2 : Punkt auf dem Kreisdurchmesser
        if (takePage == 1)
          T2X = innerMx + iWidth - T1C / Math.cos(angleT1XT1Y);
        else if (takePage == -1)
          T2X = innerMx - iWidth + T1C / Math.cos(angleT1XT1Y);
        T2Y = iHeight + contentY;
        
        
        // ******************************************************************************
        // Winkel von C-T2 berechnen -> Winkel des Flipbildes
        // ******************************************************************************
        T2CX = T2X - CX;
        T2CY = contentY + iHeight - CY;
        if ((contentY + iHeight - CY >= 0) && (T2CY != 0)) 
          angleImage = 90 - (Math.atan(T2CX / T2CY) / degHelp);
        else if (T2CY != 0)
          angleImage = -90 - (Math.atan(T2CX / T2CY) / degHelp);
        else {
          if (takePage == 1)
            angleImage = 0;
          else
            angleImage = 180;  
        }
  
          
        // ******************************************************************************
        // Cliping berechnen (rechter Bildbereich)
        // ******************************************************************************
          T1YRel = iHeight + contentY - T1Y;
          if (T1YRel != 0)
            angleClip = Math.atan((T1X - T2X) / T1YRel) / degHelp;
          else
            angleClip = 0;
        
        
        // ******************************************************************************
        // gesammte Bildfläche löschen
        // ******************************************************************************
          ctx.clearRect(0,0,1050,1000);
        
        
        // ******************************************************************************
        // Flip rechte Seite
        // ******************************************************************************
        if (takePage == 1) {
          ctx.save();
          // rechtes Bild zeichnen
          ctx.drawImage(imgFlipFrontRight ,innerMx, 0 + contentY, iWidth, iHeight); // Vorderseite der geflippten Seite
          // Schatten auf geflippten Vorderseite
          if (base.options.shadowWidth > 0)
            base.drawShadows('left');
          ctx.save();
          ctx.translate(CX, CY);
          ctx.rotate(angleImage * degHelp);
          ctx.translate(0, -iHeight);
          ctx.drawImage(imgFlipBackRight, 0, 0); // Rückseite der geflippten Seite
          ctx.restore();
          ctx.save();
          ctx.translate(CX, CY);
          ctx.rotate(angleImage * degHelp);
          ctx.restore();
          // Clippingarea
          ctx.translate(T2X,T2Y);
          ctx.rotate(angleClip * degHelp);
          ctx.translate(0,-iHeight-iWidth+100);
          ctx.clearRect(0, 0, 2*iWidth,2.5*iHeight);
          //ctx.fillRect(0, 0, 2*iWidth,2.5*iHeight);
          ctx.restore();
        }
        // ******************************************************************************
        // Flip linke Seite
        // ******************************************************************************
        else if (takePage == -1) {
          ctx.save();
          // linkes Bild zeichnen
          ctx.drawImage(imgFlipFrontLeft,innerMx - iWidth, 0 + contentY, iWidth, iHeight); // Vorderseite der geflippten Seite
          // Schatten auf geflippten Vorderseite
          if (base.options.shadowWidth > 0)
            base.drawShadows('right');
          ctx.save();
          ctx.translate(CX, CY);
          ctx.rotate((angleImage + 180) * degHelp);
          ctx.translate(-iWidth, -iHeight);
          ctx.drawImage(imgFlipBackLeft, 0, 0); // Rückseite der geflippten Seite
          ctx.restore();
          // Clippingarea
          ctx.translate(T2X, T2Y);
          ctx.rotate(angleClip * degHelp);
          ctx.translate(-2*iWidth, -iHeight - (Math.abs(iHeight-iWidth)));
          ctx.clearRect(0, 0, 2*iWidth,2.5*iHeight);
          //ctx.fillRect(0, 0, 2*iWidth,3*iWidth);
          ctx.restore();
        }
        return true;
      } // pageflip()
      
      
      // ******************************************************************************
      // Prüfen, ob die Seite umgeschlagen wurde und aktuelle Seite berechnen
      // ******************************************************************************
      base.calculatePage = function() {
        if (takePage > dropPage)
          actPage = actPage + 2;
        if (takePage < dropPage)
          actPage = actPage - 2;
      }
      
      // ******************************************************************************
      // ermittelt die Seite, die bei durchgeführten Seitenwechsel angezeigt werden würde
      // ******************************************************************************
      base.calculateNextPage = function() {
         if (((actPage + 2 < flipImage.length - 2) && (takePage == 1)) || ((actPage - 2 > 1) && (takePage == -1)))
          return true;
         else
          return false;
      }
      
      // ******************************************************************************
      // Prüfen, ob Maus sich innerhalb der Seitenecke befindet (Groesse definierbar)
      // ******************************************************************************
      base.isMouseInCorner = function() {
        if (
        (iWidth - Math.abs(mouseRelCenterX) < base.options.cornerSize) && 
        (iWidth - Math.abs(mouseRelCenterX) >= 0) &&
        (Math.abs(mouseRelCenterY) < base.options.cornerSize) &&
        (mouseRelCenterY <= 0))
        {
          isMouseInCorner = true;
          $(base.el).css('cursor','pointer');
          return true;
        }
        else
          isMouseInCorner = false;
          $(base.el).css('cursor','auto');
      }
      
      // ******************************************************************************
      // Zeichnet Ecken
      // ******************************************************************************
      base.drawCorners = function() {
        var cornerDivY = contentY + iHeight - base.options.cornerSize;
        var cornerDivLeftX = contentX;
        var cornerDivRightX = contentX + 2*iWidth - base.options.cornerSize;
        var r = HexToR(base.options.cornerColor);
        var g = HexToG(base.options.cornerColor);
        var b = HexToB(base.options.cornerColor);
        ctx.fillStyle = 'rgba('+r+','+g+','+b+','+base.options.cornerAlpha+')';
        ctx.beginPath();
        if(actPage > 1) // linken CornerButton auf erster Seite ausblenden
          ctx.fillRect(cornerDivLeftX, cornerDivY, base.options.cornerSize, base.options.cornerSize);
        //ctx.arc(cornerDivLeftX, cornerDivY, base.options.cornerSize, 0, 2*Math.PI, true);
        ctx.fill();
        ctx.beginPath();
        if(actPage < flipImage.length - 2)  // rechten CornerButton auf letzter Seite ausblenden (wenn nur linke Seite angezeigt wird)
          ctx.fillRect(cornerDivRightX, cornerDivY, base.options.cornerSize, base.options.cornerSize);
        ctx.fill();
      }
      
      // ******************************************************************************
      // Überprüft, ob erste oder letzte Seite angezeigt wird
      // ******************************************************************************
      base.checkFirstAndLastPage = function() {
        if (((actPage < flipImage.length - 2) && (takePage == 1)) || ((actPage > 1) && (takePage == -1)))
          return true;
        else
          return false;
      }

      // ******************************************************************************
      // Schatten auf vorderen Canvas zeichnen
      // ******************************************************************************            
      base.drawShadows = function(page) {
        // rechts
        if (page == 'left') {
          gradient = ctx.createLinearGradient(iWidth + contentX,contentY,iWidth + contentX + base.options.shadowWidth,contentY);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          gradient.addColorStop(0 , "rgba(0, 0, 0, "+base.options.shadowOpacity+")");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.rect(iWidth + contentX, contentY, base.options.shadowWidth, iHeight); 
          ctx.fill();
        }
        // links
        if (page == 'right'){
          gradient = ctx.createLinearGradient(iWidth + contentX - base.options.shadowWidth,contentY,iWidth + contentX,contentY);
          gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
          gradient.addColorStop(1 , "rgba(0, 0, 0, "+base.options.shadowOpacity+")");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.rect(iWidth + contentX - base.options.shadowWidth, contentY,  base.options.shadowWidth, iHeight); 
          ctx.fill();
        }
      }
      
      // ******************************************************************************
      // Schatten auf hinteren Canvas zeichnen
      // ******************************************************************************            
      base.drawShadowsBack = function() {
        // Schatten auf hinteren rechten Canvas zeichnen
        if (base.options.shadowWidth > 0) {
          gradient = ctx2.createLinearGradient(iWidth + contentX,contentY,iWidth + contentX + base.options.shadowWidth,contentY);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          gradient.addColorStop(0 , "rgba(0, 0, 0, "+base.options.shadowOpacity+")");
          ctx2.fillStyle = gradient;
          ctx2.beginPath();
          ctx2.rect(iWidth + contentX,contentY, iWidth, iHeight); 
          ctx2.fill();
        }
        // Schatten auf hinteren linken Canvas zeichnen
        if (base.options.shadowWidth > 0) {
          gradient = ctx2.createLinearGradient(iWidth + contentX,contentY,iWidth + contentX - base.options.shadowWidth,contentY);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          gradient.addColorStop(0 , "rgba(0, 0, 0, "+base.options.shadowOpacity+")");
          ctx2.fillStyle = gradient;
          ctx2.beginPath();
          ctx2.rect(contentX,contentY, iWidth, iHeight); 
          ctx2.fill();
        }
      }
      
        
      base.animateFlipping = function(angle_clx) {
        // alle Eventhandler löschen
        $(base.el).unbind();
        window.clearTimeout(interval);
        if (mouseRelCenterY < 0)
          dynamicHelp = 20;
        if (dropPage == -1) {
          mouseRelCenterX = mouseRelCenterX - base.options.animationDynamic;
          mouseRelCenterY = Math.tan(angle_clx) * (CX-contentX) - dynamicHelp;
        }
        if (dropPage == 1) {
          mouseRelCenterX = mouseRelCenterX + base.options.animationDynamic;
          mouseRelCenterY = Math.tan(angle_clx) * Math.abs(CX-contentX-2*iWidth) - dynamicHelp;
        }
        
        // Animation solange ausführen bis Seite komplett umgeschlagen ist
        if ((CX-contentX > 1) && (CX-contentX < 2*iWidth-1)){
          base.pageFlip();
          interval = window.setTimeout(function() {base.animateFlipping(angle_clx);}, base.options.animationSpeed);        
        }
        else {
          if (dropPage == -1)
            mouseRelCenterX = -iWidth;
          if (dropPage == 1)
            mouseRelCenterX = iWidth;
          mouseRelCenterY = 0;
          base.calculatePage();
          // wenn fertig gezeichnet, dann evenhandler wieder zuweisen
          if (base.pageFlip()) {
            ctx.clearRect(0,0,1050,1000);
            if (dropPage == -1) {
              if (flipImage[actPage-1].nodeName == 'IMG')
                $('#pageBackgroundLeft').html('<img src="' + flipImage[actPage-1].src + '">');    
                $('#pageBackgroundLeft2').html('<img src="' + flipImage[actPage-3].src + '">');  
              if (flipImage[actPage-1].nodeName == 'VIDEO') {
                $('#pageBackgroundLeft').html(base.drawVideo(actPage-1));
              }
            }
            if (dropPage == 1) {
              if (flipImage[actPage].nodeName == 'IMG')
                $('#pageBackgroundRight').html('<img src="' + flipImage[actPage].src + '">');
                $('#pageBackgroundRight2').html('<img src="' + flipImage[actPage+2].src + '">');
              if (flipImage[actPage].nodeName == 'VIDEO') {
                $('#pageBackgroundRight').html(base.drawVideo(actPage));
              }
            }
            $(base.el).bind({mousemove: function(event) {base.mouseMove(event)}});
            $(base.el).bind({mousedown: function(event) {base._mouseDown(event)}});
            $(base.el).bind({mouseup: function(event) {base._mouseUp(event)}});
          }
          // relative Mausposition berechnen ( neuer Y-Wert wird benötigt, wenn ohne mouseMove erneut in Ecke geglickt wird)
          base.calcRelMousePos();
        }
      }
      

      
      
      base.debugDraw = function() {
      // Radius 1 (innen)
      // Punkt zeichnen (lila)
      // r1x = iWidth * (Math.cos(Math.atan(mouseRelCenterY / mouseRelCenterX)));
      // r1y = iWidth * Math.abs((Math.sin(Math.atan(mouseRelCenterY / mouseRelCenterX))));
      // if (mouseRelCenterX < 0)
      //    r1x = r1x * -1;
      // if (mouseRelCenterY < 0)
      //    r1y = r1y * -1;
      
      // Hilfspunkte
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,0,0,1)'; //rot
      ctx.arc(CX, CY, 20, 0, 360, false);
      ctx.fill(); 
      ctx.beginPath(); 
      ctx.fillStyle = 'rgba(0,0,0,1)'; //schwarz
      ctx.arc(mouseAbsX, mouseAbsY, 10, 0, 360, false);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(125,120,0,1)'; //gelb
      ctx.arc(CX, CY, 10, 0, 360, false);
      ctx.fill(); 
      ctx.beginPath();
      ctx.fillStyle = 'rgba(15,120,50,1)'; //grün
      ctx.arc(innerMx + r2x, r2y + contentY, 10, 0, 360, false);
      ctx.fill(); 
//      ctx.beginPath();
//      ctx.fillStyle = 'rgba(250,0,240,1)'; //lila
//      ctx.arc(innerMx + r1x, iHeight + r1y + contentY, 10, 0, 360, false);
//      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(80,80,80,1)'; //grau - ecke rechts
      if (takePage == 1)
        ctx.arc(innerMx + iWidth, iHeight + contentY, 30, 0, 360, false);
      else
        ctx.arc(innerMx - iWidth, iHeight + contentY, 30, 0, 360, false);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(0,150,204,1)'; //blau
      ctx.arc(T1X, T1Y, 5, 0, 360, false);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(0,250,204,1)'; //türkis
      ctx.arc(T2X, T2Y, 5, 0, 360, false);
      ctx.fill();
      
      // Hilfslinien
      ctx.beginPath();    
      ctx.lineWidth = 1; 
      ctx.moveTo(mouseAbsX,mouseAbsY);  
      ctx.lineTo(innerMx,innerMy + contentY);
      ctx.moveTo(mouseAbsX,mouseAbsY); 
      ctx.lineTo(outerMx,outerMy + contentY);  
      ctx.moveTo(CX,  CY); 
      ctx.lineTo(outerMx,outerMy + contentY);
      if (takePage == 1)
        ctx.moveTo(innerMx + iWidth, iHeight + contentY); //ecke grau 
      else
        ctx.moveTo(innerMx - iWidth, iHeight + contentY); //ecke grau 
      ctx.lineTo(CX,CY); //ecke bild
      ctx.stroke();
      
      //Äußerer und innerer Kreis
      ctx.beginPath()
      ctx.fillStyle = 'rgba(123,24,255,0.1)';
      ctx.arc(innerMx, innerMy + contentY, iWidth, 0, 360, false);
      ctx.fill();
      ctx.beginPath()
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.arc(outerMx, outerMy + contentY, outerRadius, 0, 360, false);
      ctx.fill();
    }
    
      function debugValue() {  
      // Debugausgaben
       //$('#debug01').val(CX);
       //$('#debug02').val(CY);
       //$('#debug03').val(T2X);
      // $('#debug04').val(flipImage.length - 1);
       //$('#debug05').val(angleClip);
    }
    
      
      /*************************************************************/
      /* extern functions                                          */
      /*************************************************************/
      
      $.fn.getActPage = function() {
        return actPage;
      }
      
            
      /*************************************************************/
      /* Run initializer                                           */
      /*************************************************************/
      base.init();

  };
 
  
  $.fn.jPageFlip = function(options){
    return this.each(function(){
        (new $.jPageFlip(this, options));
    });
  };
  
  $.fn.getjPageFlip = function(){
    return this.data("jPageFlip");
  };
  
})(jQuery);

function HexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function HexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function HexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}


