"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[266],{20266:(e,t,a)=>{a.d(t,{tu:()=>ed,b5:()=>ep,Ay:()=>ev});var l,n=a(2445),i=a(24002),r=a(53618),o=a(91054),s=a(99247),d=a(95265),c=a(21346),u=a(17437),h=a(58561),p=a.n(h),m=a(54381),v=a(11960),b=a(6667),f=a(22022),g=a(93666),_=a(50888),T=a(23998),E=a(94448),y=a(23941),S=a(83734),N=a(75062),C=a(51930),x=a(78113),O=a(87040),R=a(36501),A=a(61225),I=a(19119),D=a(18085),F=a(67675),Y=a(53591);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function w(e){var{timeUnit:t,min:a,name:l,value:r,placeholder:o,onChange:s}=e,d=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t.indexOf(a=i[l])>=0||(n[a]=e[a]);return n}(e,["timeUnit","min","name","value","placeholder","onChange"]);let[c,u]=(0,i.useState)(!1);return(0,n.Y)(f.Input,L({type:"text",min:a,name:l,value:r?`${r}${!c?` ${t}`:""}`:"",placeholder:o,onFocus:()=>u(!0),onBlur:()=>u(!1),onChange:s},d))}var k=a(28506),z=((l=z||{}).Picker="picker",l.Input="input",l);let M=[{label:(0,o.t)("Recurring (every)"),value:"picker"},{label:(0,o.t)("CRON Schedule"),value:"input"}],$=({value:e,onChange:t})=>{let a=(0,c.DP)(),[l,r]=(0,i.useState)("picker"),s=(0,i.useCallback)(e=>{t(e)},[t]),d=(0,i.useCallback)(e=>{t(e.target.value)},[t]),u=(0,i.useCallback)(()=>{t(e||"")},[t,e]),[h,p]=(0,i.useState)();return(0,n.FD)(n.FK,{children:[(0,n.FD)(ed,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Schedule type"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Schedule type"),placeholder:(0,o.t)("Schedule type"),onChange:e=>{r(e)},value:l,options:M})})]}),(0,n.FD)(ed,{"data-test":"input-content",className:"styled-input",children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Schedule"),(0,n.Y)("span",{className:"required",children:"*"})]}),"input"===l&&(0,n.Y)(f.Input,{type:"text",name:"crontab",style:h?{borderColor:a.colorError}:{},placeholder:(0,o.t)("CRON expression"),value:e,onBlur:d,onChange:e=>s(e.target.value),onPressEnter:u}),"picker"===l&&(0,n.Y)(k.l,{clearButton:!1,value:e,setValue:s,displayError:"picker"===l,onError:p})]})]})};var V=a(65061);function j(e,t,a,l,n,i,r){try{var o=e[i](r),s=o.value}catch(e){a(e);return}o.done?t(s):Promise.resolve(s).then(l,n)}function U(e){return function(){var t=this,a=arguments;return new Promise(function(l,n){var i=e.apply(t,a);function r(e){j(i,l,n,r,o,"next",e)}function o(e){j(i,l,n,r,o,"throw",e)}r(void 0)})}}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}let q=c.I4.div`
  ${({theme:e})=>`
    margin-bottom: ${3*e.sizeUnit}px;

    .input-container {
      textarea {
        height: auto;
      }

      &.error {
        input {
          border-color: ${e.colorError};
        }
      }

      .helper {
        margin-top: ${2*e.sizeUnit}px;
        font-size: ${e.fontSizeSM}px;
        color: ${e.colorTextSecondary};
      }
    }

    .inline-container {
      margin-bottom: ${2*e.sizeUnit}px;

      > div {
        margin: 0px;
      }

      .delete-button {
        margin-left: ${2*e.sizeUnit}px;
        padding-top: ${e.sizeUnit}px;
      }
      .anticon {
        margin-left: ${e.sizeUnit}px;
      }
    }

    .ghost-button {
      color: ${e.colorPrimaryText};
      display: inline-flex;
      align-items: center;
      font-size: ${e.fontSizeSM}px;
      cursor: pointer;

      .icon {
        width: ${3*e.sizeUnit}px;
        height: ${3*e.sizeUnit}px;
        font-size: ${e.fontSizeSM}px;
        margin-right: ${e.sizeUnit}px;
      }
    }

    .ghost-button + .ghost-button {
      margin-left: ${4*e.sizeUnit}px;
    }

    .ghost-button:first-child[style*='none'] + .ghost-button {
      margin-left: 0px; /* Remove margin when the first button is hidden */
    }
  `}
`,G={EMAIL_CC_NAME:(0,o.t)("CC recipients"),EMAIL_BCC_NAME:(0,o.t)("BCC recipients"),EMAIL_SUBJECT_NAME:(0,o.t)("Email subject name (optional)"),EMAIL_SUBJECT_ERROR_TEXT:(0,o.t)("Please enter valid text. Spaces alone are not permitted.")},X=({setting:e=null,index:t,onUpdate:a,onRemove:l,onInputChange:r,email_subject:u,defaultSubject:h,setErrorSubject:m})=>{let{method:v,recipients:b,cc:_,bcc:T,options:E}=e||{},[y,S]=(0,i.useState)(b||""),[N,C]=(0,i.useState)([]),[x,R]=(0,i.useState)(!1),[A,I]=(0,i.useState)(!!_),[D,Y]=(0,i.useState)(!!T),[L,w]=(0,i.useState)(_||""),[k,z]=(0,i.useState)(T||""),M=(0,c.DP)(),[$,j]=(0,i.useState)(!0),[X,B]=(0,i.useState)([{label:"",options:[]}]),[Z,W]=(0,i.useState)(!1),[K,H]=(0,i.useState)(!0),J=({force:e}={})=>U(function*(){H(!0),(({searchString:e="",types:t=[],exactMatch:a=!1,force:l=!1}={})=>U(function*(){let n=p().encode({searchString:e,types:t,exactMatch:a,force:l}),i=`/api/v1/report/slack_channels/?q=${n}`;return d.A.get({endpoint:i})})())({types:["public_channel","private_channel"],force:e}).then(({json:e})=>{let t,a,{result:l}=e,n=(t=[],a=[],l.forEach(e=>{e.is_private?a.push(e):t.push(e)}),[{label:"Public Channels",options:t.map(e=>({label:`${e.name} ${e.is_member?"":(0,o.t)("(Bot not in channel)")}`,value:e.id,key:e.id})),key:"public"},{label:(0,o.t)("Private Channels (Bot in channel)"),options:a.map(e=>({label:e.name,value:e.id,key:e.id})),key:"private"}]);if(B(n),(0,s.G7)(s.TO.AlertReportSlackV2)){let[e,t]=n;v&&[O.yV.SlackV2,O.yV.Slack].includes(v)&&C((({method:e,recipientValue:t,slackOptions:a})=>{let l=e===O.yV.SlackV2?"value":"label";return t.split(",").map(e=>a.find(t=>t[l].trim().toLowerCase()===e.trim().toLowerCase())).filter(e=>!!e)})({method:v,recipientValue:y,slackOptions:[...e.options,...t.options]}))}}).catch(e=>{W(!0)}).finally(()=>{j(!1),H(!1)})})();(0,i.useEffect)(()=>{var e;(null==E?void 0:E.some(e=>e===O.yV.Slack||e===O.yV.SlackV2))&&!(null==(e=X[0])?void 0:e.options.length)&&J()},[]);let Q=(0,i.useMemo)(()=>(E||[]).filter(e=>(0,s.G7)(s.TO.AlertReportSlackV2)&&!Z&&e===O.yV.SlackV2||(!(0,s.G7)(s.TO.AlertReportSlackV2)||Z)&&e===O.yV.Slack||e===O.yV.Email).map(e=>({label:e===O.yV.SlackV2?O.yV.Slack:e,value:e})),[E,Z]);return e?(b&&y!==b&&S(b),_&&L!==_&&w(_),T&&k!==T&&z(T),(0,n.FD)(q,{children:[(0,n.Y)("div",{className:"inline-container",children:(0,n.FD)(ed,{children:[(0,n.Y)("div",{className:"control-label",children:(0,o.t)("Notification Method")}),(0,n.FD)("div",{className:"input-container",children:[(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Delivery method"),"data-test":"select-delivery-method",labelInValue:!0,onChange:l=>{S(""),w(""),z(""),a&&e&&a(t,P({},e,{method:l.value,recipients:"",cc:"",bcc:""}))},placeholder:(0,o.t)("Select Delivery Method"),options:Q,showSearch:!0,value:Q.find(e=>e.value===v),loading:$}),0!==t&&l?(0,n.Y)("span",{role:"button",tabIndex:0,className:"delete-button",onClick:()=>l(t),children:(0,n.Y)(F.F.DeleteOutlined,{iconSize:"l"})}):null]})]})}),void 0!==v?(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"inline-container",children:(0,n.Y)(ed,{children:v===O.yV.Email?(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"control-label",children:G.EMAIL_SUBJECT_NAME}),(0,n.Y)("div",{className:`input-container ${x?"error":""}`,children:(0,n.Y)(f.Input,{type:"text",name:"email_subject",value:u,placeholder:h,onChange:e=>{let{value:t}=e.target;r&&r(e);let a=t.length>0&&0===t.trim().length;R(a),m&&m(a)}})}),x&&(0,n.Y)("div",{style:{color:M.colorError,fontSize:3*M.sizeUnit},children:G.EMAIL_SUBJECT_ERROR_TEXT})]}):null})}),(0,n.Y)("div",{className:"inline-container",children:(0,n.FD)(ed,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("%s recipients",v===O.yV.SlackV2?O.yV.Slack:v),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{children:[O.yV.Email,O.yV.Slack].includes(v)?(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(f.Input.TextArea,{name:"To","data-test":"recipients",value:y,onChange:l=>{let{target:n}=l;S(n.value),a&&a(t,P({},e,{recipients:n.value}))}})}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)("div",{className:"helper",children:(0,o.t)('Recipients are separated by "," or ";"')})})]}):(0,n.FD)("div",{className:"input-container",children:[(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Select channels"),mode:"multiple",name:"recipients",value:N,options:X,onChange:l=>{C(l),a&&a(t,P({},e,{recipients:null==l?void 0:l.map(e=>e.value).join(",")}))},allowClear:!0,"data-test":"recipients",loading:K,allowSelectAll:!1,labelInValue:!0}),(0,n.Y)(V.A,{onClick:()=>J({force:!0}),tooltipContent:(0,o.t)("Force refresh Slack channels list"),disabled:K})]})})]})}),v===O.yV.Email&&(0,n.FD)(ed,{children:[A&&(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"control-label",children:G.EMAIL_CC_NAME}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(f.Input.TextArea,{name:"CC","data-test":"cc",value:L,onChange:l=>{let{target:n}=l;w(n.value),a&&a(t,P({},e,{cc:n.value}))}})}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)("div",{className:"helper",children:(0,o.t)('Recipients are separated by "," or ";"')})})]}),D&&(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"control-label",children:G.EMAIL_BCC_NAME}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(f.Input.TextArea,{name:"BCC","data-test":"bcc",value:k,onChange:l=>{let{target:n}=l;z(n.value),a&&a(t,P({},e,{bcc:n.value}))}})}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)("div",{className:"helper",children:(0,o.t)('Recipients are separated by "," or ";"')})})]}),(0,n.FD)("div",{className:"ghost-button",children:[(0,n.FD)("span",{className:"ghost-button",role:"button",tabIndex:0,onClick:()=>I(!0),style:{display:A?"none":"inline-flex"},children:[(0,n.Y)(F.F.MailOutlined,{iconSize:"xs",className:"icon"}),(0,o.t)("Add CC Recipients")]}),(0,n.FD)("span",{className:"ghost-button",role:"button",tabIndex:0,onClick:()=>Y(!0),style:{display:D?"none":"inline-flex"},children:[(0,n.Y)(F.F.MailOutlined,{iconSize:"xs",className:"icon"}),(0,o.t)("Add BCC Recipients")]})]})]})]}):null]})):null};var B=a(78344);function Z(e,t,a,l,n,i,r){try{var o=e[i](r),s=o.value}catch(e){a(e);return}o.done?t(s):Promise.resolve(s).then(l,n)}function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}let K=[r.Y.PivotTable,"table",r.Y.PairedTTest],H=c.I4.span`
  margin: 0 ${({theme:e})=>3*e.sizeUnit}px;
  color: ${({theme:e})=>e.colorSplit};
  font-weight: ${({theme:e})=>e.fontWeightStrong};
  font-size: ${({theme:e})=>e.fontSize}px;
  align-content: center;
`,J=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,Q=[O.yV.Email],ee={dashboard:{anchor:""}},et=[{label:(0,o.t)("< (Smaller than)"),value:"<"},{label:(0,o.t)("> (Larger than)"),value:">"},{label:(0,o.t)("<= (Smaller or equal)"),value:"<="},{label:(0,o.t)(">= (Larger or equal)"),value:">="},{label:(0,o.t)("== (Is equal)"),value:"=="},{label:(0,o.t)("!= (Is not equal)"),value:"!="},{label:(0,o.t)("Not null"),value:"not null"}],ea=[{label:(0,o.t)("None"),value:0},{label:(0,o.t)("30 days"),value:30},{label:(0,o.t)("60 days"),value:60},{label:(0,o.t)("90 days"),value:90}],el=[{label:(0,o.t)("Dashboard"),value:"dashboard"},{label:(0,o.t)("Chart"),value:"chart"}],en={pdf:{label:(0,o.t)("Send as PDF"),value:"PDF"},png:{label:(0,o.t)("Send as PNG"),value:"PNG"},csv:{label:(0,o.t)("Send as CSV"),value:"CSV"},txt:{label:(0,o.t)("Send as text"),value:"TEXT"}},ei=(0,u.AH)`
  margin-bottom: 0;
`,er=(0,u.AH)`
  .inline-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    &.wrap {
      flex-wrap: wrap;
    }

    > div {
      flex: 1 1 auto;
    }
  }
`,eo=(0,c.I4)(f.TreeSelect)`
  width: 100%;
`,es=c.I4.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .switch-label {
    margin-left: 10px;
  }
`,ed=c.I4.div`
  ${({theme:e})=>(0,u.AH)`
    flex: 1;
    margin-top: 0px;
    margin-bottom: ${4*e.sizeUnit}px;

    .helper {
      display: block;
      color: ${e.colorTextTertiary};
      font-size: ${e.fontSizeSM}px;
      padding: ${e.sizeUnit}px 0;
      text-align: left;
    }

    .required {
      margin-left: ${e.sizeUnit/2}px;
      color: ${e.colorError};
    }

    .control-label {
      margin-bottom: ${2*e.sizeUnit}px;
      color: ${e.colorText};
      font-size: ${e.fontSize}px;
    }

    .input-container {
      display: flex;
      align-items: center;

      > div {
        width: 100%;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    input[disabled] {
      color: ${e.colorTextDisabled};
    }

    textarea {
      height: 300px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colorTextPlaceholder};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${e.sizeUnit}px ${2*e.sizeUnit}px;
      border-style: none;
      border: 1px solid ${e.colorBorder};
      border-radius: ${e.borderRadius}px;

      &[name='description'] {
        flex: 1 1 auto;
      }
    }

    .input-label {
      margin-left: 10px;
    }

    .filters {
      margin: ${3*e.sizeUnit}px 0;

      .filters-container {
        display: flex;
        margin: ${2*e.sizeUnit}px 0;
      }

      .filters-dash-container {
        display: flex;
        flex-direction: column;
        max-width: 174px;
        flex: 1;
        margin-right: ${4*e.sizeUnit}px;

        .control-label {
          flex: 1;
          margin-bottom: ${2*e.sizeUnit}px;

          .label-with-tooltip {
            margin-right: ${2*e.sizeUnit}px;
          }
        }
      }

      .filters-dash-select {
        flex: 1;
      }

      .filters-dashvalue-container {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .filters-delete {
        display: flex;
        margin-top: ${8*e.sizeUnit}px;
        margin-left: ${4*e.sizeUnit}px;
      }

      .filters-trashcan {
        width: ${10*e.sizeUnit}px;
        display: 'flex';
        color: ${e.colorIcon};
      }
      .filters-add-container {
        flex: '.25';
        padding: '${3*e.sizeUnit} 0';

        .filters-add-btn {
          padding: ${2*e.sizeUnit}px;
          color: ${e.colorWhite};
        }
      }
    }
  `}
`,ec=c.I4.div`
  ${({theme:e})=>(0,u.AH)`
    color: ${e.colorPrimaryText};
    cursor: pointer;

    i {
      margin-right: ${2*e.sizeUnit}px;
    }

    &.disabled {
      color: ${e.colorTextDisabled};
      cursor: default;
    }
  `}
`,eu=c.I4.div`
  .inline-container .input-container {
    margin-left: 0;
  }
`,eh=e=>(0,u.AH)`
  margin-right: ${3*e.sizeUnit}px;
`,ep={GENERAL_TITLE:(0,o.t)("General information"),ALERT_CONDITION_TITLE:(0,o.t)("Alert condition"),ALERT_CONTENTS_TITLE:(0,o.t)("Alert contents"),REPORT_CONTENTS_TITLE:(0,o.t)("Report contents"),SCHEDULE_TITLE:(0,o.t)("Schedule"),NOTIFICATION_TITLE:(0,o.t)("Notification method"),NAME_ERROR_TEXT:(0,o.t)("name"),OWNERS_ERROR_TEXT:(0,o.t)("owners"),CONTENT_ERROR_TEXT:(0,o.t)("content type"),DATABASE_ERROR_TEXT:(0,o.t)("database"),SQL_ERROR_TEXT:(0,o.t)("sql"),ALERT_CONDITION_ERROR_TEXT:(0,o.t)("alert condition"),CRONTAB_ERROR_TEXT:(0,o.t)("crontab"),WORKING_TIMEOUT_ERROR_TEXT:(0,o.t)("working timeout"),RECIPIENTS_ERROR_TEXT:(0,o.t)("recipients"),EMAIL_SUBJECT_ERROR_TEXT:(0,o.t)("email subject"),EMAIL_VALIDATION_ERROR_TEXT:(0,o.t)("invalid email"),ERROR_TOOLTIP_MESSAGE:(0,o.t)("Not all required fields are complete. Please provide the following:"),NATIVE_FILTER_COLUMN_ERROR_TEXT:(0,o.t)("Native filter column is required"),NATIVE_FILTER_NO_VALUES_ERROR_TEXT:(0,o.t)("Native filter values has no values")},em=({status:e="active",onClick:t})=>"hidden"===e?null:(0,n.FD)(ec,{className:e,onClick:()=>{"disabled"!==e&&t()},children:[(0,n.Y)(F.F.PlusOutlined,{iconSize:"m"}),"active"===e?(0,o.t)("Add another notification method"):(0,o.t)("Add delivery method")]}),ev=(0,v.Ay)(({addDangerToast:e,onAdd:t,onHide:a,show:l,alert:r=null,isReport:h=!1,addSuccessToast:v})=>{var L,k,z,M,V,j,U,P,q,G;let ec=(0,c.DP)(),ev=(0,A.d4)(e=>e.user),eb=(0,x.B)(),ef=(null==eb?void 0:eb.ALERT_REPORTS_NOTIFICATION_METHODS)||Q,[eg,e_]=(0,i.useState)(!0),[eT,eE]=(0,i.useState)(),[ey,eS]=(0,i.useState)(!0),[eN,eC]=(0,i.useState)("dashboard"),[ex,eO]=(0,i.useState)("PNG"),[eR,eA]=(0,i.useState)(!1),[eI,eD]=(0,i.useState)(!1);(0,i.useEffect)(()=>{eD("PNG"===ex)},[ex]);let[eF,eY]=(0,i.useState)(!1),[eL,ew]=(0,i.useState)([]),[ek,ez]=(0,i.useState)([]),[eM,e$]=(0,i.useState)([]),[eV,ej]=(0,i.useState)([]),[eU,eP]=(0,i.useState)([]),[eq,eG]=(0,i.useState)({}),[eX,eB]=(0,i.useState)([{nativeFilterId:null,filterName:"",filterType:"",columnLabel:"",columnName:"",filterValues:[]}]),[eZ,eW]=(0,i.useState)({[O.Z_.General]:{hasErrors:!1,name:ep.GENERAL_TITLE,errors:[]},[O.Z_.Content]:{hasErrors:!1,name:h?ep.REPORT_CONTENTS_TITLE:ep.ALERT_CONTENTS_TITLE,errors:[]},[O.Z_.Alert]:{hasErrors:!1,name:ep.ALERT_CONDITION_TITLE,errors:[]},[O.Z_.Schedule]:{hasErrors:!1,name:ep.SCHEDULE_TITLE,errors:[]},[O.Z_.Notification]:{hasErrors:!1,name:ep.NOTIFICATION_TITLE,errors:[]}}),[eK,eH]=(0,i.useState)(""),eJ=(e,t)=>{eW(a=>W({},a,{[e]:{hasErrors:t.length>0,name:a[e].name,errors:t}}))},[eQ,e0]=(0,i.useState)(""),e1=h?"report":"alert",e2=null!==r,e4=(0,s.G7)(s.TO.AlertsAttachReports)||h,e5=(0,s.G7)(s.TO.AlertReportTabs),e3=(0,s.G7)(s.TO.AlertReportsFilter),[e6,e9]=(0,i.useState)("active"),[e8,e7]=(0,i.useState)([]),[te,tt]=(0,i.useState)(""),[ta,tl]=(0,i.useState)(!1),{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:tn,ALERT_REPORTS_DEFAULT_CRON_VALUE:ti,ALERT_REPORTS_DEFAULT_RETENTION:tr}=(0,A.d4)(e=>{var t,a,l,n;let i=null==(t=e.common)?void 0:t.conf;return{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:null!=(a=null==i?void 0:i.ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT)?a:3600,ALERT_REPORTS_DEFAULT_CRON_VALUE:null!=(l=null==i?void 0:i.ALERT_REPORTS_DEFAULT_CRON_VALUE)?l:"0 0 * * *",ALERT_REPORTS_DEFAULT_RETENTION:null!=(n=null==i?void 0:i.ALERT_REPORTS_DEFAULT_RETENTION)?n:90}}),to={active:!0,creation_method:"alerts_reports",crontab:ti,extra:ee,log_retention:tr,working_timeout:tn,name:"",owners:[],recipients:[],sql:"",email_subject:"",validator_config_json:{},validator_type:"",force_screenshot:!1,grace_period:void 0},ts=(e,t,a,l="filter_select",n=[])=>{var i;return(i=function*(){if("filter_time"===l)return;let i={formData:{datasource:`${a}__table`,groupby:[t],metrics:["count"],row_limit:1e3,showSearch:!0,viz_type:l,type:"NATIVE_FILTER",dashboardId:e,adhoc_filters:n},force:!1,ownState:{}};return yield(0,I.getChartDataRequest)(i).then(e=>{let a=e.json.result[0].data,n=a;return"filter_timecolumn"===l&&(n=a.filter(e=>2===e.dtype)),n.map(e=>"filter_timegrain"===l?{value:e.duration,label:e.name}:"filter_timecolumn"===l?{value:e.column_name,label:e.verbose_name||e.column_name}:{value:e[t],label:e[t]})})},function(){var e=this,t=arguments;return new Promise(function(a,l){var n=i.apply(e,t);function r(e){Z(n,a,l,r,o,"next",e)}function o(e){Z(n,a,l,r,o,"throw",e)}r(void 0)})})()},td=()=>eU.filter(e=>!eX.some(t=>t.nativeFilterId===e.value)),tc=(e,t)=>{let a=[...e8];a[e]=t,e8[e].method!==t.method?(e8[e]=t,e7(e8.filter((t,a)=>a<=e)),e8.length-1>e&&e9("active"),void 0!==t.method&&"hidden"!==e6&&e9("active")):e7(a)},tu=e=>{let t=e8.slice();t.splice(e,1),e7(t),e9("active")},th=e=>{eE(t=>{var a;let l=null==t||null==(a=t.extra)?void 0:a.dashboard,n={dashboard:W({},l,{anchor:e})};return W({},t,{extra:n})})},{state:{loading:tp,resource:tm,error:tv},fetchResource:tb,createResource:tf,updateResource:tg,clearError:t_}=(0,m.fn)("report",(0,o.t)("report"),e),tT=()=>{t_(),eS(!0),a(),e7([]),eE(W({},to)),e9("active")},tE=(0,i.useMemo)(()=>(e="",t,a)=>{let l=p().encode({filter:e,page:t,page_size:a});return d.A.get({endpoint:`/api/v1/report/related/created_by?q=${l}`}).then(e=>({data:e.json.result.map(e=>({value:e.value,label:e.text})),totalCount:e.json.count}))},[]),ty=(0,i.useCallback)(e=>{let t,a=e||(null==eT?void 0:eT.database);return!a||a.label?null:(eL.forEach(e=>{(e.value===a.value||e.value===a.id)&&(t=e)}),t)},[null==eT?void 0:eT.database,eL]),tS=(e,t)=>{eE(a=>W({},a,{[e]:t}))},tN=(0,i.useMemo)(()=>(e="",t,a)=>{let l=p().encode({filter:e,page:t,page_size:a});return d.A.get({endpoint:`/api/v1/report/related/database?q=${l}`}).then(e=>{let t=e.json.result.map(e=>({value:e.value,label:e.text}));return ew(t),{data:t,totalCount:e.json.count}})},[]),tC=null==eT?void 0:eT.dashboard;(0,i.useEffect)(()=>{e5&&(null==tC?void 0:tC.value)&&d.A.get({endpoint:`/api/v1/dashboard/${tC.value}/tabs`}).then(e=>{var t,a,l;let{tab_tree:n,all_tabs:i,native_filters:r}=e.json.result,o=n.map(e=>e.value);o.length>1&&n.push({title:"All Tabs",value:JSON.stringify(o)}),ej(n),eG(r),e2&&r.all&&(l=r.all,eX.map(e=>{var t,a;if(!e.nativeFilterId)return;let n=l.filter(t=>t.id===e.nativeFilterId)[0],{datasetId:i}=n.targets[0],r=n.name,o=(null==(t=n.targets[0].column)?void 0:t.name)||r,s=null==eT||null==(a=eT.dashboard)?void 0:a.value,{filterType:d}=n;if("filter_time"!==d)return ts(s,o,i,d).then(t=>{eB(a=>a.map(a=>a.nativeFilterId===e.nativeFilterId?W({},a,{filterType:d,filterName:r,optionFilterValues:t}):a))})}),eP(r.all.map(e=>({value:e.id,label:e.name}))));let s=null==eT||null==(a=eT.extra)||null==(t=a.dashboard)?void 0:t.anchor;if(s)try{let e=JSON.parse(s);if(Array.isArray(e)||eP(r[s].map(e=>({value:e.id,label:e.name}))),Array.isArray(e))e.every(e=>e in i)||th(void 0);else throw Error("Parsed value is not an array")}catch(e){s in i||th(void 0)}else r.all&&eP(r.all.map(e=>({value:e.id,label:e.name})))}).catch(t=>{e((0,o.t)("There was an error retrieving dashboard tabs."))})},[tC,e5,null==eT?void 0:eT.extra,e]);let tx=(null==eT?void 0:eT.database)&&!eT.database.label;(0,i.useEffect)(()=>{tx&&tS("database",ty())},[tx,ty]);let tO=(0,i.useMemo)(()=>(e="",t,a)=>{let l=p().encode_uri({filter:e,page:t,page_size:a});return d.A.get({endpoint:`/api/v1/report/related/dashboard?q=${l}`}).then(e=>{let t=e.json.result.map(e=>({value:e.value,label:e.text}));return ez(t),{data:t,totalCount:e.json.count}})},[]),tR=(0,i.useCallback)(e=>{let t,a=e||(null==eT?void 0:eT.chart);return!a||a.label?null:(eM.forEach(e=>{(e.value===a.value||e.value===a.id)&&(t=e)}),t)},[eM,null==eT?void 0:eT.chart]),tA=(null==eT?void 0:eT.chart)&&!(null==eT?void 0:eT.chart.label);(0,i.useEffect)(()=>{tA&&tS("chart",tR())},[tR,tA]);let tI=(0,i.useMemo)(()=>(e="",t,a)=>{let l=p().encode_uri({filter:e,page:t,page_size:a});return d.A.get({endpoint:`/api/v1/report/related/chart?q=${l}`}).then(e=>{let t=e.json.result.map(e=>({value:e.value,label:e.text}));return e$(t),{data:t,totalCount:e.json.count}})},[]),tD=()=>{var e,t;let a=null==eT||null==(e=eT.chart)?void 0:e.label,l=null==eT||null==(t=eT.dashboard)?void 0:t.label;if(!(null==eT?void 0:eT.name))return void tt("");switch(eN){case O.cM.Chart:tt(`${null==eT?void 0:eT.name}: ${a||""}`);break;case O.cM.Dashboard:tt(`${null==eT?void 0:eT.name}: ${l||""}`);break;default:tt("")}},tF=e=>{let{target:{type:t,value:a,name:l}}=e;tS(l,"number"===t?parseInt(a,10)||null:a),"name"===l&&tD()},tY=()=>{eB([...eX,{nativeFilterId:null,columnLabel:"",columnName:"",filterValues:[]}])},tL=e=>{let{target:t}=e,a=+t.value;0===a?tS(t.name,void 0):tS(t.name,a?Math.max(a,1):a)},tw=(e,t)=>{let a;a="string"==typeof t?[t]:t,eB(eX.map((t,l)=>l===e?W({},t,{filterValues:a}):t))};(0,i.useEffect)(()=>{e2&&(!(null==eT?void 0:eT.id)||(null==r?void 0:r.id)!==eT.id||ey&&l)?(null==r?void 0:r.id)===null||tp||tv||tb(r.id||0):!e2&&(!eT||eT.id||ey&&l)&&(eE(W({},to,{owners:ev?[{value:ev.userId,label:`${ev.firstName} ${ev.lastName}`}]:[]})),e7([{recipients:"",cc:"",bcc:"",options:ef,method:O.yV.Email}]),e9("active"))},[r]),(0,i.useEffect)(()=>{if(tm){var e,t;let a,l;(null==(t=tm.extra)||null==(e=t.dashboard)?void 0:e.nativeFilters)&&eB(tm.extra.dashboard.nativeFilters);let n=(tm.recipients||[]).map(e=>{let t="string"==typeof e.recipient_config_json?JSON.parse(e.recipient_config_json):{};return{method:e.type,recipients:t.target||e.recipient_config_json,options:ef,cc:t.ccTarget||"",bcc:t.bccTarget||""}});e7(n),e9(n.length===ef.length?"hidden":"active"),eC(tm.chart?O.cM.Chart:O.cM.Dashboard),eO(tm.report_format||"PNG");let i="string"==typeof tm.validator_config_json?JSON.parse(tm.validator_config_json):tm.validator_config_json;eY("not null"===tm.validator_type),tm.chart&&e0(tm.chart.viz_type),eA(tm.force_screenshot),eE(W({},tm,{chart:tm.chart?tR(tm.chart)||{value:tm.chart.id,label:tm.chart.slice_name}:void 0,dashboard:tm.dashboard?((l=tm.dashboard||(null==eT?void 0:eT.dashboard))&&!l.label?(ek.forEach(e=>{(e.value===l.value||e.value===l.id)&&(a=e)}),a):null)||{value:tm.dashboard.id,label:tm.dashboard.dashboard_title}:void 0,database:tm.database?ty(tm.database)||{value:tm.database.id,label:tm.database.database_name}:void 0,owners:((null==r?void 0:r.owners)||[]).map(e=>({value:e.value||e.id,label:e.label||`${e.first_name} ${e.last_name}`})),validator_config_json:"not null"===tm.validator_type?{op:"not null"}:i}))}},[tm]);let tk=eT||{};(0,i.useEffect)(()=>{var e,t,a,l,n,i;let r,o,s,d,c;r=[],(null==eT||null==(e=eT.name)?void 0:e.length)||r.push(ep.NAME_ERROR_TEXT),(null==eT||null==(t=eT.owners)?void 0:t.length)||r.push(ep.OWNERS_ERROR_TEXT),eJ(O.Z_.General,r),o=[],eN===O.cM.Dashboard&&(null==eT?void 0:eT.dashboard)||eN===O.cM.Chart&&(null==eT?void 0:eT.chart)||o.push(ep.CONTENT_ERROR_TEXT),eX.forEach(e=>{let t=!e.columnName||""===e.columnName,a=!e.filterValues||0===e.filterValues.length;t&&a||(t&&o.push(ep.NATIVE_FILTER_COLUMN_ERROR_TEXT),a&&o.push(ep.NATIVE_FILTER_NO_VALUES_ERROR_TEXT))}),eJ(O.Z_.Content,o),h||(s=[],(null==eT?void 0:eT.database)||s.push(ep.DATABASE_ERROR_TEXT),(null==eT||null==(a=eT.sql)?void 0:a.length)||s.push(ep.SQL_ERROR_TEXT),(eF||(null==eT||null==(l=eT.validator_config_json)?void 0:l.op))&&(eF||(null==eT||null==(n=eT.validator_config_json)?void 0:n.threshold)!==void 0)||s.push(ep.ALERT_CONDITION_ERROR_TEXT),eJ(O.Z_.Alert,s)),d=[],(null==eT||null==(i=eT.crontab)?void 0:i.length)||d.push(ep.CRONTAB_ERROR_TEXT),(null==eT?void 0:eT.working_timeout)||d.push(ep.WORKING_TIMEOUT_ERROR_TEXT),eJ(O.Z_.Schedule,d),c=[],(()=>{if(!e8.length)return!1;let e=!1;return e8.forEach(t=>{var a;t.method&&(null==(a=t.recipients)?void 0:a.length)&&(e=!0)}),e})()?(()=>{if(!e8.length)return!0;let e=e=>!e||e.split(/[,;]/).every(e=>J.test(e.trim()));return e8.every(t=>{if(t.method&&"Email"===t.method){var a;return(!(null==(a=t.recipients)?void 0:a.length)||e(t.recipients))&&(!t.cc||e(t.cc))&&(!t.bcc||e(t.bcc))}return!0})})()||c.push(ep.EMAIL_VALIDATION_ERROR_TEXT):c.push(ep.RECIPIENTS_ERROR_TEXT),ta&&c.push(ep.EMAIL_SUBJECT_ERROR_TEXT),eJ(O.Z_.Notification,c),tD()},[tk.name,tk.owners,tk.database,tk.sql,tk.validator_config_json,tk.crontab,tk.working_timeout,tk.dashboard,tk.chart,eN,eX,e8,eF,ta]),(0,i.useEffect)(()=>{let e,t=[O.Z_.General,O.Z_.Content,h?void 0:O.Z_.Alert,O.Z_.Schedule,O.Z_.Notification].some(e=>e&&eZ[e].hasErrors);eH(t?(e=[],Object.values(eZ).forEach(t=>{if(t.hasErrors){let a=`${t.name}: `;e.push(a+t.errors.join(", "))}}),(0,n.FD)("div",{children:[ep.ERROR_TOOLTIP_MESSAGE,(0,n.Y)(B.B,{dataSource:e,renderItem:e=>(0,n.FD)(B.B.Item,{css:e=>(0,u.AH)`
              &&& {
                color: ${e.colorWhite};
              }
            `,compact:!0,children:["• ",e]}),size:"small",split:!1})]})):""),e_(t)},[eZ]);let tz=(0,i.useMemo)(()=>ef.reduce((e,t)=>e.some(e=>e.includes("slack"))&&t.toLowerCase().includes("slack")?e:[...e,t.toLowerCase()],[]).length,[ef]);ey&&l&&eS(!1);let tM=e=>{tl(e)};return(0,n.Y)(Y.xQ,{show:l,onHide:tT,onSave:()=>{var e,a,l,n;let i=[];e8.forEach(e=>{e.method&&e.recipients.length&&i.push({recipient_config_json:{target:e.recipients,ccTarget:e.cc,bccTarget:e.bcc},type:e.method})});let r=eN===O.cM.Chart&&!h;if(null==eT||null==(e=eT.extra)?void 0:e.dashboard){let e=eX.filter(e=>{let t=e.filterName&&""!==e.filterName.trim(),a=e.filterValues&&e.filterValues.length>0;return t||a});eT.extra.dashboard.nativeFilters=e.map(({columnName:e,columnLabel:t,nativeFilterId:a,filterValues:l,filterType:n,filterName:i})=>({filterName:i,filterType:n,columnName:e,columnLabel:t,nativeFilterId:a,filterValues:l}))}let s=W({},eT,{type:h?"Report":"Alert",force_screenshot:r||eR,validator_type:eF?"not null":"operator",validator_config_json:eF?{}:null==eT?void 0:eT.validator_config_json,chart:eN===O.cM.Chart?null==eT||null==(a=eT.chart)?void 0:a.value:null,dashboard:eN===O.cM.Dashboard?null==eT||null==(l=eT.dashboard)?void 0:l.value:null,custom_width:eI?null==eT?void 0:eT.custom_width:void 0,database:null==eT||null==(n=eT.database)?void 0:n.value,owners:((null==eT?void 0:eT.owners)||[]).map(e=>e.value||e.id),recipients:i,report_format:ex||"PNG",extra:eN===O.cM.Dashboard?null==eT?void 0:eT.extra:{}});if(s.recipients&&!s.recipients.length&&delete s.recipients,s.context_markdown="string",e2){if(null==eT?void 0:eT.id){let e=eT.id;delete s.id,delete s.created_by,delete s.last_eval_dttm,delete s.last_state,delete s.last_value,delete s.last_value_row_json,tg(e,s).then(e=>{e&&(v((0,o.t)("%s updated",s.type)),t&&t(),tT())})}}else eT&&tf(s).then(e=>{e&&(v((0,o.t)("%s updated",s.type)),t&&t(e),tT())})},saveDisabled:eg,saveText:e2?(0,o.t)("Save"):(0,o.t)("Add"),errorTooltip:eK,title:(()=>{let e;switch(!0){case e2&&h:e=(0,o.t)("Edit report");break;case e2:e=(0,o.t)("Edit alert");break;case h:e=(0,o.t)("Add report");break;default:e=(0,o.t)("Add alert")}return e})(),isEditMode:e2,width:500,wrapProps:{"data-test":"alert-report-modal"},children:(0,n.Y)("div",{css:er,children:(0,n.Y)(_.S,{expandIconPosition:"end",defaultActiveKey:"general",accordion:!0,modalMode:!0,items:[{key:"general",label:(0,n.Y)(T.s,{title:ep.GENERAL_TITLE,subtitle:(0,o.t)("Set up basic details, such as name and description."),validateCheckStatus:!eZ[O.Z_.General].hasErrors,testId:"general-information-panel"}),children:(0,n.FD)("div",{className:"header-section",children:[(0,n.Y)(Y.Gk,{label:h?(0,o.t)("Report name"):(0,o.t)("Alert name"),required:!0,children:(0,n.Y)(f.Input,{name:"name",placeholder:h?(0,o.t)("Enter report name"):(0,o.t)("Enter alert name"),value:eT?eT.name:"",onChange:tF})}),(0,n.Y)(Y.Gk,{label:(0,o.t)("Owners"),required:!0,children:(0,n.Y)(E.A,{ariaLabel:(0,o.t)("Owners"),allowClear:!0,name:"owners",mode:"multiple",placeholder:(0,o.t)("Select owners"),value:(null==eT?void 0:eT.owners)||[],options:tE,onChange:e=>{tS("owners",e||[])},"data-test":"owners-select"})}),(0,n.Y)(Y.Gk,{label:(0,o.t)("Description"),children:(0,n.Y)(f.Input,{name:"description",value:eT&&eT.description||"",placeholder:(0,o.t)("Include description to be sent with %s",e1),onChange:tF})}),(0,n.FD)(es,{children:[(0,n.Y)(f.Switch,{checked:!!eT&&eT.active,defaultChecked:!0,onChange:e=>{tS("active",e)}}),(0,n.Y)("div",{className:"switch-label",children:h?(0,o.t)("Report is active"):(0,o.t)("Alert is active")})]})]})},...h?[]:[{key:"condition",label:(0,n.Y)(T.s,{title:ep.ALERT_CONDITION_TITLE,subtitle:(0,o.t)("Define the database, SQL query, and triggering conditions for alert."),validateCheckStatus:!eZ[O.Z_.Alert].hasErrors,testId:"alert-condition-panel"}),children:(0,n.FD)("div",{children:[(0,n.FD)(ed,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Database"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(E.A,{ariaLabel:(0,o.t)("Database"),name:"source",placeholder:(0,o.t)("Select database"),value:(null==eT||null==(L=eT.database)?void 0:L.label)&&(null==eT||null==(k=eT.database)?void 0:k.value)?{value:eT.database.value,label:eT.database.label}:void 0,options:tN,onChange:e=>{tS("database",e||[])}})})]}),(0,n.FD)(ed,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("SQL Query"),(0,n.Y)(y.I,{tooltip:(0,o.t)('The result of this query must be a value capable of numeric interpretation e.g. 1, 1.0, or "1" (compatible with Python\'s float() function).')}),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(C.A,{name:"sql",language:"sql",offerEditInModal:!1,minLines:15,maxLines:15,onChange:e=>{tS("sql",e||"")},readOnly:!1,initialValue:null==tm?void 0:tm.sql},null==eT?void 0:eT.id)]}),(0,n.FD)("div",{className:"inline-container wrap",css:(0,u.AH)`
                            gap: ${ec.sizeUnit}px;
                          `,children:[(0,n.FD)(ed,{css:ei,children:[(0,n.FD)("div",{className:"control-label",css:eh,children:[(0,o.t)("Trigger Alert If..."),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Condition"),onChange:e=>{var t;eY("not null"===e),tS("validator_config_json",{op:e,threshold:eT?null==(t=eT.validator_config_json)?void 0:t.threshold:void 0})},placeholder:(0,o.t)("Condition"),value:(null==eT||null==(z=eT.validator_config_json)?void 0:z.op)||void 0,options:et})})]}),(0,n.FD)(ed,{css:ei,children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Value")," ",!eF&&(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(f.InputNumber,{disabled:eF,type:"number",name:"threshold",value:(null==eT||null==(M=eT.validator_config_json)?void 0:M.threshold)===void 0||eF?"":eT.validator_config_json.threshold,min:0,placeholder:(0,o.t)("Value"),onChange:e=>{var t;tS("validator_config_json",{op:eT?null==(t=eT.validator_config_json)?void 0:t.op:void 0,threshold:e})}})})]})]})]})}],{key:"contents",label:(0,n.Y)(T.s,{title:h?ep.REPORT_CONTENTS_TITLE:ep.ALERT_CONTENTS_TITLE,subtitle:(0,o.t)("Customize data source, filters, and layout."),validateCheckStatus:!eZ[O.Z_.Content].hasErrors,testId:"contents-panel"}),children:(0,n.FD)(n.FK,{children:[(0,n.FD)(ed,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Content type"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Select content type"),onChange:e=>{eA(!1),eC(e)},value:eN,options:el,placeholder:(0,o.t)("Select content type")})]}),(0,n.Y)(ed,{children:eN===O.cM.Chart?(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Select chart"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(E.A,{ariaLabel:(0,o.t)("Chart"),name:"chart",value:(null==eT||null==(V=eT.chart)?void 0:V.label)&&(null==eT||null==(j=eT.chart)?void 0:j.value)?{value:eT.chart.value,label:eT.chart.label}:void 0,options:tI,onChange:e=>{d.A.get({endpoint:`/api/v1/chart/${e.value}`}).then(e=>e0(e.json.result.viz_type)),tS("chart",e||void 0),tS("dashboard",null)},placeholder:(0,o.t)("Select chart to use")})]}):(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Select dashboard"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(E.A,{ariaLabel:(0,o.t)("Dashboard"),name:"dashboard",value:(null==eT||null==(U=eT.dashboard)?void 0:U.label)&&(null==eT||null==(P=eT.dashboard)?void 0:P.value)?{value:eT.dashboard.value,label:eT.dashboard.label}:void 0,options:tO,onChange:e=>{tS("dashboard",e||void 0),tS("chart",null),e5&&(ej([]),eP([]),th("")),e3&&eB([{filterName:"",filterType:"",nativeFilterId:null,columnLabel:"",columnName:"",filterValues:[]}])},placeholder:(0,o.t)("Select dashboard to use")})]})}),(0,n.Y)(ed,{css:["PDF","TEXT","CSV"].includes(ex)&&ei,children:e4&&(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Content format"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Select format"),onChange:e=>{eO(e)},value:ex,options:eN===O.cM.Dashboard?["pdf","png"].map(e=>en[e]):K.includes(eQ)?Object.values(en):["pdf","png","csv"].map(e=>en[e]),placeholder:(0,o.t)("Select format")})]})}),e5&&eN===O.cM.Dashboard&&(0,n.Y)(ed,{children:(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"control-label",children:(0,o.t)("Select tab")}),(0,n.Y)(eo,{disabled:(null==eV?void 0:eV.length)===0,treeData:eV,value:null==eT||null==(G=eT.extra)||null==(q=G.dashboard)?void 0:q.anchor,onSelect:th,placeholder:(0,o.t)("Select a tab")})]})}),e3&&eN===O.cM.Dashboard&&(0,n.Y)(ed,{children:(0,n.Y)(S.l,{className:"filters",name:"form",autoComplete:"off",children:(0,n.Y)(S.l.List,{name:"filters",initialValue:eX,children:(t,{add:a,remove:l})=>(0,n.FD)("div",{children:[t.map(({key:t,name:a})=>{var i,r;return(0,n.FD)("div",{className:"filters-container",children:[(0,n.FD)("div",{className:"filters-dash-container",children:[(0,n.FD)("div",{className:"control-label",children:[(0,n.Y)("span",{className:"label-with-tooltip",children:(0,o.t)("Dashboard Filter")}),(0,n.Y)(y.I,{tooltip:(0,o.t)("Choose from existing dashboard filters and select a value to refine your report results.")})]}),(0,n.Y)(g.A,{disabled:(null==eU?void 0:eU.length)<1&&!(null==(i=eX[a])?void 0:i.filterName),ariaLabel:(0,o.t)("Select Filter"),placeholder:(0,o.t)("Select Filter"),value:null==(r=eX[a])?void 0:r.filterName,options:td(),onChange:t=>((t,a)=>{var l;let n;if(!a||"undefined"===a||"null"===a)return;let i=Object.values(eq).flat().filter(e=>e.id===a)[0],{filterType:r,adhoc_filters:s}=i;if(eX.some(e=>e.nativeFilterId===a))return void e((0,o.t)("This filter already exist on the report"));let d=i.name;n="filter_time"===r||"filter_timecolumn"===r||"filter_timegrain"===r?i.name:i.targets[0].column.name;let c=i.targets[0].datasetId||null,u=eU.filter(e=>e.value===a)[0].label,h=null==eT||null==(l=eT.dashboard)?void 0:l.value,p={formData:{datasource:`${c}__table`,groupby:[n],metrics:["count"],row_limit:1e3,showSearch:!0,viz_type:"filter_select",type:"NATIVE_FILTER",dashboardId:h,adhoc_filters:s},force:!1,ownState:{}};if("filter_time"===r||"filter_timecolumn"===r||"filter_timegrain"===r){ts(h,n,c,r,s).then(e=>{eB(eX.map((l,i)=>i===t?W({},l,{filterName:d,filterType:r,nativeFilterId:a,columnLabel:u,columnName:n,optionFilterValues:e,filterValues:[]}):l))}),eB(eX.map((e,l)=>l===t?W({},e,{filterName:d,filterType:r,nativeFilterId:a,columnLabel:u,columnName:n,optionFilterValues:[],filterValues:[]}):e));return}(0,I.getChartDataRequest)(p).then(e=>{let l=e.json.result[0].data.map(e=>({value:e[n],label:e[n]}));eB(eX.map((e,i)=>i===t?W({},e,{filterName:d,filterType:r,nativeFilterId:a,columnLabel:u,columnName:n,optionFilterValues:l,filterValues:[]}):e))})})(a,String(t)),onClear:()=>{eX[a].columnName="",eX[a].filterName="",eX[a].filterValues=[]},css:(0,u.AH)`
                                        flex: 1;
                                      `,oneLine:!0,allowClear:!0})]}),(0,n.FD)("div",{className:"filters-dashvalue-container",children:[(0,n.Y)("div",{className:"control-label",children:(0,o.t)("Value")}),((e,t)=>{if(!e)return null;let{filterType:a,filterValues:l}=e,i="multiple";if("filter_time"===a)return(0,n.Y)(D.Ay,{name:"time_range",onChange:t=>{eB(eX.map(a=>e.nativeFilterId===a.nativeFilterId?W({},a,{filterValues:[t]}):a))},value:null==l?void 0:l[0]});if("filter_range"===a){let t=null==l?void 0:l[0],a=null==l?void 0:l[1];return(0,n.FD)("div",{children:[(0,n.FD)("div",{className:"inline-container",children:[(0,n.Y)(f.InputNumber,{value:t,onChange:t=>{eB(eX.map(a=>a.nativeFilterId===e.nativeFilterId?W({},a,{filterValues:[t,null==l?void 0:l[1]]}):a))}}),(0,n.Y)(H,{children:"-"}),(0,n.Y)(f.InputNumber,{value:a,onChange:t=>{eB(eX.map(a=>a.nativeFilterId===e.nativeFilterId?W({},a,{filterValues:[null==l?void 0:l[0],t]}):a))}})]}),(0,n.Y)(R.Mo,{status:"help",children:(0,o.t)("Enter minimum and maximum values for the range filter")})]})}return("filter_timegrain"===a||"filter_timecolumn"===a)&&(i="single"),(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Select Value"),placeholder:(0,o.t)("Select Value"),disabled:!(null==e?void 0:e.optionFilterValues),value:null==e?void 0:e.filterValues,options:(null==e?void 0:e.optionFilterValues)||[],onChange:e=>tw(t,e),mode:i,onClear:()=>{tw(t,[])},allowClear:!0})})(eX[a],a)]}),(0!==a||e2)&&(0,n.Y)("div",{className:"filters-delete",children:(0,n.Y)(F.F.DeleteOutlined,{iconSize:"xl",className:"filters-trashcan",onClick:()=>{let e;(e=eX||[]).splice(a,1),eB(e),l(a)}})})]},t)}),(0,n.Y)("div",{className:"filters-add-container",children:td().length>0&&(0,n.FD)("a",{className:"filters-add-btn",role:"button",tabIndex:0,onClick:()=>{tY(),a()},onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(tY(),a())},children:["+ ",(0,o.t)("Apply another dashboard filter")]})})]})})})}),eI&&(0,n.FD)(ed,{css:!h&&eN===O.cM.Chart&&ei,children:[(0,n.Y)("div",{className:"control-label",children:(0,o.t)("Screenshot width")}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(f.InputNumber,{type:"number",name:"custom_width",value:(null==eT?void 0:eT.custom_width)||void 0,min:600,max:2400,placeholder:(0,o.t)("Input custom width in pixels"),onChange:e=>{tS("custom_width",null==e||"string"==typeof e&&Number.isNaN(Number(e))?null:Number(e))}})})]}),(h||eN===O.cM.Dashboard)&&(0,n.Y)("div",{className:"inline-container",children:(0,n.Y)(f.Checkbox,{"data-test":"bypass-cache",checked:eR,onChange:e=>{eA(e.target.checked)},children:(0,o.t)("Ignore cache when generating report")})})]})},{key:"schedule",label:(0,n.Y)(T.s,{title:ep.SCHEDULE_TITLE,subtitle:(0,o.t)("Define delivery schedule, timezone, and frequency settings."),validateCheckStatus:!eZ[O.Z_.Schedule].hasErrors,testId:"schedule-panel"}),children:(0,n.FD)(n.FK,{children:[(0,n.Y)($,{value:(null==eT?void 0:eT.crontab)||"",onChange:e=>tS("crontab",e)}),(0,n.FD)(ed,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Timezone")," ",(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)(N.A,{onTimezoneChange:e=>{tS("timezone",e)},timezone:null==eT?void 0:eT.timezone,minWidth:"100%"})]}),(0,n.FD)(ed,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Log retention"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(g.A,{ariaLabel:(0,o.t)("Log retention"),placeholder:(0,o.t)("Log retention"),onChange:e=>{tS("log_retention",e)},value:null==eT?void 0:eT.log_retention,options:ea,sortComparator:(0,b.qw)("value")})})]}),(0,n.Y)(ed,{css:ei,children:h?(0,n.FD)(n.FK,{children:[(0,n.FD)("div",{className:"control-label",children:[(0,o.t)("Working timeout"),(0,n.Y)("span",{className:"required",children:"*"})]}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(w,{min:1,name:"working_timeout",value:(null==eT?void 0:eT.working_timeout)||"",placeholder:(0,o.t)("Time in seconds"),onChange:tL,timeUnit:(0,o.t)("seconds")})})]}):(0,n.FD)(n.FK,{children:[(0,n.Y)("div",{className:"control-label",children:(0,o.t)("Grace period")}),(0,n.Y)("div",{className:"input-container",children:(0,n.Y)(w,{min:1,name:"grace_period",value:(null==eT?void 0:eT.grace_period)||"",placeholder:(0,o.t)("Time in seconds"),onChange:tL,timeUnit:(0,o.t)("seconds")})})]})})]})},{key:"notification",label:(0,n.Y)(T.s,{title:ep.NOTIFICATION_TITLE,subtitle:(0,o.t)("Choose notification method and recipients."),validateCheckStatus:!eZ[O.Z_.Notification].hasErrors,testId:"notification-method-panel"}),children:(0,n.FD)(n.FK,{children:[e8.map((e,t)=>(0,n.Y)(eu,{children:(0,n.Y)(X,{setting:e,index:t,onUpdate:tc,onRemove:tu,onInputChange:tF,email_subject:(null==eT?void 0:eT.email_subject)||"",defaultSubject:te||"",setErrorSubject:tM},`NotificationMethod-${t}`)})),tz>e8.length&&(0,n.Y)(em,{"data-test":"notification-add",status:e6,onClick:()=>{e7([...e8,{recipients:"",options:ef.filter(e=>!e8.reduce((t,a)=>t||e===a.method,!1))}]),e9(e8.length===tz?"hidden":"disabled")}})]})}]})})})})},28506:(e,t,a)=>{a.d(t,{l:()=>d});var l=a(2445),n=a(91054),i=a(21346),r=a(54295);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}let s={everyText:(0,n.t)("every"),emptyMonths:(0,n.t)("every month"),emptyMonthDays:(0,n.t)("every day of the month"),emptyMonthDaysShort:(0,n.t)("day of the month"),emptyWeekDays:(0,n.t)("every day of the week"),emptyWeekDaysShort:(0,n.t)("day of the week"),emptyHours:(0,n.t)("every hour"),emptyMinutes:(0,n.t)("every minute"),emptyMinutesForHourPeriod:(0,n.t)("every"),yearOption:(0,n.t)("year"),monthOption:(0,n.t)("month"),weekOption:(0,n.t)("week"),dayOption:(0,n.t)("day"),hourOption:(0,n.t)("hour"),minuteOption:(0,n.t)("minute"),rebootOption:(0,n.t)("reboot"),prefixPeriod:(0,n.t)("Every"),prefixMonths:(0,n.t)("in"),prefixMonthDays:(0,n.t)("on"),prefixWeekDays:(0,n.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,n.t)("or"),prefixHours:(0,n.t)("at"),prefixMinutes:(0,n.t)(":"),prefixMinutesForHourPeriod:(0,n.t)("at"),suffixMinutesForHourPeriod:(0,n.t)("minute(s)"),errorInvalidCron:(0,n.t)("Invalid cron expression"),clearButtonText:(0,n.t)("Clear"),weekDays:[(0,n.t)("Sunday"),(0,n.t)("Monday"),(0,n.t)("Tuesday"),(0,n.t)("Wednesday"),(0,n.t)("Thursday"),(0,n.t)("Friday"),(0,n.t)("Saturday")],months:[(0,n.t)("January"),(0,n.t)("February"),(0,n.t)("March"),(0,n.t)("April"),(0,n.t)("May"),(0,n.t)("June"),(0,n.t)("July"),(0,n.t)("August"),(0,n.t)("September"),(0,n.t)("October"),(0,n.t)("November"),(0,n.t)("December")],altWeekDays:[(0,n.t)("SUN"),(0,n.t)("MON"),(0,n.t)("TUE"),(0,n.t)("WED"),(0,n.t)("THU"),(0,n.t)("FRI"),(0,n.t)("SAT")],altMonths:[(0,n.t)("JAN"),(0,n.t)("FEB"),(0,n.t)("MAR"),(0,n.t)("APR"),(0,n.t)("MAY"),(0,n.t)("JUN"),(0,n.t)("JUL"),(0,n.t)("AUG"),(0,n.t)("SEP"),(0,n.t)("OCT"),(0,n.t)("NOV"),(0,n.t)("DEC")]},d=(0,i.I4)(e=>(0,l.Y)(r.Ay,o({locale:s},e)))`
  ${({theme:e})=>`

    /* Boilerplate styling for ReactCronPicker imported explicitly in GlobalStyles.tsx */

    /* When year period is selected */

    :has(.react-js-cron-months) {
      display: grid !important;
      grid-template-columns: repeat(2, 50%);
      column-gap: ${e.sizeUnit}px;
      row-gap: ${2*e.sizeUnit}px;
      div:has(.react-js-cron-hours) {
        grid-column: span 2;
        display: flex;
        justify-content: space-between;
        .react-js-cron-field {
          width: 50%;
        }
      }
    }

    /* When month period is selected */

    :not(:has(.react-js-cron-months)) {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      column-gap: ${e.sizeUnit}px;
      row-gap: ${2*e.sizeUnit}px;
      .react-js-cron-period {
        grid-column: span 2;
      }
      div:has(.react-js-cron-hours) {
        grid-column: span 2;
        display: flex;
        justify-content: space-between;
        .react-js-cron-field {
          width: 50%;
        }
      }
    }

    /* When week period is selected */

    :not(:has(.react-js-cron-month-days)) {
      .react-js-cron-week-days {
        grid-column: span 2;
      }
    }

    /* For proper alignment of inputs and span elements */

    :not(div:has(.react-js-cron-hours)) {
      display: flex;
      flex-wrap: nowrap;
    }

    div:has(.react-js-cron-hours) {
      width: 100%;
    }

    .react-js-cron-minutes > span {
      padding-left: ${e.sizeUnit}px;
    }

    /* Sizing of select container */

    .react-js-cron-select.ant-select {
      width: 100%;
      .ant-select-selector {
        flex-wrap: nowrap;
      }
    }

    .react-js-cron-field {
      width: 100%;
      margin-bottom: 0px;
      > span {
        margin-left: 0px;
      }
    }

    .react-js-cron-custom-select .ant-select-selection-placeholder {
      flex: auto;
      border-radius: ${e.borderRadius}px;
    }

    .react-js-cron-custom-select .ant-select-selection-overflow-item {
      align-self: center;
    }

    .react-js-cron-select > div:first-of-type,
    .react-js-cron-custom-select {
      border-radius: ${e.borderRadius}px;
    }
  `}
`},51930:(e,t,a)=>{a.d(t,{A:()=>T});var l=a(2445),n=a(24002),i=a(5556),r=a.n(i),o=a(38221),s=a.n(o),d=a(22022),c=a(24582),u=a(30404),h=a(10129),p=a(34813),m=a(91054),v=a(98837);a(15850);var b=a(95678);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}let g={name:r().string,onChange:r().func,initialValue:r().string,height:r().number,minLines:r().number,maxLines:r().number,offerEditInModal:r().bool,language:r().oneOf([null,"json","html","sql","markdown","javascript","handlebars"]),aboveEditorSection:r().node,readOnly:r().bool,resize:r().oneOf([null,"block","both","horizontal","inline","none","vertical"]),textAreaStyles:r().object,tooltipOptions:r().object,hotkeys:r().array,debounceDelay:r().number};class _ extends n.Component{componentDidUpdate(e){this.props.onChange!==e.onChange&&this.props.debounceDelay&&(this.debouncedOnChange&&this.debouncedOnChange.cancel(),this.debouncedOnChange=s()(this.props.onChange,this.props.debounceDelay))}handleChange(e){let t="object"==typeof e?e.target.value:e;this.debouncedOnChange?this.debouncedOnChange(t):this.props.onChange(t)}componentWillUnmount(){this.debouncedOnChange&&this.debouncedOnChange.cancel()}renderEditor(e=!1){let t=e?40:this.props.minLines||12;if(this.props.language){let a=f({border:`1px solid ${this.props.theme.colorBorder}`,minHeight:`${t}em`,width:"auto"},this.props.textAreaStyles);this.props.resize&&(a.resize=this.props.resize),this.props.readOnly&&(a.backgroundColor=this.props.theme.colorBgMask);let n=e=>{this.props.hotkeys.forEach(t=>{e.commands.addCommand({name:t.name,bindKey:{win:t.key,mac:t.key},exec:t.func})})},i=(0,l.Y)("div",{children:(0,l.Y)(c.S9,f({mode:this.props.language,style:a,minLines:t,maxLines:e?1e3:this.props.maxLines,editorProps:{$blockScrolling:!0},onLoad:n,defaultValue:this.props.initialValue,readOnly:this.props.readOnly},this.props,{onChange:this.handleChange.bind(this)}),this.props.name)});return this.props.tooltipOptions?(0,l.Y)(p.m,f({},this.props.tooltipOptions,{children:i})):i}let a=(0,l.Y)("div",{children:(0,l.Y)(d.Input.TextArea,{placeholder:(0,m.t)("textarea"),onChange:this.handleChange.bind(this),defaultValue:this.props.initialValue,disabled:this.props.readOnly,style:{height:this.props.height},"aria-required":this.props["aria-required"]})});return this.props.tooltipOptions?(0,l.Y)(p.m,f({},this.props.tooltipOptions,{children:a})):a}renderModalBody(){return(0,l.FD)(l.FK,{children:[(0,l.Y)("div",{children:this.props.aboveEditorSection}),this.renderEditor(!0)]})}render(){let e=(0,l.Y)(b.A,f({},this.props));return(0,l.FD)("div",{children:[e,this.renderEditor(),this.props.offerEditInModal&&(0,l.Y)(h.g,{modalTitle:e,triggerNode:(0,l.Y)(u.$,{buttonSize:"small",style:{marginTop:this.props.theme.sizeUnit},children:(0,m.t)("Edit %s in modal",this.props.language)}),modalBody:this.renderModalBody(!0),responsive:!0})]})}constructor(e){super(e),e.debounceDelay&&(this.debouncedOnChange=s()(e.onChange,e.debounceDelay))}}_.propTypes=g,_.defaultProps={onChange:()=>{},initialValue:"",height:250,minLines:3,maxLines:10,offerEditInModal:!0,readOnly:!1,resize:null,textAreaStyles:{},tooltipOptions:{},hotkeys:[],debounceDelay:null};let T=(0,v.b)(_)},75062:(e,t,a)=>{a.d(t,{A:()=>u});var l=a(2445),n=a(24002),i=a(91054),r=a(93666),o=a(10405);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}let d="GMT Standard Time",c={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[d,d],"060":["GMT Standard Time - London","British Summer Time"]};function u(e){var{onTimezoneChange:t,timezone:a,minWidth:d="400px"}=e,u=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t.indexOf(a=i[l])>=0||(n[a]=e[a]);return n}(e,["onTimezoneChange","timezone","minWidth"]);let{TIMEZONE_OPTIONS:h,TIMEZONE_OPTIONS_SORT_COMPARATOR:p,validTimezone:m}=(0,n.useMemo)(()=>{let e=(0,o.XV)(),t=o.XV.tz("2021-01-01"),l=o.XV.tz("2021-07-01"),n=e=>t.tz(e).utcOffset().toString()+l.tz(e).utcOffset().toString(),i=Intl.supportedValuesOf("timeZone"),r=new Set,s=i.map(t=>{var a,l;let i,s=`GMT ${o.XV.tz(e,t).format("Z")} (${(i=n(t),((0,o._q)(e.tz(t),t)?null==(a=c[i])?void 0:a[1]:null==(l=c[i])?void 0:l[0])||t)})`;return r.has(s)?null:(r.add(s),{label:s,value:t,offsets:n(t),timezoneName:t})}).filter(Boolean),d=(t,a)=>o.XV.tz(e,t.timezoneName).utcOffset()-o.XV.tz(e,a.timezoneName).utcOffset();s.sort(d);let u=(e=>{let t,a=n(e);for(let l of s){if(l.offsets===a&&l.timezoneName===e)return l.value;t||l.offsets!==a||(t=l.value)}return t||"Africa/Abidjan"})(a||o.XV.tz.guess());return{TIMEZONE_OPTIONS:s,TIMEZONE_OPTIONS_SORT_COMPARATOR:d,validTimezone:u}},[a]);return(0,n.useEffect)(()=>{m&&a!==m&&t(m)},[m,t,a]),(0,l.Y)(r.A,s({ariaLabel:(0,i.t)("Timezone selector"),onChange:e=>t(e),value:m,options:h,sortComparator:p},u))}},87040:(e,t,a)=>{a.d(t,{Or:()=>s,Z_:()=>d,cM:()=>c,yV:()=>o});var l,n,i,r,o=((l={}).Email="Email",l.Slack="Slack",l.SlackV2="SlackV2",l),s=((n={}).Success="Success",n.Working="Working",n.Error="Error",n.Noop="Not triggered",n.Grace="On Grace",n),d=((i={}).General="generalSection",i.Content="contentSection",i.Alert="alertConditionSection",i.Schedule="scheduleSection",i.Notification="notificationSection",i),c=((r={}).Dashboard="dashboard",r.Chart="chart",r)}}]);