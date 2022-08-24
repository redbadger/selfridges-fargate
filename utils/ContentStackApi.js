export default class ContentfulApi {

  static async callPageContent() {
    const fetchUrl =
      `https://graphql.contentstack.com/stacks/${process.env.CONTENTSTACK_API}?environment=${process.env.CONTENTSTACK_ENVIRONMENT}&query=query{all_page_content {
    items {
    title
    description
    }
  }}`

    const fetchOptions = {
      method: "GET",
      headers: {
        access_token: process.env.CONTENTSTACK_DELIVERY_TOKEN
      }
    };

    try {
      const result = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      );
      return result.data
    } catch (error) {
      throw new Error("Could not fetch data from Content Stack!");
    }
  }


  static async callBlogPost() {
    const fetchUrl =
      `https://graphql.contentstack.com/stacks/${process.env.CONTENTSTACK_API}?environment=${process.env.CONTENTSTACK_ENVIRONMENT}&query=query{all_blog_post {
items {
    title
    slug
    date
    excerpt
    body
}
}}`

    const fetchOptions = {
      method: "GET",
      headers: {
        access_token: process.env.CONTENTSTACK_DELIVERY_TOKEN
      }
    };

    try {
      const result = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      );
      return result.data
    } catch (error) {
      throw new Error("Could not fetch data from Content Stack!");
    }
  }
}
