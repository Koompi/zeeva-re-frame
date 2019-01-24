// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__26902){
var map__26903 = p__26902;
var map__26903__$1 = ((((!((map__26903 == null)))?(((((map__26903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26903):map__26903);
var args = map__26903__$1;
var on_change = cljs.core.get.call(null,map__26903__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__26903__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__26903__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__26903__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__26903__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__26903__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__26903__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__26905 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__3922__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__26905,external_model_value);
} else {
return G__26905;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__26906,event){
var map__26907 = p__26906;
var map__26907__$1 = ((((!((map__26907 == null)))?(((((map__26907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26907):map__26907);
var state = map__26907__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__26907__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__26907__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__26909 = event;
var G__26909__$1 = (((G__26909 instanceof cljs.core.Keyword))?G__26909.fqn:null);
switch (G__26909__$1) {
case "input-text-blurred":
var and__3911__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__3911__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__3922__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26909__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__26911,event){
var map__26912 = p__26911;
var map__26912__$1 = ((((!((map__26912 == null)))?(((((map__26912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26912):map__26912);
var state = map__26912__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__26912__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__26914 = event;
var G__26914__$1 = (((G__26914 instanceof cljs.core.Keyword))?G__26914.fqn:null);
switch (G__26914__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__26916,new_value){
var map__26917 = p__26916;
var map__26917__$1 = ((((!((map__26917 == null)))?(((((map__26917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26917):map__26917);
var state = map__26917__$1;
var on_change = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__26919,suggestion){
var map__26920 = p__26919;
var map__26920__$1 = ((((!((map__26920 == null)))?(((((map__26920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26920):map__26920);
var state = map__26920__$1;
var suggestion_to_string = cljs.core.get.call(null,map__26920__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__26922 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__26922,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__26922;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__26923,index){
var map__26924 = p__26923;
var map__26924__$1 = ((((!((map__26924 == null)))?(((((map__26924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26924):map__26924);
var state = map__26924__$1;
var suggestions = cljs.core.get.call(null,map__26924__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__26926 = state;
var G__26926__$1 = cljs.core.assoc.call(null,G__26926,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__26926__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__26926__$1,suggestion):G__26926__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__26926__$2,suggestion);
} else {
return G__26926__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__26927,index){
var map__26928 = p__26927;
var map__26928__$1 = ((((!((map__26928 == null)))?(((((map__26928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26928):map__26928);
var state = map__26928__$1;
var suggestions = cljs.core.get.call(null,map__26928__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__26930){
var map__26931 = p__26930;
var map__26931__$1 = ((((!((map__26931 == null)))?(((((map__26931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26931):map__26931);
var state = map__26931__$1;
var suggestion_active_index = cljs.core.get.call(null,map__26931__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__26933 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__26933,suggestion_active_index);
} else {
return G__26933;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__26934){
var map__26935 = p__26934;
var map__26935__$1 = ((((!((map__26935 == null)))?(((((map__26935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26935):map__26935);
var state = map__26935__$1;
var suggestions = cljs.core.get.call(null,map__26935__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__26935__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__26937 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__26937,re_com.typeahead.wrap.call(null,((function (){var or__3922__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__26937;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__26938){
var map__26939 = p__26938;
var map__26939__$1 = ((((!((map__26939 == null)))?(((((map__26939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26939):map__26939);
var state = map__26939__$1;
var suggestions = cljs.core.get.call(null,map__26939__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__26939__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__26941 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__26941,re_com.typeahead.wrap.call(null,((function (){var or__3922__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__26941;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__26942 = state;
var G__26942__$1 = re_com.typeahead.clear_suggestions.call(null,G__26942)
;
var G__26942__$2 = cljs.core.assoc.call(null,G__26942__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__26942__$2,null);
} else {
return G__26942__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__26943){
var map__26944 = p__26943;
var map__26944__$1 = ((((!((map__26944 == null)))?(((((map__26944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26944):map__26944);
var state = map__26944__$1;
var input_text = cljs.core.get.call(null,map__26944__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__26944__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__26946 = state;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__3911__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__3911__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__26946,input_text);
} else {
return G__26946;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__26947_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__26947_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__22784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto__){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto__){
return (function (state_26964){
var state_val_26965 = (state_26964[(1)]);
if((state_val_26965 === (1))){
var state_26964__$1 = state_26964;
var statearr_26966_26978 = state_26964__$1;
(statearr_26966_26978[(2)] = null);

(statearr_26966_26978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (2))){
var state_26964__$1 = state_26964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26964__$1,(4),c_search);
} else {
if((state_val_26965 === (3))){
var inst_26962 = (state_26964[(2)]);
var state_26964__$1 = state_26964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26964__$1,inst_26962);
} else {
if((state_val_26965 === (4))){
var inst_26950 = (state_26964[(7)]);
var inst_26950__$1 = (state_26964[(2)]);
var inst_26951 = cljs.core.deref.call(null,state_atom);
var inst_26952 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_26951);
var inst_26953 = cljs.core._EQ_.call(null,"",inst_26950__$1);
var state_26964__$1 = (function (){var statearr_26967 = state_26964;
(statearr_26967[(8)] = inst_26952);

(statearr_26967[(7)] = inst_26950__$1);

return statearr_26967;
})();
if(inst_26953){
var statearr_26968_26979 = state_26964__$1;
(statearr_26968_26979[(1)] = (5));

} else {
var statearr_26969_26980 = state_26964__$1;
(statearr_26969_26980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (5))){
var inst_26955 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_26964__$1 = state_26964;
var statearr_26970_26981 = state_26964__$1;
(statearr_26970_26981[(2)] = inst_26955);

(statearr_26970_26981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (6))){
var inst_26952 = (state_26964[(8)]);
var inst_26950 = (state_26964[(7)]);
var inst_26957 = re_com.typeahead.search_data_source_BANG_.call(null,inst_26952,state_atom,inst_26950);
var state_26964__$1 = state_26964;
var statearr_26971_26982 = state_26964__$1;
(statearr_26971_26982[(2)] = inst_26957);

(statearr_26971_26982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26965 === (7))){
var inst_26959 = (state_26964[(2)]);
var state_26964__$1 = (function (){var statearr_26972 = state_26964;
(statearr_26972[(9)] = inst_26959);

return statearr_26972;
})();
var statearr_26973_26983 = state_26964__$1;
(statearr_26973_26983[(2)] = null);

(statearr_26973_26983[(1)] = (2));


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
});})(c__22784__auto__))
;
return ((function (switch__22629__auto__,c__22784__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto____0 = (function (){
var statearr_26974 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26974[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto__);

(statearr_26974[(1)] = (1));

return statearr_26974;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto____1 = (function (state_26964){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_26964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e26975){if((e26975 instanceof Object)){
var ex__22633__auto__ = e26975;
var statearr_26976_26984 = state_26964;
(statearr_26976_26984[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26985 = state_26964;
state_26964 = G__26985;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto__ = function(state_26964){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto____1.call(this,state_26964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto__))
})();
var state__22786__auto__ = (function (){var statearr_26977 = f__22785__auto__.call(null);
(statearr_26977[(6)] = c__22784__auto__);

return statearr_26977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto__))
);

return c__22784__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__26987 = cljs.core.deref.call(null,state_atom);
var map__26987__$1 = ((((!((map__26987 == null)))?(((((map__26987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26987):map__26987);
var state = map__26987__$1;
var input_text = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__26987,map__26987__$1,state,input_text,c_input){
return (function (p1__26986_SHARP_){
var G__26989 = p1__26986_SHARP_;
var G__26989__$1 = cljs.core.assoc.call(null,G__26989,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__26989__$1,new_text);
} else {
return G__26989__$1;
}
});})(map__26987,map__26987__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__26990 = cljs.core._EQ_;
var expr__26991 = event.which;
if(cljs.core.truth_(pred__26990.call(null,goog.events.KeyCodes.UP,expr__26991))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__26990.call(null,goog.events.KeyCodes.DOWN,expr__26991))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__26990.call(null,goog.events.KeyCodes.ENTER,expr__26991))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__26990.call(null,goog.events.KeyCodes.ESC,expr__26991))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__26990.call(null,goog.events.KeyCodes.TAB,expr__26991))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27015 = arguments.length;
var i__4500__auto___27016 = (0);
while(true){
if((i__4500__auto___27016 < len__4499__auto___27015)){
args__4502__auto__.push((arguments[i__4500__auto___27016]));

var G__27017 = (i__4500__auto___27016 + (1));
i__4500__auto___27016 = G__27017;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__26995){
var map__26996 = p__26995;
var map__26996__$1 = ((((!((map__26996 == null)))?(((((map__26996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26996):map__26996);
var args = map__26996__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__26998 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__26998__$1 = ((((!((map__26998 == null)))?(((((map__26998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26998):map__26998);
var state = map__26998__$1;
var c_search = cljs.core.get.call(null,map__26998__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__26998__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args){
return (function() { 
var G__27018__delegate = function (p__27000){
var map__27001 = p__27000;
var map__27001__$1 = ((((!((map__27001 == null)))?(((((map__27001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27001):map__27001);
var args__$1 = map__27001__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__27001__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__27003 = cljs.core.deref.call(null,state_atom);
var map__27003__$1 = ((((!((map__27003 == null)))?(((((map__27003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27003):map__27003);
var state__$1 = map__27003__$1;
var suggestions = cljs.core.get.call(null,map__27003__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__27003__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__27003__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__27003__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__3922__auto__ = width;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4292__auto__ = ((function (map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args){
return (function re_com$typeahead$iter__27005(s__27006){
return (new cljs.core.LazySeq(null,((function (map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args){
return (function (){
var s__27006__$1 = s__27006;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27006__$1);
if(temp__4657__auto__){
var s__27006__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27006__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27006__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27008 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27007 = (0);
while(true){
if((i__27007 < size__4291__auto__)){
var vec__27009 = cljs.core._nth.call(null,c__4290__auto__,i__27007);
var i = cljs.core.nth.call(null,vec__27009,(0),null);
var s = cljs.core.nth.call(null,vec__27009,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__27008,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__27007,selected_QMARK_,vec__27009,i,s,c__4290__auto__,size__4291__auto__,b__27008,s__27006__$2,temp__4657__auto__,map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__27007,selected_QMARK_,vec__27009,i,s,c__4290__auto__,size__4291__auto__,b__27008,s__27006__$2,temp__4657__auto__,map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__27007,selected_QMARK_,vec__27009,i,s,c__4290__auto__,size__4291__auto__,b__27008,s__27006__$2,temp__4657__auto__,map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args){
return (function (p1__26993_SHARP_){
p1__26993_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__27007,selected_QMARK_,vec__27009,i,s,c__4290__auto__,size__4291__auto__,b__27008,s__27006__$2,temp__4657__auto__,map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__27019 = (i__27007 + (1));
i__27007 = G__27019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27008),re_com$typeahead$iter__27005.call(null,cljs.core.chunk_rest.call(null,s__27006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27008),null);
}
} else {
var vec__27012 = cljs.core.first.call(null,s__27006__$2);
var i = cljs.core.nth.call(null,vec__27012,(0),null);
var s = cljs.core.nth.call(null,vec__27012,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__27012,i,s,s__27006__$2,temp__4657__auto__,map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__27012,i,s,s__27006__$2,temp__4657__auto__,map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__27012,i,s,s__27006__$2,temp__4657__auto__,map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args){
return (function (p1__26993_SHARP_){
p1__26993_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__27012,i,s,s__27006__$2,temp__4657__auto__,map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__27005.call(null,cljs.core.rest.call(null,s__27006__$2)));
}
} else {
return null;
}
break;
}
});})(map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args))
,null,null));
});})(map__27003,map__27003__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27001,map__27001__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args))
;
return iter__4292__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__27018 = function (var_args){
var p__27000 = null;
if (arguments.length > 0) {
var G__27020__i = 0, G__27020__a = new Array(arguments.length -  0);
while (G__27020__i < G__27020__a.length) {G__27020__a[G__27020__i] = arguments[G__27020__i + 0]; ++G__27020__i;}
  p__27000 = new cljs.core.IndexedSeq(G__27020__a,0,null);
} 
return G__27018__delegate.call(this,p__27000);};
G__27018.cljs$lang$maxFixedArity = 0;
G__27018.cljs$lang$applyTo = (function (arglist__27021){
var p__27000 = cljs.core.seq(arglist__27021);
return G__27018__delegate(p__27000);
});
G__27018.cljs$core$IFn$_invoke$arity$variadic = G__27018__delegate;
return G__27018;
})()
;
;})(map__26998,map__26998__$1,state,c_search,c_input,state_atom,input_text_model,map__26996,map__26996__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq26994){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26994));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__22784__auto___27102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___27102,out){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___27102,out){
return (function (state_27072){
var state_val_27073 = (state_27072[(1)]);
if((state_val_27073 === (7))){
var inst_27027 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27074_27103 = state_27072__$1;
(statearr_27074_27103[(2)] = inst_27027);

(statearr_27074_27103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (1))){
var inst_27022 = null;
var state_27072__$1 = (function (){var statearr_27075 = state_27072;
(statearr_27075[(7)] = inst_27022);

return statearr_27075;
})();
var statearr_27076_27104 = state_27072__$1;
(statearr_27076_27104[(2)] = null);

(statearr_27076_27104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (4))){
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27072__$1,(7),in$);
} else {
if((state_val_27073 === (15))){
var inst_27057 = (state_27072[(2)]);
var state_27072__$1 = (function (){var statearr_27077 = state_27072;
(statearr_27077[(8)] = inst_27057);

return statearr_27077;
})();
var statearr_27078_27105 = state_27072__$1;
(statearr_27078_27105[(2)] = null);

(statearr_27078_27105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (13))){
var inst_27045 = (state_27072[(9)]);
var inst_27059 = cljs.core._EQ_.call(null,inst_27045,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_27072__$1 = state_27072;
if(inst_27059){
var statearr_27079_27106 = state_27072__$1;
(statearr_27079_27106[(1)] = (16));

} else {
var statearr_27080_27107 = state_27072__$1;
(statearr_27080_27107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (6))){
var inst_27031 = (state_27072[(10)]);
var inst_27030 = (state_27072[(2)]);
var inst_27031__$1 = cljs.core.async.timeout.call(null,ms);
var inst_27039 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27040 = [in$,inst_27031__$1];
var inst_27041 = (new cljs.core.PersistentVector(null,2,(5),inst_27039,inst_27040,null));
var state_27072__$1 = (function (){var statearr_27081 = state_27072;
(statearr_27081[(11)] = inst_27030);

(statearr_27081[(10)] = inst_27031__$1);

return statearr_27081;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27072__$1,(8),inst_27041);
} else {
if((state_val_27073 === (17))){
var state_27072__$1 = state_27072;
var statearr_27082_27108 = state_27072__$1;
(statearr_27082_27108[(2)] = null);

(statearr_27082_27108[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (3))){
var inst_27070 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27072__$1,inst_27070);
} else {
if((state_val_27073 === (12))){
var inst_27030 = (state_27072[(11)]);
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27072__$1,(15),out,inst_27030);
} else {
if((state_val_27073 === (2))){
var inst_27022 = (state_27072[(7)]);
var inst_27024 = (inst_27022 == null);
var state_27072__$1 = state_27072;
if(cljs.core.truth_(inst_27024)){
var statearr_27083_27109 = state_27072__$1;
(statearr_27083_27109[(1)] = (4));

} else {
var statearr_27084_27110 = state_27072__$1;
(statearr_27084_27110[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (11))){
var inst_27067 = (state_27072[(2)]);
var inst_27022 = inst_27067;
var state_27072__$1 = (function (){var statearr_27085 = state_27072;
(statearr_27085[(7)] = inst_27022);

return statearr_27085;
})();
var statearr_27086_27111 = state_27072__$1;
(statearr_27086_27111[(2)] = null);

(statearr_27086_27111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (9))){
var inst_27043 = (state_27072[(12)]);
var inst_27051 = cljs.core.nth.call(null,inst_27043,(0),null);
var inst_27052 = cljs.core.nth.call(null,inst_27043,(1),null);
var state_27072__$1 = (function (){var statearr_27087 = state_27072;
(statearr_27087[(13)] = inst_27052);

return statearr_27087;
})();
var statearr_27088_27112 = state_27072__$1;
(statearr_27088_27112[(2)] = inst_27051);

(statearr_27088_27112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (5))){
var inst_27022 = (state_27072[(7)]);
var state_27072__$1 = state_27072;
var statearr_27089_27113 = state_27072__$1;
(statearr_27089_27113[(2)] = inst_27022);

(statearr_27089_27113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (14))){
var inst_27065 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27090_27114 = state_27072__$1;
(statearr_27090_27114[(2)] = inst_27065);

(statearr_27090_27114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (16))){
var inst_27044 = (state_27072[(14)]);
var state_27072__$1 = state_27072;
var statearr_27091_27115 = state_27072__$1;
(statearr_27091_27115[(2)] = inst_27044);

(statearr_27091_27115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (10))){
var inst_27031 = (state_27072[(10)]);
var inst_27045 = (state_27072[(9)]);
var inst_27054 = cljs.core._EQ_.call(null,inst_27045,inst_27031);
var state_27072__$1 = state_27072;
if(inst_27054){
var statearr_27092_27116 = state_27072__$1;
(statearr_27092_27116[(1)] = (12));

} else {
var statearr_27093_27117 = state_27072__$1;
(statearr_27093_27117[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (18))){
var inst_27063 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27094_27118 = state_27072__$1;
(statearr_27094_27118[(2)] = inst_27063);

(statearr_27094_27118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (8))){
var inst_27043 = (state_27072[(12)]);
var inst_27045 = (state_27072[(9)]);
var inst_27043__$1 = (state_27072[(2)]);
var inst_27044 = cljs.core.nth.call(null,inst_27043__$1,(0),null);
var inst_27045__$1 = cljs.core.nth.call(null,inst_27043__$1,(1),null);
var inst_27046 = cljs.core._EQ_.call(null,inst_27045__$1,in$);
var state_27072__$1 = (function (){var statearr_27095 = state_27072;
(statearr_27095[(14)] = inst_27044);

(statearr_27095[(12)] = inst_27043__$1);

(statearr_27095[(9)] = inst_27045__$1);

return statearr_27095;
})();
if(inst_27046){
var statearr_27096_27119 = state_27072__$1;
(statearr_27096_27119[(1)] = (9));

} else {
var statearr_27097_27120 = state_27072__$1;
(statearr_27097_27120[(1)] = (10));

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
}
});})(c__22784__auto___27102,out))
;
return ((function (switch__22629__auto__,c__22784__auto___27102,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__22630__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__22630__auto____0 = (function (){
var statearr_27098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27098[(0)] = re_com$typeahead$debounce_$_state_machine__22630__auto__);

(statearr_27098[(1)] = (1));

return statearr_27098;
});
var re_com$typeahead$debounce_$_state_machine__22630__auto____1 = (function (state_27072){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_27072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e27099){if((e27099 instanceof Object)){
var ex__22633__auto__ = e27099;
var statearr_27100_27121 = state_27072;
(statearr_27100_27121[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27122 = state_27072;
state_27072 = G__27122;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__22630__auto__ = function(state_27072){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__22630__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__22630__auto____1.call(this,state_27072);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__22630__auto____0;
re_com$typeahead$debounce_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__22630__auto____1;
return re_com$typeahead$debounce_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___27102,out))
})();
var state__22786__auto__ = (function (){var statearr_27101 = f__22785__auto__.call(null);
(statearr_27101[(6)] = c__22784__auto___27102);

return statearr_27101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___27102,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1548321613222
