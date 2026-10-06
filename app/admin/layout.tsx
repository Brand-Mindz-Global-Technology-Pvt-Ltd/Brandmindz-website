import "./admin.css";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="admin-root">{children}</section>;
}
