"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4096],{14096:(t,e,r)=>{r.r(e),r.d(e,{default:()=>tt});var l=r(2445),o=r(24002),a=r(55140),s=r(65765),n=r(91054),i=r(59927),u=r(6603),h=r(57513),c=r(21157),p=r(99562),d=r(99247),g=r(21346),b=r(5556),f=r.n(b);function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t}).apply(this,arguments)}let v=function(t,e,r){let l=String(t).split("."),o=l[0],a=l.length>1?r+l[1]:"",s=/(\d+)(\d{3})/;for(;s.test(o);)o=o.replace(s,`$1${e}$2`);return o+a},y=function(t){let e=m({},{digitsAfterDecimal:2,scaler:1,thousandsSep:",",decimalSep:".",prefix:"",suffix:""},t);return function(t){if(Number.isNaN(t)||!Number.isFinite(t))return"";let r=v((e.scaler*t).toFixed(e.digitsAfterDecimal),e.thousandsSep,e.decimalSep);return`${e.prefix}${r}${e.suffix}`}},w=/(\d+)|(\D+)/g,S=/\d/,k=/^0/,O=(t,e)=>{if(null!==e&&null===t)return -1;if(null!==t&&null===e)return 1;if("number"==typeof t&&Number.isNaN(t))return -1;if("number"==typeof e&&Number.isNaN(e))return 1;let r=Number(t),l=Number(e);if(r<l)return -1;if(r>l)return 1;if("number"==typeof t&&"number"!=typeof e)return -1;if("number"==typeof e&&"number"!=typeof t)return 1;if("number"==typeof t&&"number"==typeof e)return 0;if(Number.isNaN(l)&&!Number.isNaN(r))return -1;if(Number.isNaN(r)&&!Number.isNaN(l))return 1;let o=String(t),a=String(e);if(o===a)return 0;if(!S.test(o)||!S.test(a))return o>a?1:-1;for(o=o.match(w),a=a.match(w);o.length&&a.length;){let t=o.shift(),e=a.shift();if(t!==e){if(S.test(t)&&S.test(e))return t.replace(k,".0")-e.replace(k,".0");return t>e?1:-1}}return o.length-a.length},T=function(t){let e={},r={};return t.forEach((t,l)=>{e[t]=l,"string"==typeof t&&(r[t.toLowerCase()]=l)}),function(t,l){return t in e&&l in e?e[t]-e[l]:t in e?-1:l in e?1:t in r&&l in r?r[t]-r[l]:t in r?-1:l in r?1:O(t,l)}},C=function(t,e){if(t){if("function"==typeof t){let r=t(e);if("function"==typeof r)return r}else if(e in t)return t[e]}return O},N=y(),x=y({digitsAfterDecimal:0}),A=y({digitsAfterDecimal:1,scaler:100,suffix:"%"}),M=t=>e=>"string"==typeof e?e:t(e),R={count:(t=x)=>()=>function(){return{count:0,push(){this.count+=1},value(){return this.count},format:t}},uniques:(t,e=x)=>function([r]){return function(){return{uniq:[],push(t){Array.from(this.uniq).includes(t[r])||this.uniq.push(t[r])},value(){return t(this.uniq)},format:M(e),numInputs:+(void 0===r)}}},sum:(t=N)=>function([e]){return function(){return{sum:0,push(t){Number.isNaN(Number(t[e]))?this.sum=t[e]:this.sum+=parseFloat(t[e])},value(){return this.sum},format:M(t),numInputs:+(void 0===e)}}},extremes:(t,e=N)=>function([r]){return function(l){return{val:null,sorter:C(void 0!==l?l.sorters:null,r),push(e){let l=e[r];if(["min","max"].includes(t)){let e=Number(l);Number.isNaN(e)?this.val=!this.val||"min"===t&&l<this.val||"max"===t&&l>this.val?l:this.val:this.val=Math[t](e,null!==this.val?this.val:e)}else"first"===t&&0>=this.sorter(l,null!==this.val?this.val:l)?this.val=l:"last"===t&&this.sorter(l,null!==this.val?this.val:l)>=0&&(this.val=l)},value(){return this.val},format:t=>"number"==typeof t?e(t):t,numInputs:+(void 0===r)}}},quantile:(t,e=N)=>function([r]){return function(){return{vals:[],strMap:{},push(t){let e=t[r],l=Number(e);Number.isNaN(l)?this.strMap[e]=(this.strMap[e]||0)+1:this.vals.push(l)},value(){if(0===this.vals.length&&0===Object.keys(this.strMap).length)return null;if(Object.keys(this.strMap).length){let t=Math.floor(Object.values(this.strMap).sort((t,e)=>t-e).length/2),e=Object.keys(this.strMap);return e.length%2!=0?e[t]:(e[t-1]+e[t])/2}this.vals.sort((t,e)=>t-e);let e=(this.vals.length-1)*t;return(this.vals[Math.floor(e)]+this.vals[Math.ceil(e)])/2},format:M(e),numInputs:+(void 0===r)}}},runningStat:(t="mean",e=1,r=N)=>function([l]){return function(){return{n:0,m:0,s:0,strValue:null,push(t){let e=Number(t[l]);if(Number.isNaN(e)){this.strValue="string"==typeof t[l]?t[l]:this.strValue;return}this.n+=1,1===this.n&&(this.m=e);let r=this.m+(e-this.m)/this.n;this.s+=(e-this.m)*(e-r),this.m=r},value(){if(this.strValue)return this.strValue;if("mean"===t)return 0===this.n?0/0:this.m;if(this.n<=e)return 0;switch(t){case"var":return this.s/(this.n-e);case"stdev":return Math.sqrt(this.s/(this.n-e));default:throw Error("unknown mode for runningStat")}},format:M(r),numInputs:+(void 0===l)}}},sumOverSum:(t=N)=>function([e,r]){return function(){return{sumNum:0,sumDenom:0,push(t){Number.isNaN(Number(t[e]))||(this.sumNum+=parseFloat(t[e])),Number.isNaN(Number(t[r]))||(this.sumDenom+=parseFloat(t[r]))},value(){return this.sumNum/this.sumDenom},format:t,numInputs:2*(void 0===e||void 0===r)}}},fractionOf:(t,e="total",r=A)=>(...l)=>function(o,a,s){return{selector:({total:[[],[]],row:[a,[]],col:[[],s]})[e],inner:t(...Array.from(l||[]))(o,a,s),push(t){this.inner.push(t)},format:M(r),value(){let t=o.getAggregator(...Array.from(this.selector||[])).inner.value();return"string"==typeof t?t:this.inner.value()/t},numInputs:t(...Array.from(l||[]))().numInputs}}},$=m({},R,{countUnique:t=>R.uniques(t=>t.length,t),listUnique:(t,e)=>R.uniques(e=>e.join(t),e||(t=>t)),max:t=>R.extremes("max",t),min:t=>R.extremes("min",t),first:t=>R.extremes("first",t),last:t=>R.extremes("last",t),median:t=>R.quantile(.5,t),average:t=>R.runningStat("mean",1,t),var:(t,e)=>R.runningStat("var",t,e),stdev:(t,e)=>R.runningStat("stdev",t,e)}),F={Count:$.count(x),"Count Unique Values":$.countUnique(x),"List Unique Values":$.listUnique(", "),Sum:$.sum(N),"Integer Sum":$.sum(x),Average:$.average(N),Median:$.median(N),"Sample Variance":$.var(1,N),"Sample Standard Deviation":$.stdev(1,N),Minimum:$.min(N),Maximum:$.max(N),First:$.first(N),Last:$.last(N),"Sum over Sum":$.sumOverSum(N),"Sum as Fraction of Total":$.fractionOf($.sum(),"total",A),"Sum as Fraction of Rows":$.fractionOf($.sum(),"row",A),"Sum as Fraction of Columns":$.fractionOf($.sum(),"col",A),"Count as Fraction of Total":$.fractionOf($.count(),"total",A),"Count as Fraction of Rows":$.fractionOf($.count(),"row",A),"Count as Fraction of Columns":$.fractionOf($.count(),"col",A)},H=t=>t.join("\0");class _{getFormattedAggregator(t,e){if(!this.formattedAggregators)return this.aggregator;let[r,l]=Object.entries(t).find(([t,e])=>this.formattedAggregators[t]&&this.formattedAggregators[t][e])||[];return r&&l&&(!e||e.includes(l))&&this.formattedAggregators[r][l]||this.aggregator}arrSort(t,e,r=!1){let l=t.map(t=>C(this.props.sorters,t));return function(t,o){let a=Math.min(t.length,o.length);for(let e=0;e<a;e+=1){let a=l[e],s=r?a(o[e],t[e]):a(t[e],o[e]);if(0!==s)return s}return e?t.length-o.length:o.length-t.length}}sortKeys(){if(!this.sorted){this.sorted=!0;let t=(t,e)=>this.getAggregator(t,e).value();switch(this.props.rowOrder){case"key_z_to_a":this.rowKeys.sort(this.arrSort(this.props.rows,this.subtotals.rowPartialOnTop,!0));break;case"value_a_to_z":this.rowKeys.sort((e,r)=>O(t(e,[]),t(r,[])));break;case"value_z_to_a":this.rowKeys.sort((e,r)=>-O(t(e,[]),t(r,[])));break;default:this.rowKeys.sort(this.arrSort(this.props.rows,this.subtotals.rowPartialOnTop))}switch(this.props.colOrder){case"key_z_to_a":this.colKeys.sort(this.arrSort(this.props.cols,this.subtotals.colPartialOnTop,!0));break;case"value_a_to_z":this.colKeys.sort((e,r)=>O(t([],e),t([],r)));break;case"value_z_to_a":this.colKeys.sort((e,r)=>-O(t([],e),t([],r)));break;default:this.colKeys.sort(this.arrSort(this.props.cols,this.subtotals.colPartialOnTop))}}}getColKeys(){return this.sortKeys(),this.colKeys}getRowKeys(){return this.sortKeys(),this.rowKeys}processRecord(t){let e,r,l=[],o=[];this.props.cols.forEach(e=>{l.push(e in t?t[e]:"null")}),this.props.rows.forEach(e=>{o.push(e in t?t[e]:"null")}),this.allTotal.push(t);let a=this.subtotals.rowEnabled?1:Math.max(1,o.length),s=this.subtotals.colEnabled?1:Math.max(1,l.length);for(let r=a;r<=o.length;r+=1){e=r<o.length;let l=o.slice(0,r),a=H(l);this.rowTotals[a]||(this.rowKeys.push(l),this.rowTotals[a]=this.getFormattedAggregator(t,o)(this,l,[])),this.rowTotals[a].push(t),this.rowTotals[a].isSubtotal=e}for(let e=s;e<=l.length;e+=1){r=e<l.length;let o=l.slice(0,e),a=H(o);this.colTotals[a]||(this.colKeys.push(o),this.colTotals[a]=this.getFormattedAggregator(t,l)(this,[],o)),this.colTotals[a].push(t),this.colTotals[a].isSubtotal=r}for(let n=a;n<=o.length;n+=1){e=n<o.length;let a=o.slice(0,n),i=H(a);this.tree[i]||(this.tree[i]={});for(let o=s;o<=l.length;o+=1){r=o<l.length;let s=l.slice(0,o),n=H(s);this.tree[i][n]||(this.tree[i][n]=this.getFormattedAggregator(t)(this,a,s)),this.tree[i][n].push(t),this.tree[i][n].isRowSubtotal=e,this.tree[i][n].isColSubtotal=r,this.tree[i][n].isSubtotal=e||r}}}getAggregator(t,e){let r=H(t),l=H(e);return(0===t.length&&0===e.length?this.allTotal:0===t.length?this.colTotals[l]:0===e.length?this.rowTotals[r]:this.tree[r][l])||{value:()=>null,format:()=>""}}constructor(t={},e={}){this.props=m({},_.defaultProps,t),this.processRecord=this.processRecord.bind(this),f().checkPropTypes(_.propTypes,this.props,"prop","PivotData"),this.aggregator=this.props.aggregatorsFactory(this.props.defaultFormatter)[this.props.aggregatorName](this.props.vals),this.formattedAggregators=this.props.customFormatters&&Object.entries(this.props.customFormatters).reduce((t,[e,r])=>(t[e]={},Object.entries(r).forEach(([r,l])=>{t[e][r]=this.props.aggregatorsFactory(l)[this.props.aggregatorName](this.props.vals)}),t),{}),this.tree={},this.rowKeys=[],this.colKeys=[],this.rowTotals={},this.colTotals={},this.allTotal=this.aggregator(this,[],[]),this.subtotals=e,this.sorted=!1,_.forEachRecord(this.props.data,this.processRecord)}}_.forEachRecord=function(t,e){if(Array.isArray(t))return t.map(t=>e(t));throw Error((0,n.t)("Unknown input format"))},_.defaultProps={aggregators:F,cols:[],rows:[],vals:[],aggregatorName:"Count",sorters:{},rowOrder:"key_a_to_z",colOrder:"key_a_to_z"},_.propTypes={data:f().oneOfType([f().array,f().object,f().func]).isRequired,aggregatorName:f().string,cols:f().arrayOf(f().string),rows:f().arrayOf(f().string),vals:f().arrayOf(f().string),valueFilter:f().objectOf(f().objectOf(f().bool)),sorters:f().oneOfType([f().func,f().objectOf(f().func)]),derivedAttributes:f().objectOf(f().func),rowOrder:f().oneOf(["key_a_to_z","key_z_to_a","value_a_to_z","value_z_to_a"]),colOrder:f().oneOf(["key_a_to_z","key_z_to_a","value_a_to_z","value_z_to_a"])};var j=r(46597),P=r(17437);let E=g.I4.div`
  ${({theme:t,isDashboardEditMode:e})=>(0,P.AH)`
    table.pvtTable {
      position: ${e?"inherit":"relative"};
      width: calc(100% - ${t.sizeUnit}px);
      font-size: ${t.fontSizeSM}px;
      text-align: left;
      margin: ${t.sizeUnit}px;
      border-collapse: separate;
      font-family: ${t.fontFamily};
      line-height: 1.4;
    }

    table thead {
      background-color: ${t.colorBgBase};
      position: ${e?"inherit":"sticky"};
      top: 0;
    }

    table tbody tr {
      font-feature-settings: 'tnum' 1;
    }

    table.pvtTable thead tr th,
    table.pvtTable tbody tr th {
      border-top: 1px solid ${t.colorSplit};
      border-left: 1px solid ${t.colorSplit};
      font-size: ${t.fontSizeSM}px;
      padding: ${t.sizeUnit}px;
      font-weight: ${t.fontWeightNormal};
    }

    table.pvtTable tbody tr.pvtRowTotals {
      position: ${e?"inherit":"sticky"};
      bottom: 0;
    }

    table.pvtTable thead tr:last-of-type th,
    table.pvtTable thead tr:first-of-type th.pvtTotalLabel,
    table.pvtTable thead tr:nth-last-of-type(2) th.pvtColLabel,
    table.pvtTable thead th.pvtSubtotalLabel,
    table.pvtTable tbody tr:last-of-type th,
    table.pvtTable tbody tr:last-of-type td {
      border-bottom: 1px solid ${t.colorSplit};
    }

    table.pvtTable
      thead
      tr:last-of-type:not(:only-child)
      th.pvtAxisLabel
      ~ th.pvtColLabel,
    table.pvtTable tbody tr:first-of-type th,
    table.pvtTable tbody tr:first-of-type td {
      border-top: none;
    }

    table.pvtTable tbody tr td:last-of-type,
    table.pvtTable thead tr th:last-of-type:not(.pvtSubtotalLabel) {
      border-right: 1px solid ${t.colorSplit};
    }

    table.pvtTable
      thead
      tr:last-of-type:not(:only-child)
      th.pvtAxisLabel
      + .pvtTotalLabel {
      border-right: none;
    }

    table.pvtTable tr th.active {
      background-color: ${t.colorPrimaryBg};
    }

    table.pvtTable .pvtTotalLabel {
      text-align: right;
      font-weight: ${t.fontWeightStrong};
    }

    table.pvtTable .pvtSubtotalLabel {
      font-weight: ${t.fontWeightStrong};
    }

    table.pvtTable tbody tr td {
      color: ${t.colorPrimaryText};
      padding: ${t.sizeUnit}px;
      background-color: ${t.colorBgBase};
      border-top: 1px solid ${t.colorSplit};
      border-left: 1px solid ${t.colorSplit};
      vertical-align: top;
      text-align: right;
    }

    table.pvtTable tbody tr th.pvtRowLabel {
      vertical-align: baseline;
    }

    .pvtTotal,
    .pvtGrandTotal {
      font-weight: ${t.fontWeightStrong};
    }

    table.pvtTable tbody tr td.pvtRowTotal {
      vertical-align: middle;
    }

    .toggle-wrapper {
      white-space: nowrap;
    }

    .toggle-wrapper > .toggle-val {
      white-space: normal;
    }

    .toggle {
      padding-right: ${t.sizeUnit}px;
      cursor: pointer;
    }

    .hoverable:hover {
      background-color: ${t.colorPrimaryBgHover};
      cursor: pointer;
    }
  `}
`;function K(){return(K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t}).apply(this,arguments)}let L=t=>"string"==typeof t?"metric"===t?(0,n.t)("metric"):t:"number"==typeof t?t:String(t);function D(t,e){return e&&"string"==typeof t?(0,j.nn)(t):L(t)}function Y(t,e,r,o,a,s){let n=L(a[o]||o),i=s&&"string"==typeof n?(0,j.nn)(n):n;return t?(0,l.FD)("span",{className:"toggle-wrapper",children:[(0,l.Y)("span",{role:"button",tabIndex:"0",className:"toggle",onClick:r,children:e}),(0,l.Y)("span",{className:"toggle-val",children:i})]}):i}class z extends o.Component{getBasePivotSettings(){let{props:t}=this,e=t.cols,r=t.rows,l=K({rowTotals:!0,colTotals:!0},t.tableOptions),o=l.rowTotals||0===e.length,a=l.colTotals||0===r.length,s=t.namesMapping||{},n=K({arrowCollapsed:"▲",arrowExpanded:"▼"},t.subtotalOptions),i=K({displayOnTop:!1,enabled:l.colSubTotals,hideOnExpand:!1},n.colSubtotalDisplay),u=K({displayOnTop:!1,enabled:l.rowSubTotals,hideOnExpand:!1},n.rowSubtotalDisplay),h=new _(t,{rowEnabled:u.enabled,colEnabled:i.enabled,rowPartialOnTop:u.displayOnTop,colPartialOnTop:i.displayOnTop}),c=h.getRowKeys(),p=h.getColKeys(),d={},g={},b={},f=null;return l.clickCallback&&(c.forEach(t=>{let e=H(t);e in d||(d[e]={}),p.forEach(r=>{d[e][H(r)]=this.clickHandler(h,t,r)})}),o&&c.forEach(t=>{g[H(t)]=this.clickHandler(h,t,[])}),a&&p.forEach(t=>{b[H(t)]=this.clickHandler(h,[],t)}),o&&a&&(f=this.clickHandler(h,[],[]))),{pivotData:h,colAttrs:e,rowAttrs:r,colKeys:p,rowKeys:c,rowTotals:o,colTotals:a,arrowCollapsed:n.arrowCollapsed,arrowExpanded:n.arrowExpanded,colSubtotalDisplay:i,rowSubtotalDisplay:u,cellCallbacks:d,rowTotalCallbacks:g,colTotalCallbacks:b,grandTotalCallback:f,namesMapping:s,allowRenderHtml:t.allowRenderHtml}}clickHandler(t,e,r){let l=this.props.cols,o=this.props.rows,a=t.getAggregator(e,r).value(),s={},n=Math.min(l.length,r.length);for(let t=0;t<n;t+=1){let e=l[t];null!==r[t]&&(s[e]=r[t])}let i=Math.min(o.length,e.length);for(let t=0;t<i;t+=1){let r=o[t];null!==e[t]&&(s[r]=e[t])}return e=>this.props.tableOptions.clickCallback(e,a,s,t)}clickHeaderHandler(t,e,r,l,o,a=!1,s=!1){let n={};for(let t=0;t<=l;t+=1)n[r[t]]=e[t];return r=>o(r,e[l],n,t,a,s)}collapseAttr(t,e,r){return l=>{l.stopPropagation();let o=e+1,a=r.filter(t=>t.length===o).map(H),s={};a.forEach(t=>{s[t]=!0}),t?this.setState(t=>({collapsedRows:K({},t.collapsedRows,s)})):this.setState(t=>({collapsedCols:K({},t.collapsedCols,s)}))}}expandAttr(t,e,r){return l=>{l.stopPropagation();let o={};r.forEach(t=>{for(let r=0;r<=e;r+=1)o[H(t.slice(0,r+1))]=!1}),t?this.setState(t=>({collapsedRows:K({},t.collapsedRows,o)})):this.setState(t=>({collapsedCols:K({},t.collapsedCols,o)}))}}toggleRowKey(t){return e=>{e.stopPropagation(),this.setState(e=>({collapsedRows:K({},e.collapsedRows,{[t]:!e.collapsedRows[t]})}))}}toggleColKey(t){return e=>{e.stopPropagation(),this.setState(e=>({collapsedCols:K({},e.collapsedCols,{[t]:!e.collapsedCols[t]})}))}}calcAttrSpans(t,e){let r=[],l=Array(e).map(()=>0),o=Array(e).map(()=>null);for(let e=0;e<t.length;e+=1){let a=t[e],s=[],n=0,i=Math.min(o.length,a.length);for(;n<i&&o[n]===a[n];)s.push(-1),r[l[n]][n]+=1,n+=1;for(;n<a.length;)l[n]=e,s.push(1),n+=1;r.push(s),o=a}return r}renderColHeaderRow(t,e,r){let{rowAttrs:o,colAttrs:a,colKeys:s,visibleColKeys:i,colAttrSpans:u,rowTotals:h,arrowExpanded:c,arrowCollapsed:p,colSubtotalDisplay:d,maxColVisible:g,pivotData:b,namesMapping:f,allowRenderHtml:m}=r,{highlightHeaderCellsOnHover:v,omittedHighlightHeaderGroups:y=[],highlightedHeaderCells:w,dateFormatters:S}=this.props.tableOptions,k=0===e&&0!==o.length?(0,l.Y)("th",{colSpan:o.length,rowSpan:a.length,"aria-hidden":"true"},"padding"):null,O=d.enabled&&e!==a.length-1,T=null,C=null;O&&(T=e+1<g?this.collapseAttr(!1,e,s):this.expandAttr(!1,e,s),C=e+1<g?c:p);let N=(0,l.Y)("th",{className:"pvtAxisLabel",children:Y(O,C,T,t,f,m)},"label"),x=[],A=+(0!==o.length),M=0;for(;M<i.length;){let r,o=i[M],s=e<o.length?u[M][e]:1,h="pvtColLabel";if(e<o.length){y.includes(a[e])||(v&&(h+=" hoverable"),r=r=>this.props.onContextMenu(r,o,void 0,{[t]:o[e]})),w&&Array.isArray(w[a[e]])&&w[a[e]].includes(o[e])&&(h+=" active");let n=1+(e===a.length-1?A:0),i=H(o.slice(0,e+1)),u=O?this.toggleColKey(i):null,d=S&&S[t]&&"function"==typeof S[t]?S[t](o[e]):o[e];x.push((0,l.Y)("th",{className:h,colSpan:s,rowSpan:n,role:"columnheader button",onClick:this.clickHeaderHandler(b,o,this.props.cols,e,this.props.tableOptions.clickColumnHeaderCallback),onContextMenu:r,children:Y(O,this.state.collapsedCols[i]?p:c,u,d,f,m)},`colKey-${i}`))}else if(e===o.length){let t=a.length-o.length+A;x.push((0,l.Y)("th",{className:`${h} pvtSubtotalLabel`,colSpan:s,rowSpan:t,role:"columnheader button",onClick:this.clickHeaderHandler(b,o,this.props.cols,e,this.props.tableOptions.clickColumnHeaderCallback,!0),children:(0,n.t)("Subtotal")},`colKeyBuffer-${H(o)}`))}M+=s}let R=[k,N,...x,0===e&&h?(0,l.Y)("th",{className:"pvtTotalLabel",rowSpan:a.length+Math.min(o.length,1),role:"columnheader button",onClick:this.clickHeaderHandler(b,[],this.props.cols,e,this.props.tableOptions.clickColumnHeaderCallback,!1,!0),children:(0,n.t)("Total (%(aggregatorName)s)",{aggregatorName:(0,n.t)(this.props.aggregatorName)})},"total"):null];return(0,l.Y)("tr",{children:R},`colAttr-${e}`)}renderRowHeaderRow(t){let{rowAttrs:e,colAttrs:r,rowKeys:o,arrowCollapsed:a,arrowExpanded:s,rowSubtotalDisplay:i,maxRowVisible:u,pivotData:h,namesMapping:c,allowRenderHtml:p}=t;return(0,l.FD)("tr",{children:[e.map((t,r)=>{let n=i.enabled&&r!==e.length-1,h=null,d=null;return n&&(h=r+1<u?this.collapseAttr(!0,r,o):this.expandAttr(!0,r,o),d=r+1<u?s:a),(0,l.Y)("th",{className:"pvtAxisLabel",children:Y(n,d,h,t,c,p)},`rowAttr-${r}`)}),(0,l.Y)("th",{className:"pvtTotalLabel",role:"columnheader button",onClick:this.clickHeaderHandler(h,[],this.props.rows,0,this.props.tableOptions.clickRowHeaderCallback,!1,!0),children:0===r.length?(0,n.t)("Total (%(aggregatorName)s)",{aggregatorName:(0,n.t)(this.props.aggregatorName)}):null},"padding")]},"rowHdr")}renderTableRow(t,e,r){let{rowAttrs:o,colAttrs:a,rowAttrSpans:s,visibleColKeys:i,pivotData:u,rowTotals:h,rowSubtotalDisplay:c,arrowExpanded:p,arrowCollapsed:d,cellCallbacks:g,rowTotalCallbacks:b,namesMapping:f,allowRenderHtml:m}=r,{highlightHeaderCellsOnHover:v,omittedHighlightHeaderGroups:y=[],highlightedHeaderCells:w,cellColorFormatters:S,dateFormatters:k}=this.props.tableOptions,O=H(t),T=+(0!==a.length),C=t.map((r,a)=>{let n,i="pvtRowLabel";y.includes(o[a])||(v&&(i+=" hoverable"),n=e=>this.props.onContextMenu(e,void 0,t,{[o[a]]:r})),w&&Array.isArray(w[o[a]])&&w[o[a]].includes(r)&&(i+=" active");let h=s[e][a];if(h>0){let e=H(t.slice(0,a+1)),s=1+(a===o.length-1?T:0),g=c.enabled&&a!==o.length-1,b=g?this.toggleRowKey(e):null,v=k&&k[o[a]]?k[o[a]](r):r;return(0,l.Y)("th",{className:i,rowSpan:h,colSpan:s,role:"columnheader button",onClick:this.clickHeaderHandler(u,t,this.props.rows,a,this.props.tableOptions.clickRowHeaderCallback),onContextMenu:n,children:Y(g,this.state.collapsedRows[e]?d:p,b,v,f,m)},`rowKeyLabel-${a}`)}return null}),N=t.length<o.length?(0,l.Y)("th",{className:"pvtRowLabel pvtSubtotalLabel",colSpan:o.length-t.length+T,rowSpan:1,role:"columnheader button",onClick:this.clickHeaderHandler(u,t,this.props.rows,t.length,this.props.tableOptions.clickRowHeaderCallback,!0),children:(0,n.t)("Subtotal")},"rowKeyBuffer"):null,x=g[O]||{},A=i.map(e=>{let r,o=H(e),a=u.getAggregator(t,e),s=a.value(),n=[...t,...e];S&&Object.values(S).forEach(t=>{Array.isArray(t)&&n.forEach(e=>{r||t.filter(t=>t.column===e).forEach(t=>{let e=t.getColorFromValue(s);e&&(r=e)})})});let i=a.isSubtotal?{fontWeight:"bold"}:{backgroundColor:r};return(0,l.Y)("td",{role:"gridcell",className:"pvtVal",onClick:x[o],onContextMenu:r=>this.props.onContextMenu(r,e,t),style:i,children:D(a.format(s),m)},`pvtVal-${o}`)}),M=null;if(h){let e=u.getAggregator(t,[]),r=e.value();M=(0,l.Y)("td",{role:"gridcell",className:"pvtTotal",onClick:b[O],onContextMenu:e=>this.props.onContextMenu(e,void 0,t),children:D(e.format(r),m)},"total")}let R=[...C,N,...A,M];return(0,l.Y)("tr",{children:R},`keyRow-${O}`)}renderTotalsRow(t){let{rowAttrs:e,colAttrs:r,visibleColKeys:o,rowTotals:a,pivotData:s,colTotalCallbacks:i,grandTotalCallback:u}=t,h=(0,l.Y)("th",{className:"pvtTotalLabel pvtRowTotalLabel",colSpan:e.length+Math.min(r.length,1),role:"columnheader button",onClick:this.clickHeaderHandler(s,[],this.props.rows,0,this.props.tableOptions.clickRowHeaderCallback,!1,!0),children:(0,n.t)("Total (%(aggregatorName)s)",{aggregatorName:(0,n.t)(this.props.aggregatorName)})},"label"),c=o.map(t=>{let e=H(t),r=s.getAggregator([],t),o=r.value();return(0,l.Y)("td",{role:"gridcell",className:"pvtTotal pvtRowTotal",onClick:i[e],onContextMenu:e=>this.props.onContextMenu(e,t,void 0),style:{padding:"5px"},children:D(r.format(o),this.props.allowRenderHtml)},`total-${e}`)}),p=null;if(a){let t=s.getAggregator([],[]),e=t.value();p=(0,l.Y)("td",{role:"gridcell",className:"pvtGrandTotal pvtRowTotal",onClick:u,onContextMenu:t=>this.props.onContextMenu(t,void 0,void 0),children:D(t.format(e),this.props.allowRenderHtml)},"total")}let d=[h,...c,p];return(0,l.Y)("tr",{className:"pvtRowTotals",children:d},"total")}visibleKeys(t,e,r,l){return t.filter(t=>!t.some((r,l)=>e[H(t.slice(0,l))])&&(t.length===r||H(t)in e||!l.hideOnExpand))}isDashboardEditMode(){return document.contains(document.querySelector(".dashboard--editing"))}render(){this.cachedProps!==this.props&&(this.cachedProps=this.props,this.cachedBasePivotSettings=this.getBasePivotSettings());let{colAttrs:t,rowAttrs:e,rowKeys:r,colKeys:o,colTotals:a,rowSubtotalDisplay:s,colSubtotalDisplay:n,allowRenderHtml:i}=this.cachedBasePivotSettings,u=this.visibleKeys(r,this.state.collapsedRows,e.length,s),h=this.visibleKeys(o,this.state.collapsedCols,t.length,n),c=K({visibleRowKeys:u,maxRowVisible:Math.max(...u.map(t=>t.length)),visibleColKeys:h,maxColVisible:Math.max(...h.map(t=>t.length)),rowAttrSpans:this.calcAttrSpans(u,e.length),colAttrSpans:this.calcAttrSpans(h,t.length),allowRenderHtml:i},this.cachedBasePivotSettings);return(0,l.Y)(E,{isDashboardEditMode:this.isDashboardEditMode(),children:(0,l.FD)("table",{className:"pvtTable",role:"grid",children:[(0,l.FD)("thead",{children:[t.map((t,e)=>this.renderColHeaderRow(t,e,c)),0!==e.length&&this.renderRowHeaderRow(c)]}),(0,l.FD)("tbody",{children:[u.map((t,e)=>this.renderTableRow(t,e,c)),a&&this.renderTotalsRow(c)]})]})})}constructor(t){super(t),this.state={collapsedRows:{},collapsedCols:{}},this.clickHeaderHandler=this.clickHeaderHandler.bind(this),this.clickHandler=this.clickHandler.bind(this)}}function q(){return(q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t}).apply(this,arguments)}z.propTypes=K({},_.propTypes,{tableOptions:f().object,onContextMenu:f().func}),z.defaultProps=K({},_.defaultProps,{tableOptions:{}});class I extends o.PureComponent{render(){return(0,l.Y)(z,q({},this.props))}}I.propTypes=z.propTypes,I.defaultProps=z.defaultProps;var U=r(2686);function V(){return(V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t}).apply(this,arguments)}let B=g.I4.div`
  ${({height:t,width:e,margin:r})=>`
      margin: ${r}px;
      height: ${t-2*r}px;
      width: ${"string"==typeof e?parseInt(e,10):e-2*r}px;
 `}
`,W=g.I4.div`
  ${({theme:t})=>`
    height: 100%;
    max-width: inherit;
    overflow: auto;

    /* Chrome/Safari/Edge webkit scrollbar styling */
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${t.colorFillQuaternary};
    }

    &::-webkit-scrollbar-thumb {
      background: ${t.colorFillSecondary};
      border-radius: ${t.borderRadiusSM}px;

      &:hover {
        background: ${t.colorFillTertiary};
      }
    }

    &::-webkit-scrollbar-corner {
      background: ${t.colorFillQuaternary};
    }

    /* Firefox scrollbar styling */
    scrollbar-width: thin;
    scrollbar-color: ${t.colorFillSecondary} ${t.colorFillQuaternary};
  `}
`,G=(0,n.t)("Metric"),Q=["value"],X=(0,g.I4)(a.A)`
  stroke: ${({theme:t})=>t.colorBorderSecondary};
  stroke-width: 16px;
`,J=(0,g.I4)(s.A)`
  stroke: ${({theme:t})=>t.colorBorderSecondary};
  stroke-width: 16px;
`,Z=t=>({Count:$.count(t),"Count Unique Values":$.countUnique(t),"List Unique Values":$.listUnique(", ",t),Sum:$.sum(t),Average:$.average(t),Median:$.median(t),"Sample Variance":$.var(1,t),"Sample Standard Deviation":$.stdev(1,t),Minimum:$.min(t),Maximum:$.max(t),First:$.first(t),Last:$.last(t),"Sum as Fraction of Total":$.fractionOf($.sum(),"total",t),"Sum as Fraction of Rows":$.fractionOf($.sum(),"row",t),"Sum as Fraction of Columns":$.fractionOf($.sum(),"col",t),"Count as Fraction of Total":$.fractionOf($.count(),"total",t),"Count as Fraction of Rows":$.fractionOf($.count(),"row",t),"Count as Fraction of Columns":$.fractionOf($.count(),"col",t)});function tt(t){let{data:e,height:r,width:a,groupbyRows:s,groupbyColumns:n,metrics:b,colOrder:f,rowOrder:m,aggregateFunction:v,transposePivot:y,combineMetric:w,rowSubtotalPosition:S,colSubtotalPosition:k,colTotals:O,colSubTotals:C,rowTotals:N,rowSubTotals:x,valueFormat:A,currencyFormat:M,emitCrossFilters:R,setDataMask:$,selectedFilters:F,verboseMap:H,columnFormats:_,currencyFormats:j,metricsLayout:P,metricColorFormatters:E,dateFormatters:K,onContextMenu:L,timeGrainSqla:D,allowRenderHtml:Y}=t,z=(0,g.DP)(),q=(0,o.useMemo)(()=>(null==M?void 0:M.symbol)?new i.A({currency:M,d3Format:A}):(0,u.gV)(A),[A,M]),tt=(0,o.useMemo)(()=>Array.from(new Set([...Object.keys(_||{}),...Object.keys(j||{})])).map(t=>[t,_[t]||A,j[t]||M]),[_,M,j,A]),te=tt.length>0,tr=(0,o.useMemo)(()=>te?{[G]:Object.fromEntries(tt.map(([t,e,r])=>[t,r?new i.A({currency:r,d3Format:e}):(0,u.gV)(e)]))}:void 0,[tt,te]),tl=(0,o.useMemo)(()=>b.map(t=>"string"==typeof t?t:t.label),[b]),to=(0,o.useMemo)(()=>e.reduce((t,e)=>[...t,...tl.map(t=>V({},e,{[G]:t,value:e[t]})).filter(t=>null!==t.value)],[]),[e,tl]),ta=(0,o.useMemo)(()=>s.map(h.A),[s]),ts=(0,o.useMemo)(()=>n.map(h.A),[n]),tn=(0,o.useMemo)(()=>({[G]:T(tl)}),[tl]),[ti,tu]=(0,o.useMemo)(()=>{let[t,e]=y?[ts,ta]:[ta,ts];return P===U.P.ROWS?t=w?[...t,G]:[G,...t]:e=w?[...e,G]:[G,...e],[t,e]},[w,ts,ta,P,y]),th=(0,o.useCallback)(t=>{let e=Object.keys(t),r=[...s,...n];$({extraFormData:{filters:0===e.length?void 0:e.map(e=>{var l;let o=null==t?void 0:t[e],a=null!=(l=r.find(t=>(0,c.eh)(t)?t===e:!!(0,c.q0)(t)&&t.label===e))?l:"";return null==o?{col:a,op:"IS NULL"}:{col:a,op:"IN",val:o}})},filterState:{value:t&&Object.keys(t).length?Object.values(t):null,selectedFilters:t&&Object.keys(t).length?t:null}})},[n,s,$]),tc=(0,o.useCallback)(t=>{let e=(t,e)=>{var r;return!!F&&(null==(r=F[t])?void 0:r.includes(e))};if(!t)return;let[r,l]=Object.entries(t)[0],o=V({},F),a=Object.keys(o=e(r,l)?{}:{[r]:[l]}),i=[...s,...n];return{dataMask:{extraFormData:{filters:0===a.length?void 0:a.map(t=>{var e;let r=null==o?void 0:o[t],l=null!=(e=i.find(e=>(0,c.eh)(e)?e===t:!!(0,c.q0)(e)&&e.label===t))?e:"";return null==r?{col:l,op:"IS NULL"}:{col:l,op:"IN",val:r}})},filterState:{value:o&&Object.keys(o).length?Object.values(o):null,selectedFilters:o&&Object.keys(o).length?o:null}},isCurrentValueSelected:e(r,l)}},[n,s,F]),tp=(0,o.useCallback)((t,e,r,l,o,a)=>{var s;if(o||a||!R||(0,p.j)())return;let n=V({},r);delete n[G];let i=Object.entries(n);if(0===i.length)return;let[u,h]=i[i.length-1],c=V({},F);Array.isArray((c=F&&F&&(null==(s=F[u])?void 0:s.includes(h))?{}:{[u]:[h]})[u])&&0===c[u].length&&delete c[u],th(c)},[R,F,th]),td=(0,o.useMemo)(()=>({clickRowHeaderCallback:tp,clickColumnHeaderCallback:tp,colTotals:O,colSubTotals:C,rowTotals:N,rowSubTotals:x,highlightHeaderCellsOnHover:R||(0,d.G7)(d.TO.DrillBy)||(0,d.G7)(d.TO.DrillToDetail),highlightedHeaderCells:F,omittedHighlightHeaderGroups:[G],cellColorFormatters:{[G]:E},dateFormatters:K}),[O,C,K,R,E,N,x,F,tp]),tg=(0,o.useMemo)(()=>({colSubtotalDisplay:{displayOnTop:k},rowSubtotalDisplay:{displayOnTop:S},arrowCollapsed:(0,l.Y)(X,{}),arrowExpanded:(0,l.Y)(J,{})}),[k,S]),tb=(0,o.useCallback)((t,e,r,l)=>{if(L){t.preventDefault(),t.stopPropagation();let o=[];e&&e.length>1&&e.forEach((t,e)=>{let r=tu[e],l=K[r],a=(null==l?void 0:l(t))||String(t);e>0&&o.push({col:r,op:"==",val:t,formattedVal:a,grain:l?D:void 0})}),r&&r.forEach((t,e)=>{let r=ti[e],l=K[r],a=(null==l?void 0:l(t))||String(t);o.push({col:r,op:"==",val:t,formattedVal:a,grain:l?D:void 0})}),L(t.clientX,t.clientY,{drillToDetail:o,crossFilter:tc(l),drillBy:l&&{filters:[{col:Object.keys(l)[0],op:"==",val:Object.values(l)[0]}],groupbyFieldName:r?"groupbyRows":"groupbyColumns"}})}},[tu,K,tc,L,ti,D]);return(0,l.Y)(B,{height:r,width:a,margin:4*z.sizeUnit,children:(0,l.Y)(W,{children:(0,l.Y)(I,{data:to,rows:ti,cols:tu,aggregatorsFactory:Z,defaultFormatter:q,customFormatters:tr,aggregatorName:v,vals:Q,colOrder:f,rowOrder:m,sorters:tn,tableOptions:td,subtotalOptions:tg,namesMapping:H,onContextMenu:tb,allowRenderHtml:Y})})})}},99562:(t,e,r)=>{r.d(e,{j:()=>l});let l=()=>{var t;return null==(t=window.getSelection())?void 0:t.toString()}}}]);