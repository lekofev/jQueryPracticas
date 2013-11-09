package states
{
	import core.Game;
	
	import flash.display.Stage;
	import flash.events.MouseEvent;
	
	import interfaces.IState;
	
	import managers.AlienManager;
	import managers.BulletManager;
	import managers.CollisionManager;
	
	import objects.Background;
	import objects.Hero;
	
	import starling.core.Starling;
	import starling.display.Sprite;
	import starling.events.Event;
		
		public class Play extends Sprite implements IState
		{
			public var game:Game;
			private var background:Background;
			public var hero:Hero;
			public var bulletManager:BulletManager;
			public var fire:Boolean= false;
			private var ns:Stage;
			public var alienManager:AlienManager;
			private var collisionManager:CollisionManager;

			public function Play(game:Game)
			{
				this.game=game;
				addEventListener(Event.ADDED_TO_STAGE, init);
			}
			private function init(event:Event):void
			{
				ns=Starling.current.nativeStage;
				
				background= new Background();
				addChild(background);
				
				hero = new Hero(this);
				addChild(hero);
				bulletManager= new BulletManager(this);
				alienManager = new AlienManager(this);
				collisionManager = new CollisionManager(this);
				
				ns.addEventListener(MouseEvent.MOUSE_DOWN, onDown);
				ns.addEventListener(MouseEvent.MOUSE_UP, onUp);				
				
			}
			protected function onDown(event:MouseEvent):void
			{
				// TODO Auto-generated method stub
				fire=true;
			}	
			
			protected function onUp(event:MouseEvent):void
			{
				// TODO Auto-generated method stub
				fire=false;
				bulletManager.count=0;
				
			}
					
			
			
			public function update():void
			{
				background.update();
				hero.update();
				bulletManager.update();
				alienManager.update();
				collisionManager.update();
			}
			
			public function destroy():void
			{
				
				ns.removeEventListener(MouseEvent.MOUSE_DOWN, onDown);
				ns.removeEventListener(MouseEvent.MOUSE_UP, onUp);
				bulletManager.destroy();
				alienManager.destroy();
				removeFromParent(true)
			}
		}
}