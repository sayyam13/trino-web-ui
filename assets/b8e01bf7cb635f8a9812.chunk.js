"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9918],{3076:(e,t,a)=>{a.r(t),a.d(t,{ChartCreation:()=>F,default:()=>k});var i=a(2445),r=a(24002),n=a(58561),s=a.n(n),o=a(91054),l=a(95265),d=a(47257),c=a(21346),h=a(98837),p=a(20105),u=a(66516),m=a(71519),g=a(61574),b=a(22022),f=a(94448),v=a(30404),x=a(11960),y=a(5413),$=a(86335),w=a(31545),_=a(98958),D=a(67675);let z=((0,w.Ay)().common.conf.VIZ_TYPE_DENYLIST||[]).concat(Object.values(u.fJ)),S=c.I4.div`
  ${({theme:e})=>`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: ${y.rE}px;
    max-height: calc(100vh - 56px);
    border-radius: ${e.borderRadius}px;
    background-color: ${e.colorBgContainer};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${e.padding}px;
    padding-right: ${e.padding}px;
    padding-bottom: ${e.padding}px;

    h3 {
      padding-bottom: ${e.paddingSM}px;
    }

    & .dataset {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: ${e.marginMD}px;

      & > div {
        min-width: 200px;
        width: 300px;
      }

      & > span {
        color: ${e.colorText};
        margin-left: ${e.margin}px;
      }
    }

    & .viz-gallery {
      border: 1px solid ${e.colorBorder};
      border-radius: ${e.borderRadius}px;
      margin: ${e.marginXXS}px 0px;
      max-height: calc(100vh - 306px);
      flex: 1;
    }

    & .footer {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      & > span {
        color: ${e.colorText};
        margin-right: ${e.margin}px;
      }
    }

    /* The following extra ampersands (&&&&) are used to boost selector specificity */

    &&&& .ant-steps-item-tail {
      display: none;
    }

    &&&& .ant-steps-item-icon {
      margin-right: ${e.marginXS}px;
      width: ${5*e.sizeUnit}px;
      height: ${5*e.sizeUnit}px;
      line-height: ${5*e.sizeUnit}px;
    }

    &&&& .ant-steps-item-title {
      line-height: ${5*e.sizeUnit}px;
    }

    &&&& .ant-steps-item-content {
      overflow: unset;

      .ant-steps-item-description {
        margin-top: ${e.sizeUnit}px;
        padding-bottom: ${e.sizeUnit}px;
      }
    }

    &&&& .ant-tooltip-open {
      display: inline;
    }
  `}
`,C=c.I4.span`
  ${({theme:{fontSize:e,fontWeightStrong:t}})=>`
      font-size: ${e}px;
      font-weight: ${t};
    `}
`,T=c.I4.div`
  ${({theme:e})=>`
    margin-top: ${e.margin}px;
    margin-bottom: ${e.marginSM}px;
    margin-left: ${e.marginMD}px;
  `}
`;class F extends r.PureComponent{componentDidMount(){let e=new URLSearchParams(window.location.search).get("dataset");e&&(this.loadDatasources(e,0,1).then(e=>{let t=e.data[0];this.setState({datasource:t})}),this.props.addSuccessToast((0,o.t)("The dataset has been saved")))}exploreUrl(){var e;let t=(0,p.P3)(u.vX.dashboardId),a=`/explore/?viz_type=${this.state.vizType}&datasource=${null==(e=this.state.datasource)?void 0:e.value}`;return(0,d.A)(t)&&(a+=`&dashboard_id=${t}`),a}gotoSlice(){this.props.history.push(this.exploreUrl())}changeDatasource(e){this.setState({datasource:e})}changeVizType(e){this.setState({vizType:e})}isBtnDisabled(){var e;return!((null==(e=this.state.datasource)?void 0:e.value)&&this.state.vizType)}onVizTypeDoubleClick(){this.isBtnDisabled()||this.gotoSlice()}loadDatasources(e,t,a){let i=s().encode({columns:["id","table_name","datasource_type","database.database_name","schema"],filters:[{col:"table_name",opr:"ct",value:e}],page:t,page_size:a,order_column:"table_name",order_direction:"asc"});return l.A.get({endpoint:`/api/v1/dataset/?q=${i}`}).then(e=>({data:e.json.result.map(e=>({id:e.id,value:`${e.id}__${e.datasource_type}`,label:(0,_.$)(e),table_name:e.table_name})),totalCount:e.json.count}))}render(){var e;let{theme:t}=this.props,a=this.isBtnDisabled(),r=(0,o.t)("view instructions"),n=this.state.canCreateDataset?(0,i.FD)("span",{"data-test":"dataset-write",children:[(0,i.Y)(m.N_,{to:"/dataset/add/","data-test":"add-chart-new-dataset",children:(0,o.t)("Add a dataset")})," ",(0,o.t)("or")," ",(0,i.FD)("a",{href:"https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard/#registering-a-new-table",rel:"noopener noreferrer",target:"_blank","data-test":"add-chart-new-dataset-instructions",children:[`${r} `,(0,i.Y)(D.F.Full,{iconSize:"m",iconColor:t.colorPrimary})]}),"."]}):(0,i.FD)("span",{"data-test":"no-dataset-write",children:[(0,i.FD)("a",{href:"https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard/#registering-a-new-table",rel:"noopener noreferrer",target:"_blank",children:[`${r} `,(0,i.Y)(D.F.Full,{iconSize:"m",iconColor:t.colorPrimary})]}),"."]});return(0,i.FD)(S,{children:[(0,i.Y)("h3",{children:(0,o.t)("Create a new chart")}),(0,i.FD)(b.Steps,{direction:"vertical",size:"small",children:[(0,i.Y)(b.Steps.Step,{title:(0,i.Y)(C,{children:(0,o.t)("Choose a dataset")}),status:(null==(e=this.state.datasource)?void 0:e.value)?"finish":"process",description:(0,i.FD)(T,{className:"dataset",children:[(0,i.Y)(f.A,{autoFocus:!0,ariaLabel:(0,o.t)("Dataset"),name:"select-datasource",onChange:this.changeDatasource,options:this.loadDatasources,optionFilterProps:["id","table_name"],placeholder:(0,o.t)("Choose a dataset"),showSearch:!0,value:this.state.datasource}),n]})}),(0,i.Y)(b.Steps.Step,{title:(0,i.Y)(C,{children:(0,o.t)("Choose chart type")}),status:this.state.vizType?"finish":"process",description:(0,i.Y)(T,{children:(0,i.Y)(y.Ay,{denyList:z,className:"viz-gallery",onChange:this.changeVizType,onDoubleClick:this.onVizTypeDoubleClick,selectedViz:this.state.vizType})})})]}),(0,i.FD)("div",{className:"footer",children:[a&&(0,i.Y)("span",{children:(0,o.t)("Please select both a Dataset and a Chart type to proceed")}),(0,i.Y)(v.$,{buttonStyle:"primary",disabled:a,onClick:this.gotoSlice,children:(0,o.t)("Create new chart")})]})]})}constructor(e){super(e),this.state={vizType:null,canCreateDataset:(0,$.L)("can_write","Dataset",e.user.roles)},this.changeDatasource=this.changeDatasource.bind(this),this.changeVizType=this.changeVizType.bind(this),this.gotoSlice=this.gotoSlice.bind(this),this.loadDatasources=this.loadDatasources.bind(this),this.onVizTypeDoubleClick=this.onVizTypeDoubleClick.bind(this)}}let k=(0,g.y)((0,x.Ay)((0,h.b)(F)))},58572:(e,t,a)=>{a.d(t,{Kg:()=>g,J8:()=>u,Pz:()=>b,tg:()=>h,pY:()=>p,px:()=>m});var i=a(1800),r=a(42226),n=a(91054),s=a(24123);let o=e=>null!=e&&"function"==typeof e[Symbol.iterator];var l=a(25691),d=a(31545);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let h=({datasetId:e,dependencies:t={},groupby:a,defaultDataMask:i,controlValues:r,filterType:n,sortMetric:o,adhoc_filters:l,time_range:h,granularity_sqla:p,type:u,dashboardId:m,id:g})=>{var b,f,v;let x,y={};return e&&(y.datasource=`${e}__table`),a&&(y.groupby=[a]),o&&(y.sortMetric=o),c({},r,y,{adhoc_filters:null!=l?l:[],extra_filters:[],extra_form_data:t,granularity_sqla:p,metrics:["count"],row_limit:(null==(x=(0,d.Ay)())||null==(v=x.common)||null==(f=v.conf)?void 0:f.NATIVE_FILTER_DEFAULT_ROW_LIMIT)||1e3,showSearch:!0,defaultValue:null==i||null==(b=i.filterState)?void 0:b.value,time_range:h,url_params:(0,s.A)("regular"),inView:!0,viz_type:n,type:u,dashboardId:m,native_filter_id:g})};function p(e={},t={}){let a={};return i.t1.forEach(i=>{let r=e[i],n=t[i],s=[...o(r)?r:[],...o(n)?n:[]];s.length&&(a[i]=s)}),i.zk.forEach(i=>{let r=e[i];void 0!==r&&(a[i]=r);let n=t[i];void 0!==n&&(a[i]=n)}),a}function u(e,t){let a={};return t.forEach(t=>{var i,r;a=p(a,null!=(r=null==(i=e[t])?void 0:i.extraFormData)?r:{})}),a}function m(e){return!e.includes(r.nS.NativeFilter)||e.includes(r.nS.InteractiveChart)}let g=(e,t)=>new Set(t.map(t=>{var a,i;return null==(i=e.find(e=>{var a;return(null==e||null==(a=e.meta)?void 0:a.chartId)===t}))||null==(a=i.parents)?void 0:a.filter(e=>e.startsWith(`${l.B8}-`))}).filter(e=>void 0!==e).flat()),b=e=>null==e?"":"string"==typeof e||"number"==typeof e?`${e}`:Array.isArray(e)?e.join(", "):"object"==typeof e?JSON.stringify(e):(0,n.t)("Unknown value")},98958:(e,t,a)=>{a.d(t,{$:()=>u});var i=a(2445),r=a(34813),n=a(91054),s=a(21346);let o=s.I4.div`
  ${({theme:e})=>`
    .tooltip-header {
      font-size: ${e.fontSize}px;
      font-weight: ${e.fontWeightStrong};
    }

    .tooltip-description {
      margin-top: ${2*e.sizeUnit}px;
      display: -webkit-box;
      -webkit-line-clamp: 20;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}
`,l=s.I4.div`
  ${({theme:e})=>`
    left: ${3*e.sizeUnit}px;
    right: ${3*e.sizeUnit}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  `}
`,d=s.I4.span`
  ${({theme:e})=>`
    left: ${3*e.sizeUnit}px;
    right: ${3*e.sizeUnit}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  `}
`,c=s.I4.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  width: 100%;
`,h=s.I4.span`
  ${({theme:{fontSizeSM:e,colorTextSecondary:t}})=>`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${e}px;
    color: ${t};
    line-height: 1.6;
  `}
`,p=e=>!["null","none"].includes(e.toLowerCase())&&""!==e.trim(),u=e=>(0,i.Y)(r.m,{mouseEnterDelay:.2,placement:"right",title:(0,i.FD)(o,{children:[(0,i.Y)("div",{className:"tooltip-header",children:e.table_name&&p(e.table_name)?e.table_name:(0,n.t)("Not defined")}),(0,i.FD)("div",{className:"tooltip-description",children:[(0,i.FD)("div",{children:[(0,n.t)("Database"),": ",e.database.database_name]}),(0,i.FD)("div",{children:[(0,n.t)("Schema"),":"," ",e.schema&&p(e.schema)?e.schema:(0,n.t)("Not defined")]})]})]}),children:(0,i.FD)(l,{children:[(0,i.Y)(d,{children:e.table_name&&p(e.table_name)?e.table_name:e.database.database_name}),(0,i.FD)(c,{children:[(0,i.Y)(h,{children:e.database.database_name}),e.schema&&p(e.schema)&&(0,i.FD)(h,{children:[" - ",e.schema]})]})]})})}}]);