if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let n={};const p=e=>i(e,c),r={module:{uri:c},exports:n,require:p};a[c]=Promise.all(s.map((e=>r[e]||p(e)))).then((e=>(t(...e),n)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/342-2fc2c7af28abfb2f.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/578-dc6f1ed92ca8bf29.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/707-1c8ff40a9e3f4e6e.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/diary/map/frend_map/page-ecff52668c0ca477.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/diary/map/layout-c8de6f7af37cf198.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/diary/map/today_map/page-ea17224290b47a5f.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/diary/page-c79dd07f4b3a1148.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/kayak/navi_folder/layout-c733f5ff36f1c1c8.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/kayak/navi_folder/navi_viewing/page-9bcfcdf19b7e70a3.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/kayak/navi_folder/navigation/page-8141c728c86beb76.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/kayak/page-258a8184051322a0.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/kayak/preparation/go_kayak/page-fa69236c64b4d57c.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/kayak/preparation/layout-2ca321d305d88d9e.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/kayak/preparation/page-9460ab494a9ed70b.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/layout-fd49bb40c448b31d.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/profile/page-d324e9b7301930f2.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/app_body/profile/profile_edit/page-1ecab41700469744.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/layout-ab0b251894d6883d.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/app/page-53df1871860faa6e.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/bce60fc1-0f6ac35c65f9fb8b.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/main-8cfccf5fd044e816.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/main-app-d1f342469c330f91.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/pages/_app-b555d5e1eab47959.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/pages/_error-d79168f986538ac0.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b7c4a545c3d21b71.js",revision:"iGY6kyBplbqpricF-Utwg"},{url:"/_next/static/css/5e9250826125ad54.css",revision:"5e9250826125ad54"},{url:"/_next/static/iGY6kyBplbqpricF-Utwg/_buildManifest.js",revision:"9262961651e0d7fa108aef74f09893fc"},{url:"/_next/static/iGY6kyBplbqpricF-Utwg/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!!e&&!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
