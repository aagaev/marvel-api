(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),s=a.n(c),i=a(2),o=a(3),l=a(5),u=a(4),d=(a(15),a(0)),j=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Comics"})})]})})]})},h=a(6),m=a.n(h),b=a(7),f=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=1d72cee4813314a40e4eb983489bd6b7",this._baseOffset=0,this.getResource=function(){var e=Object(b.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status - ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(b.a)(m.a.mark((function e(){var a,n,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(b.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.noDescriptionMessage=function(e){return e?"".concat(e.slice(0,60),"..."):e="Sorry but there is no description for this character. Please check Wiki page"},this._transformCharacter=function(e){return{id:e.id,name:e.name,description:t.noDescriptionMessage(e.description),thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},O=function(){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(d.jsx)("g",{transform:"translate(80,50)",children:Object(d.jsx)("g",{transform:"rotate(0)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(d.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(d.jsx)("g",{transform:"rotate(45)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(d.jsx)("g",{transform:"translate(50,80)",children:Object(d.jsx)("g",{transform:"rotate(90)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(d.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(d.jsx)("g",{transform:"rotate(135)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(d.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(d.jsx)("g",{transform:"rotate(180)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(d.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(d.jsx)("g",{transform:"rotate(225)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(d.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(d.jsx)("g",{transform:"rotate(270)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(d.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(d.jsx)("g",{transform:"rotate(315)",children:Object(d.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(d.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},p=a.p+"static/media/error.42292aa1.gif",x=function(){return Object(d.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:p,alt:"error"})},v=(a(18),a.p+"static/media/mjolnir.61f31e18.png"),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:{},loading:!0,error:!1},e.marvelService=new f,e.onCharLoading=function(){e.setState({loading:!0})},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){e.onCharLoading();var t=1011e3,a=Math.floor(400*Math.random()+t);e.marvelService.getCharacter(a).then(e.onCharLoaded).catch(e.onError)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,r=n?Object(d.jsx)(x,{}):null,c=a?Object(d.jsx)(O,{}):null,s=n||a?null:Object(d.jsx)(_,{char:t});return Object(d.jsxs)("div",{className:"randomchar",children:[r,c,s,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{className:"button button__main",onClick:this.updateChar,children:Object(d.jsx)("div",{className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:v,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(n.Component),_=function(e){var t=e.char,a=t.name,n=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:a}),Object(d.jsx)("p",{className:"randomchar__descr",children:n}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:c,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},y=g,N=a(9),k=(a(19),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={charList:[],loading:!0,error:!1,newItemLoading:!1,offset:1541,charEnded:!1},e.marvelService=new f,e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then(e.onCharListLoaded).catch(e.onError)},e.onCharListLoading=function(){e.setState({newItemLoading:!0})},e.onCharListLoaded=function(t){var a=!1;t.length<9&&(a=!0),e.setState((function(e){var n=e.charList,r=e.offset;return{charList:[].concat(Object(N.a)(n),Object(N.a)(t)),loading:!1,newItemLoading:!1,offset:r+9,charEnded:a}}))},e.onError=function(){e.setState({error:!0,loading:!1})},e.itemRefs=[],e.setRef=function(t){e.itemRefs.push(t)},e.focusOnItem=function(t){console.log(e.itemRefs),e.itemRefs.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemRefs[t].classList.add("char__item_selected"),e.itemRefs[t].focus()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.onRequest()}},{key:"renderItems",value:function(e){var t=this,a=this.props.onCharSelected,n=e.map((function(e,n){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(r={objectFit:"unset"}),Object(d.jsxs)("li",{className:"char__item",tabIndex:0,ref:t.setRef,onClick:function(){a(e.id),t.focusOnItem(n)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(t.props.onCharSelected(e.id),t.focusOnItem(n))},children:[Object(d.jsx)("img",{src:e.thumbnail,alt:e.name,style:r}),Object(d.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:n})}},{key:"render",value:function(){var e=this;console.log(this.state.offset);var t=this.state,a=t.charList,n=t.loading,r=t.error,c=t.offset,s=t.newItemLoading,i=t.charEnded,o=this.renderItems(a),l=r?Object(d.jsx)(x,{}):null,u=n?Object(d.jsx)(O,{}):null,j=n||r?null:o;return Object(d.jsxs)("div",{className:"char__list",children:[l,u,j,Object(d.jsx)("button",{className:"button button__main button__long",disabled:s,onClick:function(){return e.onRequest(c)},style:{display:i?"none":"block"},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(n.Component)),C=(a(20),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=(a(21),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:null,loading:!1,error:!1},e.marvelService=new f,e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e.onCharLoading=function(){e.setState({loading:!0})},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,r=t||a||n?null:Object(d.jsx)(C,{}),c=n?Object(d.jsx)(x,{}):null,s=a?Object(d.jsx)(O,{}):null,i=n||a||!t?null:Object(d.jsx)(L,{char:t});return Object(d.jsxs)("div",{className:"char__info",children:[r,c,s,i]})}}]),a}(n.Component)),L=function(e){var t=e.char,a=t.name,n=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:r,alt:a,style:o}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:a}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:c,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:n}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsxs)("ul",{className:"char__comics-list",children:[0===i.length?"There is no comics":null,i.map((function(e,t){if(!(t>10))return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},T=w,S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(d.jsx)(x,{}):this.props.children}}]),a}(n.Component),R=a.p+"static/media/vision.067d4ae1.png",I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(S,{children:Object(d.jsx)(y,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(S,{children:Object(d.jsx)(k,{onCharSelected:this.onCharSelected})}),Object(d.jsx)(S,{children:Object(d.jsx)(T,{charId:this.state.selectedChar})})]}),Object(d.jsx)("img",{className:"bg-decoration",src:R,alt:"vision"})]})]})}}]),a}(n.Component);a(22);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.840d8472.chunk.js.map