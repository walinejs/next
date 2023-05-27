import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,b as n,e as a,f as s,w as u,d as e}from"./app-86489c04.js";const r={},k=e(`<p>用户可以通过 Waline 提供的 Hook 扩展自定义钩子函数来实现自定义功能。但如果用户之间想要共享自定义的 Hook 方法的话，只能使用复制的方式。为了解决这个问题，Waline 插件系统应运而生。</p><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2><p>Waline 初始化配置新增了 <code>plugins</code> 属性，支持配置多个插件。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HelloWorldPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline-plugins/hello-world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    HelloWorldPlugin<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>除了直接安装别人的插件之外，我们也可以在这里配置自己的插件逻辑。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HelloWorldPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline-plugins/hello-world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">async</span> <span class="token function">postSave</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// do what ever you want after comment saved</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">middlewares</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="制作插件" tabindex="-1"><a class="header-anchor" href="#制作插件" aria-hidden="true">#</a> 制作插件</h2><h3 id="基于-hook-制作" tabindex="-1"><a class="header-anchor" href="#基于-hook-制作" aria-hidden="true">#</a> 基于 Hook 制作</h3>`,8),d=e(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">postSave</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// do what ever you want after comment saved</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>需要注意，如果用户安装了多个 Hook 类插件，同一个钩子函数的执行是安装插件加载的先后顺序来执行的。如果前置有钩子方法提前返回的话，就不会执行后续的操作了。</p><h3 id="基于中间件制作" tabindex="-1"><a class="header-anchor" href="#基于中间件制作" aria-hidden="true">#</a> 基于中间件制作</h3>`,3),v={href:"https://koajs.com",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>如果你不清楚 Koa 中间件是什么，可以先搜索了解一下。使用中间件模式制作插件需要注意的是，回调方法一定要写 <code>next()</code> 的执行，否则不会执行后续操作。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">middlewares</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>当然你完全可以讲 Hook 类插件和中间件类插件逻辑放在一块，这些 Waline 都是支持的。</p><h3 id="插件列表" tabindex="-1"><a class="header-anchor" href="#插件列表" aria-hidden="true">#</a> 插件列表</h3><p>欢迎提交插件~</p>`,5),m={href:"https://github.com/walinejs/plugins/tree/master/packages/hello-world",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/walinejs/plugins/tree/master/packages/privacy",target:"_blank",rel:"noopener noreferrer"};function f(b,_){const o=p("RouterLink"),t=p("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[a("开发一款插件也非常的简单，基本和之前 "),s(o,{to:"/reference/server/config.html#%E8%AF%84%E8%AE%BA-hooks"},{default:u(()=>[a("Hook")]),_:1}),a(" 的使用方法一致，只是做了一层封装。")]),d,n("p",null,[a("如果 Hook 没办法满足你的需求，则可以使用更强大的中间件模式来自定义开发。Waline 最底层是使用了 Node.js 框架 "),n("a",v,[a("Koa"),s(t)]),a("，我们将 Koa 的中间件配置整体暴露出来，这样可以满足高级开发者的各种自定义需求。")]),h,n("ul",null,[n("li",null,[n("a",m,[a("@waline-plugins/hello-world"),s(t)])]),n("li",null,[n("a",g,[a("@waline-plugins/privacy"),s(t)])])])])}const y=c(r,[["render",f],["__file","plugin.html.vue"]]);export{y as default};
