(self.webpackChunkgatsby_test=self.webpackChunkgatsby_test||[]).push([[113],{40880:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(85061),a=n(92137),i=n(87757),o=n.n(i),l=n(67294),c=n(96667),u=n(47798),s=n(23729),m=n(80838),g=n(83332),d=n(44005),f=n(90058),p=n(91666),v=n(80633),b=n(79312),h=n(98910),y=n(22019),E=n(67253),w=function(){function e(){}var t=e.prototype;return t.getDataURLPromise=function(e,t){var n=this;return void 0===t&&(t={}),Promise.all(e).then((function(e){return Promise.all(e.map((function(e){return n.createRGB(e)})))})).then((function(e){return E.knu(e,2).squeeze()})).then((function(e){return n.createDataURL(e,t)}))},t.createDataURL=function(e,t){var n=document.createElement("canvas");n.width=500,n.height=600;var r=n.getContext("2d"),a=document.createElement("canvas");return E.Xhn.toPixels(e,a).then((function(){return t.hasOwnProperty("x")&&t.hasOwnProperty("x"),r.drawImage(a,t.x,t.y,40,40,0,0,n.width,n.height),a.remove(),n.toDataURL()}))},t.createRGB=function(e){return new Promise((function(t,n){var r,a=new Image;a.onload=function(){r=E.Xhn.fromPixels(a,1),t(r)},a.src=e}))},e}(),k=n(13967),Z=(n(37107),n(39331)),P=n(59274),C=n(31261),N=n(8441),x=n(96531),R=n(48498);var I=function(){var e,t=l.useState(null),n=t[0],i=t[1],E=l.useState(null),I=E[0],L=E[1],D=l.useState(null),j=D[0],B=D[1],S=l.useState(null),U=S[0],T=S[1],A=l.useState(Y([])),O=A[0],_=A[1],z=l.useState(null),F=z[0],$=z[1],H=l.useState(null),G=(H[0],H[1]),X=l.useState(null),q=X[0],M=X[1],J=function(e){i(null),void 0!==e&&K(e)},K=function(){var e=(0,a.Z)(o().mark((function e(t){var n,r,a,i,l,c,u,s,m,g,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new y.$(I,j),e.next=3,n.initTrainPromise();case 3:if(G(t),console.log("fetch "+t),r=n.fetchUpToNCellPairsByClass(t,20),a=new w,i=null,"random"!==t){e.next=19;break}return l=r.map((function(e){var t=I.returnAllImgFileNames(e.ImageNumber).map((function(e){return U.findFile(e)})).map((function(e){return U.fileReaderPromiseImage(e)}));return Promise.all(t).then((function(t){var n=I.getCordsforCellDisplay(e);return a.getDataURLPromise(t,n)}))})),e.next=12,Promise.all(l);case 12:return c=e.sent,u=Y(c),_(u),console.log(u),console.log(c),$(new Z.e(r,c)),e.abrupt("return");case 19:if("positive"!==t){e.next=30;break}return i=r.map((function(e){var t=I.returnAllImgFileNames(e.ImageNumber).map((function(e){return U.findFile(e)})).map((function(e){return U.fileReaderPromiseImage(e)}));return Promise.all(t).then((function(t){var n=I.getCordsforCellDisplay(e);return a.getDataURLPromise(t,n)}))})),e.next=23,Promise.all(i);case 23:return s=e.sent,m=Y(s),_(m),console.log(m),console.log(s),$(new Z.e(r,s)),e.abrupt("return");case 30:if("negative"!==t){e.next=41;break}return i=r.map((function(e){var t=I.returnAllImgFileNames(e.ImageNumber).map((function(e){return U.findFile(e)})).map((function(e){return U.fileReaderPromiseImage(e)}));return Promise.all(t).then((function(t){var n=I.getCordsforCellDisplay(e);return a.getDataURLPromise(t,n)}))})),e.next=34,Promise.all(i);case 34:return g=e.sent,d=Y(g),_(d),console.log(d),console.log(g),$(new Z.e(r,g)),e.abrupt("return");case 41:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=(0,a.Z)(o().mark((function e(){var t,n,a,i,l,c,u,s,m,g,d,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=O.negative.map((function(e){return e.id})),n=O.positive.map((function(e){return e.id})),console.log(t,O),F.setClassByIndexArray("negative",t),F.setClassByIndexArray("positive",n),a=F.getPairsByClass("negative"),i=F.getPairsByClass("positive"),l=a.map((function(e){return I.getRow("object_data",{ImageNumber:e.ImageNumber,ObjectNumber:e.ObjectNumber})})),c=i.map((function(e){return I.getRow("object_data",{ImageNumber:e.ImageNumber,ObjectNumber:e.ObjectNumber})})),u=[].concat((0,r.Z)(l),(0,r.Z)(c)),s=new Array(l.length).fill(0),m=new Array(c.length).fill(1),g=s.concat(m),d={classifierType:"LogisticRegression",trainingData:[].concat((0,r.Z)(u),(0,r.Z)(j.trainingData)),trainingLabels:[].concat((0,r.Z)(g),(0,r.Z)(j.trainingLabels)),featuresToUse:q},console.log(d),B(d),f={unclassified:O.unclassified,positive:[],negative:[]},_(f),console.log("finished train");case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,a.Z)(o().mark((function e(t){var n,r,a,i,l,c,u,s,m,g;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new k.Z(t),T(n),r=new h.Z(t),e.next=5,r.getDataHandlerandStartingTrainingSet();case 5:a=e.sent,i=a.data_provider,L(i),l=a.training_data.training_table,c=l.getDataColumnsPaired(),u=l.getTrainingLabels(),s=c.map((function(e){var t=e.objectnum,n=e.imagenum;return i.getRow("object_data",{ObjectNumber:t,ImageNumber:n})})),m=a.training_data.features,g=m.filter((function(e){return!e.includes("Location")&&"ObjectNumber"!==e&&"ImageNumber"!==e})),M(g),console.log("finished data initialization"),B({classifierType:"LogisticRegression",trainingData:s,trainingLabels:u,featuresToUse:g}),console.log("finished upload");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new y.$(I,j),e.next=3,t.initTrainPromise();case 3:t.userDownloadClassifierSpecPromise();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Y(e){return{unclassified:e.map((function(e,t){return{id:t,address:e}})),positive:[],negative:[]}}return l.createElement("div",{style:{resize:"horizontal"}},l.createElement(c.Z,null,l.createElement(u.Z,null,l.createElement(v.Z,{src:p.Z,style:{marginRight:"40%",height:"90px"}})),l.createElement(u.Z,null,l.createElement(s.Z,{style:{color:"black",marginLeft:"50%"}}," ",l.createElement(b.Z,null)))),l.createElement(c.Z,null,l.createElement(m.Z,{container:!0,justify:"center",spacing:2,style:{marginBottom:15}},l.createElement(m.Z,{key:0,item:!0},l.createElement(g.Z,{variant:"contained","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},"Fetch"),l.createElement(d.Z,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:J},l.createElement(f.Z,{onClick:function(){return J("random")}},"Random"),l.createElement(f.Z,{onClick:function(){return J("positive")}},"Positive"),l.createElement(f.Z,{onClick:function(){return J("negative")}},"Negative"))),l.createElement(m.Z,{key:1,item:!0},l.createElement(g.Z,{variant:"contained",onClick:Q},"Train")),l.createElement(m.Z,{key:2,item:!0},l.createElement(g.Z,{variant:"contained",onClick:function(){}},"Evaluate")),l.createElement(m.Z,{key:3,item:!0},l.createElement(g.Z,{variant:"contained",onClick:W},"Download")),l.createElement(m.Z,{key:4,item:!0},l.createElement(g.Z,{variant:"contained",component:"label",onClick:function(){return console.log("Upload!")}},"Upload",l.createElement("input",{type:"file",hidden:!0,webkitdirectory:"true",mozdirectory:"true",msdirectory:"true",odirectory:"true",directory:"true",multiple:!0,onChange:function(e){V(e)}}))))),l.createElement(N.d,{onChange:function(e,t,n,r){var a;if(r){var i,o=(0,P.p)(O[e],O[r],t,n);return _(Object.assign({},O,((i={})[e]=o[0],i[r]=o[1],i)))}var l=(0,C.L)(O[e],t,n);return _(Object.assign({},O,((a={})[e]=l,a)))}},l.createElement("div",null,l.createElement("label",{style:{textAlign:"left",backgroundColor:"white",paddingLeft:"10%",marginBottom:.5}},"Unclassified"),l.createElement("div",{className:"topContainer"},l.createElement(x.$,{className:"dropzone ",id:"unclassified",boxesPerRow:8,rowHeight:70},O.unclassified.map((function(e){return l.createElement(R.P,{key:e.id},l.createElement("div",{className:"grid-item"},l.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")"}})))})))),l.createElement(c.Z,null,l.createElement("label",{style:{textAlign:"left",backgroundColor:"white",paddingLeft:"11%",userSelect:"none",marginBottom:"0.5%"}},"Positive"),l.createElement("label",{style:(e={textAlign:"left",backgroundColor:"white",paddingRight:"8%",marginBottom:0,userSelect:"none",margin:"auto"},e.marginBottom="0.5%",e)},"Negative")),l.createElement(c.Z,null,l.createElement(x.$,{className:"dropzone positive",id:"positive",boxesPerRow:4,rowHeight:70},O.positive.map((function(e){return l.createElement(R.P,{key:e.id},l.createElement("div",{className:"grid-item"},l.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")"}})))}))),l.createElement(x.$,{className:"dropzone negative",id:"negative",boxesPerRow:4,rowHeight:70},O.negative.map((function(e){return l.createElement(R.P,{key:e.id},l.createElement("div",{className:"grid-item"},l.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")"}})))})))))))}}}]);
//# sourceMappingURL=component---src-pages-rough-ui-js-539de14666862a42cd02.js.map