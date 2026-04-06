import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-lg font-bold mb-4">Sri Aurobindo Purnanga Sikhya Kendra</h3>
          <p className="text-sm opacity-80 mb-4">Dedicated to the integral development of children through the vision of Sri Aurobindo and The Mother.</p>
          <div className="flex items-center gap-2 text-sm opacity-80"><MapPin size={14} /> Rairangpur, Mayurbhanj, Odisha</div>
          <div className="flex items-center gap-2 text-sm opacity-80 mt-1"><Phone size={14} /> +91 94371 XXXXX</div>
          <div className="flex items-center gap-2 text-sm opacity-80 mt-1"><Mail size={14} /> info@sapsk.edu.in</div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about/vision-mission" className="hover:opacity-100 transition-opacity">Vision & Mission</Link></li>
            <li><Link to="/admissions/process" className="hover:opacity-100 transition-opacity">Admissions</Link></li>
            <li><Link to="/academics/curriculum" className="hover:opacity-100 transition-opacity">Curriculum</Link></li>
            <li><Link to="/gallery/photos" className="hover:opacity-100 transition-opacity">Photo Gallery</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Academics</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/integral-education/overview" className="hover:opacity-100 transition-opacity">Integral Education</Link></li>
            <li><Link to="/academics/classes-programs" className="hover:opacity-100 transition-opacity">Classes & Programs</Link></li>
            <li><Link to="/academics/examination" className="hover:opacity-100 transition-opacity">Examinations</Link></li>
            <li><Link to="/academics/calendar" className="hover:opacity-100 transition-opacity">Academic Calendar</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">School Hours</h4>
          <div className="text-sm opacity-80 space-y-2">
            <div className="flex items-start gap-2"><Clock size={14} className="mt-0.5" /> <div>Monday – Saturday<br />7:00 AM – 4:00 PM</div></div>
            <div className="flex items-start gap-2"><Clock size={14} className="mt-0.5" /> <div>Office Hours<br />9:00 AM – 5:00 PM</div></div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 py-4 text-center text-xs opacity-60">
        © 2025 Sri Aurobindo Purnanga Sikhya Kendra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
