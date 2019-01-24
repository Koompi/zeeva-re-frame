// Compiled by ClojureScript 1.10.238 {}
goog.provide('zeeva_re_frame.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('zeeva_re_frame.events');
zeeva_re_frame.routes.hook_browser_navigation_BANG_ = (function zeeva_re_frame$routes$hook_browser_navigation_BANG_(){
var G__26120 = (new goog.History());
goog.events.listen(G__26120,goog.history.EventType.NAVIGATE,((function (G__26120){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__26120))
);

G__26120.setEnabled(true);

return G__26120;
});
zeeva_re_frame.routes.app_routes = (function zeeva_re_frame$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__20836__auto___26141 = (function (params__20837__auto__){
if(cljs.core.map_QMARK_.call(null,params__20837__auto__)){
var map__26121 = params__20837__auto__;
var map__26121__$1 = ((((!((map__26121 == null)))?(((((map__26121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26121):map__26121);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20837__auto__)){
var vec__26123 = params__20837__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__20836__auto___26141);


var action__20836__auto___26142 = (function (params__20837__auto__){
if(cljs.core.map_QMARK_.call(null,params__20837__auto__)){
var map__26126 = params__20837__auto__;
var map__26126__$1 = ((((!((map__26126 == null)))?(((((map__26126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26126):map__26126);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20837__auto__)){
var vec__26128 = params__20837__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__20836__auto___26142);


var action__20836__auto___26143 = (function (params__20837__auto__){
if(cljs.core.map_QMARK_.call(null,params__20837__auto__)){
var map__26131 = params__20837__auto__;
var map__26131__$1 = ((((!((map__26131 == null)))?(((((map__26131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26131):map__26131);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"faq-panel","faq-panel",1176748906)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20837__auto__)){
var vec__26133 = params__20837__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"faq-panel","faq-panel",1176748906)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/faq",action__20836__auto___26143);


var action__20836__auto___26144 = (function (params__20837__auto__){
if(cljs.core.map_QMARK_.call(null,params__20837__auto__)){
var map__26136 = params__20837__auto__;
var map__26136__$1 = ((((!((map__26136 == null)))?(((((map__26136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26136):map__26136);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"solutions-panel","solutions-panel",113281244)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20837__auto__)){
var vec__26138 = params__20837__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"solutions-panel","solutions-panel",113281244)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solutions",action__20836__auto___26144);


return zeeva_re_frame.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1548233311588
