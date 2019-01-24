// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27203 = arguments.length;
var i__4500__auto___27204 = (0);
while(true){
if((i__4500__auto___27204 < len__4499__auto___27203)){
args__4502__auto__.push((arguments[i__4500__auto___27204]));

var G__27205 = (i__4500__auto___27204 + (1));
i__4500__auto___27204 = G__27205;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__27196){
var map__27197 = p__27196;
var map__27197__$1 = ((((!((map__27197 == null)))?(((((map__27197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27197):map__27197);
var args = map__27197__$1;
var model = cljs.core.get.call(null,map__27197__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__27197__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__27197__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__27197__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__27197__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__27197__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__27197,map__27197__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (p1__27194_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__27194_SHARP_));
});})(current,tabs__$1,map__27197,map__27197__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__27194#] (= current (id-fn p1__27194#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs nav nav-tabs noselect",new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__4292__auto__ = ((function (current,tabs__$1,_,map__27197,map__27197__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function re_com$tabs$iter__27199(s__27200){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__27197,map__27197__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){
var s__27200__$1 = s__27200;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27200__$1);
if(temp__4657__auto__){
var s__27200__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27200__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27200__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27202 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27201 = (0);
while(true){
if((i__27201 < size__4291__auto__)){
var t = cljs.core._nth.call(null,c__4290__auto__,i__27201);
cljs.core.chunk_append.call(null,b__27202,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__27201,id,label,selected_QMARK_,t,c__4290__auto__,size__4291__auto__,b__27202,s__27200__$2,temp__4657__auto__,current,tabs__$1,_,map__27197,map__27197__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(i__27201,id,label,selected_QMARK_,t,c__4290__auto__,size__4291__auto__,b__27202,s__27200__$2,temp__4657__auto__,current,tabs__$1,_,map__27197,map__27197__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());

var G__27206 = (i__27201 + (1));
i__27201 = G__27206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27202),re_com$tabs$iter__27199.call(null,cljs.core.chunk_rest.call(null,s__27200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27202),null);
}
} else {
var t = cljs.core.first.call(null,s__27200__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__27200__$2,temp__4657__auto__,current,tabs__$1,_,map__27197,map__27197__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__27200__$2,temp__4657__auto__,current,tabs__$1,_,map__27197,map__27197__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__27199.call(null,cljs.core.rest.call(null,s__27200__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__27197,map__27197__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__27197,map__27197__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;
return iter__4292__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq27195){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27195));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27216 = arguments.length;
var i__4500__auto___27217 = (0);
while(true){
if((i__4500__auto___27217 < len__4499__auto___27216)){
args__4502__auto__.push((arguments[i__4500__auto___27217]));

var G__27218 = (i__4500__auto___27217 + (1));
i__4500__auto___27217 = G__27218;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__27209){
var map__27210 = p__27209;
var map__27210__$1 = ((((!((map__27210 == null)))?(((((map__27210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27210):map__27210);
var model = cljs.core.get.call(null,map__27210__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__27210__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__27210__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__27210__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__27210__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__27210__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__27210__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__27210,map__27210__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__27207_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__27207_SHARP_));
});})(current,tabs__$1,map__27210,map__27210__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__27207#] (= current (id-fn p1__27207#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect btn-group",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none")], null),(function (){var iter__4292__auto__ = ((function (current,tabs__$1,_,map__27210,map__27210__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__27212(s__27213){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__27210,map__27210__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__27213__$1 = s__27213;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27213__$1);
if(temp__4657__auto__){
var s__27213__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27213__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27213__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27215 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27214 = (0);
while(true){
if((i__27214 < size__4291__auto__)){
var t = cljs.core._nth.call(null,c__4290__auto__,i__27214);
cljs.core.chunk_append.call(null,b__27215,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__27214,id,label,selected_QMARK_,t,c__4290__auto__,size__4291__auto__,b__27215,s__27213__$2,temp__4657__auto__,current,tabs__$1,_,map__27210,map__27210__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__27214,id,label,selected_QMARK_,t,c__4290__auto__,size__4291__auto__,b__27215,s__27213__$2,temp__4657__auto__,current,tabs__$1,_,map__27210,map__27210__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());

var G__27219 = (i__27214 + (1));
i__27214 = G__27219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27215),re_com$tabs$iter__27212.call(null,cljs.core.chunk_rest.call(null,s__27213__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27215),null);
}
} else {
var t = cljs.core.first.call(null,s__27213__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__27213__$2,temp__4657__auto__,current,tabs__$1,_,map__27210,map__27210__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__27213__$2,temp__4657__auto__,current,tabs__$1,_,map__27210,map__27210__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__27212.call(null,cljs.core.rest.call(null,s__27213__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__27210,map__27210__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__27210,map__27210__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__4292__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq27208){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27208));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27224 = arguments.length;
var i__4500__auto___27225 = (0);
while(true){
if((i__4500__auto___27225 < len__4499__auto___27224)){
args__4502__auto__.push((arguments[i__4500__auto___27225]));

var G__27226 = (i__4500__auto___27225 + (1));
i__4500__auto___27225 = G__27226;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__27221){
var map__27222 = p__27221;
var map__27222__$1 = ((((!((map__27222 == null)))?(((((map__27222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27222):map__27222);
var args = map__27222__$1;
var model = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__27222__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq27220){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27220));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27231 = arguments.length;
var i__4500__auto___27232 = (0);
while(true){
if((i__4500__auto___27232 < len__4499__auto___27231)){
args__4502__auto__.push((arguments[i__4500__auto___27232]));

var G__27233 = (i__4500__auto___27232 + (1));
i__4500__auto___27232 = G__27233;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__27228){
var map__27229 = p__27228;
var map__27229__$1 = ((((!((map__27229 == null)))?(((((map__27229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27229):map__27229);
var args = map__27229__$1;
var model = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq27227){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27227));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27243 = arguments.length;
var i__4500__auto___27244 = (0);
while(true){
if((i__4500__auto___27244 < len__4499__auto___27243)){
args__4502__auto__.push((arguments[i__4500__auto___27244]));

var G__27245 = (i__4500__auto___27244 + (1));
i__4500__auto___27244 = G__27245;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__27236){
var map__27237 = p__27236;
var map__27237__$1 = ((((!((map__27237 == null)))?(((((map__27237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27237):map__27237);
var model = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var style = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var vertical_QMARK_ = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (current,tabs__$1,map__27237,map__27237__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (p1__27234_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__27234_SHARP_));
});})(current,tabs__$1,map__27237,map__27237__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__27234#] (= current (id-fn p1__27234#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect nav nav-pills",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),(function (){var iter__4292__auto__ = ((function (current,tabs__$1,_,map__27237,map__27237__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__27239(s__27240){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__27237,map__27237__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__27240__$1 = s__27240;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27240__$1);
if(temp__4657__auto__){
var s__27240__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27240__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27240__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27242 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27241 = (0);
while(true){
if((i__27241 < size__4291__auto__)){
var t = cljs.core._nth.call(null,c__4290__auto__,i__27241);
cljs.core.chunk_append.call(null,b__27242,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__27241,id,label,selected_QMARK_,t,c__4290__auto__,size__4291__auto__,b__27242,s__27240__$2,temp__4657__auto__,current,tabs__$1,_,map__27237,map__27237__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__27241,id,label,selected_QMARK_,t,c__4290__auto__,size__4291__auto__,b__27242,s__27240__$2,temp__4657__auto__,current,tabs__$1,_,map__27237,map__27237__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__27246 = (i__27241 + (1));
i__27241 = G__27246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27242),re_com$tabs$iter__27239.call(null,cljs.core.chunk_rest.call(null,s__27240__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27242),null);
}
} else {
var t = cljs.core.first.call(null,s__27240__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__27240__$2,temp__4657__auto__,current,tabs__$1,_,map__27237,map__27237__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__27240__$2,temp__4657__auto__,current,tabs__$1,_,map__27237,map__27237__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__27239.call(null,cljs.core.rest.call(null,s__27240__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__27237,map__27237__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__27237,map__27237__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__4292__auto__.call(null,tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq27235){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27235));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27251 = arguments.length;
var i__4500__auto___27252 = (0);
while(true){
if((i__4500__auto___27252 < len__4499__auto___27251)){
args__4502__auto__.push((arguments[i__4500__auto___27252]));

var G__27253 = (i__4500__auto___27252 + (1));
i__4500__auto___27252 = G__27253;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__27248){
var map__27249 = p__27248;
var map__27249__$1 = ((((!((map__27249 == null)))?(((((map__27249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27249):map__27249);
var args = map__27249__$1;
var model = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__27249__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false);
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq27247){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27247));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27258 = arguments.length;
var i__4500__auto___27259 = (0);
while(true){
if((i__4500__auto___27259 < len__4499__auto___27258)){
args__4502__auto__.push((arguments[i__4500__auto___27259]));

var G__27260 = (i__4500__auto___27259 + (1));
i__4500__auto___27259 = G__27260;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__27255){
var map__27256 = p__27255;
var map__27256__$1 = ((((!((map__27256 == null)))?(((((map__27256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27256):map__27256);
var args = map__27256__$1;
var model = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_fn = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.tabs_args_desc),args,"tabs")))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq27254){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27254));
});


//# sourceMappingURL=tabs.js.map?rel=1548321614160
