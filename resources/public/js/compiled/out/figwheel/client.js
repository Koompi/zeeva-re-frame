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
}catch (e42916){if((e42916 instanceof Error)){
var e = e42916;
return "Error: Unable to stringify";
} else {
throw e42916;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__42919 = arguments.length;
switch (G__42919) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42917_SHARP_){
if(typeof p1__42917_SHARP_ === 'string'){
return p1__42917_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42917_SHARP_);
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
var len__4499__auto___42922 = arguments.length;
var i__4500__auto___42923 = (0);
while(true){
if((i__4500__auto___42923 < len__4499__auto___42922)){
args__4502__auto__.push((arguments[i__4500__auto___42923]));

var G__42924 = (i__4500__auto___42923 + (1));
i__4500__auto___42923 = G__42924;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42921){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42921));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42926 = arguments.length;
var i__4500__auto___42927 = (0);
while(true){
if((i__4500__auto___42927 < len__4499__auto___42926)){
args__4502__auto__.push((arguments[i__4500__auto___42927]));

var G__42928 = (i__4500__auto___42927 + (1));
i__4500__auto___42927 = G__42928;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42925){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42925));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42929){
var map__42930 = p__42929;
var map__42930__$1 = ((((!((map__42930 == null)))?(((((map__42930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42930):map__42930);
var message = cljs.core.get.call(null,map__42930__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42930__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22784__auto___43009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___43009,ch){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___43009,ch){
return (function (state_42981){
var state_val_42982 = (state_42981[(1)]);
if((state_val_42982 === (7))){
var inst_42977 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
var statearr_42983_43010 = state_42981__$1;
(statearr_42983_43010[(2)] = inst_42977);

(statearr_42983_43010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (1))){
var state_42981__$1 = state_42981;
var statearr_42984_43011 = state_42981__$1;
(statearr_42984_43011[(2)] = null);

(statearr_42984_43011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (4))){
var inst_42934 = (state_42981[(7)]);
var inst_42934__$1 = (state_42981[(2)]);
var state_42981__$1 = (function (){var statearr_42985 = state_42981;
(statearr_42985[(7)] = inst_42934__$1);

return statearr_42985;
})();
if(cljs.core.truth_(inst_42934__$1)){
var statearr_42986_43012 = state_42981__$1;
(statearr_42986_43012[(1)] = (5));

} else {
var statearr_42987_43013 = state_42981__$1;
(statearr_42987_43013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (15))){
var inst_42941 = (state_42981[(8)]);
var inst_42956 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42941);
var inst_42957 = cljs.core.first.call(null,inst_42956);
var inst_42958 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42957);
var inst_42959 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42958)].join('');
var inst_42960 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42959);
var state_42981__$1 = state_42981;
var statearr_42988_43014 = state_42981__$1;
(statearr_42988_43014[(2)] = inst_42960);

(statearr_42988_43014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (13))){
var inst_42965 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
var statearr_42989_43015 = state_42981__$1;
(statearr_42989_43015[(2)] = inst_42965);

(statearr_42989_43015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (6))){
var state_42981__$1 = state_42981;
var statearr_42990_43016 = state_42981__$1;
(statearr_42990_43016[(2)] = null);

(statearr_42990_43016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (17))){
var inst_42963 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
var statearr_42991_43017 = state_42981__$1;
(statearr_42991_43017[(2)] = inst_42963);

(statearr_42991_43017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (3))){
var inst_42979 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42981__$1,inst_42979);
} else {
if((state_val_42982 === (12))){
var inst_42940 = (state_42981[(9)]);
var inst_42954 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42940,opts);
var state_42981__$1 = state_42981;
if(cljs.core.truth_(inst_42954)){
var statearr_42992_43018 = state_42981__$1;
(statearr_42992_43018[(1)] = (15));

} else {
var statearr_42993_43019 = state_42981__$1;
(statearr_42993_43019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (2))){
var state_42981__$1 = state_42981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42981__$1,(4),ch);
} else {
if((state_val_42982 === (11))){
var inst_42941 = (state_42981[(8)]);
var inst_42946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42947 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42941);
var inst_42948 = cljs.core.async.timeout.call(null,(1000));
var inst_42949 = [inst_42947,inst_42948];
var inst_42950 = (new cljs.core.PersistentVector(null,2,(5),inst_42946,inst_42949,null));
var state_42981__$1 = state_42981;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42981__$1,(14),inst_42950);
} else {
if((state_val_42982 === (9))){
var inst_42941 = (state_42981[(8)]);
var inst_42967 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42968 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42941);
var inst_42969 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42968);
var inst_42970 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42969)].join('');
var inst_42971 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42970);
var state_42981__$1 = (function (){var statearr_42994 = state_42981;
(statearr_42994[(10)] = inst_42967);

return statearr_42994;
})();
var statearr_42995_43020 = state_42981__$1;
(statearr_42995_43020[(2)] = inst_42971);

(statearr_42995_43020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (5))){
var inst_42934 = (state_42981[(7)]);
var inst_42936 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42937 = (new cljs.core.PersistentArrayMap(null,2,inst_42936,null));
var inst_42938 = (new cljs.core.PersistentHashSet(null,inst_42937,null));
var inst_42939 = figwheel.client.focus_msgs.call(null,inst_42938,inst_42934);
var inst_42940 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42939);
var inst_42941 = cljs.core.first.call(null,inst_42939);
var inst_42942 = figwheel.client.autoload_QMARK_.call(null);
var state_42981__$1 = (function (){var statearr_42996 = state_42981;
(statearr_42996[(8)] = inst_42941);

(statearr_42996[(9)] = inst_42940);

return statearr_42996;
})();
if(cljs.core.truth_(inst_42942)){
var statearr_42997_43021 = state_42981__$1;
(statearr_42997_43021[(1)] = (8));

} else {
var statearr_42998_43022 = state_42981__$1;
(statearr_42998_43022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (14))){
var inst_42952 = (state_42981[(2)]);
var state_42981__$1 = state_42981;
var statearr_42999_43023 = state_42981__$1;
(statearr_42999_43023[(2)] = inst_42952);

(statearr_42999_43023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (16))){
var state_42981__$1 = state_42981;
var statearr_43000_43024 = state_42981__$1;
(statearr_43000_43024[(2)] = null);

(statearr_43000_43024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (10))){
var inst_42973 = (state_42981[(2)]);
var state_42981__$1 = (function (){var statearr_43001 = state_42981;
(statearr_43001[(11)] = inst_42973);

return statearr_43001;
})();
var statearr_43002_43025 = state_42981__$1;
(statearr_43002_43025[(2)] = null);

(statearr_43002_43025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42982 === (8))){
var inst_42940 = (state_42981[(9)]);
var inst_42944 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42940,opts);
var state_42981__$1 = state_42981;
if(cljs.core.truth_(inst_42944)){
var statearr_43003_43026 = state_42981__$1;
(statearr_43003_43026[(1)] = (11));

} else {
var statearr_43004_43027 = state_42981__$1;
(statearr_43004_43027[(1)] = (12));

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
});})(c__22784__auto___43009,ch))
;
return ((function (switch__22629__auto__,c__22784__auto___43009,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22630__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22630__auto____0 = (function (){
var statearr_43005 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43005[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22630__auto__);

(statearr_43005[(1)] = (1));

return statearr_43005;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22630__auto____1 = (function (state_42981){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_42981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e43006){if((e43006 instanceof Object)){
var ex__22633__auto__ = e43006;
var statearr_43007_43028 = state_42981;
(statearr_43007_43028[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43029 = state_42981;
state_42981 = G__43029;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22630__auto__ = function(state_42981){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22630__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22630__auto____1.call(this,state_42981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22630__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22630__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___43009,ch))
})();
var state__22786__auto__ = (function (){var statearr_43008 = f__22785__auto__.call(null);
(statearr_43008[(6)] = c__22784__auto___43009);

return statearr_43008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___43009,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43030_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43030_SHARP_));
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
var base_path_43034 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43034){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43032 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43033 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43032,_STAR_print_fn_STAR_43033,sb,base_path_43034){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_43032,_STAR_print_fn_STAR_43033,sb,base_path_43034))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43033;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43032;
}}catch (e43031){if((e43031 instanceof Error)){
var e = e43031;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43034], null));
} else {
var e = e43031;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43034))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43035){
var map__43036 = p__43035;
var map__43036__$1 = ((((!((map__43036 == null)))?(((((map__43036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43036):map__43036);
var opts = map__43036__$1;
var build_id = cljs.core.get.call(null,map__43036__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43036,map__43036__$1,opts,build_id){
return (function (p__43038){
var vec__43039 = p__43038;
var seq__43040 = cljs.core.seq.call(null,vec__43039);
var first__43041 = cljs.core.first.call(null,seq__43040);
var seq__43040__$1 = cljs.core.next.call(null,seq__43040);
var map__43042 = first__43041;
var map__43042__$1 = ((((!((map__43042 == null)))?(((((map__43042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43042):map__43042);
var msg = map__43042__$1;
var msg_name = cljs.core.get.call(null,map__43042__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43040__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43039,seq__43040,first__43041,seq__43040__$1,map__43042,map__43042__$1,msg,msg_name,_,map__43036,map__43036__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43039,seq__43040,first__43041,seq__43040__$1,map__43042,map__43042__$1,msg,msg_name,_,map__43036,map__43036__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43036,map__43036__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43044){
var vec__43045 = p__43044;
var seq__43046 = cljs.core.seq.call(null,vec__43045);
var first__43047 = cljs.core.first.call(null,seq__43046);
var seq__43046__$1 = cljs.core.next.call(null,seq__43046);
var map__43048 = first__43047;
var map__43048__$1 = ((((!((map__43048 == null)))?(((((map__43048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43048):map__43048);
var msg = map__43048__$1;
var msg_name = cljs.core.get.call(null,map__43048__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43046__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43050){
var map__43051 = p__43050;
var map__43051__$1 = ((((!((map__43051 == null)))?(((((map__43051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43051):map__43051);
var on_compile_warning = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43051,map__43051__$1,on_compile_warning,on_compile_fail){
return (function (p__43053){
var vec__43054 = p__43053;
var seq__43055 = cljs.core.seq.call(null,vec__43054);
var first__43056 = cljs.core.first.call(null,seq__43055);
var seq__43055__$1 = cljs.core.next.call(null,seq__43055);
var map__43057 = first__43056;
var map__43057__$1 = ((((!((map__43057 == null)))?(((((map__43057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43057):map__43057);
var msg = map__43057__$1;
var msg_name = cljs.core.get.call(null,map__43057__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43055__$1;
var pred__43059 = cljs.core._EQ_;
var expr__43060 = msg_name;
if(cljs.core.truth_(pred__43059.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43060))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43059.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43060))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43051,map__43051__$1,on_compile_warning,on_compile_fail))
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
var c__22784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto__,msg_hist,msg_names,msg){
return (function (state_43149){
var state_val_43150 = (state_43149[(1)]);
if((state_val_43150 === (7))){
var inst_43069 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
if(cljs.core.truth_(inst_43069)){
var statearr_43151_43198 = state_43149__$1;
(statearr_43151_43198[(1)] = (8));

} else {
var statearr_43152_43199 = state_43149__$1;
(statearr_43152_43199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (20))){
var inst_43143 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
var statearr_43153_43200 = state_43149__$1;
(statearr_43153_43200[(2)] = inst_43143);

(statearr_43153_43200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (27))){
var inst_43139 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
var statearr_43154_43201 = state_43149__$1;
(statearr_43154_43201[(2)] = inst_43139);

(statearr_43154_43201[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (1))){
var inst_43062 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43149__$1 = state_43149;
if(cljs.core.truth_(inst_43062)){
var statearr_43155_43202 = state_43149__$1;
(statearr_43155_43202[(1)] = (2));

} else {
var statearr_43156_43203 = state_43149__$1;
(statearr_43156_43203[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (24))){
var inst_43141 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
var statearr_43157_43204 = state_43149__$1;
(statearr_43157_43204[(2)] = inst_43141);

(statearr_43157_43204[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (4))){
var inst_43147 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43149__$1,inst_43147);
} else {
if((state_val_43150 === (15))){
var inst_43145 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
var statearr_43158_43205 = state_43149__$1;
(statearr_43158_43205[(2)] = inst_43145);

(statearr_43158_43205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (21))){
var inst_43098 = (state_43149[(2)]);
var inst_43099 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43100 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43099);
var state_43149__$1 = (function (){var statearr_43159 = state_43149;
(statearr_43159[(7)] = inst_43098);

return statearr_43159;
})();
var statearr_43160_43206 = state_43149__$1;
(statearr_43160_43206[(2)] = inst_43100);

(statearr_43160_43206[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (31))){
var inst_43128 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43149__$1 = state_43149;
if(cljs.core.truth_(inst_43128)){
var statearr_43161_43207 = state_43149__$1;
(statearr_43161_43207[(1)] = (34));

} else {
var statearr_43162_43208 = state_43149__$1;
(statearr_43162_43208[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (32))){
var inst_43137 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
var statearr_43163_43209 = state_43149__$1;
(statearr_43163_43209[(2)] = inst_43137);

(statearr_43163_43209[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (33))){
var inst_43124 = (state_43149[(2)]);
var inst_43125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43126 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43125);
var state_43149__$1 = (function (){var statearr_43164 = state_43149;
(statearr_43164[(8)] = inst_43124);

return statearr_43164;
})();
var statearr_43165_43210 = state_43149__$1;
(statearr_43165_43210[(2)] = inst_43126);

(statearr_43165_43210[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (13))){
var inst_43083 = figwheel.client.heads_up.clear.call(null);
var state_43149__$1 = state_43149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43149__$1,(16),inst_43083);
} else {
if((state_val_43150 === (22))){
var inst_43104 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43105 = figwheel.client.heads_up.append_warning_message.call(null,inst_43104);
var state_43149__$1 = state_43149;
var statearr_43166_43211 = state_43149__$1;
(statearr_43166_43211[(2)] = inst_43105);

(statearr_43166_43211[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (36))){
var inst_43135 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
var statearr_43167_43212 = state_43149__$1;
(statearr_43167_43212[(2)] = inst_43135);

(statearr_43167_43212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (29))){
var inst_43115 = (state_43149[(2)]);
var inst_43116 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43117 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43116);
var state_43149__$1 = (function (){var statearr_43168 = state_43149;
(statearr_43168[(9)] = inst_43115);

return statearr_43168;
})();
var statearr_43169_43213 = state_43149__$1;
(statearr_43169_43213[(2)] = inst_43117);

(statearr_43169_43213[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (6))){
var inst_43064 = (state_43149[(10)]);
var state_43149__$1 = state_43149;
var statearr_43170_43214 = state_43149__$1;
(statearr_43170_43214[(2)] = inst_43064);

(statearr_43170_43214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (28))){
var inst_43111 = (state_43149[(2)]);
var inst_43112 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43113 = figwheel.client.heads_up.display_warning.call(null,inst_43112);
var state_43149__$1 = (function (){var statearr_43171 = state_43149;
(statearr_43171[(11)] = inst_43111);

return statearr_43171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43149__$1,(29),inst_43113);
} else {
if((state_val_43150 === (25))){
var inst_43109 = figwheel.client.heads_up.clear.call(null);
var state_43149__$1 = state_43149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43149__$1,(28),inst_43109);
} else {
if((state_val_43150 === (34))){
var inst_43130 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43149__$1 = state_43149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43149__$1,(37),inst_43130);
} else {
if((state_val_43150 === (17))){
var inst_43089 = (state_43149[(2)]);
var inst_43090 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43091 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43090);
var state_43149__$1 = (function (){var statearr_43172 = state_43149;
(statearr_43172[(12)] = inst_43089);

return statearr_43172;
})();
var statearr_43173_43215 = state_43149__$1;
(statearr_43173_43215[(2)] = inst_43091);

(statearr_43173_43215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (3))){
var inst_43081 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43149__$1 = state_43149;
if(cljs.core.truth_(inst_43081)){
var statearr_43174_43216 = state_43149__$1;
(statearr_43174_43216[(1)] = (13));

} else {
var statearr_43175_43217 = state_43149__$1;
(statearr_43175_43217[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (12))){
var inst_43077 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
var statearr_43176_43218 = state_43149__$1;
(statearr_43176_43218[(2)] = inst_43077);

(statearr_43176_43218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (2))){
var inst_43064 = (state_43149[(10)]);
var inst_43064__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43149__$1 = (function (){var statearr_43177 = state_43149;
(statearr_43177[(10)] = inst_43064__$1);

return statearr_43177;
})();
if(cljs.core.truth_(inst_43064__$1)){
var statearr_43178_43219 = state_43149__$1;
(statearr_43178_43219[(1)] = (5));

} else {
var statearr_43179_43220 = state_43149__$1;
(statearr_43179_43220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (23))){
var inst_43107 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43149__$1 = state_43149;
if(cljs.core.truth_(inst_43107)){
var statearr_43180_43221 = state_43149__$1;
(statearr_43180_43221[(1)] = (25));

} else {
var statearr_43181_43222 = state_43149__$1;
(statearr_43181_43222[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (35))){
var state_43149__$1 = state_43149;
var statearr_43182_43223 = state_43149__$1;
(statearr_43182_43223[(2)] = null);

(statearr_43182_43223[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (19))){
var inst_43102 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43149__$1 = state_43149;
if(cljs.core.truth_(inst_43102)){
var statearr_43183_43224 = state_43149__$1;
(statearr_43183_43224[(1)] = (22));

} else {
var statearr_43184_43225 = state_43149__$1;
(statearr_43184_43225[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (11))){
var inst_43073 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
var statearr_43185_43226 = state_43149__$1;
(statearr_43185_43226[(2)] = inst_43073);

(statearr_43185_43226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (9))){
var inst_43075 = figwheel.client.heads_up.clear.call(null);
var state_43149__$1 = state_43149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43149__$1,(12),inst_43075);
} else {
if((state_val_43150 === (5))){
var inst_43066 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43149__$1 = state_43149;
var statearr_43186_43227 = state_43149__$1;
(statearr_43186_43227[(2)] = inst_43066);

(statearr_43186_43227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (14))){
var inst_43093 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43149__$1 = state_43149;
if(cljs.core.truth_(inst_43093)){
var statearr_43187_43228 = state_43149__$1;
(statearr_43187_43228[(1)] = (18));

} else {
var statearr_43188_43229 = state_43149__$1;
(statearr_43188_43229[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (26))){
var inst_43119 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43149__$1 = state_43149;
if(cljs.core.truth_(inst_43119)){
var statearr_43189_43230 = state_43149__$1;
(statearr_43189_43230[(1)] = (30));

} else {
var statearr_43190_43231 = state_43149__$1;
(statearr_43190_43231[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (16))){
var inst_43085 = (state_43149[(2)]);
var inst_43086 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43087 = figwheel.client.heads_up.display_exception.call(null,inst_43086);
var state_43149__$1 = (function (){var statearr_43191 = state_43149;
(statearr_43191[(13)] = inst_43085);

return statearr_43191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43149__$1,(17),inst_43087);
} else {
if((state_val_43150 === (30))){
var inst_43121 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43122 = figwheel.client.heads_up.display_warning.call(null,inst_43121);
var state_43149__$1 = state_43149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43149__$1,(33),inst_43122);
} else {
if((state_val_43150 === (10))){
var inst_43079 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
var statearr_43192_43232 = state_43149__$1;
(statearr_43192_43232[(2)] = inst_43079);

(statearr_43192_43232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (18))){
var inst_43095 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43096 = figwheel.client.heads_up.display_exception.call(null,inst_43095);
var state_43149__$1 = state_43149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43149__$1,(21),inst_43096);
} else {
if((state_val_43150 === (37))){
var inst_43132 = (state_43149[(2)]);
var state_43149__$1 = state_43149;
var statearr_43193_43233 = state_43149__$1;
(statearr_43193_43233[(2)] = inst_43132);

(statearr_43193_43233[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43150 === (8))){
var inst_43071 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43149__$1 = state_43149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43149__$1,(11),inst_43071);
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
});})(c__22784__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22629__auto__,c__22784__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto____0 = (function (){
var statearr_43194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43194[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto__);

(statearr_43194[(1)] = (1));

return statearr_43194;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto____1 = (function (state_43149){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_43149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e43195){if((e43195 instanceof Object)){
var ex__22633__auto__ = e43195;
var statearr_43196_43234 = state_43149;
(statearr_43196_43234[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43235 = state_43149;
state_43149 = G__43235;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto__ = function(state_43149){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto____1.call(this,state_43149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto__,msg_hist,msg_names,msg))
})();
var state__22786__auto__ = (function (){var statearr_43197 = f__22785__auto__.call(null);
(statearr_43197[(6)] = c__22784__auto__);

return statearr_43197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto__,msg_hist,msg_names,msg))
);

return c__22784__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22784__auto___43264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___43264,ch){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___43264,ch){
return (function (state_43250){
var state_val_43251 = (state_43250[(1)]);
if((state_val_43251 === (1))){
var state_43250__$1 = state_43250;
var statearr_43252_43265 = state_43250__$1;
(statearr_43252_43265[(2)] = null);

(statearr_43252_43265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (2))){
var state_43250__$1 = state_43250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43250__$1,(4),ch);
} else {
if((state_val_43251 === (3))){
var inst_43248 = (state_43250[(2)]);
var state_43250__$1 = state_43250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43250__$1,inst_43248);
} else {
if((state_val_43251 === (4))){
var inst_43238 = (state_43250[(7)]);
var inst_43238__$1 = (state_43250[(2)]);
var state_43250__$1 = (function (){var statearr_43253 = state_43250;
(statearr_43253[(7)] = inst_43238__$1);

return statearr_43253;
})();
if(cljs.core.truth_(inst_43238__$1)){
var statearr_43254_43266 = state_43250__$1;
(statearr_43254_43266[(1)] = (5));

} else {
var statearr_43255_43267 = state_43250__$1;
(statearr_43255_43267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (5))){
var inst_43238 = (state_43250[(7)]);
var inst_43240 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43238);
var state_43250__$1 = state_43250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43250__$1,(8),inst_43240);
} else {
if((state_val_43251 === (6))){
var state_43250__$1 = state_43250;
var statearr_43256_43268 = state_43250__$1;
(statearr_43256_43268[(2)] = null);

(statearr_43256_43268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (7))){
var inst_43246 = (state_43250[(2)]);
var state_43250__$1 = state_43250;
var statearr_43257_43269 = state_43250__$1;
(statearr_43257_43269[(2)] = inst_43246);

(statearr_43257_43269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (8))){
var inst_43242 = (state_43250[(2)]);
var state_43250__$1 = (function (){var statearr_43258 = state_43250;
(statearr_43258[(8)] = inst_43242);

return statearr_43258;
})();
var statearr_43259_43270 = state_43250__$1;
(statearr_43259_43270[(2)] = null);

(statearr_43259_43270[(1)] = (2));


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
});})(c__22784__auto___43264,ch))
;
return ((function (switch__22629__auto__,c__22784__auto___43264,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22630__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22630__auto____0 = (function (){
var statearr_43260 = [null,null,null,null,null,null,null,null,null];
(statearr_43260[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22630__auto__);

(statearr_43260[(1)] = (1));

return statearr_43260;
});
var figwheel$client$heads_up_plugin_$_state_machine__22630__auto____1 = (function (state_43250){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_43250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e43261){if((e43261 instanceof Object)){
var ex__22633__auto__ = e43261;
var statearr_43262_43271 = state_43250;
(statearr_43262_43271[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43272 = state_43250;
state_43250 = G__43272;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22630__auto__ = function(state_43250){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22630__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22630__auto____1.call(this,state_43250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22630__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22630__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___43264,ch))
})();
var state__22786__auto__ = (function (){var statearr_43263 = f__22785__auto__.call(null);
(statearr_43263[(6)] = c__22784__auto___43264);

return statearr_43263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___43264,ch))
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
var c__22784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto__){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto__){
return (function (state_43278){
var state_val_43279 = (state_43278[(1)]);
if((state_val_43279 === (1))){
var inst_43273 = cljs.core.async.timeout.call(null,(3000));
var state_43278__$1 = state_43278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43278__$1,(2),inst_43273);
} else {
if((state_val_43279 === (2))){
var inst_43275 = (state_43278[(2)]);
var inst_43276 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43278__$1 = (function (){var statearr_43280 = state_43278;
(statearr_43280[(7)] = inst_43275);

return statearr_43280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43278__$1,inst_43276);
} else {
return null;
}
}
});})(c__22784__auto__))
;
return ((function (switch__22629__auto__,c__22784__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22630__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22630__auto____0 = (function (){
var statearr_43281 = [null,null,null,null,null,null,null,null];
(statearr_43281[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22630__auto__);

(statearr_43281[(1)] = (1));

return statearr_43281;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22630__auto____1 = (function (state_43278){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_43278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e43282){if((e43282 instanceof Object)){
var ex__22633__auto__ = e43282;
var statearr_43283_43285 = state_43278;
(statearr_43283_43285[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43286 = state_43278;
state_43278 = G__43286;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22630__auto__ = function(state_43278){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22630__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22630__auto____1.call(this,state_43278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22630__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22630__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto__))
})();
var state__22786__auto__ = (function (){var statearr_43284 = f__22785__auto__.call(null);
(statearr_43284[(6)] = c__22784__auto__);

return statearr_43284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto__))
);

return c__22784__auto__;
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
var c__22784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto__,figwheel_version,temp__4657__auto__){
return (function (state_43293){
var state_val_43294 = (state_43293[(1)]);
if((state_val_43294 === (1))){
var inst_43287 = cljs.core.async.timeout.call(null,(2000));
var state_43293__$1 = state_43293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43293__$1,(2),inst_43287);
} else {
if((state_val_43294 === (2))){
var inst_43289 = (state_43293[(2)]);
var inst_43290 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_43291 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43290);
var state_43293__$1 = (function (){var statearr_43295 = state_43293;
(statearr_43295[(7)] = inst_43289);

return statearr_43295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43293__$1,inst_43291);
} else {
return null;
}
}
});})(c__22784__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22629__auto__,c__22784__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto____0 = (function (){
var statearr_43296 = [null,null,null,null,null,null,null,null];
(statearr_43296[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto__);

(statearr_43296[(1)] = (1));

return statearr_43296;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto____1 = (function (state_43293){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_43293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e43297){if((e43297 instanceof Object)){
var ex__22633__auto__ = e43297;
var statearr_43298_43300 = state_43293;
(statearr_43298_43300[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43301 = state_43293;
state_43293 = G__43301;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto__ = function(state_43293){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto____1.call(this,state_43293);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22786__auto__ = (function (){var statearr_43299 = f__22785__auto__.call(null);
(statearr_43299[(6)] = c__22784__auto__);

return statearr_43299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto__,figwheel_version,temp__4657__auto__))
);

return c__22784__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43302){
var map__43303 = p__43302;
var map__43303__$1 = ((((!((map__43303 == null)))?(((((map__43303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43303):map__43303);
var file = cljs.core.get.call(null,map__43303__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43303__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43303__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43305 = "";
var G__43305__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43305),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__43305);
var G__43305__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43305__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__43305__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43305__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__43305__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43306){
var map__43307 = p__43306;
var map__43307__$1 = ((((!((map__43307 == null)))?(((((map__43307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43307):map__43307);
var ed = map__43307__$1;
var formatted_exception = cljs.core.get.call(null,map__43307__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43307__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43307__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43309_43313 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43310_43314 = null;
var count__43311_43315 = (0);
var i__43312_43316 = (0);
while(true){
if((i__43312_43316 < count__43311_43315)){
var msg_43317 = cljs.core._nth.call(null,chunk__43310_43314,i__43312_43316);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43317);


var G__43318 = seq__43309_43313;
var G__43319 = chunk__43310_43314;
var G__43320 = count__43311_43315;
var G__43321 = (i__43312_43316 + (1));
seq__43309_43313 = G__43318;
chunk__43310_43314 = G__43319;
count__43311_43315 = G__43320;
i__43312_43316 = G__43321;
continue;
} else {
var temp__4657__auto___43322 = cljs.core.seq.call(null,seq__43309_43313);
if(temp__4657__auto___43322){
var seq__43309_43323__$1 = temp__4657__auto___43322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43309_43323__$1)){
var c__4319__auto___43324 = cljs.core.chunk_first.call(null,seq__43309_43323__$1);
var G__43325 = cljs.core.chunk_rest.call(null,seq__43309_43323__$1);
var G__43326 = c__4319__auto___43324;
var G__43327 = cljs.core.count.call(null,c__4319__auto___43324);
var G__43328 = (0);
seq__43309_43313 = G__43325;
chunk__43310_43314 = G__43326;
count__43311_43315 = G__43327;
i__43312_43316 = G__43328;
continue;
} else {
var msg_43329 = cljs.core.first.call(null,seq__43309_43323__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43329);


var G__43330 = cljs.core.next.call(null,seq__43309_43323__$1);
var G__43331 = null;
var G__43332 = (0);
var G__43333 = (0);
seq__43309_43313 = G__43330;
chunk__43310_43314 = G__43331;
count__43311_43315 = G__43332;
i__43312_43316 = G__43333;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43334){
var map__43335 = p__43334;
var map__43335__$1 = ((((!((map__43335 == null)))?(((((map__43335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43335):map__43335);
var w = map__43335__$1;
var message = cljs.core.get.call(null,map__43335__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__43337 = cljs.core.seq.call(null,plugins);
var chunk__43338 = null;
var count__43339 = (0);
var i__43340 = (0);
while(true){
if((i__43340 < count__43339)){
var vec__43341 = cljs.core._nth.call(null,chunk__43338,i__43340);
var k = cljs.core.nth.call(null,vec__43341,(0),null);
var plugin = cljs.core.nth.call(null,vec__43341,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43347 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43337,chunk__43338,count__43339,i__43340,pl_43347,vec__43341,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43347.call(null,msg_hist);
});})(seq__43337,chunk__43338,count__43339,i__43340,pl_43347,vec__43341,k,plugin))
);
} else {
}


var G__43348 = seq__43337;
var G__43349 = chunk__43338;
var G__43350 = count__43339;
var G__43351 = (i__43340 + (1));
seq__43337 = G__43348;
chunk__43338 = G__43349;
count__43339 = G__43350;
i__43340 = G__43351;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43337);
if(temp__4657__auto__){
var seq__43337__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43337__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43337__$1);
var G__43352 = cljs.core.chunk_rest.call(null,seq__43337__$1);
var G__43353 = c__4319__auto__;
var G__43354 = cljs.core.count.call(null,c__4319__auto__);
var G__43355 = (0);
seq__43337 = G__43352;
chunk__43338 = G__43353;
count__43339 = G__43354;
i__43340 = G__43355;
continue;
} else {
var vec__43344 = cljs.core.first.call(null,seq__43337__$1);
var k = cljs.core.nth.call(null,vec__43344,(0),null);
var plugin = cljs.core.nth.call(null,vec__43344,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43356 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43337,chunk__43338,count__43339,i__43340,pl_43356,vec__43344,k,plugin,seq__43337__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43356.call(null,msg_hist);
});})(seq__43337,chunk__43338,count__43339,i__43340,pl_43356,vec__43344,k,plugin,seq__43337__$1,temp__4657__auto__))
);
} else {
}


var G__43357 = cljs.core.next.call(null,seq__43337__$1);
var G__43358 = null;
var G__43359 = (0);
var G__43360 = (0);
seq__43337 = G__43357;
chunk__43338 = G__43358;
count__43339 = G__43359;
i__43340 = G__43360;
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
var G__43362 = arguments.length;
switch (G__43362) {
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

var seq__43363_43368 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43364_43369 = null;
var count__43365_43370 = (0);
var i__43366_43371 = (0);
while(true){
if((i__43366_43371 < count__43365_43370)){
var msg_43372 = cljs.core._nth.call(null,chunk__43364_43369,i__43366_43371);
figwheel.client.socket.handle_incoming_message.call(null,msg_43372);


var G__43373 = seq__43363_43368;
var G__43374 = chunk__43364_43369;
var G__43375 = count__43365_43370;
var G__43376 = (i__43366_43371 + (1));
seq__43363_43368 = G__43373;
chunk__43364_43369 = G__43374;
count__43365_43370 = G__43375;
i__43366_43371 = G__43376;
continue;
} else {
var temp__4657__auto___43377 = cljs.core.seq.call(null,seq__43363_43368);
if(temp__4657__auto___43377){
var seq__43363_43378__$1 = temp__4657__auto___43377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43363_43378__$1)){
var c__4319__auto___43379 = cljs.core.chunk_first.call(null,seq__43363_43378__$1);
var G__43380 = cljs.core.chunk_rest.call(null,seq__43363_43378__$1);
var G__43381 = c__4319__auto___43379;
var G__43382 = cljs.core.count.call(null,c__4319__auto___43379);
var G__43383 = (0);
seq__43363_43368 = G__43380;
chunk__43364_43369 = G__43381;
count__43365_43370 = G__43382;
i__43366_43371 = G__43383;
continue;
} else {
var msg_43384 = cljs.core.first.call(null,seq__43363_43378__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43384);


var G__43385 = cljs.core.next.call(null,seq__43363_43378__$1);
var G__43386 = null;
var G__43387 = (0);
var G__43388 = (0);
seq__43363_43368 = G__43385;
chunk__43364_43369 = G__43386;
count__43365_43370 = G__43387;
i__43366_43371 = G__43388;
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
var len__4499__auto___43393 = arguments.length;
var i__4500__auto___43394 = (0);
while(true){
if((i__4500__auto___43394 < len__4499__auto___43393)){
args__4502__auto__.push((arguments[i__4500__auto___43394]));

var G__43395 = (i__4500__auto___43394 + (1));
i__4500__auto___43394 = G__43395;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43390){
var map__43391 = p__43390;
var map__43391__$1 = ((((!((map__43391 == null)))?(((((map__43391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43391):map__43391);
var opts = map__43391__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43389){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43389));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43396){if((e43396 instanceof Error)){
var e = e43396;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43396;

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
return (function (p__43397){
var map__43398 = p__43397;
var map__43398__$1 = ((((!((map__43398 == null)))?(((((map__43398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43398):map__43398);
var msg_name = cljs.core.get.call(null,map__43398__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1548321689783
