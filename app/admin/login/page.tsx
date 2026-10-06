"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/admin-api";
export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const r = await login(user, pass);
      if (r.msg === "Success") {
        localStorage.setItem("adminUser", JSON.stringify(r.data || {}));
        localStorage.setItem("isLoggedIn", "true");
        router.replace("/admin");
      } else setError(r.msg || "Invalid username or password");
    } catch (err) {
      const status = err && typeof err === "object" && "status" in err ? Number(err.status) : 0;
      setError(status === 400 ? "Invalid login request." : status === 401 ? "Invalid username or password." : status === 403 ? "You are not authorized to access the admin." : status === 503 ? "The authentication service is unavailable." : status >= 500 ? "The authentication server encountered an error." : err instanceof Error ? err.message : "Unable to connect to the authentication server.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="admin-login">
      <form className="admin-login-card" onSubmit={submit}>
        <h1>Welcome Back</h1>
        <p className="admin-muted">Sign in to BrandMindz Admin</p>
        {error && <div className="admin-error">{error}</div>}
        <div className="admin-field">
          <label>Username</label>
          <input
            className="admin-input"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="admin-field">
          <label>Password</label>
          <input
            className="admin-input"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <button className="admin-btn" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
