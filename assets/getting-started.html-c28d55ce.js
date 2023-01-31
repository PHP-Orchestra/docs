import{_ as d,M as l,p as t,q as c,R as e,N as i,V as a,t as n,a1 as r}from"./framework-96b046e1.js";const u={},v=e("h1",{id:"getting-started-with-php-orchestra",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-with-php-orchestra","aria-hidden":"true"},"#"),n(" Getting started with PHP Orchestra")],-1),p={class:"table-of-contents"},m=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),n(" Prerequisites")],-1),h=e("ul",null,[e("li",null,[e("code",null,"PHP >= 8.1")]),e("li",null,"Composer")],-1),b=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),n(" Installation")],-1),g=e("code",null,"orchestra",-1),q={href:"https://github.com/PHP-Orchestra/orchestra/raw/main/bin/orchestra.phar",target:"_blank",rel:"noopener noreferrer"},_=e("img",{src:"https://img.shields.io/badge/Orchestra-latest-brightgreen",alt:"Download Orchestra"},null,-1),f=r(`<div class="language-SH line-numbers-mode" data-ext="SH"><pre class="language-SH"><code>curl -L https://github.com/PHP-Orchestra/orchestra/raw/main/bin/orchestra.phar -o orchestra.phar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In case you want to use it anywhere, just move it into your <code>PATH</code>:</p><div class="language-SH line-numbers-mode" data-ext="SH"><pre class="language-SH"><code>sudo mv orchestra.phar /usr/local/bin/orchestra
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="creating-your-first-solution" tabindex="-1"><a class="header-anchor" href="#creating-your-first-solution" aria-hidden="true">#</a> Creating your first <code>solution</code></h2><p>Once you have <code>orchestra</code> installed and working, than it&#39;s time to create your first <code>solution</code>.</p><h3 id="creating-a-solution-from-scratch" tabindex="-1"><a class="header-anchor" href="#creating-a-solution-from-scratch" aria-hidden="true">#</a> Creating a <code>solution</code> from scratch</h3><p>For full flexibility, you can create your project structure and then make <code>orchestra</code> to <code>initialize</code> a new solution. Let&#39;s consider the following example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tree
.
├── businessLogic
│   └── src
├── entities
│   ├── src
└── webApp
    └── src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Where:</p><ul><li><strong>entities</strong> to contain the domain entities of your application</li><li><strong>businessLogic</strong> to contain the logic that makes your application to produce the desired outcomes, only depending on the <strong>entities</strong> layer</li><li><strong>webApp</strong> to contain the <code>Request/Response</code> layer, for example, your <code>PHP</code> framework of choice.</li></ul>`,10),x={href:"https://getcomposer.org/doc/00-intro.md",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"composer.json",-1),S=e("code",null,"orchestra",-1),j=e("code",null,"composer init",-1),w=r(`<div class="language-SH line-numbers-mode" data-ext="SH"><pre class="language-SH"><code>cat entities/composer.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
    &quot;name&quot;: &quot;orchestra-example/entities&quot;,
    &quot;description&quot;: &quot;The Entities layer of my application&quot;,
    &quot;type&quot;: &quot;library&quot;,
    &quot;license&quot;: &quot;MIT&quot;,
    &quot;autoload&quot;: {
        &quot;psr-4&quot;: {
            &quot;OrchestraExample\\\\Entities\\\\&quot;: &quot;src/&quot;
        }
    },
    &quot;require&quot;: {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After all 3 <code>composer.json</code> files are created, your project should look like:</p><div class="language-SH line-numbers-mode" data-ext="SH"><pre class="language-SH"><code>.
├── businessLogic
│   ├── composer.json
│   └── src
├── entities
│   ├── composer.json
│   └── src
└── webApp
    ├── composer.json
    └── src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="creating-project-s-solution-file" tabindex="-1"><a class="header-anchor" href="#creating-project-s-solution-file" aria-hidden="true">#</a> Creating project&#39;s solution file</h4><p>At your applications root folder run:</p><div class="language-SH line-numbers-mode" data-ext="SH"><pre class="language-SH"><code>orchestra solution:initialize --project-scan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>. This command will create the <code>solution</code> file (<code>orchestra.json</code>) and scan for existent projects to be part of it.</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
    &quot;name&quot;: &quot;Orchestra Solution&quot;,
    &quot;version&quot;: &quot;0.1&quot;,
    &quot;projects&quot;: [
        {
            &quot;name&quot;: &quot;orchestra-example\\/business-logic&quot;,
            &quot;path&quot;: &quot;.\\/businessLogic&quot;
        },
        {
            &quot;name&quot;: &quot;orchestra-example\\/entities&quot;,
            &quot;path&quot;: &quot;.\\/entities&quot;
        },
        {
            &quot;name&quot;: &quot;orchestra-example\\/web-app&quot;,
            &quot;path&quot;: &quot;.\\/webApp&quot;
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="installing-composer-dependencies" tabindex="-1"><a class="header-anchor" href="#installing-composer-dependencies" aria-hidden="true">#</a> Installing composer dependencies</h4><p>Now your application can be managed by <code>orchestra</code>. To install Composer&#39;s dependencies, just run:</p><div class="language-SH line-numbers-mode" data-ext="SH"><pre class="language-SH"><code>orchestra solution:install-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And now each project has it&#39;s composer <code>vendor</code> folder with the <code>autoloader</code> ready to provide it&#39;s funcionality</p><div class="language-SH line-numbers-mode" data-ext="SH"><pre class="language-SH"><code>.
├── businessLogic
│   ├── composer.json
│   ├── composer.lock
│   ├── src
│   └── vendor
│       ├── autoload.php
│       └── composer
│           ├── autoload_classmap.php
│           ├── autoload_namespaces.php
│           ├── autoload_psr4.php
│           ├── autoload_real.php
│           ├── autoload_static.php
│           ├── ClassLoader.php
│           ├── installed.json
│           ├── installed.php
│           ├── InstalledVersions.php
│           └── LICENSE
├── entities
│   ├── composer.json
│   ├── composer.lock
│   ├── src
│   └── vendor
│       ├── autoload.php
│       └── composer
│           ├── autoload_classmap.php
│           ├── autoload_namespaces.php
│           ├── autoload_psr4.php
│           ├── autoload_real.php
│           ├── autoload_static.php
│           ├── ClassLoader.php
│           ├── installed.json
│           ├── installed.php
│           ├── InstalledVersions.php
│           └── LICENSE
├── orchestra.json
└── webApp
    ├── composer.json
    ├── composer.lock
    ├── src
    └── vendor
        ├── autoload.php
        └── composer
            ├── autoload_classmap.php
            ├── autoload_namespaces.php
            ├── autoload_psr4.php
            ├── autoload_real.php
            ├── autoload_static.php
            ├── ClassLoader.php
            ├── installed.json
            ├── installed.php
            ├── InstalledVersions.php
            └── LICENSE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function H(k,C){const s=l("router-link"),o=l("ExternalLinkIcon");return t(),c("div",null,[v,e("nav",p,[e("ul",null,[e("li",null,[i(s,{to:"#prerequisites"},{default:a(()=>[n("Prerequisites")]),_:1})]),e("li",null,[i(s,{to:"#installation"},{default:a(()=>[n("Installation")]),_:1})]),e("li",null,[i(s,{to:"#creating-your-first-solution"},{default:a(()=>[n("Creating your first solution")]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#creating-a-solution-from-scratch"},{default:a(()=>[n("Creating a solution from scratch")]),_:1})])])])])]),m,h,b,e("p",null,[n("The best way to get "),g,n(" is to download it directly from the repo: "),e("a",q,[_,i(o)])]),f,e("p",null,[n("Keeping in mind the basic concept of "),e("a",x,[n("Composer - introduction"),i(o)]),n(", that your project depends on a number of libraries, and those libraries can depend on another libraries, each of those folders (layers) will contain their own "),y,n(" file. This is a mandatory step for "),S,n(" to coordinate each project inside your application and to support it's orchestration. So, the next step is to run "),j,n(" on each of the project layers.")]),w])}const N=d(u,[["render",H],["__file","getting-started.html.vue"]]);export{N as default};
