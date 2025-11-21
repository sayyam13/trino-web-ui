"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3368],{5904:(e,l,t)=>{t.d(l,{SO:()=>o,Sg:()=>u,pA:()=>a});var r=t(12491),n=t(76570),i=t(99036);let a=(e,l,t=!1,r=!1)=>{let n={};return t?n.adhoc_filters=[{expressionType:i.A.Sql,clause:i.v.Where,sqlExpression:"1 = 0"}]:null!=l&&0!==l.length&&(n.filters=[{col:e,op:r?"NOT IN":"IN",val:l}]),n},o=(e,l,t)=>{let r=[];return null!=l&&l!==t&&r.push({col:e,op:">=",val:l}),null!=t&&t!==l&&r.push({col:e,op:"<=",val:t}),null!=t&&null!=l&&t===l&&r.push({col:e,op:"==",val:t}),r.length?{filters:r}:{}};function u({timeFormatter:e,numberFormatter:l}={}){return(t,i)=>{if(null==t)return n.mu;if("boolean"==typeof t)return t?n.PU:n.qC;if(i===r.GenericDataType.Boolean)try{return JSON.parse(String(t).toLowerCase())?n.PU:n.qC}catch(e){return n.qC}return"string"==typeof t?t:"bigint"==typeof t?String(t):e&&i===r.GenericDataType.Temporal?e(t):l&&"number"==typeof t&&i===r.GenericDataType.Numeric?l(t):String(t)}}},15429:(e,l,t)=>{t.d(l,{l:()=>n});var r,n=((r={}).Slider="slider",r.Input="input",r.SliderAndInput="slider-and-input",r)},15623:(e,l,t)=>{t.d(l,{A:()=>a});var r=t(2445),n=t(22022);function i(){return(i=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e){return(0,r.Y)(n.Slider,i({},e))}},22023:(e,l,t)=>{t.d(l,{e:()=>i});var r=t(22022),n=t(21346);let i=(0,n.I4)(r.Form.Item)`
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
`},36501:(e,l,t)=>{t.d(l,{Mo:()=>o,YH:()=>i,j3:()=>a});var r=t(21346),n=t(22023);let i=0,a=r.I4.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===i?"100%":`${e}px`};
`;(0,r.I4)(n.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let o=r.I4.div`
  color: ${({theme:e,status:l="error"})=>{if("help"===l)return e.colorTextSecondary;switch(l){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`},53368:(e,l,t)=>{t.r(l),t.d(l,{default:()=>k});var r=t(2445),n=t(58097),i=t(91054),a=t(79843),o=t(6603),u=t(34319),s=t(57513),d=t(21346),c=t(17437),p=t(24002),m=t(43871),v=t(98023),f=t.n(v),h=t(22022),x=t(15623),g=t(67675),y=t(22023),b=t(34813),S=t(15429),M=t(36501),$=t(5904),I=t(88925);let w=d.I4.span`
  margin: 0 ${({theme:e})=>3*e.sizeUnit}px;
  color: ${({theme:e})=>e.colorSplit};
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  font-size: ${({theme:e})=>e.fontSize}px;
  align-content: center;
`,A=d.I4.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .ant-input-number {
    min-width: 80px;
    position: relative;
  }
`,Y=d.I4.div`
  ${({theme:e})=>`
    margin: ${4*e.sizeUnit}px 0;
    padding: 0 ${e.sizeUnit}px;
  `}
`,N=d.I4.div`
  ${({theme:e})=>`
    position: absolute;
    top: -${6*e.sizeUnit}px;
    right: 0px;
    z-index: 100;
    display: flex;
    align-items: center;

    .tooltip-icon {
      margin-left: ${2*e.sizeUnit}px;
    }
  `}
`,C=d.I4.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${4*e.sizeUnit}px;
    width: 100%;
    align-items: center;

    .slider-wrapper {
      display: flex;
      align-items: center;
      flex: 2;
    }

    .slider-container {
      flex: 1;
      min-width: 180px;
    }

    .inputs-container {
      min-width: 160px;
      max-width: 200px;
    }
  `}
`,z=d.I4.div`
  ${({theme:e})=>`
  border-radius: ${e.borderRadius}px;
  transition: box-shadow ${e.motionDurationMid} ease-in-out;
  &:focus {
    box-shadow: 0 0 0 2px ${e.colorPrimary};
  }
  &:focus-visible {
    outline: none;
  }`}
`,E=(0,o.gV)(n.A.SMART_NUMBER),D=(e,l,t,r,n)=>{let[a,o]=e,u=(0,i.t)("Please provide a valid min or max value"),s=(0,i.t)("Min value cannot be greater than max value"),d=(0,i.t)("Numbers must be within %(min)s and %(max)s",{min:l,max:t});if(void 0!==n){let e=n===I.y.Minimum||n===I.y.Exact?a:o;return f()(e)?f()(e)&&(e<l||e>t)?{isValid:!1,errorMessage:d}:{isValid:!0,errorMessage:null}:{isValid:!1,errorMessage:u}}return r||null!==a||null!==o?r&&null===a&&null===o?{isValid:!1,errorMessage:u}:null!==a&&null!==o&&a>o?{isValid:!1,errorMessage:s}:null!==a&&a<l||null!==o&&o>t?{isValid:!1,errorMessage:d}:{isValid:!0,errorMessage:null}:{isValid:!0,errorMessage:null}};function k(e){let l=(0,d.DP)(),{data:t,formData:n,height:o,width:v,setDataMask:f,setFocusedFilter:k,unsetFocusedFilter:F,setHoveredFilter:V,unsetHoveredFilter:q,setFilterActive:U,filterState:T,inputRef:O,filterBarOrientation:P=m.QI.Vertical,isOverflowingFilterBar:H}=e,[j]=t,{min:R,max:W}=j,{groupby:G,enableSingleValue:L,enableEmptyFilter:Q,defaultValue:B}=n,K=(null==n?void 0:n.rangeDisplayMode)||S.l.SliderAndInput,J=L===I.y.Exact,[X=""]=(0,a.A)(G).map(s.A),[_,Z]=(0,p.useState)(T.value||B||[null,null]),[ee,el]=(0,p.useState)(null),et=(0,p.useMemo)(()=>{let[e,l]=_;return L===I.y.Minimum||L===I.y.Exact?null!==e?e:R:L===I.y.Maximum?null!==l?l:W:[null!==e?e:R,null!==l?l:W]},[_,R,W,L]),er=(0,p.useCallback)(e=>{f({extraFormData:{},filterState:{value:null,label:"",validateStatus:"error",validateMessage:e||""}})},[f]),en=(0,p.useCallback)(e=>{let[l,t]=e;f({extraFormData:(0,$.SO)(X,l,t),filterState:{value:J?[l,l]:[l,t],label:((e,l,t=!1)=>t&&null!==e||null!==e&&e===l?`x = ${E(e)}`:null!==e&&null!==l?`${E(e)} ≤ x ≤ ${E(l)}`:null!==e?`x ≥ ${E(e)}`:null!==l?`x ≤ ${E(l)}`:"")(l,t,J),validateStatus:void 0,validateMessage:""}})},[f]);(0,p.useEffect)(()=>{if((null==j?void 0:j.min)!==void 0||(null==j?void 0:j.max)!==void 0){if("error"===T.validateStatus){if(el(T.validateMessage),ee!==T.validateMessage){let{isValid:e,errorMessage:l}=D(_,R,W,Q,L);e?(el(null),en(_)):(el(l),er(l))}return}if(void 0===T.value&&!T.validateStatus){Z([null,null]),en([null,null]);return}if((0,u.A)(B,_))return void en(B);T.value&&!T.validateStatus&&(Z(T.value),en(T.value))}},[JSON.stringify(T.value)]);let ei=(0,p.useMemo)(()=>{switch(L){case I.y.Minimum:return(0,i.t)("Filters for values greater than or equal.");case I.y.Maximum:return(0,i.t)("Filters for values less than or equal.");case I.y.Exact:return(0,i.t)("Filters for values equal to this exact value.");default:return null}},[L]),ea=(0,p.useRef)(!1),eo=e=>{ea.current=!!/^[0-9]$/.test(e.key)},eu=(0,p.useCallback)((e,l)=>{if((null==j?void 0:j.min)===void 0&&(null==j?void 0:j.max)===void 0)return;let t=e;null!==e&&null===_[l]&&(ea.current?(t=e,ea.current=!1):0===l&&1===e?t=R+1:0===l&&-1===e?t=R-1:1===l&&1===e?t=W+1:1===l&&-1===e&&(t=W-1));let r=0===l?[t,_[1]]:[_[0],t];Z(r);let{isValid:n,errorMessage:i}=D(r,R,W,Q,L);if(!n){el(i),er(i);return}el(null),en(r)},[R,W,Q,L,er,en,_]),es=(0,p.useCallback)(e=>{let l;if(void 0!==L){let t="number"==typeof e?e:Array.isArray(e)&&e.length>0?e[0]:(R+W)/2;l=L===I.y.Minimum?[t,null]:L===I.y.Maximum?[null,t]:[t,t]}else{let t=Array.isArray(e)?e:[R,W],[r,n]=t.length>=2?[t[0],t[1]]:[R,W];l=[r,n]}Z(l),el(null),en(l)},[R,W,L,en]),ed=(0,p.useCallback)(()=>{let e=(0,i.t)("Choose numbers between %(min)s and %(max)s",{min:R,max:W});return ee?{message:ee,status:"error"}:void 0!==L&&ei?{message:ei,status:"help"}:{message:e,status:"help"}},[ee,R,W,L,ei]),ec=(0,p.useCallback)(()=>{let{message:e,status:l}=ed();return P===m.QI.Vertical?(0,r.Y)(M.Mo,{status:l,children:e}):null},[ed,P]),ep=(0,p.useCallback)(()=>{let{message:e,status:t}=ed();return(0,r.Y)(b.m,{title:e,placement:"top",children:(0,r.Y)(g.F.InfoCircleOutlined,{iconSize:"m",iconColor:"error"===t?l.colorError:l.colorIcon,className:"tooltip-icon"})})},[ed]);(0,p.useEffect)(()=>{if(void 0!==L)switch(L){case I.y.Minimum:case I.y.Exact:null!==_[1]&&eu(null,1);break;case I.y.Maximum:null!==_[0]&&eu(null,0)}f({extraFormData:{},filterState:{value:null,label:""}})},[L]);let em=()=>void 0!==L?(0,r.Y)(Y,{children:(0,r.Y)(x.A,{min:R,max:W,value:Array.isArray(et)?et[0]:et,onChange:es,tooltip:{formatter:e=>null!==e?E(e):""}})}):(0,r.Y)(Y,{"data-test":"range-filter-slider",children:(0,r.Y)(x.A,{min:R,max:W,range:!0,value:Array.isArray(et)?et:[R,et],onChange:es,tooltip:{formatter:e=>null!==e?E(e):""}})}),ev=()=>(0,r.FD)(A,{tabIndex:-1,onFocus:k,onBlur:F,onMouseEnter:V,onMouseLeave:q,onMouseDown:()=>U(!0),onMouseUp:()=>U(!1),children:[(void 0===L||L===I.y.Minimum||L===I.y.Exact)&&(0,r.Y)(h.InputNumber,{value:_[0],onChange:e=>eu(e,0),onKeyDown:eo,placeholder:`${R}`,style:{width:"100%"},status:T.validateStatus,"data-test":"range-filter-from-input"}),void 0===L&&(0,r.Y)(w,{children:"-"}),(void 0===L||L===I.y.Maximum)&&(0,r.Y)(h.InputNumber,{value:_[1],onChange:e=>eu(e,1),onKeyDown:eo,placeholder:`${W}`,style:{width:"100%"},"data-test":"range-filter-to-input",status:T.validateStatus})]});return(0,r.Y)(M.j3,{height:o,width:v,children:Number.isNaN(Number(R))||Number.isNaN(Number(W))?(0,r.Y)("h4",{children:(0,i.t)("Chosen non-numeric column")}):(0,r.Y)(y.e,{"aria-labelledby":`filter-name-${n.nativeFilterId}`,children:P!==m.QI.Horizontal||H?(0,r.Y)(r.FK,{children:(0,r.FD)("div",{style:{position:"relative"},children:[H&&(0,r.Y)(N,{children:(0,r.Y)(ep,{})}),(0,r.FD)(z,{ref:O,tabIndex:-1,css:(0,c.AH)`
                    padding-top: 1px;
                    margin-top: -1px;
                  `,children:[(K===S.l.Slider||K===S.l.SliderAndInput)&&em(),(K===S.l.Input||K===S.l.SliderAndInput)&&ev()]}),(0,r.Y)(ec,{})]})}):(0,r.Y)(z,{ref:O,tabIndex:-1,children:(0,r.FD)(C,{children:[(0,r.Y)(ep,{}),(K===S.l.Slider||K===S.l.SliderAndInput)&&(0,r.Y)("div",{className:"slider-wrapper",children:(0,r.Y)("div",{className:"slider-container",children:em()})}),(K===S.l.Input||K===S.l.SliderAndInput)&&(0,r.Y)("div",{className:"inputs-container",children:ev()})]})})})})}},99036:(e,l,t)=>{t.d(l,{A:()=>i,v:()=>a});var r,n,i=((r={}).Simple="SIMPLE",r.Sql="SQL",r),a=((n={}).Having="HAVING",n.Where="WHERE",n)}}]);