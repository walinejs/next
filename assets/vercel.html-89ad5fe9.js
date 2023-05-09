import{_ as c,a as t,b as a,c as r,d as n,e as l}from"./vercel-7-396eaf54.js";import{_ as d,Y as s,Z as p,$ as _,a0 as e,a3 as f,a2 as o,a1 as g,F as m}from"./framework-0d72886b.js";const u={},h=e("p",null,[o("我们发布了 "),e("code",null,"@waline/vercel"),o(" 包作为服务端。Vercel 部署也是我们最推荐的方式。")],-1),v=e("h2",{id:"如何部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何部署","aria-hidden":"true"},"#"),o(" 如何部署")],-1),b={href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample",target:"_blank",rel:"noopener noreferrer"},x=e("img",{src:"https://vercel.com/button",alt:"Vercel",tabindex:"0"},null,-1),V=e("figcaption",null,"Vercel",-1),E=g('<ol><li><p>点击上方按钮，跳转至 Vercel 进行 Server 端部署。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。</p></div></li><li><p>输入一个你喜欢的 Vercel 项目名称并点击 <code>Create</code> 继续:</p><figure><img src="'+c+'" alt="创建项目" tabindex="0"><figcaption>创建项目</figcaption></figure></li><li><p>此时 Vercel 会基于 Waline 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。</p><figure><img src="'+t+'" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure><p>一两分钟后，满屏的烟花会庆祝你部署成功。此时点击 <code>Go to Dashboard</code> 可以跳转到应用的控制台。</p><figure><img src="'+a+'" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure></li><li><p>点击顶部的 <code>Settings</code> - <code>Environment Variables</code> 进入环境变量配置页，并配置三个环境变量 <code>LEAN_ID</code>, <code>LEAN_KEY</code> 和 <code>LEAN_MASTER_KEY</code> 。它们的值分别对应上一步在 LeanCloud 中获得的 <code>APP ID</code>, <code>APP KEY</code>, <code>Master Key</code>。</p><figure><img src="'+r+'" alt="设置环境变量" tabindex="0"><figcaption>设置环境变量</figcaption></figure><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你使用 LeanCloud 国内版，请额外配置 <code>LEAN_SERVER</code> 环境变量，值为你绑定好的域名。</p></div></li><li><p>环境变量配置完成之后点击顶部的 <code>Deployments</code> 点击顶部最新的一次部署右侧的 <code>Redeploy</code> 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。</p><figure><img src="'+n+'" alt="redeploy" tabindex="0"><figcaption>redeploy</figcaption></figure></li><li><p>此时会跳转到 <code>Overview</code> 界面开始部署，等待片刻后 <code>STATUS</code> 会变成 <code>Ready</code>。此时请点击 <code>Visit</code> ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。</p><figure><img src="'+l+'" alt="redeploy success" tabindex="0"><figcaption>redeploy success</figcaption></figure></li></ol>',1);function y(A,N){const i=m("ExternalLinkIcon");return s(),p("div",null,[h,_(" more "),v,e("figure",null,[e("a",b,[x,f(i)]),V]),E])}const S=d(u,[["render",y],["__file","vercel.html.vue"]]);export{S as default};
