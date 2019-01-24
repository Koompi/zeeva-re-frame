// Compiled by ClojureScript 1.10.238 {}
goog.provide('devtools.formatters.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.format');
goog.require('devtools.protocols');
goog.require('devtools.reporter');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.markup');
goog.require('devtools.formatters.budgeting');
devtools.formatters.core.want_value_QMARK__STAR_ = (function devtools$formatters$core$want_value_QMARK__STAR_(value){
var and__3911__auto__ = cljs.core.not.call(null,devtools.formatters.state.prevent_recursion_QMARK_.call(null));
if(and__3911__auto__){
var or__3922__auto__ = devtools.formatters.helpers.cljs_value_QMARK_.call(null,value);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return devtools.formatters.templating.surrogate_QMARK_.call(null,value);
}
} else {
return and__3911__auto__;
}
});
devtools.formatters.core.header_STAR_ = (function devtools$formatters$core$header_STAR_(value){
var json_ml = (cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))?devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_header_GT_.call(null,value)):(cljs.core.truth_((function (){try{if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e33865){var _e__31770__auto__ = e33865;
return false;
}})())?devtools.format._header.call(null,value):(cljs.core.truth_((function (){try{if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
}catch (e33867){var _e__31770__auto__ = e33867;
return false;
}})())?devtools.protocols._header.call(null,value):devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_GT_.call(null,value))
)));
return devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_.call(null,value,json_ml);
});
devtools.formatters.core.has_body_STAR_ = (function devtools$formatters$core$has_body_STAR_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.was_over_budget_QMARK__BANG_.call(null,value))){
return false;
} else {
return cljs.core.boolean$.call(null,(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))?!((devtools.formatters.templating.get_surrogate_body.call(null,value) == null)):(cljs.core.truth_((function (){try{if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e33869){var _e__31770__auto__ = e33869;
return false;
}})())?devtools.format._has_body.call(null,value):(cljs.core.truth_((function (){try{if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
}catch (e33871){var _e__31770__auto__ = e33871;
return false;
}})())?devtools.protocols._has_body.call(null,value):false
))));
}
});
devtools.formatters.core.body_STAR_ = (function devtools$formatters$core$body_STAR_(value){
devtools.formatters.state.update_current_state_BANG_.call(null,devtools.formatters.state.reset_depth_limits);

if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_body_GT_.call(null,value));
} else {
if(cljs.core.truth_((function (){try{if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e33873){var _e__31770__auto__ = e33873;
return false;
}})())){
return devtools.format._body.call(null,value);
} else {
if(cljs.core.truth_((function (){try{if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
}catch (e33875){var _e__31770__auto__ = e33875;
return false;
}})())){
return devtools.protocols._body.call(null,value);
} else {
return null;
}
}
}
});
devtools.formatters.core.config_wrapper = (function devtools$formatters$core$config_wrapper(raw_fn){
return (function (value,config){
var _STAR_current_state_STAR_33877 = devtools.formatters.state._STAR_current_state_STAR_;
devtools.formatters.state._STAR_current_state_STAR_ = (function (){var or__3922__auto__ = config;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return devtools.formatters.state.get_default_state.call(null);
}
})();

try{return raw_fn.call(null,value);
}finally {devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR_33877;
}});
});
devtools.formatters.core.want_value_QMARK_ = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.want_value_QMARK__STAR_);
devtools.formatters.core.header = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.header_STAR_);
devtools.formatters.core.has_body = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.has_body_STAR_);
devtools.formatters.core.body = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.body_STAR_);
devtools.formatters.core.wrap_with_exception_guard = (function devtools$formatters$core$wrap_with_exception_guard(f){
return (function() { 
var G__33879__delegate = function (args){
try{return cljs.core.apply.call(null,f,args);
}catch (e33878){var e = e33878;
devtools.reporter.report_internal_error_BANG_.call(null,e,"an exception was raised during value formatting");

return null;
}};
var G__33879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33880__i = 0, G__33880__a = new Array(arguments.length -  0);
while (G__33880__i < G__33880__a.length) {G__33880__a[G__33880__i] = arguments[G__33880__i + 0]; ++G__33880__i;}
  args = new cljs.core.IndexedSeq(G__33880__a,0,null);
} 
return G__33879__delegate.call(this,args);};
G__33879.cljs$lang$maxFixedArity = 0;
G__33879.cljs$lang$applyTo = (function (arglist__33881){
var args = cljs.core.seq(arglist__33881);
return G__33879__delegate(args);
});
G__33879.cljs$core$IFn$_invoke$arity$variadic = G__33879__delegate;
return G__33879;
})()
;
});
devtools.formatters.core.build_api_call = (function devtools$formatters$core$build_api_call(raw_fn,pre_handler_key,post_handler_key){

var handler = (function (value,config){
var pre_handler = (function (){var or__3922__auto__ = devtools.prefs.pref.call(null,pre_handler_key);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.identity;
}
})();
var post_handler = (function (){var or__3922__auto__ = devtools.prefs.pref.call(null,post_handler_key);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.identity;
}
})();
var preprocessed_value = pre_handler.call(null,value);
var result = (cljs.core.truth_(devtools.formatters.core.want_value_QMARK_.call(null,preprocessed_value,config))?raw_fn.call(null,preprocessed_value,config):null);
return post_handler.call(null,result);
});
return devtools.formatters.core.wrap_with_exception_guard.call(null,handler);
});
devtools.formatters.core.header_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.header,new cljs.core.Keyword(null,"header-pre-handler","header-pre-handler",-1997722262),new cljs.core.Keyword(null,"header-post-handler","header-post-handler",514828618));
devtools.formatters.core.has_body_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.has_body,new cljs.core.Keyword(null,"has-body-pre-handler","has-body-pre-handler",1787020038),new cljs.core.Keyword(null,"has-body-post-handler","has-body-post-handler",-863451271));
devtools.formatters.core.body_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.body,new cljs.core.Keyword(null,"body-pre-handler","body-pre-handler",1211926529),new cljs.core.Keyword(null,"body-post-handler","body-post-handler",-1040905424));

//# sourceMappingURL=core.js.map?rel=1548321657119
