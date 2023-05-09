import{_ as o,Y as d,Z as i,a0 as e,a3 as a,a4 as n,a2 as l,F as s}from"./framework-0d72886b.js";const r={},u=e("h2",{id:"部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),l(" 部署")],-1),c=e("p",null,"除了在 Vercel 免费部署外，你可以通过 docker 进行部署或直接部署在自托管环境上，也可以部署到其他常见云平台。详见",-1),h=e("h2",{id:"多数据库支持",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#多数据库支持","aria-hidden":"true"},"#"),l(" 多数据库支持")],-1),_=e("p",null,"除了官方默认的 LeanCloud 之外，Waline 还支持多种数据库，包括 MySQL, PostgreSQL, SQLite 以及 MongoDB。",-1),p=e("p",null,"你只需配置对应的数据库的环境变量，Waline 会自动根据你配置的环境变量切换到对应的数据存储服务。",-1),f=e("h2",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),l(" 配置")],-1),m=e("p",null,"服务端大部分的配置可以通过通过环境变量进行配置，你也可以在主入口文件中配置一些高级选项。",-1),b=e("h2",{id:"评论通知",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#评论通知","aria-hidden":"true"},"#"),l(" 评论通知")],-1),g=e("h2",{id:"社交登录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#社交登录","aria-hidden":"true"},"#"),l(" 社交登录")],-1),v=e("p",null,"我们支持社交帐号登录，目前支持 GitHub，Twitter, Facebook。",-1),x=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"我们计划在未来版本添加更多的社交应用支持，敬请期待。")],-1);function y(k,L){const t=s("RouterLink");return d(),i("div",null,[u,c,e("ul",null,[e("li",null,[e("p",null,[a(t,{to:"/guide/deploy/vps.html"},{default:n(()=>[l("独立部署")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/guide/deploy/aliyun-fc.html"},{default:n(()=>[l("阿里云函数计算")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/guide/deploy/baidu-cfc.html"},{default:n(()=>[l("百度云函数计算")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/guide/deploy/cloudbase.html"},{default:n(()=>[l("Cloudbase")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/guide/deploy/deta.html"},{default:n(()=>[l("Deta")]),_:1})])]),e("li",null,[e("p",null,[a(t,{to:"/guide/deploy/railway.html"},{default:n(()=>[l("Railway")]),_:1})])])]),h,_,p,e("p",null,[l("详情请见 "),a(t,{to:"/guide/database.html"},{default:n(()=>[l("多数据库支持")]),_:1}),l("。")]),f,m,e("p",null,[l("有关配置的详细信息，详见 "),a(t,{to:"/reference/server/env.html"},{default:n(()=>[l("服务端参考 → 环境变量")]),_:1}),l(" 和 "),a(t,{to:"/reference/server/config.html"},{default:n(()=>[l("服务端参考 → 配置")]),_:1}),l("。")]),b,e("p",null,[l("我们支持多种方式在用户评论时向用户或博主发出通知，详见 "),a(t,{to:"/guide/features/notification.html"},{default:n(()=>[l("评论通知")]),_:1}),l("。")]),g,v,x])}const B=o(r,[["render",y],["__file","server.html.vue"]]);export{B as default};
