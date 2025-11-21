"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5659],{54644:(e,t,l)=>{l.r(t),l.d(t,{default:()=>B});var a,i=l(2445),n=l(91054),r=l(95265),o=l(24002),s=l(15338),d=l(34813),u=l(5009),c=l(67675),p=l(11960),h=l(79508),m=l(58561),f=l.n(m),g=l(54381),y=l(17437),b=l(21346),v=l(83401),w=l(78076),x=l(22022),_=l(72017),k=l(23941),Y=l(93666),F=l(94448);let S=[{label:(0,n.t)("Regular"),value:"Regular"},{label:(0,n.t)("Base"),value:"Base"}];var T=((a={}).Regular="Regular",a.Base="Base",a);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}let A=(0,y.AH)`
  margin: 0;

  .ant-input {
    margin: 0;
  }
`,R=(0,b.I4)(w.aF)`
  max-width: 1200px;
  min-width: min-content;
  width: 100%;
  .ant-modal-footer {
    white-space: nowrap;
  }
`,C=b.I4.div`
  ${({theme:e})=>(0,y.AH)`
    display: flex;
    flex-direction: column;
    padding: ${3*e.sizeUnit}px ${4*e.sizeUnit}px
      ${2*e.sizeUnit}px;

    label,
    .control-label {
      display: flex;
      font-size: ${e.fontSizeSM}px;
      color: ${e.colorTextLabel};
      align-items: center;
    }

    .info-solid-small {
      vertical-align: middle;
      padding-bottom: ${e.sizeUnit/2}px;
    }
  `}
`,D=b.I4.div`
  ${({theme:e})=>(0,y.AH)`
    display: flex;
    flex-direction: column;
    margin: ${e.sizeUnit}px;
    margin-bottom: ${4*e.sizeUnit}px;

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

    .required {
      margin-left: ${e.sizeUnit/2}px;
      color: ${e.colorErrorText};
    }
  `}
`,N=(0,b.I4)(x.Input.TextArea)`
  resize: none;
  margin-top: ${({theme:e})=>e.sizeUnit}px;
`,E={name:"",filter_type:T.Regular,tables:[],roles:[],clause:"",group_key:"",description:""},H=function(e){let{rule:t,addDangerToast:l,addSuccessToast:a,onHide:s,show:d}=e,[u,c]=(0,o.useState)(z({},E)),[p,h]=(0,o.useState)(!0),m=null!==t,{state:{loading:y,resource:b,error:w},fetchResource:x,createResource:H,updateResource:$,clearError:M}=(0,g.fn)("rowlevelsecurity",(0,n.t)("rowlevelsecurity"),l),B=(e,t)=>{c(l=>z({},l,{[e]:t}))},O=(0,o.useCallback)(()=>{var e,t;if(!b)return null;let l=[],a=[];return null==(e=b.tables)||e.forEach(e=>{l.push({key:e.id,label:e.schema?`${e.schema}.${e.table_name}`:e.table_name,value:e.id})}),null==(t=b.roles)||t.forEach(e=>{a.push({key:e.id,label:e.name,value:e.id})}),{tables:l,roles:a}},[null==b?void 0:b.tables,null==b?void 0:b.roles]);(0,o.useEffect)(()=>{m?(null==t?void 0:t.id)===null||y||w||x(t.id):c(z({},E))},[t]),(0,o.useEffect)(()=>{if(b){c(z({},b,{id:null==t?void 0:t.id}));let e=O();B("tables",(null==e?void 0:e.tables)||[]),B("roles",(null==e?void 0:e.roles)||[])}},[b]);let q=u||{};(0,o.useEffect)(()=>{var e;(null==u?void 0:u.name)&&(null==u?void 0:u.clause)&&(null==(e=u.tables)?void 0:e.length)?h(!1):h(!0)},[q.name,q.clause,null==q?void 0:q.tables]);let I=e=>{B(e.name,e.value)},L=()=>{M(),c(z({},E)),s()},U=(0,o.useMemo)(()=>(e="",t,l)=>{let a=f().encode({filter:e,page:t,page_size:l});return r.A.get({endpoint:`/api/v1/rowlevelsecurity/related/tables?q=${a}`}).then(e=>({data:e.json.result.map(e=>({label:e.text,value:e.value})),totalCount:e.json.count}))},[]),P=(0,o.useMemo)(()=>(e="",t,l)=>{let a=f().encode({filter:e,page:t,page_size:l});return r.A.get({endpoint:`/api/v1/rowlevelsecurity/related/roles?q=${a}`}).then(e=>({data:e.json.result.map(e=>({label:e.text,value:e.value})),totalCount:e.json.count}))},[]);return(0,i.Y)(R,{className:"no-content-padding",responsive:!0,show:d,onHide:L,primaryButtonName:m?(0,n.t)("Save"):(0,n.t)("Add"),disablePrimaryButton:p,onHandledPrimaryAction:()=>{var e,t;let l=[],i=[];null==(e=u.tables)||e.forEach(e=>l.push(e.key)),null==(t=u.roles)||t.forEach(e=>i.push(e.key));let r=z({},u,{tables:l,roles:i});if(m&&u.id){let e=u.id;delete r.id,$(e,r).then(e=>{e&&(a("Rule updated"),L())})}else u&&H(r).then(e=>{e&&(a((0,n.t)("Rule added")),L())})},width:"30%",maxWidth:"1450px",title:(0,i.Y)(v.r,{isEditMode:m,title:m?(0,n.t)("Edit Rule"):(0,n.t)("Add Rule"),"data-test":"rls-modal-title"}),children:(0,i.Y)(C,{children:(0,i.FD)("div",{className:"main-section",children:[(0,i.Y)(D,{children:(0,i.Y)(_.M,{id:"name",name:"name",className:"labeled-input",value:u?u.name:"",required:!0,validationMethods:{onChange:({target:e})=>I(e)},css:A,label:(0,n.t)("Rule Name"),"data-test":"rule-name-test",tooltipText:(0,n.t)("The name of the rule must be unique"),hasTooltip:!0})}),(0,i.FD)(D,{children:[(0,i.FD)("div",{className:"control-label",children:[(0,n.t)("Filter Type")," ",(0,i.Y)(k.I,{tooltip:(0,n.t)("Regular filters add where clauses to queries if a user belongs to a role referenced in the filter, base filters apply filters to all queries except the roles defined in the filter, and can be used to define what users can see if no RLS filters within a filter group apply to them.")})]}),(0,i.Y)("div",{className:"input-container",children:(0,i.Y)(Y.A,{name:"filter_type",ariaLabel:(0,n.t)("Filter Type"),placeholder:(0,n.t)("Filter Type"),onChange:e=>{B("filter_type",e)},value:null==u?void 0:u.filter_type,options:S,"data-test":"rule-filter-type-test"})})]}),(0,i.FD)(D,{children:[(0,i.FD)("div",{className:"control-label",children:[(0,n.t)("Datasets")," ",(0,i.Y)("span",{className:"required",children:"*"}),(0,i.Y)(k.I,{tooltip:(0,n.t)("These are the datasets this filter will be applied to.")})]}),(0,i.Y)("div",{className:"input-container",children:(0,i.Y)(F.A,{ariaLabel:(0,n.t)("Tables"),mode:"multiple",onChange:e=>{B("tables",e||[])},value:(null==u?void 0:u.tables)||[],options:U})})]}),(0,i.FD)(D,{children:[(0,i.FD)("div",{className:"control-label",children:[u.filter_type===T.Base?(0,n.t)("Excluded roles"):(0,n.t)("Roles")," ",(0,i.Y)(k.I,{tooltip:(0,n.t)("For regular filters, these are the roles this filter will be applied to. For base filters, these are the roles that the filter DOES NOT apply to, e.g. Admin if admin should see all data.")})]}),(0,i.Y)("div",{className:"input-container",children:(0,i.Y)(F.A,{ariaLabel:(0,n.t)("Roles"),mode:"multiple",onChange:e=>{B("roles",e||[])},value:(null==u?void 0:u.roles)||[],options:P})})]}),(0,i.Y)(D,{children:(0,i.Y)(_.M,{id:"group_key",name:"group_key",value:u?u.group_key:"",validationMethods:{onChange:({target:e})=>I(e)},css:A,label:(0,n.t)("Group Key"),hasTooltip:!0,tooltipText:(0,n.t)("Filters with the same group key will be ORed together within the group, while different filter groups will be ANDed together. Undefined group keys are treated as unique groups, i.e. are not grouped together. For example, if a table has three filters, of which two are for departments Finance and Marketing (group key = 'department'), and one refers to the region Europe (group key = 'region'), the filter clause would apply the filter (department = 'Finance' OR department = 'Marketing') AND (region = 'Europe')."),"data-test":"group-key-test"})}),(0,i.Y)(D,{children:(0,i.Y)(_.M,{id:"clause",name:"clause",value:u?u.clause:"",required:!0,validationMethods:{onChange:({target:e})=>I(e)},css:A,label:(0,n.t)("Clause"),hasTooltip:!0,tooltipText:(0,n.t)("This is the condition that will be added to the WHERE clause. For example, to only return rows for a particular client, you might define a regular filter with the clause `client_id = 9`. To display no rows unless a user belongs to a RLS filter role, a base filter can be created with the clause `1 = 0` (always false)."),"data-test":"clause-test"})}),(0,i.FD)(D,{children:[(0,i.Y)("div",{className:"control-label",children:(0,n.t)("Description")}),(0,i.Y)("div",{className:"input-container",children:(0,i.Y)(N,{rows:4,name:"description",value:u?u.description:"",onChange:e=>I(e.target),"data-test":"description-test"})})]})]})})})};var $=l(74012),M=l(58784);let B=(0,p.Ay)(function(e){let{addDangerToast:t,addSuccessToast:l,user:a}=e,[p,m]=(0,o.useState)(!1),[y,b]=(0,o.useState)(null),{state:{loading:v,resourceCount:w,resourceCollection:x,bulkSelectEnabled:_},hasPerm:k,fetchData:Y,refreshData:F,toggleBulkSelect:S}=(0,g.RU)("rowlevelsecurity",(0,n.t)("Row Level Security"),t,!0,void 0,void 0,!0);function T(e){b(e),m(!0)}function z(){b(null),m(!1),F()}let A=k("can_write"),R=k("can_write"),C=k("can_export"),D=(0,o.useMemo)(()=>[{accessor:"name",Header:(0,n.t)("Name"),size:"xxl",id:"name"},{accessor:"filter_type",Header:(0,n.t)("Filter Type"),size:"lg",id:"filter_type"},{accessor:"group_key",Header:(0,n.t)("Group Key"),size:"lg",id:"group_key"},{accessor:"clause",Header:(0,n.t)("Clause"),size:"xl",id:"clause"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,i.Y)(u.UW,{date:e,user:t}),Header:(0,n.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl",id:"changed_on_delta_humanized"},{Cell:({row:{original:e}})=>(0,i.FD)("div",{className:"actions",children:[A&&(0,i.Y)(s.h,{title:(0,n.t)("Please confirm"),description:(0,i.FD)(i.FK,{children:[(0,n.t)("Are you sure you want to delete")," ",(0,i.Y)("b",{children:e.name})]}),onConfirm:()=>(function({id:e,name:t},l,a,i){return r.A.delete({endpoint:`/api/v1/rowlevelsecurity/${e}`}).then(()=>{l(),a((0,n.t)("Deleted %s",t))},(0,$.JF)(e=>i((0,n.t)("There was an issue deleting %s: %s",t,e))))})(e,F,l,t),children:e=>(0,i.Y)(d.m,{id:"delete-action-tooltip",title:(0,n.t)("Delete"),placement:"bottom",children:(0,i.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e,children:(0,i.Y)(c.F.DeleteOutlined,{"data-test":"rls-list-trash-icon",iconSize:"l"})})})}),R&&(0,i.Y)(d.m,{id:"edit-action-tooltip",title:(0,n.t)("Edit"),placement:"bottom",children:(0,i.Y)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>T(e),children:(0,i.Y)(c.F.EditOutlined,{"data-test":"edit-alt",iconSize:"l"})})})]}),Header:(0,n.t)("Actions"),id:"actions",hidden:!R&&!A&&!C,disableSortBy:!0,size:"lg"},{accessor:M.H.ChangedBy,hidden:!0,id:M.H.ChangedBy}],[a.userId,R,A,C,k,F,t,l]),N={title:(0,n.t)("No Rules yet"),image:"filter-results.svg",buttonAction:()=>T(null),buttonIcon:R?(0,i.Y)(c.F.PlusOutlined,{iconSize:"m","data-test":"add-rule-empty"}):void 0,buttonText:R?(0,n.t)("Rule"):null},E=(0,o.useMemo)(()=>[{Header:(0,n.t)("Name"),key:"search",id:"name",input:"search",operator:u.c0.StartsWith},{Header:(0,n.t)("Filter Type"),key:"filter_type",id:"filter_type",input:"select",operator:u.c0.Equals,unfilteredLabel:(0,n.t)("Any"),selects:[{label:(0,n.t)("Regular"),value:"Regular"},{label:(0,n.t)("Base"),value:"Base"}]},{Header:(0,n.t)("Group Key"),key:"search",id:"group_key",input:"search",operator:u.c0.StartsWith},{Header:(0,n.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:u.c0.RelationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,$.u1)("rowlevelsecurity","changed_by",(0,$.JF)(e=>(0,n.t)("An error occurred while fetching dataset datasource values: %s",e)),a),paginate:!0}],[a]),B=[{id:"changed_on_delta_humanized",desc:!0}],O=[];return A&&(O.push({name:(0,n.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:S}),O.push({name:(0,n.t)("Rule"),icon:(0,i.Y)(c.F.PlusOutlined,{iconSize:"m","data-test":"add-rule"}),buttonStyle:"primary",onClick:()=>T(null)})),(0,i.FD)(i.FK,{children:[(0,i.Y)(h.A,{name:(0,n.t)("Row Level Security"),buttons:O}),(0,i.Y)(s.h,{title:(0,n.t)("Please confirm"),description:(0,n.t)("Are you sure you want to delete the selected rules?"),onConfirm:function(e){let a=e.map(({id:e})=>e);return r.A.delete({endpoint:`/api/v1/rowlevelsecurity/?q=${f().encode(a)}`}).then(()=>{F(),l((0,n.t)("Deleted"))},(0,$.JF)(e=>t((0,n.t)("There was an issue deleting rules: %s",e))))},children:e=>{let a=[];return A&&a.push({key:"delete",name:(0,n.t)("Delete"),type:"danger",onSelect:e}),(0,i.FD)(i.FK,{children:[(0,i.Y)(H,{rule:y,addDangerToast:t,onHide:z,addSuccessToast:l,show:p}),(0,i.Y)(u.uO,{className:"rls-list-view",bulkActions:a,bulkSelectEnabled:_,disableBulkSelect:S,columns:D,count:w,data:x,emptyState:N,fetchData:Y,filters:E,initialSort:B,loading:v,addDangerToast:t,addSuccessToast:l,refreshData:()=>{},pageSize:25})]})}})]})})}}]);