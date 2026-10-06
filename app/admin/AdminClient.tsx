"use client";
import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, FileText, MessageSquare, LogOut } from "lucide-react";

export function AdminShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true")
      router.replace("/admin/login");
    else setReady(true);
  }, [router]);
  if (!ready) return <div className="admin-content">Loading...</div>;
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("adminUser") || "{}")
      : {};
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>
            BRAND <span>MINDZ</span>
          </h2>
          <p>ADMIN PANEL</p>
        </div>
        <nav className="admin-nav">
          <Link className={path === "/admin" ? "active" : ""} href="/admin">
            <LayoutDashboard />
            <span>Dashboard</span>
          </Link>
          <Link
            className={path.startsWith("/admin/blogs") ? "active" : ""}
            href="/admin/blogs"
          >
            <FileText />
            <span>Blogs</span>
          </Link>
          <Link
            className={path.startsWith("/admin/enquiries") ? "active" : ""}
            href="/admin/enquiries"
          >
            <MessageSquare />
            <span>Enquiries</span>
          </Link>
        </nav>
      </aside>
      <div className="admin-main">
        <header className="admin-topbar">
          <input className="admin-search" placeholder="Search..." />
          <div className="admin-user">
            <span>
              {user.name || "Admin User"}
              <small className="admin-muted">
                {" "}
                · {user.user_name || "admin"}
              </small>
            </span>
            <button
              className="admin-btn"
              onClick={() => {
                localStorage.clear();
                router.replace("/admin/login");
              }}
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </header>
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}

export function AdminPage({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
