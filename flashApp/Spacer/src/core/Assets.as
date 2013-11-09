package core
{
	import starling.text.BitmapFont;
	import starling.text.TextField;
	import starling.textures.Texture;
	import starling.textures.TextureAtlas;
	

	public class Assets
	{
		[Embed(source="assets/sky.png")]		
		private static var aaa:Class;
		public static var skyTexture:Texture;
		
		[Embed(source="assets/atlas.png")]
		private static var atlas:Class;
		public static var ta:TextureAtlas;		
		
		[Embed(source="assets/atlas.xml", mimeType="application/octet-stream")]
		private static var atlasXML:Class;
		
		[Embed(source="assets/komika.png")]
		private static var komika:Class;
		
		
		[Embed(source="assets/komika.fnt", mimeType="application/octet-stream")]
		private static var komikaXML:Class;
		
		[Embed(source="assets/smoke.pex", mimeType="application/octet-stream")]
		public static var smokeXML:Class;
		
		[Embed(source="assets/explosion.pex", mimeType="application/octet-stream")]
		public static var explosionXML:Class;
		
		
		public static function init():void
		{
			skyTexture = Texture.fromBitmap(new aaa())
			
			ta= new TextureAtlas(Texture.fromBitmap(new atlas()), XML(new atlasXML()));
			TextField.registerBitmapFont(new BitmapFont(Texture.fromBitmap(new komika()), XML(new komikaXML())));
		}
	}
}