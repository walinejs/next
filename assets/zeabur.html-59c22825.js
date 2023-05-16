import{_ as r,a as i,b as n,c as s,d as c,e as d,f as h,g as l,h as b,i as p}from"./zeabur-11-b5a4990c.js";import{_ as m}from"./plugin-vue_export-helper-c27b6911.js";import{r as u,o as f,c as g,b as t,e,f as o,a as _,d as k}from"./app-c3c0a971.js";const v={},w={href:"https://zeabur.com",target:"_blank",rel:"noopener noreferrer"},y=t("h2",{id:"how-to-deploy",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#how-to-deploy","aria-hidden":"true"},"#"),e(" How to deploy")],-1),z={href:"https://github.com/walinejs/zeabur-starter/fork",target:"_blank",rel:"noopener noreferrer"},x=k('<figure><img src="'+r+'" alt="zeabur1" tabindex="0"><figcaption>zeabur1</figcaption></figure><p>https://dash.zeabur.com Log in to the Zeabur console. If there is no project, you need to set a name for the new project first.</p><figure><img src="'+i+'" alt="zeabur2" tabindex="0"><figcaption>zeabur2</figcaption></figure><p>After entering, click <kbd>Add New Service</kbd> to create a service, select <kbd>Deploy Other Service</kbd> - <kbd>Deploy MongoDB</kbd> to create a database service first.</p><p>Give our MongoDB database service a name, click the <kbd>Deploy</kbd> button, and our database service is deployed.</p><table><thead><tr><th><img src="'+n+'" alt="zeabur2"></th><th><img src="'+s+'" alt="zeabur4"></th></tr></thead></table><p>Next, we continue to click <kbd>Add New Service</kbd> to create the Waline service, this time we choose to click <kbd>Deploy Your Source Code</kbd>. In the following GitHub project list, find the project that we forked at the beginning, and click the corresponding <kbd>Import</kbd> button.</p><p>Give our Waline service a name, click the <kbd>Deploy</kbd> button, and our Waline service is deployed.</p><table><thead><tr><th><img src="'+c+'" alt="zeabur6"></th><th><img src="'+d+'" alt="zeabur7"></th></tr></thead></table><p>Don&#39;t rush to close the Waline service panel. After the service is deployed, we need to add an access domain name to the service. Click the <kbd>Generate Domain</kbd> button under the <kbd>Domains</kbd> tab, enter the domain name prefix you want and click the <kbd>Save</kbd> button to add it to our service Visit the domain name.</p><table><thead><tr><th><img src="'+h+'" alt="zeabur8"></th><th><img src="'+l+'" alt="zeabur9"></th></tr></thead></table><p>Everything is ready, and the next step is to witness the miracle. Open the access domain name we just set up, test to post comments, everything is successful~ Next, configure this domain name in the client and you can comment happily!</p><figure><img src="'+b+'" alt="zeabur2" tabindex="0"><figcaption>zeabur2</figcaption></figure><h2 id="how-to-update" tabindex="-1"><a class="header-anchor" href="#how-to-update" aria-hidden="true">#</a> How to update</h2><p>Go to the GitHub repository and modify the <code>@waline/vercel</code> version number in the package.json file to the latest version.</p><h2 id="how-to-modify-environment-variables" tabindex="-1"><a class="header-anchor" href="#how-to-modify-environment-variables" aria-hidden="true">#</a> How to modify environment variables</h2><p>You can enter the environment variable management page through <kbd>Variables</kbd> Tab, and it will be automatically redeployed after modification.</p><figure><img src="'+p+'" alt="zeabur11" tabindex="0"><figcaption>zeabur11</figcaption></figure>',18);function D(N,j){const a=u("ExternalLinkIcon");return f(),g("div",null,[t("p",null,[t("a",w,[e("Zeabur"),o(a)]),e(" is a platform that helps developers deploy their own services with one click. The whole is similar to Railway, but it has more functions than it, no need to bind a credit card, and the free limit is higher than it.")]),_(" more "),y,t("p",null,[e("Click the "),t("a",z,[e("Fork"),o(a)]),e(" button to create a Zeabur starter scaffold.")]),x])}const B=m(v,[["render",D],["__file","zeabur.html.vue"]]);export{B as default};
