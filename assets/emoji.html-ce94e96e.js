import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c as i,a as c,b as e,e as n,f as a,d as s}from"./app-c3c0a971.js";const l={},u=e("p",null,"This cookbook will show you how to create and use your own Emoji presets.",-1),d=s(`<h2 id="create-your-own-presets" tabindex="-1"><a class="header-anchor" href="#create-your-own-presets" aria-hidden="true">#</a> Create your own presets</h2><p>First of all, you need to prepare some emoji images. Then, please follow the steps to create your preset.</p><h3 id="name-the-emoji-and-upload-it" tabindex="-1"><a class="header-anchor" href="#name-the-emoji-and-upload-it" aria-hidden="true">#</a> Name the emoji and upload it</h3><p>For the sake of simplicity, Waline will directly use the name of the emoji image as the key of the emoji. This means that if you import two different presets, and they both contain a laugh.png image, both emotes will correspond to the same emoji <code>:laugh:</code>.</p><p>Therefore, the best practice is that each emoji preset creator should add a preset-name-related prefix to all names in emoji files.</p><p>After naming them appropriately, you need to upload them to your server.</p><h3 id="write-preset-information" tabindex="-1"><a class="header-anchor" href="#write-preset-information" aria-hidden="true">#</a> Write preset information</h3><p>We assume that you have placed some emoji images in the \`</p><div class="language-text" data-ext="text"><pre class="language-text"><code>https://example.com/my-emoji/
├─ my_laugh.png
├─ my_cute.png
├─ my_rage.png
├─ my_sob.png
└─ info.json
</code></pre></div><p>At this point, you&#39;ll also need to create an <code>info.json</code> file for this folder to let Waline know what emoji the Emoji presets contain.</p><p>First, let&#39;s set a name for the Emoji preset, such as <code>My Emoji</code>, because you have set the <code>my_</code> prefix for the image, and the files are in <code>png</code> format. You need to add them in <code>info.json</code>.</p><p>Your <code>info.json</code> can be:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Emoji&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Then, list all emoji names in <code>items</code> in the order you want, at the same time, remember to ignore the prefix and suffix you have set in <code>prefix</code> and <code>type</code>.</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Emoji&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cute&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>After that, please select a representative emoji as the icon displayed in the tab:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Emoji&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;laugh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>With these, you are done writing <code>info.json</code>, please upload it to the same folder.</p><p>You now successfully created a <code>my-emoji</code> preset with <code>https://example.com/my-emoji/&#39;</code>.</p><h2 id="use-github-mirror-with-tags" tabindex="-1"><a class="header-anchor" href="#use-github-mirror-with-tags" aria-hidden="true">#</a> Use GitHub mirror with tags</h2><p>Usually, you might find it a bit cumbersome to have your own domain name and upload images to the domain name, and the link may expire over time, so an advanced approach is to use a GitHub repository and use tag function in git to mirror GitHub repo providing a emoji preset.</p><p>Similar to the steps above, you need to create a new GitHub repository, name the emoji as above, create <code>info.json</code> using the same steps, and upload them to the repository.</p><p>Then, please create a tag for the repository at this time, we recommend setting it in the format of <code>vx.x.x</code>, such as <code>v1.0.0</code>.</p>`,23),h={href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"https://cdn.jsdelivr.net/gh/user/repo@version/file",-1),g=e("p",null,[n("We assume that you have created the "),e("code",null,"example/emoji"),n(" repository, uploaded the emoji images and "),e("code",null,"info.json"),n(" directly, and have created the "),e("code",null,"v1.0.0"),n(" tag, then you can use "),e("code",null,"https://cdn.jsdelivr.net/gh/example/emoji@v1.0.0/"),n(" as your preset.")],-1),k={class:"hint-container tip"},y=e("p",{class:"hint-container-title"},"Tips",-1),f=e("p",null,"It is necessary to specific a tag with link to prevent the image link referenced by the historical comment from being invalidated by modifying your preset.",-1),q={href:"https://github.com/walinejs/emojis",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"v1.1.0",-1),v=s(`<div class="hint-container warning"><p class="hint-container-title">Note</p><p>Since cdn.jsdelivr.net is polluted in China, you can replace <code>cdn.jsdelivr.net</code> with <code>gcore.jsdelivr.net</code></p></div><h2 id="using-config-objects" tabindex="-1"><a class="header-anchor" href="#using-config-objects" aria-hidden="true">#</a> Using config objects</h2><p>Similar to the previous article, we assume you have the following file structure:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>https://example.com/my-emoji/
├─ my_laugh.png
├─ my_cute.png
├─ my_rage.png
└─ my_sob.png
</code></pre></div><p>In addition to creating an <code>info.json</code> upload and using a link as a preset, you can also use the following objects directly as a preset:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;My Emoji&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">folder</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/my-emoji&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&quot;my_&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;laugh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Here, we additionally add the <code>folder</code> property to tell Waline where the images are stored.</p>`,7);function _(x,w){const t=p("ExternalLinkIcon");return r(),i("div",null,[u,c(" more "),d,e("p",null,[n("After adding tags, you can use the CDN link with the version on "),e("a",h,[n("cdn.jsdelivr.net"),a(t)]),n(" as your preset in the format "),m,n(".")]),g,e("div",k,[y,f,e("p",null,[n("The official emoji preset is achieved by creating the "),e("a",q,[n("walinejs/emojis"),a(t)]),n(" repository and using the CDN link. Currently we are using the "),j,n(" version.")])]),v])}const N=o(l,[["render",_],["__file","emoji.html.vue"]]);export{N as default};