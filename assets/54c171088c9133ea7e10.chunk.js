(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1326],{5904:(e,t,l)=>{"use strict";l.d(t,{SO:()=>o,Sg:()=>u,pA:()=>i});var r=l(12491),n=l(76570),a=l(99036);let i=(e,t,l=!1,r=!1)=>{let n={};return l?n.adhoc_filters=[{expressionType:a.A.Sql,clause:a.v.Where,sqlExpression:"1 = 0"}]:null!=t&&0!==t.length&&(n.filters=[{col:e,op:r?"NOT IN":"IN",val:t}]),n},o=(e,t,l)=>{let r=[];return null!=t&&t!==l&&r.push({col:e,op:">=",val:t}),null!=l&&l!==t&&r.push({col:e,op:"<=",val:l}),null!=l&&null!=t&&l===t&&r.push({col:e,op:"==",val:l}),r.length?{filters:r}:{}};function u({timeFormatter:e,numberFormatter:t}={}){return(l,a)=>{if(null==l)return n.mu;if("boolean"==typeof l)return l?n.PU:n.qC;if(a===r.GenericDataType.Boolean)try{return JSON.parse(String(l).toLowerCase())?n.PU:n.qC}catch(e){return n.qC}return"string"==typeof l?l:"bigint"==typeof l?String(l):e&&a===r.GenericDataType.Temporal?e(l):t&&"number"==typeof l&&a===r.GenericDataType.Numeric?t(l):String(l)}}},5924:(e,t,l)=>{"use strict";l.d(t,{A:()=>i});var r=l(53705),n=l(8382),a=l(79668);function i(e,t=!1){let l=t?r.DC:r.aL,o=l("%Y-%m-%d %H:%M:%S.%L"),u=l("%Y-%m-%d %H:%M:%S"),s=l("%Y-%m-%d %H:%M"),f=l("%Y-%m-%d %H:%M"),c=l("%Y-%m-%d"),d=l("%Y-%m-%d"),p=l("%Y"),{hasMillisecond:v,hasSecond:m,hasMinute:g,hasHour:S,isNotFirstDayOfMonth:h,isNotFirstMonth:y}=t?n.m:n.w,b=p;return e.forEach(e=>{"bigint"!=typeof e&&(b===p&&y(e)&&(b=d),b===d&&h(e)&&(b=c),b===c&&S(e)&&(b=f),b===f&&g(e)&&(b=s),b===s&&m(e)&&(b=u),b===u&&v(e)&&(b=o))}),new a.A({description:"Use the finest grain in an array of dates to format all dates in the array",formatFunc:b,id:"finest_temporal_grain",label:"Format temporal columns with the finest grain",useLocalTime:t})}},22023:(e,t,l)=>{"use strict";l.d(t,{e:()=>a});var r=l(22022),n=l(21346);let a=(0,n.I4)(r.Form.Item)`
  ${({theme:e})=>`
    &.ant-form-item > .ant-row > .ant-form-item-label {
      padding-bottom: ${e.paddingXXS}px;
    }
    .ant-form-item-label {
      & > label {
        font-size: ${e.fontSizeSM}px;
        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
          &::before {
            display: none;
          }
          &::after {
            display: inline-block;
            visibility: visible;
            color: ${e.colorError};
            font-size: ${e.fontSizeSM}px;
            content: '*';
          }
        }
      }
    }
    .ant-form-item-extra {
      margin-top: ${e.sizeUnit}px;
      font-size: ${e.fontSizeSM}px;
    }
  `}
`},36501:(e,t,l)=>{"use strict";l.d(t,{Mo:()=>o,YH:()=>a,j3:()=>i});var r=l(21346),n=l(22023);let a=0,i=r.I4.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===a?"100%":`${e}px`};
`;(0,r.I4)(n.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let o=r.I4.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`},62216:e=>{e.exports=function(e){return void 0===e}},81326:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>A});var r=l(2445),n=l(24002),a=l(91054),i=l(79843),o=l(57513),u=l(5924),s=l(42226),f=l(21346),c=l(38221),d=l.n(c),p=l(62216),v=l.n(p),m=l(93634),g=l(22022),S=l(93666),h=l(22023),y=l(32450),b=l(6667),w=l(43871),x=l(5904),M=l(36501);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function F(e,t){switch(t.type){case"ownState":return e.ownState=C({},e.ownState,t.ownState),e;case"filterState":return JSON.stringify(e.extraFormData)!==JSON.stringify(t.extraFormData)&&(e.extraFormData=t.extraFormData),JSON.stringify(e.filterState)!==JSON.stringify(t.filterState)&&(e.filterState=C({},e.filterState,t.filterState)),e;default:return e}}let N=(0,f.I4)(g.Space)`
  display: flex;
  align-items: center;
  width: 100%;

  .exclude-select {
    width: 80px;
    flex-shrink: 0;
  }

  &.ant-space {
    .ant-space-item {
      width: ${({inverseSelection:e})=>e?"auto":"100%"};
    }
  }
`,O=new Map;function A(e){let{coltypeMap:t,data:l,filterState:f,formData:c,height:p,isRefreshing:g,width:A,setDataMask:$,setHoveredFilter:E,unsetHoveredFilter:I,setFocusedFilter:D,unsetFocusedFilter:Y,setFilterActive:k,appSection:q,showOverflow:z,parentRef:H,inputRef:T,filterBarOrientation:j,clearAllTrigger:J,onClearAllComplete:L}=e,{enableEmptyFilter:R,creatable:V,multiSelect:P,showSearch:U,inverseSelection:W,defaultToFirstItem:G,searchAllOptions:_}=c,B=(0,n.useMemo)(()=>(0,i.A)(c.groupby).map(o.A),[c.groupby]),[Q]=B,[X]=(0,n.useState)(t),[K,Z]=(0,n.useState)(""),ee=(0,n.useRef)(!1),et=(0,n.useRef)(l),[el,er]=(0,m.A)(F,{extraFormData:{},filterState:f}),en=t[Q],ea=(0,n.useMemo)(()=>(0,x.Sg)({timeFormatter:(0,u.A)(l.map(e=>e[Q]))}),[l,Q]),[ei,eo]=(0,n.useState)(!!v()(null==f?void 0:f.excludeFilterValues)||(null==f?void 0:f.excludeFilterValues)),eu=(0,n.useRef)(ei),es=(0,n.useRef)(!1);(0,n.useEffect)(()=>{let e=O.get(c.nativeFilterId);void 0!==e&&e!==j?es.current=!0:es.current=!1,j&&O.set(c.nativeFilterId,j)},[j]);let ef=(0,n.useCallback)(e=>{let t=R&&!W&&!(null==e?void 0:e.length),l=W&&(null==e?void 0:e.length)?(0,a.t)(" (excluded)"):"";er({type:"filterState",extraFormData:(0,x.pA)(Q,e,t,ei&&W),filterState:C({},f,{label:(null==e?void 0:e.length)?`${(e||[]).map(e=>ea(e,en)).join(", ")}${l}`:void 0,value:q===s.$s.FilterConfigModal&&G?void 0:e,excludeFilterValues:ei})})},[q,Q,en,G,er,R,W,ei,JSON.stringify(f),ea]),ec=q===s.$s.FilterConfigModal&&G,ed=(0,n.useMemo)(()=>d()(e=>{Z(e),_&&er({type:"ownState",ownState:{coltypeMap:X,search:e}})},y.Y.SLOW_DEBOUNCE),[er,X,_]),ep=(0,n.useCallback)(()=>{Y(),ed("")},[ed,Y]),ev=(0,n.useCallback)(e=>{let t=null===e?[null]:(0,i.A)(e);0===t.length?ef(null):ef(t),ee.current=!0},[ef,c.nativeFilterId,J]),em=0===l.length?(0,a.t)("No data"):(0,a.tn)("%s option","%s options",l.length,l.length),eg=(0,n.useMemo)(()=>{if(f.validateMessage)return(0,r.Y)(M.Mo,{status:f.validateStatus,children:f.validateMessage})},[f.validateMessage,f.validateStatus]),eS=(0,n.useMemo)(()=>[...new Set(l.map(e=>e[Q]))].map(e=>({label:ea(e,en),value:e,isNewOption:!1})),[l,en,Q,ea]),eh=(0,n.useMemo)(()=>(!K||P||(0,b.Kz)(K,eS,!0)||eS.unshift({label:K,value:K,isNewOption:!0}),eS),[P,K,eS]),ey=(0,n.useCallback)((e,t)=>{if(c.sortMetric)return 0;let l=(0,b.qw)("label");return c.sortAscending?l(e,t):l(t,e)},[c.sortAscending,c.sortMetric]);return(0,n.useEffect)(()=>{if(!es.current){if(ec)return void ef(null);if(void 0!==f.value)return void ef(f.value);if(!J)if(G){let e=l[0]?B.map(e=>l[0][e]):null;(null==e?void 0:e[0])!==void 0&&ef(e)}else(null==c?void 0:c.defaultValue)&&ef(c.defaultValue)}},[ec,R,G,null==c?void 0:c.defaultValue,l,B,Q,W,J]),(0,n.useEffect)(()=>{let e=et.current;((null==e?void 0:e.length)!==(null==l?void 0:l.length)||(null==e?void 0:e.some((e,t)=>{let r=e[Q],n=l[t][Q];return"bigint"==typeof r||"bigint"==typeof n?(null==r?void 0:r.toString())!==(null==n?void 0:n.toString()):r!==n})))&&(ee.current=!1,et.current=l)},[l,Q]),(0,n.useEffect)(()=>{var e;if(ee.current&&(null==(e=f.value)?void 0:e.every(e=>l.some(t=>t[Q]===e))))return;let t=l[0]?B.map(e=>l[0][e]):null;!J&&G&&Object.keys((null==c?void 0:c.extraFormData)||{}).length&&void 0!==f.value&&null!==t&&f.value!==t&&(null==t?void 0:t[0])!==void 0&&ef(t)},[G,ef,c,l,JSON.stringify(f.value),J]),(0,n.useEffect)(()=>{$(el)},[JSON.stringify(el)]),(0,n.useEffect)(()=>{J&&(er({type:"filterState",extraFormData:{},filterState:{value:void 0,label:void 0}}),ef(null),Z(""),null==L||L(c.nativeFilterId))},[J,L,ef]),(0,n.useEffect)(()=>{if(eu.current!==ei){var e;er({type:"filterState",extraFormData:(0,x.pA)(Q,f.value,!(null==(e=f.value)?void 0:e.length),ei&&W),filterState:C({},f,{excludeFilterValues:ei})}),eu.current=ei}},[ei]),(0,r.Y)(M.j3,{height:p,width:A,children:(0,r.Y)(h.e,{validateStatus:f.validateStatus,extra:eg,children:(0,r.FD)(N,{appSection:q,inverseSelection:W,children:[q!==s.$s.FilterConfigModal&&W&&(0,r.Y)(S.A,{className:"exclude-select",value:`${ei}`,options:[{value:"true",label:(0,a.t)("is not")},{value:"false",label:(0,a.t)("is")}],onChange:e=>{eo("true"===e)}}),(0,r.Y)(S.A,{name:c.nativeFilterId,allowClear:!0,allowNewOptions:!_&&!1!==V,allowSelectAll:!_,value:f.value||[],disabled:ec,getPopupContainer:z?()=>(null==H?void 0:H.current)||document.body:e=>(null==e?void 0:e.parentNode)||document.body,showSearch:U,mode:P?"multiple":"single",placeholder:em,onClear:()=>ed(""),onSearch:ed,onBlur:ep,onFocus:D,onMouseEnter:E,onMouseLeave:I,onChange:ev,ref:T,loading:g,oneLine:j===w.QI.Horizontal,invertSelection:W&&ei,options:eh,sortComparator:ey,onOpenChange:k,className:"select-container"})]})})})}},93634:(e,t,l)=>{"use strict";l.d(t,{A:()=>i,e:()=>a});var r=l(1932),n=l(24002);function a(e){var t=(0,n.useState)(function(){return(0,r.CN)("function"==typeof e?e():e,!0)}),l=t[1];return[t[0],(0,n.useCallback)(function(e){l("function"==typeof e?(0,r.jM)(e):(0,r.CN)(e))},[])]}function i(e,t,l){var a=(0,n.useMemo)(function(){return(0,r.jM)(e)},[e]);return(0,n.useReducer)(a,t,l)}},99036:(e,t,l)=>{"use strict";l.d(t,{A:()=>a,v:()=>i});var r,n,a=((r={}).Simple="SIMPLE",r.Sql="SQL",r),i=((n={}).Having="HAVING",n.Where="WHERE",n)}}]);