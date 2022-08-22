import RecentPostListStyles from "../../styles/RecentPostList.module.css";
import ContentListStyles from "../../styles/ContentList.module.css";


export default function RecentPostList(props) {
  const { posts } = props;

  return (
    <>
      <h2 className={RecentPostListStyles.recentPostList__header}>
        Recent articles
      </h2>
      <ol className={ContentListStyles.contentList}>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <article className={ContentListStyles.contentList__post}>
              <a className={ContentListStyles.contentList__titleLink}>
                <h2 className={ContentListStyles.contentList__title}>
                  {post.title}
                </h2>
                <p>
                  {post.excerpt}
                </p>
                <p>
                  {post.body.json.content[0].content[0].value}
                </p>
              </a>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}
