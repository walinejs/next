import{_ as n,Y as i,Z as c,$ as l,a0 as t,a2 as e,a3 as d,a4 as h,a1 as a,F as r}from"./framework-0d72886b.js";const p={},u=t("p",null,"Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB.",-1),_=t("p",null,"You only need to configure environment variables, and Waline will automatically switch to the corresponding data storage service based on the environment variables you configure.",-1),b=t("h2",{id:"mongodb",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),e(" MongoDB")],-1),f={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},S=a(`<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB database name</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB server username</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB server password</td></tr><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB server address, support array format</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB server port, support array format</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB replica set</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB auth source</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td><code>false</code></td><td>use SSL connection</td></tr></tbody></table><p>Here is an example configuration for mongodb.com. Please note that you need set as JSON style for <code>MONGO_HOST</code> and <code>MONGO_PORT</code> when you has multiple hosts.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span class="token punctuation">]</span>
<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">27017,27017</span>,27017,27017<span class="token punctuation">]</span>
<span class="token assign-left variable">MONGO_DB</span><span class="token operator">=</span>waline
<span class="token assign-left variable">MONGO_USER</span><span class="token operator">=</span>admin
<span class="token assign-left variable">MONGO_PASSWORD</span><span class="token operator">=</span>xxxx
<span class="token assign-left variable">MONGO_REPLICASET</span><span class="token operator">=</span>atlas-12cebf-shard-0
<span class="token assign-left variable">MONGO_AUTHSOURCE</span><span class="token operator">=</span>admin
<span class="token assign-left variable">MONGO_OPT_SSL</span><span class="token operator">=</span>true
</code></pre></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2>`,4),g={href:"https://freedb.tech",target:"_blank",rel:"noopener noreferrer"},m={href:"https://planetscale.com",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},T=a('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL database name</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL server username</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL server password</td></tr><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL server address</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL server port</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL table prefix</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL table charset</td></tr><tr><td><code>MYSQL_SSL</code></td><td></td><td><code>false</code></td><td>whether use SSL connection</td></tr></tbody></table><h2 id="tidb" tabindex="-1"><a class="header-anchor" href="#tidb" aria-hidden="true">#</a> TiDB</h2>',2),v={href:"https://github.com/pingcap/tidb",target:"_blank",rel:"noopener noreferrer"},D={href:"https://tidbcloud.com/",target:"_blank",rel:"noopener noreferrer"},P=a('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>TIDB_DB</code></td><td>✅</td><td></td><td>TiDB database name</td></tr><tr><td><code>TIDB_USER</code></td><td>✅</td><td></td><td>TiDB database user name</td></tr><tr><td><code>TIDB_PASSWORD</code></td><td>✅</td><td></td><td>TiDB database password</td></tr><tr><td><code>TIDB_HOST</code></td><td></td><td>127.0.0.1</td><td>Address of TiDB service</td></tr><tr><td><code>TIDB_PORT</code></td><td></td><td>4000</td><td>Port of TiDB service</td></tr><tr><td><code>TIDB_PREFIX</code></td><td></td><td><code>wl_</code></td><td>Table prefix of TiDB data table</td></tr><tr><td><code>TIDB_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>TiDB data table character set</td></tr></tbody></table><h2 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite" aria-hidden="true">#</a> SQLite</h2>',2),y={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sqlite",target:"_blank",rel:"noopener noreferrer"},w=a('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite storage file path, not include file name</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>Random String for login token generator</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite storage file name, change it if your filename is not waline</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite table prefix</td></tr></tbody></table><h2 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h2>',2),k={href:"https://supabase.com",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.elephantsql.com/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},M=a('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL database name</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL server username</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL server password</td></tr><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL server address</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL server port</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL table prefix</td></tr><tr><td><code>PG_SSL</code></td><td></td><td><code>false</code></td><td>set to <code>true</code> to use SSL connection</td></tr><tr><td><code>POSTGRES_DATABASE</code></td><td></td><td></td><td>alias for <code>PG_DB</code></td></tr><tr><td><code>POSTGRES_USER</code></td><td></td><td></td><td>alias for <code>PG_USER</code></td></tr><tr><td><code>POSTGRES_PASSWORD</code></td><td></td><td></td><td>alias for <code>PG_PASSWORD</code></td></tr><tr><td><code>POSTGRES_HOST</code></td><td></td><td>127.0.0.1</td><td>alias for <code>PG_HOST</code></td></tr><tr><td><code>POSTGRES_PORT</code></td><td></td><td>3211</td><td>alias for <code>PG_PORT</code></td></tr><tr><td><code>POSTGRES_PREFIX</code></td><td></td><td><code>wl_</code></td><td>alias for <code>PG_PREFIX</code></td></tr><tr><td><code>POSTGRES_SSL</code></td><td></td><td><code>false</code></td><td>alias for <code>POSTGRES_SSL</code></td></tr></tbody></table><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h2>',2),B=t("kbd",null,"Generate new token",-1),G={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},E=t("strong",null,"repo",-1),Q=t("thead",null,[t("tr",null,[t("th",null,"Environment Variable"),t("th",null,"Required"),t("th",null,"Default"),t("th",null,"Description")])],-1),N=t("td",null,[t("code",null,"GITHUB_TOKEN")],-1),q=t("td",null,"✅",-1),I=t("td",null,null,-1),x={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},H=t("tr",null,[t("td",null,[t("code",null,"GITHUB_REPO")]),t("td",null,"✅"),t("td"),t("td",null,[e("repository name, such as "),t("code",null,"walinejs/waline")])],-1),A=t("tr",null,[t("td",null,"GITHUB_PATH"),t("td"),t("td"),t("td",null,[e("The data storage directory, such as "),t("code",null,"data"),e(" means it is stored in the "),t("code",null,"data"),e(" directory, root directory by default")])],-1),C=t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"Note"),t("p",null,"Due to performance, using GitHub is not recommended.")],-1),U=t("h2",{id:"deta-base",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#deta-base","aria-hidden":"true"},"#"),e(" Deta Base")],-1),V={href:"https://deta.space/docs/en/reference/base/about",target:"_blank",rel:"noopener noreferrer"},W=a('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>DETA_PROJECT_KEY</code></td><td>✅</td><td></td><td>Deta project secret key</td></tr></tbody></table><h2 id="custom" tabindex="-1"><a class="header-anchor" href="#custom" aria-hidden="true">#</a> Custom</h2><p>Besides above database storage, support for other storage services can also be added.</p>',3),Y={href:"https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js",target:"_blank",rel:"noopener noreferrer"},j=t("code",null,"select()",-1),F=t("code",null,"add()",-1),X=t("code",null,"update()",-1),J=t("code",null,"delete()",-1);function K(z,Z){const o=r("ExternalLinkIcon"),s=r("RouterLink");return i(),c("div",null,[u,_,l(" more "),b,t("p",null,[t("a",f,[e("https://mongodb.com"),d(o)]),e(" official provides 512M MongoDB database support for free. The following are the environment variables that need to be configured to use MongoDB database.")]),S,t("p",null,[e("Using MySQL to store data is also a good choice. Besides our own MySQL service, we can also use "),t("a",g,[e("https://freedb.tech"),d(o)]),e(", which provides 100M of database support for free, or "),t("a",m,[e("PlanetScale"),d(o)]),e(" which provides 10GB.")]),t("p",null,[e("If you want to use MySQL as storage, you need to import "),t("a",O,[e("waline.sql"),d(o)]),e(" first to create table and table structure, then set these environment variables in project.")]),T,t("p",null,[t("a",v,[e("TiDB"),d(o)]),e(" is an open source NewSQL database. "),t("a",D,[e("TiDB Cloud"),d(o)]),e(" is the official online version, which provides 5GB of free quota for everyone to use.")]),t("p",null,[e("Please refer to "),d(s,{to:"/en/guide/deploy/tidb.html"},{default:h(()=>[e("Create TiDB database")]),_:1}),e(" to understand the initialization process.")]),P,t("p",null,[e("Download "),t("a",y,[e("waline.sqlite"),d(o)]),e(" to your server if you want to use SQLite. Then set these environment variables in project.")]),w,t("p",null,[t("a",k,[e("Supabase"),d(o)]),e(" offers a free 512M database,while "),t("a",L,[e("elephantSQL"),d(o)]),e(" provides 20M PG database support for free. Same as MySQL, you need to import "),t("a",R,[e("waline.pgsql"),d(o)]),e(" to create table and table structure before using PostgreSQL.")]),M,t("p",null,[e("Waline supports storing comment data in a CSV file on GitHub. To use GitHub as data storage, you need to apply for Personal access tokens. You can click "),B,e(" to apply it at "),t("a",G,[e("https://github.com/settings/tokens"),d(o)]),e(". Check the "),E,e(" option in permission to obtain read and write permissions for repositories.")]),t("table",null,[Q,t("tbody",null,[t("tr",null,[N,q,I,t("td",null,[t("a",x,[e("Personal access tokens"),d(o)])])]),H,A])]),C,U,t("p",null,[e("Deta provides "),t("a",V,[e("Deta Base"),d(o)]),e(" free database support, which can be used even if it is not deployed on Deta. If deployed on Deta, there is no need to configure any environment variables. By default, Waline will use Deta Base as the database to store data. If it is deployed elsewhere, the following environment variables need to be configured.")]),W,t("p",null,[e("If you want to help Waline supporting more storage services, you can fork the project and inherit the "),t("a",Y,[e("base class"),d(o)]),e(" and then implement the "),j,e(", "),F,e(", "),X,e(" and "),J,e(" methods of the corresponding storage service and submit the PR.")])])}const tt=n(p,[["render",K],["__file","database.html.vue"]]);export{tt as default};
