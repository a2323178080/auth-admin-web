import{T as A,L as M,H as z}from"./link-breadcrumb-a8136315.js";import{r as c,ao as B,ap as H,c as T,a as $,j as o,B as q,M as D,m as v,an as V,b as F}from"./index-b4d424f9.js";function U(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const L={};function k(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&L[e[0]]||(typeof e[0]=="string"&&(L[e[0]]=new Date),U(...e))}const P=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function C(t,e,n){t.loadNamespaces(e,P(t,n))}function E(t,e,n,s){typeof n=="string"&&(n=[n]),n.forEach(l=>{t.options.ns.indexOf(l)<0&&t.options.ns.push(l)}),t.loadLanguages(e,P(t,s))}function Q(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=e.languages[0],l=e.options?e.options.fallbackLng:!1,a=e.languages[e.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const p=(y,b)=>{const i=e.services.backendConnector.state[`${y}|${b}`];return i===-1||i===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!p(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(s,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||p(s,t)&&(!l||p(a,t)))}function J(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(k("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(l,a)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!a(l.isLanguageChangingTo,t))return!1}}):Q(t,e,n)}const Y=c.createContext();class O{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const W=(t,e)=>{const n=c.useRef();return c.useEffect(()=>{n.current=e?n.current:t},[t,e]),n.current};function j(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:s,defaultNS:l}=c.useContext(Y)||{},a=n||s||H();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new O),!a){k("You will need to pass in an i18next instance by using initReactI18next");const m=(S,h)=>typeof h=="string"?h:h&&typeof h=="object"&&typeof h.defaultValue=="string"?h.defaultValue:Array.isArray(S)?S[S.length-1]:S,x=[m,{},!1];return x.t=m,x.i18n={},x.ready=!1,x}a.options.react&&a.options.react.wait!==void 0&&k("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const p={...B(),...a.options.react,...e},{useSuspense:y,keyPrefix:b}=p;let i=t||l||a.options&&a.options.defaultNS;i=typeof i=="string"?[i]:i||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(i);const r=(a.isInitialized||a.initializedStoreOnce)&&i.every(m=>J(m,a,p));function f(){return a.getFixedT(e.lng||null,p.nsMode==="fallback"?i:i[0],b)}const[d,w]=c.useState(f);let g=i.join();e.lng&&(g=`${e.lng}${g}`);const N=W(g),u=c.useRef(!0);c.useEffect(()=>{const{bindI18n:m,bindI18nStore:x}=p;u.current=!0,!r&&!y&&(e.lng?E(a,e.lng,i,()=>{u.current&&w(f)}):C(a,i,()=>{u.current&&w(f)})),r&&N&&N!==g&&u.current&&w(f);function S(){u.current&&w(f)}return m&&a&&a.on(m,S),x&&a&&a.store.on(x,S),()=>{u.current=!1,m&&a&&m.split(" ").forEach(h=>a.off(h,S)),x&&a&&x.split(" ").forEach(h=>a.store.off(h,S))}},[a,g]);const R=c.useRef(!0);c.useEffect(()=>{u.current&&!R.current&&w(f),R.current=!1},[a,b]);const I=[d,a,r];if(I.t=d,I.i18n=a,I.ready=r,r||!r&&!y)return I;throw new Promise(m=>{e.lng?E(a,e.lng,i,()=>m()):C(a,i,()=>m())})}const G=({shopName:t,shopId:e})=>{const{t:n}=j(),[s,l]=c.useState([]),a=T(),[p,y]=c.useState(!1),b=async()=>{y(!0);try{const{data:d}=await a.usageShopDetail({id:e});(d==null?void 0:d.status)===!0?l(d.data):v.error(d.message)}catch{v.error(data.message)}},i=()=>{y(!1)};return $("div",{children:[t==="-"?"-":o(q,{className:"whitespace-pre-line",type:"link",onClick:()=>b(),children:t}),o(D,{title:o("div",{className:"mt-2 mb-5 ",children:"起始日及到期日"}),open:p,onOk:()=>{i()},onCancel:i,closeIcon:!1,className:"text-center",bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center"},width:470,children:o(A,{columns:[{title:"啟用狀態",dataIndex:"status",key:"status",render:d=>n(d)},{title:"起始日",dataIndex:"startDate",key:"startDate"},{title:"到期日",dataIndex:"expiredDate",key:"expiredDate"}],dataSource:s,pagination:!1})})]})},K=[{title:"#",dataIndex:"keyValue",onCell:(t,e)=>({rowSpan:t.rowSpan?t.rowSpan:0}),align:"center",width:70},{title:"集團名稱",dataIndex:"companyName",onCell:(t,e)=>({rowSpan:t.rowSpan?t.rowSpan:0}),render:(t,e)=>o("div",{children:e.companySum||e.companyName})},{title:"品牌名稱",dataIndex:"brandName",onCell:(t,e)=>({rowSpan:t.brandRowSpan?t.brandRowSpan:0}),render:(t,e)=>o("div",{children:e.brandSum||e.brandName||0})},{title:"分店名稱",dataIndex:"shopName",render:(t,e)=>o("div",{children:e.keyValue==="小計"||e.keyValue==="合計"?e.shopSum||e.shopName||0:o(G,{shopName:t,shopId:e.shopId})})},{title:"POS數量",dataIndex:"posTotal",key:"postTotal",children:[{title:"已啟用",dataIndex:"posActive",key:"posActive",render:(t,e)=>o("div",{children:e.posTotalSum?`${e.posTotalSum}(${e.posActiveSum})`:e.posActive||0}),width:100},{title:"未啟用",dataIndex:"posReady",key:"posReady",render:(t,e)=>o("div",{children:e.posReadySum||e.posReady||0}),width:100},{title:"已過期",dataIndex:"posExpired",key:"posExpired",render:(t,e)=>o("div",{children:e.posexpiredSum||e.posExpired||0}),width:100}]},{title:"BYOD數量",dataIndex:"byodTotal",children:[{title:"已啟用",dataIndex:"byodActive",key:"byodActive",render:(t,e)=>o("div",{children:e.byodActiveSum||e.byodActive||0}),width:100},{title:"未啟用",dataIndex:"byodReady",key:"byodReady",render:(t,e)=>o("div",{children:e.byodReadySum||e.byodReady||0}),width:100},{title:"已過期",dataIndex:"byodExpired",key:"byodExpired",render:(t,e)=>o("div",{children:e.byodExpiredSum||e.byodExpired||0}),width:100}]}];const X=t=>{let e=0;return t.forEach(n=>{n.shopList.length===0?e++:n.shopList.forEach(()=>{e++})}),e};function Z({id:t}){const e=window.innerHeight*.6,n=T(),[s,l]=c.useState({}),[a,p]=c.useState([]);c.useEffect(()=>{y()},[]);const y=async()=>{try{const{data:r}=await n.getQuantity({id:t});(r==null?void 0:r.status)===!0?(l(r.data),p(r.data.companyList),v.success(r.message)):v.error(r.message)}catch{v.error(data.message)}},b=r=>{const f=[];return r.forEach((d,w)=>{d.brandList.length===0&&d.brandList.push({key:"test",brandName:"-",shopList:[]}),d.brandList.forEach((g,N)=>{g.shopList.length===0&&g.shopList.push({key:"withoutShop",shopId:"",shopName:"-",posActive:"-",posReady:"-",posExpired:"-",posTotal:"-",byodActive:"-",byodReady:"-",byodExpired:"-"}),g.shopList.forEach((u,R)=>{R===0&&(u={...u,brandRowSpan:g.shopList.length},N===0&&(u={...u,index:N,rowSpan:X(d.brandList)})),f.push({...u,companyName:d.companyName,brandName:g.brandName,keyValue:r.indexOf(d)+1,posActive:`${u.posTotal}(${u.posActive})`})})}),f.push({...d,keyValue:"小計",rowSpan:1,brandRowSpan:1})}),f.push({keyValue:"合計",rowSpan:1,brandRowSpan:1,companyName:s.companyAllSum,brandName:s.brandAllSum,shopName:s.shopAllSum,posActive:`${s.posTotalAllSum}(${s.posActiveAllSum})`,posReady:s.posReadyAllSum,posExpired:s.posExpiredAllSum,byodActive:s.byodActiveAllSum,byodReady:s.byodReadyAllSum,byodExpired:s.byodExpiredAllSum}),f},i=r=>r.keyValue==="小計"?"bg-custom-light-gray":r.keyValue==="合計"?"bg-custom-dark-gray text-white":"";return o("div",{className:"quantity-table",children:s&&s.companyAllSum?o(A,{columns:K,dataSource:b(a),bordered:!0,pagination:!1,rowClassName:i,scroll:{y:e},className:"gray-header"}):o(A,{})})}const te=()=>{const{id:t}=V();return F(),$("div",{children:[o(M,{items:[{path:"/authroizationList",title:o("span",{className:"text-sm",children:"授權列表"})},{path:"/quantityInformation",title:o("span",{className:"text-sm",children:"數量詳情"})}]}),o(z,{returnButton:!0,title:"新增授權"}),o("div",{children:o(Z,{id:t})})]})};export{te as default};
