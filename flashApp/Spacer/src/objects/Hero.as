package objects
{
	import core.Assets;
	
	import starling.core.Starling;
	import starling.display.Image;
	import starling.display.Sprite;
	import starling.extensions.PDParticleSystem;
	
	import states.Play;
	
	public class Hero extends Sprite
	{
		private var play:Play;
		private var smoke:PDParticleSystem;
		public function Hero(play:Play)
		{
			this.play=play;
			var img:Image = new Image(Assets.ta.getTexture("hero"));
			img.pivotX= img.width*0.5;
			img.pivotY=img.height*0.5;
			addChild(img)
			
			smoke = new PDParticleSystem(XML(new Assets.smokeXML()), Assets.ta.getTexture("smoke"));
			
			Starling.juggler.add(smoke);
			play.addChild(smoke)
			smoke.start();
			
			
		}
		
		public function update():void
		{
			smoke.emitterX=x;
			smoke.emitterY=y+20;
			x+=(Starling.current.nativeStage.mouseX-x)*0.3;
			y+=(Starling.current.nativeStage.mouseY-y)*0.3;
		}
	}
}