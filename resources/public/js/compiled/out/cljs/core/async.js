// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21880 = arguments.length;
switch (G__21880) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21881 = (function (f,blockable,meta21882){
this.f = f;
this.blockable = blockable;
this.meta21882 = meta21882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21883,meta21882__$1){
var self__ = this;
var _21883__$1 = this;
return (new cljs.core.async.t_cljs$core$async21881(self__.f,self__.blockable,meta21882__$1));
});

cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21883){
var self__ = this;
var _21883__$1 = this;
return self__.meta21882;
});

cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21882","meta21882",435833240,null)], null);
});

cljs.core.async.t_cljs$core$async21881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21881";

cljs.core.async.t_cljs$core$async21881.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21881");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21881.
 */
cljs.core.async.__GT_t_cljs$core$async21881 = (function cljs$core$async$__GT_t_cljs$core$async21881(f__$1,blockable__$1,meta21882){
return (new cljs.core.async.t_cljs$core$async21881(f__$1,blockable__$1,meta21882));
});

}

return (new cljs.core.async.t_cljs$core$async21881(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__21887 = arguments.length;
switch (G__21887) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21890 = arguments.length;
switch (G__21890) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__21893 = arguments.length;
switch (G__21893) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21895 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21895);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21895,ret){
return (function (){
return fn1.call(null,val_21895);
});})(val_21895,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__21897 = arguments.length;
switch (G__21897) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___21899 = n;
var x_21900 = (0);
while(true){
if((x_21900 < n__4376__auto___21899)){
(a[x_21900] = (0));

var G__21901 = (x_21900 + (1));
x_21900 = G__21901;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21902 = (i + (1));
i = G__21902;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21903 = (function (flag,meta21904){
this.flag = flag;
this.meta21904 = meta21904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21905,meta21904__$1){
var self__ = this;
var _21905__$1 = this;
return (new cljs.core.async.t_cljs$core$async21903(self__.flag,meta21904__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21905){
var self__ = this;
var _21905__$1 = this;
return self__.meta21904;
});})(flag))
;

cljs.core.async.t_cljs$core$async21903.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21903.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21904","meta21904",-282170041,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21903";

cljs.core.async.t_cljs$core$async21903.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21903");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21903.
 */
cljs.core.async.__GT_t_cljs$core$async21903 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21903(flag__$1,meta21904){
return (new cljs.core.async.t_cljs$core$async21903(flag__$1,meta21904));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21903(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21906 = (function (flag,cb,meta21907){
this.flag = flag;
this.cb = cb;
this.meta21907 = meta21907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21908,meta21907__$1){
var self__ = this;
var _21908__$1 = this;
return (new cljs.core.async.t_cljs$core$async21906(self__.flag,self__.cb,meta21907__$1));
});

cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21908){
var self__ = this;
var _21908__$1 = this;
return self__.meta21907;
});

cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21907","meta21907",1736439801,null)], null);
});

cljs.core.async.t_cljs$core$async21906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21906";

cljs.core.async.t_cljs$core$async21906.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async21906");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21906.
 */
cljs.core.async.__GT_t_cljs$core$async21906 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21906(flag__$1,cb__$1,meta21907){
return (new cljs.core.async.t_cljs$core$async21906(flag__$1,cb__$1,meta21907));
});

}

return (new cljs.core.async.t_cljs$core$async21906(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21909_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21909_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21910_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21910_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21911 = (i + (1));
i = G__21911;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21917 = arguments.length;
var i__4500__auto___21918 = (0);
while(true){
if((i__4500__auto___21918 < len__4499__auto___21917)){
args__4502__auto__.push((arguments[i__4500__auto___21918]));

var G__21919 = (i__4500__auto___21918 + (1));
i__4500__auto___21918 = G__21919;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21914){
var map__21915 = p__21914;
var map__21915__$1 = ((((!((map__21915 == null)))?(((((map__21915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21915):map__21915);
var opts = map__21915__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21912){
var G__21913 = cljs.core.first.call(null,seq21912);
var seq21912__$1 = cljs.core.next.call(null,seq21912);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21913,seq21912__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__21921 = arguments.length;
switch (G__21921) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21834__auto___21967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___21967){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___21967){
return (function (state_21945){
var state_val_21946 = (state_21945[(1)]);
if((state_val_21946 === (7))){
var inst_21941 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
var statearr_21947_21968 = state_21945__$1;
(statearr_21947_21968[(2)] = inst_21941);

(statearr_21947_21968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (1))){
var state_21945__$1 = state_21945;
var statearr_21948_21969 = state_21945__$1;
(statearr_21948_21969[(2)] = null);

(statearr_21948_21969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (4))){
var inst_21924 = (state_21945[(7)]);
var inst_21924__$1 = (state_21945[(2)]);
var inst_21925 = (inst_21924__$1 == null);
var state_21945__$1 = (function (){var statearr_21949 = state_21945;
(statearr_21949[(7)] = inst_21924__$1);

return statearr_21949;
})();
if(cljs.core.truth_(inst_21925)){
var statearr_21950_21970 = state_21945__$1;
(statearr_21950_21970[(1)] = (5));

} else {
var statearr_21951_21971 = state_21945__$1;
(statearr_21951_21971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (13))){
var state_21945__$1 = state_21945;
var statearr_21952_21972 = state_21945__$1;
(statearr_21952_21972[(2)] = null);

(statearr_21952_21972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (6))){
var inst_21924 = (state_21945[(7)]);
var state_21945__$1 = state_21945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21945__$1,(11),to,inst_21924);
} else {
if((state_val_21946 === (3))){
var inst_21943 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21945__$1,inst_21943);
} else {
if((state_val_21946 === (12))){
var state_21945__$1 = state_21945;
var statearr_21953_21973 = state_21945__$1;
(statearr_21953_21973[(2)] = null);

(statearr_21953_21973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (2))){
var state_21945__$1 = state_21945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21945__$1,(4),from);
} else {
if((state_val_21946 === (11))){
var inst_21934 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
if(cljs.core.truth_(inst_21934)){
var statearr_21954_21974 = state_21945__$1;
(statearr_21954_21974[(1)] = (12));

} else {
var statearr_21955_21975 = state_21945__$1;
(statearr_21955_21975[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (9))){
var state_21945__$1 = state_21945;
var statearr_21956_21976 = state_21945__$1;
(statearr_21956_21976[(2)] = null);

(statearr_21956_21976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (5))){
var state_21945__$1 = state_21945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21957_21977 = state_21945__$1;
(statearr_21957_21977[(1)] = (8));

} else {
var statearr_21958_21978 = state_21945__$1;
(statearr_21958_21978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (14))){
var inst_21939 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
var statearr_21959_21979 = state_21945__$1;
(statearr_21959_21979[(2)] = inst_21939);

(statearr_21959_21979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (10))){
var inst_21931 = (state_21945[(2)]);
var state_21945__$1 = state_21945;
var statearr_21960_21980 = state_21945__$1;
(statearr_21960_21980[(2)] = inst_21931);

(statearr_21960_21980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21946 === (8))){
var inst_21928 = cljs.core.async.close_BANG_.call(null,to);
var state_21945__$1 = state_21945;
var statearr_21961_21981 = state_21945__$1;
(statearr_21961_21981[(2)] = inst_21928);

(statearr_21961_21981[(1)] = (10));


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
});})(c__21834__auto___21967))
;
return ((function (switch__21746__auto__,c__21834__auto___21967){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_21962 = [null,null,null,null,null,null,null,null];
(statearr_21962[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_21962[(1)] = (1));

return statearr_21962;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_21945){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_21945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e21963){if((e21963 instanceof Object)){
var ex__21750__auto__ = e21963;
var statearr_21964_21982 = state_21945;
(statearr_21964_21982[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21983 = state_21945;
state_21945 = G__21983;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_21945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_21945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___21967))
})();
var state__21836__auto__ = (function (){var statearr_21965 = f__21835__auto__.call(null);
(statearr_21965[(6)] = c__21834__auto___21967);

return statearr_21965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___21967))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21984){
var vec__21985 = p__21984;
var v = cljs.core.nth.call(null,vec__21985,(0),null);
var p = cljs.core.nth.call(null,vec__21985,(1),null);
var job = vec__21985;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21834__auto___22156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___22156,res,vec__21985,v,p,job,jobs,results){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___22156,res,vec__21985,v,p,job,jobs,results){
return (function (state_21992){
var state_val_21993 = (state_21992[(1)]);
if((state_val_21993 === (1))){
var state_21992__$1 = state_21992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21992__$1,(2),res,v);
} else {
if((state_val_21993 === (2))){
var inst_21989 = (state_21992[(2)]);
var inst_21990 = cljs.core.async.close_BANG_.call(null,res);
var state_21992__$1 = (function (){var statearr_21994 = state_21992;
(statearr_21994[(7)] = inst_21989);

return statearr_21994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21992__$1,inst_21990);
} else {
return null;
}
}
});})(c__21834__auto___22156,res,vec__21985,v,p,job,jobs,results))
;
return ((function (switch__21746__auto__,c__21834__auto___22156,res,vec__21985,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0 = (function (){
var statearr_21995 = [null,null,null,null,null,null,null,null];
(statearr_21995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__);

(statearr_21995[(1)] = (1));

return statearr_21995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1 = (function (state_21992){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_21992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e21996){if((e21996 instanceof Object)){
var ex__21750__auto__ = e21996;
var statearr_21997_22157 = state_21992;
(statearr_21997_22157[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22158 = state_21992;
state_21992 = G__22158;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__ = function(state_21992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1.call(this,state_21992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___22156,res,vec__21985,v,p,job,jobs,results))
})();
var state__21836__auto__ = (function (){var statearr_21998 = f__21835__auto__.call(null);
(statearr_21998[(6)] = c__21834__auto___22156);

return statearr_21998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___22156,res,vec__21985,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21999){
var vec__22000 = p__21999;
var v = cljs.core.nth.call(null,vec__22000,(0),null);
var p = cljs.core.nth.call(null,vec__22000,(1),null);
var job = vec__22000;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___22159 = n;
var __22160 = (0);
while(true){
if((__22160 < n__4376__auto___22159)){
var G__22003_22161 = type;
var G__22003_22162__$1 = (((G__22003_22161 instanceof cljs.core.Keyword))?G__22003_22161.fqn:null);
switch (G__22003_22162__$1) {
case "compute":
var c__21834__auto___22164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22160,c__21834__auto___22164,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (__22160,c__21834__auto___22164,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async){
return (function (state_22016){
var state_val_22017 = (state_22016[(1)]);
if((state_val_22017 === (1))){
var state_22016__$1 = state_22016;
var statearr_22018_22165 = state_22016__$1;
(statearr_22018_22165[(2)] = null);

(statearr_22018_22165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22017 === (2))){
var state_22016__$1 = state_22016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22016__$1,(4),jobs);
} else {
if((state_val_22017 === (3))){
var inst_22014 = (state_22016[(2)]);
var state_22016__$1 = state_22016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22016__$1,inst_22014);
} else {
if((state_val_22017 === (4))){
var inst_22006 = (state_22016[(2)]);
var inst_22007 = process.call(null,inst_22006);
var state_22016__$1 = state_22016;
if(cljs.core.truth_(inst_22007)){
var statearr_22019_22166 = state_22016__$1;
(statearr_22019_22166[(1)] = (5));

} else {
var statearr_22020_22167 = state_22016__$1;
(statearr_22020_22167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22017 === (5))){
var state_22016__$1 = state_22016;
var statearr_22021_22168 = state_22016__$1;
(statearr_22021_22168[(2)] = null);

(statearr_22021_22168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22017 === (6))){
var state_22016__$1 = state_22016;
var statearr_22022_22169 = state_22016__$1;
(statearr_22022_22169[(2)] = null);

(statearr_22022_22169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22017 === (7))){
var inst_22012 = (state_22016[(2)]);
var state_22016__$1 = state_22016;
var statearr_22023_22170 = state_22016__$1;
(statearr_22023_22170[(2)] = inst_22012);

(statearr_22023_22170[(1)] = (3));


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
});})(__22160,c__21834__auto___22164,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async))
;
return ((function (__22160,switch__21746__auto__,c__21834__auto___22164,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0 = (function (){
var statearr_22024 = [null,null,null,null,null,null,null];
(statearr_22024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__);

(statearr_22024[(1)] = (1));

return statearr_22024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1 = (function (state_22016){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_22016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e22025){if((e22025 instanceof Object)){
var ex__21750__auto__ = e22025;
var statearr_22026_22171 = state_22016;
(statearr_22026_22171[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22172 = state_22016;
state_22016 = G__22172;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__ = function(state_22016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1.call(this,state_22016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__;
})()
;})(__22160,switch__21746__auto__,c__21834__auto___22164,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async))
})();
var state__21836__auto__ = (function (){var statearr_22027 = f__21835__auto__.call(null);
(statearr_22027[(6)] = c__21834__auto___22164);

return statearr_22027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(__22160,c__21834__auto___22164,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async))
);


break;
case "async":
var c__21834__auto___22173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22160,c__21834__auto___22173,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (__22160,c__21834__auto___22173,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async){
return (function (state_22040){
var state_val_22041 = (state_22040[(1)]);
if((state_val_22041 === (1))){
var state_22040__$1 = state_22040;
var statearr_22042_22174 = state_22040__$1;
(statearr_22042_22174[(2)] = null);

(statearr_22042_22174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (2))){
var state_22040__$1 = state_22040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22040__$1,(4),jobs);
} else {
if((state_val_22041 === (3))){
var inst_22038 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22040__$1,inst_22038);
} else {
if((state_val_22041 === (4))){
var inst_22030 = (state_22040[(2)]);
var inst_22031 = async.call(null,inst_22030);
var state_22040__$1 = state_22040;
if(cljs.core.truth_(inst_22031)){
var statearr_22043_22175 = state_22040__$1;
(statearr_22043_22175[(1)] = (5));

} else {
var statearr_22044_22176 = state_22040__$1;
(statearr_22044_22176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (5))){
var state_22040__$1 = state_22040;
var statearr_22045_22177 = state_22040__$1;
(statearr_22045_22177[(2)] = null);

(statearr_22045_22177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (6))){
var state_22040__$1 = state_22040;
var statearr_22046_22178 = state_22040__$1;
(statearr_22046_22178[(2)] = null);

(statearr_22046_22178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (7))){
var inst_22036 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22047_22179 = state_22040__$1;
(statearr_22047_22179[(2)] = inst_22036);

(statearr_22047_22179[(1)] = (3));


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
});})(__22160,c__21834__auto___22173,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async))
;
return ((function (__22160,switch__21746__auto__,c__21834__auto___22173,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0 = (function (){
var statearr_22048 = [null,null,null,null,null,null,null];
(statearr_22048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__);

(statearr_22048[(1)] = (1));

return statearr_22048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1 = (function (state_22040){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_22040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e22049){if((e22049 instanceof Object)){
var ex__21750__auto__ = e22049;
var statearr_22050_22180 = state_22040;
(statearr_22050_22180[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22181 = state_22040;
state_22040 = G__22181;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__ = function(state_22040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1.call(this,state_22040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__;
})()
;})(__22160,switch__21746__auto__,c__21834__auto___22173,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async))
})();
var state__21836__auto__ = (function (){var statearr_22051 = f__21835__auto__.call(null);
(statearr_22051[(6)] = c__21834__auto___22173);

return statearr_22051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(__22160,c__21834__auto___22173,G__22003_22161,G__22003_22162__$1,n__4376__auto___22159,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22003_22162__$1)].join('')));

}

var G__22182 = (__22160 + (1));
__22160 = G__22182;
continue;
} else {
}
break;
}

var c__21834__auto___22183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___22183,jobs,results,process,async){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___22183,jobs,results,process,async){
return (function (state_22073){
var state_val_22074 = (state_22073[(1)]);
if((state_val_22074 === (1))){
var state_22073__$1 = state_22073;
var statearr_22075_22184 = state_22073__$1;
(statearr_22075_22184[(2)] = null);

(statearr_22075_22184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22074 === (2))){
var state_22073__$1 = state_22073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22073__$1,(4),from);
} else {
if((state_val_22074 === (3))){
var inst_22071 = (state_22073[(2)]);
var state_22073__$1 = state_22073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22073__$1,inst_22071);
} else {
if((state_val_22074 === (4))){
var inst_22054 = (state_22073[(7)]);
var inst_22054__$1 = (state_22073[(2)]);
var inst_22055 = (inst_22054__$1 == null);
var state_22073__$1 = (function (){var statearr_22076 = state_22073;
(statearr_22076[(7)] = inst_22054__$1);

return statearr_22076;
})();
if(cljs.core.truth_(inst_22055)){
var statearr_22077_22185 = state_22073__$1;
(statearr_22077_22185[(1)] = (5));

} else {
var statearr_22078_22186 = state_22073__$1;
(statearr_22078_22186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22074 === (5))){
var inst_22057 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22073__$1 = state_22073;
var statearr_22079_22187 = state_22073__$1;
(statearr_22079_22187[(2)] = inst_22057);

(statearr_22079_22187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22074 === (6))){
var inst_22054 = (state_22073[(7)]);
var inst_22059 = (state_22073[(8)]);
var inst_22059__$1 = cljs.core.async.chan.call(null,(1));
var inst_22060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22061 = [inst_22054,inst_22059__$1];
var inst_22062 = (new cljs.core.PersistentVector(null,2,(5),inst_22060,inst_22061,null));
var state_22073__$1 = (function (){var statearr_22080 = state_22073;
(statearr_22080[(8)] = inst_22059__$1);

return statearr_22080;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22073__$1,(8),jobs,inst_22062);
} else {
if((state_val_22074 === (7))){
var inst_22069 = (state_22073[(2)]);
var state_22073__$1 = state_22073;
var statearr_22081_22188 = state_22073__$1;
(statearr_22081_22188[(2)] = inst_22069);

(statearr_22081_22188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22074 === (8))){
var inst_22059 = (state_22073[(8)]);
var inst_22064 = (state_22073[(2)]);
var state_22073__$1 = (function (){var statearr_22082 = state_22073;
(statearr_22082[(9)] = inst_22064);

return statearr_22082;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22073__$1,(9),results,inst_22059);
} else {
if((state_val_22074 === (9))){
var inst_22066 = (state_22073[(2)]);
var state_22073__$1 = (function (){var statearr_22083 = state_22073;
(statearr_22083[(10)] = inst_22066);

return statearr_22083;
})();
var statearr_22084_22189 = state_22073__$1;
(statearr_22084_22189[(2)] = null);

(statearr_22084_22189[(1)] = (2));


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
});})(c__21834__auto___22183,jobs,results,process,async))
;
return ((function (switch__21746__auto__,c__21834__auto___22183,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0 = (function (){
var statearr_22085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__);

(statearr_22085[(1)] = (1));

return statearr_22085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1 = (function (state_22073){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_22073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e22086){if((e22086 instanceof Object)){
var ex__21750__auto__ = e22086;
var statearr_22087_22190 = state_22073;
(statearr_22087_22190[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22191 = state_22073;
state_22073 = G__22191;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__ = function(state_22073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1.call(this,state_22073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___22183,jobs,results,process,async))
})();
var state__21836__auto__ = (function (){var statearr_22088 = f__21835__auto__.call(null);
(statearr_22088[(6)] = c__21834__auto___22183);

return statearr_22088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___22183,jobs,results,process,async))
);


var c__21834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto__,jobs,results,process,async){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto__,jobs,results,process,async){
return (function (state_22126){
var state_val_22127 = (state_22126[(1)]);
if((state_val_22127 === (7))){
var inst_22122 = (state_22126[(2)]);
var state_22126__$1 = state_22126;
var statearr_22128_22192 = state_22126__$1;
(statearr_22128_22192[(2)] = inst_22122);

(statearr_22128_22192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (20))){
var state_22126__$1 = state_22126;
var statearr_22129_22193 = state_22126__$1;
(statearr_22129_22193[(2)] = null);

(statearr_22129_22193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (1))){
var state_22126__$1 = state_22126;
var statearr_22130_22194 = state_22126__$1;
(statearr_22130_22194[(2)] = null);

(statearr_22130_22194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (4))){
var inst_22091 = (state_22126[(7)]);
var inst_22091__$1 = (state_22126[(2)]);
var inst_22092 = (inst_22091__$1 == null);
var state_22126__$1 = (function (){var statearr_22131 = state_22126;
(statearr_22131[(7)] = inst_22091__$1);

return statearr_22131;
})();
if(cljs.core.truth_(inst_22092)){
var statearr_22132_22195 = state_22126__$1;
(statearr_22132_22195[(1)] = (5));

} else {
var statearr_22133_22196 = state_22126__$1;
(statearr_22133_22196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (15))){
var inst_22104 = (state_22126[(8)]);
var state_22126__$1 = state_22126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22126__$1,(18),to,inst_22104);
} else {
if((state_val_22127 === (21))){
var inst_22117 = (state_22126[(2)]);
var state_22126__$1 = state_22126;
var statearr_22134_22197 = state_22126__$1;
(statearr_22134_22197[(2)] = inst_22117);

(statearr_22134_22197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (13))){
var inst_22119 = (state_22126[(2)]);
var state_22126__$1 = (function (){var statearr_22135 = state_22126;
(statearr_22135[(9)] = inst_22119);

return statearr_22135;
})();
var statearr_22136_22198 = state_22126__$1;
(statearr_22136_22198[(2)] = null);

(statearr_22136_22198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (6))){
var inst_22091 = (state_22126[(7)]);
var state_22126__$1 = state_22126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22126__$1,(11),inst_22091);
} else {
if((state_val_22127 === (17))){
var inst_22112 = (state_22126[(2)]);
var state_22126__$1 = state_22126;
if(cljs.core.truth_(inst_22112)){
var statearr_22137_22199 = state_22126__$1;
(statearr_22137_22199[(1)] = (19));

} else {
var statearr_22138_22200 = state_22126__$1;
(statearr_22138_22200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (3))){
var inst_22124 = (state_22126[(2)]);
var state_22126__$1 = state_22126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22126__$1,inst_22124);
} else {
if((state_val_22127 === (12))){
var inst_22101 = (state_22126[(10)]);
var state_22126__$1 = state_22126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22126__$1,(14),inst_22101);
} else {
if((state_val_22127 === (2))){
var state_22126__$1 = state_22126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22126__$1,(4),results);
} else {
if((state_val_22127 === (19))){
var state_22126__$1 = state_22126;
var statearr_22139_22201 = state_22126__$1;
(statearr_22139_22201[(2)] = null);

(statearr_22139_22201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (11))){
var inst_22101 = (state_22126[(2)]);
var state_22126__$1 = (function (){var statearr_22140 = state_22126;
(statearr_22140[(10)] = inst_22101);

return statearr_22140;
})();
var statearr_22141_22202 = state_22126__$1;
(statearr_22141_22202[(2)] = null);

(statearr_22141_22202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (9))){
var state_22126__$1 = state_22126;
var statearr_22142_22203 = state_22126__$1;
(statearr_22142_22203[(2)] = null);

(statearr_22142_22203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (5))){
var state_22126__$1 = state_22126;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22143_22204 = state_22126__$1;
(statearr_22143_22204[(1)] = (8));

} else {
var statearr_22144_22205 = state_22126__$1;
(statearr_22144_22205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (14))){
var inst_22104 = (state_22126[(8)]);
var inst_22106 = (state_22126[(11)]);
var inst_22104__$1 = (state_22126[(2)]);
var inst_22105 = (inst_22104__$1 == null);
var inst_22106__$1 = cljs.core.not.call(null,inst_22105);
var state_22126__$1 = (function (){var statearr_22145 = state_22126;
(statearr_22145[(8)] = inst_22104__$1);

(statearr_22145[(11)] = inst_22106__$1);

return statearr_22145;
})();
if(inst_22106__$1){
var statearr_22146_22206 = state_22126__$1;
(statearr_22146_22206[(1)] = (15));

} else {
var statearr_22147_22207 = state_22126__$1;
(statearr_22147_22207[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (16))){
var inst_22106 = (state_22126[(11)]);
var state_22126__$1 = state_22126;
var statearr_22148_22208 = state_22126__$1;
(statearr_22148_22208[(2)] = inst_22106);

(statearr_22148_22208[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (10))){
var inst_22098 = (state_22126[(2)]);
var state_22126__$1 = state_22126;
var statearr_22149_22209 = state_22126__$1;
(statearr_22149_22209[(2)] = inst_22098);

(statearr_22149_22209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (18))){
var inst_22109 = (state_22126[(2)]);
var state_22126__$1 = state_22126;
var statearr_22150_22210 = state_22126__$1;
(statearr_22150_22210[(2)] = inst_22109);

(statearr_22150_22210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22127 === (8))){
var inst_22095 = cljs.core.async.close_BANG_.call(null,to);
var state_22126__$1 = state_22126;
var statearr_22151_22211 = state_22126__$1;
(statearr_22151_22211[(2)] = inst_22095);

(statearr_22151_22211[(1)] = (10));


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
});})(c__21834__auto__,jobs,results,process,async))
;
return ((function (switch__21746__auto__,c__21834__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0 = (function (){
var statearr_22152 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22152[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__);

(statearr_22152[(1)] = (1));

return statearr_22152;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1 = (function (state_22126){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_22126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e22153){if((e22153 instanceof Object)){
var ex__21750__auto__ = e22153;
var statearr_22154_22212 = state_22126;
(statearr_22154_22212[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22213 = state_22126;
state_22126 = G__22213;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__ = function(state_22126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1.call(this,state_22126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21747__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto__,jobs,results,process,async))
})();
var state__21836__auto__ = (function (){var statearr_22155 = f__21835__auto__.call(null);
(statearr_22155[(6)] = c__21834__auto__);

return statearr_22155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto__,jobs,results,process,async))
);

return c__21834__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__22215 = arguments.length;
switch (G__22215) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__22218 = arguments.length;
switch (G__22218) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__22221 = arguments.length;
switch (G__22221) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21834__auto___22270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___22270,tc,fc){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___22270,tc,fc){
return (function (state_22247){
var state_val_22248 = (state_22247[(1)]);
if((state_val_22248 === (7))){
var inst_22243 = (state_22247[(2)]);
var state_22247__$1 = state_22247;
var statearr_22249_22271 = state_22247__$1;
(statearr_22249_22271[(2)] = inst_22243);

(statearr_22249_22271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22248 === (1))){
var state_22247__$1 = state_22247;
var statearr_22250_22272 = state_22247__$1;
(statearr_22250_22272[(2)] = null);

(statearr_22250_22272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22248 === (4))){
var inst_22224 = (state_22247[(7)]);
var inst_22224__$1 = (state_22247[(2)]);
var inst_22225 = (inst_22224__$1 == null);
var state_22247__$1 = (function (){var statearr_22251 = state_22247;
(statearr_22251[(7)] = inst_22224__$1);

return statearr_22251;
})();
if(cljs.core.truth_(inst_22225)){
var statearr_22252_22273 = state_22247__$1;
(statearr_22252_22273[(1)] = (5));

} else {
var statearr_22253_22274 = state_22247__$1;
(statearr_22253_22274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22248 === (13))){
var state_22247__$1 = state_22247;
var statearr_22254_22275 = state_22247__$1;
(statearr_22254_22275[(2)] = null);

(statearr_22254_22275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22248 === (6))){
var inst_22224 = (state_22247[(7)]);
var inst_22230 = p.call(null,inst_22224);
var state_22247__$1 = state_22247;
if(cljs.core.truth_(inst_22230)){
var statearr_22255_22276 = state_22247__$1;
(statearr_22255_22276[(1)] = (9));

} else {
var statearr_22256_22277 = state_22247__$1;
(statearr_22256_22277[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22248 === (3))){
var inst_22245 = (state_22247[(2)]);
var state_22247__$1 = state_22247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22247__$1,inst_22245);
} else {
if((state_val_22248 === (12))){
var state_22247__$1 = state_22247;
var statearr_22257_22278 = state_22247__$1;
(statearr_22257_22278[(2)] = null);

(statearr_22257_22278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22248 === (2))){
var state_22247__$1 = state_22247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22247__$1,(4),ch);
} else {
if((state_val_22248 === (11))){
var inst_22224 = (state_22247[(7)]);
var inst_22234 = (state_22247[(2)]);
var state_22247__$1 = state_22247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22247__$1,(8),inst_22234,inst_22224);
} else {
if((state_val_22248 === (9))){
var state_22247__$1 = state_22247;
var statearr_22258_22279 = state_22247__$1;
(statearr_22258_22279[(2)] = tc);

(statearr_22258_22279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22248 === (5))){
var inst_22227 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22228 = cljs.core.async.close_BANG_.call(null,fc);
var state_22247__$1 = (function (){var statearr_22259 = state_22247;
(statearr_22259[(8)] = inst_22227);

return statearr_22259;
})();
var statearr_22260_22280 = state_22247__$1;
(statearr_22260_22280[(2)] = inst_22228);

(statearr_22260_22280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22248 === (14))){
var inst_22241 = (state_22247[(2)]);
var state_22247__$1 = state_22247;
var statearr_22261_22281 = state_22247__$1;
(statearr_22261_22281[(2)] = inst_22241);

(statearr_22261_22281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22248 === (10))){
var state_22247__$1 = state_22247;
var statearr_22262_22282 = state_22247__$1;
(statearr_22262_22282[(2)] = fc);

(statearr_22262_22282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22248 === (8))){
var inst_22236 = (state_22247[(2)]);
var state_22247__$1 = state_22247;
if(cljs.core.truth_(inst_22236)){
var statearr_22263_22283 = state_22247__$1;
(statearr_22263_22283[(1)] = (12));

} else {
var statearr_22264_22284 = state_22247__$1;
(statearr_22264_22284[(1)] = (13));

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
});})(c__21834__auto___22270,tc,fc))
;
return ((function (switch__21746__auto__,c__21834__auto___22270,tc,fc){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_22265 = [null,null,null,null,null,null,null,null,null];
(statearr_22265[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_22265[(1)] = (1));

return statearr_22265;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_22247){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_22247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e22266){if((e22266 instanceof Object)){
var ex__21750__auto__ = e22266;
var statearr_22267_22285 = state_22247;
(statearr_22267_22285[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22286 = state_22247;
state_22247 = G__22286;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_22247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_22247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___22270,tc,fc))
})();
var state__21836__auto__ = (function (){var statearr_22268 = f__21835__auto__.call(null);
(statearr_22268[(6)] = c__21834__auto___22270);

return statearr_22268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___22270,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto__){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto__){
return (function (state_22307){
var state_val_22308 = (state_22307[(1)]);
if((state_val_22308 === (7))){
var inst_22303 = (state_22307[(2)]);
var state_22307__$1 = state_22307;
var statearr_22309_22327 = state_22307__$1;
(statearr_22309_22327[(2)] = inst_22303);

(statearr_22309_22327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22308 === (1))){
var inst_22287 = init;
var state_22307__$1 = (function (){var statearr_22310 = state_22307;
(statearr_22310[(7)] = inst_22287);

return statearr_22310;
})();
var statearr_22311_22328 = state_22307__$1;
(statearr_22311_22328[(2)] = null);

(statearr_22311_22328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22308 === (4))){
var inst_22290 = (state_22307[(8)]);
var inst_22290__$1 = (state_22307[(2)]);
var inst_22291 = (inst_22290__$1 == null);
var state_22307__$1 = (function (){var statearr_22312 = state_22307;
(statearr_22312[(8)] = inst_22290__$1);

return statearr_22312;
})();
if(cljs.core.truth_(inst_22291)){
var statearr_22313_22329 = state_22307__$1;
(statearr_22313_22329[(1)] = (5));

} else {
var statearr_22314_22330 = state_22307__$1;
(statearr_22314_22330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22308 === (6))){
var inst_22287 = (state_22307[(7)]);
var inst_22290 = (state_22307[(8)]);
var inst_22294 = (state_22307[(9)]);
var inst_22294__$1 = f.call(null,inst_22287,inst_22290);
var inst_22295 = cljs.core.reduced_QMARK_.call(null,inst_22294__$1);
var state_22307__$1 = (function (){var statearr_22315 = state_22307;
(statearr_22315[(9)] = inst_22294__$1);

return statearr_22315;
})();
if(inst_22295){
var statearr_22316_22331 = state_22307__$1;
(statearr_22316_22331[(1)] = (8));

} else {
var statearr_22317_22332 = state_22307__$1;
(statearr_22317_22332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22308 === (3))){
var inst_22305 = (state_22307[(2)]);
var state_22307__$1 = state_22307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22307__$1,inst_22305);
} else {
if((state_val_22308 === (2))){
var state_22307__$1 = state_22307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22307__$1,(4),ch);
} else {
if((state_val_22308 === (9))){
var inst_22294 = (state_22307[(9)]);
var inst_22287 = inst_22294;
var state_22307__$1 = (function (){var statearr_22318 = state_22307;
(statearr_22318[(7)] = inst_22287);

return statearr_22318;
})();
var statearr_22319_22333 = state_22307__$1;
(statearr_22319_22333[(2)] = null);

(statearr_22319_22333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22308 === (5))){
var inst_22287 = (state_22307[(7)]);
var state_22307__$1 = state_22307;
var statearr_22320_22334 = state_22307__$1;
(statearr_22320_22334[(2)] = inst_22287);

(statearr_22320_22334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22308 === (10))){
var inst_22301 = (state_22307[(2)]);
var state_22307__$1 = state_22307;
var statearr_22321_22335 = state_22307__$1;
(statearr_22321_22335[(2)] = inst_22301);

(statearr_22321_22335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22308 === (8))){
var inst_22294 = (state_22307[(9)]);
var inst_22297 = cljs.core.deref.call(null,inst_22294);
var state_22307__$1 = state_22307;
var statearr_22322_22336 = state_22307__$1;
(statearr_22322_22336[(2)] = inst_22297);

(statearr_22322_22336[(1)] = (10));


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
});})(c__21834__auto__))
;
return ((function (switch__21746__auto__,c__21834__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21747__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21747__auto____0 = (function (){
var statearr_22323 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22323[(0)] = cljs$core$async$reduce_$_state_machine__21747__auto__);

(statearr_22323[(1)] = (1));

return statearr_22323;
});
var cljs$core$async$reduce_$_state_machine__21747__auto____1 = (function (state_22307){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_22307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e22324){if((e22324 instanceof Object)){
var ex__21750__auto__ = e22324;
var statearr_22325_22337 = state_22307;
(statearr_22325_22337[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22338 = state_22307;
state_22307 = G__22338;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21747__auto__ = function(state_22307){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21747__auto____1.call(this,state_22307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21747__auto____0;
cljs$core$async$reduce_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21747__auto____1;
return cljs$core$async$reduce_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto__))
})();
var state__21836__auto__ = (function (){var statearr_22326 = f__21835__auto__.call(null);
(statearr_22326[(6)] = c__21834__auto__);

return statearr_22326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto__))
);

return c__21834__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__22340 = arguments.length;
switch (G__22340) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto__){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto__){
return (function (state_22365){
var state_val_22366 = (state_22365[(1)]);
if((state_val_22366 === (7))){
var inst_22347 = (state_22365[(2)]);
var state_22365__$1 = state_22365;
var statearr_22367_22388 = state_22365__$1;
(statearr_22367_22388[(2)] = inst_22347);

(statearr_22367_22388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22366 === (1))){
var inst_22341 = cljs.core.seq.call(null,coll);
var inst_22342 = inst_22341;
var state_22365__$1 = (function (){var statearr_22368 = state_22365;
(statearr_22368[(7)] = inst_22342);

return statearr_22368;
})();
var statearr_22369_22389 = state_22365__$1;
(statearr_22369_22389[(2)] = null);

(statearr_22369_22389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22366 === (4))){
var inst_22342 = (state_22365[(7)]);
var inst_22345 = cljs.core.first.call(null,inst_22342);
var state_22365__$1 = state_22365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22365__$1,(7),ch,inst_22345);
} else {
if((state_val_22366 === (13))){
var inst_22359 = (state_22365[(2)]);
var state_22365__$1 = state_22365;
var statearr_22370_22390 = state_22365__$1;
(statearr_22370_22390[(2)] = inst_22359);

(statearr_22370_22390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22366 === (6))){
var inst_22350 = (state_22365[(2)]);
var state_22365__$1 = state_22365;
if(cljs.core.truth_(inst_22350)){
var statearr_22371_22391 = state_22365__$1;
(statearr_22371_22391[(1)] = (8));

} else {
var statearr_22372_22392 = state_22365__$1;
(statearr_22372_22392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22366 === (3))){
var inst_22363 = (state_22365[(2)]);
var state_22365__$1 = state_22365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22365__$1,inst_22363);
} else {
if((state_val_22366 === (12))){
var state_22365__$1 = state_22365;
var statearr_22373_22393 = state_22365__$1;
(statearr_22373_22393[(2)] = null);

(statearr_22373_22393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22366 === (2))){
var inst_22342 = (state_22365[(7)]);
var state_22365__$1 = state_22365;
if(cljs.core.truth_(inst_22342)){
var statearr_22374_22394 = state_22365__$1;
(statearr_22374_22394[(1)] = (4));

} else {
var statearr_22375_22395 = state_22365__$1;
(statearr_22375_22395[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22366 === (11))){
var inst_22356 = cljs.core.async.close_BANG_.call(null,ch);
var state_22365__$1 = state_22365;
var statearr_22376_22396 = state_22365__$1;
(statearr_22376_22396[(2)] = inst_22356);

(statearr_22376_22396[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22366 === (9))){
var state_22365__$1 = state_22365;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22377_22397 = state_22365__$1;
(statearr_22377_22397[(1)] = (11));

} else {
var statearr_22378_22398 = state_22365__$1;
(statearr_22378_22398[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22366 === (5))){
var inst_22342 = (state_22365[(7)]);
var state_22365__$1 = state_22365;
var statearr_22379_22399 = state_22365__$1;
(statearr_22379_22399[(2)] = inst_22342);

(statearr_22379_22399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22366 === (10))){
var inst_22361 = (state_22365[(2)]);
var state_22365__$1 = state_22365;
var statearr_22380_22400 = state_22365__$1;
(statearr_22380_22400[(2)] = inst_22361);

(statearr_22380_22400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22366 === (8))){
var inst_22342 = (state_22365[(7)]);
var inst_22352 = cljs.core.next.call(null,inst_22342);
var inst_22342__$1 = inst_22352;
var state_22365__$1 = (function (){var statearr_22381 = state_22365;
(statearr_22381[(7)] = inst_22342__$1);

return statearr_22381;
})();
var statearr_22382_22401 = state_22365__$1;
(statearr_22382_22401[(2)] = null);

(statearr_22382_22401[(1)] = (2));


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
});})(c__21834__auto__))
;
return ((function (switch__21746__auto__,c__21834__auto__){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_22383 = [null,null,null,null,null,null,null,null];
(statearr_22383[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_22383[(1)] = (1));

return statearr_22383;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_22365){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_22365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e22384){if((e22384 instanceof Object)){
var ex__21750__auto__ = e22384;
var statearr_22385_22402 = state_22365;
(statearr_22385_22402[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22403 = state_22365;
state_22365 = G__22403;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_22365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_22365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto__))
})();
var state__21836__auto__ = (function (){var statearr_22386 = f__21835__auto__.call(null);
(statearr_22386[(6)] = c__21834__auto__);

return statearr_22386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto__))
);

return c__21834__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22404 = (function (ch,cs,meta22405){
this.ch = ch;
this.cs = cs;
this.meta22405 = meta22405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22406,meta22405__$1){
var self__ = this;
var _22406__$1 = this;
return (new cljs.core.async.t_cljs$core$async22404(self__.ch,self__.cs,meta22405__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22406){
var self__ = this;
var _22406__$1 = this;
return self__.meta22405;
});})(cs))
;

cljs.core.async.t_cljs$core$async22404.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22404.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22404.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22404.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22404.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22404.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22404.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22405","meta22405",1347090721,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22404";

cljs.core.async.t_cljs$core$async22404.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22404");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22404.
 */
cljs.core.async.__GT_t_cljs$core$async22404 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22404(ch__$1,cs__$1,meta22405){
return (new cljs.core.async.t_cljs$core$async22404(ch__$1,cs__$1,meta22405));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22404(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21834__auto___22626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___22626,cs,m,dchan,dctr,done){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___22626,cs,m,dchan,dctr,done){
return (function (state_22541){
var state_val_22542 = (state_22541[(1)]);
if((state_val_22542 === (7))){
var inst_22537 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22543_22627 = state_22541__$1;
(statearr_22543_22627[(2)] = inst_22537);

(statearr_22543_22627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (20))){
var inst_22440 = (state_22541[(7)]);
var inst_22452 = cljs.core.first.call(null,inst_22440);
var inst_22453 = cljs.core.nth.call(null,inst_22452,(0),null);
var inst_22454 = cljs.core.nth.call(null,inst_22452,(1),null);
var state_22541__$1 = (function (){var statearr_22544 = state_22541;
(statearr_22544[(8)] = inst_22453);

return statearr_22544;
})();
if(cljs.core.truth_(inst_22454)){
var statearr_22545_22628 = state_22541__$1;
(statearr_22545_22628[(1)] = (22));

} else {
var statearr_22546_22629 = state_22541__$1;
(statearr_22546_22629[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (27))){
var inst_22489 = (state_22541[(9)]);
var inst_22482 = (state_22541[(10)]);
var inst_22409 = (state_22541[(11)]);
var inst_22484 = (state_22541[(12)]);
var inst_22489__$1 = cljs.core._nth.call(null,inst_22482,inst_22484);
var inst_22490 = cljs.core.async.put_BANG_.call(null,inst_22489__$1,inst_22409,done);
var state_22541__$1 = (function (){var statearr_22547 = state_22541;
(statearr_22547[(9)] = inst_22489__$1);

return statearr_22547;
})();
if(cljs.core.truth_(inst_22490)){
var statearr_22548_22630 = state_22541__$1;
(statearr_22548_22630[(1)] = (30));

} else {
var statearr_22549_22631 = state_22541__$1;
(statearr_22549_22631[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (1))){
var state_22541__$1 = state_22541;
var statearr_22550_22632 = state_22541__$1;
(statearr_22550_22632[(2)] = null);

(statearr_22550_22632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (24))){
var inst_22440 = (state_22541[(7)]);
var inst_22459 = (state_22541[(2)]);
var inst_22460 = cljs.core.next.call(null,inst_22440);
var inst_22418 = inst_22460;
var inst_22419 = null;
var inst_22420 = (0);
var inst_22421 = (0);
var state_22541__$1 = (function (){var statearr_22551 = state_22541;
(statearr_22551[(13)] = inst_22419);

(statearr_22551[(14)] = inst_22421);

(statearr_22551[(15)] = inst_22459);

(statearr_22551[(16)] = inst_22420);

(statearr_22551[(17)] = inst_22418);

return statearr_22551;
})();
var statearr_22552_22633 = state_22541__$1;
(statearr_22552_22633[(2)] = null);

(statearr_22552_22633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (39))){
var state_22541__$1 = state_22541;
var statearr_22556_22634 = state_22541__$1;
(statearr_22556_22634[(2)] = null);

(statearr_22556_22634[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (4))){
var inst_22409 = (state_22541[(11)]);
var inst_22409__$1 = (state_22541[(2)]);
var inst_22410 = (inst_22409__$1 == null);
var state_22541__$1 = (function (){var statearr_22557 = state_22541;
(statearr_22557[(11)] = inst_22409__$1);

return statearr_22557;
})();
if(cljs.core.truth_(inst_22410)){
var statearr_22558_22635 = state_22541__$1;
(statearr_22558_22635[(1)] = (5));

} else {
var statearr_22559_22636 = state_22541__$1;
(statearr_22559_22636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (15))){
var inst_22419 = (state_22541[(13)]);
var inst_22421 = (state_22541[(14)]);
var inst_22420 = (state_22541[(16)]);
var inst_22418 = (state_22541[(17)]);
var inst_22436 = (state_22541[(2)]);
var inst_22437 = (inst_22421 + (1));
var tmp22553 = inst_22419;
var tmp22554 = inst_22420;
var tmp22555 = inst_22418;
var inst_22418__$1 = tmp22555;
var inst_22419__$1 = tmp22553;
var inst_22420__$1 = tmp22554;
var inst_22421__$1 = inst_22437;
var state_22541__$1 = (function (){var statearr_22560 = state_22541;
(statearr_22560[(13)] = inst_22419__$1);

(statearr_22560[(14)] = inst_22421__$1);

(statearr_22560[(18)] = inst_22436);

(statearr_22560[(16)] = inst_22420__$1);

(statearr_22560[(17)] = inst_22418__$1);

return statearr_22560;
})();
var statearr_22561_22637 = state_22541__$1;
(statearr_22561_22637[(2)] = null);

(statearr_22561_22637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (21))){
var inst_22463 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22565_22638 = state_22541__$1;
(statearr_22565_22638[(2)] = inst_22463);

(statearr_22565_22638[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (31))){
var inst_22489 = (state_22541[(9)]);
var inst_22493 = done.call(null,null);
var inst_22494 = cljs.core.async.untap_STAR_.call(null,m,inst_22489);
var state_22541__$1 = (function (){var statearr_22566 = state_22541;
(statearr_22566[(19)] = inst_22493);

return statearr_22566;
})();
var statearr_22567_22639 = state_22541__$1;
(statearr_22567_22639[(2)] = inst_22494);

(statearr_22567_22639[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (32))){
var inst_22481 = (state_22541[(20)]);
var inst_22482 = (state_22541[(10)]);
var inst_22483 = (state_22541[(21)]);
var inst_22484 = (state_22541[(12)]);
var inst_22496 = (state_22541[(2)]);
var inst_22497 = (inst_22484 + (1));
var tmp22562 = inst_22481;
var tmp22563 = inst_22482;
var tmp22564 = inst_22483;
var inst_22481__$1 = tmp22562;
var inst_22482__$1 = tmp22563;
var inst_22483__$1 = tmp22564;
var inst_22484__$1 = inst_22497;
var state_22541__$1 = (function (){var statearr_22568 = state_22541;
(statearr_22568[(20)] = inst_22481__$1);

(statearr_22568[(22)] = inst_22496);

(statearr_22568[(10)] = inst_22482__$1);

(statearr_22568[(21)] = inst_22483__$1);

(statearr_22568[(12)] = inst_22484__$1);

return statearr_22568;
})();
var statearr_22569_22640 = state_22541__$1;
(statearr_22569_22640[(2)] = null);

(statearr_22569_22640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (40))){
var inst_22509 = (state_22541[(23)]);
var inst_22513 = done.call(null,null);
var inst_22514 = cljs.core.async.untap_STAR_.call(null,m,inst_22509);
var state_22541__$1 = (function (){var statearr_22570 = state_22541;
(statearr_22570[(24)] = inst_22513);

return statearr_22570;
})();
var statearr_22571_22641 = state_22541__$1;
(statearr_22571_22641[(2)] = inst_22514);

(statearr_22571_22641[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (33))){
var inst_22500 = (state_22541[(25)]);
var inst_22502 = cljs.core.chunked_seq_QMARK_.call(null,inst_22500);
var state_22541__$1 = state_22541;
if(inst_22502){
var statearr_22572_22642 = state_22541__$1;
(statearr_22572_22642[(1)] = (36));

} else {
var statearr_22573_22643 = state_22541__$1;
(statearr_22573_22643[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (13))){
var inst_22430 = (state_22541[(26)]);
var inst_22433 = cljs.core.async.close_BANG_.call(null,inst_22430);
var state_22541__$1 = state_22541;
var statearr_22574_22644 = state_22541__$1;
(statearr_22574_22644[(2)] = inst_22433);

(statearr_22574_22644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (22))){
var inst_22453 = (state_22541[(8)]);
var inst_22456 = cljs.core.async.close_BANG_.call(null,inst_22453);
var state_22541__$1 = state_22541;
var statearr_22575_22645 = state_22541__$1;
(statearr_22575_22645[(2)] = inst_22456);

(statearr_22575_22645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (36))){
var inst_22500 = (state_22541[(25)]);
var inst_22504 = cljs.core.chunk_first.call(null,inst_22500);
var inst_22505 = cljs.core.chunk_rest.call(null,inst_22500);
var inst_22506 = cljs.core.count.call(null,inst_22504);
var inst_22481 = inst_22505;
var inst_22482 = inst_22504;
var inst_22483 = inst_22506;
var inst_22484 = (0);
var state_22541__$1 = (function (){var statearr_22576 = state_22541;
(statearr_22576[(20)] = inst_22481);

(statearr_22576[(10)] = inst_22482);

(statearr_22576[(21)] = inst_22483);

(statearr_22576[(12)] = inst_22484);

return statearr_22576;
})();
var statearr_22577_22646 = state_22541__$1;
(statearr_22577_22646[(2)] = null);

(statearr_22577_22646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (41))){
var inst_22500 = (state_22541[(25)]);
var inst_22516 = (state_22541[(2)]);
var inst_22517 = cljs.core.next.call(null,inst_22500);
var inst_22481 = inst_22517;
var inst_22482 = null;
var inst_22483 = (0);
var inst_22484 = (0);
var state_22541__$1 = (function (){var statearr_22578 = state_22541;
(statearr_22578[(20)] = inst_22481);

(statearr_22578[(10)] = inst_22482);

(statearr_22578[(21)] = inst_22483);

(statearr_22578[(27)] = inst_22516);

(statearr_22578[(12)] = inst_22484);

return statearr_22578;
})();
var statearr_22579_22647 = state_22541__$1;
(statearr_22579_22647[(2)] = null);

(statearr_22579_22647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (43))){
var state_22541__$1 = state_22541;
var statearr_22580_22648 = state_22541__$1;
(statearr_22580_22648[(2)] = null);

(statearr_22580_22648[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (29))){
var inst_22525 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22581_22649 = state_22541__$1;
(statearr_22581_22649[(2)] = inst_22525);

(statearr_22581_22649[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (44))){
var inst_22534 = (state_22541[(2)]);
var state_22541__$1 = (function (){var statearr_22582 = state_22541;
(statearr_22582[(28)] = inst_22534);

return statearr_22582;
})();
var statearr_22583_22650 = state_22541__$1;
(statearr_22583_22650[(2)] = null);

(statearr_22583_22650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (6))){
var inst_22473 = (state_22541[(29)]);
var inst_22472 = cljs.core.deref.call(null,cs);
var inst_22473__$1 = cljs.core.keys.call(null,inst_22472);
var inst_22474 = cljs.core.count.call(null,inst_22473__$1);
var inst_22475 = cljs.core.reset_BANG_.call(null,dctr,inst_22474);
var inst_22480 = cljs.core.seq.call(null,inst_22473__$1);
var inst_22481 = inst_22480;
var inst_22482 = null;
var inst_22483 = (0);
var inst_22484 = (0);
var state_22541__$1 = (function (){var statearr_22584 = state_22541;
(statearr_22584[(20)] = inst_22481);

(statearr_22584[(10)] = inst_22482);

(statearr_22584[(21)] = inst_22483);

(statearr_22584[(29)] = inst_22473__$1);

(statearr_22584[(30)] = inst_22475);

(statearr_22584[(12)] = inst_22484);

return statearr_22584;
})();
var statearr_22585_22651 = state_22541__$1;
(statearr_22585_22651[(2)] = null);

(statearr_22585_22651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (28))){
var inst_22481 = (state_22541[(20)]);
var inst_22500 = (state_22541[(25)]);
var inst_22500__$1 = cljs.core.seq.call(null,inst_22481);
var state_22541__$1 = (function (){var statearr_22586 = state_22541;
(statearr_22586[(25)] = inst_22500__$1);

return statearr_22586;
})();
if(inst_22500__$1){
var statearr_22587_22652 = state_22541__$1;
(statearr_22587_22652[(1)] = (33));

} else {
var statearr_22588_22653 = state_22541__$1;
(statearr_22588_22653[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (25))){
var inst_22483 = (state_22541[(21)]);
var inst_22484 = (state_22541[(12)]);
var inst_22486 = (inst_22484 < inst_22483);
var inst_22487 = inst_22486;
var state_22541__$1 = state_22541;
if(cljs.core.truth_(inst_22487)){
var statearr_22589_22654 = state_22541__$1;
(statearr_22589_22654[(1)] = (27));

} else {
var statearr_22590_22655 = state_22541__$1;
(statearr_22590_22655[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (34))){
var state_22541__$1 = state_22541;
var statearr_22591_22656 = state_22541__$1;
(statearr_22591_22656[(2)] = null);

(statearr_22591_22656[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (17))){
var state_22541__$1 = state_22541;
var statearr_22592_22657 = state_22541__$1;
(statearr_22592_22657[(2)] = null);

(statearr_22592_22657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (3))){
var inst_22539 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22541__$1,inst_22539);
} else {
if((state_val_22542 === (12))){
var inst_22468 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22593_22658 = state_22541__$1;
(statearr_22593_22658[(2)] = inst_22468);

(statearr_22593_22658[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (2))){
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22541__$1,(4),ch);
} else {
if((state_val_22542 === (23))){
var state_22541__$1 = state_22541;
var statearr_22594_22659 = state_22541__$1;
(statearr_22594_22659[(2)] = null);

(statearr_22594_22659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (35))){
var inst_22523 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22595_22660 = state_22541__$1;
(statearr_22595_22660[(2)] = inst_22523);

(statearr_22595_22660[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (19))){
var inst_22440 = (state_22541[(7)]);
var inst_22444 = cljs.core.chunk_first.call(null,inst_22440);
var inst_22445 = cljs.core.chunk_rest.call(null,inst_22440);
var inst_22446 = cljs.core.count.call(null,inst_22444);
var inst_22418 = inst_22445;
var inst_22419 = inst_22444;
var inst_22420 = inst_22446;
var inst_22421 = (0);
var state_22541__$1 = (function (){var statearr_22596 = state_22541;
(statearr_22596[(13)] = inst_22419);

(statearr_22596[(14)] = inst_22421);

(statearr_22596[(16)] = inst_22420);

(statearr_22596[(17)] = inst_22418);

return statearr_22596;
})();
var statearr_22597_22661 = state_22541__$1;
(statearr_22597_22661[(2)] = null);

(statearr_22597_22661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (11))){
var inst_22440 = (state_22541[(7)]);
var inst_22418 = (state_22541[(17)]);
var inst_22440__$1 = cljs.core.seq.call(null,inst_22418);
var state_22541__$1 = (function (){var statearr_22598 = state_22541;
(statearr_22598[(7)] = inst_22440__$1);

return statearr_22598;
})();
if(inst_22440__$1){
var statearr_22599_22662 = state_22541__$1;
(statearr_22599_22662[(1)] = (16));

} else {
var statearr_22600_22663 = state_22541__$1;
(statearr_22600_22663[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (9))){
var inst_22470 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22601_22664 = state_22541__$1;
(statearr_22601_22664[(2)] = inst_22470);

(statearr_22601_22664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (5))){
var inst_22416 = cljs.core.deref.call(null,cs);
var inst_22417 = cljs.core.seq.call(null,inst_22416);
var inst_22418 = inst_22417;
var inst_22419 = null;
var inst_22420 = (0);
var inst_22421 = (0);
var state_22541__$1 = (function (){var statearr_22602 = state_22541;
(statearr_22602[(13)] = inst_22419);

(statearr_22602[(14)] = inst_22421);

(statearr_22602[(16)] = inst_22420);

(statearr_22602[(17)] = inst_22418);

return statearr_22602;
})();
var statearr_22603_22665 = state_22541__$1;
(statearr_22603_22665[(2)] = null);

(statearr_22603_22665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (14))){
var state_22541__$1 = state_22541;
var statearr_22604_22666 = state_22541__$1;
(statearr_22604_22666[(2)] = null);

(statearr_22604_22666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (45))){
var inst_22531 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22605_22667 = state_22541__$1;
(statearr_22605_22667[(2)] = inst_22531);

(statearr_22605_22667[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (26))){
var inst_22473 = (state_22541[(29)]);
var inst_22527 = (state_22541[(2)]);
var inst_22528 = cljs.core.seq.call(null,inst_22473);
var state_22541__$1 = (function (){var statearr_22606 = state_22541;
(statearr_22606[(31)] = inst_22527);

return statearr_22606;
})();
if(inst_22528){
var statearr_22607_22668 = state_22541__$1;
(statearr_22607_22668[(1)] = (42));

} else {
var statearr_22608_22669 = state_22541__$1;
(statearr_22608_22669[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (16))){
var inst_22440 = (state_22541[(7)]);
var inst_22442 = cljs.core.chunked_seq_QMARK_.call(null,inst_22440);
var state_22541__$1 = state_22541;
if(inst_22442){
var statearr_22609_22670 = state_22541__$1;
(statearr_22609_22670[(1)] = (19));

} else {
var statearr_22610_22671 = state_22541__$1;
(statearr_22610_22671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (38))){
var inst_22520 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22611_22672 = state_22541__$1;
(statearr_22611_22672[(2)] = inst_22520);

(statearr_22611_22672[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (30))){
var state_22541__$1 = state_22541;
var statearr_22612_22673 = state_22541__$1;
(statearr_22612_22673[(2)] = null);

(statearr_22612_22673[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (10))){
var inst_22419 = (state_22541[(13)]);
var inst_22421 = (state_22541[(14)]);
var inst_22429 = cljs.core._nth.call(null,inst_22419,inst_22421);
var inst_22430 = cljs.core.nth.call(null,inst_22429,(0),null);
var inst_22431 = cljs.core.nth.call(null,inst_22429,(1),null);
var state_22541__$1 = (function (){var statearr_22613 = state_22541;
(statearr_22613[(26)] = inst_22430);

return statearr_22613;
})();
if(cljs.core.truth_(inst_22431)){
var statearr_22614_22674 = state_22541__$1;
(statearr_22614_22674[(1)] = (13));

} else {
var statearr_22615_22675 = state_22541__$1;
(statearr_22615_22675[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (18))){
var inst_22466 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22616_22676 = state_22541__$1;
(statearr_22616_22676[(2)] = inst_22466);

(statearr_22616_22676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (42))){
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22541__$1,(45),dchan);
} else {
if((state_val_22542 === (37))){
var inst_22500 = (state_22541[(25)]);
var inst_22409 = (state_22541[(11)]);
var inst_22509 = (state_22541[(23)]);
var inst_22509__$1 = cljs.core.first.call(null,inst_22500);
var inst_22510 = cljs.core.async.put_BANG_.call(null,inst_22509__$1,inst_22409,done);
var state_22541__$1 = (function (){var statearr_22617 = state_22541;
(statearr_22617[(23)] = inst_22509__$1);

return statearr_22617;
})();
if(cljs.core.truth_(inst_22510)){
var statearr_22618_22677 = state_22541__$1;
(statearr_22618_22677[(1)] = (39));

} else {
var statearr_22619_22678 = state_22541__$1;
(statearr_22619_22678[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (8))){
var inst_22421 = (state_22541[(14)]);
var inst_22420 = (state_22541[(16)]);
var inst_22423 = (inst_22421 < inst_22420);
var inst_22424 = inst_22423;
var state_22541__$1 = state_22541;
if(cljs.core.truth_(inst_22424)){
var statearr_22620_22679 = state_22541__$1;
(statearr_22620_22679[(1)] = (10));

} else {
var statearr_22621_22680 = state_22541__$1;
(statearr_22621_22680[(1)] = (11));

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
});})(c__21834__auto___22626,cs,m,dchan,dctr,done))
;
return ((function (switch__21746__auto__,c__21834__auto___22626,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21747__auto__ = null;
var cljs$core$async$mult_$_state_machine__21747__auto____0 = (function (){
var statearr_22622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22622[(0)] = cljs$core$async$mult_$_state_machine__21747__auto__);

(statearr_22622[(1)] = (1));

return statearr_22622;
});
var cljs$core$async$mult_$_state_machine__21747__auto____1 = (function (state_22541){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_22541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e22623){if((e22623 instanceof Object)){
var ex__21750__auto__ = e22623;
var statearr_22624_22681 = state_22541;
(statearr_22624_22681[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22682 = state_22541;
state_22541 = G__22682;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21747__auto__ = function(state_22541){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21747__auto____1.call(this,state_22541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21747__auto____0;
cljs$core$async$mult_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21747__auto____1;
return cljs$core$async$mult_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___22626,cs,m,dchan,dctr,done))
})();
var state__21836__auto__ = (function (){var statearr_22625 = f__21835__auto__.call(null);
(statearr_22625[(6)] = c__21834__auto___22626);

return statearr_22625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___22626,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__22684 = arguments.length;
switch (G__22684) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22696 = arguments.length;
var i__4500__auto___22697 = (0);
while(true){
if((i__4500__auto___22697 < len__4499__auto___22696)){
args__4502__auto__.push((arguments[i__4500__auto___22697]));

var G__22698 = (i__4500__auto___22697 + (1));
i__4500__auto___22697 = G__22698;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22690){
var map__22691 = p__22690;
var map__22691__$1 = ((((!((map__22691 == null)))?(((((map__22691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22691):map__22691);
var opts = map__22691__$1;
var statearr_22693_22699 = state;
(statearr_22693_22699[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22691,map__22691__$1,opts){
return (function (val){
var statearr_22694_22700 = state;
(statearr_22694_22700[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22691,map__22691__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22695_22701 = state;
(statearr_22695_22701[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22686){
var G__22687 = cljs.core.first.call(null,seq22686);
var seq22686__$1 = cljs.core.next.call(null,seq22686);
var G__22688 = cljs.core.first.call(null,seq22686__$1);
var seq22686__$2 = cljs.core.next.call(null,seq22686__$1);
var G__22689 = cljs.core.first.call(null,seq22686__$2);
var seq22686__$3 = cljs.core.next.call(null,seq22686__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22687,G__22688,G__22689,seq22686__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22702 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22703){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22703 = meta22703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22704,meta22703__$1){
var self__ = this;
var _22704__$1 = this;
return (new cljs.core.async.t_cljs$core$async22702(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22703__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22704){
var self__ = this;
var _22704__$1 = this;
return self__.meta22703;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22702.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22702.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22703","meta22703",652992542,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22702";

cljs.core.async.t_cljs$core$async22702.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22702");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22702.
 */
cljs.core.async.__GT_t_cljs$core$async22702 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22702(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22703){
return (new cljs.core.async.t_cljs$core$async22702(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22703));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22702(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21834__auto___22866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___22866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___22866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22806){
var state_val_22807 = (state_22806[(1)]);
if((state_val_22807 === (7))){
var inst_22721 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
var statearr_22808_22867 = state_22806__$1;
(statearr_22808_22867[(2)] = inst_22721);

(statearr_22808_22867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (20))){
var inst_22733 = (state_22806[(7)]);
var state_22806__$1 = state_22806;
var statearr_22809_22868 = state_22806__$1;
(statearr_22809_22868[(2)] = inst_22733);

(statearr_22809_22868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (27))){
var state_22806__$1 = state_22806;
var statearr_22810_22869 = state_22806__$1;
(statearr_22810_22869[(2)] = null);

(statearr_22810_22869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (1))){
var inst_22708 = (state_22806[(8)]);
var inst_22708__$1 = calc_state.call(null);
var inst_22710 = (inst_22708__$1 == null);
var inst_22711 = cljs.core.not.call(null,inst_22710);
var state_22806__$1 = (function (){var statearr_22811 = state_22806;
(statearr_22811[(8)] = inst_22708__$1);

return statearr_22811;
})();
if(inst_22711){
var statearr_22812_22870 = state_22806__$1;
(statearr_22812_22870[(1)] = (2));

} else {
var statearr_22813_22871 = state_22806__$1;
(statearr_22813_22871[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (24))){
var inst_22766 = (state_22806[(9)]);
var inst_22780 = (state_22806[(10)]);
var inst_22757 = (state_22806[(11)]);
var inst_22780__$1 = inst_22757.call(null,inst_22766);
var state_22806__$1 = (function (){var statearr_22814 = state_22806;
(statearr_22814[(10)] = inst_22780__$1);

return statearr_22814;
})();
if(cljs.core.truth_(inst_22780__$1)){
var statearr_22815_22872 = state_22806__$1;
(statearr_22815_22872[(1)] = (29));

} else {
var statearr_22816_22873 = state_22806__$1;
(statearr_22816_22873[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (4))){
var inst_22724 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
if(cljs.core.truth_(inst_22724)){
var statearr_22817_22874 = state_22806__$1;
(statearr_22817_22874[(1)] = (8));

} else {
var statearr_22818_22875 = state_22806__$1;
(statearr_22818_22875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (15))){
var inst_22751 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
if(cljs.core.truth_(inst_22751)){
var statearr_22819_22876 = state_22806__$1;
(statearr_22819_22876[(1)] = (19));

} else {
var statearr_22820_22877 = state_22806__$1;
(statearr_22820_22877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (21))){
var inst_22756 = (state_22806[(12)]);
var inst_22756__$1 = (state_22806[(2)]);
var inst_22757 = cljs.core.get.call(null,inst_22756__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22758 = cljs.core.get.call(null,inst_22756__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22759 = cljs.core.get.call(null,inst_22756__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22806__$1 = (function (){var statearr_22821 = state_22806;
(statearr_22821[(13)] = inst_22758);

(statearr_22821[(12)] = inst_22756__$1);

(statearr_22821[(11)] = inst_22757);

return statearr_22821;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22806__$1,(22),inst_22759);
} else {
if((state_val_22807 === (31))){
var inst_22788 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
if(cljs.core.truth_(inst_22788)){
var statearr_22822_22878 = state_22806__$1;
(statearr_22822_22878[(1)] = (32));

} else {
var statearr_22823_22879 = state_22806__$1;
(statearr_22823_22879[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (32))){
var inst_22765 = (state_22806[(14)]);
var state_22806__$1 = state_22806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22806__$1,(35),out,inst_22765);
} else {
if((state_val_22807 === (33))){
var inst_22756 = (state_22806[(12)]);
var inst_22733 = inst_22756;
var state_22806__$1 = (function (){var statearr_22824 = state_22806;
(statearr_22824[(7)] = inst_22733);

return statearr_22824;
})();
var statearr_22825_22880 = state_22806__$1;
(statearr_22825_22880[(2)] = null);

(statearr_22825_22880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (13))){
var inst_22733 = (state_22806[(7)]);
var inst_22740 = inst_22733.cljs$lang$protocol_mask$partition0$;
var inst_22741 = (inst_22740 & (64));
var inst_22742 = inst_22733.cljs$core$ISeq$;
var inst_22743 = (cljs.core.PROTOCOL_SENTINEL === inst_22742);
var inst_22744 = ((inst_22741) || (inst_22743));
var state_22806__$1 = state_22806;
if(cljs.core.truth_(inst_22744)){
var statearr_22826_22881 = state_22806__$1;
(statearr_22826_22881[(1)] = (16));

} else {
var statearr_22827_22882 = state_22806__$1;
(statearr_22827_22882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (22))){
var inst_22766 = (state_22806[(9)]);
var inst_22765 = (state_22806[(14)]);
var inst_22764 = (state_22806[(2)]);
var inst_22765__$1 = cljs.core.nth.call(null,inst_22764,(0),null);
var inst_22766__$1 = cljs.core.nth.call(null,inst_22764,(1),null);
var inst_22767 = (inst_22765__$1 == null);
var inst_22768 = cljs.core._EQ_.call(null,inst_22766__$1,change);
var inst_22769 = ((inst_22767) || (inst_22768));
var state_22806__$1 = (function (){var statearr_22828 = state_22806;
(statearr_22828[(9)] = inst_22766__$1);

(statearr_22828[(14)] = inst_22765__$1);

return statearr_22828;
})();
if(cljs.core.truth_(inst_22769)){
var statearr_22829_22883 = state_22806__$1;
(statearr_22829_22883[(1)] = (23));

} else {
var statearr_22830_22884 = state_22806__$1;
(statearr_22830_22884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (36))){
var inst_22756 = (state_22806[(12)]);
var inst_22733 = inst_22756;
var state_22806__$1 = (function (){var statearr_22831 = state_22806;
(statearr_22831[(7)] = inst_22733);

return statearr_22831;
})();
var statearr_22832_22885 = state_22806__$1;
(statearr_22832_22885[(2)] = null);

(statearr_22832_22885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (29))){
var inst_22780 = (state_22806[(10)]);
var state_22806__$1 = state_22806;
var statearr_22833_22886 = state_22806__$1;
(statearr_22833_22886[(2)] = inst_22780);

(statearr_22833_22886[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (6))){
var state_22806__$1 = state_22806;
var statearr_22834_22887 = state_22806__$1;
(statearr_22834_22887[(2)] = false);

(statearr_22834_22887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (28))){
var inst_22776 = (state_22806[(2)]);
var inst_22777 = calc_state.call(null);
var inst_22733 = inst_22777;
var state_22806__$1 = (function (){var statearr_22835 = state_22806;
(statearr_22835[(15)] = inst_22776);

(statearr_22835[(7)] = inst_22733);

return statearr_22835;
})();
var statearr_22836_22888 = state_22806__$1;
(statearr_22836_22888[(2)] = null);

(statearr_22836_22888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (25))){
var inst_22802 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
var statearr_22837_22889 = state_22806__$1;
(statearr_22837_22889[(2)] = inst_22802);

(statearr_22837_22889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (34))){
var inst_22800 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
var statearr_22838_22890 = state_22806__$1;
(statearr_22838_22890[(2)] = inst_22800);

(statearr_22838_22890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (17))){
var state_22806__$1 = state_22806;
var statearr_22839_22891 = state_22806__$1;
(statearr_22839_22891[(2)] = false);

(statearr_22839_22891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (3))){
var state_22806__$1 = state_22806;
var statearr_22840_22892 = state_22806__$1;
(statearr_22840_22892[(2)] = false);

(statearr_22840_22892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (12))){
var inst_22804 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22806__$1,inst_22804);
} else {
if((state_val_22807 === (2))){
var inst_22708 = (state_22806[(8)]);
var inst_22713 = inst_22708.cljs$lang$protocol_mask$partition0$;
var inst_22714 = (inst_22713 & (64));
var inst_22715 = inst_22708.cljs$core$ISeq$;
var inst_22716 = (cljs.core.PROTOCOL_SENTINEL === inst_22715);
var inst_22717 = ((inst_22714) || (inst_22716));
var state_22806__$1 = state_22806;
if(cljs.core.truth_(inst_22717)){
var statearr_22841_22893 = state_22806__$1;
(statearr_22841_22893[(1)] = (5));

} else {
var statearr_22842_22894 = state_22806__$1;
(statearr_22842_22894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (23))){
var inst_22765 = (state_22806[(14)]);
var inst_22771 = (inst_22765 == null);
var state_22806__$1 = state_22806;
if(cljs.core.truth_(inst_22771)){
var statearr_22843_22895 = state_22806__$1;
(statearr_22843_22895[(1)] = (26));

} else {
var statearr_22844_22896 = state_22806__$1;
(statearr_22844_22896[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (35))){
var inst_22791 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
if(cljs.core.truth_(inst_22791)){
var statearr_22845_22897 = state_22806__$1;
(statearr_22845_22897[(1)] = (36));

} else {
var statearr_22846_22898 = state_22806__$1;
(statearr_22846_22898[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (19))){
var inst_22733 = (state_22806[(7)]);
var inst_22753 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22733);
var state_22806__$1 = state_22806;
var statearr_22847_22899 = state_22806__$1;
(statearr_22847_22899[(2)] = inst_22753);

(statearr_22847_22899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (11))){
var inst_22733 = (state_22806[(7)]);
var inst_22737 = (inst_22733 == null);
var inst_22738 = cljs.core.not.call(null,inst_22737);
var state_22806__$1 = state_22806;
if(inst_22738){
var statearr_22848_22900 = state_22806__$1;
(statearr_22848_22900[(1)] = (13));

} else {
var statearr_22849_22901 = state_22806__$1;
(statearr_22849_22901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (9))){
var inst_22708 = (state_22806[(8)]);
var state_22806__$1 = state_22806;
var statearr_22850_22902 = state_22806__$1;
(statearr_22850_22902[(2)] = inst_22708);

(statearr_22850_22902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (5))){
var state_22806__$1 = state_22806;
var statearr_22851_22903 = state_22806__$1;
(statearr_22851_22903[(2)] = true);

(statearr_22851_22903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (14))){
var state_22806__$1 = state_22806;
var statearr_22852_22904 = state_22806__$1;
(statearr_22852_22904[(2)] = false);

(statearr_22852_22904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (26))){
var inst_22766 = (state_22806[(9)]);
var inst_22773 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22766);
var state_22806__$1 = state_22806;
var statearr_22853_22905 = state_22806__$1;
(statearr_22853_22905[(2)] = inst_22773);

(statearr_22853_22905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (16))){
var state_22806__$1 = state_22806;
var statearr_22854_22906 = state_22806__$1;
(statearr_22854_22906[(2)] = true);

(statearr_22854_22906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (38))){
var inst_22796 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
var statearr_22855_22907 = state_22806__$1;
(statearr_22855_22907[(2)] = inst_22796);

(statearr_22855_22907[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (30))){
var inst_22766 = (state_22806[(9)]);
var inst_22758 = (state_22806[(13)]);
var inst_22757 = (state_22806[(11)]);
var inst_22783 = cljs.core.empty_QMARK_.call(null,inst_22757);
var inst_22784 = inst_22758.call(null,inst_22766);
var inst_22785 = cljs.core.not.call(null,inst_22784);
var inst_22786 = ((inst_22783) && (inst_22785));
var state_22806__$1 = state_22806;
var statearr_22856_22908 = state_22806__$1;
(statearr_22856_22908[(2)] = inst_22786);

(statearr_22856_22908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (10))){
var inst_22708 = (state_22806[(8)]);
var inst_22729 = (state_22806[(2)]);
var inst_22730 = cljs.core.get.call(null,inst_22729,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22731 = cljs.core.get.call(null,inst_22729,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22732 = cljs.core.get.call(null,inst_22729,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22733 = inst_22708;
var state_22806__$1 = (function (){var statearr_22857 = state_22806;
(statearr_22857[(16)] = inst_22730);

(statearr_22857[(17)] = inst_22732);

(statearr_22857[(18)] = inst_22731);

(statearr_22857[(7)] = inst_22733);

return statearr_22857;
})();
var statearr_22858_22909 = state_22806__$1;
(statearr_22858_22909[(2)] = null);

(statearr_22858_22909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (18))){
var inst_22748 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
var statearr_22859_22910 = state_22806__$1;
(statearr_22859_22910[(2)] = inst_22748);

(statearr_22859_22910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (37))){
var state_22806__$1 = state_22806;
var statearr_22860_22911 = state_22806__$1;
(statearr_22860_22911[(2)] = null);

(statearr_22860_22911[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (8))){
var inst_22708 = (state_22806[(8)]);
var inst_22726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22708);
var state_22806__$1 = state_22806;
var statearr_22861_22912 = state_22806__$1;
(statearr_22861_22912[(2)] = inst_22726);

(statearr_22861_22912[(1)] = (10));


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
});})(c__21834__auto___22866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21746__auto__,c__21834__auto___22866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21747__auto__ = null;
var cljs$core$async$mix_$_state_machine__21747__auto____0 = (function (){
var statearr_22862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22862[(0)] = cljs$core$async$mix_$_state_machine__21747__auto__);

(statearr_22862[(1)] = (1));

return statearr_22862;
});
var cljs$core$async$mix_$_state_machine__21747__auto____1 = (function (state_22806){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_22806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e22863){if((e22863 instanceof Object)){
var ex__21750__auto__ = e22863;
var statearr_22864_22913 = state_22806;
(statearr_22864_22913[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22914 = state_22806;
state_22806 = G__22914;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21747__auto__ = function(state_22806){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21747__auto____1.call(this,state_22806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21747__auto____0;
cljs$core$async$mix_$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21747__auto____1;
return cljs$core$async$mix_$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___22866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21836__auto__ = (function (){var statearr_22865 = f__21835__auto__.call(null);
(statearr_22865[(6)] = c__21834__auto___22866);

return statearr_22865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___22866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22916 = arguments.length;
switch (G__22916) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__22920 = arguments.length;
switch (G__22920) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__22918_SHARP_){
if(cljs.core.truth_(p1__22918_SHARP_.call(null,topic))){
return p1__22918_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22918_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22921 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22922){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22922 = meta22922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22923,meta22922__$1){
var self__ = this;
var _22923__$1 = this;
return (new cljs.core.async.t_cljs$core$async22921(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22922__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22923){
var self__ = this;
var _22923__$1 = this;
return self__.meta22922;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22921.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22921.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22921.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22921.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22921.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22921.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22921.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22921.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22922","meta22922",-2067434351,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22921";

cljs.core.async.t_cljs$core$async22921.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async22921");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22921.
 */
cljs.core.async.__GT_t_cljs$core$async22921 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22921(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22922){
return (new cljs.core.async.t_cljs$core$async22921(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22922));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22921(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21834__auto___23041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___23041,mults,ensure_mult,p){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___23041,mults,ensure_mult,p){
return (function (state_22995){
var state_val_22996 = (state_22995[(1)]);
if((state_val_22996 === (7))){
var inst_22991 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
var statearr_22997_23042 = state_22995__$1;
(statearr_22997_23042[(2)] = inst_22991);

(statearr_22997_23042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (20))){
var state_22995__$1 = state_22995;
var statearr_22998_23043 = state_22995__$1;
(statearr_22998_23043[(2)] = null);

(statearr_22998_23043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (1))){
var state_22995__$1 = state_22995;
var statearr_22999_23044 = state_22995__$1;
(statearr_22999_23044[(2)] = null);

(statearr_22999_23044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (24))){
var inst_22974 = (state_22995[(7)]);
var inst_22983 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22974);
var state_22995__$1 = state_22995;
var statearr_23000_23045 = state_22995__$1;
(statearr_23000_23045[(2)] = inst_22983);

(statearr_23000_23045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (4))){
var inst_22926 = (state_22995[(8)]);
var inst_22926__$1 = (state_22995[(2)]);
var inst_22927 = (inst_22926__$1 == null);
var state_22995__$1 = (function (){var statearr_23001 = state_22995;
(statearr_23001[(8)] = inst_22926__$1);

return statearr_23001;
})();
if(cljs.core.truth_(inst_22927)){
var statearr_23002_23046 = state_22995__$1;
(statearr_23002_23046[(1)] = (5));

} else {
var statearr_23003_23047 = state_22995__$1;
(statearr_23003_23047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (15))){
var inst_22968 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
var statearr_23004_23048 = state_22995__$1;
(statearr_23004_23048[(2)] = inst_22968);

(statearr_23004_23048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (21))){
var inst_22988 = (state_22995[(2)]);
var state_22995__$1 = (function (){var statearr_23005 = state_22995;
(statearr_23005[(9)] = inst_22988);

return statearr_23005;
})();
var statearr_23006_23049 = state_22995__$1;
(statearr_23006_23049[(2)] = null);

(statearr_23006_23049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (13))){
var inst_22950 = (state_22995[(10)]);
var inst_22952 = cljs.core.chunked_seq_QMARK_.call(null,inst_22950);
var state_22995__$1 = state_22995;
if(inst_22952){
var statearr_23007_23050 = state_22995__$1;
(statearr_23007_23050[(1)] = (16));

} else {
var statearr_23008_23051 = state_22995__$1;
(statearr_23008_23051[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (22))){
var inst_22980 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
if(cljs.core.truth_(inst_22980)){
var statearr_23009_23052 = state_22995__$1;
(statearr_23009_23052[(1)] = (23));

} else {
var statearr_23010_23053 = state_22995__$1;
(statearr_23010_23053[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (6))){
var inst_22926 = (state_22995[(8)]);
var inst_22976 = (state_22995[(11)]);
var inst_22974 = (state_22995[(7)]);
var inst_22974__$1 = topic_fn.call(null,inst_22926);
var inst_22975 = cljs.core.deref.call(null,mults);
var inst_22976__$1 = cljs.core.get.call(null,inst_22975,inst_22974__$1);
var state_22995__$1 = (function (){var statearr_23011 = state_22995;
(statearr_23011[(11)] = inst_22976__$1);

(statearr_23011[(7)] = inst_22974__$1);

return statearr_23011;
})();
if(cljs.core.truth_(inst_22976__$1)){
var statearr_23012_23054 = state_22995__$1;
(statearr_23012_23054[(1)] = (19));

} else {
var statearr_23013_23055 = state_22995__$1;
(statearr_23013_23055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (25))){
var inst_22985 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
var statearr_23014_23056 = state_22995__$1;
(statearr_23014_23056[(2)] = inst_22985);

(statearr_23014_23056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (17))){
var inst_22950 = (state_22995[(10)]);
var inst_22959 = cljs.core.first.call(null,inst_22950);
var inst_22960 = cljs.core.async.muxch_STAR_.call(null,inst_22959);
var inst_22961 = cljs.core.async.close_BANG_.call(null,inst_22960);
var inst_22962 = cljs.core.next.call(null,inst_22950);
var inst_22936 = inst_22962;
var inst_22937 = null;
var inst_22938 = (0);
var inst_22939 = (0);
var state_22995__$1 = (function (){var statearr_23015 = state_22995;
(statearr_23015[(12)] = inst_22961);

(statearr_23015[(13)] = inst_22939);

(statearr_23015[(14)] = inst_22936);

(statearr_23015[(15)] = inst_22937);

(statearr_23015[(16)] = inst_22938);

return statearr_23015;
})();
var statearr_23016_23057 = state_22995__$1;
(statearr_23016_23057[(2)] = null);

(statearr_23016_23057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (3))){
var inst_22993 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22995__$1,inst_22993);
} else {
if((state_val_22996 === (12))){
var inst_22970 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
var statearr_23017_23058 = state_22995__$1;
(statearr_23017_23058[(2)] = inst_22970);

(statearr_23017_23058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (2))){
var state_22995__$1 = state_22995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22995__$1,(4),ch);
} else {
if((state_val_22996 === (23))){
var state_22995__$1 = state_22995;
var statearr_23018_23059 = state_22995__$1;
(statearr_23018_23059[(2)] = null);

(statearr_23018_23059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (19))){
var inst_22926 = (state_22995[(8)]);
var inst_22976 = (state_22995[(11)]);
var inst_22978 = cljs.core.async.muxch_STAR_.call(null,inst_22976);
var state_22995__$1 = state_22995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22995__$1,(22),inst_22978,inst_22926);
} else {
if((state_val_22996 === (11))){
var inst_22936 = (state_22995[(14)]);
var inst_22950 = (state_22995[(10)]);
var inst_22950__$1 = cljs.core.seq.call(null,inst_22936);
var state_22995__$1 = (function (){var statearr_23019 = state_22995;
(statearr_23019[(10)] = inst_22950__$1);

return statearr_23019;
})();
if(inst_22950__$1){
var statearr_23020_23060 = state_22995__$1;
(statearr_23020_23060[(1)] = (13));

} else {
var statearr_23021_23061 = state_22995__$1;
(statearr_23021_23061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (9))){
var inst_22972 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
var statearr_23022_23062 = state_22995__$1;
(statearr_23022_23062[(2)] = inst_22972);

(statearr_23022_23062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (5))){
var inst_22933 = cljs.core.deref.call(null,mults);
var inst_22934 = cljs.core.vals.call(null,inst_22933);
var inst_22935 = cljs.core.seq.call(null,inst_22934);
var inst_22936 = inst_22935;
var inst_22937 = null;
var inst_22938 = (0);
var inst_22939 = (0);
var state_22995__$1 = (function (){var statearr_23023 = state_22995;
(statearr_23023[(13)] = inst_22939);

(statearr_23023[(14)] = inst_22936);

(statearr_23023[(15)] = inst_22937);

(statearr_23023[(16)] = inst_22938);

return statearr_23023;
})();
var statearr_23024_23063 = state_22995__$1;
(statearr_23024_23063[(2)] = null);

(statearr_23024_23063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (14))){
var state_22995__$1 = state_22995;
var statearr_23028_23064 = state_22995__$1;
(statearr_23028_23064[(2)] = null);

(statearr_23028_23064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (16))){
var inst_22950 = (state_22995[(10)]);
var inst_22954 = cljs.core.chunk_first.call(null,inst_22950);
var inst_22955 = cljs.core.chunk_rest.call(null,inst_22950);
var inst_22956 = cljs.core.count.call(null,inst_22954);
var inst_22936 = inst_22955;
var inst_22937 = inst_22954;
var inst_22938 = inst_22956;
var inst_22939 = (0);
var state_22995__$1 = (function (){var statearr_23029 = state_22995;
(statearr_23029[(13)] = inst_22939);

(statearr_23029[(14)] = inst_22936);

(statearr_23029[(15)] = inst_22937);

(statearr_23029[(16)] = inst_22938);

return statearr_23029;
})();
var statearr_23030_23065 = state_22995__$1;
(statearr_23030_23065[(2)] = null);

(statearr_23030_23065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (10))){
var inst_22939 = (state_22995[(13)]);
var inst_22936 = (state_22995[(14)]);
var inst_22937 = (state_22995[(15)]);
var inst_22938 = (state_22995[(16)]);
var inst_22944 = cljs.core._nth.call(null,inst_22937,inst_22939);
var inst_22945 = cljs.core.async.muxch_STAR_.call(null,inst_22944);
var inst_22946 = cljs.core.async.close_BANG_.call(null,inst_22945);
var inst_22947 = (inst_22939 + (1));
var tmp23025 = inst_22936;
var tmp23026 = inst_22937;
var tmp23027 = inst_22938;
var inst_22936__$1 = tmp23025;
var inst_22937__$1 = tmp23026;
var inst_22938__$1 = tmp23027;
var inst_22939__$1 = inst_22947;
var state_22995__$1 = (function (){var statearr_23031 = state_22995;
(statearr_23031[(13)] = inst_22939__$1);

(statearr_23031[(14)] = inst_22936__$1);

(statearr_23031[(15)] = inst_22937__$1);

(statearr_23031[(16)] = inst_22938__$1);

(statearr_23031[(17)] = inst_22946);

return statearr_23031;
})();
var statearr_23032_23066 = state_22995__$1;
(statearr_23032_23066[(2)] = null);

(statearr_23032_23066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (18))){
var inst_22965 = (state_22995[(2)]);
var state_22995__$1 = state_22995;
var statearr_23033_23067 = state_22995__$1;
(statearr_23033_23067[(2)] = inst_22965);

(statearr_23033_23067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22996 === (8))){
var inst_22939 = (state_22995[(13)]);
var inst_22938 = (state_22995[(16)]);
var inst_22941 = (inst_22939 < inst_22938);
var inst_22942 = inst_22941;
var state_22995__$1 = state_22995;
if(cljs.core.truth_(inst_22942)){
var statearr_23034_23068 = state_22995__$1;
(statearr_23034_23068[(1)] = (10));

} else {
var statearr_23035_23069 = state_22995__$1;
(statearr_23035_23069[(1)] = (11));

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
});})(c__21834__auto___23041,mults,ensure_mult,p))
;
return ((function (switch__21746__auto__,c__21834__auto___23041,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_23036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23036[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_23036[(1)] = (1));

return statearr_23036;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_22995){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_22995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e23037){if((e23037 instanceof Object)){
var ex__21750__auto__ = e23037;
var statearr_23038_23070 = state_22995;
(statearr_23038_23070[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23071 = state_22995;
state_22995 = G__23071;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_22995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_22995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___23041,mults,ensure_mult,p))
})();
var state__21836__auto__ = (function (){var statearr_23039 = f__21835__auto__.call(null);
(statearr_23039[(6)] = c__21834__auto___23041);

return statearr_23039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___23041,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__23073 = arguments.length;
switch (G__23073) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__23076 = arguments.length;
switch (G__23076) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__23079 = arguments.length;
switch (G__23079) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21834__auto___23146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___23146,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___23146,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23118){
var state_val_23119 = (state_23118[(1)]);
if((state_val_23119 === (7))){
var state_23118__$1 = state_23118;
var statearr_23120_23147 = state_23118__$1;
(statearr_23120_23147[(2)] = null);

(statearr_23120_23147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (1))){
var state_23118__$1 = state_23118;
var statearr_23121_23148 = state_23118__$1;
(statearr_23121_23148[(2)] = null);

(statearr_23121_23148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (4))){
var inst_23082 = (state_23118[(7)]);
var inst_23084 = (inst_23082 < cnt);
var state_23118__$1 = state_23118;
if(cljs.core.truth_(inst_23084)){
var statearr_23122_23149 = state_23118__$1;
(statearr_23122_23149[(1)] = (6));

} else {
var statearr_23123_23150 = state_23118__$1;
(statearr_23123_23150[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (15))){
var inst_23114 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23124_23151 = state_23118__$1;
(statearr_23124_23151[(2)] = inst_23114);

(statearr_23124_23151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (13))){
var inst_23107 = cljs.core.async.close_BANG_.call(null,out);
var state_23118__$1 = state_23118;
var statearr_23125_23152 = state_23118__$1;
(statearr_23125_23152[(2)] = inst_23107);

(statearr_23125_23152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (6))){
var state_23118__$1 = state_23118;
var statearr_23126_23153 = state_23118__$1;
(statearr_23126_23153[(2)] = null);

(statearr_23126_23153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (3))){
var inst_23116 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23118__$1,inst_23116);
} else {
if((state_val_23119 === (12))){
var inst_23104 = (state_23118[(8)]);
var inst_23104__$1 = (state_23118[(2)]);
var inst_23105 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23104__$1);
var state_23118__$1 = (function (){var statearr_23127 = state_23118;
(statearr_23127[(8)] = inst_23104__$1);

return statearr_23127;
})();
if(cljs.core.truth_(inst_23105)){
var statearr_23128_23154 = state_23118__$1;
(statearr_23128_23154[(1)] = (13));

} else {
var statearr_23129_23155 = state_23118__$1;
(statearr_23129_23155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (2))){
var inst_23081 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23082 = (0);
var state_23118__$1 = (function (){var statearr_23130 = state_23118;
(statearr_23130[(9)] = inst_23081);

(statearr_23130[(7)] = inst_23082);

return statearr_23130;
})();
var statearr_23131_23156 = state_23118__$1;
(statearr_23131_23156[(2)] = null);

(statearr_23131_23156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (11))){
var inst_23082 = (state_23118[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23118,(10),Object,null,(9));
var inst_23091 = chs__$1.call(null,inst_23082);
var inst_23092 = done.call(null,inst_23082);
var inst_23093 = cljs.core.async.take_BANG_.call(null,inst_23091,inst_23092);
var state_23118__$1 = state_23118;
var statearr_23132_23157 = state_23118__$1;
(statearr_23132_23157[(2)] = inst_23093);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23118__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (9))){
var inst_23082 = (state_23118[(7)]);
var inst_23095 = (state_23118[(2)]);
var inst_23096 = (inst_23082 + (1));
var inst_23082__$1 = inst_23096;
var state_23118__$1 = (function (){var statearr_23133 = state_23118;
(statearr_23133[(10)] = inst_23095);

(statearr_23133[(7)] = inst_23082__$1);

return statearr_23133;
})();
var statearr_23134_23158 = state_23118__$1;
(statearr_23134_23158[(2)] = null);

(statearr_23134_23158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (5))){
var inst_23102 = (state_23118[(2)]);
var state_23118__$1 = (function (){var statearr_23135 = state_23118;
(statearr_23135[(11)] = inst_23102);

return statearr_23135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(12),dchan);
} else {
if((state_val_23119 === (14))){
var inst_23104 = (state_23118[(8)]);
var inst_23109 = cljs.core.apply.call(null,f,inst_23104);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23118__$1,(16),out,inst_23109);
} else {
if((state_val_23119 === (16))){
var inst_23111 = (state_23118[(2)]);
var state_23118__$1 = (function (){var statearr_23136 = state_23118;
(statearr_23136[(12)] = inst_23111);

return statearr_23136;
})();
var statearr_23137_23159 = state_23118__$1;
(statearr_23137_23159[(2)] = null);

(statearr_23137_23159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (10))){
var inst_23086 = (state_23118[(2)]);
var inst_23087 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23118__$1 = (function (){var statearr_23138 = state_23118;
(statearr_23138[(13)] = inst_23086);

return statearr_23138;
})();
var statearr_23139_23160 = state_23118__$1;
(statearr_23139_23160[(2)] = inst_23087);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23118__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23119 === (8))){
var inst_23100 = (state_23118[(2)]);
var state_23118__$1 = state_23118;
var statearr_23140_23161 = state_23118__$1;
(statearr_23140_23161[(2)] = inst_23100);

(statearr_23140_23161[(1)] = (5));


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
});})(c__21834__auto___23146,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21746__auto__,c__21834__auto___23146,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_23141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23141[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_23141[(1)] = (1));

return statearr_23141;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_23118){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_23118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e23142){if((e23142 instanceof Object)){
var ex__21750__auto__ = e23142;
var statearr_23143_23162 = state_23118;
(statearr_23143_23162[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23163 = state_23118;
state_23118 = G__23163;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_23118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_23118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___23146,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21836__auto__ = (function (){var statearr_23144 = f__21835__auto__.call(null);
(statearr_23144[(6)] = c__21834__auto___23146);

return statearr_23144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___23146,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__23166 = arguments.length;
switch (G__23166) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21834__auto___23220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___23220,out){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___23220,out){
return (function (state_23198){
var state_val_23199 = (state_23198[(1)]);
if((state_val_23199 === (7))){
var inst_23177 = (state_23198[(7)]);
var inst_23178 = (state_23198[(8)]);
var inst_23177__$1 = (state_23198[(2)]);
var inst_23178__$1 = cljs.core.nth.call(null,inst_23177__$1,(0),null);
var inst_23179 = cljs.core.nth.call(null,inst_23177__$1,(1),null);
var inst_23180 = (inst_23178__$1 == null);
var state_23198__$1 = (function (){var statearr_23200 = state_23198;
(statearr_23200[(7)] = inst_23177__$1);

(statearr_23200[(8)] = inst_23178__$1);

(statearr_23200[(9)] = inst_23179);

return statearr_23200;
})();
if(cljs.core.truth_(inst_23180)){
var statearr_23201_23221 = state_23198__$1;
(statearr_23201_23221[(1)] = (8));

} else {
var statearr_23202_23222 = state_23198__$1;
(statearr_23202_23222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (1))){
var inst_23167 = cljs.core.vec.call(null,chs);
var inst_23168 = inst_23167;
var state_23198__$1 = (function (){var statearr_23203 = state_23198;
(statearr_23203[(10)] = inst_23168);

return statearr_23203;
})();
var statearr_23204_23223 = state_23198__$1;
(statearr_23204_23223[(2)] = null);

(statearr_23204_23223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (4))){
var inst_23168 = (state_23198[(10)]);
var state_23198__$1 = state_23198;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23198__$1,(7),inst_23168);
} else {
if((state_val_23199 === (6))){
var inst_23194 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
var statearr_23205_23224 = state_23198__$1;
(statearr_23205_23224[(2)] = inst_23194);

(statearr_23205_23224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (3))){
var inst_23196 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23198__$1,inst_23196);
} else {
if((state_val_23199 === (2))){
var inst_23168 = (state_23198[(10)]);
var inst_23170 = cljs.core.count.call(null,inst_23168);
var inst_23171 = (inst_23170 > (0));
var state_23198__$1 = state_23198;
if(cljs.core.truth_(inst_23171)){
var statearr_23207_23225 = state_23198__$1;
(statearr_23207_23225[(1)] = (4));

} else {
var statearr_23208_23226 = state_23198__$1;
(statearr_23208_23226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (11))){
var inst_23168 = (state_23198[(10)]);
var inst_23187 = (state_23198[(2)]);
var tmp23206 = inst_23168;
var inst_23168__$1 = tmp23206;
var state_23198__$1 = (function (){var statearr_23209 = state_23198;
(statearr_23209[(11)] = inst_23187);

(statearr_23209[(10)] = inst_23168__$1);

return statearr_23209;
})();
var statearr_23210_23227 = state_23198__$1;
(statearr_23210_23227[(2)] = null);

(statearr_23210_23227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (9))){
var inst_23178 = (state_23198[(8)]);
var state_23198__$1 = state_23198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23198__$1,(11),out,inst_23178);
} else {
if((state_val_23199 === (5))){
var inst_23192 = cljs.core.async.close_BANG_.call(null,out);
var state_23198__$1 = state_23198;
var statearr_23211_23228 = state_23198__$1;
(statearr_23211_23228[(2)] = inst_23192);

(statearr_23211_23228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (10))){
var inst_23190 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
var statearr_23212_23229 = state_23198__$1;
(statearr_23212_23229[(2)] = inst_23190);

(statearr_23212_23229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (8))){
var inst_23177 = (state_23198[(7)]);
var inst_23168 = (state_23198[(10)]);
var inst_23178 = (state_23198[(8)]);
var inst_23179 = (state_23198[(9)]);
var inst_23182 = (function (){var cs = inst_23168;
var vec__23173 = inst_23177;
var v = inst_23178;
var c = inst_23179;
return ((function (cs,vec__23173,v,c,inst_23177,inst_23168,inst_23178,inst_23179,state_val_23199,c__21834__auto___23220,out){
return (function (p1__23164_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23164_SHARP_);
});
;})(cs,vec__23173,v,c,inst_23177,inst_23168,inst_23178,inst_23179,state_val_23199,c__21834__auto___23220,out))
})();
var inst_23183 = cljs.core.filterv.call(null,inst_23182,inst_23168);
var inst_23168__$1 = inst_23183;
var state_23198__$1 = (function (){var statearr_23213 = state_23198;
(statearr_23213[(10)] = inst_23168__$1);

return statearr_23213;
})();
var statearr_23214_23230 = state_23198__$1;
(statearr_23214_23230[(2)] = null);

(statearr_23214_23230[(1)] = (2));


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
});})(c__21834__auto___23220,out))
;
return ((function (switch__21746__auto__,c__21834__auto___23220,out){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_23215 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23215[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_23215[(1)] = (1));

return statearr_23215;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_23198){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_23198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e23216){if((e23216 instanceof Object)){
var ex__21750__auto__ = e23216;
var statearr_23217_23231 = state_23198;
(statearr_23217_23231[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23232 = state_23198;
state_23198 = G__23232;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_23198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_23198);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___23220,out))
})();
var state__21836__auto__ = (function (){var statearr_23218 = f__21835__auto__.call(null);
(statearr_23218[(6)] = c__21834__auto___23220);

return statearr_23218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___23220,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__23234 = arguments.length;
switch (G__23234) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21834__auto___23279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___23279,out){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___23279,out){
return (function (state_23258){
var state_val_23259 = (state_23258[(1)]);
if((state_val_23259 === (7))){
var inst_23240 = (state_23258[(7)]);
var inst_23240__$1 = (state_23258[(2)]);
var inst_23241 = (inst_23240__$1 == null);
var inst_23242 = cljs.core.not.call(null,inst_23241);
var state_23258__$1 = (function (){var statearr_23260 = state_23258;
(statearr_23260[(7)] = inst_23240__$1);

return statearr_23260;
})();
if(inst_23242){
var statearr_23261_23280 = state_23258__$1;
(statearr_23261_23280[(1)] = (8));

} else {
var statearr_23262_23281 = state_23258__$1;
(statearr_23262_23281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (1))){
var inst_23235 = (0);
var state_23258__$1 = (function (){var statearr_23263 = state_23258;
(statearr_23263[(8)] = inst_23235);

return statearr_23263;
})();
var statearr_23264_23282 = state_23258__$1;
(statearr_23264_23282[(2)] = null);

(statearr_23264_23282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (4))){
var state_23258__$1 = state_23258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23258__$1,(7),ch);
} else {
if((state_val_23259 === (6))){
var inst_23253 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
var statearr_23265_23283 = state_23258__$1;
(statearr_23265_23283[(2)] = inst_23253);

(statearr_23265_23283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (3))){
var inst_23255 = (state_23258[(2)]);
var inst_23256 = cljs.core.async.close_BANG_.call(null,out);
var state_23258__$1 = (function (){var statearr_23266 = state_23258;
(statearr_23266[(9)] = inst_23255);

return statearr_23266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23258__$1,inst_23256);
} else {
if((state_val_23259 === (2))){
var inst_23235 = (state_23258[(8)]);
var inst_23237 = (inst_23235 < n);
var state_23258__$1 = state_23258;
if(cljs.core.truth_(inst_23237)){
var statearr_23267_23284 = state_23258__$1;
(statearr_23267_23284[(1)] = (4));

} else {
var statearr_23268_23285 = state_23258__$1;
(statearr_23268_23285[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (11))){
var inst_23235 = (state_23258[(8)]);
var inst_23245 = (state_23258[(2)]);
var inst_23246 = (inst_23235 + (1));
var inst_23235__$1 = inst_23246;
var state_23258__$1 = (function (){var statearr_23269 = state_23258;
(statearr_23269[(8)] = inst_23235__$1);

(statearr_23269[(10)] = inst_23245);

return statearr_23269;
})();
var statearr_23270_23286 = state_23258__$1;
(statearr_23270_23286[(2)] = null);

(statearr_23270_23286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (9))){
var state_23258__$1 = state_23258;
var statearr_23271_23287 = state_23258__$1;
(statearr_23271_23287[(2)] = null);

(statearr_23271_23287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (5))){
var state_23258__$1 = state_23258;
var statearr_23272_23288 = state_23258__$1;
(statearr_23272_23288[(2)] = null);

(statearr_23272_23288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (10))){
var inst_23250 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
var statearr_23273_23289 = state_23258__$1;
(statearr_23273_23289[(2)] = inst_23250);

(statearr_23273_23289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23259 === (8))){
var inst_23240 = (state_23258[(7)]);
var state_23258__$1 = state_23258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23258__$1,(11),out,inst_23240);
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
});})(c__21834__auto___23279,out))
;
return ((function (switch__21746__auto__,c__21834__auto___23279,out){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_23274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23274[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_23274[(1)] = (1));

return statearr_23274;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_23258){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_23258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e23275){if((e23275 instanceof Object)){
var ex__21750__auto__ = e23275;
var statearr_23276_23290 = state_23258;
(statearr_23276_23290[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23291 = state_23258;
state_23258 = G__23291;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_23258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_23258);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___23279,out))
})();
var state__21836__auto__ = (function (){var statearr_23277 = f__21835__auto__.call(null);
(statearr_23277[(6)] = c__21834__auto___23279);

return statearr_23277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___23279,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23293 = (function (f,ch,meta23294){
this.f = f;
this.ch = ch;
this.meta23294 = meta23294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23295,meta23294__$1){
var self__ = this;
var _23295__$1 = this;
return (new cljs.core.async.t_cljs$core$async23293(self__.f,self__.ch,meta23294__$1));
});

cljs.core.async.t_cljs$core$async23293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23295){
var self__ = this;
var _23295__$1 = this;
return self__.meta23294;
});

cljs.core.async.t_cljs$core$async23293.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23293.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23293.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23296 = (function (f,ch,meta23294,_,fn1,meta23297){
this.f = f;
this.ch = ch;
this.meta23294 = meta23294;
this._ = _;
this.fn1 = fn1;
this.meta23297 = meta23297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23298,meta23297__$1){
var self__ = this;
var _23298__$1 = this;
return (new cljs.core.async.t_cljs$core$async23296(self__.f,self__.ch,self__.meta23294,self__._,self__.fn1,meta23297__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23298){
var self__ = this;
var _23298__$1 = this;
return self__.meta23297;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23296.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23296.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23292_SHARP_){
return f1.call(null,(((p1__23292_SHARP_ == null))?null:self__.f.call(null,p1__23292_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23296.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23294","meta23294",-633408569,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23293","cljs.core.async/t_cljs$core$async23293",1774952918,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23297","meta23297",-1880284433,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23296";

cljs.core.async.t_cljs$core$async23296.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23296");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23296.
 */
cljs.core.async.__GT_t_cljs$core$async23296 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23296(f__$1,ch__$1,meta23294__$1,___$2,fn1__$1,meta23297){
return (new cljs.core.async.t_cljs$core$async23296(f__$1,ch__$1,meta23294__$1,___$2,fn1__$1,meta23297));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23296(self__.f,self__.ch,self__.meta23294,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23293.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23294","meta23294",-633408569,null)], null);
});

cljs.core.async.t_cljs$core$async23293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23293";

cljs.core.async.t_cljs$core$async23293.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23293");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23293.
 */
cljs.core.async.__GT_t_cljs$core$async23293 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23293(f__$1,ch__$1,meta23294){
return (new cljs.core.async.t_cljs$core$async23293(f__$1,ch__$1,meta23294));
});

}

return (new cljs.core.async.t_cljs$core$async23293(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23299 = (function (f,ch,meta23300){
this.f = f;
this.ch = ch;
this.meta23300 = meta23300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23301,meta23300__$1){
var self__ = this;
var _23301__$1 = this;
return (new cljs.core.async.t_cljs$core$async23299(self__.f,self__.ch,meta23300__$1));
});

cljs.core.async.t_cljs$core$async23299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23301){
var self__ = this;
var _23301__$1 = this;
return self__.meta23300;
});

cljs.core.async.t_cljs$core$async23299.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23299.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23299.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23300","meta23300",-1883546935,null)], null);
});

cljs.core.async.t_cljs$core$async23299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23299";

cljs.core.async.t_cljs$core$async23299.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23299");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23299.
 */
cljs.core.async.__GT_t_cljs$core$async23299 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23299(f__$1,ch__$1,meta23300){
return (new cljs.core.async.t_cljs$core$async23299(f__$1,ch__$1,meta23300));
});

}

return (new cljs.core.async.t_cljs$core$async23299(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23302 = (function (p,ch,meta23303){
this.p = p;
this.ch = ch;
this.meta23303 = meta23303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23304,meta23303__$1){
var self__ = this;
var _23304__$1 = this;
return (new cljs.core.async.t_cljs$core$async23302(self__.p,self__.ch,meta23303__$1));
});

cljs.core.async.t_cljs$core$async23302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23304){
var self__ = this;
var _23304__$1 = this;
return self__.meta23303;
});

cljs.core.async.t_cljs$core$async23302.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23302.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23302.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23302.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23302.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23302.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23302.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23303","meta23303",-717216182,null)], null);
});

cljs.core.async.t_cljs$core$async23302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23302";

cljs.core.async.t_cljs$core$async23302.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23302");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23302.
 */
cljs.core.async.__GT_t_cljs$core$async23302 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23302(p__$1,ch__$1,meta23303){
return (new cljs.core.async.t_cljs$core$async23302(p__$1,ch__$1,meta23303));
});

}

return (new cljs.core.async.t_cljs$core$async23302(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23306 = arguments.length;
switch (G__23306) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21834__auto___23346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___23346,out){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___23346,out){
return (function (state_23327){
var state_val_23328 = (state_23327[(1)]);
if((state_val_23328 === (7))){
var inst_23323 = (state_23327[(2)]);
var state_23327__$1 = state_23327;
var statearr_23329_23347 = state_23327__$1;
(statearr_23329_23347[(2)] = inst_23323);

(statearr_23329_23347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23328 === (1))){
var state_23327__$1 = state_23327;
var statearr_23330_23348 = state_23327__$1;
(statearr_23330_23348[(2)] = null);

(statearr_23330_23348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23328 === (4))){
var inst_23309 = (state_23327[(7)]);
var inst_23309__$1 = (state_23327[(2)]);
var inst_23310 = (inst_23309__$1 == null);
var state_23327__$1 = (function (){var statearr_23331 = state_23327;
(statearr_23331[(7)] = inst_23309__$1);

return statearr_23331;
})();
if(cljs.core.truth_(inst_23310)){
var statearr_23332_23349 = state_23327__$1;
(statearr_23332_23349[(1)] = (5));

} else {
var statearr_23333_23350 = state_23327__$1;
(statearr_23333_23350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23328 === (6))){
var inst_23309 = (state_23327[(7)]);
var inst_23314 = p.call(null,inst_23309);
var state_23327__$1 = state_23327;
if(cljs.core.truth_(inst_23314)){
var statearr_23334_23351 = state_23327__$1;
(statearr_23334_23351[(1)] = (8));

} else {
var statearr_23335_23352 = state_23327__$1;
(statearr_23335_23352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23328 === (3))){
var inst_23325 = (state_23327[(2)]);
var state_23327__$1 = state_23327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23327__$1,inst_23325);
} else {
if((state_val_23328 === (2))){
var state_23327__$1 = state_23327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23327__$1,(4),ch);
} else {
if((state_val_23328 === (11))){
var inst_23317 = (state_23327[(2)]);
var state_23327__$1 = state_23327;
var statearr_23336_23353 = state_23327__$1;
(statearr_23336_23353[(2)] = inst_23317);

(statearr_23336_23353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23328 === (9))){
var state_23327__$1 = state_23327;
var statearr_23337_23354 = state_23327__$1;
(statearr_23337_23354[(2)] = null);

(statearr_23337_23354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23328 === (5))){
var inst_23312 = cljs.core.async.close_BANG_.call(null,out);
var state_23327__$1 = state_23327;
var statearr_23338_23355 = state_23327__$1;
(statearr_23338_23355[(2)] = inst_23312);

(statearr_23338_23355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23328 === (10))){
var inst_23320 = (state_23327[(2)]);
var state_23327__$1 = (function (){var statearr_23339 = state_23327;
(statearr_23339[(8)] = inst_23320);

return statearr_23339;
})();
var statearr_23340_23356 = state_23327__$1;
(statearr_23340_23356[(2)] = null);

(statearr_23340_23356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23328 === (8))){
var inst_23309 = (state_23327[(7)]);
var state_23327__$1 = state_23327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23327__$1,(11),out,inst_23309);
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
});})(c__21834__auto___23346,out))
;
return ((function (switch__21746__auto__,c__21834__auto___23346,out){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_23341 = [null,null,null,null,null,null,null,null,null];
(statearr_23341[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_23341[(1)] = (1));

return statearr_23341;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_23327){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_23327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e23342){if((e23342 instanceof Object)){
var ex__21750__auto__ = e23342;
var statearr_23343_23357 = state_23327;
(statearr_23343_23357[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23358 = state_23327;
state_23327 = G__23358;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_23327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_23327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___23346,out))
})();
var state__21836__auto__ = (function (){var statearr_23344 = f__21835__auto__.call(null);
(statearr_23344[(6)] = c__21834__auto___23346);

return statearr_23344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___23346,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23360 = arguments.length;
switch (G__23360) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21834__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto__){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto__){
return (function (state_23423){
var state_val_23424 = (state_23423[(1)]);
if((state_val_23424 === (7))){
var inst_23419 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23425_23463 = state_23423__$1;
(statearr_23425_23463[(2)] = inst_23419);

(statearr_23425_23463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (20))){
var inst_23389 = (state_23423[(7)]);
var inst_23400 = (state_23423[(2)]);
var inst_23401 = cljs.core.next.call(null,inst_23389);
var inst_23375 = inst_23401;
var inst_23376 = null;
var inst_23377 = (0);
var inst_23378 = (0);
var state_23423__$1 = (function (){var statearr_23426 = state_23423;
(statearr_23426[(8)] = inst_23375);

(statearr_23426[(9)] = inst_23376);

(statearr_23426[(10)] = inst_23400);

(statearr_23426[(11)] = inst_23377);

(statearr_23426[(12)] = inst_23378);

return statearr_23426;
})();
var statearr_23427_23464 = state_23423__$1;
(statearr_23427_23464[(2)] = null);

(statearr_23427_23464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (1))){
var state_23423__$1 = state_23423;
var statearr_23428_23465 = state_23423__$1;
(statearr_23428_23465[(2)] = null);

(statearr_23428_23465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (4))){
var inst_23364 = (state_23423[(13)]);
var inst_23364__$1 = (state_23423[(2)]);
var inst_23365 = (inst_23364__$1 == null);
var state_23423__$1 = (function (){var statearr_23429 = state_23423;
(statearr_23429[(13)] = inst_23364__$1);

return statearr_23429;
})();
if(cljs.core.truth_(inst_23365)){
var statearr_23430_23466 = state_23423__$1;
(statearr_23430_23466[(1)] = (5));

} else {
var statearr_23431_23467 = state_23423__$1;
(statearr_23431_23467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (15))){
var state_23423__$1 = state_23423;
var statearr_23435_23468 = state_23423__$1;
(statearr_23435_23468[(2)] = null);

(statearr_23435_23468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (21))){
var state_23423__$1 = state_23423;
var statearr_23436_23469 = state_23423__$1;
(statearr_23436_23469[(2)] = null);

(statearr_23436_23469[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (13))){
var inst_23375 = (state_23423[(8)]);
var inst_23376 = (state_23423[(9)]);
var inst_23377 = (state_23423[(11)]);
var inst_23378 = (state_23423[(12)]);
var inst_23385 = (state_23423[(2)]);
var inst_23386 = (inst_23378 + (1));
var tmp23432 = inst_23375;
var tmp23433 = inst_23376;
var tmp23434 = inst_23377;
var inst_23375__$1 = tmp23432;
var inst_23376__$1 = tmp23433;
var inst_23377__$1 = tmp23434;
var inst_23378__$1 = inst_23386;
var state_23423__$1 = (function (){var statearr_23437 = state_23423;
(statearr_23437[(8)] = inst_23375__$1);

(statearr_23437[(9)] = inst_23376__$1);

(statearr_23437[(11)] = inst_23377__$1);

(statearr_23437[(14)] = inst_23385);

(statearr_23437[(12)] = inst_23378__$1);

return statearr_23437;
})();
var statearr_23438_23470 = state_23423__$1;
(statearr_23438_23470[(2)] = null);

(statearr_23438_23470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (22))){
var state_23423__$1 = state_23423;
var statearr_23439_23471 = state_23423__$1;
(statearr_23439_23471[(2)] = null);

(statearr_23439_23471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (6))){
var inst_23364 = (state_23423[(13)]);
var inst_23373 = f.call(null,inst_23364);
var inst_23374 = cljs.core.seq.call(null,inst_23373);
var inst_23375 = inst_23374;
var inst_23376 = null;
var inst_23377 = (0);
var inst_23378 = (0);
var state_23423__$1 = (function (){var statearr_23440 = state_23423;
(statearr_23440[(8)] = inst_23375);

(statearr_23440[(9)] = inst_23376);

(statearr_23440[(11)] = inst_23377);

(statearr_23440[(12)] = inst_23378);

return statearr_23440;
})();
var statearr_23441_23472 = state_23423__$1;
(statearr_23441_23472[(2)] = null);

(statearr_23441_23472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (17))){
var inst_23389 = (state_23423[(7)]);
var inst_23393 = cljs.core.chunk_first.call(null,inst_23389);
var inst_23394 = cljs.core.chunk_rest.call(null,inst_23389);
var inst_23395 = cljs.core.count.call(null,inst_23393);
var inst_23375 = inst_23394;
var inst_23376 = inst_23393;
var inst_23377 = inst_23395;
var inst_23378 = (0);
var state_23423__$1 = (function (){var statearr_23442 = state_23423;
(statearr_23442[(8)] = inst_23375);

(statearr_23442[(9)] = inst_23376);

(statearr_23442[(11)] = inst_23377);

(statearr_23442[(12)] = inst_23378);

return statearr_23442;
})();
var statearr_23443_23473 = state_23423__$1;
(statearr_23443_23473[(2)] = null);

(statearr_23443_23473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (3))){
var inst_23421 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23423__$1,inst_23421);
} else {
if((state_val_23424 === (12))){
var inst_23409 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23444_23474 = state_23423__$1;
(statearr_23444_23474[(2)] = inst_23409);

(statearr_23444_23474[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (2))){
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23423__$1,(4),in$);
} else {
if((state_val_23424 === (23))){
var inst_23417 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23445_23475 = state_23423__$1;
(statearr_23445_23475[(2)] = inst_23417);

(statearr_23445_23475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (19))){
var inst_23404 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23446_23476 = state_23423__$1;
(statearr_23446_23476[(2)] = inst_23404);

(statearr_23446_23476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (11))){
var inst_23375 = (state_23423[(8)]);
var inst_23389 = (state_23423[(7)]);
var inst_23389__$1 = cljs.core.seq.call(null,inst_23375);
var state_23423__$1 = (function (){var statearr_23447 = state_23423;
(statearr_23447[(7)] = inst_23389__$1);

return statearr_23447;
})();
if(inst_23389__$1){
var statearr_23448_23477 = state_23423__$1;
(statearr_23448_23477[(1)] = (14));

} else {
var statearr_23449_23478 = state_23423__$1;
(statearr_23449_23478[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (9))){
var inst_23411 = (state_23423[(2)]);
var inst_23412 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23423__$1 = (function (){var statearr_23450 = state_23423;
(statearr_23450[(15)] = inst_23411);

return statearr_23450;
})();
if(cljs.core.truth_(inst_23412)){
var statearr_23451_23479 = state_23423__$1;
(statearr_23451_23479[(1)] = (21));

} else {
var statearr_23452_23480 = state_23423__$1;
(statearr_23452_23480[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (5))){
var inst_23367 = cljs.core.async.close_BANG_.call(null,out);
var state_23423__$1 = state_23423;
var statearr_23453_23481 = state_23423__$1;
(statearr_23453_23481[(2)] = inst_23367);

(statearr_23453_23481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (14))){
var inst_23389 = (state_23423[(7)]);
var inst_23391 = cljs.core.chunked_seq_QMARK_.call(null,inst_23389);
var state_23423__$1 = state_23423;
if(inst_23391){
var statearr_23454_23482 = state_23423__$1;
(statearr_23454_23482[(1)] = (17));

} else {
var statearr_23455_23483 = state_23423__$1;
(statearr_23455_23483[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (16))){
var inst_23407 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23456_23484 = state_23423__$1;
(statearr_23456_23484[(2)] = inst_23407);

(statearr_23456_23484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (10))){
var inst_23376 = (state_23423[(9)]);
var inst_23378 = (state_23423[(12)]);
var inst_23383 = cljs.core._nth.call(null,inst_23376,inst_23378);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23423__$1,(13),out,inst_23383);
} else {
if((state_val_23424 === (18))){
var inst_23389 = (state_23423[(7)]);
var inst_23398 = cljs.core.first.call(null,inst_23389);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23423__$1,(20),out,inst_23398);
} else {
if((state_val_23424 === (8))){
var inst_23377 = (state_23423[(11)]);
var inst_23378 = (state_23423[(12)]);
var inst_23380 = (inst_23378 < inst_23377);
var inst_23381 = inst_23380;
var state_23423__$1 = state_23423;
if(cljs.core.truth_(inst_23381)){
var statearr_23457_23485 = state_23423__$1;
(statearr_23457_23485[(1)] = (10));

} else {
var statearr_23458_23486 = state_23423__$1;
(statearr_23458_23486[(1)] = (11));

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
});})(c__21834__auto__))
;
return ((function (switch__21746__auto__,c__21834__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21747__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21747__auto____0 = (function (){
var statearr_23459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23459[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21747__auto__);

(statearr_23459[(1)] = (1));

return statearr_23459;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21747__auto____1 = (function (state_23423){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_23423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e23460){if((e23460 instanceof Object)){
var ex__21750__auto__ = e23460;
var statearr_23461_23487 = state_23423;
(statearr_23461_23487[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23488 = state_23423;
state_23423 = G__23488;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21747__auto__ = function(state_23423){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21747__auto____1.call(this,state_23423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21747__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21747__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto__))
})();
var state__21836__auto__ = (function (){var statearr_23462 = f__21835__auto__.call(null);
(statearr_23462[(6)] = c__21834__auto__);

return statearr_23462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto__))
);

return c__21834__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23490 = arguments.length;
switch (G__23490) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23493 = arguments.length;
switch (G__23493) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23496 = arguments.length;
switch (G__23496) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21834__auto___23543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___23543,out){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___23543,out){
return (function (state_23520){
var state_val_23521 = (state_23520[(1)]);
if((state_val_23521 === (7))){
var inst_23515 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23522_23544 = state_23520__$1;
(statearr_23522_23544[(2)] = inst_23515);

(statearr_23522_23544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (1))){
var inst_23497 = null;
var state_23520__$1 = (function (){var statearr_23523 = state_23520;
(statearr_23523[(7)] = inst_23497);

return statearr_23523;
})();
var statearr_23524_23545 = state_23520__$1;
(statearr_23524_23545[(2)] = null);

(statearr_23524_23545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (4))){
var inst_23500 = (state_23520[(8)]);
var inst_23500__$1 = (state_23520[(2)]);
var inst_23501 = (inst_23500__$1 == null);
var inst_23502 = cljs.core.not.call(null,inst_23501);
var state_23520__$1 = (function (){var statearr_23525 = state_23520;
(statearr_23525[(8)] = inst_23500__$1);

return statearr_23525;
})();
if(inst_23502){
var statearr_23526_23546 = state_23520__$1;
(statearr_23526_23546[(1)] = (5));

} else {
var statearr_23527_23547 = state_23520__$1;
(statearr_23527_23547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (6))){
var state_23520__$1 = state_23520;
var statearr_23528_23548 = state_23520__$1;
(statearr_23528_23548[(2)] = null);

(statearr_23528_23548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (3))){
var inst_23517 = (state_23520[(2)]);
var inst_23518 = cljs.core.async.close_BANG_.call(null,out);
var state_23520__$1 = (function (){var statearr_23529 = state_23520;
(statearr_23529[(9)] = inst_23517);

return statearr_23529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23520__$1,inst_23518);
} else {
if((state_val_23521 === (2))){
var state_23520__$1 = state_23520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23520__$1,(4),ch);
} else {
if((state_val_23521 === (11))){
var inst_23500 = (state_23520[(8)]);
var inst_23509 = (state_23520[(2)]);
var inst_23497 = inst_23500;
var state_23520__$1 = (function (){var statearr_23530 = state_23520;
(statearr_23530[(7)] = inst_23497);

(statearr_23530[(10)] = inst_23509);

return statearr_23530;
})();
var statearr_23531_23549 = state_23520__$1;
(statearr_23531_23549[(2)] = null);

(statearr_23531_23549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (9))){
var inst_23500 = (state_23520[(8)]);
var state_23520__$1 = state_23520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23520__$1,(11),out,inst_23500);
} else {
if((state_val_23521 === (5))){
var inst_23497 = (state_23520[(7)]);
var inst_23500 = (state_23520[(8)]);
var inst_23504 = cljs.core._EQ_.call(null,inst_23500,inst_23497);
var state_23520__$1 = state_23520;
if(inst_23504){
var statearr_23533_23550 = state_23520__$1;
(statearr_23533_23550[(1)] = (8));

} else {
var statearr_23534_23551 = state_23520__$1;
(statearr_23534_23551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (10))){
var inst_23512 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23535_23552 = state_23520__$1;
(statearr_23535_23552[(2)] = inst_23512);

(statearr_23535_23552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (8))){
var inst_23497 = (state_23520[(7)]);
var tmp23532 = inst_23497;
var inst_23497__$1 = tmp23532;
var state_23520__$1 = (function (){var statearr_23536 = state_23520;
(statearr_23536[(7)] = inst_23497__$1);

return statearr_23536;
})();
var statearr_23537_23553 = state_23520__$1;
(statearr_23537_23553[(2)] = null);

(statearr_23537_23553[(1)] = (2));


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
});})(c__21834__auto___23543,out))
;
return ((function (switch__21746__auto__,c__21834__auto___23543,out){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_23538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23538[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_23538[(1)] = (1));

return statearr_23538;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_23520){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_23520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e23539){if((e23539 instanceof Object)){
var ex__21750__auto__ = e23539;
var statearr_23540_23554 = state_23520;
(statearr_23540_23554[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23555 = state_23520;
state_23520 = G__23555;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_23520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_23520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___23543,out))
})();
var state__21836__auto__ = (function (){var statearr_23541 = f__21835__auto__.call(null);
(statearr_23541[(6)] = c__21834__auto___23543);

return statearr_23541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___23543,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23557 = arguments.length;
switch (G__23557) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21834__auto___23623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___23623,out){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___23623,out){
return (function (state_23595){
var state_val_23596 = (state_23595[(1)]);
if((state_val_23596 === (7))){
var inst_23591 = (state_23595[(2)]);
var state_23595__$1 = state_23595;
var statearr_23597_23624 = state_23595__$1;
(statearr_23597_23624[(2)] = inst_23591);

(statearr_23597_23624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23596 === (1))){
var inst_23558 = (new Array(n));
var inst_23559 = inst_23558;
var inst_23560 = (0);
var state_23595__$1 = (function (){var statearr_23598 = state_23595;
(statearr_23598[(7)] = inst_23560);

(statearr_23598[(8)] = inst_23559);

return statearr_23598;
})();
var statearr_23599_23625 = state_23595__$1;
(statearr_23599_23625[(2)] = null);

(statearr_23599_23625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23596 === (4))){
var inst_23563 = (state_23595[(9)]);
var inst_23563__$1 = (state_23595[(2)]);
var inst_23564 = (inst_23563__$1 == null);
var inst_23565 = cljs.core.not.call(null,inst_23564);
var state_23595__$1 = (function (){var statearr_23600 = state_23595;
(statearr_23600[(9)] = inst_23563__$1);

return statearr_23600;
})();
if(inst_23565){
var statearr_23601_23626 = state_23595__$1;
(statearr_23601_23626[(1)] = (5));

} else {
var statearr_23602_23627 = state_23595__$1;
(statearr_23602_23627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23596 === (15))){
var inst_23585 = (state_23595[(2)]);
var state_23595__$1 = state_23595;
var statearr_23603_23628 = state_23595__$1;
(statearr_23603_23628[(2)] = inst_23585);

(statearr_23603_23628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23596 === (13))){
var state_23595__$1 = state_23595;
var statearr_23604_23629 = state_23595__$1;
(statearr_23604_23629[(2)] = null);

(statearr_23604_23629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23596 === (6))){
var inst_23560 = (state_23595[(7)]);
var inst_23581 = (inst_23560 > (0));
var state_23595__$1 = state_23595;
if(cljs.core.truth_(inst_23581)){
var statearr_23605_23630 = state_23595__$1;
(statearr_23605_23630[(1)] = (12));

} else {
var statearr_23606_23631 = state_23595__$1;
(statearr_23606_23631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23596 === (3))){
var inst_23593 = (state_23595[(2)]);
var state_23595__$1 = state_23595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23595__$1,inst_23593);
} else {
if((state_val_23596 === (12))){
var inst_23559 = (state_23595[(8)]);
var inst_23583 = cljs.core.vec.call(null,inst_23559);
var state_23595__$1 = state_23595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23595__$1,(15),out,inst_23583);
} else {
if((state_val_23596 === (2))){
var state_23595__$1 = state_23595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23595__$1,(4),ch);
} else {
if((state_val_23596 === (11))){
var inst_23575 = (state_23595[(2)]);
var inst_23576 = (new Array(n));
var inst_23559 = inst_23576;
var inst_23560 = (0);
var state_23595__$1 = (function (){var statearr_23607 = state_23595;
(statearr_23607[(7)] = inst_23560);

(statearr_23607[(10)] = inst_23575);

(statearr_23607[(8)] = inst_23559);

return statearr_23607;
})();
var statearr_23608_23632 = state_23595__$1;
(statearr_23608_23632[(2)] = null);

(statearr_23608_23632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23596 === (9))){
var inst_23559 = (state_23595[(8)]);
var inst_23573 = cljs.core.vec.call(null,inst_23559);
var state_23595__$1 = state_23595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23595__$1,(11),out,inst_23573);
} else {
if((state_val_23596 === (5))){
var inst_23560 = (state_23595[(7)]);
var inst_23568 = (state_23595[(11)]);
var inst_23563 = (state_23595[(9)]);
var inst_23559 = (state_23595[(8)]);
var inst_23567 = (inst_23559[inst_23560] = inst_23563);
var inst_23568__$1 = (inst_23560 + (1));
var inst_23569 = (inst_23568__$1 < n);
var state_23595__$1 = (function (){var statearr_23609 = state_23595;
(statearr_23609[(12)] = inst_23567);

(statearr_23609[(11)] = inst_23568__$1);

return statearr_23609;
})();
if(cljs.core.truth_(inst_23569)){
var statearr_23610_23633 = state_23595__$1;
(statearr_23610_23633[(1)] = (8));

} else {
var statearr_23611_23634 = state_23595__$1;
(statearr_23611_23634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23596 === (14))){
var inst_23588 = (state_23595[(2)]);
var inst_23589 = cljs.core.async.close_BANG_.call(null,out);
var state_23595__$1 = (function (){var statearr_23613 = state_23595;
(statearr_23613[(13)] = inst_23588);

return statearr_23613;
})();
var statearr_23614_23635 = state_23595__$1;
(statearr_23614_23635[(2)] = inst_23589);

(statearr_23614_23635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23596 === (10))){
var inst_23579 = (state_23595[(2)]);
var state_23595__$1 = state_23595;
var statearr_23615_23636 = state_23595__$1;
(statearr_23615_23636[(2)] = inst_23579);

(statearr_23615_23636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23596 === (8))){
var inst_23568 = (state_23595[(11)]);
var inst_23559 = (state_23595[(8)]);
var tmp23612 = inst_23559;
var inst_23559__$1 = tmp23612;
var inst_23560 = inst_23568;
var state_23595__$1 = (function (){var statearr_23616 = state_23595;
(statearr_23616[(7)] = inst_23560);

(statearr_23616[(8)] = inst_23559__$1);

return statearr_23616;
})();
var statearr_23617_23637 = state_23595__$1;
(statearr_23617_23637[(2)] = null);

(statearr_23617_23637[(1)] = (2));


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
});})(c__21834__auto___23623,out))
;
return ((function (switch__21746__auto__,c__21834__auto___23623,out){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_23618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23618[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_23618[(1)] = (1));

return statearr_23618;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_23595){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_23595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e23619){if((e23619 instanceof Object)){
var ex__21750__auto__ = e23619;
var statearr_23620_23638 = state_23595;
(statearr_23620_23638[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23639 = state_23595;
state_23595 = G__23639;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_23595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_23595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___23623,out))
})();
var state__21836__auto__ = (function (){var statearr_23621 = f__21835__auto__.call(null);
(statearr_23621[(6)] = c__21834__auto___23623);

return statearr_23621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___23623,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23641 = arguments.length;
switch (G__23641) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21834__auto___23711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21834__auto___23711,out){
return (function (){
var f__21835__auto__ = (function (){var switch__21746__auto__ = ((function (c__21834__auto___23711,out){
return (function (state_23683){
var state_val_23684 = (state_23683[(1)]);
if((state_val_23684 === (7))){
var inst_23679 = (state_23683[(2)]);
var state_23683__$1 = state_23683;
var statearr_23685_23712 = state_23683__$1;
(statearr_23685_23712[(2)] = inst_23679);

(statearr_23685_23712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (1))){
var inst_23642 = [];
var inst_23643 = inst_23642;
var inst_23644 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23683__$1 = (function (){var statearr_23686 = state_23683;
(statearr_23686[(7)] = inst_23643);

(statearr_23686[(8)] = inst_23644);

return statearr_23686;
})();
var statearr_23687_23713 = state_23683__$1;
(statearr_23687_23713[(2)] = null);

(statearr_23687_23713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (4))){
var inst_23647 = (state_23683[(9)]);
var inst_23647__$1 = (state_23683[(2)]);
var inst_23648 = (inst_23647__$1 == null);
var inst_23649 = cljs.core.not.call(null,inst_23648);
var state_23683__$1 = (function (){var statearr_23688 = state_23683;
(statearr_23688[(9)] = inst_23647__$1);

return statearr_23688;
})();
if(inst_23649){
var statearr_23689_23714 = state_23683__$1;
(statearr_23689_23714[(1)] = (5));

} else {
var statearr_23690_23715 = state_23683__$1;
(statearr_23690_23715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (15))){
var inst_23673 = (state_23683[(2)]);
var state_23683__$1 = state_23683;
var statearr_23691_23716 = state_23683__$1;
(statearr_23691_23716[(2)] = inst_23673);

(statearr_23691_23716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (13))){
var state_23683__$1 = state_23683;
var statearr_23692_23717 = state_23683__$1;
(statearr_23692_23717[(2)] = null);

(statearr_23692_23717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (6))){
var inst_23643 = (state_23683[(7)]);
var inst_23668 = inst_23643.length;
var inst_23669 = (inst_23668 > (0));
var state_23683__$1 = state_23683;
if(cljs.core.truth_(inst_23669)){
var statearr_23693_23718 = state_23683__$1;
(statearr_23693_23718[(1)] = (12));

} else {
var statearr_23694_23719 = state_23683__$1;
(statearr_23694_23719[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (3))){
var inst_23681 = (state_23683[(2)]);
var state_23683__$1 = state_23683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23683__$1,inst_23681);
} else {
if((state_val_23684 === (12))){
var inst_23643 = (state_23683[(7)]);
var inst_23671 = cljs.core.vec.call(null,inst_23643);
var state_23683__$1 = state_23683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23683__$1,(15),out,inst_23671);
} else {
if((state_val_23684 === (2))){
var state_23683__$1 = state_23683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23683__$1,(4),ch);
} else {
if((state_val_23684 === (11))){
var inst_23647 = (state_23683[(9)]);
var inst_23651 = (state_23683[(10)]);
var inst_23661 = (state_23683[(2)]);
var inst_23662 = [];
var inst_23663 = inst_23662.push(inst_23647);
var inst_23643 = inst_23662;
var inst_23644 = inst_23651;
var state_23683__$1 = (function (){var statearr_23695 = state_23683;
(statearr_23695[(11)] = inst_23661);

(statearr_23695[(12)] = inst_23663);

(statearr_23695[(7)] = inst_23643);

(statearr_23695[(8)] = inst_23644);

return statearr_23695;
})();
var statearr_23696_23720 = state_23683__$1;
(statearr_23696_23720[(2)] = null);

(statearr_23696_23720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (9))){
var inst_23643 = (state_23683[(7)]);
var inst_23659 = cljs.core.vec.call(null,inst_23643);
var state_23683__$1 = state_23683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23683__$1,(11),out,inst_23659);
} else {
if((state_val_23684 === (5))){
var inst_23647 = (state_23683[(9)]);
var inst_23651 = (state_23683[(10)]);
var inst_23644 = (state_23683[(8)]);
var inst_23651__$1 = f.call(null,inst_23647);
var inst_23652 = cljs.core._EQ_.call(null,inst_23651__$1,inst_23644);
var inst_23653 = cljs.core.keyword_identical_QMARK_.call(null,inst_23644,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23654 = ((inst_23652) || (inst_23653));
var state_23683__$1 = (function (){var statearr_23697 = state_23683;
(statearr_23697[(10)] = inst_23651__$1);

return statearr_23697;
})();
if(cljs.core.truth_(inst_23654)){
var statearr_23698_23721 = state_23683__$1;
(statearr_23698_23721[(1)] = (8));

} else {
var statearr_23699_23722 = state_23683__$1;
(statearr_23699_23722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (14))){
var inst_23676 = (state_23683[(2)]);
var inst_23677 = cljs.core.async.close_BANG_.call(null,out);
var state_23683__$1 = (function (){var statearr_23701 = state_23683;
(statearr_23701[(13)] = inst_23676);

return statearr_23701;
})();
var statearr_23702_23723 = state_23683__$1;
(statearr_23702_23723[(2)] = inst_23677);

(statearr_23702_23723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (10))){
var inst_23666 = (state_23683[(2)]);
var state_23683__$1 = state_23683;
var statearr_23703_23724 = state_23683__$1;
(statearr_23703_23724[(2)] = inst_23666);

(statearr_23703_23724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (8))){
var inst_23647 = (state_23683[(9)]);
var inst_23651 = (state_23683[(10)]);
var inst_23643 = (state_23683[(7)]);
var inst_23656 = inst_23643.push(inst_23647);
var tmp23700 = inst_23643;
var inst_23643__$1 = tmp23700;
var inst_23644 = inst_23651;
var state_23683__$1 = (function (){var statearr_23704 = state_23683;
(statearr_23704[(14)] = inst_23656);

(statearr_23704[(7)] = inst_23643__$1);

(statearr_23704[(8)] = inst_23644);

return statearr_23704;
})();
var statearr_23705_23725 = state_23683__$1;
(statearr_23705_23725[(2)] = null);

(statearr_23705_23725[(1)] = (2));


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
});})(c__21834__auto___23711,out))
;
return ((function (switch__21746__auto__,c__21834__auto___23711,out){
return (function() {
var cljs$core$async$state_machine__21747__auto__ = null;
var cljs$core$async$state_machine__21747__auto____0 = (function (){
var statearr_23706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23706[(0)] = cljs$core$async$state_machine__21747__auto__);

(statearr_23706[(1)] = (1));

return statearr_23706;
});
var cljs$core$async$state_machine__21747__auto____1 = (function (state_23683){
while(true){
var ret_value__21748__auto__ = (function (){try{while(true){
var result__21749__auto__ = switch__21746__auto__.call(null,state_23683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21749__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21749__auto__;
}
break;
}
}catch (e23707){if((e23707 instanceof Object)){
var ex__21750__auto__ = e23707;
var statearr_23708_23726 = state_23683;
(statearr_23708_23726[(5)] = ex__21750__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23727 = state_23683;
state_23683 = G__23727;
continue;
} else {
return ret_value__21748__auto__;
}
break;
}
});
cljs$core$async$state_machine__21747__auto__ = function(state_23683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21747__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21747__auto____1.call(this,state_23683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21747__auto____0;
cljs$core$async$state_machine__21747__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21747__auto____1;
return cljs$core$async$state_machine__21747__auto__;
})()
;})(switch__21746__auto__,c__21834__auto___23711,out))
})();
var state__21836__auto__ = (function (){var statearr_23709 = f__21835__auto__.call(null);
(statearr_23709[(6)] = c__21834__auto___23711);

return statearr_23709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21836__auto__);
});})(c__21834__auto___23711,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1548216502798
