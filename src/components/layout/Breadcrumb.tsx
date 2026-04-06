import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-6 flex-wrap">
      <Link to="/" className="hover:text-primary transition-colors">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <ChevronRight size={14} className="mx-1.5" />
          {item.path ? (
            <Link to={item.path} className="hover:text-primary transition-colors">{item.label}</Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
