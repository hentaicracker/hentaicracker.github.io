(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{374:function(t,a,s){"use strict";s.r(a);var e=s(17),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("最近基于 "),a("code",[t._v("Kong")]),t._v(" 使用 "),a("code",[t._v("Koa")]),t._v(" 搭建了一个 "),a("code",[t._v("Oauth2")]),t._v(" 服务。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://getkong.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kong"),a("OutboundLink")],1),t._v(" 是一个网关控制程序，它可以控制请求转发，并且在这个基础上做一系列权限验证的操作。")]),t._v(" "),a("p",[t._v("Oauth2 权限验证是目前最有效的授权验证方式。")]),t._v(" "),a("p",[t._v("在搭建这一授权服务的时候会有一个认证的过程。通过授权服务器拿到用户授权之后，前端 app 需要将这个用户的用户信息保存下来，然后设置一个过期时间，当在这个过期时间之内用户再次访问就不需要去授权了，直接从服务器缓存里拿用户信息。")]),t._v(" "),a("p",[t._v("这里的具体流程是：\n1.设置一个密匙，使用用户 id 和密匙生成一个 token 。\n2.将该 token 以及用户信息和过期时间保存在 redis 中。\n3.设置一个 cookie ，值为 token ，将该 cookie 返回客户端。")]),t._v(" "),a("p",[t._v("当用户再次访问系统时，浏览器 HTTP 请求会自动将该 cookie 带过来。")]),t._v(" "),a("p",[t._v("这个时候会先设置该 context 下的请求是未登录认证的：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isAuthenticated "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("服务器拿到 cookie 值，也就是之前保存的 token ，使用该 token 去 redis 中查询用户信息。如果当前时间在过期时间范围之内，redis 会返回用户信息。这个时候会在该 context 下设置用户信息和认证状态：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isAuthenticated "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果当前时间已经超过了过期时间，则没有用户信息返回，前端 app 没有拿到用户信息，则重新去授权服务器拿授权。")])])}),[],!1,null,null,null);a.default=n.exports}}]);