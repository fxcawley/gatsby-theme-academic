"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[689],{33879:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(27378)),o=i(n(23615)),l=i(n(92656));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var g=function(e){function t(){return d(this,t),y(this,b(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.orientation,n=void 0===t?"left":t,o=e.children,i=e.lineColor,a=e.lineStyle,f=e.style,d=s(e,["orientation","children","lineColor","lineStyle","style"]),p=r.default.Children.map(o,(function(e){return r.default.cloneElement(e,{orientation:n})})),y=u({},"right"===n?l.default["containerBefore--right"]:l.default["containerBefore--left"]),b=u({},y,a);return b=i?u({},b,{background:i}):b,r.default.createElement("div",null,r.default.createElement("section",c({style:u({},l.default.container,f)},d),r.default.createElement("div",{style:u({},l.default.containerBefore,b)}),p,r.default.createElement("div",{style:l.default.containerAfter})))}}])&&p(n.prototype,o),i&&p(n,i),t}(r.Component);g.propTypes={children:o.default.node.isRequired,orientation:o.default.string,style:o.default.object,lineColor:o.default.string,lineStyle:o.default.object},g.defaultProps={style:{},lineStyle:{}};var h=g;t.default=h},67962:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(27378)),o=i(n(23615)),l=i(n(92656));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var g=function(e){function t(){return d(this,t),y(this,b(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(o=[{key:"mergeNotificationStyle",value:function(e){return e?f({},l.default.eventType,{color:e,borderColor:e}):l.default.eventType}},{key:"iconStyle",value:function(e){return f({},l.default.materialIcons,e)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.iconStyle,o=e.icon,i=e.orientation,a=e.iconColor,s=e.style,d=u(e,["title","iconStyle","icon","orientation","iconColor","style"]),p=f({},"right"===i?l.default["event--right"]:l.default["event--left"]);return r.default.createElement("div",{style:f({},l.default.event,{marginBottom:50},s)},r.default.createElement("div",{style:this.mergeNotificationStyle(a)},r.default.createElement("span",{style:this.iconStyle(n)},o)),r.default.createElement("div",c({},d,{style:f({},l.default.blipStyle,p)}),r.default.createElement("div",null,t)),r.default.createElement("div",{style:l.default.eventAfter}))}}])&&p(n.prototype,o),i&&p(n,i),t}(r.Component);g.propTypes={title:o.default.node.isRequired,icon:o.default.node,iconColor:o.default.string,iconStyle:o.default.object,style:o.default.object,orientation:o.default.string},g.defaultProps={iconStyle:{},style:{}};var h=g;t.default=h},99988:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(23615)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(27378)),l=i(n(92656));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?y(e):t}(this,d(t).call(this,e))).state={showContent:n.props.showContent},n.toggleContent=n.toggleContent.bind(y(y(n))),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(e){this.props.showContent!==e.showContent&&this.state({showContent:this.props.showContent})}},{key:"mergeNotificationStyle",value:function(e,t,n){var r=e?u({},l.default.eventType,{color:e,borderColor:e}):l.default.eventType,o=u({},"right"===n?l.default["eventType--right"]:l.default["eventType--left"]);return u({},r,o,t)}},{key:"mergeContentStyle",value:function(e){var t=this.showAsCard()?l.default.cardBody:l.default.message;return e?u({},t,e):t}},{key:"timeStyle",value:function(){return this.showAsCard()?l.default.time:u({},l.default.time,{color:"#303e49"})}},{key:"showAsCard",value:function(){return"card"===this.props.container}},{key:"containerStyle",value:function(){var e=this.props.style,t=u({},l.default.eventContainer,e);return this.showAsCard()?u({},l.default.card,t):t}},{key:"toggleStyle",value:function(){var e=this.props,t=e.container,n=e.cardHeaderStyle,r=e.collapsible,o="card"===t?u({},l.default.cardTitle,n):{};return r?u({},l.default.toggleEnabled,o):o}},{key:"toggleContent",value:function(){this.setState({showContent:!this.state.showContent})}},{key:"renderChildren",value:function(){var e=this.props,t=e.collapsible,n=e.contentStyle;return t&&this.state.showContent||!t?o.default.createElement("div",{style:this.mergeContentStyle(n)},this.props.children,o.default.createElement("div",{style:l.default.messageAfter})):o.default.createElement("span",{style:{fontWeight:500,fontSize:16,cursor:"pointer"},onClick:this.toggleContent},"…")}},{key:"render",value:function(){var e=this.props,t=e.createdAt,n=e.title,r=e.subtitle,i=e.iconStyle,a=e.bubbleStyle,f=e.buttons,s=e.icon,d=e.iconColor,p=e.titleStyle,y=e.subtitleStyle,b=e.orientation,m=e.collapsible,g=e.onClick,h=e.onIconClick,v=e.className,O=u({},"right"===b?l.default["event--right"]:l.default["event--left"]),S=u({},"left"===b?l.default["actionButtons--right"]:l.default["actionButtons--left"]);return o.default.createElement("div",{style:u({},l.default.event,O)},o.default.createElement("div",{style:this.mergeNotificationStyle(d,a,b)},o.default.createElement("span",{style:u({},l.default.materialIcons,i),onClick:h},s)),o.default.createElement("div",c({style:this.containerStyle()},{onClick:g,className:v}),o.default.createElement("div",{style:l.default.eventContainerBefore}),o.default.createElement("div",{style:this.toggleStyle(),onClick:m&&this.toggleContent},t&&o.default.createElement("div",{style:this.timeStyle()},t),o.default.createElement("div",{style:p},n),r&&o.default.createElement("div",{style:u({},l.default.subtitle,y)},r),o.default.createElement("div",{style:u({},l.default.actionButtons,S)},f)),this.props.children&&this.renderChildren()),o.default.createElement("div",{style:l.default.eventAfter}))}}])&&s(n.prototype,r),i&&s(n,i),t}(o.Component);b.propTypes={title:r.default.node.isRequired,subtitle:r.default.node,createdAt:r.default.node,children:r.default.node,buttons:r.default.node,container:r.default.string,icon:r.default.node,iconColor:r.default.string,iconStyle:r.default.object,bubbleStyle:r.default.object,orientation:r.default.string,contentStyle:r.default.object,cardHeaderStyle:r.default.object,style:r.default.object,titleStyle:r.default.object,subtitleStyle:r.default.object,collapsible:r.default.bool,showContent:r.default.bool,className:r.default.string,onClick:r.default.func,onIconClick:r.default.func},b.defaultProps={createdAt:void 0,iconStyle:{},bubbleStyle:{},contentStyle:{},cardHeaderStyle:{},style:{},titleStyle:{},subtitleStyle:{},orientation:"left",showContent:!1,className:"",onClick:function(){},onIconClick:function(){}};var m=b;t.default=m},56781:function(e,t,n){Object.defineProperty(t,"TY",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"BJ",{enumerable:!0,get:function(){return o.default}});var r=i(n(33879)),o=i(n(99988)),l=i(n(67962));function i(e){return e&&e.__esModule?e:{default:e}}},92656:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={container:{position:"relative",fontSize:"80%",fontWeight:300,padding:"10px 0",width:"95%",margin:"0 auto"},containerBefore:{content:"",position:"absolute",top:0,height:"100%",width:2,background:"#a0b2b8"},"containerBefore--left":{left:"16px"},"containerBefore--right":{right:"14px"},containerAfter:{content:"",display:"table",clear:"both"},event:{position:"relative",margin:"10px 0"},"event--left":{paddingLeft:45,textAlign:"left"},"event--right":{paddingRight:45,textAlign:"right"},eventAfter:{clear:"both",content:"",display:"table"},eventType:{position:"absolute",top:0,borderRadius:"50%",width:30,height:30,marginLeft:1,background:"#e9f0f5",border:"2px solid #6fba1c",display:"flex"},"eventType--left":{left:0},"eventType--right":{right:0},materialIcons:{display:"flex",width:32,height:32,position:"relative",justifyContent:"center",cursor:"pointer",alignSelf:"center",alignItems:"center"},eventContainer:{position:"relative"},eventContainerBefore:{top:24,left:"100%",borderColor:"transparent",borderLeftColor:"#ffffff"},time:{marginBottom:3},subtitle:{marginTop:2,fontSize:"85%",color:"#777"},message:{width:"98%",backgroundColor:"#ffffff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",marginTop:"1em",marginBottom:"1em",lineHeight:1.6,padding:"0.5em 1em"},messageAfter:{clear:"both",content:"",display:"table"},actionButtons:{marginTop:-20},"actionButtons--left":{float:"left",textAlign:"left"},"actionButtons--right":{float:"right",textAlign:"right"},card:{boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",backgroundColor:"rgb(255, 255, 255)"},cardTitle:{backgroundColor:"#7BB1EA",padding:10,color:"#fff"},cardBody:{backgroundColor:"#ffffff",marginBottom:"1em",lineHeight:1.6,padding:10,minHeight:40},blipStyle:{position:"absolute",top:"50%",marginTop:"9px"},toggleEnabled:{cursor:"pointer"}};t.default=n},4439:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});n(11630);var r=n(68547),o=n(27378),l=n(68941),i=n(98730),a=n.n(i),c=n(50798),u=function(){var e=(0,l.$)().introduction.join("\n\n"),t=a().parseMarkDown(e);return o.createElement(o.Fragment,null,o.createElement("div",null,o.createElement(c.Z,{title:"About",description:e,path:"",keywords:["Rolwin","Reevan","Monteiro","FullStack developer","Javascript","ReactJS","NodeJS","Gatsby"]}),o.createElement("h1",{className:"titleSeparate"},"About Me"),o.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))},f=(n(50425),n(86946)),s=(n(54924),n(10187)),d=n(48910),p=n(56781),y="homePage-module--homepageSection--1-33c",b=function(e){var t=o.createElement(f.Z,{justify:"space-between",align:"middle"},o.createElement(s.Z,{xs:24,sm:24,md:12,lg:15,style:{fontSize:"12pt",fontWeight:"500"}},e.title),o.createElement(s.Z,{xs:24,sm:24,md:12,lg:9,style:{fontSize:"12pt"}},e.date));return o.createElement(p.BJ,{title:t,style:{paddingBottom:"0.8rem",paddingTop:"0.8px"},icon:o.createElement(d.G,{size:e.iconSize||"lg",fixedWidth:!0,icon:e.icon||"award"}),iconStyle:{cursor:"default"},iconColor:"#44566C"})},m=function(){var e=(0,l.$)();return o.createElement("div",{className:y},o.createElement("h2",{style:{marginBottom:"0rem"}},"Awards & Scholarships"),o.createElement(f.Z,null,o.createElement(s.Z,{xs:24,style:{marginBottom:"-0.5rem"}},o.createElement(p.TY,{lineStyle:{display:"none"},style:{width:"100%"}},e.awards.map(b)))))},g=(n(52369),n(36095)),h=function(e){return o.createElement(p.BJ,{title:e.title,titleStyle:{fontSize:"12pt",fontWeight:"bold"},subtitle:e.location,subtitleStyle:{fontSize:"13pt",fontWeight:"400"},createdAt:e.date,style:{fontSize:"12pt",fontWeight:"300"},icon:o.createElement(d.G,{size:"md",fixedWidth:!0,icon:e.icon||"school"}),iconStyle:{cursor:"default"},iconColor:"#44566C"})},v=function(e){return o.createElement(g.ZP.Item,null,o.createElement(g.ZP.Item.Meta,{avatar:o.createElement(d.G,{size:"lg",fixedWidth:!0,icon:e.icon}),title:e.title}))},O=function(){var e=(0,l.$)(),t=e.education.slice(0,e.education.length-1),n=e.education.slice(e.education.length-1);return o.createElement("div",{className:y},o.createElement(f.Z,null,o.createElement(s.Z,{xs:24,sm:24,md:12,lg:15,style:{marginBottom:"-2rem"}},o.createElement("h2",{style:{marginBottom:"0"}},"Education"),e.education.length>1?o.createElement(p.TY,{lineStyle:{top:"20px"},lineColor:"#44566C",style:{width:"100%"}},t.map(h)):null,e.education.length>0?o.createElement(p.TY,{lineStyle:{display:"none"},style:{top:"-30px",width:"100%"}},n.map(h)):null),o.createElement(s.Z,{xs:24,sm:24,md:12,lg:9},o.createElement("h2",{style:{marginBottom:"0.8rem"},className:"interests"},"Interests"),o.createElement(g.ZP,{itemLayout:"horizontal",split:!1},e.interests.map(v)))))},S=n(75906),w=n.n(S),E=n(81811),j=n.n(E),C=n(25414),P=n(57325),_=function(){var e=(0,C.useStaticQuery)("2494093640"),t=e.allTag?e.allTag.edges:[],n=j()(w()(t,(function(e){return e.node.name})),"node");return o.createElement("div",{className:y},o.createElement("h2",{style:{marginBottom:"1rem"}},"Selected Research"),o.createElement(f.Z,{gutter:[20,20]},e.allMdx&&e.allMdx.edges.map((function(e,t){return o.createElement(s.Z,{key:t,xs:24,sm:24,md:24,lg:24},o.createElement(P.Z,{data:e,tagsMap:n}))}))))},k=n(43354),x=n(12772),B=n(34514),T=function(e){var t=e.data;return o.createElement(r.Z,{className:"outerPadding"},o.createElement(r.Z,{className:"container"},o.createElement(x.Z,null),o.createElement(B.Z,null,o.createElement(u,null),o.createElement(O,null),o.createElement(m,null),o.createElement(_,{data:t}),o.createElement(k.Z,null))))}}}]);
//# sourceMappingURL=component---gatsby-theme-academic-src-pages-index-jsx-ed2712256d2849637b28.js.map