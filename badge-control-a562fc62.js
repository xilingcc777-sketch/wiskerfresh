var WegicBadgeControl=(()=>{var a="wegic-branding-badge",p="wegic-badge",r="wegic-badge-styles",E="https://cdn.wegic.ai/static/logo.svg",u="Made in Wegic",m="https://wegic.ai",_=`
.wegic-badge {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 12px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 1);
  box-shadow:
    0px 0px 0px 1px rgba(0, 0, 0, 0.05),
    0px 4px 6px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0px;
  color: rgba(36, 36, 36, 1);
  transition: all 0.3s;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    blinkmacsystemfont,
    'Segoe UI',
    roboto,
    'Helvetica Neue',
    arial,
    'Noto Sans',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
  z-index: 9999;
  cursor: pointer;
}

.wegic-badge:hover {
  background: rgba(245, 245, 245, 1);
}

.wegic-badge:active {
  background: rgba(242, 242, 242, 1);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
}

.wegic-badge:focus {
  outline: 2px solid rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
}

.wegic-badge:focus:not(:focus-visible) {
  outline: none;
}

.wegic-badge img {
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  pointer-events: none;
}

.wegic-badge span {
  user-select: none;
}
`;function f(t){var e;if(t.getElementById(r))return;let n=t.createElement("style");n.id=r,n.textContent=_,(e=t.head)==null||e.appendChild(n)}function w(t,n){f(t);let e=t.createElement("div");e.id=a,e.className=p,e.setAttribute("role","link"),e.setAttribute("tabindex","0"),e.setAttribute("aria-label","Visit Wegic website");let s=n.badgeUrl||E,l=n.text||u,o=n.linkUrl||m,g=()=>window.open(o,"_blank","noopener,noreferrer");e.addEventListener("click",g),e.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),g())});let i=t.createElement("img");i.src=s,i.alt="Wegic",i.loading="lazy";let c=t.createElement("span");return c.textContent=l,e.appendChild(i),e.appendChild(c),e}function b(t,n){let e=t.getElementById(a);return!e&&t.body&&(e=w(t,n),t.body.appendChild(e)),e&&(e.style.display=n.visible?"flex":"none"),e}function x(t){var n,e;(n=t.getElementById(a))==null||n.remove(),(e=t.getElementById(r))==null||e.remove()}function B(t=document){if(typeof window=="undefined"||!t)return;if(window.__WEGIC_BADGE_CONTROL_UNMOUNT__)return window.__WEGIC_BADGE_CONTROL_UNMOUNT__;let n=window.location.hostname,e=n.includes(".e2b.app"),s=n.includes("pre.wegic.");b(t,{visible:!e&&!s});let o=()=>{x(t),delete window.__WEGIC_BADGE_CONTROL_UNMOUNT__};return window.__WEGIC_BADGE_CONTROL_UNMOUNT__=o,o}(async()=>(document.readyState==="loading"&&await new Promise(t=>{document.addEventListener("DOMContentLoaded",()=>t(),{once:!0})}),B()))();})();
//# sourceMappingURL=badge-control.js.map