"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6167],{2987:(e,t,n)=>{function a(e){const t="CssEditor-css",n=document.head||document.getElementsByTagName("head")[0],a=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");t.className=e,t.type="text/css";const n=window.__SUPERSER_CSP_NONCE__||"";return n&&t.setAttribute("nonce",n),t}(t);return"styleSheet"in a?a.styleSheet.cssText=e:a.innerHTML=e,n.appendChild(a),function(){a.remove()}}n.d(t,{A:()=>a})},33132:(e,t,n)=>{n.d(t,{R:()=>s,W:()=>a});const a=(e,t)=>Object.fromEntries(Object.values(e).filter((e=>e[t])).map((e=>[e.id,e[t]]))),s=({chartConfiguration:e,nativeFilters:t,dataMask:n,allSliceIds:a})=>{const s={},i=Object.values(n).some((({id:e})=>{var n;const a=null==t||null==(n=t[e])||null==(n=n.scope)?void 0:n.selectedLayers;return a&&a.length>0}));let r=[],o=[];return i&&Object.values(n).forEach((({id:e})=>{var n,a;const s=null==t||null==(n=t[e])||null==(n=n.scope)?void 0:n.selectedLayers,i=(null==t||null==(a=t[e])||null==(a=a.scope)?void 0:a.excluded)||[];s&&s.length>0&&(r=s,o=i)})),Object.values(n).forEach((({id:n,extraFormData:l={}})=>{var d,c,u,h,p,f,b,v,m;let g=null!=(d=null!=(c=null!=(u=null==t||null==(h=t[n])?void 0:h.chartsInScope)?u:null==e||null==(p=e[parseInt(n,10)])||null==(p=p.crossFilters)?void 0:p.chartsInScope)?c:a)?d:[];const y=null==t||null==(f=t[n])?void 0:f.filterType,S=null==t||null==(b=t[n])?void 0:b.targets;let w,E=null==t||null==(v=t[n])||null==(v=v.scope)?void 0:v.selectedLayers,x=(null==t||null==(m=t[n])||null==(m=m.scope)?void 0:m.excluded)||[];if(!i||E&&0!==E.length||(E=r,x=o),E&&E.length>0){const e=(e=>{const t={},n=new Set;return e.forEach((e=>{const a=e.match(/^chart-(\d+)-layer-(\d+)$/);if(a){const e=parseInt(a[1],10),s=parseInt(a[2],10);Number.isNaN(e)||(t[e]||(t[e]=[]),t[e].push(s),n.add(e))}})),{layerMap:t,chartIds:n}})(E);w=e.layerMap;const t=new Set(e.chartIds);g.forEach((e=>{x.includes(e)||E.some((t=>t.startsWith(`chart-${e}-layer-`)))||t.add(e)})),g=Array.from(t)}else g=g.filter((e=>!x.includes(e)));s[n]={scope:g,targets:S||[],values:l,filterType:y,...w&&{layerScope:w}}})),s}},36167:(e,t,n)=>{n.r(t),n.d(t,{DashboardPage:()=>he,DashboardPageIdContext:()=>le,default:()=>pe});var a=n(2445),s=n(96540),i=n(17437),r=n(61574),o=n(50290),l=n(74098),d=n(61225),c=n(10381),u=n(64457),h=n(92998),p=n(98244),f=n(48813),b=n(30483),v=n(2987),m=n(33132),g=n(15830),y=n(24777),S=n(85923),w=n(31296),E=n(91448),x=n(78929),C=n(82960),I=n(5556),_=n.n(I),D=n(89232),O=n(32064),F=n(29624);function $(e){return Object.values(e).reduce(((e,t)=>(t&&t.type===F.oT&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e)),[])}var j=n(68064),k=n(50816),M=n(37203),R=n(95553);const T=[F.oT,F.xY,F.rG];function U(e){return!Object.values(e).some((({type:e})=>e&&T.includes(e)))}var z=n(37926);const P={actions:_().shape({addSliceToDashboard:_().func.isRequired,removeSliceFromDashboard:_().func.isRequired,triggerQuery:_().func.isRequired,logEvent:_().func.isRequired,clearDataMaskState:_().func.isRequired}).isRequired,dashboardId:_().number.isRequired,editMode:_().bool,isPublished:_().bool,hasUnsavedChanges:_().bool,slices:_().objectOf(j.VE).isRequired,activeFilters:_().object.isRequired,chartConfiguration:_().object,datasources:_().object.isRequired,ownDataCharts:_().object.isRequired,layout:_().object.isRequired,impressionId:_().string.isRequired,timeout:_().number,userId:_().string,children:_().node};class A extends s.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",A.unload):window.removeEventListener("beforeunload",A.unload)}static unload(){const e=(0,l.t)("You have unsaved changes.");return window.event.returnValue=e,e}constructor(e){var t,n;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(n=e.ownDataCharts)?n:{},this.onVisibilityChange=this.onVisibilityChange.bind(this)}componentDidMount(){const e=(0,O.Ay)(),{editMode:t,isPublished:n,layout:a}=this.props,s={is_soft_navigation:k.Vy.timeOriginOffset>0,is_edit_mode:t,mount_duration:k.Vy.getTimestamp(),is_empty:U(a),is_published:n,bootstrap_data_length:e.length},i=(0,R.A)();i&&(s.target_id=i),this.props.actions.logEvent(k.es,s),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:k.Vy.getTimestamp(),ts:(new Date).getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(){this.applyCharts()}UNSAFE_componentWillReceiveProps(e){const t=$(this.props.layout),n=$(e.layout);this.props.dashboardId===e.dashboardId&&(t.length<n.length?n.filter((e=>-1===t.indexOf(e))).forEach((t=>{return this.props.actions.addSliceToDashboard(t,(n=e.layout,a=t,Object.values(n).find((e=>e&&e.type===F.oT&&e.meta&&e.meta.chartId===a))));var n,a})):t.length>n.length&&t.filter((e=>-1===n.indexOf(e))).forEach((e=>this.props.actions.removeSliceFromDashboard(e))))}applyCharts(){const{activeFilters:e,ownDataCharts:t,chartConfiguration:n,hasUnsavedChanges:a,editMode:s}=this.props,{appliedFilters:i,appliedOwnDataCharts:r}=this;n&&(s||(0,M.r$)(r,t,{ignoreUndefined:!0})&&(0,M.r$)(i,e,{ignoreUndefined:!0})||this.applyFilters(),a?A.onBeforeUnload(!0):A.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:k.Vy.getTimestamp(),ts:(new Date).getTime()};else if("visible"===document.visibilityState){const e=this.visibilityEventData.start_offset;this.props.actions.logEvent(k.Xj,{...this.visibilityEventData,duration:k.Vy.getTimestamp()-e})}}applyFilters(){const{appliedFilters:e}=this,{activeFilters:t,ownDataCharts:n,slices:a}=this.props,s=Object.keys(t),i=Object.keys(e),r=new Set(s.concat(i)),o=((e,t)=>{const n=Object.keys(e),a=Object.keys(t),s=(i=n,r=a,[...i.filter((e=>!r.includes(e))),...r.filter((e=>!i.includes(e)))]).filter((n=>e[n]||t[n]));var i,r;return new Set([...n,...a]).forEach((n=>{(0,M.r$)(e[n],t[n])||s.push(n)})),[...new Set(s)]})(n,this.appliedOwnDataCharts);[...r].forEach((n=>{if(!s.includes(n)&&i.includes(n))o.push(...(0,z.z)(n,e[n],a));else if(i.includes(n)){if((0,M.r$)(e[n].values,t[n].values,{ignoreUndefined:!0})||o.push(...(0,z.z)(n,t[n],a)),!(0,M.r$)(e[n].scope,t[n].scope)){const a=(t[n].scope||[]).concat(e[n].scope||[]);o.push(...a)}}else o.push(...(0,z.z)(n,t[n],a))})),this.refreshCharts([...new Set(o)]),this.appliedFilters=t,this.appliedOwnDataCharts=n}refreshCharts(e){e.forEach((e=>{this.props.actions.triggerQuery(!0,e)}))}render(){return this.context.loading?(0,a.Y)(h.R,{}):this.props.children}}A.contextType=D.bf,A.propTypes=P,A.defaultProps={timeout:60,userId:""};const q=A;var L=n(92083),V=n(25875),Y=n(35352);const N=(0,d.Ng)((function(e){var t,n;const{datasources:a,sliceEntities:s,dashboardInfo:i,dashboardState:r,dashboardLayout:o,impressionId:l}=e;return{timeout:null==(t=i.common)||null==(t=t.conf)?void 0:t.SUPERSET_WEBSERVER_TIMEOUT,userId:i.userId,dashboardId:i.id,editMode:r.editMode,isPublished:r.isPublished,hasUnsavedChanges:r.hasUnsavedChanges,datasources:a,chartConfiguration:null==(n=i.metadata)?void 0:n.chart_configuration,slices:s.slices,layout:o.present,impressionId:l}}),(function(e){return{actions:(0,C.zH)({setDatasources:b.nC,clearDataMaskState:Y.V9,addSliceToDashboard:E.ft,removeSliceFromDashboard:E.Hg,triggerQuery:L.triggerQuery,logEvent:V.logEvent},e)}}))(q);var H=n(31780);function W({children:e,themeId:t}){const n=(0,H.w)(),[i,r]=(0,s.useState)(null);return(0,s.useEffect)((()=>{t?(async()=>{try{const e=await n.createDashboardThemeProvider(String(t));r(e)}catch(e){console.error("Failed to load dashboard theme:",e),r(null)}})():r(null)}),[t,n]),t?i?(0,a.Y)(i.SupersetThemeProvider,{children:e}):(0,a.Y)(h.R,{}):(0,a.Y)(a.FK,{children:e})}var B=n(43561);const X=e=>i.AH`
  body {
    h1 {
      font-weight: ${e.fontWeightStrong};
      line-height: 1.4;
      font-size: ${e.fontSizeXXL}px;
      letter-spacing: -0.2px;
      margin-top: ${3*e.sizeUnit}px;
      margin-bottom: ${3*e.sizeUnit}px;
    }

    h2 {
      font-weight: ${e.fontWeightStrong};
      line-height: 1.4;
      font-size: ${e.fontSizeXL}px;
      margin-top: ${3*e.sizeUnit}px;
      margin-bottom: ${2*e.sizeUnit}px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: ${e.fontWeightStrong};
      line-height: 1.4;
      font-size: ${e.fontSizeLG}px;
      letter-spacing: 0.2px;
      margin-top: ${2*e.sizeUnit}px;
      margin-bottom: ${e.sizeUnit}px;
    }
  }
`,K=e=>i.AH`
  .header-title a {
    margin: ${e.sizeUnit/2}px;
    padding: ${e.sizeUnit/2}px;
  }
  .header-controls {
    &,
    &:hover {
      margin-top: ${e.sizeUnit}px;
    }
  }
`,Q=e=>i.AH`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.sizeUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.sizeUnit}px;
    min-width: ${40*e.sizeUnit}px;
  }
`,G=e=>i.AH`
  a,
  .ant-tabs-tabpane,
  .ant-tabs-tab-btn,
  .superset-button,
  .superset-button.ant-dropdown-trigger,
  .header-controls span {
    &:focus-visible {
      box-shadow: 0 0 0 2px ${e.colorPrimaryText};
      border-radius: ${e.borderRadius}px;
      outline: none;
      text-decoration: none;
    }
    &:not(
      .superset-button,
      .ant-menu-item,
      a,
      .fave-unfave-icon,
      .ant-tabs-tabpane,
      .header-controls span
    ) {
      &:focus-visible {
        padding: ${e.sizeUnit/2}px;
      }
    }
  }
`;var J=n(71086),Z=n.n(J),ee=n(44383),te=n.n(ee),ne=n(78752);const ae={},se=()=>{const e=(0,y.Gq)(y.Hh.DashboardExploreContext,{});return Z()(e,(e=>!e.isRedundant))},ie=(e,t)=>{const n=se();(0,y.SO)(y.Hh.DashboardExploreContext,{...n,[e]:{...t,dashboardPageId:e}})},re=(0,c.Mz)([e=>e.dashboardInfo.metadata,e=>e.dashboardInfo.id,e=>{var t;return null==(t=e.dashboardState)?void 0:t.colorScheme},e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters},e=>e.dataMask,e=>{var t;return(null==(t=e.dashboardState)?void 0:t.sliceIds)||[]}],((e,t,n,a,s,i)=>{const r=Object.keys(a).reduce(((e,t)=>(e[t]=te()(a[t],["chartsInScope"]),e)),{}),o=(0,m.R)({chartConfiguration:(null==e?void 0:e.chart_configuration)||ae,nativeFilters:a,dataMask:s,allSliceIds:i});return{labelsColor:(null==e?void 0:e.label_colors)||ae,labelsColorMap:(null==e?void 0:e.map_label_colors)||ae,sharedLabelsColors:(0,ne.ik)(null==e?void 0:e.shared_label_colors),colorScheme:n,chartConfiguration:(null==e?void 0:e.chart_configuration)||ae,nativeFilters:r,dataMask:s,dashboardId:t,filterBoxFilters:(0,g.ug)(),activeFilters:o}})),oe=({dashboardPageId:e})=>{const t=(0,d.d4)(re);return(0,s.useEffect)((()=>(ie(e,t),()=>{ie(e,{...t,isRedundant:!0})})),[t,e]),null},le=(0,s.createContext)(""),de=(0,s.lazy)((()=>Promise.all([n.e(8096),n.e(7970),n.e(683),n.e(3149),n.e(9644),n.e(117),n.e(2483),n.e(1859),n.e(7972),n.e(4313),n.e(1875),n.e(2808),n.e(2314),n.e(5026)]).then(n.bind(n,65972)))),ce=(0,c.Mz)((e=>e.dataMask),(e=>(0,m.W)(e,"ownState"))),ue=(0,c.Mz)([e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration},e=>e.nativeFilters.filters,e=>e.dataMask,e=>e.dashboardState.sliceIds],((e,t,n,a)=>({...(0,g.ug)(),...(0,m.R)({chartConfiguration:e,nativeFilters:t,dataMask:n,allSliceIds:a})}))),he=({idOrSlug:e})=>{var t;const n=(0,o.DP)(),c=(0,d.wA)(),m=(0,r.W6)(),g=(0,s.useMemo)((()=>(0,B.Ak)()),[]),C=(0,d.d4)((({dashboardInfo:e})=>e&&Object.keys(e).length>0)),I=(0,d.d4)((e=>e.dashboardInfo.theme)),{addDangerToast:_}=(0,u.Yf)(),{result:D,error:O}=(0,p.MZ)(e),{result:F,error:$}=(0,p.DT)(e),{result:j,error:k,status:M}=(0,p.RO)(e),R=(0,s.useRef)(!1),T=O||$,U=Boolean(D&&F),{dashboard_title:z,id:P=0}=D||{},A=(0,d.d4)((e=>e.dashboardState.css))||(null==D?void 0:D.css);(0,s.useEffect)((()=>{const e=()=>{const e=se();(0,y.SO)(y.Hh.DashboardExploreContext,{...e,[g]:{...e[g],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[g]),(0,s.useEffect)((()=>{c((0,E.wh)(M))}),[c,M]),(0,s.useEffect)((()=>{P&&async function(){const e=(0,w.P3)(S.vX.permalinkKey),t=(0,w.P3)(S.vX.nativeFiltersKey),n=(0,w.P3)(S.vX.nativeFilters);let a,s=t||{};if(e){const t=await(0,x.J)(e);t&&({dataMask:s,activeTabs:a}=t.state)}else t&&(s=await(0,x.I8)(P,t));n&&(s=n),U&&(R.current||(R.current=!0),c((0,f.M)({history:m,dashboard:D,charts:F,activeTabs:a,dataMask:s})))}()}),[U]),(0,s.useEffect)((()=>(z&&(document.title=z),()=>{document.title="Superset"})),[z]),(0,s.useEffect)((()=>"string"==typeof A?(0,v.A)(A):()=>{}),[A]),(0,s.useEffect)((()=>{k?_((0,l.t)("Error loading chart datasources. Filters may not work correctly.")):c((0,b.nC)(j))}),[_,j,k,c]);const q=(0,d.d4)(ce),L=(0,d.d4)(ue);if(T)throw T;const V=(0,s.useMemo)((()=>[i.AH`
  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,X(n),Q(n),G(n),K(n)]),[n]);if(T)throw T;const Y=(0,s.useMemo)((()=>(0,a.Y)(de,{})),[]);return(0,a.FD)(a.FK,{children:[(0,a.Y)(i.mL,{styles:V}),U&&C?(0,a.FD)(a.FK,{children:[(0,a.Y)(oe,{dashboardPageId:g}),(0,a.Y)(le.Provider,{value:g,children:(0,a.Y)(W,{themeId:void 0!==I?null==I?void 0:I.id:null==D||null==(t=D.theme)?void 0:t.id,children:(0,a.Y)(N,{activeFilters:L,ownDataCharts:q,children:Y})})})]}):(0,a.Y)(h.R,{})]})},pe=he},37926:(e,t,n)=>{n.d(t,{z:()=>i});var a=n(10900);function s(e,t){return e.length===Object.keys(t).length}function i(e,t,n){var i;let r=[];const o=Object.keys(n).includes(e)&&(0,a.Ub)(t),l=Array.isArray(t.scope)?t.scope:null!=(i=t.chartsInScope)?i:[];o&&(r=function(e,t,n){if(!t[e])return[];const a=[...n.filter((t=>String(t)!==e)),Number(e)],i=new Set(n);return Object.values(t).reduce(((n,r)=>r.slice_id===Number(e)?n:s(a,t)?(n.push(r.slice_id),n):(i.has(r.slice_id)&&n.push(r.slice_id),n)),[])}(e,n,l));const d=t;return(!o||(0,a.ve)(d)||(0,a.qQ)(d))&&(r=function(e,t){if(s(t,e))return Object.keys(e).map(Number);const n=new Set(t);return Object.values(e).reduce(((e,t)=>(n.has(t.slice_id)&&e.push(t.slice_id),e)),[])}(n,l)),r}},78929:(e,t,n)=>{n.d(t,{Au:()=>o,I8:()=>l,J:()=>d,l6:()=>r});var a=n(79378),s=n(75574);const i=(e,t,n)=>{let a=`/api/v1/dashboard/${e}/filter_state`;return t&&(a=a.concat(`/${t}`)),n&&(a=a.concat(`?tab_id=${n}`)),a},r=(e,t,n,r)=>a.A.put({endpoint:i(e,n,r),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(s.A.error(e),null))),o=(e,t,n)=>a.A.post({endpoint:i(e,void 0,n),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(s.A.error(e),null))),l=(e,t)=>a.A.get({endpoint:i(e,t)}).then((({json:e})=>JSON.parse(e.value))).catch((e=>(s.A.error(e),null))),d=e=>a.A.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((({json:e})=>e)).catch((e=>(s.A.error(e),null)))}}]);