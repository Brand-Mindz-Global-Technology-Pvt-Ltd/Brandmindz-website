"use client";
import { useEffect, useState } from "react";
import { AdminPage } from "./AdminClient";
import { blogApi, enquiryApi, type Enquiry } from "@/lib/admin-api";
export default function Dashboard() {
  const [blogs, setBlogs] = useState(0);
  const [enqs, setEnqs] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Promise.all([blogApi.list(), enquiryApi.list()])
      .then(([b, e]) => {
        setBlogs(b.data?.length || 0);
        setEnqs(e.data || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return (
    <AdminPage>
      <div className="admin-header">
        <h1 className="admin-title">Dashboard Overview</h1>
      </div>
      <div className="admin-grid">
        <div className="admin-stat">
          Total Blogs<strong>{loading ? "..." : blogs}</strong>
        </div>
        <div className="admin-stat">
          Total Enquiries<strong>{loading ? "..." : enqs.length}</strong>
        </div>
        <div className="admin-stat">
          New Visitors<strong>1,240</strong>
        </div>
      </div>
      <div className="admin-card">
        <h2>Recent Enquiries</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {enqs.slice(0, 5).map((e) => (
              <tr key={e.enq_id}>
                <td>{e.name}</td>
                <td>{e.company_name}</td>
                <td>{e.email}</td>
                <td>{e.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminPage>
  );
}
