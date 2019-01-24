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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39817_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39817_SHARP_));
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
var seq__39818 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39819 = null;
var count__39820 = (0);
var i__39821 = (0);
while(true){
if((i__39821 < count__39820)){
var n = cljs.core._nth.call(null,chunk__39819,i__39821);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__39822 = seq__39818;
var G__39823 = chunk__39819;
var G__39824 = count__39820;
var G__39825 = (i__39821 + (1));
seq__39818 = G__39822;
chunk__39819 = G__39823;
count__39820 = G__39824;
i__39821 = G__39825;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39818);
if(temp__4657__auto__){
var seq__39818__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39818__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__39818__$1);
var G__39826 = cljs.core.chunk_rest.call(null,seq__39818__$1);
var G__39827 = c__4319__auto__;
var G__39828 = cljs.core.count.call(null,c__4319__auto__);
var G__39829 = (0);
seq__39818 = G__39826;
chunk__39819 = G__39827;
count__39820 = G__39828;
i__39821 = G__39829;
continue;
} else {
var n = cljs.core.first.call(null,seq__39818__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__39830 = cljs.core.next.call(null,seq__39818__$1);
var G__39831 = null;
var G__39832 = (0);
var G__39833 = (0);
seq__39818 = G__39830;
chunk__39819 = G__39831;
count__39820 = G__39832;
i__39821 = G__39833;
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
return cljs.core.some.call(null,(function (p__39834){
var vec__39835 = p__39834;
var _ = cljs.core.nth.call(null,vec__39835,(0),null);
var v = cljs.core.nth.call(null,vec__39835,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__39838){
var vec__39839 = p__39838;
var k = cljs.core.nth.call(null,vec__39839,(0),null);
var v = cljs.core.nth.call(null,vec__39839,(1),null);
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

var seq__39851_39859 = cljs.core.seq.call(null,deps);
var chunk__39852_39860 = null;
var count__39853_39861 = (0);
var i__39854_39862 = (0);
while(true){
if((i__39854_39862 < count__39853_39861)){
var dep_39863 = cljs.core._nth.call(null,chunk__39852_39860,i__39854_39862);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_39863;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39863));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39863,(depth + (1)),state);
} else {
}


var G__39864 = seq__39851_39859;
var G__39865 = chunk__39852_39860;
var G__39866 = count__39853_39861;
var G__39867 = (i__39854_39862 + (1));
seq__39851_39859 = G__39864;
chunk__39852_39860 = G__39865;
count__39853_39861 = G__39866;
i__39854_39862 = G__39867;
continue;
} else {
var temp__4657__auto___39868 = cljs.core.seq.call(null,seq__39851_39859);
if(temp__4657__auto___39868){
var seq__39851_39869__$1 = temp__4657__auto___39868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39851_39869__$1)){
var c__4319__auto___39870 = cljs.core.chunk_first.call(null,seq__39851_39869__$1);
var G__39871 = cljs.core.chunk_rest.call(null,seq__39851_39869__$1);
var G__39872 = c__4319__auto___39870;
var G__39873 = cljs.core.count.call(null,c__4319__auto___39870);
var G__39874 = (0);
seq__39851_39859 = G__39871;
chunk__39852_39860 = G__39872;
count__39853_39861 = G__39873;
i__39854_39862 = G__39874;
continue;
} else {
var dep_39875 = cljs.core.first.call(null,seq__39851_39869__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_39875;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39875));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39875,(depth + (1)),state);
} else {
}


var G__39876 = cljs.core.next.call(null,seq__39851_39869__$1);
var G__39877 = null;
var G__39878 = (0);
var G__39879 = (0);
seq__39851_39859 = G__39876;
chunk__39852_39860 = G__39877;
count__39853_39861 = G__39878;
i__39854_39862 = G__39879;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39855){
var vec__39856 = p__39855;
var seq__39857 = cljs.core.seq.call(null,vec__39856);
var first__39858 = cljs.core.first.call(null,seq__39857);
var seq__39857__$1 = cljs.core.next.call(null,seq__39857);
var x = first__39858;
var xs = seq__39857__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39856,seq__39857,first__39858,seq__39857__$1,x,xs,get_deps__$1){
return (function (p1__39842_SHARP_){
return clojure.set.difference.call(null,p1__39842_SHARP_,x);
});})(vec__39856,seq__39857,first__39858,seq__39857__$1,x,xs,get_deps__$1))
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
var seq__39880 = cljs.core.seq.call(null,provides);
var chunk__39881 = null;
var count__39882 = (0);
var i__39883 = (0);
while(true){
if((i__39883 < count__39882)){
var prov = cljs.core._nth.call(null,chunk__39881,i__39883);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39884_39892 = cljs.core.seq.call(null,requires);
var chunk__39885_39893 = null;
var count__39886_39894 = (0);
var i__39887_39895 = (0);
while(true){
if((i__39887_39895 < count__39886_39894)){
var req_39896 = cljs.core._nth.call(null,chunk__39885_39893,i__39887_39895);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39896,prov);


var G__39897 = seq__39884_39892;
var G__39898 = chunk__39885_39893;
var G__39899 = count__39886_39894;
var G__39900 = (i__39887_39895 + (1));
seq__39884_39892 = G__39897;
chunk__39885_39893 = G__39898;
count__39886_39894 = G__39899;
i__39887_39895 = G__39900;
continue;
} else {
var temp__4657__auto___39901 = cljs.core.seq.call(null,seq__39884_39892);
if(temp__4657__auto___39901){
var seq__39884_39902__$1 = temp__4657__auto___39901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39884_39902__$1)){
var c__4319__auto___39903 = cljs.core.chunk_first.call(null,seq__39884_39902__$1);
var G__39904 = cljs.core.chunk_rest.call(null,seq__39884_39902__$1);
var G__39905 = c__4319__auto___39903;
var G__39906 = cljs.core.count.call(null,c__4319__auto___39903);
var G__39907 = (0);
seq__39884_39892 = G__39904;
chunk__39885_39893 = G__39905;
count__39886_39894 = G__39906;
i__39887_39895 = G__39907;
continue;
} else {
var req_39908 = cljs.core.first.call(null,seq__39884_39902__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39908,prov);


var G__39909 = cljs.core.next.call(null,seq__39884_39902__$1);
var G__39910 = null;
var G__39911 = (0);
var G__39912 = (0);
seq__39884_39892 = G__39909;
chunk__39885_39893 = G__39910;
count__39886_39894 = G__39911;
i__39887_39895 = G__39912;
continue;
}
} else {
}
}
break;
}


var G__39913 = seq__39880;
var G__39914 = chunk__39881;
var G__39915 = count__39882;
var G__39916 = (i__39883 + (1));
seq__39880 = G__39913;
chunk__39881 = G__39914;
count__39882 = G__39915;
i__39883 = G__39916;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39880);
if(temp__4657__auto__){
var seq__39880__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39880__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__39880__$1);
var G__39917 = cljs.core.chunk_rest.call(null,seq__39880__$1);
var G__39918 = c__4319__auto__;
var G__39919 = cljs.core.count.call(null,c__4319__auto__);
var G__39920 = (0);
seq__39880 = G__39917;
chunk__39881 = G__39918;
count__39882 = G__39919;
i__39883 = G__39920;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39880__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39888_39921 = cljs.core.seq.call(null,requires);
var chunk__39889_39922 = null;
var count__39890_39923 = (0);
var i__39891_39924 = (0);
while(true){
if((i__39891_39924 < count__39890_39923)){
var req_39925 = cljs.core._nth.call(null,chunk__39889_39922,i__39891_39924);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39925,prov);


var G__39926 = seq__39888_39921;
var G__39927 = chunk__39889_39922;
var G__39928 = count__39890_39923;
var G__39929 = (i__39891_39924 + (1));
seq__39888_39921 = G__39926;
chunk__39889_39922 = G__39927;
count__39890_39923 = G__39928;
i__39891_39924 = G__39929;
continue;
} else {
var temp__4657__auto___39930__$1 = cljs.core.seq.call(null,seq__39888_39921);
if(temp__4657__auto___39930__$1){
var seq__39888_39931__$1 = temp__4657__auto___39930__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39888_39931__$1)){
var c__4319__auto___39932 = cljs.core.chunk_first.call(null,seq__39888_39931__$1);
var G__39933 = cljs.core.chunk_rest.call(null,seq__39888_39931__$1);
var G__39934 = c__4319__auto___39932;
var G__39935 = cljs.core.count.call(null,c__4319__auto___39932);
var G__39936 = (0);
seq__39888_39921 = G__39933;
chunk__39889_39922 = G__39934;
count__39890_39923 = G__39935;
i__39891_39924 = G__39936;
continue;
} else {
var req_39937 = cljs.core.first.call(null,seq__39888_39931__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39937,prov);


var G__39938 = cljs.core.next.call(null,seq__39888_39931__$1);
var G__39939 = null;
var G__39940 = (0);
var G__39941 = (0);
seq__39888_39921 = G__39938;
chunk__39889_39922 = G__39939;
count__39890_39923 = G__39940;
i__39891_39924 = G__39941;
continue;
}
} else {
}
}
break;
}


var G__39942 = cljs.core.next.call(null,seq__39880__$1);
var G__39943 = null;
var G__39944 = (0);
var G__39945 = (0);
seq__39880 = G__39942;
chunk__39881 = G__39943;
count__39882 = G__39944;
i__39883 = G__39945;
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
var seq__39946_39950 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39947_39951 = null;
var count__39948_39952 = (0);
var i__39949_39953 = (0);
while(true){
if((i__39949_39953 < count__39948_39952)){
var ns_39954 = cljs.core._nth.call(null,chunk__39947_39951,i__39949_39953);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39954);


var G__39955 = seq__39946_39950;
var G__39956 = chunk__39947_39951;
var G__39957 = count__39948_39952;
var G__39958 = (i__39949_39953 + (1));
seq__39946_39950 = G__39955;
chunk__39947_39951 = G__39956;
count__39948_39952 = G__39957;
i__39949_39953 = G__39958;
continue;
} else {
var temp__4657__auto___39959 = cljs.core.seq.call(null,seq__39946_39950);
if(temp__4657__auto___39959){
var seq__39946_39960__$1 = temp__4657__auto___39959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39946_39960__$1)){
var c__4319__auto___39961 = cljs.core.chunk_first.call(null,seq__39946_39960__$1);
var G__39962 = cljs.core.chunk_rest.call(null,seq__39946_39960__$1);
var G__39963 = c__4319__auto___39961;
var G__39964 = cljs.core.count.call(null,c__4319__auto___39961);
var G__39965 = (0);
seq__39946_39950 = G__39962;
chunk__39947_39951 = G__39963;
count__39948_39952 = G__39964;
i__39949_39953 = G__39965;
continue;
} else {
var ns_39966 = cljs.core.first.call(null,seq__39946_39960__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39966);


var G__39967 = cljs.core.next.call(null,seq__39946_39960__$1);
var G__39968 = null;
var G__39969 = (0);
var G__39970 = (0);
seq__39946_39950 = G__39967;
chunk__39947_39951 = G__39968;
count__39948_39952 = G__39969;
i__39949_39953 = G__39970;
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
var G__39971__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39972__i = 0, G__39972__a = new Array(arguments.length -  0);
while (G__39972__i < G__39972__a.length) {G__39972__a[G__39972__i] = arguments[G__39972__i + 0]; ++G__39972__i;}
  args = new cljs.core.IndexedSeq(G__39972__a,0,null);
} 
return G__39971__delegate.call(this,args);};
G__39971.cljs$lang$maxFixedArity = 0;
G__39971.cljs$lang$applyTo = (function (arglist__39973){
var args = cljs.core.seq(arglist__39973);
return G__39971__delegate(args);
});
G__39971.cljs$core$IFn$_invoke$arity$variadic = G__39971__delegate;
return G__39971;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__39974_SHARP_,p2__39975_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39974_SHARP_)].join('')),p2__39975_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__39976_SHARP_,p2__39977_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39976_SHARP_)].join(''),p2__39977_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__39978 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39978.addCallback(((function (G__39978){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__39978))
);

G__39978.addErrback(((function (G__39978){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__39978))
);

return G__39978;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39979){if((e39979 instanceof Error)){
var e = e39979;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39979;

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
}catch (e39980){if((e39980 instanceof Error)){
var e = e39980;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39980;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39981 = cljs.core._EQ_;
var expr__39982 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39981.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39982))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__39981.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39982))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__39981.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39982))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__39981,expr__39982){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39981,expr__39982))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39984,callback){
var map__39985 = p__39984;
var map__39985__$1 = ((((!((map__39985 == null)))?(((((map__39985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39985):map__39985);
var file_msg = map__39985__$1;
var request_url = cljs.core.get.call(null,map__39985__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__39985,map__39985__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39985,map__39985__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto__){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto__){
return (function (state_40023){
var state_val_40024 = (state_40023[(1)]);
if((state_val_40024 === (7))){
var inst_40019 = (state_40023[(2)]);
var state_40023__$1 = state_40023;
var statearr_40025_40051 = state_40023__$1;
(statearr_40025_40051[(2)] = inst_40019);

(statearr_40025_40051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (1))){
var state_40023__$1 = state_40023;
var statearr_40026_40052 = state_40023__$1;
(statearr_40026_40052[(2)] = null);

(statearr_40026_40052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (4))){
var inst_39989 = (state_40023[(7)]);
var inst_39989__$1 = (state_40023[(2)]);
var state_40023__$1 = (function (){var statearr_40027 = state_40023;
(statearr_40027[(7)] = inst_39989__$1);

return statearr_40027;
})();
if(cljs.core.truth_(inst_39989__$1)){
var statearr_40028_40053 = state_40023__$1;
(statearr_40028_40053[(1)] = (5));

} else {
var statearr_40029_40054 = state_40023__$1;
(statearr_40029_40054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (15))){
var inst_40004 = (state_40023[(8)]);
var inst_40002 = (state_40023[(9)]);
var inst_40006 = inst_40004.call(null,inst_40002);
var state_40023__$1 = state_40023;
var statearr_40030_40055 = state_40023__$1;
(statearr_40030_40055[(2)] = inst_40006);

(statearr_40030_40055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (13))){
var inst_40013 = (state_40023[(2)]);
var state_40023__$1 = state_40023;
var statearr_40031_40056 = state_40023__$1;
(statearr_40031_40056[(2)] = inst_40013);

(statearr_40031_40056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (6))){
var state_40023__$1 = state_40023;
var statearr_40032_40057 = state_40023__$1;
(statearr_40032_40057[(2)] = null);

(statearr_40032_40057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (17))){
var inst_40010 = (state_40023[(2)]);
var state_40023__$1 = state_40023;
var statearr_40033_40058 = state_40023__$1;
(statearr_40033_40058[(2)] = inst_40010);

(statearr_40033_40058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (3))){
var inst_40021 = (state_40023[(2)]);
var state_40023__$1 = state_40023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40023__$1,inst_40021);
} else {
if((state_val_40024 === (12))){
var state_40023__$1 = state_40023;
var statearr_40034_40059 = state_40023__$1;
(statearr_40034_40059[(2)] = null);

(statearr_40034_40059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (2))){
var state_40023__$1 = state_40023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40023__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40024 === (11))){
var inst_39994 = (state_40023[(10)]);
var inst_40000 = figwheel.client.file_reloading.blocking_load.call(null,inst_39994);
var state_40023__$1 = state_40023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40023__$1,(14),inst_40000);
} else {
if((state_val_40024 === (9))){
var inst_39994 = (state_40023[(10)]);
var state_40023__$1 = state_40023;
if(cljs.core.truth_(inst_39994)){
var statearr_40035_40060 = state_40023__$1;
(statearr_40035_40060[(1)] = (11));

} else {
var statearr_40036_40061 = state_40023__$1;
(statearr_40036_40061[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (5))){
var inst_39989 = (state_40023[(7)]);
var inst_39995 = (state_40023[(11)]);
var inst_39994 = cljs.core.nth.call(null,inst_39989,(0),null);
var inst_39995__$1 = cljs.core.nth.call(null,inst_39989,(1),null);
var state_40023__$1 = (function (){var statearr_40037 = state_40023;
(statearr_40037[(11)] = inst_39995__$1);

(statearr_40037[(10)] = inst_39994);

return statearr_40037;
})();
if(cljs.core.truth_(inst_39995__$1)){
var statearr_40038_40062 = state_40023__$1;
(statearr_40038_40062[(1)] = (8));

} else {
var statearr_40039_40063 = state_40023__$1;
(statearr_40039_40063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (14))){
var inst_40004 = (state_40023[(8)]);
var inst_39994 = (state_40023[(10)]);
var inst_40002 = (state_40023[(2)]);
var inst_40003 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40004__$1 = cljs.core.get.call(null,inst_40003,inst_39994);
var state_40023__$1 = (function (){var statearr_40040 = state_40023;
(statearr_40040[(8)] = inst_40004__$1);

(statearr_40040[(9)] = inst_40002);

return statearr_40040;
})();
if(cljs.core.truth_(inst_40004__$1)){
var statearr_40041_40064 = state_40023__$1;
(statearr_40041_40064[(1)] = (15));

} else {
var statearr_40042_40065 = state_40023__$1;
(statearr_40042_40065[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (16))){
var inst_40002 = (state_40023[(9)]);
var inst_40008 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40002);
var state_40023__$1 = state_40023;
var statearr_40043_40066 = state_40023__$1;
(statearr_40043_40066[(2)] = inst_40008);

(statearr_40043_40066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (10))){
var inst_40015 = (state_40023[(2)]);
var state_40023__$1 = (function (){var statearr_40044 = state_40023;
(statearr_40044[(12)] = inst_40015);

return statearr_40044;
})();
var statearr_40045_40067 = state_40023__$1;
(statearr_40045_40067[(2)] = null);

(statearr_40045_40067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40024 === (8))){
var inst_39995 = (state_40023[(11)]);
var inst_39997 = eval(inst_39995);
var state_40023__$1 = state_40023;
var statearr_40046_40068 = state_40023__$1;
(statearr_40046_40068[(2)] = inst_39997);

(statearr_40046_40068[(1)] = (10));


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
});})(c__22784__auto__))
;
return ((function (switch__22629__auto__,c__22784__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22630__auto__ = null;
var figwheel$client$file_reloading$state_machine__22630__auto____0 = (function (){
var statearr_40047 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40047[(0)] = figwheel$client$file_reloading$state_machine__22630__auto__);

(statearr_40047[(1)] = (1));

return statearr_40047;
});
var figwheel$client$file_reloading$state_machine__22630__auto____1 = (function (state_40023){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_40023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e40048){if((e40048 instanceof Object)){
var ex__22633__auto__ = e40048;
var statearr_40049_40069 = state_40023;
(statearr_40049_40069[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40070 = state_40023;
state_40023 = G__40070;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22630__auto__ = function(state_40023){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22630__auto____1.call(this,state_40023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22630__auto____0;
figwheel$client$file_reloading$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22630__auto____1;
return figwheel$client$file_reloading$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto__))
})();
var state__22786__auto__ = (function (){var statearr_40050 = f__22785__auto__.call(null);
(statearr_40050[(6)] = c__22784__auto__);

return statearr_40050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto__))
);

return c__22784__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__40072 = arguments.length;
switch (G__40072) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40074,callback){
var map__40075 = p__40074;
var map__40075__$1 = ((((!((map__40075 == null)))?(((((map__40075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40075):map__40075);
var file_msg = map__40075__$1;
var namespace = cljs.core.get.call(null,map__40075__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40075,map__40075__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40075,map__40075__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__40077){
var map__40078 = p__40077;
var map__40078__$1 = ((((!((map__40078 == null)))?(((((map__40078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40078):map__40078);
var file_msg = map__40078__$1;
var namespace = cljs.core.get.call(null,map__40078__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40080){
var map__40081 = p__40080;
var map__40081__$1 = ((((!((map__40081 == null)))?(((((map__40081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40081):map__40081);
var file_msg = map__40081__$1;
var namespace = cljs.core.get.call(null,map__40081__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40083,callback){
var map__40084 = p__40083;
var map__40084__$1 = ((((!((map__40084 == null)))?(((((map__40084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40084):map__40084);
var file_msg = map__40084__$1;
var request_url = cljs.core.get.call(null,map__40084__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40084__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22784__auto___40134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___40134,out){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___40134,out){
return (function (state_40119){
var state_val_40120 = (state_40119[(1)]);
if((state_val_40120 === (1))){
var inst_40093 = cljs.core.seq.call(null,files);
var inst_40094 = cljs.core.first.call(null,inst_40093);
var inst_40095 = cljs.core.next.call(null,inst_40093);
var inst_40096 = files;
var state_40119__$1 = (function (){var statearr_40121 = state_40119;
(statearr_40121[(7)] = inst_40096);

(statearr_40121[(8)] = inst_40094);

(statearr_40121[(9)] = inst_40095);

return statearr_40121;
})();
var statearr_40122_40135 = state_40119__$1;
(statearr_40122_40135[(2)] = null);

(statearr_40122_40135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40120 === (2))){
var inst_40096 = (state_40119[(7)]);
var inst_40102 = (state_40119[(10)]);
var inst_40101 = cljs.core.seq.call(null,inst_40096);
var inst_40102__$1 = cljs.core.first.call(null,inst_40101);
var inst_40103 = cljs.core.next.call(null,inst_40101);
var inst_40104 = (inst_40102__$1 == null);
var inst_40105 = cljs.core.not.call(null,inst_40104);
var state_40119__$1 = (function (){var statearr_40123 = state_40119;
(statearr_40123[(10)] = inst_40102__$1);

(statearr_40123[(11)] = inst_40103);

return statearr_40123;
})();
if(inst_40105){
var statearr_40124_40136 = state_40119__$1;
(statearr_40124_40136[(1)] = (4));

} else {
var statearr_40125_40137 = state_40119__$1;
(statearr_40125_40137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40120 === (3))){
var inst_40117 = (state_40119[(2)]);
var state_40119__$1 = state_40119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40119__$1,inst_40117);
} else {
if((state_val_40120 === (4))){
var inst_40102 = (state_40119[(10)]);
var inst_40107 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40102);
var state_40119__$1 = state_40119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40119__$1,(7),inst_40107);
} else {
if((state_val_40120 === (5))){
var inst_40113 = cljs.core.async.close_BANG_.call(null,out);
var state_40119__$1 = state_40119;
var statearr_40126_40138 = state_40119__$1;
(statearr_40126_40138[(2)] = inst_40113);

(statearr_40126_40138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40120 === (6))){
var inst_40115 = (state_40119[(2)]);
var state_40119__$1 = state_40119;
var statearr_40127_40139 = state_40119__$1;
(statearr_40127_40139[(2)] = inst_40115);

(statearr_40127_40139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40120 === (7))){
var inst_40103 = (state_40119[(11)]);
var inst_40109 = (state_40119[(2)]);
var inst_40110 = cljs.core.async.put_BANG_.call(null,out,inst_40109);
var inst_40096 = inst_40103;
var state_40119__$1 = (function (){var statearr_40128 = state_40119;
(statearr_40128[(7)] = inst_40096);

(statearr_40128[(12)] = inst_40110);

return statearr_40128;
})();
var statearr_40129_40140 = state_40119__$1;
(statearr_40129_40140[(2)] = null);

(statearr_40129_40140[(1)] = (2));


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
});})(c__22784__auto___40134,out))
;
return ((function (switch__22629__auto__,c__22784__auto___40134,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto____0 = (function (){
var statearr_40130 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40130[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto__);

(statearr_40130[(1)] = (1));

return statearr_40130;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto____1 = (function (state_40119){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_40119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e40131){if((e40131 instanceof Object)){
var ex__22633__auto__ = e40131;
var statearr_40132_40141 = state_40119;
(statearr_40132_40141[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40142 = state_40119;
state_40119 = G__40142;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto__ = function(state_40119){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto____1.call(this,state_40119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___40134,out))
})();
var state__22786__auto__ = (function (){var statearr_40133 = f__22785__auto__.call(null);
(statearr_40133[(6)] = c__22784__auto___40134);

return statearr_40133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___40134,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40143,opts){
var map__40144 = p__40143;
var map__40144__$1 = ((((!((map__40144 == null)))?(((((map__40144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40144):map__40144);
var eval_body = cljs.core.get.call(null,map__40144__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40144__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e40146){var e = e40146;
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
return (function (p1__40147_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40147_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__40148){
var vec__40149 = p__40148;
var k = cljs.core.nth.call(null,vec__40149,(0),null);
var v = cljs.core.nth.call(null,vec__40149,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40152){
var vec__40153 = p__40152;
var k = cljs.core.nth.call(null,vec__40153,(0),null);
var v = cljs.core.nth.call(null,vec__40153,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40159,p__40160){
var map__40161 = p__40159;
var map__40161__$1 = ((((!((map__40161 == null)))?(((((map__40161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40161):map__40161);
var opts = map__40161__$1;
var before_jsload = cljs.core.get.call(null,map__40161__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40161__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40161__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40162 = p__40160;
var map__40162__$1 = ((((!((map__40162 == null)))?(((((map__40162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40162):map__40162);
var msg = map__40162__$1;
var files = cljs.core.get.call(null,map__40162__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40162__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40162__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40316){
var state_val_40317 = (state_40316[(1)]);
if((state_val_40317 === (7))){
var inst_40176 = (state_40316[(7)]);
var inst_40179 = (state_40316[(8)]);
var inst_40177 = (state_40316[(9)]);
var inst_40178 = (state_40316[(10)]);
var inst_40184 = cljs.core._nth.call(null,inst_40177,inst_40179);
var inst_40185 = figwheel.client.file_reloading.eval_body.call(null,inst_40184,opts);
var inst_40186 = (inst_40179 + (1));
var tmp40318 = inst_40176;
var tmp40319 = inst_40177;
var tmp40320 = inst_40178;
var inst_40176__$1 = tmp40318;
var inst_40177__$1 = tmp40319;
var inst_40178__$1 = tmp40320;
var inst_40179__$1 = inst_40186;
var state_40316__$1 = (function (){var statearr_40321 = state_40316;
(statearr_40321[(11)] = inst_40185);

(statearr_40321[(7)] = inst_40176__$1);

(statearr_40321[(8)] = inst_40179__$1);

(statearr_40321[(9)] = inst_40177__$1);

(statearr_40321[(10)] = inst_40178__$1);

return statearr_40321;
})();
var statearr_40322_40405 = state_40316__$1;
(statearr_40322_40405[(2)] = null);

(statearr_40322_40405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (20))){
var inst_40219 = (state_40316[(12)]);
var inst_40227 = figwheel.client.file_reloading.sort_files.call(null,inst_40219);
var state_40316__$1 = state_40316;
var statearr_40323_40406 = state_40316__$1;
(statearr_40323_40406[(2)] = inst_40227);

(statearr_40323_40406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (27))){
var state_40316__$1 = state_40316;
var statearr_40324_40407 = state_40316__$1;
(statearr_40324_40407[(2)] = null);

(statearr_40324_40407[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (1))){
var inst_40168 = (state_40316[(13)]);
var inst_40165 = before_jsload.call(null,files);
var inst_40166 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40167 = (function (){return ((function (inst_40168,inst_40165,inst_40166,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40156_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40156_SHARP_);
});
;})(inst_40168,inst_40165,inst_40166,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40168__$1 = cljs.core.filter.call(null,inst_40167,files);
var inst_40169 = cljs.core.not_empty.call(null,inst_40168__$1);
var state_40316__$1 = (function (){var statearr_40325 = state_40316;
(statearr_40325[(14)] = inst_40165);

(statearr_40325[(15)] = inst_40166);

(statearr_40325[(13)] = inst_40168__$1);

return statearr_40325;
})();
if(cljs.core.truth_(inst_40169)){
var statearr_40326_40408 = state_40316__$1;
(statearr_40326_40408[(1)] = (2));

} else {
var statearr_40327_40409 = state_40316__$1;
(statearr_40327_40409[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (24))){
var state_40316__$1 = state_40316;
var statearr_40328_40410 = state_40316__$1;
(statearr_40328_40410[(2)] = null);

(statearr_40328_40410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (39))){
var inst_40269 = (state_40316[(16)]);
var state_40316__$1 = state_40316;
var statearr_40329_40411 = state_40316__$1;
(statearr_40329_40411[(2)] = inst_40269);

(statearr_40329_40411[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (46))){
var inst_40311 = (state_40316[(2)]);
var state_40316__$1 = state_40316;
var statearr_40330_40412 = state_40316__$1;
(statearr_40330_40412[(2)] = inst_40311);

(statearr_40330_40412[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (4))){
var inst_40213 = (state_40316[(2)]);
var inst_40214 = cljs.core.List.EMPTY;
var inst_40215 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40214);
var inst_40216 = (function (){return ((function (inst_40213,inst_40214,inst_40215,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40157_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40157_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40157_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__40157_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_40213,inst_40214,inst_40215,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40217 = cljs.core.filter.call(null,inst_40216,files);
var inst_40218 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40219 = cljs.core.concat.call(null,inst_40217,inst_40218);
var state_40316__$1 = (function (){var statearr_40331 = state_40316;
(statearr_40331[(12)] = inst_40219);

(statearr_40331[(17)] = inst_40215);

(statearr_40331[(18)] = inst_40213);

return statearr_40331;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40332_40413 = state_40316__$1;
(statearr_40332_40413[(1)] = (16));

} else {
var statearr_40333_40414 = state_40316__$1;
(statearr_40333_40414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (15))){
var inst_40203 = (state_40316[(2)]);
var state_40316__$1 = state_40316;
var statearr_40334_40415 = state_40316__$1;
(statearr_40334_40415[(2)] = inst_40203);

(statearr_40334_40415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (21))){
var inst_40229 = (state_40316[(19)]);
var inst_40229__$1 = (state_40316[(2)]);
var inst_40230 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40229__$1);
var state_40316__$1 = (function (){var statearr_40335 = state_40316;
(statearr_40335[(19)] = inst_40229__$1);

return statearr_40335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40316__$1,(22),inst_40230);
} else {
if((state_val_40317 === (31))){
var inst_40314 = (state_40316[(2)]);
var state_40316__$1 = state_40316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40316__$1,inst_40314);
} else {
if((state_val_40317 === (32))){
var inst_40269 = (state_40316[(16)]);
var inst_40274 = inst_40269.cljs$lang$protocol_mask$partition0$;
var inst_40275 = (inst_40274 & (64));
var inst_40276 = inst_40269.cljs$core$ISeq$;
var inst_40277 = (cljs.core.PROTOCOL_SENTINEL === inst_40276);
var inst_40278 = ((inst_40275) || (inst_40277));
var state_40316__$1 = state_40316;
if(cljs.core.truth_(inst_40278)){
var statearr_40336_40416 = state_40316__$1;
(statearr_40336_40416[(1)] = (35));

} else {
var statearr_40337_40417 = state_40316__$1;
(statearr_40337_40417[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (40))){
var inst_40291 = (state_40316[(20)]);
var inst_40290 = (state_40316[(2)]);
var inst_40291__$1 = cljs.core.get.call(null,inst_40290,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40292 = cljs.core.get.call(null,inst_40290,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40293 = cljs.core.not_empty.call(null,inst_40291__$1);
var state_40316__$1 = (function (){var statearr_40338 = state_40316;
(statearr_40338[(20)] = inst_40291__$1);

(statearr_40338[(21)] = inst_40292);

return statearr_40338;
})();
if(cljs.core.truth_(inst_40293)){
var statearr_40339_40418 = state_40316__$1;
(statearr_40339_40418[(1)] = (41));

} else {
var statearr_40340_40419 = state_40316__$1;
(statearr_40340_40419[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (33))){
var state_40316__$1 = state_40316;
var statearr_40341_40420 = state_40316__$1;
(statearr_40341_40420[(2)] = false);

(statearr_40341_40420[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (13))){
var inst_40189 = (state_40316[(22)]);
var inst_40193 = cljs.core.chunk_first.call(null,inst_40189);
var inst_40194 = cljs.core.chunk_rest.call(null,inst_40189);
var inst_40195 = cljs.core.count.call(null,inst_40193);
var inst_40176 = inst_40194;
var inst_40177 = inst_40193;
var inst_40178 = inst_40195;
var inst_40179 = (0);
var state_40316__$1 = (function (){var statearr_40342 = state_40316;
(statearr_40342[(7)] = inst_40176);

(statearr_40342[(8)] = inst_40179);

(statearr_40342[(9)] = inst_40177);

(statearr_40342[(10)] = inst_40178);

return statearr_40342;
})();
var statearr_40343_40421 = state_40316__$1;
(statearr_40343_40421[(2)] = null);

(statearr_40343_40421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (22))){
var inst_40229 = (state_40316[(19)]);
var inst_40233 = (state_40316[(23)]);
var inst_40232 = (state_40316[(24)]);
var inst_40237 = (state_40316[(25)]);
var inst_40232__$1 = (state_40316[(2)]);
var inst_40233__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40232__$1);
var inst_40234 = (function (){var all_files = inst_40229;
var res_SINGLEQUOTE_ = inst_40232__$1;
var res = inst_40233__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40229,inst_40233,inst_40232,inst_40237,inst_40232__$1,inst_40233__$1,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40158_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40158_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40229,inst_40233,inst_40232,inst_40237,inst_40232__$1,inst_40233__$1,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40235 = cljs.core.filter.call(null,inst_40234,inst_40232__$1);
var inst_40236 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40237__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40236);
var inst_40238 = cljs.core.not_empty.call(null,inst_40237__$1);
var state_40316__$1 = (function (){var statearr_40344 = state_40316;
(statearr_40344[(23)] = inst_40233__$1);

(statearr_40344[(24)] = inst_40232__$1);

(statearr_40344[(26)] = inst_40235);

(statearr_40344[(25)] = inst_40237__$1);

return statearr_40344;
})();
if(cljs.core.truth_(inst_40238)){
var statearr_40345_40422 = state_40316__$1;
(statearr_40345_40422[(1)] = (23));

} else {
var statearr_40346_40423 = state_40316__$1;
(statearr_40346_40423[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (36))){
var state_40316__$1 = state_40316;
var statearr_40347_40424 = state_40316__$1;
(statearr_40347_40424[(2)] = false);

(statearr_40347_40424[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (41))){
var inst_40291 = (state_40316[(20)]);
var inst_40295 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40296 = cljs.core.map.call(null,inst_40295,inst_40291);
var inst_40297 = cljs.core.pr_str.call(null,inst_40296);
var inst_40298 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40297)].join('');
var inst_40299 = figwheel.client.utils.log.call(null,inst_40298);
var state_40316__$1 = state_40316;
var statearr_40348_40425 = state_40316__$1;
(statearr_40348_40425[(2)] = inst_40299);

(statearr_40348_40425[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (43))){
var inst_40292 = (state_40316[(21)]);
var inst_40302 = (state_40316[(2)]);
var inst_40303 = cljs.core.not_empty.call(null,inst_40292);
var state_40316__$1 = (function (){var statearr_40349 = state_40316;
(statearr_40349[(27)] = inst_40302);

return statearr_40349;
})();
if(cljs.core.truth_(inst_40303)){
var statearr_40350_40426 = state_40316__$1;
(statearr_40350_40426[(1)] = (44));

} else {
var statearr_40351_40427 = state_40316__$1;
(statearr_40351_40427[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (29))){
var inst_40229 = (state_40316[(19)]);
var inst_40233 = (state_40316[(23)]);
var inst_40232 = (state_40316[(24)]);
var inst_40235 = (state_40316[(26)]);
var inst_40237 = (state_40316[(25)]);
var inst_40269 = (state_40316[(16)]);
var inst_40265 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40268 = (function (){var all_files = inst_40229;
var res_SINGLEQUOTE_ = inst_40232;
var res = inst_40233;
var files_not_loaded = inst_40235;
var dependencies_that_loaded = inst_40237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40233,inst_40232,inst_40235,inst_40237,inst_40269,inst_40265,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40267){
var map__40352 = p__40267;
var map__40352__$1 = ((((!((map__40352 == null)))?(((((map__40352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40352):map__40352);
var namespace = cljs.core.get.call(null,map__40352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40233,inst_40232,inst_40235,inst_40237,inst_40269,inst_40265,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40269__$1 = cljs.core.group_by.call(null,inst_40268,inst_40235);
var inst_40271 = (inst_40269__$1 == null);
var inst_40272 = cljs.core.not.call(null,inst_40271);
var state_40316__$1 = (function (){var statearr_40354 = state_40316;
(statearr_40354[(28)] = inst_40265);

(statearr_40354[(16)] = inst_40269__$1);

return statearr_40354;
})();
if(inst_40272){
var statearr_40355_40428 = state_40316__$1;
(statearr_40355_40428[(1)] = (32));

} else {
var statearr_40356_40429 = state_40316__$1;
(statearr_40356_40429[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (44))){
var inst_40292 = (state_40316[(21)]);
var inst_40305 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40292);
var inst_40306 = cljs.core.pr_str.call(null,inst_40305);
var inst_40307 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40306)].join('');
var inst_40308 = figwheel.client.utils.log.call(null,inst_40307);
var state_40316__$1 = state_40316;
var statearr_40357_40430 = state_40316__$1;
(statearr_40357_40430[(2)] = inst_40308);

(statearr_40357_40430[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (6))){
var inst_40210 = (state_40316[(2)]);
var state_40316__$1 = state_40316;
var statearr_40358_40431 = state_40316__$1;
(statearr_40358_40431[(2)] = inst_40210);

(statearr_40358_40431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (28))){
var inst_40235 = (state_40316[(26)]);
var inst_40262 = (state_40316[(2)]);
var inst_40263 = cljs.core.not_empty.call(null,inst_40235);
var state_40316__$1 = (function (){var statearr_40359 = state_40316;
(statearr_40359[(29)] = inst_40262);

return statearr_40359;
})();
if(cljs.core.truth_(inst_40263)){
var statearr_40360_40432 = state_40316__$1;
(statearr_40360_40432[(1)] = (29));

} else {
var statearr_40361_40433 = state_40316__$1;
(statearr_40361_40433[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (25))){
var inst_40233 = (state_40316[(23)]);
var inst_40249 = (state_40316[(2)]);
var inst_40250 = cljs.core.not_empty.call(null,inst_40233);
var state_40316__$1 = (function (){var statearr_40362 = state_40316;
(statearr_40362[(30)] = inst_40249);

return statearr_40362;
})();
if(cljs.core.truth_(inst_40250)){
var statearr_40363_40434 = state_40316__$1;
(statearr_40363_40434[(1)] = (26));

} else {
var statearr_40364_40435 = state_40316__$1;
(statearr_40364_40435[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (34))){
var inst_40285 = (state_40316[(2)]);
var state_40316__$1 = state_40316;
if(cljs.core.truth_(inst_40285)){
var statearr_40365_40436 = state_40316__$1;
(statearr_40365_40436[(1)] = (38));

} else {
var statearr_40366_40437 = state_40316__$1;
(statearr_40366_40437[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (17))){
var state_40316__$1 = state_40316;
var statearr_40367_40438 = state_40316__$1;
(statearr_40367_40438[(2)] = recompile_dependents);

(statearr_40367_40438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (3))){
var state_40316__$1 = state_40316;
var statearr_40368_40439 = state_40316__$1;
(statearr_40368_40439[(2)] = null);

(statearr_40368_40439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (12))){
var inst_40206 = (state_40316[(2)]);
var state_40316__$1 = state_40316;
var statearr_40369_40440 = state_40316__$1;
(statearr_40369_40440[(2)] = inst_40206);

(statearr_40369_40440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (2))){
var inst_40168 = (state_40316[(13)]);
var inst_40175 = cljs.core.seq.call(null,inst_40168);
var inst_40176 = inst_40175;
var inst_40177 = null;
var inst_40178 = (0);
var inst_40179 = (0);
var state_40316__$1 = (function (){var statearr_40370 = state_40316;
(statearr_40370[(7)] = inst_40176);

(statearr_40370[(8)] = inst_40179);

(statearr_40370[(9)] = inst_40177);

(statearr_40370[(10)] = inst_40178);

return statearr_40370;
})();
var statearr_40371_40441 = state_40316__$1;
(statearr_40371_40441[(2)] = null);

(statearr_40371_40441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (23))){
var inst_40229 = (state_40316[(19)]);
var inst_40233 = (state_40316[(23)]);
var inst_40232 = (state_40316[(24)]);
var inst_40235 = (state_40316[(26)]);
var inst_40237 = (state_40316[(25)]);
var inst_40240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40242 = (function (){var all_files = inst_40229;
var res_SINGLEQUOTE_ = inst_40232;
var res = inst_40233;
var files_not_loaded = inst_40235;
var dependencies_that_loaded = inst_40237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40233,inst_40232,inst_40235,inst_40237,inst_40240,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40241){
var map__40372 = p__40241;
var map__40372__$1 = ((((!((map__40372 == null)))?(((((map__40372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40372):map__40372);
var request_url = cljs.core.get.call(null,map__40372__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40233,inst_40232,inst_40235,inst_40237,inst_40240,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40243 = cljs.core.reverse.call(null,inst_40237);
var inst_40244 = cljs.core.map.call(null,inst_40242,inst_40243);
var inst_40245 = cljs.core.pr_str.call(null,inst_40244);
var inst_40246 = figwheel.client.utils.log.call(null,inst_40245);
var state_40316__$1 = (function (){var statearr_40374 = state_40316;
(statearr_40374[(31)] = inst_40240);

return statearr_40374;
})();
var statearr_40375_40442 = state_40316__$1;
(statearr_40375_40442[(2)] = inst_40246);

(statearr_40375_40442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (35))){
var state_40316__$1 = state_40316;
var statearr_40376_40443 = state_40316__$1;
(statearr_40376_40443[(2)] = true);

(statearr_40376_40443[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (19))){
var inst_40219 = (state_40316[(12)]);
var inst_40225 = figwheel.client.file_reloading.expand_files.call(null,inst_40219);
var state_40316__$1 = state_40316;
var statearr_40377_40444 = state_40316__$1;
(statearr_40377_40444[(2)] = inst_40225);

(statearr_40377_40444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (11))){
var state_40316__$1 = state_40316;
var statearr_40378_40445 = state_40316__$1;
(statearr_40378_40445[(2)] = null);

(statearr_40378_40445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (9))){
var inst_40208 = (state_40316[(2)]);
var state_40316__$1 = state_40316;
var statearr_40379_40446 = state_40316__$1;
(statearr_40379_40446[(2)] = inst_40208);

(statearr_40379_40446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (5))){
var inst_40179 = (state_40316[(8)]);
var inst_40178 = (state_40316[(10)]);
var inst_40181 = (inst_40179 < inst_40178);
var inst_40182 = inst_40181;
var state_40316__$1 = state_40316;
if(cljs.core.truth_(inst_40182)){
var statearr_40380_40447 = state_40316__$1;
(statearr_40380_40447[(1)] = (7));

} else {
var statearr_40381_40448 = state_40316__$1;
(statearr_40381_40448[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (14))){
var inst_40189 = (state_40316[(22)]);
var inst_40198 = cljs.core.first.call(null,inst_40189);
var inst_40199 = figwheel.client.file_reloading.eval_body.call(null,inst_40198,opts);
var inst_40200 = cljs.core.next.call(null,inst_40189);
var inst_40176 = inst_40200;
var inst_40177 = null;
var inst_40178 = (0);
var inst_40179 = (0);
var state_40316__$1 = (function (){var statearr_40382 = state_40316;
(statearr_40382[(32)] = inst_40199);

(statearr_40382[(7)] = inst_40176);

(statearr_40382[(8)] = inst_40179);

(statearr_40382[(9)] = inst_40177);

(statearr_40382[(10)] = inst_40178);

return statearr_40382;
})();
var statearr_40383_40449 = state_40316__$1;
(statearr_40383_40449[(2)] = null);

(statearr_40383_40449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (45))){
var state_40316__$1 = state_40316;
var statearr_40384_40450 = state_40316__$1;
(statearr_40384_40450[(2)] = null);

(statearr_40384_40450[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (26))){
var inst_40229 = (state_40316[(19)]);
var inst_40233 = (state_40316[(23)]);
var inst_40232 = (state_40316[(24)]);
var inst_40235 = (state_40316[(26)]);
var inst_40237 = (state_40316[(25)]);
var inst_40252 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40254 = (function (){var all_files = inst_40229;
var res_SINGLEQUOTE_ = inst_40232;
var res = inst_40233;
var files_not_loaded = inst_40235;
var dependencies_that_loaded = inst_40237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40233,inst_40232,inst_40235,inst_40237,inst_40252,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40253){
var map__40385 = p__40253;
var map__40385__$1 = ((((!((map__40385 == null)))?(((((map__40385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40385):map__40385);
var namespace = cljs.core.get.call(null,map__40385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40385__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40233,inst_40232,inst_40235,inst_40237,inst_40252,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40255 = cljs.core.map.call(null,inst_40254,inst_40233);
var inst_40256 = cljs.core.pr_str.call(null,inst_40255);
var inst_40257 = figwheel.client.utils.log.call(null,inst_40256);
var inst_40258 = (function (){var all_files = inst_40229;
var res_SINGLEQUOTE_ = inst_40232;
var res = inst_40233;
var files_not_loaded = inst_40235;
var dependencies_that_loaded = inst_40237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40233,inst_40232,inst_40235,inst_40237,inst_40252,inst_40254,inst_40255,inst_40256,inst_40257,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40233,inst_40232,inst_40235,inst_40237,inst_40252,inst_40254,inst_40255,inst_40256,inst_40257,state_val_40317,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40259 = setTimeout(inst_40258,(10));
var state_40316__$1 = (function (){var statearr_40387 = state_40316;
(statearr_40387[(33)] = inst_40252);

(statearr_40387[(34)] = inst_40257);

return statearr_40387;
})();
var statearr_40388_40451 = state_40316__$1;
(statearr_40388_40451[(2)] = inst_40259);

(statearr_40388_40451[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (16))){
var state_40316__$1 = state_40316;
var statearr_40389_40452 = state_40316__$1;
(statearr_40389_40452[(2)] = reload_dependents);

(statearr_40389_40452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (38))){
var inst_40269 = (state_40316[(16)]);
var inst_40287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40269);
var state_40316__$1 = state_40316;
var statearr_40390_40453 = state_40316__$1;
(statearr_40390_40453[(2)] = inst_40287);

(statearr_40390_40453[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (30))){
var state_40316__$1 = state_40316;
var statearr_40391_40454 = state_40316__$1;
(statearr_40391_40454[(2)] = null);

(statearr_40391_40454[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (10))){
var inst_40189 = (state_40316[(22)]);
var inst_40191 = cljs.core.chunked_seq_QMARK_.call(null,inst_40189);
var state_40316__$1 = state_40316;
if(inst_40191){
var statearr_40392_40455 = state_40316__$1;
(statearr_40392_40455[(1)] = (13));

} else {
var statearr_40393_40456 = state_40316__$1;
(statearr_40393_40456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (18))){
var inst_40223 = (state_40316[(2)]);
var state_40316__$1 = state_40316;
if(cljs.core.truth_(inst_40223)){
var statearr_40394_40457 = state_40316__$1;
(statearr_40394_40457[(1)] = (19));

} else {
var statearr_40395_40458 = state_40316__$1;
(statearr_40395_40458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (42))){
var state_40316__$1 = state_40316;
var statearr_40396_40459 = state_40316__$1;
(statearr_40396_40459[(2)] = null);

(statearr_40396_40459[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (37))){
var inst_40282 = (state_40316[(2)]);
var state_40316__$1 = state_40316;
var statearr_40397_40460 = state_40316__$1;
(statearr_40397_40460[(2)] = inst_40282);

(statearr_40397_40460[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40317 === (8))){
var inst_40176 = (state_40316[(7)]);
var inst_40189 = (state_40316[(22)]);
var inst_40189__$1 = cljs.core.seq.call(null,inst_40176);
var state_40316__$1 = (function (){var statearr_40398 = state_40316;
(statearr_40398[(22)] = inst_40189__$1);

return statearr_40398;
})();
if(inst_40189__$1){
var statearr_40399_40461 = state_40316__$1;
(statearr_40399_40461[(1)] = (10));

} else {
var statearr_40400_40462 = state_40316__$1;
(statearr_40400_40462[(1)] = (11));

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
});})(c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22629__auto__,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto____0 = (function (){
var statearr_40401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40401[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto__);

(statearr_40401[(1)] = (1));

return statearr_40401;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto____1 = (function (state_40316){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_40316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e40402){if((e40402 instanceof Object)){
var ex__22633__auto__ = e40402;
var statearr_40403_40463 = state_40316;
(statearr_40403_40463[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40464 = state_40316;
state_40316 = G__40464;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto__ = function(state_40316){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto____1.call(this,state_40316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22786__auto__ = (function (){var statearr_40404 = f__22785__auto__.call(null);
(statearr_40404[(6)] = c__22784__auto__);

return statearr_40404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto__,map__40161,map__40161__$1,opts,before_jsload,on_jsload,reload_dependents,map__40162,map__40162__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22784__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40467,link){
var map__40468 = p__40467;
var map__40468__$1 = ((((!((map__40468 == null)))?(((((map__40468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40468):map__40468);
var file = cljs.core.get.call(null,map__40468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__40468,map__40468__$1,file){
return (function (p1__40465_SHARP_,p2__40466_SHARP_){
if(cljs.core._EQ_.call(null,p1__40465_SHARP_,p2__40466_SHARP_)){
return p1__40465_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__40468,map__40468__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40471){
var map__40472 = p__40471;
var map__40472__$1 = ((((!((map__40472 == null)))?(((((map__40472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40472):map__40472);
var match_length = cljs.core.get.call(null,map__40472__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40472__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40470_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40470_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40474_SHARP_,p2__40475_SHARP_){
return cljs.core.assoc.call(null,p1__40474_SHARP_,cljs.core.get.call(null,p2__40475_SHARP_,key),p2__40475_SHARP_);
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
var loaded_f_datas_40476 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_40476);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_40476);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40477,p__40478){
var map__40479 = p__40477;
var map__40479__$1 = ((((!((map__40479 == null)))?(((((map__40479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40479):map__40479);
var on_cssload = cljs.core.get.call(null,map__40479__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40480 = p__40478;
var map__40480__$1 = ((((!((map__40480 == null)))?(((((map__40480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40480):map__40480);
var files_msg = map__40480__$1;
var files = cljs.core.get.call(null,map__40480__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1548321678994
