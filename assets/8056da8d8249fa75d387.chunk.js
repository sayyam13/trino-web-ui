"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6524],{16524:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(2445),a=r(91054),o=r(79843),i=r(24002),l=r(93666),s=r(22023),u=r(36501);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e){let{data:t,formData:r,height:c,width:d,setDataMask:p,setHoveredFilter:h,unsetHoveredFilter:m,setFocusedFilter:g,unsetFocusedFilter:v,setFilterActive:S,filterState:b,inputRef:$}=e,{defaultValue:w}=r,[x,y]=(0,i.useState)(null!=w?w:[]),M=(0,i.useMemo)(()=>t.reduce((e,{duration:t,name:r})=>f({},e,{[t]:r}),{}),[JSON.stringify(t)]),z=e=>{let t=(0,o.A)(e),[r]=t,n=r?M[r]:void 0,a={};r&&(a.time_grain_sqla=r),y(t),p({extraFormData:a,filterState:{label:n,value:t.length?t:null}})};(0,i.useEffect)(()=>{z(null!=w?w:[])},[JSON.stringify(w)]),(0,i.useEffect)(()=>{var e;z(null!=(e=b.value)?e:[])},[JSON.stringify(b.value)]);let I=0===(t||[]).length?(0,a.t)("No data"):(0,a.tn)("%s option","%s options",t.length,t.length),O={};b.validateMessage&&(O.extra=(0,n.Y)(u.Mo,{status:b.validateStatus,children:b.validateMessage}));let k=(t||[]).map(e=>{let{name:t,duration:r}=e;return{label:t,value:r}});return(0,n.Y)(u.j3,{height:c,width:d,children:(0,n.Y)(s.e,f({validateStatus:b.validateStatus},O,{children:(0,n.Y)(l.A,{name:r.nativeFilterId,allowClear:!0,value:x,placeholder:I,onChange:z,onBlur:v,onFocus:g,onMouseEnter:h,onMouseLeave:m,ref:$,options:k,onOpenChange:S,sortComparator:()=>0})}))})}},22023:(e,t,r)=>{r.d(t,{e:()=>o});var n=r(22022),a=r(21346);let o=(0,a.I4)(n.Form.Item)`
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
`},36501:(e,t,r)=>{r.d(t,{Mo:()=>l,YH:()=>o,j3:()=>i});var n=r(21346),a=r(22023);let o=0,i=n.I4.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===o?"100%":`${e}px`};
`;(0,n.I4)(a.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let l=n.I4.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`}}]);