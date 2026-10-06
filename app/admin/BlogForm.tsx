"use client";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminPage } from "./AdminClient";
import { blogApi, storageUrl, type Blog } from "@/lib/admin-api";
const fields = [
  "title",
  "short_description",
  "slug",
  "category",
  "meta_title",
  "meta_description",
  "tags",
] as const;
const limits: Record<string, number> = {
  title: 200,
  short_description: 500,
  slug: 200,
  meta_title: 60,
  meta_description: 160,
  tags: 500,
  content: 100000,
};
export default function BlogForm({
  params,
}: {
  params?: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [id, setId] = useState("");
  const edit = Boolean(id);
  const [form, setForm] = useState<Blog>({
    blog_id: 0,
    title: "",
    short_description: "",
    slug: "",
    meta_title: "",
    meta_description: "",
    content: "",
    category: "",
    tags: "",
    image: "",
    views: 0,
    author_id: 1,
  });
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (params)
      void params.then(({ id: value }) => {
        setId(value);
        void blogApi.byId(value).then((r) => {
          const b = r.data?.[0];
          if (b) {
            setForm((f) => ({ ...f, ...b }));
            if (b.image) setPreview(storageUrl(b.image));
          }
        });
      });
  }, [params]);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      let image = form.image || "";
      if (file) {
        if (file.size > 5 * 1024 * 1024)
          throw Error("Featured image must be 5 MB or smaller.");
        image = (await blogApi.upload(file)).data?.fileName || image;
      }
      await blogApi.save(
        { ...form, image, ...(edit ? { blog_id: id } : {}) },
        edit,
      );
      router.push("/admin/blogs");
    } catch (e) {
      alert(e instanceof Error ? e.message : "Unable to save blog");
    } finally {
      setBusy(false);
    }
  };
  return (
    <AdminPage>
      <div className="admin-header">
        <h1 className="admin-title">
          {edit ? "Edit Blog" : "Create New Blog"}
        </h1>
      </div>
      <div className="admin-card">
        <form className="admin-form" onSubmit={submit}>
          {fields.map((k) => (
            <label key={k}>
              {k.replaceAll("_", " ")}
              <input
                required={k === "title"}
                maxLength={limits[k]}
                value={String(form[k] || "")}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [k]: e.target.value }))
                }
              />
            </label>
          ))}
          <label>
            Featured image
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setFile(f);
                  setPreview(URL.createObjectURL(f));
                }
              }}
            />
            {preview && (
              <img className="admin-preview" src={preview} alt="Preview" />
            )}
          </label>
          <label>
            Content
            <textarea
              required
              maxLength={limits.content}
              value={form.content || ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, content: e.target.value }))
              }
            />
          </label>
          <button className="admin-btn" disabled={busy}>
            {busy ? "Saving..." : edit ? "Update Blog" : "Publish Blog"}
          </button>
        </form>
      </div>
    </AdminPage>
  );
}
