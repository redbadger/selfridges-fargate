import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContentfulApi from "../utils/ContentfulApi";
import Config from "../utils/ContentfulApi";
import PageMeta from "../components/PageMeta";
import MainLayout from "../layouts/main";
import ContentWrapper from "../components/ContentWrapper";
import PageContentWrapper from "../components/PageContentWrapper";
// import RichTextPageContent from "../components/RichTextPageContent";
import RecentPostList from "../components/RecentPostList";

export default function Home(props) {
  const { pageContent, recentPosts } = props;

  const pageTitle = pageContent ? pageContent.title : "Home";

  const pageDescription = pageContent
    ? pageContent.description
    : "Welcome to the Next.js Contentful blog starter";

  console.log(props, "props");
  // console.log(Config.pageMeta, "p m")
  return (
    <>
      <MainLayout>
        <ContentWrapper>
          {/* {pageContent && pageContent.body && (
            <PageContentWrapper>
    
            {pageContent.body}
            </PageContentWrapper>
          )} */}

          <RecentPostList posts={recentPosts} />
        </ContentWrapper>
      </MainLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  // const pageContent = await ContentfulApi.getPageContentBySlug(
  //   Config.pageMeta.home.slug,
  //   {
  //     preview: preview,
  //   },
  // );

  const recentPosts = await ContentfulApi.getRecentPostList();

  return {
    props: {
      preview,
      // pageContent: pageContent || null,
      recentPosts,
    },
  };
}
