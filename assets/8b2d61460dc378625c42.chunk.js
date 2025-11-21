"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9915],{43763:(e,t,r)=>{r.d(t,{A:()=>p});var i=r(2445),a=r(24002),o=r(91054),n=r(21346),l=r(2171),s=r(67675),c=r(76202);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}let u=n.I4.div`
  position: relative;

  &:hover {
    .copy-button {
      visibility: visible;
    }
  }

  .copy-button {
    position: absolute;
    top: 40px;
    right: 16px;
    z-index: 10;
    visibility: hidden;
    margin: -4px;
    padding: 4px;
    background: ${({theme:e})=>e.colorBgContainer};
    border-radius: ${({theme:e})=>e.borderRadius}px;
    color: ${({theme:e})=>e.colorIcon};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: ${({theme:e})=>e.colorFillContentHover};
      color: ${({theme:e})=>e.colorIconHover};
    }

    &:focus {
      visibility: visible;
      outline: 2px solid ${({theme:e})=>e.colorPrimary};
      outline-offset: 2px;
    }
  }
`;function p(e){var{addDangerToast:t,addSuccessToast:r,children:n,language:p}=e,h=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t.indexOf(r=o[i])>=0||(a[r]=e[r]);return a}(e,["addDangerToast","addSuccessToast","children","language"]);function b(e){(0,c.A)(()=>Promise.resolve(e)).then(()=>{r&&r((0,o.t)("Code Copied!"))}).catch(()=>{t&&t((0,o.t)("Sorry, your browser does not support copying."))})}return(0,a.useEffect)(()=>{(0,l.Fq)([p])},[p]),(0,i.FD)(u,{children:[(0,i.Y)(s.F.CopyOutlined,{className:"copy-button",tabIndex:0,role:"button","aria-label":(0,o.t)("Copy code to clipboard"),onClick:e=>{e.preventDefault(),e.stopPropagation(),e.currentTarget.blur(),b(n)},onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),b(n))}}),(0,i.Y)(l.Ay,d({language:p},h,{children:n}))]})}},46894:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var i=r(2445),a=r(24002),o=r(61574),n=r(71519),l=r(91054),s=r(95265),c=r(89435),d=r(21346),u=r(17437),p=r(74012),h=r(11960),b=r(54381),g=r(79508),y=r(85846),m=r(34813),f=r(42419),v=r(70079),S=r(5009),x=r(2171),H=r(66516),k=r(58784),q=r(67675),w=r(46942),C=r.n(w),F=r(78076),Y=r(30404),$=r(43763),z=r(54729);let D=d.I4.div`
  color: ${({theme:e})=>e.colorTextSecondary};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  margin-bottom: 0;
`,T=d.I4.div`
  color: ${({theme:e})=>e.colorText};
  font-size: ${({theme:e})=>e.fontSize}px;
  padding: 4px 0 24px 0;
`,A=d.I4.div`
  display: flex;
`,I=d.I4.div`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  padding: ${({theme:e})=>2*e.sizeUnit}px
    ${({theme:e})=>4*e.sizeUnit}px;
  margin-right: ${({theme:e})=>4*e.sizeUnit}px;
  color: ${({theme:e})=>e.colorPrimaryText};

  &.active,
  &:focus,
  &:hover {
    background: ${({theme:e})=>e.colorPrimaryBg};
    border-radius: ${({theme:e})=>e.borderRadius}px;
  }

  &:hover:not(.active) {
    background: ${({theme:e})=>e.colorPrimaryBgHover};
  }
`,O=(0,d.I4)(F.aF)`
  .ant-modal-body {
    padding: ${({theme:e})=>6*e.sizeUnit}px;
  }
`,U=(0,h.Ay)(function({onHide:e,openInSqlLab:t,queries:r,query:o,fetchData:n,show:s,addDangerToast:c,addSuccessToast:d}){let{handleKeyPress:u,handleDataChange:p,disablePrevious:h,disableNext:b}=(0,z.A)({queries:r,currentQueryId:o.id,fetchData:n}),[g,y]=(0,a.useState)("user"),{id:m,sql:f,executed_sql:v}=o;return(0,i.Y)("div",{role:"none",onKeyUp:u,children:(0,i.FD)(O,{onHide:e,show:s,title:(0,l.t)("Query preview"),footer:(0,i.FD)(i.FK,{children:[(0,i.Y)(Y.$,{"data-test":"previous-query",buttonStyle:"secondary",disabled:h,onClick:()=>p(!0),children:(0,l.t)("Previous")},"previous-query"),(0,i.Y)(Y.$,{"data-test":"next-query",buttonStyle:"secondary",disabled:b,onClick:()=>p(!1),children:(0,l.t)("Next")},"next-query"),(0,i.Y)(Y.$,{"data-test":"open-in-sql-lab",onClick:()=>t(m),children:(0,l.t)("Open in SQL Lab")},"open-in-sql-lab")]}),children:[(0,i.Y)(D,{children:(0,l.t)("Tab name")}),(0,i.Y)(T,{children:o.tab_name}),(0,i.FD)(A,{children:[(0,i.Y)(I,{role:"button","data-test":"toggle-user-sql",className:C()({active:"user"===g}),onClick:()=>y("user"),children:(0,l.t)("User query")}),(0,i.Y)(I,{role:"button","data-test":"toggle-executed-sql",className:C()({active:"executed"===g}),onClick:()=>y("executed"),children:(0,l.t)("Executed query")})]}),(0,i.Y)($.A,{addDangerToast:c,addSuccessToast:d,language:"sql",children:("user"===g?f:v)||""})]})})});var P=r(23745),N=r(39775),R=r(10405);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}let E=(0,d.I4)(S.uO)`
  table .ant-table-cell {
    vertical-align: top;
  }
`,Q=(0,d.I4)(x.Ay)`
  height: ${({theme:e})=>26*e.sizeUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Ensure the syntax highlighter content respects the container constraints */
  & > div {
    height: 100%;
    overflow: hidden;
  }

  pre {
    height: 100% !important;
    overflow: hidden !important;
    margin: 0 !important;
  }
`,Z=d.I4.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colorPrimary};
    text-decoration: underline;
    cursor: pointer;
  }
`,B=d.I4.div`
  color: ${({theme:e})=>e.colorText};
`,K=(0,d.I4)(y.JU)`
  text-align: left;
  font-family: ${({theme:e})=>e.fontFamilyCode};
`,j=(0,h.Ay)(function({addDangerToast:e}){let{state:{loading:t,resourceCount:r,resourceCollection:h},fetchData:y}=(0,b.RU)("query",(0,l.t)("Query history"),e,!1),[w,C]=(0,a.useState)(),F=(0,d.DP)(),Y=(0,o.W6)();(0,a.useEffect)(()=>{(0,x.Fq)(["sql"])},[]);let $=(0,a.useCallback)(t=>{s.A.get({endpoint:`/api/v1/query/${t}`}).then(({json:e={}})=>{C(L({},e.result))},(0,p.JF)(t=>e((0,l.t)("There was an issue previewing the selected query. %s",t))))},[e]),z=L({activeChild:"Query history"},v.F),D=[{id:k.H.StartTime,desc:!0}],T=(0,a.useMemo)(()=>[{Cell:({row:{original:{status:e}}})=>{let t={name:null,label:""};return e===c.kZ.Success?(t.name=(0,i.Y)(q.F.CheckOutlined,{iconSize:"m",iconColor:F.colorSuccess,css:(0,u.AH)`
                  vertical-align: -webkit-baseline-middle;
                `}),t.label=(0,l.t)("Success")):e===c.kZ.Failed||e===c.kZ.Stopped?(t.name=(0,i.Y)(q.F.CloseOutlined,{iconSize:"m",iconColor:e===c.kZ.Failed?F.colorError:F.colorIcon}),t.label=(0,l.t)("Failed")):e===c.kZ.Running?(t.name=(0,i.Y)(q.F.LoadingOutlined,{iconSize:"m",iconColor:F.colorPrimary}),t.label=(0,l.t)("Running")):e===c.kZ.TimedOut?(t.name=(0,i.Y)(q.F.CircleSolid,{iconSize:"m",iconColor:F.colorIcon}),t.label=(0,l.t)("Offline")):(e===c.kZ.Scheduled||e===c.kZ.Pending)&&(t.name=(0,i.Y)(q.F.Queued,{iconSize:"m"}),t.label=(0,l.t)("Scheduled")),(0,i.Y)(m.m,{title:t.label,placement:"bottom",children:(0,i.Y)("span",{children:t.name})})},accessor:k.H.Status,size:"xs",disableSortBy:!0,id:k.H.Status},{accessor:k.H.StartTime,Header:(0,l.t)("Time"),size:"lg",Cell:({row:{original:{start_time:e}}})=>{let t=R.XV.utc(e).local().format(H.QU).split(" ");return(0,i.FD)(i.FK,{children:[t[0]," ",(0,i.Y)("br",{}),t[1]]})},id:k.H.StartTime},{Header:(0,l.t)("Duration"),size:"lg",Cell:({row:{original:{status:e,start_time:t,start_running_time:r,end_time:a}}})=>{let o=e===c.kZ.Failed?"danger":e,n=r||t,l=a&&n?(0,R.XV)(R.XV.utc(a-n)).format(H.os):"00:00:00.000";return(0,i.Y)(K,{type:o,role:"timer",children:l})},id:"duration"},{accessor:k.H.TabName,Header:(0,l.t)("Tab name"),size:"xl",id:k.H.TabName},{accessor:k.H.DatabaseName,Header:(0,l.t)("Database"),size:"lg",id:k.H.DatabaseName},{accessor:k.H.Database,hidden:!0,id:k.H.Database},{accessor:k.H.Schema,Header:(0,l.t)("Schema"),size:"lg",id:k.H.Schema},{Cell:({row:{original:{sql_tables:e=[]}}})=>{let t=e.map(e=>e.table),r=t.length>0?t.shift():"";return t.length?(0,i.FD)(Z,{children:[(0,i.Y)("span",{children:r}),(0,i.Y)(f.A,{placement:"right",title:(0,l.t)("TABLES"),trigger:"click",content:(0,i.Y)(i.FK,{children:t.map(e=>(0,i.Y)(B,{children:e},e))}),children:(0,i.FD)("span",{className:"count",children:["(+",t.length,")"]})})]}):r},accessor:k.H.SqlTables,Header:(0,l.t)("Tables"),size:"lg",disableSortBy:!0,id:k.H.SqlTables},{accessor:k.H.UserFirstName,Header:(0,l.t)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>(0,N.A)(e),id:k.H.UserFirstName},{accessor:k.H.User,hidden:!0,id:k.H.User},{accessor:k.H.Rows,Header:(0,l.t)("Rows"),size:"sm",id:k.H.Rows},{accessor:k.H.Sql,Header:(0,l.t)("SQL"),Cell:({row:{original:e,id:t}})=>(0,i.Y)("div",{tabIndex:0,role:"button","data-test":`open-sql-preview-${t}`,onClick:()=>C(e),onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),C(e))},style:{cursor:"pointer"},children:(0,i.Y)(Q,{language:"sql",customStyle:{cursor:"pointer",userSelect:"none"},children:(0,p.s4)(e.sql,4)})}),size:"xxl",id:k.H.Sql},{Header:(0,l.t)("Actions"),id:"actions",disableSortBy:!0,size:"sm",Cell:({row:{original:{id:e}}})=>(0,i.Y)(m.m,{title:(0,l.t)("Open query in SQL Lab"),placement:"bottom",children:(0,i.Y)(n.N_,{to:`/sqllab?queryId=${e}`,children:(0,i.Y)(q.F.Full,{iconSize:"l"})})})}],[F]),A=(0,a.useMemo)(()=>[{Header:(0,l.t)("Database"),key:"database",id:"database",input:"select",operator:S.c0.RelationOneMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,p.u1)("query","database",(0,p.JF)(t=>e((0,l.t)("An error occurred while fetching database values: %s",t)))),paginate:!0},{Header:(0,l.t)("State"),key:"state",id:"status",input:"select",operator:S.c0.Equals,unfilteredLabel:"All",fetchSelects:(0,p.$C)("query","status",(0,p.JF)(t=>e((0,l.t)("An error occurred while fetching schema values: %s",t)))),paginate:!0},{Header:(0,l.t)("User"),key:"user",id:"user",input:"select",operator:S.c0.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,p.u1)("query","user",(0,p.JF)(t=>e((0,l.t)("An error occurred while fetching user values: %s",t)))),paginate:!0},{Header:(0,l.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:S.c0.Between},{Header:(0,l.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:S.c0.Contains}],[e]);return(0,i.FD)(i.FK,{children:[(0,i.Y)(g.A,L({},z)),w&&(0,i.Y)(U,{onHide:()=>C(void 0),query:w,queries:h,fetchData:$,openInSqlLab:e=>Y.push(`/sqllab?queryId=${e}`),show:!0}),(0,i.Y)(E,{className:"query-history-list-view",columns:T,count:r,data:h,fetchData:y,filters:A,initialSort:D,loading:t,pageSize:25,highlightRowId:null==w?void 0:w.id,refreshData:()=>{},addDangerToast:e,addSuccessToast:P.WR})]})})},54729:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(24002);function a({queries:e,fetchData:t,currentQueryId:r}){let a=e.findIndex(e=>e.id===r),[o,n]=(0,i.useState)(a),[l,s]=(0,i.useState)(!1),[c,d]=(0,i.useState)(!1);function u(){s(0===o),d(o===e.length-1)}function p(r){let i=o+(r?-1:1);i>=0&&i<e.length&&(t(e[i].id),n(i),u())}return(0,i.useEffect)(()=>{u()}),{handleKeyPress:function(t){o>=0&&o<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),p(!1)):("ArrowUp"===t.key||"j"===t.key)&&(t.preventDefault(),p(!0)))},handleDataChange:p,disablePrevious:l,disableNext:c}}}}]);