"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1809],{6601:(e,t,a)=>{a.r(t),a.d(t,{default:()=>eW});var i,n=a(2445),r=a(58561),o=a.n(r),l=a(24002),s=a(5556),d=a.n(s),c=a(61225),h=a(7973),u=a(78340),p=a(91054),m=a(99247),f=a(95265),g=a(94149),b=a(79843),y=a(59927),v=a(21346),C=a(17437),_=a(17808),x=a(98837),S=a(48446),Y=a(9100),w=a(51156),A=a(47909),D=a(17250),T=a(51930),E=a(47332),F=a(11960),z=a(22787),O=a(26637),k=a(93666),I=a(89795),$=a(80520),L=a(76106),M=a(85846),q=a(46502),U=a(94448),P=a(63278),R=a(67675),K=a(90300),j=a(22022),N=a(30404),Q=a(56927),H=a(5009);function B(e,t,a,i,n,r,o){try{var l=e[r](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(i,n)}let W=(0,a(69152).A)({method:"POST",endpoint:"/api/v1/sqllab/execute"});function G(e){return{type:"SET_QUERY_IS_LOADING",payload:e}}var V=a(6411),X=a.n(V),J=a(37722),Z=a(96893),ee=a(43561),et=a(23941),ea=a(69914),ei=a(83734);function en(e,t,a,i,n,r,o){try{var l=e[r](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(i,n)}function er(){return(er=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function eo(e,t,a){return l.Children.map(e,e=>{let i=e;return e&&e.type&&e.type.name===t.name&&(i=(0,l.cloneElement)(e,a(e))),i&&i.props&&i.props.children&&(i=(0,l.cloneElement)(i,{children:eo(i.props.children,t,a)})),i})}var el=a(34813),es=a(22023);function ed({fieldKey:e,value:t,label:a,description:i=null,control:r,additionalControl:o,onChange:s=()=>{},compact:d=!1,inline:c,errorMessage:h}){let u=(0,l.useCallback)(t=>{s(e,t)},[s,e]),p=(0,v.DP)(),m=!d&&i?i:void 0,f=d&&i?(0,n.Y)(el.m,{css:(0,C.AH)`
          color: ${p.colorTextTertiary};
        `,id:"field-descr",placement:"right",title:i,children:(0,n.Y)(R.F.InfoCircleOutlined,{iconSize:"s",css:(0,C.AH)`
            margin-left: ${p.marginXXS}px;
          `,iconColor:p.colorTextTertiary})}):void 0,g=(0,l.cloneElement)(r,{value:t,onChange:u,label:(0,n.FD)(P.l,{children:[a||e,f]})});return(0,n.FD)("div",{css:o&&(0,C.AH)`
          position: relative;
        `,children:[o,(0,n.Y)(es.e,{extra:m,css:!c&&(0,C.AH)`
            .ControlHeader {
              margin-bottom: ${p.marginXXS}px;
            }
          `,children:g}),h&&(0,n.Y)("div",{css:e=>({color:e.colorText,[c?"marginLeft":"marginTop"]:e.marginXXS}),children:h})]})}function ec(){return(ec=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function eh({children:e,onChange:t,item:a,title:i=null,compact:r=!1}){let o=(0,l.useCallback)((e,i)=>{t(ec({},a,{[e]:i}))},[t,a]);return(0,n.FD)(ei.l,{className:"CRUD",layout:"vertical",children:[i&&(0,n.FD)(I.o.Title,{level:5,css:(0,C.AH)`
            margin-top: 0.5em;
          `,children:[i," ",(0,n.Y)(K.c,{})]}),eo(e,ed,e=>({onChange:o,value:a[e.props.fieldKey],compact:r}))]})}function eu(){return(eu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let ep=v.I4.div`
  text-align: right;
  ${({theme:e})=>`margin-bottom: ${2*e.sizeUnit}px`}
`,em=v.I4.span`
  ${({theme:e})=>`
    margin-top: ${3*e.sizeUnit}px;
    margin-left: ${3*e.sizeUnit}px;
    button>span>:first-of-type {
      margin-right: 0;
    }
  `}
`;function ef(e){let t=e.map(e=>eu({},e,{id:e.id||(0,ee.Ak)()})),a={};return t.forEach(e=>{a[e.id]=e}),{collection:a,collectionArray:t}}class eg extends l.PureComponent{componentDidUpdate(e){if(this.props.collection!==e.collection){let{collection:e,collectionArray:t}=ef(this.props.collection);this.setState(a=>({collection:e,collectionArray:t,expandedColumns:a.expandedColumns}))}}onCellChange(e,t,a){this.setState(i=>{let n=eu({},i.collection,{[e]:eu({},i.collection[e],{[t]:a})}),r=i.collectionArray.map(t=>t.id===e?n[e]:t);return this.props.onChange&&this.props.onChange(r),{collection:n,collectionArray:r}})}onAddItem(){if(this.props.itemGenerator){let e=this.props.itemGenerator(),t=!0===e.expanded;e.id||(e=eu({},e,{id:(0,ee.Ak)()})),delete e.expanded,this.setState(a=>{let i=eu({},a.collection,{[e.id]:e}),n=t?eu({},a.expandedColumns,{[e.id]:!0}):a.expandedColumns;return{collection:i,collectionArray:[e,...a.collectionArray],expandedColumns:n}},()=>{this.props.onChange&&this.props.onChange(this.state.collectionArray)})}}onFieldsetChange(e){this.changeCollection(eu({},this.state.collection,{[e.id]:e}))}getLabel(e){let{columnLabels:t}=this.props,a=(null==t?void 0:t[e])?t[e]:e;return a.startsWith("__")&&(a=""),a}getTooltip(e){let{columnLabelTooltips:t}=this.props;return null==t?void 0:t[e]}changeCollection(e){let t=new Set(this.state.collectionArray.map(e=>e.id)),a=[];for(let t of this.state.collectionArray)e[t.id]&&a.push(e[t.id]);for(let i of Object.values(e))t.has(i.id)||a.push(i);this.setState({collection:e,collectionArray:a}),this.props.onChange&&this.props.onChange(a)}deleteItem(e){let t=eu({},this.state.collection);delete t[e],this.changeCollection(t)}toggleExpand(e){this.setState(t=>({expandedColumns:eu({},t.expandedColumns,{[e]:!t.expandedColumns[e]})}))}handleTableChange(e,t,a){let i=Array.isArray(a)?a[0]:a,n="",r=0;(null==i?void 0:i.columnKey)&&(null==i?void 0:i.order)&&(n=i.columnKey,r="ascend"===i.order?1:2);let{sortColumns:o}=this.props,l=n;if((null==o?void 0:o.includes(l))||0===r){let e=[...this.props.collection];if(0!==r)e.sort((e,t)=>((e,t)=>{if("string"==typeof e&&"string"==typeof t)return(e||"").localeCompare(t||"");if("number"==typeof e&&"number"==typeof t)return e-t;if("boolean"==typeof e&&"boolean"==typeof t)return e===t?0:e?1:-1;let a=String(null!=e?e:""),i=String(null!=t?t:"");return a.localeCompare(i)})(e[l],t[l])),2===r&&e.reverse();else{let{collectionArray:t}=ef(this.props.collection);e=t}this.setState({collectionArray:e,sortColumn:n,sort:r})}}renderExpandableSection(e){let t=()=>({item:e,onChange:this.onFieldsetChange});return eo(this.props.expandFieldset,eh,t)}renderCell(e,t){var a;let i=null==(a=this.props.itemRenderers)?void 0:a[t],n=e[t],r=this.onCellChange.bind(this,e.id,t);return i?i(n,r,this.getLabel(t),e):n}buildTableColumns(){let{tableColumns:e,allowDeletes:t,sortColumns:a=[]}=this.props,i=e.map(e=>{let t=this.getLabel(e),i=this.getTooltip(e),r=a.includes(e),o=this.state.sortColumn===e?1===this.state.sort?"ascend":2===this.state.sort?"descend":null:null;return{key:e,dataIndex:e,minWidth:100,title:(0,n.FD)(n.FK,{children:[t,i&&(0,n.FD)(n.FK,{children:[" ",(0,n.Y)(et.I,{label:(0,p.t)("description"),tooltip:i,placement:"top"})]})]}),render:(t,a)=>this.renderCell(a,e),onCell:a=>{var i;let n=null==(i=this.props.itemCellProps)?void 0:i[e],r=a[e];return n?n(r,t,a):{}},sorter:r,sortOrder:o}});return t&&i.push({key:"__actions",dataIndex:"__actions",sorter:!1,title:(0,n.Y)(n.FK,{}),onCell:()=>({}),sortOrder:null,minWidth:50,render:(e,t)=>(0,n.Y)("span",{"data-test":"crud-delete-option",className:"text-primary",css:e=>(0,C.AH)`
              display: flex;
              justify-content: center;
              color: ${e.colorTextTertiary};
            `,children:(0,n.Y)(R.F.DeleteOutlined,{"aria-label":"Delete item",className:"pointer","data-test":"crud-delete-icon",role:"button",tabIndex:0,onClick:()=>this.deleteItem(t.id),iconSize:"l",iconColor:"inherit"})})}),i}render(){let{stickyHeader:e,emptyMessage:t=(0,p.t)("No items"),expandFieldset:a}=this.props,i=this.buildTableColumns(),r=Object.keys(this.state.expandedColumns).filter(e=>this.state.expandedColumns[e]),o=a?{expandedRowRender:e=>this.renderExpandableSection(e),rowExpandable:()=>!0,expandedRowKeys:r,onExpand:(e,t)=>{this.toggleExpand(t.id)}}:void 0;return(0,n.FD)(n.FK,{children:[(0,n.Y)(ep,{children:this.props.allowAddItem&&(0,n.Y)(em,{children:(0,n.FD)(N.$,{buttonSize:"small",buttonStyle:"secondary",onClick:this.onAddItem,"data-test":"add-item-button",children:[(0,n.Y)(R.F.PlusOutlined,{iconSize:"m","data-test":"crud-add-table-item"}),(0,p.t)("Add item")]})})}),(0,n.Y)(ea.Ay,{"data-test":"crud-table",columns:i,data:this.state.collectionArray,rowKey:e=>String(e.id),sticky:e,pagination:!1,onChange:this.handleTableChange,locale:{emptyText:t},css:e&&(0,C.AH)`
              height: 350px;
              overflow: auto;
            `,expandable:o,size:ea.QS.Middle,tableLayout:"auto"})]})}constructor(e){super(e);const{collection:t,collectionArray:a}=ef(e.collection);this.state={expandedColumns:{},collection:t,collectionArray:a,sortColumn:"",sort:0},this.onAddItem=this.onAddItem.bind(this),this.renderExpandableSection=this.renderExpandableSection.bind(this),this.getLabel=this.getLabel.bind(this),this.onFieldsetChange=this.onFieldsetChange.bind(this),this.changeCollection=this.changeCollection.bind(this),this.handleTableChange=this.handleTableChange.bind(this),this.buildTableColumns=this.buildTableColumns.bind(this),this.toggleExpand=this.toggleExpand.bind(this)}}var eb=a(31547);function ey(e,t,a,i,n,r,o){try{var l=e[r](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(i,n)}let ev=v.I4.div`
  align-items: center;
  display: flex;
  gap: ${({theme:e})=>e.sizeUnit}px;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2;
  }

  svg {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,eC=({datasourceId:e,charts:t,totalCount:a,onFetchCharts:i,addDangerToast:r})=>{let o=(0,l.useRef)(r),s=(0,l.useRef)(null),d=(0,l.useRef)(!1),[c,h]=(0,l.useState)(!1),[u,m]=(0,l.useState)(1),[f,g]=(0,l.useState)("changed_on_delta_humanized"),[b,y]=(0,l.useState)("desc"),v=(0,l.useCallback)((t=1,a=f,n=b)=>{var r;return(r=function*(){if(e){h(!0);try{yield i(t,25,a,n),m(t),g(a),y(n)}catch(e){o.current&&o.current((0,p.t)("Error fetching charts"))}finally{h(!1)}}},function(){var e=this,t=arguments;return new Promise(function(a,i){var n=r.apply(e,t);function o(e){ey(n,a,i,o,l,"next",e)}function l(e){ey(n,a,i,o,l,"throw",e)}o(void 0)})})()},[e,i,f,b]);(0,l.useEffect)(()=>{o.current=r},[r]),(0,l.useEffect)(()=>{let e;return d.current&&!c&&(e=requestAnimationFrame(()=>{var e;let t=null==(e=s.current)?void 0:e.querySelector(".ant-table-body");t&&t.scrollTo({top:0,behavior:"smooth"})})),d.current=c,()=>{void 0!==e&&cancelAnimationFrame(e)}},[c]);let _=(0,l.useCallback)(e=>{v(e)},[v]),x=(0,l.useCallback)(e=>{let t=e===f&&"desc"===b?"asc":"desc";v(1,e,t)},[v,f,b]),S=(0,l.useCallback)(e=>{(null==e?void 0:e.current)&&e.current!==u&&_(e.current)},[u,_]),Y=(0,l.useMemo)(()=>[{title:(0,p.t)("Chart"),dataIndex:"slice_name",key:"slice_name",render:(e,t)=>(0,n.FD)(ev,{children:[(0,n.FD)(H.Kt,{to:t.url,target:"_blank","data-test":`${t.slice_name}-usage-chart-title`,children:[t.certified_by&&(0,n.FD)(n.FK,{children:[(0,n.Y)($.T,{certifiedBy:t.certified_by,details:t.certification_details})," "]}),t.slice_name]}),t.description&&(0,n.Y)(et.I,{tooltip:t.description})]}),sorter:!0,sortOrder:"slice_name"===f?"asc"===b?"ascend":"descend":void 0,onHeaderCell:()=>({onClick:()=>x("slice_name"),style:{cursor:"pointer"}}),width:300},{title:(0,p.t)("Chart owners"),dataIndex:"owners",key:"owners",render:(e,t)=>(0,n.Y)(H.WM,{users:t.owners,maxCount:3}),sorter:!1,width:150},{title:(0,p.t)("Last modified"),dataIndex:"changed_on_delta_humanized",key:"changed_on_delta_humanized",render:(e,t)=>(0,n.Y)(H.UW,{date:t.changed_on_delta_humanized,user:t.changed_by||void 0}),sorter:!0,sortOrder:"changed_on_delta_humanized"===f?"asc"===b?"ascend":"descend":void 0,onHeaderCell:()=>({onClick:()=>x("changed_on_delta_humanized"),style:{cursor:"pointer"}}),width:160},{title:(0,p.t)("Dashboard usage"),dataIndex:"dashboards",key:"dashboards",render:(e,t)=>(0,n.Y)(eb.o,{dashboards:t.dashboards.map(e=>({id:e.id,dashboard_title:e.dashboard_title})),external:!0}),sorter:!1,width:200}],[x,f,b]);return(0,n.Y)("div",{ref:s,children:(0,n.Y)(ea.Ay,{sticky:!0,columns:Y,data:t,pagination:{current:u,total:a,pageSize:25,onChange:_,showSizeChanger:!1,size:"default"},loading:c,size:ea.QS.Middle,rowKey:e=>e.id?`chart-${e.id}`:`chart-${e.slice_name}`,tableLayout:"fixed",scroll:{y:293,x:"100%"},css:(0,C.AH)`
          .ant-table-pagination.ant-pagination {
            margin-bottom: 0;
          }
        `,locale:{emptyText:(0,p.t)("No items")},onChange:S})})};function e_(e,t,a,i,n,r,o){try{var l=e[r](o),s=l.value}catch(e){a(e);return}l.done?t(s):Promise.resolve(s).then(i,n)}function ex(e){return function(){var t=this,a=arguments;return new Promise(function(i,n){var r=e.apply(t,a);function o(e){e_(r,i,n,o,l,"next",e)}function l(e){e_(r,i,n,o,l,"throw",e)}o(void 0)})}}function eS(){return(eS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let eY=(0,u.a)(),ew=v.I4.div`
  .change-warning {
    margin: 16px 10px 0;
    color: ${({theme:e})=>e.colorWarning};
  }

  .change-warning .bold {
    font-weight: ${({theme:e})=>e.fontWeightStrong};
  }

  .form-group.has-feedback > .help-block {
    margin-top: 8px;
  }

  .form-group.form-group-md {
    margin-bottom: 8px;
  }
`,eA=v.I4.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,eD=(0,v.I4)(S.Ay)`
  overflow: visible;
  .ant-tabs-content-holder {
    overflow: visible;
  }
`,eT=(0,v.I4)(O.E)`
  .ant-badge-count {
    line-height: ${({theme:e})=>4*e.sizeUnit}px;
    height: ${({theme:e})=>4*e.sizeUnit}px;
    margin-left: ${({theme:e})=>e.sizeUnit}px;
  }
`,eE=v.I4.div`
  font-size: ${({theme:e})=>e.fontSizeSM}px;
  display: flex;
  align-items: center;
  a {
    padding: 0 10px;
  }
`,eF=v.I4.div`
  text-align: right;
  ${({theme:e})=>`margin-bottom: ${2*e.sizeUnit}px`}
`,ez=v.I4.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,eO=v.I4.div`
  .table > tbody > tr > td {
    vertical-align: middle;
  }

  .ant-tag {
    margin-top: ${({theme:e})=>e.sizeUnit}px;
  }
`,ek=v.I4.span`
  ${({theme:e})=>`
    margin-top: ${3*e.sizeUnit}px;
    margin-left: ${3*e.sizeUnit}px;
    button>span>:first-of-type {
      margin-right: 0;
    }
  `}
`,eI=(e,t)=>(0,n.Y)(A.A,{value:e,onChange:t}),e$=[{value:"STRING",label:(0,p.t)("STRING")},{value:"NUMERIC",label:(0,p.t)("NUMERIC")},{value:"DATETIME",label:(0,p.t)("DATETIME")},{value:"BOOLEAN",label:(0,p.t)("BOOLEAN")}],eL="SOURCE",eM=[{key:"physical",label:(0,p.t)("Physical (table or view)")},{key:"virtual",label:(0,p.t)("Virtual (SQL)")}],eq={};function eU({title:e,collection:t}){return(0,n.FD)("div",{css:{display:"flex",alignItems:"center"},"data-test":`collection-tab-${e}`,children:[e," ",(0,n.Y)(eT,{count:t?t.length:0,showZero:!0})]})}function eP({columns:e,datasource:t,onColumnsChange:a,onDatasourceChange:i,editableColumnName:r,showExpression:o,allowAddItem:l,allowEditDataType:s,itemGenerator:d,columnLabelTooltips:c}){return(0,n.Y)(eg,{tableColumns:(0,m.G7)(m.TO.EnableAdvancedDataTypes)?["column_name","advanced_data_type","type","is_dttm","main_dttm_col","filterable","groupby"]:["column_name","type","is_dttm","main_dttm_col","filterable","groupby"],sortColumns:(0,m.G7)(m.TO.EnableAdvancedDataTypes)?["column_name","advanced_data_type","type","is_dttm","main_dttm_col","filterable","groupby"]:["column_name","type","is_dttm","main_dttm_col","filterable","groupby"],allowDeletes:!0,allowAddItem:l,itemGenerator:d,collection:e,columnLabelTooltips:c,stickyHeader:!0,expandFieldset:(0,n.Y)(eK,{children:(0,n.FD)(eh,{compact:!0,children:[o&&(0,n.Y)(ed,{fieldKey:"expression",label:(0,p.t)("SQL expression"),control:(0,n.Y)(T.A,{language:"sql",offerEditInModal:!1,resize:"vertical"})}),(0,n.Y)(ed,{fieldKey:"verbose_name",label:(0,p.t)("Label"),control:(0,n.Y)(D.A,{controlId:"verbose_name",placeholder:(0,p.t)("Label")})}),(0,n.Y)(ed,{fieldKey:"description",label:(0,p.t)("Description"),control:(0,n.Y)(D.A,{controlId:"description",placeholder:(0,p.t)("Description")})}),s&&(0,n.Y)(ed,{fieldKey:"type",label:(0,p.t)("Data type"),control:(0,n.Y)(k.A,{ariaLabel:(0,p.t)("Data type"),options:e$,name:"type",allowNewOptions:!0,allowClear:!0})}),(0,m.G7)(m.TO.EnableAdvancedDataTypes)?(0,n.Y)(ed,{fieldKey:"advanced_data_type",label:(0,p.t)("Advanced data type"),control:(0,n.Y)(D.A,{controlId:"advanced_data_type",placeholder:(0,p.t)("Advanced Data type")})}):(0,n.Y)(n.FK,{}),(0,n.Y)(ed,{fieldKey:"python_date_format",label:(0,p.t)("Datetime format"),description:(0,n.FD)("div",{children:[(0,p.t)("The pattern of timestamp format. For strings use "),(0,n.Y)(I.o.Link,{href:"https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior",children:(0,p.t)("Python datetime string pattern")}),(0,p.t)(" expression which needs to adhere to the "),(0,n.Y)(I.o.Link,{href:"https://en.wikipedia.org/wiki/ISO_8601",children:(0,p.t)("ISO 8601")}),(0,p.t)(` standard to ensure that the lexicographical ordering
                      coincides with the chronological ordering. If the
                      timestamp format does not adhere to the ISO 8601 standard
                      you will need to define an expression and type for
                      transforming the string into a date or timestamp. Note
                      currently time zones are not supported. If time is stored
                      in epoch format, put \`epoch_s\` or \`epoch_ms\`. If no pattern
                      is specified we fall back to using the optional defaults on a per
                      database/column name level via the extra parameter.`)]}),control:(0,n.Y)(D.A,{controlId:"python_date_format",placeholder:"%Y-%m-%d"})}),(0,n.Y)(ed,{fieldKey:"certified_by",label:(0,p.t)("Certified By"),description:(0,p.t)("Person or group that has certified this metric"),control:(0,n.Y)(D.A,{controlId:"certified",placeholder:(0,p.t)("Certified by")})}),(0,n.Y)(ed,{fieldKey:"certification_details",label:(0,p.t)("Certification details"),description:(0,p.t)("Details of the certification"),control:(0,n.Y)(D.A,{controlId:"certificationDetails",placeholder:(0,p.t)("Certification details")})})]})}),columnLabels:(0,m.G7)(m.TO.EnableAdvancedDataTypes)?{column_name:(0,p.t)("Column"),advanced_data_type:(0,p.t)("Advanced data type"),type:(0,p.t)("Data type"),groupby:(0,p.t)("Is dimension"),is_dttm:(0,p.t)("Is temporal"),main_dttm_col:(0,p.t)("Default datetime"),filterable:(0,p.t)("Is filterable")}:{column_name:(0,p.t)("Column"),type:(0,p.t)("Data type"),groupby:(0,p.t)("Is dimension"),is_dttm:(0,p.t)("Is temporal"),main_dttm_col:(0,p.t)("Default datetime"),filterable:(0,p.t)("Is filterable")},onChange:a,itemRenderers:(0,m.G7)(m.TO.EnableAdvancedDataTypes)?{column_name:(e,t,a,i)=>r?(0,n.FD)(ez,{children:[i.is_certified&&(0,n.Y)($.T,{certifiedBy:i.certified_by,details:i.certification_details}),(0,n.Y)(L.z,{canEdit:!0,title:e,onSaveTitle:t})]}):(0,n.FD)(ez,{children:[i.is_certified&&(0,n.Y)($.T,{certifiedBy:i.certified_by,details:i.certification_details}),e]}),main_dttm_col:(e,a,r,o)=>{let l=t.main_dttm_col===o.column_name,s=!(null==o?void 0:o.is_dttm);return(0,n.Y)(h.s,{"aria-label":(0,p.t)("Set %s as default datetime column",o.column_name),"data-test":`radio-default-dttm-${o.column_name}`,checked:l,disabled:s,onChange:()=>i(eS({},t,{main_dttm_col:o.column_name}))})},type:e=>e?(0,n.Y)(M.JU,{children:e}):null,advanced_data_type:e=>(0,n.Y)(M.JU,{onChange:a,children:e}),is_dttm:eI,filterable:eI,groupby:eI}:{column_name:(e,t,a,i)=>r?(0,n.FD)(ez,{children:[i.is_certified&&(0,n.Y)($.T,{certifiedBy:i.certified_by,details:i.certification_details}),(0,n.Y)(D.A,{value:e,onChange:t})]}):(0,n.FD)(ez,{children:[i.is_certified&&(0,n.Y)($.T,{certifiedBy:i.certified_by,details:i.certification_details}),e]}),main_dttm_col:(e,a,r,o)=>{let l=t.main_dttm_col===o.column_name,s=!(null==o?void 0:o.is_dttm);return(0,n.Y)(h.s,{"aria-label":(0,p.t)("Set %s as default datetime column",o.column_name),"data-test":`radio-default-dttm-${o.column_name}`,checked:l,disabled:s,onChange:()=>i(eS({},t,{main_dttm_col:o.column_name}))})},type:e=>e?(0,n.Y)(M.JU,{children:e}):null,is_dttm:eI,filterable:eI,groupby:eI}})}function eR({label:e,formElement:t}){return(0,n.FD)("div",{children:[(0,n.Y)("div",{children:(0,n.Y)("strong",{children:e})}),(0,n.Y)("div",{children:t})]})}function eK({children:e}){return(0,n.Y)(q.Z,{padded:!0,style:{backgroundColor:v.vP.theme.colorBgLayout},children:e})}eM.forEach(e=>{eq[e.key]=e}),eU.propTypes={title:d().string,collection:d().array},eP.propTypes={columns:d().array.isRequired,datasource:d().object.isRequired,onColumnsChange:d().func.isRequired,onDatasourceChange:d().func.isRequired,editableColumnName:d().bool,showExpression:d().bool,allowAddItem:d().bool,allowEditDataType:d().bool,itemGenerator:d().func},eP.defaultProps={editableColumnName:!1,showExpression:!1,allowAddItem:!1,allowEditDataType:!1,itemGenerator:()=>({column_name:(0,p.t)("<new column>"),filterable:!0,groupby:!0})},eR.propTypes={label:d().string,formElement:d().node},eK.propTypes={children:d().node};let ej={datasource:d().object.isRequired,onChange:d().func,addSuccessToast:d().func.isRequired,addDangerToast:d().func.isRequired,setIsEditing:d().func};function eN({datasource:e,onChange:t}){let a=(0,l.useCallback)((e="",t,a)=>{let i=o().encode({filter:e,page:t,page_size:a});return f.A.get({endpoint:`/api/v1/dataset/related/owners?q=${i}`}).then(e=>({data:e.json.result.filter(e=>e.extra.active).map(e=>({value:e.value,label:e.text})),totalCount:e.json.count}))},[]);return(0,n.Y)(U.A,{ariaLabel:(0,p.t)("Select owners"),mode:"multiple",name:"owners",value:e.owners,options:a,onChange:t,header:(0,n.Y)(P.l,{children:(0,p.t)("Owners")}),allowClear:!0})}let eQ=null!=(i=eY.get("sqleditor.extension.resultTable"))?i:H.TR;class eH extends l.PureComponent{onChange(){let{datasourceType:e,datasource:t}=this.state,a=e===eq.physical.key?"":t.sql,i=eS({},this.state.datasource,{sql:a,columns:[...this.state.databaseColumns,...this.state.calculatedColumns]});this.props.onChange(i,this.state.errors)}onChangeEditMode(){this.props.setIsEditing(!this.state.isEditMode),this.setState(e=>({isEditMode:!e.isEditMode}))}onDatasourceChange(e,t=this.validateAndChange){this.setState({datasource:e},t)}onDatasourcePropChange(e,t){if(void 0===t)return;let a=eS({},this.state.datasource,{[e]:t});this.setState(a=>({datasource:eS({},a.datasource,{[e]:t})}),"table_name"===e?this.onDatasourceChange(a,this.tableChangeAndSyncMetadata):this.onDatasourceChange(a,this.validateAndChange))}onDatasourceTypeChange(e){this.setState({datasourceType:e},this.onChange)}setColumns(e){this.setState(e,this.validateAndChange)}validateAndChange(){this.validate(this.onChange)}onQueryRun(){return ex(function*(){this.props.runQuery({client_id:this.props.clientId,database_id:this.state.datasource.database.id,runAsync:!1,catalog:this.state.datasource.catalog,schema:this.state.datasource.schema,sql:this.state.datasource.sql,tmp_table_name:"",select_as_cta:!1,ctas_method:"TABLE",queryLimit:25,expand_data:!0})}).call(this)}onQueryFormat(){return ex(function*(){let{datasource:e}=this.state;if(e.sql&&this.state.isEditMode)try{let t=yield this.props.formatQuery(e.sql);this.onDatasourcePropChange("sql",t.json.result),this.props.addSuccessToast((0,p.t)("SQL was formatted"))}catch(a){let{error:e,statusText:t}=yield(0,g.h4)(a);this.props.addDangerToast(e||t||(0,p.t)("An error occurred while formatting SQL"))}}).call(this)}getSQLLabUrl(){let e=new URLSearchParams({dbid:this.state.datasource.database.id,sql:this.state.datasource.sql,name:this.state.datasource.datasource_name,schema:this.state.datasource.schema,autorun:!0,isDataset:!0});return`/sqllab/?${e.toString()}`}openOnSqlLab(){window.open(this.getSQLLabUrl(),"_blank","noopener,noreferrer")}tableChangeAndSyncMetadata(){this.validate(()=>{this.syncMetadata(),this.onChange()})}formatSql(){return ex(function*(){let{datasource:e}=this.state;if(e.sql)try{let t=yield f.A.post({endpoint:"/api/v1/sql/format",body:JSON.stringify({sql:e.sql}),headers:{"Content-Type":"application/json"}});this.onDatasourcePropChange("sql",t.json.result),this.props.addSuccessToast((0,p.t)("SQL was formatted"))}catch(a){let{error:e,statusText:t}=yield(0,g.h4)(a);this.props.addDangerToast(e||t||(0,p.t)("An error occurred while formatting SQL"))}}).call(this)}syncMetadata(){return ex(function*(){let{datasource:e}=this.state;this.setState({metadataLoading:!0});try{var t,a,i;let n,r,l,s=yield(t=function*(){var t,a;let i={datasource_type:e.type||e.datasource_type,database_name:(null==(t=e.database)?void 0:t.database_name)||(null==(a=e.database)?void 0:a.name),catalog_name:e.catalog,schema_name:e.schema,table_name:e.table_name,normalize_columns:e.normalize_columns,always_filter_main_dttm:e.always_filter_main_dttm};Object.entries(i).forEach(([e,t])=>{void 0===t&&(i[e]=null)});let n=`/datasource/external_metadata_by_name/?q=${o().encode_uri(i)}`,{json:r}=yield f.A.get({endpoint:n});return r},function(){var e=this,a=arguments;return new Promise(function(i,n){var r=t.apply(e,a);function o(e){en(r,i,n,o,l,"next",e)}function l(e){en(r,i,n,o,l,"throw",e)}o(void 0)})})(),d=(a=e.columns,i=this.props.addSuccessToast,n=s.map(e=>e.column_name),r=a.reduce((e,t)=>(e[t.column_name]=t,e),{}),l={added:[],modified:[],removed:a.filter(e=>!(e.expression||n.includes(e.column_name))).map(e=>e.column_name),finalColumns:[]},s.forEach(e=>{let t=r[e.column_name];t?t.type!==e.type||t.is_dttm!==e.is_dttm?(l.finalColumns.push(er({},t,{type:e.type,is_dttm:t.is_dttm||e.is_dttm})),l.modified.push(e.column_name)):l.finalColumns.push(t):(l.finalColumns.push({id:(0,ee.Ak)(),column_name:e.column_name,type:e.type,groupby:!0,filterable:!0,is_dttm:e.is_dttm}),l.added.push(e.column_name))}),a.filter(e=>e.expression).forEach(e=>{l.finalColumns.push(e)}),l.modified.length&&i((0,p.tn)("Modified 1 column in the virtual dataset","Modified %s columns in the virtual dataset",l.modified.length,l.modified.length)),l.removed.length&&i((0,p.tn)("Removed 1 column from the virtual dataset","Removed %s columns from the virtual dataset",l.removed.length,l.removed.length)),l.added.length&&i((0,p.tn)("Added 1 new column to the virtual dataset","Added %s new columns to the virtual dataset",l.added.length,l.added.length)),l);this.setColumns({databaseColumns:d.finalColumns.filter(e=>!e.expression)}),(0,J.SM)(e.id),this.props.addSuccessToast((0,p.t)("Metadata has been synced")),this.setState({metadataLoading:!1})}catch(a){let{error:e,statusText:t}=yield(0,g.h4)(a);this.props.addDangerToast(e||t||(0,p.t)("An error has occurred")),this.setState({metadataLoading:!1})}}).call(this)}fetchUsageData(e=1,t=25,a="changed_on_delta_humanized",i="desc"){return ex(function*(){let{datasource:n}=this.state;try{let r=o().encode({columns:["slice_name","url","certified_by","certification_details","description","owners.first_name","owners.last_name","owners.id","changed_on_delta_humanized","changed_on","changed_by.first_name","changed_by.last_name","changed_by.id","dashboards.id","dashboards.dashboard_title","dashboards.url"],filters:[{col:"datasource_id",opr:"eq",value:n.id}],order_column:a,order_direction:i,page:e-1,page_size:t}),{json:l={}}=yield f.A.get({endpoint:`/api/v1/chart/?q=${r}`}),s=(null==l?void 0:l.result)||[],d=(null==l?void 0:l.ids)||[],c=s.map((e,t)=>eS({},e,{id:d[t]}));return this.setState({usageCharts:c,usageChartsCount:(null==l?void 0:l.count)||0}),{charts:c,count:(null==l?void 0:l.count)||0,ids:d}}catch(a){let{error:e,statusText:t}=yield(0,g.h4)(a);return this.props.addDangerToast(e||t||(0,p.t)("An error occurred while fetching usage data")),this.setState({usageCharts:[],usageChartsCount:0}),{charts:[],count:0,ids:[]}}}).call(this)}findDuplicates(e,t){let a={},i=[];return e.forEach(e=>{let n=t(e);n in a?i.push(n):a[n]=null}),i}validate(e){let t,a=[],{datasource:i}=this.state;t=this.findDuplicates(i.columns,e=>e.column_name),a=a.concat(t.map(e=>(0,p.t)("Column name [%s] is duplicated",e))),t=this.findDuplicates(i.metrics,e=>e.metric_name),a=a.concat(t.map(e=>(0,p.t)("Metric name [%s] is duplicated",e)));let n=this.state.calculatedColumns.filter(e=>!e.expression&&!e.json);a=a.concat(n.map(e=>(0,p.t)("Calculated column [%s] requires an expression",e.column_name)));try{var r;null==(r=this.state.datasource.metrics)||r.forEach(e=>{var t;return(null==(t=e.currency)?void 0:t.symbol)&&new Intl.NumberFormat("en-US",{style:"currency",currency:e.currency.symbol})})}catch(e){a=a.concat([(0,p.t)("Invalid currency code in saved metrics")])}this.setState({errors:a},e)}handleTabSelect(e){this.setState({activeTabKey:e})}sortMetrics(e){return e.sort(({id:e},{id:t})=>t-e)}renderSettingsFieldset(){let{datasource:e}=this.state;return(0,n.FD)(eh,{title:(0,p.t)("Basic"),item:e,onChange:this.onDatasourceChange,children:[(0,n.Y)(ed,{fieldKey:"description",label:(0,p.t)("Description"),control:(0,n.Y)(T.A,{language:"markdown",offerEditInModal:!1,resize:"vertical"})}),(0,n.Y)(ed,{fieldKey:"default_endpoint",label:(0,p.t)("Default URL"),description:(0,n.FD)(n.FK,{children:[(0,p.t)("Default URL to redirect to when accessing from the dataset list page. Accepts relative URLs such as")," ",(0,n.FD)(I.o.Text,{code:!0,children:["/superset/dashboard/","{id}","/"]})]}),control:(0,n.Y)(D.A,{controlId:"default_endpoint"})}),(0,n.Y)(ed,{inline:!0,fieldKey:"filter_select_enabled",label:(0,p.t)("Autocomplete filters"),description:(0,p.t)("Whether to populate autocomplete filters options"),control:(0,n.Y)(A.A,{})}),this.state.isSqla&&(0,n.Y)(ed,{fieldKey:"fetch_values_predicate",label:(0,p.t)("Autocomplete query predicate"),description:(0,p.t)('When using "Autocomplete filters", this can be used to improve performance of the query fetching the values. Use this option to apply a predicate (WHERE clause) to the query selecting the distinct values from the table. Typically the intent would be to limit the scan by applying a relative time filter on a partitioned or indexed time-related field.'),control:(0,n.Y)(T.A,{language:"sql",controlId:"fetch_values_predicate",minLines:5,resize:"vertical"})}),this.state.isSqla&&(0,n.Y)(ed,{fieldKey:"extra",label:(0,p.t)("Extra"),description:(0,p.t)('Extra data to specify table metadata. Currently supports metadata of the format: `{ "certification": { "certified_by": "Data Platform Team", "details": "This table is the source of truth." }, "warning_markdown": "This is a warning." }`.'),control:(0,n.Y)(T.A,{controlId:"extra",language:"json",offerEditInModal:!1,resize:"vertical"})}),(0,n.Y)(eN,{datasource:e,onChange:t=>{this.onDatasourceChange(eS({},e,{owners:t}))}})]})}renderAdvancedFieldset(){let{datasource:e}=this.state;return(0,n.FD)(eh,{title:(0,p.t)("Advanced"),item:e,onChange:this.onDatasourceChange,children:[(0,n.Y)(ed,{fieldKey:"cache_timeout",label:(0,p.t)("Cache timeout"),description:(0,p.t)("The duration of time in seconds before the cache is invalidated. Set to -1 to bypass the cache."),control:(0,n.Y)(D.A,{controlId:"cache_timeout"})}),(0,n.Y)(ed,{fieldKey:"offset",label:(0,p.t)("Hours offset"),control:(0,n.Y)(D.A,{controlId:"offset"}),description:(0,p.t)("The number of hours, negative or positive, to shift the time column. This can be used to move UTC time to local time.")}),this.state.isSqla&&(0,n.Y)(ed,{fieldKey:"template_params",label:(0,p.t)("Template parameters"),description:(0,p.t)("A set of parameters that become available in the query using Jinja templating syntax"),control:(0,n.Y)(D.A,{controlId:"template_params"})}),(0,n.Y)(ed,{inline:!0,fieldKey:"normalize_columns",label:(0,p.t)("Normalize column names"),description:(0,p.t)("Allow column names to be changed to case insensitive format, if supported (e.g. Oracle, Snowflake)."),control:(0,n.Y)(A.A,{controlId:"normalize_columns"})}),(0,n.Y)(ed,{inline:!0,fieldKey:"always_filter_main_dttm",label:(0,p.t)("Always filter main datetime column"),description:(0,p.t)("When the secondary temporal columns are filtered, apply the same filter to the main datetime column."),control:(0,n.Y)(A.A,{controlId:"always_filter_main_dttm"})})]})}renderSpatialTab(){let{datasource:e}=this.state,{spatials:t,all_cols:a}=e;return{key:"SPATIAL",label:(0,n.Y)(eU,{collection:t,title:(0,p.t)("Spatial")}),children:(0,n.Y)(eg,{tableColumns:["name","config"],onChange:this.onDatasourcePropChange.bind(this,"spatials"),itemGenerator:()=>({name:(0,p.t)("<new spatial>"),type:(0,p.t)("<no type>"),config:null}),collection:t,allowDeletes:!0,itemRenderers:{name:(e,t)=>(0,n.Y)(L.z,{canEdit:!0,title:e,onSaveTitle:t}),config:(e,t)=>(0,n.Y)(E.A,{value:e,onChange:t,choices:a})}})}}renderOpenInSqlLabLink(e=!1){return(0,n.Y)("a",{href:this.getSQLLabUrl(),target:"_blank",rel:"noopener noreferrer",css:t=>(0,C.AH)`
          color: ${e?t.colorErrorText:t.colorText};
          font-size: ${t.fontSizeSM}px;
          text-decoration: underline;
        `,children:(0,p.t)("Open in SQL lab")})}renderSourceFieldset(){var e,t,a,i,r,o,l,s,d,c,u,m;let{datasource:f}=this.state;return(0,n.FD)("div",{children:[(0,n.FD)(eE,{children:[(0,n.Y)("span",{css:e=>(0,C.AH)`
              color: ${e.colorTextTertiary};
            `,role:"button",tabIndex:0,onClick:this.onChangeEditMode,children:this.state.isEditMode?(0,n.Y)(R.F.UnlockOutlined,{iconSize:"xl",css:e=>(0,C.AH)`
                  margin: auto ${e.sizeUnit}px auto 0;
                `}):(0,n.Y)(R.F.LockOutlined,{iconSize:"xl",css:e=>({margin:`auto ${e.sizeUnit}px auto 0`})})}),!this.state.isEditMode&&(0,n.Y)("div",{children:(0,p.t)("Click the lock to make changes.")}),this.state.isEditMode&&(0,n.Y)("div",{children:(0,p.t)("Click the lock to prevent further changes.")})]}),(0,n.Y)("div",{css:e=>(0,C.AH)`
            margin-top: ${3*e.sizeUnit}px;
          `,children:eM.map(e=>(0,n.Y)(h.s,{value:e.key,inline:!0,onChange:this.onDatasourceTypeChange.bind(this,e.key),checked:this.state.datasourceType===e.key,disabled:!this.state.isEditMode,children:e.label},e.key))}),(0,n.Y)(K.c,{}),(0,n.FD)(eh,{item:f,onChange:this.onDatasourceChange,compact:!0,children:[this.state.datasourceType===eq.virtual.key&&(0,n.Y)("div",{children:this.state.isSqla&&(0,n.FD)(n.FK,{children:[(0,n.FD)(j.Col,{xs:24,md:12,children:[(0,n.Y)(ed,{fieldKey:"databaseSelector",label:(0,p.t)("Virtual"),control:(0,n.Y)("div",{css:{marginTop:8},children:(0,n.Y)(Z.R,{db:null==f?void 0:f.database,catalog:f.catalog,schema:f.schema,onCatalogChange:e=>this.state.isEditMode&&this.onDatasourcePropChange("catalog",e),onSchemaChange:e=>this.state.isEditMode&&this.onDatasourcePropChange("schema",e),onDbChange:e=>this.state.isEditMode&&this.onDatasourcePropChange("database",e),formMode:!1,handleError:this.props.addDangerToast,readOnly:!this.state.isEditMode})})}),(0,n.Y)("div",{css:{width:"calc(100% - 34px)",marginTop:-16},children:(0,n.Y)(ed,{fieldKey:"table_name",label:(0,p.t)("Name"),control:(0,n.Y)(D.A,{controlId:"table_name",onChange:e=>{this.onDatasourcePropChange("table_name",e)},placeholder:(0,p.t)("Dataset name"),disabled:!this.state.isEditMode})})})]}),(0,n.Y)(ed,{fieldKey:"sql",label:(0,p.t)("SQL"),description:(0,p.t)("When specifying SQL, the datasource acts as a view. Superset will use this statement as a subquery while grouping and filtering on the generated parent queries.If changes are made to your SQL query, columns in your dataset will be synced when saving the dataset."),control:(null==(e=this.props.database)?void 0:e.isLoading)?(0,n.FD)(n.FK,{children:[this.renderSqlEditorOverlay(),(0,n.Y)(T.A,{hotkeys:[{name:"formatQuery",key:"ctrl+shift+f",descr:(0,p.t)("Format SQL query"),func:()=>{this.onQueryFormat()}}],language:"sql",offerEditInModal:!1,minLines:10,maxLines:1/0,readOnly:!this.state.isEditMode,resize:"both"})]}):(0,n.Y)(T.A,{css:e=>(0,C.AH)`
                            margin-top: ${3*e.sizeUnit}px;
                          `,hotkeys:[{name:"formatQuery",key:"ctrl+shift+f",descr:(0,p.t)("Format SQL query"),func:()=>{this.onQueryFormat()}}],language:"sql",offerEditInModal:!1,minLines:10,maxLines:1/0,readOnly:!this.state.isEditMode,resize:"both"}),additionalControl:(0,n.FD)("div",{css:(0,C.AH)`
                          position: absolute;
                          right: 0;
                          top: 0;
                          z-index: 2;
                          display: flex;
                        `,children:[(0,n.Y)(N.$,{disabled:null==(t=this.props.database)?void 0:t.isLoading,tooltip:(0,p.t)("Open SQL Lab in a new tab"),buttonStyle:"secondary",onClick:()=>{this.openOnSqlLab()},icon:(0,n.Y)(R.F.ExportOutlined,{iconSize:"s"})}),(0,n.Y)(N.$,{disabled:null==(a=this.props.database)?void 0:a.isLoading,tooltip:(0,p.t)("Run query"),buttonStyle:"primary",onClick:()=>{this.onQueryRun()},icon:(0,n.Y)(R.F.CaretRightFilled,{iconSize:"s"})})]})}),(null==(i=this.props.database)?void 0:i.queryResult)&&(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{css:e=>(0,C.AH)`
                          margin-bottom: ${e.sizeUnit}px;
                        `,children:[(0,n.Y)("span",{css:e=>(0,C.AH)`
                            color: ${e.colorText};
                            font-size: ${e.fontSizeSM}px;
                          `,children:(0,p.t)("In this view you can preview the first 25 rows. ")}),this.renderOpenInSqlLabLink(),(0,n.Y)("span",{css:e=>(0,C.AH)`
                            color: ${e.colorText};
                            font-size: ${e.fontSizeSM}px;
                          `,children:(0,p.t)(" to see details.")})]}),(0,n.Y)(eQ,{data:null==(r=this.props.database)?void 0:r.queryResult.data,queryId:null==(o=this.props.database)?void 0:o.queryResult.query.id,orderedColumnKeys:null==(l=this.props.database)?void 0:l.queryResult.columns.map(e=>e.column_name),expandedColumns:null==(s=this.props.database)?void 0:s.queryResult.expandedColumns,height:300,allowHTML:!0})]}),(null==(d=this.props.database)?void 0:d.error)&&this.renderSqlErrorMessage()]})}),this.state.datasourceType===eq.physical.key&&(0,n.Y)(j.Col,{xs:24,md:12,children:this.state.isSqla&&(0,n.Y)(ed,{fieldKey:"tableSelector",label:(0,p.t)("Physical"),control:(0,n.Y)("div",{css:{marginTop:8},children:(0,n.Y)(w.Ay,{clearable:!1,database:eS({},f.database,{database_name:(null==(c=f.database)?void 0:c.database_name)||(null==(u=f.database)?void 0:u.name)}),dbId:null==(m=f.database)?void 0:m.id,handleError:this.props.addDangerToast,catalog:f.catalog,schema:f.schema,sqlLabMode:!1,tableValue:f.table_name,onCatalogChange:this.state.isEditMode?e=>this.onDatasourcePropChange("catalog",e):void 0,onSchemaChange:this.state.isEditMode?e=>this.onDatasourcePropChange("schema",e):void 0,onDbChange:this.state.isEditMode?e=>this.onDatasourcePropChange("database",e):void 0,onTableSelectChange:this.state.isEditMode?e=>this.onDatasourcePropChange("table_name",e):void 0,readOnly:!this.state.isEditMode})}),description:(0,p.t)("The pointer to a physical table (or view). Keep in mind that the chart is associated to this Superset logical table, and this logical table points the physical table referenced here.")})})]})]})}renderErrors(){return this.state.errors.length>0?(0,n.Y)(_.F,{css:e=>({marginBottom:4*e.sizeUnit}),type:"error",message:(0,n.Y)(n.FK,{children:this.state.errors.map(e=>(0,n.Y)("div",{children:e},e))})}):null}renderMetricCollection(){let{datasource:e}=this.state,{metrics:t}=e,a=(null==t?void 0:t.length)?this.sortMetrics(t):[];return(0,n.Y)(eg,{tableColumns:["metric_name","verbose_name","expression"],sortColumns:["metric_name","verbose_name","expression"],columnLabels:{metric_name:(0,p.t)("Metric Key"),verbose_name:(0,p.t)("Label"),expression:(0,p.t)("SQL expression")},columnLabelTooltips:{metric_name:(0,p.t)("This field is used as a unique identifier to attach the metric to charts. It is also used as the alias in the SQL query.")},expandFieldset:(0,n.Y)(eK,{children:(0,n.FD)(eh,{compact:!0,children:[(0,n.Y)(ed,{fieldKey:"description",label:(0,p.t)("Description"),control:(0,n.Y)(D.A,{controlId:"description",placeholder:(0,p.t)("Description")})}),(0,n.Y)(ed,{fieldKey:"d3format",label:(0,p.t)("D3 format"),control:(0,n.Y)(D.A,{controlId:"d3format",placeholder:"%y/%m/%d"})}),(0,n.Y)(ed,{fieldKey:"currency",label:(0,p.t)("Metric currency"),control:(0,n.Y)(z.A,{currencySelectOverrideProps:{placeholder:(0,p.t)("Select or type currency symbol")},symbolSelectAdditionalStyles:(0,C.AH)`
                      max-width: 30%;
                    `})}),(0,n.Y)(ed,{label:(0,p.t)("Certified by"),fieldKey:"certified_by",description:(0,p.t)("Person or group that has certified this metric"),control:(0,n.Y)(D.A,{controlId:"certified_by",placeholder:(0,p.t)("Certified by")})}),(0,n.Y)(ed,{label:(0,p.t)("Certification details"),fieldKey:"certification_details",description:(0,p.t)("Details of the certification"),control:(0,n.Y)(D.A,{controlId:"certification_details",placeholder:(0,p.t)("Certification details")})}),(0,n.Y)(ed,{label:(0,p.t)("Warning"),fieldKey:"warning_markdown",description:(0,p.t)("Optional warning about use of this metric"),control:(0,n.Y)(T.A,{controlId:"warning_markdown",language:"markdown",offerEditInModal:!1,resize:"vertical"})})]})}),collection:a,allowAddItem:!0,onChange:this.onDatasourcePropChange.bind(this,"metrics"),itemGenerator:()=>({metric_name:(0,p.t)("<new metric>"),verbose_name:"",expression:""}),itemCellProps:{expression:()=>({width:"240px"})},itemRenderers:{metric_name:(e,t,a,i)=>(0,n.FD)(eA,{children:[i.is_certified&&(0,n.Y)($.T,{certifiedBy:i.certified_by,details:i.certification_details}),i.warning_markdown&&(0,n.Y)(Y.A,{warningMarkdown:i.warning_markdown}),(0,n.Y)(L.z,{canEdit:!0,title:e,onSaveTitle:t,maxWidth:300})]}),verbose_name:(e,t)=>(0,n.Y)(D.A,{canEdit:!0,value:e,onChange:t}),expression:(e,t)=>(0,n.Y)(T.A,{canEdit:!0,initialValue:e,onChange:t,extraClasses:["datasource-sql-expression"],language:"sql",offerEditInModal:!1,minLines:5,textAreaStyles:{minWidth:"200px",maxWidth:"450px"},resize:"both"}),description:(e,t,a)=>(0,n.Y)(eR,{label:a,formElement:(0,n.Y)(D.A,{value:e,onChange:t})}),d3format:(e,t,a)=>(0,n.Y)(eR,{label:a,formElement:(0,n.Y)(D.A,{value:e,onChange:t})})},allowDeletes:!0,stickyHeader:!0})}render(){let{datasource:e,activeTabKey:t}=this.state,{metrics:a}=e,i=(null==a?void 0:a.length)?this.sortMetrics(a):[],{theme:r}=this.props;return(0,n.FD)(ew,{"data-test":"datasource-editor",children:[this.renderErrors(),(0,n.Y)(_.F,{css:e=>({marginBottom:4*e.sizeUnit}),type:"warning",message:(0,n.FD)(n.FK,{children:[" ",(0,n.FD)("strong",{children:[(0,p.t)("Be careful.")," "]}),(0,p.t)("Changing these settings will affect all charts using this dataset, including charts owned by other people.")]})}),(0,n.Y)(eD,{id:"table-tabs","data-test":"edit-dataset-tabs",onChange:this.handleTabSelect,defaultActiveKey:t,items:[{key:eL,label:(0,p.t)("Source"),children:this.renderSourceFieldset(r)},{key:"METRICS",label:(0,n.Y)(eU,{collection:i,title:(0,p.t)("Metrics")}),children:this.renderMetricCollection()},{key:"COLUMNS",label:(0,n.Y)(eU,{collection:this.state.databaseColumns,title:(0,p.t)("Columns")}),children:(0,n.FD)(eO,{children:[(0,n.Y)(eF,{children:(0,n.Y)(ek,{children:(0,n.FD)(N.$,{buttonSize:"small",buttonStyle:"tertiary",onClick:this.syncMetadata,className:"sync-from-source",disabled:this.state.isEditMode,children:[(0,n.Y)(R.F.DatabaseOutlined,{iconSize:"m"}),(0,p.t)("Sync columns from source")]})})}),(0,n.Y)(eP,{className:"columns-table",columns:this.state.databaseColumns,datasource:e,onColumnsChange:e=>this.setColumns({databaseColumns:e}),onDatasourceChange:this.onDatasourceChange}),this.state.metadataLoading&&(0,n.Y)(Q.R,{})]})},{key:"CALCULATED_COLUMNS",label:(0,n.Y)(eU,{collection:this.state.calculatedColumns,title:(0,p.t)("Calculated columns")}),children:(0,n.Y)(eO,{children:(0,n.Y)(eP,{columns:this.state.calculatedColumns,onColumnsChange:e=>this.setColumns({calculatedColumns:e}),columnLabelTooltips:{column_name:(0,p.t)("This field is used as a unique identifier to attach the calculated dimension to charts. It is also used as the alias in the SQL query.")},onDatasourceChange:this.onDatasourceChange,datasource:e,editableColumnName:!0,showExpression:!0,allowAddItem:!0,allowEditDataType:!0,itemGenerator:()=>({column_name:(0,p.t)("<new column>"),filterable:!0,groupby:!0,expression:(0,p.t)("<enter SQL expression here>"),expanded:!0})})})},{key:"USAGE",label:(0,n.Y)(eU,{collection:{length:this.state.usageChartsCount},title:(0,p.t)("Usage")}),children:(0,n.Y)(eO,{children:(0,n.Y)(eC,{datasourceId:e.id,charts:this.state.usageCharts,totalCount:this.state.usageChartsCount,onFetchCharts:this.fetchUsageData,addDangerToast:this.props.addDangerToast})})},{key:"SETTINGS",label:(0,p.t)("Settings"),children:(0,n.FD)(j.Row,{gutter:16,children:[(0,n.Y)(j.Col,{xs:24,md:12,children:(0,n.Y)(eK,{children:this.renderSettingsFieldset()})}),(0,n.Y)(j.Col,{xs:24,md:12,children:(0,n.Y)(eK,{children:this.renderAdvancedFieldset()})})]})}]})]})}componentDidUpdate(e){if(this.props.datasource!==e.datasource){let e=this.props.datasource.columns.filter(e=>!!e.expression),t=this.state.calculatedColumns;if(e.length===t.length){let a=[],i=new Set;t.forEach(t=>{let n=t.id||t.column_name,r=e.find(e=>(e.id||e.column_name)===n);r&&(a.push(r),i.add(n))}),e.forEach(e=>{let t=e.id||e.column_name;i.has(t)||a.push(e)}),this.setState({calculatedColumns:a,databaseColumns:this.props.datasource.columns.filter(e=>!e.expression)})}}}componentDidMount(){X().bind("ctrl+shift+f",e=>(e.preventDefault(),this.state.isEditMode&&this.onQueryFormat(),!1)),this.fetchUsageData()}componentWillUnmount(){X().unbind("ctrl+shift+f"),this.props.resetQuery()}constructor(e){var t;super(e),this.renderSqlEditorOverlay=()=>(0,n.Y)("div",{css:e=>(0,C.AH)`
        position: absolute;
        background: ${e.colorBgLayout};
        align-items: center;
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
      `,children:(0,n.FD)("div",{children:[(0,n.Y)(Q.R,{position:"inline-centered"}),(0,n.Y)("span",{css:e=>(0,C.AH)`
            display: block;
            margin: ${4*e.sizeUnit}px auto;
            width: fit-content;
            color: ${e.colorText};
          `,children:(0,p.t)("We are working on your query")})]})}),this.renderSqlErrorMessage=()=>{var e;return(0,n.FD)("span",{css:e=>(0,C.AH)`
        font-size: ${e.fontSizeSM}px;
        color: ${e.colorErrorText};
      `,children:[(null==(e=this.props.database)?void 0:e.error)&&(0,p.t)("Error executing query. "),this.renderOpenInSqlLabLink(!0),(0,p.t)(" to check for details.")]})},this.state={datasource:eS({},e.datasource,{owners:e.datasource.owners.map(e=>({value:e.value||e.id,label:e.label||`${e.first_name} ${e.last_name}`})),metrics:null==(t=e.datasource.metrics)?void 0:t.map(e=>{let{certified_by:t,certification_details:a}=e,{certification:{details:i,certified_by:n}={},warning_markdown:r}=JSON.parse(e.extra||"{}")||{};return eS({},e,{certification_details:a||i,warning_markdown:r||"",certified_by:n||t})})}),errors:[],isSqla:"table"===e.datasource.datasource_type||"table"===e.datasource.type,isEditMode:!1,databaseColumns:e.datasource.columns.filter(e=>!e.expression),calculatedColumns:e.datasource.columns.filter(e=>!!e.expression),metadataLoading:!1,activeTabKey:eL,datasourceType:e.datasource.sql?eq.virtual.key:eq.physical.key,usageCharts:[],usageChartsCount:0},this.onChange=this.onChange.bind(this),this.onChangeEditMode=this.onChangeEditMode.bind(this),this.onDatasourcePropChange=this.onDatasourcePropChange.bind(this),this.onDatasourceChange=this.onDatasourceChange.bind(this),this.tableChangeAndSyncMetadata=this.tableChangeAndSyncMetadata.bind(this),this.syncMetadata=this.syncMetadata.bind(this),this.setColumns=this.setColumns.bind(this),this.validateAndChange=this.validateAndChange.bind(this),this.handleTabSelect=this.handleTabSelect.bind(this),this.formatSql=this.formatSql.bind(this),this.fetchUsageData=this.fetchUsageData.bind(this),this.currencies=(0,b.A)(e.currencies).map(e=>({value:e,label:`${(0,y.Q)({symbol:e})} (${e})`}))}}eH.defaultProps={onChange:()=>{},setIsEditing:()=>{}},eH.propTypes=ej;let eB=(0,x.b)(eH),eW=(0,F.Ay)((0,c.Ng)(e=>({database:null==e?void 0:e.database}),e=>({runQuery:t=>e(function(e){var a;return(a=function*(){try{e(G(!0));let a=yield W(t);e({type:"SET_QUERY_RESULT",payload:a})}catch(t){e({type:"SET_QUERY_ERROR",payload:t.message})}finally{e(G(!1))}},function(){var e=this,t=arguments;return new Promise(function(i,n){var r=a.apply(e,t);function o(e){B(r,i,n,o,l,"next",e)}function l(e){B(r,i,n,o,l,"throw",e)}o(void 0)})})()}),resetQuery:()=>e({type:"RESET_DATABASE_STATE"}),formatQuery:t=>e(function(e){return f.A.post({endpoint:"/api/v1/sqllab/format_sql/",body:JSON.stringify({sql:t}),headers:{"Content-Type":"application/json"}}).then(t=>(e({type:"SET_QUERY",payload:t.json.result}),t))})}))(eB))},22023:(e,t,a)=>{a.d(t,{e:()=>r});var i=a(22022),n=a(21346);let r=(0,n.I4)(i.Form.Item)`
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
`},26637:(e,t,a)=>{a.d(t,{E:()=>l});var i=a(2445),n=a(21346),r=a(22022);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let l=(0,n.I4)(e=>(0,i.Y)(r.Badge,o({},e)))`
  ${({theme:e,color:t,count:a})=>`
    & > sup,
    & > sup.ant-badge-count {
      box-shadow: none;
      ${void 0!==a?`background: ${t||e.colorPrimary};`:""}
    }
  `}
`},34319:(e,t,a)=>{a.d(t,{A:()=>i});function i(e,t){return e===t||!e&&!t||!!(e&&t&&e.length===t.length&&e.every((e,a)=>e===t[a]))}},37722:(e,t,a)=>{a.d(t,{SM:()=>l,el:()=>r,wW:()=>o});var i=a(95265),n=a(45558);let r=new Map,o=(0,n.K)(i.A.get,r,({endpoint:e})=>e||"");function l(e){if(null==e||""===e)return;let t=String(e);r.forEach((e,a)=>{for(let e of[`/api/v1/dataset/${t}`,`/api/v1/dataset/${t}/`,`/api/v1/dataset/${t}?`])if(a.includes(e)){let t=a.substring(a.indexOf(e)+e.length);if(e.endsWith("/")||e.endsWith("?")||""===t||t.startsWith("/")||t.startsWith("?")){r.delete(a);break}}})}},46502:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(2445),n=a(22022);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let o=Object.assign(e=>{var{padded:t}=e,a=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t.indexOf(a=r[i])>=0||(n[a]=e[a]);return n}(e,["padded"]);return(0,i.Y)(n.Card,r({},a,{css:e=>({".ant-card-body":{padding:t?4*e.sizeUnit:e.sizeUnit}})}))},{Meta:n.Card.Meta})},48446:(e,t,a)=>{a.d(t,{Ay:()=>g,fn:()=>m,pX:()=>f});var i=a(2445),n=a(21346),r=a(17437),o=a(22022),l=a(67675);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let d=e=>{var{animated:t=!1,allowOverflow:a=!0,fullHeight:l=!1,tabBarStyle:d,contentStyle:c}=e,h=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t.indexOf(a=r[i])>=0||(n[a]=e[a]);return n}(e,["animated","allowOverflow","fullHeight","tabBarStyle","contentStyle"]);let u={paddingLeft:4*(0,n.DP)().sizeUnit},p=s({},u,d);return(0,i.Y)(o.Tabs,s({animated:t},h,{tabBarStyle:p,css:e=>(0,r.AH)`
        overflow: ${a?"visible":"hidden"};
        ${l&&"height: 100%;"}

        .ant-tabs-content-holder {
          overflow: ${a?"visible":"auto"};
          ${l&&"height: 100%;"}
        }
        .ant-tabs-content {
          ${l&&"height: 100%;"}
        }
        .ant-tabs-tabpane {
          ${l&&"height: 100%;"}
          ${c}
        }
        .ant-tabs-tab {
          flex: 1 1 auto;

          .short-link-trigger.btn {
            padding: 0 ${e.sizeUnit}px;
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
          font-size: ${e.fontSizeSM}px;
          text-align: center;
          user-select: none;
          .required {
            margin-left: ${e.sizeUnit/2}px;
            color: ${e.colorError};
          }
          &:focus-visible {
            box-shadow: none;
          }
        }
      `}))},c=(0,n.I4)(o.Tabs.TabPane)``,h=Object.assign(d,{TabPane:c}),u=(0,n.I4)(d)`
  ${({theme:e,contentStyle:t})=>`
    .ant-tabs-content-holder {
      background: ${e.colorBgContainer};
      ${t}
    }

    & > .ant-tabs-nav {
      margin-bottom: 0;
    }

    .ant-tabs-tab-remove {
      padding-top: 0;
      padding-bottom: 0;
      height: ${6*e.sizeUnit}px;
    }
  `}
`,p=(0,n.I4)(l.F.CloseOutlined)`
  color: ${({theme:e})=>e.colorIcon};
`,m=Object.assign(u,{TabPane:c});m.defaultProps={type:"editable-card",animated:{inkBar:!0,tabPane:!1}},m.TabPane.defaultProps={closeIcon:(0,i.Y)(p,{iconSize:"s",role:"button",tabIndex:0})};let f=Object.assign((0,n.I4)(m)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.sizeUnit}px;
    padding: ${({theme:e})=>`${3*e.sizeUnit}px ${e.sizeUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.fontSize}px;
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
`,{TabPane:c}),g=h},51156:(e,t,a)=>{a.d(t,{Ay:()=>S,Kt:()=>x,cs:()=>C});var i=a(2445),n=a(24002),r=a(91054),o=a(94149),l=a(21346),s=a(93666),d=a(80520),c=a(5009),h=a(67675),u=a(37013),p=a(65061),m=a(9100),f=a(11960),g=a(35050);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let y=l.I4.div`
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
`,v=l.I4.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,C=({table:e})=>{let{value:t,type:a,extra:n}=e;return(0,i.FD)(v,{title:t,children:["view"===a?(0,i.Y)(h.F.FunctionOutlined,{iconSize:"m"}):"materialized_view"===a?(0,i.Y)(h.F.ProfileOutlined,{iconSize:"m"}):(0,i.Y)(h.F.TableOutlined,{iconSize:"m"}),(null==n?void 0:n.certification)&&(0,i.Y)(d.T,{certifiedBy:n.certification.certified_by,details:n.certification.details,size:"l"}),(null==n?void 0:n.warning_markdown)&&(0,i.Y)(m.A,{warningMarkdown:n.warning_markdown,size:"l",marginRight:4}),t]})},_=({database:e,emptyState:t,formMode:a=!1,getDbList:l,handleError:d,isDatabaseSelectEnabled:h=!0,onDbChange:m,onCatalogChange:b,onSchemaChange:v,readOnly:_=!1,onEmptyResults:x,catalog:S,schema:Y,sqlLabMode:w=!0,tableSelectMode:A="single",tableValue:D,onTableSelectChange:T,customTableOptionLabelRenderer:E})=>{let F,z,O,{addSuccessToast:k}=(0,f.Yf)(),[I,$]=(0,n.useState)(S),[L,M]=(0,n.useState)(Y),[q,U]=(0,n.useState)(void 0),{currentData:P,isFetching:R,refetch:K}=(0,g.ty)({dbId:null==e?void 0:e.id,catalog:I,schema:L,onSuccess:(e,t)=>{t&&k((0,r.t)("List updated"))},onError:e=>{(0,o.h4)(e).then(e=>{d((0,o.hi)((0,r.t)("There was an error loading the tables"),e))})}}),j=(0,n.useMemo)(()=>P?P.options.map(e=>({value:e.value,label:E?E(e):(0,i.Y)(C,{table:e}),text:e.value})):[],[P,E]);(0,n.useEffect)(()=>{void 0===e&&($(void 0),M(void 0),U(void 0))},[e,A]),(0,n.useEffect)(()=>{"single"===A?U(j.find(e=>e.value===D)):U((null==j?void 0:j.filter(e=>e&&(null==D?void 0:D.includes(e.value))))||[])},[j,D,A]);let N=(0,n.useMemo)(()=>(e,t)=>{let a=e.trim().toLowerCase(),{value:i}=t;return i.toLowerCase().includes(a)},[]);return(0,i.FD)(y,{children:[(0,i.Y)(c.RA,{db:e,emptyState:t,formMode:a,getDbList:l,handleError:d,onDbChange:_?void 0:e=>{m&&m(e),$(void 0),M(void 0),U("single"===A?void 0:[])},onEmptyResults:x,onCatalogChange:_?void 0:e=>{$(e),b&&b(e),M(void 0),U("single"===A?void 0:[])},catalog:I,onSchemaChange:_?void 0:e=>{M(e),v&&v(e),U("single"===A?void 0:[])},schema:L,sqlLabMode:w,isDatabaseSelectEnabled:h&&!_,readOnly:_}),w&&!a&&(0,i.Y)("div",{className:"divider"}),(F=w?(0,r.t)("See table schema"):(0,r.t)("Table"),z=(0,i.Y)(s.A,{ariaLabel:(0,r.t)("Select table or type to search tables"),disabled:L&&!a&&_||!L,filterOption:N,labelInValue:!0,loading:R,name:"select-table",onChange:e=>{L?null==T||T(Array.isArray(e)?e.map(e=>null==e?void 0:e.value):null==e?void 0:e.value,I,L):U(e)},options:j,placeholder:(0,r.t)("Select table or type to search tables"),showSearch:!0,mode:A,value:q,allowClear:"multiple"===A,allowSelectAll:!1}),O=!_&&(0,i.Y)(p.A,{onClick:()=>K(),tooltipContent:(0,r.t)("Force refresh table list")}),(0,i.FD)(i.FK,{children:[(0,i.Y)(u.q,{children:F}),(0,i.FD)("div",{className:"section",children:[(0,i.Y)("span",{className:"select",children:z}),(0,i.Y)("span",{className:"refresh",children:O})]})]}))]})},x=e=>(0,i.Y)(_,b({tableSelectMode:"multiple"},e)),S=_},51930:(e,t,a)=>{a.d(t,{A:()=>C});var i=a(2445),n=a(24002),r=a(5556),o=a.n(r),l=a(38221),s=a.n(l),d=a(22022),c=a(24582),h=a(30404),u=a(10129),p=a(34813),m=a(91054),f=a(98837);a(15850);var g=a(95678);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let y={name:o().string,onChange:o().func,initialValue:o().string,height:o().number,minLines:o().number,maxLines:o().number,offerEditInModal:o().bool,language:o().oneOf([null,"json","html","sql","markdown","javascript","handlebars"]),aboveEditorSection:o().node,readOnly:o().bool,resize:o().oneOf([null,"block","both","horizontal","inline","none","vertical"]),textAreaStyles:o().object,tooltipOptions:o().object,hotkeys:o().array,debounceDelay:o().number};class v extends n.Component{componentDidUpdate(e){this.props.onChange!==e.onChange&&this.props.debounceDelay&&(this.debouncedOnChange&&this.debouncedOnChange.cancel(),this.debouncedOnChange=s()(this.props.onChange,this.props.debounceDelay))}handleChange(e){let t="object"==typeof e?e.target.value:e;this.debouncedOnChange?this.debouncedOnChange(t):this.props.onChange(t)}componentWillUnmount(){this.debouncedOnChange&&this.debouncedOnChange.cancel()}renderEditor(e=!1){let t=e?40:this.props.minLines||12;if(this.props.language){let a=b({border:`1px solid ${this.props.theme.colorBorder}`,minHeight:`${t}em`,width:"auto"},this.props.textAreaStyles);this.props.resize&&(a.resize=this.props.resize),this.props.readOnly&&(a.backgroundColor=this.props.theme.colorBgMask);let n=e=>{this.props.hotkeys.forEach(t=>{e.commands.addCommand({name:t.name,bindKey:{win:t.key,mac:t.key},exec:t.func})})},r=(0,i.Y)("div",{children:(0,i.Y)(c.S9,b({mode:this.props.language,style:a,minLines:t,maxLines:e?1e3:this.props.maxLines,editorProps:{$blockScrolling:!0},onLoad:n,defaultValue:this.props.initialValue,readOnly:this.props.readOnly},this.props,{onChange:this.handleChange.bind(this)}),this.props.name)});return this.props.tooltipOptions?(0,i.Y)(p.m,b({},this.props.tooltipOptions,{children:r})):r}let a=(0,i.Y)("div",{children:(0,i.Y)(d.Input.TextArea,{placeholder:(0,m.t)("textarea"),onChange:this.handleChange.bind(this),defaultValue:this.props.initialValue,disabled:this.props.readOnly,style:{height:this.props.height},"aria-required":this.props["aria-required"]})});return this.props.tooltipOptions?(0,i.Y)(p.m,b({},this.props.tooltipOptions,{children:a})):a}renderModalBody(){return(0,i.FD)(i.FK,{children:[(0,i.Y)("div",{children:this.props.aboveEditorSection}),this.renderEditor(!0)]})}render(){let e=(0,i.Y)(g.A,b({},this.props));return(0,i.FD)("div",{children:[e,this.renderEditor(),this.props.offerEditInModal&&(0,i.Y)(u.g,{modalTitle:e,triggerNode:(0,i.Y)(h.$,{buttonSize:"small",style:{marginTop:this.props.theme.sizeUnit},children:(0,m.t)("Edit %s in modal",this.props.language)}),modalBody:this.renderModalBody(!0),responsive:!0})]})}constructor(e){super(e),e.debounceDelay&&(this.debouncedOnChange=s()(e.onChange,e.debounceDelay))}}v.propTypes=y,v.defaultProps={onChange:()=>{},initialValue:"",height:250,minLines:3,maxLines:10,offerEditInModal:!0,readOnly:!1,resize:null,textAreaStyles:{},tooltipOptions:{},hotkeys:[],debounceDelay:null};let C=(0,f.b)(v)},59927:(e,t,a)=>{a.d(t,{A:()=>s,Q:()=>o});var i=a(40668),n=a(58097),r=a(6603);let o=e=>{var t;return null==(t=new Intl.NumberFormat("en-US",{style:"currency",currency:e.symbol}).formatToParts(1).find(e=>"currency"===e.type))?void 0:t.value};class l extends i.A{hasValidCurrency(){var e;return!!(null==(e=this.currency)?void 0:e.symbol)}getNormalizedD3Format(){return this.d3Format.replace(/\$|%/g,"")}format(e){let t=(0,r.gV)(this.getNormalizedD3Format())(e);return this.hasValidCurrency()?"prefix"===this.currency.symbolPosition?`${o(this.currency)} ${t}`:`${t} ${o(this.currency)}`:t}constructor(e){super(e=>this.format(e)),this.d3Format=e.d3Format||n.A.SMART_NUMBER,this.currency=e.currency,this.locale=e.locale||"en-US"}}let s=l},76106:(e,t,a)=>{a.d(t,{z:()=>g});var i=a(2445),n=a(91054),r=a(21346),o=a(17437),l=a(24002),s=a(46942),d=a.n(s),c=a(34813),h=a(80520),u=a(22022);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let m=(0,r.I4)(h.T)`
  vertical-align: middle;
`,f=r.I4.span`
  &.editable-title {
    display: inline;
    &.editable-title--editing {
      width: 100%;
    }

    input,
    textarea {
      outline: none;
      background: transparent;
      box-shadow: none;
      cursor: initial;
      font-feature-settings:
        'liga' 0,
        'calt' 0;
      font-variant-ligatures: none;
      font-weight: bold;
    }

    input[type='text'],
    textarea {
      color: ${({theme:e})=>e.colorTextTertiary};
      border-radius: ${({theme:e})=>e.sizeUnit}px;
      font-size: ${({theme:e})=>e.fontSizeLG}px;
      padding: ${({theme:e})=>e.sizeUnit/2}px;
      min-height: 100px;
      width: 95%;
    }

    &.datasource-sql-expression {
      min-width: 315px;
      width: 100%;
    }
  }
`;function g(e){var{canEdit:t=!1,editing:a=!1,extraClasses:r,noPermitTooltip:s,onSaveTitle:h,showTooltip:g=!0,style:b,title:y="",defaultTitle:v="",placeholder:C="",certifiedBy:_,certificationDetails:x,renderLink:S,maxWidth:Y,autoSize:w=!0}=e,A=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t.indexOf(a=r[i])>=0||(n[a]=e[a]);return n}(e,["canEdit","editing","extraClasses","noPermitTooltip","onSaveTitle","showTooltip","style","title","defaultTitle","placeholder","certifiedBy","certificationDetails","renderLink","maxWidth","autoSize"]);let[D,T]=(0,l.useState)(a),[E,F]=(0,l.useState)(y),[z,O]=(0,l.useState)(y),[k,I]=(0,l.useState)(0),$=(0,l.useRef)(null);function L(){let e=E.trim();if(t){if(T(!1),!e.length)return void F(z);z!==e&&O(e),y!==e&&h(e)}}(0,l.useEffect)(()=>{var e,t;let{font:a}=window.getComputedStyle((null==(t=$.current)||null==(e=t.resizableTextArea)?void 0:e.textArea)||document.body);I(Math.min(function(e,t="14px Arial"){let a=document.createElement("canvas").getContext("2d");return a?(a.font=t,a.measureText(e).width):0}(E||"",a)+20,"number"==typeof Y?Y:1/0))},[E]),(0,l.useEffect)(()=>{y!==E&&(O(E),F(y))},[y]),(0,l.useEffect)(()=>{if(D&&$.current){var e;let t=null==(e=$.current.resizableTextArea)?void 0:e.textArea;if(t){t.focus();let{length:e}=t.value;t.setSelectionRange(e,e),t.scrollTop=t.scrollHeight}}},[D]);let M=E;D||E||(M=v||y);let q=(0,i.Y)(u.Input.TextArea,{size:"small","data-test":"textarea-editable-title-input",ref:$,value:M,className:y?void 0:"text-muted",onChange:function(e){t&&F(e.target.value)},onBlur:L,onClick:function(){var e,a;if(!t||D)return;let i=null==(a=$.current)||null==(e=a.resizableTextArea)?void 0:e.textArea;if(i){i.focus();let{length:e}=i.value;i.setSelectionRange(e,e)}T(!0)},onKeyDown:function(e){["Backspace","Delete"," ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)&&e.stopPropagation(),"Enter"===e.key&&(e.preventDefault(),L())},onPressEnter:function(e){e.preventDefault(),L()},placeholder:C,variant:D?"outlined":"borderless",autoSize:!!w&&{minRows:1,maxRows:3},css:e=>(0,o.AH)`
        && {
          width: ${k}px;
          min-width: ${10*e.sizeUnit}px;
          transition: auto;
        }
      `});return g&&!D&&(q=(0,i.Y)(c.m,{id:"title-tooltip",placement:"topLeft",title:t?(0,n.t)("Click to edit"):s||(0,n.t)("You don't have the rights to alter this title."),children:q})),t||(q=S?S(M||""):(0,i.Y)("span",{"data-test":"span-title",children:M})),(0,i.FD)(f,p({"data-test":"editable-title",className:d()("editable-title",r,t&&"editable-title--editable",D&&"editable-title--editing"),style:b,editing:D,canEdit:t},A,{children:[_&&(0,i.FD)(i.FK,{children:[(0,i.Y)(m,{certifiedBy:_,details:x,size:"xl"})," "]}),q]}))}},80520:(e,t,a)=>{a.d(t,{T:()=>s});var i=a(2445),n=a(91054),r=a(21346),o=a(67675),l=a(34813);function s({certifiedBy:e,details:t,size:a="l"}){let s=(0,r.DP)();return(0,i.Y)(l.m,{id:"certified-details-tooltip",title:(0,i.FD)(i.FK,{children:[e&&(0,i.Y)("div",{children:(0,i.Y)("strong",{children:(0,n.t)("Certified by %s",e)})}),(0,i.Y)("div",{children:t})]}),children:(0,i.Y)(o.F.Certified,{iconColor:s.colorPrimary,iconSize:a})})}},81567:(e,t,a)=>{a.d(t,{A:()=>n});var i=a(91054);function n(e){return!!(e&&Number.isNaN(Number(e)))&&(0,i.t)("is expected to be a number")}},83734:(e,t,a)=>{a.d(t,{l:()=>o});var i=a(2445),n=a(22022);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let o=Object.assign(function(e){return(0,i.Y)(n.Form,r({},e))},{useForm:n.Form.useForm,Item:n.Form.Item,List:n.Form.List,ErrorList:n.Form.ErrorList,Provider:n.Form.Provider})},90300:(e,t,a)=>{a.d(t,{c:()=>l});var i=a(2445),n=a(17437),r=a(22022);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function l(e){return(0,i.Y)(r.Divider,o({css:e=>(0,n.AH)`
        margin: ${e.margin}px 0;
      `},e))}},95678:(e,t,a)=>{a.d(t,{A:()=>u});var i=a(2445),n=a(91054),r=a(21346),o=a(17437),l=a(63278),s=a(34813),d=a(23941),c=a(67675);let h=(0,o.AH)`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,u=({name:e,label:t,description:a,validationErrors:u=[],renderTrigger:p=!1,rightNode:m,leftNode:f,onClick:g,hovered:b=!1,tooltipOnClick:y=()=>{},warning:v,danger:C})=>{let _=(0,r.DP)();return t?(0,i.FD)("div",{className:"ControlHeader","data-test":`${e}-header`,children:[(0,i.Y)("div",{className:"pull-left",children:(0,i.FD)(l.l,{css:e=>(0,o.AH)`
            margin-bottom: ${.5*e.sizeUnit}px;
            position: relative;
            font-size: ${e.fontSizeSM}px;
          `,htmlFor:e,children:[f&&(0,i.FD)("span",{children:[f," "]}),(0,i.Y)("span",{role:"button",tabIndex:0,onClick:g,style:{cursor:g?"pointer":""},children:t})," ",v&&(0,i.FD)("span",{children:[(0,i.Y)(s.m,{id:"error-tooltip",placement:"top",title:v,children:(0,i.Y)(c.F.WarningOutlined,{iconColor:_.colorWarning,css:(0,o.AH)`
                    vertical-align: baseline;
                  `,iconSize:"s"})})," "]}),C&&(0,i.FD)("span",{children:[(0,i.Y)(s.m,{id:"error-tooltip",placement:"top",title:C,children:(0,i.Y)(c.F.CloseCircleOutlined,{iconColor:_.colorErrorText,iconSize:"s"})})," "]}),(null==u?void 0:u.length)>0&&(0,i.FD)("span",{"data-test":"error-tooltip",css:(0,o.AH)`
                cursor: pointer;
              `,children:[(0,i.Y)(s.m,{id:"error-tooltip",placement:"top",title:null==u?void 0:u.join(" "),children:(0,i.Y)(c.F.ExclamationCircleOutlined,{iconColor:_.colorError})})," "]}),b?(0,i.FD)("span",{css:()=>(0,o.AH)`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${_.sizeUnit}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `,children:[a&&(0,i.FD)("span",{children:[(0,i.Y)(s.m,{id:"description-tooltip",title:a,placement:"top",children:(0,i.Y)(c.F.InfoCircleOutlined,{css:h,onClick:y})})," "]}),p&&(0,i.FD)("span",{children:[(0,i.Y)(d.I,{label:(0,n.t)("bolt"),tooltip:(0,n.t)("Changing this control takes effect instantly"),placement:"top",type:"notice"})," "]})]}):null]})}),m&&(0,i.Y)("div",{className:"pull-right",children:m}),(0,i.Y)("div",{className:"clearfix"})]}):null}}}]);