"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4225],{1606:(e,t,n)=>{n.d(t,{A:()=>i,P:()=>l});var a=n(17437),r=n(24002);let l=(0,a.AH)("white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"),i=({isVertical:e,isHorizontal:t}={isVertical:!1,isHorizontal:!0})=>{let[n,a]=(0,r.useState)(!0),l=(0,r.useRef)(null),[i,o]=(0,r.useState)(0),[c,d]=(0,r.useState)(0),[s,u]=(0,r.useState)(0),[h,p]=(0,r.useState)(0);return(0,r.useEffect)(()=>{var e,t,n,a,r,i,c,s;o(null!=(r=null==(e=l.current)?void 0:e.offsetWidth)?r:0),d(null!=(i=null==(t=l.current)?void 0:t.scrollWidth)?i:0),u(null!=(c=null==(n=l.current)?void 0:n.offsetHeight)?c:0),p(null!=(s=null==(a=l.current)?void 0:a.scrollHeight)?s:0)}),(0,r.useEffect)(()=>{a(e&&s<h||t&&i<c)},[i,c,s,h,e,t]),[l,n]}},18085:(e,t,n)=>{n.d(t,{Ay:()=>a.A});var a=n(59789);n(88191)},21413:(e,t,n)=>{n.d(t,{t:()=>m});var a=n(24980);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let l=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,i=String.raw`(?:TODAY|NOW)`,o=String.raw`[+-]?[1-9][0-9]*`,c=String.raw`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`,d=RegExp(String.raw`^DATEADD\(DATETIME\("(${l}|${i})"\),\s(${o}),\s(${c})\)$`,"i"),s=RegExp(String.raw`^${l}$|^${i}$`,"i"),u=["now","today"],h=new Date;h.setHours(0,0,0,0);let p=new Date;p.setHours(0,0,0,0);let v={sinceDatetime:h.setDate(h.getDate()-7).toString(),sinceMode:"relative",sinceGrain:"day",sinceGrainValue:-7,untilDatetime:p.toString(),untilMode:"specific",untilGrain:"day",untilGrainValue:7,anchorMode:"now",anchorValue:"now"},m=e=>{let t=e.split(a.wv);if(2===t.length){let[e,n]=t;if(s.test(e)&&s.test(n)){let t=u.includes(e)?e:"specific",a=u.includes(n)?n:"specific";return{customRange:r({},v,{sinceDatetime:e,untilDatetime:n,sinceMode:t,untilMode:a}),matchedFlag:!0}}let a=e.match(d);if(a&&s.test(n)&&e.includes(n)){let[e,t,l]=a.slice(1),i=u.includes(n)?n:"specific";return{customRange:r({},v,{sinceGrain:l,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilDatetime:e,sinceMode:"relative",untilMode:i}),matchedFlag:!0}}let l=n.match(d);if(s.test(e)&&l&&n.includes(e)){let[t,n,a]=l.slice(1),i=u.includes(e)?e:"specific";return{customRange:r({},v,{untilGrain:a,untilGrainValue:parseInt(n,10),sinceDatetime:t,untilDatetime:t,untilMode:"relative",sinceMode:i}),matchedFlag:!0}}if(a&&l){let[e,t,n]=a.slice(1),[i,o,c]=l.slice(1);if(e===i)return{customRange:r({},v,{sinceGrain:n,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilGrain:c,untilGrainValue:parseInt(o,10),untilDatetime:i,anchorValue:e,sinceMode:"relative",untilMode:"relative",anchorMode:"now"===e?"now":"specific"}),matchedFlag:!0}}}return{customRange:v,matchedFlag:!1}}},24980:(e,t,n)=>{n.d(t,{wv:()=>u,x9:()=>v});var a=n(58561),r=n.n(a),l=n(62193),i=n.n(l),o=n(79843),c=n(95265),d=n(94149);function s(e,t,n,a,r,l,i){try{var o=e[l](i),c=o.value}catch(e){n(e);return}o.done?t(c):Promise.resolve(c).then(a,r)}let u=" : ",h=(e,t)=>`${e}${u}${t}`,p=(e,t)=>e.replace("T00:00:00","")||(t?"-∞":"∞"),v=(e,t="col",n)=>{var a;return(a=function*(){let a,l;if(i()(n))a=r().encode_uri(e),l=`/api/v1/time_range/?q=${a}`;else{let t=(0,o.A)(n).map(t=>({timeRange:e,shift:t}));a=r().encode_uri([{timeRange:e},...t]),l=`/api/v1/time_range/?q=${a}`}try{var s,v,m,f,g;let e=yield c.A.get({endpoint:l});if(i()(n)){let n=h((null==e||null==(m=e.json)||null==(v=m.result[0])?void 0:v.since)||"",(null==e||null==(g=e.json)||null==(f=g.result[0])?void 0:f.until)||"");return{value:((e,t="col")=>{let n=e.split(u);return 1===n.length?e:`${p(n[0],!0)} ≤ ${t} < ${p(n[1])}`})(n,t)}}let a=null==e||null==(s=e.json)?void 0:s.result.map(e=>h(e.since,e.until));return{value:a.slice(1).map(e=>((e,t,n="col")=>{let a=e.split(u),r=t.split(u);return`${n}: ${p(a[0],!0)} to ${p(a[1])} vs
  ${p(r[0],!0)} to ${p(r[1])}`})(a[0],e,t))}}catch(t){let e=yield(0,d.h4)(t);return{error:e.message||e.error||t.statusText}}},function(){var e=this,t=arguments;return new Promise(function(n,r){var l=a.apply(e,t);function i(e){s(l,n,r,i,o,"next",e)}function o(e){s(l,n,r,i,o,"throw",e)}i(void 0)})})()}},27392:(e,t,n)=>{n.d(t,{RV:()=>s,be:()=>i,cJ:()=>d,ke:()=>c,kw:()=>u,o6:()=>l,oF:()=>r,sw:()=>a,u_:()=>o});let a="previous calendar week",r="previous calendar month",l="previous calendar quarter",i="previous calendar year",o="Current day",c="Current week",d="Current month",s="Current year",u="Current quarter"},36501:(e,t,n)=>{n.d(t,{Mo:()=>o,YH:()=>l,j3:()=>i});var a=n(21346),r=n(22023);let l=0,i=a.I4.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===l?"100%":`${e}px`};
`;(0,a.I4)(r.e)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`;let o=a.I4.div`
  color: ${({theme:e,status:t="error"})=>{if("help"===t)return e.colorTextSecondary;switch(t){case"error":default:return e.colorError;case"warning":return e.colorWarning;case"info":return e.colorInfo}}};
  text-align: ${({centerText:e})=>e?"center":"left"};
  width: 100%;
`},59789:(e,t,n)=>{n.d(t,{A:()=>K});var a=n(2445),r=n(24002),l=n(1606),i=n(1800),o=n(24980),c=n(91054),d=n(21346),s=n(17437),u=n(93666),h=n(32450),p=n(90300),v=n(30404),m=n(34813),f=n(95678),g=n(67675),b=n(72030),y=n(76570),C=n(92096),w=n(88191),Y=n(7973);function D(e){let t="Last week";return w.Be.has(e.value)?t=e.value:e.onChange(t),(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"section-title","data-test":w.ad.CommonFrame,children:(0,c.t)("Configure Time Range: Last...")}),(0,a.Y)(Y.s.GroupWrapper,{spaceConfig:{direction:"vertical",size:15,align:"start",wrap:!1},size:"large",value:t,onChange:t=>e.onChange(t.target.value),options:w.z6})]})}var $=n(27392);function x({onChange:e,value:t}){return((0,r.useEffect)(()=>{w.oo.has(t)||e($.sw)},[e,t]),w.oo.has(t))?(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"section-title",children:(0,c.t)("Configure Time Range: Previous...")}),(0,a.Y)(Y.s.GroupWrapper,{spaceConfig:{direction:"vertical",size:15,align:"start",wrap:!1},size:"large",value:t,onChange:t=>e(t.target.value),options:w.cn})]}):null}function A({onChange:e,value:t}){return((0,r.useEffect)(()=>{w.yI.has(t)||e($.ke)},[t]),w.yI.has(t))?(0,a.FD)(a.FK,{children:[(0,a.Y)("div",{className:"section-title",children:(0,c.t)("Configure Time Range: Current...")}),(0,a.Y)(Y.s.GroupWrapper,{spaceConfig:{direction:"vertical",size:15,align:"start",wrap:!0},size:"large",onChange:t=>{let n=t.target.value;""!==(n=n.trim())&&e(n)},options:w.ZC})]}):null}var F=n(21413),S=n(56927),O=n(44263),E=n(22022),T=n(23941),N=n(55426),I=n(67379);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e){let{customRange:t,matchedFlag:n}=(0,F.t)(e.value),r=(0,I.Y)();n||e.onChange((0,w.IS)(t));let{sinceDatetime:l,sinceMode:i,sinceGrain:o,sinceGrainValue:d,untilDatetime:s,untilMode:h,untilGrain:p,untilGrainValue:v,anchorValue:m,anchorMode:f}=R({},t);function g(n,a){e.onChange((0,w.IS)(R({},t,{[n]:a})))}function b(n,a){"number"==typeof a&&Number.isInteger(a)&&a>0&&e.onChange((0,w.IS)(R({},t,{[n]:a})))}return null===r?(0,a.Y)(S.R,{position:"inline-centered"}):(0,a.Y)(O.Q,{locale:r,children:(0,a.FD)("div",{"data-test":"custom-frame",children:[(0,a.Y)("div",{className:"section-title",children:(0,c.t)("Configure custom time range")}),(0,a.FD)(E.Row,{gutter:24,children:[(0,a.FD)(E.Col,{span:12,children:[(0,a.FD)("div",{className:"control-label",children:[(0,c.t)("Start (inclusive)")," ",(0,a.Y)(T.I,{tooltip:(0,c.t)("Start date included in time range"),placement:"right"})]}),(0,a.Y)(u.A,{ariaLabel:(0,c.t)("Start (inclusive)"),options:w.Wm,value:i,onChange:e=>g("sinceMode",e)}),"specific"===i&&(0,a.Y)(E.Row,{children:(0,a.Y)(N.l,{showTime:!0,defaultValue:(0,w.Ab)(l),onChange:e=>g("sinceDatetime",e.format(w.c1)),allowClear:!1,getPopupContainer:t=>e.isOverflowingFilterBar?t.parentNode:document.body})}),"relative"===i&&(0,a.FD)(E.Row,{gutter:8,children:[(0,a.Y)(E.Col,{span:11,children:(0,a.Y)(E.InputNumber,{placeholder:(0,c.t)("Relative quantity"),value:Math.abs(d),min:1,defaultValue:1,onChange:e=>b("sinceGrainValue",e||1),onStep:e=>b("sinceGrainValue",e||1)})}),(0,a.Y)(E.Col,{span:13,children:(0,a.Y)(u.A,{ariaLabel:(0,c.t)("Relative period"),options:w.IZ,value:o,onChange:e=>g("sinceGrain",e)})})]})]}),(0,a.FD)(E.Col,{span:12,children:[(0,a.FD)("div",{className:"control-label",children:[(0,c.t)("End (exclusive)")," ",(0,a.Y)(T.I,{tooltip:(0,c.t)("End date excluded from time range"),placement:"right"})]}),(0,a.Y)(u.A,{ariaLabel:(0,c.t)("End (exclusive)"),options:w.OP,value:h,onChange:e=>g("untilMode",e)}),"specific"===h&&(0,a.Y)(E.Row,{children:(0,a.Y)(N.l,{showTime:!0,defaultValue:(0,w.Ab)(s),onChange:e=>g("untilDatetime",e.format(w.c1)),allowClear:!1,getPopupContainer:t=>e.isOverflowingFilterBar?t.parentNode:document.body})}),"relative"===h&&(0,a.FD)(E.Row,{gutter:8,children:[(0,a.Y)(E.Col,{span:11,children:(0,a.Y)(E.InputNumber,{placeholder:(0,c.t)("Relative quantity"),value:v,min:1,defaultValue:1,onChange:e=>b("untilGrainValue",e||1),onStep:e=>b("untilGrainValue",e||1)})}),(0,a.Y)(E.Col,{span:13,children:(0,a.Y)(u.A,{ariaLabel:(0,c.t)("Relative period"),options:w.s6,value:p,onChange:e=>g("untilGrain",e)})})]})]})]}),"relative"===i&&"relative"===h&&(0,a.FD)("div",{className:"control-anchor-to",children:[(0,a.Y)("div",{className:"control-label",children:(0,c.t)("Anchor to")}),(0,a.FD)(E.Row,{align:"middle",children:[(0,a.Y)(E.Col,{children:(0,a.Y)(Y.s.GroupWrapper,{options:[{value:"now",label:(0,c.t)("Now")},{value:"specific",label:(0,c.t)("Date/Time")}],onChange:function(n){let a=n.target.value;"now"===a?e.onChange((0,w.IS)(R({},t,{anchorValue:"now",anchorMode:a}))):e.onChange((0,w.IS)(R({},t,{anchorValue:w.bd,anchorMode:a})))},defaultValue:"now",value:f})}),"now"!==f&&(0,a.Y)(E.Col,{children:(0,a.Y)(N.l,{showTime:!0,defaultValue:(0,w.Ab)(m),onChange:e=>g("anchorValue",e.format(w.c1)),allowClear:!1,className:"control-anchor-to-datetime",getPopupContainer:t=>e.isOverflowingFilterBar?t.parentNode:document.body})})]})]})]})})}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let z=(0,a.FD)(a.FK,{children:[(0,a.FD)("div",{children:[(0,a.Y)("h3",{children:"DATETIME"}),(0,a.Y)("p",{children:(0,c.t)("Return to specific datetime.")}),(0,a.Y)("h4",{children:(0,c.t)("Syntax")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:"datetime([string])"})}),(0,a.Y)("h4",{children:(0,c.t)("Example")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`datetime("2020-03-01 12:00:00")
datetime("now")
datetime("last year")`})})]}),(0,a.FD)("div",{children:[(0,a.Y)("h3",{children:"DATEADD"}),(0,a.Y)("p",{children:(0,c.t)("Moves the given set of dates by a specified interval.")}),(0,a.Y)("h4",{children:(0,c.t)("Syntax")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`dateadd([datetime], [integer], [dateunit])
dateunit = (year | quarter | month | week | day | hour | minute | second)`})}),(0,a.Y)("h4",{children:(0,c.t)("Example")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`dateadd(datetime("today"), -13, day)
dateadd(datetime("2020-03-01"), 2, day)`})})]}),(0,a.FD)("div",{children:[(0,a.Y)("h3",{children:"DATETRUNC"}),(0,a.Y)("p",{children:(0,c.t)("Truncates the specified date to the accuracy specified by the date unit.")}),(0,a.Y)("h4",{children:(0,c.t)("Syntax")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`datetrunc([datetime], [dateunit])
dateunit = (year | quarter | month | week)`})}),(0,a.Y)("h4",{children:(0,c.t)("Example")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`datetrunc(datetime("2020-03-01"), week)
datetrunc(datetime("2020-03-01"), month)`})})]}),(0,a.FD)("div",{children:[(0,a.Y)("h3",{children:"LASTDAY"}),(0,a.Y)("p",{children:(0,c.t)("Get the last date by the date unit.")}),(0,a.Y)("h4",{children:(0,c.t)("Syntax")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`lastday([datetime], [dateunit])
dateunit = (year | month | week)`})}),(0,a.Y)("h4",{children:(0,c.t)("Example")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:'lastday(datetime("today"), month)'})})]}),(0,a.FD)("div",{children:[(0,a.Y)("h3",{children:"HOLIDAY"}),(0,a.Y)("p",{children:(0,c.t)("Get the specify date for the holiday")}),(0,a.Y)("h4",{children:(0,c.t)("Syntax")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`holiday([string])
holiday([holiday string], [datetime])
holiday([holiday string], [datetime], [country name])`})}),(0,a.Y)("h4",{children:(0,c.t)("Example")}),(0,a.Y)("pre",{children:(0,a.Y)("code",{children:`holiday("new year")
holiday("christmas", datetime("2019"))
holiday("christmas", dateadd(datetime("2019"), 1, year))
holiday("christmas", datetime("2 years ago"))
holiday("Easter Monday", datetime("2019"), "UK")`})})]})]}),L=e=>{let t=(0,d.DP)();return(0,a.Y)(s.Z2,{children:({css:n})=>(0,a.Y)(m.m,M({overlayClassName:n`
            .ant-tooltip-content {
              min-width: ${125*t.sizeUnit}px;
              max-height: 410px;
              overflow-y: scroll;

              .ant-tooltip-inner {
                max-width: ${125*t.sizeUnit}px;
                h3 {
                  font-size: ${t.fontSize}px;
                  font-weight: ${t.fontWeightStrong};
                }
                h4 {
                  font-size: ${t.fontSize}px;
                  font-weight: ${t.fontWeightStrong};
                }
                pre {
                  border: none;
                  text-align: left;
                  word-break: break-word;
                  font-size: ${t.fontSizeSM}px;
                }
              }
            }
          `},e))})};function P(e){return(0,a.Y)(L,M({title:z},e))}function W(e){return e.includes(o.wv)?e:e.startsWith("Last")?[e,""].join(o.wv):e.startsWith("Next")?["",e].join(o.wv):o.wv}function V(e){let t=W(e.value||""),[n,r]=t.split(o.wv);function l(t,a){"since"===t?e.onChange(`${a}${o.wv}${r}`):e.onChange(`${n}${o.wv}${a}`)}return t!==e.value&&e.onChange(W(e.value||"")),(0,a.FD)(a.FK,{children:[(0,a.FD)("div",{className:"section-title",children:[(0,c.t)("Configure Advanced Time Range "),(0,a.Y)(P,{placement:"rightBottom",children:(0,a.Y)(g.F.InfoCircleOutlined,{})})]}),(0,a.FD)("div",{className:"control-label",children:[(0,c.t)("Start (inclusive)")," ",(0,a.Y)(T.I,{tooltip:(0,c.t)("Start date included in time range"),placement:"right"})]}),(0,a.Y)(E.Input,{value:n,onChange:e=>l("since",e.target.value)},"since"),(0,a.FD)("div",{className:"control-label",children:[(0,c.t)("End (exclusive)")," ",(0,a.Y)(T.I,{tooltip:(0,c.t)("End date excluded from time range"),placement:"right"})]}),(0,a.Y)(E.Input,{value:r,onChange:e=>l("until",e.target.value)},"until")]})}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let j=d.I4.div`
  ${({theme:e,isActive:t,isPlaceholder:n})=>(0,s.AH)`
    height: ${8*e.sizeUnit}px;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    padding: 0 ${3*e.sizeUnit}px;

    background-color: ${e.colorBgContainer};

    border: 1px solid ${t?e.colorPrimary:e.colorBorder};
    border-radius: ${e.borderRadius}px;

    cursor: pointer;

    transition: border-color 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
    :hover,
    :focus {
      border-color: ${e.colorPrimary};
    }

    .date-label-content {
      color: ${n?e.colorTextPlaceholder:e.colorText};
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      flex-shrink: 1;
      white-space: nowrap;
    }

    span[role='img'] {
      color: ${n?e.colorTextPlaceholder:e.colorText};
      margin-left: auto;
      padding-left: ${e.sizeUnit}px;

      & > span[role='img'] {
        line-height: 0;
      }
    }
  `}
`,G=(0,r.forwardRef)((e,t)=>(0,a.FD)(j,H({},e,{tabIndex:0,role:"button",children:[(0,a.Y)("span",{id:`date-label-${e.name}`,className:"date-label-content",ref:t,children:"string"==typeof e.label?(0,c.t)(e.label):e.label}),(0,a.Y)(g.F.CalendarOutlined,{iconSize:"s"})]})));function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let U=(0,d.I4)(u.A)`
  width: 272px;
`,q=d.I4.div`
  ${({theme:e})=>(0,s.AH)`
    .ant-row {
      margin-top: 8px;
    }

    .ant-picker {
      padding: 4px 17px 4px;
      border-radius: 4px;
    }

    .ant-divider-horizontal {
      margin: 16px 0;
    }

    .control-label {
      font-size: ${e.fontSizeSM}px;
      line-height: 16px;
      margin: 8px 0;
    }

    .section-title {
      font-style: normal;
      font-weight: ${e.fontWeightStrong};
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 8px;
    }

    .control-anchor-to {
      margin-top: 16px;
    }

    .control-anchor-to-datetime {
      width: 217px;
    }

    .footer {
      text-align: right;
    }
  `}
`,_=d.I4.span`
  span {
    margin-right: ${({theme:e})=>2*e.sizeUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .error {
    color: ${({theme:e})=>e.colorError};
  }
`,Z=(e,t,n)=>e?(0,a.FD)("div",{children:[t&&(0,a.Y)("strong",{children:t}),n&&(0,a.Y)("div",{css:e=>(0,s.AH)`
            margin-top: ${e.sizeUnit}px;
          `,children:n})]}):n||null;function K(e){var t;let{name:n,onChange:s,onOpenPopover:u=y.fZ,onClosePopover:Y=y.fZ,isOverflowingFilterBar:$=!1}=e,F=(0,w.IM)(),S=null!=(t=e.value)?t:F,[O,E]=(0,r.useState)(S),[T,N]=(0,r.useState)(!1),I=(0,r.useMemo)(()=>(0,w.J5)(S),[S]),[R,M]=(0,r.useState)(I),[z,L]=(0,r.useState)(S),[P,W]=(0,r.useState)(S),[H,j]=(0,r.useState)(!1),[K,J]=(0,r.useState)(S),[X,Q]=(0,r.useState)(S),ee=(0,d.DP)(),[et,en]=(0,l.A)();function ea(){W(S),M(I),N(!1),Y()}(0,r.useEffect)(()=>{if(S===i.WC){E(i.WC),Q(null),j(!0);return}(0,o.x9)(S).then(({value:e,error:t})=>{t?(J(t||""),j(!1),Q(S||null)):("Common"===I||"Calendar"===I||"Current"===I||"No filter"===I?(E(S),Q(Z(en,S,e))):(E(e||""),Q(Z(en,e,S))),j(!0)),L(S),J(e||S)})},[I,en,et,S]),(0,b.sv)(()=>{if(P===i.WC){J(i.WC),L(i.WC),j(!0);return}z!==P&&(0,o.x9)(P).then(({value:e,error:t})=>{t?(J(t||""),j(!1)):(J(e||""),j(!0)),L(P)})},h.Y.SLOW_DEBOUNCE,[P]);let er=(0,a.FD)(q,{children:[(0,a.Y)("div",{className:"control-label",children:(0,c.t)("Range type")}),(0,a.Y)(U,{ariaLabel:(0,c.t)("Range type"),options:w.BJ,value:R,onChange:function(e){e===i.WC&&W(i.WC),M(e)}}),"No filter"!==R&&(0,a.Y)(p.c,{}),"Common"===R&&(0,a.Y)(D,{value:P,onChange:W}),"Calendar"===R&&(0,a.Y)(x,{value:P,onChange:W}),"Current"===R&&(0,a.Y)(A,{value:P,onChange:W}),"Advanced"===R&&(0,a.Y)(V,{value:P,onChange:W}),"Custom"===R&&(0,a.Y)(k,{value:P,onChange:W,isOverflowingFilterBar:$}),"No filter"===R&&(0,a.Y)("div",{"data-test":w.ad.NoFilter}),(0,a.Y)(p.c,{}),(0,a.FD)("div",{children:[(0,a.Y)("div",{className:"section-title",children:(0,c.t)("Actual time range")}),H&&(0,a.Y)("div",{children:"No filter"===K?(0,c.t)("No filter"):K}),!H&&(0,a.FD)(_,{className:"warning",children:[(0,a.Y)(g.F.ExclamationCircleOutlined,{iconColor:ee.colorError}),(0,a.Y)("span",{className:"text error",children:K})]})]}),(0,a.Y)(p.c,{}),(0,a.FD)("div",{className:"footer",children:[(0,a.Y)(v.$,{buttonStyle:"secondary",cta:!0,onClick:ea,"data-test":w.ad.CancelButton,children:(0,c.t)("CANCEL")},"cancel"),(0,a.Y)(v.$,{buttonStyle:"primary",cta:!0,disabled:!H,onClick:function(){s(P),N(!1),Y()},"data-test":w.ad.ApplyButton,children:(0,c.t)("APPLY")},"apply")]})]}),el=(0,a.Y)(C.A,{autoAdjustOverflow:!1,trigger:"click",placement:"right",content:er,title:(0,a.FD)(_,{children:[(0,a.Y)(g.F.EditOutlined,{}),(0,a.Y)("span",{className:"text",children:(0,c.t)("Edit time range")})]}),defaultOpen:T,open:T,onOpenChange:()=>{T?ea():(W(S),M(I),N(!0),u())},overlayStyle:{width:"600px"},destroyTooltipOnHide:!0,getPopupContainer:e=>$?e.parentNode:document.body,overlayClassName:"time-range-popover",children:(0,a.Y)(m.m,{placement:"top",title:X,children:(0,a.Y)(G,{name:n,"aria-labelledby":`filter-name-${e.name}`,"aria-describedby":`date-label-${e.name}`,label:O,isActive:T,isPlaceholder:O===i.WC,"data-test":w.ad.PopoverOverlay,ref:et})})});return(0,a.FD)(a.FK,{children:[(0,a.Y)(f.A,B({},e)),el]})}},88191:(e,t,n)=>{n.d(t,{cn:()=>s,oo:()=>C,nS:()=>u,z6:()=>c,Be:()=>y,OL:()=>d,yI:()=>w,ZC:()=>h,Ex:()=>p,c1:()=>Y,ad:()=>$,BJ:()=>o,bd:()=>D,IZ:()=>m,Wm:()=>g,s6:()=>f,OP:()=>b,IS:()=>T,Ab:()=>O,J5:()=>k,IM:()=>M});var a,r=n(10405),l=n(91054),i=n(27392);let o=[{value:"Common",label:(0,l.t)("Last")},{value:"Calendar",label:(0,l.t)("Previous")},{value:"Current",label:(0,l.t)("Current")},{value:"Custom",label:(0,l.t)("Custom")},{value:"Advanced",label:(0,l.t)("Advanced")},{value:"No filter",label:(0,l.t)("No filter")}],c=[{value:"Last day",label:(0,l.t)("Last day")},{value:"Last week",label:(0,l.t)("Last week")},{value:"Last month",label:(0,l.t)("Last month")},{value:"Last quarter",label:(0,l.t)("Last quarter")},{value:"Last year",label:(0,l.t)("Last year")}],d=new Set(c.map(e=>e.value)),s=[{value:i.sw,label:(0,l.t)("previous calendar week")},{value:i.oF,label:(0,l.t)("previous calendar month")},{value:i.o6,label:(0,l.t)("previous calendar quarter")},{value:i.be,label:(0,l.t)("previous calendar year")}],u=new Set(s.map(e=>e.value)),h=[{value:i.u_,label:(0,l.t)("Current day")},{value:i.ke,label:(0,l.t)("Current week")},{value:i.cJ,label:(0,l.t)("Current month")},{value:i.kw,label:(0,l.t)("Current quarter")},{value:i.RV,label:(0,l.t)("Current year")}],p=new Set(h.map(e=>e.value)),v=[{value:"second",label:e=>(0,l.t)("Seconds %s",e)},{value:"minute",label:e=>(0,l.t)("Minutes %s",e)},{value:"hour",label:e=>(0,l.t)("Hours %s",e)},{value:"day",label:e=>(0,l.t)("Days %s",e)},{value:"week",label:e=>(0,l.t)("Weeks %s",e)},{value:"month",label:e=>(0,l.t)("Months %s",e)},{value:"quarter",label:e=>(0,l.t)("Quarters %s",e)},{value:"year",label:e=>(0,l.t)("Years %s",e)}],m=v.map(e=>({value:e.value,label:e.label((0,l.t)("Before"))})),f=v.map(e=>({value:e.value,label:e.label((0,l.t)("After"))})),g=[{value:"specific",label:(0,l.t)("Specific Date/Time")},{value:"relative",label:(0,l.t)("Relative Date/Time")},{value:"now",label:(0,l.t)("Now")},{value:"today",label:(0,l.t)("Midnight")}],b=g.slice(),y=new Set(["Last day","Last week","Last month","Last quarter","Last year"]),C=new Set([i.sw,i.oF,i.o6,i.be]),w=new Set([i.u_,i.ke,i.cJ,i.kw,i.RV]),Y="YYYY-MM-DD[T]HH:mm:ss";(0,r.XV)().utc().startOf("day").subtract(7,"days").format(Y);let D=(0,r.XV)().utc().startOf("day").format(Y);var $=((a={}).CommonFrame="common-frame",a.ModalOverlay="modal-overlay",a.PopoverOverlay="time-range-trigger",a.NoFilter="no-filter",a.CancelButton="cancel-button",a.ApplyButton="date-filter-control__apply-button",a);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let A=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,F=String.raw`(?:TODAY|NOW)`;RegExp(String.raw`^${A}$|^${F}$`,"i");let S=["specific","today","now"],O=e=>"now"===e?(0,r.XV)().utc().startOf("second"):"today"===e?(0,r.XV)().utc().startOf("day"):(0,r.XV)(e),E=e=>O(e).format(Y),T=e=>{let{sinceDatetime:t,sinceMode:n,sinceGrain:a,sinceGrainValue:r,untilDatetime:l,untilMode:i,untilGrain:o,untilGrainValue:c,anchorValue:d}=x({},e);if(S.includes(n)&&S.includes(i)){let e="specific"===n?E(t):n,a="specific"===i?E(l):i;return`${e} : ${a}`}if(S.includes(n)&&"relative"===i){let e="specific"===n?E(t):n,a=`DATEADD(DATETIME("${e}"), ${c}, ${o})`;return`${e} : ${a}`}if("relative"===n&&S.includes(i)){let e="specific"===i?E(l):i,t=`DATEADD(DATETIME("${e}"), ${-Math.abs(r)}, ${a})`;return`${t} : ${e}`}let s=`DATEADD(DATETIME("${d}"), ${-Math.abs(r)}, ${a})`,u=`DATEADD(DATETIME("${d}"), ${c}, ${o})`;return`${s} : ${u}`};var N=n(1800),I=n(21413),R=n(61225);let k=e=>d.has(e)?"Common":u.has(e)?"Calendar":p.has(e)?"Current":e===N.WC?"No filter":(0,I.t)(e).matchedFlag?"Custom":"Advanced";function M(){var e;return null!=(e=(0,R.d4)(e=>{var t,n;return null==e||null==(n=e.common)||null==(t=n.conf)?void 0:t.DEFAULT_TIME_FILTER}))?e:N.WC}},90300:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(2445),r=n(17437),l=n(22022);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e){return(0,a.Y)(l.Divider,i({css:e=>(0,r.AH)`
        margin: ${e.margin}px 0;
      `},e))}},92096:(e,t,n)=>{n.d(t,{A:()=>s,v:()=>c});var a=n(2445),r=n(24002),l=n.n(r),i=n(42419);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let c=()=>{var e;return null==(e=document.getElementById("controlSections"))?void 0:e.lastElementChild},d=e=>{var t,n;let a=null==(t=window)?void 0:t.innerHeight,r=null==(n=window)?void 0:n.innerWidth,l=null==e?void 0:e.getBoundingClientRect();return a&&r&&(null==l?void 0:l.top)?{yRatio:l.top/a,xRatio:l.left/r}:{yRatio:0,xRatio:0}},s=e=>{var{getPopupContainer:t,getVisibilityRatio:n=d,open:s,destroyTooltipOnHide:u=!1,placement:h="right"}=e,p=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(n=l[a])>=0||(r[n]=e[n]);return r}(e,["getPopupContainer","getVisibilityRatio","open","destroyTooltipOnHide","placement"]);let v=(0,r.useRef)(),[m,f]=(0,r.useState)(void 0===s?p.defaultOpen:s),[g,b]=l().useState(h),y=(0,r.useCallback)(()=>{if(!v.current||!m)return;let{yRatio:e,xRatio:t}=n(v.current),a=t<.35?"right":t>.65?"left":"",r=e<.35?a?"top":"bottom":e>.65?a?"bottom":"top":"",l=(a?a+r.charAt(0).toUpperCase()+r.slice(1):r)||"left";l!==g&&b(l)},[n,m,g]),C=(0,r.useCallback)(e=>{let t=c();t&&t.style.setProperty("overflow-y",e?"hidden":"auto","important")},[y]),w=(0,r.useCallback)(e=>(v.current=e,(null==t?void 0:t(e))||document.body),[y,t]),Y=(0,r.useCallback)(e=>{void 0===e&&C(e),f(!!e),null==p.onOpenChange||p.onOpenChange.call(p,!!e)},[p,C]),D=(0,r.useCallback)(e=>{"Escape"===e.key&&(f(!1),null==p.onOpenChange||p.onOpenChange.call(p,!1))},[p]),$=(0,r.useCallback)(e=>{e&&y()},[y]);return(0,r.useEffect)(()=>{void 0!==s&&f(!!s)},[s]),(0,r.useEffect)(()=>{void 0!==m&&C(m)},[m,C]),(0,r.useEffect)(()=>(m&&document.addEventListener("keydown",D),()=>{document.removeEventListener("keydown",D)}),[D,m]),(0,r.useEffect)(()=>{if(!m||!v.current)return()=>{};let e=new ResizeObserver(()=>{requestAnimationFrame(()=>{y()})}),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&y()})},{threshold:[0,.25,.5,.75,1]});return e.observe(v.current.parentElement||document.body),t.observe(v.current),()=>{e.disconnect(),t.disconnect()}},[m,y]),(0,a.Y)(i.A,o({},p,{open:m,arrow:{pointAtCenter:!0},placement:g,onOpenChange:Y,getPopupContainer:w,destroyTooltipOnHide:u,afterOpenChange:$}))}},95678:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(2445),r=n(91054),l=n(21346),i=n(17437),o=n(63278),c=n(34813),d=n(23941),s=n(67675);let u=(0,i.AH)`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,h=({name:e,label:t,description:n,validationErrors:h=[],renderTrigger:p=!1,rightNode:v,leftNode:m,onClick:f,hovered:g=!1,tooltipOnClick:b=()=>{},warning:y,danger:C})=>{let w=(0,l.DP)();return t?(0,a.FD)("div",{className:"ControlHeader","data-test":`${e}-header`,children:[(0,a.Y)("div",{className:"pull-left",children:(0,a.FD)(o.l,{css:e=>(0,i.AH)`
            margin-bottom: ${.5*e.sizeUnit}px;
            position: relative;
            font-size: ${e.fontSizeSM}px;
          `,htmlFor:e,children:[m&&(0,a.FD)("span",{children:[m," "]}),(0,a.Y)("span",{role:"button",tabIndex:0,onClick:f,style:{cursor:f?"pointer":""},children:t})," ",y&&(0,a.FD)("span",{children:[(0,a.Y)(c.m,{id:"error-tooltip",placement:"top",title:y,children:(0,a.Y)(s.F.WarningOutlined,{iconColor:w.colorWarning,css:(0,i.AH)`
                    vertical-align: baseline;
                  `,iconSize:"s"})})," "]}),C&&(0,a.FD)("span",{children:[(0,a.Y)(c.m,{id:"error-tooltip",placement:"top",title:C,children:(0,a.Y)(s.F.CloseCircleOutlined,{iconColor:w.colorErrorText,iconSize:"s"})})," "]}),(null==h?void 0:h.length)>0&&(0,a.FD)("span",{"data-test":"error-tooltip",css:(0,i.AH)`
                cursor: pointer;
              `,children:[(0,a.Y)(c.m,{id:"error-tooltip",placement:"top",title:null==h?void 0:h.join(" "),children:(0,a.Y)(s.F.ExclamationCircleOutlined,{iconColor:w.colorError})})," "]}),g?(0,a.FD)("span",{css:()=>(0,i.AH)`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${w.sizeUnit}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `,children:[n&&(0,a.FD)("span",{children:[(0,a.Y)(c.m,{id:"description-tooltip",title:n,placement:"top",children:(0,a.Y)(s.F.InfoCircleOutlined,{css:u,onClick:b})})," "]}),p&&(0,a.FD)("span",{children:[(0,a.Y)(d.I,{label:(0,r.t)("bolt"),tooltip:(0,r.t)("Changing this control takes effect instantly"),placement:"top",type:"notice"})," "]})]}):null]})}),v&&(0,a.Y)("div",{className:"pull-right",children:v}),(0,a.Y)("div",{className:"clearfix"})]}):null}}}]);