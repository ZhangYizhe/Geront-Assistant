if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>s(e,o),c={module:{uri:o},exports:t,require:d};i[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-77690ea6.css",revision:null},{url:"assets/index-83e64193.js",revision:null},{url:"assets/UserView-15d18379.js",revision:null},{url:"index.html",revision:"123c3c67e225c6a1d016e645300b3db0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"e8588942352069027a19af86d8cb009c"},{url:"pwa-192x192.png",revision:"e0dc2891f91f2ddc0345e05de2fcac7f"},{url:"pwa-512x512.png",revision:"3e87209aa7e5492f896d90711935b4cb"},{url:"manifest.webmanifest",revision:"09e1b8818e839bd6474a9cf4edd1d4d9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
