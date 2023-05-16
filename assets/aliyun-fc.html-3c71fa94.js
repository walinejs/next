import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c,b as e,e as n,f as o,a as d,d as u}from"./app-c3c0a971.js";const _="/next/assets/aliyun-fc-1-597da96b.jpg",h="/next/assets/aliyun-fc-2-88145e4a.jpg",p="/next/assets/aliyun-fc-3-bbeb5837.jpg",f="/next/assets/aliyun-fc-4-b92c239c.jpg",g="/next/assets/aliyun-fc-5-20816640.jpg",m="/next/assets/aliyun-fc-6-e28dc4fd.jpg",s="/next/assets/aliyun-fc-7-ea880d52.jpg",l="/next/assets/aliyun-fc-8-78ad45af.jpg",b={},y={href:"https://fc.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"如何部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何部署","aria-hidden":"true"},"#"),n(" 如何部署")],-1),v={href:"https://github.com/walinejs/aliyun-fc-starter/generate",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[e("img",{src:_,alt:"阿里云函数计算1"}),e("br"),e("img",{src:h,alt:"阿里云函数计算2"})],-1),j=e("li",null,[e("p",null,[n("全局安装 Serverless Devs 开发者工具 "),e("code",null,"npm install -g @serverless-devs/s")]),e("figure",null,[e("img",{src:p,alt:"阿里云函数计算3",tabindex:"0"}),e("figcaption",null,"阿里云函数计算3")])],-1),w={href:"https://ram.console.aliyun.com/manage/ak",target:"_blank",rel:"noopener noreferrer"},S=e("img",{src:f,alt:"阿里云函数计算4"},null,-1),V=e("img",{src:g,alt:"阿里云函数计算5"},null,-1),W=e("li",null,[e("p",null,[n("进入目录后执行 "),e("code",null,"s deploy"),n(" 稍待片刻后完成一次部署，此时控制台中红框展示的地址即为你最终的 serverURL")]),e("figure",null,[e("img",{src:m,alt:"阿里云函数计算6",tabindex:"0"}),e("figcaption",null,"阿里云函数计算6")])],-1),T={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=config",target:"_blank",rel:"noopener noreferrer"},C=e("figure",null,[e("img",{src:s,alt:"阿里云函数计算7",tabindex:"0"}),e("figcaption",null,"阿里云函数计算7")],-1),E={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=code",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"npm install",-1),P=e("kbd",null,"部署",-1),N=e("figure",null,[e("img",{src:l,alt:"阿里云函数计算8",tabindex:"0"}),e("figcaption",null,"阿里云函数计算8")],-1),A=e("p",null,"至此就完成了部署，第四步中返回的地址即为你的部署地址。",-1),q=e("h3",{id:"windows-环境缺少-vc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-环境缺少-vc","aria-hidden":"true"},"#"),n(" Windows 环境缺少 VC++")],-1),B={href:"https://github.com/nodejs/node-gyp#on-windows",target:"_blank",rel:"noopener noreferrer"},O=e("blockquote",null,[e("p",null,[n("值得注意的是，VC++ 环境需要占用大量的存储资源，因此我更建议你使用 "),e("em",null,"Windows Subsystem for Linux"),n(" 或 Linux 云服务器")])],-1),D={href:"https://visualstudio.microsoft.com",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,[n("在安装包中勾选 "),e("em",null,"使用 C++的桌面开发"),n(" ，勾选全部 MSVC 套件，开始安装。")],-1),I=e("li",null,[n("使用 "),e("code",null,"npm config set msvs_version 2022"),n(" 设置版本信息，例如我下载的 Visual Studio Community 2022，即需填写 2022 版本")],-1),R=e("li",null,[n("继续 "),e("code",null,"s deploy"),n(" 的安装过程")],-1),Y=e("h3",{id:"缺少-python",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#缺少-python","aria-hidden":"true"},"#"),n(" 缺少 Python")],-1),G={href:"https://github.com/nodejs/node-gyp#configuring-python-dependency",target:"_blank",rel:"noopener noreferrer"},H=u(`<blockquote><p>Python 作为一个优秀的脚本性语言，是很值得安装的。</p></blockquote><p>node-gyp 支持 3.7/3.8/3.9/3.10 版本的 Python，你可以通过搜索引擎获取大量的帮助，因此在此不申明详细步骤。</p><p>如果你的系统有多个 Python，那你需要使用以下命令指定使用 python 的路径。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> python /path/to/executable/python
</code></pre></div><p>如果 <code>NODE_GYP_FORCE_PYTHON</code> 环境变量被设置为 Python 可执行文件的路径，则将使用它而不是任何其他已配置或内置的 Python 。即使它不是兼容版本，也不会进行搜索。</p><h2 id="如何更新" tabindex="-1"><a class="header-anchor" href="#如何更新" aria-hidden="true">#</a> 如何更新</h2>`,6),M={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=config",target:"_blank",rel:"noopener noreferrer"},U=e("figure",null,[e("img",{src:s,alt:"阿里云函数计算7",tabindex:"0"}),e("figcaption",null,"阿里云函数计算7")],-1),z=e("h2",{id:"如何修改环境变量",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何修改环境变量","aria-hidden":"true"},"#"),n(" 如何修改环境变量")],-1),J={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=code",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"npm install",-1),Q=e("kbd",null,"部署",-1),X=e("figure",null,[e("img",{src:l,alt:"阿里云函数计算8",tabindex:"0"}),e("figcaption",null,"阿里云函数计算8")],-1);function Z($,ee){const t=a("ExternalLinkIcon");return r(),c("div",null,[e("p",null,[e("a",y,[n("阿里云函数计算"),o(t)]),n(" 是阿里云推出的 Serverless 平台。我们可以快速的将 Waline 部署到阿里云函数计算平台上。")]),d(" more "),x,e("ol",null,[e("li",null,[e("p",null,[e("a",v,[n("aliyun-fc-starter"),o(t)]),n(" 访问该地址基于官方模板创建仓库并将其克隆下来")]),k]),j,e("li",null,[e("p",null,[n("访问 "),e("a",w,[n("https://ram.console.aliyun.com/manage/ak"),o(t)]),n(" 获取到你账户的一对密钥，使用 s 命令添加。 "),S,V])]),W,e("li",null,[e("p",null,[n("点击“"),e("a",T,[n("编辑环境变量"),o(t)]),n("”更新我们需要添加的环境变量并点击底部的保存按钮")]),C]),e("li",null,[e("p",null,[n("点击“"),e("a",E,[n("代码编辑"),o(t)]),n("”进入编辑页，在编辑器底部的控制台中输入 "),L,n(" 安装依赖。安装完成之后点击顶部的"),P,n("按钮重新部署")]),N])]),A,q,e("p",null,[n("由于 @serverless-devs/s 依赖于 node-gyp ，根据 "),e("a",B,[n("https://github.com/nodejs/node-gyp#on-windows"),o(t)]),n("，我们需要安装 VC++环境。")]),O,e("ol",null,[e("li",null,[n("前往 "),e("a",D,[n("https://visualstudio.microsoft.com"),o(t)]),n(" 下载 Visual Studio 安装包")]),F,I,R]),Y,e("p",null,[n("由于 @serverless-devs/s 依赖于 node-gyp ，根据 "),e("a",G,[n("https://github.com/nodejs/node-gyp#configuring-python-dependency"),o(t)]),n("，我们也需要安装 Python 环境。")]),H,e("p",null,[n("点击“"),e("a",M,[n("编辑环境变量"),o(t)]),n("”更新我们需要添加的环境变量并点击底部的保存按钮")]),U,z,e("p",null,[n("点击“"),e("a",J,[n("代码编辑"),o(t)]),n("”进入编辑页，在编辑器底部的控制台中输入 "),K,n(" 安装依赖。安装完成之后点击顶部的"),Q,n("按钮重新部署")]),X])}const oe=i(b,[["render",Z],["__file","aliyun-fc.html.vue"]]);export{oe as default};
