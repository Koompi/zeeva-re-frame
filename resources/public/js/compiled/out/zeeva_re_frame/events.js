// Compiled by ClojureScript 1.10.238 {}
goog.provide('zeeva_re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('zeeva_re_frame.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zeeva-re-frame.events","initialize-db","zeeva-re-frame.events/initialize-db",621963940),(function (_,___$1){
return zeeva_re_frame.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("zeeva-re-frame.events","set-active-panel","zeeva-re-frame.events/set-active-panel",532050168),(function (db,p__29343){
var vec__29344 = p__29343;
var _ = cljs.core.nth.call(null,vec__29344,(0),null);
var active_panel = cljs.core.nth.call(null,vec__29344,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=events.js.map?rel=1548321632010
