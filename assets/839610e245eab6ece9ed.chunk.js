"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5801],{35801:(e,t,l)=>{l.r(t),l.d(t,{default:()=>eT});var n=l(2445),r=l(91054),o=l(42964),i=l(12491),a=l(24002),u=l(2404),s=l.n(u),c=l(32450),d=l(9818),p=l(80346),g=l(42877),h=l(38221),v=l.n(h),m=l(17451),f=l(50329),x=l(68e3),b=l(97),y=l(93666),C=l(21346),w=l(17437);let $=C.I4.div`
  ${({theme:e})=>`
    display: flex;
    width: 100%;

    .three-dots-menu {
      align-self: center;
      margin-left: ${e.sizeUnit}px;
      cursor: pointer;
      padding: ${e.sizeUnit/2}px;
      border-radius: ${e.borderRadius}px;
      margin-top: ${.75*e.sizeUnit}px;
    }
  `}
`,S=C.I4.div`
  ${({theme:e})=>`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 ${2*e.sizeUnit}px;
    overflow: hidden;
  `}
`,k=C.I4.span`
  ${({theme:e})=>`
    font-weight: ${e.fontWeightStrong};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    max-width: 100%;
  `}
`,z=C.I4.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    margin-left: ${2*e.sizeUnit}px;
  `}
`,M=C.I4.div`
  align-self: flex-end;
  margin-left: auto;
  cursor: pointer;

  padding: 3px 4px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 4px;

  ${({isFilterActive:e})=>e&&(0,w.AH)`
      background: linear-gradient(
        var(--ag-icon-button-active-background-color),
        var(--ag-icon-button-active-background-color)
      );
      ::after {
        background-color: var(--ag-accent-color);
        border-radius: 50%;
        content: '';
        height: 6px;
        position: absolute;
        right: 4px;
        width: 6px;
      }
    `}

  svg {
    ${({isFilterActive:e})=>e&&(0,w.AH)`
        clip-path: path('M8,0C8,4.415 11.585,8 16,8L16,16L0,16L0,0L8,0Z');
        color: var(--ag-icon-button-active-color);
      `}

    :hover {
      ${({isFilterActive:e})=>!e&&(0,w.AH)`
          background-color: var(--ag-icon-button-hover-background-color);
          box-shadow: 0 0 0 var(--ag-icon-button-background-spread)
            var(--ag-icon-button-hover-background-color);
          color: var(--ag-icon-button-hover-color);
          border-radius: var(--ag-icon-button-border-radius);
        `}
    }
  }
`,Y=C.I4.div`
  ${({theme:e})=>`
    min-width: ${45*e.sizeUnit}px;
    padding: ${e.sizeUnit}px 0;

    .menu-item {
      padding: ${2*e.sizeUnit}px ${4*e.sizeUnit}px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: ${2*e.sizeUnit}px;

      &:hover {
        background-color: ${e.colorPrimaryBgHover};
      }
    }

    .menu-divider {
      height: 1px;
      background-color: ${e.colorBorderSecondary};
      margin: ${e.sizeUnit}px 0;
    }
  `}
`,A=C.I4.div`
  position: relative;
  display: inline-block;
`,D=C.I4.div`
  ${({theme:e})=>`
      position: fixed;
      box-shadow: var(--ag-menu-shadow);
      border-radius: ${e.sizeUnit}px;
      z-index: 99;
      min-width: ${50*e.sizeUnit}px;
      background: var(--ag-menu-background-color);
      border: var(--ag-menu-border);
      box-shadow: var(--ag-menu-shadow);
      color: var(--ag-menu-text-color);

    `}
`,F=C.I4.div`
  ${({theme:e})=>`
    border: 1px solid ${e.colorBorderSecondary};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${2*e.sizeUnit}px ${4*e.sizeUnit}px;
    border-top: 1px solid ${e.colorBorderSecondary};
    font-size: ${e.fontSize}px;
    color: ${e.colorTextBase};
    transform: translateY(-${e.sizeUnit}px);
    background: ${e.colorBgBase};
  `}
`,T=C.I4.div`
  ${({theme:e})=>`
    position: relative;
    margin-left: ${2*e.sizeUnit}px;
    display: inline-block;
    min-width: ${17*e.sizeUnit}px;
    overflow: hidden;
  `}
`,I=C.I4.span`
  ${({theme:e})=>`
    margin: 0 ${6*e.sizeUnit}px;
    span {
      font-weight: ${e.fontWeightStrong};
    }
  `}
`,P=C.I4.span`
  ${({theme:e})=>`
    span {
      font-weight: ${e.fontWeightStrong};
    }
  `}
`,N=C.I4.div`
  ${({theme:e})=>`
    display: flex;
    gap: ${3*e.sizeUnit}px;
  `}
`,U=C.I4.div`
  ${({theme:e,disabled:t})=>`
    cursor: ${t?"not-allowed":"pointer"};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: ${3*e.sizeUnit}px;
      width: ${3*e.sizeUnit}px;
      fill: ${t?e.colorTextQuaternary:e.colorTextSecondary};
    }
  `}
`,E=(0,C.I4)(y.A)`
  ${({theme:e})=>`
    width: ${30*e.sizeUnit}px;
    margin-right: ${2*e.sizeUnit}px;
  `}
`,B=C.I4.div`
  max-width: 242px;
  ${({theme:e})=>`
    padding: 0 ${2*e.sizeUnit}px;
    color: ${e.colorTextBase};
    font-size: ${e.fontSizeSM}px;
  `}
`,L=C.I4.span`
  ${({theme:e})=>`
    color: ${e.colorTextLabel};
  `}
`,O=C.I4.span`
  ${({theme:e})=>`
    float: right;
    font-size: ${e.fontSizeSM}px;
  `}
`,G=C.I4.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    gap: ${e.sizeUnit}px;
  `}
`,R=C.I4.div`
  ${({theme:e})=>`
    font-weight: ${e.fontWeightStrong};
  `}
`,H=C.I4.div`
  ${({theme:e,height:t})=>(0,w.AH)`
    height: ${t}px;

    --ag-background-color: ${e.colorBgBase};
    --ag-foreground-color: ${e.colorText};
    --ag-header-background-color: ${e.colorBgBase};
    --ag-header-foreground-color: ${e.colorText};

    .dt-is-filter {
      cursor: pointer;
      :hover {
        background-color: ${e.colorPrimaryBgHover};
      }
    }

    .dt-is-active-filter {
      background: ${e.colorPrimaryBg};
      :hover {
        background-color: ${e.colorPrimaryBgHover};
      }
    }

    .dt-truncate-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dt-truncate-cell:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }

    .ag-container {
      border-radius: 0px;
      border: var(--ag-wrapper-border);
    }

    .ag-input-wrapper {
      ::before {
        z-index: 100;
      }
    }

    .filter-popover {
      z-index: 1 !important;
    }

    .search-container {
      display: flex;
      justify-content: flex-end;
      margin-bottom: ${4*e.sizeUnit}px;
    }

    .dropdown-controls-container {
      display: flex;
      justify-content: flex-end;
    }

    .time-comparison-dropdown {
      display: flex;
      padding-right: ${4*e.sizeUnit}px;
      padding-top: ${1.75*e.sizeUnit}px;
      height: fit-content;
    }

    .ag-header {
      font-size: ${e.fontSizeSM}px;
      font-weight: ${e.fontWeightStrong};
    }

    .ag-row {
      font-size: ${e.fontSizeSM}px;
    }

    .ag-spanned-row {
      font-size: ${e.fontSizeSM}px;
      font-weight: ${e.fontWeightStrong};
    }

    .ag-root-wrapper {
      border-radius: 0px;
    }
    .search-by-text-container {
      display: flex;
      align-items: center;
    }

    .search-by-text {
      margin-right: ${2*e.sizeUnit}px;
    }

    .ant-popover-inner {
      padding: 0px;
    }

    .input-container {
      margin-left: auto;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      overflow: visible;
    }

    .input-wrapper svg {
      pointer-events: none;
      transform: translate(${7*e.sizeUnit}px, ${e.sizeUnit/2}px);
      color: ${e.colorTextBase};
    }

    .input-wrapper input {
      color: ${e.colorText};
      font-size: ${e.fontSizeSM}px;
      padding: ${1.5*e.sizeUnit}px ${3*e.sizeUnit}px
        ${1.5*e.sizeUnit}px ${8*e.sizeUnit}px;
      line-height: 1.8;
      border-radius: ${e.borderRadius}px;
      border: 1px solid ${e.colorBorderSecondary};
      background-color: transparent;
      outline: none;

      &:focus {
        border-color: ${e.colorPrimary};
      }

      &::placeholder {
        color: ${e.colorTextQuaternary};
      }
    }
  `}
`,W=({currentPage:e=0,pageSize:t=10,totalRows:l=0,pageSizeOptions:o=[10,20,50,100,200],onServerPaginationChange:i=()=>{},onServerPageSizeChange:a=()=>{},sliceId:u})=>{let s,c,d,p,g=Math.ceil(l/t),h=Math.min((e+1)*t,l),v=o.map(e=>({value:e,label:e}));return(0,n.FD)(F,{children:[(0,n.Y)("span",{children:(0,r.t)("Page Size:")}),(0,n.Y)(T,{children:(0,n.Y)(y.A,{value:`${t}`,options:v,onChange:e=>{a(Number(e))},getPopupContainer:()=>document.getElementById(`chart-id-${u}`)})}),(0,n.FD)(I,{children:[(0,n.Y)("span",{children:e*t+1})," ",(0,r.t)("to")," ",(0,n.Y)("span",{children:h})," ",(0,r.t)("of")," ",(0,n.Y)("span",{children:l})]}),(0,n.FD)(N,{children:[(0,n.Y)(U,{onClick:(s=0===e,()=>{s||i(0,t)}),disabled:0===e,children:(0,n.Y)(m.A,{})}),(0,n.Y)(U,{onClick:(c=0===e,()=>{c||i(e-1,t)}),disabled:0===e,children:(0,n.Y)(f.A,{})}),(0,n.FD)(P,{children:[(0,r.t)("Page")," ",(0,n.Y)("span",{children:e+1})," ",(0,r.t)("of")," ",(0,n.Y)("span",{children:g})]}),(0,n.Y)(U,{onClick:(d=e>=g-1,()=>{d||i(e+1,t)}),disabled:e>=g-1,children:(0,n.Y)(x.A,{})}),(0,n.Y)(U,{onClick:(p=e>=g-1,()=>{p||i(g-1,t)}),disabled:e>=g-1,children:(0,n.Y)(b.A,{})})]})]})},j=function({value:e,onChange:t,searchOptions:l}){var r,o;return(0,n.Y)(E,{className:"search-select",value:e||(null!=(o=null==l||null==(r=l[0])?void 0:r.value)?o:""),options:l,onChange:t})},q=e=>{if(Array.isArray(e)&&e.length>0){var t,l;return[{colId:null==(t=e[0])?void 0:t.id,sort:(null==(l=e[0])?void 0:l.desc)?"desc":"asc"}]}return[]};var V=l(36306);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}p.syG.registerModules([p.JKr,p.Q90]);let Q=new Map,_=(0,a.memo)(({gridHeight:e,data:t=[],colDefsFromProps:l,includeSearch:o,allowRearrangeColumns:i,pagination:u,pageSize:p,serverPagination:h,rowCount:m,onServerPaginationChange:f,serverPaginationData:x,onServerPageSizeChange:b,searchOptions:y,onSearchColChange:C,onSearchChange:w,onSortChange:$,id:S,percentMetrics:k,serverPageLength:z,hasServerPageLengthChanged:M,handleCrossFilter:Y,isActiveFilterValue:A,renderTimeComparisonDropdown:D,cleanedTotals:F,showTotals:T,width:I,onColumnStateChange:P,chartState:N})=>{let U=(0,a.useRef)(null),E=(0,a.useRef)(null),B=(0,a.useMemo)(()=>t,[t]),L=(0,a.useRef)(null),O=(0,a.useRef)(null),G=`search-${S}`,R=K({},h&&{sort:{sortModel:q((null==x?void 0:x.sortBy)||[])}}),H=(0,a.useMemo)(()=>({filter:!0,sortable:!0,resizable:!0,minWidth:100}),[]),_=(0,a.useMemo)(()=>({height:e,width:I}),[e,I]),[J,X]=(0,a.useState)(),[Z,ee]=(0,a.useState)((null==x?void 0:x.searchText)||""),et=(0,a.useMemo)(()=>v()(e=>{w(e)},500),[w]);(0,a.useEffect)(()=>()=>{et.cancel()},[et]),(0,a.useEffect)(()=>{if(h&&Q.get(G)&&document.activeElement!==E.current){var e;null==(e=E.current)||e.focus()}},[Z,h,G]);let el=(0,a.useCallback)(()=>{Q.set(G,!0)},[G]),en=(0,a.useCallback)(()=>{Q.set(G,!1)},[G]),er=(0,a.useCallback)(({target:{value:e}})=>{h?(ee(e),et(e)):X(e)},[h,et,G]),eo=(0,a.useCallback)(e=>{var t,l;((e,t)=>{var l;if((({colId:e,sortDir:t,percentMetrics:l,serverPagination:n,gridInitialState:r})=>{var o,i;if(l.includes(e)||!n)return!1;let{colId:a="",sort:u}=(null==r||null==(i=r.sort)||null==(o=i.sortModel)?void 0:o[0])||{};return a!==e||u!==t})({colId:e,sortDir:t,percentMetrics:k,serverPagination:!!h,gridInitialState:R})){if(h&&(null==(l=U.current)?void 0:l.api)&&P){let{api:l}=U.current;null==t?l.applyColumnState({defaultState:{sort:null}}):l.applyColumnState({defaultState:{sort:null},state:[{colId:e,sort:t,sortIndex:0}]});let n=(null==l.getColumnState?void 0:l.getColumnState.call(l))||[];P({columnState:n,sortModel:t?[{colId:e,sort:t,sortIndex:0}]:[],filterModel:(null==l.getFilterModel?void 0:l.getFilterModel.call(l))||{},timestamp:Date.now()})}if(null==t)return $([]);$([{id:e,key:e,desc:"desc"===t}])}})(null==e||null==(t=e.column)?void 0:t.colId,null==e||null==(l=e.column)?void 0:l.sort)},[h,R,k,$]),ei=(0,a.useCallback)(v()(()=>{var e;if(P&&(null==(e=U.current)?void 0:e.api))try{let{api:e}=U.current,t=e.getColumnState?e.getColumnState():[],l=e.getFilterModel?e.getFilterModel():{},n=t.filter(e=>e.sort).map(e=>({colId:e.colId,sort:e.sort,sortIndex:e.sortIndex||0})).sort((e,t)=>(e.sortIndex||0)-(t.sortIndex||0)),r={columnState:t,sortModel:n,filterModel:l,timestamp:Date.now()},o=JSON.stringify({columnOrder:t.map(e=>e.colId),sorts:n,filters:l});o!==O.current&&(O.current=o,P(r))}catch(e){console.warn("Error capturing AG Grid state:",e)}},c.Y.SLOW_DEBOUNCE),[P]);return(0,a.useEffect)(()=>{M&&(null==x?void 0:x.pageSize)&&!s()(null==x?void 0:x.pageSize,z)&&b(z)},[M]),(0,a.useEffect)(()=>{var e;(null==(e=U.current)?void 0:e.api)&&U.current.api.sizeColumnsToFit()},[I]),(0,n.FD)("div",{style:_,ref:L,children:[(0,n.FD)("div",{className:"dropdown-controls-container",children:[D&&(0,n.Y)("div",{className:"time-comparison-dropdown",children:D()}),o&&(0,n.FD)("div",{className:"search-container",children:[h&&(0,n.FD)("div",{className:"search-by-text-container",children:[(0,n.Y)("span",{className:"search-by-text",children:" Search by :"}),(0,n.Y)(j,{onChange:C,searchOptions:y,value:(null==x?void 0:x.searchColumn)||""})]}),(0,n.Y)("div",{className:"input-wrapper",children:(0,n.FD)("div",{className:"input-container",children:[(0,n.Y)(g.A,{}),(0,n.Y)("input",{ref:E,value:h?Z:J||"",type:"text",id:"filter-text-box",placeholder:"Search",onInput:er,onFocus:el,onBlur:en})]})})]})]}),(0,n.Y)(d.lQ,{ref:U,onGridReady:e=>{if(e.api.sizeColumnsToFit(),N&&e.api)try{N.columnState&&(null==e.api.applyColumnState||e.api.applyColumnState.call(e.api,{state:N.columnState,applyOrder:!0})),N.filterModel&&(null==e.api.setFilterModel||e.api.setFilterModel.call(e.api,N.filterModel))}catch(e){}},className:"ag-container",rowData:B,headerHeight:36,rowHeight:30,columnDefs:l,defaultColDef:H,onColumnGroupOpened:e=>e.api.sizeColumnsToFit(),rowSelection:"multiple",animateRows:!0,onCellClicked:Y,onStateUpdated:ei,initialState:R,maintainColumnOrder:!0,suppressAggFuncInHeader:!0,enableCellTextSelection:!0,quickFilterText:h?"":J,suppressMovableColumns:!i,pagination:u,paginationPageSize:p,paginationPageSizeSelector:V.xp,suppressDragLeaveHidesColumns:!0,pinnedBottomRowData:T?[F]:void 0,localeText:{next:(0,r.t)("Next"),previous:(0,r.t)("Previous"),page:(0,r.t)("Page"),more:(0,r.t)("More"),to:(0,r.t)("to"),of:(0,r.t)("of"),first:(0,r.t)("First"),last:(0,r.t)("Last"),loadingOoo:(0,r.t)("Loading..."),selectAll:(0,r.t)("Select All"),searchOoo:(0,r.t)("Search..."),blanks:(0,r.t)("Blanks"),filterOoo:(0,r.t)("Filter"),applyFilter:(0,r.t)("Apply Filter"),equals:(0,r.t)("Equals"),notEqual:(0,r.t)("Not Equal"),lessThan:(0,r.t)("Less Than"),greaterThan:(0,r.t)("Greater Than"),lessThanOrEqual:(0,r.t)("Less Than or Equal"),greaterThanOrEqual:(0,r.t)("Greater Than or Equal"),inRange:(0,r.t)("In Range"),contains:(0,r.t)("Contains"),notContains:(0,r.t)("Not Contains"),startsWith:(0,r.t)("Starts With"),endsWith:(0,r.t)("Ends With"),andCondition:(0,r.t)("AND"),orCondition:(0,r.t)("OR"),group:(0,r.t)("Group"),columns:(0,r.t)("Columns"),filters:(0,r.t)("Filters"),valueColumns:(0,r.t)("Value Columns"),pivotMode:(0,r.t)("Pivot Mode"),groups:(0,r.t)("Groups"),values:(0,r.t)("Values"),pivots:(0,r.t)("Pivots"),toolPanelButton:(0,r.t)("Tool Panel"),pinColumn:(0,r.t)("Pin Column"),valueAggregation:(0,r.t)("Value Aggregation"),autosizeThiscolumn:(0,r.t)("Autosize This Column"),autosizeAllColumns:(0,r.t)("Autosize All Columns"),groupBy:(0,r.t)("Group By"),ungroupBy:(0,r.t)("Ungroup By"),resetColumns:(0,r.t)("Reset Columns"),expandAll:(0,r.t)("Expand All"),collapseAll:(0,r.t)("Collapse All"),toolPanel:(0,r.t)("Tool Panel"),export:(0,r.t)("Export"),csvExport:(0,r.t)("CSV Export"),excelExport:(0,r.t)("Excel Export"),excelXmlExport:(0,r.t)("Excel XML Export"),sum:(0,r.t)("Sum"),min:(0,r.t)("Min"),max:(0,r.t)("Max"),none:(0,r.t)("None"),count:(0,r.t)("Count"),average:(0,r.t)("Average"),copy:(0,r.t)("Copy"),copyWithHeaders:(0,r.t)("Copy with Headers"),paste:(0,r.t)("Paste"),sortAscending:(0,r.t)("Sort Ascending"),sortDescending:(0,r.t)("Sort Descending"),sortUnSort:(0,r.t)("Clear Sort")},context:{onColumnHeaderClicked:eo,initialSortState:q((null==x?void 0:x.sortBy)||[]),isActiveFilterValue:A}}),h&&(0,n.Y)(W,{currentPage:(null==x?void 0:x.currentPage)||0,pageSize:M?z:(null==x?void 0:x.pageSize)||10,totalRows:m||0,pageSizeOptions:[10,20,50,100,200],onServerPaginationChange:f,onServerPageSizeChange:b,sliceId:S})]})});_.displayName="AgGridDataTable";let J=(0,a.memo)(_);var X=l(60222),Z=l(22022),ee=l(26067),et=l(13341),el=l(14103);let en=({comparisonColumns:e,selectedComparisonColumns:t,onSelectionChange:l})=>{let[o,i]=(0,a.useState)(!1),u=e[0].key;return(0,n.Y)(Z.Dropdown,{placement:"bottomRight",open:o,onOpenChange:e=>{i(e)},menu:{multiple:!0,onClick:e=>{let{key:n}=e;n===u?l([u]):t.includes(u)?l([n]):l(t.includes(n)?t.filter(e=>e!==n):[...t,n])},onBlur:()=>{3===t.length&&l([e[0].key])},selectedKeys:t,items:[{key:"all",label:(0,n.Y)(B,{children:(0,r.t)("Select columns that will be displayed in the table. You can multiselect columns.")}),type:"group",children:e.map(e=>({key:e.key,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(L,{children:e.label}),(0,n.Y)(O,{children:t.includes(e.key)&&(0,n.Y)(ee.A,{})})]})}))}]},trigger:["click"],children:(0,n.FD)("span",{children:[(0,n.Y)(et.A,{})," ",(0,n.Y)(el.A,{})]})})};var er=l(21671),eo=l(61573);let ei=e=>{let t=e.data[e.colDef.field],l=e.colDef.valueFormatter;if(!t||!l)return null;let n=parseFloat(String(l({value:t})).replace("%","").trim());return Number.isNaN(n)?null:n},ea=(e,t)=>{let l=new Date(t);if(l.setHours(0,0,0,0),Number.isNaN(null==l?void 0:l.getTime()))return -1;let n=l.getDate(),r=l.getMonth(),o=l.getFullYear(),i=e.getDate(),a=e.getMonth(),u=e.getFullYear();return o<u?-1:o>u?1:r<a?-1:r>a?1:n<i?-1:+(n>i)},eu=e=>e.isMetric||e.isPercentMetric?V.QH.queryTotal:e.isNumeric?"sum":void 0;var es=l(46597),ec=l(29248),ed=l(34813);let ep=(0,r.t)("Show total aggregations of selected metrics. Note that row limit does not apply to the result.");var eg=l(84140);let eh=C.I4.div`
  ${()=>`
    font-weight: bold;
  `}
`,ev=C.I4.div`
  display: flex;
  background-color: ${({backgroundColor:e})=>e||"transparent"};
  justify-content: ${({align:e})=>e||"left"};
`,em=C.I4.div`
  margin-right: 10px;
  color: ${({arrowColor:e})=>e||"inherit"};
`,ef=C.I4.div`
  position: absolute;
  left: ${({offset:e})=>`${e}%`};
  top: 0;
  height: 100%;
  width: ${({percentage:e})=>`${e}%`};
  background-color: ${({background:e})=>e};
  z-index: 1;
`;var ex=l(31656),eb=l(75163);let ey=()=>(0,n.FD)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,n.Y)("rect",{x:"3",y:"6",width:"18",height:"2",rx:"1"}),(0,n.Y)("rect",{x:"6",y:"11",width:"12",height:"2",rx:"1"}),(0,n.Y)("rect",{x:"9",y:"16",width:"6",height:"2",rx:"1"})]}),eC=({size:e=14})=>(0,n.FD)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.Y)("circle",{cx:"8",cy:"3",r:"1.2"}),(0,n.Y)("circle",{cx:"8",cy:"8",r:"1.2"}),(0,n.Y)("circle",{cx:"8",cy:"13",r:"1.2"})]}),ew=({content:e,children:t,isOpen:l,onClose:r})=>{let[o,i]=(0,a.useState)({top:0,left:0}),u=(0,a.useRef)(null),s=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=()=>{var e,t,l;let n=null==(e=u.current)?void 0:e.getBoundingClientRect();if(n){let e=(null==(t=s.current)?void 0:t.offsetWidth)||200,r=window.innerWidth,o=n.left+10+160+e;i({top:n.bottom+8,left:Math.max(0,n.right-((null==(l=s.current)?void 0:l.offsetWidth)||0)+170*(o<=r))})}};return l&&(e(),document.addEventListener("mousedown",c),window.addEventListener("scroll",e),window.addEventListener("resize",e)),()=>{document.removeEventListener("mousedown",c),window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[l]);let c=e=>{var t;!s.current||s.current.contains(e.target)||(null==(t=u.current)?void 0:t.contains(e.target))||r()};return(0,n.FD)(A,{children:[(0,a.cloneElement)(t,{ref:u}),l&&(0,n.Y)(D,{ref:s,style:{top:`${o.top}px`,left:`${o.left}px`},children:e})]})};function e$(e,t,l,n,r,o,i){try{var a=e[o](i),u=a.value}catch(e){l(e);return}a.done?t(u):Promise.resolve(u).then(n,r)}let eS=({displayName:e,enableSorting:t,setSort:l,context:o,column:i,api:u})=>{var s;let{initialSortState:c,onColumnHeaderClicked:d}=o,p=null==i?void 0:i.getColId(),g=null==i?void 0:i.getColDef(),h=i.getUserProvidedColDef(),v=null==g||null==(s=g.context)?void 0:s.isPercentMetric,[m,f]=(0,a.useState)(!1),[x,b]=(0,a.useState)(!1),y=(0,a.useRef)(null),C=null==i?void 0:i.isFilterActive(),w=null==c?void 0:c[0],A=null==h?void 0:h.isMain,D=!A&&(null==h?void 0:h.timeComparisonKey),F=A?p.replace("Main","").trim():p,T=()=>{d({column:{colId:F,sort:null}}),l(null,!1)},I=e=>{d({column:{colId:F,sort:e}}),l(e,!1)},P=(null==w?void 0:w.colId)===p?null==w?void 0:w.sort:null,N=(0,n.FD)(Y,{children:[!D&&(!P||"desc"===P)&&(0,n.FD)("div",{onClick:()=>I("asc"),className:"menu-item",children:[(0,n.Y)(ex.A,{})," ",(0,r.t)("Sort Ascending")]}),!D&&(!P||"asc"===P)&&(0,n.FD)("div",{onClick:()=>I("desc"),className:"menu-item",children:[(0,n.Y)(eb.A,{})," ",(0,r.t)("Sort Descending")]}),w&&(null==w?void 0:w.colId)===p&&(0,n.FD)("div",{onClick:T,className:"menu-item",children:[(0,n.Y)("span",{style:{fontSize:16},children:"↻"})," ",(0,r.t)("Clear Sort")]})]});return(0,n.FD)($,{children:[(0,n.FD)(S,{onClick:()=>{if(!t||D)return;let e=(null==w?void 0:w.colId)!==p?"asc":(null==w?void 0:w.sort)==="asc"?"desc":null;e?I(e):T()},className:"custom-header",children:[(0,n.Y)(k,{children:e}),(0,n.Y)(z,{children:((e,t)=>{if(!(null==e?void 0:e.length)||!t)return null;let{colId:l,sort:r}=e[0];return l===t?"asc"===r?(0,n.Y)(ex.A,{}):"desc"===r?(0,n.Y)(eb.A,{}):null:null})(c,p)})]}),(0,n.Y)(ew,{content:(0,n.Y)("div",{ref:y}),isOpen:m,onClose:()=>f(!1),children:(0,n.Y)(M,{className:"header-filter",onClick:e=>{var t;return(t=function*(){e.stopPropagation(),f(!m);let t=yield u.getColumnFilterInstance(i),l=null==t?void 0:t.eGui;l&&y.current&&(y.current.innerHTML="",y.current.appendChild(l))},function(){var e=this,l=arguments;return new Promise(function(n,r){var o=t.apply(e,l);function i(e){e$(o,n,r,i,a,"next",e)}function a(e){e$(o,n,r,i,a,"throw",e)}i(void 0)})})()},isFilterActive:C,children:(0,n.Y)(ey,{})})}),!v&&!D&&(0,n.Y)(ew,{content:N,isOpen:x,onClose:()=>b(!1),children:(0,n.Y)("div",{className:"three-dots-menu",onClick:e=>{e.stopPropagation(),b(!x)},children:(0,n.Y)(eC,{})})})]})};var ek=l(47257),ez=l(1028);function eM(){return(eM=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}var eY=l(1800),eA=l(79843);function eD(){return(eD=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function eF(){return(eF=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function eT(e){var t;let l,{height:u,columns:c,data:d,includeSearch:p,allowRearrangeColumns:g,pageSize:h,serverPagination:v,rowCount:m,setDataMask:f,serverPaginationData:x,slice_id:b,percentMetrics:y,hasServerPageLengthChanged:w,serverPageLength:$,emitCrossFilters:S,filters:k,timeGrain:z,isRawRecords:M,alignPositiveNegative:Y,showCellBars:A,isUsingTimeComparison:D,colorPositiveNegative:F,totals:T,showTotals:I,columnColorFormatters:P,basicColorFormatters:N,width:U,onChartStateChange:E,chartState:B}=e,[L,O]=(0,a.useState)([]);(0,a.useEffect)(()=>{let e=c.filter(e=>(null==e?void 0:e.dataType)===i.GenericDataType.String).map(e=>({value:e.key,label:e.label}));s()(e,L)||O(e||[])},[c]);let W=[{key:"all",label:(0,r.t)("Display all")},{key:"#",label:"#"},{key:"△",label:"△"},{key:"%",label:"%"}],[j,q]=(0,a.useState)([null==W||null==(t=W[0])?void 0:t.key]),V=(0,a.useCallback)(e=>{E&&E(e)},[E]),K=(0,a.useMemo)(()=>D?0===j.length||j.includes("all")?null==c?void 0:c.filter(e=>{var t;return(null==e||null==(t=e.config)?void 0:t.visible)!==!1}):c.filter(e=>!e.originalLabel||((null==e?void 0:e.label)||"").includes("Main")||j.includes(e.label)).filter(e=>{var t;return(null==e||null==(t=e.config)?void 0:t.visible)!==!1}):c,[c,j]),Q=(({columns:e,data:t,serverPagination:l,isRawRecords:o,defaultAlignPN:u,showCellBars:s,colorPositiveNegative:c,totals:d,columnColorFormatters:p,allowRearrangeColumns:g,basicColorFormatters:h,isUsingTimeComparison:v,emitCrossFilters:m,alignPositiveNegative:f,slice_id:x})=>{let b=(0,a.useCallback)(a=>{var d,b,y,w,$;let S,k,z,M,{config:Y,isMetric:A,isPercentMetric:D,isNumeric:F,key:T,dataType:I,originalLabel:P}=a,N=void 0===Y.alignPositiveNegative?u:Y.alignPositiveNegative,U=F&&Array.isArray(p)&&p.length>0,E=v&&Array.isArray(h)&&h.length>0,B=null==T?void 0:T.includes("Main"),L=B?T.replace("Main","").trim():T,O=I===i.GenericDataType.String||I===i.GenericDataType.Temporal,H=!E&&!U&&s&&(null==(d=Y.showCellBars)||d)&&(A||o||D)&&function(e,t,l){var n;if("number"==typeof(null==l||null==(n=l[0])?void 0:n[e])){let n=l.map(t=>t[e]);return t?[0,(0,er.A)(n.map(Math.abs))]:(0,eo.A)(n)}return null}(T,N||f,t),W=(e=>{switch(e.dataType){case i.GenericDataType.Numeric:return"agNumberColumnFilter";case i.GenericDataType.String:return"agTextColumnFilter";case i.GenericDataType.Temporal:return"agDateColumnFilter";default:return!0}})(a);return eM({field:L,headerName:(S=!!(null==a?void 0:a.originalLabel),k=null==a||null==(y=a.key)?void 0:y.includes("Main"),z=(null==a||null==(w=a.config)?void 0:w.displayTypeIcon)!==!1,M=!!(null==a||null==($=a.config)?void 0:$.customColumnName),(S&&M?"displayTypeIcon"in a.config&&z&&!k?`${a.label} ${a.config.customColumnName}`:a.config.customColumnName:S&&k?a.originalLabel:S&&!z?"":null==a?void 0:a.label)||""),valueFormatter:e=>((e,t)=>{let{value:l,node:n}=e;return(0,ek.A)(l)&&""!==l&&!(l instanceof ez.A&&null===l.input)?(null==t.formatter?void 0:t.formatter.call(t,l))||l:(null==n?void 0:n.level)===-1?"":"N/A"})(e,a),valueGetter:e=>((e,t)=>{var l,n;if(null==e||null==(l=e.colDef)?void 0:l.isMain){let t=`Main ${e.column.getColId()}`;return e.data[t]}return(0,ek.A)(null==(n=e.data)?void 0:n[e.column.getColId()])?e.data[e.column.getColId()]:t.isNumeric?void 0:""})(e,a),cellStyle:e=>(e=>{var t,l,n;let r,{value:o,colDef:i,rowIndex:a,hasBasicColorFormatters:u,basicColorFormatters:s,hasColumnColorFormatters:c,columnColorFormatters:d,col:p,node:g}=e;c&&d.filter(e=>{var t,l;return((null==e||null==(t=e.column)?void 0:t.includes("Main"))?null==e||null==(l=e.column)?void 0:l.replace("Main","").trim():null==e?void 0:e.column)===i.field}).forEach(e=>{let t=(!!o||0===o)&&e.getColorFromValue(o);t&&(r=t)}),u&&(null==p?void 0:p.metricName)&&(null==g?void 0:g.rowPinned)!=="bottom"&&(r=null==s||null==(n=s[a])||null==(l=n[p.metricName])?void 0:l.backgroundColor);let h=(null==p||null==(t=p.config)?void 0:t.horizontalAlign)||((null==p?void 0:p.isNumeric)?"right":"left");return{backgroundColor:r||"",textAlign:h}})(eM({},e,{hasColumnColorFormatters:U,columnColorFormatters:p,hasBasicColorFormatters:E,basicColorFormatters:h,col:a})),cellClass:e=>(e=>{var t,l;let{col:n,emitCrossFilters:r}=e,o=null==e||null==(t=e.context)?void 0:t.isActiveFilterValue,i="";return r&&((null==n?void 0:n.isMetric)||(i+=" dt-is-filter"),(null==o?void 0:o(null==n?void 0:n.key,null==e?void 0:e.value))&&(i+=" dt-is-active-filter"),(null==n||null==(l=n.config)?void 0:l.truncateLongCells)&&(i+=" dt-truncate-cell")),i})(eM({},e,{col:a,emitCrossFilters:m})),minWidth:null!=(b=null==Y?void 0:Y.columnWidth)?b:100,filter:W},D&&{filterValueGetter:ei},I===i.GenericDataType.Temporal&&{filterParams:{comparator:ea}},{cellDataType:(e=>{switch(e.dataType){case i.GenericDataType.Numeric:return"number";case i.GenericDataType.Temporal:return"date";case i.GenericDataType.Boolean:return"boolean";default:return"text"}})(a),defaultAggFunc:eu(a),initialAggFunc:eu(a)},!(A||D)&&{allowedAggFuncs:["sum","min","max","count","avg","first","last"]},{cellRenderer:e=>O?(e=>{let{node:t,api:l,colDef:o,columns:i,allowRenderHtml:a,value:u,valueFormatted:s}=e;if((null==t?void 0:t.rowPinned)==="bottom"){let e=l.getAllGridColumns().filter(e=>e.isVisible()),t=!e[0].getAggFunc();if(e.length>1&&t&&i[0].key===(null==o?void 0:o.field))return(0,n.FD)(G,{children:[(0,n.Y)(R,{children:(0,r.t)("Summary")}),(0,n.Y)(ed.m,{overlay:ep,children:(0,n.Y)(ec.A,{})})]});if(!u)return null}if(!("string"==typeof u||u instanceof Date))return null!=s?s:u;if("string"==typeof u){if(u.startsWith("http://")||u.startsWith("https://"))return(0,n.Y)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:u});if(a&&(0,es.fE)(u))return(0,n.Y)("div",{dangerouslySetInnerHTML:{__html:(0,es.pn)(u)}})}return(0,n.Y)("div",{children:null!=s?s:u})})(e):(e=>{var t,l,r,o,i,a;let u,{value:s,valueFormatted:c,node:d,hasBasicColorFormatters:p,col:g,basicColorFormatters:h,valueRange:v,alignPositiveNegative:m,colorPositiveNegative:f}=e,x=(u=(0,C.DP)(),(0,eg.A)(u.colorBgContainer).isDark()),b=f?(0,C.DP)():null;if((null==d?void 0:d.rowPinned)==="bottom")return(0,n.Y)(eh,{children:null!=c?c:s});let y="",w="";p&&(null==g?void 0:g.metricName)&&(y=null==h||null==(r=h[null==d?void 0:d.rowIndex])||null==(l=r[g.metricName])?void 0:l.mainArrow,w=null==h||null==(a=h[null==d?void 0:d.rowIndex])||null==(i=a[g.metricName])||null==(o=i.arrowColor)?void 0:o.toLowerCase());let $=(null==g||null==(t=g.config)?void 0:t.horizontalAlign)||((null==g?void 0:g.isNumeric)?"right":"left");if(!v)return(0,n.FD)(ev,{align:$,children:[y&&(0,n.Y)(em,{arrowColor:w,children:y}),(0,n.Y)("div",{children:null!=c?c:s})]});let S=function({value:e,valueRange:t,alignPositiveNegative:l}){let[n,r]=t;return l?Math.abs(Math.round(e/r*100)):Math.round(Math.abs(e)/(Math.abs(Math.max(r,0))+Math.abs(Math.min(n,0)))*100)}({value:s,valueRange:v,alignPositiveNegative:m}),k=function({value:e,valueRange:t,alignPositiveNegative:l}){if(l)return 0;let[n,r]=t,o=Math.abs(Math.min(n,0));return Math.round(Math.min(o+e,o)/(Math.abs(Math.max(r,0))+o)*100)}({value:s,valueRange:v,alignPositiveNegative:m}),z=function({value:e,colorPositiveNegative:t=!1,isDarkTheme:l=!1,theme:n}){return t?`rgba(${150*(e<0)},${150*(e>=0)},0,0.2)`:"transparent"}({value:s,colorPositiveNegative:f,isDarkTheme:x,theme:b});return(0,n.FD)("div",{children:[(0,n.Y)(ef,{offset:k,percentage:S,background:z}),null!=c?c:s]})})(e),cellRendererParams:{allowRenderHtml:!0,columns:e,hasBasicColorFormatters:E,col:a,basicColorFormatters:h,valueRange:H,alignPositiveNegative:N||f,colorPositiveNegative:c},context:{isMetric:A,isPercentMetric:D,isNumeric:F},lockPinned:!g,sortable:!l||!D},l&&{headerComponent:eS,comparator:()=>0,headerComponentParams:{slice_id:x}},{isMain:B},!B&&P&&{columnGroupShow:"open"},P&&{timeComparisonKey:P},{wrapText:!(null==Y?void 0:Y.truncateLongCells),autoHeight:!(null==Y?void 0:Y.truncateLongCells)})},[e,t,u,p,h,s,c,v,o,m,g,l,f]),y=JSON.stringify(e);return(0,a.useMemo)(()=>{let t=new Map;return e.reduce((e,l)=>{let n=b(l);if(null==l?void 0:l.originalLabel)if(t.has(l.originalLabel))e[t.get(l.originalLabel)].children.push(n);else{let r={headerName:l.originalLabel,marryChildren:!0,openByDefault:!0,children:[n]};t.set(l.originalLabel,e.length),e.push(r)}else e.push(n);return e},[])},[y,b])})({columns:D?K:c,data:d,serverPagination:v,isRawRecords:M,defaultAlignPN:Y,showCellBars:A,colorPositiveNegative:F,totals:T,columnColorFormatters:P,allowRearrangeColumns:g,basicColorFormatters:N,isUsingTimeComparison:D,emitCrossFilters:S,alignPositiveNegative:Y,slice_id:b}),_=(l=u,p&&(l-=16),l-80),Z=(0,a.useCallback)(function(e,t){var l;return!!k&&(null==(l=k[e])?void 0:l.includes(t))},[k]),ee=(0,a.useCallback)(e=>(0,o.PT)(z)(e),[z]),et=(0,a.useCallback)(e=>{var t,l;S&&e.column&&!((null==(t=e.column.getColDef().context)?void 0:t.isMetric)||(null==(l=e.column.getColDef().context)?void 0:l.isPercentMetric))&&f((({key:e,value:t,filters:l,timeGrain:n,isActiveFilterValue:r,timestampFormatter:o})=>{let i=eD({},l);Array.isArray((i=l&&r(e,t)?{}:{[e]:[t]})[e])&&0===i[e].length&&delete i[e];let a=Object.keys(i),u=Object.values(i),s=[];return a.forEach(e=>{let t=e===eY.Tf,l=(0,eA.A)(null==i?void 0:i[e]);if(l.length){let e=l.map(e=>t?o(e):e);s.push(`${e.join(", ")}`)}}),{dataMask:{extraFormData:{filters:0===a.length?[]:a.map(e=>{let t=(0,eA.A)(null==i?void 0:i[e]);return t.length?{col:e,op:"IN",val:t.map(e=>e instanceof Date?e.getTime():e),grain:e===eY.Tf?n:void 0}:{col:e,op:"IS NULL"}})},filterState:{label:s.join(", "),value:u.length?u:null,filters:i&&Object.keys(i).length?i:null}},isCurrentValueSelected:r(e,t)}})({key:e.column.getColId(),value:e.value,filters:k,timeGrain:z,isActiveFilterValue:Z,timestampFormatter:ee}).dataMask)},[S,f,k,z]),el=(0,a.useCallback)((e,t)=>{let l=eF({},x,{currentPage:e,pageSize:t});(0,X.F)(f,l)},[f]),ex=(0,a.useCallback)(e=>{let t=eF({},x,{currentPage:0,pageSize:e});(0,X.F)(f,t)},[f]),eb=(0,a.useCallback)(e=>{var t;let l=eF({},x,{searchColumn:(null==x?void 0:x.searchColumn)||(null==(t=L[0])?void 0:t.value),searchText:e,currentPage:0});(0,X.F)(f,l)},[f,L]),ey=(0,a.useCallback)(e=>{if(!v)return;let t=eF({},x,{sortBy:e});(0,X.F)(f,t)},[f,v]);return(0,n.Y)(H,{height:u,children:(0,n.Y)(J,{gridHeight:_,data:d||[],colDefsFromProps:Q,includeSearch:!!p,allowRearrangeColumns:!!g,pagination:!!h&&!v,pageSize:h||0,serverPagination:v,rowCount:m,onServerPaginationChange:el,onServerPageSizeChange:ex,serverPaginationData:x,searchOptions:L,onSearchColChange:e=>{if(!s()(e,null==x?void 0:x.searchColumn)){let t=eF({},x,{searchColumn:e,searchText:""});(0,X.F)(f,t)}},onSearchChange:eb,onSortChange:ey,id:b,handleCrossFilter:et,percentMetrics:y,serverPageLength:$,hasServerPageLengthChanged:w,isActiveFilterValue:Z,renderTimeComparisonDropdown:D?()=>(0,n.Y)(en,{comparisonColumns:W,selectedComparisonColumns:j,onSelectionChange:q}):()=>null,cleanedTotals:T||{},showTotals:I,width:U,onColumnStateChange:V,chartState:B})})}}}]);