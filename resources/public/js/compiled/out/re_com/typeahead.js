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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__23804){
var map__23805 = p__23804;
var map__23805__$1 = ((((!((map__23805 == null)))?(((((map__23805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23805):map__23805);
var args = map__23805__$1;
var on_change = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__23807 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__3922__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__23807,external_model_value);
} else {
return G__23807;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__23808,event){
var map__23809 = p__23808;
var map__23809__$1 = ((((!((map__23809 == null)))?(((((map__23809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23809):map__23809);
var state = map__23809__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__23809__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__23809__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__23811 = event;
var G__23811__$1 = (((G__23811 instanceof cljs.core.Keyword))?G__23811.fqn:null);
switch (G__23811__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23811__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__23813,event){
var map__23814 = p__23813;
var map__23814__$1 = ((((!((map__23814 == null)))?(((((map__23814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23814):map__23814);
var state = map__23814__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__23814__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__23816 = event;
var G__23816__$1 = (((G__23816 instanceof cljs.core.Keyword))?G__23816.fqn:null);
switch (G__23816__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__23818,new_value){
var map__23819 = p__23818;
var map__23819__$1 = ((((!((map__23819 == null)))?(((((map__23819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23819):map__23819);
var state = map__23819__$1;
var on_change = cljs.core.get.call(null,map__23819__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__23821,suggestion){
var map__23822 = p__23821;
var map__23822__$1 = ((((!((map__23822 == null)))?(((((map__23822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23822):map__23822);
var state = map__23822__$1;
var suggestion_to_string = cljs.core.get.call(null,map__23822__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__23824 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__23824,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__23824;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__23825,index){
var map__23826 = p__23825;
var map__23826__$1 = ((((!((map__23826 == null)))?(((((map__23826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23826):map__23826);
var state = map__23826__$1;
var suggestions = cljs.core.get.call(null,map__23826__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__23828 = state;
var G__23828__$1 = cljs.core.assoc.call(null,G__23828,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__23828__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__23828__$1,suggestion):G__23828__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__23828__$2,suggestion);
} else {
return G__23828__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__23829,index){
var map__23830 = p__23829;
var map__23830__$1 = ((((!((map__23830 == null)))?(((((map__23830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23830):map__23830);
var state = map__23830__$1;
var suggestions = cljs.core.get.call(null,map__23830__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__23832){
var map__23833 = p__23832;
var map__23833__$1 = ((((!((map__23833 == null)))?(((((map__23833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23833):map__23833);
var state = map__23833__$1;
var suggestion_active_index = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__23835 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__23835,suggestion_active_index);
} else {
return G__23835;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__23836){
var map__23837 = p__23836;
var map__23837__$1 = ((((!((map__23837 == null)))?(((((map__23837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23837):map__23837);
var state = map__23837__$1;
var suggestions = cljs.core.get.call(null,map__23837__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__23837__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__23839 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__23839,re_com.typeahead.wrap.call(null,((function (){var or__3922__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__23839;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__23840){
var map__23841 = p__23840;
var map__23841__$1 = ((((!((map__23841 == null)))?(((((map__23841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23841):map__23841);
var state = map__23841__$1;
var suggestions = cljs.core.get.call(null,map__23841__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__23841__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__23843 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__23843,re_com.typeahead.wrap.call(null,((function (){var or__3922__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__23843;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__23844 = state;
var G__23844__$1 = re_com.typeahead.clear_suggestions.call(null,G__23844)
;
var G__23844__$2 = cljs.core.assoc.call(null,G__23844__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__23844__$2,null);
} else {
return G__23844__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__23845){
var map__23846 = p__23845;
var map__23846__$1 = ((((!((map__23846 == null)))?(((((map__23846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23846):map__23846);
var state = map__23846__$1;
var input_text = cljs.core.get.call(null,map__23846__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__23846__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__23848 = state;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__3911__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__3911__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__23848,input_text);
} else {
return G__23848;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__23849_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__23849_SHARP_);
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
var c__21834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto__){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto__){
return (function (state_23866){
var state_val_23867 = (state_23866[(1)]);
if((state_val_23867 === (1))){
var state_23866__$1 = state_23866;
var statearr_23868_23880 = state_23866__$1;
(statearr_23868_23880[(2)] = null);

(statearr_23868_23880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (2))){
var state_23866__$1 = state_23866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23866__$1,(4),c_search);
} else {
if((state_val_23867 === (3))){
var inst_23864 = (state_23866[(2)]);
var state_23866__$1 = state_23866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23866__$1,inst_23864);
} else {
if((state_val_23867 === (4))){
var inst_23852 = (state_23866[(7)]);
var inst_23852__$1 = (state_23866[(2)]);
var inst_23853 = cljs.core.deref.call(null,state_atom);
var inst_23854 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_23853);
var inst_23855 = cljs.core._EQ_.call(null,"",inst_23852__$1);
var state_23866__$1 = (function (){var statearr_23869 = state_23866;
(statearr_23869[(7)] = inst_23852__$1);

(statearr_23869[(8)] = inst_23854);

return statearr_23869;
})();
if(inst_23855){
var statearr_23870_23881 = state_23866__$1;
(statearr_23870_23881[(1)] = (5));

} else {
var statearr_23871_23882 = state_23866__$1;
(statearr_23871_23882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (5))){
var inst_23857 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_23866__$1 = state_23866;
var statearr_23872_23883 = state_23866__$1;
(statearr_23872_23883[(2)] = inst_23857);

(statearr_23872_23883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (6))){
var inst_23852 = (state_23866[(7)]);
var inst_23854 = (state_23866[(8)]);
var inst_23859 = re_com.typeahead.search_data_source_BANG_.call(null,inst_23854,state_atom,inst_23852);
var state_23866__$1 = state_23866;
var statearr_23873_23884 = state_23866__$1;
(statearr_23873_23884[(2)] = inst_23859);

(statearr_23873_23884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23867 === (7))){
var inst_23861 = (state_23866[(2)]);
var state_23866__$1 = (function (){var statearr_23874 = state_23866;
(statearr_23874[(9)] = inst_23861);

return statearr_23874;
})();
var statearr_23875_23885 = state_23866__$1;
(statearr_23875_23885[(2)] = null);

(statearr_23875_23885[(1)] = (2));


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
});})(c__21834__auto__))
;
return ((function (switch__21746__auto__,c__21834__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto____0 = (function (){
var statearr_23876 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23876[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto__);

(statearr_23876[(1)] = (1));

return statearr_23876;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto____1 = (function (state_23866){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_23866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e23877){if((e23877 instanceof Object)){
var ex__21750__auto__ = e23877;
var statearr_23878_23886 = state_23866;
(statearr_23878_23886[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23887 = state_23866;
state_23866 = G__23887;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto__ = function(state_23866){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto____1.call(this,state_23866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto__))
})();
var state__21836__auto__ = (function (){var statearr_23879 = f__21835__auto__.call(null);
(statearr_23879[(6)] = c__21834__auto__);

return statearr_23879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto__))
);

return c__21834__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__23889 = cljs.core.deref.call(null,state_atom);
var map__23889__$1 = ((((!((map__23889 == null)))?(((((map__23889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23889):map__23889);
var state = map__23889__$1;
var input_text = cljs.core.get.call(null,map__23889__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__23889__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__23889,map__23889__$1,state,input_text,c_input){
return (function (p1__23888_SHARP_){
var G__23891 = p1__23888_SHARP_;
var G__23891__$1 = cljs.core.assoc.call(null,G__23891,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__23891__$1,new_text);
} else {
return G__23891__$1;
}
});})(map__23889,map__23889__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__23892 = cljs.core._EQ_;
var expr__23893 = event.which;
if(cljs.core.truth_(pred__23892.call(null,goog.events.KeyCodes.UP,expr__23893))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__23892.call(null,goog.events.KeyCodes.DOWN,expr__23893))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__23892.call(null,goog.events.KeyCodes.ENTER,expr__23893))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__23892.call(null,goog.events.KeyCodes.ESC,expr__23893))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__23892.call(null,goog.events.KeyCodes.TAB,expr__23893))){
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
var len__4499__auto___23917 = arguments.length;
var i__4500__auto___23918 = (0);
while(true){
if((i__4500__auto___23918 < len__4499__auto___23917)){
args__4502__auto__.push((arguments[i__4500__auto___23918]));

var G__23919 = (i__4500__auto___23918 + (1));
i__4500__auto___23918 = G__23919;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__23897){
var map__23898 = p__23897;
var map__23898__$1 = ((((!((map__23898 == null)))?(((((map__23898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23898):map__23898);
var args = map__23898__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__23900 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__23900__$1 = ((((!((map__23900 == null)))?(((((map__23900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23900):map__23900);
var state = map__23900__$1;
var c_search = cljs.core.get.call(null,map__23900__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__23900__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args){
return (function() { 
var G__23920__delegate = function (p__23902){
var map__23903 = p__23902;
var map__23903__$1 = ((((!((map__23903 == null)))?(((((map__23903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23903):map__23903);
var args__$1 = map__23903__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__23903__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__23905 = cljs.core.deref.call(null,state_atom);
var map__23905__$1 = ((((!((map__23905 == null)))?(((((map__23905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23905):map__23905);
var state__$1 = map__23905__$1;
var suggestions = cljs.core.get.call(null,map__23905__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__23905__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__23905__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__23905__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
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
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4292__auto__ = ((function (map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args){
return (function re_com$typeahead$iter__23907(s__23908){
return (new cljs.core.LazySeq(null,((function (map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args){
return (function (){
var s__23908__$1 = s__23908;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23908__$1);
if(temp__4657__auto__){
var s__23908__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23908__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23908__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23910 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23909 = (0);
while(true){
if((i__23909 < size__4291__auto__)){
var vec__23911 = cljs.core._nth.call(null,c__4290__auto__,i__23909);
var i = cljs.core.nth.call(null,vec__23911,(0),null);
var s = cljs.core.nth.call(null,vec__23911,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__23910,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__23909,selected_QMARK_,vec__23911,i,s,c__4290__auto__,size__4291__auto__,b__23910,s__23908__$2,temp__4657__auto__,map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__23909,selected_QMARK_,vec__23911,i,s,c__4290__auto__,size__4291__auto__,b__23910,s__23908__$2,temp__4657__auto__,map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__23909,selected_QMARK_,vec__23911,i,s,c__4290__auto__,size__4291__auto__,b__23910,s__23908__$2,temp__4657__auto__,map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args){
return (function (p1__23895_SHARP_){
p1__23895_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__23909,selected_QMARK_,vec__23911,i,s,c__4290__auto__,size__4291__auto__,b__23910,s__23908__$2,temp__4657__auto__,map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__23921 = (i__23909 + (1));
i__23909 = G__23921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23910),re_com$typeahead$iter__23907.call(null,cljs.core.chunk_rest.call(null,s__23908__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23910),null);
}
} else {
var vec__23914 = cljs.core.first.call(null,s__23908__$2);
var i = cljs.core.nth.call(null,vec__23914,(0),null);
var s = cljs.core.nth.call(null,vec__23914,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__23914,i,s,s__23908__$2,temp__4657__auto__,map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__23914,i,s,s__23908__$2,temp__4657__auto__,map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__23914,i,s,s__23908__$2,temp__4657__auto__,map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args){
return (function (p1__23895_SHARP_){
p1__23895_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__23914,i,s,s__23908__$2,temp__4657__auto__,map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__23907.call(null,cljs.core.rest.call(null,s__23908__$2)));
}
} else {
return null;
}
break;
}
});})(map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args))
,null,null));
});})(map__23905,map__23905__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__23903,map__23903__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args))
;
return iter__4292__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__23920 = function (var_args){
var p__23902 = null;
if (arguments.length > 0) {
var G__23922__i = 0, G__23922__a = new Array(arguments.length -  0);
while (G__23922__i < G__23922__a.length) {G__23922__a[G__23922__i] = arguments[G__23922__i + 0]; ++G__23922__i;}
  p__23902 = new cljs.core.IndexedSeq(G__23922__a,0,null);
} 
return G__23920__delegate.call(this,p__23902);};
G__23920.cljs$lang$maxFixedArity = 0;
G__23920.cljs$lang$applyTo = (function (arglist__23923){
var p__23902 = cljs.core.seq(arglist__23923);
return G__23920__delegate(p__23902);
});
G__23920.cljs$core$IFn$_invoke$arity$variadic = G__23920__delegate;
return G__23920;
})()
;
;})(map__23900,map__23900__$1,state,c_search,c_input,state_atom,input_text_model,map__23898,map__23898__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq23896){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23896));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__21834__auto___24004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___24004,out){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___24004,out){
return (function (state_23974){
var state_val_23975 = (state_23974[(1)]);
if((state_val_23975 === (7))){
var inst_23929 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23976_24005 = state_23974__$1;
(statearr_23976_24005[(2)] = inst_23929);

(statearr_23976_24005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (1))){
var inst_23924 = null;
var state_23974__$1 = (function (){var statearr_23977 = state_23974;
(statearr_23977[(7)] = inst_23924);

return statearr_23977;
})();
var statearr_23978_24006 = state_23974__$1;
(statearr_23978_24006[(2)] = null);

(statearr_23978_24006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (4))){
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(7),in$);
} else {
if((state_val_23975 === (15))){
var inst_23959 = (state_23974[(2)]);
var state_23974__$1 = (function (){var statearr_23979 = state_23974;
(statearr_23979[(8)] = inst_23959);

return statearr_23979;
})();
var statearr_23980_24007 = state_23974__$1;
(statearr_23980_24007[(2)] = null);

(statearr_23980_24007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (13))){
var inst_23947 = (state_23974[(9)]);
var inst_23961 = cljs.core._EQ_.call(null,inst_23947,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_23974__$1 = state_23974;
if(inst_23961){
var statearr_23981_24008 = state_23974__$1;
(statearr_23981_24008[(1)] = (16));

} else {
var statearr_23982_24009 = state_23974__$1;
(statearr_23982_24009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (6))){
var inst_23933 = (state_23974[(10)]);
var inst_23932 = (state_23974[(2)]);
var inst_23933__$1 = cljs.core.async.timeout.call(null,ms);
var inst_23941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23942 = [in$,inst_23933__$1];
var inst_23943 = (new cljs.core.PersistentVector(null,2,(5),inst_23941,inst_23942,null));
var state_23974__$1 = (function (){var statearr_23983 = state_23974;
(statearr_23983[(10)] = inst_23933__$1);

(statearr_23983[(11)] = inst_23932);

return statearr_23983;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23974__$1,(8),inst_23943);
} else {
if((state_val_23975 === (17))){
var state_23974__$1 = state_23974;
var statearr_23984_24010 = state_23974__$1;
(statearr_23984_24010[(2)] = null);

(statearr_23984_24010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (3))){
var inst_23972 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23974__$1,inst_23972);
} else {
if((state_val_23975 === (12))){
var inst_23932 = (state_23974[(11)]);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23974__$1,(15),out,inst_23932);
} else {
if((state_val_23975 === (2))){
var inst_23924 = (state_23974[(7)]);
var inst_23926 = (inst_23924 == null);
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23926)){
var statearr_23985_24011 = state_23974__$1;
(statearr_23985_24011[(1)] = (4));

} else {
var statearr_23986_24012 = state_23974__$1;
(statearr_23986_24012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (11))){
var inst_23969 = (state_23974[(2)]);
var inst_23924 = inst_23969;
var state_23974__$1 = (function (){var statearr_23987 = state_23974;
(statearr_23987[(7)] = inst_23924);

return statearr_23987;
})();
var statearr_23988_24013 = state_23974__$1;
(statearr_23988_24013[(2)] = null);

(statearr_23988_24013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (9))){
var inst_23945 = (state_23974[(12)]);
var inst_23953 = cljs.core.nth.call(null,inst_23945,(0),null);
var inst_23954 = cljs.core.nth.call(null,inst_23945,(1),null);
var state_23974__$1 = (function (){var statearr_23989 = state_23974;
(statearr_23989[(13)] = inst_23954);

return statearr_23989;
})();
var statearr_23990_24014 = state_23974__$1;
(statearr_23990_24014[(2)] = inst_23953);

(statearr_23990_24014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (5))){
var inst_23924 = (state_23974[(7)]);
var state_23974__$1 = state_23974;
var statearr_23991_24015 = state_23974__$1;
(statearr_23991_24015[(2)] = inst_23924);

(statearr_23991_24015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (14))){
var inst_23967 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23992_24016 = state_23974__$1;
(statearr_23992_24016[(2)] = inst_23967);

(statearr_23992_24016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (16))){
var inst_23946 = (state_23974[(14)]);
var state_23974__$1 = state_23974;
var statearr_23993_24017 = state_23974__$1;
(statearr_23993_24017[(2)] = inst_23946);

(statearr_23993_24017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (10))){
var inst_23947 = (state_23974[(9)]);
var inst_23933 = (state_23974[(10)]);
var inst_23956 = cljs.core._EQ_.call(null,inst_23947,inst_23933);
var state_23974__$1 = state_23974;
if(inst_23956){
var statearr_23994_24018 = state_23974__$1;
(statearr_23994_24018[(1)] = (12));

} else {
var statearr_23995_24019 = state_23974__$1;
(statearr_23995_24019[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (18))){
var inst_23965 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23996_24020 = state_23974__$1;
(statearr_23996_24020[(2)] = inst_23965);

(statearr_23996_24020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (8))){
var inst_23947 = (state_23974[(9)]);
var inst_23945 = (state_23974[(12)]);
var inst_23945__$1 = (state_23974[(2)]);
var inst_23946 = cljs.core.nth.call(null,inst_23945__$1,(0),null);
var inst_23947__$1 = cljs.core.nth.call(null,inst_23945__$1,(1),null);
var inst_23948 = cljs.core._EQ_.call(null,inst_23947__$1,in$);
var state_23974__$1 = (function (){var statearr_23997 = state_23974;
(statearr_23997[(9)] = inst_23947__$1);

(statearr_23997[(14)] = inst_23946);

(statearr_23997[(12)] = inst_23945__$1);

return statearr_23997;
})();
if(inst_23948){
var statearr_23998_24021 = state_23974__$1;
(statearr_23998_24021[(1)] = (9));

} else {
var statearr_23999_24022 = state_23974__$1;
(statearr_23999_24022[(1)] = (10));

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
});})(c__21834__auto___24004,out))
;
return ((function (switch__21746__auto__,c__21834__auto___24004,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__21747__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__21747__auto____0 = (function (){
var statearr_24000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24000[(0)] = re_com$typeahead$debounce_$_state_machine__21747__auto__);

(statearr_24000[(1)] = (1));

return statearr_24000;
});
var re_com$typeahead$debounce_$_state_machine__21747__auto____1 = (function (state_23974){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_23974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e24001){if((e24001 instanceof Object)){
var ex__21750__auto__ = e24001;
var statearr_24002_24023 = state_23974;
(statearr_24002_24023[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24024 = state_23974;
state_23974 = G__24024;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__21747__auto__ = function(state_23974){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__21747__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__21747__auto____1.call(this,state_23974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__21747__auto____0;
re_com$typeahead$debounce_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__21747__auto____1;
return re_com$typeahead$debounce_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___24004,out))
})();
var state__21836__auto__ = (function (){var statearr_24003 = f__21835__auto__.call(null);
(statearr_24003[(6)] = c__21834__auto___24004);

return statearr_24003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___24004,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1548216504304
