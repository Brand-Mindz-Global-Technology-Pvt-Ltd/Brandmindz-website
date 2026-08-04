import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";

const caseStudyFiles: Record<string, string> = {
  "performance-marketing-case-studies": "performance-marketing-case-studies.txt",
  "mathi-packaging-case-study": "mathi-packaging-case-study.txt",
  "dic-tenkasi-case-study": "dic-tenkasi-case-study.txt",
};

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const fileName = caseStudyFiles[slug];

  if (!fileName) {
    notFound();
  }

  const content = await fs.readFile(
    path.join(process.cwd(), "public", "case-studies-content", fileName),
    "utf8",
  );

  return (
    <main className="bm-cs-showcase">
      <article className="bm-cs-container">
        <Link
          href="/case-studies"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "40px",
            padding: "14px 24px",
            borderRadius: "999px",
            background: "#181818",
            color: "#ffffff",
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: 1,
            textDecoration: "none",
          }}
        >
          <span aria-hidden="true">←</span>
          Back to Case Studies
        </Link>

        <pre
          style={{
            margin: 0,
            whiteSpace: "pre-wrap",
            overflowWrap: "anywhere",
            font: "inherit",
            fontSize: "clamp(18px, 1.25vw, 23px)",
            lineHeight: 1.8,
          }}
        >
          {content}
        </pre>
      </article>
    </main>
  );
}
