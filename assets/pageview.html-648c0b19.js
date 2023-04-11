import{_ as n,X as a,Y as s,Z as t,$ as p,a0 as e}from"./framework-4b90706e.js";const o={},c=p("p",null,"Waline 支持浏览量统计。",-1),l=e(`<h2 id="和评论一起使用" tabindex="-1"><a class="header-anchor" href="#和评论一起使用" aria-hidden="true">#</a> 和评论一起使用</h2><p>如果你正在使用 Waline 的评论服务，你可以在初始化时设置 <code>pageview</code> 选项为 <code>true</code> 来开启浏览量统计功能:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>article-info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span>
  阅读量: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-pageview-count<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 文章内容 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> init <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://unpkg.com/@waline/client@v2/dist/waline.mjs&#39;</span><span class="token punctuation">;</span>

  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">pageview</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 浏览量统计</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Waline 会在初始化以及每次 path 更新时，自动查找页面中 <code>class</code> 值为 <code>waline-pageview-count</code> 的元素，获取其 <code>data-path</code> 为查询条件，并将得到的值填充到其中:</p><p>如果你需要一个不一样的选择器，你可以设置 <code>pageview</code> 选项为这个选择器。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- data-path 将作为查询条件 --&gt;</span>
阅读量: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-pageview-count<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>每次当你调用 <code>WalineInstance.update()</code> 时，Waline 会重新查找页面并自动更新浏览量。</p><div class="hint-container tip"><p class="hint-container-title">例子</p><div class="language-html" data-ext="html"><pre class="language-html"><code>当前页阅读量为:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-pageview-count<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/guide/client/count.html<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>当前页阅读量为: <span class="waline-pageview-count" data-path="/guide/client/count.html"></span></p></div><h2 id="单独使用" tabindex="-1"><a class="header-anchor" href="#单独使用" aria-hidden="true">#</a> 单独使用</h2><p>如果你只需要使用浏览量统计功能，你可以导入 Waline 提供的 pageview 模块，它的 Gzip 大小 &lt; 1KB。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    当前页面浏览量:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-pageview-count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    主页浏览量:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-pageview-count<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> pageviewCount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://unpkg.com/@waline/client/dist/pageview.mjs&#39;</span><span class="token punctuation">;</span>

  <span class="token function">pageviewCount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR_SERVER_URL&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span>

    <span class="token comment">// 可选的，用于自定选择器，默认为 \`&#39;.waline-pageview-count&#39;\`</span>
    <span class="token comment">// selector: &#39;waline-pageview-count&#39;,</span>

    <span class="token comment">// 可选的，是否在获取时增加访问量，默认为 \`true\`</span>
    <span class="token comment">// update: true,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>当前页面浏览量: <span class="waline-pageview-count"></span></p></li><li><p>主页浏览量: <span class="waline-pageview-count" data-path="/"></span></p></li></ul><div class="hint-container info"><p class="hint-container-title">中途取消</p><p>由于浏览量获取是一个异步网络操作，你可能需要在特定情况下取消正在执行的浏览量更新操作。</p><p><code>pageviewCount</code> 会返回一个函数，调用后即可取消此次更新:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> pageviewCount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://unpkg.com/@waline/client/dist/pageview.mjs&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> abort <span class="token operator">=</span> <span class="token function">pageviewCount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR_SERVER_URL&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 在 500ms 后，如果网络请求仍未完成，取消本次操作</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></div>`,13);function u(i,k){return a(),s("div",null,[c,t(" more "),l])}const d=n(o,[["render",u],["__file","pageview.html.vue"]]);export{d as default};
