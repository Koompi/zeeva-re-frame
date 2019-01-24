// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41950){
var map__41951 = p__41950;
var map__41951__$1 = ((((!((map__41951 == null)))?(((((map__41951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41951):map__41951);
var m = map__41951__$1;
var n = cljs.core.get.call(null,map__41951__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41951__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41953_41975 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41954_41976 = null;
var count__41955_41977 = (0);
var i__41956_41978 = (0);
while(true){
if((i__41956_41978 < count__41955_41977)){
var f_41979 = cljs.core._nth.call(null,chunk__41954_41976,i__41956_41978);
cljs.core.println.call(null,"  ",f_41979);


var G__41980 = seq__41953_41975;
var G__41981 = chunk__41954_41976;
var G__41982 = count__41955_41977;
var G__41983 = (i__41956_41978 + (1));
seq__41953_41975 = G__41980;
chunk__41954_41976 = G__41981;
count__41955_41977 = G__41982;
i__41956_41978 = G__41983;
continue;
} else {
var temp__4657__auto___41984 = cljs.core.seq.call(null,seq__41953_41975);
if(temp__4657__auto___41984){
var seq__41953_41985__$1 = temp__4657__auto___41984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41953_41985__$1)){
var c__4319__auto___41986 = cljs.core.chunk_first.call(null,seq__41953_41985__$1);
var G__41987 = cljs.core.chunk_rest.call(null,seq__41953_41985__$1);
var G__41988 = c__4319__auto___41986;
var G__41989 = cljs.core.count.call(null,c__4319__auto___41986);
var G__41990 = (0);
seq__41953_41975 = G__41987;
chunk__41954_41976 = G__41988;
count__41955_41977 = G__41989;
i__41956_41978 = G__41990;
continue;
} else {
var f_41991 = cljs.core.first.call(null,seq__41953_41985__$1);
cljs.core.println.call(null,"  ",f_41991);


var G__41992 = cljs.core.next.call(null,seq__41953_41985__$1);
var G__41993 = null;
var G__41994 = (0);
var G__41995 = (0);
seq__41953_41975 = G__41992;
chunk__41954_41976 = G__41993;
count__41955_41977 = G__41994;
i__41956_41978 = G__41995;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41996 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41996);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41996)))?cljs.core.second.call(null,arglists_41996):arglists_41996));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41957_41997 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41958_41998 = null;
var count__41959_41999 = (0);
var i__41960_42000 = (0);
while(true){
if((i__41960_42000 < count__41959_41999)){
var vec__41961_42001 = cljs.core._nth.call(null,chunk__41958_41998,i__41960_42000);
var name_42002 = cljs.core.nth.call(null,vec__41961_42001,(0),null);
var map__41964_42003 = cljs.core.nth.call(null,vec__41961_42001,(1),null);
var map__41964_42004__$1 = ((((!((map__41964_42003 == null)))?(((((map__41964_42003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41964_42003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41964_42003):map__41964_42003);
var doc_42005 = cljs.core.get.call(null,map__41964_42004__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42006 = cljs.core.get.call(null,map__41964_42004__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42002);

cljs.core.println.call(null," ",arglists_42006);

if(cljs.core.truth_(doc_42005)){
cljs.core.println.call(null," ",doc_42005);
} else {
}


var G__42007 = seq__41957_41997;
var G__42008 = chunk__41958_41998;
var G__42009 = count__41959_41999;
var G__42010 = (i__41960_42000 + (1));
seq__41957_41997 = G__42007;
chunk__41958_41998 = G__42008;
count__41959_41999 = G__42009;
i__41960_42000 = G__42010;
continue;
} else {
var temp__4657__auto___42011 = cljs.core.seq.call(null,seq__41957_41997);
if(temp__4657__auto___42011){
var seq__41957_42012__$1 = temp__4657__auto___42011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41957_42012__$1)){
var c__4319__auto___42013 = cljs.core.chunk_first.call(null,seq__41957_42012__$1);
var G__42014 = cljs.core.chunk_rest.call(null,seq__41957_42012__$1);
var G__42015 = c__4319__auto___42013;
var G__42016 = cljs.core.count.call(null,c__4319__auto___42013);
var G__42017 = (0);
seq__41957_41997 = G__42014;
chunk__41958_41998 = G__42015;
count__41959_41999 = G__42016;
i__41960_42000 = G__42017;
continue;
} else {
var vec__41966_42018 = cljs.core.first.call(null,seq__41957_42012__$1);
var name_42019 = cljs.core.nth.call(null,vec__41966_42018,(0),null);
var map__41969_42020 = cljs.core.nth.call(null,vec__41966_42018,(1),null);
var map__41969_42021__$1 = ((((!((map__41969_42020 == null)))?(((((map__41969_42020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41969_42020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41969_42020):map__41969_42020);
var doc_42022 = cljs.core.get.call(null,map__41969_42021__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42023 = cljs.core.get.call(null,map__41969_42021__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42019);

cljs.core.println.call(null," ",arglists_42023);

if(cljs.core.truth_(doc_42022)){
cljs.core.println.call(null," ",doc_42022);
} else {
}


var G__42024 = cljs.core.next.call(null,seq__41957_42012__$1);
var G__42025 = null;
var G__42026 = (0);
var G__42027 = (0);
seq__41957_41997 = G__42024;
chunk__41958_41998 = G__42025;
count__41959_41999 = G__42026;
i__41960_42000 = G__42027;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__41971 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41972 = null;
var count__41973 = (0);
var i__41974 = (0);
while(true){
if((i__41974 < count__41973)){
var role = cljs.core._nth.call(null,chunk__41972,i__41974);
var temp__4657__auto___42028__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42028__$1)){
var spec_42029 = temp__4657__auto___42028__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42029));
} else {
}


var G__42030 = seq__41971;
var G__42031 = chunk__41972;
var G__42032 = count__41973;
var G__42033 = (i__41974 + (1));
seq__41971 = G__42030;
chunk__41972 = G__42031;
count__41973 = G__42032;
i__41974 = G__42033;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41971);
if(temp__4657__auto____$1){
var seq__41971__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41971__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41971__$1);
var G__42034 = cljs.core.chunk_rest.call(null,seq__41971__$1);
var G__42035 = c__4319__auto__;
var G__42036 = cljs.core.count.call(null,c__4319__auto__);
var G__42037 = (0);
seq__41971 = G__42034;
chunk__41972 = G__42035;
count__41973 = G__42036;
i__41974 = G__42037;
continue;
} else {
var role = cljs.core.first.call(null,seq__41971__$1);
var temp__4657__auto___42038__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42038__$2)){
var spec_42039 = temp__4657__auto___42038__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42039));
} else {
}


var G__42040 = cljs.core.next.call(null,seq__41971__$1);
var G__42041 = null;
var G__42042 = (0);
var G__42043 = (0);
seq__41971 = G__42040;
chunk__41972 = G__42041;
count__41973 = G__42042;
i__41974 = G__42043;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1548321686787
