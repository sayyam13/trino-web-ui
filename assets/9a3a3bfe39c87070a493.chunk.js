"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2246],{7132:(e,t,i)=>{i.d(t,{A:()=>s});var a=i(2445),n=i(33149),l=i(21346),o=i(44156);let r=l.I4.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:e})=>e.colorPrimary};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,s=({id:e,initialWidth:t,minWidth:i,maxWidth:l,enable:s,children:d})=>{let[c,p]=(0,o.A)(e,t);return(0,a.FD)(a.FK,{children:[(0,a.Y)(r,{children:(0,a.Y)(n.c,{enable:{right:s},handleClasses:{right:"sidebar-resizer",bottom:"hidden",bottomRight:"hidden",bottomLeft:"hidden"},size:{width:c,height:"100%"},minWidth:i,maxWidth:l,onResizeStop:(e,t,i,a)=>p(c+a.width)})}),d(c)]})}},9100:(e,t,i)=>{i.d(t,{A:()=>s});var a=i(2445),n=i(21346),l=i(67675),o=i(34813),r=i(56058);let s=function({warningMarkdown:e,size:t,marginRight:i}){let s=(0,n.DP)();return(0,a.Y)(o.m,{id:"warning-tooltip",title:(0,a.Y)(r.z,{source:e}),children:(0,a.Y)(l.F.WarningOutlined,{iconColor:s.colorWarning,iconSize:t,css:{marginRight:null!=i?i:2*s.sizeUnit}})})}},26637:(e,t,i)=>{i.d(t,{E:()=>r});var a=i(2445),n=i(21346),l=i(22022);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}let r=(0,n.I4)(e=>(0,a.Y)(l.Badge,o({},e)))`
  ${({theme:e,color:t,count:i})=>`
    & > sup,
    & > sup.ant-badge-count {
      box-shadow: none;
      ${void 0!==i?`background: ${t||e.colorPrimary};`:""}
    }
  `}
`},28244:(e,t,i)=>{i.r(t),i.d(t,{datasetReducer:()=>eH,default:()=>eq});var a,n,l=i(2445),o=i(24002),r=i(61574),s=i(95265),d=i(91054),c=i(51045),p=i(58561),u=i.n(p),h=i(23745);function g(e,t,i,a,n,l,o){try{var r=e[l](o),s=r.value}catch(e){i(e);return}r.done?t(s):Promise.resolve(s).then(a,n)}var m=i(28908),b=i(30404),f=i(67675),v=i(12113),x=((a={})[a.SelectDatabase=0]="SelectDatabase",a[a.SelectCatalog=1]="SelectCatalog",a[a.SelectSchema=2]="SelectSchema",a[a.SelectTable=3]="SelectTable",a[a.ChangeDataset=4]="ChangeDataset",a),y=i(21346),$=i(17437);let w=y.I4.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.colorBgContainer};
`,z=y.I4.div`
  width: ${({theme:e,width:t})=>null!=t?t:80*e.sizeUnit}px;
  max-width: ${({theme:e,width:t})=>null!=t?t:80*e.sizeUnit}px;
  flex-direction: column;
  flex: 1 0 auto;
`,S=y.I4.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,Y=y.I4.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,U=(0,y.I4)(Y)`
  flex: 1 0 0;
  min-height: 0;
  position: relative;
`,C=(0,y.I4)(Y)`
  flex: 1 0 auto;
  height: auto;
`,I=(0,y.I4)(Y)`
  flex: 0 0 auto;
  height: ${({theme:e})=>16*e.sizeUnit}px;
  z-index: 0;
`,T=y.I4.div`
  ${({theme:e})=>`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: ${16*e.sizeUnit}px;
  border-bottom: 1px solid ${e.colorBorder};

  .header-with-actions {
    height: ${15.5*e.sizeUnit}px;
  }
  `}
`,D=y.I4.div`
  ${({theme:e})=>`
  margin: ${4*e.sizeUnit}px;
  font-size: ${e.fontSizeXL}px;
  font-weight: ${e.fontWeightStrong};
  `}
`,k=y.I4.div`
  ${({theme:e})=>`
  height: 100%;
  border-right: 1px solid ${e.colorBorderSecondary};
  `}
`,F=y.I4.div`
  width: 100%;
  position: relative;
`,A=y.I4.div`
  ${({theme:e})=>`
  border-left: 1px solid ${e.colorBorderSecondary};
  color: ${e.colorSuccess};
  `}
`,O=y.I4.div`
  ${({theme:e})=>`
  height: ${16*e.sizeUnit}px;
  width: 100%;
  border-top: 1px solid ${e.colorBorderSecondary};
  border-bottom: 1px solid ${e.colorBorderSecondary};
  color: ${e.colorInfo};
  border-top: ${e.sizeUnit/4}px solid
    ${e.colorBorderSecondary};
  padding: ${4*e.sizeUnit}px;
  display: flex;
  justify-content: flex-end;
  background-color: ${e.colorBgContainer};
  z-index: ${e.zIndexPopupBase}
  `}
`,E=y.I4.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${({theme:e})=>e.colorIconHover};
      }
    }
  }
`,_=e=>(0,$.AH)`
  width: ${21.5*e.sizeUnit}px;

  &:disabled {
    background-color: ${e.colorBgContainerDisabled};
    color: ${e.colorTextDisabled};
  }
`,P=(0,d.t)("New dataset"),j={text:(0,d.t)("Select a database table and create dataset"),placement:"bottomRight"};function R({setDataset:e,title:t=P,editing:i=!1}){let a={title:null!=t?t:P,placeholder:P,onSave:t=>{e({type:x.ChangeDataset,payload:{name:"dataset_name",value:t}})},canEdit:!1,label:(0,d.t)("dataset name")};return(0,l.Y)(E,{children:i?(0,l.Y)(m.U,{editableTitleProps:a,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,l.Y)(l.FK,{}),rightPanelAdditionalItems:(0,l.FD)(b.$,{buttonStyle:"primary",tooltip:null==j?void 0:j.text,placement:null==j?void 0:j.placement,disabled:!0,css:_,children:[(0,l.Y)(f.F.SaveOutlined,{iconSize:"m"}),(0,d.t)("Save")]}),additionalActionsMenu:(0,l.Y)(v.W1,{items:[{key:"settings",label:(0,d.t)("Settings")},{key:"delete",label:(0,d.t)("Delete")}]}),menuDropdownProps:{disabled:!0},tooltipProps:j}):(0,l.Y)(D,{children:t||P})})}var L=i(26637),N=i(48446);let B=(0,y.I4)(N.Ay)`
  ${({theme:e})=>`
  margin-top: ${8.5*e.sizeUnit}px;
  padding-left: ${4*e.sizeUnit}px;
  padding-right: ${4*e.sizeUnit}px;

  .ant-tabs-top > .ant-tabs-nav::before {
    width: ${50*e.sizeUnit}px;
  }
  `}
`,W=y.I4.div`
  ${({theme:e})=>`
  .ant-badge {
    width: ${8*e.sizeUnit}px;
    margin-left: ${2.5*e.sizeUnit}px;
  }
  `}
`,M={USAGE_TEXT:(0,d.t)("Usage"),COLUMNS_TEXT:(0,d.t)("Columns"),METRICS_TEXT:(0,d.t)("Metrics")},H=({id:e})=>{let{usageCount:t}=(e=>{let[t,i]=(0,o.useState)(0),a=(0,o.useCallback)(()=>s.A.get({endpoint:`/api/v1/dataset/${e}/related_objects`}).then(({json:e})=>{i(null==e?void 0:e.charts.count)}).catch(e=>{(0,h.iB)((0,d.t)("There was an error fetching dataset's related objects")),c.A.error(e)}),[e]);return(0,o.useEffect)(()=>{e&&a()},[e,a]),{usageCount:t}})(e),i=(0,l.FD)(W,{children:[(0,l.Y)("span",{children:M.USAGE_TEXT}),t>0&&(0,l.Y)(L.E,{count:t})]}),a=[{key:"COLUMNS",label:M.COLUMNS_TEXT,children:null},{key:"METRICS",label:M.METRICS_TEXT,children:null},{key:"USAGE",label:i,children:null}];return(0,l.Y)(B,{moreIcon:null,items:a})};var q=i(20105),K=i(17808),X=i(56927),G=i(69914),Q=i(35963),V=i(71519);let Z=y.I4.div`
  padding: ${({theme:e})=>8*e.sizeUnit}px
    ${({theme:e})=>6*e.sizeUnit}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,J=(0,y.I4)(Q.p)`
  max-width: 50%;

  p {
    width: ${({theme:e})=>115*e.sizeUnit}px;
  }
`,ee=(0,d.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),et=(0,d.t)("create dataset from SQL query"),ei=(0,d.t)(" to open SQL Lab. From there you can save the query as a dataset."),ea=(0,d.t)("Select dataset source"),en=(0,d.t)("No table columns"),el=(0,d.t)("This database table does not contain any data. Please select a different table."),eo=(0,d.t)("An Error Occurred"),er=(0,d.t)("Unable to load columns for the selected table. Please select a different table."),es=e=>{let{hasError:t,tableName:i,hasColumns:a}=e,n="empty-dataset.svg",o=ea,r=(0,l.FD)(l.FK,{children:[ee,(0,l.Y)(V.N_,{to:"/sqllab",children:(0,l.Y)("span",{role:"button",tabIndex:0,children:et})}),ei]});return t?(o=eo,r=(0,l.Y)(l.FK,{children:er}),n=void 0):i&&!a&&(n="no-columns.svg",o=en,r=(0,l.Y)(l.FK,{children:el})),(0,l.Y)(Z,{children:(0,l.Y)(J,{image:n,size:"large",title:o,description:r})})};var ed=((n=ed||{}).ABSOLUTE="absolute",n.RELATIVE="relative",n);let ec=y.I4.div`
  ${({theme:e,position:t})=>`
  position: ${t};
  margin: ${4*e.sizeUnit}px
    ${3*e.sizeUnit}px
    ${3*e.sizeUnit}px
    ${6*e.sizeUnit}px;
  font-size: ${6*e.sizeUnit}px;
  font-weight: ${e.fontWeightStrong};
  padding-bottom: ${3*e.sizeUnit}px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .anticon:first-of-type {
    margin-right: ${2*e.sizeUnit}px;
    vertical-align: text-top;
  }

  `}
`,ep=y.I4.div`
  ${({theme:e})=>`
  margin-left: ${6*e.sizeUnit}px;
  margin-bottom: ${3*e.sizeUnit}px;
  font-weight: ${e.fontWeightStrong};
  `}
`,eu=y.I4.div`
  ${({theme:e})=>`
  padding: ${8*e.sizeUnit}px
    ${6*e.sizeUnit}px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  `}
`,eh=y.I4.div`
  ${({theme:e})=>`
  max-width: 50%;
  width: 200px;

  .ant-image {
    width: 120px;
    margin-left: 40px;
  }

  div {
    width: 100%;
    margin-top: ${3*e.sizeUnit}px;
    text-align: center;
    font-weight: ${e.fontWeightNormal};
    font-size: ${e.fontSizeLG}px;
    color: ${e.colorTextSecondary};
  }
  `}
`,eg=y.I4.div`
  ${({theme:e})=>`
  position: relative;
  margin: ${3*e.sizeUnit}px;
  margin-left: ${6*e.sizeUnit}px;
  height: calc(100% - ${60*e.sizeUnit}px);
  overflow: auto;
  `}
`,em=y.I4.div`
  ${({theme:e})=>`
  position: relative;
  margin: ${3*e.sizeUnit}px;
  margin-left: ${6*e.sizeUnit}px;
  height: calc(100% - ${30*e.sizeUnit}px);
  overflow: auto;
  `}
`,eb=y.I4.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,ef=(0,y.I4)(K.F)`
  ${({theme:e})=>`
  border: 1px solid ${e.colorInfoText};
  padding: ${4*e.sizeUnit}px;
  margin: ${6*e.sizeUnit}px ${6*e.sizeUnit}px
    ${8*e.sizeUnit}px;
  .view-dataset-button {
    position: absolute;
    top: ${4*e.sizeUnit}px;
    right: ${4*e.sizeUnit}px;

    &:hover {
      color: ${e.colorPrimary};
      text-decoration: underline;
    }
  }
  `}
`,ev=(0,d.t)("Refreshing columns"),ex=(0,d.t)("Table columns"),ey=["5","10","15","25"],e$=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(e,t)=>e.name.localeCompare(t.name)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(e,t)=>e.name.localeCompare(t.name)}],ew=(0,d.t)(`This table already has a dataset associated with it. You can only associate one dataset with a table.
`),ez=(0,d.t)("View Dataset"),eS=({tableName:e,columnList:t,loading:i,hasError:a,datasets:n})=>{let o,r,s=(null==t?void 0:t.length)>0,c=null==n?void 0:n.map(e=>e.table_name),p=null==n?void 0:n.find(t=>t.table_name===e);return i&&(r=(0,l.Y)(eu,{children:(0,l.FD)(eh,{children:[(0,l.Y)(X.R,{position:"inline-centered"}),(0,l.Y)("div",{children:ev})]})})),i||(o=!i&&e&&s&&!a?(0,l.FD)(l.FK,{children:[(0,l.Y)(ep,{title:ex,children:ex}),p?(0,l.Y)(eg,{children:(0,l.Y)(eb,{children:(0,l.Y)(G.Ay,{loading:i,size:G.QS.Small,columns:e$,data:t,pageSizeOptions:ey,defaultPageSize:25})})}):(0,l.Y)(em,{children:(0,l.Y)(eb,{children:(0,l.Y)(G.Ay,{loading:i,size:G.QS.Small,columns:e$,data:t,pageSizeOptions:ey,defaultPageSize:25})})})]}):(0,l.Y)(es,{hasColumns:s,hasError:a,tableName:e})),(0,l.FD)(l.FK,{children:[e&&(0,l.FD)(l.FK,{children:[(null==c?void 0:c.includes(e))&&(0,l.Y)(ef,{closable:!1,type:"info",showIcon:!0,message:(0,d.t)("This table already has a dataset"),description:(0,l.FD)(l.FK,{children:[ew,(0,l.Y)("span",{role:"button",onClick:()=>{window.open(null==p?void 0:p.explore_url,"_blank","noreferrer noopener popup=false")},tabIndex:0,className:"view-dataset-button",children:ez})]})}),(0,l.FD)(ec,{position:!i&&s?"relative":"absolute",title:e||"",children:[(0,l.Y)(f.F.InsertRowAboveOutlined,{iconSize:"xxl"}),e]})]}),o,r]})};function eY(e,t,i,a,n,l,o){try{var r=e[l](o),s=r.value}catch(e){i(e);return}r.done?t(s):Promise.resolve(s).then(a,n)}let eU=({tableName:e,dbId:t,catalog:i,schema:a,setHasColumns:n,datasets:r})=>{let[p,u]=(0,o.useState)([]),[g,m]=(0,o.useState)(!1),[b,f]=(0,o.useState)(!1),v=(0,o.useRef)(e);return(0,o.useEffect)(()=>{var l,o;v.current=e,e&&a&&t&&(l={tableName:e,dbId:t,schema:a},(o=function*(){let{dbId:e,tableName:t,schema:a}=l;m(!0),null==n||n(!1);let o=`/api/v1/database/${e}/table_metadata/${(0,q.zJ)({name:t,catalog:i,schema:a})}`;try{var r;let e,t=yield s.A.get({endpoint:o});if(r=null==t?void 0:t.json,e=!0,"string"!=typeof(null==r?void 0:r.name)&&(e=!1),e&&!Array.isArray(r.columns)&&(e=!1),e&&r.columns.length>0&&(e=!r.columns.some((e,t)=>{let i,a,n=(i=!0,a="The object provided to isITableColumn does match the interface.","string"!=typeof(null==e?void 0:e.name)&&(i=!1,console.error(`${a} The property 'name' is required and must be a string`)),i&&"string"!=typeof(null==e?void 0:e.type)&&(i=!1,console.error(`${a} The property 'type' is required and must be a string`)),i);return n||console.error(`The provided object does not match the IDatabaseTable interface. columns[${t}] is invalid and does not match the ITableColumn interface`),!n})),e){let e=t.json;e.name===v.current&&(u(e.columns),null==n||n(e.columns.length>0),f(!1))}else u([]),null==n||n(!1),f(!0),(0,h.iB)((0,d.t)("The API response from %s does not match the IDatabaseTable interface.",o)),c.A.error((0,d.t)("The API response from %s does not match the IDatabaseTable interface.",o))}catch(e){u([]),null==n||n(!1),f(!0)}finally{m(!1)}},function(){var e=this,t=arguments;return new Promise(function(i,a){var n=o.apply(e,t);function l(e){eY(n,i,a,l,r,"next",e)}function r(e){eY(n,i,a,l,r,"throw",e)}l(void 0)})})())},[e,t,a]),(0,l.Y)(eS,{columnList:p,hasError:b,loading:g,tableName:e,datasets:r})};var eC=i(51156),eI=i(11960),eT=i(44730),eD=i(89795);function ek(){return(ek=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}let eF=y.I4.div`
  ${({theme:e})=>`
    padding: ${4*e.sizeUnit}px;
    height: 100%;
    background-color: ${e.colorBgContainer};
    position: relative;
    .emptystate {
      height: auto;
      margin-top: ${17.5*e.sizeUnit}px;
    }
    .section-title {
      margin-top: ${5.5*e.sizeUnit}px;
      margin-bottom: ${11*e.sizeUnit}px;
      font-weight: ${e.fontWeightStrong};
    }
    .table-title {
      margin-top: ${11*e.sizeUnit}px;
      margin-bottom: ${6*e.sizeUnit}px;
      font-weight: ${e.fontWeightStrong};
    }
    .options-list {
      overflow: auto;
      position: absolute;
      bottom: 0;
      top: ${92.25*e.sizeUnit}px;
      left: ${3.25*e.sizeUnit}px;
      right: 0;

      .no-scrollbar {
        margin-right: ${4*e.sizeUnit}px;
      }

      .options {
        cursor: pointer;
        padding: ${1.75*e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
        :hover {
          background-color: ${e.colorFillTertiary}
        }
      }

      .options-highlighted {
        cursor: pointer;
        padding: ${1.75*e.sizeUnit}px;
        border-radius: ${e.borderRadius}px;
        background-color: ${e.colorPrimaryText};
        color: ${e.colorTextLightSolid};
      }

      .options, .options-highlighted {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    form > span[aria-label="refresh"] {
      position: absolute;
      top: ${69*e.sizeUnit}px;
      left: ${42.75*e.sizeUnit}px;
      font-size: ${4.25*e.sizeUnit}px;
    }
    .table-form {
      margin-bottom: ${8*e.sizeUnit}px;
    }
    .loading-container {
      position: absolute;
      top: ${89.75*e.sizeUnit}px;
      left: 0;
      right: 0;
      text-align: center;
      img {
        width: ${20*e.sizeUnit}px;
        margin-bottom: ${2.5*e.sizeUnit}px;
      }
      p {
        color: ${e.colorTextSecondary};
      }
    }
`}
`;function eA({setDataset:e,dataset:t,datasetNames:i}){let{addDangerToast:a}=(0,eI.Yf)(),n=(0,o.useCallback)(t=>{e({type:x.SelectDatabase,payload:{db:t}})},[e]);(0,o.useEffect)(()=>{let e=(0,eT.Gq)(eT.Hh.Database,null);e&&n(e)},[n]);let r=(0,o.useCallback)(e=>(0,l.Y)(eC.cs,{table:(null==i?void 0:i.includes(e.value))?ek({},e,{extra:{warning_markdown:(0,d.t)("This table already has a dataset")}}):e}),[i]);return(0,l.Y)(eF,{children:(0,l.Y)(eC.Ay,ek({database:null==t?void 0:t.db,handleError:a,emptyState:(0,l.Y)(Q.p,{image:"empty.svg",title:(0,d.t)("No databases available"),description:(0,l.FD)("span",{children:[(0,d.t)("Manage your databases")," ",(0,l.Y)(eD.o.Link,{href:"/databaseview/list",children:(0,d.t)("here")})]}),size:"small"}),onDbChange:n,onCatalogChange:t=>{t&&e({type:x.SelectCatalog,payload:{name:"catalog",value:t}})},onSchemaChange:t=>{t&&e({type:x.SelectSchema,payload:{name:"schema",value:t}})},onTableSelectChange:t=>{e({type:x.SelectTable,payload:{name:"table_name",value:t}})},sqlLabMode:!1,customTableOptionLabelRenderer:r},(null==t?void 0:t.catalog)&&{catalog:t.catalog},(null==t?void 0:t.schema)&&{schema:t.schema}))})}var eO=i(19633),eE=i(29371),e_=i(54381),eP=i(8546),ej=i(52519);let eR=["db","schema","table_name"],eL=[ej.ci,ej.q0,ej.ar,ej.R2],eN=(0,eI.Ay)(function({datasetObject:e,addDangerToast:t,hasColumns:i=!1,datasets:a}){let n=(0,r.W6)(),o=(0,y.DP)(),{createResource:s}=(0,e_.fn)("dataset",(0,d.t)("dataset"),t),c=(0,d.t)("Select a database table."),p=(t=!0)=>{if(e){var i;s({database:null==(i=e.db)?void 0:i.id,catalog:e.catalog,schema:e.schema,table_name:e.table_name}).then(i=>{i&&"number"==typeof i&&((0,eP.logEvent)(ej.oA,e),t?n.push(`/chart/add/?dataset=${e.table_name}`):n.push("/tablemodelview/list/"))})}},u=(0,d.t)("Create and explore dataset"),h=(0,d.t)("Create dataset"),g=!(null==e?void 0:e.table_name)||!i||(null==a?void 0:a.includes(null==e?void 0:e.table_name)),m=(0,l.Y)(v.W1,{items:[{key:"create-only",onClick:()=>{p(!1)},label:h}]});return(0,l.FD)(eO.s,{align:"center",justify:"flex-end",gap:"8px",children:[(0,l.Y)(b.$,{buttonStyle:"secondary",onClick:()=>{if(e){let t,i=(t=0,eL[Object.keys(e).reduce((i,a)=>(eR.includes(a)&&e[a]&&(t+=1),t),0)]);(0,eP.logEvent)(i,e)}else(0,eP.logEvent)(ej.ci,{});n.goBack()},children:(0,d.t)("Cancel")}),(0,l.Y)(eE.g,{type:"primary",disabled:g,tooltip:(null==e?void 0:e.table_name)?void 0:c,onClick:()=>p(!0),popupRender:()=>m,icon:(0,l.Y)(f.F.DownOutlined,{iconSize:"xs",iconColor:o.colorTextLightSolid}),trigger:["click"],children:u})]})});var eB=i(7132);function eW({header:e,leftPanel:t,datasetPanel:i,rightPanel:a,footer:n}){let o=(0,y.DP)();return(0,l.FD)(w,{"data-test":"dataset-layout-wrapper",children:[e&&(0,l.Y)(T,{children:e}),(0,l.FD)(U,{children:[t&&(0,l.Y)(eB.A,{id:"dataset",initialWidth:80*o.sizeUnit,minWidth:80*o.sizeUnit,enable:!0,children:e=>(0,l.Y)(z,{width:e,children:(0,l.Y)(k,{children:t})})}),(0,l.FD)(S,{children:[(0,l.FD)(C,{children:[i&&(0,l.Y)(F,{children:i}),a&&(0,l.Y)(A,{children:a})]}),(0,l.Y)(I,{children:n&&(0,l.Y)(O,{children:n})})]})]})]})}function eM(){return(eM=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function eH(e,t){let i=eM({},e);switch(t.type){case x.SelectDatabase:return eM({},i,t.payload,{catalog:null,schema:null,table_name:null});case x.SelectCatalog:return eM({},i,{[t.payload.name]:t.payload.value,schema:null,table_name:null});case x.SelectSchema:return eM({},i,{[t.payload.name]:t.payload.value,table_name:null});case x.SelectTable:case x.ChangeDataset:return eM({},i,{[t.payload.name]:t.payload.value});default:return null}}function eq(){var e;let[t,i]=(0,o.useReducer)(eH,null),[a,n]=(0,o.useState)(!1),[p,m]=(0,o.useState)(!1),{datasets:b,datasetNames:f}=((e,t)=>{let[i,a]=(0,o.useState)([]),n=t?encodeURIComponent(t):void 0,l=(0,o.useCallback)(e=>{var t;return(t=function*(){let t,i=[],n=0;for(;void 0===t||i.length<t;){let a=u().encode_uri({filters:e,page:n});try{let e=yield s.A.get({endpoint:`/api/v1/dataset/?q=${a}`});({count:t}=e.json);let{json:{result:l}}=e;i=[...i,...l],n+=1}catch(e){(0,h.iB)((0,d.t)("There was an error fetching dataset")),c.A.error((0,d.t)("There was an error fetching dataset"),e)}}a(i)},function(){var e=this,i=arguments;return new Promise(function(a,n){var l=t.apply(e,i);function o(e){g(l,a,n,o,r,"next",e)}function r(e){g(l,a,n,o,r,"throw",e)}o(void 0)})})()},[]);(0,o.useEffect)(()=>{let i=[{col:"database",opr:"rel_o_m",value:null==e?void 0:e.id},{col:"schema",opr:"eq",value:n},{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];t&&l(i)},[null==e?void 0:e.id,t,n,l]);let r=(0,o.useMemo)(()=>null==i?void 0:i.map(e=>e.table_name),[i]);return{datasets:i,datasetNames:r}})(null==t?void 0:t.db,null==t?void 0:t.schema),{datasetId:v}=(0,r.g)();return(0,o.useEffect)(()=>{Number.isNaN(parseInt(v,10))||m(!0)},[v]),(0,l.Y)(eW,{header:(0,l.Y)(R,{setDataset:i,title:null==t?void 0:t.table_name}),leftPanel:p?null:(0,l.Y)(eA,{setDataset:i,dataset:t,datasetNames:f}),datasetPanel:p?(0,l.Y)(H,{id:v}):(0,l.Y)(eU,{tableName:null==t?void 0:t.table_name,dbId:null==t||null==(e=t.db)?void 0:e.id,catalog:null==t?void 0:t.catalog,schema:null==t?void 0:t.schema,setHasColumns:n,datasets:b}),footer:(0,l.Y)(eN,{url:"/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc",datasetObject:t,hasColumns:a,datasets:f})})}},28908:(e,t,i)=>{i.d(t,{U:()=>z});var a=i(2445),n=i(91054),l=i(17437),o=i(21346),r=i(67675),s=i(16868),d=i(24002),c=i(98250),p=i(34813),u=i(22022);let h=e=>(0,l.AH)`
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
`,g=(0,d.memo)(({title:e,placeholder:t,onSave:i,canEdit:r,label:s})=>{let g=(0,o.DP)(),[m,b]=(0,d.useState)(!1),[f,v]=(0,d.useState)(!1),[x,y]=(0,d.useState)(e||""),{width:$,ref:w}=(0,c.uZ)(),{width:z,ref:S}=(0,c.uZ)({refreshMode:"debounce"});(0,d.useEffect)(()=>{y(e)},[e]),(0,d.useEffect)(()=>{if(m&&(null==w?void 0:w.current)&&w.current.setSelectionRange){let{length:e}=w.current.value;w.current.setSelectionRange(e,e),w.current.scrollLeft=w.current.scrollWidth}},[m]),(0,d.useLayoutEffect)(()=>{(null==w?void 0:w.current)&&(w.current.textContent=x||t)},[x,t,w]),(0,d.useEffect)(()=>{var e;let t=null==(e=w.current)?void 0:e.input;t&&(t.scrollWidth>t.clientWidth?v(!0):v(!1))},[$,z]);let Y=(0,d.useCallback)(()=>{r&&!m&&b(!0)},[r,m]),U=(0,d.useCallback)(()=>{if(!r)return;let t=x.trim();y(t),e!==t&&i(t),b(!1)},[r,x,i,e]),C=(0,d.useCallback)(e=>{r&&m&&y(e.target.value)},[r,m]),I=(0,d.useCallback)(e=>{if(!r)return;e.preventDefault();let{activeElement:t}=document;t&&t instanceof HTMLElement&&t.blur()},[r]);return(0,a.FD)("div",{css:h,ref:S,children:[(0,a.Y)(p.m,{id:"title-tooltip",title:f&&x&&!m?x:null,children:(0,a.Y)(u.Input,{"data-test":"editable-title-input",variant:"borderless","aria-label":null!=s?s:(0,n.t)("Title"),className:"dynamic-title-input",value:x,onChange:C,onBlur:U,onClick:Y,onPressEnter:I,placeholder:t,css:(0,l.AH)`
              ${!r&&`&[disabled] {
                  cursor: default;
                }
              `}
              font-size: ${g.fontSizeXL}px;
              transition: auto;
              ${$&&$>0&&(0,l.AH)`
                width: ${$}px;
              `}
            `,disabled:!r})}),(0,a.Y)("span",{ref:w,className:"input-sizer","aria-hidden":!0,tabIndex:-1})]})});var m=i(1032),b=i(80520),f=i(30404);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}let x=e=>(0,l.AH)`
  width: ${8*e.sizeUnit}px;
  height: ${8*e.sizeUnit}px;
  padding: 0;
  border: 1px solid ${e.colorPrimary};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }
`,y=e=>(0,l.AH)`
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
`,$=e=>(0,l.AH)`
  display: flex;
  align-items: center;
  padding-left: ${2*e.sizeUnit}px;

  & .anticon-star {
    padding: 0 ${e.sizeUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,w=e=>(0,l.AH)`
  margin-left: ${2*e.sizeUnit}px;
`,z=({editableTitleProps:e,showTitlePanelItems:t,certificatiedBadgeProps:i,showFaveStar:l,faveStarProps:d,titlePanelAdditionalItems:c,rightPanelAdditionalItems:p,additionalActionsMenu:u,menuDropdownProps:h,showMenuDropdown:z=!0,tooltipProps:S})=>{let Y=(0,o.DP)();return(0,a.FD)("div",{css:y,className:"header-with-actions",children:[(0,a.FD)("div",{className:"title-panel",children:[(0,a.Y)(g,v({},e)),t&&(0,a.FD)("div",{css:$,children:[(null==i?void 0:i.certifiedBy)&&(0,a.Y)(b.T,v({},i)),l&&(0,a.Y)(s.$,v({},d)),c]})]}),(0,a.FD)("div",{className:"right-button-panel",children:[p,(0,a.Y)("div",{css:w,children:z&&(0,a.Y)(m.ms,v({trigger:["click"],popupRender:()=>u},h,{children:(0,a.Y)(f.$,{css:x,buttonStyle:"tertiary","aria-label":(0,n.t)("Menu actions trigger"),tooltip:null==S?void 0:S.text,placement:null==S?void 0:S.placement,"data-test":"actions-trigger",children:(0,a.Y)(r.F.EllipsisOutlined,{iconColor:Y.colorPrimary,iconSize:"l"})})}))})]})]})}},29371:(e,t,i)=>{i.d(t,{g:()=>p});var a=i(2445),n=i(22022),l=i(20249),o=i.n(l),r=i(21346),s=i(17437),d=i(34813);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}let p=e=>{var{popupRender:t,tooltip:i,tooltipPlacement:l,children:p}=e,u=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(i=l[a])>=0||(n[i]=e[i]);return n}(e,["popupRender","tooltip","tooltipPlacement","children"]);let h=(0,r.DP)(),{type:g}=u,m=(0,s.AH)`
    ${(!g||"default"===g)&&`.ant-dropdown-trigger {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
      }
      .anticon {
        vertical-align: middle;
      }
    }`}
  `,b=(0,a.Y)(n.Dropdown.Button,c({popupRender:t},u,{css:[m,(0,s.AH)`
          .ant-btn {
            height: 30px;
            box-shadow: none;
            font-size: ${h.fontSizeSM}px;
            font-weight: ${h.fontWeightStrong};
          }
        `],children:p}));return i?(0,a.Y)(d.m,{placement:l,id:`${o()(i)}-tooltip`,title:i,children:b}):b}},44156:(e,t,i)=>{i.d(t,{A:()=>o});var a=i(24002),n=i(44730);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function o(e,t){let i=(0,a.useRef)(),[o,r]=(0,a.useState)(t);return(0,a.useEffect)(()=>{var t;i.current=null!=(t=i.current)?t:(0,n.Gq)(n.Hh.CommonResizableSidebarWidths,{}),i.current[e]&&r(i.current[e])},[e]),[o,function(t){r(t),(0,n.SO)(n.Hh.CommonResizableSidebarWidths,l({},i.current,{[e]:t}))}]}},51156:(e,t,i)=>{i.d(t,{Ay:()=>z,Kt:()=>w,cs:()=>y});var a=i(2445),n=i(24002),l=i(91054),o=i(94149),r=i(21346),s=i(93666),d=i(80520),c=i(5009),p=i(67675),u=i(37013),h=i(65061),g=i(9100),m=i(11960),b=i(35050);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}let v=r.I4.div`
  ${({theme:e})=>`
    .refresh {
      display: flex;
      align-items: center;
      width: 30px;
      margin-left: ${e.sizeUnit}px;
    }

    .section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .divider {
      border-bottom: 1px solid ${e.colorSplit};
      margin: 15px 0;
    }

    .table-length {
      color: ${e.colorTextSecondary};
    }

    .select {
      flex: 1;
      max-width: calc(100% - ${e.sizeUnit+30}px)
    }
  `}
`,x=r.I4.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,y=({table:e})=>{let{value:t,type:i,extra:n}=e;return(0,a.FD)(x,{title:t,children:["view"===i?(0,a.Y)(p.F.FunctionOutlined,{iconSize:"m"}):"materialized_view"===i?(0,a.Y)(p.F.ProfileOutlined,{iconSize:"m"}):(0,a.Y)(p.F.TableOutlined,{iconSize:"m"}),(null==n?void 0:n.certification)&&(0,a.Y)(d.T,{certifiedBy:n.certification.certified_by,details:n.certification.details,size:"l"}),(null==n?void 0:n.warning_markdown)&&(0,a.Y)(g.A,{warningMarkdown:n.warning_markdown,size:"l",marginRight:4}),t]})},$=({database:e,emptyState:t,formMode:i=!1,getDbList:r,handleError:d,isDatabaseSelectEnabled:p=!0,onDbChange:g,onCatalogChange:f,onSchemaChange:x,readOnly:$=!1,onEmptyResults:w,catalog:z,schema:S,sqlLabMode:Y=!0,tableSelectMode:U="single",tableValue:C,onTableSelectChange:I,customTableOptionLabelRenderer:T})=>{let D,k,F,{addSuccessToast:A}=(0,m.Yf)(),[O,E]=(0,n.useState)(z),[_,P]=(0,n.useState)(S),[j,R]=(0,n.useState)(void 0),{currentData:L,isFetching:N,refetch:B}=(0,b.ty)({dbId:null==e?void 0:e.id,catalog:O,schema:_,onSuccess:(e,t)=>{t&&A((0,l.t)("List updated"))},onError:e=>{(0,o.h4)(e).then(e=>{d((0,o.hi)((0,l.t)("There was an error loading the tables"),e))})}}),W=(0,n.useMemo)(()=>L?L.options.map(e=>({value:e.value,label:T?T(e):(0,a.Y)(y,{table:e}),text:e.value})):[],[L,T]);(0,n.useEffect)(()=>{void 0===e&&(E(void 0),P(void 0),R(void 0))},[e,U]),(0,n.useEffect)(()=>{"single"===U?R(W.find(e=>e.value===C)):R((null==W?void 0:W.filter(e=>e&&(null==C?void 0:C.includes(e.value))))||[])},[W,C,U]);let M=(0,n.useMemo)(()=>(e,t)=>{let i=e.trim().toLowerCase(),{value:a}=t;return a.toLowerCase().includes(i)},[]);return(0,a.FD)(v,{children:[(0,a.Y)(c.RA,{db:e,emptyState:t,formMode:i,getDbList:r,handleError:d,onDbChange:$?void 0:e=>{g&&g(e),E(void 0),P(void 0),R("single"===U?void 0:[])},onEmptyResults:w,onCatalogChange:$?void 0:e=>{E(e),f&&f(e),P(void 0),R("single"===U?void 0:[])},catalog:O,onSchemaChange:$?void 0:e=>{P(e),x&&x(e),R("single"===U?void 0:[])},schema:_,sqlLabMode:Y,isDatabaseSelectEnabled:p&&!$,readOnly:$}),Y&&!i&&(0,a.Y)("div",{className:"divider"}),(D=Y?(0,l.t)("See table schema"):(0,l.t)("Table"),k=(0,a.Y)(s.A,{ariaLabel:(0,l.t)("Select table or type to search tables"),disabled:_&&!i&&$||!_,filterOption:M,labelInValue:!0,loading:N,name:"select-table",onChange:e=>{_?null==I||I(Array.isArray(e)?e.map(e=>null==e?void 0:e.value):null==e?void 0:e.value,O,_):R(e)},options:W,placeholder:(0,l.t)("Select table or type to search tables"),showSearch:!0,mode:U,value:j,allowClear:"multiple"===U,allowSelectAll:!1}),F=!$&&(0,a.Y)(h.A,{onClick:()=>B(),tooltipContent:(0,l.t)("Force refresh table list")}),(0,a.FD)(a.FK,{children:[(0,a.Y)(u.q,{children:D}),(0,a.FD)("div",{className:"section",children:[(0,a.Y)("span",{className:"select",children:k}),(0,a.Y)("span",{className:"refresh",children:F})]})]}))]})},w=e=>(0,a.Y)($,f({tableSelectMode:"multiple"},e)),z=$}}]);