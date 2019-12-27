module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    // 导航栏 Logo
    // logo: "/assets/img/logo.png",
    // 导航栏链接
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
      {
        text: "GitHub",
        link: "https://github.com/aikaiqiang",
        target: "_self",
        rel: ""
      }
    ],
    // 侧边栏
    sidebar: ["/", "/page-a", ["/page-b", "Explicit link text"]],
    sidebar: "auto",
    lastUpdated: "Last Updated", // string | boolean
    smoothScroll: true
  }
};
