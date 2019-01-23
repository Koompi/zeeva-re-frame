// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_24819 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__24820 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24821 = null;
var count__24822 = (0);
var i__24823 = (0);
while(true){
if((i__24823 < count__24822)){
var vec__24824 = cljs.core._nth.call(null,chunk__24821,i__24823);
var effect_key = cljs.core.nth.call(null,vec__24824,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24824,(1),null);
var temp__4655__auto___24840 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___24840)){
var effect_fn_24841 = temp__4655__auto___24840;
effect_fn_24841.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24842 = seq__24820;
var G__24843 = chunk__24821;
var G__24844 = count__24822;
var G__24845 = (i__24823 + (1));
seq__24820 = G__24842;
chunk__24821 = G__24843;
count__24822 = G__24844;
i__24823 = G__24845;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24820);
if(temp__4657__auto__){
var seq__24820__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24820__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24820__$1);
var G__24846 = cljs.core.chunk_rest.call(null,seq__24820__$1);
var G__24847 = c__4319__auto__;
var G__24848 = cljs.core.count.call(null,c__4319__auto__);
var G__24849 = (0);
seq__24820 = G__24846;
chunk__24821 = G__24847;
count__24822 = G__24848;
i__24823 = G__24849;
continue;
} else {
var vec__24827 = cljs.core.first.call(null,seq__24820__$1);
var effect_key = cljs.core.nth.call(null,vec__24827,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24827,(1),null);
var temp__4655__auto___24850 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___24850)){
var effect_fn_24851 = temp__4655__auto___24850;
effect_fn_24851.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24852 = cljs.core.next.call(null,seq__24820__$1);
var G__24853 = null;
var G__24854 = (0);
var G__24855 = (0);
seq__24820 = G__24852;
chunk__24821 = G__24853;
count__24822 = G__24854;
i__24823 = G__24855;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__20521__auto___24856 = re_frame.interop.now.call(null);
var duration__20522__auto___24857 = (end__20521__auto___24856 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20522__auto___24857,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__20521__auto___24856);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_24819;
}} else {
var seq__24830 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24831 = null;
var count__24832 = (0);
var i__24833 = (0);
while(true){
if((i__24833 < count__24832)){
var vec__24834 = cljs.core._nth.call(null,chunk__24831,i__24833);
var effect_key = cljs.core.nth.call(null,vec__24834,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24834,(1),null);
var temp__4655__auto___24858 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___24858)){
var effect_fn_24859 = temp__4655__auto___24858;
effect_fn_24859.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24860 = seq__24830;
var G__24861 = chunk__24831;
var G__24862 = count__24832;
var G__24863 = (i__24833 + (1));
seq__24830 = G__24860;
chunk__24831 = G__24861;
count__24832 = G__24862;
i__24833 = G__24863;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24830);
if(temp__4657__auto__){
var seq__24830__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24830__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24830__$1);
var G__24864 = cljs.core.chunk_rest.call(null,seq__24830__$1);
var G__24865 = c__4319__auto__;
var G__24866 = cljs.core.count.call(null,c__4319__auto__);
var G__24867 = (0);
seq__24830 = G__24864;
chunk__24831 = G__24865;
count__24832 = G__24866;
i__24833 = G__24867;
continue;
} else {
var vec__24837 = cljs.core.first.call(null,seq__24830__$1);
var effect_key = cljs.core.nth.call(null,vec__24837,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24837,(1),null);
var temp__4655__auto___24868 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___24868)){
var effect_fn_24869 = temp__4655__auto___24868;
effect_fn_24869.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24870 = cljs.core.next.call(null,seq__24830__$1);
var G__24871 = null;
var G__24872 = (0);
var G__24873 = (0);
seq__24830 = G__24870;
chunk__24831 = G__24871;
count__24832 = G__24872;
i__24833 = G__24873;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24874 = cljs.core.seq.call(null,value);
var chunk__24875 = null;
var count__24876 = (0);
var i__24877 = (0);
while(true){
if((i__24877 < count__24876)){
var map__24878 = cljs.core._nth.call(null,chunk__24875,i__24877);
var map__24878__$1 = ((((!((map__24878 == null)))?(((((map__24878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24878):map__24878);
var effect = map__24878__$1;
var ms = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24874,chunk__24875,count__24876,i__24877,map__24878,map__24878__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24874,chunk__24875,count__24876,i__24877,map__24878,map__24878__$1,effect,ms,dispatch))
,ms);
}


var G__24882 = seq__24874;
var G__24883 = chunk__24875;
var G__24884 = count__24876;
var G__24885 = (i__24877 + (1));
seq__24874 = G__24882;
chunk__24875 = G__24883;
count__24876 = G__24884;
i__24877 = G__24885;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24874);
if(temp__4657__auto__){
var seq__24874__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24874__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24874__$1);
var G__24886 = cljs.core.chunk_rest.call(null,seq__24874__$1);
var G__24887 = c__4319__auto__;
var G__24888 = cljs.core.count.call(null,c__4319__auto__);
var G__24889 = (0);
seq__24874 = G__24886;
chunk__24875 = G__24887;
count__24876 = G__24888;
i__24877 = G__24889;
continue;
} else {
var map__24880 = cljs.core.first.call(null,seq__24874__$1);
var map__24880__$1 = ((((!((map__24880 == null)))?(((((map__24880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24880):map__24880);
var effect = map__24880__$1;
var ms = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24874,chunk__24875,count__24876,i__24877,map__24880,map__24880__$1,effect,ms,dispatch,seq__24874__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24874,chunk__24875,count__24876,i__24877,map__24880,map__24880__$1,effect,ms,dispatch,seq__24874__$1,temp__4657__auto__))
,ms);
}


var G__24890 = cljs.core.next.call(null,seq__24874__$1);
var G__24891 = null;
var G__24892 = (0);
var G__24893 = (0);
seq__24874 = G__24890;
chunk__24875 = G__24891;
count__24876 = G__24892;
i__24877 = G__24893;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__24894 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__24895 = null;
var count__24896 = (0);
var i__24897 = (0);
while(true){
if((i__24897 < count__24896)){
var event = cljs.core._nth.call(null,chunk__24895,i__24897);
re_frame.router.dispatch.call(null,event);


var G__24898 = seq__24894;
var G__24899 = chunk__24895;
var G__24900 = count__24896;
var G__24901 = (i__24897 + (1));
seq__24894 = G__24898;
chunk__24895 = G__24899;
count__24896 = G__24900;
i__24897 = G__24901;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24894);
if(temp__4657__auto__){
var seq__24894__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24894__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24894__$1);
var G__24902 = cljs.core.chunk_rest.call(null,seq__24894__$1);
var G__24903 = c__4319__auto__;
var G__24904 = cljs.core.count.call(null,c__4319__auto__);
var G__24905 = (0);
seq__24894 = G__24902;
chunk__24895 = G__24903;
count__24896 = G__24904;
i__24897 = G__24905;
continue;
} else {
var event = cljs.core.first.call(null,seq__24894__$1);
re_frame.router.dispatch.call(null,event);


var G__24906 = cljs.core.next.call(null,seq__24894__$1);
var G__24907 = null;
var G__24908 = (0);
var G__24909 = (0);
seq__24894 = G__24906;
chunk__24895 = G__24907;
count__24896 = G__24908;
i__24897 = G__24909;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__24910 = cljs.core.seq.call(null,value);
var chunk__24911 = null;
var count__24912 = (0);
var i__24913 = (0);
while(true){
if((i__24913 < count__24912)){
var event = cljs.core._nth.call(null,chunk__24911,i__24913);
clear_event.call(null,event);


var G__24914 = seq__24910;
var G__24915 = chunk__24911;
var G__24916 = count__24912;
var G__24917 = (i__24913 + (1));
seq__24910 = G__24914;
chunk__24911 = G__24915;
count__24912 = G__24916;
i__24913 = G__24917;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24910);
if(temp__4657__auto__){
var seq__24910__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24910__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24910__$1);
var G__24918 = cljs.core.chunk_rest.call(null,seq__24910__$1);
var G__24919 = c__4319__auto__;
var G__24920 = cljs.core.count.call(null,c__4319__auto__);
var G__24921 = (0);
seq__24910 = G__24918;
chunk__24911 = G__24919;
count__24912 = G__24920;
i__24913 = G__24921;
continue;
} else {
var event = cljs.core.first.call(null,seq__24910__$1);
clear_event.call(null,event);


var G__24922 = cljs.core.next.call(null,seq__24910__$1);
var G__24923 = null;
var G__24924 = (0);
var G__24925 = (0);
seq__24910 = G__24922;
chunk__24911 = G__24923;
count__24912 = G__24924;
i__24913 = G__24925;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1548216510095
