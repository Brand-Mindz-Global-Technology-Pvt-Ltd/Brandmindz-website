import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import './BlogForm.css';

const BASE_ENV = import.meta.env.VITE_API_BASE_URL || (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1' ? 'https://api.brandmindz.com' : 'http://localhost:3007');
const API_BASE_URL = BASE_ENV.endsWith('/blog') ? BASE_ENV : `${BASE_ENV}/blog`;
const FIELD_LIMITS = {
  title: 200,
  slug: 200,
  short_description: 500,
  meta_title: 60,
  meta_description: 160,
  tags: 500,
  content: 100000,
};
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const FieldLabel = ({ children, name, value }) => (
  <div className="form-label-row">
    <label className="form-label" htmlFor={name}>{children}</label>
    <span className="character-count">{value.length}/{FIELD_LIMITS[name]}</span>
  </div>
);

const BlogForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    title: '',
    short_description: '',
    slug: '',
    meta_title: '',
    meta_description: '',
    content: '',
    category: '',
    tags: '',
    image: '',
    views: 0,
    author_id: 1,
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      fetchBlogDetails();
    }
  }, [id]);

  const fetchBlogDetails = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/getBlogById`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blog_id: id })
      });
      const result = await response.json();
      if (result.msg === 'Success' && result.data.length > 0) {
        const blog = result.data[0];
        setFormData({
          title: blog.title || '',
          short_description: blog.short_description || '',
          slug: blog.slug || '',
          meta_title: blog.meta_title || '',
          meta_description: blog.meta_description || '',
          content: blog.content || '',
          category: blog.category || '',
          tags: blog.tags || '',
          image: blog.image || '',
          views: blog.views || 0,
          author_id: blog.author_id || 1,
        });
        // Show existing image as preview
        if (blog.image) {
          setImagePreview(`${BASE_ENV}/storage/uploads/blog/${blog.image}`);
        }
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_IMAGE_SIZE) {
        e.target.value = '';
        alert('Featured image must be 5 MB or smaller.');
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;

    const endpoint = isEditMode ? '/editBlogs' : '/insertBlog';
    setSaving(true);

    try {
      let imageName = formData.image;

      // If a new image file was selected, upload it first
      if (imageFile) {
        const uploadData = new FormData();
        uploadData.append('image', imageFile);
        const uploadRes = await fetch(`${API_BASE_URL}/uploadBlogImage`, {
          method: 'POST',
          body: uploadData,
        });
        const uploadResult = await uploadRes.json();
        if (uploadResult.msg === 'Success') {
          imageName = uploadResult.fileName;
        } else {
          alert(uploadResult.msg || 'Image upload failed. Please try again.');
          return;
        }
      }

      const payload = { ...formData, image: imageName };
      if (isEditMode) payload.blog_id = id;

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.msg === 'Success') {
        alert(`Blog successfully ${isEditMode ? 'updated' : 'created'}!`);
        navigate('/blogs');
      } else {
        alert(result.msg || 'Failed to save blog');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('An error occurred while saving.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }

  return (
    <div className="blog-form-page">
      <div className="page-header">
        <div className="header-left">
          <button className="icon-btn-small" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>
          <h1 className="page-title" style={{ marginBottom: 0, marginLeft: 16 }}>
            {isEditMode ? 'Edit Blog' : 'Create New Blog'}
          </h1>
        </div>
        <button type="submit" form="blog-form" className="btn btn-primary" disabled={saving}>
          <Save size={18} />
          <span>{saving ? 'Saving...' : isEditMode ? 'Update Blog' : 'Publish Blog'}</span>
        </button>
      </div>

      <div className="card form-card">
        <form id="blog-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <FieldLabel name="title" value={formData.title}>Blog Title</FieldLabel>
            <input 
              id="title"
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input" 
              placeholder="Enter blog title" 
              maxLength={FIELD_LIMITS.title}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label className="form-label" htmlFor="category">Category</label>
              <select id="category" name="category" value={formData.category} onChange={handleChange} className="form-input">
                <option value="">Select Category</option>
                <option value="seo">SEO</option>
                <option value="marketing">Marketing</option>
                <option value="strategy">Strategy</option>
              </select>
            </div>
            <div className="form-group flex-1">
              <FieldLabel name="slug" value={formData.slug}>Slug</FieldLabel>
              <input id="slug" type="text" name="slug" value={formData.slug} onChange={handleChange} maxLength={FIELD_LIMITS.slug} className="form-input" placeholder="blog-url-slug" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <FieldLabel name="short_description" value={formData.short_description}>Short Description</FieldLabel>
              <input id="short_description" type="text" name="short_description" value={formData.short_description} onChange={handleChange} maxLength={FIELD_LIMITS.short_description} className="form-input" placeholder="Short description" />
            </div>
            <div className="form-group flex-1">
              <div className="form-label-row">
                <label className="form-label" htmlFor="featured-image">Featured Image</label>
                <span className="character-count">Max 5 MB</span>
              </div>
              <input 
                id="featured-image"
                type="file" 
                accept="image/*"
                onChange={handleImageChange} 
                className="form-input" 
              />
              {imagePreview && (
                <div style={{ marginTop: '10px' }}>
                  <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover', borderRadius: '6px' }} />
                </div>
              )}
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group flex-1">
              <FieldLabel name="meta_title" value={formData.meta_title}>Meta Title</FieldLabel>
              <input id="meta_title" type="text" name="meta_title" value={formData.meta_title} onChange={handleChange} maxLength={FIELD_LIMITS.meta_title} className="form-input" placeholder="Meta title" />
            </div>
            <div className="form-group flex-1">
              <FieldLabel name="meta_description" value={formData.meta_description}>Meta Description</FieldLabel>
              <input id="meta_description" type="text" name="meta_description" value={formData.meta_description} onChange={handleChange} maxLength={FIELD_LIMITS.meta_description} className="form-input" placeholder="Meta description" />
            </div>
          </div>
          
          <div className="form-group">
            <FieldLabel name="tags" value={formData.tags}>Tags</FieldLabel>
            <input id="tags" type="text" name="tags" value={formData.tags} onChange={handleChange} maxLength={FIELD_LIMITS.tags} className="form-input" placeholder="comma, separated, tags" />
          </div>

          <div className="form-group">
            <FieldLabel name="content" value={formData.content}>Content</FieldLabel>
            <textarea 
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="form-input editor" 
              placeholder="Write your blog content here..."
              maxLength={FIELD_LIMITS.content}
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
