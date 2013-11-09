package objects
{
	import core.Assets;
	
	import starling.display.MovieClip;
	import starling.textures.Texture;
	
	public class Alien extends MovieClip
	{
		public function Alien()
		{
			
			super(Assets.ta.getTextures("alien"), 12);			
			pivotX= width *0.5;
			pivotY=height*0.5;
			
		}
	}
}