export default class ContentfulApi {
  
  static async callContentStack() {
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
        const data = await fetch(fetchUrl, fetchOptions).then((response) => 
          response.json(),
        );
        console.log(data, "data")
        return data;
      } catch (error) {
        throw new Error("Could not fetch data from Content Stack!");
      }
    }
}
