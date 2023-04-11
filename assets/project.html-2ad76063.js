import{_ as r,X as k,Y as d,Z as m,$ as n,a1 as s,a2 as t,a3 as a,a0 as v,C as c}from"./framework-4b90706e.js";const g={},f=n("p",null,"Waline official client provides various versions of files. You can import and use the official client in several ways.",-1),h=n("h2",{id:"npm-packages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm-packages","aria-hidden":"true"},"#"),s(" NPM Packages")],-1),w={href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"@waline/client",-1),_=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @waline/client
`)])])],-1),y=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` @waline/client
`)])])],-1),x=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` @waline/client
`)])])],-1),R=n("code",null,"@waline/client",-1),j=n("h2",{id:"import-in-normal-project",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#import-in-normal-project","aria-hidden":"true"},"#"),s(" Import in Normal Project")],-1),I=n("p",null,[s("Here is an example of importing and using "),n("code",null,"@waline/client"),s(" in a normal website project.")],-1),W=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" init "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@waline/client'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'@waline/client/dist/waline.css'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  el`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#waline'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),C=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" init "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@waline/client'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'@waline/client/dist/waline.css'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"el"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#waline'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),L=n("h2",{id:"import-in-vue-project",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#import-in-vue-project","aria-hidden":"true"},"#"),s(" Import in Vue Project")],-1),V=n("p",null,[s("Since "),n("code",null,"@waline/client"),s(" itself is based on Vue3, we directly export a responsive Vue component.")],-1),E=v(`<details class="hint-container details"><summary>Demo</summary><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Waline</span> <span class="token attr-name">:serverURL</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serverURL<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Waline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@waline/client/component&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> serverURL <span class="token operator">=</span> <span class="token string">&#39;https://waline.vercel.app&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Since we use responsive <code>path</code>, when the route changes, <code>@waline/client</code> will automatically refresh and display the comments of the corresponding route.</p></details><h2 id="import-in-react-project" tabindex="-1"><a class="header-anchor" href="#import-in-react-project" aria-hidden="true">#</a> Import in React project</h2><p>With a simple wrapper, you can turn Waline into a React component:</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> init <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@waline/client&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> WalineInstance<span class="token punctuation">,</span> WalineInitOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@waline/client&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">WalineOptions</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>WalineInitOptions<span class="token punctuation">,</span> <span class="token string">&#39;el&#39;</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Waline</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> WalineOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> walineInstanceRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>WalineInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> containerRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">createRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    walineInstanceRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>props<span class="token punctuation">,</span>
      el<span class="token operator">:</span> containerRef<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> walineInstanceRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    walineInstanceRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">update</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>containerRef<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function N(q,A){const u=c("ExternalLinkIcon"),l=c("CodeTabs"),i=c("RouterLink");return k(),d("div",null,[f,m(" more "),h,n("p",null,[s("Waline official client has been released to "),n("a",w,[s("npm"),t(u)]),s(" via "),b,s(", you can install it with the following command:")]),t(l,{id:"10",data:[{title:"pnpm"},{title:"npm"},{title:"yarn"}],"tab-id":"shell"},{tab0:a(({title:e,value:p,isActive:o})=>[_]),tab1:a(({title:e,value:p,isActive:o})=>[y]),tab2:a(({title:e,value:p,isActive:o})=>[x]),_:1}),n("p",null,[s("For the modules exported by "),R,s(", see "),t(i,{to:"/en/reference/client/file.html"},{default:a(()=>[s("Client Reference → Files")]),_:1}),s(".")]),j,I,t(l,{id:"30",data:[{title:"TS"},{title:"JS"}],"tab-id":"lang"},{tab0:a(({title:e,value:p,isActive:o})=>[W]),tab1:a(({title:e,value:p,isActive:o})=>[C]),_:1}),L,V,n("p",null,[s("All properties of components are reactive, you can find all supported properties in "),t(i,{to:"/en/reference/client/props.html"},{default:a(()=>[s("Client Reference → Component Props")]),_:1}),s(".")]),E])}const O=r(g,[["render",N],["__file","project.html.vue"]]);export{O as default};
