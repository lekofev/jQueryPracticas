package managers
{
	import core.Assets;
	import core.Game;
	
	import flash.geom.Point;
	
	import objects.Alien;
	import objects.Bullet;
	
	import states.Play;

	public class CollisionManager
	{
		private var play:Play;
		private var p1:Point = new Point();
		private var p2:Point = new Point();
		
		public function CollisionManager(play:Play)
		{
			this.play = play;
		}
		
		public function update():void
		{
				bulletsAndAliens();
				heroAndAliens();
		}
		
		private function heroAndAliens():void
		{
			var aa:Array = play.alienManager.aliens;
			var a:Alien;
			
			for(var i:int=aa.length-1; i>=0; i--)
			{
				a = aa[i];
				p1.x = play.hero.x;
				p1.y = play.hero.y;
				p2.x = a.x;
				p2.y = a.y;
				if(Point.distance(p1, p2) < a.pivotY + play.hero.pivotY)
				{
					play.game.changeState(Game.GAME_OVER_STATE);
				}
			}	
		}
		
		private function bulletsAndAliens():void
		{
			var ba:Array = play.bulletManager.bullets;
			var aa:Array = play.alienManager.aliens;
			
			var b:Bullet;
			var a:Alien;
			
			for(var i:int=ba.length-1; i>=0; i--)
			{
				b = ba[i];
				for(var j:int=aa.length-1; j>=0; j--)
				{
					a = aa[j];
					p1.x = b.x;
					p1.y = b.y;
					p2.x = a.x;
					p2.y = a.y;
					if(Point.distance(p1, p2) < a.pivotY + b.pivotY)
					{
						play.alienManager.destroyAlien(a);
						play.bulletManager.destroyBullet(b);
					}
				}
			}
		}
	}
}