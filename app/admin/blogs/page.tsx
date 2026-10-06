"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { AdminPage } from "../AdminClient";
import { blogApi, type Blog } from "@/lib/admin-api";
export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const load = async () => {
    try {
      setBlogs((await blogApi.list()).data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    void load();
  }, []);
  const remove = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    await blogApi.remove(id);
    await load();
  };
  return (
    <AdminPage>
      <div className="admin-header">
        <h1 className="admin-title">Blogs</h1>
        <Link className="admin-btn" href="/admin/blogs/new">
          <Plus size={18} /> Add New Blog
        </Link>
      </div>
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Views</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5}>Loading...</td>
              </tr>
            ) : blogs.length === 0 ? (
              <tr>
                <td colSpan={5}>No blogs found</td>
              </tr>
            ) : (
              blogs.map((b) => (
                <tr key={b.blog_id}>
                  <td>{b.title}</td>
                  <td>{b.category}</td>
                  <td>Published</td>
                  <td>{b.views || 0}</td>
                  <td>
                    <Link
                      href={`/admin/blogs/edit/${b.blog_id}`}
                      className="admin-icon-btn"
                    >
                      <Edit2 size={16} />
                    </Link>
                    <button
                      className="admin-icon-btn danger"
                      onClick={() => void remove(b.blog_id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminPage>
  );
}
