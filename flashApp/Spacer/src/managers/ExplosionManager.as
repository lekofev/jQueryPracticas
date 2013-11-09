package managers
{
	import com.leebrimelow.starling.StarlingPool;
	
	import states.Play;

	public class ExplosionManager
	{
		private var play:Play;
		private var pool:StarlingPool;
		public function ExplosionManager(play:Play)
		{
			this.play=play;
			pool = new StarlingPool(Explosion, 15)
		}
	}
}