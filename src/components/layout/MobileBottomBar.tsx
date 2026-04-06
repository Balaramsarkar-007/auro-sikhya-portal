import { Phone, MapPin, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card border-t shadow-lg">
      <div className="grid grid-cols-3">
        <a href="tel:+919437100000" className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground hover:text-primary transition-colors">
          <Phone size={18} />
          Call
        </a>
        <a href="https://maps.google.com/?q=Rairangpur+Odisha" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground hover:text-primary transition-colors">
          <MapPin size={18} />
          Directions
        </a>
        <Link to="/contact" className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground hover:text-primary transition-colors">
          <MessageSquare size={18} />
          Enquiry
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomBar;
