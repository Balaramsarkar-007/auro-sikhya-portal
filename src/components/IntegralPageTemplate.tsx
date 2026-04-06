import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { ReactNode } from "react";

interface IntegralPageProps {
  title: string;
  icon: ReactNode;
  intro: string;
  sections: { heading: string; content: string }[];
  quote?: { text: string; author: string };
}

const IntegralPageTemplate = ({ title, icon, intro, sections, quote }: IntegralPageProps) => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Integral Education", path: "/integral-education/overview" }, { label: title }]} />
      <h1 className="page-title">{title}</h1>
      <div className="content-card mb-8 flex items-start gap-4">
        <div className="shrink-0">{icon}</div>
        <p className="text-muted-foreground">{intro}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {sections.map((s, i) => (
          <div key={i} className="content-card">
            <h3 className="font-display text-lg font-semibold mb-2">{s.heading}</h3>
            <p className="text-muted-foreground text-sm">{s.content}</p>
          </div>
        ))}
      </div>
      {quote && (
        <div className="content-card bg-secondary border-none text-center">
          <blockquote className="font-display text-lg italic max-w-2xl mx-auto">"{quote.text}"</blockquote>
          <cite className="block mt-2 text-muted-foreground text-sm">— {quote.author}</cite>
        </div>
      )}
    </div>
  </Layout>
);

export default IntegralPageTemplate;
