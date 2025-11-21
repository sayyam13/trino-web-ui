"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5748],{15748:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(2445),l=n(91054),a=n(79843),o=n(12491),i=n(24002),s=n(93666),u=n(22023),f=n(36501);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){let{data:t,formData:n,height:p,width:d,setDataMask:m,setHoveredFilter:h,unsetHoveredFilter:g,setFocusedFilter:v,unsetFocusedFilter:b,setFilterActive:S,filterState:y,inputRef:$}=e,{defaultValue:w}=n,[x,M]=(0,i.useState)(null!=w?w:[]),z=e=>{let t=(0,a.A)(e);M(t);let n={};t.length&&(n.granularity_sqla=t[0]),m({extraFormData:n,filterState:{value:t.length?t:null}})};(0,i.useEffect)(()=>{z(null!=w?w:null)},[JSON.stringify(w)]),(0,i.useEffect)(()=>{var e;z(null!=(e=y.value)?e:null)},[JSON.stringify(y.value)]);let I=(t||[]).filter(e=>e.dtype===o.GenericDataType.Temporal),k=0===I.length?(0,l.t)("No time columns"):(0,l.tn)("%s option","%s options",I.length,I.length),O={};y.validateMessage&&(O.extra=(0,r.Y)(f.Mo,{status:y.validateStatus,children:y.validateMessage}));let C=I.map(e=>{let{column_name:t,verbose_name:n}=e;return{label:null!=n?n:t,value:t}});return(0,r.Y)(f.j3,{height:p,width:d,children:(0,r.Y)(u.e,c({validateStatus:y.validateStatus},O,{children:(0,r.Y)(s.A,{name:n.nativeFilterId,allowClear:!0,value:x,placeholder:k,onChange:z,onBlur:b,onFocus:v,onMouseEnter:h,onMouseLeave:g,ref:$,options:C,onOpenChange:S})}))})}},22023:(e,t,n)=>{n.d(t,{e:()=>a});var r=n(22022),l=n(21346);let a=(0,l.I4)(r.Form.Item)`
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
`},36501:(e,t,n)=>{n.d(t,{Mo:()=>i,YH:()=>a,j3:()=>o});var r=n(21346),l=n(22023);let a=0,o=r.I4.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===a?"100%":`${e}px`};
`;(0,r.I4)(l.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let i=r.I4.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`}}]);