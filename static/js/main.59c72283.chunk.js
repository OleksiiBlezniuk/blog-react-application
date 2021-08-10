(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(4),r=a.n(o),c=a(1),l=a(2),m=a.n(l);function i(e,t){return fetch("".concat("https://bloggy-api.herokuapp.com").concat(e),t).then((function(e){return e.ok&&e.headers.get("content-type").includes("application/json")?e.json():Promise.reject(new Error("".concat(e.status," - ").concat(e.statusText)))}))}function u(e){return i("/comments?postId=".concat(e))}function p(e){var t=e.postId,a=Object(n.useState)([]),o=Object(c.a)(a,2),r=o[0],l=o[1],m=Object(n.useState)(""),p=Object(c.a)(m,2),b=p[0],f=p[1];return Object(n.useEffect)((function(){u(t).then(l)}),[t]),s.a.createElement("div",{className:"post__comments"},s.a.createElement("h4",null,"Comments:"),s.a.createElement("ul",{className:"list-group"},r.length?r.map((function(e){return s.a.createElement("li",{className:"list-group-item",key:e.id},e.body)})):s.a.createElement("p",{className:"post__comments-error"},s.a.createElement("em",null,"There is no comments yet"))),s.a.createElement("form",{className:"post__comments-form",onSubmit:function(e){(e.preventDefault(),b)&&(function(e){var t=new Headers;return t.append("Content-Type","application/json"),i("/comments",{method:"POST",headers:t,body:JSON.stringify(e)})}({postId:t,body:b}).then((function(){return u(t)})).then(l),f(""))}},s.a.createElement("label",{className:"form-label"},"Your comment:\xa0",s.a.createElement("textarea",{className:"form-control",placeholder:"Type your comment here",value:b,onChange:function(e){var t=e.target.value;f(t)}})),s.a.createElement("button",{type:"submit",className:"btn btn-primary post__comment-button"},"Add new comment")))}a(10);function b(e){var t=e.post,a=e.getPosts,o=Object(n.useState)(t.title),r=Object(c.a)(o,2),l=r[0],u=r[1],b=Object(n.useState)(t.body),f=Object(c.a)(b,2),d=f[0],E=f[1],N=Object(n.useState)(!1),h=Object(c.a)(N,2),y=h[0],v=h[1],g=Object(n.useState)(!1),j=Object(c.a)(g,2),_=j[0],O=j[1],S=Object(n.useState)(!1),P=Object(c.a)(S,2),w=P[0],C=P[1];return s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"post__header"},s.a.createElement("h3",{className:"post__title"},t.title),s.a.createElement("div",{className:"btn-group"},s.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return C(!0)}},"Edit post"),s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){(function(e){var t=new Headers;return t.append("Content-Type","application/json"),i("/posts/".concat(e),{method:"DELETE",headers:t})})(t.id).then((function(){return a()}))}},"Delete post"))),s.a.createElement("div",{className:"post__body"},s.a.createElement("p",{className:"post__content"},t.body),w&&s.a.createElement("form",{className:"post__form",onSubmit:function(e){if(e.preventDefault(),l||v(!0),d||O(!0),l&&d){var n={title:l,body:d};(function(e,t){var a=new Headers;return a.append("Content-Type","application/json"),i("/posts/".concat(e),{method:"PUT",headers:a,body:JSON.stringify(t)})})(t.id,n).then((function(){u(t.title),E(t.body),C(!1),a()}))}}},s.a.createElement("label",{className:"form-label"},"Edit title:",s.a.createElement("input",{type:"text",value:l,onChange:function(e){var t=e.target.value;u(t),v(!1)},className:"form-control"}),s.a.createElement("p",{className:m()("error-message",{"error-message--visible":y})},"Please enter title of your post")),s.a.createElement("label",{className:"form-label"},"Edit text:",s.a.createElement("textarea",{type:"text",value:d,onChange:function(e){var t=e.target.value;E(t),O(!1)},className:"form-control post__text-input"}),s.a.createElement("p",{className:m()("error-message",{"error-message--visible":_})},"Please enter text of your post")),s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit changes"),s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){C(!1),u(t.title),E(t.body),v(!1),O(!1)}},"Cancel")),s.a.createElement(p,{postId:t.id})))}a(11);var f=function(e){var t=e.posts,a=e.getPosts;return s.a.createElement("div",{className:"PostsList"},s.a.createElement("h2",{className:"PostList__title"},"Posts:"),s.a.createElement("ul",{className:"list-group"},t.map((function(e){return s.a.createElement("li",{key:e.id,className:"list-group-item post"},s.a.createElement(b,{post:e,getPosts:a}))}))))},d=(a(12),function(){return s.a.createElement("div",{className:"Loader"},s.a.createElement("div",{className:"Loader__content"}))});a(13);function E(e){var t=e.setIsNewPostFormVisible,a=e.getPosts,o=Object(n.useState)(""),r=Object(c.a)(o,2),l=r[0],u=r[1],p=Object(n.useState)(""),b=Object(c.a)(p,2),f=b[0],d=b[1],E=Object(n.useState)(!1),N=Object(c.a)(E,2),h=N[0],y=N[1],v=Object(n.useState)(!1),g=Object(c.a)(v,2),j=g[0],_=g[1];return s.a.createElement("div",{className:"new-post"},s.a.createElement("form",{id:"new-post-form",className:"new-post__form",onSubmit:function(e){(e.preventDefault(),l||y(!0),f||_(!0),l&&f)&&function(e){var t=new Headers;return t.append("Content-Type","application/json"),i("/posts",{method:"POST",headers:t,body:JSON.stringify(e)})}({title:l,body:f}).then((function(){a(),u(""),d(""),t("false")}))}},s.a.createElement("label",{className:"form-label"},"Post title:",s.a.createElement("input",{type:"text",value:l,onChange:function(e){var t=e.target;u(t.value),y(!1)},placeholder:"Type post title here",className:"form-control"}),s.a.createElement("p",{className:m()("error-message",{"error-message--visible":h})},"Please enter title of your post")),s.a.createElement("label",null,"Post text:",s.a.createElement("textarea",{value:f,onChange:function(e){var t=e.target;d(t.value),_(!1)},placeholder:"Type post text here",className:"form-control"}),s.a.createElement("p",{className:m()("error-message",{"error-message--visible":j})},"Please enter text of your post"))),s.a.createElement("div",{className:"new-post__buttons"},s.a.createElement("button",{type:"submit",form:"new-post-form",className:"btn btn-primary"},"Save post"),s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return t(!1)}},"Cancel")))}a(14);function N(e){var t=e.getPosts,a=Object(n.useState)(!1),o=Object(c.a)(a,2),r=o[0],l=o[1];return s.a.createElement("header",{className:"App__header header"},s.a.createElement("h1",{className:"header__title"},"Blog React Application"),s.a.createElement("div",{className:"header__content"},!r&&s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return l(!0)}},"Create new post"),r&&s.a.createElement(E,{setIsNewPostFormVisible:l,getPosts:t})))}a(15);function h(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),l=Object(c.a)(r,2),m=l[0],u=l[1],p=Object(n.useState)(!1),b=Object(c.a)(p,2),E=b[0],h=b[1];Object(n.useEffect)((function(){y()}),[]);var y=function(){u(!0),i("/posts").then(o).then((function(){u(!1),h(!1)})).catch((function(){h(!0),u(!1)}))};return s.a.createElement("div",{className:"App"},s.a.createElement(N,{getPosts:y}),s.a.createElement("main",{className:"App__main"},E&&s.a.createElement("h2",{className:"error-title"},"An error occurred while loading data"),m?s.a.createElement(d,null):E||s.a.createElement(f,{posts:a,getPosts:y})))}r.a.render(s.a.createElement(h,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.59c72283.chunk.js.map