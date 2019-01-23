// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30086){
var map__30087 = p__30086;
var map__30087__$1 = ((((!((map__30087 == null)))?(((((map__30087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30087):map__30087);
var m = map__30087__$1;
var n = cljs.core.get.call(null,map__30087__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30089_30111 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30090_30112 = null;
var count__30091_30113 = (0);
var i__30092_30114 = (0);
while(true){
if((i__30092_30114 < count__30091_30113)){
var f_30115 = cljs.core._nth.call(null,chunk__30090_30112,i__30092_30114);
cljs.core.println.call(null,"  ",f_30115);


var G__30116 = seq__30089_30111;
var G__30117 = chunk__30090_30112;
var G__30118 = count__30091_30113;
var G__30119 = (i__30092_30114 + (1));
seq__30089_30111 = G__30116;
chunk__30090_30112 = G__30117;
count__30091_30113 = G__30118;
i__30092_30114 = G__30119;
continue;
} else {
var temp__4657__auto___30120 = cljs.core.seq.call(null,seq__30089_30111);
if(temp__4657__auto___30120){
var seq__30089_30121__$1 = temp__4657__auto___30120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30089_30121__$1)){
var c__4319__auto___30122 = cljs.core.chunk_first.call(null,seq__30089_30121__$1);
var G__30123 = cljs.core.chunk_rest.call(null,seq__30089_30121__$1);
var G__30124 = c__4319__auto___30122;
var G__30125 = cljs.core.count.call(null,c__4319__auto___30122);
var G__30126 = (0);
seq__30089_30111 = G__30123;
chunk__30090_30112 = G__30124;
count__30091_30113 = G__30125;
i__30092_30114 = G__30126;
continue;
} else {
var f_30127 = cljs.core.first.call(null,seq__30089_30121__$1);
cljs.core.println.call(null,"  ",f_30127);


var G__30128 = cljs.core.next.call(null,seq__30089_30121__$1);
var G__30129 = null;
var G__30130 = (0);
var G__30131 = (0);
seq__30089_30111 = G__30128;
chunk__30090_30112 = G__30129;
count__30091_30113 = G__30130;
i__30092_30114 = G__30131;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30132 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30132);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30132)))?cljs.core.second.call(null,arglists_30132):arglists_30132));
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
var seq__30093_30133 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30094_30134 = null;
var count__30095_30135 = (0);
var i__30096_30136 = (0);
while(true){
if((i__30096_30136 < count__30095_30135)){
var vec__30097_30137 = cljs.core._nth.call(null,chunk__30094_30134,i__30096_30136);
var name_30138 = cljs.core.nth.call(null,vec__30097_30137,(0),null);
var map__30100_30139 = cljs.core.nth.call(null,vec__30097_30137,(1),null);
var map__30100_30140__$1 = ((((!((map__30100_30139 == null)))?(((((map__30100_30139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30100_30139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30100_30139):map__30100_30139);
var doc_30141 = cljs.core.get.call(null,map__30100_30140__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30142 = cljs.core.get.call(null,map__30100_30140__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30138);

cljs.core.println.call(null," ",arglists_30142);

if(cljs.core.truth_(doc_30141)){
cljs.core.println.call(null," ",doc_30141);
} else {
}


var G__30143 = seq__30093_30133;
var G__30144 = chunk__30094_30134;
var G__30145 = count__30095_30135;
var G__30146 = (i__30096_30136 + (1));
seq__30093_30133 = G__30143;
chunk__30094_30134 = G__30144;
count__30095_30135 = G__30145;
i__30096_30136 = G__30146;
continue;
} else {
var temp__4657__auto___30147 = cljs.core.seq.call(null,seq__30093_30133);
if(temp__4657__auto___30147){
var seq__30093_30148__$1 = temp__4657__auto___30147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30093_30148__$1)){
var c__4319__auto___30149 = cljs.core.chunk_first.call(null,seq__30093_30148__$1);
var G__30150 = cljs.core.chunk_rest.call(null,seq__30093_30148__$1);
var G__30151 = c__4319__auto___30149;
var G__30152 = cljs.core.count.call(null,c__4319__auto___30149);
var G__30153 = (0);
seq__30093_30133 = G__30150;
chunk__30094_30134 = G__30151;
count__30095_30135 = G__30152;
i__30096_30136 = G__30153;
continue;
} else {
var vec__30102_30154 = cljs.core.first.call(null,seq__30093_30148__$1);
var name_30155 = cljs.core.nth.call(null,vec__30102_30154,(0),null);
var map__30105_30156 = cljs.core.nth.call(null,vec__30102_30154,(1),null);
var map__30105_30157__$1 = ((((!((map__30105_30156 == null)))?(((((map__30105_30156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30105_30156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30105_30156):map__30105_30156);
var doc_30158 = cljs.core.get.call(null,map__30105_30157__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30159 = cljs.core.get.call(null,map__30105_30157__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30155);

cljs.core.println.call(null," ",arglists_30159);

if(cljs.core.truth_(doc_30158)){
cljs.core.println.call(null," ",doc_30158);
} else {
}


var G__30160 = cljs.core.next.call(null,seq__30093_30148__$1);
var G__30161 = null;
var G__30162 = (0);
var G__30163 = (0);
seq__30093_30133 = G__30160;
chunk__30094_30134 = G__30161;
count__30095_30135 = G__30162;
i__30096_30136 = G__30163;
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

var seq__30107 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30108 = null;
var count__30109 = (0);
var i__30110 = (0);
while(true){
if((i__30110 < count__30109)){
var role = cljs.core._nth.call(null,chunk__30108,i__30110);
var temp__4657__auto___30164__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30164__$1)){
var spec_30165 = temp__4657__auto___30164__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30165));
} else {
}


var G__30166 = seq__30107;
var G__30167 = chunk__30108;
var G__30168 = count__30109;
var G__30169 = (i__30110 + (1));
seq__30107 = G__30166;
chunk__30108 = G__30167;
count__30109 = G__30168;
i__30110 = G__30169;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30107);
if(temp__4657__auto____$1){
var seq__30107__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30107__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30107__$1);
var G__30170 = cljs.core.chunk_rest.call(null,seq__30107__$1);
var G__30171 = c__4319__auto__;
var G__30172 = cljs.core.count.call(null,c__4319__auto__);
var G__30173 = (0);
seq__30107 = G__30170;
chunk__30108 = G__30171;
count__30109 = G__30172;
i__30110 = G__30173;
continue;
} else {
var role = cljs.core.first.call(null,seq__30107__$1);
var temp__4657__auto___30174__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30174__$2)){
var spec_30175 = temp__4657__auto___30174__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30175));
} else {
}


var G__30176 = cljs.core.next.call(null,seq__30107__$1);
var G__30177 = null;
var G__30178 = (0);
var G__30179 = (0);
seq__30107 = G__30176;
chunk__30108 = G__30177;
count__30109 = G__30178;
i__30110 = G__30179;
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

//# sourceMappingURL=repl.js.map?rel=1548216527529
