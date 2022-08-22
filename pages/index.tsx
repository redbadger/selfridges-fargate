// import ContentStackApi from "../utils/ContentStackApi";
// import { Config } from "../utils/Config";
import MainLayout from "../layouts/main";

export default function Home(props) {
  // const { pageContent, recentPosts, paginatedBlogPosts } = props;
  // console.log(pageContent, "config");
  // console.log(Config.pageMeta.home.slug);
  // console.log(paginatedBlogPosts);
  // const pageTitle = pageContent ? pageContent.title : "Home";

  // const pageDescription = pageContent
  //   ? pageContent.description
  //   : "Welcome to the Next.js Contentful blog starter";

  return (
    <>
      <MainLayout>
        {/* <ContentWrapper>
          {pageContent ? (
            pageContent.body && (
              <>
                <PageContentWrapper>{pageTitle}</PageContentWrapper>
                <PageContentWrapper> {pageDescription}</PageContentWrapper>
              </>
            )
          ) : (
            <PageContentWrapper>No page content found</PageContentWrapper>
          )}
          <RecentPostList posts={paginatedBlogPosts.posts} />
        </ContentWrapper> */}
      </MainLayout>
    </>
  );
}

// export async function getStaticProps() {

//   return {
//     props: {

//     },
// };
// }
