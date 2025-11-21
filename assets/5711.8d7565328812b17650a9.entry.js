(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5711],{2171:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>v,Fq:()=>f});var r=a(2445),l=a(24002),o=a(45738),i=a(10286),n=a(77457),s=a(21346),d=a(56780);function c(e,t,a,r,l,o,i){try{var n=e[o](i),s=n.value}catch(e){a(e);return}n.done?t(s):Promise.resolve(s).then(r,l)}function u(e){return function(){var t=this,a=arguments;return new Promise(function(r,l){var o=e.apply(t,a);function i(e){c(o,r,l,i,n,"next",e)}function n(e){c(o,r,l,i,n,"throw",e)}i(void 0)})}}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}let p=new Set,m={sql:()=>a.e(8360).then(a.bind(a,78360)),htmlbars:()=>a.e(9633).then(a.bind(a,69633)),markdown:()=>a.e(8143).then(a.bind(a,8143)),json:()=>a.e(9172).then(a.bind(a,69172))},b=e=>u(function*(){if(!p.has(e))try{let t=yield m[e]();o.A.registerLanguage(e,t.default),p.add(e)}catch(t){console.warn(`Failed to load language ${e}:`,t)}})(),f=e=>u(function*(){let t=e.filter(e=>!p.has(e)).map(b);yield Promise.all(t)})(),v=({children:e,language:t="sql",customStyle:a={},showLineNumbers:c=!1,wrapLines:m=!0,style:f})=>{let v=(0,s.DP)(),[g,y]=(0,l.useState)(p.has(t));(0,l.useEffect)(()=>{u(function*(){p.has(t)||(yield b(t),y(!0))})()},[t]);let S=(0,d.Mw)(v),x=f||(S?n.A:i.A),w=h({background:v.colorBgElevated,padding:4*v.sizeUnit,border:0,borderRadius:v.borderRadius},a);return g?(0,r.Y)(o.A,{language:t,style:x,customStyle:w,showLineNumbers:c,wrapLines:m,children:e}):(0,r.Y)("pre",{style:h({},w,{fontFamily:"monospace",whiteSpace:"pre-wrap",margin:0}),children:e})}},6464:(e,t,a)=>{"use strict";a.d(t,{A:()=>ei});var r=a(2445),l=a(24002),o=a(90179),i=a.n(o),n=a(75086),s=a.n(n),d=a(83734),c=a(24582),u=a(50888),h=a(23998),p=a(35780),m=a(58561),b=a.n(m),f=a(91054),v=a(80565),g=a(94149),y=a(95265),S=a(79843),x=a(99247),w=a(11960),C=a(73202),Y=a(6175),T=a(61225),$=a(76156),A=a(71830),k=a(53591),O=a(22023),E=a(22022);let I=({form:e,validationStatus:t})=>{var a;let l=e.getFieldValue("title"),o=(null==(a=t.basic)?void 0:a.hasErrors)&&(!l||0===l.trim().length);return(0,r.FD)(r.FK,{children:[(0,r.Y)(k.Gk,{label:(0,f.t)("Name"),required:!0,testId:"dashboard-name-field",error:o?(0,f.t)("Dashboard name is required"):void 0,children:(0,r.Y)(O.e,{name:"title",noStyle:!0,rules:[{required:!0,message:(0,f.t)("Dashboard name is required"),whitespace:!0}],children:(0,r.Y)(E.Input,{placeholder:(0,f.t)("The display name of your dashboard"),"data-test":"dashboard-title-input",type:"text"})})}),(0,r.Y)(k.Gk,{label:(0,f.t)("URL Slug"),testId:"dashboard-slug-field",bottomSpacing:!1,children:(0,r.Y)(O.e,{name:"slug",noStyle:!0,children:(0,r.Y)(E.Input,{placeholder:(0,f.t)("A readable URL for your dashboard"),"data-test":"dashboard-slug-input",type:"text"})})})]})};var F=a(94448),_=a(15844),z=a(39775);let D=({isLoading:e,owners:t,roles:a,tags:o,onChangeOwners:i,onChangeRoles:n,onChangeTags:s,onClearTags:d})=>{let{loadAccessOptions:c}={loadAccessOptions:(0,l.useCallback)((e="owners",t="",a,r)=>{let l=b().encode({filter:t,page:a,page_size:r});return y.A.get({endpoint:`/api/v1/dashboard/related/${e}?q=${l}`}).then(e=>({data:e.json.result.filter(e=>void 0===e.extra.active||e.extra.active).map(e=>({value:e.value,label:e.text})),totalCount:e.json.count}))},[])},u=(0,l.useMemo)(()=>(t||[]).map(e=>({value:e.id,label:(0,z.A)(e)})),[t]),h=(0,l.useMemo)(()=>(a||[]).map(e=>({value:e.id,label:`${e.name}`})),[a]),p=(0,l.useMemo)(()=>o.map(e=>({value:e.id,label:e.name})),[o]);return(0,r.FD)(r.FK,{children:[(0,r.Y)(k.Gk,{label:(0,f.t)("Owners"),testId:"dashboard-owners-field",helperText:(0,f.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username."),children:(0,r.Y)(F.A,{"data-test":"dashboard-owners-select",allowClear:!0,ariaLabel:(0,f.t)("Owners"),disabled:e,mode:"multiple",onChange:i,options:(e,t,a)=>c("owners",e,t,a),value:u,showSearch:!0,placeholder:(0,f.t)("Search owners")})}),(0,x.G7)(x.TO.DashboardRbac)&&(0,r.Y)(k.Gk,{label:(0,f.t)("Roles"),testId:"dashboard-roles-field",helperText:(0,f.t)("Roles is a list which defines access to the dashboard. Granting a role access to a dashboard will bypass dataset level checks. If no roles are defined, regular access permissions apply."),bottomSpacing:!(0,x.G7)(x.TO.TaggingSystem),children:(0,r.Y)(F.A,{"data-test":"dashboard-roles-select",allowClear:!0,ariaLabel:(0,f.t)("Roles"),disabled:e,mode:"multiple",onChange:n,options:(e,t,a)=>c("roles",e,t,a),value:h,showSearch:!0,placeholder:(0,f.t)("Search roles")})}),(0,x.G7)(x.TO.TaggingSystem)&&(0,r.Y)(k.Gk,{label:(0,f.t)("Tags"),testId:"dashboard-tags-field",helperText:(0,f.t)("A list of tags that have been applied to this dashboard."),bottomSpacing:!1,children:(0,r.Y)(F.A,{"data-test":"dashboard-tags-select",ariaLabel:"Tags",mode:"multiple",value:p,options:_.m,onChange:s,onClear:d,allowClear:!0,showSearch:!0,placeholder:(0,f.t)("Search tags")})})]})};var U=a(21346),j=a(17808),P=a(93666),R=a(29403),L=a(17437),M=a(33031),N=a.n(M),q=a(34813),G=a(67675),H=a(53535);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}let J=(0,f.t)(`The colors of this chart might be overridden by custom label colors of the related dashboard.
    Check the JSON metadata in the Advanced settings.`),W=({value:e,onChange:t,clearable:a=!0,hasCustomLabelsColor:o=!1,showWarning:i=!1})=>{let n=(0,U.DP)(),s=(0,v.A)(),d=(0,l.useMemo)(()=>s.getMap(),[s]),c=(0,l.useMemo)(()=>s.keys().map(e=>[e,e]),[s]),u=(0,l.useMemo)(()=>{let t=e;if("SUPERSET_DEFAULT"===t){let e=null==d?void 0:d.SUPERSET_DEFAULT;e&&"function"!=typeof e&&"id"in e&&(t=e.id)}return t},[e,d]),h=(0,l.useMemo)(()=>{let e=[],t=Object.values(c.filter(t=>{let a=t[0],r="SUPERSET_DEFAULT"!==a&&!e.includes(a);return e.push(a),r}).reduce((e,[t])=>{var a;let l=d[t];if(!l||"function"==typeof l)return e;let o=[];"colors"in l&&({colors:o}=l);let i={label:(0,r.Y)(H.A,{id:l.id,label:l.label,colors:o}),value:t,searchText:l.label};return e[null!=(a=l.group)?a:R.w.Other].options.push(i),e},{[R.w.Custom]:{title:R.w.Custom,label:(0,f.t)("Custom color palettes"),options:[]},[R.w.Featured]:{title:R.w.Featured,label:(0,f.t)("Featured color palettes"),options:[]},[R.w.Other]:{title:R.w.Other,label:(0,f.t)("Other color palettes"),options:[]}})).filter(e=>e.options.length>0).map(e=>B({},e,{options:N()(e.options,e=>e.label)}));return 1===t.length&&t[0].title===R.w.Other?t[0].options.map(e=>({value:e.value,label:e.customLabel||e.label})):t.map(e=>({label:e.label,options:e.options.map(e=>({value:e.value,label:e.customLabel||e.label,searchText:e.searchText}))}))},[c,d]);return(0,r.FD)(r.FK,{children:[(0,r.Y)(P.A,{css:(0,L.AH)`
          width: 100%;
          & .ant-select-item.ant-select-item-group {
            padding-left: ${n.sizeUnit}px;
            font-size: ${n.fontSize}px;
          }
          & .ant-select-item-option-grouped {
            padding-left: ${3*n.sizeUnit}px;
          }
        `,"aria-label":(0,f.t)("Select color scheme"),allowClear:a,onChange:t,placeholder:(0,f.t)("Select scheme"),value:u,showSearch:!0,getPopupContainer:e=>e.parentNode,options:h,optionFilterProps:["label","value","searchText"]}),i&&o&&(0,r.Y)(q.m,{title:J,children:(0,r.Y)(G.F.WarningOutlined,{iconColor:n.colorWarning,css:(0,L.AH)`
              margin-left: ${2*n.sizeUnit}px;
              vertical-align: baseline;
            `,iconSize:"s"})})]})};function K(e,t,a,r,l,o,i){try{var n=e[o](i),s=n.value}catch(e){a(e);return}n.done?t(s):Promise.resolve(s).then(r,l)}let Q=(0,U.I4)(c.rN)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colorBorder};
`,V=(0,U.I4)(j.F)`
  margin-bottom: ${({theme:e})=>4*e.sizeUnit}px;
`,X=({themes:e,selectedThemeId:t,colorScheme:a,customCss:o,hasCustomLabelsColor:i,onThemeChange:n,onColorSchemeChange:s,onCustomCssChange:d,addDangerToast:c})=>{let[u,h]=(0,l.useState)([]),[p,m]=(0,l.useState)(!1),[v,g]=(0,l.useState)(null),[S,w]=(0,l.useState)(""),C=(0,l.useCallback)(()=>{var e;return(e=function*(){if((0,x.G7)(x.TO.CssTemplates)){m(!0);try{let e=b().encode({columns:["template_name","css"]}),t=yield y.A.get({endpoint:`/api/v1/css_template/?q=${e}`});h(t.json.result||[])}catch(e){c&&c((0,f.t)("An error occurred while fetching available CSS templates"))}finally{m(!1)}}},function(){var t=this,a=arguments;return new Promise(function(r,l){var o=e.apply(t,a);function i(e){K(o,r,l,i,n,"next",e)}function n(e){K(o,r,l,i,n,"throw",e)}i(void 0)})})()},[c]);(0,l.useEffect)(()=>{C()},[C]);let Y=(0,l.useCallback)(e=>{if(!e){g(null),w("");return}let t=u.find(t=>t.template_name===e);t&&(g(e),w(t.css),d(t.css))},[u,d]),T=v&&o!==S;return(0,r.FD)(r.FK,{children:[e.length>0&&(0,r.Y)(k.Gk,{label:(0,f.t)("Theme"),testId:"dashboard-theme-field",helperText:(0,f.t)("Clear the selection to revert to the system default theme"),children:(0,r.Y)(P.A,{"data-test":"dashboard-theme-select",value:t,onChange:n,options:e.map(e=>({value:e.id,label:e.theme_name})),allowClear:!0,placeholder:(0,f.t)("Select a theme")})}),(0,r.Y)(k.Gk,{label:(0,f.t)("Color scheme"),testId:"dashboard-colorscheme-field",helperText:(0,f.t)("Any color palette selected here will override the colors applied to this dashboard's individual charts"),children:(0,r.Y)(W,{"data-test":"dashboard-colorscheme-select",value:a,onChange:s,hasCustomLabelsColor:i,showWarning:i})}),(0,x.G7)(x.TO.CssTemplates)&&u.length>0&&(0,r.Y)(k.Gk,{label:(0,f.t)("Load CSS template (optional)"),testId:"dashboard-css-template-field",helperText:(0,f.t)("Select a predefined CSS template to apply to your dashboard"),children:(0,r.Y)(P.A,{"data-test":"dashboard-css-template-select",onChange:Y,options:u.map(e=>({value:e.template_name,label:e.template_name})),placeholder:(0,f.t)("Select a CSS template"),loading:p,allowClear:!0,value:v})}),T&&(0,r.Y)(V,{type:"warning",message:(0,f.t)('Modified from "%s" template',v),showIcon:!0,closable:!1,"data-test":"css-template-modified-warning"}),(0,r.Y)(k.Gk,{label:(0,f.t)("CSS"),testId:"dashboard-css-field",helperText:(0,f.t)("Apply custom CSS to the dashboard. Use class names or element selectors to target specific components."),bottomSpacing:!1,children:(0,r.Y)(Q,{"data-test":"dashboard-css-editor",onChange:d,value:o,width:"100%",minLines:10,maxLines:50,editorProps:{$blockScrolling:!0}})})]})};var Z=a(82956);let ee=({refreshFrequency:e,onRefreshFrequencyChange:t})=>(0,r.Y)(k.Gk,{label:(0,f.t)("Refresh frequency"),helperText:(0,f.t)("Set the automatic refresh frequency for this dashboard. The dashboard will reload its data at the specified interval."),bottomSpacing:!1,children:(0,r.Y)(Z.ux,{value:e,onChange:t})}),et=({isLoading:e})=>(0,r.FD)(r.FK,{children:[(0,r.Y)(k.Gk,{label:(0,f.t)("Certified by"),helperText:(0,f.t)("Person or group that has certified this dashboard."),children:(0,r.Y)(O.e,{name:"certifiedBy",noStyle:!0,children:(0,r.Y)(E.Input,{type:"text",disabled:e})})}),(0,r.Y)(k.Gk,{label:(0,f.t)("Certification details"),helperText:(0,f.t)("Any additional detail to show in the certification tooltip."),bottomSpacing:!1,children:(0,r.Y)(O.e,{name:"certificationDetails",noStyle:!0,children:(0,r.Y)(E.Input,{type:"text",disabled:e})})})]}),ea=(0,U.I4)(c.iN)`
  /* Border is already applied by AceEditor itself */
`,er=({jsonMetadata:e,jsonAnnotations:t,validationStatus:a,onJsonMetadataChange:l})=>{var o;return(0,r.Y)(k.Gk,{label:(0,f.t)("JSON Metadata"),testId:"dashboard-metadata-field",helperText:(0,f.t)("This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters."),error:(null==(o=a.advanced)?void 0:o.hasErrors)&&t.length>0?(0,f.t)("Invalid JSON metadata"):void 0,bottomSpacing:!1,children:(0,r.Y)(ea,{"data-test":"dashboard-metadata-editor",showLoadingForImport:!0,name:"json_metadata",value:e,onChange:l,tabSize:2,width:"100%",height:"200px",wrapEnabled:!0,annotations:t})})};function el(e,t,a,r,l,o,i){try{var n=e[o](i),s=n.value}catch(e){a(e);return}n.done?t(s):Promise.resolve(s).then(r,l)}function eo(){return(eo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}let ei=(0,w.Ay)(({addSuccessToast:e,addDangerToast:t,colorScheme:a,dashboardId:o,dashboardInfo:n,dashboardTitle:m,onHide:w=()=>{},onlyApply:O=!1,onSubmit:E=()=>{},show:F=!1})=>{var _,z,U,j,P,R,L;let M=(0,T.wA)(),[N]=d.l.useForm(),[q,G]=(0,l.useState)(!0),[H,B]=(0,l.useState)(!1),[J,W]=(0,l.useState)(a),[K,Q]=(0,l.useState)(""),[V,Z]=(0,l.useState)(),ea=(0,p.p)(K,{errorPrefix:"Invalid JSON metadata"}),[ei,en]=(0,l.useState)([]),[es,ed]=(0,l.useState)([]),ec=O?(0,f.t)("Apply"):(0,f.t)("Save"),[eu,eh]=(0,l.useState)([]),[ep,em]=(0,l.useState)(""),[eb,ef]=(0,l.useState)(0),[ev,eg]=(0,l.useState)(null),[ey,eS]=(0,l.useState)([]),ex=(0,v.A)(),ew=(0,l.useRef)({}),eC=e=>{var a;return(a=function*(){let{error:a,statusText:r,message:l}=yield(0,g.h4)(e),o=a||r||(0,f.t)("An error has occurred");"object"==typeof l&&"json_metadata"in l?o=l.json_metadata:"string"==typeof l&&(o=l,"Forbidden"===l&&(o=(0,f.t)("You do not have permission to edit this dashboard"))),t(o)},function(){var e=this,t=arguments;return new Promise(function(r,l){var o=a.apply(e,t);function i(e){el(o,r,l,i,n,"next",e)}function n(e){el(o,r,l,i,n,"throw",e)}i(void 0)})})()},eY=(0,l.useCallback)(e=>{let{id:t,dashboard_title:a,slug:r,certified_by:l,certification_details:o,owners:n,roles:d,metadata:c,is_managed_externally:u,theme:h,css:p}=e,m={id:t,title:a,slug:r||"",certifiedBy:l||"",certificationDetails:o||"",isManagedExternally:u||!1,css:p||"",metadata:c};N.setFieldsValue(m),Z(m),en(n),ed(d),em(p||""),W(null==c?void 0:c.color_scheme),eg((null==h?void 0:h.id)||null);let b=i()(c,["positions","shared_label_colors","map_label_colors","color_scheme_domain"]);Q(b?s()(b):""),ef((null==c?void 0:c.refresh_frequency)||0),ew.current=c},[N]),eT=(0,l.useCallback)(()=>{y.A.get({endpoint:`/api/v1/dashboard/${o}`}).then(e=>{var t;let a=e.json.result,r=(null==(t=a.json_metadata)?void 0:t.length)?JSON.parse(a.json_metadata):{};eY(eo({},a,{metadata:r})),G(!1)},eC)},[o,eY]),e$=()=>{try{return(null==K?void 0:K.length)?JSON.parse(K):{}}catch(e){return{}}},eA=(e="",{updateMetadata:a=!0}={})=>{let r=ex.keys(),l=e$();if(e&&!r.includes(e))throw t((0,f.t)("A valid color scheme is required")),w(),Error("A valid color scheme is required");l.color_scheme=e,l.label_colors=l.label_colors||{},W(e),M((0,$.r7)(e)),a&&Q(s()(l))};(0,l.useEffect)(()=>{if(F){G(!0),n?(eY(n),G(!1)):eT();let e=b().encode({columns:["id","theme_name","is_system"],filters:[{col:"is_system",opr:"eq",value:!1}]});y.A.get({endpoint:`/api/v1/theme/?q=${e}`}).then(({json:e})=>{eS(e.result)}).catch(()=>{t((0,f.t)("An error occurred while fetching available themes"))})}c.iN.preload()},[n,eT,eY,F,t]),(0,l.useEffect)(()=>{m&&V&&V.title!==m&&N.setFieldsValue(eo({},V,{title:m}))},[V,m,N]),(0,l.useEffect)(()=>{if((0,x.G7)(x.TO.TaggingSystem))try{(0,C.un)({objectType:C.iQ.DASHBOARD,objectId:o,includeTypes:!1},e=>eh(e),e=>{t(`Error fetching tags: ${e.text}`)})}catch(e){eC(e)}},[o]);let ek=!!Object.keys((null==(_=e$())?void 0:_.label_colors)||{}).length,eO=(0,l.useMemo)(()=>[{key:"basic",name:(0,f.t)("General information"),validator:()=>{let e=[],t=N.getFieldsValue();return t.title&&0!==t.title.trim().length||e.push((0,f.t)("Dashboard name is required")),e}},{key:"access",name:(0,f.t)("Access & ownership"),validator:()=>[]},{key:"styling",name:(0,f.t)("Styling"),validator:()=>[]},{key:"refresh",name:(0,f.t)("Refresh settings"),validator:()=>{var e,t;let a=[],r=null==V||null==(t=V.common)||null==(e=t.conf)?void 0:e.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT;return r&&eb>0&&eb<r&&a.push((0,f.t)("Refresh frequency must be at least %s seconds",r/1e3)),a}},{key:"certification",name:(0,f.t)("Certification"),validator:()=>[]},{key:"advanced",name:(0,f.t)("Advanced settings"),validator:()=>ea.length>0?[(0,f.t)("Invalid JSON metadata")]:[]}],[N,ea,eb,V]),{validationStatus:eE,validateAll:eI,validateSection:eF,errorTooltip:e_,hasErrors:ez}=(0,k.IQ)({sections:eO}),eD=!q&&V;return(0,l.useEffect)(()=>{eD&&eF("basic")},[m,eF,eD]),(0,l.useEffect)(()=>{eD&&eF("advanced")},[K,eF,eD]),(0,l.useEffect)(()=>{eD&&eF("refresh")},[eb,eF,eD]),(0,r.Y)(k.xQ,{show:F,onHide:()=>w(),onSave:()=>{eI()&&N.submit()},title:(0,f.t)("Dashboard properties"),isEditMode:!0,saveDisabled:(null==V?void 0:V.isManagedExternally)||ez,saveLoading:H,contentLoading:q,errorTooltip:(null==V?void 0:V.isManagedExternally)?(0,f.t)("This dashboard is managed externally, and can't be edited in Superset"):e_,saveText:ec,wrapProps:{"data-test":"properties-edit-modal"},children:(0,r.Y)(d.l,{form:N,onFinish:()=>{let r,{title:l,slug:i,certifiedBy:n,certificationDetails:d}=N.getFieldsValue(),c=K;try{if(!c.startsWith("{")||!c.endsWith("}"))throw Error();r=JSON.parse(c)}catch(e){t((0,f.t)("JSON metadata is invalid!"));return}let u=(0,Y.Z6)(null==r?void 0:r.color_namespace),h=(null==r?void 0:r.color_scheme)||J,p=h!==ew.current.color_scheme,m=!(0,A.r$)(ew.current.label_colors||{},(null==r?void 0:r.label_colors)||{}),b=Object.keys((null==r?void 0:r.label_colors)||{}),v=Object.keys(ew.current.label_colors||{}),g=b.length>0?b:v,S=!!m&&g.length>0&&g,C=e$();C.refresh_frequency=eb;let T=C.label_colors||{},k=eo({},ew.current,{label_colors:T,color_scheme:h});ew.current=k,(0,Y.D2)(k,p||S),M((0,$.Qn)(eo({},k,{map_label_colors:(0,Y.xV)(T)}))),eA(h,{updateMetadata:!1}),c=s()(C);let I={},F={};(0,x.G7)(x.TO.DashboardRbac)&&(I.roles=es,F.roles=(es||[]).map(e=>e.id)),(0,x.G7)(x.TO.TaggingSystem)&&(I.tags=eu,F.tags=eu.map(e=>e.id));let _=eo({id:o,title:l,slug:i,jsonMetadata:c,owners:ei,colorScheme:a,colorNamespace:u,certifiedBy:n,certificationDetails:d,themeId:ev,css:ep},I);if(O){B(!0);try{E(_),w(),e((0,f.t)("Dashboard properties updated"))}catch(e){console.error("Apply failed:",e)}finally{B(!1)}}else{let t=eo({dashboard_title:l,slug:i||null,json_metadata:c||null,owners:(ei||[]).map(e=>e.id),certified_by:n||null,certification_details:n&&d?d:null,css:ep||null,theme_id:ev},F);y.A.put({endpoint:`/api/v1/dashboard/${o}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(()=>{E(_),w(),e((0,f.t)("The dashboard has been saved"))},eC)}},onFieldsChange:()=>{eD&&eF("basic")},"data-test":"dashboard-edit-properties-form",layout:"vertical",initialValues:V,children:(0,r.Y)(u.S,{expandIconPosition:"end",defaultActiveKey:"basic",accordion:!0,modalMode:!0,items:[{key:"basic",label:(0,r.Y)(h.s,{title:(0,f.t)("General information"),subtitle:(0,f.t)("Dashboard name and URL configuration"),validateCheckStatus:!(null==(z=eE.basic)?void 0:z.hasErrors),testId:"basic-section"}),children:(0,r.Y)(I,{form:N,validationStatus:eE})},{key:"access",label:(0,r.Y)(h.s,{title:(0,f.t)("Access & ownership"),subtitle:(0,f.t)("Manage dashboard owners and access permissions"),validateCheckStatus:!(null==(U=eE.access)?void 0:U.hasErrors),testId:"access-section"}),children:(0,r.Y)(D,{isLoading:q,owners:ei,roles:es,tags:eu,onChangeOwners:e=>{en((0,S.A)(e).map(e=>({id:e.value,full_name:e.label})))},onChangeRoles:e=>{ed((0,S.A)(e).map(e=>({id:e.value,name:e.label})))},onChangeTags:e=>{eh((0,S.A)(e).map(e=>({id:e.value,name:e.label})))},onClearTags:()=>{eh([])}})},{key:"styling",label:(0,r.Y)(h.s,{title:(0,f.t)("Styling"),subtitle:(0,f.t)("Configure dashboard appearance, colors, and custom CSS"),validateCheckStatus:!(null==(j=eE.styling)?void 0:j.hasErrors),testId:"styling-section"}),children:(0,r.Y)(X,{themes:ey,selectedThemeId:ev,colorScheme:J,customCss:ep,hasCustomLabelsColor:ek,onThemeChange:e=>eg(e||null),onColorSchemeChange:eA,onCustomCssChange:em,addDangerToast:t})},{key:"refresh",label:(0,r.Y)(h.s,{title:(0,f.t)("Refresh settings"),subtitle:(0,f.t)("Configure automatic dashboard refresh"),validateCheckStatus:!(null==(P=eE.refresh)?void 0:P.hasErrors),testId:"refresh-section"}),children:(0,r.Y)(ee,{refreshFrequency:eb,onRefreshFrequencyChange:e=>ef(e)})},{key:"certification",label:(0,r.Y)(h.s,{title:(0,f.t)("Certification"),subtitle:(0,f.t)("Add certification details for this dashboard"),validateCheckStatus:!(null==(R=eE.certification)?void 0:R.hasErrors),testId:"certification-section"}),children:(0,r.Y)(et,{isLoading:q})},{key:"advanced",label:(0,r.Y)(h.s,{title:(0,f.t)("Advanced settings"),subtitle:(0,f.t)("JSON metadata and advanced configuration"),validateCheckStatus:!(null==(L=eE.advanced)?void 0:L.hasErrors),testId:"advanced-section"}),children:(0,r.Y)(er,{jsonMetadata:K,jsonAnnotations:ea,validationStatus:eE,onJsonMetadataChange:Q})}]})})})})},7071:(e,t,a)=>{"use strict";a.d(t,{$:()=>d});var r=a(2445),l=a(24002),o=a(51045),i=a(21346);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}let s=i.I4.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function d(e){var{src:t,fallback:a,isLoading:i,position:d}=e,c=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(a=o[r])>=0||(l[a]=e[a]);return l}(e,["src","fallback","isLoading","position"]);let[u,h]=(0,l.useState)(a);return(0,l.useEffect)(()=>(t&&fetch(t).then(e=>e.blob()).then(e=>{/image/.test(e.type)&&h(URL.createObjectURL(e))}).catch(e=>{o.A.error(e),h(a)}),()=>{h(a)}),[t,a]),(0,r.Y)(s,n({"data-test":"image-loader",src:i?a:u},c,{position:d}))}},8489:(e,t,a)=>{"use strict";a.d(t,{U:()=>l});var r,l=((r={})[r.Custom=1]="Custom",r[r.Type=2]="Type",r[r.Owner=3]="Owner",r[r.FavoritedBy=4]="FavoritedBy",r)},9603:()=>{},14552:(e,t,a)=>{"use strict";a.d(t,{T:()=>u});var r=a(2445),l=a(91054),o=a(21346),i=a(24002),n=a(63278),s=a(22022),d=a(78076);let c=o.I4.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colorTextLabel};
  }
`;function u({description:e,onConfirm:t,onHide:a,open:o,title:u,name:h}){let[p,m]=(0,i.useState)(!0),[b,f]=(0,i.useState)(""),v=(0,i.useRef)(null);(0,i.useEffect)(()=>{o&&v.current&&v.current.focus()},[o]);let g=()=>{f(""),t()};return(0,r.FD)(d.aF,{disablePrimaryButton:p,onHide:()=>{f(""),a()},onHandledPrimaryAction:g,primaryButtonName:(0,l.t)("Delete"),primaryButtonStyle:"danger",show:o,name:h,title:u,centered:!0,children:[e,(0,r.FD)(c,{children:[(0,r.Y)(n.l,{htmlFor:"delete",children:(0,l.t)('Type "%s" to confirm',(0,l.t)("DELETE"))}),(0,r.Y)(s.Input,{"data-test":"delete-modal-input",type:"text",id:"delete",autoComplete:"off",value:b,onChange:e=>{var t;let a=null!=(t=e.target.value)?t:"";m(a.toUpperCase()!==(0,l.t)("DELETE")),f(a)},onPressEnter:()=>{p||g()},ref:v})]})]})}},16868:(e,t,a)=>{"use strict";a.d(t,{$:()=>u});var r=a(2445),l=a(24002),o=a(91054),i=a(21346),n=a(17437),s=a(67675),d=a(34813);let c=i.I4.a`
  ${({theme:e})=>(0,n.AH)`
    font-size: ${e.fontSizeXL}px;
    display: flex;
    padding: 0 0 0 ${2*e.sizeUnit}px;
  `};
`,u=({itemId:e,isStarred:t,showTooltip:a,saveFaveStar:n,fetchFaveStar:u})=>{let h=(0,i.DP)();(0,l.useEffect)(()=>{null==u||u(e)},[u,e]);let p=(0,l.useCallback)(a=>{a.preventDefault(),n(e,!!t)},[t,e,n]),m=(0,r.Y)(c,{href:"#",onClick:p,className:"fave-unfave-icon","data-test":"fave-unfave-icon",role:"button",children:t?(0,r.Y)(s.F.StarFilled,{"aria-label":"starred",iconSize:"l",iconColor:h.colorWarning,name:"favorite-selected"}):(0,r.Y)(s.F.StarOutlined,{"aria-label":"unstarred",iconSize:"l",iconColor:h.colorTextTertiary,name:"favorite-unselected"})});return a?(0,r.Y)(d.m,{id:"fave-unfave-tooltip",title:(0,o.t)("Click to favorite/unfavorite"),children:m}):m}},30284:(e,t,a)=>{"use strict";a.d(t,{x:()=>s});var r=a(2445),l=a(67675),o=a(91054),i=a(21346),n=a(85846);let s=({isPublished:e,onClick:t})=>{let a=(0,i.DP)(),s=e?(0,o.t)("Published"):(0,o.t)("Draft"),d=e?(0,r.Y)(l.F.CheckCircleOutlined,{iconSize:"s",iconColor:a.colorSuccess}):(0,r.Y)(l.F.MinusCircleOutlined,{iconSize:"s",iconColor:a.colorPrimary});return(0,r.Y)(n.JU,{type:e?"success":"primary",icon:d,onClick:t,style:{color:e?a.colorSuccessText:a.colorPrimaryText},children:s})}},53535:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var r=a(2445),l=a(17437),o=a(24002),i=a(34813);function n(e){let{id:t,label:a,colors:n}=e,[s,d]=(0,o.useState)(!1),c=(0,o.useRef)(null),u=(0,o.useRef)(null),h=()=>n.map((e,a)=>(0,r.Y)("span",{"data-test":"color",css:t=>(0,l.AH)`
          padding-left: ${t.sizeUnit/2}px;
          :before {
            content: '';
            display: inline-block;
            background-color: ${e};
            border: 1px solid ${"white"===e?"black":e};
            width: 9px;
            height: 10px;
          }
        `},`${t}-${a}`));return(0,r.Y)(i.m,{"data-testid":"tooltip",overlayClassName:"color-scheme-tooltip",title:()=>(0,r.FD)(r.FK,{children:[(0,r.Y)("span",{children:a}),(0,r.Y)("div",{children:h()})]}),open:s,children:(0,r.FD)("span",{className:"color-scheme-option",onMouseEnter:()=>{let e=c.current,t=u.current;e&&t&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight||t.scrollWidth>t.offsetWidth||t.scrollHeight>t.offsetHeight)&&d(!0)},onMouseLeave:()=>{d(!1)},css:(0,l.AH)`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `,"data-test":t,children:[(0,r.Y)("span",{className:"color-scheme-label",ref:c,css:e=>(0,l.AH)`
            min-width: 125px;
            padding-right: ${2*e.sizeUnit}px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `,children:a}),(0,r.Y)("span",{ref:u,css:e=>(0,l.AH)`
            flex: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding-right: ${e.sizeUnit}px;
          `,children:h()})]})},t)}},53591:(e,t,a)=>{"use strict";a.d(t,{Gk:()=>s,xQ:()=>b,IQ:()=>y});var r=a(2445),l=a(21346),o=a(17437),i=a(23941);let n=l.I4.div`
  ${({theme:e,bottomSpacing:t})=>(0,o.AH)`
    flex: 1;
    margin-top: 0px;
    margin-bottom: ${t?4*e.sizeUnit:0}px;

    .control-label {
      margin-top: ${e.sizeUnit}px;
      margin-bottom: ${2*e.sizeUnit}px;
      color: ${e.colorText};
      font-size: ${e.fontSize}px;
    }

    .required {
      margin-left: ${e.sizeUnit/2}px;
      color: ${e.colorError};
    }

    .helper {
      display: block;
      color: ${e.colorTextTertiary};
      font-size: ${e.fontSizeSM}px;
      padding: ${e.sizeUnit}px 0;
      text-align: left;
    }

    .error {
      color: ${e.colorError};
      font-size: ${e.fontSizeSM}px;
      margin-top: ${e.sizeUnit}px;
    }

    .input-container {
      display: flex;
      align-items: center;

      > div {
        width: 100%;
      }

      label {
        display: flex;
        margin-right: ${2*e.sizeUnit}px;
      }

      i {
        margin: 0 ${e.sizeUnit}px;
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
      resize: vertical;
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
  `}
`;function s({label:e,required:t=!1,tooltip:a,error:l,helperText:o,bottomSpacing:s=!0,children:d,testId:c,validateStatus:u,hasFeedback:h=!1}){return(0,r.FD)(n,{bottomSpacing:s,"data-test":c,children:[(0,r.FD)("div",{className:"control-label",children:[e,a&&(0,r.Y)(i.I,{tooltip:a}),t&&(0,r.Y)("span",{className:"required",children:"*"})]}),(0,r.Y)("div",{className:"input-container",children:d}),o&&(0,r.Y)("div",{className:"helper",children:o}),l&&(0,r.Y)("div",{className:"error",children:l})]})}l.I4.div`
  ${({theme:e})=>`
    padding: ${2*e.sizeUnit}px 0;
  `}
`;var d=a(91054),c=a(78076),u=a(19633),h=a(56927),p=a(83401);let m=(0,l.I4)(c.aF)`
  .ant-modal-body {
    max-height: 60vh;
    height: auto;
    overflow-y: auto;
    padding: 0;
  }

  .ant-modal-header {
    padding: ${({theme:e})=>3*e.sizeUnit}px
      ${({theme:e})=>4*e.sizeUnit}px
      ${({theme:e})=>3*e.sizeUnit}px;
    margin-bottom: 0;
    border-bottom: 1px solid ${({theme:e})=>e.colorBorder};
  }

  .ant-modal-footer {
    height: ${({theme:e})=>16.25*e.sizeUnit}px;
  }

  .control-label {
    margin-top: ${({theme:e})=>e.sizeUnit}px;
  }

  /* Remove top margin from collapse component */
  .ant-collapse {
    border: none;

    > .ant-collapse-item:first-child {
      border-top: none;
    }

    /* Remove margin from collapse headers */
    .ant-collapse-header {
      padding-bottom: 0 !important;

      /* Remove margin from the CollapseLabelInModal component */
      > div {
        margin-bottom: 0;
      }
    }
  }

  /* Ensure collapse sections have proper padding */
  .ant-collapse-content-box {
    padding: ${({theme:e})=>4*e.sizeUnit}px;
  }
`;function b({width:e=500,title:t,icon:a,show:l,onHide:o,onSave:i,saveDisabled:n=!1,saveLoading:s=!1,saveText:c,cancelText:b,errorTooltip:f,children:v,isEditMode:g=!1,centered:y=!0,destroyOnClose:S=!0,maskClosable:x=!1,wrapProps:w,contentLoading:C=!1}){let Y=c||(g?(0,d.t)("Save"):(0,d.t)("Add"));return(0,r.Y)(m,{disablePrimaryButton:n||s||C,primaryButtonLoading:s,primaryTooltipMessage:f,onHandledPrimaryAction:i,onHide:o,primaryButtonName:Y,show:l,width:`${e}px`,wrapProps:w,title:a?(0,r.Y)(p.r,{isEditMode:g,title:t,"data-test":"standard-modal-title"}):t,children:C?(0,r.Y)(u.s,{justify:"center",align:"center",style:{minHeight:200},children:(0,r.Y)(h.R,{})}):v})}var f=a(24002),v=a(78344);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function y({sections:e,onValidationChange:t}){let a=(0,f.useMemo)(()=>e.reduce((e,t)=>(e[t.key]={hasErrors:!1,errors:[],name:t.name},e),{}),[e]),[l,i]=(0,f.useState)(a),n=(0,f.useCallback)((e,a)=>{i(r=>{let l=g({},r,{[e]:{hasErrors:a.length>0,name:r[e].name,errors:a}});return t&&t(Object.values(l).some(e=>e.hasErrors)),l})},[t]),s=(0,f.useCallback)(t=>{let a=e.find(e=>e.key===t);a&&n(t,a.validator())},[e,n]),c=(0,f.useCallback)(()=>{let t=!1;return e.forEach(e=>{let a=e.validator();n(e.key,a),a.length>0&&(t=!0)}),!t},[e,n]),u=(0,f.useMemo)(()=>Object.values(l).some(e=>e.hasErrors),[l]),h=(0,f.useMemo)(()=>{let e;return u?(e=[],(Object.values(l).forEach(t=>{if(t.hasErrors){let a=`${t.name}: `;e.push(a+t.errors.join(", "))}}),0===e.length)?"":(0,r.FD)("div",{children:[(0,d.t)("Please fix the following errors"),(0,r.Y)(v.B,{dataSource:e,renderItem:e=>(0,r.FD)(v.B.Item,{css:e=>(0,o.AH)`
              &&& {
                color: ${e.colorWhite};
              }
            `,compact:!0,children:["• ",e]}),size:"small",split:!1})]})):""},[l,u]);return{validationStatus:l,validateSection:s,validateAll:c,errorTooltip:h,hasErrors:u,updateValidationStatus:n}}},70778:(e,t,a)=>{"use strict";a.d(t,{u:()=>l});var r=a(31545);function l(e){return`${(0,r.KX)()}${e.startsWith("/")?e:`/${e}`}`}},73202:(e,t,a)=>{"use strict";a.d(t,{FA:()=>d,Ik:()=>h,dH:()=>u,iQ:()=>s,un:()=>c});var r=a(95265),l=a(58561),o=a.n(l),i=a(8489);let n=Object.freeze(["dashboard","chart","saved_query"]),s=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"});function d(e,t,a){r.A.get({endpoint:`/api/v1/tag/${e}`}).then(({json:e})=>t(e.result)).catch(e=>a(e))}function c({objectType:e,objectId:t},a,l){if(void 0===e||void 0===t)throw Error("Need to specify objectType and objectId");if(!n.includes(e))throw Error(`objectType ${e} is invalid`);r.A.get({endpoint:`/api/v1/${e}/${t}`}).then(({json:e})=>a(e.result.tags.filter(e=>e.type===i.U.Custom))).catch(e=>l(e))}function u(e,t,a){let l=e.map(e=>e.name);r.A.delete({endpoint:`/api/v1/tag/?q=${o().encode(l)}`}).then(({json:e})=>e.message?t(e.message):t("Successfully Deleted Tag")).catch(e=>{let t=e.message;return t?a(t):a("Error Deleting Tag")})}function h({tagIds:e=[],types:t},a,l){let o=`/api/v1/tag/get_objects/?tagIds=${e}`;t&&(o+=`&types=${t}`),r.A.get({endpoint:o}).then(({json:e})=>a(e.result)).catch(e=>l(e))}},80520:(e,t,a)=>{"use strict";a.d(t,{T:()=>s});var r=a(2445),l=a(91054),o=a(21346),i=a(67675),n=a(34813);function s({certifiedBy:e,details:t,size:a="l"}){let s=(0,o.DP)();return(0,r.Y)(n.m,{id:"certified-details-tooltip",title:(0,r.FD)(r.FK,{children:[e&&(0,r.Y)("div",{children:(0,r.Y)("strong",{children:(0,l.t)("Certified by %s",e)})}),(0,r.Y)("div",{children:t})]}),children:(0,r.Y)(i.F.Certified,{iconColor:s.colorPrimary,iconSize:a})})}},82956:(e,t,a)=>{"use strict";a.d(t,{Jc:()=>p,ux:()=>h});var r=a(2445),l=a(24002),o=a(91054),i=a(21346),n=a(22022),s=a(7973);let d=(0,i.I4)(s.s.Group)`
  padding-left: ${({theme:e})=>2*e.sizeUnit}px;

  .ant-radio-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: ${({theme:e})=>.5*e.sizeUnit}px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`,c=i.I4.div`
  display: flex;
  align-items: center;

  .ant-input {
    width: 80px;
    margin-left: ${({theme:e})=>e.sizeUnit}px;
    margin-right: ${({theme:e})=>e.sizeUnit}px;
  }
`,u=[{value:0,label:(0,o.t)("Don't refresh")},{value:10,label:(0,o.t)("10 seconds")},{value:30,label:(0,o.t)("30 seconds")},{value:60,label:(0,o.t)("1 minute")},{value:300,label:(0,o.t)("5 minutes")},{value:1800,label:(0,o.t)("30 minutes")},{value:3600,label:(0,o.t)("1 hour")},{value:21600,label:(0,o.t)("6 hours")},{value:43200,label:(0,o.t)("12 hours")},{value:86400,label:(0,o.t)("24 hours")},{value:-1,label:(0,o.t)("Custom")}],h=({value:e,onChange:t,ariaLabel:a=(0,o.t)("Refresh frequency")})=>{let[i,h]=(0,l.useState)(()=>u.find(t=>t.value===e)?e:-1),[p,m]=(0,l.useState)(()=>u.find(t=>t.value===e)?"":e.toString());return(0,r.FD)(d,{value:i,onChange:e=>{let a=parseInt(e.target.value,10);h(a),-1===a?(t(parseInt(p,10)||10),p||m("10")):t(a)},children:[u.slice(0,-1).map(e=>(0,r.Y)(s.s,{value:e.value,children:e.label},e.value)),(0,r.Y)(s.s,{value:-1,children:(0,r.FD)(c,{children:[(0,o.t)("Custom"),(0,r.Y)(n.Input,{type:"number",min:10,value:p,onChange:e=>{let a=e.target.value;m(a);let r=parseInt(a,10);r>=10&&t(r)},placeholder:"10+",disabled:-1!==i,onClick:e=>e.stopPropagation()}),(0,r.Y)("span",{children:(0,o.t)("seconds")})]})})]})},p=(e,t,a)=>e>0&&t&&e<t&&a?a:null}}]);