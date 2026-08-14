import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, Search, LogOut, ChevronDown } from 'lucide-react';
import './Topbar.css';

const Topbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Read logged-in user from localStorage
  const storedUser = localStorage.getItem('adminUser');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    localStorage.removeItem('isLoggedIn');
    navigate('/login', { replace: true });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={20} className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      
      <div className="topbar-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="badge-dot"></span>
        </button>
        
        <div className="user-profile-wrapper" ref={dropdownRef}>
          <div className="user-profile" onClick={() => setShowDropdown(!showDropdown)}>
            <div className="avatar">
              <User size={20} />
            </div>
            <div className="user-info">
              <span className="user-name">{user?.name || 'Admin User'}</span>
              <span className="user-role">{user?.user_name || 'admin'}</span>
            </div>
            <ChevronDown size={16} className={`dropdown-chevron ${showDropdown ? 'open' : ''}`} />
          </div>

          {showDropdown && (
            <div className="profile-dropdown">
              <button className="dropdown-item logout-item" onClick={handleLogout}>
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;

