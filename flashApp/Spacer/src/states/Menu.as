package states
{
	import core.Assets;
	import core.Game;
	
	import interfaces.IState;
	
	import objects.Background;
	
	import starling.display.Button;
	import starling.display.Image;
	import starling.display.Sprite;
	import starling.events.Event;
	
	public class Menu extends Sprite implements IState
	{
		private var game:Game;
		private var background:Background;
		private var logo:Image;
		private var play:Button;
		public function Menu(game:Game)
		{
			this.game=game;
			addEventListener(Event.ADDED_TO_STAGE, init);
		}
		private function init(event:Event):void
		{
			background= new Background();
			addChild(background);
			
			logo= new Image(Assets.ta.getTexture("logo"));
			logo.pivotX= logo.width*0.5;
			logo.x=400;
			logo.y=250;
			addChild(logo)
			
			play = new Button(Assets.ta.getTexture("playButton"));
			play.addEventListener(Event.TRIGGERED, onPlay);
			play.pivotX=play.width*0.5;
			play.x=400;
			play.y=450;		
			addChild(play)
		}
		
		private function onPlay(event:Event):void
		{
			// TODO Auto Generated method stub
			game.changeState(Game.PLAY_STATE);
			
		}
		
		public function update():void
		{
			background.update();
		}
		
		public function destroy():void
		{
			background.removeFromParent(true);
			background=null;
			
			logo.removeFromParent(true);
			logo=null;
			
			play.removeFromParent(true);
			play=null;
			
			removeFromParent(true)
			
		}
	}
}