(this.webpackJsonpcoinbase_frontend=this.webpackJsonpcoinbase_frontend||[]).push([[0],{19:function(e,a,t){e.exports=t(45)},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),s=t(6),o=t.n(s),i=t(17),m=t(2),u=t(3),d=t(4),E=t(5),h=(t(25),function(e){Object(E.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.day,a=e.time,t=new Date(1e3*a).toString().slice(3,15);return r.a.createElement("tr",{className:e.id%2===0?"evenRow":"oddRow"},r.a.createElement("td",null,t),r.a.createElement("td",null,e.high),r.a.createElement("td",null,e.low),r.a.createElement("td",null,e.open),r.a.createElement("td",null,e.close),r.a.createElement("td",null,e.volume))}}]),t}(n.Component)),p=(t(26),function(e){Object(E.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(e){var a=this.props.btcData;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("div",{className:"table-header"},"Time",r.a.createElement("span",{className:"chevrons"},r.a.createElement("button",{id:"rating-up"},r.a.createElement("i",{className:"fa fa-chevron-up"})),r.a.createElement("button",{id:"rating-down"},r.a.createElement("i",{className:"fa fa-chevron-down"}))))),r.a.createElement("th",null,r.a.createElement("div",{className:"table-header"},"High",r.a.createElement("span",{className:"chevrons"},r.a.createElement("button",{id:"rating-up"},r.a.createElement("i",{className:"fa fa-chevron-up"})),r.a.createElement("button",{id:"rating-down"},r.a.createElement("i",{className:"fa fa-chevron-down"}))))),r.a.createElement("th",null,r.a.createElement("div",{className:"table-header"},"Low",r.a.createElement("span",{className:"chevrons"},r.a.createElement("button",{id:"rating-up"},r.a.createElement("i",{className:"fa fa-chevron-up"})),r.a.createElement("button",{id:"rating-down"},r.a.createElement("i",{className:"fa fa-chevron-down"}))))),r.a.createElement("th",null,r.a.createElement("div",{className:"table-header"},"Open",r.a.createElement("span",{className:"chevrons"},r.a.createElement("button",{id:"rating-up"},r.a.createElement("i",{className:"fa fa-chevron-up"})),r.a.createElement("button",{id:"rating-down"},r.a.createElement("i",{className:"fa fa-chevron-down"}))))),r.a.createElement("th",null,r.a.createElement("div",{className:"table-header"},"Close",r.a.createElement("span",{className:"chevrons"},r.a.createElement("button",{id:"rating-up"},r.a.createElement("i",{className:"fa fa-chevron-up"})),r.a.createElement("button",{id:"rating-down"},r.a.createElement("i",{className:"fa fa-chevron-down"}))))),r.a.createElement("th",null,r.a.createElement("div",{className:"table-header"},"Volume",r.a.createElement("span",{className:"chevrons"},r.a.createElement("button",{id:"rating-up"},r.a.createElement("i",{className:"fa fa-chevron-up"})),r.a.createElement("button",{id:"rating-down"},r.a.createElement("i",{className:"fa fa-chevron-down"}))))))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement(h,{day:e,key:e.id})}))))}}]),t}(n.Component)),f=(t(27),t(18)),v=t.n(f),b=function(e){Object(E.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={data:[]},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://btcapihistoricrates.herokuapp.com/crypto/getData");case 2:a=e.sent,this.setState({data:a.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Bitcoin Historical Rates"),r.a.createElement(p,{btcData:this.state.data}))}}]),t}(n.Component);var N=function(){return r.a.createElement(b,null)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1f37096a.chunk.js.map