"use client";
import {
  FormEvent,
  useEffect,
  useRef,
  useState,
  useCallback,
  type ClipboardEvent,
  type MouseEvent,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import {
  Link as LinkIcon,
  Unlink,
  ExternalLink,
  Bold,
  Italic,
  Code,
  X,
} from "lucide-react";
import { AdminPage } from "./AdminClient";
import { blogApi, storageUrl, type Blog } from "@/lib/admin-api";

const fields = [
  "title",
  "short_description",
  "slug",
  "category",
  "meta_title",
  "meta_description",
  "tags",
] as const;

const limits: Record<string, number> = {
  title: 200,
  short_description: 500,
  slug: 200,
  meta_title: 60,
  meta_description: 160,
  tags: 500,
  content: 100000,
};

function formatInitialContent(raw: string): string {
  if (!raw) return "";
  const trimmed = raw.trim();
  // If it already contains HTML tags (<p>, <div>, <a>, <br>, etc.), keep as is
  if (/<(p|div|br|a|h[1-6]|ul|ol|li)\b/i.test(trimmed)) {
    return trimmed;
  }
  // If legacy plain text with newlines, convert to <p> elements
  return trimmed
    .split(/\r?\n\r?\n/)
    .filter(Boolean)
    .map((paragraph) => `<p>${paragraph.replace(/\r?\n/g, "<br>")}</p>`)
    .join("\n\n");
}

function serializeContent(element: HTMLElement): string {
  const text = element.textContent?.trim() || "";
  const hasElements = element.querySelector("a, img, iframe, p, div, br");
  if (!text && !hasElements) return "";

  const children = Array.from(element.childNodes);
  if (children.length === 0) return "";

  const blocks: string[] = [];
  children.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      if (/^(P|DIV|H[1-6]|UL|OL|BLOCKQUOTE)$/i.test(el.tagName)) {
        blocks.push(el.outerHTML);
      } else {
        blocks.push(`<p>${el.outerHTML}</p>`);
      }
    } else if (node.nodeType === Node.TEXT_NODE) {
      const t = node.textContent?.trim();
      if (t) {
        blocks.push(`<p>${t}</p>`);
      }
    }
  });

  return blocks.length > 0 ? blocks.join("\n\n") : element.innerHTML;
}

interface BlogContentEditorProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
}

function BlogContentEditor({
  value,
  onChange,
  maxLength = 100000,
  placeholder = "Write or paste blog paragraphs here. Highlight any word or sentence to insert or edit hyperlinks...",
}: BlogContentEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const savedRangeRef = useRef<Range | null>(null);
  const isInitializedRef = useRef(false);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [linkNewTab, setLinkNewTab] = useState(true);

  const [isInsideLink, setIsInsideLink] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState<HTMLAnchorElement | null>(null);
  const [showSource, setShowSource] = useState(false);
  const [stats, setStats] = useState({ words: 0, links: 0 });
  const [isEmpty, setIsEmpty] = useState(true);

  // Set default paragraph separator to standard <p>
  useEffect(() => {
    try {
      document.execCommand("defaultParagraphSeparator", false, "p");
    } catch {}
  }, []);

  const saveSelection = useCallback(() => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0 && editorRef.current) {
      const range = sel.getRangeAt(0);
      if (editorRef.current.contains(range.commonAncestorContainer)) {
        savedRangeRef.current = range.cloneRange();
      }
    }
  }, []);

  const restoreSelection = useCallback(() => {
    const sel = window.getSelection();
    if (sel && savedRangeRef.current) {
      sel.removeAllRanges();
      sel.addRange(savedRangeRef.current);
    }
  }, []);

  const getSelectedAnchor = useCallback(
    (range?: Range | null): HTMLAnchorElement | null => {
      const r = range || savedRangeRef.current;
      if (!r || !editorRef.current) return null;
      let node: Node | null = r.commonAncestorContainer;
      if (node.nodeType === Node.TEXT_NODE) {
        node = node.parentNode;
      }
      while (node && node !== editorRef.current) {
        if (node instanceof HTMLAnchorElement) {
          return node;
        }
        node = node.parentNode;
      }
      return null;
    },
    [],
  );

  const updateActiveState = useCallback(() => {
    saveSelection();
    const anchor = getSelectedAnchor();
    setIsInsideLink(Boolean(anchor));
    setActiveAnchor(anchor);

    if (editorRef.current) {
      const text = editorRef.current.textContent || "";
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const links = editorRef.current.querySelectorAll("a").length;
      setStats({ words, links });
      setIsEmpty(!text.trim() && !editorRef.current.querySelector("a, img"));
    }
  }, [saveSelection, getSelectedAnchor]);

  const syncToParent = useCallback(() => {
    if (!editorRef.current) return;
    const serialized = serializeContent(editorRef.current);
    onChange(serialized);
    updateActiveState();
  }, [onChange, updateActiveState]);

  // Initial populate or update when editing an existing blog
  useEffect(() => {
    if (!editorRef.current) return;
    if (!isInitializedRef.current && value) {
      editorRef.current.innerHTML = formatInitialContent(value);
      isInitializedRef.current = true;
      updateActiveState();
    }
  }, [value, updateActiveState]);

  // Handle focus when modal opens
  useEffect(() => {
    if (isLinkModalOpen) {
      const timer = setTimeout(() => {
        urlInputRef.current?.focus();
        urlInputRef.current?.select();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isLinkModalOpen]);

  const openLinkModal = () => {
    saveSelection();
    const anchor = getSelectedAnchor();
    if (anchor) {
      setActiveAnchor(anchor);
      setLinkUrl(anchor.getAttribute("href") || "");
      setLinkText(anchor.textContent || "");
      setLinkNewTab(anchor.getAttribute("target") === "_blank");
    } else {
      setActiveAnchor(null);
      setLinkUrl("");
      const selectedText = savedRangeRef.current ? savedRangeRef.current.toString() : "";
      setLinkText(selectedText);
      setLinkNewTab(true);
    }
    setIsLinkModalOpen(true);
  };

  const handleApplyLink = () => {
    const trimmedUrl = linkUrl.trim();
    if (!trimmedUrl) {
      handleRemoveLink();
      setIsLinkModalOpen(false);
      return;
    }

    // Ensure valid protocol for external/internal links
    let finalUrl = trimmedUrl;
    if (!/^(https?:\/\/|mailto:|tel:|#|\/)/i.test(finalUrl)) {
      finalUrl = `https://${finalUrl}`;
    }

    if (activeAnchor) {
      // Editing existing link
      activeAnchor.setAttribute("href", finalUrl);
      if (linkText.trim()) {
        activeAnchor.textContent = linkText.trim();
      }
      if (linkNewTab) {
        activeAnchor.setAttribute("target", "_blank");
        activeAnchor.setAttribute("rel", "noopener noreferrer");
      } else {
        activeAnchor.removeAttribute("target");
        activeAnchor.removeAttribute("rel");
      }
    } else {
      // Inserting new link
      restoreSelection();
      const sel = window.getSelection();
      const range = savedRangeRef.current;

      if (range && editorRef.current) {
        const a = document.createElement("a");
        a.href = finalUrl;
        if (linkNewTab) {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }

        if (range.collapsed) {
          a.textContent = linkText.trim() || finalUrl;
          range.insertNode(a);
        } else {
          if (linkText && linkText !== range.toString()) {
            a.textContent = linkText;
            range.deleteContents();
            range.insertNode(a);
          } else {
            const contents = range.extractContents();
            a.appendChild(contents);
            range.insertNode(a);
          }
        }

        range.setStartAfter(a);
        range.setEndAfter(a);
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }

    syncToParent();
    setIsLinkModalOpen(false);
  };

  const handleRemoveLink = () => {
    saveSelection();
    const anchor = activeAnchor || getSelectedAnchor();
    if (anchor && anchor.parentNode) {
      const parent = anchor.parentNode;
      while (anchor.firstChild) {
        parent.insertBefore(anchor.firstChild, anchor);
      }
      parent.removeChild(anchor);
      parent.normalize();
    } else {
      restoreSelection();
      document.execCommand("unlink", false);
    }
    syncToParent();
    setIsLinkModalOpen(false);
  };

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
    syncToParent();
  };

  const toggleSourceView = () => {
    if (showSource) {
      // Switching from source back to visual editor
      if (editorRef.current) {
        editorRef.current.innerHTML = formatInitialContent(value);
      }
      setShowSource(false);
      setTimeout(updateActiveState, 50);
    } else {
      // Switching to HTML source view
      if (editorRef.current) {
        const serialized = serializeContent(editorRef.current);
        onChange(serialized);
      }
      setShowSource(true);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const plain = e.clipboardData.getData("text/plain");
    const html = e.clipboardData.getData("text/html");

    if (html && /<(p|div|br|a|h[1-6]|ul|ol|li)\b/i.test(html)) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const unsafe = doc.querySelectorAll("script, style, meta, link, iframe, object, embed");
      unsafe.forEach((el) => el.remove());

      doc.querySelectorAll("a").forEach((a) => {
        if (!a.getAttribute("target")) a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      });

      const cleanHtml = doc.body.innerHTML;
      document.execCommand("insertHTML", false, cleanHtml);
    } else if (plain) {
      const paragraphs = plain
        .split(/\r?\n\r?\n/)
        .map((p) => p.trim())
        .filter(Boolean);

      if (paragraphs.length > 1) {
        const paragraphHtml = paragraphs
          .map((p) => `<p>${p.replace(/\r?\n/g, "<br>")}</p>`)
          .join("");
        document.execCommand("insertHTML", false, paragraphHtml);
      } else {
        const singleHtml = plain.replace(/\r?\n/g, "<br>");
        document.execCommand("insertHTML", false, singleHtml);
      }
    }

    syncToParent();
  };

  const handleEditorClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");
    if (anchor) {
      e.preventDefault();
    }
    updateActiveState();
  };

  const handleModalKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleApplyLink();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsLinkModalOpen(false);
    }
  };

  return (
    <div className="admin-editor-container">
      {/* Hyperlink & Formatting Toolbar */}
      <div className="admin-editor-toolbar">
        {/* Insert / Edit Link Button */}
        <button
          type="button"
          className={`admin-toolbar-btn ${isInsideLink ? "active" : ""}`}
          title={isInsideLink ? "Edit Hyperlink" : "Insert Hyperlink (Ctrl+K)"}
          onMouseDown={(e) => e.preventDefault()}
          onClick={openLinkModal}
          disabled={showSource}
        >
          <LinkIcon size={14} />
          <span>{isInsideLink ? "Edit Link" : "Insert Link"}</span>
        </button>

        {/* Remove Link Button */}
        <button
          type="button"
          className="admin-toolbar-btn"
          title="Remove Hyperlink"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleRemoveLink}
          disabled={showSource || !isInsideLink}
        >
          <Unlink size={14} />
          <span>Remove Link</span>
        </button>

        <span className="admin-toolbar-divider" />

        {/* Bold & Italic quick formatting */}
        <button
          type="button"
          className="admin-toolbar-btn"
          title="Bold"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => handleFormat("bold")}
          disabled={showSource}
        >
          <Bold size={14} />
        </button>

        <button
          type="button"
          className="admin-toolbar-btn"
          title="Italic"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => handleFormat("italic")}
          disabled={showSource}
        >
          <Italic size={14} />
        </button>

        {/* Toggle HTML Source View */}
        <button
          type="button"
          className={`admin-toolbar-btn admin-toolbar-mode-btn ${showSource ? "active" : ""}`}
          title={showSource ? "Switch to Visual Editor" : "View / Edit HTML Source"}
          onClick={toggleSourceView}
        >
          <Code size={14} />
          <span>{showSource ? "Visual Editor" : "HTML View"}</span>
        </button>
      </div>

      {/* Floating Link Modal / Popover */}
      {isLinkModalOpen && (
        <>
          <div
            className="admin-link-modal-overlay"
            onClick={() => setIsLinkModalOpen(false)}
          />
          <div
            className="admin-link-modal"
            role="dialog"
            aria-label="Link Settings"
            onKeyDown={handleModalKeyDown}
          >
            <div className="admin-link-modal-header">
              <h4 className="admin-link-modal-title">
                {activeAnchor ? "Edit Hyperlink" : "Insert Hyperlink"}
              </h4>
              <button
                type="button"
                className="admin-link-close-btn"
                onClick={() => setIsLinkModalOpen(false)}
                title="Close"
              >
                <X size={15} />
              </button>
            </div>

            <div className="admin-link-field">
              <label>Destination URL</label>
              <input
                ref={urlInputRef}
                type="text"
                className="admin-link-input"
                placeholder="https://example.com/target-page"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
            </div>

            <div className="admin-link-field">
              <label>Display Text</label>
              <input
                type="text"
                className="admin-link-input"
                placeholder="Text to display"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
              />
            </div>

            <label className="admin-link-checkbox-row">
              <input
                type="checkbox"
                checked={linkNewTab}
                onChange={(e) => setLinkNewTab(e.target.checked)}
              />
              <span>Open in new tab (target=&quot;_blank&quot;)</span>
            </label>

            <div className="admin-link-actions">
              {activeAnchor && (
                <button
                  type="button"
                  className="admin-link-btn-remove"
                  onClick={handleRemoveLink}
                >
                  Remove Link
                </button>
              )}
              <button
                type="button"
                className="admin-link-btn-cancel"
                onClick={() => setIsLinkModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="admin-link-btn-save"
                onClick={handleApplyLink}
              >
                {activeAnchor ? "Update Link" : "Apply Link"}
              </button>
            </div>
          </div>
        </>
      )}

      {/* Visual Editor vs HTML Source */}
      {showSource ? (
        <textarea
          className="admin-editor-source"
          maxLength={maxLength}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="<p>Blog paragraph HTML...</p>"
        />
      ) : (
        <div
          ref={editorRef}
          className="admin-editor-content"
          contentEditable
          suppressContentEditableWarning
          data-placeholder={placeholder}
          data-empty={isEmpty}
          onInput={syncToParent}
          onPaste={handlePaste}
          onClick={handleEditorClick}
          onKeyUp={updateActiveState}
          onMouseUp={updateActiveState}
          onSelect={updateActiveState}
        />
      )}

      {/* Editor Footer / Stats */}
      <div className="admin-editor-footer">
        <div className="admin-editor-stats">
          <span>{stats.words} words</span>
          <span>•</span>
          <span>{stats.links} {stats.links === 1 ? "hyperlink" : "hyperlinks"}</span>
        </div>
        <div>
          <span>{value.length} / {maxLength} chars</span>
        </div>
      </div>
    </div>
  );
}

export default function BlogForm({
  params,
}: {
  params?: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [id, setId] = useState("");
  const edit = Boolean(id);
  const [form, setForm] = useState<Blog>({
    blog_id: 0,
    title: "",
    short_description: "",
    slug: "",
    meta_title: "",
    meta_description: "",
    content: "",
    category: "",
    tags: "",
    image: "",
    views: 0,
    author_id: 1,
  });
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (params)
      void params.then(({ id: value }) => {
        setId(value);
        void blogApi.byId(value).then((r) => {
          const b = r.data?.[0];
          if (b) {
            setForm((f) => ({ ...f, ...b }));
            if (b.image) setPreview(storageUrl(b.image));
          }
        });
      });
  }, [params]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.content || !form.content.trim()) {
      alert("Please enter blog content.");
      return;
    }
    setBusy(true);
    try {
      let image = form.image || "";
      if (file) {
        if (file.size > 5 * 1024 * 1024)
          throw Error("Featured image must be 5 MB or smaller.");
        image = (await blogApi.upload(file)).data?.fileName || image;
      }
      await blogApi.save(
        { ...form, image, ...(edit ? { blog_id: id } : {}) },
        edit,
      );
      router.push("/admin/blogs");
    } catch (e) {
      alert(e instanceof Error ? e.message : "Unable to save blog");
    } finally {
      setBusy(false);
    }
  };

  return (
    <AdminPage>
      <div className="admin-header">
        <h1 className="admin-title">
          {edit ? "Edit Blog" : "Create New Blog"}
        </h1>
      </div>
      <div className="admin-card">
        <form className="admin-form" onSubmit={submit}>
          {fields.map((k) => (
            <label key={k}>
              {k.replaceAll("_", " ")}
              <input
                required={k === "title"}
                maxLength={limits[k]}
                value={String(form[k] || "")}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [k]: e.target.value }))
                }
              />
            </label>
          ))}

          <label>
            Featured image
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setFile(f);
                  setPreview(URL.createObjectURL(f));
                }
              }}
            />
            {preview && (
              <img className="admin-preview" src={preview} alt="Preview" />
            )}
          </label>

          {/* Rich Content Editor with Hyperlink Functionality */}
          <div className="admin-field-content">
            <div className="admin-content-label-row">
              <span>Content</span>
              <span className="admin-content-hint">
                Select any text to insert, edit, or remove hyperlinks
              </span>
            </div>
            <BlogContentEditor
              value={form.content || ""}
              onChange={(content) => setForm((f) => ({ ...f, content }))}
              maxLength={limits.content}
              required
            />
          </div>

          <button className="admin-btn" disabled={busy}>
            {busy ? "Saving..." : edit ? "Update Blog" : "Publish Blog"}
          </button>
        </form>
      </div>
    </AdminPage>
  );
}
