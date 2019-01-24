// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__43432__delegate = function (x__43413__auto__){
if(cljs.core.truth_(zeeva_re_frame.core.mount_root)){
return cljs.core.apply.call(null,zeeva_re_frame.core.mount_root,x__43413__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("zeeva-re-frame.core/mount-root"),"' is missing"].join(''));
}
};
var G__43432 = function (var_args){
var x__43413__auto__ = null;
if (arguments.length > 0) {
var G__43433__i = 0, G__43433__a = new Array(arguments.length -  0);
while (G__43433__i < G__43433__a.length) {G__43433__a[G__43433__i] = arguments[G__43433__i + 0]; ++G__43433__i;}
  x__43413__auto__ = new cljs.core.IndexedSeq(G__43433__a,0,null);
} 
return G__43432__delegate.call(this,x__43413__auto__);};
G__43432.cljs$lang$maxFixedArity = 0;
G__43432.cljs$lang$applyTo = (function (arglist__43434){
var x__43413__auto__ = cljs.core.seq(arglist__43434);
return G__43432__delegate(x__43413__auto__);
});
G__43432.cljs$core$IFn$_invoke$arity$variadic = G__43432__delegate;
return G__43432;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1548321689980
