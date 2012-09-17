<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript">
/*
	Sleep by Mark Hughes (AKA huzi8t9)
	http://www.360Gamer.net/

	Usage:
		$.sleep ( 3, function()
		{
			alert ( "I slept for 3 seconds!" );
		});
	Use at free will, distribute free of charge
*/
(function($)
{
	var _sleeptimer;
	$.sleep = function( time2sleep, callback )
	{
		$.sleep._sleeptimer = time2sleep;
		$.sleep._cback = callback;
		$.sleep.timer = setInterval('$.sleep.count()', 1000);
	}
	$.extend ($.sleep, {
		current_i : 1,
		_sleeptimer : 0,
		_cback : null,
		timer : null,
		count : function()
		{
			if ( $.sleep.current_i === $.sleep._sleeptimer )
			{
				clearInterval($.sleep.timer);
				$.sleep._cback.call(this);
			}
			$.sleep.current_i++;
		}
	});
})(jQuery);
</script>
<script type="text/javascript">
$(document).ready(function() {
	$('body').click().css('background-color','red');
	
		$.sleep ( 3, function()
		{
			alert ( "I slept for 3 seconds!" );
			
		});
});

</script>

</head>

<body>
sfsdfsfsdfsd

</body>
</html>