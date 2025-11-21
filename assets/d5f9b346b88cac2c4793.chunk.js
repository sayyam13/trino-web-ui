"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5182],{6627:(e,t,i)=>{i.d(t,{Q:()=>r});var l,r=((l={}).Dashboards="dashboards",l.Description="description",l.LastModified="lastModified",l.Owner="owner",l.Rows="rows",l.Sql="sql",l.Table="table",l.Tags="tags",l)},22535:(e,t,i)=>{i.d(t,{Ay:()=>y});var l=i(2445),r=i(24002),n=i(98250),a=i(9063),o=i.n(a),d=i(21346),s=i(34813),c=i(79843),p=i(91054),u=i(67675),h=i(6627);let f=d.I4.div`
  font-weight: ${({theme:e})=>e.fontWeightStrong};
`,g=({text:e,header:t})=>{let i=(0,c.A)(e);return(0,l.FD)(l.FK,{children:[t&&(0,l.Y)(f,{children:t}),i.map(e=>(0,l.Y)("div",{children:e},e))]})},w={dashboards:0,table:1,sql:2,rows:3,tags:4,description:5,owner:6,lastModified:7},x=d.I4.div`
  ${({theme:e,count:t})=>`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    background-color: ${e.colorBgLayout};
    color: ${e.colorTextTertiary};
    font-size: ${e.fontSizeSM}px;
    min-width: ${24+32*t-16}px;
    border-radius: ${e.borderRadius}px;
    line-height: 1;
  `}
`,m=d.I4.div`
  ${({theme:e,collapsed:t,last:i,onClick:l})=>`
    display: flex;
    align-items: center;
    max-width: ${174+16*!i}px;
    min-width: ${t?16+16*!i:94+16*!i}px;
    padding-right: ${16*!i}px;
    cursor: ${l?"pointer":"default"};
    & .metadata-icon {
      color: ${l&&t?e.colorPrimary:e.colorTextTertiary};
      padding-right: ${8*!t}px;
      & .anticon {
        line-height: 0;
      }
    }
    & .metadata-text {
      color: ${e.colorTextSecondary};
      min-width: 70px;
      overflow: hidden;
      text-overflow: ${t?"unset":"ellipsis"};
      white-space: nowrap;
      text-decoration: ${l?"underline":"none"};
      line-height: 1.4;
    }
  `}
`,b=d.I4.div`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,v=({barWidth:e,contentType:t,collapsed:i,last:n=!1,tooltipPlacement:a})=>{let{icon:o,title:d,tooltip:c=d}=(e=>{let{type:t}=e;switch(t){case h.Q.Dashboards:return{icon:u.F.FundProjectionScreenOutlined,title:e.title,tooltip:e.description?(0,l.Y)("div",{children:(0,l.Y)(g,{header:e.title,text:e.description})}):void 0};case h.Q.Description:return{icon:u.F.BookOutlined,title:e.value};case h.Q.LastModified:return{icon:u.F.EditOutlined,title:e.value,tooltip:(0,l.FD)("div",{children:[(0,l.Y)(g,{header:(0,p.t)("Last modified"),text:e.value}),(0,l.Y)(g,{header:(0,p.t)("Modified by"),text:e.modifiedBy})]})};case h.Q.Owner:return{icon:u.F.UserOutlined,title:e.createdBy,tooltip:(0,l.FD)("div",{children:[(0,l.Y)(g,{header:(0,p.t)("Created by"),text:e.createdBy}),!!e.owners&&(0,l.Y)(g,{header:(0,p.t)("Owners"),text:e.owners}),(0,l.Y)(g,{header:(0,p.t)("Created on"),text:e.createdOn})]})};case h.Q.Rows:return{icon:u.F.InsertRowBelowOutlined,title:e.title,tooltip:e.title};case h.Q.Sql:return{icon:u.F.ConsoleSqlOutlined,title:e.title,tooltip:e.title};case h.Q.Table:return{icon:u.F.InsertRowAboveOutlined,title:e.title,tooltip:e.title};case h.Q.Tags:return{icon:u.F.TagsOutlined,title:e.values.join(", "),tooltip:(0,l.Y)("div",{children:(0,l.Y)(g,{header:(0,p.t)("Tags"),text:e.values})})};default:throw Error(`Invalid type provided: ${t}`)}})(t),[f,w]=(0,r.useState)(!1),x=(0,r.useRef)(null),{type:v,onClick:y}=t;(0,r.useEffect)(()=>{w(!!x.current&&x.current.scrollWidth>x.current.clientWidth)},[e,w,t]);let $=(0,l.FD)(m,{collapsed:i,last:n,onClick:y?()=>y(v):void 0,role:y?"button":void 0,children:[(0,l.Y)(o,{iconSize:"l",className:"metadata-icon"}),!i&&(0,l.Y)("span",{ref:x,className:"metadata-text",children:d})]});return f||i||c&&c!==d?(0,l.Y)(s.m,{placement:a,title:(0,l.Y)(b,{children:c}),children:$}):$},y=({items:e,tooltipPlacement:t="top"})=>{let[i,a]=(0,r.useState)(),[d,s]=(0,r.useState)(!1),c=o()(e,(e,t)=>e.type===t.type).sort((e,t)=>w[e.type]-w[t.type]),p=c.length;if(p<2)throw Error("The minimum number of items for the metadata bar is 2.");if(p>6)throw Error("The maximum number of items for the metadata bar is 6.");let u=(0,r.useCallback)(e=>{let t=110*p-16;a(e),s(!!(e&&e<t))},[p]),{ref:h}=(0,n.uZ)({onResize:u});return(0,l.Y)(x,{ref:h,count:p,"data-test":"metadata-bar",children:c.map((e,r)=>(0,l.Y)(v,{barWidth:i,contentType:e,collapsed:d,last:r===p-1,tooltipPlacement:t},r))})}},28908:(e,t,i)=>{i.d(t,{U:()=>Y});var l=i(2445),r=i(91054),n=i(17437),a=i(21346),o=i(67675),d=i(16868),s=i(24002),c=i(98250),p=i(34813),u=i(22022);let h=e=>(0,n.AH)`
  display: flex;
  font-size: ${e.fontSizeXL}px;
  font-weight: ${e.fontWeightStrong};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .dynamic-title-input {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0;
    color: ${e.colorText};
    background-color: ${e.colorBgContainer};

    &::placeholder {
      color: ${e.colorTextTertiary};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
    white-space: pre;
  }
`,f=(0,s.memo)(({title:e,placeholder:t,onSave:i,canEdit:o,label:d})=>{let f=(0,a.DP)(),[g,w]=(0,s.useState)(!1),[x,m]=(0,s.useState)(!1),[b,v]=(0,s.useState)(e||""),{width:y,ref:$}=(0,c.uZ)(),{width:Y,ref:S}=(0,c.uZ)({refreshMode:"debounce"});(0,s.useEffect)(()=>{v(e)},[e]),(0,s.useEffect)(()=>{if(g&&(null==$?void 0:$.current)&&$.current.setSelectionRange){let{length:e}=$.current.value;$.current.setSelectionRange(e,e),$.current.scrollLeft=$.current.scrollWidth}},[g]),(0,s.useLayoutEffect)(()=>{(null==$?void 0:$.current)&&($.current.textContent=b||t)},[b,t,$]),(0,s.useEffect)(()=>{var e;let t=null==(e=$.current)?void 0:e.input;t&&(t.scrollWidth>t.clientWidth?m(!0):m(!1))},[y,Y]);let T=(0,s.useCallback)(()=>{o&&!g&&w(!0)},[o,g]),k=(0,s.useCallback)(()=>{if(!o)return;let t=b.trim();v(t),e!==t&&i(t),w(!1)},[o,b,i,e]),F=(0,s.useCallback)(e=>{o&&g&&v(e.target.value)},[o,g]),z=(0,s.useCallback)(e=>{if(!o)return;e.preventDefault();let{activeElement:t}=document;t&&t instanceof HTMLElement&&t.blur()},[o]);return(0,l.FD)("div",{css:h,ref:S,children:[(0,l.Y)(p.m,{id:"title-tooltip",title:x&&b&&!g?b:null,children:(0,l.Y)(u.Input,{"data-test":"editable-title-input",variant:"borderless","aria-label":null!=d?d:(0,r.t)("Title"),className:"dynamic-title-input",value:b,onChange:F,onBlur:k,onClick:T,onPressEnter:z,placeholder:t,css:(0,n.AH)`
              ${!o&&`&[disabled] {
                  cursor: default;
                }
              `}
              font-size: ${f.fontSizeXL}px;
              transition: auto;
              ${y&&y>0&&(0,n.AH)`
                width: ${y}px;
              `}
            `,disabled:!o})}),(0,l.Y)("span",{ref:$,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})});var g=i(1032),w=i(80520),x=i(30404);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}let b=e=>(0,n.AH)`
  width: ${8*e.sizeUnit}px;
  height: ${8*e.sizeUnit}px;
  padding: 0;
  border: 1px solid ${e.colorPrimary};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }
`,v=e=>(0,n.AH)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${e.colorBgContainer};
  height: ${16*e.sizeUnit}px;
  padding: 0 ${4*e.sizeUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: ${12*e.sizeUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,y=e=>(0,n.AH)`
  display: flex;
  align-items: center;
  padding-left: ${2*e.sizeUnit}px;

  & .anticon-star {
    padding: 0 ${e.sizeUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,$=e=>(0,n.AH)`
  margin-left: ${2*e.sizeUnit}px;
`,Y=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:i,showFaveStar:n,faveStarProps:s,titlePanelAdditionalItems:c,rightPanelAdditionalItems:p,additionalActionsMenu:u,menuDropdownProps:h,showMenuDropdown:Y=!0,tooltipProps:S})=>{let T=(0,a.DP)();return(0,l.FD)("div",{css:v,className:"header-with-actions",children:[(0,l.FD)("div",{className:"title-panel",children:[(0,l.Y)(f,m({},e)),t&&(0,l.FD)("div",{css:y,children:[(null==i?void 0:i.certifiedBy)&&(0,l.Y)(w.T,m({},i)),n&&(0,l.Y)(d.$,m({},s)),c]})]}),(0,l.FD)("div",{className:"right-button-panel",children:[p,(0,l.Y)("div",{css:$,children:Y&&(0,l.Y)(g.ms,m({trigger:["click"],popupRender:()=>u},h,{children:(0,l.Y)(x.$,{css:b,buttonStyle:"tertiary","aria-label":(0,r.t)("Menu actions trigger"),tooltip:null==S?void 0:S.text,placement:null==S?void 0:S.placement,"data-test":"actions-trigger",children:(0,l.Y)(o.F.EllipsisOutlined,{iconColor:T.colorPrimary,iconSize:"l"})})}))})]})]})}}}]);