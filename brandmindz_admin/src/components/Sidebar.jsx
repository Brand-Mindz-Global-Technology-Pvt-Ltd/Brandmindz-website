import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, MessageSquare, Settings } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>BRAND <span>MINDZ</span></h2>
        <p>ADMIN PANEL</p>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink to="/blogs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FileText size={20} />
          <span>Blogs</span>
        </NavLink>
        
        <NavLink to="/enquiries" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <MessageSquare size={20} />
          <span>Enquiries</span>
        </NavLink>
      </nav>
      
      <div className="sidebar-footer">
        <a href="#" className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
