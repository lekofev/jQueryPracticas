package states
{
	import core.Assets;
	import core.Game;
	
	import interfaces.IState;
	
	import objects.Background;
	
	import starling.display.Button;
	import starling.display.Sprite;
	import starling.events.Event;
	import starling.text.TextField;
		
		public class GameOver extends Sprite implements IState
		{
			private var game:Game;
			private var background:Background;
			private var overText:TextField;
			private var tryAgain:Button;
			public function GameOver(game:Game)
			{
				this.game=game;
				addEventListener(Event.ADDED_TO_STAGE, init);
			}
			private function init(event:Event):void
			{
				background = new Background();
				addChild(background)
								
				overText = new TextField(800,200, "GAME OVER", "KomikaAxis", 72, 0xffffff);
				
				overText.hAlign = "center";
				overText.y=200;
				addChild(overText)
				
				tryAgain = new Button(Assets.ta.getTexture("tryAgainButton"));
				tryAgain.addEventListener(Event.TRIGGERED, onAgain);
				tryAgain.pivotX=tryAgain.width*0.5;
				tryAgain.x=400;
				tryAgain.y=450;
				addChild(tryAgain);
				
			}
			
			private function onAgain():void
			{
				// TODO Auto Generated method stub
				tryAgain.removeEventListener(Event.TRIGGERED,  onAgain)				
				game.changeState(Game.PLAY_STATE);
				
			}
			
			public function update():void
			{
				background.update();
			}
			
			public function destroy():void
			{
				removeFromParent(true)
				
			}
		}
}