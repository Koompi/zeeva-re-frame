// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__19631__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19632__i = 0, G__19632__a = new Array(arguments.length -  0);
while (G__19632__i < G__19632__a.length) {G__19632__a[G__19632__i] = arguments[G__19632__i + 0]; ++G__19632__i;}
  args = new cljs.core.IndexedSeq(G__19632__a,0,null);
} 
return G__19631__delegate.call(this,args);};
G__19631.cljs$lang$maxFixedArity = 0;
G__19631.cljs$lang$applyTo = (function (arglist__19633){
var args = cljs.core.seq(arglist__19633);
return G__19631__delegate(args);
});
G__19631.cljs$core$IFn$_invoke$arity$variadic = G__19631__delegate;
return G__19631;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19634__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19635__i = 0, G__19635__a = new Array(arguments.length -  0);
while (G__19635__i < G__19635__a.length) {G__19635__a[G__19635__i] = arguments[G__19635__i + 0]; ++G__19635__i;}
  args = new cljs.core.IndexedSeq(G__19635__a,0,null);
} 
return G__19634__delegate.call(this,args);};
G__19634.cljs$lang$maxFixedArity = 0;
G__19634.cljs$lang$applyTo = (function (arglist__19636){
var args = cljs.core.seq(arglist__19636);
return G__19634__delegate(args);
});
G__19634.cljs$core$IFn$_invoke$arity$variadic = G__19634__delegate;
return G__19634;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1548321573509
