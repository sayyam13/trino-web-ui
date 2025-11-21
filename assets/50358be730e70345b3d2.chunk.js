(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8450],{18450:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>m});var n=l(2445),r=l(24002),a=l(91054),i=l(45012),o=l(6603),s=l(42964),c=l(58767),u=l(44822),d=l(21346),h=l(66372);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}let f=(0,o.gV)(),m=(0,d.I4)(function(e){var{className:t="",headerFormatter:l=f,formatTime:o=(0,s.mo)(c.M),headerFontSize:m=.3,kickerFontSize:p=.1,metricNameFontSize:v=.125,showMetricName:y=!0,mainColor:b=u.a1,showTimestamp:x=!1,showTrendLine:S=!1,startYAxisAtZero:j=!0,subheader:T="",subheaderFontSize:N=.125,subtitleFontSize:k=.125,timeRangeFixed:w=!1}=e,A=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(l=a[n])>=0||(r[l]=e[l]);return r}(e,["className","headerFormatter","formatTime","headerFontSize","kickerFontSize","metricNameFontSize","showMetricName","mainColor","showTimestamp","showTrendLine","startYAxisAtZero","subheader","subheaderFontSize","subtitleFontSize","timeRangeFixed"]);let E=(0,d.DP)(),[F,O]=(0,r.useState)(!1),R=(0,r.useRef)(null),I=(0,r.useRef)(null),z=(0,r.useRef)(null),$=(0,r.useRef)(null),C=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=setTimeout(()=>{O(!0)},0);return()=>clearTimeout(e)},[]),(0,r.useEffect)(()=>{},[A.height,S]);let L=()=>{let e=`superset-legacy-chart-big-number ${t} ${A.bigNumberFallback?"is-fallback-value":""}`;return S?e:`${e} no-trendline`},M=()=>{let e=document.createElement("div");return e.className=L(),e.style.position="absolute",e.style.opacity="0",e},U=()=>{let{bigNumberFallback:e}=A;return o&&e&&!x?(0,n.Y)("span",{className:"alert alert-warning",role:"alert",title:(0,a.t)("Last available value seen on %s",o(e[0])),children:(0,a.t)("Not up to date")}):null},Y=e=>{let{metricName:t,width:l}=A;if(!y||!t)return null;let r=M();document.body.append(r);let a=(0,i.A)({text:t,maxWidth:l,maxHeight:e,className:"metric-name",container:r});return r.remove(),(0,n.Y)("div",{ref:R,className:"metric-name",style:{fontSize:a,height:"auto"},children:t})},D=e=>{let{timestamp:t,width:l}=A;if(!o||!x||"string"==typeof t||"bigint"==typeof t||"boolean"==typeof t)return null;let r=null===t?"":o(t),a=M();document.body.append(a);let s=(0,i.A)({text:r,maxWidth:l,maxHeight:e,className:"kicker",container:a});return a.remove(),(0,n.Y)("div",{ref:I,className:"kicker",style:{fontSize:s,height:"auto"},children:r})},P=e=>{let t,{bigNumber:r,width:o,colorThresholdFormatters:s,onContextMenu:c}=A,u=null===r?(0,a.t)("No data"):l(r);Array.isArray(s)&&s.length>0?s.forEach(e=>{let l=!!r&&e.getColorFromValue(r);l&&(t=l)}):t=E.colorText;let d=M();document.body.append(d);let h=(0,i.A)({text:u,maxWidth:.9*o,maxHeight:e,className:"header-line",container:d});return d.remove(),(0,n.Y)("div",{ref:z,className:"header-line",style:{display:"flex",alignItems:"center",fontSize:h,height:"auto",color:t},onContextMenu:e=>{c&&(e.preventDefault(),c(e.nativeEvent.clientX,e.nativeEvent.clientY))},children:u})},H=e=>{let{width:t}=A,l=0;if(T){let r=M();document.body.append(r);try{l=(0,i.A)({text:T,maxWidth:.9*t,maxHeight:e,className:"subheader-line",container:r})}finally{r.remove()}return(0,n.Y)("div",{ref:$,className:"subheader-line",style:{fontSize:l,height:e},children:T})}return null},V=e=>{let{subtitle:t,width:l,bigNumber:r,bigNumberFallback:o}=A,s=0,c=(0,a.t)("No data after filtering or data is NULL for the latest time record"),u=(0,a.t)("Try applying different filters or ensuring your datasource has data"),d=t;if(null===r&&(d=t||(o?u:c)),d){let t=M();return document.body.append(t),s=(0,i.A)({text:d,maxWidth:.9*l,maxHeight:e,className:"subtitle-line",container:t}),t.remove(),(0,n.Y)(n.FK,{children:(0,n.Y)("div",{ref:C,className:"subtitle-line subheader-line",style:{fontSize:`${s}px`,height:e},children:d})})}return null},K=e=>{let t;return!!F&&(t=[R,I,z,$,C].filter(e=>e.current)).reduce((e,l,n)=>{var r;return e+((null==(r=l.current)?void 0:r.offsetHeight)||0)+8*(n<t.length-1)},0)>e},{height:W}=A,X=L();if(S){let e=Math.floor(.3*W),t=W-e,l=K(t);return(0,n.FD)("div",{className:X,children:[(0,n.FD)("div",{className:"text-container",style:g({height:t},l?{display:"block",boxSizing:"border-box",overflowX:"hidden",overflowY:"auto",width:"100%"}:{}),children:[U(),Y(Math.ceil(.7*(v||0)*W)),D(Math.ceil(.7*(p||0)*W)),P(Math.ceil(.7*m*W)),H(Math.ceil(.7*N*W)),V(Math.ceil(.7*k*W))]}),(e=>{let{width:t,trendLineData:l,echartOptions:r,refs:a,onContextMenu:i,formData:o,xValueFormatter:s}=A;return(null==l?void 0:l.some(e=>null!==e[1]))?r&&(0,n.Y)(h.A,{refs:a,width:Math.floor(t),height:e,echartOptions:r,eventHandlers:{contextmenu:e=>{if(i){e.event.stop();let{data:t}=e;if(t){let l=e.event.event,n=[];n.push({col:null==o?void 0:o.granularitySqla,grain:null==o?void 0:o.timeGrainSqla,op:"==",val:t[0],formattedVal:null==s?void 0:s(t[0])}),i(l.clientX,l.clientY,{drillToDetail:n})}}}}}):null})(e)]})}let Z=K(W);return(0,n.Y)("div",{className:X,style:g({height:W},Z?{display:"block",boxSizing:"border-box",overflowX:"hidden",overflowY:"auto",width:"100%"}:{}),children:(0,n.FD)("div",{className:"text-container",children:[U(),Y((v||0)*W),D((p||0)*W),P(Math.ceil(m*W)),H(Math.ceil(N*W)),V(Math.ceil(k*W))]})})})`
  ${({theme:e})=>`
    font-family: ${e.fontFamily};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &.no-trendline .subheader-line {
      padding-bottom: 0.3em;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .alert {
        font-size: ${e.fontSizeSM};
        margin: -0.5em 0 0.4em;
        line-height: 1;
        padding: ${e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
      }
    }

    .kicker {
      line-height: 1em;
      margin-bottom: ${2*e.sizeUnit}px;
    }

    .metric-name {
      line-height: 1em;
      margin-bottom: ${2*e.sizeUnit}px;
    }

    .header-line {
      position: relative;
      line-height: 1em;
      white-space: nowrap;
      margin-bottom:${2*e.sizeUnit}px;
      span {
        position: absolute;
        bottom: 0;
      }
    }

    .subheader-line {
      line-height: 1em;
      margin-bottom: ${2*e.sizeUnit}px;
    }

    .subtitle-line {
      line-height: 1em;
      margin-bottom: ${2*e.sizeUnit}px;
    }

    &.is-fallback-value {
      .kicker,
      .header-line,
      .subheader-line {
        opacity: 60%;
      }
    }
  `}
`},31746:(e,t,l)=>{var n={"./langAR":[95380,5380],"./langAR.js":[95380,5380],"./langCS":[64053,4053],"./langCS.js":[64053,4053],"./langDE":[87020,7020],"./langDE.js":[87020,7020],"./langEN":[45764],"./langEN.js":[45764],"./langES":[61591,1591],"./langES.js":[61591,1591],"./langFA":[78510,8510],"./langFA.js":[78510,8510],"./langFI":[9702,9702],"./langFI.js":[9702,9702],"./langFR":[51515,1515],"./langFR.js":[51515,1515],"./langHU":[45888,5888],"./langHU.js":[45888,5888],"./langIT":[48378,8378],"./langIT.js":[48378,8378],"./langJA":[1626,1626],"./langJA.js":[1626,1626],"./langKO":[95401,5401],"./langKO.js":[95401,5401],"./langNL":[13985,3985],"./langNL.js":[13985,3985],"./langPL":[39271,9271],"./langPL.js":[39271,9271],"./langPT-br":[43620,3620],"./langPT-br.js":[43620,3620],"./langRO":[28079,460],"./langRO.js":[28079,460],"./langRU":[69118,6737],"./langRU.js":[69118,6737],"./langSI":[72603,2603],"./langSI.js":[72603,2603],"./langSV":[46746,6746],"./langSV.js":[46746,6746],"./langTH":[90703,703],"./langTH.js":[90703,703],"./langTR":[26841,6841],"./langTR.js":[26841,6841],"./langUK":[82335,2335],"./langUK.js":[82335,2335],"./langVI":[10102,102],"./langVI.js":[10102,102],"./langZH":[23073],"./langZH.js":[23073]};function r(e){if(!l.o(n,e))return Promise.resolve().then(()=>{var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return Promise.all(t.slice(1).map(l.e)).then(()=>l(r))}r.keys=()=>Object.keys(n),r.id=31746,e.exports=r},66372:(e,t,l)=>{"use strict";l.d(t,{A:()=>H});var n=l(2445),r=l(24002),a=l(61225),i=l(76752),o=l(21346),s=l(92351),c=l(3087),u=l(53080),d=l(11734),h=l(42900),g=l(80491),f=l(32003),m=l(25652),p=l(31441),v=l(12458),y=l(45567),b=l(61030),x=l(74508),S=l(73900),j=l(51719),T=l(49714),N=l(22329),k=l(17979),w=l(39539),A=l(45620),E=l(40830),F=l(25384),O=l(6641),R=l(74064),I=l(42998),z=l(39838),$=l(69380),C=l(45967),L=l(28540),M=l(5553),U=l(35278),Y=l(85953);function D(e,t,l,n,r,a,i){try{var o=e[a](i),s=o.value}catch(e){l(e);return}o.done?t(s):Promise.resolve(s).then(n,r)}let P=o.I4.div`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
`;(0,c.Y)([w.a,h.a,j.a,k.a,x.a,b.a,y.a,T.a,d.a,g.a,m.a,S.a,f.a,N.a,p.a,v.a,M.a,C.a,E.a,A.a,z.a,I.a,$.a,F.a,O.a,R.a,L.a,U._]);let H=(0,r.forwardRef)(function({width:e,height:t,echartOptions:c,eventHandlers:d,zrEventHandlers:h,selectedValues:g={},refs:f,vizType:m},p){let v=(0,o.DP)(),y=(0,r.useRef)(null);f&&(f.divRef=y);let[b,x]=(0,r.useState)(!1),S=(0,r.useRef)(),j=(0,r.useMemo)(()=>Object.keys(g)||[],[g]),T=(0,r.useRef)([]);(0,r.useImperativeHandle)(p,()=>({getEchartInstance:()=>S.current}));let N=(0,a.d4)(e=>{var t,l;return null!=(l=null==e||null==(t=e.common)?void 0:t.locale)?l:Y.Xn}).toUpperCase(),k=(0,r.useCallback)(({width:e,height:t})=>{S.current&&S.current.resize({width:e,height:t})},[]);return(0,r.useEffect)(()=>{var n;(n=function*(){let e;try{e=yield l(31746)(`./lang${N}`)}catch(e){}return null==e?void 0:e.default},function(){var e=this,t=arguments;return new Promise(function(l,r){var a=n.apply(e,t);function i(e){D(a,l,r,i,o,"next",e)}function o(e){D(a,l,r,i,o,"throw",e)}i(void 0)})})().then(l=>{l&&(0,u.E)(N,l),y.current&&(S.current||(S.current=(0,s.Ts)(y.current,null,{locale:N})),k({width:e,height:t}),x(!0))})},[N,e,t,k]),(0,r.useEffect)(()=>{if(b){var e,t;let l;Object.entries(d||{}).forEach(([e,t])=>{var l,n;null==(l=S.current)||l.off(e),null==(n=S.current)||n.on(e,t)}),Object.entries(h||{}).forEach(([e,t])=>{var l,n;null==(l=S.current)||l.getZr().off(e),null==(n=S.current)||n.getZr().on(e,t)});let n=(l={textStyle:{color:v.colorText,fontFamily:v.fontFamily},title:{textStyle:{color:v.colorText}},legend:{textStyle:{color:v.colorTextSecondary},pageTextStyle:{color:v.colorTextSecondary},pageIconColor:v.colorTextSecondary,pageIconInactiveColor:v.colorTextDisabled,inactiveColor:v.colorTextDisabled},tooltip:{backgroundColor:v.colorBgContainer,textStyle:{color:v.colorText}},axisPointer:{lineStyle:{color:v.colorPrimary},label:{color:v.colorText}}},(null==c?void 0:c.xAxis)&&(l.xAxis={axisLine:{lineStyle:{color:v.colorSplit}},axisLabel:{color:v.colorTextSecondary},splitLine:{lineStyle:{color:v.colorSplit}}}),(null==c?void 0:c.yAxis)&&(l.yAxis={axisLine:{lineStyle:{color:v.colorSplit}},axisLabel:{color:v.colorTextSecondary},splitLine:{lineStyle:{color:v.colorSplit}}}),l),r=v.echartsOptionsOverrides||{},a=m&&(null==(e=v.echartsOptionsOverridesByChartType)?void 0:e[m])||{},o=(0,i.H)(n,c,r,a);null==(t=S.current)||t.setOption(o,!0)}},[b,c,d,h,v,m]),(0,r.useEffect)(()=>()=>{var e;return null==(e=S.current)?void 0:e.dispose()},[]),(0,r.useEffect)(()=>{S.current&&(S.current.dispatchAction({type:"downplay",dataIndex:T.current.filter(e=>!j.includes(e))}),j.length&&S.current.dispatchAction({type:"highlight",dataIndex:j}),T.current=j)},[j]),(0,r.useLayoutEffect)(()=>{k({width:e,height:t})},[e,t,k]),(0,n.Y)(P,{ref:y,height:t,width:e})})}}]);