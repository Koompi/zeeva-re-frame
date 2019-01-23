// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__20543){
var map__20544 = p__20543;
var map__20544__$1 = ((((!((map__20544 == null)))?(((((map__20544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20544):map__20544);
var operation = cljs.core.get.call(null,map__20544__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__20544__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__20544__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__20544__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__20546_20558 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__20547_20559 = null;
var count__20548_20560 = (0);
var i__20549_20561 = (0);
while(true){
if((i__20549_20561 < count__20548_20560)){
var vec__20550_20562 = cljs.core._nth.call(null,chunk__20547_20559,i__20549_20561);
var k_20563 = cljs.core.nth.call(null,vec__20550_20562,(0),null);
var cb_20564 = cljs.core.nth.call(null,vec__20550_20562,(1),null);
try{cb_20564.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e20553){var e_20565 = e20553;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_20563,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_20565);
}

var G__20566 = seq__20546_20558;
var G__20567 = chunk__20547_20559;
var G__20568 = count__20548_20560;
var G__20569 = (i__20549_20561 + (1));
seq__20546_20558 = G__20566;
chunk__20547_20559 = G__20567;
count__20548_20560 = G__20568;
i__20549_20561 = G__20569;
continue;
} else {
var temp__4657__auto___20570 = cljs.core.seq.call(null,seq__20546_20558);
if(temp__4657__auto___20570){
var seq__20546_20571__$1 = temp__4657__auto___20570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20546_20571__$1)){
var c__4319__auto___20572 = cljs.core.chunk_first.call(null,seq__20546_20571__$1);
var G__20573 = cljs.core.chunk_rest.call(null,seq__20546_20571__$1);
var G__20574 = c__4319__auto___20572;
var G__20575 = cljs.core.count.call(null,c__4319__auto___20572);
var G__20576 = (0);
seq__20546_20558 = G__20573;
chunk__20547_20559 = G__20574;
count__20548_20560 = G__20575;
i__20549_20561 = G__20576;
continue;
} else {
var vec__20554_20577 = cljs.core.first.call(null,seq__20546_20571__$1);
var k_20578 = cljs.core.nth.call(null,vec__20554_20577,(0),null);
var cb_20579 = cljs.core.nth.call(null,vec__20554_20577,(1),null);
try{cb_20579.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e20557){var e_20580 = e20557;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_20578,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_20580);
}

var G__20581 = cljs.core.next.call(null,seq__20546_20571__$1);
var G__20582 = null;
var G__20583 = (0);
var G__20584 = (0);
seq__20546_20558 = G__20581;
chunk__20547_20559 = G__20582;
count__20548_20560 = G__20583;
i__20549_20561 = G__20584;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1548216497417
