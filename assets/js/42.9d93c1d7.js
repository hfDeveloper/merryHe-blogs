(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{461:function(r,t,e){r.exports=e.p+"assets/img/cache.d7aadf7d.png"},491:function(r,t,e){"use strict";e.r(t);var a=e(2),o=Object(a.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("p",[a("b",[a("font",{attrs:{color:"FireBrick"}},[r._v("HTTP 缓存")])],1),r._v("  有强制缓存和协商缓存， 对于一些一段时间内不会轻易改变的静态资源采取 http 缓存是很有必要的， 可以在一定程度上提升网站的性能和用户体验、减小服务器的压力。不管是强制缓存还是协商缓存，它们都是是缓存，那第一次请求资源的时候本地肯定是没有缓存的，当然也就不会命中强制缓存和协商缓存中的任何一个。在记录这边文章的时候， 看了一下母校的官网搭建上也使用到了 http 缓存。")]),r._v(" "),a("h2",{attrs:{id:"强制缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制缓存"}},[r._v("#")]),r._v(" 强制缓存")]),r._v(" "),a("p",[r._v("浏览器客户端在输入URL敲下回车键后并不会马上向服务器去请求数据，而是先去查看本地（内存中或者硬盘中）有没有该资源的缓存，如果本地没有缓存的话才会向服务器请求该资源，如果本地有缓存的话还需要进一步判断缓存是否过期，如果该资源没有过期则命中强制缓存，直接读取缓存中的数据并返回200状态码；由此可见，请求资源时，缓存存在且没有过期会命中强制缓存，且强制缓存是不会与服务器进行通信的。\n那浏览器是如何判断缓存的资源是否过期的呢？这涉及强制缓存的控制，后台通过设置响应头 "),a("font",{attrs:{color:"FireBrick"}},[r._v("Response Headers")]),r._v(" 的 "),a("font",{attrs:{color:"FireBrick"}},[r._v("Expires")]),r._v(" 、"),a("font",{attrs:{color:"FireBrick"}},[r._v("Cache-Control")]),r._v("、"),a("font",{attrs:{color:"FireBrick"}},[r._v("Pragma")]),r._v("字段来控制"),a("br"),r._v(" "),a("b",[a("font",{attrs:{color:"FireBrick"}},[r._v("Expires :")])],1),r._v("   http1.0中判断缓存是否过期的一个绝对时间，值是一个  Tue, 28 Feb 2022 22:22:22 GMT 这样的具体时间点，是服务器告诉浏览器客户端该资源的失效时间，过了这个时间再访问这个资源时，缓存中的这个资源就已经过期了。 既然是一个具体的时间点，可能存在故意偏移系统的时钟来诱发问题，因此，在HTTP 1.1中使用 Cache-Control的max-age来设置一个相对时间解决这个问题。"),a("br"),r._v(" "),a("b",[a("font",{attrs:{color:"FireBrick"}},[r._v("Cache-Control : ")])],1),r._v(" HTTP1.1的属性，值比较多，主要的有以下"),a("br"),r._v("\n     no-store 表示不允许缓存，即响应的资源不会存储在缓存中，希望始终提供最新信息时，设置这个值很合适。"),a("br"),r._v("\n     no-cache 表示允许缓存，但是再次访问此资源会跳过强制缓存，进入协商缓存与服务器协商此资源有没有更新过。"),a("br"),r._v("\n     max-age 值是一个秒为单位的相对时间，例 max-age=1800,表示这次请求开始后返回给你的这个资源会在30分钟后过期，如果在30分钟后再访问这个资源的话，缓存中的这个资源就已经过期了；但如果在30分钟内再次访问这个资源的话就能命中强制缓存。"),a("br"),r._v("\n     must-revalidate 表示允许浏览器缓存该资源，且资源没有过期可以直接使用缓存资源，过期的话则必须向服务器协商验证资源的内容有没有更新过。"),a("br"),r._v(" "),a("b",[a("font",{attrs:{color:"FireBrick"}},[r._v("Pragma : ")])],1),r._v(" HTTP1.0的属性，多用于向下兼容HTTP1.0协议的客户端，在HTTP1.1协议的客户端也是生效的，但建议只在需要兼容 HTTP1.0 客户端的场合下应用 Pragma 属性,值为 no-cache 效果与Cache-Control的no-cache一致。")],1),r._v(" "),a("p",[r._v("上述三个控制强制缓存的属性是有优先级之别的，都存在时，判断强缓存的优先级为：  "),a("font",{attrs:{color:"FireBrick"}},[r._v("Pragma")]),r._v(" > "),a("font",{attrs:{color:"FireBrick"}},[r._v("Cache-Control")]),r._v(" > "),a("font",{attrs:{color:"FireBrick"}},[r._v("Expires")]),r._v("。"),a("br"),r._v("\n看个栗子，某网站的缓存设置,由优先级可知，Cache-Control 的 max-age 为 604800 秒，表示该资源在此次请求后的七天以后就会过期，在七天内再次访问该资源会命中强制缓存，直接读取缓存中的资源返回给浏览器并返回200状态码，七天之后再次访问该资源则缓存中的该资源过期，需要向服务器协商验证这段时间里资源的内容有没有发生过变化。")],1),r._v(" "),a("blockquote",[a("p",[r._v("Response Headers"),a("br"),r._v("\nCache-control:    max-age=604800"),a("br"),r._v("\nExpires:    Wed, 12 Jul 2023 08:45:24 GMT")])]),r._v(" "),a("h2",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[r._v("#")]),r._v(" 协商缓存")]),r._v(" "),a("p",[r._v("上述讲强制缓存的时候说到请求一次资源时会先查看本地是否有该资源的缓存，有缓存的话还会根据上一次请求该资源时响应头Response Headers返回的一些字段来判断这次请求该资源时，缓存中的该资源有没有过期，或者说有没有命中强制缓存。缓存资源没有过期会命中强制缓存，直接读取缓存资源，缓存资源过期了或者Cache-Control的值中有no-cache就会命中协商缓存，这时浏览器客户端会向服务器发起请求，让服务器协商验证这个过期的缓存资源在这段时间里资源的内容有没有发生过变化。由此可见，命中协商缓存时浏览器是会与服务器进行通信的。 那命中协商缓存时，浏览器客户端和服务器端是怎么协商验证资源的内容有没有变化过的呢？"),a("br"),r._v("\n实际上，对于需要缓存的资源，后台在响应资源的时候还会在响应头Response Headers中返回 "),a("font",{attrs:{color:"FireBrick"}},[r._v("Etag")]),r._v(" 和 "),a("font",{attrs:{color:"FireBrick"}},[r._v("Last-Modified")]),r._v("属性。"),a("br"),r._v(" "),a("b",[a("font",{attrs:{color:"FireBrick"}},[r._v("Etag ： ")])],1),r._v('   Etag 是服务器端生成的对于某个资源的一个最新文件标识，如 Etag: W/"a9d478a3b9551736c22e04b0ed3073c6"'),a("br"),r._v(" "),a("b",[a("font",{attrs:{color:"FireBrick"}},[r._v("Last-Modified ： ")])],1),r._v("   Last-Modified 是服务器端对于某个资源的最后修改时间。"),a("br"),r._v("\n当再次请求该资源时，如果命中协商缓存，浏览器客户端在向服务器发起请求时会在请求头"),a("font",{attrs:{color:"FireBrick"}},[r._v("Request Headers")]),r._v(" 中携带 "),a("b",[a("font",{attrs:{color:"FireBrick"}},[r._v("If-None-Match")])],1),r._v(" 和 "),a("b",[a("font",{attrs:{color:"FireBrick"}},[r._v("If-Modified-Since")])],1),r._v(" 两个属性，而携带的这两个属性的值就是上一次请求时响应头Response Headers中的 Etag 和 Last-Modified。 服务器在接收到请求头中的这两个属性后会和服务器上这个资源对应的Etag和 Last-Modified 进行比较， 如果比较后都一致的服务器端话会告诉浏览器距离上次请求这个资源到现在这段时间里这个资源的内容没有发生过变化，让浏览器客户端直接读取本地缓存中的资源，并且服务器会返回304状态码。如果比较后有一个属性的值和服务器的不一致的话则表明这段时间里资源内容发生过变化，服务器会返回最新的资源给浏览器客户端，并返回200状态码，并更新浏览器端响应到的Etag和Last-Modified值。值。")],1),r._v(" "),a("p",[r._v("其实在HTTP1.0 协议中命中协商缓存时，请求头只携带 If-Modified-Since 到服务器端进行协商验证，但是最后修改时间Last-Modified是有缺陷。")]),r._v(" "),a("ul",[a("li",[r._v("缺陷一：Last-Modified 的时间最小只精确到秒，这就会导致服务器端在很短的时间内更改资源的话，资源的最后修改时间Last-Modified是不会变化的，显然是不对的；")]),r._v(" "),a("li",[r._v("缺陷二： 如果一个资源周期性的发生变化回到原来的某个状态，相较于之前资源的内容根本没有变化，但是最后修改时间Last-Modified变了，这会导致协商验证的时候服务器端重新返回资源。"),a("br"),r._v("\n基于上面Last-Modified的缺陷， HTTP1.1协议中引入了Etag来解决这个问题，Etag是服务器端生成的对于一个资源的最新标识，它可以更准确的描述一个资源的内容有没有发生过变化。")])]),r._v(" "),a("p",[r._v("看个栗子，第一次请求响应头中返回的的Etag、Last-Modified以及第二次请求请求头携带的If-None-Match、If-Modified-Since( 第二次请求某个资源命中协商缓存且协商后使用本地缓存时，请求头和响应头一次性返回的也同下 )")]),r._v(" "),a("blockquote",[a("p",[r._v("Response Headers"),a("br"),r._v('\nEtag:  "29EF493654D65862D3A1EDC854D60B83"'),a("br"),r._v("\nLast-Modified : Sat, 25 Mar 2023 08:14:13 GMT")])]),r._v(" "),a("blockquote",[a("p",[r._v("Request Headers"),a("br"),r._v('\nIf-None-Match: "29EF493654D65862D3A1EDC854D60B83"'),a("br"),r._v("\nIf-Modified-Since: Sat, 25 Mar 2023 08:14:13 GMT")])]),r._v(" "),a("h2",{attrs:{id:"流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[r._v("#")]),r._v(" 流程")]),r._v(" "),a("img",{attrs:{src:e(461)}}),r._v("  \n强制缓存是不会和服务器通信的， 而协商缓存是需要向服务器发起请求的； 有些时候， 返回状态码的同时还会附带描述读取的缓存来自哪里。 如 from disk cache 表示读取的缓存来自磁盘；from memory cache 表示读取的缓存资源来自内存。 其实 HTTP 缓存的内容远不止上述的这些（比如：1.Cache-Control 的 private、public 等其他的细节   2.页面按下 F5会跳过强制缓存， 但还是会检查协商缓存  3.Ctrl + F5 会直接跳过强制缓存和协商缓存，重新向服务器发起一个请求拉去最新的资源 4. 本地缓存没过期之前，服务器端对应资源有过变动的解决办法等等一系列问题）， 仅讲述了比较重要的部分和笔者比较熟悉的部分。\n")])}),[],!1,null,null,null);t.default=o.exports}}]);