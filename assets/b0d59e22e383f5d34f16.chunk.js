"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7278],{87278:(t,e,r)=>{r.r(e),r.d(e,{default:()=>$});var n=r(2445),a=r(98269),o=r(21346),s=r(24143),i=r.n(s),l=r(5556),c=r.n(l),p=r(61573),u=r(6603),d=r(8894),h=r(15536),y=r(8779);let f={data:c().arrayOf(c().shape({country_id:c().string,metric:c().number})),width:c().number,height:c().number,country:c().string,colorScheme:c().string,linearColorScheme:c().string,mapBaseUrl:c().string,numberFormat:c().string},g={};function m(t,e){let r,{data:n,width:a,height:o,country:s,linearColorScheme:l,numberFormat:c,colorScheme:f,sliceId:m}=e,v=(0,u.gV)(c),x=(0,d.A)().get(l).createLinearScale((0,p.A)(n,t=>t.metric)),$=h.getScale(f),b={};n.forEach(t=>{b[t.country_id]=f?$(t.country_id,m):x(t.metric)});let k=t=>b[t.properties.ISO]||"none",C=i().geo.path(),S=i().select(t);S.classed("superset-legacy-chart-country-map",!0),S.selectAll("*").remove(),t.style.height=`${o}px`,t.style.width=`${a}px`;let O=S.append("svg:svg").attr("width",a).attr("height",o).attr("preserveAspectRatio","xMidYMid meet"),w=O.append("rect").attr("class","background").attr("width",a).attr("height",o),A=O.append("g"),T=A.append("g").classed("map-layer",!0),N=A.append("g").classed("text-layer",!0).attr("transform",`translate(${a/2}, 45)`),j=N.append("text").classed("big-text",!0),_=N.append("text").classed("result-text",!0).attr("dy","1em"),z=function(t){let e,n,s,i=t&&r!==t,l=a/2,c=o/2;if(i){let a=C.centroid(t);[e,n]=a,s=4,r=t}else e=l,n=c,s=1,r=null;A.transition().duration(750).attr("transform",`translate(${l},${c})scale(${s})translate(${-e},${-n})`),N.style("opacity",0).attr("transform",`translate(0,0)translate(${e},${i?n-5:45})`).transition().duration(750).style("opacity",1),j.transition().duration(750).style("font-size",i?6:16),_.transition().duration(750).style("font-size",i?16:24)};w.on("click",z);let M=function(t){let e="";t&&t.properties&&(e=t.properties.ID_2?t.properties.NAME_2:t.properties.NAME_1),j.text(e)},B=function(t){t.length>0&&_.text(v(t[0].metric))},P=function(t){let e=k(t);"none"!==e&&(e=i().rgb(e).darker().toString()),i().select(this).style("fill",e),M(t),B(n.filter(e=>e.country_id===t.properties.ISO))},R=function(){i().select(this).style("fill",k),j.text(""),_.text("")};function U(t){let{features:e}=t,r=i().geo.centroid(t),n=i().geo.mercator().scale(100).center(r).translate([a/2,o/2]);C.projection(n);let s=C.bounds(t),l=100*a/(s[1][0]-s[0][0]),c=100*o/(s[1][1]-s[0][1]);n.scale(l<c?l:c);let p=C.bounds(t);n.translate([a-(p[0][0]+p[1][0])/2,o-(p[0][1]+p[1][1])/2]),T.selectAll("path").data(e).enter().append("path").attr("d",C).attr("class","region").attr("vector-effect","non-scaling-stroke").style("fill",k).on("mouseenter",P).on("mouseout",R).on("click",z)}let W=g[s];if(W)U(W);else{let e=y.Ay[s];i().json(e,(e,r)=>{if(e){var n;let e=(null==(n=y.JK.find(t=>t[0]===s))?void 0:n[1])||s;i().select(t).html(`<div class="alert alert-danger">Could not load map data for ${e}</div>`)}else g[s]=r,U(r)})}}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}m.displayName="CountryMap",m.propTypes=f;let x=(0,a.A)(m),$=(0,o.I4)(t=>{var{className:e}=t,r=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)e.indexOf(r=o[n])>=0||(a[r]=t[r]);return a}(t,["className"]);return(0,n.Y)("div",{className:e,children:(0,n.Y)(x,v({},r))})})`
  ${({theme:t})=>`
    .superset-legacy-chart-country-map svg {
      background-color: ${t.colorBgContainer};
    }

    .superset-legacy-chart-country-map {
      position: relative;
    }

    .superset-legacy-chart-country-map .background {
      fill: ${t.colorBgContainer};
      pointer-events: all;
    }

    .superset-legacy-chart-country-map .map-layer {
      fill: ${t.colorBgContainer};
      stroke: ${t.colorBorderSecondary};
    }

    .superset-legacy-chart-country-map .effect-layer {
      pointer-events: none;
    }

    .superset-legacy-chart-country-map .text-layer {
      color: ${t.colorText};
      text-anchor: middle;
      pointer-events: none;
    }

    .superset-legacy-chart-country-map text.result-text {
      fill: ${t.colorText};
      font-weight: ${t.fontWeightLight};
      font-size: ${t.fontSizeXL}px;
    }

    .superset-legacy-chart-country-map text.big-text {
      fill: ${t.colorText};
      font-weight: ${t.fontWeightStrong};
      font-size: ${t.fontSizeLG}px;
    }

    .superset-legacy-chart-country-map path.region {
      cursor: pointer;
      stroke: ${t.colorSplit};
    }
  `}
`},98269:(t,e,r)=>{r.d(e,{A:()=>s});var n=r(2445),a=r(24002);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function s(t,e){class r extends a.Component{componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==e?void 0:e.componentWillUnmount)&&e.componentWillUnmount.bind(this)()}setContainerRef(t){this.container=t}execute(){this.container&&t(this.container,this.props)}render(){let{id:t,className:e}=this.props;return(0,n.Y)("div",{ref:this.setContainerRef,id:t,className:e})}constructor(t){super(t),this.setContainerRef=this.setContainerRef.bind(this)}}return t.displayName&&(r.displayName=t.displayName),t.propTypes&&(r.propTypes=o({},r.propTypes,t.propTypes)),t.defaultProps&&(r.defaultProps=t.defaultProps),r}}}]);