<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/jScrollPane.css" />
<link href='http://fonts.googleapis.com/css?family=Didact+Gothic' rel='stylesheet' type='text/css'>

<script type="text/javascript" src="jScrollPane/scripts/jquery-1.2.6.min.js"></script>
<script type="text/javascript" src="js/modernizr.js"></script>
<script type="text/javascript" src="js/jquery.galleriffic.js"></script>
<script type="text/javascript" src="js/jquery.opacityrollover.js"></script>
<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
<script type="text/javascript" src="js/jScrollPane.js"></script>

<script type="text/javascript">
$(document).ready(function(e) {
	$('#miniaturas').galleriffic({
			imageContainerSel:      '#fotos',
			controlsContainerSel:   '#controls',
			captionContainerSel:       '#descripcion',
			loadingContainerSel:       '#loading',
			prevLinkText:              '',
			nextLinkText:              '',
			enableTopPager:            false,
			enableBottomPager:         false,
			numThumbs:                 100,	
	});
	$('#miniaturas').jScrollPane({
		scrollbarWidth:8,
		scrollbarMargin:10
		})
		
	var onMouseOutOpacity = 0.5;
	$('#miniaturas ul.thumbs li').opacityrollover({
		mouseOutOpacity:   onMouseOutOpacity,
		mouseOverOpacity:  1.0,
		fadeSpeed:         'fast',
		exemptionSelector: '.selected'
	});
/*  	$('#pane1').jScrollPane({
		showArrows:true
		})
	
  $('#cc').click(function(e){
		e.preventDefault();
		})*/
	
});
</script>
<title>Documento sin título</title>
</head>
<body>


<section id="galeria-page">
    <section id="galeria">
    
    	<section id="miniaturas" class="scroll-pane">
            <ul class="thumbs noscript ">

<li>
<a class="thumb" name="leaf" href="http://farm4.static.flickr.com/3261/2538183196_8baf9a8015.jpg" title="Title #0">
    <img src="http://farm4.static.flickr.com/3261/2538183196_8baf9a8015_s.jpg" alt="Title #0" />
</a>
<div class="caption">
    <div class="title">Rally 2012 caminos del inca</div>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
</div>
</li>

<li>
<a class="thumb" name="drop" href="http://farm3.static.flickr.com/2404/2538171134_2f77bc00d9.jpg" title="Title #1">
    <img src="http://farm3.static.flickr.com/2404/2538171134_2f77bc00d9_s.jpg" alt="Title #1" />
</a>
<div class="caption">
    <div class="title">Rally 2012 caminos del inca</div>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
</div>
</li>

<li>
<a class="thumb" name="bigleaf" href="http://farm3.static.flickr.com/2093/2538168854_f75e408156.jpg" title="Title #2">
    <img src="http://farm3.static.flickr.com/2093/2538168854_f75e408156_s.jpg" alt="Title #2" />
</a>
<div class="caption">
    <div class="title">Rally 2012 caminos del inca</div>
    <div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
</div>

</li>







						<li>
							<a class="thumb" name="leaf" href="http://farm4.static.flickr.com/3261/2538183196_8baf9a8015.jpg" title="Title #0">
								<img src="http://farm4.static.flickr.com/3261/2538183196_8baf9a8015_s.jpg" alt="Title #0" />
							</a>
							<div class="caption">
								<div class="title">Title #0</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" name="drop" href="http://farm3.static.flickr.com/2404/2538171134_2f77bc00d9.jpg" title="Title #1">
								<img src="http://farm3.static.flickr.com/2404/2538171134_2f77bc00d9_s.jpg" alt="Title #1" />
							</a>
							<div class="caption">
								<div class="title">Title #2</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" name="bigleaf" href="http://farm3.static.flickr.com/2093/2538168854_f75e408156.jpg" title="Title #2">
								<img src="http://farm3.static.flickr.com/2093/2538168854_f75e408156_s.jpg" alt="Title #2" />
							</a>
							<div class="caption">
								<div class="title">Title #2</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" name="lizard" href="http://farm4.static.flickr.com/3153/2538167690_c812461b7b.jpg" title="Title #3">
								<img src="http://farm4.static.flickr.com/3153/2538167690_c812461b7b_s.jpg" alt="Title #3" />
							</a>
							<div class="caption">
								<div class="title">Title #3</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm4.static.flickr.com/3150/2538167224_0a6075dd18.jpg" title="Title #4">
								<img src="http://farm4.static.flickr.com/3150/2538167224_0a6075dd18_s.jpg" alt="Title #4" />
							</a>
							<div class="caption">
								<div class="title">Title #4</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm4.static.flickr.com/3204/2537348699_bfd38bd9fd.jpg" title="Title #5">
								<img src="http://farm4.static.flickr.com/3204/2537348699_bfd38bd9fd_s.jpg" alt="Title #5" />
							</a>
							<div class="caption">
								<div class="title">Title #5</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm4.static.flickr.com/3124/2538164582_b9d18f9d1b.jpg" title="Title #6">
								<img src="http://farm4.static.flickr.com/3124/2538164582_b9d18f9d1b_s.jpg" alt="Title #6" />
							</a>
							<div class="caption">
								<div class="title">Title #6</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm4.static.flickr.com/3205/2538164270_4369bbdd23.jpg" title="Title #7">
								<img src="http://farm4.static.flickr.com/3205/2538164270_4369bbdd23_s.jpg" alt="Title #7" />
							</a>
							<div class="caption">
								<div class="title">Title #7</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm4.static.flickr.com/3211/2538163540_c2026243d2.jpg" title="Title #8">
								<img src="http://farm4.static.flickr.com/3211/2538163540_c2026243d2_s.jpg" alt="Title #8" />
							</a>
							<div class="caption">
								<div class="title">Title #8</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2315/2537343449_f933be8036.jpg" title="Title #9">
								<img src="http://farm3.static.flickr.com/2315/2537343449_f933be8036_s.jpg" alt="Title #9" />
							</a>
							<div class="caption">
								<div class="title">Title #9</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2167/2082738157_436d1eb280.jpg" title="Title #10">
								<img src="http://farm3.static.flickr.com/2167/2082738157_436d1eb280_s.jpg" alt="Title #10" />
							</a>
							<div class="caption">
								<div class="title">Title #10</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2342/2083508720_fa906f685e.jpg" title="Title #11">
								<img src="http://farm3.static.flickr.com/2342/2083508720_fa906f685e_s.jpg" alt="Title #11" />
							</a>
							<div class="caption">
								<div class="title">Title #11</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2132/2082721339_4b06f6abba.jpg" title="Title #12">
								<img src="http://farm3.static.flickr.com/2132/2082721339_4b06f6abba_s.jpg" alt="Title #12" />
							</a>
							<div class="caption">
								<div class="title">Title #12</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2139/2083503622_5b17f16a60.jpg" title="Title #13">
								<img src="http://farm3.static.flickr.com/2139/2083503622_5b17f16a60_s.jpg" alt="Title #13" />
							</a>
							<div class="caption">
								<div class="title">Title #13</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2041/2083498578_114e117aab.jpg" title="Title #14">
								<img src="http://farm3.static.flickr.com/2041/2083498578_114e117aab_s.jpg" alt="Title #14" />
							</a>
							<div class="caption">
								<div class="title">Title #14</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2149/2082705341_afcdda0663.jpg" title="Title #15">
								<img src="http://farm3.static.flickr.com/2149/2082705341_afcdda0663_s.jpg" alt="Title #15" />
							</a>
							<div class="caption">
								<div class="title">Title #15</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2014/2083478274_26775114dc.jpg" title="Title #16">
								<img src="http://farm3.static.flickr.com/2014/2083478274_26775114dc_s.jpg" alt="Title #16" />
							</a>
							<div class="caption">
								<div class="title">Title #16</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2194/2083464534_122e849241.jpg" title="Title #17">
								<img src="http://farm3.static.flickr.com/2194/2083464534_122e849241_s.jpg" alt="Title #17" />
							</a>
							<div class="caption">
								<div class="title">Title #17</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm4.static.flickr.com/3127/2538173236_b704e7622e.jpg" title="Title #18">
								<img src="http://farm4.static.flickr.com/3127/2538173236_b704e7622e_s.jpg" alt="Title #18" />
							</a>
							<div class="caption">
								<div class="title">Title #18</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2375/2538172432_3343a47341.jpg" title="Title #19">
								<img src="http://farm3.static.flickr.com/2375/2538172432_3343a47341_s.jpg" alt="Title #19" />
							</a>
							<div class="caption">
								<div class="title">Title #19</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2353/2083476642_d00372b96f.jpg" title="Title #20">
								<img src="http://farm3.static.flickr.com/2353/2083476642_d00372b96f_s.jpg" alt="Title #20" />
							</a>
							<div class="caption">
								<div class="title">Title #20</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm3.static.flickr.com/2201/1502907190_7b4a2a0e34.jpg" title="Title #21">
								<img src="http://farm3.static.flickr.com/2201/1502907190_7b4a2a0e34_s.jpg" alt="Title #21" />
							</a>
							<div class="caption">
								<div class="title">Title #21</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm2.static.flickr.com/1116/1380178473_fc640e097a.jpg" title="Title #22">
								<img src="http://farm2.static.flickr.com/1116/1380178473_fc640e097a_s.jpg" alt="Title #22" />
							</a>
							<div class="caption">
								<div class="title">Title #22</div>
								<div class="desc">Description</div>
							</div>
						</li>

						<li>
							<a class="thumb" href="http://farm2.static.flickr.com/1260/930424599_e75865c0d6.jpg" title="Title #23">
								<img src="http://farm2.static.flickr.com/1260/930424599_e75865c0d6_s.jpg" alt="Title #23" />
							</a>
							<div class="caption">
								<div class="title">Title #23</div>
								<div class="desc">Description</div>
							</div>
						</li>
                        
                        
                        
                        
                        
                        
                        




            </ul>
        </section>
        
        <section id="fotografias">
            <div id="gallery" class="content">
                <div id="controls" class="controls"></div>
                    <div class="slideshow-container">
                        <div id="loading" class="loader"></div>
                        <div id="fotos" class="slideshow"></div>
                    </div>
                <div id="descripcion" class="descripcion-contenedor"></div>
            </div>
        </section>
    
    </section>
</section>
<!--
<div id="pane1" class="scroll-pane">
				<p>&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec condimentum pretium nisl. Integer quis tellus nec turpis placerat scelerisque. In semper 
<a id="cc" href=""> dsg dgd f
</a>

                lacus eu nisi. Praesent dignissim metus sit amet enim. Nam auctor, neque semper congue sagittis, risus mi commodo pede, nec
<li>
<a class="thumb" name="leaf" href="http://farm4.static.flickr.com/3261/2538183196_8baf9a8015.jpg" title="Title #0">
    <img src="http://farm4.static.flickr.com/3261/2538183196_8baf9a8015_s.jpg" alt="Title #0" />
</a>
</li> euismod magna libero at sem. In enim magna, vestibulum et, blandit sit amet, tempor vel, ligula. Phasellus ante augue, congue vitae, faucibus quis, gravida sit amet, diam. Nullam congue accumsan magna. Etiam a nunc. Aliquam elit urna, ornare vitae, ultrices et, tempus non, nisl. Duis eros neque, luctus quis, interdum ultricies, auctor eu, urna. Donec nibh. Integer in purus tempus mi venenatis mollis. Cras nunc odio, porttitor at, accumsan ac, adipiscing vitae, ante.</p>

				<p>Nam dui enim, fringilla vitae, rhoncus non, pharetra in, nunc. Sed a lectus vel orci bibendum placerat. Aliquam erat volutpat. Integer odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis dictum egestas lorem. Donec ultricies volutpat tellus. Phasellus justo arcu, pharetra eget, cursus non, consectetuer ac, nunc. Fusce orci tortor, semper vel, lacinia vitae, accumsan id, quam. Mauris semper molestie lectus. Duis venenatis erat ultrices nisl.</p>
				<p>Morbi augue enim, ultricies nec, lobortis sed, iaculis eu, quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Curabitur sollicitudin, elit eu porttitor varius, tellus velit tristique sem, vitae blandit nisi eros id purus. Nunc non lorem. Nunc blandit purus nec nisi. Donec vulputate, urna vel interdum tristique, tellus mauris pretium lacus, quis sodales lectus nunc sit amet turpis. Suspendisse potenti. Fusce accumsan. Maecenas aliquam consectetuer augue. Fusce est neque, condimentum nec, condimentum vitae, consectetuer ac, tortor. Praesent ultricies urna in lectus. Nam erat nunc, venenatis nec, facilisis sed, feugiat ac, pede. Vivamus aliquam aliquet libero. Curabitur dolor nunc, scelerisque at, gravida dignissim, rutrum at, orci. Maecenas vitae libero id eros rutrum hendrerit. Duis lacinia mauris non erat. Nullam et dolor vel leo sollicitudin suscipit. Sed laoreet libero.</p>
				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent turpis. Suspendisse molestie, neque non congue ullamcorper, neque sem consequat nisl, eget pulvinar odio erat et tellus. Nunc luctus convallis dolor. Nullam non mauris. Etiam nisi magna, adipiscing eu, nonummy ac, laoreet nec, est. Pellentesque tristique, est vel condimentum feugiat, nisi justo rhoncus pede, in pulvinar mauris lectus vitae dui. Pellentesque scelerisque. Vestibulum tellus dolor, porta quis, facilisis nec, convallis vitae, quam. Quisque nisi. Nunc vitae nulla vel turpis mollis molestie. Etiam vitae massa.&lt;</p>
			</div>
            -->
</body>
</html>