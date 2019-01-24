// Compiled by ClojureScript 1.10.238 {}
goog.provide('zeeva_re_frame.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('zeeva_re_frame.events');
goog.require('zeeva_re_frame.routes');
goog.require('zeeva_re_frame.views');
goog.require('zeeva_re_frame.config');
zeeva_re_frame.core.dev_setup = (function zeeva_re_frame$core$dev_setup(){
if(zeeva_re_frame.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
zeeva_re_frame.core.mount_root = (function zeeva_re_frame$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zeeva_re_frame.views.main_panel], null),document.getElementById("app"));
});
zeeva_re_frame.core.init = (function zeeva_re_frame$core$init(){
zeeva_re_frame.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.events","initialize-db","zeeva-re-frame.events/initialize-db",621963940)], null));

zeeva_re_frame.core.dev_setup.call(null);

return zeeva_re_frame.core.mount_root.call(null);
});
goog.exportSymbol('zeeva_re_frame.core.init', zeeva_re_frame.core.init);

//# sourceMappingURL=core.js.map?rel=1548322544453
