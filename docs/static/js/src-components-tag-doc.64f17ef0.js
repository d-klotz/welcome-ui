(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/Tag/doc.mdx":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return f});var t=a("./node_modules/react/index.js"),r=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js"),i=a("./node_modules/docz/dist/index.m.js"),c=a("./docz.styled.js"),s=a("./src/components/Tag/index.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function d(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function p(e,n){return!n||"object"!==l(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=p(this,m(n).call(this,e))).layout=null,a}var a,t,l;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,r.a.Component),a=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components,a=u(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"tag"}},"Tag"),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"variants"}},"Variants"),r.a.createElement(o.MDXTag,{name:"p",components:n},"Admire these beautiful colors \ud83d\udc85"),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"basics"}},"Basics"),r.a.createElement(c.b,{__codesandbox:"undefined",__position:0,__code:'<Tag>Default</Tag>\n<Tag variant="primary">Primary</Tag>\n<Tag variant="secondary">Secondary</Tag>',__scope:{props:this?this.props:a,Playground:c.b,Tag:s.a}},r.a.createElement(s.a,null,"Default"),r.a.createElement(s.a,{variant:"primary"},"Primary"),r.a.createElement(s.a,{variant:"secondary"},"Secondary")),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"states"}},"States"),r.a.createElement(c.b,{__codesandbox:"undefined",__position:1,__code:'<Tag variant="error">Error</Tag>\n<Tag variant="warning">Warning</Tag>\n<Tag variant="info">Info</Tag>',__scope:{props:this?this.props:a,Playground:c.b,Tag:s.a}},r.a.createElement(s.a,{variant:"error"},"Error"),r.a.createElement(s.a,{variant:"warning"},"Warning"),r.a.createElement(s.a,{variant:"info"},"Info")),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"subs"}},"Subs"),r.a.createElement(c.b,{__codesandbox:"undefined",__position:2,__code:'<Tag variant="blue">Blue</Tag>\n<Tag variant="green">Green</Tag>\n<Tag variant="orange">Orange</Tag>\n<Tag variant="pink">Pink</Tag>\n<Tag variant="purple">Purple</Tag>\n<Tag variant="red">Red</Tag>\n<Tag variant="turquoize">Turquoize</Tag>\n<Tag variant="yellow">Yellow</Tag>',__scope:{props:this?this.props:a,Playground:c.b,Tag:s.a}},r.a.createElement(s.a,{variant:"blue"},"Blue"),r.a.createElement(s.a,{variant:"green"},"Green"),r.a.createElement(s.a,{variant:"orange"},"Orange"),r.a.createElement(s.a,{variant:"pink"},"Pink"),r.a.createElement(s.a,{variant:"purple"},"Purple"),r.a.createElement(s.a,{variant:"red"},"Red"),r.a.createElement(s.a,{variant:"turquoize"},"Turquoize"),r.a.createElement(s.a,{variant:"yellow"},"Yellow")),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"sizes"}},"Sizes"),r.a.createElement(o.MDXTag,{name:"p",components:n},"Use size property with ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sm")," ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"md")," or ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lg"),"."),r.a.createElement(c.b,{__codesandbox:"undefined",__position:3,__code:'<Tag size="sm">Small</Tag>\n<Tag size="md">Medium</Tag>\n<Tag size="lg">Large</Tag>',__scope:{props:this?this.props:a,Playground:c.b,Tag:s.a}},r.a.createElement(s.a,{size:"sm"},"Small"),r.a.createElement(s.a,{size:"md"},"Medium"),r.a.createElement(s.a,{size:"lg"},"Large")),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"one-character-style"}},"One character style"),r.a.createElement(o.MDXTag,{name:"p",components:n},"When we have only one character, we apply same size for the width and height."),r.a.createElement(c.b,{__codesandbox:"undefined",__position:4,__code:'<Tag size="sm">1</Tag>\n<Tag size="md">1</Tag>\n<Tag size="lg">1</Tag>',__scope:{props:this?this.props:a,Playground:c.b,Tag:s.a}},r.a.createElement(s.a,{size:"sm"},"1"),r.a.createElement(s.a,{size:"md"},"1"),r.a.createElement(s.a,{size:"lg"},"1")),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"rounded"}},"Rounded"),r.a.createElement(o.MDXTag,{name:"p",components:n},"Add ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rounded")," property to set a border-radius ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"1em"),"."),r.a.createElement(c.b,{__codesandbox:"undefined",__position:5,__code:'<Tag size="lg" rounded>\n  Rounded\n</Tag>\n<Tag size="lg" rounded>\n  1\n</Tag>',__scope:{props:this?this.props:a,Playground:c.b,Tag:s.a}},r.a.createElement(s.a,{size:"lg",rounded:!0},"Rounded"),r.a.createElement(s.a,{size:"lg",rounded:!0},"1")),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),r.a.createElement(i.f,{of:s.a}))}}])&&d(a.prototype,t),l&&d(a,l),n}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/components/Tag/index.js":function(e,n,a){"use strict";var t=a("./node_modules/react/index.js"),r=a.n(t),o=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=a("./src/utils/utils.js"),c=a("./src/utils/variants.js"),s=a("./src/theme/helpers.js"),l=o.d.div.withConfig({componentId:"sc-12bthzp-0"})(function(e){return Object(o.c)(["",";"," ",";display:inline-flex;align-items:center;justify-content:center;background-color:",";border-radius:",";",";",";"],Object(s.b)("tags.default"),Object(s.b)("tags.sizes.".concat(e.size)),"default"!==e.variant&&Object(s.b)("tags.variants"),Object(c.b)(e.variant),e.rounded?"1em":Object(s.a)("radii.md"),i.a,1===e.length&&(n=e.size,Object(o.c)([""," padding:0;"],Object(s.b)("tags.oneCharacter.".concat(n)))));var n});function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(n,"a",function(){return d});var d=function(e){var n=e.children,a=e.rounded,t=e.size,o=void 0===t?"md":t,i=e.variant,c=void 0===i?"default":i,s=u(e,["children","rounded","size","variant"]);return r.a.createElement(l,Object.assign({length:n.length,rounded:a,size:o,variant:c},s),n)};d.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{size:{defaultValue:{value:"'md'",computed:!1},type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'blue'",computed:!1},{value:"'default'",computed:!1},{value:"'error'",computed:!1},{value:"'green'",computed:!1},{value:"'info'",computed:!1},{value:"'orange'",computed:!1},{value:"'pink'",computed:!1},{value:"'primary'",computed:!1},{value:"'purple'",computed:!1},{value:"'red'",computed:!1},{value:"'secondary'",computed:!1},{value:"'turquoize'",computed:!1},{value:"'warning'",computed:!1},{value:"'yellow'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},rounded:{type:{name:"bool"},required:!1,description:"set a border-radius to 1em"}}}},"./src/utils/variants.js":function(e,n,a){"use strict";a.d(n,"a",function(){return o}),a.d(n,"c",function(){return c}),a.d(n,"b",function(){return l});var t=a("./src/theme/helpers.js");function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var o=function(e,n){return n?"error":e?"warning":void 0},i={error:"colors.danger.500",warning:"colors.warning.500",info:"colors.info.500"},c=function(e){var n=i[e];return n?Object(t.a)(n):null},s=function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(n){r(e,n,a[n])})}return e}({blue:"colors.sub.blue",default:"colors.nude.300",green:"colors.sub.green",orange:"colors.sub.orange",pink:"colors.sub.pink",primary:"colors.primary.500",purple:"colors.sub.purple",red:"colors.sub.red",secondary:"colors.secondary.500",turquoize:"colors.sub.turquoize",yellow:"colors.sub.yellow"},i),l=function(e){var n=s[e];return n?Object(t.a)(n):null}}}]);
//# sourceMappingURL=src-components-tag-doc.fce18d2abf267fe209c9.js.map