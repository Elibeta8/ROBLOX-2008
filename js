var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

Type.registerNamespace('Roblox.Thumbs');
Roblox.Thumbs.Asset=function() {
Roblox.Thumbs.Asset.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
Roblox.Thumbs.Asset.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return Roblox.Thumbs.Asset._staticInstance.get_path();},
RequestThumbnail:function(assetVersionId,width,height,imageFormat,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'RequestThumbnail',false,{assetVersionId:assetVersionId,width:width,height:height,imageFormat:imageFormat},succeededCallback,failedCallback,userContext); }}
Roblox.Thumbs.Asset.registerClass('Roblox.Thumbs.Asset',Sys.Net.WebServiceProxy);
Roblox.Thumbs.Asset._staticInstance = new Roblox.Thumbs.Asset();
Roblox.Thumbs.Asset.set_path = function(value) { Roblox.Thumbs.Asset._staticInstance.set_path(value); }
Roblox.Thumbs.Asset.get_path = function() { return Roblox.Thumbs.Asset._staticInstance.get_path(); }
Roblox.Thumbs.Asset.set_timeout = function(value) { Roblox.Thumbs.Asset._staticInstance.set_timeout(value); }
Roblox.Thumbs.Asset.get_timeout = function() { return Roblox.Thumbs.Asset._staticInstance.get_timeout(); }
Roblox.Thumbs.Asset.set_defaultUserContext = function(value) { Roblox.Thumbs.Asset._staticInstance.set_defaultUserContext(value); }
Roblox.Thumbs.Asset.get_defaultUserContext = function() { return Roblox.Thumbs.Asset._staticInstance.get_defaultUserContext(); }
Roblox.Thumbs.Asset.set_defaultSucceededCallback = function(value) { Roblox.Thumbs.Asset._staticInstance.set_defaultSucceededCallback(value); }
Roblox.Thumbs.Asset.get_defaultSucceededCallback = function() { return Roblox.Thumbs.Asset._staticInstance.get_defaultSucceededCallback(); }
Roblox.Thumbs.Asset.set_defaultFailedCallback = function(value) { Roblox.Thumbs.Asset._staticInstance.set_defaultFailedCallback(value); }
Roblox.Thumbs.Asset.get_defaultFailedCallback = function() { return Roblox.Thumbs.Asset._staticInstance.get_defaultFailedCallback(); }
Roblox.Thumbs.Asset.set_path("/Thumbs/Asset.asmx");
Roblox.Thumbs.Asset.RequestThumbnail= function(assetVersionId,width,height,imageFormat,onSuccess,onFailed,userContext) {Roblox.Thumbs.Asset._staticInstance.RequestThumbnail(assetVersionId,width,height,imageFormat,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
if (typeof(Roblox.Thumbs.ScriptThumbResult) === 'undefined') {
Roblox.Thumbs.ScriptThumbResult=gtc("Roblox.Thumbs.ScriptThumbResult");
Roblox.Thumbs.ScriptThumbResult.registerClass('Roblox.Thumbs.ScriptThumbResult');
}


}
/*
     FILE ARCHIVED ON 06:42:26 Sep 08, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:34:25 Oct 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.467
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 36.498
  LoadShardBlock: 169.655 (3)
  PetaboxLoader3.datanode: 179.351 (4)
  load_resource: 282.468
  PetaboxLoader3.resolve: 252.119
*/