import{_ as a,Y as h,Z as s,$ as _,a0 as t,a2 as d,a3 as e,a4 as l,a1 as o,F as n}from"./framework-0d72886b.js";const i={},u=t("p",null,"你可以通过下面的环境变量对 Waline 服务端进行配置。",-1),S=t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,[d("环境变量在更新后必须"),t("strong",null,"重新部署"),d("才能生效。")]),t("p",null,[d("Vercel 需要在 "),t("kbd",null,"Settings"),d(" - "),t("kbd",null,"Environment Variables"),d(" 中进行设置。")])],-1),T=o('<h2 id="主要配置" tabindex="-1"><a class="header-anchor" href="#主要配置" aria-hidden="true">#</a> 主要配置</h2><table><thead><tr><th>环境变量名称</th><th>必填</th><th>备注</th></tr></thead><tbody><tr><td><code>LEAN_ID</code></td><td>✅</td><td>LeanCloud 应用的 App ID</td></tr><tr><td><code>LEAN_KEY</code></td><td>✅</td><td>LeanCloud 应用的 App Key</td></tr><tr><td><code>LEAN_MASTER_KEY</code></td><td>✅</td><td>LeanCloud 应用的 Master Key 用于后台修改数据</td></tr><tr><td><code>LEAN_SERVER</code></td><td>⚠</td><td>LeanCloud 服务地址，国内版用户需要配置此项</td></tr><tr><td><code>SITE_NAME</code></td><td></td><td>博客名称</td></tr><tr><td><code>SITE_URL</code></td><td></td><td>博客地址</td></tr><tr><td><code>LOGIN</code></td><td></td><td>当设置为 LOGIN=force 时会要求登录才能评论</td></tr></tbody></table><h2 id="显示" tabindex="-1"><a class="header-anchor" href="#显示" aria-hidden="true">#</a> 显示</h2>',3),E=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"环境变量名称"),t("th",null,"默认值"),t("th",null,"备注")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"DISABLE_USERAGENT")]),t("td",null,[t("code",null,"false")]),t("td",null,"是否隐藏评论者的 UA，默认为否")]),t("tr",null,[t("td",null,[t("code",null,"DISABLE_REGION")]),t("td",null,[t("code",null,"false")]),t("td",null,"是否隐藏评论者的归属地")]),t("tr",null,[t("td",null,[t("code",null,"DISABLE_AUTHOR_NOTIFY")]),t("td",null,[t("code",null,"false")]),t("td",null,"是否禁止新评论通知")]),t("tr",null,[t("td",null,[t("code",null,"AVATAR_PROXY")]),t("td",null,[t("code",null,"https://avatar.75cdn.workers.dev")]),t("td",null,[d("头像的代理地址，设置 "),t("code",null,"false"),d(" 关闭代理")])]),t("tr",null,[t("td",null,[t("code",null,"GRAVATAR_STR")]),t("td",null,[t("span",null,[t("code",{"v-pre":""},"https://seccdn.libravatar.org/avatar/{{mail|md5}}")])]),t("td",null,"Gravatar 头像的地址，基于 nunjucks 语法")]),t("tr",null,[t("td",null,[t("code",null,"LEVELS")]),t("td"),t("td",null,"设置后会根据评论数为每个用户提供等级标签")])])],-1),b={class:"hint-container tip"},P=o('<p class="hint-container-title">等级标签</p><p>根据设置的等级条件以及用户的评论数，会为评论者增加等级标签。该功能默认关闭，可以通过配置环境变量 <code>LEVELS</code> 开启该功能。配置的形式为一串给定的数的逗号拼接，例如 <code>0,10,20,50,100,200</code> 表示的就是：</p><table><thead><tr><th>等级</th><th>条件</th><th>默认等级标签</th></tr></thead><tbody><tr><td>0</td><td>0 &lt;= count &lt; 10</td><td>潜水</td></tr><tr><td>1</td><td>10 &lt;= count &lt; 20</td><td>冒泡</td></tr><tr><td>2</td><td>20 &lt;= count &lt; 50</td><td>吐槽</td></tr><tr><td>3</td><td>50 &lt;= count &lt; 100</td><td>活跃</td></tr><tr><td>4</td><td>100 &lt;= count &lt; 200</td><td>话痨</td></tr><tr><td>5</td><td>200 &lt;= count</td><td>传说</td></tr></tbody></table>',3),O=t("p",null,[d("默认只提供了 6 级文案，但并不表示只能有 6 个级别。具体的等级上限是根据你设置的等级判断规则来的。增加新的等级建议自己配置上等级对应的文案，没有提供文案的话默认展示的就是 "),t("code",null,"Level 10"),d(" 这样的默认文案。")],-1),R=o('<h2 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h2><table><thead><tr><th>环境变量名称</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>IPQPS</code></td><td><code>60</code></td><td>基于 IP 的评论发布频率限制，单位为秒。设置为 0 不限制</td></tr><tr><td><code>SECURE_DOMAINS</code></td><td></td><td>安全域名配置，支持逗号分隔配置多个域名</td></tr><tr><td><code>AKISMET_KEY</code></td><td><code>70542d86693e</code></td><td>Akismet 反垃圾评论服务 Key (默认开启，不用请设置为 false)</td></tr><tr><td><code>COMMENT_AUDIT</code></td><td><code>false</code></td><td>评论发布审核开关。开启后评论需要经过管理员审核后才能显示，所以建议在评论框默认文字上提供提示</td></tr><tr><td><code>RECAPTCHA_V3_KEY</code></td><td></td><td>reCAPTCHA V3 key，须与客户端同时配置</td></tr><tr><td><code>RECAPTCHA_V3_SECRET</code></td><td></td><td>reCAPTCHA V3 secret，服务端使用，不可泄漏</td></tr><tr><td><code>TURNSTILE_KEY</code></td><td></td><td>Turnstile key，须与客户端同时配置</td></tr><tr><td><code>TURNSTILE_SECRET</code></td><td></td><td>Turnstile secret，服务端使用，不可泄漏</td></tr></tbody></table>',2),A={class:"hint-container tip"},M=t("p",{class:"hint-container-title"},"Recaptcha 和 Turnstile",-1),L={href:"https://www.cloudflare.com/zh-cn/products/turnstile/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.google.com/recaptcha",target:"_blank",rel:"noopener noreferrer"},D=t("p",null,[d("配置时安全域名需要同时添加网站地址和 Waline 服务端地址（不包含传输协议，即 "),t("code",null,"http://"),d(" 或 "),t("code",null,"https://"),d("）。")],-1),I=o('<h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><table><thead><tr><th>环境变量名称</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MARKDOWN_CONFIG</code></td><td><code>{}</code></td><td>MarkdownIt 配置</td></tr><tr><td><code>MARKDOWN_HIGHLIGHT</code></td><td><code>true</code></td><td>是否启用高亮</td></tr><tr><td><code>MARKDOWN_EMOJI</code></td><td><code>true</code></td><td>是否启用 Emoji 缩写支持</td></tr><tr><td><code>MARKDOWN_SUB</code></td><td><code>true</code></td><td>是否启用下角标支持</td></tr><tr><td><code>MARKDOWN_SUP</code></td><td><code>true</code></td><td>是否启用上角标支持</td></tr><tr><td><code>MARKDOWN_TEX</code></td><td><code>mathjax</code></td><td>解析 Tex 的服务，支持 <code>mathjax</code>、<code>katex</code>、<code>false</code></td></tr><tr><td><code>MARKDOWN_MATHJAX</code></td><td><code>{}</code></td><td>MathJax 选项</td></tr><tr><td><code>MARKDOWN_KATEX</code></td><td><code>{}</code></td><td>Katex 选项</td></tr></tbody></table><h2 id="邮件" tabindex="-1"><a class="header-anchor" href="#邮件" aria-hidden="true">#</a> 邮件</h2><p>用户注册和评论的邮件通知都会用到邮件服务。配置邮件服务相关变量后，用户注册会增加邮箱验证码确认相关的操作，用来防止恶意的注册。</p><table><thead><tr><th>环境变量名称</th><th>备注</th></tr></thead><tbody><tr><td><code>SMTP_SERVICE</code></td><td>SMTP 邮件发送服务提供商</td></tr><tr><td><code>SMTP_HOST</code></td><td>SMTP 服务器地址</td></tr><tr><td><code>SMTP_PORT</code></td><td>SMTP 服务器端口。</td></tr><tr><td><code>SMTP_USER</code></td><td>SMTP 用户名</td></tr><tr><td><code>SMTP_PASS</code></td><td>SMTP 密码</td></tr><tr><td><code>SMTP_SECURE</code></td><td>是否使用 SSL 连接 SMTP</td></tr><tr><td><code>SENDER_NAME</code></td><td>自定义发送邮件的发件人</td></tr><tr><td><code>SENDER_EMAIL</code></td><td>自定义发送邮件的发件地址</td></tr></tbody></table>',5),f={class:"hint-container tip"},B=t("p",{class:"hint-container-title"},"提示",-1),y={href:"https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json",target:"_blank",rel:"noopener noreferrer"},N=t("code",null,"SMTP_SERVICE",-1),G=t("code",null,"SMTP_HOST",-1),g=t("code",null,"SMTP_PORT",-1),m=t("code",null,"SMTP_SERVICE",-1),C=t("code",null,"SMTP_HOST",-1),Q=t("code",null,"SMTP_PORT",-1),w=t("p",null,"SMTP 的用户名通常均支持用户的完整邮箱，而密码大多同邮箱密码。",-1),H=t("p",null,"请特别注意部分邮箱 (如 163、qq 邮箱) 使用单独的 SMTP 密码。",-1),K=o('<h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2><h3 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h3><table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB 数据库名称</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB 服务的用户名</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB 服务的密码</td></tr><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB 服务的地址，支持数组格式</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB 服务的端口，支持数组格式</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB 集群</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB 认证源</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td><code>false</code></td><td>是否使用 SSL 进行连接</td></tr></tbody></table><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL 数据库库名</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL 数据库的用户名</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL 数据库的密码</td></tr><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL 服务的地址</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL 服务的端口</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL 数据表的表前缀</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL 数据表的字符集</td></tr><tr><td><code>MYSQL_SSL</code></td><td></td><td><code>false</code></td><td>是否使用 SSL MYSQL 连接数据库</td></tr></tbody></table><h3 id="tidb" tabindex="-1"><a class="header-anchor" href="#tidb" aria-hidden="true">#</a> TiDB</h3>',6),k=o('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>TIDB_DB</code></td><td>✅</td><td></td><td>TiDB 数据库库名</td></tr><tr><td><code>TIDB_USER</code></td><td>✅</td><td></td><td>TiDB 数据库的用户名</td></tr><tr><td><code>TIDB_PASSWORD</code></td><td>✅</td><td></td><td>TiDB 数据库的密码</td></tr><tr><td><code>TIDB_HOST</code></td><td></td><td>127.0.0.1</td><td>TiDB 服务的地址</td></tr><tr><td><code>TIDB_PORT</code></td><td></td><td>4000</td><td>TiDB 服务的端口</td></tr><tr><td><code>TIDB_PREFIX</code></td><td></td><td><code>wl_</code></td><td>TiDB 数据表的表前缀</td></tr><tr><td><code>TIDB_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>TiDB 数据表的字符集</td></tr></tbody></table><h3 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite" aria-hidden="true">#</a> SQLite</h3><table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite 数据库文件的路径，该路径不包含文件名本身</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>用户登录密钥，随机字符串即可</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite 数据库文件名，若文件名变化需要修改该字段值</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite 数据表的表前缀</td></tr></tbody></table><h3 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h3><table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL 数据库库名</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL 数据库的用户名</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL 数据库的密码</td></tr><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL 服务的地址</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL 服务的端口</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL 数据表的表前缀</td></tr><tr><td><code>PG_SSL</code></td><td></td><td><code>false</code></td><td>是否使用 SSL 连接 PostgreSQL 数据库</td></tr><tr><td><code>POSTGRES_DATABASE</code></td><td></td><td></td><td>同 <code>PG_DB</code></td></tr><tr><td><code>POSTGRES_USER</code></td><td></td><td></td><td>同 <code>PG_USER</code></td></tr><tr><td><code>POSTGRES_PASSWORD</code></td><td></td><td></td><td>同 <code>PG_PASSWORD</code></td></tr><tr><td><code>POSTGRES_HOST</code></td><td></td><td>127.0.0.1</td><td>同 <code>PG_HOST</code></td></tr><tr><td><code>POSTGRES_PORT</code></td><td></td><td>3211</td><td>同 <code>PG_PORT</code></td></tr><tr><td><code>POSTGRES_PREFIX</code></td><td></td><td><code>wl_</code></td><td>同 <code>PG_PREFIX</code></td></tr><tr><td><code>POSTGRES_SSL</code></td><td></td><td><code>false</code></td><td>同 <code>POSTGRES_SSL</code></td></tr></tbody></table><h3 id="cloudbase" tabindex="-1"><a class="header-anchor" href="#cloudbase" aria-hidden="true">#</a> CloudBase</h3><table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>TCB_ENV</code></td><td>✅</td><td></td><td>腾讯云开发环境 ID</td></tr><tr><td><code>TCB_ID</code></td><td>✅</td><td></td><td>腾讯云 API 密钥 ID</td></tr><tr><td><code>TCB_KEY</code></td><td>✅</td><td></td><td>腾讯云 API 密钥 Key</td></tr><tr><td><code>JWT_TOKEN</code></td><td></td><td></td><td>用户登录密钥，如果没有配任何环境变量的话需要配置此变量，随机字符串即可</td></tr></tbody></table>',7),x={class:"hint-container tip"},U=t("p",{class:"hint-container-title"},"提示",-1),W={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},V=t("h3",{id:"github",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),d(" GitHub")],-1),v=t("thead",null,[t("tr",null,[t("th",null,"环境变量名称"),t("th",null,"必填"),t("th",null,"默认值"),t("th",null,"备注")])],-1),Y=t("td",null,[t("code",null,"GITHUB_TOKEN")],-1),F=t("td",null,"✅",-1),X=t("td",null,null,-1),q={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},j=t("tr",null,[t("td",null,[t("code",null,"GITHUB_REPO")]),t("td",null,"✅"),t("td"),t("td",null,[d("仓库名称，例如 "),t("code",null,"walinejs/waline")])],-1),J=t("tr",null,[t("td",null,[t("code",null,"GITHUB_PATH")]),t("td"),t("td"),t("td",null,[d("数据存储目录，例如 "),t("code",null,"data"),d(" 表示存储在 "),t("code",null,"data"),d(" 目录下，默认存在仓库根目录下")])],-1),z=o('<h3 id="deta-base" tabindex="-1"><a class="header-anchor" href="#deta-base" aria-hidden="true">#</a> Deta Base</h3><table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>DETA_PROJECT_KEY</code></td><td>✅</td><td></td><td>Deta 项目密钥</td></tr></tbody></table><h2 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置" aria-hidden="true">#</a> 高级配置</h2>',3),Z=t("thead",null,[t("tr",null,[t("th",null,"环境变量名称"),t("th",null,"默认值"),t("th",null,"备注")])],-1),$=t("td",null,[t("code",null,"OAUTH_URL")],-1),tt=t("td",null,[t("code",null,"https://oauth.lithub.cc")],-1),dt={href:"https://github.com/walinejs/auth",target:"_blank",rel:"noopener noreferrer"},et=t("tr",null,[t("td",null,[t("code",null,"WEBHOOK")]),t("td"),t("td",null,"评论成功后会向 WEBHOOK 配置的地址发送一条 POST 请求")],-1),ot=t("tr",null,[t("td",null,[t("code",null,"WALINE_ADMIN_MODULE_ASSET_URL")]),t("td",null,[t("code",null,"//unpkg.com/@waline/admin")]),t("td",null,"Waline admin 地址")],-1),ct=t("tr",null,[t("td",null,[t("code",null,"IP2REGION_DB")]),t("td"),t("td",null,"自定义 IP 查询库路径")],-1);function rt(lt,nt){const r=n("RouterLink"),c=n("ExternalLinkIcon");return h(),s("div",null,[u,S,_(" more "),T,E,t("div",b,[P,t("p",null,[d("除了可以自定义等级判断规则之外，我们还可以在客户端自定义等级标签，详见 "),e(r,{to:"/guide/features/i18n.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%AD%E8%A8%80"},{default:l(()=>[d("等级标签")]),_:1}),d("。")]),O]),R,t("div",A,[M,t("p",null,[d("Turnstile Key 和 Secret 可在 "),t("a",L,[d("https://www.cloudflare.com/zh-cn/products/turnstile/"),e(c)]),d(" 申请。")]),t("p",null,[d("Recaptcha Key 和 Secret 可在 "),t("a",p,[d("https://www.google.com/recaptcha"),e(c)]),d(" 申请。")]),D]),I,t("div",f,[B,t("p",null,[d("可以在 "),t("a",y,[d("这里"),e(c)]),d(" 查看支持的服务商。"),N,d(" 和 ("),G,d("、"),g,d(") 任选其一即可，如果没有在列表中知道对应的 "),m,d(" 的话则需要配 "),C,d(" 和 "),Q,d("，它们一般可以在邮箱的设置中找到。")]),w,H]),K,t("p",null,[e(r,{to:"/guide/deploy/tidb.html"},{default:l(()=>[d("在 TiDB 上创建数据库")]),_:1})]),k,t("div",x,[U,t("p",null,[d("对于腾讯云 API 密钥 ID 与 Key，可以在 "),t("a",W,[d("此处"),e(c)]),d(" 申请。")])]),V,t("table",null,[v,t("tbody",null,[t("tr",null,[Y,F,X,t("td",null,[t("a",q,[d("Personal access tokens"),e(c)])])]),j,J])]),z,t("table",null,[Z,t("tbody",null,[t("tr",null,[$,tt,t("td",null,[d("OAuth 第三方登录服务地址，可以 "),t("a",dt,[d("自建 auth"),e(c)]),d(" 这是能让用户使用 GitHub, Twitter, Facebook, Google, 微博等第三方账户登录最简单的方式。")])]),et,ot,ct])])])}const ht=a(i,[["render",rt],["__file","env.html.vue"]]);export{ht as default};
