import{_ as n,X as a,Y as i,$ as o,a2 as s,a3 as r,a0 as e,C as d,a1 as l}from"./framework-4b90706e.js";const c="/next/assets/vercel-update-e26735c2.png",h="/next/assets/cloudbase-update-b3d7aca8.jpg",p={},u=e('<p>Waline has a very clear position since its birth:</p><div class="hint-container info"><p class="hint-container-title">A simple comment system with backend.</p></div><p>All versions released afterwards are modifications made around this position.</p><h2 id="what-is-the-relationship-with-valine" tabindex="-1"><a class="header-anchor" href="#what-is-the-relationship-with-valine" aria-hidden="true">#</a> What is the relationship with Valine?</h2><div class="hint-container info"><p class="hint-container-title">Waline = With backend Valine</p></div><p>Consulting with the open source version of Valine, the comment list in frontend is rewritten with React. The style and structure as well as some internal tools and methods are all from Valine.</p><h2 id="do-i-still-need-to-deploy-valine-admin-on-leancloud" tabindex="-1"><a class="header-anchor" href="#do-i-still-need-to-deploy-valine-admin-on-leancloud" aria-hidden="true">#</a> Do I still need to deploy Valine-Admin on LeanCloud?</h2><p>No. Waline is a three-in-one deployment of data storage, server, and client. The server interface is already equivalent to Valine&#39;s LeanCloud cloud engine. The server already includes comment management and email notifications feature provided by the previous cloud engine. It doesn&#39;t need the additional LeanCloud cloud engine, so it won&#39;t be restricted by the LeanCloud cloud engine&#39;s sleep strategy.</p><h2 id="how-can-i-upgrade" tabindex="-1"><a class="header-anchor" href="#how-can-i-upgrade" aria-hidden="true">#</a> How can I upgrade?</h2><p>Waline is mainly composed of two parts: the frontend and the server.</p><h3 id="frontend" tabindex="-1"><a class="header-anchor" href="#frontend" aria-hidden="true">#</a> Frontend</h3><p>The front end inserts comment lists and comment boxes by including JS scripts in the web page. In most scenarios, the link will use the address of the latest version of the online CDN, and the latest version will be automatically applied, without the need for users to manually update.</p><div class="hint-container note"><p class="hint-container-title">Need manually update in following situations</p><ol><li>The version number is forcibly specified in the CDN address. In this situation, you need to manually modify the version number to be the latest.</li><li>Use NPM to require and pack the module into code. In this situation, you need to modify the version number in the dependency to ensure that the latest version of the dependency can be obtained during installation.</li></ol></div><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> Server</h3><p>The server refers to the backend service corresponding to the <code>serverURL</code> configured in frontend script, and its update will be slightly different depending on different deployment environments. Server updates will be more frequent.</p><h4 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> Vercel</h4><p>Go to the corresponding GitHub repository and modify the version number of <code>@waline/vercel</code> in the package.json file to the latest.</p><figure><img src="'+c+'" alt="vercel" tabindex="0"><figcaption>vercel</figcaption></figure><h4 id="deta" tabindex="-1"><a class="header-anchor" href="#deta" aria-hidden="true">#</a> Deta</h4>',19),m=e('<h4 id="cloudbase" tabindex="-1"><a class="header-anchor" href="#cloudbase" aria-hidden="true">#</a> CloudBase</h4><p>Enter the code editing page, click <kbd>Save and reinstall dependencies</kbd>. If it still doesn’t work, enter <kbd>My Application</kbd> and select <kbd>Deploy</kbd> to redeploy.</p><div class="hint-container danger"><p class="hint-container-title">Warning</p><p>Redeployment will clear the previous files. If there is a configuration in the previous file, it needs to be backed up first.</p></div><figure><img src="'+h+'" alt="cloudBase" tabindex="0"><figcaption>cloudBase</figcaption></figure><h4 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h4><p>Run <code>docker pull lizheming/waline</code> directly to pull the latest image.</p><h2 id="why-posting-comments-are-slow" tabindex="-1"><a class="header-anchor" href="#why-posting-comments-are-slow" aria-hidden="true">#</a> Why posting comments are slow?</h2><p>Due to some technical reasons, spam detection and comment notification are all serial operations when posting comments. The spam detection uses the service provided by Akismet abroad, which may be slow to access. Users can turn off the spam detection function through the <code>AKISMET_KEY=false</code> environment variable. Beside the spam detection service, the email notification in the comment notification may also cause a timeout. You can turn off the comment notification to test whether it is caused by this feature.</p>',8);function f(v,b){const t=d("RouterLink");return a(),i("div",null,[u,o("p",null,[s(t,{to:"/en/guide/deploy/deta.html#how-to-update"},{default:r(()=>[l("Deta - How to update?")]),_:1})]),m])}const y=n(p,[["render",f],["__file","faq.html.vue"]]);export{y as default};
