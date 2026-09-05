"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=u(function(f,i){
var s=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),n=require('@stdlib/ndarray-base-numel-dimension/dist'),v=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/blas-ext-base-gsome/dist').ndarray;function c(e){var r=e[0],a=s(e[1]);return o(n(r,0),a,d(r),v(r,0),q(r))}i.exports=c
});var g=t();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
