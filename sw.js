if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),c={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/HomeDetailsView-e7ba60e7.js",revision:null},{url:"assets/HomeDetailsView-f1ae651d.css",revision:null},{url:"assets/index-351954fb.js",revision:null},{url:"assets/index-35395fd3.css",revision:null},{url:"assets/SearchView-a15fb004.css",revision:null},{url:"assets/SearchView-c0650559.js",revision:null},{url:"index.html",revision:"ef872158c27c54202bc33a237169e781"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"b7bd63c85129851ada50e110884c0574"},{url:"pwa-192x192.png",revision:"5003e09052a752bc06534aa2630d6085"},{url:"pwa-512x512.png",revision:"018deb1ccb7b71c69232e437ee5333bc"},{url:"manifest.webmanifest",revision:"09e1b8818e839bd6474a9cf4edd1d4d9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
