if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>n(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/about.91ca5653.js",revision:null},{url:"assets/about.b13329a7.css",revision:null},{url:"assets/index.5bc3afd4.css",revision:null},{url:"assets/index.e568aa87.js",revision:null},{url:"assets/register-sw.215decb5.js",revision:null},{url:"assets/vendor.44f8e8ed.js",revision:null},{url:"assets/vendor.4a75f9e7.css",revision:null},{url:"index.html",revision:"3d51c9fc7bffd82c8186307651b9f84c"},{url:"./logo@192x192.png",revision:"2141830aeff90ef6988f4e01aba62fad"},{url:"manifest.webmanifest",revision:"d756afaa08532ee66890bc528374b6f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));