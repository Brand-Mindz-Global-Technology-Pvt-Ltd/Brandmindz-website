import BlogForm from "../../../BlogForm";
export default function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <BlogForm params={params} />;
}
