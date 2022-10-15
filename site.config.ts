import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7fecaccb4d1b40f7958ea41b16ec5231',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Gwemin Blog',
  domain: 'gwemin.vercel.app',
  author: 'Gwemin',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: '',
  github: 'gwemin',
  instagram: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:'https://gwemin.vercel.app/page-icon.jpg',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'gwemin/nextjs-notion-blog',
 
  // Cusdis comment widget (optional)
  // cusdis: {
  //   appId: 'd39a1dc4-5580-4ad8-8d75-c6a486475b5a' // your website id
  // },
  
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
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About me',
  //     pageId: 'a32a59aec23c41e08452757e94d96418'
  //   },
    // {
    //   title: 'Contact',
    //   pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    // }
  // ]
});