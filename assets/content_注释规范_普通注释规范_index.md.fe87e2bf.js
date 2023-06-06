import{_ as s,o as a,c as n,V as l}from"./chunks/framework.5329f344.js";const F=JSON.parse('{"title":"普通注释","description":"","frontmatter":{},"headers":[],"relativePath":"content/注释规范/普通注释规范/index.md","filePath":"content/注释规范/普通注释规范/index.md","lastUpdated":1686027111000}'),t={name:"content/注释规范/普通注释规范/index.md"},e=l(`<h1 id="普通注释" tabindex="-1">普通注释 <a class="header-anchor" href="#普通注释" aria-label="Permalink to &quot;普通注释&quot;">​</a></h1><p>普通注释是为了帮助开发者和阅读者更好地理解程序，不会出现在 API 文档中。普通注释的使用需遵循以下规定。</p><h2 id="_1-单行注释" tabindex="-1">1. 单行注释 <a class="header-anchor" href="#_1-单行注释" aria-label="Permalink to &quot;1. 单行注释&quot;">​</a></h2><p>单行注释以“//”开头</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 这是一个单行注释</span></span></code></pre></div><h2 id="_2-多行注释" tabindex="-1">2. 多行注释 <a class="header-anchor" href="#_2-多行注释" aria-label="Permalink to &quot;2. 多行注释&quot;">​</a></h2><p>多行注释以“/**”开头，以“*/”结束。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 这是一个多行注释</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  1. 注释1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *  2. 注释2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div><h2 id="_3-注释说明" tabindex="-1">3. 注释说明 <a class="header-anchor" href="#_3-注释说明" aria-label="Permalink to &quot;3. 注释说明&quot;">​</a></h2><p>注释需要描述代码的功能，需要尽量使用简短的方式来描述代码的用处。 <strong>不要</strong>编写无意义的注释，例如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 初始化变量为0</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 无意义</span></span></code></pre></div><p>如果某段代码有功能未实现，或者有待完善，必须添加“TODO”标记，“TODO”前后应留一个空格，例如</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// TODO 未处理 data 不为 Array 的情况</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">m</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,13),o=[e];function p(c,i,r,y,d,D){return a(),n("div",null,o)}const C=s(t,[["render",p]]);export{F as __pageData,C as default};
