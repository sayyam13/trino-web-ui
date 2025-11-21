"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5413],{5413:(e,i,t)=>{t.d(i,{Ay:()=>V,rE:()=>C});var r,l=t(2445),o=t(24002),a=t(25929),n=t(46942),s=t.n(n),d=t(91054),c=t(42226),p=t(21346),u=t(17437),m=t(56780),g=t(22022),h=t(50888),x=t(34813),b=t(85846),v=t(67675),f=t(58572),$=t(5009),z=t(13130);function y(){return(y=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Y=((r=Y||{}).AllCharts="ALL_CHARTS",r.Featured="FEATURED",r.Category="CATEGORY",r.Tags="TAGS",r);let C=1090,U=(0,d.t)("Other"),A=(0,d.t)("All charts"),k=(0,d.t)("Featured"),w=[k,(0,d.t)("ECharts"),(0,d.t)("Advanced-Analytics")],S="viz-type-control",E=p.I4.div`
  ${({isSelectedVizMetadata:e})=>`
    display: grid;
    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};
    // em is used here because the sidebar should be sized to fit the longest standard tag
    grid-template-columns: minmax(14em, auto) 5fr;
    grid-template-areas:
      'sidebar search'
      'sidebar main'
      'details details';
    height: 70vh;
    overflow: auto;
  `}
`,T=p.I4.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  font-size: ${({theme:e})=>e.fontSizeLG}px;
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  line-height: ${({theme:e})=>6*e.sizeUnit}px;
`,F=p.I4.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colorBorder};
  overflow: auto;

  .ant-collapse .ant-collapse-item {
    .ant-collapse-header {
      font-size: ${({theme:e})=>e.fontSizeSM}px;
      color: ${({theme:e})=>e.colorText};
      padding-left: ${({theme:e})=>2*e.sizeUnit}px;
      padding-bottom: ${({theme:e})=>e.sizeUnit}px;
    }

    .ant-collapse-content .ant-collapse-content-box {
      display: flex;
      flex-direction: column;
      padding: 0 ${({theme:e})=>2*e.sizeUnit}px;
    }
  }
`,D=p.I4.div`
  grid-area: main;
  overflow-y: auto;
`,I=p.I4.div`
  ${({theme:e})=>`
    grid-area: search;
    margin-top: ${3*e.sizeUnit}px;
    margin-bottom: ${e.sizeUnit}px;
    margin-left: ${3*e.sizeUnit}px;
    margin-right: ${3*e.sizeUnit}px;
    .ant-input-affix-wrapper {
      padding-left: ${2*e.sizeUnit}px;
    }
  `}
`,O=p.I4.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colorIcon};
`,R=p.I4.button`
  ${({theme:e})=>`
    all: unset; // remove default button styles
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin: ${e.sizeUnit}px 0;
    padding: 0 ${e.sizeUnit}px;
    border-radius: ${e.borderRadius}px;
    line-height: 2em;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    color: ${e.colorText};

    &:focus {
      outline: initial;
    }

    &.selected {
      background-color: ${e.colorPrimary};
      color: ${e.colorTextLightSolid};

      svg {
        color: ${e.colorTextLightSolid};
      }

      &:hover {
        .cancel {
          visibility: visible;
        }
      }
    }

    & > span[role="img"] {
      margin-right: ${2*e.sizeUnit}px;
    }

    .cancel {
      visibility: hidden;
    }
  `}
`,M=p.I4.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({theme:e})=>24*e.sizeUnit}px
  );
  grid-auto-rows: max-content;
  justify-content: space-evenly;
  grid-gap: ${({theme:e})=>2*e.sizeUnit}px;
  justify-items: center;
  // for some reason this padding doesn't seem to apply at the bottom of the container. Why is a mystery.
  padding: ${({theme:e})=>2*e.sizeUnit}px;
`,H=p.I4.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.sizeUnit}px;
  padding-right: ${({theme:e})=>14*e.sizeUnit}px;
  padding-bottom: ${({theme:e})=>2*e.sizeUnit}px;
`,L=p.I4.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.sizeUnit}px;
  margin: 0;
`,G=p.I4.div`
  grid-area: examples;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: ${({theme:e})=>4*e.sizeUnit}px;

  img {
    height: 100%;
    border-radius: ${({theme:e})=>e.borderRadius}px;
    border: 1px solid ${({theme:e})=>e.colorBorder};
    background-color: ${({theme:e})=>e.colorBgContainer};
  }
`,j=p.I4.div`
  ${({theme:e})=>`
    border: 1px solid ${e.colorPrimaryText};
    box-sizing: border-box;
    border-radius: ${e.borderRadius}px;
    background: ${e.colorBgContainer};
    line-height: ${2.5*e.sizeUnit}px;
    color: ${e.colorPrimaryText};
    font-size: ${e.fontSizeSM}px;
    font-weight: ${e.fontWeightStrong};
    text-align: center;
    padding: ${.5*e.sizeUnit}px ${e.sizeUnit}px;
    cursor: pointer;

    div {
      transform: scale(0.83,0.83);
    }
  `}
`,B=p.I4.div`
  position: absolute;
  right: ${({theme:e})=>e.sizeUnit}px;
  top: ${({theme:e})=>19*e.sizeUnit}px;
`,_=p.I4.div`
  display: inline-block !important;
  margin-left: ${({theme:e})=>2*e.sizeUnit}px;
`,N=({entry:e,selectedViz:i,setSelectedViz:t,onDoubleClick:r})=>{let o=(0,p.DP)(),a=(0,m.Mw)(o),{key:n,value:s}=e,c=i===e.key;return(0,l.FD)("div",{role:"button",css:(0,u.AH)`
  cursor: pointer;
  width: ${24*o.sizeUnit}px;
  position: relative;
  outline: none; /* Remove focus outline to show only selected state */

  img {
    min-width: ${24*o.sizeUnit}px;
    min-height: ${24*o.sizeUnit}px;
    border: 1px solid ${o.colorBorder};
    border-radius: ${o.borderRadius}px;
    transition: border-color ${o.motionDurationMid};
    background-color: ${o.colorBgContainer};
  }

  &.selected img {
    border: 2px solid ${o.colorPrimaryBorder};
  }

  &:hover:not(.selected) img {
    border: 1px solid ${o.colorBorder};
  }

  .viztype-label {
    margin-top: ${2*o.sizeUnit}px;
    text-align: center;
  }
`,tabIndex:0,className:c?"selected":"",onClick:()=>t(n),onDoubleClick:r,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),t(n))},onFocus:()=>{t(n)},"data-test":"viztype-selector-container",children:[(0,l.Y)("img",{alt:s.name,width:"100%",className:`viztype-selector ${c?"selected":""}`,src:a&&s.thumbnailDark?s.thumbnailDark:s.thumbnail}),(0,l.Y)("div",{className:"viztype-label","data-test":`${S}__viztype-label`,children:s.name}),s.label&&(0,l.Y)(B,{children:(0,l.Y)(j,{children:(0,l.Y)("div",{children:(0,d.t)(s.label)})})})]})},P=e=>{var{vizEntries:i}=e,t=function(e,i){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)i.indexOf(t=o[r])>=0||(l[t]=e[t]);return l}(e,["vizEntries"]);return(0,l.Y)(M,{"data-test":`${S}__viz-row`,children:i.map(e=>(0,l.Y)(N,y({},t,{entry:e}),e.key))})},K=({selector:e,sectionId:i,icon:t,isSelected:r,onClick:a,className:n})=>{let c=(0,o.useRef)(null);return(0,o.useEffect)(()=>{r&&queueMicrotask(()=>(0,z.A)(c.current,{behavior:"smooth",scrollMode:"if-needed"}))},[]),(0,l.FD)(R,{"aria-label":e,"aria-selected":r,ref:c,name:e,className:s()(n,r&&"selected"),onClick:()=>a(e,i),tabIndex:0,role:"tab",children:[t,(0,d.t)(e)]},e)};function V(e){var i,t;let r=(0,p.DP)(),n=(0,m.Mw)(r),{selectedViz:s,onChange:z,onDoubleClick:y,className:Y,denyList:C}=e,{mountedPluginMetadata:R}=(0,$.Q)(),M=(0,o.useRef)(),[B,N]=(0,o.useState)(""),[V,W]=(0,o.useState)(!0),q=V&&!!B,J=s?R[s]:null,Q=(0,o.useMemo)(()=>Object.entries(R).map(([e,i])=>({key:e,value:i})).filter(({key:e})=>!C.includes(e)).filter(({value:e})=>(0,f.px)(e.behaviors||[])&&!e.deprecated).sort((e,i)=>e.value.name.localeCompare(i.value.name)),[R,C]),X=(0,o.useMemo)(()=>{let e={};return Q.forEach(i=>{let t=i.value.category||U;e[t]||(e[t]=[]),e[t].push(i)}),e},[Q]),Z=(0,o.useMemo)(()=>Object.keys(X).sort((e,i)=>e===U?1:i===U?-1:e.localeCompare(i)),[X]),ee=(0,o.useMemo)(()=>{let e={};return Q.forEach(i=>{(i.value.tags||[]).forEach(t=>{e[t]||(e[t]=[]),e[t].push(i)})}),e},[Q]),ei=(0,o.useMemo)(()=>Object.keys(ee).sort((e,i)=>e.localeCompare(i)).filter(e=>-1===w.indexOf(e)),[ee]),et=(0,o.useMemo)(()=>Q.sort((e,i)=>e.value.name.localeCompare(i.value.name)),[Q]),[er,el]=(0,o.useState)(()=>(null==J?void 0:J.category)||k),[eo,ea]=(0,o.useState)(()=>(null==J?void 0:J.category)?"CATEGORY":"FEATURED"),en=(0,o.useMemo)(()=>new a.A(Q,{ignoreLocation:!0,threshold:.3,keys:[{name:"value.name",weight:4},{name:"value.tags",weight:2},"value.description"]}),[Q]),es=(0,o.useMemo)(()=>""===B.trim()?[]:en.search(B).map(e=>e.item).sort((e,i)=>{var t,r;let l=null==(t=e.value)?void 0:t.label,o=null==(r=i.value)?void 0:r.label,a=l&&c.l7[l]?c.l7[l].weight:0;return(o&&c.l7[o]?c.l7[o].weight:0)-a}),[B,en]),ed=(0,o.useCallback)(()=>{W(!0)},[]);(0,o.useEffect)(()=>{M.current&&M.current.focus()},[]);let ec=(0,o.useCallback)(e=>N(e.target.value),[]),ep=(0,o.useCallback)(()=>{W(!1),N(""),M.current.blur()},[]),eu=(0,o.useCallback)((e,i)=>{V&&ep(),el(e),ea(i);let t=J&&(e===J.category||e===U&&null==J.category||(J.tags||[]).indexOf(e)>-1);e===er||t||z(null)},[ep,V,er,J,z]),em=(0,o.useMemo)(()=>({CATEGORY:{title:(0,d.t)("Category"),icon:(0,l.Y)(v.F.Category,{iconSize:"m"}),selectors:Z},TAGS:{title:(0,d.t)("Tags"),icon:(0,l.Y)(v.F.NumberOutlined,{iconSize:"m"}),selectors:ei}}),[Z,ei]);return(0,l.FD)(E,{className:Y,isSelectedVizMetadata:!!J,children:[(0,l.FD)(F,{"aria-label":(0,d.t)("Choose chart type"),role:"tablist",children:[(0,l.Y)(K,{css:({sizeUnit:e})=>(0,u.AH)`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:"ALL_CHARTS",selector:A,icon:(0,l.Y)(v.F.Ballot,{iconSize:"m"}),isSelected:!q&&A===er&&"ALL_CHARTS"===eo,onClick:eu}),(0,l.Y)(K,{css:({sizeUnit:e})=>(0,u.AH)`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:"FEATURED",selector:k,icon:(0,l.Y)(v.F.FireOutlined,{iconSize:"m"}),isSelected:!q&&k===er&&"FEATURED"===eo,onClick:eu}),(0,l.Y)(h.S,{expandIconPosition:"end",ghost:!0,defaultActiveKey:"CATEGORY",items:Object.keys(em).map(e=>{let i=em[e];return{key:e,label:(0,l.Y)("span",{className:"header",children:i.title}),children:(0,l.Y)(l.FK,{children:i.selectors.map(t=>(0,l.Y)(K,{selector:t,sectionId:e,icon:i.icon,isSelected:!q&&t===er&&e===eo,onClick:eu},t))})}})})]}),(0,l.Y)(I,{children:(0,l.Y)(g.Input,{type:"text",ref:M,value:B,placeholder:(0,d.t)("Search all charts"),onChange:ec,onFocus:ed,"data-test":`${S}__search-input`,prefix:(0,l.Y)(O,{children:(0,l.Y)(v.F.SearchOutlined,{iconSize:"m"})}),suffix:(0,l.Y)(O,{children:B&&(0,l.Y)(v.F.CloseOutlined,{iconSize:"m",onClick:ep})})})}),(0,l.Y)(D,{children:(0,l.Y)(P,{vizEntries:q?es:er===A&&"ALL_CHARTS"===eo?et:er===k&&"FEATURED"===eo&&ee[k]?ee[k]:"CATEGORY"===eo&&X[er]?X[er]:"TAGS"===eo&&ee[er]?ee[er]:[],selectedViz:s,setSelectedViz:z,onDoubleClick:y})}),J?(0,l.Y)("div",{css:e=>[(0,u.AH)`
  grid-area: details;
  border-top: 1px solid ${e.colorBorder};
`,(0,u.AH)`
  padding: ${4*e.sizeUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`],children:(0,l.FD)(l.FK,{children:[(0,l.FD)(T,{css:(0,u.AH)`
                grid-area: viz-name;
                position: relative;
              `,children:[null==J?void 0:J.name,(null==J?void 0:J.label)&&(0,l.Y)(x.m,{id:"viz-badge-tooltip",placement:"top",title:null!=(t=J.labelExplanation)?t:c.HE[J.label],children:(0,l.Y)(_,{children:(0,l.Y)(j,{children:(0,l.Y)("div",{children:(0,d.t)(J.label)})})})})]}),(0,l.Y)(H,{children:null==J?void 0:J.tags.map(e=>(0,l.Y)(b.JU,{css:({sizeUnit:e})=>(0,u.AH)`
                    margin-bottom: ${2*e}px;
                  `,children:e},e))}),(0,l.Y)(L,{children:(0,d.t)((null==J?void 0:J.description)||"No description available.")}),(0,l.Y)(T,{css:(0,u.AH)`
                grid-area: examples-header;
              `,children:(0,d.t)("Examples")}),(0,l.Y)(G,{children:((null==J||null==(i=J.exampleGallery)?void 0:i.length)?J.exampleGallery:[{url:null==J?void 0:J.thumbnail,caption:null==J?void 0:J.name}]).map(e=>(0,l.Y)("img",{src:n&&e.urlDark?e.urlDark:e.url,alt:e.caption,title:e.caption},e.url))})]})}):null]})}}}]);