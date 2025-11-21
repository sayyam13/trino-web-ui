"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[35,2976],{44730:(e,a,t)=>{t.d(a,{Gq:()=>o,Hh:()=>l,SO:()=>s,SX:()=>i,Wr:()=>r});var n,l=((n={}).Database="db",n.ChartSplitSizes="chart_split_sizes",n.ControlsWidth="controls_width",n.DatasourceWidth="datasource_width",n.IsDatapanelOpen="is_datapanel_open",n.HomepageChartFilter="homepage_chart_filter",n.HomepageDashboardFilter="homepage_dashboard_filter",n.HomepageCollapseState="homepage_collapse_state",n.HomepageActivityFilter="homepage_activity_filter",n.DatasetnameSetSuccessful="datasetname_set_successful",n.SqllabIsAutocompleteEnabled="sqllab__is_autocomplete_enabled",n.SqllabIsRenderHtmlEnabled="sqllab__is_render_html_enabled",n.ExploreDataTableOriginalFormattedTimeColumns="explore__data_table_original_formatted_time_columns",n.DashboardCustomFilterBarWidths="dashboard__custom_filter_bar_widths",n.DashboardExploreContext="dashboard__explore_context",n.DashboardEditorShowOnlyMyCharts="dashboard__editor_show_only_my_charts",n.CommonResizableSidebarWidths="common__resizable_sidebar_widths",n);function i(e,a){try{let t=localStorage.getItem(e);if(null===t)return a;return JSON.parse(t)}catch(e){return a}}function r(e,a){try{localStorage.setItem(e,JSON.stringify(a))}catch(e){}}function o(e,a){return i(e,a)}function s(e,a){r(e,a)}},50035:(e,a,t)=>{t.d(a,{A:()=>er});var n=t(2445),l=t(24002),i=t(21346),r=t(17437),o=t(20105),s=t(12113),d=t(22022),c=t(34813),u=t(5009),h=t(61574),p=t(71519),m=t(67675),g=t(89795),b=t(26586),v=t(66516),f=t(58561),_=t.n(f),y=t(61225),x=t(33231),Y=t(62193),w=t.n(Y),S=t(78340),C=t(91054),k=t(95265);let F=({version:e="unknownVersion",sha:a="unknownSHA",build:t="unknownBuild"})=>{let l=`https://apachesuperset.gateway.scarf.sh/pixel/0d3461e1-abb1-4691-a0aa-5ed50de66af0/${e}/${a}/${t}`;return(0,n.Y)("img",{referrerPolicy:"no-referrer-when-downgrade",src:l,width:0,height:0,alt:""})};var D=t(16407),$=t(86335),A=t(4002),N=t(50377),O=t(55185),I=t(74012),E=t(99661),z=t(67871),T=t(70079);let P=i.I4.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${({theme:e})=>2*e.sizeUnit}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`;var L=t(9408);function q(){return(q=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let U=(0,S.a)(),M=i.I4.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: ${({align:e})=>e};
  align-items: center;
`,R=i.I4.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,H=i.I4.a`
  padding-right: ${({theme:e})=>e.sizeUnit}px;
  padding-left: ${({theme:e})=>e.sizeUnit}px;
`,j=i.I4.div`
  ${({theme:e,disabled:a})=>(0,r.AH)`
    &&:hover {
      color: ${!a&&e.colorPrimary};
      cursor: ${!a?"pointer":"not-allowed"};
    }
    ${a&&(0,r.AH)`
      color: ${e.colorTextDisabled};
    `}
  `}
`,K=({align:e,settings:a,navbarRight:t,isFrontendRoute:o,environmentTag:u,setQuery:h})=>{let b,v=(0,i.DP)(),f=(0,y.d4)(e=>e.user),x=(0,y.d4)(e=>{var a;return null==(a=e.dashboardInfo)?void 0:a.id}),{roles:Y}=f||{},{CSV_EXTENSIONS:S,COLUMNAR_EXTENSIONS:q,EXCEL_EXTENSIONS:K,ALLOWED_EXTENSIONS:B,HAS_GSHEETS_INSTALLED:V}=(0,y.d4)(e=>e.common.conf),[J,Q]=(0,l.useState)(!1),[G,W]=(0,l.useState)(!1),[X,Z]=(0,l.useState)(!1),[ee,ea]=(0,l.useState)(!1),[et,en]=(0,l.useState)(""),el=(0,$.L)("can_sqllab","Superset",Y),ei=(0,$.L)("can_write","Dashboard",Y),er=(0,$.L)("can_write","Chart",Y),eo=(0,$.L)("can_write","Database",Y),es=(0,$.L)("can_write","Dataset",Y),{canUploadData:ed,canUploadCSV:ec,canUploadColumnar:eu,canUploadExcel:eh}=(0,I.c8)(Y,S,q,K,B),ep=el||er||ei,[em,eg]=(0,l.useState)(!1),[eb,ev]=(0,l.useState)(!1),ef=(0,A.N6)(f),e_=em||ef,{setThemeMode:ey,themeMode:ex,clearLocalOverrides:eY,hasDevOverride:ew,canSetMode:eS,canDetectOSPreference:eC}=(0,E.w)(),ek=[{label:(0,C.t)("Data"),icon:(0,n.Y)(m.F.DatabaseOutlined,{"data-test":`menu-item-${(0,C.t)("Data")}`}),childs:[{label:(0,C.t)("Connect database"),name:L.$.DbConnection,perm:eo&&!eb},{label:(0,C.t)("Create dataset"),name:L.$.DatasetCreation,url:"/dataset/add/",perm:es&&eb},{label:(0,C.t)("Connect Google Sheet"),name:L.$.GoogleSheets,perm:eo&&V},{label:(0,C.t)("Upload CSV to database"),name:L.$.CSVUpload,perm:ec&&e_,disable:ef&&!em},{label:(0,C.t)("Upload Excel to database"),name:L.$.ExcelUpload,perm:eh&&e_,disable:ef&&!em},{label:(0,C.t)("Upload Columnar file to database"),name:L.$.ColumnarUpload,perm:eu&&e_,disable:ef&&!em}]},{label:(0,C.t)("SQL query"),url:"/sqllab?new=true",icon:(0,n.Y)(m.F.SearchOutlined,{"data-test":`menu-item-${(0,C.t)("SQL query")}`}),perm:"can_sqllab",view:"Superset"},{label:(0,C.t)("Chart"),url:Number.isInteger(x)?`/chart/add?dashboard_id=${x}`:"/chart/add",icon:(0,n.Y)(m.F.BarChartOutlined,{"data-test":`menu-item-${(0,C.t)("Chart")}`}),perm:"can_write",view:"Chart"},{label:(0,C.t)("Dashboard"),url:"/dashboard/new",icon:(0,n.Y)(m.F.DashboardOutlined,{"data-test":`menu-item-${(0,C.t)("Dashboard")}`}),perm:"can_write",view:"Dashboard"}],eF=()=>{k.A.get({endpoint:`/api/v1/database/?q=${_().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then(({json:e})=>{var a;let t=(null==e||null==(a=e.result)?void 0:a.filter(e=>{var a;return null==e||null==(a=e.engine_information)?void 0:a.supports_file_upload}))||[];eg((null==t?void 0:t.length)>=1)})},eD=()=>{k.A.get({endpoint:`/api/v1/database/?q=${_().encode({filters:[{col:"database_name",opr:"neq",value:"examples"}]})}`}).then(({json:e})=>{ev(e.count>=1)})};(0,l.useEffect)(()=>{ed&&eF()},[ed]),(0,l.useEffect)(()=>{(eo||es)&&eD()},[eo,es]);let e$=(0,C.t)("Enable 'Allow file uploads to database' in any database's settings"),eA=e=>({key:e.name||e.label,label:e.disable?(0,n.Y)(j,{disabled:!0,children:(0,n.Y)(c.m,{placement:"top",title:e$,children:e.label})}):e.url?(0,n.Y)(g.o.Link,{href:(0,D.A)(e.url),children:e.label}):e.label,disabled:e.disable}),eN=U.get("navbar.right"),eO=U.get("navbar.right-menu.item.icon"),eI=()=>{localStorage.removeItem("redux")},eE=(({setThemeMode:e,themeMode:a,hasLocalOverride:t=!1,onClearLocalSettings:i,allowOSPreference:r=!0})=>{let o=a=>{e(a)},s=(0,l.useMemo)(()=>({[z.lJ.DEFAULT]:(0,n.Y)(m.F.SunOutlined,{}),[z.lJ.DARK]:(0,n.Y)(m.F.MoonOutlined,{}),[z.lG.SYSTEM]:(0,n.Y)(m.F.FormatPainterOutlined,{}),[z.lJ.COMPACT]:(0,n.Y)(m.F.CompressOutlined,{})}),[]),d=(0,l.useMemo)(()=>t?(0,n.Y)(c.m,{title:(0,C.t)("This theme is set locally"),placement:"bottom",children:(0,n.Y)(m.F.ThunderboltOutlined,{})}):s[a],[t,s,a]),u=[{key:z.lG.DEFAULT,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(m.F.SunOutlined,{})," ",(0,C.t)("Light")]}),onClick:()=>o(z.lG.DEFAULT)},{key:z.lG.DARK,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(m.F.MoonOutlined,{})," ",(0,C.t)("Dark")]}),onClick:()=>o(z.lG.DARK)},...r?[{key:z.lG.SYSTEM,label:(0,n.FD)(n.FK,{children:[(0,n.Y)(m.F.FormatPainterOutlined,{})," ",(0,C.t)("Match system")]}),onClick:()=>o(z.lG.SYSTEM)}]:[]];i&&t&&(u.push({type:"divider",key:"theme-divider"}),u.push({key:"clear-local",label:(0,n.FD)(n.FK,{children:[(0,n.Y)(m.F.ClearOutlined,{})," ",(0,C.t)("Clear local theme")]}),onClick:i}));let h=[{type:"group",label:(0,C.t)("Theme"),key:"theme-group",children:u}];return{key:"theme-sub-menu",label:d,icon:(0,n.Y)(m.F.DownOutlined,{iconSize:"xs"}),className:"submenu-with-caret",children:h,popupOffset:T.K}})({setThemeMode:ey,themeMode:ex,hasLocalOverride:ew(),onClearLocalSettings:eY,allowOSPreference:eC()}),ez=(({locale:e,languages:a})=>(0,l.useMemo)(()=>{let t=Object.keys(a).map(e=>({key:e,label:(0,n.FD)(P,{className:"f16",children:[(0,n.Y)("i",{className:`flag ${a[e].flag}`}),(0,n.Y)(g.o.Link,{href:a[e].url,children:a[e].name})]}),style:{whiteSpace:"normal",height:"auto"}}));return{key:"language-submenu",type:"submenu",label:(0,n.Y)("span",{className:"f16","aria-label":(0,C.t)("Languages"),children:(0,n.Y)("i",{className:`flag ${a[e].flag}`})}),icon:(0,n.Y)(m.F.CaretDownOutlined,{iconSize:"xs"}),children:t,className:"submenu-with-caret",popupClassName:"language-picker-popup"}},[a,e]))({locale:t.locale||"en",languages:t.languages||{}}),eT=(0,l.useMemo)(()=>{let e,l=[];return eN&&l.push({key:"extension",label:(0,n.Y)(eN,{})}),!t.user_is_anonymous&&ep&&l.push({key:"new-dropdown",label:(0,n.Y)(m.F.PlusOutlined,{"data-test":"new-dropdown-icon"}),className:"submenu-with-caret",icon:(0,n.Y)(m.F.DownOutlined,{iconSize:"xs"}),children:(e=[],null==ek||ek.forEach(a=>{var t;let l=null==(t=a.childs)?void 0:t.some(e=>"object"==typeof e&&!!e.perm);if(a.childs)if(l){let t=[];a.childs.forEach((e,a)=>{"string"!=typeof e&&e.name&&e.perm&&(3===a&&t.push({type:"divider",key:`divider-${a}`}),t.push(eA(e)))}),e.push({key:`sub2_${a.label}`,label:a.label,icon:a.icon,children:t,popupOffset:T.K})}else a.url&&(0,$.L)(a.perm,a.view,Y)&&e.push({key:a.label,label:o(a.url)?(0,n.FD)(p.N_,{to:a.url||"",children:[a.icon," ",a.label]}):(0,n.FD)(g.o.Link,{href:(0,D.A)(a.url||""),children:[a.icon," ",a.label]})});else(0,$.L)(a.perm,a.view,Y)&&e.push({key:a.label,label:o(a.url)?(0,n.FD)(p.N_,{to:a.url||"",children:[a.icon," ",a.label]}):(0,n.FD)(g.o.Link,{href:(0,D.A)(a.url||""),children:[a.icon," ",a.label]})})}),e),popupOffset:T.K}),eS()&&l.push(eE),t.show_language_picker&&ez&&l.push(ez),l.push({key:"settings",label:(0,C.t)("Settings"),icon:(0,n.Y)(m.F.DownOutlined,{iconSize:"xs"}),children:(()=>{let e=[];if(null==a||a.forEach((t,l)=>{var i;let s=[];null==(i=t.childs)||i.forEach(e=>{if("string"!=typeof e){let a=eO?(0,n.FD)(R,{children:[e.label,(0,n.Y)(eO,{menuChild:e})]}):e.label;s.push({key:e.label,label:o(e.url)?(0,n.Y)(p.N_,{to:e.url||"",children:a}):(0,n.Y)(g.o.Link,{href:e.url||"",css:(0,r.AH)`
                    display: flex;
                    align-items: center;
                    line-height: ${10*v.sizeUnit}px;
                  `,children:a})})}}),e.push({type:"group",label:t.label,key:t.label,children:s}),l<a.length-1&&e.push({type:"divider",key:`divider_${l}`})}),!t.user_is_anonymous){e.push({type:"divider",key:"user-divider"});let a=[];t.user_info_url&&a.push({key:"info",label:(0,n.Y)(g.o.Link,{href:t.user_info_url,children:(0,C.t)("Info")})}),a.push({key:"logout",label:(0,n.Y)(g.o.Link,{href:t.user_logout_url,children:(0,C.t)("Logout")}),onClick:eI}),e.push({type:"group",label:(0,C.t)("User"),key:"user-section",children:a})}if(t.version_string||t.version_sha){e.push({type:"divider",key:"version-info-divider"});let a={type:"group",label:(0,C.t)("About"),key:"about-section",children:[{key:"about-info",style:{height:"auto",minHeight:"auto"},label:(0,n.Y)("div",{css:e=>(0,r.AH)`
                    font-size: ${e.fontSizeSM}px;
                    color: ${e.colorTextSecondary||e.colorText};
                    white-space: pre-wrap;
                    padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
                  `,children:[t.show_watermark&&(0,C.t)("Powered by Apache Superset"),t.version_string&&`${(0,C.t)("Version")}: ${t.version_string}`,t.version_sha&&`${(0,C.t)("SHA")}: ${t.version_sha}`,t.build_number&&`${(0,C.t)("Build")}: ${t.build_number}`].filter(Boolean).join(`
`)})}]};e.push(a)}return e})(),className:"submenu-with-caret",popupOffset:T.K}),l},[eN,t,ep,eS,v.colorPrimary,eE,ez,ek,Y,a,eO,eA,eI]);return(0,n.FD)(M,{align:e,children:[eo&&(0,n.Y)(N.Ay,{onHide:()=>{en(""),Q(!1)},show:J,dbEngine:et,onDatabaseAdd:()=>h({databaseAdded:!0})}),ec&&(0,n.Y)(O.A,{onHide:()=>W(!1),show:G,allowedExtensions:S,type:"csv"}),eh&&(0,n.Y)(O.A,{onHide:()=>Z(!1),show:X,allowedExtensions:K,type:"excel"}),eu&&(0,n.Y)(O.A,{onHide:()=>ea(!1),show:ee,allowedExtensions:q,type:"columnar"}),(null==u?void 0:u.text)&&(b=["error","warning","success","processing","default"].includes(u.color)?u.color:"default",(0,n.Y)(d.Tag,{color:b,css:(0,r.AH)`
                border-radius: ${125*v.sizeUnit}px;
              `,children:u.text})),(0,n.Y)(s.W1,{css:(0,r.AH)`
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100%;
          border-bottom: none !important;

          /* Remove the underline from menu items */
          .ant-menu-item:after,
          .ant-menu-submenu:after {
            content: none !important;
          }

          .submenu-with-caret {
            height: 100%;
            padding: 0;
            .ant-menu-submenu-title {
              align-items: center;
              display: flex;
              gap: ${2*v.sizeUnit}px;
              flex-direction: row-reverse;
              height: 100%;
            }
            &.ant-menu-submenu::after {
              inset-inline: ${v.sizeUnit}px;
            }
            &.ant-menu-submenu:hover,
            &.ant-menu-submenu-active {
              .ant-menu-title-content {
                color: ${v.colorPrimary};
              }
            }
          }
        `,selectable:!1,mode:"horizontal",onClick:e=>{e.key===L.$.DbConnection?Q(!0):e.key===L.$.GoogleSheets?(Q(!0),en("Google Sheets")):e.key===L.$.CSVUpload?W(!0):e.key===L.$.ExcelUpload?Z(!0):e.key===L.$.ColumnarUpload&&ea(!0)},onOpenChange:e=>(e.length>1&&!w()(null==e?void 0:e.filter(e=>{var a;return e.includes(`sub2_${null==ek||null==(a=ek[0])?void 0:a.label}`)}))&&(ed&&eF(),(eo||es)&&eD()),null),disabledOverflow:!0,items:eT}),t.documentation_url&&(0,n.FD)(n.FK,{children:[(0,n.Y)(H,{href:t.documentation_url,target:"_blank",rel:"noreferrer",title:t.documentation_text||(0,C.t)("Documentation"),children:t.documentation_icon?(0,n.Y)(m.F.BookOutlined,{}):(0,n.Y)(m.F.QuestionCircleOutlined,{})}),(0,n.Y)("span",{children:" "})]}),t.bug_report_url&&(0,n.FD)(n.FK,{children:[(0,n.Y)(H,{href:t.bug_report_url,target:"_blank",rel:"noreferrer",title:t.bug_report_text||(0,C.t)("Report a bug"),children:t.bug_report_icon?(0,n.Y)("i",{className:t.bug_report_icon}):(0,n.Y)(m.F.BugOutlined,{})}),(0,n.Y)("span",{children:" "})]}),t.user_is_anonymous&&(0,n.FD)(H,{href:t.user_login_url,children:[(0,n.Y)(m.F.LoginOutlined,{})," ",(0,C.t)("Login")]}),(0,n.Y)(F,{version:t.version_string,sha:t.version_sha,build:t.build_number})]})},B=e=>{let[,a]=(0,x.sq)({databaseAdded:x.sJ,datasetAdded:x.sJ});return(0,n.Y)(K,q({setQuery:a},e))};class V extends l.PureComponent{static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,n.Y)(K,q({setQuery:this.noop},this.props)):this.props.children}constructor(...e){super(...e),this.state={hasError:!1},this.noop=()=>{}}}let J=e=>(0,n.Y)(V,q({},e,{children:(0,n.Y)(B,q({},e))}));function Q(){return(Q=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let G=i.I4.header`
  ${({theme:e})=>(0,r.AH)`
    background-color: ${e.colorBgContainer};
    border-bottom: 1px solid ${e.colorBorderSecondary};
    padding: 0 ${4*e.sizeUnit}px;
    z-index: 10;

    &:nth-last-of-type(2) nav {
      margin-bottom: 2px;
    }

    .caret {
      display: none;
    }
  `}
`,W=i.I4.div`
  ${({theme:e})=>(0,r.AH)`
    border-left: 1px solid ${e.colorBorderSecondary};
    border-right: 1px solid ${e.colorBorderSecondary};
    height: 100%;
    color: ${e.colorText};
    padding-left: ${4*e.sizeUnit}px;
    padding-right: ${4*e.sizeUnit}px;
    font-size: ${e.fontSizeLG}px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      max-width: ${58*e.sizeUnit}px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (max-width: 1127px) {
      display: none;
    }
  `}
`,X=(0,i.I4)(s.NG)`
  ${({theme:e})=>(0,r.AH)`
    .ant-menu-item .ant-menu-item-icon + span,
    .ant-menu-submenu-title .ant-menu-item-icon + span,
    .ant-menu-item .anticon + span,
    .ant-menu-submenu-title .anticon + span {
      margin-inline-start: 0;
    }

    .ant-menu-submenu.ant-menu-submenu-horizontal {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0;

      .ant-menu-submenu-title {
        display: flex;
        gap: ${2*e.sizeUnit}px;
        flex-direction: row-reverse;
        align-items: center;
        height: 100%;
        padding: 0 ${4*e.sizeUnit}px;
      }

      &:hover,
      &.ant-menu-submenu-active {
        .ant-menu-title-content {
          color: ${e.colorPrimary};
        }
      }

      &::after {
        content: '';
        position: absolute;
        width: 98%;
        height: 2px;
        background-color: ${e.colorPrimaryBorderHover};
        bottom: ${e.sizeUnit/8}px;
        left: 1%;
        right: auto;
        inset-inline-start: 1%;
        inset-inline-end: auto;
        transform: scale(0);
        transition: 0.2s all ease-out;
      }

      &:hover::after,
      &.ant-menu-submenu-open::after {
        transform: scale(1);
      }
    }

    .ant-menu-submenu-selected.ant-menu-submenu-horizontal::after {
      transform: scale(1);
    }
  `}
`,Z=i.I4.div`
  ${({margin:e})=>(0,r.AH)`
    height: ${e?"auto":"100%"};
    margin: ${null!=e?e:0};
  `}
`,ee=(0,i.I4)(g.o.Link)`
  ${({theme:e})=>(0,r.AH)`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;

    &:focus {
      border-color: transparent;
    }

    &:focus-visible {
      border-color: ${e.colorPrimaryText};
    }
  `}
`,ea=(0,i.I4)(d.Row)`
  height: 100%;
`,et=(0,i.I4)(d.Col)`
  ${({theme:e})=>(0,r.AH)`
    display: flex;
    gap: ${4*e.sizeUnit}px;
  `}
`,en=(0,i.I4)(d.Image)`
  object-fit: contain;
`,{useBreakpoint:el}=d.Grid;function ei({data:{menu:e,brand:a,navbar_right:t,settings:r,environment_tag:s},isFrontendRoute:f=()=>!1}){let _,y=el(),x=(0,b.Q1)(),Y=(0,i.DP)(),w=[],[S,C]=(0,l.useState)(w),k=(0,h.zy)();return((0,l.useEffect)(()=>{let e=k.pathname;switch(!0){case e.startsWith("/dashboard"):C(["Dashboards"]);break;case e.startsWith("/chart")||e.startsWith("/explore"):C(["Charts"]);break;case e.startsWith("/tablemodelview"):C(["Datasets"]);break;case e.startsWith("/sqllab")||e.startsWith("/savedqueryview"):C(["SQL"]);break;default:C(w)}},[k.pathname]),(0,o.P3)(v.vX.standalone)||x.hideNav)?(0,n.Y)(n.FK,{}):(0,n.Y)(G,{className:"top",id:"main-menu",role:"navigation",children:(0,n.FD)(ea,{children:[(0,n.FD)(et,{md:16,xs:24,children:[(0,n.Y)(c.m,{id:"brand-tooltip",placement:"bottomLeft",title:a.tooltip,arrow:{pointAtCenter:!0},children:(_=Y.brandLogoUrl?(0,n.Y)(Z,{margin:Y.brandLogoMargin,children:(0,n.Y)(ee,{href:Y.brandLogoHref,children:(0,n.Y)(en,{preview:!1,src:Y.brandLogoUrl,alt:Y.brandLogoAlt||"Apache Superset",height:Y.brandLogoHeight})})}):f(window.location.pathname)?(0,n.Y)(u.Kt,{className:"navbar-brand",to:a.path,children:(0,n.Y)(en,{preview:!1,src:a.icon,alt:a.alt})}):(0,n.Y)(g.o.Link,{className:"navbar-brand",href:a.path,tabIndex:-1,children:(0,n.Y)(en,{preview:!1,src:a.icon,alt:a.alt})}),(0,n.Y)(n.FK,{children:_}))}),a.text&&(0,n.Y)(W,{children:(0,n.Y)("span",{children:a.text})}),(0,n.Y)(X,{mode:"horizontal","data-test":"navbar-top",className:"main-nav",selectedKeys:S,disabledOverflow:!0,items:e.map(e=>{var a;return(({label:e,childs:a,url:t,isFrontendRoute:l})=>{if(t&&l)return{key:e,label:(0,n.Y)(p.k2,{role:"button",to:t,activeClassName:"is-active",children:e})};if(t)return{key:e,label:(0,n.Y)(g.o.Link,{href:t,children:e})};let i=[];return null==a||a.forEach((a,t)=>{"string"==typeof a&&"-"===a&&"Data"!==e?i.push({type:"divider",key:`divider-${t}`}):"string"!=typeof a&&i.push({key:`${a.label}`,label:a.isFrontendRoute?(0,n.Y)(p.k2,{to:a.url||"",exact:!0,activeClassName:"is-active",children:a.label}):(0,n.Y)(g.o.Link,{href:a.url,children:a.label})})}),{key:e,label:e,icon:(0,n.Y)(m.F.DownOutlined,{iconSize:"xs"}),popupOffset:T.K,children:i}})(Q({},e,{isFrontendRoute:f(e.url),childs:null==(a=e.childs)?void 0:a.map(e=>"string"==typeof e?e:Q({},e,{isFrontendRoute:f(e.url)}))}))})})]}),(0,n.Y)(d.Col,{md:8,xs:24,children:(0,n.Y)(J,{align:y.md?"flex-end":"flex-start",settings:r,navbarRight:t,isFrontendRoute:f,environmentTag:s})})]})})}function er(e){var{data:a}=e,t=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a.indexOf(t=i[n])>=0||(l[t]=e[t]);return l}(e,["data"]);let l=Q({},a),i={Data:!0,Security:!0,Manage:!0},r=[],o=[];return l.menu.forEach(e=>{if(!e)return;let a=[],t=Q({},e);e.childs&&(e.childs.forEach(e=>{"string"==typeof e?a.push(e):e.label&&a.push(e)}),t.childs=a),i.hasOwnProperty(e.name)?o.push(t):r.push(t)}),l.menu=r,l.settings=o,(0,n.Y)(ei,Q({data:l},t))}},50377:(e,a,t)=>{t.d(a,{hT:()=>e3,Ay:()=>e9});var n,l,i,r,o,s=t(2445),d=t(78340),c=t(91054),u=t(21346),h=t(17808),p=t(24002),m=t(61574),g=t(44730),b=t(48446),v=t(63278),f=t(93666),_=t(17437),y=t(89795),x=t(67675),Y=t(46502),w=t(34813);function S(){return(S=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let C=e=>{var{buttonText:a,icon:t,altText:n}=e,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a.indexOf(t=i[n])>=0||(l[t]=e[t]);return l}(e,["buttonText","icon","altText"]);return(0,s.Y)(Y.Z,S({hoverable:!0,role:"button",tabIndex:0,"aria-label":a,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(l.onClick&&l.onClick(e)," "===e.key&&e.preventDefault()),null==l.onKeyDown||l.onKeyDown.call(l,e)},cover:(0,s.Y)("div",{css:(0,_.AH)`
          display: flex;
          align-content: center;
          align-items: center;
          height: 100px;
        `,children:t?(0,s.Y)("img",{src:t,alt:n||a,css:(0,_.AH)`
              width: 100%;
              object-fit: contain;
              height: 48px;
            `}):(0,s.Y)(x.F.DatabaseOutlined,{iconSize:"xxl","aria-label":"default-icon"})}),css:e=>S({padding:3*e.sizeUnit,textAlign:"center"},l.style)},l,{children:(0,s.Y)(w.m,{title:a,children:(0,s.Y)(y.o.Text,{ellipsis:!0,children:a})})}))};var k=t(72017),F=t(30404),D=t(78076),$=t(23941),A=t(22022),N=t(56927),O=t(5009),I=t(11960),E=t(54381),z=t(78113),T=t(62193),P=t.n(T),L=t(44383),q=t.n(L),U=t(83401),M=((n={}).SqlalchemyUri="sqlalchemy_form",n.DynamicForm="dynamic_form",n),R=((l={}).GSheet="gsheets",l.BigQuery="bigquery",l.Snowflake="snowflake",l),H=t(46942),j=t.n(H),K=t(99247),B=t(50888),V=t(23998),J=t(35780),Q=t(24582);let G=(0,_.AH)`
  margin-bottom: 0;
`,W=u.I4.header`
  padding: ${({theme:e})=>2*e.sizeUnit}px
    ${({theme:e})=>4*e.sizeUnit}px;
  line-height: ${({theme:e})=>6*e.sizeUnit}px;

  .helper-top {
    padding-bottom: 0;
    color: ${({theme:e})=>e.colorText};
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    margin: 0;
  }

  .subheader-text {
    line-height: ${({theme:e})=>4.25*e.sizeUnit}px;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${({theme:e})=>e.colorText};
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    margin: 0;
  }

  h4 {
    color: ${({theme:e})=>e.colorText};
    font-size: ${({theme:e})=>e.fontSizeLG}px;
    margin: 0;
    padding: 0;
    line-height: ${({theme:e})=>8*e.sizeUnit}px;
  }

  .select-db {
    padding-bottom: ${({theme:e})=>2*e.sizeUnit}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${({theme:e})=>4*e.sizeUnit}px;
    }
  }
`,X=(0,_.AH)`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,Z=(0,_.AH)`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,ee=e=>(0,_.AH)`
  margin-bottom: ${5*e.sizeUnit}px;
  svg {
    margin-bottom: ${.25*e.sizeUnit}px;
  }
  display: flex;
  align-items: center;
`,ea=e=>(0,_.AH)`
  padding-left: ${2*e.sizeUnit}px;
  padding-right: ${2*e.sizeUnit}px;
`,et=e=>(0,_.AH)`
  padding: ${4*e.sizeUnit}px ${4*e.sizeUnit}px 0;
`,en=e=>(0,_.AH)`
  .ant-select-dropdown {
    height: ${40*e.sizeUnit}px;
  }

  .ant-modal-header {
    padding: ${4.5*e.sizeUnit}px ${4*e.sizeUnit}px
      ${4*e.sizeUnit}px;
  }

  .ant-modal-close-x .close {
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.sizeUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.sizeUnit}px;
  }
`,el=e=>(0,_.AH)`
  margin: ${4*e.sizeUnit}px 0;
`,ei=u.I4.div`
  ${({theme:e})=>(0,_.AH)`
    margin: 0 ${4*e.sizeUnit}px ${4*e.sizeUnit}px;
  `}
`,er=e=>(0,_.AH)`
  .required {
    margin-left: ${e.sizeUnit/2}px;
    color: ${e.colorError};
  }

  .helper {
    display: block;
    padding: ${e.sizeUnit}px 0;
    color: ${e.colorTextSecondary};
    font-size: ${e.fontSizeSM}px;
    text-align: left;
  }
`,eo=e=>(0,_.AH)`
  .form-group {
    margin-bottom: ${4*e.sizeUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.sizeUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.sizeUnit}px;
      }
    }
  }
  .helper {
    color: ${e.colorTextSecondary};
    font-size: ${e.fontSizeSM}px;
    margin-top: ${1.5*e.sizeUnit}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 480px;
  }
`,es=u.I4.div`
  ${({theme:e})=>(0,_.AH)`
    margin-bottom: ${6*e.sizeUnit}px;
    &.mb-0 {
      margin-bottom: 0;
    }
    &.mb-8 {
      margin-bottom: ${2*e.sizeUnit}px;
    }

    &.extra-container {
      padding-top: ${2*e.sizeUnit}px;
    }

    .input-container {
      display: flex;
      align-items: top;

      label {
        display: flex;
        margin-left: ${2*e.sizeUnit}px;
        margin-top: ${.75*e.sizeUnit}px;
        font-family: ${e.fontFamily};
        font-size: ${e.fontSize}px;
      }

      i {
        margin: 0 ${e.sizeUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    textarea {
      height: 160px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colorTextPlaceholder};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${1.5*e.sizeUnit}px ${2*e.sizeUnit}px;
      border-style: none;
      border: 1px solid ${e.colorBorder};
      border-radius: ${e.borderRadius}px;

      &[name='name'] {
        flex: 0 1 auto;
        width: 40%;
      }
    }
    &.expandable {
      height: 0;
      overflow: hidden;
      transition: height 0.25s;
      margin-left: ${8*e.sizeUnit}px;
      margin-bottom: 0;
      padding: 0;
      &.open {
        height: ${108}px;
        padding-right: ${5*e.sizeUnit}px;
      }
    }
  `}
`,ed=(0,u.I4)(Q.iN)`
  flex: 1 1 auto;
  /* Border is already applied by AceEditor itself */
`,ec=u.I4.div`
  padding-top: ${({theme:e})=>e.sizeUnit}px;
  .input-container {
    padding-top: ${({theme:e})=>e.sizeUnit}px;
    padding-bottom: ${({theme:e})=>e.sizeUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>7*e.sizeUnit}px;
    &.open {
      height: ${261}px;
      &.ctas-open {
        height: ${363}px;
      }
    }
  }
`,eu=u.I4.div`
  padding: 0 ${({theme:e})=>4*e.sizeUnit}px;
  margin-top: ${({theme:e})=>6*e.sizeUnit}px;
`,eh=e=>(0,_.AH)`
  text-transform: initial;
  padding: 0 ${4*e.sizeUnit}px;
  padding-right: ${2*e.sizeUnit}px;
`,ep=e=>(0,_.AH)`
  font-size: ${3.5*e.sizeUnit}px;
  text-transform: initial;
  padding-right: ${2*e.sizeUnit}px;
`,em=u.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colorTextSecondary};
    font-size: ${({theme:e})=>e.fontSizeSM}px;
    margin: 0px;
  }
`;u.I4.div`
  color: ${({theme:e})=>e.colorText};
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  font-size: ${({theme:e})=>e.fontSize}px;
`,u.I4.div`
  color: ${({theme:e})=>e.colorText};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
`;let eg=u.I4.div`
  color: ${({theme:e})=>e.colorTextSecondary};
  font-size: ${({theme:e})=>e.fontSizeSM}px;
`,eb=u.I4.div`
  color: ${({theme:e})=>e.colorText};
  font-size: ${({theme:e})=>e.fontSizeLG}px;
  font-weight: ${({theme:e})=>e.fontWeightStrong};
`,ev=u.I4.div`
  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    color: ${({theme:e})=>e.colorText};
    font-size: 11px;
    margin: 0 5px ${({theme:e})=>2*e.sizeUnit}px;
  }

  .label-paste {
    color: ${({theme:e})=>e.colorTextSecondary};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${({theme:e})=>4*e.sizeUnit}px 0;
    display: flex;
    flex-direction: column;
}
  }
  .input-form {
    height: 100px;
    width: 100%;
    border: 1px solid ${({theme:e})=>e.colorBorder};
    border-radius: ${({theme:e})=>e.borderRadius}px;
    resize: vertical;
    padding: ${({theme:e})=>1.5*e.sizeUnit}px
      ${({theme:e})=>2*e.sizeUnit}px;
    &::placeholder {
      color: ${({theme:e})=>e.colorTextPlaceholder};
    }
  }

  .input-container {
    width: 100%;

    button {
      width: fit-content;
    }

    .credentials-uploaded {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>3*e.sizeUnit}px;
      width: fit-content;
    }

    .credentials-uploaded-btn, .credentials-uploaded-remove {
      flex: 0 0 auto;
    }

    /* hide native file upload input element */
    .input-upload {
      display: none !important;
    }
  }`,ef=u.I4.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${({theme:e})=>4*e.sizeUnit}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${({theme:e})=>2.5*e.sizeUnit}px;
  }

  .available {
    margin: ${({theme:e})=>4*e.sizeUnit}px;
    .available-label {
      font-size: ${({theme:e})=>e.fontSizeLG}px;
      font-weight: ${({theme:e})=>e.fontWeightStrong};
      margin: ${({theme:e})=>6*e.sizeUnit}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    font-size: ${({theme:e})=>e.fontSizeSM}px;
  }
`,e_=(0,u.I4)(F.$)`
  width: ${({theme:e})=>40*e.sizeUnit}px;
`,ey=u.I4.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndexPopupBase};
  background: ${({theme:e})=>e.colorBgLayout};
  height: auto;
`,ex=u.I4.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({theme:e})=>e.fontSizeLG}px;
    font-weight: ${({theme:e})=>e.fontWeightStrong};
    margin: ${({theme:e})=>10*e.sizeUnit}px 0 16px;
  }

  .catalog-label {
    margin: 0 0 7px;
  }

  .catalog-name {
    display: flex;
    .catalog-name-input {
      width: 95%;
      margin-bottom: 0px;
    }
  }

  .catalog-name-url {
    margin: 4px 0;
    width: 95%;
  }

  .catalog-add-btn {
    width: 95%;
  }
`,eY=u.I4.div`
  margin: ${({theme:e})=>4*e.sizeUnit}px;
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`;function ew(){return(ew=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let eS=({db:e,onInputChange:a,onTextChange:t,onEditorChange:n,onExtraInputChange:l,onExtraEditorChange:i,extraExtension:r})=>{var o,d,h,m,g;let b=!!(null==e?void 0:e.expose_in_sqllab),v=!!((null==e?void 0:e.allow_ctas)||(null==e?void 0:e.allow_cvas)),f=null==e||null==(o=e.engine_information)?void 0:o.supports_file_upload,_=null==e||null==(d=e.engine_information)?void 0:d.supports_dynamic_catalog,y=JSON.parse((null==e?void 0:e.extra)||"{}",(e,a)=>"engine_params"===e&&"object"==typeof a?JSON.stringify(a):a),x=(0,J.p)(null==e?void 0:e.masked_encrypted_extra,{errorPrefix:"Invalid secure extra JSON"}),Y=Object.keys((null==y?void 0:y.metadata_params)||{}).length?"string"==typeof(null==y?void 0:y.metadata_params)?null==y?void 0:y.metadata_params:JSON.stringify(null==y?void 0:y.metadata_params):"",w=(0,J.p)(Y,{errorPrefix:"Invalid metadata parameters JSON"}),S=Object.keys((null==y?void 0:y.engine_params)||{}).length?"string"==typeof(null==y?void 0:y.engine_params)?null==y?void 0:y.engine_params:JSON.stringify(null==y?void 0:y.engine_params):"",C=(0,J.p)(S,{errorPrefix:"Invalid engine parameters JSON"}),k=(0,u.DP)(),F=null==r?void 0:r.component,D=null==r?void 0:r.logo,N=null==r?void 0:r.description,O=!!(0,K.G7)(K.TO.ForceSqlLabRunAsync)||!!(null==e?void 0:e.allow_run_async),I=(0,K.G7)(K.TO.ForceSqlLabRunAsync),[E,z]=(0,p.useState)(),[T,P]=(0,p.useState)("");return(0,p.useEffect)(()=>{e&&P(((null==y?void 0:y.schemas_allowed_for_file_upload)||[]).join(","))},[null==e?void 0:e.extra]),(0,p.useEffect)(()=>{b||void 0===E||z(void 0)},[b]),(0,s.Y)(B.S,{expandIconPosition:"end",accordion:!0,modalMode:!0,activeKey:E,onChange:e=>z(e),items:[{key:"sql-lab",label:(0,s.Y)(V.s,{title:(0,c.t)("SQL Lab"),subtitle:(0,c.t)("Adjust how this database will interact with SQL Lab."),testId:"sql-lab-label-test"}),children:(0,s.Y)(s.FK,{children:(0,s.FD)(es,{css:G,children:[(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"expose_in_sqllab",name:"expose_in_sqllab",indeterminate:!1,checked:!!(null==e?void 0:e.expose_in_sqllab),onChange:a,children:(0,c.t)("Expose database in SQL Lab")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Allow this database to be queried in SQL Lab")})]}),(0,s.FD)(ec,{className:j()("expandable",{open:b,"ctas-open":v}),children:[(0,s.Y)(es,{css:G,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"allow_ctas",name:"allow_ctas",indeterminate:!1,checked:!!(null==e?void 0:e.allow_ctas),onChange:a,children:(0,c.t)("Allow CREATE TABLE AS")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Allow creation of new tables based on queries")})]})}),(0,s.FD)(es,{css:G,children:[(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"allow_cvas",name:"allow_cvas",indeterminate:!1,checked:!!(null==e?void 0:e.allow_cvas),onChange:a,children:(0,c.t)("Allow CREATE VIEW AS")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Allow creation of new views based on queries")})]}),(0,s.FD)(es,{className:j()("expandable",{open:v}),children:[(0,s.Y)("div",{className:"control-label",children:(0,c.t)("CTAS & CVAS SCHEMA")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(A.Input,{type:"text",name:"force_ctas_schema",placeholder:(0,c.t)("Create or select schema..."),onChange:a,value:(null==e?void 0:e.force_ctas_schema)||""})}),(0,s.Y)("div",{className:"helper",children:(0,c.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")})]})]}),(0,s.Y)(es,{css:G,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"allow_dml",name:"allow_dml",indeterminate:!1,checked:!!(null==e?void 0:e.allow_dml),onChange:a,children:(0,c.t)("Allow DDL and DML")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Allow the execution of DDL (Data Definition Language: CREATE, DROP, TRUNCATE, etc.) and DML (Data Modification Language: INSERT, UPDATE, DELETE, etc)")})]})}),(0,s.Y)(es,{css:G,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"cost_estimate_enabled",name:"cost_estimate_enabled",indeterminate:!1,checked:!!(null==y?void 0:y.cost_estimate_enabled),onChange:l,children:(0,c.t)("Enable query cost estimation")}),(0,s.Y)($.I,{tooltip:(0,c.t)("For Bigquery, Presto and Postgres, shows a button to compute cost before running a query.")})]})}),(0,s.Y)(es,{css:G,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"allows_virtual_table_explore",name:"allows_virtual_table_explore",indeterminate:!1,checked:(null==y?void 0:y.allows_virtual_table_explore)!==!1,onChange:l,children:(0,c.t)("Allow this database to be explored")}),(0,s.Y)($.I,{tooltip:(0,c.t)("When enabled, users are able to visualize SQL Lab results in Explore.")})]})}),(0,s.Y)(es,{css:G,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"disable_data_preview",name:"disable_data_preview",indeterminate:!1,checked:!!(null==y?void 0:y.disable_data_preview),onChange:l,children:(0,c.t)("Disable SQL Lab data preview queries")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")})]})}),(0,s.Y)(es,{children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"expand_rows",name:"expand_rows",indeterminate:!1,checked:!!(null==y||null==(h=y.schema_options)?void 0:h.expand_rows),onChange:l,children:(0,c.t)("Enable row expansion in schemas")}),(0,s.Y)($.I,{tooltip:(0,c.t)("For Trino, describe full schemas of nested ROW types, expanding them with dotted paths")})]})})]})]})})},{key:"performance",label:(0,s.Y)(V.s,{title:(0,c.t)("Performance"),subtitle:(0,c.t)("Adjust performance settings of this database."),testId:"performance-label-test"}),children:(0,s.FD)(s.FK,{children:[(0,s.FD)(es,{className:"mb-8",children:[(0,s.Y)("div",{className:"control-label",children:(0,c.t)("Chart cache timeout")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(A.Input,{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:(0,c.t)("Enter duration in seconds"),onChange:a,"data-test":"cache-timeout-test"})}),(0,s.Y)("div",{className:"helper",children:(0,c.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined.")})]}),(0,s.FD)(es,{children:[(0,s.Y)("div",{className:"control-label",children:(0,c.t)("Schema cache timeout")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(A.Input,{type:"number",name:"schema_cache_timeout",value:(null==y||null==(m=y.metadata_cache_timeout)?void 0:m.schema_cache_timeout)||"",placeholder:(0,c.t)("Enter duration in seconds"),onChange:l,"data-test":"schema-cache-timeout-test"})}),(0,s.Y)("div",{className:"helper",children:(0,c.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires.")})]}),(0,s.FD)(es,{children:[(0,s.Y)("div",{className:"control-label",children:(0,c.t)("Table cache timeout")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(A.Input,{type:"number",name:"table_cache_timeout",value:(null==y||null==(g=y.metadata_cache_timeout)?void 0:g.table_cache_timeout)||"",placeholder:(0,c.t)("Enter duration in seconds"),onChange:l,"data-test":"table-cache-timeout-test"})}),(0,s.Y)("div",{className:"helper",children:(0,c.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. ")})]}),(0,s.Y)(es,{css:{no_margin_bottom:G},children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"allow_run_async",name:"allow_run_async",indeterminate:!1,checked:O,onChange:a,children:(0,c.t)("Asynchronous query execution")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}),I&&(0,s.Y)($.I,{iconStyle:{color:k.colorError},tooltip:(0,c.t)("This option has been disabled by the administrator.")})]})}),(0,s.Y)(es,{css:{no_margin_bottom:G},children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"cancel_query_on_windows_unload",name:"cancel_query_on_windows_unload",indeterminate:!1,checked:!!(null==y?void 0:y.cancel_query_on_windows_unload),onChange:l,children:(0,c.t)("Cancel query on window unload event")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})]})})]})},{key:"security",label:(0,s.Y)(V.s,{title:(0,c.t)("Security"),testId:"security-label-test",subtitle:(0,c.t)("Add extra connection information.")}),children:(0,s.FD)(s.FK,{children:[(0,s.Y)(es,{css:f?{}:G,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"per_user_caching",name:"per_user_caching",indeterminate:!1,checked:!!(null==y?void 0:y.per_user_caching),onChange:l,children:(0,c.t)("Per user caching")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Cache data separately for each user based on their data access roles and permissions. When disabled, a single cache will be used for all users.")})]})}),(0,s.Y)(es,{css:f?{}:G,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"impersonate_user",name:"impersonate_user",indeterminate:!1,checked:!!(null==e?void 0:e.impersonate_user),onChange:a,children:(0,c.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and Google Sheets)")}),(0,s.Y)($.I,{tooltip:(0,c.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")})]})}),f&&(0,s.Y)(es,{css:(null==e?void 0:e.allow_file_upload)?{}:G,children:(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(A.Checkbox,{id:"allow_file_upload",name:"allow_file_upload",indeterminate:!1,checked:!!(null==e?void 0:e.allow_file_upload),onChange:a,children:(0,c.t)("Allow file uploads to database")})})}),f&&!!(null==e?void 0:e.allow_file_upload)&&(0,s.FD)(es,{css:G,children:[(0,s.Y)("div",{className:"control-label",children:(0,c.t)("Schemas allowed for File upload")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(A.Input,{type:"text",name:"schemas_allowed_for_file_upload",value:T,placeholder:"schema1,schema2",onChange:e=>P(e.target.value),onBlur:()=>l({target:{type:"text",name:"schemas_allowed_for_file_upload",value:T}})})}),(0,s.Y)("div",{className:"helper",children:(0,c.t)("A comma-separated list of schemas that files are allowed to upload to.")})]}),(0,s.FD)(es,{children:[(0,s.Y)("div",{className:"control-label",children:(0,c.t)("Secure extra")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(ed,{name:"masked_encrypted_extra",value:(null==e?void 0:e.masked_encrypted_extra)||"",placeholder:(0,c.t)("Secure extra"),onChange:e=>n({json:e,name:"masked_encrypted_extra"}),width:"100%",height:"160px",annotations:x})}),(0,s.Y)("div",{className:"helper",children:(0,s.Y)("div",{children:(0,c.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")})})]}),(0,s.FD)(es,{children:[(0,s.Y)("div",{className:"control-label",children:(0,c.t)("Root certificate")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(A.Input.TextArea,{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,c.t)("Enter CA_BUNDLE"),onChange:t})}),(0,s.Y)("div",{className:"helper",children:(0,c.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.")})]})]})},...r&&F&&N?[ew({key:null==r?void 0:r.title},(null==r.enabled?void 0:r.enabled.call(r))?{}:{collapsible:"disabled"},{label:(0,s.Y)(V.s,{title:(0,s.FD)(s.FK,{children:[D&&(0,s.Y)(D,{}),null==r?void 0:r.title]}),subtitle:(0,s.Y)(N,{})},null==r?void 0:r.title),children:(0,s.Y)(es,{css:G,children:(0,s.Y)(F,{db:e,onEdit:r.onEdit})})})]:[],{key:"other",label:(0,s.Y)(V.s,{title:(0,c.t)("Other"),subtitle:(0,c.t)("Additional settings."),testId:"other-label-test"}),children:(0,s.FD)(s.FK,{children:[(0,s.FD)(es,{children:[(0,s.Y)("div",{className:"control-label",children:(0,c.t)("Metadata Parameters")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(ed,{name:"metadata_params",placeholder:(0,c.t)("Metadata Parameters"),onChange:e=>i({json:e,name:"metadata_params"}),width:"100%",height:"160px",value:Object.keys((null==y?void 0:y.metadata_params)||{}).length?"string"==typeof(null==y?void 0:y.metadata_params)?null==y?void 0:y.metadata_params:JSON.stringify(null==y?void 0:y.metadata_params):"",annotations:w})}),(0,s.Y)("div",{className:"helper",children:(0,s.Y)("div",{children:(0,c.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")})})]}),(0,s.FD)(es,{children:[(0,s.Y)("div",{className:"control-label",children:(0,c.t)("Engine Parameters")}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(ed,{name:"engine_params",placeholder:(0,c.t)("Engine Parameters"),onChange:e=>i({json:e,name:"engine_params"}),width:"100%",height:"160px",value:Object.keys((null==y?void 0:y.engine_params)||{}).length?null==y?void 0:y.engine_params:"",annotations:C})}),(0,s.Y)("div",{className:"helper",children:(0,s.Y)("div",{children:(0,c.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")})})]}),(0,s.FD)(es,{children:[(0,s.Y)("div",{className:"control-label","data-test":"version-label-test",children:(0,c.t)("Version")}),(0,s.Y)("div",{className:"input-container","data-test":"version-spinbutton-test",children:(0,s.Y)(A.Input,{type:"text",name:"version",placeholder:(0,c.t)("Version number"),onChange:l,value:(null==y?void 0:y.version)||""})}),(0,s.Y)("div",{className:"helper",children:(0,c.t)("Specify the database version. This is used with Presto for query cost estimation, and Dremio for syntax changes, among others.")})]}),(0,s.Y)(es,{css:G,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"disable_drill_to_detail",name:"disable_drill_to_detail",indeterminate:!1,checked:!!(null==y?void 0:y.disable_drill_to_detail),onChange:l,children:(0,c.t)("Disable drill to detail")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Disables the drill to detail feature for this database.")})]})}),_&&(0,s.Y)(es,{css:G,children:(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(A.Checkbox,{id:"allow_multi_catalog",name:"allow_multi_catalog",indeterminate:!1,checked:!!(null==y?void 0:y.allow_multi_catalog),onChange:l,children:(0,c.t)("Allow changing catalogs")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Give access to multiple catalogs in a single database connection.")})]})})]})}]})};var eC=t(26655);let ek=({db:e,onInputChange:a,testConnection:t,conf:n,testInProgress:l=!1,children:i})=>{var r,o;let d=(null==eC.A||null==(r=eC.A.DB_MODAL_SQLALCHEMY_FORM)?void 0:r.SQLALCHEMY_DOCS_URL)||"https://docs.sqlalchemy.org/en/13/core/engines.html",u=(null==eC.A||null==(o=eC.A.DB_MODAL_SQLALCHEMY_FORM)?void 0:o.SQLALCHEMY_DISPLAY_TEXT)||"SQLAlchemy docs";return(0,s.FD)(s.FK,{children:[(0,s.FD)(es,{children:[(0,s.FD)("div",{className:"control-label",children:[(0,c.t)("Display Name"),(0,s.Y)("span",{className:"required",children:"*"})]}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(A.Input,{name:"database_name","data-test":"database-name-input",value:(null==e?void 0:e.database_name)||"",placeholder:(0,c.t)("Name your database"),onChange:a})}),(0,s.Y)("div",{className:"helper",children:(0,c.t)("Pick a name to help you identify this database.")})]}),(0,s.FD)(es,{children:[(0,s.FD)("div",{className:"control-label",children:[(0,c.t)("SQLAlchemy URI"),(0,s.Y)("span",{className:"required",children:"*"})]}),(0,s.Y)("div",{className:"input-container",children:(0,s.Y)(A.Input,{name:"sqlalchemy_uri","data-test":"sqlalchemy-uri-input",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(null==e?void 0:e.sqlalchemy_uri_placeholder)||(0,c.t)("dialect+driver://username:password@host:port/database"),onChange:a})}),(0,s.FD)("div",{className:"helper",children:[(0,c.t)("Refer to the")," ",(0,s.Y)("a",{href:d||(null==n?void 0:n.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer",children:u||(null==n?void 0:n.SQLALCHEMY_DISPLAY_TEXT)||""})," ",(0,c.t)("for more information on how to structure your URI.")]})]}),i,(0,s.Y)(F.$,{onClick:t,loading:l,cta:!0,buttonStyle:"link",css:e=>[(0,_.AH)`
  width: 100%;
  border: 1px solid ${e.colorPrimaryText};
  color: ${e.colorPrimaryText};
  &:hover,
  &:focus {
    border: 1px solid ${e.colorPrimary};
    color: ${e.colorPrimary};
  }
`,(0,_.AH)`
  margin-bottom: ${4*e.sizeUnit}px;
`],children:(0,c.t)("Test connection")})]})};var eF=t(83734),eD=t(22023);function e$(){return(e$=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let eA={account:{label:"Account",helpText:(0,c.t)("Copy the identifier of the account you are trying to connect to."),placeholder:(0,c.t)("e.g. xy12345.us-east-2.aws")},warehouse:{label:"Warehouse",placeholder:(0,c.t)("e.g. compute_wh"),className:"form-group-w-50"},role:{label:"Role",placeholder:(0,c.t)("e.g. AccountAdmin"),className:"form-group-w-50"}},eN=({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,field:i})=>{var r,o;return(0,s.Y)(k.M,{id:i,name:i,required:e,value:null==l||null==(r=l.parameters)?void 0:r[i],validationMethods:{onBlur:t},errorMessage:null==n?void 0:n[i],placeholder:eA[i].placeholder,helpText:null==(o=eA[i])?void 0:o.helpText,label:eA[i].label||i,onChange:a.onParametersChange,className:eA[i].className||i})};function eO(e,a,t,n,l,i,r){try{var o=e[i](r),s=o.value}catch(e){t(e);return}o.done?a(s):Promise.resolve(s).then(n,l)}var eI=((i=eI||{})[i.JsonUpload=0]="JsonUpload",i[i.CopyPaste=1]="CopyPaste",i);let eE={gsheets:"service_account_info",bigquery:"credentials_info"},ez=({changeMethods:e,isEditMode:a,db:t,editNewDb:n})=>{var l;let[i,r]=(0,p.useState)([]),[o,d]=(0,p.useState)(0..valueOf()),{addDangerToast:u}=(0,I.Yf)(),h=!a,m=(null==t?void 0:t.engine)&&eE[t.engine],g=null==t||null==(l=t.parameters)?void 0:l[m],b=g&&"object"==typeof g?JSON.stringify(g):g;return(0,p.useEffect)(()=>{e.onParametersChange({target:{name:m,value:""}})},[]),(0,s.FD)(ev,{children:[h&&(0,s.FD)(s.FK,{children:[(0,s.Y)(v.l,{children:(0,c.t)("How do you want to enter service account credentials?")}),(0,s.Y)(f.A,{defaultValue:o,css:(0,_.AH)`
              width: 100%;
            `,onChange:e=>d(e),options:[{value:0,label:(0,c.t)("Upload JSON file")},{value:1,label:(0,c.t)("Copy and Paste JSON credentials")}]})]}),1===o||a||n?(0,s.FD)("div",{className:"input-container",children:[(0,s.Y)(v.l,{children:(0,c.t)("Service Account")}),(0,s.Y)(A.Input.TextArea,{className:"input-form",name:m,value:"boolean"==typeof b?String(b):b,onChange:e.onParametersChange,placeholder:(0,c.t)("Paste content of service credentials JSON file here")})]}):h&&(0,s.Y)("div",{className:"input-container",css:e=>ee(e),children:(0,s.Y)(A.Upload,{accept:".json",maxCount:1,fileList:i,beforeUpload:()=>!1,onRemove:()=>(r([]),e.onParametersChange({target:{name:m,value:""}}),!0),onChange:a=>{var t;return(t=function*(){var t,n;let l=null==(n=a.fileList)||null==(t=n[0])?void 0:t.originFileObj;if(l)try{let t=yield new Promise((e,a)=>{let t=new FileReader;t.readAsText(l),t.onload=()=>e(t.result),t.onerror=a});e.onParametersChange({target:{type:null,name:m,value:t,checked:!1}}),r(a.fileList)}catch(e){r([]),u((0,c.t)("Unable to read the file, please refresh and try again."))}else e.onParametersChange({target:{name:m,value:""}})},function(){var e=this,a=arguments;return new Promise(function(n,l){var i=t.apply(e,a);function r(e){eO(i,n,l,r,o,"next",e)}function o(e){eO(i,n,l,r,o,"throw",e)}r(void 0)})})()},children:(0,s.Y)(F.$,{icon:(0,s.Y)(x.F.LinkOutlined,{iconSize:"m"}),children:(0,c.t)("Upload credentials")})})})]})},eT=({clearValidationErrors:e,changeMethods:a,db:t,dbModel:n})=>{var l,i,r;let[o,d]=(0,p.useState)(!1),u=(0,K.G7)(K.TO.SshTunneling),h=(null==n||null==(l=n.engine_information)?void 0:l.disable_ssh_tunneling)||!1,m=u&&!h;return(0,p.useEffect)(()=>{var e;m&&(null==t||null==(e=t.parameters)?void 0:e.ssh)!==void 0&&d(t.parameters.ssh)},[null==t||null==(i=t.parameters)?void 0:i.ssh,m]),(0,p.useEffect)(()=>{var e;m&&(null==t||null==(e=t.parameters)?void 0:e.ssh)===void 0&&!P()(null==t?void 0:t.ssh_tunnel)&&a.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:!0}})},[a,null==t||null==(r=t.parameters)?void 0:r.ssh,null==t?void 0:t.ssh_tunnel,m]),m?(0,s.FD)("div",{css:e=>ee(e),children:[(0,s.Y)(A.Switch,{checked:o,onChange:t=>{d(t),a.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:t}}),e()},"data-test":"ssh-tunnel-switch"}),(0,s.Y)("span",{css:ea,children:(0,c.t)("SSH Tunnel")}),(0,s.Y)($.I,{tooltip:(0,c.t)("SSH Tunnel configuration parameters"),placement:"right"})]}):null},eP=["host","port","database","default_catalog","default_schema","username","password","access_token","http_path","http_path_field","database_name","project_id","catalog","credentials_info","service_account_info","query","encryption","account","warehouse","role","ssh","oauth2_client_info"],eL={host:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(k.M,{isValidating:i,id:"host",name:"host",value:null==l||null==(r=l.parameters)?void 0:r.host,required:e,hasTooltip:!0,tooltipText:(0,c.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.host,placeholder:(0,c.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,c.t)("Host"),onChange:a.onParametersChange})},http_path:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r,o;let d=JSON.parse((null==l?void 0:l.extra)||"{}");return(0,s.Y)(k.M,{isValidating:i,id:"http_path",name:"http_path",required:e,value:null==(o=d.engine_params)||null==(r=o.connect_args)?void 0:r.http_path,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.http_path,placeholder:(0,c.t)("e.g. sql/protocolv1/o/12345"),label:"HTTP Path",onChange:a.onExtraInputChange,helpText:(0,c.t)("Copy the name of the HTTP Path of your cluster.")})},http_path_field:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(k.M,{id:"http_path_field",name:"http_path_field",required:e,isValidating:i,value:null==l||null==(r=l.parameters)?void 0:r.http_path_field,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.http_path,placeholder:(0,c.t)("e.g. sql/protocolv1/o/12345"),label:"HTTP Path",onChange:a.onParametersChange,helpText:(0,c.t)("Copy the name of the HTTP Path of your cluster.")})},port:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(s.FK,{children:(0,s.Y)(k.M,{id:"port",name:"port",type:"number",isValidating:i,required:e,value:null==l||null==(r=l.parameters)?void 0:r.port,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.port,placeholder:(0,c.t)("e.g. 5432"),className:"form-group-w-50",label:(0,c.t)("Port"),onChange:a.onParametersChange})})},database:({required:e,changeMethods:a,getValidation:t,validationErrors:n,placeholder:l,db:i,isValidating:r})=>{var o;return(0,s.Y)(k.M,{isValidating:r,id:"database",name:"database",required:e,value:null==i||null==(o=i.parameters)?void 0:o.database,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.database,placeholder:null!=l?l:(0,c.t)("e.g. world_population"),label:(0,c.t)("Database name"),onChange:a.onParametersChange,helpText:(0,c.t)("Copy the name of the database you are trying to connect to.")})},default_catalog:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(k.M,{isValidating:i,id:"default_catalog",name:"default_catalog",required:e,value:null==l||null==(r=l.parameters)?void 0:r.default_catalog,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.default_catalog,placeholder:(0,c.t)("e.g. hive_metastore"),label:(0,c.t)("Default Catalog"),onChange:a.onParametersChange,helpText:(0,c.t)("The default catalog that should be used for the connection.")})},default_schema:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(k.M,{id:"default_schema",name:"default_schema",required:e,isValidating:i,value:null==l||null==(r=l.parameters)?void 0:r.default_schema,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.default_schema,placeholder:(0,c.t)("e.g. default"),label:(0,c.t)("Default Schema"),onChange:a.onParametersChange,helpText:(0,c.t)("The default schema that should be used for the connection.")})},username:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>{var r;return(0,s.Y)(k.M,{id:"username",name:"username",required:e,isValidating:i,value:null==l||null==(r=l.parameters)?void 0:r.username,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.username,placeholder:(0,c.t)("e.g. Analytics"),label:(0,c.t)("Username"),onChange:a.onParametersChange})},password:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isEditMode:i,isValidating:r})=>{var o;return(0,s.Y)(k.M,{id:"password",name:"password",required:e,isValidating:r,visibilityToggle:!i,value:null==l||null==(o=l.parameters)?void 0:o.password,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.password,placeholder:(0,c.t)("e.g. ********"),label:(0,c.t)("Password"),onChange:a.onParametersChange})},oauth2_client_info:({changeMethods:e,db:a,default_value:t})=>{var n,l,i,r,o;let d=JSON.parse((null==a?void 0:a.masked_encrypted_extra)||"{}"),[c,u]=(0,p.useState)({id:(null==(n=d.oauth2_client_info)?void 0:n.id)||"",secret:(null==(l=d.oauth2_client_info)?void 0:l.secret)||"",authorization_request_uri:(null==(i=d.oauth2_client_info)?void 0:i.authorization_request_uri)||(null==t?void 0:t.authorization_request_uri)||"",token_request_uri:(null==(r=d.oauth2_client_info)?void 0:r.token_request_uri)||(null==t?void 0:t.token_request_uri)||"",scope:(null==(o=d.oauth2_client_info)?void 0:o.scope)||(null==t?void 0:t.scope)||""}),h=a=>t=>{let n=e$({},c,{[a]:t.target.value});u(n),e.onParametersChange({target:{type:"object",name:"oauth2_client_info",value:n}})};return(0,s.Y)(B.S,{items:[{key:"oauth2-client-information",label:"OAuth2 client information",children:(0,s.FD)(s.FK,{children:[(0,s.Y)(eD.e,{label:"Client ID",children:(0,s.Y)(A.Input,{"data-test":"client-id",value:c.id,onChange:h("id")})}),(0,s.Y)(eD.e,{label:"Client Secret",children:(0,s.Y)(A.Input,{"data-test":"client-secret",type:"password",value:c.secret,onChange:h("secret")})}),(0,s.Y)(eD.e,{label:"Authorization Request URI",children:(0,s.Y)(A.Input,{"data-test":"client-authorization-request-uri",placeholder:"https://",value:c.authorization_request_uri,onChange:h("authorization_request_uri")})}),(0,s.Y)(eD.e,{label:"Token Request URI",children:(0,s.Y)(A.Input,{"data-test":"client-token-request-uri",placeholder:"https://",value:c.token_request_uri,onChange:h("token_request_uri")})}),(0,s.Y)(eD.e,{label:"Scope",children:(0,s.Y)(A.Input,{"data-test":"client-scope",value:c.scope,onChange:h("scope")})})]})}]})},access_token:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isEditMode:i,default_value:r,description:o})=>{var d;return(0,s.Y)(k.M,{id:"access_token",name:"access_token",required:e,visibilityToggle:!i,value:null==l||null==(d=l.parameters)?void 0:d.access_token,validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.access_token,placeholder:(0,c.t)("Paste your access token here"),get_url:"string"==typeof r&&r.includes("https://")?r:null,description:o,label:(0,c.t)("Access token"),onChange:a.onParametersChange})},database_name:({changeMethods:e,getValidation:a,validationErrors:t,db:n,isValidating:l})=>(0,s.Y)(s.FK,{children:(0,s.Y)(k.M,{id:"database_name",name:"database_name",required:!0,isValidating:l,value:null==n?void 0:n.database_name,validationMethods:{onBlur:a},errorMessage:null==t?void 0:t.database_name,placeholder:"",label:(0,c.t)("Display Name"),onChange:e.onChange,helpText:(0,c.t)("Pick a nickname for how the database will display in Superset.")})}),query:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l,isValidating:i})=>(0,s.Y)(k.M,{id:"query_input",name:"query_input",required:e,isValidating:i,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:t},errorMessage:null==n?void 0:n.query,placeholder:(0,c.t)("e.g. param1=value1&param2=value2"),label:(0,c.t)("Additional Parameters"),onChange:a.onQueryChange,helpText:(0,c.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:a,db:t,sslForced:n})=>{var l;return(0,s.FD)("div",{css:e=>ee(e),children:[(0,s.Y)(A.Switch,{disabled:n&&!e,checked:(null==t||null==(l=t.parameters)?void 0:l.encryption)||n,onChange:e=>{a.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,s.Y)("span",{css:ea,children:"SSL"}),(0,s.Y)($.I,{tooltip:(0,c.t)('SSL Mode "require" will be used.'),placement:"right"})]})},credentials_info:ez,service_account_info:ez,catalog:({required:e,changeMethods:a,getValidation:t,validationErrors:n,db:l})=>{let i=(null==l?void 0:l.catalog)||[],r=n||{};return(0,s.FD)(ex,{children:[(0,s.Y)(y.o.Title,{level:4,className:"gsheet-title",children:(0,c.t)("Connect Google Sheets as tables to this database")}),(0,s.FD)("div",{children:[null==i?void 0:i.map((n,l)=>{var o,d;return(0,s.FD)(s.FK,{children:[(0,s.Y)(v.l,{className:"catalog-label",children:(0,c.t)("Google Sheet Name and URL")}),(0,s.FD)("div",{className:"catalog-name",children:[(0,s.Y)(k.M,{className:"catalog-name-input",required:e,validationMethods:{onBlur:t},errorMessage:null==(o=r[l])?void 0:o.name,placeholder:(0,c.t)("Enter a name for this sheet"),onChange:e=>{a.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:n.name}),(null==i?void 0:i.length)>1&&(0,s.Y)(x.F.CloseOutlined,{css:e=>(0,_.AH)`
                    align-self: center;
                    background: ${e.colorFillSecondary};
                    margin: 5px 5px 8px 5px;

                    &.anticon > * {
                      line-height: 0;
                    }
                  `,iconSize:"m",onClick:()=>a.onRemoveTableCatalog(l)})]}),(0,s.Y)(k.M,{className:"catalog-name-url",required:e,validationMethods:{onBlur:t},errorMessage:null==(d=r[l])?void 0:d.url,placeholder:(0,c.t)("Paste the shareable Google Sheet URL here"),onChange:e=>a.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:n.value})]})}),(0,s.FD)(e_,{className:"catalog-add-btn",onClick:()=>{a.onAddTableCatalog()},children:["+ ",(0,c.t)("Add sheet")]})]}),(0,s.Y)("div",{className:"helper",children:(0,s.Y)("div",{children:(0,c.t)("In order to connect to non-public sheets you need to either provide a service account or configure an OAuth2 client.")})})]})},warehouse:eN,role:eN,account:eN,ssh:null!=(o=(0,d.a)().get("ssh_tunnel.form.switch"))?o:eT,project_id:({changeMethods:e,getValidation:a,validationErrors:t,db:n,isValidating:l})=>{var i;return(0,s.Y)(s.FK,{children:(0,s.Y)(k.M,{id:"project_id",name:"project_id",required:!0,isValidating:l,value:null==n||null==(i=n.parameters)?void 0:i.project_id,validationMethods:{onBlur:a},errorMessage:null==t?void 0:t.project_id,placeholder:"your-project-1234-a1",label:(0,c.t)("Project Id"),onChange:e.onParametersChange,helpText:(0,c.t)("Enter the unique project id for your database.")})})}},eq=({dbModel:e,db:a,editNewDb:t,getPlaceholder:n,getValidation:l,isEditMode:i=!1,onAddTableCatalog:r,onChange:o,onExtraInputChange:d,onEncryptedExtraInputChange:c,onParametersChange:u,onParametersUploadFileChange:h,onQueryChange:p,onRemoveTableCatalog:m,sslForced:g,validationErrors:b,clearValidationErrors:v,isValidating:f})=>{let y=null==e?void 0:e.parameters;return(0,s.Y)(eF.l,{children:(0,s.Y)("div",{css:e=>[et,(0,_.AH)`
  label {
    color: ${e.colorText};
    font-size: ${e.fontSizeSM}px;
    margin-bottom: 0;
  }
`],children:y&&eP.filter(e=>Object.keys(y.properties).includes(e)||"database_name"===e).map(e=>{var s,_,x;return eL[e]({required:null==(s=y.required)?void 0:s.includes(e),changeMethods:{onParametersChange:u,onChange:o,onQueryChange:p,onParametersUploadFileChange:h,onAddTableCatalog:r,onRemoveTableCatalog:m,onExtraInputChange:d,onEncryptedExtraInputChange:c},validationErrors:b,getValidation:l,clearValidationErrors:v,db:a,key:e,field:e,default_value:null==(_=y.properties[e])?void 0:_.default,description:null==(x=y.properties[e])?void 0:x.description,isEditMode:i,sslForced:g,editNewDb:t,isValidating:f,placeholder:n?n(e):void 0})})})})},eU=(0,E.xK)(),eM=eU?eU.support:"https://superset.apache.org/docs/configuration/databases#installing-database-drivers",eR={postgresql:"https://superset.apache.org",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},eH=({isLoading:e,isEditMode:a,useSqlAlchemyForm:t,hasConnectedDb:n,db:l,dbName:i,dbModel:r,editNewDb:o,fileList:d})=>{var u;let h=d&&(null==d?void 0:d.length)>0,p=(0,s.FD)(W,{children:[(0,s.Y)(eg,{children:null==l?void 0:l.backend}),(0,s.Y)(eb,{children:i})]}),m=(0,s.FD)(W,{children:[(0,s.Y)("p",{className:"helper-top",children:(0,c.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})}),(0,s.Y)(y.o.Title,{level:4,children:(0,c.t)("Enter Primary Credentials")}),(0,s.FD)("p",{className:"helper-bottom",children:[(0,c.t)("Need help? Learn how to connect your database")," ",(0,s.Y)("a",{href:(null==eU?void 0:eU.default)||eM,target:"_blank",rel:"noopener noreferrer",children:(0,c.t)("here")}),"."]})]}),g=(0,s.Y)(ey,{children:(0,s.FD)(W,{children:[(0,s.Y)("p",{className:"helper-top",children:(0,c.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:3,stepLast:3})}),(0,s.Y)(y.o.Title,{level:4,className:"step-3-text",children:(0,c.t)("Database connected")}),(0,s.Y)("p",{className:"subheader-text",children:(0,c.t)(`Create a dataset to begin visualizing your data as a chart or go to
          SQL Lab to query your data.`)})]})}),b=(0,s.Y)(ey,{children:(0,s.FD)(W,{children:[(0,s.Y)("p",{className:"helper-top",children:(0,c.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:3})}),(0,s.Y)(y.o.Title,{level:4,children:(0,c.t)("Enter the required %(dbModelName)s credentials",{dbModelName:r.name})}),(0,s.FD)("p",{className:"helper-bottom",children:[(0,c.t)("Need help? Learn more about")," ",(0,s.FD)("a",{href:(u=null==l?void 0:l.engine)?eU?eU[u]||eU.default:eR[u]?eR[u]:`https://superset.apache.org/docs/databases/${u}`:null,target:"_blank",rel:"noopener noreferrer",children:[(0,c.t)("connecting to %(dbModelName)s",{dbModelName:r.name}),"."]})]})]})}),v=(0,s.Y)(ey,{children:(0,s.Y)(W,{children:(0,s.FD)("div",{className:"select-db",children:[(0,s.Y)("p",{className:"helper-top",children:(0,c.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:1,stepLast:3})}),(0,s.Y)(y.o.Title,{level:4,children:(0,c.t)("Select a database to connect")})]})})}),f=(0,s.Y)(ey,{children:(0,s.FD)(W,{children:[(0,s.Y)("p",{className:"helper-top",children:(0,c.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})}),(0,s.Y)(y.o.Title,{level:4,children:(0,c.t)("Enter the required %(dbModelName)s credentials",{dbModelName:r.name})}),(0,s.Y)("p",{className:"helper-bottom",children:h?d[0].name:""})]})});return h?f:e?(0,s.Y)(s.FK,{}):a?p:t?m:n&&!o?g:l||o?b:v};var ej=t(7973);let eK=u.I4.div`
  padding-top: ${({theme:e})=>2*e.sizeUnit}px;
  label {
    color: ${({theme:e})=>e.colorText};
    margin-bottom: ${({theme:e})=>2*e.sizeUnit}px;
  }
`,eB=(0,u.I4)(A.Row)`
  padding-bottom: ${({theme:e})=>2*e.sizeUnit}px;
`,eV=(0,u.I4)(eF.l.Item)`
  margin-bottom: 0 !important;
`,eJ=(0,u.I4)(A.Input.Password)`
  margin: ${({theme:e})=>`${e.sizeUnit}px 0 ${2*e.sizeUnit}px`};
`,eQ=({db:e,onSSHTunnelParametersChange:a,setSSHTunnelLoginMethod:t})=>{var n,l,i,r,o,d;let[u,h]=(0,p.useState)(e3.Password);return(0,s.FD)(eF.l,{children:[(0,s.FD)(eB,{gutter:16,children:[(0,s.Y)(A.Col,{xs:24,md:12,children:(0,s.FD)(eK,{children:[(0,s.Y)(v.l,{htmlFor:"server_address",required:!0,children:(0,c.t)("SSH Host")}),(0,s.Y)(A.Input,{name:"server_address",type:"text",placeholder:(0,c.t)("e.g. 127.0.0.1"),value:(null==e||null==(n=e.ssh_tunnel)?void 0:n.server_address)||"",onChange:a,"data-test":"ssh-tunnel-server_address-input"})]})}),(0,s.Y)(A.Col,{xs:24,md:12,children:(0,s.FD)(eK,{children:[(0,s.Y)(v.l,{htmlFor:"server_port",required:!0,children:(0,c.t)("SSH Port")}),(0,s.Y)(A.Input,{name:"server_port",placeholder:(0,c.t)("22"),type:"number",value:null==e||null==(l=e.ssh_tunnel)?void 0:l.server_port,onChange:a,"data-test":"ssh-tunnel-server_port-input"})]})})]}),(0,s.Y)(eB,{gutter:16,children:(0,s.Y)(A.Col,{xs:24,children:(0,s.FD)(eK,{children:[(0,s.Y)(v.l,{htmlFor:"username",required:!0,children:(0,c.t)("Username")}),(0,s.Y)(A.Input,{name:"username",type:"text",placeholder:(0,c.t)("e.g. Analytics"),value:(null==e||null==(i=e.ssh_tunnel)?void 0:i.username)||"",onChange:a,"data-test":"ssh-tunnel-username-input"})]})})}),(0,s.Y)(eB,{gutter:16,children:(0,s.Y)(A.Col,{xs:24,children:(0,s.FD)(eK,{children:[(0,s.Y)(v.l,{htmlFor:"use_password",required:!0,children:(0,c.t)("Login with")}),(0,s.Y)(eV,{name:"use_password",initialValue:u,children:(0,s.FD)(ej.s.Group,{onChange:({target:{value:e}})=>{h(e),t(e)},children:[(0,s.Y)(ej.s,{value:e3.Password,"data-test":"ssh-tunnel-use_password-radio",children:(0,c.t)("Password")}),(0,s.Y)(ej.s,{value:e3.PrivateKey,"data-test":"ssh-tunnel-use_private_key-radio",children:(0,c.t)("Private Key & Password")})]})})]})})}),u===e3.Password&&(0,s.Y)(eB,{gutter:16,children:(0,s.Y)(A.Col,{xs:24,children:(0,s.FD)(eK,{children:[(0,s.Y)(v.l,{htmlFor:"password",required:!0,children:(0,c.t)("SSH Password")}),(0,s.Y)(eJ,{name:"password",placeholder:(0,c.t)("e.g. ********"),value:(null==e||null==(r=e.ssh_tunnel)?void 0:r.password)||"",onChange:a,"data-test":"ssh-tunnel-password-input",iconRender:e=>e?(0,s.Y)(w.m,{title:"Hide password.",children:(0,s.Y)(x.F.EyeInvisibleOutlined,{})}):(0,s.Y)(w.m,{title:"Show password.",children:(0,s.Y)(x.F.EyeOutlined,{})}),role:"textbox"})]})})}),u===e3.PrivateKey&&(0,s.FD)(s.FK,{children:[(0,s.Y)(eB,{gutter:16,children:(0,s.Y)(A.Col,{xs:24,children:(0,s.FD)(eK,{children:[(0,s.Y)(v.l,{htmlFor:"private_key",required:!0,children:(0,c.t)("Private Key")}),(0,s.Y)(A.Input.TextArea,{name:"private_key",placeholder:(0,c.t)("Paste Private Key here"),value:(null==e||null==(o=e.ssh_tunnel)?void 0:o.private_key)||"",onChange:a,"data-test":"ssh-tunnel-private_key-input",rows:4})]})})}),(0,s.Y)(eB,{gutter:16,children:(0,s.Y)(A.Col,{xs:24,children:(0,s.FD)(eK,{children:[(0,s.Y)(v.l,{htmlFor:"private_key_password",required:!0,children:(0,c.t)("Private Key Password")}),(0,s.Y)(eJ,{name:"private_key_password",placeholder:(0,c.t)("e.g. ********"),value:(null==e||null==(d=e.ssh_tunnel)?void 0:d.private_key_password)||"",onChange:a,"data-test":"ssh-tunnel-private_key_password-input",iconRender:e=>e?(0,s.Y)(w.m,{title:"Hide password.",children:(0,s.Y)(x.F.EyeInvisibleOutlined,{})}):(0,s.Y)(w.m,{title:"Show password.",children:(0,s.Y)(x.F.EyeOutlined,{})}),role:"textbox"})]})})})]})]})};function eG(e,a,t,n,l,i,r){try{var o=e[i](r),s=o.value}catch(e){t(e);return}o.done?a(s):Promise.resolve(s).then(n,l)}function eW(e){return function(){var a=this,t=arguments;return new Promise(function(n,l){var i=e.apply(a,t);function r(e){eG(i,n,l,r,o,"next",e)}function o(e){eG(i,n,l,r,o,"throw",e)}r(void 0)})}}function eX(){return(eX=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let eZ=(0,d.a)(),e0=JSON.stringify({allows_virtual_table_explore:!0}),e1="basic",e4={[R.GSheet]:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},e2=(0,u.I4)(b.Ay)`
  .ant-tabs-content {
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`,e5=u.I4.div`
  ${({theme:e})=>`
    margin: ${8*e.sizeUnit}px ${4*e.sizeUnit}px;
  `};
`,e6=u.I4.div`
  ${({theme:e})=>`
    padding: 0px ${4*e.sizeUnit}px;
  `};
`;var e3=((r={})[r.Password=0]="Password",r[r.PrivateKey=1]="PrivateKey",r);let e8=u.I4.div`
  display: flex;
  justify-content: center;
  padding: ${({theme:e})=>5*e.sizeUnit}px;
`;function e7(e,a){var t,n,l,i,r,o,s,d,c,u;let h,p,m=eX({},e),g="",b=JSON.parse(m.extra||"{}");switch(a.type){case 4:try{p=JSON.parse(a.payload.json||"{}")}catch(e){p=a.payload.json}return eX({},m,{extra:JSON.stringify(eX({},b,{[a.payload.name]:p}))});case 6:return eX({},m,{masked_encrypted_extra:JSON.stringify(eX({},JSON.parse(m.masked_encrypted_extra||"{}"),{[a.payload.name]:a.payload.value}))});case 5:if("schema_cache_timeout"===a.payload.name||"table_cache_timeout"===a.payload.name)return eX({},m,{extra:JSON.stringify(eX({},b,{metadata_cache_timeout:eX({},null==b?void 0:b.metadata_cache_timeout,{[a.payload.name]:Number(a.payload.value)})}))});if("schemas_allowed_for_file_upload"===a.payload.name){let e=(a.payload.value||"").split(",").map(e=>e.trim()).filter(e=>e.length>0);return eX({},m,{extra:JSON.stringify(eX({},b,{schemas_allowed_for_file_upload:e}))})}if("http_path"===a.payload.name)return eX({},m,{extra:JSON.stringify(eX({},b,{engine_params:{connect_args:{[a.payload.name]:null==(t=a.payload.value)?void 0:t.trim()}}}))});if("expand_rows"===a.payload.name)return eX({},m,{extra:JSON.stringify(eX({},b,{schema_options:eX({},null==b?void 0:b.schema_options,{[a.payload.name]:"checked"in a.payload?!!a.payload.checked:!!a.payload.value})}))});return eX({},m,{extra:JSON.stringify(eX({},b,{[a.payload.name]:"checkbox"===a.payload.type?a.payload.checked:a.payload.value}))});case 8:if("checkbox"===a.payload.type)return eX({},m,{[a.payload.name]:a.payload.checked});return eX({},m,{[a.payload.name]:a.payload.value});case 9:if((null==(n=a.payload.type)?void 0:n.startsWith("catalog"))&&void 0!==m.catalog){let e=[...m.catalog],t=null==(l=a.payload.type)?void 0:l.split("-")[1],n=e[parseInt(t,10)]||{};return void 0!==a.payload.value&&(n[a.payload.name]=a.payload.value),e.splice(parseInt(t,10),1,n),h=e.reduce((e,a)=>{let t=eX({},e);return t[a.name]=a.value,t},{}),eX({},m,{catalog:e,parameters:eX({},m.parameters,{catalog:h})})}return eX({},m,{parameters:eX({},m.parameters,{[a.payload.name]:a.payload.value})});case 14:return eX({},m,{ssh_tunnel:eX({},m.ssh_tunnel,{[a.payload.name]:a.payload.value})});case 15:{let e={};if((null==m?void 0:m.ssh_tunnel)&&(e=q()(m.ssh_tunnel,["id","server_address","server_port","username"])),1===a.payload.login_method)return eX({},m,{ssh_tunnel:eX({private_key:null==m||null==(i=m.ssh_tunnel)?void 0:i.private_key,private_key_password:null==m||null==(r=m.ssh_tunnel)?void 0:r.private_key_password},e)});if(0===a.payload.login_method)return eX({},m,{ssh_tunnel:eX({password:null==m||null==(o=m.ssh_tunnel)?void 0:o.password},e)});return eX({},m)}case 16:return eX({},m,{ssh_tunnel:void 0});case 0:if(void 0!==m.catalog)return eX({},m,{catalog:[...m.catalog,{name:"",value:""}]});return eX({},m,{catalog:[{name:"",value:""}]});case 11:return null==(s=m.catalog)||s.splice(a.payload.indexToDelete,1),eX({},m);case 3:return eX({},m,{[a.payload.name]:a.payload.json});case 10:return eX({},m,{parameters:eX({},m.parameters,{query:Object.fromEntries(new URLSearchParams(a.payload.value))}),query_input:a.payload.value});case 13:return eX({},m,{[a.payload.name]:a.payload.value});case 7:if(g=Object.entries((null==(c=a.payload)||null==(d=c.parameters)?void 0:d.query)||{}).map(([e,a])=>`${e}=${a}`).join("&"),a.payload.masked_encrypted_extra&&a.payload.configuration_method===M.DynamicForm){let e=null==(u=eX({},JSON.parse(a.payload.extra||"{}")).engine_params)?void 0:u.catalog,t=Object.entries(e||{}).map(([e,a])=>({name:e,value:a}));return eX({},a.payload,{engine:a.payload.backend||m.engine,configuration_method:a.payload.configuration_method,catalog:t,parameters:eX({},a.payload.parameters||m.parameters,{catalog:e}),query_input:g})}return eX({},a.payload,{masked_encrypted_extra:a.payload.masked_encrypted_extra||"",engine:a.payload.backend||m.engine,configuration_method:a.payload.configuration_method,parameters:a.payload.parameters||m.parameters,ssh_tunnel:a.payload.ssh_tunnel||m.ssh_tunnel,query_input:g});case 2:return eX({},a.payload,{extra:e0,expose_in_sqllab:!0});case 1:return eX({},a.payload);default:return null}}let e9=(0,I.Ay)(({addDangerToast:e,addSuccessToast:a,onDatabaseAdd:t,onHide:n,show:l,databaseId:i,dbEngine:r})=>{var o,d,u,b,y,Y,w,S,I;let[T,L]=(0,p.useReducer)(e7,null),{state:{loading:q,resource:H,error:j},fetchResource:K,createResource:B,updateResource:V,clearError:J}=(0,E.fn)("database",(0,c.t)("database"),e,"connection"),[Q,G]=(0,p.useState)(e1),[W,ea]=(0,E.d5)(),[es,ed,ec,eg,eb,ev]=(0,E.Y8)(),[ex,ew]=(0,p.useState)(!1),[eC,eF]=(0,p.useState)(!1),[eD,e$]=(0,p.useState)(""),[eA,eN]=(0,p.useState)(!1),[eO,eI]=(0,p.useState)(!1),[eE,ez]=(0,p.useState)(!1),[eP,eL]=(0,p.useState)({}),[eU,eR]=(0,p.useState)({}),[ej,eK]=(0,p.useState)({}),[eB,eV]=(0,p.useState)({}),[eJ,eG]=(0,p.useState)(!1),[e0,e3]=(0,p.useState)([]),[e9,ae]=(0,p.useState)(!1),[aa,at]=(0,p.useState)(),[an,al]=(0,p.useState)([]),[ai,ar]=(0,p.useState)([]),[ao,as]=(0,p.useState)([]),[ad,ac]=(0,p.useState)([]),[au,ah]=(0,p.useState)({}),ap=null!=(b=eZ.get("ssh_tunnel.form.switch"))?b:eT,[am,ag]=(0,p.useState)(void 0),ab=eZ.get("databaseconnection.extraOption");ab&&(ab=eX({},ab,{onEdit:e=>{ah(eX({},au,e))}}));let av=(0,z.B)(),af=(0,E.g9)(),a_=(0,E.Fp)(),ay=!!i,ax=a_||!!((null==T?void 0:T.engine)&&e4[T.engine]),aY=(null==T?void 0:T.configuration_method)===M.SqlalchemyUri,aw=ay||aY,aS=es||j,aC=(0,m.W6)(),ak=(null==W||null==(o=W.databases)?void 0:o.find(e=>e.engine===(ay?null==T?void 0:T.backend:null==T?void 0:T.engine)&&e.default_driver===(null==T?void 0:T.driver)))||(null==W||null==(d=W.databases)?void 0:d.find(e=>e.engine===(ay?null==T?void 0:T.backend:null==T?void 0:T.engine)))||{},aF=e=>{if("database"===e)return(0,c.t)("e.g. world_population")},aD=(0,p.useCallback)((e,a)=>{L({type:e,payload:a})},[]),a$=(0,p.useCallback)(()=>{ec(null),ev(!1),J()},[ec,ev]),aA=(0,p.useCallback)(({target:e})=>{aD(9,{type:e.type,name:e.name,checked:e.checked,value:e.value})},[aD]),aN=()=>{L({type:12}),ew(!1),a$(),J(),eN(!1),e3([]),ae(!1),at(""),al([]),ar([]),as([]),ac([]),eL({}),eR({}),eK({}),eV({}),eG(!1),ag(void 0),n()},aO=e=>{aC.push(e)},{state:{alreadyExists:aI,passwordsNeeded:aE,sshPasswordNeeded:az,sshPrivateKeyNeeded:aT,sshPrivateKeyPasswordNeeded:aP,loading:aL,failed:aq},importResource:aU}=(0,E.bN)("database",(0,c.t)("database"),e=>{at(e)}),aM=()=>eW(function*(){var n,l,i;let r;if(eI(!0),ev(!1),null==ab||ab.onSave(au,T).then(({error:a})=>{a&&(r=a,e(a))}),r)return void eI(!1);let o=eX({},T);if(o.configuration_method===M.DynamicForm){(null==o||null==(l=o.parameters)?void 0:l.catalog)&&(o.extra=JSON.stringify(eX({},JSON.parse(o.extra||"{}"),{engine_params:{catalog:o.parameters.catalog}})));let a=yield ed(o,!0);if(!P()(es)||(null==a?void 0:a.length)){e((0,c.t)("Connection failed, please check your connection settings.")),eI(!1);return}let t=ay?null==(i=o.parameters_schema)?void 0:i.properties:null==ak?void 0:ak.parameters.properties,n=JSON.parse(o.masked_encrypted_extra||"{}");Object.keys(t||{}).forEach(e=>{var a,l,i,r;t[e]["x-encrypted-extra"]&&(null==(a=o.parameters)?void 0:a[e])&&("object"==typeof(null==(l=o.parameters)?void 0:l[e])?(n[e]=null==(i=o.parameters)?void 0:i[e],o.parameters[e]=JSON.stringify(o.parameters[e])):n[e]=JSON.parse((null==(r=o.parameters)?void 0:r[e])||"{}"))}),o.masked_encrypted_extra=JSON.stringify(n),o.engine===R.GSheet&&(o.impersonate_user=!0)}if((null==o||null==(n=o.parameters)?void 0:n.catalog)&&(o.extra=JSON.stringify(eX({},JSON.parse(o.extra||"{}"),{engine_params:{catalog:o.parameters.catalog}}))),!1===am&&(o.ssh_tunnel=null),null==T?void 0:T.id){if(yield V(T.id,o,o.configuration_method===M.DynamicForm)){if(t&&t(),null==ab||ab.onSave(au,T).then(({error:a})=>{a&&(r=a,e(a))}),r)return void eI(!1);eA||(aN(),a((0,c.t)("Database settings updated")))}}else if(T){if(yield B(o,o.configuration_method===M.DynamicForm)){if(ew(!0),t&&t(),null==ab||ab.onSave(au,T).then(({error:a})=>{a&&(r=a,e(a))}),r)return void eI(!1);aw&&(aN(),a((0,c.t)("Database connected")))}}else{if(ae(!0),!(e0[0].originFileObj instanceof File))return;(yield aU(e0[0].originFileObj,eP,eU,ej,eB,eJ))&&(t&&t(),aN(),a((0,c.t)("Database connected")))}eF(!0),eN(!1),eI(!1)})(),aR=e=>{if("Other"===e)L({type:2,payload:{database_name:e,configuration_method:M.SqlalchemyUri,engine:void 0,engine_information:{supports_file_upload:!0}}});else{let a=null==W?void 0:W.databases.filter(a=>a.name===e)[0];if(!a)return;let{engine:t,parameters:n,engine_information:l,default_driver:i,sqlalchemy_uri_placeholder:r}=a;L({type:2,payload:{database_name:e,engine:t,configuration_method:void 0!==n?M.DynamicForm:M.SqlalchemyUri,engine_information:l,driver:i,sqlalchemy_uri_placeholder:r}}),t===R.GSheet&&L({type:0})}},aH=()=>{H&&K(H.id),eF(!1),eN(!0)},aj=()=>{a$(),eA&&ew(!1),e9&&ae(!1),aq&&(ae(!1),at(""),al([]),ar([]),as([]),ac([]),eL({}),eR({}),eK({}),eV({})),L({type:12}),e3([])},aK=()=>T?!ex||eA?(0,s.FD)(s.FK,{children:[(0,s.Y)(e_,{onClick:aj,buttonStyle:"secondary",children:(0,c.t)("Back")},"back"),(0,s.Y)(e_,{"data-test":"btn-submit-connection",buttonStyle:"primary",onClick:aM,loading:eO,disabled:!!(!eb||eg||es&&Object.keys(es).length>0),children:(0,c.t)("Connect")},"submit")]}):(0,s.FD)(s.FK,{children:[(0,s.Y)(e_,{onClick:aH,children:(0,c.t)("Back")},"back"),(0,s.Y)(e_,{buttonStyle:"primary",onClick:aM,"data-test":"modal-confirm-button",loading:eO,children:(0,c.t)("Finish")},"submit")]}):e9?(0,s.FD)(s.FK,{children:[(0,s.Y)(e_,{onClick:aj,children:(0,c.t)("Back")},"back"),(0,s.Y)(e_,{buttonStyle:"primary",onClick:aM,disabled:!!aL||!!aI.length&&!eJ||!!aE.length&&"{}"===JSON.stringify(eP)||!!az.length&&"{}"===JSON.stringify(eU)||!!aT.length&&"{}"===JSON.stringify(ej)||!!aP.length&&"{}"===JSON.stringify(eB)||!1,loading:eO,children:(0,c.t)("Connect")},"submit")]}):(0,s.Y)(s.FK,{}),aB=(0,p.useRef)(!0);(0,p.useEffect)(()=>{if(aB.current){aB.current=!1;return}aL||aI.length||aE.length||az.length||aT.length||aP.length||eO||aq||(aN(),a((0,c.t)("Database connected")))},[aI,aE,aL,aq,az,aT,aP]),(0,p.useEffect)(()=>{l&&(G(e1),eI(!0),ea()),i&&l&&ay&&i&&!q&&K(i).catch(a=>e((0,c.t)("Sorry there was an error fetching database information: %s",a.message)))},[l,i]),(0,p.useEffect)(()=>{H&&(L({type:7,payload:H}),e$(H.database_name))},[H]),(0,p.useEffect)(()=>{eO&&eI(!1),W&&r&&aR(r)},[W]),(0,p.useEffect)(()=>{if(e9){var e;null==(e=document)||e.getElementsByClassName("ant-upload-list-item-name")[0].scrollIntoView()}},[e9]),(0,p.useEffect)(()=>{al([...aE])},[aE]),(0,p.useEffect)(()=>{ar([...az])},[az]),(0,p.useEffect)(()=>{as([...aT])},[aT]),(0,p.useEffect)(()=>{ac([...aP])},[aP]),(0,p.useEffect)(()=>{var e;(null==T||null==(e=T.parameters)?void 0:e.ssh)!==void 0&&ag(T.parameters.ssh)},[null==T||null==(u=T.parameters)?void 0:u.ssh]);let aV=()=>aa?(0,s.Y)(ei,{children:(0,s.Y)(O.$p,{message:aa})}):null,aJ=()=>{let e=[];return(P()(j)?P()(es)||(null==es?void 0:es.error_type)!=="GENERIC_DB_ENGINE_ERROR"||(e=[(null==es?void 0:es.description)||(null==es?void 0:es.message)]):e="object"==typeof j?Object.values(j):"string"==typeof j?[j]:[],e.length)?(0,s.Y)(e5,{children:(0,s.Y)(O.x6,{title:(0,c.t)("Database Creation Error"),subtitle:(0,c.t)("We are unable to connect to your database."),descriptionDetails:(null==e?void 0:e[0])||(null==es?void 0:es.description),copyText:null==es?void 0:es.description})}):(0,s.Y)(s.FK,{})},aQ=()=>{eI(!0),K(null==H?void 0:H.id).then(e=>{(0,g.SO)(g.Hh.Database,e)})},aG=()=>(0,s.Y)(eQ,{db:T,onSSHTunnelParametersChange:({target:e})=>{aD(14,{type:e.type,name:e.name,value:e.value}),a$()},setSSHTunnelLoginMethod:e=>L({type:15,payload:{login_method:e}})}),aW=()=>(0,s.FD)(s.FK,{children:[(0,s.Y)(eq,{isValidating:eg,isEditMode:ay,db:T,sslForced:!1,dbModel:ak,onAddTableCatalog:()=>{L({type:0})},onQueryChange:({target:e})=>aD(10,{name:e.name,value:e.value}),onExtraInputChange:({target:e})=>aD(5,{name:e.name,value:e.value}),onEncryptedExtraInputChange:({target:e})=>aD(6,{name:e.name,value:e.value}),onRemoveTableCatalog:e=>{L({type:11,payload:{indexToDelete:e}})},onParametersChange:aA,onChange:({target:e})=>aD(13,{name:e.name,value:e.value}),getValidation:()=>ed(T),validationErrors:es,getPlaceholder:aF,clearValidationErrors:a$}),am&&(0,s.Y)(e6,{children:aG()})]});if(e0.length>0&&(aI.length||an.length||ai.length||ao.length||ad.length))return(0,s.FD)(D.aF,{centered:!0,css:e=>[Z,en(e),er(e),eo(e)],footer:aK(),maskClosable:!1,name:"database",onHide:aN,onHandledPrimaryAction:aM,primaryButtonName:(0,c.t)("Connect"),show:l,title:(0,s.Y)(U.r,{title:(0,c.t)("Connect a database"),icon:(0,s.Y)(x.F.InsertRowAboveOutlined,{})}),width:"500px",children:[(0,s.Y)(eH,{db:T,dbName:eD,dbModel:ak,fileList:e0,hasConnectedDb:ex,isEditMode:ay,isLoading:eO,useSqlAlchemyForm:aY}),aI.length?(0,s.FD)(s.FK,{children:[(0,s.Y)(ei,{children:(0,s.Y)(h.F,{closable:!1,css:e=>(0,_.AH)`
  margin: ${4*e.sizeUnit}px 0;

  .ant-alert-message {
    margin: 0;
  }
`,type:"warning",showIcon:!0,message:"",description:(0,c.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})}),(0,s.Y)(k.M,{id:"confirm_overwrite",name:"confirm_overwrite",isValidating:eg,required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==es?void 0:es.confirm_overwrite,label:(0,c.t)('Type "%s" to confirm',(0,c.t)("OVERWRITE")),onChange:e=>{var a,t;eG((null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"").toUpperCase()===(0,c.t)("OVERWRITE"))},css:et})]}):null,aV(),an.length||ai.length||ao.length||ad.length?[...new Set([...an,...ai,...ao,...ad])].map(e=>(0,s.FD)(s.FK,{children:[(0,s.Y)(ei,{children:(0,s.Y)(h.F,{closable:!1,css:e=>el(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,c.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in explore files and should be added manually after the import if they are needed.')})}),(null==an?void 0:an.indexOf(e))>=0&&(0,s.Y)(k.M,{id:"password_needed",name:"password_needed",required:!0,value:eP[e],onChange:a=>eL(eX({},eP,{[e]:a.target.value})),isValidating:eg,validationMethods:{onBlur:()=>{}},errorMessage:null==es?void 0:es.password_needed,label:(0,c.t)("%s PASSWORD",e.slice(10)),css:et}),(null==ai?void 0:ai.indexOf(e))>=0&&(0,s.Y)(k.M,{isValidating:eg,id:"ssh_tunnel_password_needed",name:"ssh_tunnel_password_needed",required:!0,value:eU[e],onChange:a=>eR(eX({},eU,{[e]:a.target.value})),validationMethods:{onBlur:()=>{}},errorMessage:null==es?void 0:es.ssh_tunnel_password_needed,label:(0,c.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),css:et}),(null==ao?void 0:ao.indexOf(e))>=0&&(0,s.Y)(k.M,{id:"ssh_tunnel_private_key_needed",name:"ssh_tunnel_private_key_needed",isValidating:eg,required:!0,value:ej[e],onChange:a=>eK(eX({},ej,{[e]:a.target.value})),validationMethods:{onBlur:()=>{}},errorMessage:null==es?void 0:es.ssh_tunnel_private_key_needed,label:(0,c.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),css:et}),(null==ad?void 0:ad.indexOf(e))>=0&&(0,s.Y)(k.M,{id:"ssh_tunnel_private_key_password_needed",name:"ssh_tunnel_private_key_password_needed",isValidating:eg,required:!0,value:eB[e],onChange:a=>eV(eX({},eB,{[e]:a.target.value})),validationMethods:{onBlur:()=>{}},errorMessage:null==es?void 0:es.ssh_tunnel_private_key_password_needed,label:(0,c.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),css:et})]})):null]});let aX=ay?(0,s.FD)(s.FK,{children:[(0,s.Y)(e_,{onClick:aN,buttonStyle:"secondary",children:(0,c.t)("Close")},"close"),(0,s.Y)(e_,{buttonStyle:"primary",onClick:aM,disabled:null==T?void 0:T.is_managed_externally,loading:eO,tooltip:(null==T?void 0:T.is_managed_externally)?(0,c.t)("This database is managed externally, and can't be edited in Superset"):"",children:(0,c.t)("Finish")},"submit")]}):aK();return aw?(0,s.FD)(D.aF,{css:e=>[X,Z,en(e),er(e),eo(e)],name:"database","data-test":"database-modal",onHandledPrimaryAction:aM,onHide:aN,primaryButtonName:ay?(0,c.t)("Save"):(0,c.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,s.Y)(U.r,{isEditMode:ay,title:ay?(0,c.t)("Edit database"):(0,c.t)("Connect a database"),icon:ay?(0,s.Y)(x.F.EditOutlined,{iconSize:"l"}):(0,s.Y)(x.F.InsertRowAboveOutlined,{iconSize:"l"})}),footer:aX,maskClosable:!1,children:[(0,s.Y)(ey,{children:(0,s.Y)(em,{children:(0,s.Y)(eH,{isLoading:eO,isEditMode:ay,useSqlAlchemyForm:aY,hasConnectedDb:ex,db:T,dbName:eD,dbModel:ak})})}),(0,s.Y)(e2,{defaultActiveKey:e1,activeKey:Q,onTabClick:e=>G(e),animated:{inkBar:!0,tabPane:!0},items:[{key:e1,label:(0,s.Y)("span",{children:(0,c.t)("Basic")}),children:(0,s.FD)(s.FK,{children:[aY?(0,s.FD)(eu,{children:[(0,s.FD)(ek,{db:T,onInputChange:({target:e})=>{ev(!1),aD(8,{type:e.type,name:e.name,checked:e.checked,value:e.value})},conf:av,testConnection:()=>{var t;if(a$(),!(null==T?void 0:T.sqlalchemy_uri))return void e((0,c.t)("Please enter a SQLAlchemy URI to test"));let n={sqlalchemy_uri:(null==T?void 0:T.sqlalchemy_uri)||"",database_name:(null==T||null==(t=T.database_name)?void 0:t.trim())||void 0,impersonate_user:(null==T?void 0:T.impersonate_user)||void 0,extra:null==T?void 0:T.extra,masked_encrypted_extra:(null==T?void 0:T.masked_encrypted_extra)||"",server_cert:(null==T?void 0:T.server_cert)||void 0,ssh_tunnel:!P()(null==T?void 0:T.ssh_tunnel)&&am?eX({},T.ssh_tunnel,{server_port:Number(T.ssh_tunnel.server_port)}):void 0};ez(!0),(0,E.ym)(n,a=>{ez(!1),e(a),ev(!1)},e=>{ez(!1),a(e),ev(!0)})},testInProgress:eE,children:[(0,s.Y)(ap,{dbModel:ak,db:T,changeMethods:{onParametersChange:aA},clearValidationErrors:a$}),am&&aG()]}),(y=(null==T?void 0:T.backend)||(null==T?void 0:T.engine),(null==W||null==(w=W.databases)||null==(Y=w.find(e=>e.backend===y||e.engine===y))?void 0:Y.parameters)!==void 0&&!ay&&(0,s.FD)("div",{css:e=>ee(e),children:[(0,s.Y)(F.$,{buttonStyle:"link",onClick:()=>L({type:1,payload:{database_name:null==T?void 0:T.database_name,configuration_method:M.DynamicForm,engine:null==T?void 0:T.engine}}),css:e=>(0,_.AH)`
  text-transform: initial;
  margin-left: 0px;
  padding: 0 ${2*e.sizeUnit}px 0 0;
`,children:(0,c.t)("Connect this database using the dynamic form instead")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database.")})]}))]}):aW(),!ay&&(0,s.Y)(ei,{children:(0,s.Y)(h.F,{closable:!1,css:e=>el(e),message:(0,c.t)("Additional fields may be required"),showIcon:!0,description:(0,s.FD)(s.FK,{children:[(0,c.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,s.Y)("a",{href:eM,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description",children:(0,c.t)("here")}),"."]}),type:"info"})}),aS&&aJ()]})},{key:"advanced",label:(0,s.Y)("span",{children:(0,c.t)("Advanced")}),children:(0,s.Y)(eS,{extraExtension:ab,db:T,onInputChange:e=>{let{target:a}=e;aD(8,{type:a.type,name:a.name,checked:a.checked,value:a.value})},onTextChange:({target:e})=>{aD(13,{name:e.name,value:e.value})},onEditorChange:e=>{aD(3,e)},onExtraInputChange:e=>{let{target:a}=e;aD(5,{type:a.type,name:a.name,checked:a.checked,value:a.value})},onExtraEditorChange:e=>{aD(4,e)}})}]})]}):(0,s.FD)(D.aF,{css:e=>[Z,en(e),er(e),eo(e)],name:"database",onHandledPrimaryAction:aM,onHide:aN,primaryButtonName:ex?(0,c.t)("Finish"):(0,c.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,s.Y)(U.r,{title:(0,c.t)("Connect a database"),icon:(0,s.Y)(x.F.InsertRowAboveOutlined,{})}),footer:aK(),maskClosable:!1,children:[!eO&&ex?(0,s.FD)(s.FK,{children:[(0,s.Y)(eH,{isLoading:eO,isEditMode:ay,useSqlAlchemyForm:aY,hasConnectedDb:ex,db:T,dbName:eD,dbModel:ak,editNewDb:eA}),eC&&(0,s.FD)(e8,{children:[(0,s.Y)(F.$,{buttonStyle:"secondary",onClick:()=>{eI(!0),aQ(),aO("/dataset/add/")},children:(0,c.t)("Create dataset")}),(0,s.Y)(F.$,{buttonStyle:"secondary",onClick:()=>{eI(!0),aQ(),aO("/sqllab?db=true")},children:(0,c.t)("Query data in SQL Lab")})]}),eA?aW():(0,s.Y)(eS,{extraExtension:ab,db:T,onInputChange:e=>{let{target:a}=e;aD(8,{type:a.type,name:a.name,checked:"checked"in a&&a.checked,value:a.value})},onTextChange:({target:e})=>aD(13,{name:e.name,value:e.value}),onEditorChange:e=>aD(3,e),onExtraInputChange:e=>{let{target:a}=e;aD(5,{type:a.type,name:a.name,checked:"checked"in a&&a.checked,value:a.value})},onExtraEditorChange:e=>aD(4,e)})]}):(0,s.Y)(s.FK,{children:!eO&&(T?(0,s.FD)(s.FK,{children:[(0,s.Y)(eH,{isLoading:eO,isEditMode:ay,useSqlAlchemyForm:aY,hasConnectedDb:ex,db:T,dbName:eD,dbModel:ak}),ax&&(()=>{var e,a,t,n,l;let{hostname:i}=window.location,r=(null==a_||null==(e=a_.REGIONAL_IPS)?void 0:e.default)||"";return Object.entries((null==a_?void 0:a_.REGIONAL_IPS)||{}).forEach(([e,a])=>{let t=new RegExp(e);i.match(t)&&(r=a)}),(null==T?void 0:T.engine)&&(0,s.Y)(ei,{children:(0,s.Y)(h.F,{closable:!1,css:e=>el(e),type:"info",showIcon:!0,message:(null==(a=e4[T.engine])?void 0:a.message)||(null==a_||null==(t=a_.DEFAULT)?void 0:t.message),description:(null==(n=e4[T.engine])?void 0:n.description)||(null==a_||null==(l=a_.DEFAULT)?void 0:l.description)+r})})})(),aW(),(0,s.Y)("div",{css:e=>ee(e),children:ak.engine!==R.GSheet&&(0,s.FD)(s.FK,{children:[(0,s.Y)(F.$,{"data-test":"sqla-connect-btn",buttonStyle:"link",onClick:()=>{a$(),L({type:1,payload:{engine:T.engine,configuration_method:M.SqlalchemyUri,database_name:T.database_name}})},css:eh,children:(0,c.t)("Connect this database with a SQLAlchemy URI string instead")}),(0,s.Y)($.I,{tooltip:(0,c.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually.")})]})}),aS&&aJ()]}):(0,s.FD)(ef,{children:[(0,s.Y)(eH,{isLoading:eO,isEditMode:ay,useSqlAlchemyForm:aY,hasConnectedDb:ex,db:T,dbName:eD,dbModel:ak}),(0,s.Y)("div",{className:"preferred",children:null==W||null==(S=W.databases)?void 0:S.filter(e=>e.preferred).map(e=>(0,s.Y)(C,{className:"preferred-item",onClick:()=>aR(e.name),buttonText:e.name,icon:null==af?void 0:af[e.engine]},`${e.name}`))}),(0,s.FD)("div",{className:"available",children:[(0,s.Y)("h4",{className:"available-label",children:(0,c.t)("Or choose from a list of other databases we support:")}),(0,s.Y)(v.l,{className:"control-label",children:(0,c.t)("Supported databases")}),(0,s.Y)(f.A,{className:"available-select",onChange:aR,placeholder:(0,c.t)("Choose a database..."),options:[...((null==W?void 0:W.databases)||[]).map((e,a)=>({value:e.name,label:e.name,key:`database-${a}`})),{value:"Other",label:(0,c.t)("Other"),key:"Other"}],showSearch:!0,sortComparator:(e,a)=>"Other"===e.value?1:"Other"===a.value?-1:String(e.label).localeCompare(String(a.label)),getPopupContainer:e=>e.parentElement||document.body,dropdownStyle:{maxHeight:400,overflow:"auto"}}),(0,s.Y)(h.F,{showIcon:!0,closable:!1,css:e=>el(e),type:"info",message:(null==a_||null==(I=a_.ADD_DATABASE)?void 0:I.message)||(0,c.t)("Want to add a new database?"),description:(null==a_?void 0:a_.ADD_DATABASE)?(0,s.FD)(s.FK,{children:[(0,c.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,s.Y)("a",{href:null==a_?void 0:a_.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer",children:null==a_?void 0:a_.ADD_DATABASE.contact_description_link})," ",null==a_?void 0:a_.ADD_DATABASE.description]}):(0,s.FD)(s.FK,{children:[(0,c.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,s.Y)("a",{href:eM,target:"_blank",rel:"noopener noreferrer",children:(0,c.t)("here")}),"."]})})]}),(0,s.Y)(eY,{children:(0,s.Y)(A.Upload,{name:"databaseFile",id:"databaseFile","data-test":"database-file-input",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:e=>eW(function*(){at(""),al([]),ar([]),as([]),ac([]),eL({}),eR({}),eK({}),eV({}),ae(!0),e3([eX({},e.file,{status:"done"})]),e.file.originFileObj instanceof File&&(yield aU(e.file.originFileObj,eP,eU,ej,eB,eJ))&&(null==t||t())})(),onRemove:e=>(e3(e0.filter(a=>a.uid!==e.uid)),!1),children:(0,s.Y)(F.$,{"data-test":"import-database-btn",buttonStyle:"link",css:ep,children:(0,c.t)("Import database from file")})})}),aV()]}))}),eO&&(0,s.Y)(N.R,{})]})})},55185:(e,a,t)=>{t.d(a,{A:()=>K});var n=t(2445),l=t(24002),i=t(95265),r=t(94149),o=t(91054),s=t(83734),d=t(78076),c=t(50888),u=t(89795),h=t(22022),p=t(30404),m=t(94448),g=t(93666),b=t(67675),v=t(58561),f=t.n(v),_=t(11960),y=t(83401),x=t(22023),Y=t(21346),w=t(17437);let S=(0,Y.I4)(x.e)`
  ${({theme:e})=>(0,w.AH)`
    flex: 1;
    margin-top: 0;
    margin-bottom: ${2.5*e.sizeUnit}px;
  }
  `}
`,C=Y.I4.div`
  display: flex;
  align-items: center;
  margin-top: 0;
`,k=(0,w.AH)`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`;var F=t(5009);let D=Y.I4.div`
  //margin-top: 10px;
  //margin-bottom: 10px;
`,$=({columns:e,maxColumnsToShow:a=4})=>{let t=e.map(e=>({name:e}));return(0,n.FD)(D,{children:[(0,n.Y)(u.o.Text,{type:"secondary",children:"Columns:"}),0===e.length?(0,n.Y)("p",{className:"help-block",children:(0,o.t)("Upload file to preview columns")}):(0,n.Y)(F.Sk,{tags:t,maxTags:a})]})};var A=t(23941);let N=({label:e,tip:a,children:t,name:l,rules:i})=>(0,n.Y)(S,{label:(0,n.FD)("div",{children:[e,(0,n.Y)(A.I,{tooltip:a})]}),name:l,rules:i,children:t});function O(e,a,t,n,l,i,r){try{var o=e[i](r),s=o.value}catch(e){t(e);return}o.done?a(s):Promise.resolve(s).then(n,l)}function I(){return(I=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let E=["delimiter","skip_initial_space","skip_blank_lines","day_first","column_data_types","column_dates","decimal_character","null_values","index_column","header_row","rows_to_read","skip_rows"],z=["sheet_name","column_dates","decimal_character","null_values","index_column","header_row","rows_to_read","skip_rows"],T=[],P=["rows_to_read","index_column"],L=[...E,...z,...T],q={csv:E,excel:z,columnar:T},U=(e,a)=>q[a].includes(e),M={table_name:"",schema:"",sheet_name:void 0,delimiter:",",already_exists:"fail",skip_initial_space:!1,skip_blank_lines:!1,day_first:!1,decimal_character:".",null_values:[],header_row:"0",rows_to_read:null,skip_rows:"0",column_dates:[],index_column:null,dataframe_index:!1,index_label:"",columns_read:[],column_data_types:""},R={csv:".csv, .tsv",excel:".xls, .xlsx",columnar:".parquet, .zip"},H={csv:"CSV",excel:"Excel",columnar:"Columnar"},j=e=>{var{label:a,dataTest:t,children:l}=e,i=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a.indexOf(t=i[n])>=0||(l[t]=e[t]);return l}(e,["label","dataTest","children"]);return(0,n.FD)(C,{children:[(0,n.Y)(h.Switch,I({"data-test":t},i)),(0,n.Y)("div",{className:"switch-label",children:a}),l]})},K=(0,_.Ay)(({addDangerToast:e,addSuccessToast:a,onHide:t,show:v,allowedExtensions:_,type:x="csv"})=>{let[Y]=s.l.useForm(),[C,F]=(0,l.useState)(0),[D,A]=(0,l.useState)([]),[E,z]=(0,l.useState)([]),[T,K]=(0,l.useState)([]),[B,V]=(0,l.useState)({}),[J,Q]=(0,l.useState)(","),[G,W]=(0,l.useState)(!1),[X,Z]=(0,l.useState)(),[ee,ea]=(0,l.useState)(!1),[et,en]=(0,l.useState)(!0),[el,ei]=(0,l.useState)(!1),[er,eo]=(0,l.useState)("general"),es=(0,l.useMemo)(()=>(e="",a,t)=>{let n=f().encode_uri({filters:[{col:"allow_file_upload",opr:"eq",value:!0}],page:a,page_size:t});return i.A.get({endpoint:`/api/v1/database/?q=${n}`}).then(e=>({data:e.json.result.map(e=>({value:e.id,label:e.database_name})),totalCount:e.json.count}))},[]),ed=(0,l.useMemo)(()=>(e="",a,t)=>C?i.A.get({endpoint:`/api/v1/database/${C}/schemas/?q=(upload_allowed:!t)`}).then(e=>({data:e.json.result.map(e=>({value:e,label:e})),totalCount:e.json.count})):Promise.resolve({data:[],totalCount:0}),[C]),ec=a=>{let t=Y.getFieldsValue(),n=I({},M,t),l=new FormData;return l.append("file",a),"csv"===x&&l.append("delimiter",n.delimiter),l.append("type",x),ei(!0),i.A.post({endpoint:"/api/v1/database/upload_metadata/",body:l,headers:{Accept:"application/json"}}).then(e=>{let{items:a}=e.json.result;if(a&&"excel"!==x)z(a[0].column_names);else{let{allSheetNames:e,sheetColumnNamesMap:t}=a.reduce((e,a)=>(e.allSheetNames.push(a.sheet_name),e.sheetColumnNamesMap[a.sheet_name]=a.column_names,e),{allSheetNames:[],sheetColumnNamesMap:{}});z(a[0].column_names),K(e),Y.setFieldsValue({sheet_name:e[0]}),V(t)}}).catch(a=>(0,r.h4)(a).then(a=>{e(a.error||"Error"),z([]),Y.setFieldsValue({sheet_name:void 0}),K([])})).finally(()=>{ei(!1)})},eu=()=>{A([]),z([]),Z(""),F(0),K([]),W(!1),Q(","),en(!0),ei(!1),V({}),Y.resetFields(),t()},eh=()=>E.map(e=>({value:e,label:e}));(0,l.useEffect)(()=>{E.length>0&&D[0].originFileObj&&D[0].originFileObj instanceof File&&et&&ec(D[0].originFileObj).then(e=>e)},[J]),(0,l.useEffect)(()=>{v&&eo("general")},[v]);let ep={csv:(0,o.t)("CSV upload"),excel:(0,o.t)("Excel upload"),columnar:(0,o.t)("Columnar upload")};return(0,n.Y)(d.aF,{css:e=>[k,(0,w.AH)`
  .ant-modal-header {
    padding: ${4.5*e.sizeUnit}px ${4*e.sizeUnit}px
      ${4*e.sizeUnit}px;
  }

  .ant-modal-close-x .close {
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.sizeUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.sizeUnit}px;
  }

  .info-solid-small {
    vertical-align: bottom;
  }
`,(0,w.AH)`
  .switch-label {
    color: ${e.colorTextSecondary};
    margin-left: ${4*e.sizeUnit}px;
  }
`],primaryButtonLoading:G,name:"database","data-test":"upload-modal",onHandledPrimaryAction:Y.submit,onHide:eu,width:"500px",primaryButtonName:(0,o.t)("Upload"),centered:!0,show:v,title:(0,n.Y)(()=>{let e=ep[x]||(0,o.t)("Upload");return(0,n.Y)(y.r,{title:e})},{}),children:(0,n.Y)(s.l,{form:Y,onFinish:()=>{var t;let n,l,s=Y.getFieldsValue();delete s.database,s.schema=X;let d=I({},M,s),c=new FormData,u=null==(t=D[0])?void 0:t.originFileObj;u&&c.append("file",u),n=q[x]||[],l=[...L].filter(e=>!n.includes(e)),Object.entries(d).forEach(([e,a])=>{l.includes(e)||P.includes(e)&&null==a||c.append(e,a)}),W(!0);let h=`/api/v1/database/${C}/upload/`;return c.append("type",x),i.A.post({endpoint:h,body:c,headers:{Accept:"application/json"}}).then(()=>{a((0,o.t)("Data imported")),W(!1),eu()}).catch(a=>(0,r.h4)(a).then(a=>{e(a.error||"Error")})).finally(()=>{W(!1)})},"data-test":"dashboard-edit-properties-form",layout:"vertical",initialValues:M,children:(0,n.Y)(c.S,{expandIconPosition:"end",accordion:!0,activeKey:er,onChange:e=>eo(e),defaultActiveKey:"general",modalMode:!0,items:[{key:"general",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,o.t)("General information")}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,o.t)("%(label)s file",{label:H[x]}),name:"file",required:!0,rules:[{validator:(e,a)=>0===D.length?Promise.reject((0,o.t)("Uploading a file is required")):((e,a)=>{let t=e.name.match(/.+\.([^.]+)$/);if(!t)return!1;let n=t[1].toLowerCase();return a.map(e=>e.toLowerCase()).includes(n)})(D[0],_)?Promise.resolve():Promise.reject((0,o.t)("Upload a file with a valid extension. Valid: [%s]",_.join(",")))}],children:(0,n.Y)(h.Upload,{name:"modelFile",id:"modelFile","data-test":"model-file-input",accept:R[x],fileList:D,onChange:e=>{var a;return(a=function*(){A([I({},e.file,{status:"done"})]),et&&(yield ec(e.file.originFileObj))},function(){var e=this,t=arguments;return new Promise(function(n,l){var i=a.apply(e,t);function r(e){O(i,n,l,r,o,"next",e)}function o(e){O(i,n,l,r,o,"throw",e)}r(void 0)})})()},onRemove:e=>(A(D.filter(a=>a.uid!==e.uid)),z([]),K([]),Y.setFieldsValue({sheet_name:void 0}),!1),customRequest:()=>{},children:(0,n.Y)(p.$,{"aria-label":(0,o.t)("Select"),icon:(0,n.Y)(b.F.UploadOutlined,{}),loading:el,children:(0,o.t)("Select")})})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{children:(0,n.Y)(j,{label:(0,o.t)("Preview uploaded file"),dataTest:"previewUploadedFile",onChange:e=>{en(e)},checked:et})})})}),et&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)($,{columns:E})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,o.t)("Database"),required:!0,name:"database",rules:[{validator:(e,a)=>C?Promise.resolve():Promise.reject((0,o.t)("Selecting a database is required"))}],children:(0,n.Y)(m.A,{ariaLabel:(0,o.t)("Select a database"),options:es,onChange:e=>{F(null==e?void 0:e.value),Z(void 0),Y.setFieldsValue({schema:void 0})},allowClear:!0,placeholder:(0,o.t)("Select a database to upload the file to")})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,o.t)("Schema"),name:"schema",children:(0,n.Y)(m.A,{ariaLabel:(0,o.t)("Select a schema"),options:ed,onChange:e=>{Z(null==e?void 0:e.value)},allowClear:!0,placeholder:(0,o.t)("Select a schema if the database supports this")})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,o.t)("Table name"),name:"table_name",required:!0,rules:[{required:!0,message:"Table name is required"}],children:(0,n.Y)(h.Input,{"aria-label":(0,o.t)("Table Name"),name:"table_name","data-test":"properties-modal-name-input",type:"text",placeholder:(0,o.t)("Name of table to be created")})})})}),U("delimiter",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,o.t)("Delimiter"),tip:(0,o.t)("Select a delimiter for this data"),name:"delimiter",children:(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Choose a delimiter"),options:[{value:",",label:'Comma ","'},{value:";",label:'Semicolon ";"'},{value:"	",label:'Tab "\\t"'},{value:"|",label:"Pipe"}],onChange:e=>{Q(e)},allowNewOptions:!0})})})}),U("sheet_name",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,o.t)("Sheet name"),name:"sheet_name",children:(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Choose sheet name"),options:T.map(e=>({value:e,label:e})),onChange:e=>{var a;z(null!=(a=B[e])?a:[])},allowNewOptions:!0,placeholder:(0,o.t)("Select a sheet name from the uploaded file")})})})})]})},{key:"file-settings",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,o.t)("File settings")}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,o.t)("If table already exists"),tip:(0,o.t)("What should happen if the table already exists"),name:"already_exists",children:(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Choose already exists"),options:[{value:"fail",label:"Fail"},{value:"replace",label:"Replace"},{value:"append",label:"Append"}],onChange:()=>{}})})})}),U("column_dates",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,o.t)("Columns to be parsed as dates"),name:"column_dates",children:(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Choose columns to be parsed as dates"),mode:"multiple",options:eh(),allowClear:!0,allowNewOptions:!0,placeholder:(0,o.t)("A comma separated list of columns that should be parsed as dates")})})})}),U("decimal_character",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,o.t)("Decimal character"),tip:(0,o.t)("Character to interpret as decimal point"),name:"decimal_character",children:(0,n.Y)(h.Input,{type:"text"})})})}),U("null_values",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,o.t)("Null Values"),tip:(0,o.t)("Choose values that should be treated as null. Warning: Hive database supports only a single value"),name:"null_values",children:(0,n.Y)(g.A,{mode:"multiple",options:[{value:'""',label:'Empty Strings ""'},{value:"None",label:"None"},{value:"nan",label:"nan"},{value:"null",label:"null"},{value:"N/A",label:"N/A"}],allowClear:!0,allowNewOptions:!0})})})}),U("skip_initial_space",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"skip_initial_space",children:(0,n.Y)(j,{label:(0,o.t)("Skip spaces after delimiter"),dataTest:"skipInitialSpace"})})})}),U("skip_blank_lines",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"skip_blank_lines",children:(0,n.Y)(j,{label:(0,o.t)("Skip blank lines rather than interpreting them as Not A Number values"),dataTest:"skipBlankLines"})})})}),U("day_first",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"day_first",children:(0,n.Y)(j,{label:(0,o.t)("DD/MM format dates, international and European format"),dataTest:"dayFirst"})})})})]})},{key:"columns",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,o.t)("Columns")}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{label:(0,o.t)("Columns to read"),name:"columns_read",children:(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Choose columns to read"),mode:"multiple",options:eh(),allowClear:!0,allowNewOptions:!0,placeholder:(0,o.t)("List of the column names that should be read")})})})}),U("column_data_types",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,o.t)("Column data types"),tip:(0,o.t)('A dictionary with column names and their data types if you need to change the defaults. Example: {"user_id":"int"}. Check Python\'s Pandas library for supported data types.'),name:"column_data_types",children:(0,n.Y)(h.Input,{"aria-label":(0,o.t)("Column data types"),type:"text"})})})}),(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(S,{name:"dataframe_index",children:(0,n.Y)(j,{label:(0,o.t)("Create dataframe index"),dataTest:"dataFrameIndex",onChange:ea})})})}),ee&&U("index_column",x)&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,o.t)("Index column"),tip:(0,o.t)("Column to use as the index of the dataframe. If None is given, Index label is used."),name:"index_column",children:(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Choose index column"),options:E.map(e=>({value:e,label:e})),allowClear:!0,allowNewOptions:!0})})})}),ee&&(0,n.Y)(h.Row,{children:(0,n.Y)(h.Col,{span:24,children:(0,n.Y)(N,{label:(0,o.t)("Index label"),tip:(0,o.t)("Label for the index column. Don't use an existing column name."),name:"index_label",children:(0,n.Y)(h.Input,{"aria-label":(0,o.t)("Index label"),type:"text"})})})})]})},...U("header_row",x)&&U("rows_to_read",x)&&U("skip_rows",x)?[{key:"rows",label:(0,n.Y)(u.o.Text,{strong:!0,children:(0,o.t)("Rows")}),children:(0,n.FD)(h.Row,{children:[(0,n.Y)(h.Col,{span:8,children:(0,n.Y)(N,{label:(0,o.t)("Header row"),tip:(0,o.t)("Row containing the headers to use as column names (0 is first line of data)."),name:"header_row",rules:[{required:!0,message:"Header row is required"}],children:(0,n.Y)(h.InputNumber,{"aria-label":(0,o.t)("Header row"),type:"text",min:0})})}),(0,n.Y)(h.Col,{span:8,children:(0,n.Y)(N,{label:(0,o.t)("Rows to read"),tip:(0,o.t)("Number of rows of file to read. Leave empty (default) to read all rows"),name:"rows_to_read",children:(0,n.Y)(h.InputNumber,{"aria-label":(0,o.t)("Rows to read"),min:1})})}),(0,n.Y)(h.Col,{span:8,children:(0,n.Y)(N,{label:(0,o.t)("Skip rows"),tip:(0,o.t)("Number of rows to skip at start of file."),name:"skip_rows",rules:[{required:!0,message:"Skip rows is required"}],children:(0,n.Y)(h.InputNumber,{"aria-label":(0,o.t)("Skip rows"),min:0})})})]})}]:[]]})})})})},70079:(e,a,t)=>{t.d(a,{F:()=>i,K:()=>l});var n=t(91054);let l=[0,-8],i={name:(0,n.t)("SQL"),tabs:[{name:"Saved queries",label:(0,n.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,n.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]}}}]);