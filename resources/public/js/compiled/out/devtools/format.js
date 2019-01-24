// Compiled by ClojureScript 1.10.238 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._header[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._header["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._has_body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o31869 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31869["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31870 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31870["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31871 = temp__4655__auto____$2;
return (o31871["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o31872 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31872["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31873 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31873["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31874 = temp__4655__auto____$2;
return (o31874["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o31875 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31875["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31876 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31876["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31877 = temp__4655__auto____$2;
return (o31877["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o31878 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31878["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31879 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31879["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31880 = temp__4655__auto____$2;
return (o31880["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o31881 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31881["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31882 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31882["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31883 = temp__4655__auto____$2;
return (o31883["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o31884 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31884["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31885 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31885["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31886 = temp__4655__auto____$2;
return (o31886["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o31887 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31887["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31888 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31888["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31889 = temp__4655__auto____$2;
return (o31889["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31891 = arguments.length;
var i__4500__auto___31892 = (0);
while(true){
if((i__4500__auto___31892 < len__4499__auto___31891)){
args__4502__auto__.push((arguments[i__4500__auto___31892]));

var G__31893 = (i__4500__auto___31892 + (1));
i__4500__auto___31892 = G__31893;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq31890){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31890));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31895 = arguments.length;
var i__4500__auto___31896 = (0);
while(true){
if((i__4500__auto___31896 < len__4499__auto___31895)){
args__4502__auto__.push((arguments[i__4500__auto___31896]));

var G__31897 = (i__4500__auto___31896 + (1));
i__4500__auto___31896 = G__31897;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq31894){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31894));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31899 = arguments.length;
var i__4500__auto___31900 = (0);
while(true){
if((i__4500__auto___31900 < len__4499__auto___31899)){
args__4502__auto__.push((arguments[i__4500__auto___31900]));

var G__31901 = (i__4500__auto___31900 + (1));
i__4500__auto___31900 = G__31901;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq31898){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31898));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31903 = arguments.length;
var i__4500__auto___31904 = (0);
while(true){
if((i__4500__auto___31904 < len__4499__auto___31903)){
args__4502__auto__.push((arguments[i__4500__auto___31904]));

var G__31905 = (i__4500__auto___31904 + (1));
i__4500__auto___31904 = G__31905;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq31902){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31902));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31907 = arguments.length;
var i__4500__auto___31908 = (0);
while(true){
if((i__4500__auto___31908 < len__4499__auto___31907)){
args__4502__auto__.push((arguments[i__4500__auto___31908]));

var G__31909 = (i__4500__auto___31908 + (1));
i__4500__auto___31908 = G__31909;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq31906){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31906));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31911 = arguments.length;
var i__4500__auto___31912 = (0);
while(true){
if((i__4500__auto___31912 < len__4499__auto___31911)){
args__4502__auto__.push((arguments[i__4500__auto___31912]));

var G__31913 = (i__4500__auto___31912 + (1));
i__4500__auto___31912 = G__31913;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq31910){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31910));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31915 = arguments.length;
var i__4500__auto___31916 = (0);
while(true){
if((i__4500__auto___31916 < len__4499__auto___31915)){
args__4502__auto__.push((arguments[i__4500__auto___31916]));

var G__31917 = (i__4500__auto___31916 + (1));
i__4500__auto___31916 = G__31917;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq31914){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31914));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31925 = arguments.length;
var i__4500__auto___31926 = (0);
while(true){
if((i__4500__auto___31926 < len__4499__auto___31925)){
args__4502__auto__.push((arguments[i__4500__auto___31926]));

var G__31927 = (i__4500__auto___31926 + (1));
i__4500__auto___31926 = G__31927;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__31921){
var vec__31922 = p__31921;
var state_override = cljs.core.nth.call(null,vec__31922,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__31922,state_override){
return (function (p1__31918_SHARP_){
return cljs.core.merge.call(null,p1__31918_SHARP_,state_override);
});})(vec__31922,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq31919){
var G__31920 = cljs.core.first.call(null,seq31919);
var seq31919__$1 = cljs.core.next.call(null,seq31919);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31920,seq31919__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31929 = arguments.length;
var i__4500__auto___31930 = (0);
while(true){
if((i__4500__auto___31930 < len__4499__auto___31929)){
args__4502__auto__.push((arguments[i__4500__auto___31930]));

var G__31931 = (i__4500__auto___31930 + (1));
i__4500__auto___31930 = G__31931;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq31928){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31928));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31934 = arguments.length;
var i__4500__auto___31935 = (0);
while(true){
if((i__4500__auto___31935 < len__4499__auto___31934)){
args__4502__auto__.push((arguments[i__4500__auto___31935]));

var G__31936 = (i__4500__auto___31935 + (1));
i__4500__auto___31935 = G__31936;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq31932){
var G__31933 = cljs.core.first.call(null,seq31932);
var seq31932__$1 = cljs.core.next.call(null,seq31932);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31933,seq31932__$1);
});


//# sourceMappingURL=format.js.map?rel=1548321647392
