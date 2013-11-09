package objects
{
	import core.Assets;
	
	import starling.display.Image;
	import starling.display.Sprite;
	import starling.display.DisplayObject;
	
	public class Background extends Sprite
	{
		private var sky1:Image;
		private var sky2:Image;
		public function Background()
		{
			sky1= new Image(Assets.skyTexture);
			addChild(sky1)
			
			sky2= new Image(Assets.skyTexture);
			sky2.y=-800;
			addChild(sky2)
		}
		public function update():void
		{
			sky1.y +=4;
			if(sky1.y==800)
			{
				sky1.y = -800;
			}	
			
			sky2.y+=4;			
			if(sky2.y==800)
			{
				sky2.y=-800;
			}
			
		}
	}
}