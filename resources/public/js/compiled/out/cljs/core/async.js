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
var G__37026 = arguments.length;
switch (G__37026) {
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
if(typeof cljs.core.async.t_cljs$core$async37027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37027 = (function (f,blockable,meta37028){
this.f = f;
this.blockable = blockable;
this.meta37028 = meta37028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37029,meta37028__$1){
var self__ = this;
var _37029__$1 = this;
return (new cljs.core.async.t_cljs$core$async37027(self__.f,self__.blockable,meta37028__$1));
});

cljs.core.async.t_cljs$core$async37027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37029){
var self__ = this;
var _37029__$1 = this;
return self__.meta37028;
});

cljs.core.async.t_cljs$core$async37027.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37027.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37028","meta37028",253139412,null)], null);
});

cljs.core.async.t_cljs$core$async37027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37027";

cljs.core.async.t_cljs$core$async37027.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37027");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37027.
 */
cljs.core.async.__GT_t_cljs$core$async37027 = (function cljs$core$async$__GT_t_cljs$core$async37027(f__$1,blockable__$1,meta37028){
return (new cljs.core.async.t_cljs$core$async37027(f__$1,blockable__$1,meta37028));
});

}

return (new cljs.core.async.t_cljs$core$async37027(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37033 = arguments.length;
switch (G__37033) {
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
var G__37036 = arguments.length;
switch (G__37036) {
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
var G__37039 = arguments.length;
switch (G__37039) {
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
var val_37041 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37041);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37041,ret){
return (function (){
return fn1.call(null,val_37041);
});})(val_37041,ret))
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
var G__37043 = arguments.length;
switch (G__37043) {
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
var n__4376__auto___37045 = n;
var x_37046 = (0);
while(true){
if((x_37046 < n__4376__auto___37045)){
(a[x_37046] = (0));

var G__37047 = (x_37046 + (1));
x_37046 = G__37047;
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

var G__37048 = (i + (1));
i = G__37048;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37049 = (function (flag,meta37050){
this.flag = flag;
this.meta37050 = meta37050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37051,meta37050__$1){
var self__ = this;
var _37051__$1 = this;
return (new cljs.core.async.t_cljs$core$async37049(self__.flag,meta37050__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37051){
var self__ = this;
var _37051__$1 = this;
return self__.meta37050;
});})(flag))
;

cljs.core.async.t_cljs$core$async37049.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37049.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37049.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37050","meta37050",530927085,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37049";

cljs.core.async.t_cljs$core$async37049.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37049");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37049.
 */
cljs.core.async.__GT_t_cljs$core$async37049 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37049(flag__$1,meta37050){
return (new cljs.core.async.t_cljs$core$async37049(flag__$1,meta37050));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37049(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37052 = (function (flag,cb,meta37053){
this.flag = flag;
this.cb = cb;
this.meta37053 = meta37053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37054,meta37053__$1){
var self__ = this;
var _37054__$1 = this;
return (new cljs.core.async.t_cljs$core$async37052(self__.flag,self__.cb,meta37053__$1));
});

cljs.core.async.t_cljs$core$async37052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37054){
var self__ = this;
var _37054__$1 = this;
return self__.meta37053;
});

cljs.core.async.t_cljs$core$async37052.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37052.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37053","meta37053",1352245446,null)], null);
});

cljs.core.async.t_cljs$core$async37052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37052";

cljs.core.async.t_cljs$core$async37052.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37052");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37052.
 */
cljs.core.async.__GT_t_cljs$core$async37052 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37052(flag__$1,cb__$1,meta37053){
return (new cljs.core.async.t_cljs$core$async37052(flag__$1,cb__$1,meta37053));
});

}

return (new cljs.core.async.t_cljs$core$async37052(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37055_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37055_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37056_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37056_SHARP_,port], null));
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
var G__37057 = (i + (1));
i = G__37057;
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
var len__4499__auto___37063 = arguments.length;
var i__4500__auto___37064 = (0);
while(true){
if((i__4500__auto___37064 < len__4499__auto___37063)){
args__4502__auto__.push((arguments[i__4500__auto___37064]));

var G__37065 = (i__4500__auto___37064 + (1));
i__4500__auto___37064 = G__37065;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37060){
var map__37061 = p__37060;
var map__37061__$1 = ((((!((map__37061 == null)))?(((((map__37061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37061):map__37061);
var opts = map__37061__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37058){
var G__37059 = cljs.core.first.call(null,seq37058);
var seq37058__$1 = cljs.core.next.call(null,seq37058);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37059,seq37058__$1);
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
var G__37067 = arguments.length;
switch (G__37067) {
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
var c__22784__auto___37113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___37113){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___37113){
return (function (state_37091){
var state_val_37092 = (state_37091[(1)]);
if((state_val_37092 === (7))){
var inst_37087 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37093_37114 = state_37091__$1;
(statearr_37093_37114[(2)] = inst_37087);

(statearr_37093_37114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (1))){
var state_37091__$1 = state_37091;
var statearr_37094_37115 = state_37091__$1;
(statearr_37094_37115[(2)] = null);

(statearr_37094_37115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (4))){
var inst_37070 = (state_37091[(7)]);
var inst_37070__$1 = (state_37091[(2)]);
var inst_37071 = (inst_37070__$1 == null);
var state_37091__$1 = (function (){var statearr_37095 = state_37091;
(statearr_37095[(7)] = inst_37070__$1);

return statearr_37095;
})();
if(cljs.core.truth_(inst_37071)){
var statearr_37096_37116 = state_37091__$1;
(statearr_37096_37116[(1)] = (5));

} else {
var statearr_37097_37117 = state_37091__$1;
(statearr_37097_37117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (13))){
var state_37091__$1 = state_37091;
var statearr_37098_37118 = state_37091__$1;
(statearr_37098_37118[(2)] = null);

(statearr_37098_37118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (6))){
var inst_37070 = (state_37091[(7)]);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37091__$1,(11),to,inst_37070);
} else {
if((state_val_37092 === (3))){
var inst_37089 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37091__$1,inst_37089);
} else {
if((state_val_37092 === (12))){
var state_37091__$1 = state_37091;
var statearr_37099_37119 = state_37091__$1;
(statearr_37099_37119[(2)] = null);

(statearr_37099_37119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (2))){
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(4),from);
} else {
if((state_val_37092 === (11))){
var inst_37080 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
if(cljs.core.truth_(inst_37080)){
var statearr_37100_37120 = state_37091__$1;
(statearr_37100_37120[(1)] = (12));

} else {
var statearr_37101_37121 = state_37091__$1;
(statearr_37101_37121[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (9))){
var state_37091__$1 = state_37091;
var statearr_37102_37122 = state_37091__$1;
(statearr_37102_37122[(2)] = null);

(statearr_37102_37122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (5))){
var state_37091__$1 = state_37091;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37103_37123 = state_37091__$1;
(statearr_37103_37123[(1)] = (8));

} else {
var statearr_37104_37124 = state_37091__$1;
(statearr_37104_37124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (14))){
var inst_37085 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37105_37125 = state_37091__$1;
(statearr_37105_37125[(2)] = inst_37085);

(statearr_37105_37125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (10))){
var inst_37077 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37106_37126 = state_37091__$1;
(statearr_37106_37126[(2)] = inst_37077);

(statearr_37106_37126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (8))){
var inst_37074 = cljs.core.async.close_BANG_.call(null,to);
var state_37091__$1 = state_37091;
var statearr_37107_37127 = state_37091__$1;
(statearr_37107_37127[(2)] = inst_37074);

(statearr_37107_37127[(1)] = (10));


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
});})(c__22784__auto___37113))
;
return ((function (switch__22629__auto__,c__22784__auto___37113){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_37108 = [null,null,null,null,null,null,null,null];
(statearr_37108[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_37108[(1)] = (1));

return statearr_37108;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_37091){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e37109){if((e37109 instanceof Object)){
var ex__22633__auto__ = e37109;
var statearr_37110_37128 = state_37091;
(statearr_37110_37128[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37129 = state_37091;
state_37091 = G__37129;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_37091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_37091);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___37113))
})();
var state__22786__auto__ = (function (){var statearr_37111 = f__22785__auto__.call(null);
(statearr_37111[(6)] = c__22784__auto___37113);

return statearr_37111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___37113))
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
return (function (p__37130){
var vec__37131 = p__37130;
var v = cljs.core.nth.call(null,vec__37131,(0),null);
var p = cljs.core.nth.call(null,vec__37131,(1),null);
var job = vec__37131;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22784__auto___37302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___37302,res,vec__37131,v,p,job,jobs,results){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___37302,res,vec__37131,v,p,job,jobs,results){
return (function (state_37138){
var state_val_37139 = (state_37138[(1)]);
if((state_val_37139 === (1))){
var state_37138__$1 = state_37138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37138__$1,(2),res,v);
} else {
if((state_val_37139 === (2))){
var inst_37135 = (state_37138[(2)]);
var inst_37136 = cljs.core.async.close_BANG_.call(null,res);
var state_37138__$1 = (function (){var statearr_37140 = state_37138;
(statearr_37140[(7)] = inst_37135);

return statearr_37140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37138__$1,inst_37136);
} else {
return null;
}
}
});})(c__22784__auto___37302,res,vec__37131,v,p,job,jobs,results))
;
return ((function (switch__22629__auto__,c__22784__auto___37302,res,vec__37131,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0 = (function (){
var statearr_37141 = [null,null,null,null,null,null,null,null];
(statearr_37141[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__);

(statearr_37141[(1)] = (1));

return statearr_37141;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1 = (function (state_37138){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e37142){if((e37142 instanceof Object)){
var ex__22633__auto__ = e37142;
var statearr_37143_37303 = state_37138;
(statearr_37143_37303[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37304 = state_37138;
state_37138 = G__37304;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__ = function(state_37138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1.call(this,state_37138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___37302,res,vec__37131,v,p,job,jobs,results))
})();
var state__22786__auto__ = (function (){var statearr_37144 = f__22785__auto__.call(null);
(statearr_37144[(6)] = c__22784__auto___37302);

return statearr_37144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___37302,res,vec__37131,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37145){
var vec__37146 = p__37145;
var v = cljs.core.nth.call(null,vec__37146,(0),null);
var p = cljs.core.nth.call(null,vec__37146,(1),null);
var job = vec__37146;
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
var n__4376__auto___37305 = n;
var __37306 = (0);
while(true){
if((__37306 < n__4376__auto___37305)){
var G__37149_37307 = type;
var G__37149_37308__$1 = (((G__37149_37307 instanceof cljs.core.Keyword))?G__37149_37307.fqn:null);
switch (G__37149_37308__$1) {
case "compute":
var c__22784__auto___37310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37306,c__22784__auto___37310,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (__37306,c__22784__auto___37310,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async){
return (function (state_37162){
var state_val_37163 = (state_37162[(1)]);
if((state_val_37163 === (1))){
var state_37162__$1 = state_37162;
var statearr_37164_37311 = state_37162__$1;
(statearr_37164_37311[(2)] = null);

(statearr_37164_37311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37163 === (2))){
var state_37162__$1 = state_37162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37162__$1,(4),jobs);
} else {
if((state_val_37163 === (3))){
var inst_37160 = (state_37162[(2)]);
var state_37162__$1 = state_37162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37162__$1,inst_37160);
} else {
if((state_val_37163 === (4))){
var inst_37152 = (state_37162[(2)]);
var inst_37153 = process.call(null,inst_37152);
var state_37162__$1 = state_37162;
if(cljs.core.truth_(inst_37153)){
var statearr_37165_37312 = state_37162__$1;
(statearr_37165_37312[(1)] = (5));

} else {
var statearr_37166_37313 = state_37162__$1;
(statearr_37166_37313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37163 === (5))){
var state_37162__$1 = state_37162;
var statearr_37167_37314 = state_37162__$1;
(statearr_37167_37314[(2)] = null);

(statearr_37167_37314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37163 === (6))){
var state_37162__$1 = state_37162;
var statearr_37168_37315 = state_37162__$1;
(statearr_37168_37315[(2)] = null);

(statearr_37168_37315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37163 === (7))){
var inst_37158 = (state_37162[(2)]);
var state_37162__$1 = state_37162;
var statearr_37169_37316 = state_37162__$1;
(statearr_37169_37316[(2)] = inst_37158);

(statearr_37169_37316[(1)] = (3));


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
});})(__37306,c__22784__auto___37310,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async))
;
return ((function (__37306,switch__22629__auto__,c__22784__auto___37310,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0 = (function (){
var statearr_37170 = [null,null,null,null,null,null,null];
(statearr_37170[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__);

(statearr_37170[(1)] = (1));

return statearr_37170;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1 = (function (state_37162){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e37171){if((e37171 instanceof Object)){
var ex__22633__auto__ = e37171;
var statearr_37172_37317 = state_37162;
(statearr_37172_37317[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37318 = state_37162;
state_37162 = G__37318;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__ = function(state_37162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1.call(this,state_37162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__;
})()
;})(__37306,switch__22629__auto__,c__22784__auto___37310,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async))
})();
var state__22786__auto__ = (function (){var statearr_37173 = f__22785__auto__.call(null);
(statearr_37173[(6)] = c__22784__auto___37310);

return statearr_37173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(__37306,c__22784__auto___37310,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async))
);


break;
case "async":
var c__22784__auto___37319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37306,c__22784__auto___37319,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (__37306,c__22784__auto___37319,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async){
return (function (state_37186){
var state_val_37187 = (state_37186[(1)]);
if((state_val_37187 === (1))){
var state_37186__$1 = state_37186;
var statearr_37188_37320 = state_37186__$1;
(statearr_37188_37320[(2)] = null);

(statearr_37188_37320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37187 === (2))){
var state_37186__$1 = state_37186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37186__$1,(4),jobs);
} else {
if((state_val_37187 === (3))){
var inst_37184 = (state_37186[(2)]);
var state_37186__$1 = state_37186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37186__$1,inst_37184);
} else {
if((state_val_37187 === (4))){
var inst_37176 = (state_37186[(2)]);
var inst_37177 = async.call(null,inst_37176);
var state_37186__$1 = state_37186;
if(cljs.core.truth_(inst_37177)){
var statearr_37189_37321 = state_37186__$1;
(statearr_37189_37321[(1)] = (5));

} else {
var statearr_37190_37322 = state_37186__$1;
(statearr_37190_37322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37187 === (5))){
var state_37186__$1 = state_37186;
var statearr_37191_37323 = state_37186__$1;
(statearr_37191_37323[(2)] = null);

(statearr_37191_37323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37187 === (6))){
var state_37186__$1 = state_37186;
var statearr_37192_37324 = state_37186__$1;
(statearr_37192_37324[(2)] = null);

(statearr_37192_37324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37187 === (7))){
var inst_37182 = (state_37186[(2)]);
var state_37186__$1 = state_37186;
var statearr_37193_37325 = state_37186__$1;
(statearr_37193_37325[(2)] = inst_37182);

(statearr_37193_37325[(1)] = (3));


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
});})(__37306,c__22784__auto___37319,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async))
;
return ((function (__37306,switch__22629__auto__,c__22784__auto___37319,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0 = (function (){
var statearr_37194 = [null,null,null,null,null,null,null];
(statearr_37194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__);

(statearr_37194[(1)] = (1));

return statearr_37194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1 = (function (state_37186){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e37195){if((e37195 instanceof Object)){
var ex__22633__auto__ = e37195;
var statearr_37196_37326 = state_37186;
(statearr_37196_37326[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37327 = state_37186;
state_37186 = G__37327;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__ = function(state_37186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1.call(this,state_37186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__;
})()
;})(__37306,switch__22629__auto__,c__22784__auto___37319,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async))
})();
var state__22786__auto__ = (function (){var statearr_37197 = f__22785__auto__.call(null);
(statearr_37197[(6)] = c__22784__auto___37319);

return statearr_37197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(__37306,c__22784__auto___37319,G__37149_37307,G__37149_37308__$1,n__4376__auto___37305,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37149_37308__$1)].join('')));

}

var G__37328 = (__37306 + (1));
__37306 = G__37328;
continue;
} else {
}
break;
}

var c__22784__auto___37329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___37329,jobs,results,process,async){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___37329,jobs,results,process,async){
return (function (state_37219){
var state_val_37220 = (state_37219[(1)]);
if((state_val_37220 === (1))){
var state_37219__$1 = state_37219;
var statearr_37221_37330 = state_37219__$1;
(statearr_37221_37330[(2)] = null);

(statearr_37221_37330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (2))){
var state_37219__$1 = state_37219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37219__$1,(4),from);
} else {
if((state_val_37220 === (3))){
var inst_37217 = (state_37219[(2)]);
var state_37219__$1 = state_37219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37219__$1,inst_37217);
} else {
if((state_val_37220 === (4))){
var inst_37200 = (state_37219[(7)]);
var inst_37200__$1 = (state_37219[(2)]);
var inst_37201 = (inst_37200__$1 == null);
var state_37219__$1 = (function (){var statearr_37222 = state_37219;
(statearr_37222[(7)] = inst_37200__$1);

return statearr_37222;
})();
if(cljs.core.truth_(inst_37201)){
var statearr_37223_37331 = state_37219__$1;
(statearr_37223_37331[(1)] = (5));

} else {
var statearr_37224_37332 = state_37219__$1;
(statearr_37224_37332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (5))){
var inst_37203 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37219__$1 = state_37219;
var statearr_37225_37333 = state_37219__$1;
(statearr_37225_37333[(2)] = inst_37203);

(statearr_37225_37333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (6))){
var inst_37205 = (state_37219[(8)]);
var inst_37200 = (state_37219[(7)]);
var inst_37205__$1 = cljs.core.async.chan.call(null,(1));
var inst_37206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37207 = [inst_37200,inst_37205__$1];
var inst_37208 = (new cljs.core.PersistentVector(null,2,(5),inst_37206,inst_37207,null));
var state_37219__$1 = (function (){var statearr_37226 = state_37219;
(statearr_37226[(8)] = inst_37205__$1);

return statearr_37226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37219__$1,(8),jobs,inst_37208);
} else {
if((state_val_37220 === (7))){
var inst_37215 = (state_37219[(2)]);
var state_37219__$1 = state_37219;
var statearr_37227_37334 = state_37219__$1;
(statearr_37227_37334[(2)] = inst_37215);

(statearr_37227_37334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (8))){
var inst_37205 = (state_37219[(8)]);
var inst_37210 = (state_37219[(2)]);
var state_37219__$1 = (function (){var statearr_37228 = state_37219;
(statearr_37228[(9)] = inst_37210);

return statearr_37228;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37219__$1,(9),results,inst_37205);
} else {
if((state_val_37220 === (9))){
var inst_37212 = (state_37219[(2)]);
var state_37219__$1 = (function (){var statearr_37229 = state_37219;
(statearr_37229[(10)] = inst_37212);

return statearr_37229;
})();
var statearr_37230_37335 = state_37219__$1;
(statearr_37230_37335[(2)] = null);

(statearr_37230_37335[(1)] = (2));


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
});})(c__22784__auto___37329,jobs,results,process,async))
;
return ((function (switch__22629__auto__,c__22784__auto___37329,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0 = (function (){
var statearr_37231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__);

(statearr_37231[(1)] = (1));

return statearr_37231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1 = (function (state_37219){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e37232){if((e37232 instanceof Object)){
var ex__22633__auto__ = e37232;
var statearr_37233_37336 = state_37219;
(statearr_37233_37336[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37337 = state_37219;
state_37219 = G__37337;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__ = function(state_37219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1.call(this,state_37219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___37329,jobs,results,process,async))
})();
var state__22786__auto__ = (function (){var statearr_37234 = f__22785__auto__.call(null);
(statearr_37234[(6)] = c__22784__auto___37329);

return statearr_37234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___37329,jobs,results,process,async))
);


var c__22784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto__,jobs,results,process,async){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto__,jobs,results,process,async){
return (function (state_37272){
var state_val_37273 = (state_37272[(1)]);
if((state_val_37273 === (7))){
var inst_37268 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37274_37338 = state_37272__$1;
(statearr_37274_37338[(2)] = inst_37268);

(statearr_37274_37338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (20))){
var state_37272__$1 = state_37272;
var statearr_37275_37339 = state_37272__$1;
(statearr_37275_37339[(2)] = null);

(statearr_37275_37339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (1))){
var state_37272__$1 = state_37272;
var statearr_37276_37340 = state_37272__$1;
(statearr_37276_37340[(2)] = null);

(statearr_37276_37340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (4))){
var inst_37237 = (state_37272[(7)]);
var inst_37237__$1 = (state_37272[(2)]);
var inst_37238 = (inst_37237__$1 == null);
var state_37272__$1 = (function (){var statearr_37277 = state_37272;
(statearr_37277[(7)] = inst_37237__$1);

return statearr_37277;
})();
if(cljs.core.truth_(inst_37238)){
var statearr_37278_37341 = state_37272__$1;
(statearr_37278_37341[(1)] = (5));

} else {
var statearr_37279_37342 = state_37272__$1;
(statearr_37279_37342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (15))){
var inst_37250 = (state_37272[(8)]);
var state_37272__$1 = state_37272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37272__$1,(18),to,inst_37250);
} else {
if((state_val_37273 === (21))){
var inst_37263 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37280_37343 = state_37272__$1;
(statearr_37280_37343[(2)] = inst_37263);

(statearr_37280_37343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (13))){
var inst_37265 = (state_37272[(2)]);
var state_37272__$1 = (function (){var statearr_37281 = state_37272;
(statearr_37281[(9)] = inst_37265);

return statearr_37281;
})();
var statearr_37282_37344 = state_37272__$1;
(statearr_37282_37344[(2)] = null);

(statearr_37282_37344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (6))){
var inst_37237 = (state_37272[(7)]);
var state_37272__$1 = state_37272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37272__$1,(11),inst_37237);
} else {
if((state_val_37273 === (17))){
var inst_37258 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
if(cljs.core.truth_(inst_37258)){
var statearr_37283_37345 = state_37272__$1;
(statearr_37283_37345[(1)] = (19));

} else {
var statearr_37284_37346 = state_37272__$1;
(statearr_37284_37346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (3))){
var inst_37270 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37272__$1,inst_37270);
} else {
if((state_val_37273 === (12))){
var inst_37247 = (state_37272[(10)]);
var state_37272__$1 = state_37272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37272__$1,(14),inst_37247);
} else {
if((state_val_37273 === (2))){
var state_37272__$1 = state_37272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37272__$1,(4),results);
} else {
if((state_val_37273 === (19))){
var state_37272__$1 = state_37272;
var statearr_37285_37347 = state_37272__$1;
(statearr_37285_37347[(2)] = null);

(statearr_37285_37347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (11))){
var inst_37247 = (state_37272[(2)]);
var state_37272__$1 = (function (){var statearr_37286 = state_37272;
(statearr_37286[(10)] = inst_37247);

return statearr_37286;
})();
var statearr_37287_37348 = state_37272__$1;
(statearr_37287_37348[(2)] = null);

(statearr_37287_37348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (9))){
var state_37272__$1 = state_37272;
var statearr_37288_37349 = state_37272__$1;
(statearr_37288_37349[(2)] = null);

(statearr_37288_37349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (5))){
var state_37272__$1 = state_37272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37289_37350 = state_37272__$1;
(statearr_37289_37350[(1)] = (8));

} else {
var statearr_37290_37351 = state_37272__$1;
(statearr_37290_37351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (14))){
var inst_37252 = (state_37272[(11)]);
var inst_37250 = (state_37272[(8)]);
var inst_37250__$1 = (state_37272[(2)]);
var inst_37251 = (inst_37250__$1 == null);
var inst_37252__$1 = cljs.core.not.call(null,inst_37251);
var state_37272__$1 = (function (){var statearr_37291 = state_37272;
(statearr_37291[(11)] = inst_37252__$1);

(statearr_37291[(8)] = inst_37250__$1);

return statearr_37291;
})();
if(inst_37252__$1){
var statearr_37292_37352 = state_37272__$1;
(statearr_37292_37352[(1)] = (15));

} else {
var statearr_37293_37353 = state_37272__$1;
(statearr_37293_37353[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (16))){
var inst_37252 = (state_37272[(11)]);
var state_37272__$1 = state_37272;
var statearr_37294_37354 = state_37272__$1;
(statearr_37294_37354[(2)] = inst_37252);

(statearr_37294_37354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (10))){
var inst_37244 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37295_37355 = state_37272__$1;
(statearr_37295_37355[(2)] = inst_37244);

(statearr_37295_37355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (18))){
var inst_37255 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37296_37356 = state_37272__$1;
(statearr_37296_37356[(2)] = inst_37255);

(statearr_37296_37356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (8))){
var inst_37241 = cljs.core.async.close_BANG_.call(null,to);
var state_37272__$1 = state_37272;
var statearr_37297_37357 = state_37272__$1;
(statearr_37297_37357[(2)] = inst_37241);

(statearr_37297_37357[(1)] = (10));


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
});})(c__22784__auto__,jobs,results,process,async))
;
return ((function (switch__22629__auto__,c__22784__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0 = (function (){
var statearr_37298 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__);

(statearr_37298[(1)] = (1));

return statearr_37298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1 = (function (state_37272){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e37299){if((e37299 instanceof Object)){
var ex__22633__auto__ = e37299;
var statearr_37300_37358 = state_37272;
(statearr_37300_37358[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37359 = state_37272;
state_37272 = G__37359;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__ = function(state_37272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1.call(this,state_37272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22630__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto__,jobs,results,process,async))
})();
var state__22786__auto__ = (function (){var statearr_37301 = f__22785__auto__.call(null);
(statearr_37301[(6)] = c__22784__auto__);

return statearr_37301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto__,jobs,results,process,async))
);

return c__22784__auto__;
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
var G__37361 = arguments.length;
switch (G__37361) {
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
var G__37364 = arguments.length;
switch (G__37364) {
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
var G__37367 = arguments.length;
switch (G__37367) {
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
var c__22784__auto___37416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___37416,tc,fc){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___37416,tc,fc){
return (function (state_37393){
var state_val_37394 = (state_37393[(1)]);
if((state_val_37394 === (7))){
var inst_37389 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37395_37417 = state_37393__$1;
(statearr_37395_37417[(2)] = inst_37389);

(statearr_37395_37417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (1))){
var state_37393__$1 = state_37393;
var statearr_37396_37418 = state_37393__$1;
(statearr_37396_37418[(2)] = null);

(statearr_37396_37418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (4))){
var inst_37370 = (state_37393[(7)]);
var inst_37370__$1 = (state_37393[(2)]);
var inst_37371 = (inst_37370__$1 == null);
var state_37393__$1 = (function (){var statearr_37397 = state_37393;
(statearr_37397[(7)] = inst_37370__$1);

return statearr_37397;
})();
if(cljs.core.truth_(inst_37371)){
var statearr_37398_37419 = state_37393__$1;
(statearr_37398_37419[(1)] = (5));

} else {
var statearr_37399_37420 = state_37393__$1;
(statearr_37399_37420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (13))){
var state_37393__$1 = state_37393;
var statearr_37400_37421 = state_37393__$1;
(statearr_37400_37421[(2)] = null);

(statearr_37400_37421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (6))){
var inst_37370 = (state_37393[(7)]);
var inst_37376 = p.call(null,inst_37370);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37376)){
var statearr_37401_37422 = state_37393__$1;
(statearr_37401_37422[(1)] = (9));

} else {
var statearr_37402_37423 = state_37393__$1;
(statearr_37402_37423[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (3))){
var inst_37391 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37393__$1,inst_37391);
} else {
if((state_val_37394 === (12))){
var state_37393__$1 = state_37393;
var statearr_37403_37424 = state_37393__$1;
(statearr_37403_37424[(2)] = null);

(statearr_37403_37424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (2))){
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37393__$1,(4),ch);
} else {
if((state_val_37394 === (11))){
var inst_37370 = (state_37393[(7)]);
var inst_37380 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37393__$1,(8),inst_37380,inst_37370);
} else {
if((state_val_37394 === (9))){
var state_37393__$1 = state_37393;
var statearr_37404_37425 = state_37393__$1;
(statearr_37404_37425[(2)] = tc);

(statearr_37404_37425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (5))){
var inst_37373 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37374 = cljs.core.async.close_BANG_.call(null,fc);
var state_37393__$1 = (function (){var statearr_37405 = state_37393;
(statearr_37405[(8)] = inst_37373);

return statearr_37405;
})();
var statearr_37406_37426 = state_37393__$1;
(statearr_37406_37426[(2)] = inst_37374);

(statearr_37406_37426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (14))){
var inst_37387 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37407_37427 = state_37393__$1;
(statearr_37407_37427[(2)] = inst_37387);

(statearr_37407_37427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (10))){
var state_37393__$1 = state_37393;
var statearr_37408_37428 = state_37393__$1;
(statearr_37408_37428[(2)] = fc);

(statearr_37408_37428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (8))){
var inst_37382 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37382)){
var statearr_37409_37429 = state_37393__$1;
(statearr_37409_37429[(1)] = (12));

} else {
var statearr_37410_37430 = state_37393__$1;
(statearr_37410_37430[(1)] = (13));

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
});})(c__22784__auto___37416,tc,fc))
;
return ((function (switch__22629__auto__,c__22784__auto___37416,tc,fc){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_37411 = [null,null,null,null,null,null,null,null,null];
(statearr_37411[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_37411[(1)] = (1));

return statearr_37411;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_37393){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e37412){if((e37412 instanceof Object)){
var ex__22633__auto__ = e37412;
var statearr_37413_37431 = state_37393;
(statearr_37413_37431[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37432 = state_37393;
state_37393 = G__37432;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_37393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_37393);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___37416,tc,fc))
})();
var state__22786__auto__ = (function (){var statearr_37414 = f__22785__auto__.call(null);
(statearr_37414[(6)] = c__22784__auto___37416);

return statearr_37414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___37416,tc,fc))
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
var c__22784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto__){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto__){
return (function (state_37453){
var state_val_37454 = (state_37453[(1)]);
if((state_val_37454 === (7))){
var inst_37449 = (state_37453[(2)]);
var state_37453__$1 = state_37453;
var statearr_37455_37473 = state_37453__$1;
(statearr_37455_37473[(2)] = inst_37449);

(statearr_37455_37473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (1))){
var inst_37433 = init;
var state_37453__$1 = (function (){var statearr_37456 = state_37453;
(statearr_37456[(7)] = inst_37433);

return statearr_37456;
})();
var statearr_37457_37474 = state_37453__$1;
(statearr_37457_37474[(2)] = null);

(statearr_37457_37474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (4))){
var inst_37436 = (state_37453[(8)]);
var inst_37436__$1 = (state_37453[(2)]);
var inst_37437 = (inst_37436__$1 == null);
var state_37453__$1 = (function (){var statearr_37458 = state_37453;
(statearr_37458[(8)] = inst_37436__$1);

return statearr_37458;
})();
if(cljs.core.truth_(inst_37437)){
var statearr_37459_37475 = state_37453__$1;
(statearr_37459_37475[(1)] = (5));

} else {
var statearr_37460_37476 = state_37453__$1;
(statearr_37460_37476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (6))){
var inst_37440 = (state_37453[(9)]);
var inst_37436 = (state_37453[(8)]);
var inst_37433 = (state_37453[(7)]);
var inst_37440__$1 = f.call(null,inst_37433,inst_37436);
var inst_37441 = cljs.core.reduced_QMARK_.call(null,inst_37440__$1);
var state_37453__$1 = (function (){var statearr_37461 = state_37453;
(statearr_37461[(9)] = inst_37440__$1);

return statearr_37461;
})();
if(inst_37441){
var statearr_37462_37477 = state_37453__$1;
(statearr_37462_37477[(1)] = (8));

} else {
var statearr_37463_37478 = state_37453__$1;
(statearr_37463_37478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (3))){
var inst_37451 = (state_37453[(2)]);
var state_37453__$1 = state_37453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37453__$1,inst_37451);
} else {
if((state_val_37454 === (2))){
var state_37453__$1 = state_37453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37453__$1,(4),ch);
} else {
if((state_val_37454 === (9))){
var inst_37440 = (state_37453[(9)]);
var inst_37433 = inst_37440;
var state_37453__$1 = (function (){var statearr_37464 = state_37453;
(statearr_37464[(7)] = inst_37433);

return statearr_37464;
})();
var statearr_37465_37479 = state_37453__$1;
(statearr_37465_37479[(2)] = null);

(statearr_37465_37479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (5))){
var inst_37433 = (state_37453[(7)]);
var state_37453__$1 = state_37453;
var statearr_37466_37480 = state_37453__$1;
(statearr_37466_37480[(2)] = inst_37433);

(statearr_37466_37480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (10))){
var inst_37447 = (state_37453[(2)]);
var state_37453__$1 = state_37453;
var statearr_37467_37481 = state_37453__$1;
(statearr_37467_37481[(2)] = inst_37447);

(statearr_37467_37481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (8))){
var inst_37440 = (state_37453[(9)]);
var inst_37443 = cljs.core.deref.call(null,inst_37440);
var state_37453__$1 = state_37453;
var statearr_37468_37482 = state_37453__$1;
(statearr_37468_37482[(2)] = inst_37443);

(statearr_37468_37482[(1)] = (10));


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
});})(c__22784__auto__))
;
return ((function (switch__22629__auto__,c__22784__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22630__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22630__auto____0 = (function (){
var statearr_37469 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37469[(0)] = cljs$core$async$reduce_$_state_machine__22630__auto__);

(statearr_37469[(1)] = (1));

return statearr_37469;
});
var cljs$core$async$reduce_$_state_machine__22630__auto____1 = (function (state_37453){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e37470){if((e37470 instanceof Object)){
var ex__22633__auto__ = e37470;
var statearr_37471_37483 = state_37453;
(statearr_37471_37483[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37484 = state_37453;
state_37453 = G__37484;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22630__auto__ = function(state_37453){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22630__auto____1.call(this,state_37453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22630__auto____0;
cljs$core$async$reduce_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22630__auto____1;
return cljs$core$async$reduce_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto__))
})();
var state__22786__auto__ = (function (){var statearr_37472 = f__22785__auto__.call(null);
(statearr_37472[(6)] = c__22784__auto__);

return statearr_37472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto__))
);

return c__22784__auto__;
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
var G__37486 = arguments.length;
switch (G__37486) {
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
var c__22784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto__){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto__){
return (function (state_37511){
var state_val_37512 = (state_37511[(1)]);
if((state_val_37512 === (7))){
var inst_37493 = (state_37511[(2)]);
var state_37511__$1 = state_37511;
var statearr_37513_37534 = state_37511__$1;
(statearr_37513_37534[(2)] = inst_37493);

(statearr_37513_37534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37512 === (1))){
var inst_37487 = cljs.core.seq.call(null,coll);
var inst_37488 = inst_37487;
var state_37511__$1 = (function (){var statearr_37514 = state_37511;
(statearr_37514[(7)] = inst_37488);

return statearr_37514;
})();
var statearr_37515_37535 = state_37511__$1;
(statearr_37515_37535[(2)] = null);

(statearr_37515_37535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37512 === (4))){
var inst_37488 = (state_37511[(7)]);
var inst_37491 = cljs.core.first.call(null,inst_37488);
var state_37511__$1 = state_37511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37511__$1,(7),ch,inst_37491);
} else {
if((state_val_37512 === (13))){
var inst_37505 = (state_37511[(2)]);
var state_37511__$1 = state_37511;
var statearr_37516_37536 = state_37511__$1;
(statearr_37516_37536[(2)] = inst_37505);

(statearr_37516_37536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37512 === (6))){
var inst_37496 = (state_37511[(2)]);
var state_37511__$1 = state_37511;
if(cljs.core.truth_(inst_37496)){
var statearr_37517_37537 = state_37511__$1;
(statearr_37517_37537[(1)] = (8));

} else {
var statearr_37518_37538 = state_37511__$1;
(statearr_37518_37538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37512 === (3))){
var inst_37509 = (state_37511[(2)]);
var state_37511__$1 = state_37511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37511__$1,inst_37509);
} else {
if((state_val_37512 === (12))){
var state_37511__$1 = state_37511;
var statearr_37519_37539 = state_37511__$1;
(statearr_37519_37539[(2)] = null);

(statearr_37519_37539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37512 === (2))){
var inst_37488 = (state_37511[(7)]);
var state_37511__$1 = state_37511;
if(cljs.core.truth_(inst_37488)){
var statearr_37520_37540 = state_37511__$1;
(statearr_37520_37540[(1)] = (4));

} else {
var statearr_37521_37541 = state_37511__$1;
(statearr_37521_37541[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37512 === (11))){
var inst_37502 = cljs.core.async.close_BANG_.call(null,ch);
var state_37511__$1 = state_37511;
var statearr_37522_37542 = state_37511__$1;
(statearr_37522_37542[(2)] = inst_37502);

(statearr_37522_37542[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37512 === (9))){
var state_37511__$1 = state_37511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37523_37543 = state_37511__$1;
(statearr_37523_37543[(1)] = (11));

} else {
var statearr_37524_37544 = state_37511__$1;
(statearr_37524_37544[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37512 === (5))){
var inst_37488 = (state_37511[(7)]);
var state_37511__$1 = state_37511;
var statearr_37525_37545 = state_37511__$1;
(statearr_37525_37545[(2)] = inst_37488);

(statearr_37525_37545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37512 === (10))){
var inst_37507 = (state_37511[(2)]);
var state_37511__$1 = state_37511;
var statearr_37526_37546 = state_37511__$1;
(statearr_37526_37546[(2)] = inst_37507);

(statearr_37526_37546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37512 === (8))){
var inst_37488 = (state_37511[(7)]);
var inst_37498 = cljs.core.next.call(null,inst_37488);
var inst_37488__$1 = inst_37498;
var state_37511__$1 = (function (){var statearr_37527 = state_37511;
(statearr_37527[(7)] = inst_37488__$1);

return statearr_37527;
})();
var statearr_37528_37547 = state_37511__$1;
(statearr_37528_37547[(2)] = null);

(statearr_37528_37547[(1)] = (2));


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
});})(c__22784__auto__))
;
return ((function (switch__22629__auto__,c__22784__auto__){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_37529 = [null,null,null,null,null,null,null,null];
(statearr_37529[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_37529[(1)] = (1));

return statearr_37529;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_37511){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e37530){if((e37530 instanceof Object)){
var ex__22633__auto__ = e37530;
var statearr_37531_37548 = state_37511;
(statearr_37531_37548[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37549 = state_37511;
state_37511 = G__37549;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_37511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_37511);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto__))
})();
var state__22786__auto__ = (function (){var statearr_37532 = f__22785__auto__.call(null);
(statearr_37532[(6)] = c__22784__auto__);

return statearr_37532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto__))
);

return c__22784__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async37550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37550 = (function (ch,cs,meta37551){
this.ch = ch;
this.cs = cs;
this.meta37551 = meta37551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37552,meta37551__$1){
var self__ = this;
var _37552__$1 = this;
return (new cljs.core.async.t_cljs$core$async37550(self__.ch,self__.cs,meta37551__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37552){
var self__ = this;
var _37552__$1 = this;
return self__.meta37551;
});})(cs))
;

cljs.core.async.t_cljs$core$async37550.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37550.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37550.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37550.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37550.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37550.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37550.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37551","meta37551",-215603308,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37550";

cljs.core.async.t_cljs$core$async37550.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37550");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37550.
 */
cljs.core.async.__GT_t_cljs$core$async37550 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37550(ch__$1,cs__$1,meta37551){
return (new cljs.core.async.t_cljs$core$async37550(ch__$1,cs__$1,meta37551));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37550(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22784__auto___37772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___37772,cs,m,dchan,dctr,done){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___37772,cs,m,dchan,dctr,done){
return (function (state_37687){
var state_val_37688 = (state_37687[(1)]);
if((state_val_37688 === (7))){
var inst_37683 = (state_37687[(2)]);
var state_37687__$1 = state_37687;
var statearr_37689_37773 = state_37687__$1;
(statearr_37689_37773[(2)] = inst_37683);

(statearr_37689_37773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (20))){
var inst_37586 = (state_37687[(7)]);
var inst_37598 = cljs.core.first.call(null,inst_37586);
var inst_37599 = cljs.core.nth.call(null,inst_37598,(0),null);
var inst_37600 = cljs.core.nth.call(null,inst_37598,(1),null);
var state_37687__$1 = (function (){var statearr_37690 = state_37687;
(statearr_37690[(8)] = inst_37599);

return statearr_37690;
})();
if(cljs.core.truth_(inst_37600)){
var statearr_37691_37774 = state_37687__$1;
(statearr_37691_37774[(1)] = (22));

} else {
var statearr_37692_37775 = state_37687__$1;
(statearr_37692_37775[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (27))){
var inst_37555 = (state_37687[(9)]);
var inst_37630 = (state_37687[(10)]);
var inst_37635 = (state_37687[(11)]);
var inst_37628 = (state_37687[(12)]);
var inst_37635__$1 = cljs.core._nth.call(null,inst_37628,inst_37630);
var inst_37636 = cljs.core.async.put_BANG_.call(null,inst_37635__$1,inst_37555,done);
var state_37687__$1 = (function (){var statearr_37693 = state_37687;
(statearr_37693[(11)] = inst_37635__$1);

return statearr_37693;
})();
if(cljs.core.truth_(inst_37636)){
var statearr_37694_37776 = state_37687__$1;
(statearr_37694_37776[(1)] = (30));

} else {
var statearr_37695_37777 = state_37687__$1;
(statearr_37695_37777[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (1))){
var state_37687__$1 = state_37687;
var statearr_37696_37778 = state_37687__$1;
(statearr_37696_37778[(2)] = null);

(statearr_37696_37778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (24))){
var inst_37586 = (state_37687[(7)]);
var inst_37605 = (state_37687[(2)]);
var inst_37606 = cljs.core.next.call(null,inst_37586);
var inst_37564 = inst_37606;
var inst_37565 = null;
var inst_37566 = (0);
var inst_37567 = (0);
var state_37687__$1 = (function (){var statearr_37697 = state_37687;
(statearr_37697[(13)] = inst_37564);

(statearr_37697[(14)] = inst_37565);

(statearr_37697[(15)] = inst_37605);

(statearr_37697[(16)] = inst_37567);

(statearr_37697[(17)] = inst_37566);

return statearr_37697;
})();
var statearr_37698_37779 = state_37687__$1;
(statearr_37698_37779[(2)] = null);

(statearr_37698_37779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (39))){
var state_37687__$1 = state_37687;
var statearr_37702_37780 = state_37687__$1;
(statearr_37702_37780[(2)] = null);

(statearr_37702_37780[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (4))){
var inst_37555 = (state_37687[(9)]);
var inst_37555__$1 = (state_37687[(2)]);
var inst_37556 = (inst_37555__$1 == null);
var state_37687__$1 = (function (){var statearr_37703 = state_37687;
(statearr_37703[(9)] = inst_37555__$1);

return statearr_37703;
})();
if(cljs.core.truth_(inst_37556)){
var statearr_37704_37781 = state_37687__$1;
(statearr_37704_37781[(1)] = (5));

} else {
var statearr_37705_37782 = state_37687__$1;
(statearr_37705_37782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (15))){
var inst_37564 = (state_37687[(13)]);
var inst_37565 = (state_37687[(14)]);
var inst_37567 = (state_37687[(16)]);
var inst_37566 = (state_37687[(17)]);
var inst_37582 = (state_37687[(2)]);
var inst_37583 = (inst_37567 + (1));
var tmp37699 = inst_37564;
var tmp37700 = inst_37565;
var tmp37701 = inst_37566;
var inst_37564__$1 = tmp37699;
var inst_37565__$1 = tmp37700;
var inst_37566__$1 = tmp37701;
var inst_37567__$1 = inst_37583;
var state_37687__$1 = (function (){var statearr_37706 = state_37687;
(statearr_37706[(13)] = inst_37564__$1);

(statearr_37706[(18)] = inst_37582);

(statearr_37706[(14)] = inst_37565__$1);

(statearr_37706[(16)] = inst_37567__$1);

(statearr_37706[(17)] = inst_37566__$1);

return statearr_37706;
})();
var statearr_37707_37783 = state_37687__$1;
(statearr_37707_37783[(2)] = null);

(statearr_37707_37783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (21))){
var inst_37609 = (state_37687[(2)]);
var state_37687__$1 = state_37687;
var statearr_37711_37784 = state_37687__$1;
(statearr_37711_37784[(2)] = inst_37609);

(statearr_37711_37784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (31))){
var inst_37635 = (state_37687[(11)]);
var inst_37639 = done.call(null,null);
var inst_37640 = cljs.core.async.untap_STAR_.call(null,m,inst_37635);
var state_37687__$1 = (function (){var statearr_37712 = state_37687;
(statearr_37712[(19)] = inst_37639);

return statearr_37712;
})();
var statearr_37713_37785 = state_37687__$1;
(statearr_37713_37785[(2)] = inst_37640);

(statearr_37713_37785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (32))){
var inst_37630 = (state_37687[(10)]);
var inst_37629 = (state_37687[(20)]);
var inst_37627 = (state_37687[(21)]);
var inst_37628 = (state_37687[(12)]);
var inst_37642 = (state_37687[(2)]);
var inst_37643 = (inst_37630 + (1));
var tmp37708 = inst_37629;
var tmp37709 = inst_37627;
var tmp37710 = inst_37628;
var inst_37627__$1 = tmp37709;
var inst_37628__$1 = tmp37710;
var inst_37629__$1 = tmp37708;
var inst_37630__$1 = inst_37643;
var state_37687__$1 = (function (){var statearr_37714 = state_37687;
(statearr_37714[(22)] = inst_37642);

(statearr_37714[(10)] = inst_37630__$1);

(statearr_37714[(20)] = inst_37629__$1);

(statearr_37714[(21)] = inst_37627__$1);

(statearr_37714[(12)] = inst_37628__$1);

return statearr_37714;
})();
var statearr_37715_37786 = state_37687__$1;
(statearr_37715_37786[(2)] = null);

(statearr_37715_37786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (40))){
var inst_37655 = (state_37687[(23)]);
var inst_37659 = done.call(null,null);
var inst_37660 = cljs.core.async.untap_STAR_.call(null,m,inst_37655);
var state_37687__$1 = (function (){var statearr_37716 = state_37687;
(statearr_37716[(24)] = inst_37659);

return statearr_37716;
})();
var statearr_37717_37787 = state_37687__$1;
(statearr_37717_37787[(2)] = inst_37660);

(statearr_37717_37787[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (33))){
var inst_37646 = (state_37687[(25)]);
var inst_37648 = cljs.core.chunked_seq_QMARK_.call(null,inst_37646);
var state_37687__$1 = state_37687;
if(inst_37648){
var statearr_37718_37788 = state_37687__$1;
(statearr_37718_37788[(1)] = (36));

} else {
var statearr_37719_37789 = state_37687__$1;
(statearr_37719_37789[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (13))){
var inst_37576 = (state_37687[(26)]);
var inst_37579 = cljs.core.async.close_BANG_.call(null,inst_37576);
var state_37687__$1 = state_37687;
var statearr_37720_37790 = state_37687__$1;
(statearr_37720_37790[(2)] = inst_37579);

(statearr_37720_37790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (22))){
var inst_37599 = (state_37687[(8)]);
var inst_37602 = cljs.core.async.close_BANG_.call(null,inst_37599);
var state_37687__$1 = state_37687;
var statearr_37721_37791 = state_37687__$1;
(statearr_37721_37791[(2)] = inst_37602);

(statearr_37721_37791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (36))){
var inst_37646 = (state_37687[(25)]);
var inst_37650 = cljs.core.chunk_first.call(null,inst_37646);
var inst_37651 = cljs.core.chunk_rest.call(null,inst_37646);
var inst_37652 = cljs.core.count.call(null,inst_37650);
var inst_37627 = inst_37651;
var inst_37628 = inst_37650;
var inst_37629 = inst_37652;
var inst_37630 = (0);
var state_37687__$1 = (function (){var statearr_37722 = state_37687;
(statearr_37722[(10)] = inst_37630);

(statearr_37722[(20)] = inst_37629);

(statearr_37722[(21)] = inst_37627);

(statearr_37722[(12)] = inst_37628);

return statearr_37722;
})();
var statearr_37723_37792 = state_37687__$1;
(statearr_37723_37792[(2)] = null);

(statearr_37723_37792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (41))){
var inst_37646 = (state_37687[(25)]);
var inst_37662 = (state_37687[(2)]);
var inst_37663 = cljs.core.next.call(null,inst_37646);
var inst_37627 = inst_37663;
var inst_37628 = null;
var inst_37629 = (0);
var inst_37630 = (0);
var state_37687__$1 = (function (){var statearr_37724 = state_37687;
(statearr_37724[(27)] = inst_37662);

(statearr_37724[(10)] = inst_37630);

(statearr_37724[(20)] = inst_37629);

(statearr_37724[(21)] = inst_37627);

(statearr_37724[(12)] = inst_37628);

return statearr_37724;
})();
var statearr_37725_37793 = state_37687__$1;
(statearr_37725_37793[(2)] = null);

(statearr_37725_37793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (43))){
var state_37687__$1 = state_37687;
var statearr_37726_37794 = state_37687__$1;
(statearr_37726_37794[(2)] = null);

(statearr_37726_37794[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (29))){
var inst_37671 = (state_37687[(2)]);
var state_37687__$1 = state_37687;
var statearr_37727_37795 = state_37687__$1;
(statearr_37727_37795[(2)] = inst_37671);

(statearr_37727_37795[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (44))){
var inst_37680 = (state_37687[(2)]);
var state_37687__$1 = (function (){var statearr_37728 = state_37687;
(statearr_37728[(28)] = inst_37680);

return statearr_37728;
})();
var statearr_37729_37796 = state_37687__$1;
(statearr_37729_37796[(2)] = null);

(statearr_37729_37796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (6))){
var inst_37619 = (state_37687[(29)]);
var inst_37618 = cljs.core.deref.call(null,cs);
var inst_37619__$1 = cljs.core.keys.call(null,inst_37618);
var inst_37620 = cljs.core.count.call(null,inst_37619__$1);
var inst_37621 = cljs.core.reset_BANG_.call(null,dctr,inst_37620);
var inst_37626 = cljs.core.seq.call(null,inst_37619__$1);
var inst_37627 = inst_37626;
var inst_37628 = null;
var inst_37629 = (0);
var inst_37630 = (0);
var state_37687__$1 = (function (){var statearr_37730 = state_37687;
(statearr_37730[(30)] = inst_37621);

(statearr_37730[(10)] = inst_37630);

(statearr_37730[(20)] = inst_37629);

(statearr_37730[(21)] = inst_37627);

(statearr_37730[(29)] = inst_37619__$1);

(statearr_37730[(12)] = inst_37628);

return statearr_37730;
})();
var statearr_37731_37797 = state_37687__$1;
(statearr_37731_37797[(2)] = null);

(statearr_37731_37797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (28))){
var inst_37646 = (state_37687[(25)]);
var inst_37627 = (state_37687[(21)]);
var inst_37646__$1 = cljs.core.seq.call(null,inst_37627);
var state_37687__$1 = (function (){var statearr_37732 = state_37687;
(statearr_37732[(25)] = inst_37646__$1);

return statearr_37732;
})();
if(inst_37646__$1){
var statearr_37733_37798 = state_37687__$1;
(statearr_37733_37798[(1)] = (33));

} else {
var statearr_37734_37799 = state_37687__$1;
(statearr_37734_37799[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (25))){
var inst_37630 = (state_37687[(10)]);
var inst_37629 = (state_37687[(20)]);
var inst_37632 = (inst_37630 < inst_37629);
var inst_37633 = inst_37632;
var state_37687__$1 = state_37687;
if(cljs.core.truth_(inst_37633)){
var statearr_37735_37800 = state_37687__$1;
(statearr_37735_37800[(1)] = (27));

} else {
var statearr_37736_37801 = state_37687__$1;
(statearr_37736_37801[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (34))){
var state_37687__$1 = state_37687;
var statearr_37737_37802 = state_37687__$1;
(statearr_37737_37802[(2)] = null);

(statearr_37737_37802[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (17))){
var state_37687__$1 = state_37687;
var statearr_37738_37803 = state_37687__$1;
(statearr_37738_37803[(2)] = null);

(statearr_37738_37803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (3))){
var inst_37685 = (state_37687[(2)]);
var state_37687__$1 = state_37687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37687__$1,inst_37685);
} else {
if((state_val_37688 === (12))){
var inst_37614 = (state_37687[(2)]);
var state_37687__$1 = state_37687;
var statearr_37739_37804 = state_37687__$1;
(statearr_37739_37804[(2)] = inst_37614);

(statearr_37739_37804[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (2))){
var state_37687__$1 = state_37687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37687__$1,(4),ch);
} else {
if((state_val_37688 === (23))){
var state_37687__$1 = state_37687;
var statearr_37740_37805 = state_37687__$1;
(statearr_37740_37805[(2)] = null);

(statearr_37740_37805[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (35))){
var inst_37669 = (state_37687[(2)]);
var state_37687__$1 = state_37687;
var statearr_37741_37806 = state_37687__$1;
(statearr_37741_37806[(2)] = inst_37669);

(statearr_37741_37806[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (19))){
var inst_37586 = (state_37687[(7)]);
var inst_37590 = cljs.core.chunk_first.call(null,inst_37586);
var inst_37591 = cljs.core.chunk_rest.call(null,inst_37586);
var inst_37592 = cljs.core.count.call(null,inst_37590);
var inst_37564 = inst_37591;
var inst_37565 = inst_37590;
var inst_37566 = inst_37592;
var inst_37567 = (0);
var state_37687__$1 = (function (){var statearr_37742 = state_37687;
(statearr_37742[(13)] = inst_37564);

(statearr_37742[(14)] = inst_37565);

(statearr_37742[(16)] = inst_37567);

(statearr_37742[(17)] = inst_37566);

return statearr_37742;
})();
var statearr_37743_37807 = state_37687__$1;
(statearr_37743_37807[(2)] = null);

(statearr_37743_37807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (11))){
var inst_37564 = (state_37687[(13)]);
var inst_37586 = (state_37687[(7)]);
var inst_37586__$1 = cljs.core.seq.call(null,inst_37564);
var state_37687__$1 = (function (){var statearr_37744 = state_37687;
(statearr_37744[(7)] = inst_37586__$1);

return statearr_37744;
})();
if(inst_37586__$1){
var statearr_37745_37808 = state_37687__$1;
(statearr_37745_37808[(1)] = (16));

} else {
var statearr_37746_37809 = state_37687__$1;
(statearr_37746_37809[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (9))){
var inst_37616 = (state_37687[(2)]);
var state_37687__$1 = state_37687;
var statearr_37747_37810 = state_37687__$1;
(statearr_37747_37810[(2)] = inst_37616);

(statearr_37747_37810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (5))){
var inst_37562 = cljs.core.deref.call(null,cs);
var inst_37563 = cljs.core.seq.call(null,inst_37562);
var inst_37564 = inst_37563;
var inst_37565 = null;
var inst_37566 = (0);
var inst_37567 = (0);
var state_37687__$1 = (function (){var statearr_37748 = state_37687;
(statearr_37748[(13)] = inst_37564);

(statearr_37748[(14)] = inst_37565);

(statearr_37748[(16)] = inst_37567);

(statearr_37748[(17)] = inst_37566);

return statearr_37748;
})();
var statearr_37749_37811 = state_37687__$1;
(statearr_37749_37811[(2)] = null);

(statearr_37749_37811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (14))){
var state_37687__$1 = state_37687;
var statearr_37750_37812 = state_37687__$1;
(statearr_37750_37812[(2)] = null);

(statearr_37750_37812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (45))){
var inst_37677 = (state_37687[(2)]);
var state_37687__$1 = state_37687;
var statearr_37751_37813 = state_37687__$1;
(statearr_37751_37813[(2)] = inst_37677);

(statearr_37751_37813[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (26))){
var inst_37619 = (state_37687[(29)]);
var inst_37673 = (state_37687[(2)]);
var inst_37674 = cljs.core.seq.call(null,inst_37619);
var state_37687__$1 = (function (){var statearr_37752 = state_37687;
(statearr_37752[(31)] = inst_37673);

return statearr_37752;
})();
if(inst_37674){
var statearr_37753_37814 = state_37687__$1;
(statearr_37753_37814[(1)] = (42));

} else {
var statearr_37754_37815 = state_37687__$1;
(statearr_37754_37815[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (16))){
var inst_37586 = (state_37687[(7)]);
var inst_37588 = cljs.core.chunked_seq_QMARK_.call(null,inst_37586);
var state_37687__$1 = state_37687;
if(inst_37588){
var statearr_37755_37816 = state_37687__$1;
(statearr_37755_37816[(1)] = (19));

} else {
var statearr_37756_37817 = state_37687__$1;
(statearr_37756_37817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (38))){
var inst_37666 = (state_37687[(2)]);
var state_37687__$1 = state_37687;
var statearr_37757_37818 = state_37687__$1;
(statearr_37757_37818[(2)] = inst_37666);

(statearr_37757_37818[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (30))){
var state_37687__$1 = state_37687;
var statearr_37758_37819 = state_37687__$1;
(statearr_37758_37819[(2)] = null);

(statearr_37758_37819[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (10))){
var inst_37565 = (state_37687[(14)]);
var inst_37567 = (state_37687[(16)]);
var inst_37575 = cljs.core._nth.call(null,inst_37565,inst_37567);
var inst_37576 = cljs.core.nth.call(null,inst_37575,(0),null);
var inst_37577 = cljs.core.nth.call(null,inst_37575,(1),null);
var state_37687__$1 = (function (){var statearr_37759 = state_37687;
(statearr_37759[(26)] = inst_37576);

return statearr_37759;
})();
if(cljs.core.truth_(inst_37577)){
var statearr_37760_37820 = state_37687__$1;
(statearr_37760_37820[(1)] = (13));

} else {
var statearr_37761_37821 = state_37687__$1;
(statearr_37761_37821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (18))){
var inst_37612 = (state_37687[(2)]);
var state_37687__$1 = state_37687;
var statearr_37762_37822 = state_37687__$1;
(statearr_37762_37822[(2)] = inst_37612);

(statearr_37762_37822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (42))){
var state_37687__$1 = state_37687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37687__$1,(45),dchan);
} else {
if((state_val_37688 === (37))){
var inst_37646 = (state_37687[(25)]);
var inst_37555 = (state_37687[(9)]);
var inst_37655 = (state_37687[(23)]);
var inst_37655__$1 = cljs.core.first.call(null,inst_37646);
var inst_37656 = cljs.core.async.put_BANG_.call(null,inst_37655__$1,inst_37555,done);
var state_37687__$1 = (function (){var statearr_37763 = state_37687;
(statearr_37763[(23)] = inst_37655__$1);

return statearr_37763;
})();
if(cljs.core.truth_(inst_37656)){
var statearr_37764_37823 = state_37687__$1;
(statearr_37764_37823[(1)] = (39));

} else {
var statearr_37765_37824 = state_37687__$1;
(statearr_37765_37824[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37688 === (8))){
var inst_37567 = (state_37687[(16)]);
var inst_37566 = (state_37687[(17)]);
var inst_37569 = (inst_37567 < inst_37566);
var inst_37570 = inst_37569;
var state_37687__$1 = state_37687;
if(cljs.core.truth_(inst_37570)){
var statearr_37766_37825 = state_37687__$1;
(statearr_37766_37825[(1)] = (10));

} else {
var statearr_37767_37826 = state_37687__$1;
(statearr_37767_37826[(1)] = (11));

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
});})(c__22784__auto___37772,cs,m,dchan,dctr,done))
;
return ((function (switch__22629__auto__,c__22784__auto___37772,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22630__auto__ = null;
var cljs$core$async$mult_$_state_machine__22630__auto____0 = (function (){
var statearr_37768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37768[(0)] = cljs$core$async$mult_$_state_machine__22630__auto__);

(statearr_37768[(1)] = (1));

return statearr_37768;
});
var cljs$core$async$mult_$_state_machine__22630__auto____1 = (function (state_37687){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e37769){if((e37769 instanceof Object)){
var ex__22633__auto__ = e37769;
var statearr_37770_37827 = state_37687;
(statearr_37770_37827[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37828 = state_37687;
state_37687 = G__37828;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22630__auto__ = function(state_37687){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22630__auto____1.call(this,state_37687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22630__auto____0;
cljs$core$async$mult_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22630__auto____1;
return cljs$core$async$mult_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___37772,cs,m,dchan,dctr,done))
})();
var state__22786__auto__ = (function (){var statearr_37771 = f__22785__auto__.call(null);
(statearr_37771[(6)] = c__22784__auto___37772);

return statearr_37771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___37772,cs,m,dchan,dctr,done))
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
var G__37830 = arguments.length;
switch (G__37830) {
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
var len__4499__auto___37842 = arguments.length;
var i__4500__auto___37843 = (0);
while(true){
if((i__4500__auto___37843 < len__4499__auto___37842)){
args__4502__auto__.push((arguments[i__4500__auto___37843]));

var G__37844 = (i__4500__auto___37843 + (1));
i__4500__auto___37843 = G__37844;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37836){
var map__37837 = p__37836;
var map__37837__$1 = ((((!((map__37837 == null)))?(((((map__37837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37837):map__37837);
var opts = map__37837__$1;
var statearr_37839_37845 = state;
(statearr_37839_37845[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37837,map__37837__$1,opts){
return (function (val){
var statearr_37840_37846 = state;
(statearr_37840_37846[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37837,map__37837__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37841_37847 = state;
(statearr_37841_37847[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37832){
var G__37833 = cljs.core.first.call(null,seq37832);
var seq37832__$1 = cljs.core.next.call(null,seq37832);
var G__37834 = cljs.core.first.call(null,seq37832__$1);
var seq37832__$2 = cljs.core.next.call(null,seq37832__$1);
var G__37835 = cljs.core.first.call(null,seq37832__$2);
var seq37832__$3 = cljs.core.next.call(null,seq37832__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37833,G__37834,G__37835,seq37832__$3);
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
if(typeof cljs.core.async.t_cljs$core$async37848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37848 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta37849){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta37849 = meta37849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37850,meta37849__$1){
var self__ = this;
var _37850__$1 = this;
return (new cljs.core.async.t_cljs$core$async37848(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta37849__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37850){
var self__ = this;
var _37850__$1 = this;
return self__.meta37849;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37848.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async37848.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta37849","meta37849",1684049120,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37848";

cljs.core.async.t_cljs$core$async37848.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37848");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37848.
 */
cljs.core.async.__GT_t_cljs$core$async37848 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37848(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37849){
return (new cljs.core.async.t_cljs$core$async37848(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37849));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37848(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22784__auto___38012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37952){
var state_val_37953 = (state_37952[(1)]);
if((state_val_37953 === (7))){
var inst_37867 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
var statearr_37954_38013 = state_37952__$1;
(statearr_37954_38013[(2)] = inst_37867);

(statearr_37954_38013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (20))){
var inst_37879 = (state_37952[(7)]);
var state_37952__$1 = state_37952;
var statearr_37955_38014 = state_37952__$1;
(statearr_37955_38014[(2)] = inst_37879);

(statearr_37955_38014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (27))){
var state_37952__$1 = state_37952;
var statearr_37956_38015 = state_37952__$1;
(statearr_37956_38015[(2)] = null);

(statearr_37956_38015[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (1))){
var inst_37854 = (state_37952[(8)]);
var inst_37854__$1 = calc_state.call(null);
var inst_37856 = (inst_37854__$1 == null);
var inst_37857 = cljs.core.not.call(null,inst_37856);
var state_37952__$1 = (function (){var statearr_37957 = state_37952;
(statearr_37957[(8)] = inst_37854__$1);

return statearr_37957;
})();
if(inst_37857){
var statearr_37958_38016 = state_37952__$1;
(statearr_37958_38016[(1)] = (2));

} else {
var statearr_37959_38017 = state_37952__$1;
(statearr_37959_38017[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (24))){
var inst_37912 = (state_37952[(9)]);
var inst_37903 = (state_37952[(10)]);
var inst_37926 = (state_37952[(11)]);
var inst_37926__$1 = inst_37903.call(null,inst_37912);
var state_37952__$1 = (function (){var statearr_37960 = state_37952;
(statearr_37960[(11)] = inst_37926__$1);

return statearr_37960;
})();
if(cljs.core.truth_(inst_37926__$1)){
var statearr_37961_38018 = state_37952__$1;
(statearr_37961_38018[(1)] = (29));

} else {
var statearr_37962_38019 = state_37952__$1;
(statearr_37962_38019[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (4))){
var inst_37870 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
if(cljs.core.truth_(inst_37870)){
var statearr_37963_38020 = state_37952__$1;
(statearr_37963_38020[(1)] = (8));

} else {
var statearr_37964_38021 = state_37952__$1;
(statearr_37964_38021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (15))){
var inst_37897 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
if(cljs.core.truth_(inst_37897)){
var statearr_37965_38022 = state_37952__$1;
(statearr_37965_38022[(1)] = (19));

} else {
var statearr_37966_38023 = state_37952__$1;
(statearr_37966_38023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (21))){
var inst_37902 = (state_37952[(12)]);
var inst_37902__$1 = (state_37952[(2)]);
var inst_37903 = cljs.core.get.call(null,inst_37902__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37904 = cljs.core.get.call(null,inst_37902__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37905 = cljs.core.get.call(null,inst_37902__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37952__$1 = (function (){var statearr_37967 = state_37952;
(statearr_37967[(12)] = inst_37902__$1);

(statearr_37967[(10)] = inst_37903);

(statearr_37967[(13)] = inst_37904);

return statearr_37967;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37952__$1,(22),inst_37905);
} else {
if((state_val_37953 === (31))){
var inst_37934 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
if(cljs.core.truth_(inst_37934)){
var statearr_37968_38024 = state_37952__$1;
(statearr_37968_38024[(1)] = (32));

} else {
var statearr_37969_38025 = state_37952__$1;
(statearr_37969_38025[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (32))){
var inst_37911 = (state_37952[(14)]);
var state_37952__$1 = state_37952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37952__$1,(35),out,inst_37911);
} else {
if((state_val_37953 === (33))){
var inst_37902 = (state_37952[(12)]);
var inst_37879 = inst_37902;
var state_37952__$1 = (function (){var statearr_37970 = state_37952;
(statearr_37970[(7)] = inst_37879);

return statearr_37970;
})();
var statearr_37971_38026 = state_37952__$1;
(statearr_37971_38026[(2)] = null);

(statearr_37971_38026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (13))){
var inst_37879 = (state_37952[(7)]);
var inst_37886 = inst_37879.cljs$lang$protocol_mask$partition0$;
var inst_37887 = (inst_37886 & (64));
var inst_37888 = inst_37879.cljs$core$ISeq$;
var inst_37889 = (cljs.core.PROTOCOL_SENTINEL === inst_37888);
var inst_37890 = ((inst_37887) || (inst_37889));
var state_37952__$1 = state_37952;
if(cljs.core.truth_(inst_37890)){
var statearr_37972_38027 = state_37952__$1;
(statearr_37972_38027[(1)] = (16));

} else {
var statearr_37973_38028 = state_37952__$1;
(statearr_37973_38028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (22))){
var inst_37912 = (state_37952[(9)]);
var inst_37911 = (state_37952[(14)]);
var inst_37910 = (state_37952[(2)]);
var inst_37911__$1 = cljs.core.nth.call(null,inst_37910,(0),null);
var inst_37912__$1 = cljs.core.nth.call(null,inst_37910,(1),null);
var inst_37913 = (inst_37911__$1 == null);
var inst_37914 = cljs.core._EQ_.call(null,inst_37912__$1,change);
var inst_37915 = ((inst_37913) || (inst_37914));
var state_37952__$1 = (function (){var statearr_37974 = state_37952;
(statearr_37974[(9)] = inst_37912__$1);

(statearr_37974[(14)] = inst_37911__$1);

return statearr_37974;
})();
if(cljs.core.truth_(inst_37915)){
var statearr_37975_38029 = state_37952__$1;
(statearr_37975_38029[(1)] = (23));

} else {
var statearr_37976_38030 = state_37952__$1;
(statearr_37976_38030[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (36))){
var inst_37902 = (state_37952[(12)]);
var inst_37879 = inst_37902;
var state_37952__$1 = (function (){var statearr_37977 = state_37952;
(statearr_37977[(7)] = inst_37879);

return statearr_37977;
})();
var statearr_37978_38031 = state_37952__$1;
(statearr_37978_38031[(2)] = null);

(statearr_37978_38031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (29))){
var inst_37926 = (state_37952[(11)]);
var state_37952__$1 = state_37952;
var statearr_37979_38032 = state_37952__$1;
(statearr_37979_38032[(2)] = inst_37926);

(statearr_37979_38032[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (6))){
var state_37952__$1 = state_37952;
var statearr_37980_38033 = state_37952__$1;
(statearr_37980_38033[(2)] = false);

(statearr_37980_38033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (28))){
var inst_37922 = (state_37952[(2)]);
var inst_37923 = calc_state.call(null);
var inst_37879 = inst_37923;
var state_37952__$1 = (function (){var statearr_37981 = state_37952;
(statearr_37981[(7)] = inst_37879);

(statearr_37981[(15)] = inst_37922);

return statearr_37981;
})();
var statearr_37982_38034 = state_37952__$1;
(statearr_37982_38034[(2)] = null);

(statearr_37982_38034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (25))){
var inst_37948 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
var statearr_37983_38035 = state_37952__$1;
(statearr_37983_38035[(2)] = inst_37948);

(statearr_37983_38035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (34))){
var inst_37946 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
var statearr_37984_38036 = state_37952__$1;
(statearr_37984_38036[(2)] = inst_37946);

(statearr_37984_38036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (17))){
var state_37952__$1 = state_37952;
var statearr_37985_38037 = state_37952__$1;
(statearr_37985_38037[(2)] = false);

(statearr_37985_38037[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (3))){
var state_37952__$1 = state_37952;
var statearr_37986_38038 = state_37952__$1;
(statearr_37986_38038[(2)] = false);

(statearr_37986_38038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (12))){
var inst_37950 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37952__$1,inst_37950);
} else {
if((state_val_37953 === (2))){
var inst_37854 = (state_37952[(8)]);
var inst_37859 = inst_37854.cljs$lang$protocol_mask$partition0$;
var inst_37860 = (inst_37859 & (64));
var inst_37861 = inst_37854.cljs$core$ISeq$;
var inst_37862 = (cljs.core.PROTOCOL_SENTINEL === inst_37861);
var inst_37863 = ((inst_37860) || (inst_37862));
var state_37952__$1 = state_37952;
if(cljs.core.truth_(inst_37863)){
var statearr_37987_38039 = state_37952__$1;
(statearr_37987_38039[(1)] = (5));

} else {
var statearr_37988_38040 = state_37952__$1;
(statearr_37988_38040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (23))){
var inst_37911 = (state_37952[(14)]);
var inst_37917 = (inst_37911 == null);
var state_37952__$1 = state_37952;
if(cljs.core.truth_(inst_37917)){
var statearr_37989_38041 = state_37952__$1;
(statearr_37989_38041[(1)] = (26));

} else {
var statearr_37990_38042 = state_37952__$1;
(statearr_37990_38042[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (35))){
var inst_37937 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
if(cljs.core.truth_(inst_37937)){
var statearr_37991_38043 = state_37952__$1;
(statearr_37991_38043[(1)] = (36));

} else {
var statearr_37992_38044 = state_37952__$1;
(statearr_37992_38044[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (19))){
var inst_37879 = (state_37952[(7)]);
var inst_37899 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37879);
var state_37952__$1 = state_37952;
var statearr_37993_38045 = state_37952__$1;
(statearr_37993_38045[(2)] = inst_37899);

(statearr_37993_38045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (11))){
var inst_37879 = (state_37952[(7)]);
var inst_37883 = (inst_37879 == null);
var inst_37884 = cljs.core.not.call(null,inst_37883);
var state_37952__$1 = state_37952;
if(inst_37884){
var statearr_37994_38046 = state_37952__$1;
(statearr_37994_38046[(1)] = (13));

} else {
var statearr_37995_38047 = state_37952__$1;
(statearr_37995_38047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (9))){
var inst_37854 = (state_37952[(8)]);
var state_37952__$1 = state_37952;
var statearr_37996_38048 = state_37952__$1;
(statearr_37996_38048[(2)] = inst_37854);

(statearr_37996_38048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (5))){
var state_37952__$1 = state_37952;
var statearr_37997_38049 = state_37952__$1;
(statearr_37997_38049[(2)] = true);

(statearr_37997_38049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (14))){
var state_37952__$1 = state_37952;
var statearr_37998_38050 = state_37952__$1;
(statearr_37998_38050[(2)] = false);

(statearr_37998_38050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (26))){
var inst_37912 = (state_37952[(9)]);
var inst_37919 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37912);
var state_37952__$1 = state_37952;
var statearr_37999_38051 = state_37952__$1;
(statearr_37999_38051[(2)] = inst_37919);

(statearr_37999_38051[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (16))){
var state_37952__$1 = state_37952;
var statearr_38000_38052 = state_37952__$1;
(statearr_38000_38052[(2)] = true);

(statearr_38000_38052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (38))){
var inst_37942 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
var statearr_38001_38053 = state_37952__$1;
(statearr_38001_38053[(2)] = inst_37942);

(statearr_38001_38053[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (30))){
var inst_37912 = (state_37952[(9)]);
var inst_37903 = (state_37952[(10)]);
var inst_37904 = (state_37952[(13)]);
var inst_37929 = cljs.core.empty_QMARK_.call(null,inst_37903);
var inst_37930 = inst_37904.call(null,inst_37912);
var inst_37931 = cljs.core.not.call(null,inst_37930);
var inst_37932 = ((inst_37929) && (inst_37931));
var state_37952__$1 = state_37952;
var statearr_38002_38054 = state_37952__$1;
(statearr_38002_38054[(2)] = inst_37932);

(statearr_38002_38054[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (10))){
var inst_37854 = (state_37952[(8)]);
var inst_37875 = (state_37952[(2)]);
var inst_37876 = cljs.core.get.call(null,inst_37875,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37877 = cljs.core.get.call(null,inst_37875,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37878 = cljs.core.get.call(null,inst_37875,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37879 = inst_37854;
var state_37952__$1 = (function (){var statearr_38003 = state_37952;
(statearr_38003[(16)] = inst_37877);

(statearr_38003[(7)] = inst_37879);

(statearr_38003[(17)] = inst_37876);

(statearr_38003[(18)] = inst_37878);

return statearr_38003;
})();
var statearr_38004_38055 = state_37952__$1;
(statearr_38004_38055[(2)] = null);

(statearr_38004_38055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (18))){
var inst_37894 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
var statearr_38005_38056 = state_37952__$1;
(statearr_38005_38056[(2)] = inst_37894);

(statearr_38005_38056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (37))){
var state_37952__$1 = state_37952;
var statearr_38006_38057 = state_37952__$1;
(statearr_38006_38057[(2)] = null);

(statearr_38006_38057[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (8))){
var inst_37854 = (state_37952[(8)]);
var inst_37872 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37854);
var state_37952__$1 = state_37952;
var statearr_38007_38058 = state_37952__$1;
(statearr_38007_38058[(2)] = inst_37872);

(statearr_38007_38058[(1)] = (10));


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
});})(c__22784__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22629__auto__,c__22784__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22630__auto__ = null;
var cljs$core$async$mix_$_state_machine__22630__auto____0 = (function (){
var statearr_38008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38008[(0)] = cljs$core$async$mix_$_state_machine__22630__auto__);

(statearr_38008[(1)] = (1));

return statearr_38008;
});
var cljs$core$async$mix_$_state_machine__22630__auto____1 = (function (state_37952){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_37952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e38009){if((e38009 instanceof Object)){
var ex__22633__auto__ = e38009;
var statearr_38010_38059 = state_37952;
(statearr_38010_38059[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38060 = state_37952;
state_37952 = G__38060;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22630__auto__ = function(state_37952){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22630__auto____1.call(this,state_37952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22630__auto____0;
cljs$core$async$mix_$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22630__auto____1;
return cljs$core$async$mix_$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22786__auto__ = (function (){var statearr_38011 = f__22785__auto__.call(null);
(statearr_38011[(6)] = c__22784__auto___38012);

return statearr_38011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___38012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__38062 = arguments.length;
switch (G__38062) {
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
var G__38066 = arguments.length;
switch (G__38066) {
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
return (function (p1__38064_SHARP_){
if(cljs.core.truth_(p1__38064_SHARP_.call(null,topic))){
return p1__38064_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38064_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38067 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38068){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38068 = meta38068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38069,meta38068__$1){
var self__ = this;
var _38069__$1 = this;
return (new cljs.core.async.t_cljs$core$async38067(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38068__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38069){
var self__ = this;
var _38069__$1 = this;
return self__.meta38068;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38067.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38067.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38067.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38067.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38067.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38068","meta38068",344726576,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38067";

cljs.core.async.t_cljs$core$async38067.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38067");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38067.
 */
cljs.core.async.__GT_t_cljs$core$async38067 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38067(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38068){
return (new cljs.core.async.t_cljs$core$async38067(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38068));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38067(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22784__auto___38187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___38187,mults,ensure_mult,p){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___38187,mults,ensure_mult,p){
return (function (state_38141){
var state_val_38142 = (state_38141[(1)]);
if((state_val_38142 === (7))){
var inst_38137 = (state_38141[(2)]);
var state_38141__$1 = state_38141;
var statearr_38143_38188 = state_38141__$1;
(statearr_38143_38188[(2)] = inst_38137);

(statearr_38143_38188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (20))){
var state_38141__$1 = state_38141;
var statearr_38144_38189 = state_38141__$1;
(statearr_38144_38189[(2)] = null);

(statearr_38144_38189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (1))){
var state_38141__$1 = state_38141;
var statearr_38145_38190 = state_38141__$1;
(statearr_38145_38190[(2)] = null);

(statearr_38145_38190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (24))){
var inst_38120 = (state_38141[(7)]);
var inst_38129 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38120);
var state_38141__$1 = state_38141;
var statearr_38146_38191 = state_38141__$1;
(statearr_38146_38191[(2)] = inst_38129);

(statearr_38146_38191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (4))){
var inst_38072 = (state_38141[(8)]);
var inst_38072__$1 = (state_38141[(2)]);
var inst_38073 = (inst_38072__$1 == null);
var state_38141__$1 = (function (){var statearr_38147 = state_38141;
(statearr_38147[(8)] = inst_38072__$1);

return statearr_38147;
})();
if(cljs.core.truth_(inst_38073)){
var statearr_38148_38192 = state_38141__$1;
(statearr_38148_38192[(1)] = (5));

} else {
var statearr_38149_38193 = state_38141__$1;
(statearr_38149_38193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (15))){
var inst_38114 = (state_38141[(2)]);
var state_38141__$1 = state_38141;
var statearr_38150_38194 = state_38141__$1;
(statearr_38150_38194[(2)] = inst_38114);

(statearr_38150_38194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (21))){
var inst_38134 = (state_38141[(2)]);
var state_38141__$1 = (function (){var statearr_38151 = state_38141;
(statearr_38151[(9)] = inst_38134);

return statearr_38151;
})();
var statearr_38152_38195 = state_38141__$1;
(statearr_38152_38195[(2)] = null);

(statearr_38152_38195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (13))){
var inst_38096 = (state_38141[(10)]);
var inst_38098 = cljs.core.chunked_seq_QMARK_.call(null,inst_38096);
var state_38141__$1 = state_38141;
if(inst_38098){
var statearr_38153_38196 = state_38141__$1;
(statearr_38153_38196[(1)] = (16));

} else {
var statearr_38154_38197 = state_38141__$1;
(statearr_38154_38197[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (22))){
var inst_38126 = (state_38141[(2)]);
var state_38141__$1 = state_38141;
if(cljs.core.truth_(inst_38126)){
var statearr_38155_38198 = state_38141__$1;
(statearr_38155_38198[(1)] = (23));

} else {
var statearr_38156_38199 = state_38141__$1;
(statearr_38156_38199[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (6))){
var inst_38122 = (state_38141[(11)]);
var inst_38072 = (state_38141[(8)]);
var inst_38120 = (state_38141[(7)]);
var inst_38120__$1 = topic_fn.call(null,inst_38072);
var inst_38121 = cljs.core.deref.call(null,mults);
var inst_38122__$1 = cljs.core.get.call(null,inst_38121,inst_38120__$1);
var state_38141__$1 = (function (){var statearr_38157 = state_38141;
(statearr_38157[(11)] = inst_38122__$1);

(statearr_38157[(7)] = inst_38120__$1);

return statearr_38157;
})();
if(cljs.core.truth_(inst_38122__$1)){
var statearr_38158_38200 = state_38141__$1;
(statearr_38158_38200[(1)] = (19));

} else {
var statearr_38159_38201 = state_38141__$1;
(statearr_38159_38201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (25))){
var inst_38131 = (state_38141[(2)]);
var state_38141__$1 = state_38141;
var statearr_38160_38202 = state_38141__$1;
(statearr_38160_38202[(2)] = inst_38131);

(statearr_38160_38202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (17))){
var inst_38096 = (state_38141[(10)]);
var inst_38105 = cljs.core.first.call(null,inst_38096);
var inst_38106 = cljs.core.async.muxch_STAR_.call(null,inst_38105);
var inst_38107 = cljs.core.async.close_BANG_.call(null,inst_38106);
var inst_38108 = cljs.core.next.call(null,inst_38096);
var inst_38082 = inst_38108;
var inst_38083 = null;
var inst_38084 = (0);
var inst_38085 = (0);
var state_38141__$1 = (function (){var statearr_38161 = state_38141;
(statearr_38161[(12)] = inst_38083);

(statearr_38161[(13)] = inst_38082);

(statearr_38161[(14)] = inst_38084);

(statearr_38161[(15)] = inst_38107);

(statearr_38161[(16)] = inst_38085);

return statearr_38161;
})();
var statearr_38162_38203 = state_38141__$1;
(statearr_38162_38203[(2)] = null);

(statearr_38162_38203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (3))){
var inst_38139 = (state_38141[(2)]);
var state_38141__$1 = state_38141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38141__$1,inst_38139);
} else {
if((state_val_38142 === (12))){
var inst_38116 = (state_38141[(2)]);
var state_38141__$1 = state_38141;
var statearr_38163_38204 = state_38141__$1;
(statearr_38163_38204[(2)] = inst_38116);

(statearr_38163_38204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (2))){
var state_38141__$1 = state_38141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38141__$1,(4),ch);
} else {
if((state_val_38142 === (23))){
var state_38141__$1 = state_38141;
var statearr_38164_38205 = state_38141__$1;
(statearr_38164_38205[(2)] = null);

(statearr_38164_38205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (19))){
var inst_38122 = (state_38141[(11)]);
var inst_38072 = (state_38141[(8)]);
var inst_38124 = cljs.core.async.muxch_STAR_.call(null,inst_38122);
var state_38141__$1 = state_38141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38141__$1,(22),inst_38124,inst_38072);
} else {
if((state_val_38142 === (11))){
var inst_38096 = (state_38141[(10)]);
var inst_38082 = (state_38141[(13)]);
var inst_38096__$1 = cljs.core.seq.call(null,inst_38082);
var state_38141__$1 = (function (){var statearr_38165 = state_38141;
(statearr_38165[(10)] = inst_38096__$1);

return statearr_38165;
})();
if(inst_38096__$1){
var statearr_38166_38206 = state_38141__$1;
(statearr_38166_38206[(1)] = (13));

} else {
var statearr_38167_38207 = state_38141__$1;
(statearr_38167_38207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (9))){
var inst_38118 = (state_38141[(2)]);
var state_38141__$1 = state_38141;
var statearr_38168_38208 = state_38141__$1;
(statearr_38168_38208[(2)] = inst_38118);

(statearr_38168_38208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (5))){
var inst_38079 = cljs.core.deref.call(null,mults);
var inst_38080 = cljs.core.vals.call(null,inst_38079);
var inst_38081 = cljs.core.seq.call(null,inst_38080);
var inst_38082 = inst_38081;
var inst_38083 = null;
var inst_38084 = (0);
var inst_38085 = (0);
var state_38141__$1 = (function (){var statearr_38169 = state_38141;
(statearr_38169[(12)] = inst_38083);

(statearr_38169[(13)] = inst_38082);

(statearr_38169[(14)] = inst_38084);

(statearr_38169[(16)] = inst_38085);

return statearr_38169;
})();
var statearr_38170_38209 = state_38141__$1;
(statearr_38170_38209[(2)] = null);

(statearr_38170_38209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (14))){
var state_38141__$1 = state_38141;
var statearr_38174_38210 = state_38141__$1;
(statearr_38174_38210[(2)] = null);

(statearr_38174_38210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (16))){
var inst_38096 = (state_38141[(10)]);
var inst_38100 = cljs.core.chunk_first.call(null,inst_38096);
var inst_38101 = cljs.core.chunk_rest.call(null,inst_38096);
var inst_38102 = cljs.core.count.call(null,inst_38100);
var inst_38082 = inst_38101;
var inst_38083 = inst_38100;
var inst_38084 = inst_38102;
var inst_38085 = (0);
var state_38141__$1 = (function (){var statearr_38175 = state_38141;
(statearr_38175[(12)] = inst_38083);

(statearr_38175[(13)] = inst_38082);

(statearr_38175[(14)] = inst_38084);

(statearr_38175[(16)] = inst_38085);

return statearr_38175;
})();
var statearr_38176_38211 = state_38141__$1;
(statearr_38176_38211[(2)] = null);

(statearr_38176_38211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (10))){
var inst_38083 = (state_38141[(12)]);
var inst_38082 = (state_38141[(13)]);
var inst_38084 = (state_38141[(14)]);
var inst_38085 = (state_38141[(16)]);
var inst_38090 = cljs.core._nth.call(null,inst_38083,inst_38085);
var inst_38091 = cljs.core.async.muxch_STAR_.call(null,inst_38090);
var inst_38092 = cljs.core.async.close_BANG_.call(null,inst_38091);
var inst_38093 = (inst_38085 + (1));
var tmp38171 = inst_38083;
var tmp38172 = inst_38082;
var tmp38173 = inst_38084;
var inst_38082__$1 = tmp38172;
var inst_38083__$1 = tmp38171;
var inst_38084__$1 = tmp38173;
var inst_38085__$1 = inst_38093;
var state_38141__$1 = (function (){var statearr_38177 = state_38141;
(statearr_38177[(17)] = inst_38092);

(statearr_38177[(12)] = inst_38083__$1);

(statearr_38177[(13)] = inst_38082__$1);

(statearr_38177[(14)] = inst_38084__$1);

(statearr_38177[(16)] = inst_38085__$1);

return statearr_38177;
})();
var statearr_38178_38212 = state_38141__$1;
(statearr_38178_38212[(2)] = null);

(statearr_38178_38212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (18))){
var inst_38111 = (state_38141[(2)]);
var state_38141__$1 = state_38141;
var statearr_38179_38213 = state_38141__$1;
(statearr_38179_38213[(2)] = inst_38111);

(statearr_38179_38213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38142 === (8))){
var inst_38084 = (state_38141[(14)]);
var inst_38085 = (state_38141[(16)]);
var inst_38087 = (inst_38085 < inst_38084);
var inst_38088 = inst_38087;
var state_38141__$1 = state_38141;
if(cljs.core.truth_(inst_38088)){
var statearr_38180_38214 = state_38141__$1;
(statearr_38180_38214[(1)] = (10));

} else {
var statearr_38181_38215 = state_38141__$1;
(statearr_38181_38215[(1)] = (11));

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
});})(c__22784__auto___38187,mults,ensure_mult,p))
;
return ((function (switch__22629__auto__,c__22784__auto___38187,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_38182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38182[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_38182[(1)] = (1));

return statearr_38182;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_38141){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_38141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e38183){if((e38183 instanceof Object)){
var ex__22633__auto__ = e38183;
var statearr_38184_38216 = state_38141;
(statearr_38184_38216[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38217 = state_38141;
state_38141 = G__38217;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_38141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_38141);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___38187,mults,ensure_mult,p))
})();
var state__22786__auto__ = (function (){var statearr_38185 = f__22785__auto__.call(null);
(statearr_38185[(6)] = c__22784__auto___38187);

return statearr_38185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___38187,mults,ensure_mult,p))
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
var G__38219 = arguments.length;
switch (G__38219) {
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
var G__38222 = arguments.length;
switch (G__38222) {
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
var G__38225 = arguments.length;
switch (G__38225) {
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
var c__22784__auto___38292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___38292,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___38292,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38264){
var state_val_38265 = (state_38264[(1)]);
if((state_val_38265 === (7))){
var state_38264__$1 = state_38264;
var statearr_38266_38293 = state_38264__$1;
(statearr_38266_38293[(2)] = null);

(statearr_38266_38293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (1))){
var state_38264__$1 = state_38264;
var statearr_38267_38294 = state_38264__$1;
(statearr_38267_38294[(2)] = null);

(statearr_38267_38294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (4))){
var inst_38228 = (state_38264[(7)]);
var inst_38230 = (inst_38228 < cnt);
var state_38264__$1 = state_38264;
if(cljs.core.truth_(inst_38230)){
var statearr_38268_38295 = state_38264__$1;
(statearr_38268_38295[(1)] = (6));

} else {
var statearr_38269_38296 = state_38264__$1;
(statearr_38269_38296[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (15))){
var inst_38260 = (state_38264[(2)]);
var state_38264__$1 = state_38264;
var statearr_38270_38297 = state_38264__$1;
(statearr_38270_38297[(2)] = inst_38260);

(statearr_38270_38297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (13))){
var inst_38253 = cljs.core.async.close_BANG_.call(null,out);
var state_38264__$1 = state_38264;
var statearr_38271_38298 = state_38264__$1;
(statearr_38271_38298[(2)] = inst_38253);

(statearr_38271_38298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (6))){
var state_38264__$1 = state_38264;
var statearr_38272_38299 = state_38264__$1;
(statearr_38272_38299[(2)] = null);

(statearr_38272_38299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (3))){
var inst_38262 = (state_38264[(2)]);
var state_38264__$1 = state_38264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38264__$1,inst_38262);
} else {
if((state_val_38265 === (12))){
var inst_38250 = (state_38264[(8)]);
var inst_38250__$1 = (state_38264[(2)]);
var inst_38251 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38250__$1);
var state_38264__$1 = (function (){var statearr_38273 = state_38264;
(statearr_38273[(8)] = inst_38250__$1);

return statearr_38273;
})();
if(cljs.core.truth_(inst_38251)){
var statearr_38274_38300 = state_38264__$1;
(statearr_38274_38300[(1)] = (13));

} else {
var statearr_38275_38301 = state_38264__$1;
(statearr_38275_38301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (2))){
var inst_38227 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38228 = (0);
var state_38264__$1 = (function (){var statearr_38276 = state_38264;
(statearr_38276[(7)] = inst_38228);

(statearr_38276[(9)] = inst_38227);

return statearr_38276;
})();
var statearr_38277_38302 = state_38264__$1;
(statearr_38277_38302[(2)] = null);

(statearr_38277_38302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (11))){
var inst_38228 = (state_38264[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38264,(10),Object,null,(9));
var inst_38237 = chs__$1.call(null,inst_38228);
var inst_38238 = done.call(null,inst_38228);
var inst_38239 = cljs.core.async.take_BANG_.call(null,inst_38237,inst_38238);
var state_38264__$1 = state_38264;
var statearr_38278_38303 = state_38264__$1;
(statearr_38278_38303[(2)] = inst_38239);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38264__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (9))){
var inst_38228 = (state_38264[(7)]);
var inst_38241 = (state_38264[(2)]);
var inst_38242 = (inst_38228 + (1));
var inst_38228__$1 = inst_38242;
var state_38264__$1 = (function (){var statearr_38279 = state_38264;
(statearr_38279[(7)] = inst_38228__$1);

(statearr_38279[(10)] = inst_38241);

return statearr_38279;
})();
var statearr_38280_38304 = state_38264__$1;
(statearr_38280_38304[(2)] = null);

(statearr_38280_38304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (5))){
var inst_38248 = (state_38264[(2)]);
var state_38264__$1 = (function (){var statearr_38281 = state_38264;
(statearr_38281[(11)] = inst_38248);

return statearr_38281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38264__$1,(12),dchan);
} else {
if((state_val_38265 === (14))){
var inst_38250 = (state_38264[(8)]);
var inst_38255 = cljs.core.apply.call(null,f,inst_38250);
var state_38264__$1 = state_38264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38264__$1,(16),out,inst_38255);
} else {
if((state_val_38265 === (16))){
var inst_38257 = (state_38264[(2)]);
var state_38264__$1 = (function (){var statearr_38282 = state_38264;
(statearr_38282[(12)] = inst_38257);

return statearr_38282;
})();
var statearr_38283_38305 = state_38264__$1;
(statearr_38283_38305[(2)] = null);

(statearr_38283_38305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (10))){
var inst_38232 = (state_38264[(2)]);
var inst_38233 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38264__$1 = (function (){var statearr_38284 = state_38264;
(statearr_38284[(13)] = inst_38232);

return statearr_38284;
})();
var statearr_38285_38306 = state_38264__$1;
(statearr_38285_38306[(2)] = inst_38233);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38264__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38265 === (8))){
var inst_38246 = (state_38264[(2)]);
var state_38264__$1 = state_38264;
var statearr_38286_38307 = state_38264__$1;
(statearr_38286_38307[(2)] = inst_38246);

(statearr_38286_38307[(1)] = (5));


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
});})(c__22784__auto___38292,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22629__auto__,c__22784__auto___38292,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_38287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38287[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_38287[(1)] = (1));

return statearr_38287;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_38264){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_38264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e38288){if((e38288 instanceof Object)){
var ex__22633__auto__ = e38288;
var statearr_38289_38308 = state_38264;
(statearr_38289_38308[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38309 = state_38264;
state_38264 = G__38309;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_38264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_38264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___38292,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22786__auto__ = (function (){var statearr_38290 = f__22785__auto__.call(null);
(statearr_38290[(6)] = c__22784__auto___38292);

return statearr_38290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___38292,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__38312 = arguments.length;
switch (G__38312) {
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
var c__22784__auto___38366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___38366,out){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___38366,out){
return (function (state_38344){
var state_val_38345 = (state_38344[(1)]);
if((state_val_38345 === (7))){
var inst_38323 = (state_38344[(7)]);
var inst_38324 = (state_38344[(8)]);
var inst_38323__$1 = (state_38344[(2)]);
var inst_38324__$1 = cljs.core.nth.call(null,inst_38323__$1,(0),null);
var inst_38325 = cljs.core.nth.call(null,inst_38323__$1,(1),null);
var inst_38326 = (inst_38324__$1 == null);
var state_38344__$1 = (function (){var statearr_38346 = state_38344;
(statearr_38346[(7)] = inst_38323__$1);

(statearr_38346[(8)] = inst_38324__$1);

(statearr_38346[(9)] = inst_38325);

return statearr_38346;
})();
if(cljs.core.truth_(inst_38326)){
var statearr_38347_38367 = state_38344__$1;
(statearr_38347_38367[(1)] = (8));

} else {
var statearr_38348_38368 = state_38344__$1;
(statearr_38348_38368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (1))){
var inst_38313 = cljs.core.vec.call(null,chs);
var inst_38314 = inst_38313;
var state_38344__$1 = (function (){var statearr_38349 = state_38344;
(statearr_38349[(10)] = inst_38314);

return statearr_38349;
})();
var statearr_38350_38369 = state_38344__$1;
(statearr_38350_38369[(2)] = null);

(statearr_38350_38369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (4))){
var inst_38314 = (state_38344[(10)]);
var state_38344__$1 = state_38344;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38344__$1,(7),inst_38314);
} else {
if((state_val_38345 === (6))){
var inst_38340 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38351_38370 = state_38344__$1;
(statearr_38351_38370[(2)] = inst_38340);

(statearr_38351_38370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (3))){
var inst_38342 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38344__$1,inst_38342);
} else {
if((state_val_38345 === (2))){
var inst_38314 = (state_38344[(10)]);
var inst_38316 = cljs.core.count.call(null,inst_38314);
var inst_38317 = (inst_38316 > (0));
var state_38344__$1 = state_38344;
if(cljs.core.truth_(inst_38317)){
var statearr_38353_38371 = state_38344__$1;
(statearr_38353_38371[(1)] = (4));

} else {
var statearr_38354_38372 = state_38344__$1;
(statearr_38354_38372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (11))){
var inst_38314 = (state_38344[(10)]);
var inst_38333 = (state_38344[(2)]);
var tmp38352 = inst_38314;
var inst_38314__$1 = tmp38352;
var state_38344__$1 = (function (){var statearr_38355 = state_38344;
(statearr_38355[(10)] = inst_38314__$1);

(statearr_38355[(11)] = inst_38333);

return statearr_38355;
})();
var statearr_38356_38373 = state_38344__$1;
(statearr_38356_38373[(2)] = null);

(statearr_38356_38373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (9))){
var inst_38324 = (state_38344[(8)]);
var state_38344__$1 = state_38344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38344__$1,(11),out,inst_38324);
} else {
if((state_val_38345 === (5))){
var inst_38338 = cljs.core.async.close_BANG_.call(null,out);
var state_38344__$1 = state_38344;
var statearr_38357_38374 = state_38344__$1;
(statearr_38357_38374[(2)] = inst_38338);

(statearr_38357_38374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (10))){
var inst_38336 = (state_38344[(2)]);
var state_38344__$1 = state_38344;
var statearr_38358_38375 = state_38344__$1;
(statearr_38358_38375[(2)] = inst_38336);

(statearr_38358_38375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38345 === (8))){
var inst_38314 = (state_38344[(10)]);
var inst_38323 = (state_38344[(7)]);
var inst_38324 = (state_38344[(8)]);
var inst_38325 = (state_38344[(9)]);
var inst_38328 = (function (){var cs = inst_38314;
var vec__38319 = inst_38323;
var v = inst_38324;
var c = inst_38325;
return ((function (cs,vec__38319,v,c,inst_38314,inst_38323,inst_38324,inst_38325,state_val_38345,c__22784__auto___38366,out){
return (function (p1__38310_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38310_SHARP_);
});
;})(cs,vec__38319,v,c,inst_38314,inst_38323,inst_38324,inst_38325,state_val_38345,c__22784__auto___38366,out))
})();
var inst_38329 = cljs.core.filterv.call(null,inst_38328,inst_38314);
var inst_38314__$1 = inst_38329;
var state_38344__$1 = (function (){var statearr_38359 = state_38344;
(statearr_38359[(10)] = inst_38314__$1);

return statearr_38359;
})();
var statearr_38360_38376 = state_38344__$1;
(statearr_38360_38376[(2)] = null);

(statearr_38360_38376[(1)] = (2));


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
});})(c__22784__auto___38366,out))
;
return ((function (switch__22629__auto__,c__22784__auto___38366,out){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_38361 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38361[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_38361[(1)] = (1));

return statearr_38361;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_38344){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_38344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e38362){if((e38362 instanceof Object)){
var ex__22633__auto__ = e38362;
var statearr_38363_38377 = state_38344;
(statearr_38363_38377[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38378 = state_38344;
state_38344 = G__38378;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_38344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_38344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___38366,out))
})();
var state__22786__auto__ = (function (){var statearr_38364 = f__22785__auto__.call(null);
(statearr_38364[(6)] = c__22784__auto___38366);

return statearr_38364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___38366,out))
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
var G__38380 = arguments.length;
switch (G__38380) {
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
var c__22784__auto___38425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___38425,out){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___38425,out){
return (function (state_38404){
var state_val_38405 = (state_38404[(1)]);
if((state_val_38405 === (7))){
var inst_38386 = (state_38404[(7)]);
var inst_38386__$1 = (state_38404[(2)]);
var inst_38387 = (inst_38386__$1 == null);
var inst_38388 = cljs.core.not.call(null,inst_38387);
var state_38404__$1 = (function (){var statearr_38406 = state_38404;
(statearr_38406[(7)] = inst_38386__$1);

return statearr_38406;
})();
if(inst_38388){
var statearr_38407_38426 = state_38404__$1;
(statearr_38407_38426[(1)] = (8));

} else {
var statearr_38408_38427 = state_38404__$1;
(statearr_38408_38427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (1))){
var inst_38381 = (0);
var state_38404__$1 = (function (){var statearr_38409 = state_38404;
(statearr_38409[(8)] = inst_38381);

return statearr_38409;
})();
var statearr_38410_38428 = state_38404__$1;
(statearr_38410_38428[(2)] = null);

(statearr_38410_38428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (4))){
var state_38404__$1 = state_38404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(7),ch);
} else {
if((state_val_38405 === (6))){
var inst_38399 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38411_38429 = state_38404__$1;
(statearr_38411_38429[(2)] = inst_38399);

(statearr_38411_38429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (3))){
var inst_38401 = (state_38404[(2)]);
var inst_38402 = cljs.core.async.close_BANG_.call(null,out);
var state_38404__$1 = (function (){var statearr_38412 = state_38404;
(statearr_38412[(9)] = inst_38401);

return statearr_38412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38404__$1,inst_38402);
} else {
if((state_val_38405 === (2))){
var inst_38381 = (state_38404[(8)]);
var inst_38383 = (inst_38381 < n);
var state_38404__$1 = state_38404;
if(cljs.core.truth_(inst_38383)){
var statearr_38413_38430 = state_38404__$1;
(statearr_38413_38430[(1)] = (4));

} else {
var statearr_38414_38431 = state_38404__$1;
(statearr_38414_38431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (11))){
var inst_38381 = (state_38404[(8)]);
var inst_38391 = (state_38404[(2)]);
var inst_38392 = (inst_38381 + (1));
var inst_38381__$1 = inst_38392;
var state_38404__$1 = (function (){var statearr_38415 = state_38404;
(statearr_38415[(8)] = inst_38381__$1);

(statearr_38415[(10)] = inst_38391);

return statearr_38415;
})();
var statearr_38416_38432 = state_38404__$1;
(statearr_38416_38432[(2)] = null);

(statearr_38416_38432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (9))){
var state_38404__$1 = state_38404;
var statearr_38417_38433 = state_38404__$1;
(statearr_38417_38433[(2)] = null);

(statearr_38417_38433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (5))){
var state_38404__$1 = state_38404;
var statearr_38418_38434 = state_38404__$1;
(statearr_38418_38434[(2)] = null);

(statearr_38418_38434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (10))){
var inst_38396 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38419_38435 = state_38404__$1;
(statearr_38419_38435[(2)] = inst_38396);

(statearr_38419_38435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (8))){
var inst_38386 = (state_38404[(7)]);
var state_38404__$1 = state_38404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38404__$1,(11),out,inst_38386);
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
});})(c__22784__auto___38425,out))
;
return ((function (switch__22629__auto__,c__22784__auto___38425,out){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_38420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38420[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_38420[(1)] = (1));

return statearr_38420;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_38404){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_38404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e38421){if((e38421 instanceof Object)){
var ex__22633__auto__ = e38421;
var statearr_38422_38436 = state_38404;
(statearr_38422_38436[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38437 = state_38404;
state_38404 = G__38437;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_38404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_38404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___38425,out))
})();
var state__22786__auto__ = (function (){var statearr_38423 = f__22785__auto__.call(null);
(statearr_38423[(6)] = c__22784__auto___38425);

return statearr_38423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___38425,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38439 = (function (f,ch,meta38440){
this.f = f;
this.ch = ch;
this.meta38440 = meta38440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38441,meta38440__$1){
var self__ = this;
var _38441__$1 = this;
return (new cljs.core.async.t_cljs$core$async38439(self__.f,self__.ch,meta38440__$1));
});

cljs.core.async.t_cljs$core$async38439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38441){
var self__ = this;
var _38441__$1 = this;
return self__.meta38440;
});

cljs.core.async.t_cljs$core$async38439.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38439.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38439.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38442 = (function (f,ch,meta38440,_,fn1,meta38443){
this.f = f;
this.ch = ch;
this.meta38440 = meta38440;
this._ = _;
this.fn1 = fn1;
this.meta38443 = meta38443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38444,meta38443__$1){
var self__ = this;
var _38444__$1 = this;
return (new cljs.core.async.t_cljs$core$async38442(self__.f,self__.ch,self__.meta38440,self__._,self__.fn1,meta38443__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38444){
var self__ = this;
var _38444__$1 = this;
return self__.meta38443;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38442.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38438_SHARP_){
return f1.call(null,(((p1__38438_SHARP_ == null))?null:self__.f.call(null,p1__38438_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38442.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38440","meta38440",-843092571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38439","cljs.core.async/t_cljs$core$async38439",-557157162,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38443","meta38443",-1730399884,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38442";

cljs.core.async.t_cljs$core$async38442.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38442");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38442.
 */
cljs.core.async.__GT_t_cljs$core$async38442 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38442(f__$1,ch__$1,meta38440__$1,___$2,fn1__$1,meta38443){
return (new cljs.core.async.t_cljs$core$async38442(f__$1,ch__$1,meta38440__$1,___$2,fn1__$1,meta38443));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38442(self__.f,self__.ch,self__.meta38440,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async38439.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38440","meta38440",-843092571,null)], null);
});

cljs.core.async.t_cljs$core$async38439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38439";

cljs.core.async.t_cljs$core$async38439.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38439");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38439.
 */
cljs.core.async.__GT_t_cljs$core$async38439 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38439(f__$1,ch__$1,meta38440){
return (new cljs.core.async.t_cljs$core$async38439(f__$1,ch__$1,meta38440));
});

}

return (new cljs.core.async.t_cljs$core$async38439(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38445 = (function (f,ch,meta38446){
this.f = f;
this.ch = ch;
this.meta38446 = meta38446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38447,meta38446__$1){
var self__ = this;
var _38447__$1 = this;
return (new cljs.core.async.t_cljs$core$async38445(self__.f,self__.ch,meta38446__$1));
});

cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38447){
var self__ = this;
var _38447__$1 = this;
return self__.meta38446;
});

cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38446","meta38446",1700985192,null)], null);
});

cljs.core.async.t_cljs$core$async38445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38445";

cljs.core.async.t_cljs$core$async38445.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38445");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38445.
 */
cljs.core.async.__GT_t_cljs$core$async38445 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38445(f__$1,ch__$1,meta38446){
return (new cljs.core.async.t_cljs$core$async38445(f__$1,ch__$1,meta38446));
});

}

return (new cljs.core.async.t_cljs$core$async38445(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38448 = (function (p,ch,meta38449){
this.p = p;
this.ch = ch;
this.meta38449 = meta38449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38450,meta38449__$1){
var self__ = this;
var _38450__$1 = this;
return (new cljs.core.async.t_cljs$core$async38448(self__.p,self__.ch,meta38449__$1));
});

cljs.core.async.t_cljs$core$async38448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38450){
var self__ = this;
var _38450__$1 = this;
return self__.meta38449;
});

cljs.core.async.t_cljs$core$async38448.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38448.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38448.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38448.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38448.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38448.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38448.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38449","meta38449",-2024469439,null)], null);
});

cljs.core.async.t_cljs$core$async38448.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38448";

cljs.core.async.t_cljs$core$async38448.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38448");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38448.
 */
cljs.core.async.__GT_t_cljs$core$async38448 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38448(p__$1,ch__$1,meta38449){
return (new cljs.core.async.t_cljs$core$async38448(p__$1,ch__$1,meta38449));
});

}

return (new cljs.core.async.t_cljs$core$async38448(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38452 = arguments.length;
switch (G__38452) {
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
var c__22784__auto___38492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___38492,out){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___38492,out){
return (function (state_38473){
var state_val_38474 = (state_38473[(1)]);
if((state_val_38474 === (7))){
var inst_38469 = (state_38473[(2)]);
var state_38473__$1 = state_38473;
var statearr_38475_38493 = state_38473__$1;
(statearr_38475_38493[(2)] = inst_38469);

(statearr_38475_38493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38474 === (1))){
var state_38473__$1 = state_38473;
var statearr_38476_38494 = state_38473__$1;
(statearr_38476_38494[(2)] = null);

(statearr_38476_38494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38474 === (4))){
var inst_38455 = (state_38473[(7)]);
var inst_38455__$1 = (state_38473[(2)]);
var inst_38456 = (inst_38455__$1 == null);
var state_38473__$1 = (function (){var statearr_38477 = state_38473;
(statearr_38477[(7)] = inst_38455__$1);

return statearr_38477;
})();
if(cljs.core.truth_(inst_38456)){
var statearr_38478_38495 = state_38473__$1;
(statearr_38478_38495[(1)] = (5));

} else {
var statearr_38479_38496 = state_38473__$1;
(statearr_38479_38496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38474 === (6))){
var inst_38455 = (state_38473[(7)]);
var inst_38460 = p.call(null,inst_38455);
var state_38473__$1 = state_38473;
if(cljs.core.truth_(inst_38460)){
var statearr_38480_38497 = state_38473__$1;
(statearr_38480_38497[(1)] = (8));

} else {
var statearr_38481_38498 = state_38473__$1;
(statearr_38481_38498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38474 === (3))){
var inst_38471 = (state_38473[(2)]);
var state_38473__$1 = state_38473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38473__$1,inst_38471);
} else {
if((state_val_38474 === (2))){
var state_38473__$1 = state_38473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38473__$1,(4),ch);
} else {
if((state_val_38474 === (11))){
var inst_38463 = (state_38473[(2)]);
var state_38473__$1 = state_38473;
var statearr_38482_38499 = state_38473__$1;
(statearr_38482_38499[(2)] = inst_38463);

(statearr_38482_38499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38474 === (9))){
var state_38473__$1 = state_38473;
var statearr_38483_38500 = state_38473__$1;
(statearr_38483_38500[(2)] = null);

(statearr_38483_38500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38474 === (5))){
var inst_38458 = cljs.core.async.close_BANG_.call(null,out);
var state_38473__$1 = state_38473;
var statearr_38484_38501 = state_38473__$1;
(statearr_38484_38501[(2)] = inst_38458);

(statearr_38484_38501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38474 === (10))){
var inst_38466 = (state_38473[(2)]);
var state_38473__$1 = (function (){var statearr_38485 = state_38473;
(statearr_38485[(8)] = inst_38466);

return statearr_38485;
})();
var statearr_38486_38502 = state_38473__$1;
(statearr_38486_38502[(2)] = null);

(statearr_38486_38502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38474 === (8))){
var inst_38455 = (state_38473[(7)]);
var state_38473__$1 = state_38473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38473__$1,(11),out,inst_38455);
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
});})(c__22784__auto___38492,out))
;
return ((function (switch__22629__auto__,c__22784__auto___38492,out){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_38487 = [null,null,null,null,null,null,null,null,null];
(statearr_38487[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_38487[(1)] = (1));

return statearr_38487;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_38473){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_38473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e38488){if((e38488 instanceof Object)){
var ex__22633__auto__ = e38488;
var statearr_38489_38503 = state_38473;
(statearr_38489_38503[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38504 = state_38473;
state_38473 = G__38504;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_38473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_38473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___38492,out))
})();
var state__22786__auto__ = (function (){var statearr_38490 = f__22785__auto__.call(null);
(statearr_38490[(6)] = c__22784__auto___38492);

return statearr_38490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___38492,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38506 = arguments.length;
switch (G__38506) {
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
var c__22784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto__){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto__){
return (function (state_38569){
var state_val_38570 = (state_38569[(1)]);
if((state_val_38570 === (7))){
var inst_38565 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38571_38609 = state_38569__$1;
(statearr_38571_38609[(2)] = inst_38565);

(statearr_38571_38609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (20))){
var inst_38535 = (state_38569[(7)]);
var inst_38546 = (state_38569[(2)]);
var inst_38547 = cljs.core.next.call(null,inst_38535);
var inst_38521 = inst_38547;
var inst_38522 = null;
var inst_38523 = (0);
var inst_38524 = (0);
var state_38569__$1 = (function (){var statearr_38572 = state_38569;
(statearr_38572[(8)] = inst_38523);

(statearr_38572[(9)] = inst_38546);

(statearr_38572[(10)] = inst_38522);

(statearr_38572[(11)] = inst_38521);

(statearr_38572[(12)] = inst_38524);

return statearr_38572;
})();
var statearr_38573_38610 = state_38569__$1;
(statearr_38573_38610[(2)] = null);

(statearr_38573_38610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (1))){
var state_38569__$1 = state_38569;
var statearr_38574_38611 = state_38569__$1;
(statearr_38574_38611[(2)] = null);

(statearr_38574_38611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (4))){
var inst_38510 = (state_38569[(13)]);
var inst_38510__$1 = (state_38569[(2)]);
var inst_38511 = (inst_38510__$1 == null);
var state_38569__$1 = (function (){var statearr_38575 = state_38569;
(statearr_38575[(13)] = inst_38510__$1);

return statearr_38575;
})();
if(cljs.core.truth_(inst_38511)){
var statearr_38576_38612 = state_38569__$1;
(statearr_38576_38612[(1)] = (5));

} else {
var statearr_38577_38613 = state_38569__$1;
(statearr_38577_38613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (15))){
var state_38569__$1 = state_38569;
var statearr_38581_38614 = state_38569__$1;
(statearr_38581_38614[(2)] = null);

(statearr_38581_38614[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (21))){
var state_38569__$1 = state_38569;
var statearr_38582_38615 = state_38569__$1;
(statearr_38582_38615[(2)] = null);

(statearr_38582_38615[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (13))){
var inst_38523 = (state_38569[(8)]);
var inst_38522 = (state_38569[(10)]);
var inst_38521 = (state_38569[(11)]);
var inst_38524 = (state_38569[(12)]);
var inst_38531 = (state_38569[(2)]);
var inst_38532 = (inst_38524 + (1));
var tmp38578 = inst_38523;
var tmp38579 = inst_38522;
var tmp38580 = inst_38521;
var inst_38521__$1 = tmp38580;
var inst_38522__$1 = tmp38579;
var inst_38523__$1 = tmp38578;
var inst_38524__$1 = inst_38532;
var state_38569__$1 = (function (){var statearr_38583 = state_38569;
(statearr_38583[(8)] = inst_38523__$1);

(statearr_38583[(14)] = inst_38531);

(statearr_38583[(10)] = inst_38522__$1);

(statearr_38583[(11)] = inst_38521__$1);

(statearr_38583[(12)] = inst_38524__$1);

return statearr_38583;
})();
var statearr_38584_38616 = state_38569__$1;
(statearr_38584_38616[(2)] = null);

(statearr_38584_38616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (22))){
var state_38569__$1 = state_38569;
var statearr_38585_38617 = state_38569__$1;
(statearr_38585_38617[(2)] = null);

(statearr_38585_38617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (6))){
var inst_38510 = (state_38569[(13)]);
var inst_38519 = f.call(null,inst_38510);
var inst_38520 = cljs.core.seq.call(null,inst_38519);
var inst_38521 = inst_38520;
var inst_38522 = null;
var inst_38523 = (0);
var inst_38524 = (0);
var state_38569__$1 = (function (){var statearr_38586 = state_38569;
(statearr_38586[(8)] = inst_38523);

(statearr_38586[(10)] = inst_38522);

(statearr_38586[(11)] = inst_38521);

(statearr_38586[(12)] = inst_38524);

return statearr_38586;
})();
var statearr_38587_38618 = state_38569__$1;
(statearr_38587_38618[(2)] = null);

(statearr_38587_38618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (17))){
var inst_38535 = (state_38569[(7)]);
var inst_38539 = cljs.core.chunk_first.call(null,inst_38535);
var inst_38540 = cljs.core.chunk_rest.call(null,inst_38535);
var inst_38541 = cljs.core.count.call(null,inst_38539);
var inst_38521 = inst_38540;
var inst_38522 = inst_38539;
var inst_38523 = inst_38541;
var inst_38524 = (0);
var state_38569__$1 = (function (){var statearr_38588 = state_38569;
(statearr_38588[(8)] = inst_38523);

(statearr_38588[(10)] = inst_38522);

(statearr_38588[(11)] = inst_38521);

(statearr_38588[(12)] = inst_38524);

return statearr_38588;
})();
var statearr_38589_38619 = state_38569__$1;
(statearr_38589_38619[(2)] = null);

(statearr_38589_38619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (3))){
var inst_38567 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38569__$1,inst_38567);
} else {
if((state_val_38570 === (12))){
var inst_38555 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38590_38620 = state_38569__$1;
(statearr_38590_38620[(2)] = inst_38555);

(statearr_38590_38620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (2))){
var state_38569__$1 = state_38569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38569__$1,(4),in$);
} else {
if((state_val_38570 === (23))){
var inst_38563 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38591_38621 = state_38569__$1;
(statearr_38591_38621[(2)] = inst_38563);

(statearr_38591_38621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (19))){
var inst_38550 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38592_38622 = state_38569__$1;
(statearr_38592_38622[(2)] = inst_38550);

(statearr_38592_38622[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (11))){
var inst_38535 = (state_38569[(7)]);
var inst_38521 = (state_38569[(11)]);
var inst_38535__$1 = cljs.core.seq.call(null,inst_38521);
var state_38569__$1 = (function (){var statearr_38593 = state_38569;
(statearr_38593[(7)] = inst_38535__$1);

return statearr_38593;
})();
if(inst_38535__$1){
var statearr_38594_38623 = state_38569__$1;
(statearr_38594_38623[(1)] = (14));

} else {
var statearr_38595_38624 = state_38569__$1;
(statearr_38595_38624[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (9))){
var inst_38557 = (state_38569[(2)]);
var inst_38558 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38569__$1 = (function (){var statearr_38596 = state_38569;
(statearr_38596[(15)] = inst_38557);

return statearr_38596;
})();
if(cljs.core.truth_(inst_38558)){
var statearr_38597_38625 = state_38569__$1;
(statearr_38597_38625[(1)] = (21));

} else {
var statearr_38598_38626 = state_38569__$1;
(statearr_38598_38626[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (5))){
var inst_38513 = cljs.core.async.close_BANG_.call(null,out);
var state_38569__$1 = state_38569;
var statearr_38599_38627 = state_38569__$1;
(statearr_38599_38627[(2)] = inst_38513);

(statearr_38599_38627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (14))){
var inst_38535 = (state_38569[(7)]);
var inst_38537 = cljs.core.chunked_seq_QMARK_.call(null,inst_38535);
var state_38569__$1 = state_38569;
if(inst_38537){
var statearr_38600_38628 = state_38569__$1;
(statearr_38600_38628[(1)] = (17));

} else {
var statearr_38601_38629 = state_38569__$1;
(statearr_38601_38629[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (16))){
var inst_38553 = (state_38569[(2)]);
var state_38569__$1 = state_38569;
var statearr_38602_38630 = state_38569__$1;
(statearr_38602_38630[(2)] = inst_38553);

(statearr_38602_38630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38570 === (10))){
var inst_38522 = (state_38569[(10)]);
var inst_38524 = (state_38569[(12)]);
var inst_38529 = cljs.core._nth.call(null,inst_38522,inst_38524);
var state_38569__$1 = state_38569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38569__$1,(13),out,inst_38529);
} else {
if((state_val_38570 === (18))){
var inst_38535 = (state_38569[(7)]);
var inst_38544 = cljs.core.first.call(null,inst_38535);
var state_38569__$1 = state_38569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38569__$1,(20),out,inst_38544);
} else {
if((state_val_38570 === (8))){
var inst_38523 = (state_38569[(8)]);
var inst_38524 = (state_38569[(12)]);
var inst_38526 = (inst_38524 < inst_38523);
var inst_38527 = inst_38526;
var state_38569__$1 = state_38569;
if(cljs.core.truth_(inst_38527)){
var statearr_38603_38631 = state_38569__$1;
(statearr_38603_38631[(1)] = (10));

} else {
var statearr_38604_38632 = state_38569__$1;
(statearr_38604_38632[(1)] = (11));

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
});})(c__22784__auto__))
;
return ((function (switch__22629__auto__,c__22784__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22630__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22630__auto____0 = (function (){
var statearr_38605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38605[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22630__auto__);

(statearr_38605[(1)] = (1));

return statearr_38605;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22630__auto____1 = (function (state_38569){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_38569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e38606){if((e38606 instanceof Object)){
var ex__22633__auto__ = e38606;
var statearr_38607_38633 = state_38569;
(statearr_38607_38633[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38634 = state_38569;
state_38569 = G__38634;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22630__auto__ = function(state_38569){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22630__auto____1.call(this,state_38569);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22630__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22630__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto__))
})();
var state__22786__auto__ = (function (){var statearr_38608 = f__22785__auto__.call(null);
(statearr_38608[(6)] = c__22784__auto__);

return statearr_38608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto__))
);

return c__22784__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38636 = arguments.length;
switch (G__38636) {
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
var G__38639 = arguments.length;
switch (G__38639) {
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
var G__38642 = arguments.length;
switch (G__38642) {
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
var c__22784__auto___38689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___38689,out){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___38689,out){
return (function (state_38666){
var state_val_38667 = (state_38666[(1)]);
if((state_val_38667 === (7))){
var inst_38661 = (state_38666[(2)]);
var state_38666__$1 = state_38666;
var statearr_38668_38690 = state_38666__$1;
(statearr_38668_38690[(2)] = inst_38661);

(statearr_38668_38690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38667 === (1))){
var inst_38643 = null;
var state_38666__$1 = (function (){var statearr_38669 = state_38666;
(statearr_38669[(7)] = inst_38643);

return statearr_38669;
})();
var statearr_38670_38691 = state_38666__$1;
(statearr_38670_38691[(2)] = null);

(statearr_38670_38691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38667 === (4))){
var inst_38646 = (state_38666[(8)]);
var inst_38646__$1 = (state_38666[(2)]);
var inst_38647 = (inst_38646__$1 == null);
var inst_38648 = cljs.core.not.call(null,inst_38647);
var state_38666__$1 = (function (){var statearr_38671 = state_38666;
(statearr_38671[(8)] = inst_38646__$1);

return statearr_38671;
})();
if(inst_38648){
var statearr_38672_38692 = state_38666__$1;
(statearr_38672_38692[(1)] = (5));

} else {
var statearr_38673_38693 = state_38666__$1;
(statearr_38673_38693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38667 === (6))){
var state_38666__$1 = state_38666;
var statearr_38674_38694 = state_38666__$1;
(statearr_38674_38694[(2)] = null);

(statearr_38674_38694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38667 === (3))){
var inst_38663 = (state_38666[(2)]);
var inst_38664 = cljs.core.async.close_BANG_.call(null,out);
var state_38666__$1 = (function (){var statearr_38675 = state_38666;
(statearr_38675[(9)] = inst_38663);

return statearr_38675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38666__$1,inst_38664);
} else {
if((state_val_38667 === (2))){
var state_38666__$1 = state_38666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38666__$1,(4),ch);
} else {
if((state_val_38667 === (11))){
var inst_38646 = (state_38666[(8)]);
var inst_38655 = (state_38666[(2)]);
var inst_38643 = inst_38646;
var state_38666__$1 = (function (){var statearr_38676 = state_38666;
(statearr_38676[(10)] = inst_38655);

(statearr_38676[(7)] = inst_38643);

return statearr_38676;
})();
var statearr_38677_38695 = state_38666__$1;
(statearr_38677_38695[(2)] = null);

(statearr_38677_38695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38667 === (9))){
var inst_38646 = (state_38666[(8)]);
var state_38666__$1 = state_38666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38666__$1,(11),out,inst_38646);
} else {
if((state_val_38667 === (5))){
var inst_38646 = (state_38666[(8)]);
var inst_38643 = (state_38666[(7)]);
var inst_38650 = cljs.core._EQ_.call(null,inst_38646,inst_38643);
var state_38666__$1 = state_38666;
if(inst_38650){
var statearr_38679_38696 = state_38666__$1;
(statearr_38679_38696[(1)] = (8));

} else {
var statearr_38680_38697 = state_38666__$1;
(statearr_38680_38697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38667 === (10))){
var inst_38658 = (state_38666[(2)]);
var state_38666__$1 = state_38666;
var statearr_38681_38698 = state_38666__$1;
(statearr_38681_38698[(2)] = inst_38658);

(statearr_38681_38698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38667 === (8))){
var inst_38643 = (state_38666[(7)]);
var tmp38678 = inst_38643;
var inst_38643__$1 = tmp38678;
var state_38666__$1 = (function (){var statearr_38682 = state_38666;
(statearr_38682[(7)] = inst_38643__$1);

return statearr_38682;
})();
var statearr_38683_38699 = state_38666__$1;
(statearr_38683_38699[(2)] = null);

(statearr_38683_38699[(1)] = (2));


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
});})(c__22784__auto___38689,out))
;
return ((function (switch__22629__auto__,c__22784__auto___38689,out){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_38684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38684[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_38684[(1)] = (1));

return statearr_38684;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_38666){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_38666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e38685){if((e38685 instanceof Object)){
var ex__22633__auto__ = e38685;
var statearr_38686_38700 = state_38666;
(statearr_38686_38700[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38701 = state_38666;
state_38666 = G__38701;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_38666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_38666);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___38689,out))
})();
var state__22786__auto__ = (function (){var statearr_38687 = f__22785__auto__.call(null);
(statearr_38687[(6)] = c__22784__auto___38689);

return statearr_38687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___38689,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38703 = arguments.length;
switch (G__38703) {
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
var c__22784__auto___38769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___38769,out){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___38769,out){
return (function (state_38741){
var state_val_38742 = (state_38741[(1)]);
if((state_val_38742 === (7))){
var inst_38737 = (state_38741[(2)]);
var state_38741__$1 = state_38741;
var statearr_38743_38770 = state_38741__$1;
(statearr_38743_38770[(2)] = inst_38737);

(statearr_38743_38770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (1))){
var inst_38704 = (new Array(n));
var inst_38705 = inst_38704;
var inst_38706 = (0);
var state_38741__$1 = (function (){var statearr_38744 = state_38741;
(statearr_38744[(7)] = inst_38706);

(statearr_38744[(8)] = inst_38705);

return statearr_38744;
})();
var statearr_38745_38771 = state_38741__$1;
(statearr_38745_38771[(2)] = null);

(statearr_38745_38771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (4))){
var inst_38709 = (state_38741[(9)]);
var inst_38709__$1 = (state_38741[(2)]);
var inst_38710 = (inst_38709__$1 == null);
var inst_38711 = cljs.core.not.call(null,inst_38710);
var state_38741__$1 = (function (){var statearr_38746 = state_38741;
(statearr_38746[(9)] = inst_38709__$1);

return statearr_38746;
})();
if(inst_38711){
var statearr_38747_38772 = state_38741__$1;
(statearr_38747_38772[(1)] = (5));

} else {
var statearr_38748_38773 = state_38741__$1;
(statearr_38748_38773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (15))){
var inst_38731 = (state_38741[(2)]);
var state_38741__$1 = state_38741;
var statearr_38749_38774 = state_38741__$1;
(statearr_38749_38774[(2)] = inst_38731);

(statearr_38749_38774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (13))){
var state_38741__$1 = state_38741;
var statearr_38750_38775 = state_38741__$1;
(statearr_38750_38775[(2)] = null);

(statearr_38750_38775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (6))){
var inst_38706 = (state_38741[(7)]);
var inst_38727 = (inst_38706 > (0));
var state_38741__$1 = state_38741;
if(cljs.core.truth_(inst_38727)){
var statearr_38751_38776 = state_38741__$1;
(statearr_38751_38776[(1)] = (12));

} else {
var statearr_38752_38777 = state_38741__$1;
(statearr_38752_38777[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (3))){
var inst_38739 = (state_38741[(2)]);
var state_38741__$1 = state_38741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38741__$1,inst_38739);
} else {
if((state_val_38742 === (12))){
var inst_38705 = (state_38741[(8)]);
var inst_38729 = cljs.core.vec.call(null,inst_38705);
var state_38741__$1 = state_38741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38741__$1,(15),out,inst_38729);
} else {
if((state_val_38742 === (2))){
var state_38741__$1 = state_38741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38741__$1,(4),ch);
} else {
if((state_val_38742 === (11))){
var inst_38721 = (state_38741[(2)]);
var inst_38722 = (new Array(n));
var inst_38705 = inst_38722;
var inst_38706 = (0);
var state_38741__$1 = (function (){var statearr_38753 = state_38741;
(statearr_38753[(7)] = inst_38706);

(statearr_38753[(10)] = inst_38721);

(statearr_38753[(8)] = inst_38705);

return statearr_38753;
})();
var statearr_38754_38778 = state_38741__$1;
(statearr_38754_38778[(2)] = null);

(statearr_38754_38778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (9))){
var inst_38705 = (state_38741[(8)]);
var inst_38719 = cljs.core.vec.call(null,inst_38705);
var state_38741__$1 = state_38741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38741__$1,(11),out,inst_38719);
} else {
if((state_val_38742 === (5))){
var inst_38706 = (state_38741[(7)]);
var inst_38709 = (state_38741[(9)]);
var inst_38714 = (state_38741[(11)]);
var inst_38705 = (state_38741[(8)]);
var inst_38713 = (inst_38705[inst_38706] = inst_38709);
var inst_38714__$1 = (inst_38706 + (1));
var inst_38715 = (inst_38714__$1 < n);
var state_38741__$1 = (function (){var statearr_38755 = state_38741;
(statearr_38755[(11)] = inst_38714__$1);

(statearr_38755[(12)] = inst_38713);

return statearr_38755;
})();
if(cljs.core.truth_(inst_38715)){
var statearr_38756_38779 = state_38741__$1;
(statearr_38756_38779[(1)] = (8));

} else {
var statearr_38757_38780 = state_38741__$1;
(statearr_38757_38780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (14))){
var inst_38734 = (state_38741[(2)]);
var inst_38735 = cljs.core.async.close_BANG_.call(null,out);
var state_38741__$1 = (function (){var statearr_38759 = state_38741;
(statearr_38759[(13)] = inst_38734);

return statearr_38759;
})();
var statearr_38760_38781 = state_38741__$1;
(statearr_38760_38781[(2)] = inst_38735);

(statearr_38760_38781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (10))){
var inst_38725 = (state_38741[(2)]);
var state_38741__$1 = state_38741;
var statearr_38761_38782 = state_38741__$1;
(statearr_38761_38782[(2)] = inst_38725);

(statearr_38761_38782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (8))){
var inst_38714 = (state_38741[(11)]);
var inst_38705 = (state_38741[(8)]);
var tmp38758 = inst_38705;
var inst_38705__$1 = tmp38758;
var inst_38706 = inst_38714;
var state_38741__$1 = (function (){var statearr_38762 = state_38741;
(statearr_38762[(7)] = inst_38706);

(statearr_38762[(8)] = inst_38705__$1);

return statearr_38762;
})();
var statearr_38763_38783 = state_38741__$1;
(statearr_38763_38783[(2)] = null);

(statearr_38763_38783[(1)] = (2));


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
});})(c__22784__auto___38769,out))
;
return ((function (switch__22629__auto__,c__22784__auto___38769,out){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_38764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38764[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_38764[(1)] = (1));

return statearr_38764;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_38741){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_38741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e38765){if((e38765 instanceof Object)){
var ex__22633__auto__ = e38765;
var statearr_38766_38784 = state_38741;
(statearr_38766_38784[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38785 = state_38741;
state_38741 = G__38785;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_38741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_38741);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___38769,out))
})();
var state__22786__auto__ = (function (){var statearr_38767 = f__22785__auto__.call(null);
(statearr_38767[(6)] = c__22784__auto___38769);

return statearr_38767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___38769,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38787 = arguments.length;
switch (G__38787) {
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
var c__22784__auto___38857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22784__auto___38857,out){
return (function (){
var f__22785__auto__ = (function (){var switch__22629__auto__ = ((function (c__22784__auto___38857,out){
return (function (state_38829){
var state_val_38830 = (state_38829[(1)]);
if((state_val_38830 === (7))){
var inst_38825 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
var statearr_38831_38858 = state_38829__$1;
(statearr_38831_38858[(2)] = inst_38825);

(statearr_38831_38858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (1))){
var inst_38788 = [];
var inst_38789 = inst_38788;
var inst_38790 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38829__$1 = (function (){var statearr_38832 = state_38829;
(statearr_38832[(7)] = inst_38789);

(statearr_38832[(8)] = inst_38790);

return statearr_38832;
})();
var statearr_38833_38859 = state_38829__$1;
(statearr_38833_38859[(2)] = null);

(statearr_38833_38859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (4))){
var inst_38793 = (state_38829[(9)]);
var inst_38793__$1 = (state_38829[(2)]);
var inst_38794 = (inst_38793__$1 == null);
var inst_38795 = cljs.core.not.call(null,inst_38794);
var state_38829__$1 = (function (){var statearr_38834 = state_38829;
(statearr_38834[(9)] = inst_38793__$1);

return statearr_38834;
})();
if(inst_38795){
var statearr_38835_38860 = state_38829__$1;
(statearr_38835_38860[(1)] = (5));

} else {
var statearr_38836_38861 = state_38829__$1;
(statearr_38836_38861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (15))){
var inst_38819 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
var statearr_38837_38862 = state_38829__$1;
(statearr_38837_38862[(2)] = inst_38819);

(statearr_38837_38862[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (13))){
var state_38829__$1 = state_38829;
var statearr_38838_38863 = state_38829__$1;
(statearr_38838_38863[(2)] = null);

(statearr_38838_38863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (6))){
var inst_38789 = (state_38829[(7)]);
var inst_38814 = inst_38789.length;
var inst_38815 = (inst_38814 > (0));
var state_38829__$1 = state_38829;
if(cljs.core.truth_(inst_38815)){
var statearr_38839_38864 = state_38829__$1;
(statearr_38839_38864[(1)] = (12));

} else {
var statearr_38840_38865 = state_38829__$1;
(statearr_38840_38865[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (3))){
var inst_38827 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38829__$1,inst_38827);
} else {
if((state_val_38830 === (12))){
var inst_38789 = (state_38829[(7)]);
var inst_38817 = cljs.core.vec.call(null,inst_38789);
var state_38829__$1 = state_38829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38829__$1,(15),out,inst_38817);
} else {
if((state_val_38830 === (2))){
var state_38829__$1 = state_38829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38829__$1,(4),ch);
} else {
if((state_val_38830 === (11))){
var inst_38797 = (state_38829[(10)]);
var inst_38793 = (state_38829[(9)]);
var inst_38807 = (state_38829[(2)]);
var inst_38808 = [];
var inst_38809 = inst_38808.push(inst_38793);
var inst_38789 = inst_38808;
var inst_38790 = inst_38797;
var state_38829__$1 = (function (){var statearr_38841 = state_38829;
(statearr_38841[(7)] = inst_38789);

(statearr_38841[(11)] = inst_38807);

(statearr_38841[(8)] = inst_38790);

(statearr_38841[(12)] = inst_38809);

return statearr_38841;
})();
var statearr_38842_38866 = state_38829__$1;
(statearr_38842_38866[(2)] = null);

(statearr_38842_38866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (9))){
var inst_38789 = (state_38829[(7)]);
var inst_38805 = cljs.core.vec.call(null,inst_38789);
var state_38829__$1 = state_38829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38829__$1,(11),out,inst_38805);
} else {
if((state_val_38830 === (5))){
var inst_38797 = (state_38829[(10)]);
var inst_38793 = (state_38829[(9)]);
var inst_38790 = (state_38829[(8)]);
var inst_38797__$1 = f.call(null,inst_38793);
var inst_38798 = cljs.core._EQ_.call(null,inst_38797__$1,inst_38790);
var inst_38799 = cljs.core.keyword_identical_QMARK_.call(null,inst_38790,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38800 = ((inst_38798) || (inst_38799));
var state_38829__$1 = (function (){var statearr_38843 = state_38829;
(statearr_38843[(10)] = inst_38797__$1);

return statearr_38843;
})();
if(cljs.core.truth_(inst_38800)){
var statearr_38844_38867 = state_38829__$1;
(statearr_38844_38867[(1)] = (8));

} else {
var statearr_38845_38868 = state_38829__$1;
(statearr_38845_38868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (14))){
var inst_38822 = (state_38829[(2)]);
var inst_38823 = cljs.core.async.close_BANG_.call(null,out);
var state_38829__$1 = (function (){var statearr_38847 = state_38829;
(statearr_38847[(13)] = inst_38822);

return statearr_38847;
})();
var statearr_38848_38869 = state_38829__$1;
(statearr_38848_38869[(2)] = inst_38823);

(statearr_38848_38869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (10))){
var inst_38812 = (state_38829[(2)]);
var state_38829__$1 = state_38829;
var statearr_38849_38870 = state_38829__$1;
(statearr_38849_38870[(2)] = inst_38812);

(statearr_38849_38870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38830 === (8))){
var inst_38797 = (state_38829[(10)]);
var inst_38789 = (state_38829[(7)]);
var inst_38793 = (state_38829[(9)]);
var inst_38802 = inst_38789.push(inst_38793);
var tmp38846 = inst_38789;
var inst_38789__$1 = tmp38846;
var inst_38790 = inst_38797;
var state_38829__$1 = (function (){var statearr_38850 = state_38829;
(statearr_38850[(7)] = inst_38789__$1);

(statearr_38850[(8)] = inst_38790);

(statearr_38850[(14)] = inst_38802);

return statearr_38850;
})();
var statearr_38851_38871 = state_38829__$1;
(statearr_38851_38871[(2)] = null);

(statearr_38851_38871[(1)] = (2));


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
});})(c__22784__auto___38857,out))
;
return ((function (switch__22629__auto__,c__22784__auto___38857,out){
return (function() {
var cljs$core$async$state_machine__22630__auto__ = null;
var cljs$core$async$state_machine__22630__auto____0 = (function (){
var statearr_38852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38852[(0)] = cljs$core$async$state_machine__22630__auto__);

(statearr_38852[(1)] = (1));

return statearr_38852;
});
var cljs$core$async$state_machine__22630__auto____1 = (function (state_38829){
while(true){
var ret_value__22631__auto__ = (function (){try{while(true){
var result__22632__auto__ = switch__22629__auto__.call(null,state_38829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22632__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22632__auto__;
}
break;
}
}catch (e38853){if((e38853 instanceof Object)){
var ex__22633__auto__ = e38853;
var statearr_38854_38872 = state_38829;
(statearr_38854_38872[(5)] = ex__22633__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38873 = state_38829;
state_38829 = G__38873;
continue;
} else {
return ret_value__22631__auto__;
}
break;
}
});
cljs$core$async$state_machine__22630__auto__ = function(state_38829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22630__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22630__auto____1.call(this,state_38829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22630__auto____0;
cljs$core$async$state_machine__22630__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22630__auto____1;
return cljs$core$async$state_machine__22630__auto__;
})()
;})(switch__22629__auto__,c__22784__auto___38857,out))
})();
var state__22786__auto__ = (function (){var statearr_38855 = f__22785__auto__.call(null);
(statearr_38855[(6)] = c__22784__auto___38857);

return statearr_38855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22786__auto__);
});})(c__22784__auto___38857,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1548321675554
