(self.webpackChunkgatsby_test=self.webpackChunkgatsby_test||[]).push([[921],{9789:function(e,t,n){"use strict";var a;n.d(t,{Z:function(){return m}});var r=new Uint8Array(16);function i(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"==typeof e&&o.test(e)},s=[],c=0;c<256;++c)s.push((c+256).toString(16).substr(1));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!l(n))throw TypeError("Stringified UUID is invalid");return n};var m=function(e,t,n){var a=(e=e||{}).random||(e.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=a[r];return t}return u(a)}},78531:function(e,t,n){"use strict";n.r(t);var a=n(85061),r=n(92137),i=n(87757),o=n.n(i),l=n(67294),s=n(96667),c=n(47798),u=n(80838),m=n(83332),d=n(44005),g=n(90058),f=n(43638),h=n(80633),p=n(79312),v=n(85505),b=n(10920),E=n(27136),y=n(51474),w=n(49995),Z=n(13508),k=n(54657),C=(n(98910),n(22019),n(49224),n(39331),n(4513)),T=n(89952),P=n(65733),S=n(32253),x=n(9901),N=n(31690),L=n(11592),R=n(76047),W=n(77447),A=n(88816),j=n(59477),H=n(9789),U=n(17710),F=n(59274),I=n(31261),M=n(8441),B=n(96531),D=n(48498),O=n(67253),V=n(74243),z=(n(74298),(0,b.Z)((function(e){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:y.Z[500],"&:hover":{backgroundColor:y.Z[700]}},fabProgress:{color:y.Z[500],position:"absolute",top:-6,left:-6,zIndex:1},buttonProgress:{color:y.Z[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})));t.default=function(){var e,t=l.useState(null),n=t[0],i=t[1],b=l.useState(null),y=(b[0],b[1],l.useState(null)),$=(y[0],y[1],l.useState(st([U.Z,U.Z,U.Z]))),G=$[0],_=$[1],X=l.useState(!1),q=X[0],J=X[1],K=l.useState(!1),Q=K[0],Y=K[1],ee=l.useState(!1),te=ee[0],ne=ee[1],ae=l.useState(!1),re=ae[0],ie=ae[1],oe=l.useState(!0),le=oe[0],se=oe[1],ce=l.useState(!1),ue=(ce[0],ce[1],l.useState(!1)),me=ue[0],de=ue[1],ge=l.useState(!1),fe=ge[0],he=ge[1],pe=l.useState(!1),ve=pe[0],be=pe[1],Ee=l.useState(!1),ye=Ee[0],we=Ee[1],Ze=l.useState(!1),ke=Ze[0],Ce=Ze[1],Te=l.useState(null),Pe=Te[0],Se=Te[1],xe=l.useState(null),Ne=xe[0],Le=xe[1],Re=l.useState(null),We=Re[0],Ae=Re[1],je=l.useState([[0,0],[0,0]]),He=je[0],Ue=je[1],Fe=l.useState(null),Ie=Fe[0],Me=Fe[1],Be=l.useState([]),De=Be[0],Oe=Be[1],Ve=l.useState([]),ze=(Ve[0],Ve[1],l.useState(!1)),$e=ze[0],Ge=ze[1],_e=l.useState(null),Xe=(_e[0],_e[1]),qe=l.useRef(),Je=l.useRef();l.useEffect((function(){var e=new MessageChannel,t=new MessageChannel,n=Ke("../dataWorker.js","dataWebWorker");n.postMessage({action:"connectToCanvasWorker"},[e.port1]),n.postMessage({action:"connectToClassifierWorker"},[t.port1]),Le(n);var a=Ke("../canvasWorker.js","CanvasWebWorker");a.postMessage({action:"connectToDataWorker"},[e.port2]),Se(a);var r=Ke("../classifierWorker.js","classifierWebWorker");r.postMessage({action:"connectToDataWorker"},[t.port2]),Ae(r)}),[]);var Ke=function(e,t){var n=new Worker(e);return n.addEventListener("error",(function(e){console.log("["+t+"] Error",e.message,e)})),n},Qe=z(),Ye=(0,v.Z)(((e={})[Qe.buttonSuccess]=fe,e)),et=function(e){i(null),null!=e&&tt(e)},tt=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Fetch!"),!(void 0===t|null==t)){e.next=3;break}return e.abrupt("return");case 3:be(!0),_({unclassified:[],positive:[],negative:[]}),e.t0=t,e.next="Random"===e.t0?9:"Positive"===e.t0||"Negative"===e.t0?11:"Confusing"===e.t0?13:"TrainingPositive"===e.t0||"TrainingNegative"===e.t0?15:18;break;case 9:return rt(Ne,"get",{getType:"cellPairs",getArgs:{amount:16}}).then((function(e){var t=e.data.getResult;return Oe(t),rt(Pe,"get",{getType:"blobUrlsFromCellPairs",getArgs:{cellPairs:t}})})).then((function(e){var t=st(e.data.blobUrls);_(t),be(!1)})),e.abrupt("break",18);case 11:return rt(Ne,"get",{getType:"cellPairs",getArgs:{amount:100}}).then((function(e){var n=e.data.getResult;return rt(We,"predictFilterCellPairs",{cellPairs:n,classType:t})})).then((function(e){var t=e.data.filteredCellPairs,n=t.slice(0,16);return Oe(t),rt(Pe,"get",{getType:"blobUrlsFromCellPairs",getArgs:{cellPairs:n}})})).then((function(e){var t=st(e.data.blobUrls);_(t),be(!1)})),e.abrupt("break",18);case 13:return rt(Ne,"get",{getType:"cellPairs",getArgs:{amount:100}}).then((function(e){var t=e.data.getResult;return rt(We,"confusingFilterCellPairs",{cellPairs:t})})).then((function(e){var t=e.data.sortedCellPairs.slice(0,16);return Oe(t),rt(Pe,"get",{getType:"blobUrlsFromCellPairs",getArgs:{cellPairs:t}})})).then((function(e){var t=st(e.data.blobUrls);_(t),be(!1)})),e.abrupt("break",18);case 15:return n=Ie.trainingData.map((function(e){return{ImageNumber:e[0],ObjectNumber:e[1]}})),rt(We,"predictFilterCellPairs",{cellPairs:n,classType:"TrainingPositive"===t?"Positive":"Negative"}).then((function(e){var t=e.data.filteredCellPairs;return Oe(t),rt(Pe,"get",{getType:"blobUrlsFromCellPairs",getArgs:{cellPairs:t}})})).then((function(e){var t=st(e.data.blobUrls);_(t)})),e.abrupt("break",18);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),nt=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Train!"),t=G.positive.map((function(e){return De[e.id]})),n=G.negative.map((function(e){return De[e.id]})),r=t.concat(n),i=new Array(t.length).fill(1).concat(new Array(n.length).fill(0)),Ge(!1),_(st([])),Oe([]),rt(Ne,"get",{getType:"objectRowsFromCellpairs",getArgs:{cellPairs:r}}).then((function(e){var t=e.data.getResult,n={classifierType:"LogisticRegression",trainingData:[].concat((0,a.Z)(Ie.trainingData),(0,a.Z)(t)),trainingLabels:[].concat((0,a.Z)(Ie.trainingLabels),(0,a.Z)(i)),featureIndicesToUse:Ie.featureIndicesToUse};return at(n)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),at=function(e){Ce(!0);var t=null,n=function(e){if(t==e.data.uuid)switch(e.data.action){case"updateTrainingLossCanvas":V.show.history(qe.current,e.data.trainLogs,e.data.ticks);break;case"updateTrainingAccuracyCanvas":V.show.history(Je.current,e.data.trainLogs,e.data.ticks);break;default:console.log("didn't render bad action")}};rt(We,"startTrainingGraphsConnection",{}).then((function(a){return t=a.data.uuid,We.addEventListener("message",n),rt(We,"train",{trainingObject:e})})).then((function(){return rt(We,"endTrainingGraphsConnection",{}),We.removeEventListener("message",n),rt(We,"confusionMatrix")})).then((function(e){var t=e.data.confusionMatrix;Ue(t)})).then((function(){Me(e),Ce(!1)}))},rt=function(e,t,n){var a=(0,H.Z)();return new Promise((function(r){e.addEventListener("message",(function t(n){n.data.uuid===a&&(e.removeEventListener("message",t),r(n))})),e.postMessage(Object.assign({action:t},n,{uuid:a}))}))},it=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Upload!"),de(!0),rt(Ne,"init",{fileListObject:t.target.files}).then((function(){return rt(Ne,"get",{getType:"trainingObject"})})).then((function(e){var t=e.data.getResult;return at(t)})).then((function(){de(!1),he(!0),J(!0),Y(!0),ie(!0),ne(!0),se(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ot=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Score All!"),$e){e.next=4;break}return console.log("Score All!"),e.abrupt("return",rt(We,"scoreObjectData").then((function(e){var t=e.data.scoreTableObject;console.log(t),Xe(t),Ge(!0)})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),lt=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Download!"),e.abrupt("return",rt(We,"getClassifier").then((function(e){O.FBF("indexeddb://"+Ie.classifierType).then((function(e){e.save("downloads://"+Ie.classifierType)}))})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function st(e){return{unclassified:e.map((function(e,t,n){return{id:t,address:e,info:"cell info, biology stuff"}})),positive:[],negative:[]}}return l.createElement(M.d,{onChange:function(e,t,n,a){var r;if(a){var i,o=(0,F.p)(G[e],G[a],t,n);return _(Object.assign({},G,((i={})[e]=o[0],i[a]=o[1],i)))}var l=(0,I.L)(G[e],t,n);return _(Object.assign({},G,((r={})[e]=l,r)))}},l.createElement("div",{style:{overflowX:"hidden",height:"100%",width:"100%"}},l.createElement(s.Z,{style:{}},l.createElement(h.Z,{src:f.Z,style:{marginLeft:"11%",height:"30%",width:"25%",position:"relative",maxHeight:"125px",marginBottom:"2%",marginTop:"2%"}}),l.createElement(c.Z,{style:{left:"40%"}},l.createElement("div",{className:Qe.root},l.createElement("div",{className:Qe.wrapper},l.createElement(W.ZP,{title:"Load Data","aria-label":"load data"},l.createElement(w.Z,{"aria-label":"save",color:"primary",component:"label",className:Ye,style:{height:"5vw",width:"5vw"}},fe?l.createElement(Z.Z,{style:{height:"50%",width:"50%"}}):l.createElement(k.Z,{style:{height:"50%",width:"50%"}}),l.createElement("input",{type:"file",hidden:!0,webkitdirectory:"true",mozdirectory:"true",msdirectory:"true",odirectory:"true",directory:"true",multiple:!0,onChange:function(e){it(e)},disabled:!le}))),me&&l.createElement(E.Z,{className:Qe.fabProgress,style:{height:"6vw",width:"6vw",marginTop:"4%",marginRight:"4%"}})))),l.createElement(c.Z,{style:{left:"15%",marginTop:"1%"}},l.createElement(W.ZP,{title:"Download","aria-label":"download"},l.createElement(w.Z,{"aria-label":"save",color:"primary",component:"label",disabled:!re,onClick:lt,style:{height:"5vw",width:"5vw"}}," ",l.createElement(p.Z,{style:{height:"50%",width:"50%"}}))))),l.createElement(s.Z,null,l.createElement(u.Z,{container:!0,justify:"center",spacing:2,style:{marginBottom:15}},l.createElement(u.Z,{key:0,item:!0},l.createElement(m.Z,{disabled:!q,variant:"contained","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},"Fetch"),l.createElement(d.Z,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){return et(null)}},l.createElement(g.Z,{onClick:function(){return et("Random")}},"Random"),l.createElement(g.Z,{onClick:function(){return et("Positive")}},"Positive"),l.createElement(g.Z,{onClick:function(){return et("Negative")}},"Negative"),l.createElement(g.Z,{onClick:function(){we(!0)}},"By Image"),l.createElement(g.Z,{onClick:function(){return et("TrainingPositive")}},"Training Set Positive"),l.createElement(g.Z,{onClick:function(){return et("TrainingNegative")}},"Training Set Negative"),l.createElement(g.Z,{onClick:function(){return et("Confusing")}},"Confusing"),l.createElement(C.Z,{open:ye,onClose:function(){return et(null)}},l.createElement(x.Z,null,"Fetch By Image"),l.createElement(P.Z,null,l.createElement(S.Z,null,"Select the image number you would like to fetch from."),l.createElement("form",{noValidate:!0},l.createElement(N.Z,null,l.createElement(L.Z,null,"Image"),l.createElement(R.Z,{autoFocus:!0},l.createElement(g.Z,{value:"1"},"1"),l.createElement(g.Z,{value:"2"},"2"),l.createElement(g.Z,{value:"3"},"3"),l.createElement(g.Z,{value:"4"},"4"),l.createElement(g.Z,{value:"5"},"5"))))),l.createElement(T.Z,null,l.createElement(m.Z,{onClick:function(){we(!1)},color:"primary"},"Close"))))),l.createElement(u.Z,{key:1,item:!0},l.createElement(m.Z,{disabled:!Q,variant:"contained",onClick:nt},"Train"),l.createElement(C.Z,{fullWidth:500,open:ke},l.createElement(x.Z,null,"Loss and Accuracy"),l.createElement(P.Z,null,l.createElement("div",{width:300,ref:Je}),l.createElement("div",{width:300,ref:qe})))),l.createElement(u.Z,{key:2,item:!0},te?l.createElement(A.default,{confusionMatrix:He}):l.createElement(m.Z,{disabled:!te,variant:"contained",onClick:function(){}},"Evaluate")),l.createElement(u.Z,{key:3,item:!0},te?l.createElement(j.default,{handleScoreAll:ot}):l.createElement(m.Z,{disabled:!te,variant:"contained",onClick:ot},"Score All")))),l.createElement("div",null,l.createElement("label",{style:{textAlign:"left",backgroundColor:"white",paddingLeft:"10%",marginBottom:"0.5%",userSelect:"none"}},"Unclassified"," "),l.createElement("div",null,l.createElement(B.$,{className:"dropzone ",id:"unclassified",boxesPerRow:8,rowHeight:80,style:{height:"20vw",maxHeight:200,minHeight:150,marginBottom:10,marginLeft:"10%",width:"80%"}},ve?l.createElement(E.Z,{style:{height:"6vw",width:"6vw",marginTop:"6%",marginLeft:"45%"}}):G.unclassified.map((function(e){return l.createElement(D.P,{className:"hoverTest",style:{height:"15vw",width:"15vw",minHeight:80,minWidth:80,maxHeight:120,maxWidth:120,padding:10},key:e.id},l.createElement("div",{className:"grid-item"},l.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")",height:"5vw",width:"5vw"}},l.createElement("span",{className:"hoverText"},e.info))))})))),l.createElement(s.Z,null,l.createElement("label",{style:{textAlign:"left",backgroundColor:"white",paddingLeft:"11%",userSelect:"none",marginBottom:"0.5%",marginTop:0}},"Positive"),l.createElement("label",{style:{textAlign:"left",backgroundColor:"white",paddingRight:"8%",userSelect:"none",margin:"auto",marginBottom:"0.5%",marginTop:0}},"Negative")),l.createElement(s.Z,null,l.createElement(B.$,{className:"dropzone positive",id:"positive",boxesPerRow:4,rowHeight:0,style:{height:"20vw",maxHeight:200,minHeight:150}},G.positive.map((function(e){return l.createElement(D.P,{className:"hoverTest",style:{height:"15vw",width:"15vw",minHeight:80,minWidth:80,maxHeight:105,maxWidth:105,padding:10},key:e.id},l.createElement("div",{className:"grid-item"},l.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")",height:"5vw",width:"5vw"}},l.createElement("span",{className:"hoverText"},e.info))))}))),l.createElement(B.$,{className:"dropzone negative",id:"negative",boxesPerRow:4,rowHeight:80,style:{height:"20vw",maxHeight:200,minHeight:150}},G.negative.map((function(e){return l.createElement(D.P,{className:"hoverTest",style:{height:"15vw",width:"15vw",minHeight:80,minWidth:80,maxHeight:105,maxWidth:105,padding:10},key:e.address},l.createElement("div",{className:"grid-item"},l.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")",height:"5vw",width:"5vw"}},l.createElement("span",{className:"hoverText"},e.info))))})))))))}},17710:function(e,t,n){"use strict";t.Z=n.p+"static/jones-885674426137aa7117b916008a9d4f44.jpg"}}]);
//# sourceMappingURL=component---src-pages-web-workers-mvp-demo-js-ca431bf4425c371f78d2.js.map