// node_modules/preact/dist/preact.mjs
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/OverflowList.tsx
var OverflowList = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ u2("ul", { ...props, class: [props.class, "overflow"].filter(Boolean).join(" "), id: props.id, children: [
    children,
    /* @__PURE__ */ u2("li", { class: "overflow-end" })
  ] });
};
var numLists = 0;
var OverflowList_default = () => {
  const id = `list-${numLists++}`;
  return {
    OverflowList: (props) => /* @__PURE__ */ u2(OverflowList, { ...props, id }),
    overflowListAfterDOMLoaded: `
document.addEventListener("nav", (e) => {
  const ul = document.getElementById("${id}")
  if (!ul) return

  const end = ul.querySelector(".overflow-end")
  if (!end) return

  const scrollContainer = ul.parentElement
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const parentUl = entry.target.parentElement
      if (!parentUl) return
      if (entry.isIntersecting) {
        parentUl.classList.remove("gradient-active")
      } else {
        parentUl.classList.add("gradient-active")
      }
    }
  }, scrollContainer ? { root: scrollContainer } : undefined)

  observer.observe(end)
  window.addCleanup(() => observer.disconnect())
})
`
  };
};

// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/i18n/locales/en-US.ts
var en_US_default = {
  components: {
    explorer: {
      title: "Explorer"
    }
  }
};

// src/i18n/locales/en-GB.ts
var en_GB_default = {
  components: {
    explorer: {
      title: "Explorer"
    }
  }
};

// src/i18n/locales/ar-SA.ts
var ar_SA_default = {
  components: {
    explorer: {
      title: "\u0627\u0644\u0645\u0633\u062A\u0639\u0631\u0636"
    }
  }
};

// src/i18n/locales/ca-ES.ts
var ca_ES_default = {
  components: {
    explorer: {
      title: "Explorador"
    }
  }
};

// src/i18n/locales/cs-CZ.ts
var cs_CZ_default = {
  components: {
    explorer: {
      title: "Proch\xE1zet"
    }
  }
};

// src/i18n/locales/de-DE.ts
var de_DE_default = {
  components: {
    explorer: {
      title: "Explorer"
    }
  }
};

// src/i18n/locales/es-ES.ts
var es_ES_default = {
  components: {
    explorer: {
      title: "Explorador"
    }
  }
};

// src/i18n/locales/fa-IR.ts
var fa_IR_default = {
  components: {
    explorer: {
      title: "\u0645\u0637\u0627\u0644\u0628"
    }
  }
};

// src/i18n/locales/fi-FI.ts
var fi_FI_default = {
  components: {
    explorer: {
      title: "Selain"
    }
  }
};

// src/i18n/locales/fr-FR.ts
var fr_FR_default = {
  components: {
    explorer: {
      title: "Explorateur"
    }
  }
};

// src/i18n/locales/he-IL.ts
var he_IL_default = {
  components: {
    explorer: {
      title: "\u05E1\u05D9\u05D9\u05E8"
    }
  }
};

// src/i18n/locales/hu-HU.ts
var hu_HU_default = {
  components: {
    explorer: {
      title: "F\xE1jlb\xF6ng\xE9sz\u0151"
    }
  }
};

// src/i18n/locales/id-ID.ts
var id_ID_default = {
  components: {
    explorer: {
      title: "Penjelajah"
    }
  }
};

// src/i18n/locales/it-IT.ts
var it_IT_default = {
  components: {
    explorer: {
      title: "Esplora"
    }
  }
};

// src/i18n/locales/ja-JP.ts
var ja_JP_default = {
  components: {
    explorer: {
      title: "\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC"
    }
  }
};

// src/i18n/locales/kk-KZ.ts
var kk_KZ_default = {
  components: {
    explorer: {
      title: "\u0417\u0435\u0440\u0442\u0442\u0435\u0443\u0448\u0456"
    }
  }
};

// src/i18n/locales/ko-KR.ts
var ko_KR_default = {
  components: {
    explorer: {
      title: "\uD0D0\uC0C9\uAE30"
    }
  }
};

// src/i18n/locales/lt-LT.ts
var lt_LT_default = {
  components: {
    explorer: {
      title: "Nar\u0161ykl\u0117"
    }
  }
};

// src/i18n/locales/nb-NO.ts
var nb_NO_default = {
  components: {
    explorer: {
      title: "Utforsker"
    }
  }
};

// src/i18n/locales/nl-NL.ts
var nl_NL_default = {
  components: {
    explorer: {
      title: "Verkenner"
    }
  }
};

// src/i18n/locales/pl-PL.ts
var pl_PL_default = {
  components: {
    explorer: {
      title: "Przegl\u0105daj"
    }
  }
};

// src/i18n/locales/pt-BR.ts
var pt_BR_default = {
  components: {
    explorer: {
      title: "Explorador"
    }
  }
};

// src/i18n/locales/ro-RO.ts
var ro_RO_default = {
  components: {
    explorer: {
      title: "Explorator"
    }
  }
};

// src/i18n/locales/ru-RU.ts
var ru_RU_default = {
  components: {
    explorer: {
      title: "\u041F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A"
    }
  }
};

// src/i18n/locales/th-TH.ts
var th_TH_default = {
  components: {
    explorer: {
      title: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2B\u0E19\u0E49\u0E32"
    }
  }
};

// src/i18n/locales/tr-TR.ts
var tr_TR_default = {
  components: {
    explorer: {
      title: "Gezgin"
    }
  }
};

// src/i18n/locales/uk-UA.ts
var uk_UA_default = {
  components: {
    explorer: {
      title: "\u041F\u0440\u043E\u0432\u0456\u0434\u043D\u0438\u043A"
    }
  }
};

// src/i18n/locales/vi-VN.ts
var vi_VN_default = {
  components: {
    explorer: {
      title: "N\u1ED9i dung"
    }
  }
};

// src/i18n/locales/zh-CN.ts
var zh_CN_default = {
  components: {
    explorer: {
      title: "\u76EE\u5F55"
    }
  }
};

// src/i18n/locales/zh-TW.ts
var zh_TW_default = {
  components: {
    explorer: {
      title: "\u63A2\u7D22"
    }
  }
};

// src/i18n/index.ts
var locales = {
  "en-US": en_US_default,
  "en-GB": en_GB_default,
  "ar-SA": ar_SA_default,
  "ca-ES": ca_ES_default,
  "cs-CZ": cs_CZ_default,
  "de-DE": de_DE_default,
  "es-ES": es_ES_default,
  "fa-IR": fa_IR_default,
  "fi-FI": fi_FI_default,
  "fr-FR": fr_FR_default,
  "he-IL": he_IL_default,
  "hu-HU": hu_HU_default,
  "id-ID": id_ID_default,
  "it-IT": it_IT_default,
  "ja-JP": ja_JP_default,
  "kk-KZ": kk_KZ_default,
  "ko-KR": ko_KR_default,
  "lt-LT": lt_LT_default,
  "nb-NO": nb_NO_default,
  "nl-NL": nl_NL_default,
  "pl-PL": pl_PL_default,
  "pt-BR": pt_BR_default,
  "ro-RO": ro_RO_default,
  "ru-RU": ru_RU_default,
  "th-TH": th_TH_default,
  "tr-TR": tr_TR_default,
  "uk-UA": uk_UA_default,
  "vi-VN": vi_VN_default,
  "zh-CN": zh_CN_default,
  "zh-TW": zh_TW_default
};
function i18n(locale) {
  return locales[locale] || en_US_default;
}

// src/components/styles/explorer.scss
var explorer_default = "@media all and (max-width: 800px) {\n  .page > #quartz-body > :not(.sidebar.left:has(.explorer)) {\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body.lock-scroll > :not(.sidebar.left:has(.explorer)) {\n    transform: translateX(100dvw);\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body .sidebar.left:has(.explorer) {\n    box-sizing: border-box;\n    position: sticky;\n    background-color: var(--light);\n    padding: 1rem 0 1rem 0;\n    margin: 0;\n  }\n  .page > #quartz-body .hide-until-loaded ~ .explorer-content {\n    display: none;\n  }\n}\n.explorer {\n  display: flex;\n  flex-direction: column;\n  overflow-y: hidden;\n  min-height: 1.2rem;\n  flex: 0 1 auto;\n}\n.explorer.collapsed {\n  flex: 0 1 1.2rem;\n}\n.explorer.collapsed .fold {\n  transform: rotateZ(-90deg);\n}\n.explorer .fold {\n  margin-left: 0.5rem;\n  transition: transform 0.3s ease;\n  opacity: 0.8;\n}\n\n@media all and (max-width: 800px) {\n  .explorer {\n    order: -1;\n    height: initial;\n    overflow: hidden;\n    flex-shrink: 0;\n    align-self: flex-start;\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n}\n.explorer button.mobile-explorer {\n  display: none;\n}\n\n.explorer button.desktop-explorer {\n  display: none;\n}\n\n@media all and (max-width: 800px) {\n  .explorer button.mobile-explorer {\n    display: flex;\n  }\n}\n.explorer-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom: 1px solid var(--lightgray);\n  margin-bottom: 0.25rem;\n  flex-shrink: 0;\n}\n.explorer-toolbar .explorer-title {\n  font-size: 0.95rem;\n  margin: 0;\n  font-weight: 600;\n  color: var(--dark);\n}\n\n.new-note-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: transparent;\n  border: none;\n  color: var(--secondary);\n  font-size: 0.8rem;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 4px;\n  transition: background 0.15s, color 0.15s;\n}\n.new-note-button:hover {\n  background: var(--highlight);\n  color: var(--tertiary);\n}\n.new-note-button svg {\n  pointer-events: none;\n}\n\n.new-note-panel {\n  position: fixed;\n  z-index: 200;\n  background: var(--light);\n  border: 1px solid var(--lightgray);\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  min-width: 280px;\n  overflow: hidden;\n}\n\n.new-note-panel-header {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--darkgray);\n  border-bottom: 1px solid var(--lightgray);\n}\n\n.new-note-panel-body {\n  padding: 0.25rem 0;\n}\n\n.command-item {\n  padding: 0.4rem 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  cursor: default;\n  transition: background 0.15s;\n}\n.command-item:hover {\n  background: var(--highlight);\n}\n.command-item code {\n  font-size: 0.78rem;\n  color: var(--secondary);\n  font-family: var(--codeFont);\n  background: transparent;\n  padding: 0;\n}\n.command-item .command-desc {\n  font-size: 0.7rem;\n  color: var(--gray);\n}\n\n.explorer-content {\n  list-style: none;\n  overflow: hidden;\n  overflow-y: auto;\n  margin-top: 0.25rem;\n  flex: 1 1 auto;\n}\n.explorer-content ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.explorer-content ul.explorer-ul {\n  overscroll-behavior: contain;\n}\n\n.explorer-content .folder-outer {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows 0.2s ease;\n}\n.explorer-content .folder-outer.open {\n  grid-template-rows: 1fr;\n}\n.explorer-content .folder-outer > ul {\n  overflow: hidden;\n  margin-left: 6px;\n  padding-left: 0.8rem;\n  border-left: 1px solid var(--lightgray);\n}\n\n.folder-container {\n  display: flex;\n  align-items: center;\n  user-select: none;\n  padding: 2px 4px;\n  border-radius: 4px;\n  transition: background 0.1s;\n}\n.folder-container:hover {\n  background: var(--highlight);\n}\n.folder-container .folder-collapse-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  font-size: 0.55rem;\n  line-height: 16px;\n  text-align: center;\n  color: var(--gray);\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: transform 0.15s ease;\n  margin-right: 2px;\n}\n.folder-container div > button {\n  color: var(--dark);\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  font-family: var(--headerFont);\n}\n.folder-container div > button span {\n  font-size: 0.88rem;\n  color: var(--dark);\n  font-weight: 500;\n  line-height: 1.5rem;\n  pointer-events: none;\n}\n.folder-container div > a {\n  color: var(--dark);\n  font-family: var(--headerFont);\n  font-size: 0.88rem;\n  font-weight: 500;\n  line-height: 1.5rem;\n  display: inline-block;\n  text-decoration: none;\n}\n.folder-container div > a:hover {\n  color: var(--tertiary);\n}\n\nli:has(> .folder-outer.open) > .folder-container .folder-collapse-icon {\n  transform: rotate(90deg);\n}\n\n.explorer-content ul li > a {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--dark);\n  opacity: 0.75;\n  pointer-events: all;\n  text-decoration: none;\n  padding: 2px 4px;\n  border-radius: 4px;\n  transition: background 0.1s, opacity 0.1s;\n}\n.explorer-content ul li > a:hover {\n  background: var(--highlight);\n  opacity: 0.9;\n}\n.explorer-content ul li > a .file-bullet {\n  font-size: 0.5rem;\n  color: var(--gray);\n  flex-shrink: 0;\n  width: 14px;\n  text-align: center;\n}\n.explorer-content ul li > a .file-title-text {\n  font-size: 0.85rem;\n}\n.explorer-content ul li > a.active, .explorer-content ul li > a.is-active {\n  opacity: 1;\n  color: var(--tertiary);\n  background: var(--highlight);\n  font-weight: 600;\n}\n.explorer-content ul li > a.active .file-bullet, .explorer-content ul li > a.is-active .file-bullet {\n  color: var(--tertiary);\n}\n\n@media all and (max-width: 800px) {\n  .explorer.collapsed {\n    flex: 0 0 34px;\n  }\n  .explorer.collapsed > .explorer-content {\n    transform: translateX(-100vw);\n    visibility: hidden;\n  }\n  .explorer:not(.collapsed) {\n    flex: 0 0 34px;\n  }\n  .explorer:not(.collapsed) > .explorer-content {\n    transform: translateX(0);\n    visibility: visible;\n  }\n  .explorer .explorer-content {\n    box-sizing: border-box;\n    z-index: 100;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-top: 0;\n    background-color: var(--light);\n    max-width: 100vw;\n    width: 100vw;\n    transform: translateX(-100vw);\n    transition: transform 200ms ease, visibility 200ms ease;\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 4rem 0 2rem 0;\n    height: 100dvh;\n    max-height: 100dvh;\n    visibility: hidden;\n  }\n  .explorer .mobile-explorer {\n    margin: 0;\n    padding: 5px;\n    z-index: 101;\n  }\n  .explorer .mobile-explorer.hide-until-loaded {\n    display: none;\n  }\n  .explorer .mobile-explorer .lucide-menu {\n    stroke: var(--darkgray);\n  }\n  .mobile-no-scroll .explorer-content > .explorer-ul {\n    overscroll-behavior: contain;\n  }\n}";

// src/components/scripts/explorer.inline.ts
var explorer_inline_default = 'var _=Object.hasOwnProperty;function S(u){let e=W(P(u,"index"),!0);return e.length===0?"/":e}function T(){return typeof document>"u"?"":document.body?.dataset?.basepath??""}function v(u,e){let t=e??T(),D=u.startsWith("/")?u:"/"+u;return t+D}function k(u,e){return u===e||u.endsWith("/"+e)}function P(u,e){return k(u,e)&&(u=u.slice(0,-e.length)),u}function W(u,e){return u.startsWith("/")&&(u=u.substring(1)),!e&&u.endsWith("/")&&(u=u.slice(0,-1)),u}var y=class u{constructor(e,t){this.children=[],this.slugSegments=e,this.data=t||null,this.isFolder=!1,this.fileSegmentHint=null,this.displayNameOverride=void 0}get displayName(){return this.displayNameOverride!==void 0?this.displayNameOverride:(this.data?.title==="index"?void 0:this.data?.title)||this.fileSegmentHint||this.slugSegment||""}set displayName(e){this.displayNameOverride=e}get slug(){let e=this.slugSegments.join("/");return this.isFolder?e+"/index":e}get slugSegment(){return this.slugSegments[this.slugSegments.length-1]||""}makeChild(e,t){let D=[...this.slugSegments,e[0]],r=new u(D,t);return this.children.push(r),r}insert(e,t){if(e.length===0)return;this.isFolder=!0;let D=e[0];if(e.length===1)D==="index"?this.data||(this.data=t):this.makeChild(e,t);else{let r=this.children.find(F=>F.slugSegment===D);r||(r=this.makeChild(e,void 0));let n=(t.filePath||t.slug||"").split("/");r.fileSegmentHint=n[n.length-e.length],r.insert(e.slice(1),t)}}add(e){this.insert(e.slug.split("/"),e)}sort(e){this.children.sort(e),this.children.forEach(t=>t.sort(e))}filter(e){this.children=this.children.filter(e),this.children.forEach(t=>t.filter(e))}map(e){e(this),this.children.forEach(t=>t.map(e))}static fromEntries(e){let t=new u([],null);return e.forEach(([,D])=>t.add(D)),t}},I=(u,e)=>!u.isFolder&&!e.isFolder||u.isFolder&&e.isFolder?u.displayName.localeCompare(e.displayName,void 0,{numeric:!0,sensitivity:"base"}):!u.isFolder&&e.isFolder?1:-1,O=u=>u.slugSegment!=="tags";function R(u,e,t,D){return t&&u.filter(t),D&&u.map(D),e&&u.sort(e),u}async function j(u){try{console.log("[Explorer] Fetching content index...");let e=await fetchData;if(console.log("[Explorer] Fetched data keys:",Object.keys(e).slice(0,5)),!e)return console.error("[Explorer] No data received"),null;let t=e.content||e,D=Object.entries(t);if(console.log("[Explorer] Entry count:",D.length),D.length===0)return console.warn("[Explorer] No content entries found"),null;let r=y.fromEntries(D);console.log("[Explorer] Trie root children:",r.children.length);let n=I,F=O,d=null;if(u)try{let C=JSON.parse(u);C.sortFn&&(n=new Function("a","b","return ("+C.sortFn+")(a, b)")),C.filterFn&&(F=new Function("node","return ("+C.filterFn+")(node)")),C.mapFn&&(d=new Function("node","("+C.mapFn+")(node)"))}catch(C){console.error("Error parsing data functions:",C)}return R(r,n,F,d)}catch(e){return console.error("Error building file trie:",e),null}}var b=0;function w(u,e,t,D,r,n=""){let F=document.getElementById("template-folder"),d=document.getElementById("template-file");if(!F||!d)return;let C=n?n+"/"+u.slugSegment:u.slugSegment,a=S(t);if(u.isFolder){let l=F.content.cloneNode(!0),s=l.querySelector(".folder-container"),A=l.querySelector(".folder-button"),m=l.querySelector(".folder-title"),o=l.querySelector(".folder-outer"),i=l.querySelector(".content");if(m&&(m.textContent=u.displayName||u.slugSegment),s&&(s.dataset.folderpath=u.slug),D==="link"&&A){let c=document.createElement("a");c.className=A.className;let h=S(u.slug);c.href=v(h||""),m?c.appendChild(m):c.textContent=u.displayName||u.slugSegment,A.replaceWith(c),A=c}let f=r[u.slug]!==void 0?r[u.slug]:!0,E=S(u.slug),B=E&&E===a.slice(0,E.length);if((!f||B)&&o&&o.classList.add("open"),u.children&&u.children.length>0&&i)for(let c of u.children)w(c,i,t,D,r,C);e.appendChild(l)}else if(u.data){let l=d.content.cloneNode(!0),s=l.querySelector("a");if(s){s.href=v(u.data.slug);let A=s.querySelector(".file-title-text");A?A.textContent=u.displayName||u.slugSegment:s.textContent=u.displayName||u.slugSegment,u.data.slug===t&&s.classList.add("active","is-active")}e.appendChild(l)}}async function L(u){let e=++b;try{console.log("[Explorer] Nav event received, generation:",e);let t=(u.detail?.url||"").replace(/^\\/+/,""),D=document.querySelectorAll("div.explorer");console.log("[Explorer] Found",D.length,"explorers");let r={};try{JSON.parse(localStorage.getItem("fileTree")||"[]").forEach(F=>{r[F.path]=F.collapsed})}catch(n){console.error("[Explorer] Error loading saved state:",n)}for(let n of D){let F=n.querySelector(".explorer-ul");if(!F){console.warn("[Explorer] No explorer-ul found");continue}F.innerHTML=\'<li class="overflow-end"></li>\';let d=n.dataset.dataFns,C=n.dataset.behavior||"collapse";console.log("[Explorer] Starting tree build...");let a=await j(d);if(e===b){if(console.log("[Explorer] Render generation is current, rendering tree"),console.log("[Explorer] Trie result:",a?"success":"null"),a&&a.children&&a.children.length>0){F.innerHTML=\'<li class="overflow-end"></li>\',console.log("[Explorer] Rendering",a.children.length,"children");for(let i of a.children)w(i,F,t,C,r,"");console.log("[Explorer] Render complete, final list length:",F.children.length)}else console.warn("[Explorer] No trie or empty children");let o=sessionStorage.getItem("explorerScrollTop");if(o)F.scrollTop=parseInt(o,10);else{let i=F.querySelector(".active");i&&i.scrollIntoView({behavior:"smooth"})}}else console.log("[Explorer] Stale render generation, skipping tree render");let l=[],s=n.getElementsByClassName("explorer-toggle");for(let o of s){let i=function(){let f=this.closest(".explorer");if(!f)return;let E=f.classList.toggle("collapsed");f.setAttribute("aria-expanded",E?"false":"true"),E?document.documentElement.classList.remove("mobile-no-scroll"):document.documentElement.classList.add("mobile-no-scroll")};o.addEventListener("click",i),l.push(()=>o.removeEventListener("click",i))}let A=n.getElementsByClassName("folder-collapse-icon");for(let o of A){let i=function(f){f.stopPropagation();let E=this.parentElement;if(!E)return;let B=E.nextElementSibling;if(!B)return;B.classList.toggle("open");let c=!B.classList.contains("open"),h=E.dataset.folderpath,g=JSON.parse(localStorage.getItem("fileTree")||"[]"),p=g.findIndex(x=>x.path===h);p>=0?g[p].collapsed=c:g.push({path:h,collapsed:c}),localStorage.setItem("fileTree",JSON.stringify(g))};o.addEventListener("click",i),l.push(()=>o.removeEventListener("click",i))}let m=n.getElementsByClassName("folder-button");for(let o of m){let i=function(f){let E=this.closest(".folder-container");if(!E)return;let B=n.dataset.behavior||"collapse",c=E.nextElementSibling,h=E.dataset.folderpath;if(B!=="link"){if(f.stopPropagation(),!c)return;c.classList.toggle("open");let g=!c.classList.contains("open"),p=JSON.parse(localStorage.getItem("fileTree")||"[]"),x=p.findIndex(N=>N.path===h);x>=0?p[x].collapsed=g:p.push({path:h,collapsed:g}),localStorage.setItem("fileTree",JSON.stringify(p))}};o.addEventListener("click",i),l.push(()=>o.removeEventListener("click",i))}typeof window<"u"&&window.addCleanup&&window.addCleanup(()=>l.forEach(o=>o()))}for(let n of document.getElementsByClassName("explorer")){let F=n.querySelector(".mobile-explorer");F&&(F.classList.remove("hide-until-loaded"),F.checkVisibility&&F.checkVisibility()&&(n.classList.add("collapsed"),n.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll")))}}catch(t){console.error("[Explorer] Fatal error in nav handler:",t)}}document.addEventListener("nav",L);document.addEventListener("render",L);document.addEventListener("prenav",()=>{let u=document.querySelector(".explorer-ul");u&&sessionStorage.setItem("explorerScrollTop",u.scrollTop.toString())});function q(u){let e=u.querySelector(".new-note-button");if(!e)return;let t=document.getElementById("template-new-note-panel");if(!t)return;let D=null,r=null,n=null;function F(){D&&(D.remove(),D=null),r&&(document.removeEventListener("keydown",r),r=null),n&&(document.removeEventListener("click",n),n=null)}e.addEventListener("click",d=>{if(d.stopPropagation(),D){F();return}let a=t.content.cloneNode(!0).querySelector(".new-note-panel");if(!a)return;let l=e.getBoundingClientRect();a.style.top=`${l.bottom+4}px`,a.style.right=`${window.innerWidth-l.right}px`,document.body.appendChild(a),D=a,r=function(s){s.key==="Escape"&&F()},document.addEventListener("keydown",r),setTimeout(()=>{n=function(s){D&&!D.contains(s.target)&&s.target!==e&&F()},document.addEventListener("click",n)},0)})}document.addEventListener("nav",()=>{for(let u of document.querySelectorAll("div.explorer"))u.hasAttribute("data-new-note-bound")||(u.setAttribute("data-new-note-bound","true"),q(u))});\n';

// src/components/Explorer.tsx
var defaultOptions = {
  folderDefaultState: "collapsed",
  folderClickBehavior: "link",
  useSavedState: true,
  mapFn: (node) => {
    return node;
  },
  sortFn: (a2, b2) => {
    if (!a2.isFolder && !b2.isFolder || a2.isFolder && b2.isFolder) {
      return (a2.displayName || "").localeCompare(b2.displayName || "", void 0, {
        numeric: true,
        sensitivity: "base"
      });
    }
    if (!a2.isFolder && b2.isFolder) {
      return 1;
    }
    return -1;
  },
  filterFn: (node) => node.slugSegment !== "tags",
  order: ["filter", "map", "sort"]
};
var numExplorers = 0;
function concatenateResources(...resources) {
  return resources.filter((r2) => !!r2).join("\n");
}
var Explorer_default = ((userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  const { OverflowList: OverflowList2, overflowListAfterDOMLoaded } = OverflowList_default();
  const ExplorerComponent = (props) => {
    const { cfg } = props;
    const displayClass = props.displayClass;
    const id = `explorer-${numExplorers++}`;
    const locale = cfg?.locale ?? "en-US";
    const title = opts.title ?? i18n(locale).components.explorer.title;
    return /* @__PURE__ */ u2(
      "div",
      {
        class: classNames(displayClass, "explorer", "nav-files-container"),
        "data-behavior": opts.folderClickBehavior,
        "data-collapsed": opts.folderDefaultState,
        "data-savestate": opts.useSavedState,
        "data-data-fns": JSON.stringify({
          order: opts.order,
          sortFn: opts.sortFn?.toString(),
          filterFn: opts.filterFn?.toString(),
          mapFn: opts.mapFn?.toString()
        }),
        children: [
          /* @__PURE__ */ u2(
            "button",
            {
              type: "button",
              class: "explorer-toggle mobile-explorer hide-until-loaded",
              "data-mobile": true,
              "aria-controls": id,
              "aria-label": i18n(cfg?.locale ?? "en-US").components.explorer.title,
              children: /* @__PURE__ */ u2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "lucide-menu",
                  children: [
                    /* @__PURE__ */ u2("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                    /* @__PURE__ */ u2("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                    /* @__PURE__ */ u2("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ u2("div", { class: "explorer-toolbar", children: [
            /* @__PURE__ */ u2("span", { class: "explorer-title", children: title }),
            /* @__PURE__ */ u2("button", { type: "button", class: "new-note-button", "aria-label": "\u65B0\u5EFA\u7B14\u8BB0", children: [
              /* @__PURE__ */ u2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  children: [
                    /* @__PURE__ */ u2("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                    /* @__PURE__ */ u2("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
                  ]
                }
              ),
              /* @__PURE__ */ u2("span", { children: "\u65B0\u5EFA" })
            ] })
          ] }),
          /* @__PURE__ */ u2(
            "button",
            {
              type: "button",
              class: "title-button explorer-toggle desktop-explorer",
              "data-mobile": false,
              "aria-expanded": true,
              children: [
                /* @__PURE__ */ u2("h2", { children: title }),
                /* @__PURE__ */ u2(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
                    viewBox: "5 8 14 8",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "fold",
                    children: /* @__PURE__ */ u2("polyline", { points: "6 9 12 15 18 9" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ u2("div", { id, class: "explorer-content", "aria-expanded": false, role: "group", children: /* @__PURE__ */ u2(OverflowList2, { class: "explorer-ul" }) }),
          /* @__PURE__ */ u2("template", { id: "template-file", children: /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href: "#", class: "nav-file-title tree-item-self", children: [
            /* @__PURE__ */ u2("span", { class: "file-bullet", children: "\u25CF" }),
            /* @__PURE__ */ u2("span", { class: "file-title-text" })
          ] }) }) }),
          /* @__PURE__ */ u2("template", { id: "template-folder", children: /* @__PURE__ */ u2("li", { children: [
            /* @__PURE__ */ u2("div", { class: "folder-container nav-folder-title tree-item-self", children: [
              /* @__PURE__ */ u2("span", { class: "folder-collapse-icon", children: "\u25B6" }),
              /* @__PURE__ */ u2("div", { children: /* @__PURE__ */ u2("button", { class: "folder-button", children: /* @__PURE__ */ u2("span", { class: "folder-title" }) }) })
            ] }),
            /* @__PURE__ */ u2("div", { class: "folder-outer", children: /* @__PURE__ */ u2("ul", { class: "content tree-item-children" }) })
          ] }) }),
          /* @__PURE__ */ u2("template", { id: "template-new-note-panel", children: /* @__PURE__ */ u2("div", { class: "new-note-panel", children: [
            /* @__PURE__ */ u2("div", { class: "new-note-panel-header", children: /* @__PURE__ */ u2("span", { children: "\u7EC8\u7AEF\u65B0\u5EFA\u547D\u4EE4" }) }),
            /* @__PURE__ */ u2("div", { class: "new-note-panel-body", children: [
              /* @__PURE__ */ u2("div", { class: "command-item", children: [
                /* @__PURE__ */ u2("code", { children: 'note new learning "\u6807\u9898"' }),
                /* @__PURE__ */ u2("span", { class: "command-desc", children: "\u5B66\u4E60\u7B14\u8BB0 \u2192 notes/learning/" })
              ] }),
              /* @__PURE__ */ u2("div", { class: "command-item", children: [
                /* @__PURE__ */ u2("code", { children: 'note new idea "\u6807\u9898"' }),
                /* @__PURE__ */ u2("span", { class: "command-desc", children: "\u60F3\u6CD5\u7B14\u8BB0 \u2192 notes/ideas/" })
              ] }),
              /* @__PURE__ */ u2("div", { class: "command-item", children: [
                /* @__PURE__ */ u2("code", { children: 'note new project "\u9879\u76EE\u540D"' }),
                /* @__PURE__ */ u2("span", { class: "command-desc", children: "\u9879\u76EE \u2192 projects/<\u540D>/" })
              ] }),
              /* @__PURE__ */ u2("div", { class: "command-item", children: [
                /* @__PURE__ */ u2("code", { children: 'note capture "\u5185\u5BB9"' }),
                /* @__PURE__ */ u2("span", { class: "command-desc", children: "\u5FEB\u901F\u6355\u83B7 \u2192 inbox/" })
              ] }),
              /* @__PURE__ */ u2("div", { class: "command-item", children: [
                /* @__PURE__ */ u2("code", { children: "note daily" }),
                /* @__PURE__ */ u2("span", { class: "command-desc", children: "\u4ECA\u65E5\u8BB0\u5F55 \u2192 daily/" })
              ] })
            ] })
          ] }) })
        ]
      }
    );
  };
  ExplorerComponent.css = explorer_default;
  ExplorerComponent.afterDOMLoaded = concatenateResources(explorer_inline_default, overflowListAfterDOMLoaded);
  return ExplorerComponent;
});

export { Explorer_default as Explorer };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map