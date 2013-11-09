package objects
{
	import core.Assets;
	
	import starling.display.Image;
	import starling.display.Sprite;
	
	public class Bullet extends Sprite
	{
		public function Bullet()
		{
			var img:Image= new Image(Assets.ta.getTexture("bullet"));
			pivotX= img.width*0.5;
			pivotY= img.height*0.5;
			addChild(img)
		}
	}
}