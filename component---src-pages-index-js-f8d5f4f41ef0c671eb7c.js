(self.webpackChunkgatsby_test=self.webpackChunkgatsby_test||[]).push([[678],{97704:function(e,t,n){"use strict";n.r(t);var a=n(92137),r=n(87757),i=n.n(r),l=n(67294),o=n(96667),c=n(47798),s=n(23729),u=n(80838),m=n(83332),d=n(85080),g=n(90058),f=n(91666),p=n(80633),v=n(79312),E=n(98910),b=n(22019),y=n(68396),k=n(13967),h=(n(37107),n(59274)),Z=n(31261),w=n(8441),C=n(96531),N=n(48498);t.default=function(){var e,t=l.useState(null),n=t[0],r=t[1],P=l.useState(null),x=P[0],S=P[1],R=l.useState(null),L=R[0],I=R[1],T=l.useState(null),j=(T[0],T[1],l.useState(null)),z=(j[0],j[1]),B=l.useState(null),_=B[0],U=B[1],D=l.useState(void 0),A=(D[0],D[1],l.useState(q([]))),H=A[0],O=A[1],$=function(e){r(null),void 0!==e&&F(e)},F=function(){var e=(0,a.Z)(i().mark((function e(t){var n,a,r,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("fetch "+t),n=L.fetchUpToNCellPairsByClass(t,20),a=new y.p,"random"!==t){e.next=13;break}return r=n.map((function(e){var t=x.returnAllImgFileNames(e.ImageNumber).map((function(e){return _.findFile(e)})).map((function(e){return _.fileReaderPromiseImage(e)}));return Promise.all(t).then((function(t){var n=x.getCordsforCellDisplay(e);return a.getDataURLPromise(t,n)}))})),e.t0=q,e.next=8,Promise.all(r);case 8:e.t1=e.sent,l=(0,e.t0)(e.t1),O(l),console.log(l),console.log(r);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=(0,a.Z)(i().mark((function e(t){var n,a,r,l,o,c,s,u,m,d,g,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new k.Z(t),U(n),a=new E.Z(t),e.next=5,a.getDataHandlerandStartingTrainingSet();case 5:return r=e.sent,console.log(r),l=r.data_provider,S(l),o=r.training_data.training_table,c=o.getDataColumnsPaired(),console.log(o),s=o.getTrainingLabels(),u=c.map((function(e){var t=e.objectnum,n=e.imagenum;return l.getRow("object_data",{ObjectNumber:t,ImageNumber:n})})),m=r.training_data.features,d=m.filter((function(e){return!e.includes("Location")&&"ObjectNumber"!==e&&"ImageNumber"!==e})),console.log("finished data initialization"),z(g={classifierType:"LogisticRegression",trainingData:u,trainingLabels:s,featuresToUse:d}),console.log("starting initial training"),f=new b.$(l,g),I(f),e.next=24,f.initTrainPromise();case 24:console.log("finished upload");case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function q(e){return{unclassifed:e.map((function(e,t){return{id:t,address:e}})),positive:[],negative:[]}}return l.createElement("div",{style:{resize:"horizontal"}},l.createElement(o.Z,null,l.createElement(c.Z,null,l.createElement(p.Z,{src:f.Z,style:{marginRight:"40%",height:"90px"}})),l.createElement(c.Z,null,l.createElement(s.Z,{style:{color:"black",marginLeft:"50%"}}," ",l.createElement(v.Z,null)))),l.createElement(o.Z,null,l.createElement(u.Z,{container:!0,justify:"center",spacing:2,style:{marginBottom:15}},l.createElement(u.Z,{key:0,item:!0},l.createElement(m.Z,{variant:"contained","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},"Fetch"),l.createElement(d.Z,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:$},l.createElement(g.Z,{onClick:function(){return $("random")}},"Random"),l.createElement(g.Z,{onClick:function(){return $("positive")}},"Positive"),l.createElement(g.Z,{onClick:function(){return $("negative")}},"Negative"))),l.createElement(u.Z,{key:1,item:!0},l.createElement(m.Z,{variant:"contained",onClick:function(){}},"Train")),l.createElement(u.Z,{key:2,item:!0},l.createElement(m.Z,{variant:"contained",onClick:function(){}},"Evaluate")),l.createElement(u.Z,{key:3,item:!0},l.createElement(m.Z,{variant:"contained",component:"label",onClick:function(){return console.log("Upload!")}},"Upload",l.createElement("input",{type:"file",hidden:!0,webkitdirectory:"true",mozdirectory:"true",msdirectory:"true",odirectory:"true",directory:"true",multiple:!0,onChange:function(e){M(e)}}))))),l.createElement(w.d,{onChange:function(e,t,n,a){var r;if(a){var i,l=(0,h.p)(H[e],H[a],t,n);return O(Object.assign({},H,((i={})[e]=l[0],i[a]=l[1],i)))}var o=(0,Z.L)(H[e],t,n);return O(Object.assign({},H,((r={})[e]=o,r)))}},l.createElement("div",null,l.createElement("label",{style:{textAlign:"left",backgroundColor:"white",paddingLeft:"10%",marginBottom:.5}},"Unclassified"),l.createElement("div",{className:"topContainer"},l.createElement(C.$,{className:"dropzone ",id:"unclassifed",boxesPerRow:8,rowHeight:70},H.unclassifed.map((function(e){return l.createElement(N.P,{key:e.id},l.createElement("div",{className:"grid-item"},l.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")"}})))})))),l.createElement(o.Z,null,l.createElement("label",{style:{textAlign:"left",backgroundColor:"white",paddingLeft:"11%",userSelect:"none",marginBottom:"0.5%"}},"Positive"),l.createElement("label",{style:(e={textAlign:"left",backgroundColor:"white",paddingRight:"8%",marginBottom:0,userSelect:"none",margin:"auto"},e.marginBottom="0.5%",e)},"Negative")),l.createElement(o.Z,null,l.createElement(C.$,{className:"dropzone positive",id:"positive",boxesPerRow:4,rowHeight:70},H.positive.map((function(e){return l.createElement(N.P,{key:e.id},l.createElement("div",{className:"grid-item"},l.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")"}})))}))),l.createElement(C.$,{className:"dropzone negative",id:"negative",boxesPerRow:4,rowHeight:70},H.negative.map((function(e){return l.createElement(N.P,{key:e.id},l.createElement("div",{className:"grid-item"},l.createElement("div",{className:"grid-item-content",style:{backgroundImage:"url("+e.address+")"}})))})))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f8d5f4f41ef0c671eb7c.js.map