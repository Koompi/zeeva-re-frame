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
var _STAR_current_trace_STAR_28818 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__28819 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28820 = null;
var count__28821 = (0);
var i__28822 = (0);
while(true){
if((i__28822 < count__28821)){
var vec__28823 = cljs.core._nth.call(null,chunk__28820,i__28822);
var effect_key = cljs.core.nth.call(null,vec__28823,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28823,(1),null);
var temp__4655__auto___28839 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___28839)){
var effect_fn_28840 = temp__4655__auto___28839;
effect_fn_28840.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28841 = seq__28819;
var G__28842 = chunk__28820;
var G__28843 = count__28821;
var G__28844 = (i__28822 + (1));
seq__28819 = G__28841;
chunk__28820 = G__28842;
count__28821 = G__28843;
i__28822 = G__28844;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28819);
if(temp__4657__auto__){
var seq__28819__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28819__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28819__$1);
var G__28845 = cljs.core.chunk_rest.call(null,seq__28819__$1);
var G__28846 = c__4319__auto__;
var G__28847 = cljs.core.count.call(null,c__4319__auto__);
var G__28848 = (0);
seq__28819 = G__28845;
chunk__28820 = G__28846;
count__28821 = G__28847;
i__28822 = G__28848;
continue;
} else {
var vec__28826 = cljs.core.first.call(null,seq__28819__$1);
var effect_key = cljs.core.nth.call(null,vec__28826,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28826,(1),null);
var temp__4655__auto___28849 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___28849)){
var effect_fn_28850 = temp__4655__auto___28849;
effect_fn_28850.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28851 = cljs.core.next.call(null,seq__28819__$1);
var G__28852 = null;
var G__28853 = (0);
var G__28854 = (0);
seq__28819 = G__28851;
chunk__28820 = G__28852;
count__28821 = G__28853;
i__28822 = G__28854;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__21111__auto___28855 = re_frame.interop.now.call(null);
var duration__21112__auto___28856 = (end__21111__auto___28855 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21112__auto___28856,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__21111__auto___28855);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_28818;
}} else {
var seq__28829 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28830 = null;
var count__28831 = (0);
var i__28832 = (0);
while(true){
if((i__28832 < count__28831)){
var vec__28833 = cljs.core._nth.call(null,chunk__28830,i__28832);
var effect_key = cljs.core.nth.call(null,vec__28833,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28833,(1),null);
var temp__4655__auto___28857 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___28857)){
var effect_fn_28858 = temp__4655__auto___28857;
effect_fn_28858.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28859 = seq__28829;
var G__28860 = chunk__28830;
var G__28861 = count__28831;
var G__28862 = (i__28832 + (1));
seq__28829 = G__28859;
chunk__28830 = G__28860;
count__28831 = G__28861;
i__28832 = G__28862;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28829);
if(temp__4657__auto__){
var seq__28829__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28829__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28829__$1);
var G__28863 = cljs.core.chunk_rest.call(null,seq__28829__$1);
var G__28864 = c__4319__auto__;
var G__28865 = cljs.core.count.call(null,c__4319__auto__);
var G__28866 = (0);
seq__28829 = G__28863;
chunk__28830 = G__28864;
count__28831 = G__28865;
i__28832 = G__28866;
continue;
} else {
var vec__28836 = cljs.core.first.call(null,seq__28829__$1);
var effect_key = cljs.core.nth.call(null,vec__28836,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28836,(1),null);
var temp__4655__auto___28867 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___28867)){
var effect_fn_28868 = temp__4655__auto___28867;
effect_fn_28868.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28869 = cljs.core.next.call(null,seq__28829__$1);
var G__28870 = null;
var G__28871 = (0);
var G__28872 = (0);
seq__28829 = G__28869;
chunk__28830 = G__28870;
count__28831 = G__28871;
i__28832 = G__28872;
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
var seq__28873 = cljs.core.seq.call(null,value);
var chunk__28874 = null;
var count__28875 = (0);
var i__28876 = (0);
while(true){
if((i__28876 < count__28875)){
var map__28877 = cljs.core._nth.call(null,chunk__28874,i__28876);
var map__28877__$1 = ((((!((map__28877 == null)))?(((((map__28877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28877):map__28877);
var effect = map__28877__$1;
var ms = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__28873,chunk__28874,count__28875,i__28876,map__28877,map__28877__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__28873,chunk__28874,count__28875,i__28876,map__28877,map__28877__$1,effect,ms,dispatch))
,ms);
}


var G__28881 = seq__28873;
var G__28882 = chunk__28874;
var G__28883 = count__28875;
var G__28884 = (i__28876 + (1));
seq__28873 = G__28881;
chunk__28874 = G__28882;
count__28875 = G__28883;
i__28876 = G__28884;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28873);
if(temp__4657__auto__){
var seq__28873__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28873__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28873__$1);
var G__28885 = cljs.core.chunk_rest.call(null,seq__28873__$1);
var G__28886 = c__4319__auto__;
var G__28887 = cljs.core.count.call(null,c__4319__auto__);
var G__28888 = (0);
seq__28873 = G__28885;
chunk__28874 = G__28886;
count__28875 = G__28887;
i__28876 = G__28888;
continue;
} else {
var map__28879 = cljs.core.first.call(null,seq__28873__$1);
var map__28879__$1 = ((((!((map__28879 == null)))?(((((map__28879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28879):map__28879);
var effect = map__28879__$1;
var ms = cljs.core.get.call(null,map__28879__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__28879__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__28873,chunk__28874,count__28875,i__28876,map__28879,map__28879__$1,effect,ms,dispatch,seq__28873__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__28873,chunk__28874,count__28875,i__28876,map__28879,map__28879__$1,effect,ms,dispatch,seq__28873__$1,temp__4657__auto__))
,ms);
}


var G__28889 = cljs.core.next.call(null,seq__28873__$1);
var G__28890 = null;
var G__28891 = (0);
var G__28892 = (0);
seq__28873 = G__28889;
chunk__28874 = G__28890;
count__28875 = G__28891;
i__28876 = G__28892;
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
var seq__28893 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__28894 = null;
var count__28895 = (0);
var i__28896 = (0);
while(true){
if((i__28896 < count__28895)){
var event = cljs.core._nth.call(null,chunk__28894,i__28896);
re_frame.router.dispatch.call(null,event);


var G__28897 = seq__28893;
var G__28898 = chunk__28894;
var G__28899 = count__28895;
var G__28900 = (i__28896 + (1));
seq__28893 = G__28897;
chunk__28894 = G__28898;
count__28895 = G__28899;
i__28896 = G__28900;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28893);
if(temp__4657__auto__){
var seq__28893__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28893__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28893__$1);
var G__28901 = cljs.core.chunk_rest.call(null,seq__28893__$1);
var G__28902 = c__4319__auto__;
var G__28903 = cljs.core.count.call(null,c__4319__auto__);
var G__28904 = (0);
seq__28893 = G__28901;
chunk__28894 = G__28902;
count__28895 = G__28903;
i__28896 = G__28904;
continue;
} else {
var event = cljs.core.first.call(null,seq__28893__$1);
re_frame.router.dispatch.call(null,event);


var G__28905 = cljs.core.next.call(null,seq__28893__$1);
var G__28906 = null;
var G__28907 = (0);
var G__28908 = (0);
seq__28893 = G__28905;
chunk__28894 = G__28906;
count__28895 = G__28907;
i__28896 = G__28908;
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
var seq__28909 = cljs.core.seq.call(null,value);
var chunk__28910 = null;
var count__28911 = (0);
var i__28912 = (0);
while(true){
if((i__28912 < count__28911)){
var event = cljs.core._nth.call(null,chunk__28910,i__28912);
clear_event.call(null,event);


var G__28913 = seq__28909;
var G__28914 = chunk__28910;
var G__28915 = count__28911;
var G__28916 = (i__28912 + (1));
seq__28909 = G__28913;
chunk__28910 = G__28914;
count__28911 = G__28915;
i__28912 = G__28916;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28909);
if(temp__4657__auto__){
var seq__28909__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28909__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28909__$1);
var G__28917 = cljs.core.chunk_rest.call(null,seq__28909__$1);
var G__28918 = c__4319__auto__;
var G__28919 = cljs.core.count.call(null,c__4319__auto__);
var G__28920 = (0);
seq__28909 = G__28917;
chunk__28910 = G__28918;
count__28911 = G__28919;
i__28912 = G__28920;
continue;
} else {
var event = cljs.core.first.call(null,seq__28909__$1);
clear_event.call(null,event);


var G__28921 = cljs.core.next.call(null,seq__28909__$1);
var G__28922 = null;
var G__28923 = (0);
var G__28924 = (0);
seq__28909 = G__28921;
chunk__28910 = G__28922;
count__28911 = G__28923;
i__28912 = G__28924;
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

//# sourceMappingURL=fx.js.map?rel=1548321629703
