import { Plus, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './BlogList.css';

const BASE_ENV = import.meta.env.VITE_API_BASE_URL || (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1' ? 'https://api.brandmindz.com' : 'http://localhost:3007');
const API_BASE_URL = BASE_ENV.endsWith('/blog') ? BASE_ENV : `${BASE_ENV}/blog`;

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/getBlog`);
      const result = await response.json();
      if (result.msg === 'Success') {
        setBlogs(result.data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (blog_id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      const response = await fetch(`${API_BASE_URL}/deleteBlog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blog_id })
      });
      const result = await response.json();
      if (result.msg === 'Success') {
        fetchBlogs();
      } else {
        alert('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="blog-list">
      <div className="page-header">
        <h1 className="page-title">Blogs</h1>
        <Link to="/blogs/new" className="btn btn-primary">
          <Plus size={18} />
          <span>Add New Blog</span>
        </Link>
      </div>

      <div className="card">
        <table className="data-table">
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
              <tr><td colSpan="5" style={{textAlign: 'center'}}>Loading...</td></tr>
            ) : blogs.length === 0 ? (
              <tr><td colSpan="5" style={{textAlign: 'center'}}>No blogs found</td></tr>
            ) : (
              blogs.map(blog => (
                <tr key={blog.blog_id}>
                  <td><div className="blog-title">{blog.title}</div></td>
                  <td>{blog.category}</td>
                  <td><span className="badge badge-success">Published</span></td>
                  <td>{blog.views || 0}</td>
                  <td>
                    <div className="action-btns">
                      <Link to={`/blogs/edit/${blog.blog_id}`} className="icon-btn-small" title="Edit">
                        <Edit2 size={16} />
                      </Link>
                      <button type="button" className="icon-btn-small danger" title="Delete" onClick={() => handleDelete(blog.blog_id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
