"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[7061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=i,m=h["".concat(p,".").concat(u)]||h[u]||c[u]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="Transaction Tips",s={unversionedId:"core/tips",id:"core/tips",title:"Transaction Tips",description:"Transaction tips are a mechanism to pay for transaction fees using another denom than the native fee denom of the chain. They are still in beta, and are not included by default in the SDK.",source:"@site/docs/core/14-tips.md",sourceDirName:"core",slug:"/core/tips",permalink:"/main/core/tips",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Protobuf Documentation",permalink:"/main/core/proto-docs"},next:{title:"In-Place Store Migrations",permalink:"/main/core/upgrade"}},p={},l=[{value:"Context",id:"context",level:2},{value:"Transaction Tips Flow",id:"transaction-tips-flow",level:2},{value:"Fee Payers Market",id:"fee-payers-market",level:3},{value:"Tipper and Fee Payer Sign Modes",id:"tipper-and-fee-payer-sign-modes",level:3},{value:"Enabling Tips on your Chain",id:"enabling-tips-on-your-chain",level:2},{value:"CLI Usage",id:"cli-usage",level:2},{value:"Programmatic Usage",id:"programmatic-usage",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transaction-tips"},"Transaction Tips"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Transaction tips are a mechanism to pay for transaction fees using another denom than the native fee denom of the chain. They are still in beta, and are not included by default in the SDK.")),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"In a Cosmos ecosystem where more and more chains are connected via ",(0,i.kt)("a",{parentName:"p",href:"https://ibc.cosmos.network/"},"IBC"),", it happens that users want to perform actions on chains where they don't have native tokens yet. An example would be an Osmosis user who wants to vote on a proposal on the Cosmos Hub, but they don't have ATOMs in their wallet. A solution would be to swap OSMO for ATOM just for voting on this proposal, but that is cumbersome. Cross-chain DeFi project ",(0,i.kt)("a",{parentName:"p",href:"https://emeris.com/"},"Emeris")," is another use case."),(0,i.kt)("p",null,"Transaction tips is a new solution for cross-chain transaction fees payment, whereby the transaction initiator signs a transaction without specifying fees, but uses a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Tip")," field. They send this signed transaction to a fee relayer who will choose the transaction fees and broadcast the final transaction, and the SDK provides a mechanism that will transfer the pre-defined ",(0,i.kt)("inlineCode",{parentName:"p"},"Tip")," to the fee payer, to cover for fees."),(0,i.kt)("p",null,"Assuming we have two chains, A and B, we define the following terms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"the tipper"),": this is the initiator of the transaction, who wants to execute a ",(0,i.kt)("inlineCode",{parentName:"li"},"Msg")," on chain A, but doesn't have any native chain A tokens, only chain B tokens. In our example above, the tipper is the Osmosis (chain B) user wanting to vote on a Cosmos Hub (chain A) proposal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"the fee payer"),": this is the party that will relay and broadcast the final transaction on chain A, and has chain A tokens. The tipper doesn't need to trust the feepayer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"the target chain"),": the chain where the ",(0,i.kt)("inlineCode",{parentName:"li"},"Msg")," is executed, chain A in this case.")),(0,i.kt)("h2",{id:"transaction-tips-flow"},"Transaction Tips Flow"),(0,i.kt)("p",null,"The transaction tips flow happens in multiple steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The tipper sends via IBC some chain B tokens to chain A. These tokens will cover for fees on the target chain A. This means that chain A's bank module holds some IBC tokens under the tipper's address.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The tipper drafts a transaction to be executed on the chain A. It can include chain A ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg"),"s. However, instead of creating a normal transaction, they create the following ",(0,i.kt)("inlineCode",{parentName:"p"},"AuxSignerData")," document:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/tx/v1beta1/tx.proto#L237-L256\n")),(0,i.kt)("p",{parentName:"li"},"where we have defined ",(0,i.kt)("inlineCode",{parentName:"p"},"SignDocDirectAux")," as:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/tx/v1beta1/tx.proto#L67-L97\n")),(0,i.kt)("p",{parentName:"li"},"where ",(0,i.kt)("inlineCode",{parentName:"p"},"Tip")," is defined as"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/tx/v1beta1/tx.proto#L226-L235\n")),(0,i.kt)("p",{parentName:"li"},"Notice that this document doesn't sign over the final chain A fees. Instead, it includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tip")," field. It also doesn't include the whole ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthInfo")," object as in ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT"),", only the minimum information needed by the tipper")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The tipper signs the ",(0,i.kt)("inlineCode",{parentName:"p"},"SignDocDirectAux")," document and attaches the signature to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuxSignerData"),", then sends the signed ",(0,i.kt)("inlineCode",{parentName:"p"},"AuxSignerData")," to the fee payer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the signed ",(0,i.kt)("inlineCode",{parentName:"p"},"AuxSignerData")," document, the fee payer constructs a transaction, using the following algorithm:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use as ",(0,i.kt)("inlineCode",{parentName:"li"},"TxBody")," the exact ",(0,i.kt)("inlineCode",{parentName:"li"},"AuxSignerData.SignDocDirectAux.body_bytes"),", to not alter the original intent of the tipper,"),(0,i.kt)("li",{parentName:"ul"},"create an ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthInfo")," with:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AuthInfo.Tip")," copied from ",(0,i.kt)("inlineCode",{parentName:"li"},"AuxSignerData.SignDocDirectAux.Tip"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AuthInfo.Fee")," chosen by the fee payer, which should cover for the transaction gas, but also be small enough so that the tip/fee exchange rate is economically interesting for the fee payer,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AuthInfo.SignerInfos")," has two signers: the first signer is the tipper, using the public key, sequence and sign mode specified in ",(0,i.kt)("inlineCode",{parentName:"li"},"AuxSignerData"),"; and the second signer is the fee payer, using their favorite sign mode,"))),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"Signatures")," array with two items: the tipper's signature from ",(0,i.kt)("inlineCode",{parentName:"li"},"AuxSignerData.Sig"),", and the final fee payer's signature.")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Broadcast the final transaction signed by the two parties to the target chain. Once included, the Cosmos SDK will trigger a transfer of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tip")," specified in the transaction from the tipper address to the fee payer address.")),(0,i.kt)("h3",{id:"fee-payers-market"},"Fee Payers Market"),(0,i.kt)("p",null,"The benefit of transaction tips for the tipper is clear: there is no need to swap tokens before executing a cross-chain message."),(0,i.kt)("p",null,"For the fee payer, the benefit is in the tip v.s. fee exchange. Put simply, the fee payer pays the fees of an unknown tipper's transaction, and gets in exchange the tip that the tipper chose. There is an economic incentive for the fee payer to do so only when the tip is greater than the transaction fees, given the exchange rates between the two tokens."),(0,i.kt)("p",null,"In the future, we imagine a market where fee payers will compete to include transactions from tippers, who on their side will optimize by specifying the lowest tip possible. A number of automated services might spin up to perform transaction gas simulation and exchange rate monitoring to optimize both the tip and fee values in real-time."),(0,i.kt)("h3",{id:"tipper-and-fee-payer-sign-modes"},"Tipper and Fee Payer Sign Modes"),(0,i.kt)("p",null,"As we mentioned in the flow above, the tipper signs over the ",(0,i.kt)("inlineCode",{parentName:"p"},"SignDocDirectAux"),", and the fee payer signs over the whole final transaction. As such, both parties might use different sign modes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The tipper MUST use ",(0,i.kt)("inlineCode",{parentName:"li"},"SIGN_MODE_DIRECT_AUX")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"SIGN_MODE_LEGACY_AMINO_JSON"),". That is because the tipper needs to sign over the body, the tip, but not the other signers' information and not over the fee (which is unknown to the tipper)."),(0,i.kt)("li",{parentName:"ul"},"The fee payer MUST use ",(0,i.kt)("inlineCode",{parentName:"li"},"SIGN_MODE_DIRECT")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"SIGN_MODE_LEGACY_AMINO_JSON"),". The fee payer signs over the whole transaction.")),(0,i.kt)("p",null,"For example, if the fee payer signs the whole transaction with ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT_AUX"),", it will be rejected by the node, as that would introduce malleability issues (",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT_AUX")," doesn't sign over fees)."),(0,i.kt)("p",null,"In both cases, using ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_LEGACY_AMINO_JSON")," is recommended only if hardware wallet signing is needed."),(0,i.kt)("h2",{id:"enabling-tips-on-your-chain"},"Enabling Tips on your Chain"),(0,i.kt)("p",null,"The transaction tips functionality is introduced in Cosmos SDK v0.46, so earlier versions do not have support for tips. It is however not included by default in a v0.46 app. Sending a transaction with tips to a chain which didn't enable tips will result in a no-op, i.e. the ",(0,i.kt)("inlineCode",{parentName:"p"},"tip")," field in the transaction will be ignored."),(0,i.kt)("p",null,"Enabling tips on a chain is done by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"TipDecorator")," in the posthandler chain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// HandlerOptions are the options required for constructing a SDK PostHandler which supports tips.\ntype HandlerOptions struct {\n    BankKeeper types.BankKeeper\n}\n\n// MyPostHandler returns a posthandler chain with the TipDecorator.\nfunc MyPostHandler(options HandlerOptions) (sdk.AnteHandler, error) {\n    if options.BankKeeper == nil {\n        return nil, sdkerrors.Wrap(sdkerrors.ErrLogic, "bank keeper is required for posthandler")\n    }\n\n    postDecorators := []sdk.AnteDecorator{\n        posthandler.NewTipDecorator(options.bankKeeper),\n    }\n\n    return sdk.ChainAnteDecorators(postDecorators...), nil\n}\n\nfunc (app *SimApp) setPostHandler() {\n    postHandler, err := MyPostHandler(\n        HandlerOptions{\n            BankKeeper: app.BankKeeper,\n        },\n    )\n    if err != nil {\n        panic(err)\n    }\n\n    app.SetPostHandler(postHandler)\n}\n')),(0,i.kt)("p",null,"Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTipDecorator")," needs a reference to the BankKeeper, for transferring the tip to the fee payer."),(0,i.kt)("h2",{id:"cli-usage"},"CLI Usage"),(0,i.kt)("p",null,"The Cosmos SDK also provides some CLI tooling for the transaction tips flow, both for the tipper and for the feepayer."),(0,i.kt)("p",null,"For the tipper, the CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"tx")," subcommand has two new flags: ",(0,i.kt)("inlineCode",{parentName:"p"},"--aux")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--tip"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"--aux")," flag is used to denote that we are creating an ",(0,i.kt)("inlineCode",{parentName:"p"},"AuxSignerData")," instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tx"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"--tip")," is used to populate its ",(0,i.kt)("inlineCode",{parentName:"p"},"Tip")," field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ simd tx gov vote 16 yes --from <tipper_address> --aux --tip 50ibcdenom\n\n\n### Prints the AuxSignerData as JSON:\n### {"address":"cosmos1q0ayf5vq6fd2xxrwh30upg05hxdnyw2h5249a2","sign_doc":{"body_bytes":"CosBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmsKLWNvc21vczFxMGF5ZjV2cTZmZDJ4eHJ3aDMwdXBnMDVoeGRueXcyaDUyNDlhMhItY29zbW9zMXdlNWoyZXI2MHV5OXF3YzBta3ptdGdtdHA5Z3F5NXY2bjhnZGdlGgsKBXN0YWtlEgIxMA==","public_key":{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AojOF/1luQ5H/nZDSrE1w3CyzGJhJdQuS7hFX5wAA6uJ"},"chain_id":"","account_number":"0","sequence":"1","tip":{"amount":[{"denom":"ibcdenom","amount":"50"}],"tipper":"cosmos1q0ayf5vq6fd2xxrwh30upg05hxdnyw2h5249a2"}},"mode":"SIGN_MODE_DIRECT_AUX","sig":"v/d/bGq9FGdecs6faMG2t//nRirFTiqwFtUB65M6kh0QdUeM6jg3r8oJX1o17xkoDxJ09EyJiSyvo6fbU7vUxg=="}\n')),(0,i.kt)("p",null,"It is useful to pipe the JSON output to a file, ",(0,i.kt)("inlineCode",{parentName:"p"},"> aux_signed_tx.json")),(0,i.kt)("p",null,"For the fee payer, the Cosmos SDK added a ",(0,i.kt)("inlineCode",{parentName:"p"},"tx aux-to-fee")," subcommand to include an ",(0,i.kt)("inlineCode",{parentName:"p"},"AuxSignerData")," into a transaction, add fees to it, and broadcast it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ simd tx aux-to-fee aux_signed_tx.json --from <fee_payer_address> --fees 30atom\n\n### Prints the broadcasted tx response:\n### code: 0\n### codespace: sdk\n### data: ""\n### events: []\n### gas_used: "0"\n### gas_wanted: "0"\n### height: "0"\n### info: ""\n### logs: []\n### timestamp: ""\n### tx: null\n')),(0,i.kt)("p",null,"Upon completion of the second command, the fee payer's balance will be down the ",(0,i.kt)("inlineCode",{parentName:"p"},"30atom")," fees, and up the ",(0,i.kt)("inlineCode",{parentName:"p"},"50ibcdenom")," tip."),(0,i.kt)("p",null,"For both commands, the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--sign-mode=amino-json")," is still available for hardware wallet signing."),(0,i.kt)("h2",{id:"programmatic-usage"},"Programmatic Usage"),(0,i.kt)("p",null,"For the tipper, the SDK exposes a new transaction builder, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuxTxBuilder"),", for generating an ",(0,i.kt)("inlineCode",{parentName:"p"},"AuxSignerData"),". The API of ",(0,i.kt)("inlineCode",{parentName:"p"},"AuxTxBuilder")," is defined ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/tx/aux_builder.go#L16"},"in ",(0,i.kt)("inlineCode",{parentName:"a"},"client/tx")),", and can be used as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Note: there\'s no need to use clientCtx.TxConfig anymore.\n\nbldr := clienttx.NewAuxTxBuilder()\nerr := bldr.SetMsgs(msgs...)\nbldr.SetAddress("cosmos1...")\nbldr.SetMemo(...)\nbldr.SetTip(...)\nbldr.SetPubKey(...)\nerr := bldr.SetSignMode(...) // DIRECT_AUX or AMINO, or else error\n// ... other setters are also available\n\n// Get the bytes to sign.\nsignBz, err := bldr.GetSignBytes()\n\n// Sign the bz using your favorite method.\nsig, err := privKey.sign(signBz)\n\n// Set the signature\nbldr.SetSig(sig)\n\n// Get the final auxSignerData to be sent to the fee payer\nauxSignerData, err:= bldr.GetAuxSignerData()\n')),(0,i.kt)("p",null,"For the fee payer, the SDK added a new method on the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"TxBuilder")," to import data from an ",(0,i.kt)("inlineCode",{parentName:"p"},"AuxSignerData"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// get `auxSignerData` from tipper, see code snippet above.\n\ntxBuilder := clientCtx.TxConfig.NewTxBuilder()\nerr := txBuilder.AddAuxSignerData(auxSignerData)\nif err != nil {\n    return err\n}\n\n// A lot of fields will be populated in txBuilder, such as its Msgs, tip\n// memo, etc...\n\n// The fee payer choses the fee to set on the transaction.\ntxBuilder.SetFeePayer(<fee_payer_address>)\ntxBuilder.SetFeeAmount(...)\ntxBuilder.SetGasLimit(...)\n\n// Usual signing code\nerr = authclient.SignTx(...)\nif err != nil {\n    return err\n}\n")))}c.isMDXComponent=!0}}]);