(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{13:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),i=s.n(n),c=s(14),r=s.n(c),o=s(4),l=s.n(o),m=s(15),d=s(16),j=s(17),v=s(20),u=s(19),h=s(18),b=s.n(h);s(13);var p=function(e){var t=e.year,s=e.title,n=e.summary,i=e.poster,c=e.genres;return Object(a.jsxs)("div",{className:"movies_movie",children:[Object(a.jsx)("label",{}),Object(a.jsx)("img",{src:i,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsxs)("h3",{className:"movie__title",children:[" ",s," "]}),Object(a.jsx)("h5",{className:"movie__year",children:t}),Object(a.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[n.slice(0,100),"..."]})]})]})},_=function(e){Object(v.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return console.log(e),Object(a.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(i.a.Component);r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d2fc2ce6.chunk.js.map