"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7094],{75420:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n,i=r(2445),o=r(91054),a=r(95265),l=r(21346),s=r(17437),c=r(83734),u=r(22022),d=r(67675),m=r(30404),h=r(46502),p=r(19633),g=r(89795),f=r(24002),y=r(44480),w=r(23745),A=r(61225),Y=r(31545),I=((n=I||{})[n.AuthOID=0]="AuthOID",n[n.AuthDB=1]="AuthDB",n[n.AuthLDAP=2]="AuthLDAP",n[n.AuthOauth=4]="AuthOauth",n);let b=(0,l.I4)(h.Z)`
  ${({theme:e})=>(0,s.AH)`
    max-width: 400px;
    width: 100%;
    margin-top: ${e.marginXL}px;
    color: ${e.colorBgContainer};
    background: ${e.colorBgBase};
    .ant-form-item-label label {
      color: ${e.colorPrimary};
    }
  `}
`,$=(0,l.I4)(g.o.Text)`
  ${({theme:e})=>(0,s.AH)`
    font-size: ${e.fontSizeSM}px;
  `}
`;function S(){let[e]=c.l.useForm(),[t,r]=(0,f.useState)(!1),n=(0,A.wA)(),l=(0,Y.Ay)(),h=(0,f.useMemo)(()=>{try{return new URLSearchParams(window.location.search).get("next")||""}catch(e){return""}},[]),I=(0,f.useMemo)(()=>h?`/login/?next=${encodeURIComponent(h)}`:"/login/",[h]),S=e=>{let t=`/login/${e}`;return h?`${t}${t.includes("?")?"&":"?"}next=${encodeURIComponent(h)}`:t},F=l.common.conf.AUTH_TYPE,D=l.common.conf.AUTH_PROVIDERS,k=l.common.conf.AUTH_USER_REGISTRATION;(0,f.useEffect)(()=>{"true"===sessionStorage.getItem("login_attempted")&&(sessionStorage.removeItem("login_attempted"),n((0,w.iB)((0,o.t)("Invalid username or password"))),e.setFieldsValue({password:""}))},[n,e]);let x=e=>{if(!e||"string"!=typeof e)return;let t=`${(0,y.capitalize)(e)}Outlined`,r=d.F[t];if(r&&"function"==typeof r)return(0,i.Y)(r,{})};return(0,i.Y)(p.s,{justify:"center",align:"center","data-test":"login-form",css:(0,s.AH)`
        width: 100%;
        height: calc(100vh - 200px);
      `,children:(0,i.FD)(b,{title:(0,o.t)("Sign in"),padded:!0,children:[0===F&&(0,i.Y)(p.s,{justify:"center",vertical:!0,gap:"middle",children:(0,i.Y)(c.l,{layout:"vertical",requiredMark:"optional",form:e,children:D.map(e=>(0,i.Y)(c.l.Item,{children:(0,i.FD)(m.$,{href:S(e.name),block:!0,iconPosition:"start",icon:x(e.name),children:[(0,o.t)("Sign in with")," ",(0,y.capitalize)(e.name)]})}))})}),4===F&&(0,i.Y)(p.s,{justify:"center",gap:0,vertical:!0,children:(0,i.Y)(c.l,{layout:"vertical",requiredMark:"optional",form:e,children:D.map(e=>(0,i.Y)(c.l.Item,{children:(0,i.FD)(m.$,{href:S(e.name),block:!0,iconPosition:"start",icon:x(e.name),children:[(0,o.t)("Sign in with")," ",(0,y.capitalize)(e.name)]})}))})}),(1===F||2===F)&&(0,i.FD)(p.s,{justify:"center",vertical:!0,gap:"middle",children:[(0,i.Y)(g.o.Text,{type:"secondary",children:(0,o.t)("Enter your login and password below:")}),(0,i.FD)(c.l,{layout:"vertical",requiredMark:"optional",form:e,onFinish:e=>{r(!0),sessionStorage.setItem("login_attempted","true"),a.A.postForm(I,e,"")},children:[(0,i.Y)(c.l.Item,{label:(0,i.Y)($,{children:(0,o.t)("Username:")}),name:"username",rules:[{required:!0,message:(0,o.t)("Please enter your username")}],children:(0,i.Y)(u.Input,{autoFocus:!0,prefix:(0,i.Y)(d.F.UserOutlined,{iconSize:"l"}),"data-test":"username-input"})}),(0,i.Y)(c.l.Item,{label:(0,i.Y)($,{children:(0,o.t)("Password:")}),name:"password",rules:[{required:!0,message:(0,o.t)("Please enter your password")}],children:(0,i.Y)(u.Input.Password,{prefix:(0,i.Y)(d.F.KeyOutlined,{iconSize:"l"}),"data-test":"password-input"})}),(0,i.Y)(c.l.Item,{label:null,children:(0,i.FD)(p.s,{css:(0,s.AH)`
                    width: 100%;
                  `,children:[(0,i.Y)(m.$,{block:!0,type:"primary",htmlType:"submit",loading:t,"data-test":"login-button",children:(0,o.t)("Sign in")}),k&&(0,i.Y)(m.$,{block:!0,type:"default",href:"/register/","data-test":"register-button",children:(0,o.t)("Register")})]})})]})]})]})})}}}]);