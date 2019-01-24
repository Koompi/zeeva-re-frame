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
var G__29598 = (new goog.History());
goog.events.listen(G__29598,goog.history.EventType.NAVIGATE,((function (G__29598){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__29598))
);

G__29598.setEnabled(true);

return G__29598;
});
zeeva_re_frame.routes.app_routes = (function zeeva_re_frame$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__29358__auto___29619 = (function (params__29359__auto__){
if(cljs.core.map_QMARK_.call(null,params__29359__auto__)){
var map__29599 = params__29359__auto__;
var map__29599__$1 = ((((!((map__29599 == null)))?(((((map__29599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29599):map__29599);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29359__auto__)){
var vec__29601 = params__29359__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__29358__auto___29619);


var action__29358__auto___29620 = (function (params__29359__auto__){
if(cljs.core.map_QMARK_.call(null,params__29359__auto__)){
var map__29604 = params__29359__auto__;
var map__29604__$1 = ((((!((map__29604 == null)))?(((((map__29604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29604):map__29604);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29359__auto__)){
var vec__29606 = params__29359__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__29358__auto___29620);


var action__29358__auto___29621 = (function (params__29359__auto__){
if(cljs.core.map_QMARK_.call(null,params__29359__auto__)){
var map__29609 = params__29359__auto__;
var map__29609__$1 = ((((!((map__29609 == null)))?(((((map__29609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29609):map__29609);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"faq-panel","faq-panel",1176748906)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29359__auto__)){
var vec__29611 = params__29359__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"faq-panel","faq-panel",1176748906)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/faq",action__29358__auto___29621);


var action__29358__auto___29622 = (function (params__29359__auto__){
if(cljs.core.map_QMARK_.call(null,params__29359__auto__)){
var map__29614 = params__29359__auto__;
var map__29614__$1 = ((((!((map__29614 == null)))?(((((map__29614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29614):map__29614);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"solutions-panel","solutions-panel",113281244)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29359__auto__)){
var vec__29616 = params__29359__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"solutions-panel","solutions-panel",113281244)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/solutions",action__29358__auto___29622);


return zeeva_re_frame.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1548321633234
