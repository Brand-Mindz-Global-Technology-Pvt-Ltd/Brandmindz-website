import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import './EnquiryList.css';

const BASE_ENV = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3007';
const API_BASE_URL = BASE_ENV.replace(/\/blog$/, '') + '/contact';

const EnquiryList = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/getEnq`);
      const result = await response.json();
      if (result.msg === 'Success') {
        setEnquiries(result.data);
      }
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const getProgress = (message = '') => {
    const match = message.match(/Form progress: Step (\d) of 3/i);
    return match ? `Step ${match[1]} of 3` : 'Legacy enquiry';
  };

  return (
    <div className="enquiry-list">
      <div className="page-header">
        <h1 className="page-title">Enquiries</h1>
      </div>

      <div className="card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Progress</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="8" style={{textAlign: 'center'}}>Loading...</td></tr>
            ) : enquiries.length === 0 ? (
              <tr><td colSpan="8" style={{textAlign: 'center'}}>No enquiries found</td></tr>
            ) : (
              enquiries.map((enquiry) => (
                <tr key={enquiry.enq_id}>
                  <td>{enquiry.name}</td>
                  <td>{enquiry.company_name}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.phone}</td>
                  <td>{enquiry.location}</td>
                  <td>{getProgress(enquiry.message)}</td>
                  <td>{formatDate(enquiry.created_at)}</td>
                  <td>
                    <Link to={`/enquiries/${enquiry.enq_id}`} className="icon-btn-small" title="View Details">
                      <Eye size={16} />
                    </Link>
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

export default EnquiryList;
