import{_ as a,c as i,o as n,ag as l}from"./chunks/framework.CyMCuEUM.js";const d=JSON.parse('{"title":"框架与中间件","description":"","frontmatter":{},"headers":[],"relativePath":"guide/framework-and-middleware/index.md","filePath":"guide/framework-and-middleware/index.md"}'),t={name:"guide/framework-and-middleware/index.md"};function e(h,s,r,p,E,k){return n(),i("div",null,[...s[0]||(s[0]=[l(`<h1 id="框架与中间件" tabindex="-1">框架与中间件 <a class="header-anchor" href="#框架与中间件" aria-label="Permalink to &quot;框架与中间件&quot;">​</a></h1><p>框架与中间件是现代Java应用开发的重要基础设施，它们提供了丰富的功能组件和最佳实践，极大地提高了开发效率和系统质量。本模块将介绍Java生态系统中常用的框架与中间件，帮助您选择合适的技术栈构建高质量的应用系统。</p><h2 id="模块知识体系" tabindex="-1">模块知识体系 <a class="header-anchor" href="#模块知识体系" aria-label="Permalink to &quot;模块知识体系&quot;">​</a></h2><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── 🌸 Spring 生态系统</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── Spring Framework</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── IOC/DI</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── AOP</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── 事务管理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── Spring EL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── Spring Boot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── 自动配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── Starter 原理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── 监控 Actuator</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── 外部化配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── Spring Cloud</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── 服务注册发现 (Eureka/Nacos)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── 配置中心 (Config/Nacos)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── 服务网关 (Gateway/Zuul)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── 负载均衡 (Ribbon)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── 服务熔断 (Hystrix/Sentinel)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── 分布式追踪 (Sleuth/Zipkin)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── 消息驱动 (Stream)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── Spring Data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       ├── Spring Data JPA</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       ├── Spring Data Redis</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       └── Spring Data MongoDB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── 💾 数据库技术</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── SQL 数据库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── MySQL (高级特性、优化)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── PostgreSQL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── Oracle</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── NoSQL 数据库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── Redis (集群、持久化)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── MongoDB (分片、复制集)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── Elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── Cassandra</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── ORM 框架</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── MyBatis (原理、插件开发)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── Hibernate (缓存、性能)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── 数据库中间件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       ├── ShardingSphere</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       ├── MyCat</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       └── 数据同步工具</span></span></code></pre></div><h2 id="模块内容概览" tabindex="-1">模块内容概览 <a class="header-anchor" href="#模块内容概览" aria-label="Permalink to &quot;模块内容概览&quot;">​</a></h2><p>本模块按照功能分类，包含以下核心内容：</p><h3 id="数据库" tabindex="-1"><a href="./mysql.html">数据库</a> <a class="header-anchor" href="#数据库" aria-label="Permalink to &quot;[数据库](mysql.md)&quot;">​</a></h3><ul><li><strong>MySQL</strong>：流行的关系型数据库，包括<a href="./mysql.html">基础</a>和<a href="./mysql-cluster.html">集群</a>相关知识</li><li><strong>PostgreSQL</strong>：功能强大的开源关系型数据库</li><li><strong>MongoDB</strong>：面向文档的NoSQL数据库</li><li><strong>H2数据库</strong>：轻量级嵌入式数据库</li><li><strong>SQLite</strong>：轻量级文件数据库</li></ul><h3 id="缓存系统" tabindex="-1"><a href="./redis.html">缓存系统</a> <a class="header-anchor" href="#缓存系统" aria-label="Permalink to &quot;[缓存系统](redis.md)&quot;">​</a></h3><ul><li><strong>Redis</strong>：高性能键值存储，广泛用于缓存、会话存储等场景</li></ul><h3 id="消息队列" tabindex="-1"><a href="./kafka.html">消息队列</a> <a class="header-anchor" href="#消息队列" aria-label="Permalink to &quot;[消息队列](kafka.md)&quot;">​</a></h3><ul><li><strong>Kafka</strong>：高吞吐量的分布式流处理平台</li><li><strong>RabbitMQ</strong>：基于AMQP协议的消息队列</li><li><strong>RocketMQ</strong>：阿里开源的分布式消息中间件</li></ul><h3 id="orm框架" tabindex="-1"><a href="./mybatis.html">ORM框架</a> <a class="header-anchor" href="#orm框架" aria-label="Permalink to &quot;[ORM框架](mybatis.md)&quot;">​</a></h3><ul><li><strong>MyBatis</strong>：支持自定义SQL、存储过程和高级映射的持久层框架</li></ul><h3 id="分布式服务框架" tabindex="-1"><a href="./dubbo.html">分布式服务框架</a> <a class="header-anchor" href="#分布式服务框架" aria-label="Permalink to &quot;[分布式服务框架](dubbo.md)&quot;">​</a></h3><ul><li><strong>Dubbo</strong>：高性能的分布式服务框架</li><li><strong>Spring Cloud</strong>：微服务生态系统</li></ul><h3 id="spring生态" tabindex="-1"><a href="./springboot.html">Spring生态</a> <a class="header-anchor" href="#spring生态" aria-label="Permalink to &quot;[Spring生态](springboot.md)&quot;">​</a></h3><ul><li><strong>Spring Boot</strong>：简化Spring应用开发的框架</li><li><strong>Spring Data</strong>：提供统一的数据访问编程模型</li></ul><h3 id="数据分片中间件" tabindex="-1"><a href="./shardingsphere.html">数据分片中间件</a> <a class="header-anchor" href="#数据分片中间件" aria-label="Permalink to &quot;[数据分片中间件](shardingsphere.md)&quot;">​</a></h3><ul><li><strong>ShardingSphere</strong>：开源分布式数据库中间件生态系统</li><li><strong>MyCat</strong>：开源的分布式数据库中间件</li></ul><h3 id="搜索相关" tabindex="-1"><a href="./elasticsearch.html">搜索相关</a> <a class="header-anchor" href="#搜索相关" aria-label="Permalink to &quot;[搜索相关](elasticsearch.md)&quot;">​</a></h3><ul><li><strong>Elasticsearch</strong>：分布式搜索和分析引擎</li></ul><h3 id="其他工具" tabindex="-1"><a href="./ldap.html">其他工具</a> <a class="header-anchor" href="#其他工具" aria-label="Permalink to &quot;[其他工具](ldap.md)&quot;">​</a></h3><ul><li><strong>LDAP</strong>：轻量目录访问协议实现</li><li><strong>邮件协议</strong>：电子邮件相关协议实现</li><li><strong>Jenkins</strong>：开源的持续集成/持续部署工具</li><li><strong>Navicat Lite</strong>：轻量级数据库管理工具</li><li><strong>XXL-JOB</strong>：轻量级分布式任务调度平台</li></ul><p>通过本模块的学习，您将全面了解Java生态系统中的主流框架与中间件，掌握它们的核心概念和使用方法，为构建高性能、可扩展的Java应用系统提供技术支持。</p>`,25)])])}const g=a(t,[["render",e]]);export{d as __pageData,g as default};
