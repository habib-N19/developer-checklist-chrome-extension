const h=function(){const n=typeof document<"u"&&document.createElement("link").relList;return n&&n.supports&&n.supports("modulepreload")?"modulepreload":"preload"}(),E=function(i){return"/"+i},u={},d=function(n,c,f){let a=Promise.resolve();if(c&&c.length>0){const r=document.getElementsByTagName("link");a=Promise.all(c.map(e=>{if(e=E(e),e in u)return;u[e]=!0;const o=e.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(!!f)for(let s=r.length-1;s>=0;s--){const l=r[s];if(l.href===e&&(!o||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const t=document.createElement("link");if(t.rel=o?"stylesheet":h,o||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),o)return new Promise((s,l)=>{t.addEventListener("load",s),t.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})}))}return a.then(()=>n()).catch(r=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r})};d(()=>import("../../../assets/js/index.FkToQ6a3.js"),__vite__mapDeps([]));d(()=>import("../../../assets/js/injected.KGyP2A0F.js"),__vite__mapDeps([]));console.log("content loaded");
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
