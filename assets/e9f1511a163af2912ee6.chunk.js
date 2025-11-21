"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6830],{49198:(e,t,r)=>{r.d(t,{k:()=>c});var n=r(2445),s=r(24002),i=r(91054),a=r(30404),o=r(83734),l=r(78076);function d(e,t,r,n,s,i,a){try{var o=e[i](a),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,s)}function c({show:e,onHide:t,title:r,onSave:c,children:u,initialValues:m={},formSubmitHandler:h,bodyStyle:p={},requiredFields:f=[],name:w}){let[g]=o.l.useForm(),[v,b]=(0,s.useState)(!1),y=(0,s.useCallback)(()=>{g.resetFields(),b(!1)},[g]),[Y,F]=(0,s.useState)(!0),P=(0,s.useCallback)(()=>{y(),t()},[t,y]),x=(0,s.useCallback)(()=>{y(),c()},[c,y]),S=(0,s.useCallback)(e=>{var t;return(t=function*(){try{b(!0),yield h(e),x()}catch(e){console.error(e)}finally{b(!1)}},function(){var e=this,r=arguments;return new Promise(function(n,s){var i=t.apply(e,r);function a(e){d(i,n,s,a,o,"next",e)}function o(e){d(i,n,s,a,o,"throw",e)}a(void 0)})})()},[h,x]),$=()=>{let e=g.getFieldsError().some(({errors:e})=>e.length),t=g.getFieldsValue(),r=f.some(e=>!t[e]);F(e||r)};return(0,n.Y)(l.aF,{name:w,show:e,title:r,onHide:P,bodyStyle:p,footer:(0,n.FD)(n.FK,{children:[(0,n.Y)(a.$,{buttonStyle:"secondary","data-test":"modal-cancel-button",onClick:P,children:(0,i.t)("Cancel")}),(0,n.Y)(a.$,{buttonStyle:"primary",htmlType:"submit",onClick:()=>g.submit(),"data-test":"form-modal-save-button",disabled:v||Y,children:v?(0,i.t)("Saving..."):(0,i.t)("Save")})]}),children:(0,n.Y)(o.l,{form:g,layout:"vertical",onFinish:S,initialValues:m,onValuesChange:$,onFieldsChange:$,children:"function"==typeof u?u(g):u})})}},76030:(e,t,r)=>{r.r(t),r.d(t,{UserInfo:()=>I,default:()=>C});var n,s=r(2445),i=r(24002),a=r(95265),o=r(91054),l=r(21346),d=r(17437),c=r(79508),u=r(11960),m=r(22022),h=r(22023),p=r(49198);function f(e,t,r,n,s,i,a){try{var o=e[i](a),l=o.value}catch(e){r(e);return}o.done?t(l):Promise.resolve(l).then(n,s)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g({show:e,onHide:t,onSave:r,isEditMode:n,user:i}){let{addDangerToast:l,addSuccessToast:d}=(0,u.Yf)(),c=n?{first_name:null==i?void 0:i.firstName,last_name:null==i?void 0:i.lastName}:{};return(0,s.Y)(p.k,{show:e,onHide:t,title:n?(0,o.t)("Edit user"):(0,o.t)("Reset password"),onSave:r,formSubmitHandler:e=>{var t;return(t=function*(){try{let{confirm_password:t}=e,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,["confirm_password"]);yield a.A.put({endpoint:"/api/v1/me/",jsonPayload:w({},s)}),d(n?(0,o.t)("The user was updated successfully"):(0,o.t)("The password reset was successful")),r()}catch(e){l((0,o.t)("Something went wrong while saving the user info"))}},function(){var e=this,r=arguments;return new Promise(function(n,s){var i=t.apply(e,r);function a(e){f(i,n,s,a,o,"next",e)}function o(e){f(i,n,s,a,o,"throw",e)}a(void 0)})})()},requiredFields:n?["first_name","last_name"]:["password","confirm_password"],initialValues:c,children:n?(0,s.Y)(()=>(0,s.FD)(s.FK,{children:[(0,s.Y)(h.e,{name:"first_name",label:(0,o.t)("First name"),rules:[{required:!0,message:(0,o.t)("First name is required")}],children:(0,s.Y)(m.Input,{name:"first_name",placeholder:(0,o.t)("Enter the user's first name")})}),(0,s.Y)(h.e,{name:"last_name",label:(0,o.t)("Last name"),rules:[{required:!0,message:(0,o.t)("Last name is required")}],children:(0,s.Y)(m.Input,{name:"last_name",placeholder:(0,o.t)("Enter the user's last name")})})]}),{}):(0,s.Y)(()=>(0,s.FD)(s.FK,{children:[(0,s.Y)(h.e,{name:"password",label:(0,o.t)("Password"),rules:[{required:!0,message:(0,o.t)("Password is required")}],children:(0,s.Y)(m.Input.Password,{name:"password",placeholder:"Enter the user's password"})}),(0,s.Y)(h.e,{name:"confirm_password",label:(0,o.t)("Confirm Password"),dependencies:["password"],rules:[{required:!0,message:(0,o.t)("Please confirm your password")},({getFieldValue:e})=>({validator:(t,r)=>r&&e("password")!==r?Promise.reject(Error((0,o.t)("Passwords do not match!"))):Promise.resolve()})],children:(0,s.Y)(m.Input.Password,{name:"confirm_password",placeholder:(0,o.t)("Confirm the user's password")})})]}),{})})}let v=e=>(0,s.Y)(g,w({},e,{isEditMode:!1})),b=e=>(0,s.Y)(g,w({},e,{isEditMode:!0}));var y=r(67675),Y=r(50888);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let P=l.I4.div`
  ${({theme:e})=>(0,d.AH)`
    font-weight: ${e.fontWeightStrong};
    text-align: left;
    font-size: 18px;
    padding: ${3*e.sizeUnit}px;
    padding-left: ${7*e.sizeUnit}px;
    display: inline-block;
    line-height: ${9*e.sizeUnit}px;
    width: 100%;
    background-color: ${e.colorBgContainer};
    margin-bottom: ${6*e.sizeUnit}px;
  `}
`,x=l.I4.div`
  ${({theme:e})=>(0,d.AH)`
    margin: 0px ${3*e.sizeUnit}px ${6*e.sizeUnit}px
      ${3*e.sizeUnit}px;
    background-color: ${e.colorBgContainer};
  `}
`,S=l.I4.div`
  ${({theme:e})=>(0,d.AH)`
    .ant-row {
      margin: 0px ${3*e.sizeUnit}px ${6*e.sizeUnit}px
        ${3*e.sizeUnit}px;
    }
    && .menu > .ant-menu {
      padding: 0px;
    }
    && .nav-right {
      left: 0;
      padding-left: ${4*e.sizeUnit}px;
      position: relative;
      height: ${15*e.sizeUnit}px;
    }
  `}
`,$=l.I4.span`
  font-weight: ${({theme:e})=>e.fontWeightStrong};
`;var k=((n=k||{}).ResetPassword="resetPassword",n.Edit="edit",n);function I({user:e}){let t=(0,l.DP)(),[r,n]=(0,i.useState)({resetPassword:!1,edit:!1}),h=e=>n(t=>F({},t,{[e]:!0})),p=e=>n(t=>F({},t,{[e]:!1})),{addDangerToast:f}=(0,u.Yf)(),[w,g]=(0,i.useState)(e);(0,i.useEffect)(()=>{k()},[]);let k=(0,i.useCallback)(()=>{a.A.get({endpoint:"/api/v1/me/"}).then(({json:e})=>{g(F({},e.result,{firstName:e.result.first_name,lastName:e.result.last_name}))}).catch(e=>{f("Failed to fetch user info:",e)})},[w]),I=[{name:(0,s.FD)(s.FK,{children:[(0,s.Y)(y.F.LockOutlined,{iconColor:t.colorPrimary,iconSize:"m",css:(0,d.AH)`
              margin: auto ${2*t.sizeUnit}px auto 0;
              vertical-align: text-top;
            `}),(0,o.t)("Reset my password")]}),buttonStyle:"secondary",onClick:()=>{h("resetPassword")},"data-test":"reset-password-button"},{name:(0,s.FD)(s.FK,{children:[(0,s.Y)(y.F.FormOutlined,{iconSize:"m",css:(0,d.AH)`
              margin: auto ${2*t.sizeUnit}px auto 0;
              vertical-align: text-top;
            `}),(0,o.t)("Edit user")]}),buttonStyle:"primary",onClick:()=>{h("edit")},"data-test":"edit-user-button"}];return(0,s.FD)(S,{children:[(0,s.Y)(P,{children:"Your user information"}),(0,s.Y)(x,{children:(0,s.FD)(Y.S,{defaultActiveKey:["userInfo","personalInfo"],ghost:!0,children:[(0,s.Y)(Y.S.Panel,{header:(0,s.Y)($,{children:"User info"}),children:(0,s.FD)(m.Descriptions,{bordered:!0,size:"small",column:1,labelStyle:{width:"120px"},children:[(0,s.Y)(m.Descriptions.Item,{label:"User Name",children:e.username}),(0,s.Y)(m.Descriptions.Item,{label:"Is Active?",children:e.isActive?"Yes":"No"}),(0,s.Y)(m.Descriptions.Item,{label:"Role",children:e.roles?Object.keys(e.roles).join(", "):"None"}),(0,s.Y)(m.Descriptions.Item,{label:"Login count",children:e.loginCount})]})},"userInfo"),(0,s.Y)(Y.S.Panel,{header:(0,s.Y)($,{children:"Personal info"}),children:(0,s.FD)(m.Descriptions,{bordered:!0,size:"small",column:1,labelStyle:{width:"120px"},children:[(0,s.Y)(m.Descriptions.Item,{label:"First Name",children:w.firstName}),(0,s.Y)(m.Descriptions.Item,{label:"Last Name",children:w.lastName}),(0,s.Y)(m.Descriptions.Item,{label:"Email",children:e.email})]})},"personalInfo")]})}),r.resetPassword&&(0,s.Y)(v,{onHide:()=>p("resetPassword"),show:r.resetPassword,onSave:()=>{p("resetPassword")}}),r.edit&&(0,s.Y)(b,{onHide:()=>p("edit"),show:r.edit,onSave:()=>{p("edit"),k()},user:w}),(0,s.Y)(c.A,{buttons:I})]})}let C=I}}]);