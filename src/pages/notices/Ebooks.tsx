import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BookOpen, Download } from "lucide-react";

const Ebooks = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Notice & Publications", path: "/notices/announcements" }, { label: "eBooks" }]} />
      <h1 className="page-title">eBooks</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground">A curated collection of digital books and reading materials available for students, parents, and teachers. These resources support and enrich the integral education curriculum.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { title: "The Life Divine — Selected Chapters", author: "Sri Aurobindo", pages: "120 pages" },
          { title: "On Education — Compilation", author: "The Mother", pages: "85 pages" },
          { title: "Integral Education — A Handbook", author: "School Publication", pages: "64 pages" },
          { title: "Stories for Children — Value Tales", author: "School Publication", pages: "48 pages" },
          { title: "Science Activity Book — Class V-VIII", author: "Science Dept.", pages: "72 pages" },
          { title: "Sanskrit Primer for Beginners", author: "Language Dept.", pages: "56 pages" },
        ].map((book, i) => (
          <div key={i} className="content-card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen size={24} className="text-accent shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">{book.title}</h3>
                <p className="text-xs text-muted-foreground">By {book.author} — {book.pages}</p>
              </div>
            </div>
            <button className="flex items-center gap-1 text-sm text-primary hover:text-primary/80"><Download size={14} /></button>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default Ebooks;
