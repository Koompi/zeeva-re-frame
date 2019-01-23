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
var G__36005 = (new goog.History());
goog.events.listen(G__36005,goog.history.EventType.NAVIGATE,((function (G__36005){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__36005))
);

G__36005.setEnabled(true);

return G__36005;
});
zeeva_re_frame.routes.app_routes = (function zeeva_re_frame$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__25156__auto___36016 = (function (params__25157__auto__){
if(cljs.core.map_QMARK_.call(null,params__25157__auto__)){
var map__36006 = params__25157__auto__;
var map__36006__$1 = ((((!((map__36006 == null)))?(((((map__36006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36006):map__36006);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25157__auto__)){
var vec__36008 = params__25157__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25156__auto___36016);


var action__25156__auto___36017 = (function (params__25157__auto__){
if(cljs.core.map_QMARK_.call(null,params__25157__auto__)){
var map__36011 = params__25157__auto__;
var map__36011__$1 = ((((!((map__36011 == null)))?(((((map__36011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36011):map__36011);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25157__auto__)){
var vec__36013 = params__25157__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__25156__auto___36017);


return zeeva_re_frame.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1548216572024
