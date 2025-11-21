"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9442],{14924:(e,r,o)=>{o.r(r),o.d(r,{default:()=>c});var t=o(2445),i=o(78340),a=o(1800),n=o(21346),l=o(24002),d=o(18085),s=o(36501);let u=(0,n.I4)(s.j3)`
  display: flex;
  align-items: center;
  overflow-x: visible;

  & .ant-tag {
    margin-right: 0;
  }
`,f=n.I4.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  width: 100%;
  & > div,
  & > div:hover {
    ${({validateStatus:e,theme:r})=>{if(!e)return"";switch(e){case"error":default:return`border-color: ${r.colorError}`;case"warning":return`border-color: ${r.colorWarning}`;case"info":return`border-color: ${r.colorInfo}`}}}
  }
  & > div {
    width: 100%;
  }

  &:focus > div {
    border-color: ${({theme:e})=>e.colorPrimary};
    box-shadow: ${({theme:e})=>`0 0 0 2px ${e.controlOutline}`};
    outline: 0;
  }
`;function c(e){var r;let{setDataMask:o,setHoveredFilter:n,unsetHoveredFilter:s,setFocusedFilter:c,unsetFocusedFilter:m,setFilterActive:v,width:p,height:b,filterState:h,inputRef:g,isOverflowingFilterBar:x=!1}=e,$=(0,i.a)().get("filter.dateFilterControl"),w=null!=$?$:d.Ay,S=(0,l.useCallback)(e=>{let r=e&&e!==a.WC;o({extraFormData:r?{time_range:e}:{},filterState:{value:r?e:void 0}})},[o]);return(0,l.useEffect)(()=>{S(h.value)},[h.value]),(null==(r=e.formData)?void 0:r.inView)?(0,t.Y)(u,{width:p,height:b,children:(0,t.Y)(f,{ref:g,validateStatus:h.validateStatus,onFocus:c,onBlur:m,onMouseEnter:n,onMouseLeave:s,tabIndex:-1,children:(0,t.Y)(w,{value:h.value||a.WC,name:e.formData.nativeFilterId||"time_range",onChange:S,onOpenPopover:()=>v(!0),onClosePopover:()=>{v(!1),s(),m()},isOverflowingFilterBar:x})})}):null}},22023:(e,r,o)=>{o.d(r,{e:()=>a});var t=o(22022),i=o(21346);let a=(0,i.I4)(t.Form.Item)`
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
`}}]);