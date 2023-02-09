"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[1805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={},o="ADR {ADR-NUMBER}:",s={unversionedId:"architecture/adr-template",id:"architecture/adr-template",title:"ADR {ADR-NUMBER}:",description:"Changelog",source:"@site/docs/architecture/adr-template.md",sourceDirName:"architecture",slug:"/architecture/adr-template",permalink:"/main/architecture/adr-template",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 063: Core Module API",permalink:"/main/architecture/adr-063-core-module-api"},next:{title:"Specifications",permalink:"/main/spec/"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"Test Cases optional",id:"test-cases-optional",level:2},{value:"References",id:"references",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-adr-number-title"},"ADR {ADR-NUMBER}: {TITLE}"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{date}: {changelog}")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"{DRAFT | PROPOSED} Not Implemented"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please have a look at the ",(0,a.kt)("a",{parentName:"p",href:"/main/architecture/PROCESS#adr-status"},"PROCESS")," page.\nUse DRAFT if the ADR is in a draft stage (draft PR) or PROPOSED if it's in review.")),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\"If you can't explain it simply, you don't understand it well enough.\" Provide a simplified and layman-accessible explanation of the ADR.\nA short (~200 word) description of the issue being addressed.")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section describes the forces at play, including technological, political, social, and project local. These forces are probably in tension, and should be called out as such. The language in this section is value-neutral. It is simply describing facts. It should clearly explain the problem and motivation that the proposal aims to resolve.\n{context body}")),(0,a.kt)("h2",{id:"alternatives"},"Alternatives"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section describes alternative designs to the chosen design. This section is important and if an adr does not have any alternatives then it should be considered that the ADR was not thought through. ")),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'This section describes our response to these forces. It is stated in full sentences, with active voice. "We will ..."\n{decision body}')),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'This section describes the resulting context, after applying the decision. All consequences should be listed here, not just the "positive" ones. A particular decision may have positive, negative, and neutral consequences, but all of them affect the team and project in the future.')),(0,a.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All ADRs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The ADR must explain how the author proposes to deal with these incompatibilities. ADR submissions without a sufficient backwards compatibility treatise may be rejected outright.")),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("p",null,"{positive consequences}"),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("p",null,"{negative consequences}"),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("p",null,"{neutral consequences}"),(0,a.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,a.kt)("p",null,"While an ADR is in the DRAFT or PROPOSED stage, this section should contain a summary of issues to be solved in future iterations (usually referencing comments from a pull-request discussion).\nLater, this section can optionally list ideas or improvements the author or reviewers found during the analysis of this ADR."),(0,a.kt)("h2",{id:"test-cases-optional"},"Test Cases ","[optional]"),(0,a.kt)("p",null,"Test cases for an implementation are mandatory for ADRs that are affecting consensus changes. Other ADRs can choose to include links to test cases if applicable."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{reference link}")))}d.isMDXComponent=!0}}]);