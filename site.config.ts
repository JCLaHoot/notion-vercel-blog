import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'aa524a5b860d4ff7b507369838821bc9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Confused Retriever',
  domain: 'confusedretriever.com',
  author: 'Jonathan Lahue',
  seotitle: 'Confused Retriever - A coding and design blog',

  // open graph metadata (optional)
  description: 'A blog documenting my journey through the world of tech.',

  // social usernames (optional)
  twitter: 'JCLaHoot',
  github: 'JCLaHoot',
  linkedin: 'jonathanlahue',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: '/page-icon.png',
  defaultPageCover: '/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Blog',
      pageId: 'd5f32cf0b3f84497b8167619e43095ec'
    },
    {
      title: 'About',
      pageId: 'd0b48793a7f342ca8a51ddd07c592bb2'
    },
    {
      title: 'Contact',
      pageId: '14627072f5cc4e8ebe22aa0a69238307'
    }
  ]
})
