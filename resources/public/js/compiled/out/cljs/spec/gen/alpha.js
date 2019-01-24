// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined'))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40486 = arguments.length;
var i__4500__auto___40487 = (0);
while(true){
if((i__4500__auto___40487 < len__4499__auto___40486)){
args__4502__auto__.push((arguments[i__4500__auto___40487]));

var G__40488 = (i__4500__auto___40487 + (1));
i__4500__auto___40487 = G__40488;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq40485){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40485));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined'))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40490 = arguments.length;
var i__4500__auto___40491 = (0);
while(true){
if((i__4500__auto___40491 < len__4499__auto___40490)){
args__4502__auto__.push((arguments[i__4500__auto___40491]));

var G__40492 = (i__4500__auto___40491 + (1));
i__4500__auto___40491 = G__40492;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq40489){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40489));
});

var g_QMARK__40493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined'))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_40494 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__40493){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined'))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__40493))
,null));
var mkg_40495 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__40493,g_40494){
return (function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined'))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__40493,g_40494))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__40493,g_40494,mkg_40495){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__40493).call(null,x);
});})(g_QMARK__40493,g_40494,mkg_40495))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__40493,g_40494,mkg_40495){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_40495).call(null,gfn);
});})(g_QMARK__40493,g_40494,mkg_40495))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__40493,g_40494,mkg_40495){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_40494).call(null,generator);
});})(g_QMARK__40493,g_40494,mkg_40495))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__19239__auto___40515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined'))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__19239__auto___40515){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40516 = arguments.length;
var i__4500__auto___40517 = (0);
while(true){
if((i__4500__auto___40517 < len__4499__auto___40516)){
args__4502__auto__.push((arguments[i__4500__auto___40517]));

var G__40518 = (i__4500__auto___40517 + (1));
i__4500__auto___40517 = G__40518;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40515))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40515){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40515),args);
});})(g__19239__auto___40515))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__19239__auto___40515){
return (function (seq40496){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40496));
});})(g__19239__auto___40515))
;


var g__19239__auto___40519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined'))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__19239__auto___40519){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40520 = arguments.length;
var i__4500__auto___40521 = (0);
while(true){
if((i__4500__auto___40521 < len__4499__auto___40520)){
args__4502__auto__.push((arguments[i__4500__auto___40521]));

var G__40522 = (i__4500__auto___40521 + (1));
i__4500__auto___40521 = G__40522;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40519))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40519){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40519),args);
});})(g__19239__auto___40519))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__19239__auto___40519){
return (function (seq40497){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40497));
});})(g__19239__auto___40519))
;


var g__19239__auto___40523 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined'))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__19239__auto___40523){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40524 = arguments.length;
var i__4500__auto___40525 = (0);
while(true){
if((i__4500__auto___40525 < len__4499__auto___40524)){
args__4502__auto__.push((arguments[i__4500__auto___40525]));

var G__40526 = (i__4500__auto___40525 + (1));
i__4500__auto___40525 = G__40526;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40523))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40523){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40523),args);
});})(g__19239__auto___40523))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__19239__auto___40523){
return (function (seq40498){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40498));
});})(g__19239__auto___40523))
;


var g__19239__auto___40527 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined'))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__19239__auto___40527){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40528 = arguments.length;
var i__4500__auto___40529 = (0);
while(true){
if((i__4500__auto___40529 < len__4499__auto___40528)){
args__4502__auto__.push((arguments[i__4500__auto___40529]));

var G__40530 = (i__4500__auto___40529 + (1));
i__4500__auto___40529 = G__40530;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40527))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40527){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40527),args);
});})(g__19239__auto___40527))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__19239__auto___40527){
return (function (seq40499){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40499));
});})(g__19239__auto___40527))
;


var g__19239__auto___40531 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined'))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__19239__auto___40531){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40532 = arguments.length;
var i__4500__auto___40533 = (0);
while(true){
if((i__4500__auto___40533 < len__4499__auto___40532)){
args__4502__auto__.push((arguments[i__4500__auto___40533]));

var G__40534 = (i__4500__auto___40533 + (1));
i__4500__auto___40533 = G__40534;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40531))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40531){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40531),args);
});})(g__19239__auto___40531))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__19239__auto___40531){
return (function (seq40500){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40500));
});})(g__19239__auto___40531))
;


var g__19239__auto___40535 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined'))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__19239__auto___40535){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40536 = arguments.length;
var i__4500__auto___40537 = (0);
while(true){
if((i__4500__auto___40537 < len__4499__auto___40536)){
args__4502__auto__.push((arguments[i__4500__auto___40537]));

var G__40538 = (i__4500__auto___40537 + (1));
i__4500__auto___40537 = G__40538;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40535))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40535){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40535),args);
});})(g__19239__auto___40535))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__19239__auto___40535){
return (function (seq40501){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40501));
});})(g__19239__auto___40535))
;


var g__19239__auto___40539 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined'))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__19239__auto___40539){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40540 = arguments.length;
var i__4500__auto___40541 = (0);
while(true){
if((i__4500__auto___40541 < len__4499__auto___40540)){
args__4502__auto__.push((arguments[i__4500__auto___40541]));

var G__40542 = (i__4500__auto___40541 + (1));
i__4500__auto___40541 = G__40542;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40539))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40539){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40539),args);
});})(g__19239__auto___40539))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__19239__auto___40539){
return (function (seq40502){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40502));
});})(g__19239__auto___40539))
;


var g__19239__auto___40543 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined'))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__19239__auto___40543){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40544 = arguments.length;
var i__4500__auto___40545 = (0);
while(true){
if((i__4500__auto___40545 < len__4499__auto___40544)){
args__4502__auto__.push((arguments[i__4500__auto___40545]));

var G__40546 = (i__4500__auto___40545 + (1));
i__4500__auto___40545 = G__40546;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40543))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40543){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40543),args);
});})(g__19239__auto___40543))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__19239__auto___40543){
return (function (seq40503){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40503));
});})(g__19239__auto___40543))
;


var g__19239__auto___40547 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined'))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__19239__auto___40547){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40548 = arguments.length;
var i__4500__auto___40549 = (0);
while(true){
if((i__4500__auto___40549 < len__4499__auto___40548)){
args__4502__auto__.push((arguments[i__4500__auto___40549]));

var G__40550 = (i__4500__auto___40549 + (1));
i__4500__auto___40549 = G__40550;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40547))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40547){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40547),args);
});})(g__19239__auto___40547))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__19239__auto___40547){
return (function (seq40504){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40504));
});})(g__19239__auto___40547))
;


var g__19239__auto___40551 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined'))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__19239__auto___40551){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40552 = arguments.length;
var i__4500__auto___40553 = (0);
while(true){
if((i__4500__auto___40553 < len__4499__auto___40552)){
args__4502__auto__.push((arguments[i__4500__auto___40553]));

var G__40554 = (i__4500__auto___40553 + (1));
i__4500__auto___40553 = G__40554;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40551))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40551){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40551),args);
});})(g__19239__auto___40551))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__19239__auto___40551){
return (function (seq40505){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40505));
});})(g__19239__auto___40551))
;


var g__19239__auto___40555 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined'))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__19239__auto___40555){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40556 = arguments.length;
var i__4500__auto___40557 = (0);
while(true){
if((i__4500__auto___40557 < len__4499__auto___40556)){
args__4502__auto__.push((arguments[i__4500__auto___40557]));

var G__40558 = (i__4500__auto___40557 + (1));
i__4500__auto___40557 = G__40558;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40555))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40555){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40555),args);
});})(g__19239__auto___40555))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__19239__auto___40555){
return (function (seq40506){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40506));
});})(g__19239__auto___40555))
;


var g__19239__auto___40559 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined'))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__19239__auto___40559){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40560 = arguments.length;
var i__4500__auto___40561 = (0);
while(true){
if((i__4500__auto___40561 < len__4499__auto___40560)){
args__4502__auto__.push((arguments[i__4500__auto___40561]));

var G__40562 = (i__4500__auto___40561 + (1));
i__4500__auto___40561 = G__40562;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40559))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40559){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40559),args);
});})(g__19239__auto___40559))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__19239__auto___40559){
return (function (seq40507){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40507));
});})(g__19239__auto___40559))
;


var g__19239__auto___40563 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined'))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__19239__auto___40563){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40564 = arguments.length;
var i__4500__auto___40565 = (0);
while(true){
if((i__4500__auto___40565 < len__4499__auto___40564)){
args__4502__auto__.push((arguments[i__4500__auto___40565]));

var G__40566 = (i__4500__auto___40565 + (1));
i__4500__auto___40565 = G__40566;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40563))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40563){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40563),args);
});})(g__19239__auto___40563))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__19239__auto___40563){
return (function (seq40508){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40508));
});})(g__19239__auto___40563))
;


var g__19239__auto___40567 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined'))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__19239__auto___40567){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40568 = arguments.length;
var i__4500__auto___40569 = (0);
while(true){
if((i__4500__auto___40569 < len__4499__auto___40568)){
args__4502__auto__.push((arguments[i__4500__auto___40569]));

var G__40570 = (i__4500__auto___40569 + (1));
i__4500__auto___40569 = G__40570;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40567))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40567){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40567),args);
});})(g__19239__auto___40567))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__19239__auto___40567){
return (function (seq40509){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40509));
});})(g__19239__auto___40567))
;


var g__19239__auto___40571 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined'))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__19239__auto___40571){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40572 = arguments.length;
var i__4500__auto___40573 = (0);
while(true){
if((i__4500__auto___40573 < len__4499__auto___40572)){
args__4502__auto__.push((arguments[i__4500__auto___40573]));

var G__40574 = (i__4500__auto___40573 + (1));
i__4500__auto___40573 = G__40574;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40571))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40571){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40571),args);
});})(g__19239__auto___40571))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__19239__auto___40571){
return (function (seq40510){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40510));
});})(g__19239__auto___40571))
;


var g__19239__auto___40575 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined'))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__19239__auto___40575){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40576 = arguments.length;
var i__4500__auto___40577 = (0);
while(true){
if((i__4500__auto___40577 < len__4499__auto___40576)){
args__4502__auto__.push((arguments[i__4500__auto___40577]));

var G__40578 = (i__4500__auto___40577 + (1));
i__4500__auto___40577 = G__40578;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40575))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40575){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40575),args);
});})(g__19239__auto___40575))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__19239__auto___40575){
return (function (seq40511){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40511));
});})(g__19239__auto___40575))
;


var g__19239__auto___40579 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined'))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__19239__auto___40579){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40580 = arguments.length;
var i__4500__auto___40581 = (0);
while(true){
if((i__4500__auto___40581 < len__4499__auto___40580)){
args__4502__auto__.push((arguments[i__4500__auto___40581]));

var G__40582 = (i__4500__auto___40581 + (1));
i__4500__auto___40581 = G__40582;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40579))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40579),args);
});})(g__19239__auto___40579))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__19239__auto___40579){
return (function (seq40512){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40512));
});})(g__19239__auto___40579))
;


var g__19239__auto___40583 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined'))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__19239__auto___40583){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40584 = arguments.length;
var i__4500__auto___40585 = (0);
while(true){
if((i__4500__auto___40585 < len__4499__auto___40584)){
args__4502__auto__.push((arguments[i__4500__auto___40585]));

var G__40586 = (i__4500__auto___40585 + (1));
i__4500__auto___40585 = G__40586;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40583))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40583),args);
});})(g__19239__auto___40583))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__19239__auto___40583){
return (function (seq40513){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40513));
});})(g__19239__auto___40583))
;


var g__19239__auto___40587 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined'))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__19239__auto___40587){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40588 = arguments.length;
var i__4500__auto___40589 = (0);
while(true){
if((i__4500__auto___40589 < len__4499__auto___40588)){
args__4502__auto__.push((arguments[i__4500__auto___40589]));

var G__40590 = (i__4500__auto___40589 + (1));
i__4500__auto___40589 = G__40590;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19239__auto___40587))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19239__auto___40587){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19239__auto___40587),args);
});})(g__19239__auto___40587))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__19239__auto___40587){
return (function (seq40514){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40514));
});})(g__19239__auto___40587))
;

var g__19252__auto___40612 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined'))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__19252__auto___40612){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40613 = arguments.length;
var i__4500__auto___40614 = (0);
while(true){
if((i__4500__auto___40614 < len__4499__auto___40613)){
args__4502__auto__.push((arguments[i__4500__auto___40614]));

var G__40615 = (i__4500__auto___40614 + (1));
i__4500__auto___40614 = G__40615;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40612))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40612){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40612);
});})(g__19252__auto___40612))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__19252__auto___40612){
return (function (seq40591){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40591));
});})(g__19252__auto___40612))
;


var g__19252__auto___40616 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined'))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__19252__auto___40616){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40617 = arguments.length;
var i__4500__auto___40618 = (0);
while(true){
if((i__4500__auto___40618 < len__4499__auto___40617)){
args__4502__auto__.push((arguments[i__4500__auto___40618]));

var G__40619 = (i__4500__auto___40618 + (1));
i__4500__auto___40618 = G__40619;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40616))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40616){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40616);
});})(g__19252__auto___40616))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__19252__auto___40616){
return (function (seq40592){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40592));
});})(g__19252__auto___40616))
;


var g__19252__auto___40620 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined'))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__19252__auto___40620){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40621 = arguments.length;
var i__4500__auto___40622 = (0);
while(true){
if((i__4500__auto___40622 < len__4499__auto___40621)){
args__4502__auto__.push((arguments[i__4500__auto___40622]));

var G__40623 = (i__4500__auto___40622 + (1));
i__4500__auto___40622 = G__40623;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40620))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40620){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40620);
});})(g__19252__auto___40620))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__19252__auto___40620){
return (function (seq40593){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40593));
});})(g__19252__auto___40620))
;


var g__19252__auto___40624 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined'))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__19252__auto___40624){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40625 = arguments.length;
var i__4500__auto___40626 = (0);
while(true){
if((i__4500__auto___40626 < len__4499__auto___40625)){
args__4502__auto__.push((arguments[i__4500__auto___40626]));

var G__40627 = (i__4500__auto___40626 + (1));
i__4500__auto___40626 = G__40627;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40624))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40624){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40624);
});})(g__19252__auto___40624))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__19252__auto___40624){
return (function (seq40594){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40594));
});})(g__19252__auto___40624))
;


var g__19252__auto___40628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined'))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__19252__auto___40628){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40629 = arguments.length;
var i__4500__auto___40630 = (0);
while(true){
if((i__4500__auto___40630 < len__4499__auto___40629)){
args__4502__auto__.push((arguments[i__4500__auto___40630]));

var G__40631 = (i__4500__auto___40630 + (1));
i__4500__auto___40630 = G__40631;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40628))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40628){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40628);
});})(g__19252__auto___40628))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__19252__auto___40628){
return (function (seq40595){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40595));
});})(g__19252__auto___40628))
;


var g__19252__auto___40632 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__19252__auto___40632){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40633 = arguments.length;
var i__4500__auto___40634 = (0);
while(true){
if((i__4500__auto___40634 < len__4499__auto___40633)){
args__4502__auto__.push((arguments[i__4500__auto___40634]));

var G__40635 = (i__4500__auto___40634 + (1));
i__4500__auto___40634 = G__40635;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40632))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40632){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40632);
});})(g__19252__auto___40632))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__19252__auto___40632){
return (function (seq40596){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40596));
});})(g__19252__auto___40632))
;


var g__19252__auto___40636 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined'))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__19252__auto___40636){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40637 = arguments.length;
var i__4500__auto___40638 = (0);
while(true){
if((i__4500__auto___40638 < len__4499__auto___40637)){
args__4502__auto__.push((arguments[i__4500__auto___40638]));

var G__40639 = (i__4500__auto___40638 + (1));
i__4500__auto___40638 = G__40639;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40636))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40636){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40636);
});})(g__19252__auto___40636))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__19252__auto___40636){
return (function (seq40597){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40597));
});})(g__19252__auto___40636))
;


var g__19252__auto___40640 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined'))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__19252__auto___40640){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40641 = arguments.length;
var i__4500__auto___40642 = (0);
while(true){
if((i__4500__auto___40642 < len__4499__auto___40641)){
args__4502__auto__.push((arguments[i__4500__auto___40642]));

var G__40643 = (i__4500__auto___40642 + (1));
i__4500__auto___40642 = G__40643;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40640))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40640){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40640);
});})(g__19252__auto___40640))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__19252__auto___40640){
return (function (seq40598){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40598));
});})(g__19252__auto___40640))
;


var g__19252__auto___40644 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined'))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__19252__auto___40644){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40645 = arguments.length;
var i__4500__auto___40646 = (0);
while(true){
if((i__4500__auto___40646 < len__4499__auto___40645)){
args__4502__auto__.push((arguments[i__4500__auto___40646]));

var G__40647 = (i__4500__auto___40646 + (1));
i__4500__auto___40646 = G__40647;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40644))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40644){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40644);
});})(g__19252__auto___40644))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__19252__auto___40644){
return (function (seq40599){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40599));
});})(g__19252__auto___40644))
;


var g__19252__auto___40648 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined'))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__19252__auto___40648){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40649 = arguments.length;
var i__4500__auto___40650 = (0);
while(true){
if((i__4500__auto___40650 < len__4499__auto___40649)){
args__4502__auto__.push((arguments[i__4500__auto___40650]));

var G__40651 = (i__4500__auto___40650 + (1));
i__4500__auto___40650 = G__40651;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40648))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40648){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40648);
});})(g__19252__auto___40648))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__19252__auto___40648){
return (function (seq40600){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40600));
});})(g__19252__auto___40648))
;


var g__19252__auto___40652 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined'))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__19252__auto___40652){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40653 = arguments.length;
var i__4500__auto___40654 = (0);
while(true){
if((i__4500__auto___40654 < len__4499__auto___40653)){
args__4502__auto__.push((arguments[i__4500__auto___40654]));

var G__40655 = (i__4500__auto___40654 + (1));
i__4500__auto___40654 = G__40655;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40652))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40652){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40652);
});})(g__19252__auto___40652))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__19252__auto___40652){
return (function (seq40601){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40601));
});})(g__19252__auto___40652))
;


var g__19252__auto___40656 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined'))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__19252__auto___40656){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40657 = arguments.length;
var i__4500__auto___40658 = (0);
while(true){
if((i__4500__auto___40658 < len__4499__auto___40657)){
args__4502__auto__.push((arguments[i__4500__auto___40658]));

var G__40659 = (i__4500__auto___40658 + (1));
i__4500__auto___40658 = G__40659;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40656))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40656){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40656);
});})(g__19252__auto___40656))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__19252__auto___40656){
return (function (seq40602){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40602));
});})(g__19252__auto___40656))
;


var g__19252__auto___40660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined'))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__19252__auto___40660){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40661 = arguments.length;
var i__4500__auto___40662 = (0);
while(true){
if((i__4500__auto___40662 < len__4499__auto___40661)){
args__4502__auto__.push((arguments[i__4500__auto___40662]));

var G__40663 = (i__4500__auto___40662 + (1));
i__4500__auto___40662 = G__40663;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40660))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40660){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40660);
});})(g__19252__auto___40660))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__19252__auto___40660){
return (function (seq40603){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40603));
});})(g__19252__auto___40660))
;


var g__19252__auto___40664 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined'))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__19252__auto___40664){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40665 = arguments.length;
var i__4500__auto___40666 = (0);
while(true){
if((i__4500__auto___40666 < len__4499__auto___40665)){
args__4502__auto__.push((arguments[i__4500__auto___40666]));

var G__40667 = (i__4500__auto___40666 + (1));
i__4500__auto___40666 = G__40667;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40664))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40664){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40664);
});})(g__19252__auto___40664))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__19252__auto___40664){
return (function (seq40604){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40604));
});})(g__19252__auto___40664))
;


var g__19252__auto___40668 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined'))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__19252__auto___40668){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40669 = arguments.length;
var i__4500__auto___40670 = (0);
while(true){
if((i__4500__auto___40670 < len__4499__auto___40669)){
args__4502__auto__.push((arguments[i__4500__auto___40670]));

var G__40671 = (i__4500__auto___40670 + (1));
i__4500__auto___40670 = G__40671;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40668))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40668){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40668);
});})(g__19252__auto___40668))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__19252__auto___40668){
return (function (seq40605){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40605));
});})(g__19252__auto___40668))
;


var g__19252__auto___40672 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined'))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__19252__auto___40672){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40673 = arguments.length;
var i__4500__auto___40674 = (0);
while(true){
if((i__4500__auto___40674 < len__4499__auto___40673)){
args__4502__auto__.push((arguments[i__4500__auto___40674]));

var G__40675 = (i__4500__auto___40674 + (1));
i__4500__auto___40674 = G__40675;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40672))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40672){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40672);
});})(g__19252__auto___40672))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__19252__auto___40672){
return (function (seq40606){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40606));
});})(g__19252__auto___40672))
;


var g__19252__auto___40676 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined'))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__19252__auto___40676){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40677 = arguments.length;
var i__4500__auto___40678 = (0);
while(true){
if((i__4500__auto___40678 < len__4499__auto___40677)){
args__4502__auto__.push((arguments[i__4500__auto___40678]));

var G__40679 = (i__4500__auto___40678 + (1));
i__4500__auto___40678 = G__40679;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40676))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40676){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40676);
});})(g__19252__auto___40676))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__19252__auto___40676){
return (function (seq40607){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40607));
});})(g__19252__auto___40676))
;


var g__19252__auto___40680 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined'))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__19252__auto___40680){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40681 = arguments.length;
var i__4500__auto___40682 = (0);
while(true){
if((i__4500__auto___40682 < len__4499__auto___40681)){
args__4502__auto__.push((arguments[i__4500__auto___40682]));

var G__40683 = (i__4500__auto___40682 + (1));
i__4500__auto___40682 = G__40683;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40680))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40680){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40680);
});})(g__19252__auto___40680))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__19252__auto___40680){
return (function (seq40608){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40608));
});})(g__19252__auto___40680))
;


var g__19252__auto___40684 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined'))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__19252__auto___40684){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40685 = arguments.length;
var i__4500__auto___40686 = (0);
while(true){
if((i__4500__auto___40686 < len__4499__auto___40685)){
args__4502__auto__.push((arguments[i__4500__auto___40686]));

var G__40687 = (i__4500__auto___40686 + (1));
i__4500__auto___40686 = G__40687;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40684))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40684){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40684);
});})(g__19252__auto___40684))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__19252__auto___40684){
return (function (seq40609){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40609));
});})(g__19252__auto___40684))
;


var g__19252__auto___40688 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined'))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__19252__auto___40688){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40689 = arguments.length;
var i__4500__auto___40690 = (0);
while(true){
if((i__4500__auto___40690 < len__4499__auto___40689)){
args__4502__auto__.push((arguments[i__4500__auto___40690]));

var G__40691 = (i__4500__auto___40690 + (1));
i__4500__auto___40690 = G__40691;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40688))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40688){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40688);
});})(g__19252__auto___40688))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__19252__auto___40688){
return (function (seq40610){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40610));
});})(g__19252__auto___40688))
;


var g__19252__auto___40692 = (new cljs.spec.gen.alpha.LazyVar((function (){
if(((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined'))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__19252__auto___40692){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40693 = arguments.length;
var i__4500__auto___40694 = (0);
while(true){
if((i__4500__auto___40694 < len__4499__auto___40693)){
args__4502__auto__.push((arguments[i__4500__auto___40694]));

var G__40695 = (i__4500__auto___40694 + (1));
i__4500__auto___40694 = G__40695;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});})(g__19252__auto___40692))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19252__auto___40692){
return (function (args){
return cljs.core.deref.call(null,g__19252__auto___40692);
});})(g__19252__auto___40692))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__19252__auto___40692){
return (function (seq40611){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40611));
});})(g__19252__auto___40692))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40698 = arguments.length;
var i__4500__auto___40699 = (0);
while(true){
if((i__4500__auto___40699 < len__4499__auto___40698)){
args__4502__auto__.push((arguments[i__4500__auto___40699]));

var G__40700 = (i__4500__auto___40699 + (1));
i__4500__auto___40699 = G__40700;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__40696_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__40696_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq40697){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40697));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__40701_SHARP_){
return (new Date(p1__40701_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1548321680018
