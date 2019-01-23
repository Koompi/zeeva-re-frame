// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28623_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28623_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28624 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28625 = null;
var count__28626 = (0);
var i__28627 = (0);
while(true){
if((i__28627 < count__28626)){
var n = cljs.core._nth.call(null,chunk__28625,i__28627);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28628 = seq__28624;
var G__28629 = chunk__28625;
var G__28630 = count__28626;
var G__28631 = (i__28627 + (1));
seq__28624 = G__28628;
chunk__28625 = G__28629;
count__28626 = G__28630;
i__28627 = G__28631;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28624);
if(temp__4657__auto__){
var seq__28624__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28624__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28624__$1);
var G__28632 = cljs.core.chunk_rest.call(null,seq__28624__$1);
var G__28633 = c__4319__auto__;
var G__28634 = cljs.core.count.call(null,c__4319__auto__);
var G__28635 = (0);
seq__28624 = G__28632;
chunk__28625 = G__28633;
count__28626 = G__28634;
i__28627 = G__28635;
continue;
} else {
var n = cljs.core.first.call(null,seq__28624__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28636 = cljs.core.next.call(null,seq__28624__$1);
var G__28637 = null;
var G__28638 = (0);
var G__28639 = (0);
seq__28624 = G__28636;
chunk__28625 = G__28637;
count__28626 = G__28638;
i__28627 = G__28639;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28640){
var vec__28641 = p__28640;
var _ = cljs.core.nth.call(null,vec__28641,(0),null);
var v = cljs.core.nth.call(null,vec__28641,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__28644){
var vec__28645 = p__28644;
var k = cljs.core.nth.call(null,vec__28645,(0),null);
var v = cljs.core.nth.call(null,vec__28645,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28657_28665 = cljs.core.seq.call(null,deps);
var chunk__28658_28666 = null;
var count__28659_28667 = (0);
var i__28660_28668 = (0);
while(true){
if((i__28660_28668 < count__28659_28667)){
var dep_28669 = cljs.core._nth.call(null,chunk__28658_28666,i__28660_28668);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28669;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28669));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28669,(depth + (1)),state);
} else {
}


var G__28670 = seq__28657_28665;
var G__28671 = chunk__28658_28666;
var G__28672 = count__28659_28667;
var G__28673 = (i__28660_28668 + (1));
seq__28657_28665 = G__28670;
chunk__28658_28666 = G__28671;
count__28659_28667 = G__28672;
i__28660_28668 = G__28673;
continue;
} else {
var temp__4657__auto___28674 = cljs.core.seq.call(null,seq__28657_28665);
if(temp__4657__auto___28674){
var seq__28657_28675__$1 = temp__4657__auto___28674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28657_28675__$1)){
var c__4319__auto___28676 = cljs.core.chunk_first.call(null,seq__28657_28675__$1);
var G__28677 = cljs.core.chunk_rest.call(null,seq__28657_28675__$1);
var G__28678 = c__4319__auto___28676;
var G__28679 = cljs.core.count.call(null,c__4319__auto___28676);
var G__28680 = (0);
seq__28657_28665 = G__28677;
chunk__28658_28666 = G__28678;
count__28659_28667 = G__28679;
i__28660_28668 = G__28680;
continue;
} else {
var dep_28681 = cljs.core.first.call(null,seq__28657_28675__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28681;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28681));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28681,(depth + (1)),state);
} else {
}


var G__28682 = cljs.core.next.call(null,seq__28657_28675__$1);
var G__28683 = null;
var G__28684 = (0);
var G__28685 = (0);
seq__28657_28665 = G__28682;
chunk__28658_28666 = G__28683;
count__28659_28667 = G__28684;
i__28660_28668 = G__28685;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28661){
var vec__28662 = p__28661;
var seq__28663 = cljs.core.seq.call(null,vec__28662);
var first__28664 = cljs.core.first.call(null,seq__28663);
var seq__28663__$1 = cljs.core.next.call(null,seq__28663);
var x = first__28664;
var xs = seq__28663__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28662,seq__28663,first__28664,seq__28663__$1,x,xs,get_deps__$1){
return (function (p1__28648_SHARP_){
return clojure.set.difference.call(null,p1__28648_SHARP_,x);
});})(vec__28662,seq__28663,first__28664,seq__28663__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28686 = cljs.core.seq.call(null,provides);
var chunk__28687 = null;
var count__28688 = (0);
var i__28689 = (0);
while(true){
if((i__28689 < count__28688)){
var prov = cljs.core._nth.call(null,chunk__28687,i__28689);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28690_28698 = cljs.core.seq.call(null,requires);
var chunk__28691_28699 = null;
var count__28692_28700 = (0);
var i__28693_28701 = (0);
while(true){
if((i__28693_28701 < count__28692_28700)){
var req_28702 = cljs.core._nth.call(null,chunk__28691_28699,i__28693_28701);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28702,prov);


var G__28703 = seq__28690_28698;
var G__28704 = chunk__28691_28699;
var G__28705 = count__28692_28700;
var G__28706 = (i__28693_28701 + (1));
seq__28690_28698 = G__28703;
chunk__28691_28699 = G__28704;
count__28692_28700 = G__28705;
i__28693_28701 = G__28706;
continue;
} else {
var temp__4657__auto___28707 = cljs.core.seq.call(null,seq__28690_28698);
if(temp__4657__auto___28707){
var seq__28690_28708__$1 = temp__4657__auto___28707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28690_28708__$1)){
var c__4319__auto___28709 = cljs.core.chunk_first.call(null,seq__28690_28708__$1);
var G__28710 = cljs.core.chunk_rest.call(null,seq__28690_28708__$1);
var G__28711 = c__4319__auto___28709;
var G__28712 = cljs.core.count.call(null,c__4319__auto___28709);
var G__28713 = (0);
seq__28690_28698 = G__28710;
chunk__28691_28699 = G__28711;
count__28692_28700 = G__28712;
i__28693_28701 = G__28713;
continue;
} else {
var req_28714 = cljs.core.first.call(null,seq__28690_28708__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28714,prov);


var G__28715 = cljs.core.next.call(null,seq__28690_28708__$1);
var G__28716 = null;
var G__28717 = (0);
var G__28718 = (0);
seq__28690_28698 = G__28715;
chunk__28691_28699 = G__28716;
count__28692_28700 = G__28717;
i__28693_28701 = G__28718;
continue;
}
} else {
}
}
break;
}


var G__28719 = seq__28686;
var G__28720 = chunk__28687;
var G__28721 = count__28688;
var G__28722 = (i__28689 + (1));
seq__28686 = G__28719;
chunk__28687 = G__28720;
count__28688 = G__28721;
i__28689 = G__28722;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28686);
if(temp__4657__auto__){
var seq__28686__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28686__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28686__$1);
var G__28723 = cljs.core.chunk_rest.call(null,seq__28686__$1);
var G__28724 = c__4319__auto__;
var G__28725 = cljs.core.count.call(null,c__4319__auto__);
var G__28726 = (0);
seq__28686 = G__28723;
chunk__28687 = G__28724;
count__28688 = G__28725;
i__28689 = G__28726;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28686__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28694_28727 = cljs.core.seq.call(null,requires);
var chunk__28695_28728 = null;
var count__28696_28729 = (0);
var i__28697_28730 = (0);
while(true){
if((i__28697_28730 < count__28696_28729)){
var req_28731 = cljs.core._nth.call(null,chunk__28695_28728,i__28697_28730);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28731,prov);


var G__28732 = seq__28694_28727;
var G__28733 = chunk__28695_28728;
var G__28734 = count__28696_28729;
var G__28735 = (i__28697_28730 + (1));
seq__28694_28727 = G__28732;
chunk__28695_28728 = G__28733;
count__28696_28729 = G__28734;
i__28697_28730 = G__28735;
continue;
} else {
var temp__4657__auto___28736__$1 = cljs.core.seq.call(null,seq__28694_28727);
if(temp__4657__auto___28736__$1){
var seq__28694_28737__$1 = temp__4657__auto___28736__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28694_28737__$1)){
var c__4319__auto___28738 = cljs.core.chunk_first.call(null,seq__28694_28737__$1);
var G__28739 = cljs.core.chunk_rest.call(null,seq__28694_28737__$1);
var G__28740 = c__4319__auto___28738;
var G__28741 = cljs.core.count.call(null,c__4319__auto___28738);
var G__28742 = (0);
seq__28694_28727 = G__28739;
chunk__28695_28728 = G__28740;
count__28696_28729 = G__28741;
i__28697_28730 = G__28742;
continue;
} else {
var req_28743 = cljs.core.first.call(null,seq__28694_28737__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28743,prov);


var G__28744 = cljs.core.next.call(null,seq__28694_28737__$1);
var G__28745 = null;
var G__28746 = (0);
var G__28747 = (0);
seq__28694_28727 = G__28744;
chunk__28695_28728 = G__28745;
count__28696_28729 = G__28746;
i__28697_28730 = G__28747;
continue;
}
} else {
}
}
break;
}


var G__28748 = cljs.core.next.call(null,seq__28686__$1);
var G__28749 = null;
var G__28750 = (0);
var G__28751 = (0);
seq__28686 = G__28748;
chunk__28687 = G__28749;
count__28688 = G__28750;
i__28689 = G__28751;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28752_28756 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28753_28757 = null;
var count__28754_28758 = (0);
var i__28755_28759 = (0);
while(true){
if((i__28755_28759 < count__28754_28758)){
var ns_28760 = cljs.core._nth.call(null,chunk__28753_28757,i__28755_28759);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28760);


var G__28761 = seq__28752_28756;
var G__28762 = chunk__28753_28757;
var G__28763 = count__28754_28758;
var G__28764 = (i__28755_28759 + (1));
seq__28752_28756 = G__28761;
chunk__28753_28757 = G__28762;
count__28754_28758 = G__28763;
i__28755_28759 = G__28764;
continue;
} else {
var temp__4657__auto___28765 = cljs.core.seq.call(null,seq__28752_28756);
if(temp__4657__auto___28765){
var seq__28752_28766__$1 = temp__4657__auto___28765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28752_28766__$1)){
var c__4319__auto___28767 = cljs.core.chunk_first.call(null,seq__28752_28766__$1);
var G__28768 = cljs.core.chunk_rest.call(null,seq__28752_28766__$1);
var G__28769 = c__4319__auto___28767;
var G__28770 = cljs.core.count.call(null,c__4319__auto___28767);
var G__28771 = (0);
seq__28752_28756 = G__28768;
chunk__28753_28757 = G__28769;
count__28754_28758 = G__28770;
i__28755_28759 = G__28771;
continue;
} else {
var ns_28772 = cljs.core.first.call(null,seq__28752_28766__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28772);


var G__28773 = cljs.core.next.call(null,seq__28752_28766__$1);
var G__28774 = null;
var G__28775 = (0);
var G__28776 = (0);
seq__28752_28756 = G__28773;
chunk__28753_28757 = G__28774;
count__28754_28758 = G__28775;
i__28755_28759 = G__28776;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28777__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28778__i = 0, G__28778__a = new Array(arguments.length -  0);
while (G__28778__i < G__28778__a.length) {G__28778__a[G__28778__i] = arguments[G__28778__i + 0]; ++G__28778__i;}
  args = new cljs.core.IndexedSeq(G__28778__a,0,null);
} 
return G__28777__delegate.call(this,args);};
G__28777.cljs$lang$maxFixedArity = 0;
G__28777.cljs$lang$applyTo = (function (arglist__28779){
var args = cljs.core.seq(arglist__28779);
return G__28777__delegate(args);
});
G__28777.cljs$core$IFn$_invoke$arity$variadic = G__28777__delegate;
return G__28777;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__28780_SHARP_,p2__28781_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28780_SHARP_)].join('')),p2__28781_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__28782_SHARP_,p2__28783_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28782_SHARP_)].join(''),p2__28783_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28784 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28784.addCallback(((function (G__28784){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28784))
);

G__28784.addErrback(((function (G__28784){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28784))
);

return G__28784;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28785){if((e28785 instanceof Error)){
var e = e28785;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28785;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28786){if((e28786 instanceof Error)){
var e = e28786;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28786;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28787 = cljs.core._EQ_;
var expr__28788 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28787.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28788))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28787.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28788))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28787.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28788))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28787,expr__28788){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28787,expr__28788))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28790,callback){
var map__28791 = p__28790;
var map__28791__$1 = ((((!((map__28791 == null)))?(((((map__28791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28791):map__28791);
var file_msg = map__28791__$1;
var request_url = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28791,map__28791__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28791,map__28791__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto__){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto__){
return (function (state_28829){
var state_val_28830 = (state_28829[(1)]);
if((state_val_28830 === (7))){
var inst_28825 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
var statearr_28831_28857 = state_28829__$1;
(statearr_28831_28857[(2)] = inst_28825);

(statearr_28831_28857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (1))){
var state_28829__$1 = state_28829;
var statearr_28832_28858 = state_28829__$1;
(statearr_28832_28858[(2)] = null);

(statearr_28832_28858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (4))){
var inst_28795 = (state_28829[(7)]);
var inst_28795__$1 = (state_28829[(2)]);
var state_28829__$1 = (function (){var statearr_28833 = state_28829;
(statearr_28833[(7)] = inst_28795__$1);

return statearr_28833;
})();
if(cljs.core.truth_(inst_28795__$1)){
var statearr_28834_28859 = state_28829__$1;
(statearr_28834_28859[(1)] = (5));

} else {
var statearr_28835_28860 = state_28829__$1;
(statearr_28835_28860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (15))){
var inst_28810 = (state_28829[(8)]);
var inst_28808 = (state_28829[(9)]);
var inst_28812 = inst_28810.call(null,inst_28808);
var state_28829__$1 = state_28829;
var statearr_28836_28861 = state_28829__$1;
(statearr_28836_28861[(2)] = inst_28812);

(statearr_28836_28861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (13))){
var inst_28819 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
var statearr_28837_28862 = state_28829__$1;
(statearr_28837_28862[(2)] = inst_28819);

(statearr_28837_28862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (6))){
var state_28829__$1 = state_28829;
var statearr_28838_28863 = state_28829__$1;
(statearr_28838_28863[(2)] = null);

(statearr_28838_28863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (17))){
var inst_28816 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
var statearr_28839_28864 = state_28829__$1;
(statearr_28839_28864[(2)] = inst_28816);

(statearr_28839_28864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (3))){
var inst_28827 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28829__$1,inst_28827);
} else {
if((state_val_28830 === (12))){
var state_28829__$1 = state_28829;
var statearr_28840_28865 = state_28829__$1;
(statearr_28840_28865[(2)] = null);

(statearr_28840_28865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (2))){
var state_28829__$1 = state_28829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28829__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28830 === (11))){
var inst_28800 = (state_28829[(10)]);
var inst_28806 = figwheel.client.file_reloading.blocking_load.call(null,inst_28800);
var state_28829__$1 = state_28829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28829__$1,(14),inst_28806);
} else {
if((state_val_28830 === (9))){
var inst_28800 = (state_28829[(10)]);
var state_28829__$1 = state_28829;
if(cljs.core.truth_(inst_28800)){
var statearr_28841_28866 = state_28829__$1;
(statearr_28841_28866[(1)] = (11));

} else {
var statearr_28842_28867 = state_28829__$1;
(statearr_28842_28867[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (5))){
var inst_28801 = (state_28829[(11)]);
var inst_28795 = (state_28829[(7)]);
var inst_28800 = cljs.core.nth.call(null,inst_28795,(0),null);
var inst_28801__$1 = cljs.core.nth.call(null,inst_28795,(1),null);
var state_28829__$1 = (function (){var statearr_28843 = state_28829;
(statearr_28843[(11)] = inst_28801__$1);

(statearr_28843[(10)] = inst_28800);

return statearr_28843;
})();
if(cljs.core.truth_(inst_28801__$1)){
var statearr_28844_28868 = state_28829__$1;
(statearr_28844_28868[(1)] = (8));

} else {
var statearr_28845_28869 = state_28829__$1;
(statearr_28845_28869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (14))){
var inst_28810 = (state_28829[(8)]);
var inst_28800 = (state_28829[(10)]);
var inst_28808 = (state_28829[(2)]);
var inst_28809 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28810__$1 = cljs.core.get.call(null,inst_28809,inst_28800);
var state_28829__$1 = (function (){var statearr_28846 = state_28829;
(statearr_28846[(8)] = inst_28810__$1);

(statearr_28846[(9)] = inst_28808);

return statearr_28846;
})();
if(cljs.core.truth_(inst_28810__$1)){
var statearr_28847_28870 = state_28829__$1;
(statearr_28847_28870[(1)] = (15));

} else {
var statearr_28848_28871 = state_28829__$1;
(statearr_28848_28871[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (16))){
var inst_28808 = (state_28829[(9)]);
var inst_28814 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28808);
var state_28829__$1 = state_28829;
var statearr_28849_28872 = state_28829__$1;
(statearr_28849_28872[(2)] = inst_28814);

(statearr_28849_28872[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (10))){
var inst_28821 = (state_28829[(2)]);
var state_28829__$1 = (function (){var statearr_28850 = state_28829;
(statearr_28850[(12)] = inst_28821);

return statearr_28850;
})();
var statearr_28851_28873 = state_28829__$1;
(statearr_28851_28873[(2)] = null);

(statearr_28851_28873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (8))){
var inst_28801 = (state_28829[(11)]);
var inst_28803 = eval(inst_28801);
var state_28829__$1 = state_28829;
var statearr_28852_28874 = state_28829__$1;
(statearr_28852_28874[(2)] = inst_28803);

(statearr_28852_28874[(1)] = (10));


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
});})(c__21834__auto__))
;
return ((function (switch__21746__auto__,c__21834__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21747__auto__ = null;
var figwheel$client$file_reloading$state_machine__21747__auto____0 = (function (){
var statearr_28853 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28853[(0)] = figwheel$client$file_reloading$state_machine__21747__auto__);

(statearr_28853[(1)] = (1));

return statearr_28853;
});
var figwheel$client$file_reloading$state_machine__21747__auto____1 = (function (state_28829){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_28829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e28854){if((e28854 instanceof Object)){
var ex__21750__auto__ = e28854;
var statearr_28855_28875 = state_28829;
(statearr_28855_28875[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28876 = state_28829;
state_28829 = G__28876;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21747__auto__ = function(state_28829){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21747__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21747__auto____1.call(this,state_28829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21747__auto____0;
figwheel$client$file_reloading$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21747__auto____1;
return figwheel$client$file_reloading$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto__))
})();
var state__21836__auto__ = (function (){var statearr_28856 = f__21835__auto__.call(null);
(statearr_28856[(6)] = c__21834__auto__);

return statearr_28856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto__))
);

return c__21834__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28878 = arguments.length;
switch (G__28878) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28880,callback){
var map__28881 = p__28880;
var map__28881__$1 = ((((!((map__28881 == null)))?(((((map__28881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28881):map__28881);
var file_msg = map__28881__$1;
var namespace = cljs.core.get.call(null,map__28881__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28881,map__28881__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28881,map__28881__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28883){
var map__28884 = p__28883;
var map__28884__$1 = ((((!((map__28884 == null)))?(((((map__28884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28884):map__28884);
var file_msg = map__28884__$1;
var namespace = cljs.core.get.call(null,map__28884__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28886){
var map__28887 = p__28886;
var map__28887__$1 = ((((!((map__28887 == null)))?(((((map__28887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28887):map__28887);
var file_msg = map__28887__$1;
var namespace = cljs.core.get.call(null,map__28887__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28889,callback){
var map__28890 = p__28889;
var map__28890__$1 = ((((!((map__28890 == null)))?(((((map__28890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28890):map__28890);
var file_msg = map__28890__$1;
var request_url = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21834__auto___28940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___28940,out){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___28940,out){
return (function (state_28925){
var state_val_28926 = (state_28925[(1)]);
if((state_val_28926 === (1))){
var inst_28899 = cljs.core.seq.call(null,files);
var inst_28900 = cljs.core.first.call(null,inst_28899);
var inst_28901 = cljs.core.next.call(null,inst_28899);
var inst_28902 = files;
var state_28925__$1 = (function (){var statearr_28927 = state_28925;
(statearr_28927[(7)] = inst_28900);

(statearr_28927[(8)] = inst_28902);

(statearr_28927[(9)] = inst_28901);

return statearr_28927;
})();
var statearr_28928_28941 = state_28925__$1;
(statearr_28928_28941[(2)] = null);

(statearr_28928_28941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (2))){
var inst_28908 = (state_28925[(10)]);
var inst_28902 = (state_28925[(8)]);
var inst_28907 = cljs.core.seq.call(null,inst_28902);
var inst_28908__$1 = cljs.core.first.call(null,inst_28907);
var inst_28909 = cljs.core.next.call(null,inst_28907);
var inst_28910 = (inst_28908__$1 == null);
var inst_28911 = cljs.core.not.call(null,inst_28910);
var state_28925__$1 = (function (){var statearr_28929 = state_28925;
(statearr_28929[(10)] = inst_28908__$1);

(statearr_28929[(11)] = inst_28909);

return statearr_28929;
})();
if(inst_28911){
var statearr_28930_28942 = state_28925__$1;
(statearr_28930_28942[(1)] = (4));

} else {
var statearr_28931_28943 = state_28925__$1;
(statearr_28931_28943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (3))){
var inst_28923 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28925__$1,inst_28923);
} else {
if((state_val_28926 === (4))){
var inst_28908 = (state_28925[(10)]);
var inst_28913 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28908);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(7),inst_28913);
} else {
if((state_val_28926 === (5))){
var inst_28919 = cljs.core.async.close_BANG_.call(null,out);
var state_28925__$1 = state_28925;
var statearr_28932_28944 = state_28925__$1;
(statearr_28932_28944[(2)] = inst_28919);

(statearr_28932_28944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (6))){
var inst_28921 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28933_28945 = state_28925__$1;
(statearr_28933_28945[(2)] = inst_28921);

(statearr_28933_28945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (7))){
var inst_28909 = (state_28925[(11)]);
var inst_28915 = (state_28925[(2)]);
var inst_28916 = cljs.core.async.put_BANG_.call(null,out,inst_28915);
var inst_28902 = inst_28909;
var state_28925__$1 = (function (){var statearr_28934 = state_28925;
(statearr_28934[(8)] = inst_28902);

(statearr_28934[(12)] = inst_28916);

return statearr_28934;
})();
var statearr_28935_28946 = state_28925__$1;
(statearr_28935_28946[(2)] = null);

(statearr_28935_28946[(1)] = (2));


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
});})(c__21834__auto___28940,out))
;
return ((function (switch__21746__auto__,c__21834__auto___28940,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto____0 = (function (){
var statearr_28936 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28936[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto__);

(statearr_28936[(1)] = (1));

return statearr_28936;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto____1 = (function (state_28925){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_28925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e28937){if((e28937 instanceof Object)){
var ex__21750__auto__ = e28937;
var statearr_28938_28947 = state_28925;
(statearr_28938_28947[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28948 = state_28925;
state_28925 = G__28948;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto__ = function(state_28925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto____1.call(this,state_28925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___28940,out))
})();
var state__21836__auto__ = (function (){var statearr_28939 = f__21835__auto__.call(null);
(statearr_28939[(6)] = c__21834__auto___28940);

return statearr_28939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___28940,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28949,opts){
var map__28950 = p__28949;
var map__28950__$1 = ((((!((map__28950 == null)))?(((((map__28950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28950):map__28950);
var eval_body = cljs.core.get.call(null,map__28950__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28950__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28952){var e = e28952;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28953_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28953_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28954){
var vec__28955 = p__28954;
var k = cljs.core.nth.call(null,vec__28955,(0),null);
var v = cljs.core.nth.call(null,vec__28955,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28958){
var vec__28959 = p__28958;
var k = cljs.core.nth.call(null,vec__28959,(0),null);
var v = cljs.core.nth.call(null,vec__28959,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28965,p__28966){
var map__28967 = p__28965;
var map__28967__$1 = ((((!((map__28967 == null)))?(((((map__28967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28967):map__28967);
var opts = map__28967__$1;
var before_jsload = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28968 = p__28966;
var map__28968__$1 = ((((!((map__28968 == null)))?(((((map__28968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28968):map__28968);
var msg = map__28968__$1;
var files = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29122){
var state_val_29123 = (state_29122[(1)]);
if((state_val_29123 === (7))){
var inst_28983 = (state_29122[(7)]);
var inst_28982 = (state_29122[(8)]);
var inst_28984 = (state_29122[(9)]);
var inst_28985 = (state_29122[(10)]);
var inst_28990 = cljs.core._nth.call(null,inst_28983,inst_28985);
var inst_28991 = figwheel.client.file_reloading.eval_body.call(null,inst_28990,opts);
var inst_28992 = (inst_28985 + (1));
var tmp29124 = inst_28983;
var tmp29125 = inst_28982;
var tmp29126 = inst_28984;
var inst_28982__$1 = tmp29125;
var inst_28983__$1 = tmp29124;
var inst_28984__$1 = tmp29126;
var inst_28985__$1 = inst_28992;
var state_29122__$1 = (function (){var statearr_29127 = state_29122;
(statearr_29127[(7)] = inst_28983__$1);

(statearr_29127[(8)] = inst_28982__$1);

(statearr_29127[(11)] = inst_28991);

(statearr_29127[(9)] = inst_28984__$1);

(statearr_29127[(10)] = inst_28985__$1);

return statearr_29127;
})();
var statearr_29128_29211 = state_29122__$1;
(statearr_29128_29211[(2)] = null);

(statearr_29128_29211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (20))){
var inst_29025 = (state_29122[(12)]);
var inst_29033 = figwheel.client.file_reloading.sort_files.call(null,inst_29025);
var state_29122__$1 = state_29122;
var statearr_29129_29212 = state_29122__$1;
(statearr_29129_29212[(2)] = inst_29033);

(statearr_29129_29212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (27))){
var state_29122__$1 = state_29122;
var statearr_29130_29213 = state_29122__$1;
(statearr_29130_29213[(2)] = null);

(statearr_29130_29213[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (1))){
var inst_28974 = (state_29122[(13)]);
var inst_28971 = before_jsload.call(null,files);
var inst_28972 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28973 = (function (){return ((function (inst_28974,inst_28971,inst_28972,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28962_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28962_SHARP_);
});
;})(inst_28974,inst_28971,inst_28972,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28974__$1 = cljs.core.filter.call(null,inst_28973,files);
var inst_28975 = cljs.core.not_empty.call(null,inst_28974__$1);
var state_29122__$1 = (function (){var statearr_29131 = state_29122;
(statearr_29131[(13)] = inst_28974__$1);

(statearr_29131[(14)] = inst_28972);

(statearr_29131[(15)] = inst_28971);

return statearr_29131;
})();
if(cljs.core.truth_(inst_28975)){
var statearr_29132_29214 = state_29122__$1;
(statearr_29132_29214[(1)] = (2));

} else {
var statearr_29133_29215 = state_29122__$1;
(statearr_29133_29215[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (24))){
var state_29122__$1 = state_29122;
var statearr_29134_29216 = state_29122__$1;
(statearr_29134_29216[(2)] = null);

(statearr_29134_29216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (39))){
var inst_29075 = (state_29122[(16)]);
var state_29122__$1 = state_29122;
var statearr_29135_29217 = state_29122__$1;
(statearr_29135_29217[(2)] = inst_29075);

(statearr_29135_29217[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (46))){
var inst_29117 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29136_29218 = state_29122__$1;
(statearr_29136_29218[(2)] = inst_29117);

(statearr_29136_29218[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (4))){
var inst_29019 = (state_29122[(2)]);
var inst_29020 = cljs.core.List.EMPTY;
var inst_29021 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29020);
var inst_29022 = (function (){return ((function (inst_29019,inst_29020,inst_29021,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28963_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28963_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28963_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28963_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29019,inst_29020,inst_29021,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29023 = cljs.core.filter.call(null,inst_29022,files);
var inst_29024 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29025 = cljs.core.concat.call(null,inst_29023,inst_29024);
var state_29122__$1 = (function (){var statearr_29137 = state_29122;
(statearr_29137[(17)] = inst_29021);

(statearr_29137[(18)] = inst_29019);

(statearr_29137[(12)] = inst_29025);

return statearr_29137;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29138_29219 = state_29122__$1;
(statearr_29138_29219[(1)] = (16));

} else {
var statearr_29139_29220 = state_29122__$1;
(statearr_29139_29220[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (15))){
var inst_29009 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29140_29221 = state_29122__$1;
(statearr_29140_29221[(2)] = inst_29009);

(statearr_29140_29221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (21))){
var inst_29035 = (state_29122[(19)]);
var inst_29035__$1 = (state_29122[(2)]);
var inst_29036 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29035__$1);
var state_29122__$1 = (function (){var statearr_29141 = state_29122;
(statearr_29141[(19)] = inst_29035__$1);

return statearr_29141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29122__$1,(22),inst_29036);
} else {
if((state_val_29123 === (31))){
var inst_29120 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29122__$1,inst_29120);
} else {
if((state_val_29123 === (32))){
var inst_29075 = (state_29122[(16)]);
var inst_29080 = inst_29075.cljs$lang$protocol_mask$partition0$;
var inst_29081 = (inst_29080 & (64));
var inst_29082 = inst_29075.cljs$core$ISeq$;
var inst_29083 = (cljs.core.PROTOCOL_SENTINEL === inst_29082);
var inst_29084 = ((inst_29081) || (inst_29083));
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29084)){
var statearr_29142_29222 = state_29122__$1;
(statearr_29142_29222[(1)] = (35));

} else {
var statearr_29143_29223 = state_29122__$1;
(statearr_29143_29223[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (40))){
var inst_29097 = (state_29122[(20)]);
var inst_29096 = (state_29122[(2)]);
var inst_29097__$1 = cljs.core.get.call(null,inst_29096,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29098 = cljs.core.get.call(null,inst_29096,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29099 = cljs.core.not_empty.call(null,inst_29097__$1);
var state_29122__$1 = (function (){var statearr_29144 = state_29122;
(statearr_29144[(21)] = inst_29098);

(statearr_29144[(20)] = inst_29097__$1);

return statearr_29144;
})();
if(cljs.core.truth_(inst_29099)){
var statearr_29145_29224 = state_29122__$1;
(statearr_29145_29224[(1)] = (41));

} else {
var statearr_29146_29225 = state_29122__$1;
(statearr_29146_29225[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (33))){
var state_29122__$1 = state_29122;
var statearr_29147_29226 = state_29122__$1;
(statearr_29147_29226[(2)] = false);

(statearr_29147_29226[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (13))){
var inst_28995 = (state_29122[(22)]);
var inst_28999 = cljs.core.chunk_first.call(null,inst_28995);
var inst_29000 = cljs.core.chunk_rest.call(null,inst_28995);
var inst_29001 = cljs.core.count.call(null,inst_28999);
var inst_28982 = inst_29000;
var inst_28983 = inst_28999;
var inst_28984 = inst_29001;
var inst_28985 = (0);
var state_29122__$1 = (function (){var statearr_29148 = state_29122;
(statearr_29148[(7)] = inst_28983);

(statearr_29148[(8)] = inst_28982);

(statearr_29148[(9)] = inst_28984);

(statearr_29148[(10)] = inst_28985);

return statearr_29148;
})();
var statearr_29149_29227 = state_29122__$1;
(statearr_29149_29227[(2)] = null);

(statearr_29149_29227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (22))){
var inst_29035 = (state_29122[(19)]);
var inst_29043 = (state_29122[(23)]);
var inst_29039 = (state_29122[(24)]);
var inst_29038 = (state_29122[(25)]);
var inst_29038__$1 = (state_29122[(2)]);
var inst_29039__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29038__$1);
var inst_29040 = (function (){var all_files = inst_29035;
var res_SINGLEQUOTE_ = inst_29038__$1;
var res = inst_29039__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29035,inst_29043,inst_29039,inst_29038,inst_29038__$1,inst_29039__$1,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28964_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28964_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29035,inst_29043,inst_29039,inst_29038,inst_29038__$1,inst_29039__$1,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29041 = cljs.core.filter.call(null,inst_29040,inst_29038__$1);
var inst_29042 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29043__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29042);
var inst_29044 = cljs.core.not_empty.call(null,inst_29043__$1);
var state_29122__$1 = (function (){var statearr_29150 = state_29122;
(statearr_29150[(23)] = inst_29043__$1);

(statearr_29150[(24)] = inst_29039__$1);

(statearr_29150[(26)] = inst_29041);

(statearr_29150[(25)] = inst_29038__$1);

return statearr_29150;
})();
if(cljs.core.truth_(inst_29044)){
var statearr_29151_29228 = state_29122__$1;
(statearr_29151_29228[(1)] = (23));

} else {
var statearr_29152_29229 = state_29122__$1;
(statearr_29152_29229[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (36))){
var state_29122__$1 = state_29122;
var statearr_29153_29230 = state_29122__$1;
(statearr_29153_29230[(2)] = false);

(statearr_29153_29230[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (41))){
var inst_29097 = (state_29122[(20)]);
var inst_29101 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29102 = cljs.core.map.call(null,inst_29101,inst_29097);
var inst_29103 = cljs.core.pr_str.call(null,inst_29102);
var inst_29104 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29103)].join('');
var inst_29105 = figwheel.client.utils.log.call(null,inst_29104);
var state_29122__$1 = state_29122;
var statearr_29154_29231 = state_29122__$1;
(statearr_29154_29231[(2)] = inst_29105);

(statearr_29154_29231[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (43))){
var inst_29098 = (state_29122[(21)]);
var inst_29108 = (state_29122[(2)]);
var inst_29109 = cljs.core.not_empty.call(null,inst_29098);
var state_29122__$1 = (function (){var statearr_29155 = state_29122;
(statearr_29155[(27)] = inst_29108);

return statearr_29155;
})();
if(cljs.core.truth_(inst_29109)){
var statearr_29156_29232 = state_29122__$1;
(statearr_29156_29232[(1)] = (44));

} else {
var statearr_29157_29233 = state_29122__$1;
(statearr_29157_29233[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (29))){
var inst_29035 = (state_29122[(19)]);
var inst_29043 = (state_29122[(23)]);
var inst_29039 = (state_29122[(24)]);
var inst_29041 = (state_29122[(26)]);
var inst_29075 = (state_29122[(16)]);
var inst_29038 = (state_29122[(25)]);
var inst_29071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29074 = (function (){var all_files = inst_29035;
var res_SINGLEQUOTE_ = inst_29038;
var res = inst_29039;
var files_not_loaded = inst_29041;
var dependencies_that_loaded = inst_29043;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29035,inst_29043,inst_29039,inst_29041,inst_29075,inst_29038,inst_29071,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29073){
var map__29158 = p__29073;
var map__29158__$1 = ((((!((map__29158 == null)))?(((((map__29158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29158):map__29158);
var namespace = cljs.core.get.call(null,map__29158__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29035,inst_29043,inst_29039,inst_29041,inst_29075,inst_29038,inst_29071,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29075__$1 = cljs.core.group_by.call(null,inst_29074,inst_29041);
var inst_29077 = (inst_29075__$1 == null);
var inst_29078 = cljs.core.not.call(null,inst_29077);
var state_29122__$1 = (function (){var statearr_29160 = state_29122;
(statearr_29160[(28)] = inst_29071);

(statearr_29160[(16)] = inst_29075__$1);

return statearr_29160;
})();
if(inst_29078){
var statearr_29161_29234 = state_29122__$1;
(statearr_29161_29234[(1)] = (32));

} else {
var statearr_29162_29235 = state_29122__$1;
(statearr_29162_29235[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (44))){
var inst_29098 = (state_29122[(21)]);
var inst_29111 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29098);
var inst_29112 = cljs.core.pr_str.call(null,inst_29111);
var inst_29113 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29112)].join('');
var inst_29114 = figwheel.client.utils.log.call(null,inst_29113);
var state_29122__$1 = state_29122;
var statearr_29163_29236 = state_29122__$1;
(statearr_29163_29236[(2)] = inst_29114);

(statearr_29163_29236[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (6))){
var inst_29016 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29164_29237 = state_29122__$1;
(statearr_29164_29237[(2)] = inst_29016);

(statearr_29164_29237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (28))){
var inst_29041 = (state_29122[(26)]);
var inst_29068 = (state_29122[(2)]);
var inst_29069 = cljs.core.not_empty.call(null,inst_29041);
var state_29122__$1 = (function (){var statearr_29165 = state_29122;
(statearr_29165[(29)] = inst_29068);

return statearr_29165;
})();
if(cljs.core.truth_(inst_29069)){
var statearr_29166_29238 = state_29122__$1;
(statearr_29166_29238[(1)] = (29));

} else {
var statearr_29167_29239 = state_29122__$1;
(statearr_29167_29239[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (25))){
var inst_29039 = (state_29122[(24)]);
var inst_29055 = (state_29122[(2)]);
var inst_29056 = cljs.core.not_empty.call(null,inst_29039);
var state_29122__$1 = (function (){var statearr_29168 = state_29122;
(statearr_29168[(30)] = inst_29055);

return statearr_29168;
})();
if(cljs.core.truth_(inst_29056)){
var statearr_29169_29240 = state_29122__$1;
(statearr_29169_29240[(1)] = (26));

} else {
var statearr_29170_29241 = state_29122__$1;
(statearr_29170_29241[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (34))){
var inst_29091 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29091)){
var statearr_29171_29242 = state_29122__$1;
(statearr_29171_29242[(1)] = (38));

} else {
var statearr_29172_29243 = state_29122__$1;
(statearr_29172_29243[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (17))){
var state_29122__$1 = state_29122;
var statearr_29173_29244 = state_29122__$1;
(statearr_29173_29244[(2)] = recompile_dependents);

(statearr_29173_29244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (3))){
var state_29122__$1 = state_29122;
var statearr_29174_29245 = state_29122__$1;
(statearr_29174_29245[(2)] = null);

(statearr_29174_29245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (12))){
var inst_29012 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29175_29246 = state_29122__$1;
(statearr_29175_29246[(2)] = inst_29012);

(statearr_29175_29246[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (2))){
var inst_28974 = (state_29122[(13)]);
var inst_28981 = cljs.core.seq.call(null,inst_28974);
var inst_28982 = inst_28981;
var inst_28983 = null;
var inst_28984 = (0);
var inst_28985 = (0);
var state_29122__$1 = (function (){var statearr_29176 = state_29122;
(statearr_29176[(7)] = inst_28983);

(statearr_29176[(8)] = inst_28982);

(statearr_29176[(9)] = inst_28984);

(statearr_29176[(10)] = inst_28985);

return statearr_29176;
})();
var statearr_29177_29247 = state_29122__$1;
(statearr_29177_29247[(2)] = null);

(statearr_29177_29247[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (23))){
var inst_29035 = (state_29122[(19)]);
var inst_29043 = (state_29122[(23)]);
var inst_29039 = (state_29122[(24)]);
var inst_29041 = (state_29122[(26)]);
var inst_29038 = (state_29122[(25)]);
var inst_29046 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29048 = (function (){var all_files = inst_29035;
var res_SINGLEQUOTE_ = inst_29038;
var res = inst_29039;
var files_not_loaded = inst_29041;
var dependencies_that_loaded = inst_29043;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29035,inst_29043,inst_29039,inst_29041,inst_29038,inst_29046,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29047){
var map__29178 = p__29047;
var map__29178__$1 = ((((!((map__29178 == null)))?(((((map__29178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29178):map__29178);
var request_url = cljs.core.get.call(null,map__29178__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29035,inst_29043,inst_29039,inst_29041,inst_29038,inst_29046,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29049 = cljs.core.reverse.call(null,inst_29043);
var inst_29050 = cljs.core.map.call(null,inst_29048,inst_29049);
var inst_29051 = cljs.core.pr_str.call(null,inst_29050);
var inst_29052 = figwheel.client.utils.log.call(null,inst_29051);
var state_29122__$1 = (function (){var statearr_29180 = state_29122;
(statearr_29180[(31)] = inst_29046);

return statearr_29180;
})();
var statearr_29181_29248 = state_29122__$1;
(statearr_29181_29248[(2)] = inst_29052);

(statearr_29181_29248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (35))){
var state_29122__$1 = state_29122;
var statearr_29182_29249 = state_29122__$1;
(statearr_29182_29249[(2)] = true);

(statearr_29182_29249[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (19))){
var inst_29025 = (state_29122[(12)]);
var inst_29031 = figwheel.client.file_reloading.expand_files.call(null,inst_29025);
var state_29122__$1 = state_29122;
var statearr_29183_29250 = state_29122__$1;
(statearr_29183_29250[(2)] = inst_29031);

(statearr_29183_29250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (11))){
var state_29122__$1 = state_29122;
var statearr_29184_29251 = state_29122__$1;
(statearr_29184_29251[(2)] = null);

(statearr_29184_29251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (9))){
var inst_29014 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29185_29252 = state_29122__$1;
(statearr_29185_29252[(2)] = inst_29014);

(statearr_29185_29252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (5))){
var inst_28984 = (state_29122[(9)]);
var inst_28985 = (state_29122[(10)]);
var inst_28987 = (inst_28985 < inst_28984);
var inst_28988 = inst_28987;
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_28988)){
var statearr_29186_29253 = state_29122__$1;
(statearr_29186_29253[(1)] = (7));

} else {
var statearr_29187_29254 = state_29122__$1;
(statearr_29187_29254[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (14))){
var inst_28995 = (state_29122[(22)]);
var inst_29004 = cljs.core.first.call(null,inst_28995);
var inst_29005 = figwheel.client.file_reloading.eval_body.call(null,inst_29004,opts);
var inst_29006 = cljs.core.next.call(null,inst_28995);
var inst_28982 = inst_29006;
var inst_28983 = null;
var inst_28984 = (0);
var inst_28985 = (0);
var state_29122__$1 = (function (){var statearr_29188 = state_29122;
(statearr_29188[(7)] = inst_28983);

(statearr_29188[(8)] = inst_28982);

(statearr_29188[(32)] = inst_29005);

(statearr_29188[(9)] = inst_28984);

(statearr_29188[(10)] = inst_28985);

return statearr_29188;
})();
var statearr_29189_29255 = state_29122__$1;
(statearr_29189_29255[(2)] = null);

(statearr_29189_29255[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (45))){
var state_29122__$1 = state_29122;
var statearr_29190_29256 = state_29122__$1;
(statearr_29190_29256[(2)] = null);

(statearr_29190_29256[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (26))){
var inst_29035 = (state_29122[(19)]);
var inst_29043 = (state_29122[(23)]);
var inst_29039 = (state_29122[(24)]);
var inst_29041 = (state_29122[(26)]);
var inst_29038 = (state_29122[(25)]);
var inst_29058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29060 = (function (){var all_files = inst_29035;
var res_SINGLEQUOTE_ = inst_29038;
var res = inst_29039;
var files_not_loaded = inst_29041;
var dependencies_that_loaded = inst_29043;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29035,inst_29043,inst_29039,inst_29041,inst_29038,inst_29058,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29059){
var map__29191 = p__29059;
var map__29191__$1 = ((((!((map__29191 == null)))?(((((map__29191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);
var namespace = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29035,inst_29043,inst_29039,inst_29041,inst_29038,inst_29058,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29061 = cljs.core.map.call(null,inst_29060,inst_29039);
var inst_29062 = cljs.core.pr_str.call(null,inst_29061);
var inst_29063 = figwheel.client.utils.log.call(null,inst_29062);
var inst_29064 = (function (){var all_files = inst_29035;
var res_SINGLEQUOTE_ = inst_29038;
var res = inst_29039;
var files_not_loaded = inst_29041;
var dependencies_that_loaded = inst_29043;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29035,inst_29043,inst_29039,inst_29041,inst_29038,inst_29058,inst_29060,inst_29061,inst_29062,inst_29063,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29035,inst_29043,inst_29039,inst_29041,inst_29038,inst_29058,inst_29060,inst_29061,inst_29062,inst_29063,state_val_29123,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29065 = setTimeout(inst_29064,(10));
var state_29122__$1 = (function (){var statearr_29193 = state_29122;
(statearr_29193[(33)] = inst_29063);

(statearr_29193[(34)] = inst_29058);

return statearr_29193;
})();
var statearr_29194_29257 = state_29122__$1;
(statearr_29194_29257[(2)] = inst_29065);

(statearr_29194_29257[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (16))){
var state_29122__$1 = state_29122;
var statearr_29195_29258 = state_29122__$1;
(statearr_29195_29258[(2)] = reload_dependents);

(statearr_29195_29258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (38))){
var inst_29075 = (state_29122[(16)]);
var inst_29093 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29075);
var state_29122__$1 = state_29122;
var statearr_29196_29259 = state_29122__$1;
(statearr_29196_29259[(2)] = inst_29093);

(statearr_29196_29259[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (30))){
var state_29122__$1 = state_29122;
var statearr_29197_29260 = state_29122__$1;
(statearr_29197_29260[(2)] = null);

(statearr_29197_29260[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (10))){
var inst_28995 = (state_29122[(22)]);
var inst_28997 = cljs.core.chunked_seq_QMARK_.call(null,inst_28995);
var state_29122__$1 = state_29122;
if(inst_28997){
var statearr_29198_29261 = state_29122__$1;
(statearr_29198_29261[(1)] = (13));

} else {
var statearr_29199_29262 = state_29122__$1;
(statearr_29199_29262[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (18))){
var inst_29029 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29029)){
var statearr_29200_29263 = state_29122__$1;
(statearr_29200_29263[(1)] = (19));

} else {
var statearr_29201_29264 = state_29122__$1;
(statearr_29201_29264[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (42))){
var state_29122__$1 = state_29122;
var statearr_29202_29265 = state_29122__$1;
(statearr_29202_29265[(2)] = null);

(statearr_29202_29265[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (37))){
var inst_29088 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29203_29266 = state_29122__$1;
(statearr_29203_29266[(2)] = inst_29088);

(statearr_29203_29266[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (8))){
var inst_28982 = (state_29122[(8)]);
var inst_28995 = (state_29122[(22)]);
var inst_28995__$1 = cljs.core.seq.call(null,inst_28982);
var state_29122__$1 = (function (){var statearr_29204 = state_29122;
(statearr_29204[(22)] = inst_28995__$1);

return statearr_29204;
})();
if(inst_28995__$1){
var statearr_29205_29267 = state_29122__$1;
(statearr_29205_29267[(1)] = (10));

} else {
var statearr_29206_29268 = state_29122__$1;
(statearr_29206_29268[(1)] = (11));

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
});})(c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21746__auto__,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto____0 = (function (){
var statearr_29207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29207[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto__);

(statearr_29207[(1)] = (1));

return statearr_29207;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto____1 = (function (state_29122){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_29122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e29208){if((e29208 instanceof Object)){
var ex__21750__auto__ = e29208;
var statearr_29209_29269 = state_29122;
(statearr_29209_29269[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29270 = state_29122;
state_29122 = G__29270;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto__ = function(state_29122){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto____1.call(this,state_29122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21836__auto__ = (function (){var statearr_29210 = f__21835__auto__.call(null);
(statearr_29210[(6)] = c__21834__auto__);

return statearr_29210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto__,map__28967,map__28967__$1,opts,before_jsload,on_jsload,reload_dependents,map__28968,map__28968__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21834__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29273,link){
var map__29274 = p__29273;
var map__29274__$1 = ((((!((map__29274 == null)))?(((((map__29274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29274):map__29274);
var file = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29274,map__29274__$1,file){
return (function (p1__29271_SHARP_,p2__29272_SHARP_){
if(cljs.core._EQ_.call(null,p1__29271_SHARP_,p2__29272_SHARP_)){
return p1__29271_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29274,map__29274__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29277){
var map__29278 = p__29277;
var map__29278__$1 = ((((!((map__29278 == null)))?(((((map__29278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29278):map__29278);
var match_length = cljs.core.get.call(null,map__29278__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29278__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29276_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29276_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29280_SHARP_,p2__29281_SHARP_){
return cljs.core.assoc.call(null,p1__29280_SHARP_,cljs.core.get.call(null,p2__29281_SHARP_,key),p2__29281_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29282 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29282);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29282);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29283,p__29284){
var map__29285 = p__29283;
var map__29285__$1 = ((((!((map__29285 == null)))?(((((map__29285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29285):map__29285);
var on_cssload = cljs.core.get.call(null,map__29285__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29286 = p__29284;
var map__29286__$1 = ((((!((map__29286 == null)))?(((((map__29286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29286):map__29286);
var files_msg = map__29286__$1;
var files = cljs.core.get.call(null,map__29286__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1548216523638
