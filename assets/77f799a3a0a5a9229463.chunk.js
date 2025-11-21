(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3115],{7452:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,r,n,o){var i,a,c,s,u=Object.create((r&&r.prototype instanceof m?r:m).prototype);return l(u,"_invoke",{value:(i=e,a=n,c=new O(o||[]),s=h,function(e,r){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var l=function e(r,n){var l=n.method,o=r.iterator[l];if(t===o)return(n.delegate=null,"throw"===l&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==l&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+l+"' method")),g);var i=d(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(l){if(l===g)continue;return l}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(s===h)throw s=f,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);s=p;var o=d(i,a,c);if("normal"===o.type){if(s=c.done?f:"suspendedYield",o.arg===g)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(s=f,c.method="throw",c.arg=o.arg)}})}),u}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",f="completed",g={};function m(){}function y(){}function v(){}var b={};s(b,i,function(){return this});var w=Object.getPrototypeOf,S=w&&w(w(N([])));S&&S!==r&&n.call(S,i)&&(b=S);var k=v.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function C(e,t){var r;l(this,"_invoke",{value:function(l,o){function i(){return new t(function(r,i){!function r(l,o,i,a){var c=d(e[l],e,o);if("throw"===c.type)a(c.arg);else{var s=c.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,i,a)},function(e){r("throw",e,i,a)}):t.resolve(u).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,a)})}}(l,o,r,i)})}return r=r?r.then(i,i):i()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function N(e){if(null!=e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var l=-1,o=function r(){for(;++l<e.length;)if(n.call(e,l))return r.value=e[l],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=v,l(k,"constructor",{value:v,configurable:!0}),l(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},x(C.prototype),s(C.prototype,a,function(){return this}),e.AsyncIterator=C,e.async=function(t,r,n,l,o){void 0===o&&(o=Promise);var i=new C(u(t,r,n,l),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},x(k),s(k,c,"Generator"),s(k,i,function(){return this}),s(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function l(n,l){return a.type="throw",a.arg=e,r.next=n,l&&(r.method="next",r.arg=t),!!l}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return l("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return l(i.catchLoc,!0);else if(this.prev<i.finallyLoc)return l(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return l(i.catchLoc,!0)}else if(s){if(this.prev<i.finallyLoc)return l(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r];if(l.tryLoc<=this.prev&&n.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var o=l;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return(i.type=e,i.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var l=n.arg;A(r)}return l}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},35697:(e,t,r)=>{var n=r(75972).k5;e.exports.X=function(e){return n({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"}}]})(e)}},43115:(e,t,r)=>{"use strict";let n;r.r(t),r.d(t,{default:()=>eO,sanitizeHeaderId:()=>eS});var l=r(2445),o=r(24002),i=r(21671),a=r(61573),c=r(69856),s=r(77796),u=r(35697),d=r(46942),h=r.n(d),p=r(91054),f=r(42964),g=r(1800),m=r(79843),y=r(46597),v=r(99562),b=r(21346),w=r(17437),S=r(12491),k=r(22022),x=r(1032),C=r(34813),E=r(26067),A=r(13341),O=r(14103),N=r(39822),T=r(35709),Y=r(29248),$=r(62193),M=r.n($),I=r(38221),F=r.n(I),L=r(2404),H=r.n(L),P=r(48259),z=r(87962),D=r(22074),R=r(32885),j=r(51545),B=r(19633);r(7452);let U=new Map;function _({count:e,value:t,onChange:r,onBlur:n,inputRef:o}){return(0,l.FD)(k.Space,{direction:"horizontal",size:4,className:"dt-global-filter",children:["Search",(0,l.Y)(k.Input,{size:"small",ref:o,placeholder:`${e} records...`,value:t,onChange:r,onBlur:n,className:"form-control input-sm"})]})}let G=(0,o.memo)(function({preGlobalFilteredRows:e,filterValue:t="",searchInput:r,setGlobalFilter:n,id:i="",serverPagination:a,rowCount:c}){let s=a?c:e.length,u=(0,o.useRef)(null),[d,h]=function(e,t,r=200){let[n,l]=(0,o.useState)(e),i=(0,o.useRef)(e),a=(0,R.useAsyncDebounce)(t,r);return i.current!==e&&(i.current=e,n!==e&&l(e)),[n,e=>{l(e),a(e)}]}(t,e=>{n(e||void 0)},200);return(0,o.useEffect)(()=>{if(a&&U.get(i)&&document.activeElement!==u.current){var e;null==(e=u.current)||e.focus()}},[d,a]),(0,l.Y)(r||_,{count:s,value:d,inputRef:u,onChange:e=>{let t=e.target;e.preventDefault(),U.set(i,!0),h(t.value)},onBlur:()=>{U.set(i,!1)}})});var W=r(82784);function X({current:e,options:t,onChange:r}){let{Option:n}=k.Select;return(0,l.FD)("span",{className:"dt-select-page-size form-inline",children:[(0,p.t)("Show")," ",(0,l.Y)(k.Select,{value:e,onChange:e=>r(e),size:"small",css:e=>(0,w.AH)`
          width: ${18*e.sizeUnit}px;
        `,children:t.map(e=>{let[t,r]=Array.isArray(e)?e:[e,e],o=0===t?(0,p.t)("all"):t;return(0,l.Y)(n,{value:Number(t),"aria-label":(0,p.t)("Show %s entries",o),children:r},t)})})," ",(0,p.t)("entries")]})}function V(e){return Array.isArray(e)?e[0]:e}let K=(0,o.memo)(function({total:e,options:t,current:r,selectRenderer:n,onChange:o}){let i=t.map(V),a=[...t];void 0===r||r===e&&i.includes(0)||i.includes(r)||(a=[...t]).splice(i.findIndex(e=>e>r),0,(0,W.u)([r])[0]);let c=void 0===r?i[0]:r;return(0,l.Y)(n||X,{current:c,options:a,onChange:o})}),Q=(0,o.memo)((0,o.forwardRef)(function({style:e,pageCount:t,currentPage:r=0,maxPageItemCount:n=9,onPageChange:o},i){let a=function(e,t,r){if(r<7)throw Error("Must allow at least 7 page items");if(r%2==0)throw Error("Must allow odd number of page items");if(e<r)return[...Array(e).keys()];let n=Math.max(0,Math.min(e-r,t-Math.floor(r/2))),l=Array(r);for(let e=0;e<r;e+=1)l[e]=e+n;"number"==typeof l[0]&&l[0]>0&&(l[0]=0,l[1]="prev-more");let o=l[l.length-1];return"number"==typeof o&&o<e-1&&(l[l.length-1]=e-1,l[l.length-2]="next-more"),l}(t,r,n);return(0,l.Y)("div",{ref:i,className:"dt-pagination",style:e,children:(0,l.Y)("ul",{className:"pagination pagination-sm",children:a.map(e=>"number"==typeof e?(0,l.Y)("li",{className:r===e?"active":void 0,children:(0,l.Y)("a",{href:`#page-${e}`,role:"button",onClick:t=>{t.preventDefault(),o(e)},children:e+1})},e):(0,l.Y)("li",{className:"dt-pagination-ellipsis",children:(0,l.Y)("span",{children:"…"})},e))})})})),Z=e=>e.join(`
`);function J(e=!1){if("undefined"==typeof document)return 0;if(void 0===n||e){let e=document.createElement("div"),t=document.createElement("div");e.style.cssText=Z`
      width: auto;
      height: 100%;
      overflow: scroll;
    `,t.style.cssText=Z`
      position: absolute;
      visibility: hidden;
      overflow: hidden;
      width: 100px;
      height: 50px;
    `,t.append(e),document.body.append(t),n=t.clientWidth-e.clientWidth,t.remove()}return n}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ee=(e,t)=>e+t,et=(e,t)=>({style:q({},e.props.style,t)}),er={tableLayout:"fixed"};function en({sticky:e={},width:t,height:r,children:n,setStickyState:i}){let a,c,s,u,d,h,p,f=(0,b.DP)();if(!n||"table"!==n.type)throw Error("<StickyWrap> must have only one <table> element as child");if(o.Children.forEach(n.props.children,e=>{e&&("thead"===e.type?a=e:"tbody"===e.type?c=e:"tfoot"===e.type&&(s=e))}),!a||!c)throw Error("<table> in <StickyWrap> must contain both thead and tbody.");let g=(0,o.useMemo)(()=>o.Children.toArray(null==a?void 0:a.props.children).pop().props.children.length,[a]),m=(0,o.useRef)(null),y=(0,o.useRef)(null),v=(0,o.useRef)(null),S=(0,o.useRef)(null),k=(0,o.useRef)(null),x=J(),{bodyHeight:C,columnWidths:E}=e,A=!E||e.width!==t||e.height!==r||e.setStickyState!==i;(0,o.useLayoutEffect)(()=>{var e,n;if(!m.current)return;let l=m.current,o=l.clientHeight,a=y.current?y.current.clientHeight:0;if(!o)return;let c=l.parentNode.clientHeight,s=Array.from(null==(n=l.childNodes)?void 0:n[(null==(e=l.childNodes)?void 0:e.length)-1||0].childNodes).map(e=>{var t;return(null==(t=e.getBoundingClientRect())?void 0:t.width)||e.clientWidth}),[u,d]=function({width:e,height:t,innerHeight:r,innerWidth:n,scrollBarSize:l}){let o=r>t;return[o,n>e-(o?l:0)]}({width:t,height:r-o-a,innerHeight:c,innerWidth:s.reduce(ee),scrollBarSize:x}),h=Math.min(r,d?c+x:c);i({hasVerticalScroll:u,hasHorizontalScroll:d,setStickyState:i,width:t,height:r,realHeight:h,tableHeight:c,bodyHeight:h-o-a,columnWidths:s})},[t,r,i,x]);let O=(0,w.AH)`
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${f.colorFillQuaternary};
    }
    &::-webkit-scrollbar-thumb {
      background: ${f.colorFillSecondary};
      border-radius: ${f.borderRadiusSM}px;
      &:hover {
        background: ${f.colorFillTertiary};
      }
    }
    &::-webkit-scrollbar-corner {
      background: ${f.colorFillQuaternary};
    }
  `;if(A){let e=(0,o.cloneElement)(a,{ref:m}),t=s&&(0,o.cloneElement)(s,{ref:y});u=(0,l.Y)("div",{style:{height:r,overflow:"auto",visibility:"hidden",scrollbarGutter:"stable"},css:O,role:"presentation",children:(0,o.cloneElement)(n,{role:"presentation"},e,c,t)},"sizer")}let N=null==E?void 0:E.slice(0,g);if(N&&C){let t=(0,l.Y)("colgroup",{children:N.map((e,t)=>(0,l.Y)("col",{width:e},t))});d=(0,l.FD)("div",{ref:v,style:{overflow:"hidden",scrollbarGutter:"stable"},role:"presentation",children:[(0,o.cloneElement)((0,o.cloneElement)(n,{role:"presentation"}),et(n,er),t,a),d]},"header"),h=s&&(0,l.FD)("div",{ref:S,style:{overflow:"hidden",scrollbarGutter:"stable"},role:"presentation",children:[(0,o.cloneElement)((0,o.cloneElement)(n,{role:"presentation"}),et(n,er),t,s),h]},"footer"),p=(0,l.Y)("div",{ref:k,style:{height:C,overflow:"auto",scrollbarGutter:"stable"},css:O,onScroll:e.hasHorizontalScroll?e=>{v.current&&(v.current.scrollLeft=e.currentTarget.scrollLeft),S.current&&(S.current.scrollLeft=e.currentTarget.scrollLeft)}:void 0,role:"presentation",children:(0,o.cloneElement)((0,o.cloneElement)(n,{role:"presentation"}),et(n,er),t,c)},"body")}return(0,l.FD)("div",{style:{width:t,height:e.realHeight||r,overflow:"hidden"},role:"table",children:[d,p,h,u]})}function el(e){let{dispatch:t,state:{sticky:r},data:n,page:i,rows:a,allColumns:c,getTableSize:s=()=>void 0}=e,u=(0,o.useCallback)(e=>{t({type:"setStickyState",size:e})},[t,s,i,a]);Object.assign(e,{setStickyState:u,wrapStickyTable:e=>{var t;let d,{width:h,height:p}=(t=[s],d=(0,o.useRef)(),(0,o.useLayoutEffect)(()=>{d.current=s}),(0,o.useMemo)(()=>{if(d.current)return s()},[d.current,d.current===s,...t||[]])||r),f=(0,o.useMemo)(e,[i,a,c]);return((0,o.useLayoutEffect)(()=>{h&&p||u()},[h,p]),h&&p)?0===n.length?f:(0,l.Y)(en,{width:h,height:p,sticky:r,setStickyState:u,children:f}):null}})}function eo(e){e.useInstance.push(el),e.stateReducers.push((e,t,r)=>{if("init"===t.type)return q({},e,{sticky:q({},null==r?void 0:r.sticky)});if("setStickyState"===t.type){let{size:n}=t;return n?q({},e,{sticky:q({},null==r?void 0:r.sticky,null==e?void 0:e.sticky,t.size)}):q({},e)}return e})}eo.pluginName="useSticky";var ei=r(24236);let ea=(0,b.I4)(k.Select)`
  width: 120px;
  margin-right: 8px;
`,ec=function({value:e,onChange:t,searchOptions:r}){var n,o;return(0,l.Y)(ea,{className:"search-select",value:e||(null!=(o=null==r||null==(n=r[0])?void 0:n.value)?o:""),options:r,onChange:t})};function es(){return(es=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function eu(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}let ed={alphanumeric:(e,t,r)=>{let n=e.values[r],l=t.values[r];return n&&"string"==typeof n?l&&"string"==typeof l?n.localeCompare(l):1:-1}},eh=(0,z.v)(function(e){var t,r,{tableClassName:n,columns:i,data:a,serverPaginationData:c,width:s="100%",height:u=300,pageSize:d=0,initialState:h={},pageSizeOptions:p=ei.x,maxPageItemCount:f=9,sticky:g,searchInput:m=!0,onServerPaginationChange:y,rowCount:v,selectPageSize:b,noResults:w="No data found",hooks:S,serverPagination:x,wrapperRef:C,onColumnOrderChange:E,renderGroupingHeaders:A,renderTimeComparisonDropdown:O,handleSortByChange:N,sortByFromParent:T=[],manualSearch:Y=!1,onSearchChange:$,initialSearchText:M,searchInputId:I,onSearchColChange:F,searchOptions:L}=e,P=eu(e,["tableClassName","columns","data","serverPaginationData","width","height","pageSize","initialState","pageSizeOptions","maxPageItemCount","sticky","searchInput","onServerPaginationChange","rowCount","selectPageSize","noResults","hooks","serverPagination","wrapperRef","onColumnOrderChange","renderGroupingHeaders","renderTimeComparisonDropdown","handleSortByChange","sortByFromParent","manualSearch","onSearchChange","initialSearchText","searchInputId","onSearchColChange","searchOptions"]);let z=[R.useGlobalFilter,R.useSortBy,R.usePagination,R.useColumnOrder,g?eo:[],S||[]].flat(),U=Object.keys((null==a?void 0:a[0])||{}),_=(0,D.Z)(U),W=x?v:a.length,X=(0,o.useRef)([]),V=(0,o.useRef)([d,W]),Z=d>0&&W>0,J=Z||!!m||O,q=es({},h,{sortBy:x?T:X.current,pageSize:d>0?d:W||10}),ee=(0,o.useRef)(null),et=(0,o.useRef)(null),er=(0,o.useRef)(null),en=C||ee,el=JSON.stringify(c),ea=(0,o.useCallback)(()=>{if(en.current){var e,t;return{width:Number(s)||en.current.clientWidth,height:(Number(u)||en.current.clientHeight)-((null==(e=et.current)?void 0:e.clientHeight)||0)-((null==(t=er.current)?void 0:t.clientHeight)||0)}}},[u,s,en,Z,J,er,W,el]),eh=(0,o.useCallback)((e,t,r)=>(0,j.Ht)(e,r,{keys:[...t,e=>t.map(t=>e.values[t]).join(" ")],threshold:j.cG.ACRONYM}),[]),{getTableProps:ep,getTableBodyProps:ef,prepareRow:eg,headerGroups:em,footerGroups:ey,page:ev,pageCount:eb,gotoPage:ew,preGlobalFilteredRows:eS,setGlobalFilter:ek,setPageSize:ex,wrapStickyTable:eC,setColumnOrder:eE,allColumns:eA,state:{pageIndex:eO,pageSize:eN,globalFilter:eT,sticky:eY={},sortBy:e$}}=(0,R.useTable)(es({columns:i,data:a,initialState:q,getTableSize:ea,globalFilter:eh,sortTypes:ed,autoResetSortBy:!H()(U,_),manualSortBy:!!x},P),...z),eM=(0,o.useCallback)(e=>{Y&&$?$(e):ek(e)},[Y,$,ek]);(0,o.useEffect)(()=>{let e=(null==c?void 0:c.sortBy)||[];if(x&&!H()(e$,e))if(Array.isArray(e$)&&e$.length>0){let[e]=e$,t=i.find(t=>(null==t?void 0:t.id)===(null==e?void 0:e.id));t&&"columnKey"in t&&N([es({},e,{key:t.columnKey})])}else N([])},[e$]);let eI=e=>{x&&y(0,e),(e||0!==W)&&ex(0===e?W:e)},eF="function"==typeof w?w(eT):w,eL=()=>(0,l.Y)("div",{className:"dt-no-results",children:eF});if(!i||0===i.length)return eC?eC(eL):eL();let eH=i.some(e=>!!e.Footer),eP=-1,ez=e=>{let t=e.target;eP=eA.findIndex(e=>e.id===t.dataset.columnName),e.dataTransfer.setData("text/plain",`${eP}`)},eD=e=>{let t=e.target,r=eA.findIndex(e=>e.id===t.dataset.columnName);if(-1!==r){let e=eA.map(e=>e.id),t=e.splice(eP,1);e.splice(r,0,t[0]),eE(e),null==E||E()}e.preventDefault()},eR=()=>(0,l.FD)("table",es({},ep({className:n}),{children:[(0,l.FD)("thead",{children:[A?A():null,em.map(e=>{let t=e.getHeaderGroupProps(),{key:r}=t,n=eu(t,["key"]);return(0,l.Y)("tr",es({},n,{children:e.headers.map(e=>e.render("Header",es({key:e.id},e.getSortByToggleProps(),{onDragStart:ez,onDrop:eD})))}),r||e.id)})]}),(0,l.Y)("tbody",es({},ef(),{children:ev&&ev.length>0?ev.map(e=>{eg(e);let t=e.getRowProps(),{key:r}=t,n=eu(t,["key"]);return(0,l.Y)("tr",es({},n,{role:"row",children:e.cells.map(e=>e.render("Cell",{key:e.column.id}))}),r||e.id)}):(0,l.Y)("tr",{children:(0,l.Y)("td",{className:"dt-no-results",colSpan:i.length,children:eF})})})),eH&&(0,l.Y)("tfoot",{children:ey.map(e=>{let t=e.getHeaderGroupProps(),{key:r}=t,n=eu(t,["key"]);return(0,l.Y)("tr",es({},n,{role:"row",children:e.headers.map(e=>e.render("Footer",{key:e.id}))}),r||e.id)})})]}));(V.current[0]!==d||0===d&&V.current[1]!==W)&&(V.current=[d,W],eI(d));let ej=eY.height?{}:{visibility:"hidden"},eB=eb,eU=eN,e_=eO,eG=ew;if(x){let e=null!=(t=null==c?void 0:c.pageSize)?t:d;Number.isFinite(eB=Math.ceil(v/e))||(eB=0),eU=e,-1===p.findIndex(([e])=>e>=eU)&&(eU=0),e_=null!=(r=null==c?void 0:c.currentPage)?r:0,eG=t=>y(t,e)}return(0,l.FD)("div",{ref:en,style:{width:s,height:u},children:[J?(0,l.Y)("div",{ref:et,className:"form-inline dt-controls",children:(0,l.FD)(B.s,{wrap:!0,className:"row",align:"center",justify:"space-between",gap:"middle",children:[Z?(0,l.Y)(K,{total:W,current:eU,options:p,selectRenderer:"boolean"==typeof b?void 0:b,onChange:eI}):null,(0,l.FD)(B.s,{wrap:!0,align:"center",gap:"middle",children:[x&&(0,l.FD)(k.Space,{size:"small",className:"search-select-container",children:[(0,l.Y)("span",{className:"search-by-label",children:"Search by:"}),(0,l.Y)(ec,{searchOptions:L,value:(null==c?void 0:c.searchColumn)||"",onChange:F})]}),m&&(0,l.Y)(G,{searchInput:"boolean"==typeof m?void 0:m,preGlobalFilteredRows:eS,setGlobalFilter:Y?eM:ek,filterValue:Y?M:eT,id:I,serverPagination:!!x,rowCount:v}),O?O():null]})]})}):null,eC?eC(eR):eR(),Z&&eB>1?(0,l.Y)(Q,{ref:er,style:ej,maxPageItemCount:f,pageCount:eB,currentPage:e_,onPageChange:eG}):null]})}),ep=b.I4.div`
  ${({theme:e})=>(0,w.AH)`
    /* Base table styles */
    table {
      width: 100%;
      min-width: auto;
      max-width: none;
      margin: 0;
      border-collapse: collapse;
    }

    /* Cell styling */
    th,
    td {
      min-width: 4.3em;
      padding: 0.75rem;
      vertical-align: top;
    }

    /* Header styling */
    thead > tr > th {
      padding-right: 0;
      position: relative;
      background-color: ${e.colorBgBase};
      text-align: left;
      border-bottom: 2px solid ${e.colorSplit};
      color: ${e.colorText};
      vertical-align: bottom;
    }

    /* Icons in header */
    th svg {
      margin: 1px ${e.sizeUnit/2}px;
      fill-opacity: 0.2;
    }

    th.is-sorted svg {
      color: ${e.colorText};
      fill-opacity: 1;
    }

    /* Table body styling */
    .table > tbody > tr:first-of-type > td,
    .table > tbody > tr:first-of-type > th {
      border-top: 0;
    }

    .table > tbody tr td {
      font-feature-settings: 'tnum' 1;
      border-top: 1px solid ${e.colorSplit};
    }

    /* Bootstrap-like condensed table styles */
    table.table-condensed,
    table.table-sm {
      font-size: ${e.fontSizeSM}px;
    }

    table.table-condensed th,
    table.table-condensed td,
    table.table-sm th,
    table.table-sm td {
      padding: 0.3rem;
    }

    /* Bootstrap-like bordered table styles */
    table.table-bordered {
      border: 1px solid ${e.colorSplit};
    }

    table.table-bordered th,
    table.table-bordered td {
      border: 1px solid ${e.colorSplit};
    }

    /* Bootstrap-like striped table styles */
    table.table-striped tbody tr:nth-of-type(odd) {
      background-color: ${e.colorBgLayout};
    }

    /* Controls and metrics */
    .dt-controls {
      padding-bottom: 0.65em;
    }

    .dt-metric {
      text-align: right;
    }

    .dt-totals {
      font-weight: ${e.fontWeightStrong};
    }

    .dt-is-null {
      color: ${e.colorTextTertiary};
    }

    td.dt-is-filter {
      cursor: pointer;
    }

    td.dt-is-filter:hover {
      background-color: ${e.colorPrimaryBgHover};
    }

    td.dt-is-active-filter,
    td.dt-is-active-filter:hover {
      background-color: ${e.colorPrimaryBgHover};
    }

    .dt-global-filter {
      float: right;
    }

    /* Cell truncation */
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

    /* Pagination styling */
    .dt-pagination {
      text-align: right;
      /* use padding instead of margin so clientHeight can capture it */
      padding: ${e.paddingXXS}px 0px;
    }

    .dt-pagination .pagination > li {
      display: inline;
      margin: 0 ${e.marginXXS}px;
    }

    .dt-pagination .pagination > li > a,
    .dt-pagination .pagination > li > span {
      background-color: ${e.colorBgBase};
      color: ${e.colorText};
      border-color: ${e.colorBorderSecondary};
      padding: ${e.paddingXXS}px ${e.paddingXS}px;
      border-radius: ${e.borderRadius}px;
    }

    .dt-pagination .pagination > li.active > a,
    .dt-pagination .pagination > li.active > span,
    .dt-pagination .pagination > li.active > a:focus,
    .dt-pagination .pagination > li.active > a:hover,
    .dt-pagination .pagination > li.active > span:focus,
    .dt-pagination .pagination > li.active > span:hover {
      background-color: ${e.colorPrimary};
      color: ${e.colorBgContainer};
      border-color: ${e.colorBorderSecondary};
    }

    .pagination > li > span.dt-pagination-ellipsis:focus,
    .pagination > li > span.dt-pagination-ellipsis:hover {
      background: ${e.colorBgLayout};
      border-color: ${e.colorBorderSecondary};
    }

    .dt-no-results {
      text-align: center;
      padding: 1em 0.6em;
    }

    .right-border-only {
      border-right: 2px solid ${e.colorSplit};
    }

    table .right-border-only:last-child {
      border-right: none;
    }
  `}
`;var ef=r(59927),eg=r(6603),em=r(66794);function ey(e,t){var r;let{dataType:n,formatter:l,config:o={}}=e,i=n===S.GenericDataType.Numeric,a=void 0===o.d3SmallNumberFormat?l:o.currencyFormat?new ef.A({d3Format:o.d3SmallNumberFormat,currency:o.currencyFormat}):(0,eg.gV)(o.d3SmallNumberFormat);return r=i&&"number"==typeof t&&1>Math.abs(t)?a:l,void 0===t?[!1,""]:null===t||t instanceof em.A&&null===t.input?[!1,"N/A"]:r?[!1,r(t)]:"string"==typeof t?(0,y.fE)(t)?[!0,(0,y.pn)(t)]:[!1,t]:[!1,t.toString()]}var ev=r(51293);function eb(){return(eb=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let ew={enter:"Enter",spacebar:"Spacebar",space:" "};function eS(e){return e.replace(/%/g,"percent").replace(/#/g,"hash").replace(/△/g,"delta").replace(/\s+/g,"_").replace(/[^a-zA-Z0-9_-]/g,"_").replace(/_+/g,"_").replace(/^_+|_+$/g,"")}function ek({column:e}){let{isSorted:t,isSortedDesc:r}=e,n=(0,l.Y)(c.M,{});return t&&(n=r?(0,l.Y)(s.G,{}):(0,l.Y)(u.X,{})),n}let ex=b.I4.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function eC({count:e,value:t,onChange:r,onBlur:n,inputRef:o}){return(0,l.FD)(k.Space,{direction:"horizontal",size:4,className:"dt-global-filter",children:[(0,p.t)("Search"),(0,l.Y)(k.Input,{"aria-label":(0,p.t)("Search %s records",e),placeholder:(0,p.tn)("%s record","%s records...",e,e),value:t,onChange:r,onBlur:n,ref:o})]})}function eE({options:e,current:t,onChange:r}){let{Option:n}=k.Select;return(0,l.FD)("span",{className:"dt-select-page-size",children:[(0,l.Y)(ex,{htmlFor:"pageSizeSelect",children:(0,p.t)("Select page size")}),(0,p.t)("Show")," ",(0,l.Y)(k.Select,{id:"pageSizeSelect",value:t,onChange:e=>r(e),size:"small",css:e=>(0,w.AH)`
          width: ${18*e.sizeUnit}px;
        `,"aria-label":(0,p.t)("Show entries per page"),children:e.map(e=>{let[t,r]=Array.isArray(e)?e:[e,e];return(0,l.Y)(n,{value:Number(t),children:r},t)})})," ",(0,p.t)("entries per page")]})}let eA=e=>e?(0,p.t)("No matching records found"):(0,p.t)("No records found");function eO(e){let{timeGrain:t,height:r,width:n,data:c,totals:s,isRawRecords:u,rowCount:d=0,columns:k,alignPositiveNegative:$=!1,colorPositiveNegative:I=!1,includeSearch:L=!1,pageSize:z=0,serverPagination:D=!1,serverPaginationData:R,setDataMask:j,showCellBars:B=!0,sortDesc:U=!1,filters:_,sticky:G=!0,columnColorFormatters:W,allowRearrangeColumns:X=!1,allowRenderHtml:V=!0,onContextMenu:K,emitCrossFilters:Q,isUsingTimeComparison:Z,basicColorFormatters:q,basicColorColumnFormatters:ee,hasServerPageLengthChanged:et,serverPageLength:er,slice_id:en}=e,el=(0,o.useMemo)(()=>[{key:"all",label:(0,p.t)("Display all")},{key:"#",label:"#"},{key:"△",label:"△"},{key:"%",label:"%"}],[]),eo=(0,o.useCallback)(e=>(0,f.PT)(t)(e),[t]),[ea,ec]=(0,o.useState)({width:0,height:0}),[es,eu]=(0,o.useState)(!1),[ed,ef]=(0,o.useState)(!1),[eg,ex]=(0,o.useState)([el[0].key]),[eO,eN]=(0,o.useState)([]),eT=(0,b.DP)(),eY=(0,o.useMemo)(()=>(D?ei.D:ei.x).filter(([e])=>D?e<=d:e<=2*c.length),[c.length,d,D]),e$=(0,o.useCallback)(function(e,t){let r=null==c?void 0:c.map(t=>null==t?void 0:t[e]).filter(e=>"number"==typeof e);return c&&r.length===c.length?t?[0,(0,i.A)(r.map(Math.abs))]:(0,a.A)(r):null},[c]),eM=(0,o.useCallback)(function(e,t){var r;return!!_&&(null==(r=_[e])?void 0:r.includes(t))},[_]),eI=(0,o.useCallback)((e,r)=>{let n=eb({},_);Array.isArray((n=_&&eM(e,r)?{}:{[e]:[r]})[e])&&0===n[e].length&&delete n[e];let l=Object.keys(n),o=Object.values(n),i=[];return l.forEach(e=>{let t=e===g.Tf,r=(0,m.A)(null==n?void 0:n[e]);if(r.length){let e=r.map(e=>t?eo(e):e);i.push(`${e.join(", ")}`)}}),{dataMask:{extraFormData:{filters:0===l.length?[]:l.map(e=>{let r=(0,m.A)(null==n?void 0:n[e]);return r.length?{col:e,op:"IN",val:r.map(e=>e instanceof Date?e.getTime():e),grain:e===g.Tf?t:void 0}:{col:e,op:"IS NULL"}})},filterState:{label:i.join(", "),value:o.length?o:null,filters:n&&Object.keys(n).length?n:null}},isCurrentValueSelected:eM(e,r)}},[_,eM,eo,t]),eF=(0,o.useCallback)(function(e,t){Q&&j(eI(e,t).dataMask)},[Q,eI,j]),eL=(0,o.useCallback)(e=>{let{isNumeric:t,config:r={}}=e;return{textAlign:r.horizontalAlign||(t&&!Z?"right":"left")}},[Z]),eH=(0,o.useMemo)(()=>[(0,p.t)("Main"),"#","△","%"],[]),eP=(0,o.useMemo)(()=>{if(!Z)return k;let e=el[0].key,t=eH[0],r=eg.includes(e);return k.filter(({label:e,key:n})=>{let l=n.substring(e.length),o=eO.includes(l);return e===t||!o&&(!eH.includes(e)||r||eg.includes(e))})},[k,el,eH,Z,eO,eg]),ez=(0,o.useMemo)(()=>{if(K&&!u)return(e,t,r,n)=>{let l=[];eP.forEach(t=>{if(!t.isMetric){let r=e[t.key];r=(0,y.y4)(r),l.push({col:t.key,op:"==",val:r,formattedVal:ey(t,r)[1]})}}),K(r,n,{drillToDetail:l,crossFilter:t.isMetric?void 0:eI(t.key,t.value),drillBy:t.isMetric?void 0:{filters:[{col:t.key,op:"==",val:(0,y.y4)(t.value)}],groupbyFieldName:"groupby"}})}},[K,u,eP,eI]),eD=(0,o.useCallback)((e,t)=>{let r={};return t&&e.forEach((e,t)=>{if(eH.includes(e.label)){let n=e.key.substring(e.label.length);r[n]?r[n].push(t):r[n]=[t]}}),r},[eH]),eR=(0,o.useMemo)(()=>eD(eP,Z),[eP,eD,Z]),ej=(0,o.useCallback)((e,t)=>{var r;let{key:n,label:o,dataType:i,isMetric:a,isPercentMetric:c,config:d={}}=e,f=d.customColumnName||o,g=f;["#","△","%",(0,p.t)("Main")].includes(e.label)&&(e.label===(0,p.t)("Main")?g=d.customColumnName||e.originalLabel||"":d.customColumnName?g=!1!==d.displayTypeIcon?`${e.label} ${d.customColumnName}`:d.customColumnName:!1===d.displayTypeIcon&&(g=""));let m=Number.isNaN(Number(d.columnWidth))?d.columnWidth:Number(d.columnWidth),y=eL(e),k=void 0===d.alignPositiveNegative?$:d.alignPositiveNegative,x=void 0===d.colorPositiveNegative?I:d.colorPositiveNegative,{truncateLongCells:E}=d,A=Array.isArray(W)&&W.length>0,O=Z&&Array.isArray(q)&&q.length>0,N=!O&&!A&&(void 0===d.showCellBars?B:d.showCellBars)&&(a||u||c)&&e$(n,k),T="";if(Q&&!a&&(T+=" dt-is-filter"),a||c){if(eH.includes(f)){let e=eR[n.substring(f.length)]||[];t===e[e.length-1]&&(T+=" right-border-only")}}else T+=" right-border-only";let M=eS(null!=(r=e.originalLabel)?r:e.key);return{id:String(t),columnKey:n,accessor:e=>e[n],Cell:({value:t,row:r})=>{var o,i,c,s,u,d;let p,f,[g,S]=ey(e,t),C=g&&V?{__html:S}:void 0,Y="",$=e.key.substring(e.label.length).trim();if(!A&&O&&(p=null==(i=q[r.index][$])?void 0:i.backgroundColor,Y=e.label===eH[0]?null==(c=q[r.index][$])?void 0:c.mainArrow:""),A){let n=(e,t)=>{if(null==t)return;let r=e.getColorFromValue(t);r&&(e.toTextColor?f=r.slice(0,-2):p=r)};W.filter(t=>t.column===e.key).forEach(e=>n(e,t)),W.filter(e=>e.toAllRow).forEach(e=>n(e,r.original[e.column]))}ee&&(null==ee?void 0:ee.length)>0&&(p=(null==(s=ee[r.index][e.key])?void 0:s.backgroundColor)||p,Y=e.label===eH[0]?null==(u=ee[r.index][e.key])?void 0:u.mainArrow:"");let I=b.I4.td`
            color: ${f?`${f}FF`:eT.colorText};
            text-align: ${y.textAlign};
            white-space: ${t instanceof Date?"nowrap":void 0};
            position: relative;
            background: ${p||void 0};
            padding-left: ${e.isChildColumn?`${5*eT.sizeUnit}px`:`${eT.sizeUnit}px`};
          `,F=(0,w.AH)`
            position: absolute;
            height: 100%;
            display: block;
            top: 0;
            ${N&&`
                width: ${function({value:e,valueRange:t,alignPositiveNegative:r}){let[n,l]=t;return r?Math.abs(Math.round(e/l*100)):Math.round(Math.abs(e)/(Math.abs(Math.max(l,0))+Math.abs(Math.min(n,0)))*100)}({value:t,valueRange:N,alignPositiveNegative:k})}%;
                left: ${function({value:e,valueRange:t,alignPositiveNegative:r}){if(r)return 0;let[n,l]=t,o=Math.abs(Math.min(n,0));return Math.round(Math.min(o+e,o)/(Math.abs(Math.max(l,0))+o)*100)}({value:t,valueRange:N,alignPositiveNegative:k})}%;
                background-color: ${function({value:e,colorPositiveNegative:t=!1,theme:r}){return t?e<0?`${r.colorError}50`:`${r.colorSuccess}50`:`${r.colorFill}`}({value:t,colorPositiveNegative:x,theme:eT})};
              `}
          `,L=(0,w.AH)`
            color: ${q&&(null==(o=q[r.index][$])?void 0:o.arrowColor)===P.m.Green?eT.colorSuccess:eT.colorError};
            margin-right: ${eT.sizeUnit}px;
          `;ee&&(null==ee?void 0:ee.length)>0&&(L=(0,w.AH)`
              color: ${(null==(d=ee[r.index][e.key])?void 0:d.arrowColor)===P.m.Green?eT.colorSuccess:eT.colorError};
              margin-right: ${eT.sizeUnit}px;
            `);let H={"aria-labelledby":`header-${M}`,role:"cell",title:"number"==typeof t?String(t):void 0,onClick:!Q||N||a?void 0:()=>{(0,v.j)()||eF(n,t)},onContextMenu:e=>{ez&&(e.preventDefault(),e.stopPropagation(),ez(r.original,{key:n,value:t,isMetric:a},e.nativeEvent.clientX,e.nativeEvent.clientY))},className:[T,null==t||t instanceof em.A&&null==t.input?"dt-is-null":"",eM(n,t)?" dt-is-active-filter":""].join(" "),tabIndex:0};return C?E?(0,l.Y)(I,eb({},H,{children:(0,l.Y)("div",{className:"dt-truncate-cell",style:m?{width:m}:void 0,dangerouslySetInnerHTML:C})})):(0,l.Y)(I,eb({},H,{dangerouslySetInnerHTML:C})):(0,l.FD)(I,eb({},H,{children:[N&&(0,l.Y)("div",{className:h()("cell-bar","number"==typeof t&&t<0?"negative":"positive"),css:F,role:"presentation"}),E?(0,l.FD)("div",{className:"dt-truncate-cell",style:m?{width:m}:void 0,children:[Y&&(0,l.Y)("span",{css:L,children:Y}),S]}):(0,l.FD)(l.FK,{children:[Y&&(0,l.Y)("span",{css:L,children:Y}),S]})]}))},Header:({column:e,onClick:t,style:r,onDragStart:n,onDrop:o})=>(0,l.FD)("th",eb({id:`header-${M}`,title:(0,p.t)("Shift + Click to sort by multiple columns"),className:[T,e.isSorted?"is-sorted":""].join(" "),style:eb({},y,r),onKeyDown:t=>{Object.values(ew).includes(t.key)&&e.toggleSortBy()},role:"columnheader button",onClick:t,"data-column-name":e.id},X&&{draggable:"true",onDragStart:n,onDragOver:e=>e.preventDefault(),onDragEnter:e=>e.preventDefault(),onDrop:o},{tabIndex:0,children:[d.columnWidth?(0,l.Y)("div",{style:{width:m,height:.01}}):null,(0,l.FD)("div",{"data-column-name":e.id,css:{display:"inline-flex",alignItems:"flex-end"},children:[(0,l.Y)("span",{"data-column-name":e.id,children:g}),(0,l.Y)(ek,{column:e})]})]})),Footer:s?0===t?(0,l.Y)("th",{children:(0,l.FD)("div",{css:(0,w.AH)`
                  display: flex;
                  align-items: center;
                  & svg {
                    margin-left: ${eT.sizeUnit}px;
                    color: ${eT.colorBorder} !important;
                  }
                `,children:[(0,p.t)("Summary"),(0,l.Y)(C.m,{overlay:(0,p.t)("Show total aggregations of selected metrics. Note that row limit does not apply to the result."),children:(0,l.Y)(Y.A,{})})]})},`footer-summary-${t}`):(0,l.Y)("td",{style:y,children:(0,l.Y)("strong",{children:ey(e,s[n])[1]})},`footer-total-${t}`):void 0,sortDescFirst:U,sortType:i===S.GenericDataType.Temporal?"datetime":i===S.GenericDataType.String?"alphanumeric":"basic"}},[eL,$,I,W,Z,q,B,u,e$,Q,eH,s,eT,U,eR,V,ee,eM,eF,ez,X]),eB=(0,o.useMemo)(()=>eP.filter(e=>{var t;return(null==(t=e.config)?void 0:t.visible)!==!1}),[eP]),eU=(0,o.useMemo)(()=>eB.map(ej),[eB,ej]),[e_,eG]=(0,o.useState)([]);(0,o.useEffect)(()=>{let e=eU.filter(e=>(null==e?void 0:e.sortType)==="alphanumeric").map(e=>({value:e.columnKey,label:e.columnKey}));H()(e,e_)||eG(e||[])},[eU,e_]);let eW=(0,o.useCallback)((e,t)=>{let r=eb({},R,{currentPage:e,pageSize:t});(0,ev.F)(j,r)},[R,j]);(0,o.useEffect)(()=>{if(et){let e=eb({},R,{currentPage:0,pageSize:er});(0,ev.F)(j,e)}},[et,er,R,j]);let eX=(0,o.useCallback)(({width:e,height:t})=>{ec({width:e,height:t})},[]);(0,o.useLayoutEffect)(()=>{let e=J(),{width:t,height:l}=ea;n-t>e||r-l>e?eX({width:n-e,height:r-e}):(t-n>e||l-r>e)&&eX({width:n,height:r})},[n,r,eX,ea]);let{width:eV,height:eK}=ea,eQ=(0,o.useCallback)(e=>{if(!D)return;let t=eb({},R,{sortBy:e});(0,ev.F)(j,t)},[D,R,j]),eZ=F()(e=>{var t;let r=eb({},R,{searchColumn:(null==R?void 0:R.searchColumn)||(null==(t=e_[0])?void 0:t.value),searchText:e,currentPage:0});(0,ev.F)(j,r)},800);return(0,l.Y)(ep,{children:(0,l.Y)(eh,{columns:eU,data:c,rowCount:d,tableClassName:"table table-striped table-condensed",pageSize:z,serverPaginationData:R,pageSizeOptions:eY,width:eV,height:eK,serverPagination:D,onServerPaginationChange:eW,onColumnOrderChange:()=>eu(!es),initialSearchText:(null==R?void 0:R.searchText)||"",sortByFromParent:(null==R?void 0:R.sortBy)||[],searchInputId:`${en}-search`,maxPageItemCount:n>340?9:7,noResults:eA,searchInput:L&&eC,selectPageSize:null!==z&&eE,sticky:G,renderGroupingHeaders:M()(eR)?void 0:()=>{let e=[],t=0;return Object.entries(eR||{}).forEach(([r,n])=>{var o;let i=n[0],a=n.length,c=eP[i],s=c&&(null==(o=k.find(e=>e.key===c.key))?void 0:o.originalLabel)||r;for(let r=t;r<i;r+=1)e.push((0,l.Y)("th",{style:{borderBottom:0},"aria-label":`Header-${r}`},`placeholder-${r}`));e.push((0,l.FD)("th",{colSpan:a,style:{borderBottom:0},children:[s,(0,l.Y)("span",{css:(0,w.AH)`
              float: right;
              & svg {
                color: ${eT.colorIcon} !important;
              }
            `,children:eO.includes(r)?(0,l.Y)(N.A,{onClick:()=>eN(eO.filter(e=>e!==r))}):(0,l.Y)(T.A,{onClick:()=>eN([...eO,r])})})]},`header-${r}`)),t=i+a}),(0,l.Y)("tr",{css:(0,w.AH)`
          th {
            border-right: 1px solid ${eT.colorSplit};
          }
          th:first-child {
            border-left: none;
          }
          th:last-child {
            border-right: none;
          }
        `,children:e})},renderTimeComparisonDropdown:Z?()=>{let e=el[0].key;return(0,l.Y)(x.ms,{placement:"bottomRight",open:ed,onOpenChange:e=>{ef(e)},menu:{multiple:!0,onClick:t=>{let{key:r}=t;r===e?ex([e]):eg.includes(e)?ex([r]):ex(eg.includes(r)?eg.filter(e=>e!==r):[...eg,r])},onBlur:()=>{3===eg.length&&ex([el[0].key])},selectedKeys:eg,items:[{key:"all",label:(0,l.Y)("div",{css:(0,w.AH)`
                    max-width: 242px;
                    padding: 0 ${2*eT.sizeUnit}px;
                    color: ${eT.colorText};
                    font-size: ${eT.fontSizeSM}px;
                  `,children:(0,p.t)("Select columns that will be displayed in the table. You can multiselect columns.")}),type:"group",children:el.map(e=>({key:e.key,label:(0,l.FD)(l.FK,{children:[(0,l.Y)("span",{css:(0,w.AH)`
                          color: ${eT.colorText};
                        `,children:e.label}),(0,l.Y)("span",{css:(0,w.AH)`
                          float: right;
                          font-size: ${eT.fontSizeSM}px;
                        `,children:eg.includes(e.key)&&(0,l.Y)(E.A,{})})]})}))}]},trigger:["click"],children:(0,l.FD)("span",{children:[(0,l.Y)(A.A,{})," ",(0,l.Y)(O.A,{})]})})}:void 0,handleSortByChange:eQ,onSearchColChange:e=>{if(!H()(e,null==R?void 0:R.searchColumn)){let t=eb({},R,{searchColumn:e,searchText:""});(0,ev.F)(j,t)}},manualSearch:D,onSearchChange:eZ,searchOptions:e_})})}},51545:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>a,cG:()=>o});var n=r(70731),l=r.n(n);let o={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},i=(e,t)=>String(e.rankedValue).localeCompare(String(t.rankedValue));function a(e,t,r){void 0===r&&(r={});let{keys:n,threshold:l=o.MATCHES,baseSort:a=i,sorter:s=e=>e.sort((e,t)=>(function(e,t,r){let{rank:n,keyIndex:l}=e,{rank:o,keyIndex:i}=t;return n!==o?n>o?-1:1:l===i?r(e,t):l<i?-1:1})(e,t,a))}=r;return s(e.reduce(function(e,i,a){var s,d,h,p;let f=(s=i,d=n,h=t,p=r,d?(function(e,t){let r=[];for(let l=0,o=t.length;l<o;l++){var n;let o=t[l],i="string"==typeof(n=o)?u:{...u,...n},a=function(e,t){let r;if("object"==typeof t&&(t=t.key),"function"==typeof t)r=t(e);else if(null==e)r=null;else if(Object.hasOwnProperty.call(e,t))r=e[t];else{if(t.includes("."))return function(e,t){let r=e.split("."),n=[t];for(let e=0,t=r.length;e<t;e++){let t=r[e],l=[];for(let e=0,r=n.length;e<r;e++){let r=n[e];if(null!=r)if(Object.hasOwnProperty.call(r,t)){let e=r[t];null!=e&&l.push(e)}else"*"===t&&(l=l.concat(r))}n=l}return Array.isArray(n[0])?[].concat(...n):n}(t,e);r=null}return null==r?[]:Array.isArray(r)?r:[String(r)]}(e,o);for(let e=0,t=a.length;e<t;e++)r.push({itemValue:a[e],attributes:i})}return r})(s,d).reduce((e,t,r)=>{let{rank:n,rankedValue:l,keyIndex:i,keyThreshold:a}=e,{itemValue:s,attributes:u}=t,d=c(s,h,p),f=l,{minRanking:g,maxRanking:m,threshold:y}=u;return d<g&&d>=o.MATCHES?d=g:d>m&&(d=m),d>n&&(n=d,i=r,a=y,f=s),{rankedValue:f,rank:n,keyIndex:i,keyThreshold:a}},{rankedValue:s,rank:o.NO_MATCH,keyIndex:-1,keyThreshold:p.threshold}):{rankedValue:s,rank:c(s,h,p),keyIndex:-1,keyThreshold:p.threshold}),{rank:g,keyThreshold:m=l}=f;return g>=m&&e.push({...f,item:i,index:a}),e},[])).map(e=>{let{item:t}=e;return t})}function c(e,t,r){let n;return(e=s(e,r),(t=s(t,r)).length>e.length)?o.NO_MATCH:e===t?o.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?o.EQUAL:e.startsWith(t)?o.STARTS_WITH:e.includes(` ${t}`)?o.WORD_STARTS_WITH:e.includes(t)?o.CONTAINS:1===t.length?o.NO_MATCH:(n="",e.split(" ").forEach(e=>{e.split("-").forEach(e=>{n+=e.substr(0,1)})}),n).includes(t)?o.ACRONYM:function(e,t){var r;let n,l=0,i=0;function a(e,t,r){for(let n=r,o=t.length;n<o;n++)if(t[n]===e)return l+=1,n+1;return -1}let c=a(t[0],e,0);if(c<0)return o.NO_MATCH;i=c;for(let r=1,n=t.length;r<n;r++)if(!((i=a(t[r],e,i))>-1))return o.NO_MATCH;return r=i-c,n=l/t.length,o.MATCHES+1/r*n}(e,t)}function s(e,t){let{keepDiacritics:r}=t;return e=`${e}`,r||(e=l()(e)),e}a.rankings=o;let u={maxRanking:1/0,minRanking:-1/0}},69856:(e,t,r)=>{var n=r(75972).k5;e.exports.M=function(e){return n({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"}}]})(e)}},70731:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ả:"A",Ạ:"A",Ẩ:"A",Ẫ:"A",Ậ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ể:"E",Ễ:"E",Ệ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ỉ:"I",Ị:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ỏ:"O",Ọ:"O",Ổ:"O",Ỗ:"O",Ộ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ớ:"O",Ợ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ủ:"U",Ụ:"U",Ử:"U",Ữ:"U",Ự:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ả:"a",ạ:"a",ẩ:"a",ẫ:"a",ậ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ẻ:"e",ẽ:"e",ẹ:"e",ể:"e",ễ:"e",ệ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ỉ:"i",ị:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ỏ:"o",ọ:"o",ổ:"o",ỗ:"o",ộ:"o",ờ:"o",ở:"o",ỡ:"o",ớ:"o",ợ:"o",ù:"u",ú:"u",û:"u",ü:"u",ủ:"u",ụ:"u",ử:"u",ữ:"u",ự:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z",й:"и",Й:"И",ё:"е",Ё:"Е"},r=Object.keys(t).join("|"),n=RegExp(r,"g"),l=RegExp(r,"");function o(e){return t[e]}var i=function(e){return e.replace(n,o)};e.exports=i,e.exports.has=function(e){return!!e.match(l)},e.exports.remove=i},75972:(e,t,r)=>{"use strict";r.d(t,{k5:()=>s});var n=r(24002),l=r.n(n),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=l().createContext&&l().createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function s(e){return function(t){return l().createElement(u,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return l().createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var r,n=e.attr,o=e.size,i=e.title,s=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),l().createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&l().createElement("title",null,i),e.children)};return void 0!==i?l().createElement(i.Consumer,null,function(e){return t(e)}):t(o)}},77796:(e,t,r)=>{var n=r(75972).k5;e.exports.G=function(e){return n({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"}}]})(e)}},87962:(e,t,r)=>{"use strict";r.d(t,{v:()=>n});let n=r(24002).memo},99562:(e,t,r)=>{"use strict";r.d(t,{j:()=>n});let n=()=>{var e;return null==(e=window.getSelection())?void 0:e.toString()}}}]);