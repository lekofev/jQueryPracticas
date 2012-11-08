<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">


<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<script type="text/javascript" src="swfobject.js"></script>

  <script type="text/javascript">
	/*
    var params = { allowScriptAccess: "always" };
    var atts = { id: "myytplayer" };
    swfobject.embedSWF("http://www.youtube.com/v/4_11rUtU0tY?enablejsapi=1&playerapiid=ytplayer", 
                       "ytapiplayer", "425", "356", "8", null, null, params, atts);
	*/
  </script>

<script type="text/javascript">
/**
 * Resizing the player in JavaScript.
 */

// Make the player small.
function smallPlayer() {
  resizePlayer(480, 295);
}

// Set the player back to normal.
function normalPlayer() {
  resizePlayer(560, 340);
}

// Make the player big.
function largePlayer() {
  resizePlayer(640, 385);
}

// Set the loaded player to a specific height and width.
function resizePlayer(width, height) {
  var playerObj = document.getElementById("ytPlayer");
  playerObj.height = height;
  playerObj.width = width;
}

// The "main method" of this sample. Called when someone clicks "Run".
function loadPlayer() {
  // The video to load
  var videoID = "ylLzyHk54Z0"
  // Lets Flash from another domain call JavaScript
  var params = { allowScriptAccess: "always" };
  // The element id of the Flash embed
  var atts = { id: "ytPlayer" };
  // All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
  swfobject.embedSWF("http://www.youtube.com/v/" + videoID + "?version=3&enablejsapi=1&playerapiid=player1", "videoDiv", "560", "340", "9", null, null, params, atts);
}


function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("ytPlayer");
}


function playVideo() {
  if (ytplayer) {
    ytplayer.playVideo();
  }
}

function pauseVideo() {
  if (ytplayer) {
    ytplayer.pauseVideo();
  }
}

 </script>
</head>
<body>
  <div id="ytapiplayer">
    You need Flash player 8+ and JavaScript enabled to view this video.
  </div>
  <div id="videoDiv">
    You need Flash player 8+ and JavaScript enabled to view this video.
  </div>
<a href="javascript:void(0);" onclick="loadPlayer();">Cargar video</a>
<a href="javascript:void(0);" onclick="smallPlayer();">chico</a>
<a href="javascript:void(0);" onclick="playVideo();">play</a>
<a href="javascript:void(0);" onclick="pauseVideo();">pause</a>
</body>
</html>