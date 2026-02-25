import { useRouter } from "next/router";

const BlogSlugPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  return (
    <div>
      <h1>Blog Slug Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default BlogSlugPage;