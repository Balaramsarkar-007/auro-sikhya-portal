import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";
import { navigation, NavItem } from "@/data/navigation";
import AccessibilityPanel from "./AccessibilityPanel";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "od">("en");

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      {/* Top utility bar */}
      <div className="bg-muted border-b">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8 text-xs">
          <div className="flex items-center gap-3">
            <AccessibilityPanel />
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === "en" ? "od" : "en")} className="px-2 py-0.5 rounded border text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              {lang === "en" ? "ଓଡ଼ିଆ" : "English"}
            </button>
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-1 rounded hover:bg-primary/10">
              <Search size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="bg-card border-b px-4 py-2">
          <div className="max-w-7xl mx-auto">
            <input type="text" placeholder="Search the website..." className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
      )}

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center text-primary-foreground font-display font-bold text-lg">ॐ</div>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-sm sm:text-base leading-tight text-foreground">Sri Aurobindo Purnanga</div>
            <div className="font-display text-xs sm:text-sm text-primary leading-tight">Sikhya Kendra</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navigation.map((item) => (
            <div key={item.path} className="relative group">
              <Link to={item.children ? item.children[0].path : item.path} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted">
                {item.title}
                {item.children && <ChevronDown size={14} />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-1 hidden group-hover:block z-50">
                  <div className="bg-card rounded-lg shadow-lg border py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link key={child.path} to={child.path} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t max-h-[70vh] overflow-y-auto">
          {navigation.map((item) => (
            <div key={item.path}>
              {item.children ? (
                <>
                  <button onClick={() => setOpenSubmenu(openSubmenu === item.path ? null : item.path)} className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium border-b hover:bg-muted">
                    {item.title}
                    {openSubmenu === item.path ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                  {openSubmenu === item.path && (
                    <div className="bg-muted/50">
                      {item.children.map((child) => (
                        <Link key={child.path} to={child.path} onClick={() => setMobileOpen(false)} className="block px-8 py-2.5 text-sm border-b hover:text-primary">
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.path} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium border-b hover:bg-muted hover:text-primary">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
