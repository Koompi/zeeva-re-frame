// Compiled by ClojureScript 1.10.238 {}
goog.provide('zeeva_re_frame.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('zeeva_re_frame.subs');
goog.require('zeeva_re_frame.components.navbar');
goog.require('zeeva_re_frame.components.banner');
goog.require('zeeva_re_frame.components.content');
zeeva_re_frame.views.home_panel = (function zeeva_re_frame$views$home_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zeeva_re_frame.components.banner.Banner], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zeeva_re_frame.components.content.Blurb], null)], null)], null);
});
zeeva_re_frame.views.about_panel = (function zeeva_re_frame$views$about_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Fuck you"], null)], null)], null);
});
zeeva_re_frame.views.panels = (function zeeva_re_frame$views$panels(panel_name){
var G__36096 = panel_name;
var G__36096__$1 = (((G__36096 instanceof cljs.core.Keyword))?G__36096.fqn:null);
switch (G__36096__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zeeva_re_frame.views.home_panel], null);

break;
case "about-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zeeva_re_frame.views.about_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
zeeva_re_frame.views.show_panel = (function zeeva_re_frame$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zeeva_re_frame.views.panels,panel_name], null);
});
zeeva_re_frame.views.main_panel = (function zeeva_re_frame$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zeeva-re-frame.subs","active-panel","zeeva-re-frame.subs/active-panel",444086164)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zeeva_re_frame.views.panels,cljs.core.deref.call(null,active_panel)], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1548217348505
