const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DmQWNfvE.js","./index-BDuc-e9W.js","./index-Cae3y4eT.js","./iframe-TfA4Xfru.js","./index-D-8MO0q_.js","./index-DxKRhftL.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./iframe-TfA4Xfru.js";import{af as d,ae as o,ag as i,ah as E,ai as R,aj as x,ak as y}from"./index-Cae3y4eT.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";var u={},m=d;u.createRoot=m.createRoot,u.hydrateRoot=m.hydrateRoot;var n=new Map,v=({callback:e,children:t})=>{let r=i.useRef();return i.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},w=async(e,t,r)=>{let a=await _(t,r);return new Promise(s=>{a.render(o.createElement(v,{callback:()=>s(null)},e))})},D=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},_=async(e,t)=>{let r=n.get(e);return r||(r=u.createRoot(e,t),n.set(e,r)),r},f={code:E,a:R,...x},g=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let a={...f,...t==null?void 0:t.components},s=y;return new Promise((p,l)=>{h(async()=>{const{MDXProvider:c}=await import("./index-DmQWNfvE.js");return{MDXProvider:c}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({MDXProvider:c})=>w(o.createElement(g,{showException:l,key:Math.random()},o.createElement(c,{components:a},o.createElement(s,{context:e,docsParameter:t}))),r)).then(()=>p())})},this.unmount=e=>{D(e)}}};export{S as DocsRenderer,f as defaultComponents};
