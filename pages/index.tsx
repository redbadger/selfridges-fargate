import ContentStackApi from "../utils/ContentStackApi";
import MainLayout from "../layouts/main";
import ContentWrapper from "../components/ContentWrapper";
import PageContentWrapper from "../components/PageContentWrapper";
import RecentPostList from "../components/RecentPostList";

export default function Home(props) {

 const { pageContent } = props;
 console.log(pageContent, "config");

const pageTitle = pageContent ? pageContent.title : "Home";

  const pageDescription = pageContent
    ? pageContent.description
    : "Welcome to the Next.js Contentful blog starter";

  return (
    <>
      <MainLayout>
        <ContentWrapper>
          {pageContent ? (
            pageContent.body && (
              <>
                <PageContentWrapper>{pageTitle}</PageContentWrapper>
                {/* <PageContentWrapper> {pageDescription}</PageContentWrapper> */}
              </>
            )
          ) : (
            <PageContentWrapper>No page content found</PageContentWrapper>
          )}
          <RecentPostList posts={pageContent.data.all_blog_post.items} />
        </ContentWrapper>
      </MainLayout>
    </>
  );
}

export async function getStaticProps() {

  let pageContent = await ContentStackApi.callContentStack()
  console.log(pageContent, "pageContent")

  // let pageContent  = await Stack.getEntry('blog_post', "en-us");
  // console.log(pageContent)

  return {
    props: {
      pageContent

    },
};
}
