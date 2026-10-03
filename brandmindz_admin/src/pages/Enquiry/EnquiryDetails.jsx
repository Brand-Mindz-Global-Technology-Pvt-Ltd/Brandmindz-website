import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Calendar, Save, Edit2 } from 'lucide-react';
import './EnquiryDetails.css';

const BASE_ENV = import.meta.env.VITE_API_BASE_URL || (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1' ? 'https://api.brandmindz.com' : 'http://localhost:3007');
const API_BASE_URL = BASE_ENV.replace(/\/blog$/, '') + '/contact';

const EnquiryDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [enquiry, setEnquiry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchEnquiry();
  }, [id]);

  const fetchEnquiry = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/getEnqByID`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enq_id: id })
      });
      const result = await response.json();
      if (result.msg === 'Success' && result.data.length > 0) {
        setEnquiry(result.data[0]);
        setFormData(result.data[0]);
      }
    } catch (error) {
      console.error('Error fetching enquiry:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/updateEnq`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, enq_id: id })
      });
      const result = await response.json();
      if (result.msg === 'Enquiry updated successfully') {
        alert('Enquiry updated successfully!');
        setEnquiry(formData);
        setIsEditing(false);
      } else {
        alert('Failed to update enquiry');
      }
    } catch (error) {
      console.error('Error updating enquiry:', error);
      alert('An error occurred while updating.');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }

  if (!enquiry) {
    return <div style={{ padding: '20px' }}>Enquiry not found.</div>;
  }

  return (
    <div className="enquiry-details-page">
      <div className="page-header">
        <div className="header-left">
          <button className="icon-btn-small" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>
          <h1 className="page-title" style={{ marginBottom: 0, marginLeft: 16 }}>Enquiry Details</h1>
        </div>
        {!isEditing ? (
          <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
            <Edit2 size={18} />
            <span>Edit</span>
          </button>
        ) : (
          <button className="btn btn-success" onClick={handleSave}>
            <Save size={18} />
            <span>Save</span>
          </button>
        )}
      </div>

      <div className="card details-card">
        <div className="details-header">
          <div className="sender-info">
            {isEditing ? (
              <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className="form-input" placeholder="Name" />
            ) : (
              <h2>{enquiry.name || 'Unknown Name'}</h2>
            )}
          </div>
          <div className="contact-meta">
            <div className="meta-item">
              <Mail size={16} />
              {isEditing ? (
                <input type="email" name="email" value={formData.email || ''} onChange={handleChange} className="form-input" placeholder="Email" />
              ) : (
                <span>{enquiry.email || 'No email provided'}</span>
              )}
            </div>
            <div className="meta-item">
              <Phone size={16} />
              {isEditing ? (
                <input type="text" name="phone" value={formData.phone || ''} onChange={handleChange} className="form-input" placeholder="Phone" />
              ) : (
                <span>{enquiry.phone || 'No phone provided'}</span>
              )}
            </div>
            <div className="meta-item">
              <Calendar size={16} />
              <span>{formatDate(enquiry.created_at)}</span>
            </div>
          </div>
        </div>

        <div className="details-body" style={{ marginTop: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h3>Company Information</h3>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#666' }}>Company Name</label>
                {isEditing ? (
                  <input type="text" name="company_name" value={formData.company_name || ''} onChange={handleChange} className="form-input" />
                ) : (
                  <div>{enquiry.company_name || '-'}</div>
                )}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#666' }}>Designation</label>
                {isEditing ? (
                  <input type="text" name="designation" value={formData.designation || ''} onChange={handleChange} className="form-input" />
                ) : (
                  <div>{enquiry.designation || '-'}</div>
                )}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#666' }}>Location</label>
                {isEditing ? (
                  <input type="text" name="location" value={formData.location || ''} onChange={handleChange} className="form-input" />
                ) : (
                  <div>{enquiry.location || '-'}</div>
                )}
              </div>
            </div>
            
            <div>
              <h3>Message</h3>
              <div style={{ marginBottom: '10px' }}>
                {isEditing ? (
                  <textarea name="message" value={formData.message || ''} onChange={handleChange} className="form-input" rows="5"></textarea>
                ) : (
                  <div style={{ whiteSpace: 'pre-wrap' }}>{enquiry.message || '-'}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryDetails;
