import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as k,c as v,a as m,b as n,e as s,f as a,w as t,d as p}from"./app-24f0e2de.js";const b={},_=n("p",null,"如果你担忧免费平台的请求延时，你也可以选择部署在自己的服务器上。",-1),h=p(`<h2 id="docker-部署" tabindex="-1"><a class="header-anchor" href="#docker-部署" aria-hidden="true">#</a> Docker 部署</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">LEAN_ID</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">LEAN_KEY</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">LEAN_MASTER_KEY</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8360</span>:8360 <span class="token punctuation">\\</span>
  lizheming/waline
</code></pre></div><p><code>LEAN_ID</code>、<code>LEAN_KEY</code> 和 <code>LEAN_MASTER_KEY</code> 分别对应的是后台 <code>APP ID</code>, <code>APP KEY</code>, <code>Master Key</code>。如果非 LeanCloud 国际版用户的话需要在后台绑定已备案域名并配置 <code>LEAN_SERVER</code>。</p><div class="hint-container tip"><p class="hint-container-title">如何构建镜像？</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/walinejs/waline.git
<span class="token builtin class-name">cd</span> waline
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> lizheming/waline <span class="token parameter variable">-f</span> packages/server/Dockerfile <span class="token builtin class-name">.</span>
</code></pre></div></div>`,4),y={id:"使用-docker-stack-deploy-或者-docker-compose",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#使用-docker-stack-deploy-或者-docker-compose","aria-hidden":"true"},"#",-1),w={href:"https://docs.docker.com/engine/reference/commandline/stack_deploy/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},E=p(`<p><code>docker-compose.yml</code> 示例:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">waline</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> waline
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lizheming/waline<span class="token punctuation">:</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>8360<span class="token punctuation">:</span><span class="token number">8360</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>PWD<span class="token punctuation">}</span>/data<span class="token punctuation">:</span>/app/data
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&#39;Asia/Shanghai&#39;</span>
      <span class="token key atrule">SQLITE_PATH</span><span class="token punctuation">:</span> <span class="token string">&#39;/app/data&#39;</span>
      <span class="token key atrule">JWT_TOKEN</span><span class="token punctuation">:</span> <span class="token string">&#39;Your token&#39;</span>
      <span class="token key atrule">SITE_NAME</span><span class="token punctuation">:</span> <span class="token string">&#39;Your site name&#39;</span>
      <span class="token key atrule">SITE_URL</span><span class="token punctuation">:</span> <span class="token string">&#39;https://example.com&#39;</span>
      <span class="token key atrule">SECURE_DOMAINS</span><span class="token punctuation">:</span> <span class="token string">&#39;example.com&#39;</span>
      <span class="token key atrule">AUTHOR_EMAIL</span><span class="token punctuation">:</span> <span class="token string">&#39;mail@example.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="直接运行-推荐" tabindex="-1"><a class="header-anchor" href="#直接运行-推荐" aria-hidden="true">#</a> 直接运行 (推荐)</h2><p>不使用容器部署的话运行也很简单。在配置必要的环境变量后，安装好模块后直接运行模块内的 <code>vanilla.js</code> 文件即可。</p>`,4),f=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` @waline/vercel
`),n("span",{class:"token function"},"node"),s(` node_modules/@waline/vercel/vanilla.js
`)])])],-1),S=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` @waline/vercel
`),n("span",{class:"token function"},"node"),s(` node_modules/@waline/vercel/vanilla.js
`)])])],-1),A=p(`<h2 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a> Nginx 配置</h2><p>如果你不想带端口访问的话，可以增加 Nginx 80 和 443 端口的反代。可参考如下配置:</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span>
<span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> your.domain.server.name</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">root</span> /www/wwwroot/your.domain.server.name</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$server_port</span> !~ 443)</span><span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^(/.*)$ https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># SSL setting</span>
  <span class="token directive"><span class="token keyword">ssl_certificate</span> fullchain.pem</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_certificate_key</span> privkey.pem</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1.1 TLSv1.2 TLSv1.3</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_ciphers</span> EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_session_cache</span> shared:SSL:10m</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">10m</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">add_header</span> Strict-Transport-Security <span class="token string">&quot;max-age=31536000&quot;</span></span><span class="token punctuation">;</span>

  <span class="token comment"># proxy to 8360</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8360</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> X-Cache <span class="token variable">$upstream_cache_status</span></span><span class="token punctuation">;</span>
    <span class="token comment"># cache</span>
    <span class="token directive"><span class="token keyword">add_header</span> Cache-Control no-cache</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">expires</span> <span class="token number">12h</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function L(C,T){const c=e("ExternalLinkIcon"),o=e("RouterLink"),l=e("CodeTabs");return k(),v("div",null,[_,m(" more "),h,n("h3",y,[g,s(" 使用 "),n("a",w,[s("docker stack deploy"),a(c)]),s(" 或者 "),n("a",x,[s("docker-compose"),a(c)])]),n("p",null,[s("这里使用了 SQLite 数据库作为例子。关于 SQLite 和支持的数据库服务，请参考"),a(o,{to:"/guide/database.html#sqlite"},{default:t(()=>[s("多数据库服务支持")]),_:1}),s("。")]),E,a(l,{id:"30",data:[{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:t(({title:i,value:r,isActive:d})=>[f]),tab1:t(({title:i,value:r,isActive:d})=>[S]),_:1}),A])}const R=u(b,[["render",L],["__file","vps.html.vue"]]);export{R as default};
