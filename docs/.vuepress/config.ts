import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
const packageJson = require("../../package.json")

export default defineUserConfig({
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
  // 站点配置
  title: packageJson.name,
  description: packageJson.description,
  base:'/typescript-sdk-starter/docs/',
  // 主题和它的配置
  theme: defaultTheme({
    navbar:[
      {
        text: "首页",
        link: "/",
      },
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "API",
        link: "/api/",
      },
      {
        text: "GitHub",
        link: "https://github.com/Yakima-Teng/typescript-sdk-starter",
      },
    ],
  }),
})
