import{_ as a,X as p,Y as e,Z as t,$ as n,a1 as s,a0 as o}from"./framework-4b90706e.js";const l={},i=n("p",null,[s("本教程指引你自定义 "),n("code",null,"@waline/client"),s(" 多语言与显示文字。")],-1),c=o(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>@waline/client</code> 提供了 <code>locale</code> 选项，你可以通过它自定义多语言与显示文字。</p><p>默认情况下，它会使用内置的多语言文字，并在语言不受支持时，回退到 <code>en-US</code> (英语美国)。</p><p>你可以传递一个完成的多语言配置给 <code>locale</code> 选项来新增语言支持，或者设置其中的几项对现有的 UI 文字进行覆盖。</p><h2 id="locale-选项" tabindex="-1"><a class="header-anchor" href="#locale-选项" aria-hidden="true">#</a> locale 选项</h2><ul><li><p>等级相关:</p><ul><li><code>level\${number}</code>: number 等级的文字</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>比如你设置了 6 个等级，你可以这样定义它们:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  locale<span class="token operator">:</span> <span class="token punctuation">{</span>
    level0<span class="token operator">:</span> <span class="token string">&#39;炼体&#39;</span><span class="token punctuation">,</span>
    level1<span class="token operator">:</span> <span class="token string">&#39;炼气&#39;</span><span class="token punctuation">,</span>
    level2<span class="token operator">:</span> <span class="token string">&#39;筑基&#39;</span><span class="token punctuation">,</span>
    level3<span class="token operator">:</span> <span class="token string">&#39;金丹&#39;</span><span class="token punctuation">,</span>
    level4<span class="token operator">:</span> <span class="token string">&#39;元婴&#39;</span><span class="token punctuation">,</span>
    level5<span class="token operator">:</span> <span class="token string">&#39;化神&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div></li><li><p>反应相关:</p><ul><li><code>reactionTitle</code>: 反应标题</li><li><code>reaction0</code>: 反应 1 文字</li><li><code>reaction1</code>: 反应 2 文字</li><li><code>reaction2</code>: 反应 3 文字</li><li><code>reaction3</code>: 反应 4 文字</li><li><code>reaction4</code>: 反应 5 文字</li><li><code>reaction5</code>: 反应 6 文字</li><li><code>reaction6</code>: 反应 7 文字</li><li><code>reaction7</code>: 反应 8 文字</li><li><code>reaction8</code>: 反应 9 文字</li></ul></li><li><p>UI 相关:</p><ul><li><code>nick</code>: 昵称</li><li><code>mail</code>: 邮箱</li><li><code>link</code>: 网址</li><li><code>placeholder</code>: 评论框默认文字</li><li><code>sofa</code>: 评论区为空时的显示文字</li><li><code>submit</code>: 提交按钮文字</li><li><code>comment</code>: 评论按钮文字</li><li><code>refresh</code>: 刷新按钮文字</li><li><code>more</code>: 加载更多按钮文字</li><li><code>uploading</code>: 上传时显示文字</li><li><code>login</code>: 登录按钮文字</li><li><code>admin</code>: 管理员的标签</li><li><code>sticky</code>: 置顶文字</li><li><code>word</code>: 字</li><li><code>anonymous</code>: 匿名用户默认名称</li><li><code>optional</code>: 标明可选项的文字</li><li><code>gifSearchPlaceholder</code>: 表情包搜索占位文字</li><li><code>oldest</code>: 最早的评论</li><li><code>latest</code>: 最新的评论</li><li><code>hottest</code>: 最热的评论</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>此分类内的文字会显示在页面上。</p></div></li><li><p>提示信息相关:</p><ul><li><code>nickError</code>: 昵称不满足条件的错误信息</li><li><code>mailError</code>: 邮箱不满足条件的错误信息</li><li><code>wordHint</code>: 评论字数的错误提示，其中 <code>$0</code> <code>$1</code> <code>$2</code> 会被自动替换为字数允许下限、字数允许上限、当前字数。</li></ul></li><li><p>评论时间相关:</p><ul><li><code>seconds</code>: 秒前</li><li><code>minutes</code>: 分钟前</li><li><code>hours</code>: 小时前</li><li><code>days</code>: 天前</li><li><code>now</code>: 刚刚</li></ul></li><li><p>管理相关:</p><ul><li><code>approved</code>: 审核通过</li><li><code>waiting</code>: 等待审核</li><li><code>spam</code>: 垃圾评论</li><li><code>unsticky</code>: 取消置顶</li></ul></li><li><p>无障碍相关:</p><ul><li><code>like</code>: 喜欢文字</li><li><code>cancelLike</code>: 取消喜欢文字</li><li><code>reply</code>: 回复按钮的标签文字</li><li><code>cancelReply</code>: 取消回复按钮的标签文字</li><li><code>preview</code>: 预览按钮的标签文字</li><li><code>emoji</code>: 表情按钮的标签文字</li><li><code>gif</code>: 表情包按钮的标签文字</li><li><code>uploadImage</code>: 上传图片按钮的标签文字</li><li><code>profile</code>: 档案页标签文字</li><li><code>logout</code>: 退出登录按钮的标签文字</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>上述文字只用于无障碍服务增强，不会显示在页面中。</p></div></li></ul><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 中文默认</span>
<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">nick</span><span class="token operator">:</span> <span class="token string">&#39;昵称&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nickError</span><span class="token operator">:</span> <span class="token string">&#39;昵称不能少于3个字符&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mail</span><span class="token operator">:</span> <span class="token string">&#39;邮箱&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mailError</span><span class="token operator">:</span> <span class="token string">&#39;请填写正确的邮件地址&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;网址&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optional</span><span class="token operator">:</span> <span class="token string">&#39;可选&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;欢迎评论&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sofa</span><span class="token operator">:</span> <span class="token string">&#39;来发评论吧~&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">submit</span><span class="token operator">:</span> <span class="token string">&#39;提交&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">like</span><span class="token operator">:</span> <span class="token string">&#39;喜欢&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cancelLike</span><span class="token operator">:</span> <span class="token string">&#39;取消喜欢&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reply</span><span class="token operator">:</span> <span class="token string">&#39;回复&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cancelReply</span><span class="token operator">:</span> <span class="token string">&#39;取消回复&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token string">&#39;评论&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">refresh</span><span class="token operator">:</span> <span class="token string">&#39;刷新&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">more</span><span class="token operator">:</span> <span class="token string">&#39;加载更多...&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">preview</span><span class="token operator">:</span> <span class="token string">&#39;预览&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;表情&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">uploadImage</span><span class="token operator">:</span> <span class="token string">&#39;上传图片&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">seconds</span><span class="token operator">:</span> <span class="token string">&#39;秒前&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minutes</span><span class="token operator">:</span> <span class="token string">&#39;分钟前&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hours</span><span class="token operator">:</span> <span class="token string">&#39;小时前&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">days</span><span class="token operator">:</span> <span class="token string">&#39;天前&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">now</span><span class="token operator">:</span> <span class="token string">&#39;刚刚&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">uploading</span><span class="token operator">:</span> <span class="token string">&#39;正在上传&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token string">&#39;登录&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">logout</span><span class="token operator">:</span> <span class="token string">&#39;退出&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">admin</span><span class="token operator">:</span> <span class="token string">&#39;博主&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sticky</span><span class="token operator">:</span> <span class="token string">&#39;置顶&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">&#39;字&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">wordHint</span><span class="token operator">:</span> <span class="token string">&#39;评论字数应在 $0 到 $1 字之间！\\n当前字数：$2&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">anonymous</span><span class="token operator">:</span> <span class="token string">&#39;匿名&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">level0</span><span class="token operator">:</span> <span class="token string">&#39;潜水&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">level1</span><span class="token operator">:</span> <span class="token string">&#39;冒泡&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">level2</span><span class="token operator">:</span> <span class="token string">&#39;吐槽&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">level3</span><span class="token operator">:</span> <span class="token string">&#39;活跃&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">level4</span><span class="token operator">:</span> <span class="token string">&#39;话痨&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">level5</span><span class="token operator">:</span> <span class="token string">&#39;传说&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gif</span><span class="token operator">:</span> <span class="token string">&#39;表情包&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gifSearchPlaceholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索表情包&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">profile</span><span class="token operator">:</span> <span class="token string">&#39;个人资料&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">approved</span><span class="token operator">:</span> <span class="token string">&#39;通过&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">waiting</span><span class="token operator">:</span> <span class="token string">&#39;待审核&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">spam</span><span class="token operator">:</span> <span class="token string">&#39;垃圾&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">unsticky</span><span class="token operator">:</span> <span class="token string">&#39;取消置顶&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">oldest</span><span class="token operator">:</span> <span class="token string">&#39;按倒序&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">latest</span><span class="token operator">:</span> <span class="token string">&#39;按正序&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hottest</span><span class="token operator">:</span> <span class="token string">&#39;按热度&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reactionTitle</span><span class="token operator">:</span> <span class="token string">&#39;你认为这篇文章怎么样？&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_SERVER_URL&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  locale<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function r(d,k){return p(),e("div",null,[i,t(" more "),c])}const v=a(l,[["render",r],["__file","locale.html.vue"]]);export{v as default};
