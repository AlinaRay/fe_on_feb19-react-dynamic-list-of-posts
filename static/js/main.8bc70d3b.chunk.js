(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),s=a.n(r),c=a(4),u=a(5),i=a(10),o=a(6),m=a(11),d=a(1),p=a.n(d),h=a(9),f=a(12),y=a(8),E=a(7),b=function(){return fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()})},F=function(){return fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()})},v=function(){return fetch("https://jsonplaceholder.typicode.com/comments").then(function(e){return e.json()})};function V(){return(V=Object(E.a)(p.a.mark(function e(){var t,a,n,l,r,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([F(),b(),v()]);case 2:return t=e.sent,a=Object(y.a)(t,3),n=a[0],l=a[1],r=a[2],s=n.map(function(e){return Object(f.a)({},e,{user:l.find(function(t){return t.id===e.userId}),comments:Object(h.a)(r.filter(function(t){return t.postId===e.id}))})}),e.abrupt("return",s);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e){var t=e.user,a=t.name,n=t.email,r=t.address,s=r.street,c=r.suite,u=r.zipcode,i=r.city,o=r.geo;return l.a.createElement("div",null,l.a.createElement("h4",null,"Author:"),l.a.createElement("ul",null,l.a.createElement("li",null,a),l.a.createElement("li",null,n),l.a.createElement("li",null,s," str.,",c,", Zip: ",u,",",i,l.a.createElement("br",null),"Geoposition: lat:",o.lat,", lng:",o.lng)))}function j(e){var t=e.comment,a=t.name,n=t.email,r=t.body;return l.a.createElement("li",{className:"comment"},l.a.createElement("p",{className:"title"},a),l.a.createElement("p",null,n),l.a.createElement("p",null,r))}function k(e){var t=e.comments.map(function(e){return l.a.createElement(j,{key:e.id,comment:e})});return l.a.createElement("div",null,l.a.createElement("h4",null,"Comments: "),l.a.createElement("ul",null,t))}function g(e){var t=e.post,a=t.title,n=t.body,r=t.userId,s=t.user,c=t.comments;return l.a.createElement("li",{className:"post"},l.a.createElement("h3",{className:"title"},a),l.a.createElement("p",null,n),l.a.createElement(w,{key:r,user:s}),l.a.createElement(k,{comments:c}))}function S(e){var t=e.posts,a=(e.filterBy,e.value,t.map(function(e){return l.a.createElement(g,{key:e.id,post:e})}));return l.a.createElement("div",null,l.a.createElement("ul",null,a))}function N(e){var t=e.searchFieldType,a=e.searchFieldValue,n=e.updateSearchFieldsValue;return l.a.createElement("label",{className:"label"},"Filter by ",t,l.a.createElement("input",{className:"input",type:"search",name:t,value:a,onChange:n,autoComplete:"off"}))}var O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).loadData=function(){a._asyncRequest=function(){return V.apply(this,arguments)}().then(function(e){a._asyncRequest=null,a.setState({postsData:e})})},a.showFilteredPosts=function(){var e=a.state.searchFieldType,t=a.state.searchFieldValue[e].trim().toLowerCase();if(t.trim())return"user"===e?a.state.postsData.filter(function(e){return e.user.name.trim().toLowerCase().includes(t)}):a.state.postsData.filter(function(a){return a[e].trim().toLowerCase().includes(t)})},a.updateSearchFieldsValue=function(e){switch(a.setState({searchFieldType:e.target.name}),e.target.name){case"title":a.setState({searchFieldValue:{title:e.target.value,body:"",user:""}});break;case"body":a.setState({searchFieldValue:{title:"",body:e.target.value,user:""}});break;case"user":a.setState({searchFieldValue:{title:"",body:"",user:e.target.value}});break;default:console.log("unknown type")}},a.state={isLoaded:!1,searchFieldType:"title",searchFieldValue:{title:"",body:"",user:""}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.postsData,a=e.isLoaded,n=e.searchFieldValue,r=n.title,s=n.body,c=n.user,u=this.showFilteredPosts()||t;return l.a.createElement("div",null,l.a.createElement("h1",{className:"main-title"},"React dynamic list of posts"),t?l.a.createElement("div",null,l.a.createElement("span",{className:"subtitle"},"Amout of shown posts is ",u.length),l.a.createElement("form",{className:"form"},l.a.createElement(N,{key:1,searchFieldType:"title",searchFieldValue:r,updateSearchFieldsValue:this.updateSearchFieldsValue}),l.a.createElement(N,{key:2,searchFieldType:"body",searchFieldValue:s,updateSearchFieldsValue:this.updateSearchFieldsValue}),l.a.createElement(N,{key:3,searchFieldType:"user",searchFieldValue:c,updateSearchFieldsValue:this.updateSearchFieldsValue})),l.a.createElement(S,{posts:u})):l.a.createElement("button",{className:"button",onClick:this.loadData,disabled:a},a?"Loading":"Details"))}}]),t}(l.a.Component);a(20);s.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8bc70d3b.chunk.js.map