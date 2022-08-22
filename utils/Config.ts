const SITE_URL="/"

export const Config = {
  site: {
    owner: "A. Blogger",
    title: "My new Next.js + Content Stack blog site",
    domain: "/",
    email: "example@example.com",
    feedDescription: "RSS Feed for example.com",
  },
  pageMeta: {
    openGraph: {
      twitterUser: "contentful",
    },
    home: {
      url: SITE_URL,
      slug: "/",
    },
    blogIndex: {
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
    blogIndexPage: {
      slug: "/blog/page/[page]",
    },
    post: {
      slug: "/blog/[slug]",
    },
    buildRss: {
      url: `${SITE_URL}/buildrss`,
      slug: "/buildrss",
    },
    notFound: {
      url: SITE_URL,
      slug: "/404",
    },
  },
  pagination: {
    pageSize: 2,
    recentPostsSize: 3,
  },
  menuLinks: [
    {
      displayName: "Home",
      path: "/",
    },
    {
      displayName: "Blog",
      path: "/blog",
    },
  ],
};
