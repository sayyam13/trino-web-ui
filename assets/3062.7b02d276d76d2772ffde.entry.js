"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3062],{22023:(t,e,n)=>{n.d(e,{e:()=>a});var r=n(22022),i=n(21346);let a=(0,i.I4)(r.Form.Item)`
  ${({theme:t})=>`
    &.ant-form-item > .ant-row > .ant-form-item-label {
      padding-bottom: ${t.paddingXXS}px;
    }
    .ant-form-item-label {
      & > label {
        font-size: ${t.fontSizeSM}px;
        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
          &::before {
            display: none;
          }
          &::after {
            display: inline-block;
            visibility: visible;
            color: ${t.colorError};
            font-size: ${t.fontSizeSM}px;
            content: '*';
          }
        }
      }
    }
    .ant-form-item-extra {
      margin-top: ${t.sizeUnit}px;
      font-size: ${t.fontSizeSM}px;
    }
  `}
`},23998:(t,e,n)=>{n.d(e,{s:()=>l});var r=n(2445),i=n(21346),a=n(17437),o=n(89795),s=n(67675);let l=({title:t,subtitle:e,validateCheckStatus:n,testId:l})=>{let c=(0,i.DP)();return(0,r.FD)("div",{"data-test":l,children:[(0,r.FD)(o.o.Title,{css:(0,a.AH)`
          && {
            margin-top: 0;
            margin-bottom: ${c.sizeUnit/2}px;
            font-size: ${c.fontSizeLG}px;
          }
        `,children:[t," ",void 0!==n&&(n?(0,r.Y)(s.F.CheckCircleOutlined,{iconColor:c.colorSuccess}):(0,r.Y)(s.F.ExclamationCircleOutlined,{iconColor:c.colorError}))]}),(0,r.Y)(o.o.Paragraph,{css:(0,a.AH)`
          margin: 0;
          font-size: ${c.fontSizeSM}px;
          color: ${c.colorTextDescription};
        `,children:e})]})}},35780:(t,e,n)=>{n.d(e,{p:()=>i});var r=n(24002);function i(t,e={}){let{enabled:n=!0,errorPrefix:a="Invalid JSON"}=e;return(0,r.useMemo)(()=>{if(!n||!(null==t?void 0:t.trim()))return[];try{return JSON.parse(t),[]}catch(i){let t=i.message||"syntax error",e=0,n=0,r=t.match(/\(line (\d+) column (\d+)\)/);return r&&(e=parseInt(r[1],10)-1,n=parseInt(r[2],10)-1),[{type:"error",row:e,column:n,text:`${a}: ${t}`}]}},[n,t,a])}},46502:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(2445),i=n(22022);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}let o=Object.assign(t=>{var{padded:e}=t,n=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e.indexOf(n=a[r])>=0||(i[n]=t[n]);return i}(t,["padded"]);return(0,r.Y)(i.Card,a({},n,{css:t=>({".ant-card-body":{padding:e?4*t.sizeUnit:t.sizeUnit}})}))},{Meta:i.Card.Meta})},48446:(t,e,n)=>{n.d(e,{Ay:()=>g,fn:()=>m,pX:()=>f});var r=n(2445),i=n(21346),a=n(17437),o=n(22022),s=n(67675);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}let c=t=>{var{animated:e=!1,allowOverflow:n=!0,fullHeight:s=!1,tabBarStyle:c,contentStyle:d}=t,p=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e.indexOf(n=a[r])>=0||(i[n]=t[n]);return i}(t,["animated","allowOverflow","fullHeight","tabBarStyle","contentStyle"]);let b={paddingLeft:4*(0,i.DP)().sizeUnit},u=l({},b,c);return(0,r.Y)(o.Tabs,l({animated:e},p,{tabBarStyle:u,css:t=>(0,a.AH)`
        overflow: ${n?"visible":"hidden"};
        ${s&&"height: 100%;"}

        .ant-tabs-content-holder {
          overflow: ${n?"visible":"auto"};
          ${s&&"height: 100%;"}
        }
        .ant-tabs-content {
          ${s&&"height: 100%;"}
        }
        .ant-tabs-tabpane {
          ${s&&"height: 100%;"}
          ${d}
        }
        .ant-tabs-tab {
          flex: 1 1 auto;

          .short-link-trigger.btn {
            padding: 0 ${t.sizeUnit}px;
            & > .fa.fa-link {
              top: 0;
            }
          }
        }
        .ant-tabs-tab-btn {
          display: flex;
          flex: 1 1 auto;
          align-items: center;
          justify-content: center;
          font-size: ${t.fontSizeSM}px;
          text-align: center;
          user-select: none;
          .required {
            margin-left: ${t.sizeUnit/2}px;
            color: ${t.colorError};
          }
          &:focus-visible {
            box-shadow: none;
          }
        }
      `}))},d=(0,i.I4)(o.Tabs.TabPane)``,p=Object.assign(c,{TabPane:d}),b=(0,i.I4)(c)`
  ${({theme:t,contentStyle:e})=>`
    .ant-tabs-content-holder {
      background: ${t.colorBgContainer};
      ${e}
    }

    & > .ant-tabs-nav {
      margin-bottom: 0;
    }

    .ant-tabs-tab-remove {
      padding-top: 0;
      padding-bottom: 0;
      height: ${6*t.sizeUnit}px;
    }
  `}
`,u=(0,i.I4)(s.F.CloseOutlined)`
  color: ${({theme:t})=>t.colorIcon};
`,m=Object.assign(b,{TabPane:d});m.defaultProps={type:"editable-card",animated:{inkBar:!0,tabPane:!1}},m.TabPane.defaultProps={closeIcon:(0,r.Y)(u,{iconSize:"s",role:"button",tabIndex:0})};let f=Object.assign((0,i.I4)(m)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:t})=>4*t.sizeUnit}px;
    padding: ${({theme:t})=>`${3*t.sizeUnit}px ${t.sizeUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:t})=>t.fontSize}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,{TabPane:d}),g=p},72017:(t,e,n)=>{n.d(e,{M:()=>$});var r=n(2445),i=n(91054),a=n(21346),o=n(67675),s=n(30404),l=n(19633),c=n(34813),d=n(23941),p=n(22022),b=n(63278),u=n(22023);function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}let f=(0,a.I4)(p.Input)`
  margin: ${({theme:t})=>`${t.sizeUnit}px 0 ${2*t.sizeUnit}px`};
`,g=(0,a.I4)(p.Input.Password)`
  margin: ${({theme:t})=>`${t.sizeUnit}px 0 ${2*t.sizeUnit}px`};
`,h=(0,a.I4)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:t})=>3*t.sizeUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,v=(0,a.I4)(b.l)`
  margin-bottom: 0;
`,$=t=>{var{label:e,validationMethods:n,errorMessage:a,helpText:p,required:b=!1,hasTooltip:$=!1,tooltipText:x,id:y,className:z,visibilityToggle:O,get_url:k,description:S,isValidating:w=!1}=t,F=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e.indexOf(n=a[r])>=0||(i[n]=t[n]);return i}(t,["label","validationMethods","errorMessage","helpText","required","hasTooltip","tooltipText","id","className","visibilityToggle","get_url","description","isValidating"]);let I=!!a;return(0,r.FD)(h,{className:z,children:[(0,r.FD)(l.s,{align:"center",children:[(0,r.Y)(v,{htmlFor:y,required:b,children:e}),$&&(0,r.Y)(d.I,{tooltip:`${x}`})]}),(0,r.FD)(u.e,{validateTrigger:Object.keys(n),validateStatus:w?"validating":I?"error":"success",help:a||p,hasFeedback:!!I,children:[O||"password"===F.name?(0,r.Y)(g,m({},F,n,{iconRender:t=>t?(0,r.Y)(c.m,{title:(0,i.t)("Hide password."),children:(0,r.Y)(o.F.EyeInvisibleOutlined,{iconSize:"m"})}):(0,r.Y)(c.m,{title:(0,i.t)("Show password."),children:(0,r.Y)(o.F.EyeOutlined,{iconSize:"m","data-test":"icon-eye"})}),role:"textbox"})):(0,r.Y)(f,m({},F,n)),k&&S?(0,r.FD)(s.$,{type:"link",htmlType:"button",onClick:()=>(window.open(k),!0),children:["Get ",S]}):(0,r.Y)("br",{})]})]})}},78113:(t,e,n)=>{n.d(e,{B:()=>i});var r=n(61225);function i(){return(0,r.d4)(t=>{var e;return null==t||null==(e=t.common)?void 0:e.conf})}},83734:(t,e,n)=>{n.d(e,{l:()=>o});var r=n(2445),i=n(22022);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}let o=Object.assign(function(t){return(0,r.Y)(i.Form,a({},t))},{useForm:i.Form.useForm,Item:i.Form.Item,List:i.Form.List,ErrorList:i.Form.ErrorList,Provider:i.Form.Provider})}}]);