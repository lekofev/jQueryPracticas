<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>
<body>
<script>
        window.fbAsyncInit = function() {
			 
			  FB.init({
				appId      : 'YOUR_APP_ID', // App ID
				channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
				status     : true, // check login status
				cookie     : true, // enable cookies to allow the server to access the session
				xfbml      : true  // parse XFBML
			  });
		  
			  FB.api('/170901502924854', function(user) {
				if (user) {
				  var image = document.getElementById('image');
				  image.src = 'https://graph.facebook.com/' + user.id + '/picture';
				  var name = document.getElementById('name');
				  name.innerHTML = user.name
				  var likes=document.getElementById('likes');
				  likes.innerHTML = user.likes
				}
			  });
        };
        // Load the SDK Asynchronously
        (function(d){
           var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement('script'); js.id = id; js.async = true;
           js.src = "//connect.facebook.net/en_US/all.js";
           ref.parentNode.insertBefore(js, ref);
         }(document));
      </script>

      <div align="center">
        <img id="image"/>
        <div id="name"></div>
        <div id="likes"></div>
      </div>



</body>
</html>
