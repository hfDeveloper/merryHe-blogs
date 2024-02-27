module.exports = [
    { text: '首页', link: "/" },
    {text:"博客",
        items:[
          {text:"前端",link:"/categories/前端/"},
          {text:"读书笔记",link:"/categories/读书笔记/"},
          {text:"问题记录",link:"/categories/问题记录/"}
        ]
    },
    {
        text:'Other Articles',
        items: [
            { text: "CSDN",icon:"reco-csdn", link: "https://blog.csdn.net/User_Name9999?type=blog" },
            { text: "Github",icon:"reco-github", link: "https://github.com/hfDeveloper?tab=repositories" },
            { text: "NPM",icon:"reco-npm", link: "https://www.npmjs.com/package/vue-signature-write" }
        ]
    },
    {text:"每日一文",link:"https://meiriyiwen.com/random"}
]