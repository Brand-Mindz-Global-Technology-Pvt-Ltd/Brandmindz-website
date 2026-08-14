import { useState, useEffect } from 'react';
import { Users, FileText, MessageSquare, TrendingUp } from 'lucide-react';
import './Dashboard.css';

const BASE_ENV = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3007';
const API_BASE_URL_BLOG = BASE_ENV.endsWith('/blog') ? BASE_ENV : `${BASE_ENV}/blog`;
const API_BASE_URL_CONTACT = BASE_ENV.replace(/\/blog$/, '') + '/contact';

const StatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="stat-card card">
    <div className="stat-header">
      <div className="stat-info">
        <p className="stat-title">{title}</p>
        <h3 className="stat-value">{value}</h3>
      </div>
      <div className="stat-icon">
        <Icon size={24} />
      </div>
    </div>
    <div className={`stat-trend ${trend >= 0 ? 'positive' : 'negative'}`}>
      <TrendingUp size={16} />
      <span>{Math.abs(trend)}% from last month</span>
    </div>
  </div>
);

const Dashboard = () => {
  const [blogsCount, setBlogsCount] = useState(0);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [blogRes, enqRes] = await Promise.all([
        fetch(`${API_BASE_URL_BLOG}/getBlog`),
        fetch(`${API_BASE_URL_CONTACT}/getEnq`)
      ]);
      
      const blogData = await blogRes.json();
      const enqData = await enqRes.json();

      if (blogData.msg === 'Success') {
        setBlogsCount(blogData.data.length);
      }
      
      if (enqData.msg === 'Success') {
        setEnquiries(enqData.data);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
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

  const recentEnquiries = enquiries.slice(0, 5);

  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard Overview</h1>
      
      <div className="stats-grid">
        <StatCard title="Total Blogs" value={loading ? '...' : blogsCount} icon={FileText} trend={12} />
        <StatCard title="Total Enquiries" value={loading ? '...' : enquiries.length} icon={MessageSquare} trend={5} />
        <StatCard title="New Visitors" value="1,240" icon={Users} trend={-2} />
      </div>
      
      <div className="dashboard-content">
        <div className="card recent-enquiries">
          <h2 className="section-title">Recent Enquiries</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="4" style={{textAlign: 'center'}}>Loading...</td></tr>
              ) : recentEnquiries.length === 0 ? (
                <tr><td colSpan="4" style={{textAlign: 'center'}}>No recent enquiries</td></tr>
              ) : (
                recentEnquiries.map(enq => (
                  <tr key={enq.enq_id}>
                    <td>{enq.name}</td>
                    <td>{enq.company_name}</td>
                    <td>{enq.email}</td>
                    <td>{formatDate(enq.created_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
