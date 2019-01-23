// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30374){if((e30374 instanceof Error)){
var e = e30374;
return "Error: Unable to stringify";
} else {
throw e30374;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30377 = arguments.length;
switch (G__30377) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30375_SHARP_){
if(typeof p1__30375_SHARP_ === 'string'){
return p1__30375_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30375_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30380 = arguments.length;
var i__4500__auto___30381 = (0);
while(true){
if((i__4500__auto___30381 < len__4499__auto___30380)){
args__4502__auto__.push((arguments[i__4500__auto___30381]));

var G__30382 = (i__4500__auto___30381 + (1));
i__4500__auto___30381 = G__30382;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30379){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30379));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30384 = arguments.length;
var i__4500__auto___30385 = (0);
while(true){
if((i__4500__auto___30385 < len__4499__auto___30384)){
args__4502__auto__.push((arguments[i__4500__auto___30385]));

var G__30386 = (i__4500__auto___30385 + (1));
i__4500__auto___30385 = G__30386;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30383){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30383));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30387){
var map__30388 = p__30387;
var map__30388__$1 = ((((!((map__30388 == null)))?(((((map__30388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30388):map__30388);
var message = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21834__auto___30467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___30467,ch){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___30467,ch){
return (function (state_30439){
var state_val_30440 = (state_30439[(1)]);
if((state_val_30440 === (7))){
var inst_30435 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30441_30468 = state_30439__$1;
(statearr_30441_30468[(2)] = inst_30435);

(statearr_30441_30468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (1))){
var state_30439__$1 = state_30439;
var statearr_30442_30469 = state_30439__$1;
(statearr_30442_30469[(2)] = null);

(statearr_30442_30469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (4))){
var inst_30392 = (state_30439[(7)]);
var inst_30392__$1 = (state_30439[(2)]);
var state_30439__$1 = (function (){var statearr_30443 = state_30439;
(statearr_30443[(7)] = inst_30392__$1);

return statearr_30443;
})();
if(cljs.core.truth_(inst_30392__$1)){
var statearr_30444_30470 = state_30439__$1;
(statearr_30444_30470[(1)] = (5));

} else {
var statearr_30445_30471 = state_30439__$1;
(statearr_30445_30471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (15))){
var inst_30399 = (state_30439[(8)]);
var inst_30414 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30399);
var inst_30415 = cljs.core.first.call(null,inst_30414);
var inst_30416 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30415);
var inst_30417 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30416)].join('');
var inst_30418 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30417);
var state_30439__$1 = state_30439;
var statearr_30446_30472 = state_30439__$1;
(statearr_30446_30472[(2)] = inst_30418);

(statearr_30446_30472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (13))){
var inst_30423 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30447_30473 = state_30439__$1;
(statearr_30447_30473[(2)] = inst_30423);

(statearr_30447_30473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (6))){
var state_30439__$1 = state_30439;
var statearr_30448_30474 = state_30439__$1;
(statearr_30448_30474[(2)] = null);

(statearr_30448_30474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (17))){
var inst_30421 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30449_30475 = state_30439__$1;
(statearr_30449_30475[(2)] = inst_30421);

(statearr_30449_30475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (3))){
var inst_30437 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30439__$1,inst_30437);
} else {
if((state_val_30440 === (12))){
var inst_30398 = (state_30439[(9)]);
var inst_30412 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30398,opts);
var state_30439__$1 = state_30439;
if(cljs.core.truth_(inst_30412)){
var statearr_30450_30476 = state_30439__$1;
(statearr_30450_30476[(1)] = (15));

} else {
var statearr_30451_30477 = state_30439__$1;
(statearr_30451_30477[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (2))){
var state_30439__$1 = state_30439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30439__$1,(4),ch);
} else {
if((state_val_30440 === (11))){
var inst_30399 = (state_30439[(8)]);
var inst_30404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30405 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30399);
var inst_30406 = cljs.core.async.timeout.call(null,(1000));
var inst_30407 = [inst_30405,inst_30406];
var inst_30408 = (new cljs.core.PersistentVector(null,2,(5),inst_30404,inst_30407,null));
var state_30439__$1 = state_30439;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30439__$1,(14),inst_30408);
} else {
if((state_val_30440 === (9))){
var inst_30399 = (state_30439[(8)]);
var inst_30425 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30426 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30399);
var inst_30427 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30426);
var inst_30428 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30427)].join('');
var inst_30429 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30428);
var state_30439__$1 = (function (){var statearr_30452 = state_30439;
(statearr_30452[(10)] = inst_30425);

return statearr_30452;
})();
var statearr_30453_30478 = state_30439__$1;
(statearr_30453_30478[(2)] = inst_30429);

(statearr_30453_30478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (5))){
var inst_30392 = (state_30439[(7)]);
var inst_30394 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30395 = (new cljs.core.PersistentArrayMap(null,2,inst_30394,null));
var inst_30396 = (new cljs.core.PersistentHashSet(null,inst_30395,null));
var inst_30397 = figwheel.client.focus_msgs.call(null,inst_30396,inst_30392);
var inst_30398 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30397);
var inst_30399 = cljs.core.first.call(null,inst_30397);
var inst_30400 = figwheel.client.autoload_QMARK_.call(null);
var state_30439__$1 = (function (){var statearr_30454 = state_30439;
(statearr_30454[(9)] = inst_30398);

(statearr_30454[(8)] = inst_30399);

return statearr_30454;
})();
if(cljs.core.truth_(inst_30400)){
var statearr_30455_30479 = state_30439__$1;
(statearr_30455_30479[(1)] = (8));

} else {
var statearr_30456_30480 = state_30439__$1;
(statearr_30456_30480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (14))){
var inst_30410 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30457_30481 = state_30439__$1;
(statearr_30457_30481[(2)] = inst_30410);

(statearr_30457_30481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (16))){
var state_30439__$1 = state_30439;
var statearr_30458_30482 = state_30439__$1;
(statearr_30458_30482[(2)] = null);

(statearr_30458_30482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (10))){
var inst_30431 = (state_30439[(2)]);
var state_30439__$1 = (function (){var statearr_30459 = state_30439;
(statearr_30459[(11)] = inst_30431);

return statearr_30459;
})();
var statearr_30460_30483 = state_30439__$1;
(statearr_30460_30483[(2)] = null);

(statearr_30460_30483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (8))){
var inst_30398 = (state_30439[(9)]);
var inst_30402 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30398,opts);
var state_30439__$1 = state_30439;
if(cljs.core.truth_(inst_30402)){
var statearr_30461_30484 = state_30439__$1;
(statearr_30461_30484[(1)] = (11));

} else {
var statearr_30462_30485 = state_30439__$1;
(statearr_30462_30485[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21834__auto___30467,ch))
;
return ((function (switch__21746__auto__,c__21834__auto___30467,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21747__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21747__auto____0 = (function (){
var statearr_30463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30463[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21747__auto__);

(statearr_30463[(1)] = (1));

return statearr_30463;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21747__auto____1 = (function (state_30439){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_30439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e30464){if((e30464 instanceof Object)){
var ex__21750__auto__ = e30464;
var statearr_30465_30486 = state_30439;
(statearr_30465_30486[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30487 = state_30439;
state_30439 = G__30487;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21747__auto__ = function(state_30439){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21747__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21747__auto____1.call(this,state_30439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21747__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21747__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___30467,ch))
})();
var state__21836__auto__ = (function (){var statearr_30466 = f__21835__auto__.call(null);
(statearr_30466[(6)] = c__21834__auto___30467);

return statearr_30466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___30467,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30488_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30488_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30492 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30492){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30490 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30491 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30490,_STAR_print_fn_STAR_30491,sb,base_path_30492){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30490,_STAR_print_fn_STAR_30491,sb,base_path_30492))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30491;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30490;
}}catch (e30489){if((e30489 instanceof Error)){
var e = e30489;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30492], null));
} else {
var e = e30489;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30492))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30493){
var map__30494 = p__30493;
var map__30494__$1 = ((((!((map__30494 == null)))?(((((map__30494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30494):map__30494);
var opts = map__30494__$1;
var build_id = cljs.core.get.call(null,map__30494__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30494,map__30494__$1,opts,build_id){
return (function (p__30496){
var vec__30497 = p__30496;
var seq__30498 = cljs.core.seq.call(null,vec__30497);
var first__30499 = cljs.core.first.call(null,seq__30498);
var seq__30498__$1 = cljs.core.next.call(null,seq__30498);
var map__30500 = first__30499;
var map__30500__$1 = ((((!((map__30500 == null)))?(((((map__30500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30500):map__30500);
var msg = map__30500__$1;
var msg_name = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30498__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30497,seq__30498,first__30499,seq__30498__$1,map__30500,map__30500__$1,msg,msg_name,_,map__30494,map__30494__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30497,seq__30498,first__30499,seq__30498__$1,map__30500,map__30500__$1,msg,msg_name,_,map__30494,map__30494__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30494,map__30494__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30502){
var vec__30503 = p__30502;
var seq__30504 = cljs.core.seq.call(null,vec__30503);
var first__30505 = cljs.core.first.call(null,seq__30504);
var seq__30504__$1 = cljs.core.next.call(null,seq__30504);
var map__30506 = first__30505;
var map__30506__$1 = ((((!((map__30506 == null)))?(((((map__30506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30506):map__30506);
var msg = map__30506__$1;
var msg_name = cljs.core.get.call(null,map__30506__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30504__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30508){
var map__30509 = p__30508;
var map__30509__$1 = ((((!((map__30509 == null)))?(((((map__30509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);
var on_compile_warning = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30509,map__30509__$1,on_compile_warning,on_compile_fail){
return (function (p__30511){
var vec__30512 = p__30511;
var seq__30513 = cljs.core.seq.call(null,vec__30512);
var first__30514 = cljs.core.first.call(null,seq__30513);
var seq__30513__$1 = cljs.core.next.call(null,seq__30513);
var map__30515 = first__30514;
var map__30515__$1 = ((((!((map__30515 == null)))?(((((map__30515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30515):map__30515);
var msg = map__30515__$1;
var msg_name = cljs.core.get.call(null,map__30515__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30513__$1;
var pred__30517 = cljs.core._EQ_;
var expr__30518 = msg_name;
if(cljs.core.truth_(pred__30517.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30518))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30517.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30518))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30509,map__30509__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto__,msg_hist,msg_names,msg){
return (function (state_30607){
var state_val_30608 = (state_30607[(1)]);
if((state_val_30608 === (7))){
var inst_30527 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30527)){
var statearr_30609_30656 = state_30607__$1;
(statearr_30609_30656[(1)] = (8));

} else {
var statearr_30610_30657 = state_30607__$1;
(statearr_30610_30657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (20))){
var inst_30601 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30611_30658 = state_30607__$1;
(statearr_30611_30658[(2)] = inst_30601);

(statearr_30611_30658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (27))){
var inst_30597 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30612_30659 = state_30607__$1;
(statearr_30612_30659[(2)] = inst_30597);

(statearr_30612_30659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (1))){
var inst_30520 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30520)){
var statearr_30613_30660 = state_30607__$1;
(statearr_30613_30660[(1)] = (2));

} else {
var statearr_30614_30661 = state_30607__$1;
(statearr_30614_30661[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (24))){
var inst_30599 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30615_30662 = state_30607__$1;
(statearr_30615_30662[(2)] = inst_30599);

(statearr_30615_30662[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (4))){
var inst_30605 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30607__$1,inst_30605);
} else {
if((state_val_30608 === (15))){
var inst_30603 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30616_30663 = state_30607__$1;
(statearr_30616_30663[(2)] = inst_30603);

(statearr_30616_30663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (21))){
var inst_30556 = (state_30607[(2)]);
var inst_30557 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30558 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30557);
var state_30607__$1 = (function (){var statearr_30617 = state_30607;
(statearr_30617[(7)] = inst_30556);

return statearr_30617;
})();
var statearr_30618_30664 = state_30607__$1;
(statearr_30618_30664[(2)] = inst_30558);

(statearr_30618_30664[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (31))){
var inst_30586 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30586)){
var statearr_30619_30665 = state_30607__$1;
(statearr_30619_30665[(1)] = (34));

} else {
var statearr_30620_30666 = state_30607__$1;
(statearr_30620_30666[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (32))){
var inst_30595 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30621_30667 = state_30607__$1;
(statearr_30621_30667[(2)] = inst_30595);

(statearr_30621_30667[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (33))){
var inst_30582 = (state_30607[(2)]);
var inst_30583 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30584 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30583);
var state_30607__$1 = (function (){var statearr_30622 = state_30607;
(statearr_30622[(8)] = inst_30582);

return statearr_30622;
})();
var statearr_30623_30668 = state_30607__$1;
(statearr_30623_30668[(2)] = inst_30584);

(statearr_30623_30668[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (13))){
var inst_30541 = figwheel.client.heads_up.clear.call(null);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(16),inst_30541);
} else {
if((state_val_30608 === (22))){
var inst_30562 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30563 = figwheel.client.heads_up.append_warning_message.call(null,inst_30562);
var state_30607__$1 = state_30607;
var statearr_30624_30669 = state_30607__$1;
(statearr_30624_30669[(2)] = inst_30563);

(statearr_30624_30669[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (36))){
var inst_30593 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30625_30670 = state_30607__$1;
(statearr_30625_30670[(2)] = inst_30593);

(statearr_30625_30670[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (29))){
var inst_30573 = (state_30607[(2)]);
var inst_30574 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30575 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30574);
var state_30607__$1 = (function (){var statearr_30626 = state_30607;
(statearr_30626[(9)] = inst_30573);

return statearr_30626;
})();
var statearr_30627_30671 = state_30607__$1;
(statearr_30627_30671[(2)] = inst_30575);

(statearr_30627_30671[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (6))){
var inst_30522 = (state_30607[(10)]);
var state_30607__$1 = state_30607;
var statearr_30628_30672 = state_30607__$1;
(statearr_30628_30672[(2)] = inst_30522);

(statearr_30628_30672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (28))){
var inst_30569 = (state_30607[(2)]);
var inst_30570 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30571 = figwheel.client.heads_up.display_warning.call(null,inst_30570);
var state_30607__$1 = (function (){var statearr_30629 = state_30607;
(statearr_30629[(11)] = inst_30569);

return statearr_30629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(29),inst_30571);
} else {
if((state_val_30608 === (25))){
var inst_30567 = figwheel.client.heads_up.clear.call(null);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(28),inst_30567);
} else {
if((state_val_30608 === (34))){
var inst_30588 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(37),inst_30588);
} else {
if((state_val_30608 === (17))){
var inst_30547 = (state_30607[(2)]);
var inst_30548 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30549 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30548);
var state_30607__$1 = (function (){var statearr_30630 = state_30607;
(statearr_30630[(12)] = inst_30547);

return statearr_30630;
})();
var statearr_30631_30673 = state_30607__$1;
(statearr_30631_30673[(2)] = inst_30549);

(statearr_30631_30673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (3))){
var inst_30539 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30539)){
var statearr_30632_30674 = state_30607__$1;
(statearr_30632_30674[(1)] = (13));

} else {
var statearr_30633_30675 = state_30607__$1;
(statearr_30633_30675[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (12))){
var inst_30535 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30634_30676 = state_30607__$1;
(statearr_30634_30676[(2)] = inst_30535);

(statearr_30634_30676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (2))){
var inst_30522 = (state_30607[(10)]);
var inst_30522__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30607__$1 = (function (){var statearr_30635 = state_30607;
(statearr_30635[(10)] = inst_30522__$1);

return statearr_30635;
})();
if(cljs.core.truth_(inst_30522__$1)){
var statearr_30636_30677 = state_30607__$1;
(statearr_30636_30677[(1)] = (5));

} else {
var statearr_30637_30678 = state_30607__$1;
(statearr_30637_30678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (23))){
var inst_30565 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30565)){
var statearr_30638_30679 = state_30607__$1;
(statearr_30638_30679[(1)] = (25));

} else {
var statearr_30639_30680 = state_30607__$1;
(statearr_30639_30680[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (35))){
var state_30607__$1 = state_30607;
var statearr_30640_30681 = state_30607__$1;
(statearr_30640_30681[(2)] = null);

(statearr_30640_30681[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (19))){
var inst_30560 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30560)){
var statearr_30641_30682 = state_30607__$1;
(statearr_30641_30682[(1)] = (22));

} else {
var statearr_30642_30683 = state_30607__$1;
(statearr_30642_30683[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (11))){
var inst_30531 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30643_30684 = state_30607__$1;
(statearr_30643_30684[(2)] = inst_30531);

(statearr_30643_30684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (9))){
var inst_30533 = figwheel.client.heads_up.clear.call(null);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(12),inst_30533);
} else {
if((state_val_30608 === (5))){
var inst_30524 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30607__$1 = state_30607;
var statearr_30644_30685 = state_30607__$1;
(statearr_30644_30685[(2)] = inst_30524);

(statearr_30644_30685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (14))){
var inst_30551 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30551)){
var statearr_30645_30686 = state_30607__$1;
(statearr_30645_30686[(1)] = (18));

} else {
var statearr_30646_30687 = state_30607__$1;
(statearr_30646_30687[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (26))){
var inst_30577 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30577)){
var statearr_30647_30688 = state_30607__$1;
(statearr_30647_30688[(1)] = (30));

} else {
var statearr_30648_30689 = state_30607__$1;
(statearr_30648_30689[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (16))){
var inst_30543 = (state_30607[(2)]);
var inst_30544 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30545 = figwheel.client.heads_up.display_exception.call(null,inst_30544);
var state_30607__$1 = (function (){var statearr_30649 = state_30607;
(statearr_30649[(13)] = inst_30543);

return statearr_30649;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(17),inst_30545);
} else {
if((state_val_30608 === (30))){
var inst_30579 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30580 = figwheel.client.heads_up.display_warning.call(null,inst_30579);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(33),inst_30580);
} else {
if((state_val_30608 === (10))){
var inst_30537 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30650_30690 = state_30607__$1;
(statearr_30650_30690[(2)] = inst_30537);

(statearr_30650_30690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (18))){
var inst_30553 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30554 = figwheel.client.heads_up.display_exception.call(null,inst_30553);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(21),inst_30554);
} else {
if((state_val_30608 === (37))){
var inst_30590 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30651_30691 = state_30607__$1;
(statearr_30651_30691[(2)] = inst_30590);

(statearr_30651_30691[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (8))){
var inst_30529 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(11),inst_30529);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21834__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21746__auto__,c__21834__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto____0 = (function (){
var statearr_30652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30652[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto__);

(statearr_30652[(1)] = (1));

return statearr_30652;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto____1 = (function (state_30607){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_30607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e30653){if((e30653 instanceof Object)){
var ex__21750__auto__ = e30653;
var statearr_30654_30692 = state_30607;
(statearr_30654_30692[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30693 = state_30607;
state_30607 = G__30693;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto__ = function(state_30607){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto____1.call(this,state_30607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto__,msg_hist,msg_names,msg))
})();
var state__21836__auto__ = (function (){var statearr_30655 = f__21835__auto__.call(null);
(statearr_30655[(6)] = c__21834__auto__);

return statearr_30655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto__,msg_hist,msg_names,msg))
);

return c__21834__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21834__auto___30722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___30722,ch){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___30722,ch){
return (function (state_30708){
var state_val_30709 = (state_30708[(1)]);
if((state_val_30709 === (1))){
var state_30708__$1 = state_30708;
var statearr_30710_30723 = state_30708__$1;
(statearr_30710_30723[(2)] = null);

(statearr_30710_30723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (2))){
var state_30708__$1 = state_30708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30708__$1,(4),ch);
} else {
if((state_val_30709 === (3))){
var inst_30706 = (state_30708[(2)]);
var state_30708__$1 = state_30708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30708__$1,inst_30706);
} else {
if((state_val_30709 === (4))){
var inst_30696 = (state_30708[(7)]);
var inst_30696__$1 = (state_30708[(2)]);
var state_30708__$1 = (function (){var statearr_30711 = state_30708;
(statearr_30711[(7)] = inst_30696__$1);

return statearr_30711;
})();
if(cljs.core.truth_(inst_30696__$1)){
var statearr_30712_30724 = state_30708__$1;
(statearr_30712_30724[(1)] = (5));

} else {
var statearr_30713_30725 = state_30708__$1;
(statearr_30713_30725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (5))){
var inst_30696 = (state_30708[(7)]);
var inst_30698 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30696);
var state_30708__$1 = state_30708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30708__$1,(8),inst_30698);
} else {
if((state_val_30709 === (6))){
var state_30708__$1 = state_30708;
var statearr_30714_30726 = state_30708__$1;
(statearr_30714_30726[(2)] = null);

(statearr_30714_30726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (7))){
var inst_30704 = (state_30708[(2)]);
var state_30708__$1 = state_30708;
var statearr_30715_30727 = state_30708__$1;
(statearr_30715_30727[(2)] = inst_30704);

(statearr_30715_30727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (8))){
var inst_30700 = (state_30708[(2)]);
var state_30708__$1 = (function (){var statearr_30716 = state_30708;
(statearr_30716[(8)] = inst_30700);

return statearr_30716;
})();
var statearr_30717_30728 = state_30708__$1;
(statearr_30717_30728[(2)] = null);

(statearr_30717_30728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21834__auto___30722,ch))
;
return ((function (switch__21746__auto__,c__21834__auto___30722,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21747__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21747__auto____0 = (function (){
var statearr_30718 = [null,null,null,null,null,null,null,null,null];
(statearr_30718[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21747__auto__);

(statearr_30718[(1)] = (1));

return statearr_30718;
});
var figwheel$client$heads_up_plugin_$_state_machine__21747__auto____1 = (function (state_30708){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_30708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e30719){if((e30719 instanceof Object)){
var ex__21750__auto__ = e30719;
var statearr_30720_30729 = state_30708;
(statearr_30720_30729[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30730 = state_30708;
state_30708 = G__30730;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21747__auto__ = function(state_30708){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21747__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21747__auto____1.call(this,state_30708);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21747__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21747__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___30722,ch))
})();
var state__21836__auto__ = (function (){var statearr_30721 = f__21835__auto__.call(null);
(statearr_30721[(6)] = c__21834__auto___30722);

return statearr_30721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___30722,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto__){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto__){
return (function (state_30736){
var state_val_30737 = (state_30736[(1)]);
if((state_val_30737 === (1))){
var inst_30731 = cljs.core.async.timeout.call(null,(3000));
var state_30736__$1 = state_30736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30736__$1,(2),inst_30731);
} else {
if((state_val_30737 === (2))){
var inst_30733 = (state_30736[(2)]);
var inst_30734 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30736__$1 = (function (){var statearr_30738 = state_30736;
(statearr_30738[(7)] = inst_30733);

return statearr_30738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30736__$1,inst_30734);
} else {
return null;
}
}
});})(c__21834__auto__))
;
return ((function (switch__21746__auto__,c__21834__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21747__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21747__auto____0 = (function (){
var statearr_30739 = [null,null,null,null,null,null,null,null];
(statearr_30739[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21747__auto__);

(statearr_30739[(1)] = (1));

return statearr_30739;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21747__auto____1 = (function (state_30736){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_30736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e30740){if((e30740 instanceof Object)){
var ex__21750__auto__ = e30740;
var statearr_30741_30743 = state_30736;
(statearr_30741_30743[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30744 = state_30736;
state_30736 = G__30744;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21747__auto__ = function(state_30736){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21747__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21747__auto____1.call(this,state_30736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21747__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21747__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto__))
})();
var state__21836__auto__ = (function (){var statearr_30742 = f__21835__auto__.call(null);
(statearr_30742[(6)] = c__21834__auto__);

return statearr_30742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto__))
);

return c__21834__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto__,figwheel_version,temp__4657__auto__){
return (function (state_30751){
var state_val_30752 = (state_30751[(1)]);
if((state_val_30752 === (1))){
var inst_30745 = cljs.core.async.timeout.call(null,(2000));
var state_30751__$1 = state_30751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30751__$1,(2),inst_30745);
} else {
if((state_val_30752 === (2))){
var inst_30747 = (state_30751[(2)]);
var inst_30748 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30749 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30748);
var state_30751__$1 = (function (){var statearr_30753 = state_30751;
(statearr_30753[(7)] = inst_30747);

return statearr_30753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30751__$1,inst_30749);
} else {
return null;
}
}
});})(c__21834__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__21746__auto__,c__21834__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto____0 = (function (){
var statearr_30754 = [null,null,null,null,null,null,null,null];
(statearr_30754[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto__);

(statearr_30754[(1)] = (1));

return statearr_30754;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto____1 = (function (state_30751){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_30751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e30755){if((e30755 instanceof Object)){
var ex__21750__auto__ = e30755;
var statearr_30756_30758 = state_30751;
(statearr_30756_30758[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30759 = state_30751;
state_30751 = G__30759;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto__ = function(state_30751){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto____1.call(this,state_30751);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto__,figwheel_version,temp__4657__auto__))
})();
var state__21836__auto__ = (function (){var statearr_30757 = f__21835__auto__.call(null);
(statearr_30757[(6)] = c__21834__auto__);

return statearr_30757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto__,figwheel_version,temp__4657__auto__))
);

return c__21834__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30760){
var map__30761 = p__30760;
var map__30761__$1 = ((((!((map__30761 == null)))?(((((map__30761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30761):map__30761);
var file = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30763 = "";
var G__30763__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30763),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30763);
var G__30763__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30763__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30763__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30763__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30763__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30764){
var map__30765 = p__30764;
var map__30765__$1 = ((((!((map__30765 == null)))?(((((map__30765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30765):map__30765);
var ed = map__30765__$1;
var formatted_exception = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30767_30771 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30768_30772 = null;
var count__30769_30773 = (0);
var i__30770_30774 = (0);
while(true){
if((i__30770_30774 < count__30769_30773)){
var msg_30775 = cljs.core._nth.call(null,chunk__30768_30772,i__30770_30774);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30775);


var G__30776 = seq__30767_30771;
var G__30777 = chunk__30768_30772;
var G__30778 = count__30769_30773;
var G__30779 = (i__30770_30774 + (1));
seq__30767_30771 = G__30776;
chunk__30768_30772 = G__30777;
count__30769_30773 = G__30778;
i__30770_30774 = G__30779;
continue;
} else {
var temp__4657__auto___30780 = cljs.core.seq.call(null,seq__30767_30771);
if(temp__4657__auto___30780){
var seq__30767_30781__$1 = temp__4657__auto___30780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30767_30781__$1)){
var c__4319__auto___30782 = cljs.core.chunk_first.call(null,seq__30767_30781__$1);
var G__30783 = cljs.core.chunk_rest.call(null,seq__30767_30781__$1);
var G__30784 = c__4319__auto___30782;
var G__30785 = cljs.core.count.call(null,c__4319__auto___30782);
var G__30786 = (0);
seq__30767_30771 = G__30783;
chunk__30768_30772 = G__30784;
count__30769_30773 = G__30785;
i__30770_30774 = G__30786;
continue;
} else {
var msg_30787 = cljs.core.first.call(null,seq__30767_30781__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30787);


var G__30788 = cljs.core.next.call(null,seq__30767_30781__$1);
var G__30789 = null;
var G__30790 = (0);
var G__30791 = (0);
seq__30767_30771 = G__30788;
chunk__30768_30772 = G__30789;
count__30769_30773 = G__30790;
i__30770_30774 = G__30791;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30792){
var map__30793 = p__30792;
var map__30793__$1 = ((((!((map__30793 == null)))?(((((map__30793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30793):map__30793);
var w = map__30793__$1;
var message = cljs.core.get.call(null,map__30793__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30795 = cljs.core.seq.call(null,plugins);
var chunk__30796 = null;
var count__30797 = (0);
var i__30798 = (0);
while(true){
if((i__30798 < count__30797)){
var vec__30799 = cljs.core._nth.call(null,chunk__30796,i__30798);
var k = cljs.core.nth.call(null,vec__30799,(0),null);
var plugin = cljs.core.nth.call(null,vec__30799,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30805 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30795,chunk__30796,count__30797,i__30798,pl_30805,vec__30799,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30805.call(null,msg_hist);
});})(seq__30795,chunk__30796,count__30797,i__30798,pl_30805,vec__30799,k,plugin))
);
} else {
}


var G__30806 = seq__30795;
var G__30807 = chunk__30796;
var G__30808 = count__30797;
var G__30809 = (i__30798 + (1));
seq__30795 = G__30806;
chunk__30796 = G__30807;
count__30797 = G__30808;
i__30798 = G__30809;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30795);
if(temp__4657__auto__){
var seq__30795__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30795__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30795__$1);
var G__30810 = cljs.core.chunk_rest.call(null,seq__30795__$1);
var G__30811 = c__4319__auto__;
var G__30812 = cljs.core.count.call(null,c__4319__auto__);
var G__30813 = (0);
seq__30795 = G__30810;
chunk__30796 = G__30811;
count__30797 = G__30812;
i__30798 = G__30813;
continue;
} else {
var vec__30802 = cljs.core.first.call(null,seq__30795__$1);
var k = cljs.core.nth.call(null,vec__30802,(0),null);
var plugin = cljs.core.nth.call(null,vec__30802,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30814 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30795,chunk__30796,count__30797,i__30798,pl_30814,vec__30802,k,plugin,seq__30795__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30814.call(null,msg_hist);
});})(seq__30795,chunk__30796,count__30797,i__30798,pl_30814,vec__30802,k,plugin,seq__30795__$1,temp__4657__auto__))
);
} else {
}


var G__30815 = cljs.core.next.call(null,seq__30795__$1);
var G__30816 = null;
var G__30817 = (0);
var G__30818 = (0);
seq__30795 = G__30815;
chunk__30796 = G__30816;
count__30797 = G__30817;
i__30798 = G__30818;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30820 = arguments.length;
switch (G__30820) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30821_30826 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30822_30827 = null;
var count__30823_30828 = (0);
var i__30824_30829 = (0);
while(true){
if((i__30824_30829 < count__30823_30828)){
var msg_30830 = cljs.core._nth.call(null,chunk__30822_30827,i__30824_30829);
figwheel.client.socket.handle_incoming_message.call(null,msg_30830);


var G__30831 = seq__30821_30826;
var G__30832 = chunk__30822_30827;
var G__30833 = count__30823_30828;
var G__30834 = (i__30824_30829 + (1));
seq__30821_30826 = G__30831;
chunk__30822_30827 = G__30832;
count__30823_30828 = G__30833;
i__30824_30829 = G__30834;
continue;
} else {
var temp__4657__auto___30835 = cljs.core.seq.call(null,seq__30821_30826);
if(temp__4657__auto___30835){
var seq__30821_30836__$1 = temp__4657__auto___30835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30821_30836__$1)){
var c__4319__auto___30837 = cljs.core.chunk_first.call(null,seq__30821_30836__$1);
var G__30838 = cljs.core.chunk_rest.call(null,seq__30821_30836__$1);
var G__30839 = c__4319__auto___30837;
var G__30840 = cljs.core.count.call(null,c__4319__auto___30837);
var G__30841 = (0);
seq__30821_30826 = G__30838;
chunk__30822_30827 = G__30839;
count__30823_30828 = G__30840;
i__30824_30829 = G__30841;
continue;
} else {
var msg_30842 = cljs.core.first.call(null,seq__30821_30836__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30842);


var G__30843 = cljs.core.next.call(null,seq__30821_30836__$1);
var G__30844 = null;
var G__30845 = (0);
var G__30846 = (0);
seq__30821_30826 = G__30843;
chunk__30822_30827 = G__30844;
count__30823_30828 = G__30845;
i__30824_30829 = G__30846;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30851 = arguments.length;
var i__4500__auto___30852 = (0);
while(true){
if((i__4500__auto___30852 < len__4499__auto___30851)){
args__4502__auto__.push((arguments[i__4500__auto___30852]));

var G__30853 = (i__4500__auto___30852 + (1));
i__4500__auto___30852 = G__30853;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30848){
var map__30849 = p__30848;
var map__30849__$1 = ((((!((map__30849 == null)))?(((((map__30849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30849):map__30849);
var opts = map__30849__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30847){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30847));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30854){if((e30854 instanceof Error)){
var e = e30854;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30854;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30855){
var map__30856 = p__30855;
var map__30856__$1 = ((((!((map__30856 == null)))?(((((map__30856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30856):map__30856);
var msg_name = cljs.core.get.call(null,map__30856__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1548216528962
