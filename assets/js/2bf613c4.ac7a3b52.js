"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[5110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=s,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));const o={sidebar_position:1},i="Testing",r={unversionedId:"building-modules/testing",id:"building-modules/testing",title:"Testing",description:"The Cosmos SDK contains different types of tests.",source:"@site/docs/building-modules/15-testing.md",sourceDirName:"building-modules",slug:"/building-modules/testing",permalink:"/main/building-modules/testing",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Dependency Injection",permalink:"/main/building-modules/depinject"},next:{title:"Overview of app.go",permalink:"/main/building-apps/app-go"}},l={},p=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Example",id:"example",level:3},{value:"Integration Tests",id:"integration-tests",level:2},{value:"Example",id:"example-1",level:3},{value:"Deterministic and Regression tests",id:"deterministic-and-regression-tests",level:2},{value:"Simulations",id:"simulations",level:2},{value:"End-to-end Tests",id:"end-to-end-tests",level:2},{value:"Summary",id:"summary",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing"},"Testing"),(0,s.kt)("p",null,"The Cosmos SDK contains different types of ",(0,s.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/practical-test-pyramid.html"},"tests"),".\nThese tests have different goals and are used at different stages of the development cycle.\nWe advice, as a general rule, to use tests at all stages of the development cycle.\nIt is adviced, as a chain developer, to test your application and modules in a similar way than the SDK."),(0,s.kt)("p",null,"The rationale behind testing can be found in ",(0,s.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/architecture/adr-059-test-scopes.html"},"ADR-59"),"."),(0,s.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,s.kt)("p",null,"Unit tests are the lowest test category of the ",(0,s.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/practical-test-pyramid.html"},"test pyramid"),".\nAll packages and modules should have unit test coverage. Modules should have their dependencies mocked: this means mocking keepers."),(0,s.kt)("p",null,"The SDK uses ",(0,s.kt)("inlineCode",{parentName:"p"},"mockgen")," to generate mocks for keepers:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/scripts/mockgen.sh#L3-L6\n")),(0,s.kt)("p",null,"You can read more about mockgen ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/golang/mock"},"here"),"."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"As an example, we will walkthrough the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/gov/keeper/keeper_test.go"},"keeper tests")," of the ",(0,s.kt)("inlineCode",{parentName:"p"},"x/gov")," module."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"x/gov")," module has a ",(0,s.kt)("inlineCode",{parentName:"p"},"Keeper")," type requires a few external dependencies (ie. imports outside ",(0,s.kt)("inlineCode",{parentName:"p"},"x/gov")," to work properly)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/gov/keeper/keeper.go#L61-L65\n")),(0,s.kt)("p",null,"In order to only test ",(0,s.kt)("inlineCode",{parentName:"p"},"x/gov"),", we mock the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.46/building-modules/keeper.html#type-definition"},"expected keepers")," and instantiate the ",(0,s.kt)("inlineCode",{parentName:"p"},"Keeper")," with the mocked dependencies. Note that we may need to configure the mocked dependencies to return the expected values:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/gov/keeper/common_test.go#L67-L81\n")),(0,s.kt)("p",null,"This allows us to test the ",(0,s.kt)("inlineCode",{parentName:"p"},"x/gov")," module without having to import other modules."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/gov/keeper/keeper_test.go#L3-L35\n")),(0,s.kt)("p",null,"We can test then create unit tests using the newly created ",(0,s.kt)("inlineCode",{parentName:"p"},"Keeper")," instance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/gov/keeper/keeper_test.go#L73-L91\n")),(0,s.kt)("h2",{id:"integration-tests"},"Integration Tests"),(0,s.kt)("p",null,"Integration tests are at the second level of the ",(0,s.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/practical-test-pyramid.html"},"test pyramid"),".\nIn the SDK, we locate our integration tests under ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/tests/integration"},(0,s.kt)("inlineCode",{parentName:"a"},"/tests/integrations")),"."),(0,s.kt)("p",null,"The goal of these integration tests is to test a component with a minimal application (i.e. not ",(0,s.kt)("inlineCode",{parentName:"p"},"simapp"),"). The minimal application is defined with the help of ",(0,s.kt)("a",{parentName:"p",href:"/main/tooling/depinject"},(0,s.kt)("inlineCode",{parentName:"a"},"depinject"))," \u2013 the SDK dependency injection framework, and includes all necessary modules to test the component. With the helps of the SDK testing package, we can easily create a minimal application and start the application with a set of genesis transactions: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/testutil/sims/app_helpers.go"},"https://github.com/cosmos/cosmos-sdk/blob/main/testutil/sims/app_helpers.go"),"."),(0,s.kt)("h3",{id:"example-1"},"Example"),(0,s.kt)("p",null,"Here, we will walkthrough the integration tests of the ",(0,s.kt)("inlineCode",{parentName:"p"},"x/distribution")," module. The ",(0,s.kt)("inlineCode",{parentName:"p"},"x/distribution")," module has, in addition to keeper unit tests, integration tests that test the ",(0,s.kt)("inlineCode",{parentName:"p"},"x/distribution")," module with a minimal application. This is expected as you may want to test the ",(0,s.kt)("inlineCode",{parentName:"p"},"x/distribution")," module with actual application logic, instead of only mocked dependencies."),(0,s.kt)("p",null,"For creating a minimal application, we use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/testutil/sims/app_helpers.go#L95-L99"},(0,s.kt)("inlineCode",{parentName:"a"},"simtestutil.Setup"))," and an ",(0,s.kt)("a",{parentName:"p",href:"/main/tooling/depinject"},(0,s.kt)("inlineCode",{parentName:"a"},"AppConfig"))," of the ",(0,s.kt)("inlineCode",{parentName:"p"},"x/distribution")," minimal dependencies."),(0,s.kt)("p",null,"For instance, the ",(0,s.kt)("inlineCode",{parentName:"p"},"AppConfig")," of ",(0,s.kt)("inlineCode",{parentName:"p"},"x/distribution")," is defined as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/distribution/testutil/app_config.go"},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/distribution/testutil/app_config.go"))),(0,s.kt)("p",null,"This is a stripped down version of the ",(0,s.kt)("inlineCode",{parentName:"p"},"simapp")," ",(0,s.kt)("inlineCode",{parentName:"p"},"AppConfig"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/app_config.go"},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/app_config.go"))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You can as well use the ",(0,s.kt)("inlineCode",{parentName:"p"},"AppConfig")," ",(0,s.kt)("inlineCode",{parentName:"p"},"configurator")," for creating an ",(0,s.kt)("inlineCode",{parentName:"p"},"AppConfig")," ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/slashing/app_test.go#L54-L62"},"inline"),". There no difference between those two ways, use whichever you prefer.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/tests/integration/distribution/keeper/keeper_test.go#L28-L33\n")),(0,s.kt)("p",null,"Now the types are injected and we can use them for our tests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/tests/integration/distribution/keeper/keeper_test.go#L21-L53\n")),(0,s.kt)("h2",{id:"deterministic-and-regression-tests"},"Deterministic and Regression tests"),(0,s.kt)("p",null,"Tests are written for queries in the Cosmos SDK which have ",(0,s.kt)("inlineCode",{parentName:"p"},"module_query_safe")," Protobuf annotation."),(0,s.kt)("p",null,"Each query is tested using 2 methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use property-based testing with the ",(0,s.kt)("a",{parentName:"li",href:"https://pkg.go.dev/pgregory.net/rapid@v0.5.3"},(0,s.kt)("inlineCode",{parentName:"a"},"rapid"))," library. The property that is tested is that the query response and gas consumption are the same upon 1000 query calls."),(0,s.kt)("li",{parentName:"ul"},"Regression tests are written with hardcoded responses and gas, and verify they don't change upon 1000 calls and between SDK patch versions.")),(0,s.kt)("p",null,"Here's an example of regression tests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/tests/integration/bank/keeper/deterministic_test.go#L102-L115\n")),(0,s.kt)("h2",{id:"simulations"},"Simulations"),(0,s.kt)("p",null,"Simulations uses as well a minimal application, built with ",(0,s.kt)("a",{parentName:"p",href:"/main/tooling/depinject"},(0,s.kt)("inlineCode",{parentName:"a"},"depinject")),":"),(0,s.kt)("p",null,"Following is an example for ",(0,s.kt)("inlineCode",{parentName:"p"},"x/gov/")," simulations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/gov/simulation/operations_test.go#L292-L310\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/gov/simulation/operations_test.go#L69-L111\n")),(0,s.kt)("h2",{id:"end-to-end-tests"},"End-to-end Tests"),(0,s.kt)("p",null,"End-to-end tests are at the top of the ",(0,s.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/practical-test-pyramid.html"},"test pyramid"),".\nThey must test the whole application flow, from the user perspective (for instance, CLI tests). They are located under ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/main/tests/e2e"},(0,s.kt)("inlineCode",{parentName:"a"},"/tests/e2e")),"."),(0,s.kt)("p",null,"For that, the SDK is using ",(0,s.kt)("inlineCode",{parentName:"p"},"simapp")," but you should use your own application (",(0,s.kt)("inlineCode",{parentName:"p"},"appd"),").\nHere are some examples:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"SDK E2E tests: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/tree/main/tests/e2e"},"https://github.com/cosmos/cosmos-sdk/tree/main/tests/e2e"),"."),(0,s.kt)("li",{parentName:"ul"},"Cosmos Hub E2E tests: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/cosmos/gaia/tree/main/tests/e2e"},"https://github.com/cosmos/gaia/tree/main/tests/e2e"),"."),(0,s.kt)("li",{parentName:"ul"},"Osmosis E2E tests: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/osmosis-labs/osmosis/tree/main/tests/e2e"},"https://github.com/osmosis-labs/osmosis/tree/main/tests/e2e"),".")),(0,s.kt)("admonition",{title:"warning",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The SDK is in the process of creating its E2E tests, as defined in ",(0,s.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/architecture/adr-059-test-scopes.html"},"ADR-59"),". This page will eventually be updated with better examples.")),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Scope"),(0,s.kt)("th",{parentName:"tr",align:null},"App Fixture"),(0,s.kt)("th",{parentName:"tr",align:null},"Mocks?"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Unit"),(0,s.kt)("td",{parentName:"tr",align:null},"None"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Integration"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"depinject")),(0,s.kt)("td",{parentName:"tr",align:null},"Some")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Simulation"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"depinject")),(0,s.kt)("td",{parentName:"tr",align:null},"No")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"E2E"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"appd")),(0,s.kt)("td",{parentName:"tr",align:null},"No")))))}c.isMDXComponent=!0}}]);