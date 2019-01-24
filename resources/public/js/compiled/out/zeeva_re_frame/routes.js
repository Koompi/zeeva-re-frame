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
var G__26239 = (new goog.History());
goog.events.listen(G__26239,goog.history.EventType.NAVIGATE,((function (G__26239){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__26239))
);

G__26239.setEnabled(true);

return G__26239;
});
zeeva_re_frame.routes.app_routes = (function zeeva_re_frame$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__26040__auto___26260 = (function (params__26041__auto__){
if(cljs.core.map_QMARK_.call(null,params__26041__auto__)){
var map__26240 = params__26041__auto__;
var map__26240__$1 = ((((!((map__26240 == null)))?(((((map__26240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26240):map__26240);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26041__auto__)){
var vec__26242 = params__26041__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__26040__auto___26260);


var action__26040__auto___26261 = (function (params__26041__auto__){
if(cljs.core.map_QMARK_.call(null,params__26041__auto__)){
var map__26245 = params__26041__auto__;
var map__26245__$1 = ((((!((map__26245 == null)))?(((((map__26245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26245):map__26245);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26041__auto__)){
var vec__26247 = params__26041__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__26040__auto___26261);


var action__26040__auto___26262 = (function (params__26041__auto__){
if(cljs.core.map_QMARK_.call(null,params__26041__auto__)){
var map__26250 = params__26041__auto__;
var map__26250__$1 = ((((!((map__26250 == null)))?(((((map__26250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26250):map__26250);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"faq-panel","faq-panel",1176748906)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26041__auto__)){
var vec__26252 = params__26041__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"faq-panel","faq-panel",1176748906)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/faq",action__26040__auto___26262);


var action__26040__auto___26263 = (function (params__26041__auto__){
if(cljs.core.map_QMARK_.call(null,params__26041__auto__)){
var map__26255 = params__26041__auto__;
var map__26255__$1 = ((((!((map__26255 == null)))?(((((map__26255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26255):map__26255);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"solutions-panel","solutions-panel",113281244)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26041__auto__)){
var vec__26257 = params__26041__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"solutions-panel","solutions-panel",113281244)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solutions",action__26040__auto___26263);


return zeeva_re_frame.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1548314784064
