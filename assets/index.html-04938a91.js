import{_ as o,a as c,b as p,c as d,d as r,e as u}from"./vercel-7-396eaf54.js";import{_ as h,a as g}from"./vercel-9-91635af4.js";import{_ as m,Y as v,Z as k,$ as _,a0 as n,a2 as e,a3 as a,a1 as t,F as l}from"./framework-0d72886b.js";const f="/next/assets/leancloud-1-f7a36b20.png",b="/next/assets/leancloud-2-4cc69975.png",x="/next/assets/leancloud-3-3ae5fb8d.png",y={},w=n("p",null,"欢迎使用 Waline，只需几个步骤，你就可以在你的网站中启用 Waline 提供评论与浏览量服务。",-1),A=n("h2",{id:"leancloud-设置-数据库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#leancloud-设置-数据库","aria-hidden":"true"},"#"),e(" LeanCloud 设置 (数据库)")],-1),E={href:"https://console.leancloud.app/login",target:"_blank",rel:"noopener noreferrer"},V={href:"https://console.leancloud.app/register",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"LeanCloud 国际版",-1),q={href:"https://console.leancloud.app/apps",target:"_blank",rel:"noopener noreferrer"},N={href:"https://console.leancloud.app/apps",target:"_blank",rel:"noopener noreferrer"},P=n("figure",null,[n("img",{src:f,alt:"创建应用",tabindex:"0"}),n("figcaption",null,"创建应用")],-1),C=t('<li><p>进入应用，选择左下角的 <code>设置</code> &gt; <code>应用 Key</code>。你可以看到你的 <code>APP ID</code>,<code>APP Key</code> 和 <code>Master Key</code>。请记录它们，以便后续使用。</p><figure><img src="'+b+'" alt="ID 和 Key" tabindex="0"><figcaption>ID 和 Key</figcaption></figure></li>',1),I={class:"hint-container warning"},S=n("p",{class:"hint-container-title"},"国内版需要完成备案接入",-1),B={href:"https://leancloud.cn",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leancloud.app",target:"_blank",rel:"noopener noreferrer"},F=n("strong",null,"已备案",-1),K=t('<ul><li>登录国内版并进入需要使用的应用</li><li>选择 <code>设置</code> &gt; <code>域名绑定</code> &gt; <code>API 访问域名</code> &gt; <code>绑定新域名</code> &gt; 输入域名 &gt; <code>确定</code>。</li><li>按照页面上的提示按要求在 DNS 上完成 CNAME 解析。</li><li>购买独立 IP 并提交工单完成备案接入。(独立 IP 目前价格为 ￥ 50/个/月)</li></ul><figure><img src="'+x+'" alt="域名设置" tabindex="0"><figcaption>域名设置</figcaption></figure>',2),R=n("h2",{id:"vercel-部署-服务端",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vercel-部署-服务端","aria-hidden":"true"},"#"),e(" Vercel 部署 (服务端)")],-1),M={href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample",target:"_blank",rel:"noopener noreferrer"},T=n("img",{src:"https://vercel.com/button",alt:"Vercel",tabindex:"0"},null,-1),U=n("figcaption",null,"Vercel",-1),W=t('<ol><li><p>点击上方按钮，跳转至 Vercel 进行 Server 端部署。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。</p></div></li><li><p>输入一个你喜欢的 Vercel 项目名称并点击 <code>Create</code> 继续:</p><figure><img src="'+o+'" alt="创建项目" tabindex="0"><figcaption>创建项目</figcaption></figure></li><li><p>此时 Vercel 会基于 Waline 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。</p><figure><img src="'+c+'" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure><p>一两分钟后，满屏的烟花会庆祝你部署成功。此时点击 <code>Go to Dashboard</code> 可以跳转到应用的控制台。</p><figure><img src="'+p+'" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure></li><li><p>点击顶部的 <code>Settings</code> - <code>Environment Variables</code> 进入环境变量配置页，并配置三个环境变量 <code>LEAN_ID</code>, <code>LEAN_KEY</code> 和 <code>LEAN_MASTER_KEY</code> 。它们的值分别对应上一步在 LeanCloud 中获得的 <code>APP ID</code>, <code>APP KEY</code>, <code>Master Key</code>。</p><figure><img src="'+d+'" alt="设置环境变量" tabindex="0"><figcaption>设置环境变量</figcaption></figure><div class="hint-container note"><p class="hint-container-title">注</p><p>如果你使用 LeanCloud 国内版，请额外配置 <code>LEAN_SERVER</code> 环境变量，值为你绑定好的域名。</p></div></li><li><p>环境变量配置完成之后点击顶部的 <code>Deployments</code> 点击顶部最新的一次部署右侧的 <code>Redeploy</code> 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。</p><figure><img src="'+r+'" alt="redeploy" tabindex="0"><figcaption>redeploy</figcaption></figure></li><li><p>此时会跳转到 <code>Overview</code> 界面开始部署，等待片刻后 <code>STATUS</code> 会变成 <code>Ready</code>。此时请点击 <code>Visit</code> ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。</p><figure><img src="'+u+'" alt="redeploy success" tabindex="0"><figcaption>redeploy success</figcaption></figure></li></ol><h2 id="绑定域名-可选" tabindex="-1"><a class="header-anchor" href="#绑定域名-可选" aria-hidden="true">#</a> 绑定域名 (可选)</h2><ol><li><p>点击顶部的 <code>Settings</code> - <code>Domains</code> 进入域名配置页</p></li><li><p>输入需要绑定的域名并点击 <code>Add</code></p><figure><img src="'+h+'" alt="Add domain" tabindex="0"><figcaption>Add domain</figcaption></figure></li><li><p>在域名服务器商处添加新的 <code>CNAME</code> 解析记录</p><table><thead><tr><th>Type</th><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>CNAME</td><td>example</td><td>cname.vercel-dns.com</td></tr></tbody></table></li><li><p>等待生效，你可以通过自己的域名来访问了🎉</p><ul><li>评论系统：example.yourdomain.com</li><li>评论管理：example.yourdomain.com/ui</li></ul><figure><img src="'+g+`" alt="success" tabindex="0"><figcaption>success</figcaption></figure></li></ol><h2 id="html-引入-客户端" tabindex="-1"><a class="header-anchor" href="#html-引入-客户端" aria-hidden="true">#</a> HTML 引入 (客户端)</h2><p>在你的网页中进行如下设置:</p><ol><li><p>导入 Waline 样式 <code>https://unpkg.com/@waline/client@v2/dist/waline.css</code>。</p></li><li><p>创建 <code>&lt;script&gt;</code> 标签使用来自 <code>https://unpkg.com/@waline/client@v2/dist/waline.mjs</code> 的 <code>init()</code> 函数初始化，并传入必要的 <code>el</code> 与 <code>serverURL</code> 选项。</p><ul><li><code>el</code> 选项是 Waline 渲染使用的元素，你可以设置一个字符串形式的 CSS 选择器或者一个 HTMLElement 对象。</li><li><code>serverURL</code> 是服务端的地址，即上一步获取到的值。</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@waline/client@v2/dist/waline.css<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> init <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://unpkg.com/@waline/client@v2/dist/waline.mjs&#39;</span><span class="token punctuation">;</span>

    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;https://your-domain.vercel.app&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>评论服务此时就会在你的网站上成功运行 🎉</p></li></ol><h2 id="评论管理-管理端" tabindex="-1"><a class="header-anchor" href="#评论管理-管理端" aria-hidden="true">#</a> 评论管理 (管理端)</h2><ol><li>部署完成后，请访问 <code>&lt;serverURL&gt;/ui/register</code> 进行注册。首个注册的人会被设定成管理员。</li><li>管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。</li><li>用户也可通过评论框注册账号，登陆后会跳转到自己的档案页。</li></ol><h2 id="视频教程" tabindex="-1"><a class="header-anchor" href="#视频教程" aria-hidden="true">#</a> 视频教程</h2><p>以下是热心用户制作的视频教程，以上操作不清楚的也可以参考一二。</p><h3 id="waline-部署教程-快速上手" tabindex="-1"><a class="header-anchor" href="#waline-部署教程-快速上手" aria-hidden="true">#</a> Waline 部署教程（快速上手）</h3>`,11),j={href:"https://space.bilibili.com/381992209",target:"_blank",rel:"noopener noreferrer"},Y=n("h3",{id:"使用-vercel-简单地部署-waline-评论系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-vercel-简单地部署-waline-评论系统","aria-hidden":"true"},"#"),e(" 使用 Vercel 简单地部署 Waline 评论系统")],-1),H={href:"https://space.bilibili.com/355877984",target:"_blank",rel:"noopener noreferrer"};function G($,O){const s=l("ExternalLinkIcon"),i=l("BiliBili");return v(),k("div",null,[w,_(" more "),A,n("ol",null,[n("li",null,[n("p",null,[n("a",E,[e("登录"),a(s)]),e(" 或 "),n("a",V,[e("注册"),a(s)]),e(),L,e(" 并进入 "),n("a",q,[e("控制台"),a(s)])])]),n("li",null,[n("p",null,[e("点击左上角 "),n("a",N,[e("创建应用"),a(s)]),e(" 并起一个你喜欢的名字 (请选择免费的开发版):")]),P]),C]),n("div",I,[S,n("p",null,[e("如果你正在使用 Leancloud 国内版 ("),n("a",B,[e("leancloud.cn"),a(s)]),e(")，我们推荐你切换到国际版 ("),n("a",D,[e("leancloud.app"),a(s)]),e(")。否则，你需要为应用额外绑定"),F,e("的域名，同时购买独立 IP 并完成备案接入:")]),K]),R,n("figure",null,[n("a",M,[T,a(s)]),U]),W,n("blockquote",null,[n("p",null,[e("UP 主："),n("a",j,[e("rickroll 摇"),a(s)])])]),a(i,{bvid:"BV1pB4y1E7fp"}),Y,n("blockquote",null,[n("p",null,[e("UP 主："),n("a",H,[e("岚天呀"),a(s)])])]),a(i,{bvid:"BV1Ft4y1A73f"})])}const Q=m(y,[["render",G],["__file","index.html.vue"]]);export{Q as default};
