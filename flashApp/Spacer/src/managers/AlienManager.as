package managers
{
	import com.leebrimelow.starling.StarlingPool;
	
	import objects.Alien;
	import objects.Bullet;
	
	import starling.core.Starling;
	
	import states.Play;
	
	public class AlienManager
	{
		private var play:Play;
		public var aliens:Array;
		private var pool:StarlingPool;
		public var count:int=0;
		
		public function AlienManager(play:Play)
		{
			this.play=play;
			aliens= new Array();	
			pool = new StarlingPool(Alien, 20)
		}
		public function update():void
		{
			if(Math.random()<0.05)
			{
				spawn();
			}
		
			var a:Alien;
			var len:int=aliens.length;
				
			for(var i:int=len-1; i>=0; i--)
			{
				a = aliens[i];
				a.y+=8;
				if(a.y>800)
				{
					destroyAlien(a);
				}
			}		
			
		}
		public function spawn():void
		{
			var a:Alien= pool.getSprite() as Alien;
			Starling.juggler.add(a);
			aliens.push(a)
			a.y=-50;
			a.x= Math.random()*700 + 50;
			play.addChild(a);
		}
		
		public function destroyAlien(a:Alien):void
		{
			var len:int=aliens.length;
			
			for(var i:int=0; i<len; i++)
			{
				if(a== aliens[i])
				{
					aliens.splice(i, 1);
					Starling.juggler.remove(a);
					a.removeFromParent(true);
					pool.returnSprite(a);
				}
					
			}
		}
		public function destroy():void
		{
			pool.destroy();
			pool = null;
			aliens =null;
			
		}
		
	}
}