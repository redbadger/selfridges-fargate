import ContentStackApi from "../utils/ContentStackApi";
import MainLayout from "../layouts/main";
import ContentWrapper from "../components/ContentWrapper";
import PageContentWrapper from "../components/PageContentWrapper";
import RecentPostList from "../components/RecentPostList";

export default function Home(props) {
  const { pageContent, blogPost } = props
  const pageTitle = pageContent ? pageContent.all_page_content.items[0].title : "Home";
  const pageDescription = pageContent
    ? pageContent.all_page_content.items[0].description
    : "Welcome to the Next.js Contentful blog starter";

  return (
    <>
      <MainLayout>
        <ContentWrapper>
          {pageContent ?
            <>
              <PageContentWrapper>Title: {pageTitle}</PageContentWrapper>
              <PageContentWrapper>Description: {pageDescription}</PageContentWrapper>
            </>
            : (
              <PageContentWrapper>No page content found</PageContentWrapper>
            )}
          <RecentPostList blogPost={blogPost.all_blog_post} />
        </ContentWrapper>
      </MainLayout>
    </>
  );
}

export async function getStaticProps() {
  let pageContent = await ContentStackApi.callPageContent()

  let blogPost = await ContentStackApi.callBlogPost()

  return {
    props: {
      pageContent,
      blogPost
    },
  };
}
